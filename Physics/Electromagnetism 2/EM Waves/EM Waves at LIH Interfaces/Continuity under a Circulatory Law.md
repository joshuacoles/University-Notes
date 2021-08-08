# Continuity under a Circulatory Law

Given the Vector Field $\vX$ (continuous within each region), governed by a Circulatory Law

$$ \curl \vX = \vF(\r, t) $$

where $\vF$ is sufficiently smooth. Consider a closed loop $C$, the boundary of surface $S$, of

- width $w$ under $w \to 0$ such that $wh \to 0$
- height $h$

split into 4 sides $C_1, C_2, C_3, C_4$ with directions described in the diagram below.

![[Clipboard 31 Jul 2021 at 13.20.png]]

```ad-info
title: Original Image
collapse:
![[Pasted image 20210730162427.png]]

Change $C_1, C_3 \parallel \uvi \land C_2, C_4 \parallel \uvj$
```

Applying [[8 Stokes’ Theorem]] we can express the null-Circulatory law as,

$$
\iint_C \vX \dp \d \vl = \int_S \vF(\vr, t) \dp \d \vS
$$

we first focus on the RHS, which we can take to $0$ under the limit $w \to 0 \implies A \to 0$. Hence

$$
\iint_C \vX \dp \d \vl = 0
$$

which by [[Linearity of the Integral]] we can split up into the four components,

$$
\iint_{C_1} \vX \dp \d\vl +
\iint_{C_2} \vX \dp \d\vl +
\iint_{C_3} \vX \dp \d\vl +
\iint_{C_4} \vX \dp \d\vl = 0.
$$

of which under the same limit of $w \to 0$ we can take the integrals over $C_2$ and $C_4$ to $0$ leaving us,

$$
\iint_{C_1} \vX \dp \d\vl +
\iint_{C_3} \vX \dp \d\vl = 0.
$$

which expressed in terms of the basis $\uvec{n}, \uvec{t}$ is,

$$
\iint_{C_1} \vX \dp \uvec{t} \rd l +
\iint_{C_3} \vX \dp (-\uvec{t}) \rd l = 0.
$$

Now, applying the assumption listed that $\vX$ is continuous within the regions themselves, we can take $h$ to be sufficiently small such that $\vX$ is constant across it thus giving us,

$$
hX_1^\parallel + -hX_2^\parallel = 0
$$

where $X_i^\parallel = X_i \dp \uvec{t}$, and trivially,

$$
X_1^\parallel = X_2^\parallel.
$$
