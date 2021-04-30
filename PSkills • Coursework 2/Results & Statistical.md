## Results & Statistical Analysis

> A version of this with interactive graphs, including in 3D, can be found at this [ipfs link](https://ipfs.io/ipfs/QmPDXNLYyJ1r5Cg7xzRXXW1fvDWXz8dw9QeSkQNigN6QFZ?filename=Stats.html) (this link is content address and thus cannot be updated, preventing cheating). However the below shall suffice.
> 
> A live version is available at https://files.enigmatic.dev/stats.html **however this will be updated past submission**.

To start any statistical analysis you need *data*, this was obtained using the `entrypoints/data_collection.c` harness (which also served as a useful batch tester) wherein we iterated over all $N$ and $f_{SC}$ values in a given region. 

Initially this was attempted with the $100 \times 100$ grid however as discussed in the Time Complexity Analysis section our code runs at $O(n^3)$ time complexity with respect to the number of conductors $N$, and thus such a sample for this grid was infeasible, having to be halted part of the way through. Instead the code was run on a smaller $25 \times 25$ grid with data show below.

![[Unknown.svg]]

Which when scaled by the number of cells within the grid (ie representing the number of conductors instead as $n = \frac{N}{L_X L_Y}$) and compared to the incomplete $100 \times 100$ data (dots the $100 \cp 100$ incomplete data, lines the $25 \times 25$ complete data) we get the following

![[100-25-comparison-3d.svg]]

Where we can see that the behaviour in mostly independent of the size of the grid operated on. This allows us to 

In fact we can also identify the following other trends in the data.

1. The behaviour of the path percentage, at constant $f_{SC}$, follows what appears to be an S-curve of some variety.
2. These S-curves are only really relevant in some "middle" section of the plot, at the very low and high number of conductors the percentages are effectively $0\%$ or $100\%$.
3. The curves themselves seem to be offset from each other by some amount, dependent on the $f_{SC}$ value.

We can quantify this offset by determining the value $n$ such that the percentage of grids with a path is closest to $50\%$ for a given $f_{SC}$ value. This graph is shown below.

![[n-offset-fsc-w-with.svg]]

Where we have imposed a quadratic fit to the data. We can see that this causes the previously offset graphs to lineup as desired (mainly by the mess of overlapping colours).

![[n-offset-lineup.svg]]

The next quantity to observe is the curviness of the these plots, which we can see is dependent on the dimension of the grid in the following example (green being $100×100$, blue $25×25$, and purple $15×15$).

![[curviness-overlay.png]]

This is a brief overview of the differeent 

### Accuracy of points themselves
