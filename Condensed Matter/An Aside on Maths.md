- [[Bravais Lattices]]: [Wikipedia](https://en.wikipedia.org/wiki/Bravais_lattice).
- Lattice in Group Theory: [Wikipedia](https://en.wikipedia.org/wiki/Lattice_(group)).
	> In geometry and group theory, a lattice in $\R^n$ is a subgroup of the additive group $\R^n$ which is isomorphic to the additive group $\Z^n$, and which spans the real vector space $\R^n$.
	> 	
	> In other words, for any basis of $\R^n$, the subgroup of all linear combinations with integer coefficients of the basis vectors forms a lattice. A lattice may be viewed as a regular tiling of a space by a primitive cell.


- > Note that a pattern with this lattice of translational symmetry cannot have more, but may have less symmetry than the lattice itself
	- A [[Crystal Basis]] can remove symmetries but it cannot add any. ^730d59

## Classification in 2D

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
