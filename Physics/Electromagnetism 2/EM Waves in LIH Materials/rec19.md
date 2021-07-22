We start with [[Maxwell's Equations]] in a vacuum given by,

- $\divrg \vE = \dfrac \rho{\epsi_0}$
- $\divrg \vB = 0$
- $\curl \vE = -\dfrac{\p \vB}{\p t}$
- $\curl \vB = \mu_0 \vJ + \mu_0\epsi_0\dfrac{\p \vE}{\p t}$.

These can be adapted for materials using our new auxiliary fields to be,

- $\divrg \vD = \rho_f$
- $\divrg \vB = 0$
- $\curl \vE = -\dfrac{\p \vB}{\p t}$
- $\curl \vH = \vJ_f +\, ???$

but we note, as given by the final $???$, we do not know how to handle the Displacement Current Density within a material.

## Derivation of the [[Maxwell–Ampére Law]] in Materials

### Naive Approach

Starting naively we consider the conservation of charge expressed in the [[Continuity Equation for Electric Charge]],

$$ \divrg \vJ = -\frac{\p\rho}{\p t}. $$

Focusing first on the LHS we split this into free and bound currents ($\vJ = \vJ_f + \vJ_b$),

$$ \divrg \vJ = \divrg \vJ_f + \divrg \vJ_b $$

but we know $\vJ = \curl \vM$ and hence by the [[Divergence of a Cross Product]] identity we have,

$$
\begin{align}
\divrg \vJ 
&= \divrg \vJ_f + \divrg \vJ_b \\
&= \divrg \vJ_f + \divrg (\curl \vM) \\
&= \divrg \vJ_f + 0 \\
&= \divrg \vJ_f.
\end{align}
$$

This can then be combined with the [[Continuity Equation for Free Electric Charge,]]

$$ \divrg \vJ_f = - \frac{\p \rho_f}{\p t} $$

gives us,

$$
\divrg \vJ = \divrg \vJ_f = - \frac{\p \rho_f}{\p t} = -\frac{\p \rho}{\p t}.
$$

However if we instead focus on the RHS, we split again into free and bound charges ($\rho = \rho_f + \rho_p$),

$$
\frac{\p\rho}{\p t} =
\frac{\p\rho_f}{\p t}
+\frac{\p\rho_b}{\p t}
$$

we obtain the result,

$$
\frac{\p\rho}{\p t} = \frac{\p \rho_f}{\p t} 
\quad\land\quad
\frac{\p\rho}{\p t} =
\frac{\p\rho_f}{\p t}
+\frac{\p\rho_b}{\p t}
$$

and hence

$$ \frac{\p\rho_b}{\p t} = 0. $$

This however is clearly nonsense as as we know, $\divrg \vP = -\rho_b$ and hence this would imply,

$$
\frac{\p\rho_b}{\p t} = \divrg \frac{\p\vP}{\p t} = 0
$$

which for a time dependent Electric Field is impossible as $\vP = \alpha \vE$ in an [[LIH Materials|LIH Material]].

### Polarisation Current

To fulfill the continuity equation, we define new Current Density to express how the [[Polarisation Density]] changes in time,

$$ \vJ_p = \frac{\p \vP}{\p t} $$

such that,

$$ \vJ = \vJ_f + \vJ_b + \vJ_p. $$

As a result we can take the [[Maxwell–Ampére Law]]

$$
\curl \vB = \mu_0 \vJ + \mu_0\epsi_0\frac{\p \vE}{\p t}
$$

combined with our new current abstractions,

$$
\begin{align}
\curl \vB
&= \mu_0 (\vJ_f + \vJ_b + \vJ_p) + \mu_0\epsi_0\dfrac{\p \vE}{\p t} \\
&= \mu_0 \(\vJ_f + \curl \vM + \frac{\p \vP}{\p t}\) + \mu_0\epsi_0\frac{\p \vE}{\p t} \\
\end{align}
$$

which collecting terms and substituting in our auxiliary fields gives us,

$$
\begin{align}
\curl \(\vB - \mu_0 \vM\) &=
\mu_0\vJ_f + 
\mu_0\frac{\p}{\p t} \(\vP + \epsi_0 \vE\) \\

\curl \(\frac1{\mu_0} \vB - \vM\) &=
\vJ_f + 
\frac{\p}{\p t} \(\vP + \epsi_0 \vE\) \\\\

\curl \vH &=
\vJ_f + 
\frac{\p}{\p t} \vD 
\end{align}
$$

as a version of the [[Maxwell–Ampére Law]] applicable in materials.

---

# [[Maxwell's Equations]] in [[LIH Materials]]

We now have a version of [[Maxwell's Equations]] which work in materials, namely,

- $\divrg \vD = \rho_f$
- $\divrg \vB = 0$
- $\curl \vE = -\dfrac{\p \vB}{\p t}$
- $\curl \vH = \vJ_f + \dfrac{\p}{\p t} \vD.$

Within [[LIH Materials]] we also have the additional [[Constitutive Equation|Constitutive Equations]],

- $\vD = \epsi_0\epsi_r \vE$
- $\vP = \epsi_0\chi_e \vE$ ^pol-const
- $\vH = \frac{1}{\mu_0\mu_r} \vB$
- $\vM = \chi_m \vH$

```ad-warning
Note again the asymmetry of the final equation which lacks a $\frac{1}{\mu_0}$ term as might have been expected.
```

## Time Dependence

In the work above we included the possibility of time-dependent fields, however we have failed to consider that things do not necessarily react instantly to changes.

Consider an [[Electric Field]] $\vE$ changing with time, the question is will the [[Polarisation Density]] "keep up" with the Electric Field as it changes, or will there be some lag. This can be expressed quantitatively as how does the ratio $\frac{\abs{\vP}}{\abs{\vE}}$ change with time.

In the static case we know this is given by the [[#^pol-const|2nd of the LIH Constitutive Equations]], we would also assume this is the case for "sufficiently slow" changes (this is the assumption we make in Classical Thermodynamics).

What "slow" means in this case is dependent on the material in question and the mechanism of the Polarisation:

For the induced polarization of atoms and molecules, which occurs by the distortion of the electronic structure, little mass is involved and the structure is very stiff resulting in a high natural vibration frequency.

- The motions of electrons in atoms and molecules are characterized by periods on the order of $10^{-16} \unit{s}$.
- This is approximately equal to the period of visible light.
- As a consequence strictly non-polar substances behave practically the same as with static fields up to frequencies close to those of visible light ($\vE$ and $\vP$ remain in step) and the susceptibility $\chi_e$ **is independent of frequency**.

For polar molecules changing the Electric Field has very different consequences than for non-polar molecules.

- Here the molecule will reorientate itself to align with the Electric Field.
- Doing so in the presence of other molecules will lead to a frictional drag and thus a rotational lag.
- Thus the molecule may not complete a full rotation in the time period of an oscillation.
- For example in water this is $10^{-11}\unit s$ in water.
- Thus for a material the the Dielectric Constant is a function of the frequency of the field in question.
- For higher frequencies, the dielectric constant falls from about $80$ to a modest value typical for a nonpolar liquid because the dipoles simply cannot follow so rapid an alteration of the field.

These show us that the [[Relative Permeability|Dielectric Constant]] is not really a constant at all and a full description **requires a detailed consideration of the material as well as the frequency of the time-dependent fields**.

```ad-info
I would propose what we are dealing with here is perfectly sinusoidal waves, capable of being applied in the more general case through a [[Fourier Expansion]].
```



