---
cssclass: split-pdf
---


# Course Work 2

## Problem Specification

The question posed in this problem is to simulate the conductivity of disordered materials as a grid of cells, of three varieties: 

- *Insulators*, which block the progression of current.
- *Standard Conductors*, which allow current to progress to directly adjacent cells.
- *Super Conductors*, which allow current to progress into cells both adjacent *and* diagonal.

In addition there are two conducting plates on the top and bottom of the material. Conduction between these plates occurs if there is a path from one plate to the other, formed from the various conductor types, according to the current propagation rules discussed.

The description as provided by the brief is given below.

![[Pasted image 20210323180304.png]]

### A note on directional conduction

This code assumes that conduction is **non-directional**, ie if two cells are connected going in one direction, they are connected going in the other also. This assumption is only relevant in the case with diagonal conductive and superconductive cells, where the super-conductive cell is clearly connected to the conductive one, however the other direction is ambiguous.

This assumption is only used in the [[Pseudocode#Cluster Finder]] stage where we use it to avoid path finding on directed graph. This presents acute issues due to the requirements of starting at a *random* cell in the lattice, as this means we cannot use the construction of the cluster to find said conduction path.

### Extensions

Extensions to this model could be developed where the cluster is grown using a similar algorithm to the one seen in this document, viewing the cluster as a direct graph of connections. A path finding algorithm such as A* could then be applied to to this directed graph to detect the path. A quick schematic example of this directed graph is provided below.

![[Clipboard 20 Apr 2021 at 13.15.png]]

> Note that we would not need to store the edges in a given graph, only the nodes, aka the location of cells in the cluster. This is because valid edges are a pure function of the cell's type.

This would also allow for the modeling of quantities such as resistance, thermal conductivity, and other path properties.

Further extending the model in a different direction. If it is these path properties we care most about, and we are willing to drop the requirements for a random starting cell, we can forgo finding clusters entirely replacing the requirements for cluster generation entirely, instead simply performing path finding alone. 

If a cluster is still desired, but we are willing to limit ourselves to possibly incomplete clusters starting at the initial point, we can alter the traditional stopping conditions of the path finding algorithm to instead continue until all routes are exhausted, instead the shortest path found.

![[Development]]

![[Results]]

