---
cssclass: split-pdf
---

## Development

Development of the model was done in 3 phases. First a prototype was written in Rust, a new language similar to C, which however much more expressive and developer friendly. This was done to help map out the program without having to directly concern ourselves with C's more primitive program and memory model. This step will not be discussed much as while it was exceptionally useful in designing the program, it is not in the scope of the Coursework itself.

In the second stage this Rust code was translated into C and additional features were added on as their need became apparent.  Finally the program was subjected to both batch and specific testing, to ensure it functioned correctly.

Below we will go through the overall structure of the program; layout pseudocode its important algorithms; and discuss any non-trivial choices or changes that were made to the program as it was developed.

While the majority of the questions involve a 2D grid, the code was written to handle 3D scenarios, with 2D grids being implemented as single plane in a 3D grid, this is discussed later on in the report.


### Program Structure

The program is split into three mostly separate components:

The `Grid` which handles memory for the 3D grid of cells, as well as their different varieties, with the corresponding rules for current propagation.

The `ClusterFinder` which performs the actual cluster generation and determines if a path has been formed. It holds an immutable reference to the `Grid` that it operates on, and takes in either a pre-chosen, or random grid position to use as an initial position. It also maintains a number of lists which are used in the Cluster Finding algorithm.

The *runner* / entrypoint, aka the code which brings everything together, generating a number of `Grid`s, submitting them each to `ClusterFinder`s then collecting stats. Each question part has its own entrypoint, in addition to a couple used for testing and data-collection for statistical work.



---


- 2D considerations
- Choice to use PosList in Cluster Finder
- Not choosing insulators
- Time complexity analysis
- Memory management considerations
	- Reuse of temp array



### Structure of Rust Code

The code was split into 3 parts:


The Rust code itself can be found in the `rust` folder of the hand-in as a GitHub cannot be provided to maintain anonymity, it will not be reproduced here (as this is a C coursework). Instead pseudocode versions of important algorithms are presented, for example the uniform random generator of N positions; and the [[Development#Cluster Finder]] algorithm.

![[Pseudocode]]

### Translation

Reviewing the functioning Rust code we see we used a number of non-trivial, third-party or Rust only features for which we must provide our own implementations in the final C version. These are as follows:

- `Array2D` from the [`array2d` crate](https://crates.io/crates/array2d) to represent the `Grid`.
- An `enum` to represent the type of a cell as one of the three possible values.
- Rusts facilities for safe addition and subtraction to avoid overflow concerns when at the `0` edge of a grid (or the far edge of an especially large grid).
- Extensive use of `Iterator`s.
- `HashSet` to provide a collection which ensures uniqueness.
- The random number generators from the [`rand` crate](https://crates.io/crates/rand).
- Displaying to the user was done by implementing the `std::fmt::Display` trait which allows custom formatters to hook into `println!`, Rust's version of `printf` in C.

Replacements and required considerations are provided below.

#### Array2D

#### Cell Type `enum`

#### Overflow Considerations in finding reachable cells for current propagation

#### `HashSet`

#### Iterators

#### Random Number Generation

#### Displaying to the user
