# Continuity under a Gauss Law

Given the Vector Field $\vX$ (continuous within each region), governed by a null-Gauss Law

$$ \divrg \vX = 0. $$

Consider a pillbox $P$,

- length $l$, under a limit of $l \to 0$,
- face area $A$,

splitting the surface into three components $S_1, S_2, S_3$ as shown in diagram below.

![[Clipboard 31 Jul 2021 at 13.11.png]]

```ad-info
title: Original Image
collapse:
![[IMG_48739B9CACC1-1.jpeg]]
```

Applying the [[7.6 The Divergence Theorem|Divergence Theorem]] we can express null-Gauss Law as,

$$
\iint_S \vX \dp \d\vS = 0
$$

which by [[Linearity of the Integral]] we can split up into the three components,

$$
\iint_{S_1} \vX \dp \d\vS +
\iint_{S_2} \vX \dp \d\vS +
\iint_{S_3} \vX \dp \d\vS = 0
$$

of which that on $S_3$ can be taken to zero under $l \to 0$. From here we expand the surface normals in the integrals,

$$
\iint_{S_1} \vX \dp (-\uvec{n}) \d S +
\iint_{S_2} \vX \dp \uvec{n} \d S = 0.
$$

Now, applying the assumption listed that $\vX$ is continuous within the regions themselves, we can take $A$ to be sufficiently small such that $\vX$ is constant across it thus giving us,

$$
AX_1^\perp + -AX_2^\perp = 0
$$

where $X_i^\perp = X_i \dp \uvec{n}$, and trivially,

$$
X_1^\perp = X_2^\perp.
$$
