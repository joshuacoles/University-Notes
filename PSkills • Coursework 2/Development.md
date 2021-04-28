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

A note should be made of the method used to generate the uniform random number $r$, the `int randomUniform(int r0, int r1)` function. While it is assumed this number is uniformly distributed, and in fact random, there are a number of factors that make this less than fully accurate (however still sufficient for our needs). These include:

- Low entropy in the random number generator, especially in the lower bits targetted 


To achieve uniform distribution across the space of grid-configurations we used a uniform distribution, indexed contiguously for ease of generation, repeating if there were any coincident samples until the required number of indexes had been generated.




[[Pseudocode]]


---


- 2D considerations
- Choice to use PosList in Cluster Finder
- Not choosing insulators
- Time complexity analysis
- Memory management considerations
	- Reuse of temp array

