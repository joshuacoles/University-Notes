## Brief

![[cwk-ps-2021.pdf]]

## General Structure of Report

- C is a not an easy language
- So first we prototyped in Rust.
- This allowed us to develop the *content* of the code in a language with similar semantics to C, without having to worry about the nitty gritty details of C itself
	- **Aside:**
		- For reference rust is a language that compiles down to native code using LLVM, similar to C under `clang`, however uses a combination of first class RAII and lifetimes to track alloc/free information at compile time, inserting `malloc`s, `free`s and resource cleanup as needed.
		- It also includes a competent standard library and lots of easily installed third party libraries which allow us to focus less on how a list is implemented, and more on what the code is actually doing.
	- The code was however written in a way to aid its translation into C, for example including where possible, capacities when allocating data structures.
- \<Insert Code>
- Doing this allows us to see the following constructs we will have to implement to translate the code into C.
	- A structure similar to `Array2D`
	- The `enum GridCell` can be translated into a `char` field, each type represented as a value (`0`, `1`, `2`).
	- Wrappers around C's random number generator facility to:
		- Seed it properly as per brief.
		- Generate uniform number in range.
	- A `HashSet` equivalent
		- We don't actually need most parts of the `HashSet`, just a structure supporting unique element insertion,
			- So since we are only caring about POD types we can do this by value equality on a `struct Pos { int x; int y; }` type with an insert method `bool insert(Pos x)`.
		- Iteration (& with draining)
			- Iteration can be done simply with copies and backing array, draining can be iterate then zero (or more precisely set `length = 0`).
			- Will obviously need to keep length around.
			- Since we will only operate in a single threaded manner it is opportune to use a set number of `HashSet` equivalents, preallocated and reused, with a capacity equal to the size of the grid.
				- So while this will have a larger memory footprint than a moving list (eg. `Vec` in rust), it will be much simpler to implement.
		- `bool contained_within(HashSet hs, Pos pos)`
	- C does not have the same facilities for avoiding overflows that rust does, so our `directly_reachable_from` method will need to include bound checks manually.
	- Formatting will be done as per the rust code, however in its own set of functions as opposed to implementing `fmt::Display`.

[[CW 2 Report]]