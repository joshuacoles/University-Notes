# Crystal Structure

Has two components,

- [[Crystal Lattice]]
- [[Crystal Basis]]

The lattice is an infinite set of points determined by the translational symmetries of the structure. With the crystal structure as a whole being distinguished by the [[Crystal Symmetries]] of the combined [[Crystal Lattice]] and [[Crystal Basis]].

> This is done as will be seen later, as the choice of [[Primitive Lattice Vector]], [[Unit Cell|Units Cells]] or [[Crystal Basis]] representation is not unique for a given physical structure.

This is then turned into a physical crystal structure by the addition of the [[Crystal Basis]], which is a microscopic structure which decorates each **lattice point**.

This structure strongly influences the properties of the material.

## Crystal Symmetries

As discussed in [[Crystal Structure]], each structure is distinguished by its [[Crystal Symmetries]]. These can include,

- Translations by a [[Lattice Vector]] $\vec{R}$.
- Inversions through a point, $\r \to -\r$.
- Reflection in a plane.
- Rotations around a point (normally generated of the form $\frac{360\deg}{n}$).

Or some combination of these.

> **Note**: This combination can be true precluding individual components. Ie it is only symmetric under $r = \mathrm{rot}(x^c) \circ \mathrm{translate}(x)$, not $\mathrm{translate}(x)$ and $\mathrm{rot}(x^c)$ individually.

This links deeply with [[Group Theory]] and gives us the [[Bravais Lattices]] in 2D and 3D.

### Addition of the Basis

The addition of a [[Crystal Basis]] onto the [[Crystal Lattice]] can only **remove** symmetries from the system, **not add them**. This leads to an increase in the number of symmetrically distinct Crystal Structures).

For example the addition of the basis as shown below removes the rotational symmetry of the [[Square Crystal Lattice]] that the [[Crystal Basis]] has been imposed on.

![[Pasted image 20210219133742.png]]

This leads to a total of 17 distinct [[Crystal Structure|Crystal Structures]], called the [[Wallpaper Groups]]. #todo.

## Packing Fraction

The Packing Fraction of a Crystal Structure is the fraction of the volume of the [[Unit Cell]] they occupy.
