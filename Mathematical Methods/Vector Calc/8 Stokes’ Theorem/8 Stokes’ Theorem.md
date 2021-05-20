# 8 Stokes’ Theorem

The [[7.6 The Divergence Theorem]] relates surface quantities (the *“flux"*, $\boldF \dp \boldn$) to volumetric quantities (the divergence $\divrg \boldF$). This same pattern is seen now with Stokes’ theorem, which relates a surface integral (of the curl of a vector field, $\curl \boldF$) to the line integral of $\boldF$ around the curve which is the boundary of $S$:

$$
\iint_S (\curl \boldF ) \dp \rd \boldS =
\oint_C \boldF \dp \rd \boldx.
$$

Stokes’ theorem applies to [[5.10 Orientable Surfaces]] that are [[7.5 Open and Closed Surfaces|7.5 Open]] (ie. that possess a bounding curve). In order to give a precise statement of the theorem, we need to specify a compatibility condition between the choice of normal vector on $S$ with the choice of direction of integration along the curve $C$.

- [[8.1 Corresponding Orientation between Surfaces and Boundary Curves]]
- [[8.2 Stokes’ Theorem]]

## 8.1 Applications of Stokes’ theorem

Recall these three facts:

1. A conservative vector field $\boldF$ is one for which there exists a potential $\phi$ such that $\boldF =\nabla \phi$ ([[2.19 Conservative Fields]]);
2. The theorem on properties of conservative fields ([[4.3 Properties of Conservative Fields]]) characterizes conservative vector fields in terms of properties of their line integrals; and
3. If $\nabla \times \boldF =\boldzero$, then $\boldF$ is irrotational ([[6.8 Curl-Free Fields]]).

**Remark:** We can now use Stokes’ theorem to prove that $\boldF$ conservative $\iff$ $\boldF$ is irrotational, i.e., $\exists \, \phi$ such that $\boldF = \nabla \phi$ if and only if $\nabla \times \boldF = \boldzero$. This makes sense of the observation at the end of section 4.2 that the conditions we derived on $\boldF$ (which we can now see are that $\nabla \times \boldF =0$) are indeed _sufficient_ as well as necessary for $\boldF$ to be conservative.

- [[8.3 Conservative <=> Irrotational]]
