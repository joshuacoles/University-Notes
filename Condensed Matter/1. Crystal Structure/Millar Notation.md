# Millar Notation

## Directions in Crystals

One of the most important features of [[Crystal Structure|Crystal Structures]] is that they are [[Anisotrophy|anisotropic]], having different behaviours traveling in directions in the [[Crystal Structure]], for example the speed of electron travel.

This means that it is advantageous to be able to talk about directions in a crystal structure fluently. We do this by identifying directions with the [[Lattice Vector]] $\r = h\vec{a} + k\vec{b} + l\vec{c}$. Since these are purely directional, their magnitude is irrelevant and thus we can scale them to be of use in calculation.

While in pure maths it would be traditional to talk about these as *unit vectors*, we instead use an integer based approach of taking $h, j, k \in \Z$, being integers such that $\mathrm{gcd}\,\set{h, j, k} = 1$.

These coefficients are known as [[Millar Indices]] and are written as $\mlri hkl$ (no commas). Further you use an overbar to represent negative values. For example $\r = -\vec{a} + 2\vec{b}$ would be written as $\mlri {\bar{1}}20$.

## Symmetrically Equivalent Directions

Due to the highly symmetric nature of crystal, many directions will be symmetrically equivalent. We represent these as $\mlrs hkl$.

For example in a [[Simple Cubic Crystal Structure]], $\mlrs 100 \equiv \mlri 100, \mlri {\bar1}00, \mlri 010$, etc.

## Planes in Crystals

Planes on which [[Lattice Point|Lattice Points]] lie are also specified using [[Millar Indices]]. These are denoted $\mlrp hkl$.

![[Pasted image 20210220144950.png]]

> #todo write this method up

### Symmetrically Equivalent Planes

As with [[012. Lec 2, Crystal Structure, 3D crystals#Symmetrically Equivalent Directions]] it is useful to address groups of symmetrically equivalent  planes together, we do this using the notation $\mlrps hkl$. Eg. $\mlrps 111 \equiv \mlrp 111, \mlrp {\bar1}11, \mlrp {\bar1}1{\bar1}$.

### Examples for [[Simple Cubic Crystal Lattice]]

![[Pasted image 20210220145025.png]]