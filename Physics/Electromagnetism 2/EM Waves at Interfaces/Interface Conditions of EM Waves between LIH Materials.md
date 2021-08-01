# Interface Conditions of EM Waves between LIH Materials

For now we will consider only the case of two [[LIH Materials]] with a clean boundary, characterised by $(\epsi_1, \mu_1)$ and $(\epsi_2, \mu_2)$ respectively.

In this case we take the following assumptions at the boundary,

- $\vJ_f = 0$ (kappa? surface currents? #todo)
- $\rho_f = 0, \sigma_f$
- The Vector Fields are continuous within the media themselves.
- cf Griffiths pg343

## Maxwell's Equations at the Boundary

These assumptions lead to the following specialisations of [[Maxwell's Equations in Materials]] at the boundary

$$
\begin{align}
\divrg \vD &= 0 \\
\divrg \vB &= 0 \\
\curl \vE &= -\p_t \vB \\
\curl \vH &= \vJ + \p_t \vD \\
\end{align}
$$

```ad-note
As discussed in its method, the Circulatory Laws can have non-zero RHS's as these vanish when a loop is taken to $0$ width.
```

## Solving

As we can see there are two types of equations above, needing two methods,

- Gauss Laws, cf [[Continuity under a Gauss Law]]
- Circulatory Laws, cf [[Continuity under a Circulatory Law]]

## Results

Applying the two methods specified above to our system we obtain,

- $D^\perp$ and $E^\parallel$ are continuous across the boundary,
- $B^\perp$ and $H^\parallel$ are continuous across the boundary.
