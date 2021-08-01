# Electrostatics

Electrostatics is the sub-field dedicated to the case where there are only fixed charges, ie

$$ \dot\rho = 0 \implies \vJ = 0. $$

In this case the electric field can be expressed solely in terms of the [[Electrostatic Potential]],

$$
\vE_s = -\nab \phi
$$

```ad-info
The negative sign is added wlog as we are dealing with a potential field.
```

## Specialisations of Maxwell's Equations

As a consequence of this we have,

$$
\frac{\rho}{\epsi_0} = - \nab^2 \phi
$$

for [[Gauss's Law]] and,

$$
\curl \vE_s = \p_t \vB = 0
$$

for the [[Maxwell–Faraday equation]].

```ad-warning
These are **not** the full Maxwell Euqations, they are only valid when $\p_t\rho = 0 \implies \vJ = 0$, ie there are no moving charges / currents.
```

## Electric Field is Conservative Field

![[Clipboard 2 Feb 2021 at 19.13.png]]

The empirical claim is that [[Electrostatics|Electrostatic]] fields are [[Conservative Vector Fields]], ie the work done done moving a charge $Q$ around a closed path such as $C$ in the presence of an Electrostatic [[Electric Field]] is $0$.

The work done moving along the path $C$ is given by,

$$
\begin{align*}
W
&= \int_C \vec{F}_e \cdot \d \r \\
&= Q \int_C \vE_s \cdot \d \r = 0
\end{align*}
$$

We can apply [[Stokes' Theorem]], given as (given a surface $S$),

$$
\int_{\partial S} \vE_s \cdot \d \r = \int_S (\nabla \times \vE) \cdot \d \vec{S}
$$

Of which in our cases we identify $C = \partial S$. Thus applying it, we obtain,

$$
W = Q \int_C \vE_s \cdot \d \r = \int_S (\nabla \times \vE_s) \cdot \d \vec{S} = 0
$$

And since $S$ and $C$ are arbitrary we can conclude from the conservative nature of $\vE$ that,

$$
\nabla \times \vE_s = 0,
$$

in the Electrostatic case.
