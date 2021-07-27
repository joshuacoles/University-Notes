# EM Waves in Idealised LIH Insulator

As in [[Lec 9, Waves in a Vacuum]] we start with [[Maxwell–Faraday equation]], given by,

$$ \curl \vE = -\p_t \vB. $$

Starting off taking the curl as before and applying the [[Curl of Curl Identity]] and applying [[3.2 Symmetry of the Hessian]] to re-order the differential,

$$
\begin{align}
\curl (\curl \vE) &=
\curl -\p_t \vB \\

\nab(\divrg \vE) - \nab^2 \vE &=
-\p_t (\curl \vB). \\
\end{align}
$$

Now we need apply [[Maxwells Equations in Materials#Constitutive Equations]], namely,

$$
\vD = \epsi \vE \qquad \vH = \frac 1\mu \vB
$$

these give us,

$$
\frac 1\epsi \nab(\divrg \vD) - \nab^2 \vE =
-\mu \p_t (\curl \vH) \\
$$

where we know $\divrg \vD = \rho_f = 0$ as we are in an [[Idealised LIH Insulator]] thus leaving,

$$
\nab^2 \vE =
\mu \p_t (\curl \vH).
$$

Here we apply the [[Maxwell–Ampére Law in Materials]] giving us,

$$
\nab^2 \vE =
\mu \p_t (\vJ_f + \p_t \vD).
$$

From here we know $\vJ_f = 0$ (again, insulator) and further we can turn $\vD$ into $\vE$ and get,
^conductor-insulator-point

$$ \nab^2 \vE = \mu\epsi \p_{tt} \vE $$

which we can clearly see is a [[Wave Equation]] in $\vE$.

## Phase Speed and Refractive Index

This equation is very similar to that seen in [[Lec 9, Waves in a Vacuum]] however it has a different prefactor and thus a different [[Phase Velocity]] given as,

$$ v_p = \frac \omega k = \frac 1{\sqrt{\epsi\mu}} = \frac c{\sqrt{\epsi_r\mu_r}}. $$

We now introduce the [[Refractive Index]] $n$ as the ratio of the phase velocity of light in a medium to the speed of light,

$$
n = \frac c{v_p} = \sqrt{\epsi_r\mu_r}.
$$

```ad-note
For non-magnetic materials $\mu_r = 1$ and hence $n = \sqrt{\epsi_r}$ knwon as [[Maxwell's Relation]].
```

## Magnetic Field

By applying the same logic as [[Lec 11, Impedance of Free Space]] for a [[Plane Wave]],

$$
\vE = E_0 \pw{kx - \omega t} \qquad E_0 \in \C
$$

we have

$$
\vH = \frac{k}{\omega \mu} E_0 \pw{kx - \omega t} = H_0 \pw{kx - \omega t}.
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
