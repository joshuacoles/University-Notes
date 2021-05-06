# [[Atomic Moment]]

The atomic angular momentum has contributions from spin and orbital components as discussed above, with the overall equation.

$$
\vec{\mu} = -g\vJ = \vec{\mu_\vL} + \vec{\mu_\vS} = -\mu_B \vL - g_0\mu_B\vS
$$

where $\hbar\vL$ and $\hbar\vS$ are the total Orbital and Spin of the electrons in the atom and $g$ is the [[Landé g-factor]] which represents the different [[G-Factor|G-Factors]] present in the equation above ($g_L = 1, g_S = g_0 = 2$).

For a closed shell of electrons $\vL = \vec0 \land \vS = \vec0$ hence there is no Permanent Magnetic Moment.

## Orbital

![[Pasted image 20210506174707.png]]

For the orbital component we assume the electron orbits in a circular manner around a point, radius $r$, angular frequency $\omega$, giving a current,

$$
\begin{align}
i &= \frac{-e}{\frac{2\pi}{\omega}} \\&= \frac{-e\omega}{2\pi} .
\end{align}
$$

This forms a loop enclosing an area $A = \pi r^2$, leading to a [[Magnetic Moment]],

$$
\mu = iA\vn = \frac{-e\omega}{2\pi} \pi r^2 = -e \frac{\omega r^2}{2\pi}
$$

which we can write in terms of the Orbital Angular Momentum $\hbar\vl$, which has a magnitude, $\|\hbar\vl\| = m\omega r^2$, this is quantised. Giving us,

$$
\mu = \frac{-e\hbar}{2m} \vl = -\mu_B \vl
$$

The variable $l$ is a [[Quantum Number]] and hence the quantity,

$$
\mu_B = \frac{e\hbar}{2m} = 5.79 \times 10^{-5} \unit{eV. T^{-1}}
$$

is chosen as a natural unit for [[Magnetic Moment|Magnetic Moments]]. This is the [[Bohr Magneton]]. This is very small number, remembering that a Tesla is very large.

> The direction of the moment is such that $i$ is clockwise looking along $\mu$.

These are summed up such that,

$$
\vec{\mu}_L = -\mu_B\sum \vl = -\mu_B\vL.
$$

For a full shell there are equal electrons traveling in either direction and hence $\vL =\vec0$ (whyyyyyy #todo).

## Spin

A stationary electron as a spin,

$$
\vec{\mu}_S = -g_0 \mu_B \vs
$$