# Idealised LIH Insulator

$$
\rho_f = 0 \qquad \vJ_f = 0
$$

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

From here we know $\vJ_f = 0$ (insulator) and further we can turn $\vD$ into $\vE$ and get,

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
\vH = \frac{k}{\omega \mu} E_0 \pw{kx - \omega t} = H_0 \pw{kx - \omega t}
$$

and hence have an [[Intrinsic Impedance]] of,

$$
\begin{align}
Z
&= \frac{E_0}{H_0} \\
&= \frac{E_0}{\frac{k}{\omega \mu} E_0} \\
&= \frac{1}{\frac{v_p}{\mu}} \\
&= \sqrt\frac{\mu}{\epsi} \\
&= \sqrt\frac{\mu_0}{\epsi_0}\sqrt\frac{\mu}{\epsi} \\
&= Z_0\sqrt\frac{\mu}{\epsi}
\end{align}
$$

where $Z_0$ is the [[Impedance of Free Space]] (see [[Lec 11, Impedance of Free Space]]).

# EM Waves in Idealised LIH Conductor

If a material is a conductor it obeys [[Ohm's Law]],

$$ V = IR $$

which can be written in terms of the vector fields as,

$$ \vJ = \sigma \vE $$

where $\sigma$ is the [[Conductivity]] of the material.

```ad-note
[[Conductivity]] is the inverse of [[Resistivity]] which has units $\ohm\mathrm{.m}$. This also explains the change from Potential $V$ to Force Field $\vE$.

Sigma has units of $\unit{S.m^{-1} = \ohm^{-1} m^{-1}}$.
```

We have seen [[Conductivity]] $\sigma$ in the static limit or pseudo-static limit (very slow moving). Of interest here is the [[Optical Conductivity]] $\sigma(\omega)$ which is a generalisation of the static conductivity ($\sigma = \lim_{w \to \infty}\sigma(w)$).

Now obtaining an equation for EM waves in an Idealised Conductor (noting still we have $\rho_f = 0$ why???? [cf](https://physics.stackexchange.com/questions/22773/in-electrostatics-why-the-electric-field-inside-a-conductor-is-zero)). This diverges from the previous derivation of an insulator after the application of the [[Maxwell–Ampére Law in Materials]],

$$
\nab^2 \vE =
\mu \p_t (\vJ_f + \p_t \vD)
$$

as we now no longer have $\vJ_f = 0$.  Instead we apply the [[Constitutive Equation]] in a conductor $\vJ = \sigma \vE$ giving us,

$$
\nab^2 \vE =
\mu \p_t (\sigma \vE + \p_t \vD).
$$

From here we can treat the $\vD$ term as before giving us,

$$
\nab^2 \vE =
\mu\epsi\frac{\p^2 \vE}{\p t^2}
+ \mu\sigma \frac{\p \vE}{\p t}
$$

Here we see we **no longer have a [[Wave Equation]]**, we do not have sufficient maths to deal with this PDE rigorously however in true physicist fashion we will just kinda... try.

## Attempting a Solution

Instead of the standard space dependence $ik$ we will instead use an arbitrary complex constant $\gamma$ giving us,

$$ \vE = \vE_0 \pw{\gamma x - i\omega t} $$

which when substituted results in,

$$
\gamma^2 \vE =
\mu\epsi (-i\omega)^2 \vE + 
\mu\sigma (-i\omega)  \vE
$$

Now splitting $\gamma = -a + bi$ we get,

```ad-note
collapse:
We will see why we have the $-a$ vs $+a$ later on.
```

$$
\gamma^2 = (a^2 - b^2) - (2ab) i = (-\mu\epsi\omega^2) - i(\mu\sigma\omega)
$$

and hence

$$
\begin{align}
a^2 - b^2 &= -\mu\epsi\omega^2 
\\
-2ab &= -i\mu\sigma\omega.
\end{align}
$$

Taking the ratio of these quantities gives us,

$$
\frac{-2ab}{a^2 - b^2}
= \frac{-i\mu\sigma\omega}{-\mu\epsi\omega^2}
= \frac{\sigma}{\epsi\omega}.
$$

which can be seen to be a dimensionless property.

## What does this ratio mean?

If we look further at [[Maxwell–Ampére Law in Materials]] in a conductor, with this trial solution we obtain

$$
\begin{align}
\curl \vH
&= \vJ_f + \p_t \vD \\
&= \sigma\vE + \epsi \p_t \vE
\end{align}
$$

which by observing $\p_t \vE = -i\omega\vE \implies \vE = \frac{1}{-i\omega}\p_t \vE$ gives us,

$$
\begin{align}
\curl \vH 
&= \sigma\frac{1}{-i\omega}\p_t \vE + \epsi \p_t \vE \\
&= \epsi_0\epsi_r\(1 + i\frac{\sigma}{\omega\epsi} \) \p_t \vE. \\
\end{align}
$$

This forms a dielectric function,

$$
\epsi(\omega) = \epsi_r(\omega) + i\frac{\sigma(\omega)}{\epsi_0\omega} = \epsi' + i\epsi''
$$

which is the object connecting time-varying external electric field to the magnetic field intensity created in response.

In particular, it captures both the 'insulating aspect', expressed by the dielectric “constant” $\epsi_r$, and the conduction of a material, through the appearance of Conductivity $\sigma$ in the dimensionless ratio $\frac{\sigma}{\epsi\omega}$.

![[Dielectric_responses.svg]]

where each peak is a resonance of a different object in material.

We will however approximate this greatly with $\epsi'$ being constant and $\epsi''$ being determined by a constant Conductivity.

---