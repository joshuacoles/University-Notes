# [[Bravais Lattices]]

The [[Bravais Lattices]] are the symmetrically distinct [[Crystal Lattice|Crystal Lattices]] in 2D and 3D.

## In 2D
The [[Bravais Lattices]] in 2D are shown grouped by their [[Crystal Family]] below.

![[2d-bravais.svg]]

> See [Wikipedia: Bravais lattice In 2 dimensions](https://en.wikipedia.org/wiki/Bravais_lattice#In_2_dimensions). #todo

Where the names and characterising [[Lattice Parameters]] are given below,
- $m$ is called *oblique*, characterised by $|a|, |b|, \theta$.
- $o$ contains both *rectangular* and *centered-rectangular* (more on centering later).
	- These are characterised by either the lengths of two perpendicular [[Primitive Lattice Vector]], or the angle between two which are equally sized.
- $h$ is hexagonal, characterised by only one parameter $|a|$.
- $t$ is rectangular, characterised by only one parameter $|a|$.

See [[#Classification in 2D]] for discussions of identification.

These latticed have additional symmetries than the translational symmetry inherent in their generation.

- [[Oblique Crystal Lattice]]
	- Inversion through lattice point.
	- Inversion through midpoint of adjacent lattice points.
	- Inversion through center point of parallelogram.
	- Rotation $180^\circ$.
- [[Primitive Rectangular Crystal Lattice]]
	- Inversion through lattice point.
	- Inversion through midpoint of adjacent lattice points.
	- Inversion through center point of rectangle.
	- Rotation $180^\circ$ (known as 2 fold rotation).
		- Aside on maths, these $n$-fold rotation operations are the $C_n$ [[Cyclic Groups]].
	- Mirror planes (displayed in red)
- [[Centered Rectangular Crystal Lattice]]
	- All symmetries of [[Primitive Rectangular Crystal Lattice]].
	- Glide Reflection Planes, combination of translation + reflection in plane.
		- Translation parallel to the plane by $n + \frac 12$ of the parallel [[Primitive Lattice Vector|Primitive Vector]] (blue arrow)
		- Followed by rotation in a parallel plane (green/brown plane).
- [[Square Crystal Lattice]]
	- 4 fold rotation.
	- Planes again I assume.
	- Also the $45^\circ$ planes
	- Or are those last two isomorphic to something? I need to redo my group theory ffs.
- [[Hexagonal Crystal Lattice]]
	- 6 fold rotation.
	- Planes again.
	- Do we have any combination stuff? Again need more research.

![[Pasted image 20210219132034.png]]

> Additional resource: https://users.aber.ac.uk/ruw/teach/334/bravais.php

```ad-info
title: Lattice Group Theory

A Lattice in Group Theory ([wiki](https://en.wikipedia.org/wiki/Lattice_(group))) is described as,

> ... a lattice in $\R^n$ is a subgroup of the additive group $\R^n$ which is isomorphic to the additive group $\Z^n$, and which spans the real vector space $\R^n$.
```

### Classification in 2D

For the classification of a given lattice:
1. Start with one point and take a nearest second point.
3. For the third point, not on the same line, consider its distances to both points. 
	- Among the points for which the smaller of these two distances is least, choose a point for which the larger of the two is least.

```ad-info
title: Algorithmic Definition of the above
collapse:

This is equivalent to.

- Let ${\displaystyle \Lambda =\left\{\left.\sum _{i=1}^{n}a_{i}v_{i}\;\right\vert \;a_{i}\in \mathbb {Z} \right\}}$ be the [[Crystal Lattice]].
- Pick a point $p_0 \in \Lambda$.
- Take the point the closest point to $q_0$, label it $p_1$
$$
p_1 = \setp{p_1 \in \Lambda}{\Forall q \in \Lambda : \|p_1 - p_0\| \le \norm{q - p_0} }
$$
- Let $p_2 \in \Lambda$ be the point such that.
	- $p_2$ is not co-linear with $p_0$, $p_1$ (ie, $p_2 \notin \mathrm{span}(p_1 - p_0)$).
	- Let $\Delta_1, \Delta_2$ be the distances between $p_2$ and $p_0, p_1$. Taking, wlog, $\Delta_1 \le \Delta_2$.
	- Let $S$ be the set of $p_2$ such that $\Delta_1$ is minimised.
	- Choose $p_2$ to be the member of $S$ such that $\Delta_2$ within $S$.

```

These three points giving us a triangle, having sides $\Delta_1, \Delta_2, \Delta_3$. Having 5 arrangements described and show below.

- (#1) Scalene, $\Delta_1 \neq \Delta_2 \neq \Delta 3$. *Oblique*
- (#4) Equilateral, *Hexagonal*
- (#5) Right Angled Isosceles, *Square*
- (#2) Right angle but not isosceles, *Rectangular*
- (#3) Isosceles but not right angle, *centered-rectangular*.

![[Pasted image 20210219130113.png]]

## In 3D

When the 14 Bravais Lattices are decorated with a [[Crystal Basis]] you obtain **230** different crystallographic groups, which further multiply to **1651** groups when magnetic differentiations are accounted for.

![[bravais_3d.png]]

However as is shown below, focusing on only a new crystal structures accounts for a large proportion of the elemental solids.

![[Pasted image 20210219153045.png]]

These are,

- `fcc`, [[Face Centered Cubic Crystal Lattice]]
- `bcc`, [[Body Centered Cubic Crystal Lattice]]
- `Diamond`, [[Diamond Crystal Lattice]]
- `hcp`, [[Hexagonal Close Packing Crystal Lattice]]

> See https://en.wikipedia.org/wiki/Bravais_lattice#In_3_dimensions
