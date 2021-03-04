---
marginote: marginnote3app://note/6FC0CD1F-D03A-467E-B2FC-7DC3A5B1B542
---

As in standard real calculus we can express an integral in the form of a [[Riemann Sum]], ie for the case of 2 dimensions,

Given $\Omega \in \R^n$ subdivide $\Omega$ into $N$ mutually exclusive fully covering sub-regions $\lst{A}{1}{N} \in \R^n$ with areas $\lst{\delta A}{1}{N}$. In each sub-region $A_i$ choose an arbitrary point $\vec{x}_i \in A_i$.

Then, for any scalar function $f$ on $\Omega$,

$$
\iint_\Omega f(\vec{x}) \,\d A = \lim_{N \to \infty} \sum_{i = 1}^{N} f(\vec{x}_i) \,\delta A_i,
$$

provided that the limit exist, and is independent of the choice of $A_i$ and $x_i$

> Programming Note: #todo, do we want to generalise this to other qunatities such as surface shit we see later.
