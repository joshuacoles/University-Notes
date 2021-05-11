# Crystal
A solid material who's constituents are arranged in a highly ordered microscopic structure.

# [[Crystal Structure]]

Has two components,

- [[Crystal Lattice]]
- [[Crystal Basis]]

The lattice is an infinite set of points determined by the translational symmetries of the structure. With the crystal structure as a whole being distinguished by the [[Crystal Symmetries]] of the combined [[Crystal Lattice]] and [[Crystal Basis]].

> This is done as will be seen later, as the choice of [[Primitive Lattice Vector]], [[Unit Cell|Units Cells]] or [[Crystal Basis]] representation is not unique for a given physical structure.

This is then turned into a physical crystal structure by the addition of the [[Crystal Basis]], which is a microscopic structure which decorates each **lattice point**.

This structure strongly influences the properties of the material.

---

# [[Crystal Lattice]]

The Crystal Lattice is an infinite set of points determined by the translational symmetries of the structure. Each Lattice Point has identical surroundings to all the others.

The lattice can be defined by [[Primitive Lattice Vector]], which are vectors between Lattice Points, these are not unique. For example,

![Lattice Example|500](https://www.physics-in-a-nutshell.com/img/content/solid-state-physics/two-dimensional-lattice.svg)

The set of lattice points is the span of these [[Primitive Lattice Vector]] over the Integers. A vector of this form is known as a [[Lattice Vector]].

The length of these [[Primitive Lattice Vector]] are called the *lattice constants* or [[Lattice Parameters]]. They are normally given in either $\mathrm{nm}$ or $\angstrom$. These can be used as an alternative definition of the [[Crystal Lattice]] in terms of the lengths of the [[Primitive Lattice Vector]] and angles between them.

---

## [[Unit Cell]]

A [[Unit Cell]] is a region of space which ca be repeatedly tessellated without gaps to assemble the lattice. These can be used to represent the crystal as a whole, any [[intensive properties]] of the crystal being equal to those of the unit cell (with extensive properties being difficult to reason about due to the "infinite" nature of the lattice, and the sheer size of real crystals with respect to their unit cell).

These are, as with [[Primitive Lattice Vector]], not unique. You can in fact assemble an $n$-dimensional cell by taking the area spanned by any $n$ [[Primitive Lattice Vector]].

### Area

The area of a [[Unit Cell]] is computable from the [[Primitive Lattice Vector]] as so,

- 2D, $\|\vec{a} \cp \vec{b}\|$
- 3D, $a \dp \|\vec{b} \cp \vec{c}\|$

---

### [[Primitive Unit Cell]]

A [[Primitive Unit Cell]] is the minimum [[Unit Cell]] containing a single [[Lattice Point]] (accounting for fractional points). As displayed in the diagram below.

![example of primitive unit cell](https://www.doitpoms.ac.uk/tlplib/crystallography3/images/unitcell_example2.gif)

The [[Primitive Lattice Vector]] will span a [[Primitive Unit Cell]].

---

### [[Conventional Unit Cell]]

While [[Primitive Unit Cell|Primitive Unit Cells]] are mathematically useful we will often instead use other cells, such as the bottom right.

![[Pasted image 20210218220715.png]]

These cells might be chosen as they are easier to sketch and reason intuitively about. Or if they share symmetries which the crystal lattice they comprise.

---

```
wikipedia: https://en.wikipedia.org/wiki/Wigner–Seitz_cell
```

### [[Wigner-Seitz Cell]]

The [[Wigner-Seitz Cell]] is a [[Primitive Unit Cell]] which contains all space which is closer to a given lattice point, than any other.

It is the unique [[Primitive Unit Cell]] which possesses the symmetries of the crystal lattice they comprise. An example is shown below.

![](https://upload.wikimedia.org/wikipedia/commons/2/24/Wigner-Seitz_Animation.gif)

Note from Wikipedia:

> For *composite lattices*, (crystals which have more than one vector in their [[Crystal Basis|basis]]) each single lattice point represents multiple atoms.
> 
> We can break apart each Wigner–Seitz cell into subcells by further Voronoi decomposition according to the closest atom, instead of the closest lattice point.

#### Method
1. Pick a [[Lattice Point]].
2. Draw lines to all nearby lattice points.
3. The region enclosed by the perpendicular bisectors (either lines in 2D or planes in 3D) of all these lines in the [[Wigner-Seitz Cell]].

---

## [[Crystal Basis]]

The [[Crystal Basis]] is the identical assembly of atoms associated with each lattice point.

![Screenshot 2021-02-18 at 22.28.55](file:///Users/joshuacoles/Desktop/Screenshot%202021-02-18%20at%2022.28.55.png)

Positions in the unit cell are specified as proportions of the vectors which span the unit cell.

These are given as a tuple $(u, v, w) \in [0, 1]^3$ (or just $(u, v)$ if in 2D) and correspond to the location $\vec{r} = u \vec{a} + v \vec{b} + w \vec{c}$ relative to the relevant lattice point.

---

## [[Crystal Symmetries]]

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

## [[Bravais Lattices]]

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

---

## [[Crystal Symmetries]]

As discussed in [[Bravais Lattices An Aside on Maths#^730d59]], the addition of a [[Crystal Basis]] onto the [[Crystal Lattice]] can only remove symmetries from the system (and thus increasing the number of symmetrically distinct [[Crystal Structure|Crystal Structures]]).

For example the addition of the basis as shown below removes the rotational symmetry of the [[Square Crystal Lattice]] that the [[Crystal Basis]] has been imposed on.

![[Pasted image 20210219133742.png]]

This leads to a total of 17 distinct [[Crystal Structure|Crystal Structures]], called the [[Wallpaper Groups]]. #todo.

---

Recap:

![[Pasted image 20210219134204.png]]

---

---
tags:
- lecture,
- cmp/crystal-structure
- week/1
---

## [[Bravais Lattices]]

### In 3D

When considering [[Bravais Lattices]] in 3D one encounters 14 symmetrically distinct [[Crystal Lattice|Crystal Lattices]].

> See https://en.wikipedia.org/wiki/Bravais_lattice#In_3_dimensions

---

## [[Crystal Structures in 3D]]

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

## [[Simple Cubic Crystal Lattice]]

![[Simple Cubic Slide.pdf]]

This both the name given to the [[Bravais Lattices]] and also the [[Crystal Structure]] when decorated with the single atom [[Crystal Basis|basis]] $(0, 0, 0)$ (this is in fact, the only single atom basis possible, as all others are just translations of this).

### [[Packing Fraction]]
- $V_{\text{cell}} = a^3$
- $r_{\text{atom}} = \frac{R_{nn}}{2} = \frac{a}{2}$.
- N = $4 \times \frac 14$
- $V_{\text{atoms}} = \frac 43 \pi (r_{\text{atom}})^3 \cdot N$
- $\mathrm{PF} = \frac{V_{\text{atoms}}}{V_{\text{cell}}} = \frac{\pi}{6}$

---

```
wikipedia: https://en.wikipedia.org/wiki/Atomic_packing_factor
```

## [[Packing Fraction]]

The [[Packing Fraction]] of a [[Crystal Structure]] is the fraction of the volume of the [[Unit Cell]] they occupy.

#todo

---

## [[Face Centered Cubic Crystal Lattice]]

![[FCC Slide.pdf]]

This both the name given to the [[Bravais Lattices]] and also the [[Crystal Structure]] when decorated with the single atom [[Crystal Basis|basis]] $(0, 0, 0)$.

This can also be represented as a 4 atom [[Crystal Basis]], 8 $\frac 18$th on the corners, 6 $\frac 12$ves on the faces. We can compute a [[Conventional Unit Cell]] for this [[Crystal Structure]] as,

- The bottom left corner $(0,0,0)$.
- The three faces closest to it, $\(\frac 12,\frac 12, 0\), \(\frac 12, 0, \frac 12\), \(0, \frac 12,\frac 12\)$.

This can also be expressed in the form of a [[Primitive Unit Cell]], as shown below

![](https://i.stack.imgur.com/TGa4T.png)

> https://physics.stackexchange.com/questions/210963/primitive-unit-cell-of-fcc #todo

with [[Primitive Lattice Vector]],

$$
\vec a_1 = \frac{a}{2}(\hat x + \hat y),
\hspace{.5cm}
\vec a_2 = \frac{a}{2}(\hat y + \hat z),
\hspace{.5cm}
\vec a_3 = \frac{a}{2}(\hat x + \hat z).
$$

- $R_{nn}$ #todo 
- [[Packing Fraction]] #todo 

---

## [[Body Centered Cubic Crystal Lattice]]

Again, this the name of the [[Crystal Lattice]] and also the [[Crystal Structure]] formed when imposing the [[Unitary Crystal Basis]] $(0,0,0)$.

![[BCC Slide.pdf]]

The [[Conventional Unit Cell]] for this structure is a 2 atom basis ($8 \times \frac 18 \text{ (corner) } + 1 \text{ (inside)}$) imposed on a [[Simple Cubic Crystal Lattice]].

> So for all of these we are expressing a complex crystal lattice, as a basis on a more simple one I think? Right?

---

## [[Cesium Chloride Crystal Structure]]

This is a [[Crystal Structure]] based on the [[Body Centered Cubic Crystal Lattice]] with a different atom in the body centered position.

![[CsCl CS.pdf]]

This is widely adopted by ionic compounds as the nearest neighbour of any atom is one of the opposite species.

---

## [[Sodium Chloride Crystal Structure]]

This crystal structure is another frequently adopted by ionic compounds. It can be expressed either as a [[Simple Cubic Crystal Lattice]] with a two atom heterogeneous [[Crystal Basis]] of #todo; or a [[Face Centered Cubic Crystal Lattice]] with a basis $r: (0,0,0), g: (\frac 12, \frac 12, \frac 12)$.

![[Pasted image 20210220142118.png]]

---

## [[Diamond Crystal Structure]]

> **Programming Note**: Wait have we been talking about [[Crystal Lattice]] or [[Crystal Structure]] for this entire time? I think structures... will need to rename #todo.

![[ZB Diamond Slide.pdf]]

This structure is called the [[Zincblend Crystal Structure]] if the red and green atoms are distinct, the [[Diamond Crystal Structure]] if they are not.

---

## [[Directions in Crystals]]

One of the most important features of [[Crystal Structure|Crystal Structures]] is that they are [[Anisotrophy|anisotropic]], having different behaviours traveling in directions in the [[Crystal Structure]], for example the speed of electron travel.

This means that it is advantageous to be able to talk about directions in a crystal structure fluently. We do this by identifying directions with the [[Lattice Vector]] $\r = h\vec{a} + k\vec{b} + l\vec{c}$. Since these are purely directional, their magnitude is irrelevant and thus we can scale them to be of use in calculation.

While in pure maths it would be traditional to talk about these as *unit vectors*, we instead use an integer based approach of taking $h, j, k \in \Z$, being integers such that $\mathrm{gcd}\,\set{h, j, k} = 1$.

These coefficients are known as [[Millar Indices]] and are written as $\mlri hkl$ (no commas). Further you use an overbar to represent negative values. For example $\r = -\vec{a} + 2\vec{b}$ would be written as $\mlri {\bar{1}}20$.

## Symmetrically Equivalent Directions

Due to the highly symmetric nature of crystal, many directions will be symmetrically equivalent. We represent these as $\mlrs hkl$.

For example in a [[Simple Cubic Crystal Structure]], $\mlrs 100 \equiv \mlri 100, \mlri {\bar1}00, \mlri 010$, etc.

---

## [[Planes in Crystals]]

Planes on which [[Lattice Point|Lattice Points]] lie are also specified using [[Millar Indices]]. These are denoted $\mlrp hkl$.

![[Pasted image 20210220144950.png]]

> #todo write this method up

### Symmetrically Equivalent Planes

As with [[012. Lec 2, Crystal Structure, 3D crystals#Symmetrically Equivalent Directions]] it is useful to address groups of symmetrically equivalent  planes together, we do this using the notation $\mlrps hkl$. Eg. $\mlrps 111 \equiv \mlrp 111, \mlrp {\bar1}11, \mlrp {\bar1}1{\bar1}$.

### Examples for [[Simple Cubic Crystal Lattice]]

![[Pasted image 20210220145025.png]]

---

![[Pasted image 20210220145419.png]]