# 11 The Residue Theorem

In this chapter we discuss a theorem that makes it quite easy to compute contour integrals of functions with [[10.3 Isolated Singularities]]. Remarkably, this theory is helpful even for evaluating certain integrals in real analysis.

## Winding numbers

In the following theory, we will need to know how many times a given contour winds around a specific point. 

This is often clear geometrically, but there is also a more analytic way to determine this [[11.1 Winding Number]].

[[11.2 Properties of the Winding Number]]

## Residues

If we have a Laurent series $\sum_{k = -\infty}^\infty a_k (z - z_0)^k$ and wish to integrate along a contour term by term, then the term with index $-1$ behaves differently from the rest. This is because it alone does not have a primitive in $\C \setminus \{z_0\}$ (as seen in Example [7.4](the-local-cauchy-theorem.html#exm:pole)). The corresponding coefficient $a_{-1}$ therefore has special relevance.

![[11.3 Residue]]

![[11.4]]

![[11.5 The Residue theorem]]
![[11.6 Applications of the Residue Theorem to Real Integrals]]