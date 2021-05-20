# 7 The Divergence Theorem

The Divergence Theorem is one of the most important and applicable identities of Vector Calculus. It states that for object occupying a volume $\Omega \sub \R^3$, having a surface $S$, that,

$$ \iiint_\Omega \divrg \boldF \, \rd V = \iint_S \boldF \dp \rd \boldS. $$

It is essentially a conservation law, indicating that the [[5.15 Flux Integral|flux]] of $\boldF$ through the surface $S$ of the object (the right hand-side) is equal to a volume integral (of the divergence of $\boldF$). 

Its main interest however is in how it relates Volume Integrals to Surface Integrals, reducing the dimension of the problem and thus hopefully simplifying it.

At a deeper level this result can be viewed as a higher–dimensional analogue of the Fundamental Theorem of Calculus, relating the behaviour of a differential over an extent, to the behaviour of the original function on the boundary.

## 7.1 Geometrical definitions

To prove this we must first introduce some geometric definitions so that we can rigorously formulate our workings.

For our current purposes we assume that $\Omega \sub \R^3$ will be a smooth volume in $\R^3$, calling upon the following constructs,

- Boundary [[Definition 2.22]]
	- This surface need not be wholly connected, ie it may have two disjoint non continuous parts (ball with a ball cavity).	
- Closure [[Definition 2.18]]
- Interior [[Definition 2.12]]

---

- [[7.1 Domains]]
- [[7.2 Bounded Domains]]
- [[7.3 Convex Domains]]
- [[7.4 Equivalent Characterisation of Convex Domains]]
- [[7.5 Open and Closed Surfaces]]

## 7.2 The divergence theorem

- [[7.6 The Divergence Theorem]]
- [[7.7 Example Computation with the Divergence Theorem]]
