---
panopto: https://uniofbath.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=f1a3cf4e-de1f-4b10-bb2e-acb700ccd149
sibling:
  - [[Lec 7, Currents, Magnetic Fields]]
  - [[Lec 9, Waves in a Vacuum]]
---

## Time varying Currents & Fields

So far we have restricted ourselves to steady [[Current Density|Current Densities]] $\J(\r)$ and static time distributions in a vacuums $\rho(\r)$.

This led to the following observations,

1. [[Coloumb's Law]] / [[Gauss's Law]], ${\divrg \E = \frac{\rho}{\epsilon_0}}$ ^f3bb6c
2. [[Electrostatics|Electrostatic]] field is [[Conservative Vector Fields|conservative]], ${\curl \E = 0}$ ^f0f8d1
3. No magnetic-monopoles, ${\divrg \B = 0}$
4. [[Ampere's Law]], ${\curl \B = \mu_0 \J}$ ^f4171c

Note at this point $\E$ and $\B$ are **uncoupled**. There are two distinct phenomenon, called _"electricity"_ and _"magnetism"_. This as we've seen hinted earlier with [[Lec 6, Introduction to Magentics, Lorentz Force#E B Special Relativity]] is false.

Of these observations, (1) & (3), are correct in the general case. However (2) & (4), which talk about the curl of the relevant fields, need modification to be correct in the time-varying case.

## [[Faraday's Law of Induction]]

A static [[Magnetic Field]] $\B$ induces a current in a moving circuit (and vice-versa). The [[Electro-motive Force|emf]] (the electric potential difference, aka [[Voltage]]) induced is,

$$
\varepsilon = - \frac{\partial}{\partial t} \Phi_\B
$$

^a23c60

> **Programming Note**: We want to define $\Phi$ notation somewhere and put [[Physics/Electromagnetism 2/Cohesive Part 1/Maxwell's Equations]] into it because it is nice.

This is [[Faraday's Law of Induction]]. Note we define $\Phi$ as,

$$
\Phi_\B = \int_S \B \cdot \d\vec{S},
$$

where $S$ is some surface, often (unfortunately) given by context.

The [[Electro-motive Force]] $\varepsilon$ is an electric potential difference **not** derived from [[Coloumb's Law]], induced empirically by an additional force $\vF'$.

To try to adapt our current understandings to this case we take the following thought experiment. Imagine the current is a single charge $Q$ moving around the circuit $C$.

Then $Q\eps$ is the work done moving round the circuit $C$ (bounding the surface $S$), which is obviously given by,

$$
Q\eps = W = \int_C \vF' \cdot \d\r \implies \eps = \frac 1Q \int_C \vF' \cdot \d\r,
$$

which by [[#^a23c60]], we have,

$$
- \frac{\partial}{\partial t} \int_S \B \cdot \d\vec{S} = \frac 1Q \int_C \vF' \cdot \d\r.
$$

We have two choices,

1. $\B$ is static, the circuit (ie, $S$ and $C$) are moving.
2. The circuit is static, $\B$ is changing with time.

In the first case, $\vF' = Q(\vec{u} \cp \B)$ (form the [[Lorentz Force]]), where $\vec{u}$ is the additional velocity of $Q$ due to the motion of $C$.

However in the second case, since $\vec{u}$ from above would be $0$, the force $\vF'$ must be due to an **extra [[Electric Field]]**.

> This is obvious as $\vF' = Q(\E' + \vec{u} \cp \B')$ , if $\vec{u} = 0 \implies \vF' = Q\E'$.

Since these are equivalent depending on your [[Frame of Reference]], we choose 2 and take,

$$
\eps = \int_C \E' \dp \d\r = - \frac{\partial}{\partial t} \int_S \B \cdot \d\vec{S}.
$$

> Note we lost the factor of $\frac 1Q$ as that got eaten in $\vF' = Q\E'$.

Applying [[8.2 Stokes’ Theorem]] on the LHS,

$$
\int_S \curl \E' \dp \d\vec{S} = - \int_S \frac{\partial\B}{\partial t} \cdot \d\vec{S}
$$

> Moving the $\frac{\partial}{\partial t}$ into the integral as $S$ is time invariant. See #todo some maths for that.

As we see once again, since $S$ is arbitrary, the integrands must be equal, thus giving us,

$$
\curl \E' = - \frac{\partial\B}{\partial t}.
$$

Which when considering the combination of $\E_s$ & $\E'$, we get,

$$
\begin{align*}
\E &= \E_S + \E' \\
\curl \E &= \curl \E_S + \curl \E' \\
\curl \E &= 0 - \frac{\partial\B}{\partial t} ,\\
\end{align*}
$$

So,

$$
\curl \E = - \frac{\partial\B}{\partial t}
$$

Which **is** one of the [[Physics/Electromagnetism 2/Cohesive Part 1/Maxwell's Equations]]

> **Programming note**: we will want to link to the empirical reasoning for each law when we expand.

1. This tells us that in general, [[Electric Field|Electric Fields]] are **not** conservative, so no [[Electrostatic Potential]] (tho you can recover it partially using the [[Magnetic Potential]] however this is a [[EM 3]] topic).

2. Any time $\B$ is a rotational field, so is $\E$. (???)

## The [[Maxwell–Ampére Law]]

To see ${\curl \B = \mu_0 \J}$ from [[#^f4171c|point 4]], is incomplete, we can take the divergence,

$$
\divrg (\curl \B) = \divrg (\mu_0 \J),
$$

where the LHS is always $0$ by [[Vanishing Divergence of Curl]], however the RHS is not necessarily always. Thus we see that [[Ampere's Law]] is only true if $\J$ is in fact divergence free (only rotational).

To get a more general expression for $\divrg \J$, we consider the [[Conservation of Charge]], which equivalent to that of energy, says charge cannot be created nor destroyed.

Considering a volume $V$, enclosed by a surface $S$, with a time dependent [[Charge Dentity]] $\rho(\r, t)$.

Thus by [[Conservation of Charge]], it is clearly the case that the following are equal,

- The rate of flow of charge across $S$.
- The rate of change of charge inside $V$.

This gives us an equation,

$$
\int_S \J \cdot \d\vec{S} = - \frac{\partial}{\partial t} \int_V \rho(\r, t) \,\d{V}.
$$

> The negative sign is there as the LHS is the charge leaving the volume so equal to -'ve of the change

Applying the [[Divergence Theorem]] to the LHS we get,

$$
\int_V \divrg \J \,\d{V} = \int_V - \frac{\partial \rho}{\partial t} \,\d{V},
$$

and by the same argument about arbitrary integration bounds we can conclude that,

$$
\divrg \J = - \frac{\partial \rho}{\partial t}.
$$

Known as the [[Continuity Equation for Electric Charge]].

Now we can see that while $\divrg J \neq 0$ in all cases, it is true that

$$
\divrg \J  + \frac{\partial \rho}{\partial t} = 0,
$$

in all cases. So applying [[Gauss's Law]],

$$
\divrg \J  + \frac{\partial}{\partial t} \(\epsi_0\(\divrg\E\)\) = 0,
$$

and by more magic moving of differentials which i need to #todo lookup, we have,

$$
\divrg \(\J + \epsi_0 \frac{\partial \E}{\partial t}\)= 0.
$$

Which we can choose to replace the RHS of the troublesome equation,

$$
\divrg (\curl \B) = \divrg \(\J + \epsi_0 \frac{\partial \E}{\partial t}\),
$$

which by more maths magic #todo, gives us,

$$
\curl \B = \mu_0\(\J + \epsi_0 \frac{\partial \E}{\partial t}\).
$$

Known as the [[Maxwell–Ampére Law]] and the final one of our generally correct, [[Physics/Electromagnetism 2/Cohesive Part 1/Maxwell's Equations]].

The extra term that we have added in this situation is known as the [[Displacement Current Density]] (as it has the same units as $\J$).

> Interestingly this is really Maxwell's major / primary contribution, as it couples $\B$ back to $\E$. This however leads directly to the [[Electromagnetic Field]] and [[Electromagnetic Waves]], aka _light_.

> Why was this missed before Maxwell however? This is due to its relatively small contribution, taking it back through [[Stokes' Theorem]] we get,
> $$ \int*C \B \cdot \d\r = \mu_0 I + \epsi_0 \mu_0 \dot\Phi*\E$$
> Where the $\epsi_0 \mu_0 \dot\Phi_\E$ term is tiny. However it was observed by Hertz in 1887.

## [[Physics/Electromagnetism 2/Cohesive Part 1/Maxwell's Equations]] in Vacuum

1. Gauss, $\divrg \E = \frac{\rho}{\epsi_0}$
2. Faraday, $\curl \E = -\partial_t \B$
3. No monopole, $\divrg \E = 0$
4. MA Law, $\curl \B = \mu_0\(\J + \epsi_0 \frac{\partial \E}{\partial t}\)$
