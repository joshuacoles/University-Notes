# Empirical Definition of the Magnetic Field

Given two moving charges as described below,

![[Clipboard 2 Feb 2021 at 19.59.png]]

We would find a total force of,

$$
\vF = \vF_e + \vF_m
$$

Where $\vF_e$ is the [[Electrostatic Force]] between then as $\vF_m$ is an additional [[Magnetic Force]] caused by their relative motion.

As seen in [[Empirical Definition of Electric Field]] we form a relation between the empirical force experienced by an object, and a formal Vector Field we use to describe this phenomena. For the [[Electric Field]] this is shown below,

$$
\vF_e = \frac{1}{4\pi\epsi_0} \frac{Q_1 Q_2}{r^2} \uvec{e}_r 

\qquad\to\qquad

\begin{align*}
\vF_e &= Q_2 \vE \\
\vE   &= \frac{1}{4\pi\epsi_0} \frac{Q_1}{r^2}
\end{align*}
$$

Thus taking the same approach to the [[Magnetic Force]] component, we know the empirical force is given by

$$
\vF_m = \frac{\mu_0}{4\pi} \frac{Q_1Q_2}{r^2} \vv_2 \cp (\vv_1 \cp \uvec{e}_r)
$$

where $\mu_0$ is the [[Permeability]] of Free Space and hence we choose a formal Vector Field of,

$$
\begin{align*}
\vF_m &= Q_2(\vec{v}_2 \cp \vB) \\
\vB &= \frac{\mu_0}{4\pi} \frac{Q_1}{r^2}(\vec{v}_1 \cp \uvec{e}_r).
\end{align*}
$$

From this we can deduce the following,

1.  $\vB = 0 \iff \vec{v}_1 = 0 \,\lor\, \vec{v}_1 \parallel \uvec{e}_r$
2.  $B \perp \uvec{e}_r \land B \perp \vec{v}_1$.

## Currents and the Biot-Savart Law

Whereas the above focuses on moving charges, now we move our focus to **Currents**.

Considering a small component $\d r$ of a wire, with moving charges $Q_1$, as shown below,

![[Clipboard 3 Feb 2021 at 13.49.png]]

We have a [[Magnetic Field]] given as

$$
\vB(\r) = \frac{\mu_0}{4\pi} \frac{Q_1}{r^2} (\vv_1 \times \uvec{e}_r).
$$

from above. We can clearly see that $Q_1 \vv_1 = I\d{\r}$ (note $\vv_1 \parallel \d \r$), and thus we can say the contribution $\d \vB$ of this small wire component is,

$$
\d\vB(\r) = \frac{\mu_0}{4\pi} I \frac{\d\r \cp \uvec{e}_r}{r^2}.
$$

This is known as the [[Biot-Savart Law]] and is one of the Empirical Laws we started with in [[Lec 2, Maxwells Eqs Intro#^1ce810]].

> **Programming Note**: Replace $\d\r$ with $\d\vl$ to make $\d\r$ clearly different from $\uvec{e}_r$ which is...?

- This confirms that $\vB$ from our thought experiment is in fact the [[Magnetic Field]].
- This is only valid for constant $\vv_1$ (and thus constant $I$).

---