---
cssclass: split-pdf
---

# Course Work 2

Student Number: 199057324
Compiler Used: `clang 12.0.5`
Date: 30/04/2021

## Problem Specification

The question posed in this problem is to simulate the conductivity of disordered materials as a grid of cells, of three varieties: 

- *Insulators*, which block the progression of current.
- *Standard Conductors*, which allow current to progress to directly adjacent cells.
- *Super Conductors*, which allow current to progress into cells both adjacent *and* diagonal.

In addition there are two conducting plates on the top and bottom of the material. Conduction between these plates occurs if there is a path from one plate to the other, formed from the various conductor types, according to the current propagation rules discussed.

The description as provided by the brief is given below.

![[Pasted image 20210323180304.png]]

### Directional Conduction

This code assumes that conduction is **non-directional**, ie if two cells are connected going in one direction, they are connected going in the other also. This assumption is only relevant in the case with diagonal conductive and superconductive cells, where the super-conductive cell is clearly connected to the conductive one, however the other direction is ambiguous.

This assumption is only used in the [[Pseudocode#Cluster Finder]] stage where we use it to avoid path finding on directed graph. This presents acute issues due to the requirements of starting at a *random* cell in the lattice, as this means we cannot use the construction of the cluster to find said conduction path.

![[Development]]

![[Output]]

![[Results & Statistical]]

![[Possible Extensions]]
