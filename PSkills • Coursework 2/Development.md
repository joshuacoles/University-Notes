---
cssclass: split-pdf
---

## Development

Development of the model was done in 3 phases. First a prototype was written in Rust, a new language similar to C, which however much more expressive and developer friendly. This was done to help map out the program without having to directly concern ourselves with C's more primitive program and memory model. This step will not be discussed much as while it was exceptionally useful in designing the program, it is not in the scope of the Coursework itself.

In the second stage this Rust code was translated into C and additional features were added on as their need became apparent.  Finally the program was subjected to both batch and specific testing, to ensure it functioned correctly.

Below we will go through the overall structure of the program; layout pseudocode its important algorithms; and discuss any non-trivial choices or changes that were made to the program as it was developed.

```ad-info
title: A note on pseudocode and code excerpts.

The pseudocode presented is high level generic, ignoring things such as C's lack of proper array support. In addition all code presented inline in the document is in excerpt form, it is presented without the relevant `#includes`, supporting code, and may be sourced from multiple `.c` files.
```

While the majority of the questions involve a 2D grid, the code was written to handle 3D scenarios, with 2D grids being implemented as single plane in a 3D grid, this is discussed later on in the report.


### Program Structure

The program is split into three mostly separate components. The `Grid` which handles memory for the 3D grid of cells, as well as their different varieties, with the corresponding rules for current propagation.

The `ClusterFinder` which performs the actual cluster generation and determines if a path has been formed. It holds an immutable reference to the `Grid` that it operates on, and takes in either a pre-chosen, or random grid position to use as an initial position. It also maintains a number of lists which are used in the Cluster Finding algorithm.

The *runner* / entrypoint, aka the code which brings everything together, generating a number of `Grid`s, submitting them each to `ClusterFinder`s then collecting stats. Each question part has its own entrypoint, in addition to a couple used for testing and data-collection for statistical work.


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

Cluster finding is the main point of conceptual complexity in the program (and as we will find out, time complexity also #todo). It is sim

The rust code this can be found in `src/q2b/cluster_finder.rs`, it is split into 4 parts,

1. Initialisation
2. A function performing single search iteration.
3. The search loop
4. A predicate to determine if the cluster forms a conductive path across the Grid.

The algorithm maintains the following two collections as state:

- A set of *unique* points which are within the cluster, henceforth known as ***Cluster Points***.
- A set of *unique* points which have just been added to the cluster and thus must be searched on the next iteration, henceforth known as the ***Process Queue***.
	- This set is defined as a strict subset of the ***Cluster Points***.

##### Initialisation

> - Given a Grid `G` of dimensions `Lx` by `Ly`.
> - Generate an initial `(x, y)` uniformly from the set the set $[0, L_x]_{\N} \times [0, L_y]_{\N}$.
> - Add this point to the set of ***Cluster Points*** and the ***Process Queue***.

##### Single Search Iteration

- Let `found` be a set of *unique* points found in this iteration.
- For each point in the ***Process Queue*** `p`
	- Iterate through each of the directly reachable points, `q` from this position, as defined by the [[CW 2 Report#Spec|Problem Specification]].
	- If this point `q` is not already in the set of ***Cluster Points***, add it, ensuring uniqueness, to the set of points found this iteration, `found`.
	- Once this is done remove the point `p` from the ***Process Queue***.
- Add all those points found this iteration to the set of ***Cluster Points***.
- All those points found this iteration are now the ***Process Queue*** (which was previously made empty by the loop).

##### The Search Loop

- While the ***Process Queue*** is not empty (recalling that on [[Pseudocode#Initialisation]] it is not empty, containing the *initial point*).
	- Perform a [[Pseudocode#Single Search Iteration]] step.

##### Conduction Path Existence Predicate

The [[CW 2 Report#Problem Specification]] presents the criteria for a conduction path to exist between the two plates. If we were wishing to determine what the path is, for example to determine the approximate resistance of the path, then we would have to apply a path finding algorithm to the problem to determine if any paths exists, and the shortest traversal length.

However since we only wish to determine *if* a path exists, not what it is, we can rely on the construction of the Cluster itself to determine this, in time linear with the size of the two conductors. An algorithm for this is presented below.

> - Let `connected_bottom` and `connected_top` be booleans initialised to `false`.
> - Iterating through each point `p` in the set of ***Cluster Points***.
> 	- If the point `p` is in direct contact with the top plate (ie. a `y` value of `0`), set `connected_top` to `true`.
> 	- If the point `p` is in direct contact with the top plate (ie. a `y` value of `Ly`), set `connected_bottom` to `true`.
> - A path has formed if `connected_bottom && connected_top`.

```ad-note
Within this algorithm we are using the assumption that connection is non-directed. Ie that if current can flow in one direction is can flow in both.
```

---


- 2D considerations
- Choice to use PosList in Cluster Finder
- Not choosing insulators
- Time complexity analysis
- Memory management considerations
	- Reuse of temp array

