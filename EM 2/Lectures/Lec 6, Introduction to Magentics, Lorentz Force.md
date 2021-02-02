> - [Panotpto](https://uniofbath.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=c0dc122f-e261-450e-82a0-acb60126279b)
> - #lecture

## The [[Magnetic Field]] $B$

Given two moving charges as described below,

![[Clipboard 2 Feb 2021 at 19.59.png]]

We would find a total force of,

$$
\F = \F_e + \F_m
$$

Where $\F_e$ is the [[Electrostatic Force]] between then as $\F_m$ is an additional [[Magnetic Force]] caused by their relative motion.

In [[Lec 4, Empirical Derivation of Gauss's Law]], we obtained the following relation,

> See that table I made in 6th form I thik

###### Empirical Force
$$\F_e = \frac{1}{4\pi\epsilon_0} \frac{Q_1Q_2}{r^2} \uvec{e}_r$$

###### Field Formalism
$$\begin{align*}
\F_e &= Q_2\E \\
\E &= \frac{1}{4\pi\epsilon_0} \frac{Q_1}{r^2}
\end{align*}$$

Thus taking the same approach to the [[Magnetic Force]] component,

###### Empirical Force
$$ \F_m = \frac{\mu_0}{4\pi} \frac{Q_1Q_2}{r^2} \vec{v}_2 \times (\vec{v}_2 \times \uvec{e}_r) $$

Where $\mu_0$ is the [[Permeability of Free Space]].

###### Field Formalism
$$\begin{align*}
\F_m &= Q_2(\vec{v}_2 \times \B) \\
\B &= \frac{\mu_0}{4\pi} \frac{Q_1}{r^2}(\vec{v}_1 \times \uvec{e}_r)
\end{align*}$$

Notes,
1. $\B$ is the [[Magnetic Field]] due to the charge $Q_1$ at the origin, moving with constant velocity $\vec{v}_1$.
	- Units are in $\mathrm{T}$ the Tesla. Equivalent to $\frac{\mathrm{N \cdot s}}{\mathrm{C \cdot m}}$.
2. $\B = 0 \iff \vec{v}_1 = 0 \,\lor\, \vec{v}_1 \parallel \uvec{e}_r$
3. $B \perp \uvec{e}_r \land B \perp \vec{v}_1$.
4. Total force on the charge (electric plus magnetic) is called the [[Lorentz Force]],
	$$ \F = Q (\E + \vec{v}_2 \times \B)$$

---

