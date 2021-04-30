---
cssclass: split-pdf
---

## Development

Development of the model was done in 3 phases. First a prototype was written in Rust, a new language similar to C, which however much more expressive and not constrained by its age in the same way as C leading to a better developer experience. This was done to help map out the program without having to directly concern ourselves with C's more primitive program and memory model. This step will not be discussed much as while it was exceptionally useful in designing the program, it is not in the scope of the Coursework itself.

In the second stage this Rust code was translated into C and additional features were added on as their need became apparent.  Finally the program was subjected to both batch and specific testing, to ensure it functioned correctly.

Below we will go through the overall structure of the program; layout pseudocode its important algorithms; and discuss any non-trivial choices or changes that were made to the program as it was developed.

```ad-info
title: A note on pseudocode and code excerpts.

The pseudocode presented is high level generic, ignoring things such as C's lack of proper array support. In addition all code presented inline in the document is in excerpt form, it is presented without the relevant `#includes`, supporting code, and may be sourced from multiple `.c` files.
```

While the majority of the questions involve a 2D grid, the code was written to handle 3D scenarios, with 2D grids being implemented as single plane in a 3D grid, this is discussed later on in the report.

### Program Structure

The program is split across multiple files to improve readability and uses header files to present a clean interface between them. There are two files with a `main` method:

- Primarily `main.c` for the `Coursework_2_c` target containing all of the questions (questions in `entrypoints/questions.c`)
- A secondary `main_data_collection.c` which was separated out to allow for easier data collection in the stats section.

The program is split into three mostly separate components. The `Grid` (in `grid.c`) which handles memory for the 3D grid of cells, as well as their different varieties, with the corresponding rules for current propagation.

The `ClusterFinder` (in `cluster_finder.c`) which performs the actual cluster generation and determines if a path has been formed. It holds an immutable reference to the `Grid` that it operates on, and takes in either a pre-chosen, or random grid position to use as an initial position. It also maintains a number of lists which are used in the Cluster Finding algorithm.

The *runner* / entrypoint (`main.c` & `entrypoints/questions.c`), aka the code which brings everything together, generating a number of `Grid`s, submitting them each to `ClusterFinder`s then collecting stats. Each question part has its own entrypoint, in addition to a couple used for testing and data-collection for statistical work.

### Main Algorithms

There are 2 main algorithms in the program.

1. Grid Filling, involving uniform random number generation.
2. Cluster Finding in 2D and 3D.

#### Grid Filling

While Grid initialisation is relatively trivial, simply involving the validation of sizes, and the allocation of sufficient memory (see the `allocateGrid3D` and `allocateGrid2D` functions in `grid.c`), filling the grid is, slightly, less so. As per the spec each grid should be equally likely to be generated. To achieve this we return to the the tradition which underlies almost all of mathematics and related disciplines, we simplify the problem into a real number.

While conceptually a Grid is a 3D object, in memory it is stored as a contiguous array in memory, similar to how is described in the graphic below. These indexes are known as the *linear index* of the cell.

![[ravel-c-order.png]]

> Source: https://ajcr.net/stride-guide-part-2/
> Credits: Alex Riley

Hence we choose a uniform index in this contiguous array to place the conductor, allowing us to avoid biasing any particular point. Pseudocode for this is presented below

```ad-pseudocode
title: Pseudocode&colon; Grid Filling

- Given
	- A Grid to fill, $g$.
	- The total number of Conductors (both Standard and Super Conductors) desired, $N$.
	- The probability of a given Conductor begin a Super Conductor, $p$.
- Ensure that the total number of conductors is less than the number of cells in the grid $g$.
- First set all cells to Insulator.
- Then: While the number of conductors placed within the grid, $n$, is less than the number desired, $N$.
	- Generate a uniform random integer $r$ between $0$ and the number of cells in the grid
	- If the cell at *linear index* $r$ is an insulator
		- With probability $p$ set the cell to be a Super Conductor.
		- Else set it to be a Standard Conductor.
```

Implemented in code

```c
int randomUniform(int r0, int r1) {  
    return (rand() % (r1 - r0)) + r0;  
}

void fillGrid(Grid grid, int n, double pSuper) {
    assert(0 <= n && n <= grid.cells);

    int nn = 0;

    // Set all elements to be Insulators, allows us to re-use the allocation cleanly and ensures the memory at `data`
    // is in a valid state.
    memset(grid.data, INSULATOR, sizeof(CellType) * grid.cells);

    while (nn < n) {
        int pos = randomUniform(0, grid.cells);
        if (grid.data[pos] == INSULATOR) {
            if (randomBool(pSuper)) {
                grid.data[pos] = SUPER_CONDUCTOR;
            } else {
                grid.data[pos] = CONDUCTOR;
            }

            nn++;
        }
    }
}
```

A note should be made of the method used to generate the uniform random number $r$, the `int randomUniform(int r0, int r1)` function. While it is assumed this number is uniformly distributed, and in fact random, there are a number of factors that make this less than fully accurate (however still sufficient for our needs). These include both low entropy in the random number generator, especially in the lower bits targeted by `rand()`, and further by the modulus operation. In addition to the modulus operation itself begin non-uniform in its output.[^1] However in 

[^1]: See https://codereview.stackexchange.com/questions/159604/uniform-random-numbers-in-an-integer-interval-in-c for further reference.

#### Cluster Finding

Cluster finding is the main point of conceptual complexity in the program (and as we will find out, time complexity also). It is split into 5 parts,

1. Initialisation with a random or pre-chosen position.
3. A function performing single search iteration.
4. The search loop.
5. A function to determine the connected positions to a given cell 
7. A predicate to determine if the cluster forms a conductive path across the Grid.

The algorithm maintains the following three collections as state:

- A set of *unique* points which are within the cluster, henceforth known as ***Cluster Points***.
- A set of *unique* points which have just been added to the cluster and thus must be searched on the next iteration, henceforth known as the ***Process Queue***.
	- This set is defined as a strict subset of the ***Cluster Points***.
- A third working list of points used to avoid reallocation of a large array, known as the ***Found List***

These three collections are implemented using the `PosList` struct discussed below.

##### Position List, `PosList`

C does not have proper array support, instead relying on pointer arithmetic, which is much less ergonomic to work with,  requiring passing both the "array" pointer, as well as a length (as well as an implicit promise of sufficient capacity). Instead for the Cluster Finding algorithm we implemented a cheap and dirty position List object, modeled after Rust's `Vec<T>`, with the following fields:

- `data`, a pointer to the backing memory allocation, of at least `sizeof(Pos) * capacity`.
- `length`, the current number of elements the list.
- `capacity`, maximum number of elements that can fit in the memory allocation.

And supporting the following operations:

- Memory management including allocation and cleanup.
- Printing for debugging purposes.
- Appending, with possible reallocation if the current memory allocation is not large enough to hold the new array.

The code of this is presented below,

```c
typedef struct PosList {
    Pos* data;
    int length;
    int capacity;
} PosList;

PosList allocPosList(int capacity) {
    assert(capacity > 0);

    return (PosList) {
            .length = 0,
            .capacity = capacity,
            .data = malloc(sizeof(Pos) * capacity)
    };
}

void freePosList(PosList list) {
    free(list.data);
}

void printPosList(char *prefix, PosList const *list) {
    for (int i = 0; i < list->length; ++i) {
        printf("%s(%d, %d)\n", prefix, list->data[i].x, list->data[i].y);
    }
}

// Append Pos to PosList, updating the length, re-allocating if need be.
void appendToPosList(PosList *list, Pos pos) {
    // If a PosList is too small, reallocate, double in size.
    if (list->length == list->capacity) {
        list->data = realloc(list->data, sizeof(Pos) * list->capacity * 2);
        list->capacity = list->capacity * 2;
    }

    list->data[list->length++] = pos;
}
```

Note that this is a very paired down List implementation, only implementing needed features, and missing many of the niceties one would find in a standard library.

##### Initialisation

```ad-pseudocode
- Given a Grid $g$.
- Generate an Initial Position $(x, y, z)$ uniformly from the set of possible positions in the grid.
- If this position contains an Insulator, continue generating a new position until an insulator is found (or we have failed sufficent times)
- Initialise the set of ***Cluster Points***, the ***Process Queue*** and the ***Found List***.
- Add the Initial Position to the set of ***Cluster Points***, the ***Process Queue***.
```

We do not explicitly search for an insulator as this would increase the time complexity of this step from constant worst case time to quadratic with the dimension.

##### Single Search Iteration

```ad-pseudocode
- For each point in the ***Process Queue*** $p$
	- Iterate through each of the directly reachable points, $q$ from this position, as determined by the [[#Reachable Cells]] function.
	- If this point $q$ is not already in the set of ***Cluster Points***, add it (ensuring uniqueness) to the set of points found this iteration, the ***Found* List**, and the set of ***Cluster Points*** itself.
	- Once this is done remove the point $p$ from the ***Process Queue***.
- Add all those points in the ***Found List*** to the ***Process Queue***.
- Empty the ***Found List***.
```

##### The Search Loop


```ad-pseudocode
- While the ***Process Queue*** is not empty (recalling that on [[#Initialisation]] it is not empty, containing the *Initial Point*).
	- Perform a [[#Single Search Iteration]] step.
```

##### Reachable Cells

Determining which cells are reachable and then connected to a given cell is done in two steps: firstly iterating all cells within $[-1, 1]$ in all dimensions, these are the reachable and from there testing if these two cells have Cell Types such that they can form a connection.

This first step is done in the `findConnected` function, pseudocode of which is shown below

```ad-pseudocode
- Given
	- A Grid $g$.
	- A Position $p$ in that grid.
- Let *cells* be an empty array which will contain the cells connected to $p$.
- If the Cell at Position $p$ in $g$ is an *Insulator*, return the empty *cells array*
- Else iterate through each position $q$ the neighbourhood of $p$.
	- The neighbourhood of $p$ being defined as the region $[-1, 1]$ cells away in all dimensions ($x, y, z$ for 3D grids, $x, y$ for 2D).
	- For each position $q$ test if the cell is connected to $p$.
	- If it is connected to $p$ then append it to the *cells array* and continue.
- Once this has completed, return the *cells array*.
```

shown below in code.

```c
/**
 * Finds all cells which are connected to the cell at `from` in `grid`.
 *
 * @returns length, the number connected cells found in the reachable neighbourhood, placed in the Pos *out array.
 * */
int findConnected(Grid grid, Pos from, Pos *out) {
    CellType fromType = cellTypeOf(grid, from);

    // An insulator cannot connect to or from anything.
    if (fromType == INSULATOR) return 0;

    int length = 0;

    // If we know this is a 2D grid, existing in a 3D, we can skip all `z` iteration.
    if (grid.z_dim == 1) {
        for (int i = -1; i <= 1; ++i) {
            for (int j = -1; j <= 1; ++j) {
                if (testCandidate(grid, from, fromType, i, j, 0)) {
                    out[length++] = offsetPosition(from, i, j, 0);
                }
            }
        }
    } else {
        for (int i = -1; i <= 1; ++i) {
            for (int j = -1; j <= 1; ++j) {
                for (int k = -1; k <= 1; ++k) {
                    if (testCandidate(grid, from, fromType, i, j, k)) {
                        out[length++] = offsetPosition(from, i, j, k);
                    }
                }
            }
        }
    }

    return length;
}
```

Here we can see explicit consideration for 2D grids, removing the need for iteration in the  $z$ dimension if we know that all values with $\Delta z \ne 1$ will be outside of the grid's bounds. This improves the efficiency of the overall Cluster Finding step in the 2D case while allowing us to still use mostly 3D code. This could be extended into the fully fledged *Chebyshev distance metric function* in future versions (the .

We then proceed to test if the cell is connected. This is done by assigning each cell in the neighbourhood a *signature*, based off the number of dimension in which it is offset from original cell. For example in the 2D case it would be,

```
2 1 2
1 0 1
2 1 2
```

we then assign a *strength* to each cell type, $0$ for Insulators, $1$ for Standard Conductors, and $2$ for Super Conductors. This method allowed for code which works, independently of the dimension in which it operates, and allows for easier extension to for instance a 3rd type of conductor in 3D which connects to corners offset in three dimensions (as they do not in the current code).

```c
bool testCandidate(Grid grid, Pos from, CellType fromType, int dx, int dy, int dz) {
    // Ignore current position
    if (dx == 0 && dy == 0 && dz == 0) return false;
    int sig = 3 - (dx == 0) - (dy == 0) - (dz == 0);

    Pos candidate = offsetPosition(from, dx, dy, dz);
    if (!positionInBounds(grid, candidate)) return false;

    CellType candidateType = cellTypeOf(grid, candidate);

    int fromStrength = strengthOf(fromType);
    int candidateStrength = strengthOf(candidateType);

    // If either are zero, no connection can form.
    if (fromStrength * candidateStrength != 0) {
        // We use the maximum function to represent bi-directionality (ie can connect if a or b can)
        int maxStrength = max(fromStrength, candidateStrength);

        if (sig <= maxStrength) {
            return true;
        }
    }

    return false;
}
```

##### Conduction Path Existence Predicate

The [[CW 2 Report#Problem Specification]] presents the criteria for a conduction path to exist between the two plates. If we were wishing to determine what the path is, for example to determine the approximate resistance of the path, then we would have to apply a path finding algorithm to the problem to determine if any paths exists, and the shortest traversal length.

However since we only wish to determine *if* a path exists, not what it is, we can rely on the construction of the Cluster itself to determine this, in time linear with the size of the two conductors. An algorithm for this is presented below.

```ad-pseudocode
- Let `connected_bottom` and `connected_top` be booleans initialised to `false`.
- Iterating through each point `p` in the set of ***Cluster Points***.
	- If the point `p` is in direct contact with the top plate (ie. a `y` value of `0`), set `connected_top` to `true`.
	- If the point `p` is in direct contact with the top plate (ie. a `y` value of `Ly`), set `connected_bottom` to `true`.
- A path has formed if `connected_bottom && connected_top`.
```

Within this algorithm we are using the assumption that connection is non-directed. Ie that if current can flow in one direction is can flow in both.


### Testing & Data Collection

The code used for data collection is in `entrypoints/data_collection.c` and mainly consists of sampling (in batches of 100) all $(N, f_{SC})$ combinations in a specified range, saving the resulting data to a csv file for later analysis. These values were hard coded and changed as needed but could easily be adapted to be taken on the command line if need be.

This process also served as testing to ensure the program produced results without crashing or memory issues at a wide range of values. It does not however ensure *correct* behaviour (bar seeing it goes to $0\%$ and $100%$ in the extremes). This was accomplished with smaller scale testing by hand to ensure the program behaves as is specified in the brief, examples of which can be seen in the Question Output section

### Time Complexity Analysis

When collecting the data it was noted that the program slowed down substantially as $N$ increased, adding some rudimentary timing code to the data collection code, we obtained a $N$ vs $T$ graph of,

![[Unknown-2.png|time complexity analysis]]

Where we can see that while a linear and quadratic fail to fit, a cubic does, implying our performance class is in-fact $O(n^3)$. This tells us two things. Firstly that the main source of time complexity in the program is the Cluster Finding code, as this is the only part which is dependent on $N$. Secondly that we are likely far from optimum to our solution, which we would expect to be roughly $O(n^2)$ or even $O(n \log n)$ (as is Dijkstra's algorithm #todo cite).