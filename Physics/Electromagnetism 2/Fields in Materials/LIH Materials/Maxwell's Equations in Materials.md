# Maxwell's Equations in Materials

We now have a version of [[Maxwell's Equations]] which work in materials, namely,

- $\divrg \vD = \rho_f$
- $\divrg \vB = 0$
- $\curl \vE = -\dfrac{\p \vB}{\p t}$
- $\curl \vH = \vJ_f + \dfrac{\p}{\p t} \vD.$

See [[Derivation of the Maxwell–Ampére Law in Materials]] for a suitable derivation.

## Constitutive Equations in LIH Materials

Within [[LIH Materials]] we also have the additional [[Constitutive Equation|Constitutive Equations]],

- $\vD = \epsi_0\epsi_r \vE$ ^15011a
- $\vP = \epsi_0\chi_e \vE$ ^pol-const
- $\vH = \frac{1}{\mu_0\mu_r} \vB$
- $\vM = \chi_m \vH$

which allow us to related our Auxiliary Fields to the Physical Fields.

```ad-warning
Note again the asymmetry of the final equation which lacks a $\frac{1}{\mu_0}$ term as might have been expected.
```

## Time Dependence

In the equations above and related we included the possibility of time-dependent fields, however we have failed to consider the physical aspects: ie that **things do not necessarily react instantly to changes**.

Consider for example a time-varying [[Electric Field]] $\vE(t)$. In the static case (and quasi-static, where things vary "sufficiently slow" as in Classical Thermodynamics) we can apply [[#^pol-const|Polararisation Relation in LIH Materials]].

This does not however necessarily apply in the general case as [[Polarisation Density]] originates from physical phenomena which may have a certain lag. This can be expressed quantitatively as how does the ratio $\frac{\abs{\vP}}{\abs{\vE}}$ change with time.

What "slow" means in this case is dependent on the material in question and the mechanism of the Polarisation:

For the induced polarization of atoms and molecules, which occurs by the **distortion of the electronic structure**, little mass is involved and the structure is very stiff **resulting in a high natural vibration frequency**.

- The motions of electrons in atoms and molecules are characterized by periods on the order of $10^{-16} \unit{s}$.
- This is approximately equal to the period of visible light.
- As a consequence strictly non-polar substances behave practically the same as with static fields up to frequencies close to those of visible light ($\vE$ and $\vP$ remain in step) and the susceptibility $\chi_e$ **is independent of frequency**.

For **polar molecules** changing the Electric Field has very different consequences than for non-polar molecules.

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
