# Chapter 4 Conservative forces

As we mentioned at the start of Chapter 3 and in [[2.19 Conservative Fields]], many physical forces possess the special property of being conservative; this then usefully simplifies our study

Physically, a conservative force is typically defined as one where work performed by the force on a particle moving along a path $C$ depends only on the chosen start and end points of $C$ and not the particular path taken (cf. via (4.8)).

Mathematically we will say a force is conservative if it is defined by a conservative vector field $\boldF$. In [[2.19 Conservative Fields]], we defined the vector field $\boldF$ to be conservative if it can be expressed as the gradient of a potential, i.e. if there exists a scalar potential $\phi (\boldx )$ for which $\boldF = \nabla \phi$. The point of this section is to establish that these physical and mathematical definitions agree.

We start by exploring how the scalar line integral of a vector field $\boldF$ simplifies if $\boldF = \nabla \phi$.

- [[4.1 Fundamental Theorem of Calculus for Inner Product Integrals]]

However not all [[2.19 Conservative Fields]] have this property, if they are not

- [[4.2 Simply Connected]]
	- [[4.4 Example of Failure of Potential Grad to Be Conservative in non-Cimply Connected Field]]

Now we can state an important theorem concerning conservative fields.

- [[4.3 Properties of Conservative Fields]]

## 4.1 Conservation of energy

Work is defined informally as the product of force $\times$ displacement. The product $\boldF \cdot \rd \boldx$ makes it abundantly clear that only the component of force in the direction of the displacement is relevant to computing the amount of work done.

For example, for gravity near the Earth’s surface under the Cartesian approximation $\boldg =(0,0,-g)$, work is only done moving a particle through a vertical distance and not through horizontal motion.

Correspondingly, the potential $\phi$ has units of force $\times$ displacement. For example measuring force in Newtons and displacement in metres yields the units of $\phi$ as Newton metres (Nm).

Recall that $1$N=1kg m $\mathrm {s}^{-2}$ so the dimensions of $\phi$ are $[\phi ]=ML^2T^{-2}$: mass $\times$ length${}^{2}$ $\times$ time${}^{-2}$. Equivalently, the energy required to move an object a distance $1$ metre against a force of $1$ Newton is one Joule. The following shows that, further, via Newton’s Second Law we can relate work done not just to changes in potential energy but also to a change in kinetic energy.

- [[4.5 Example of Conservation of Energy in Conservative Force Fields]]

## 4.2 Exact differentials

We can re-cast the discussion above in terms that will allow us, in time, to see the above results as part of a bigger and even more exciting picture!

- [[4.6 Differential of a Scalar Function]]
- [[4.7 Exact Differential of a Scalar Function]]
