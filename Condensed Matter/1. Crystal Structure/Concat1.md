# Crystal
A solid material who's constituents are arranged in a highly ordered microscopic structure.

# Crystal Structure

Has two components,

- [[Crystal Lattice]]
- [[Crystal Basis]]

The lattice is an infinite set of points determined by the translational symmetries of the structure. With the crystal structure as a whole being distinguished by the [[Crystal Symmetries]] of the combined [[Crystal Lattice]] and [[Crystal Basis]].

> This is done as will be seen later, as the choice of [[Primitive Lattice Vector]], [[Unit Cell|Units Cells]] or [[Crystal Basis]] representation is not unique for a given physical structure.

This is then turned into a physical crystal structure by the addition of the [[Crystal Basis]], which is a microscopic structure which decorates each **lattice point**.

This structure strongly influences the properties of the material.

# Crystal Lattice

The Crystal Lattice is an infinite set of points determined by the translational symmetries of the structure. Each Lattice Point has identical surroundings to all the others.

The lattice can be defined by [[Primitive Lattice Vector]], which are vectors between Lattice Points, these are not unique. For example,

![Lattice Example|500](https://www.physics-in-a-nutshell.com/img/content/solid-state-physics/two-dimensional-lattice.svg)

The set of lattice points is the span of these [[Primitive Lattice Vector]] over the Integers. A vector of this form is known as a [[Lattice Vector]].

The length of these [[Primitive Lattice Vector]] are called the *lattice constants* or [[Lattice Parameters]]. They are normally given in either $\mathrm{nm}$ or $\angstrom$. These can be used as an alternative definition of the [[Crystal Lattice]] in terms of the lengths of the [[Primitive Lattice Vector]] and angles between them.

## In 3D

When the 14 [[Bravais Lattices#In 3D]] are decorated with a [[Crystal Basis]] you obtain **230** different crystallographic groups, which further multiply to **1651** groups when magnetic differentiations are accounted for.

![Bravais lattices in three dimensions.](https://users.aber.ac.uk/ruw/teach/334/bravais_3d.png)

However as is shown below, focusing on only a new crystal structures accounts for a large proportion of the elemental solids.

![[Pasted image 20210219153045.png]]

These are,

- `fcc`, [[Face Centered Cubic Crystal Lattice]]
- `bcc`, [[Body Centered Cubic Crystal Lattice]]
- `Diamond`, [[Diamond Crystal Lattice]]
- `hcp`, [[Hexagonal Close Packing Crystal Lattice]]


---



# Crystal Symmetries

As discussed in [[Crystal Structure]], each structure is distinguished by its [[Crystal Symmetries]]. These can include,

- Translations by a [[Lattice Vector]] $\vec{R}$.
- Inversions through a point, $\r \to -\r$.
- Reflection in a plane.
- Rotations around a point (normally generated of the form $\frac{360\deg}{n}$).

Or some combination of these.

> **Note**: This combination can be true precluding individual components. Ie it is only symmetric under $r = \mathrm{rot}(x^c) \circ \mathrm{translate}(x)$, not $\mathrm{translate}(x)$ and $\mathrm{rot}(x^c)$ individually.

This links deeply with [[Group Theory]].

These symmetries give us the [[Bravais Lattices]] in 2D and 3D.

---

# [[Bravais Lattices]]

The [[Bravais Lattices]] are the symmetrically distinct [[Crystal Lattice|Crystal Lattices]] in 2D and 3D.


## In 2D
The [[Bravais Lattices]] in 2D are shown grouped by their [[Crystal Family]] below.

![](https://upload.wikimedia.org/wikipedia/commons/e/ee/2d-bravais.svg)

> See [Wikipedia: Bravais lattice In 2 dimensions](https://en.wikipedia.org/wiki/Bravais_lattice#In_2_dimensions). #todo

Where the names and characterising [[Lattice Parameters]] are given below,
- $m$ is called *oblique*, characterised by $|a|, |b|, \theta$.
- $o$ contains both *rectangular* and *centered-rectangular* (more on centering later).
	- These are characterised by either the lengths of two perpendicular [[Primitive Lattice Vector]], or the angle between two which are equally sized.
- $h$ is hexagonal, characterised by only one parameter $|a|$.
- $t$ is rectangular, characterised by only one parameter $|a|$.

See [[Bravais Lattices An Aside on Maths#Classification in 2D]] for discussions of identification.

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

## Additional

- [[Bravais Lattices]]: [Wikipedia](https://en.wikipedia.org/wiki/Bravais_lattice).
- Lattice in Group Theory: [Wikipedia](https://en.wikipedia.org/wiki/Lattice_(group)).
	> In geometry and group theory, a lattice in $\R^n$ is a subgroup of the additive group $\R^n$ which is isomorphic to the additive group $\Z^n$, and which spans the real vector space $\R^n$.
	> 	
	> In other words, for any basis of $\R^n$, the subgroup of all linear combinations with integer coefficients of the basis vectors forms a lattice. A lattice may be viewed as a regular tiling of a space by a primitive cell.


- > Note that a pattern with this lattice of translational symmetry cannot have more, but may have less symmetry than the lattice itself
	- A [[Crystal Basis]] can remove symmetries but it cannot add any. ^730d59

### Classification in 2D

For the classification of a given lattice:
1. start with one point and take a nearest second point.
3. For the third point, not on the same line, consider its distances to both points. 
	- Among the points for which the smaller of these two distances is least, choose a point for which the larger of the two is least.

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

These three points giving us a triangle, having sides $\Delta_1, \Delta_2, \Delta_3$. Having 5 arrangements.

- (#1) Scalene, $\Delta_1 \neq \Delta_2 \neq \Delta 3$. *Oblique*
- (#4) Equilateral, *Hexagonal*
- (#5) Right Angled Isosceles, *Square*
- (#2) Right angle but not isosceles, *Rectangular*
- (#3) Isosceles but not right angle, *centered-rectangular*.

![[Pasted image 20210219130113.png]]

And thus identifying the [[Crystal Lattice]].

## In 3D

When considering [[Bravais Lattices]] in 3D one encounters 14 symmetrically distinct [[Crystal Lattice|Crystal Lattices]].

> See https://en.wikipedia.org/wiki/Bravais_lattice#In_3_dimensions

# [[Crystal Symmetries]]

As discussed in [[Bravais Lattices An Aside on Maths#^730d59]], the addition of a [[Crystal Basis]] onto the [[Crystal Lattice]] can only remove symmetries from the system (and thus increasing the number of symmetrically distinct [[Crystal Structure|Crystal Structures]]).

For example the addition of the basis as shown below removes the rotational symmetry of the [[Square Crystal Lattice]] that the [[Crystal Basis]] has been imposed on.

![[Pasted image 20210219133742.png]]

This leads to a total of 17 distinct [[Crystal Structure|Crystal Structures]], called the [[Wallpaper Groups]]. #todo.

---

# [[Crystal Basis]]

The [[Crystal Basis]] is the identical assembly of atoms associated with each lattice point.

![Screenshot 2021-02-18 at 22.28.55](file:///Users/joshuacoles/Desktop/Screenshot%202021-02-18%20at%2022.28.55.png)

Positions in the unit cell are specified as proportions of the vectors which span the unit cell.

These are given as a tuple $(u, v, w) \in [0, 1]^3$ (or just $(u, v)$ if in 2D) and correspond to the location $\vec{r} = u \vec{a} + v \vec{b} + w \vec{c}$ relative to the relevant lattice point.


---

```
wikipedia: https://en.wikipedia.org/wiki/Atomic_packing_factor
```

# [[Packing Fraction]]

The [[Packing Fraction]] of a [[Crystal Structure]] is the fraction of the volume of the [[Unit Cell]] they occupy.


[[Examples of Crystal Structures]]

---

[[Millar Notation]]
[[Unit Cell]]
