## Results & Statistical Analysis

> A version of this with interactive graphs, including in 3D, can be found at [ipfs link](https://ipfs.io/ipfs/QmPDXNLYyJ1r5Cg7xzRXXW1fvDWXz8dw9QeSkQNigN6QFZ?filename=Stats.html) (this link is content address and thus cannot be updated, preventing cheating). However the below shall suffice.

To start any statistical analysis you need *data*, this was obtained using the `entrypoints/data_collection.c` harness (which also served as a useful batch tester) wherein we iterated over all $N$ and $f_{SC}$ values in a given region. Initially this was attempted with the $100 \times 100$ grid however as discussed in the Time Complexity Analysis section our code runs in $O(n^3)$ time complexity with respect to the number of conductors $N$, and thus running on the $100 \times 100$ gri

![[Unknown.svg]]

Statistical explorations have two complementary components empirical analysis of data and theoretical consideration of the problem.

Empirical analysis is by far the more straight-forward of the two, and is especially profitable on large banks of data where statistical noise inherent in all "real world" problems is less perceptible. However this should be guided by theoretical small scale analysis which provides insights into the 

especially useful at large scales where statistical noise is less perceptible; and theoretical considerations, normally of much smaller scale problems, more

- Empirical
- Theor

#todo effect of changing lx vs ly.

