---
aliases: Polarisation
---

# Wave Polarisations

Previously we discussed that EM [[Plane Waves]] are [[Transverse Wave]] (see [[Lec 10, Properties of Plane Waves#What is the Polarisation Vector]]), expressed mathematically as,

$$
\vE = \uvi\, E_0 \exp(i(k_z z - \omega t)).
$$

However this is only a specific case of [[Electromagnetic Waves]], in general all we determined is that $\vec{k}\perp\vE$ (and $\vec{k}\perp\vB$). (see [[Lec 11, Impedance of Free Space#Note on Polarisation]], noting plane waves are an example of [[Linear Polarisation]].

Moving to the more general case we can consider waves where the [[Polarisation Vector]] $\vE_0$ has a time dependence, expressed as,

$$
\vE(z, t) = \vE_0(t) \exp(i(k_z z - \omega t)).
$$

We say that the _polarisation state_ is the behaviour of $\vE$ in the transverse plane, and is determined by $\vE_0$ and is not fixed by [[Maxwell's Equations]].

For an example of this we can apply the [[Principle of Superposition]], considering the superposition of two [[Plane Wave|Plane Waves]] $\vE_x$ and $\vE_y$ oscillating in the same transverse plane, one with a _phase lag_ $\beta \in [0, 2\pi)$,

$$
\begin{align*}
\vE_x(z, t) &= \uvi\, E_{0x} \exp(i(k_z z - \omega t))
\\
\vE_y(z, t) &= \uvj\, E_{0y} \exp(i(k_z z - \omega t + \beta))
\\\\

\vE(z, t) &= \vE_x(z, t) + \vE_y(z, t).
\end{align*}
$$

The system now being parameterised by the constants $E_{0x}$, $E_{0y}$, $\beta$, $k$ & $\omega$. Where the first three constants describe the _polarisation state_.

> **Programming Note**: Can we get a playground of this?

This can express different types of polarisation, shown below,

![[Plane Polarisation]]

![[Circular Polarisation]]

![[Elliptical Polarisation]]

![[Natural Light]]
