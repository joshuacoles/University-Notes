# EM Waves in Idealised LIH Insulator

From the derivation of the [[Governing Equation of EM Waves in an LIH Material]], in the case of an [[Governing Equation of EM Waves in an LIH Material#Idealised Insulators|Idealised Insulator]] we obtain an equation,

$$
\nab^2 \vE =
\mu\epsi\frac{\p^2 \vE}{\p t^2}
$$

which we can clearly see is a [[Wave Equation]] in $\vE$. This is similar to the vacuum case (cf [[Lec 9, Waves in a Vacuum]]) and hence we can determine similar quantities in a similar manner.

We choose as our solution a [[Plane Wave]]

$$
\vE = E_0 \pw{kx - \omega t}\uvec n
\qquad E_0 \in \C
$$

where $\uvec n$ is the direction of propagation.

## Phase Speed and Refractive Index

This equation is very similar to that seen in [[Lec 9, Waves in a Vacuum#Wave solutions]] however it has a different prefactor and thus a different [[Phase Velocity]] given as,

$$ v_p = \frac \omega k = \frac 1{\sqrt{\epsi\mu}} = \frac c{\sqrt{\epsi_r\mu_r}}. $$

We now introduce the [[Refractive Index]] $n$ as the ratio of the phase velocity of light in a medium to the speed of light,

$$
n = \frac c{v_p} = \sqrt{\epsi_r\mu_r}.
$$

```ad-note
For non-magnetic materials $\mu_r = 1$ and hence $n = \sqrt{\epsi_r}$ knwon as [[Maxwell's Relation]].
```

## Magnetic Field

> [Margin Note](marginnote3app://note/2EDA3946-9AC0-459E-9C86-A99CBF90C797)

By applying the same logic as [[Lec 11, Impedance of Free Space#vH H Field Fields and Impedance Wave Impedance|Lec 11 > H Fields and Impedance]] to the plane wave discussed above we obtain,

$$
\vH
= \frac{k}{\omega \mu} \vE_0 \pw{kx - \omega t}
= \vH_0 \pw{kx - \omega t}
$$

where,

$$
\vH_0 = \frac{\vE_0}{Z}.
$$

Note that in terms of the $\vB$ field we have,

$$
\vB = \frac{1}{v_p}\vE_0
$$

## Relations

$$
\begin{align}
\vk \cp \vE &= \mu\omega\vH \\
\vk \cp \vH &= -\epsi\omega\vE
\end{align}
$$

## Impedance

Hence we have an [[Impedance|Intrinsic Impedance]] of,

$$
\begin{align}
Z
&= \frac{E_0}{H_0} \\
&= \frac{E_0}{\frac{k}{\omega \mu} E_0} \\
&= \frac{\omega \mu}{k} \\
\end{align}
$$

^122b84

which we can determine is,

$$
\begin{align}
Z
&= \frac{\omega \mu}{k} \\
&= \frac{\mu}{v_p} \\
&= \sqrt\frac{\mu}{\epsi} \\
&= \sqrt\frac{\mu_0}{\epsi_0}\sqrt\frac{\mu}{\epsi} \\
&= Z_0\sqrt\frac{\mu}{\epsi}
\end{align}
$$

where $Z_0$ is the [[Impedance]] of Free Space (see [[Lec 11, Impedance of Free Space]]).
