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

Extensions to this model could be developed where the cluster is grown using a similar algorithm to the one seen in this document, viewing the cluster as a direct graph of connections. A path finding algorithm such as A* could then be applied to to this directed graph to detect the path.

> Note that we would not need to store the edges in a given graph, only the nodes, aka the location of cells in the cluster. This is because valid edges are a pure function of the cell's type.

This would also allow for the modeling of quantities such as resistance, thermal conductivity, and other path properties. 

Further extending the model to in a different direction 




![[Development]]

![[Results]]

