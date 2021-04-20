---
cssclass: split-pdf
---

## Development

C is a low level language not optimised for development experience, instead for translation to machine code, hence it is often difficult to *"think"* in C, as one often has to devote a large portion of one's attention to making the computer happy. Except of course it does not *say* when it is unhappy, until you attempt to run the code and you either crash, or get nonsensical results.

In light of this I chose to write a first draft of the code in the Rust  language. Rust is a low level language, similar to C, sharing a large amount of the compilation backend with some C compilers. However it is much more modern and is designed to allow for an easier development experience.

It is not a memory managed language (a prime example of which being Python or Java), however that does not mean you do all memory management yourself. Instead it allows you to control memory allocation through a combination of RAII and reference *lifetimes*, inserting `malloc`s, `free`s and cleanup objects as needed needed. Providing a model that ensures proper ownership and the correct sharing of memory, whilst still providing the relative speed gains associated with non GC languages.

This also allows for simpler translation to C from Rust, when compared to for example Python, as you are still working at similar level to C, sharing many of the same concepts.

The code was written in idiomatic Rust, using minimal 3rd party or standard library code, however not shying away from it.

### Structure of Rust Code

The code was split into 3 parts:

- The `Grid` which handles memory for the 2D grid of cells as well as their different types and the different types of the rules for current propagation. It also includes formatting code for the grid to allow presentation to the user.
- The `ClusterFinder` this is an object created to find clusters. It takes an immutable reference to a `Grid`, and with either a pre-chosen, or random grid position, will start forming a conduction cluster.
- The *runner* / entrypoint, aka the code which brings everything together, generating a number of `Grid`s, submitting them each to `ClusterFinder`s then collecting stats.

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
