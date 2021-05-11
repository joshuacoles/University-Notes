# [[Unit Cell]]

A [[Unit Cell]] is a region of space which ca be repeatedly tessellated without gaps to assemble the lattice. These can be used to represent the crystal as a whole, any [[intensive properties]] of the crystal being equal to those of the unit cell (with extensive properties being difficult to reason about due to the "infinite" nature of the lattice, and the sheer size of real crystals with respect to their unit cell).

These are, as with [[Primitive Lattice Vector]], not unique. You can in fact assemble an $n$-dimensional cell by taking the area spanned by any $n$ [[Primitive Lattice Vector]].

## Area

The area of a [[Unit Cell]] is computable from the [[Primitive Lattice Vector]] as so,

- 2D, $\|\vec{a} \cp \vec{b}\|$
- 3D, $a \dp \|\vec{b} \cp \vec{c}\|$

# [[Primitive Unit Cell]]

A [[Primitive Unit Cell]] is the minimum [[Unit Cell]] containing a single [[Lattice Point]] (accounting for fractional points). As displayed in the diagram below.

![[unitcell_example2.gif]]

The [[Primitive Lattice Vector]] will span a [[Primitive Unit Cell]].

# [[Conventional Unit Cell]]

While [[Primitive Unit Cell|Primitive Unit Cells]] are mathematically useful we will often instead use other cells, such as the bottom right.

![[Pasted image 20210218220715.png]]

These cells might be chosen as they are easier to sketch and reason intuitively about. Or if they share symmetries which the crystal lattice they comprise.

# [[Wigner-Seitz Cell]]

The [[Wigner-Seitz Cell]] is a [[Primitive Unit Cell]] which contains all space which is closer to a given lattice point, than any other.

It is the unique [[Primitive Unit Cell]] which possesses the symmetries of the crystal lattice they comprise. An example is shown below.

![[Wigner-Seitz_Animation.gif]]

Note from Wikipedia:

> For *composite lattices*, (crystals which have more than one vector in their [[Crystal Basis|basis]]) each single lattice point represents multiple atoms.
> 
> We can break apart each Wigner–Seitz cell into subcells by further Voronoi decomposition according to the closest atom, instead of the closest lattice point.

## Method for Construction
1. Pick a [[Lattice Point]].
2. Draw lines to all nearby lattice points.
3. The region enclosed by the perpendicular bisectors (either lines in 2D or planes in 3D) of all these lines in the [[Wigner-Seitz Cell]].