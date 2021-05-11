# Crystal Symmetries

> ###### cf.
> ```dataview
> list from [[Crystal Symmetries]]
> ```
> ---
> - [[Bravais Lattices An Aside on Maths#^730d59]]

Each [[Crystal Structure]] is distinguished by its Symmetries. These can include

- Translations by a [[Lattice Vector]] $\vR$.
- Inversions through a point, $(\r_0 + \r) \to (\r_0 -\r)$.
- Reflection in a plane.
- Rotations around a point (normally generated of the form $\frac{360\deg}{n}$).

Or some combination of these.

> **Note**: This combination can be true precluding individual components. For example a structure may be symmetric under 
>
> $$ r = \mathrm{rot}(x^c) \circ \mathrm{translate}(x) $$
> 
> but not $\mathrm{translate}(x)$ and $\mathrm{rot}(x^c)$ individually.

These symmetries link deeply with [[Group Theory]] which gives us the result that there are a finite number of [[Bravais Lattices]] in 2D and 3D.

## Addition of [[Crystal Basis]]

The addition of a [[Crystal Basis]] onto the [[Crystal Lattice]] can only **remove** symmetries from the system, not add them. This has the effect of increasing the number of symmetrically distinct [[Crystal Structure|Crystal Structures]].

For example the addition of the basis as shown below removes the rotational symmetry of the [[Square Crystal Lattice]] that the [[Crystal Basis]] has been imposed on.

![[Pasted image 20210219133742.png]]

This leads to a total of 17 distinct [[Crystal Structure|Crystal Structures]], called the [[Wallpaper Groups]]. #FR 
