# Empirical Derivation of Amphere's Law under Constant Current

Starting the form the empirical [[Ampere's Law]],

$$
\int_{\p S} \vB \dp \d\vr = \mu_0 I
$$

where $I$ is the total DC current passing through the surface $S$. Expressed in terms of the [[Current Density]] as,

$$
\int_{\p S} \vB \dp \d\vr = \mu_0 \int_S \vJ \cdot \d \vS
$$

Which by [[Stokes' Theorem]] is equivalent to,

$$
\int_{\p S} \vB \dp \d \vr = 
\int_S \curl \vB \dp \d \vr =
\mu_0 \int_S \vJ \dp \d \vS,
$$

and since the surface $S$ is arbitrary it must be,

$$
\curl \vB = \mu_0 \vJ.
$$

This implies current is a **[[Rotational Source]]** of [[Magnetic Field]]. This is not _quite_ a [[Maxwell's Equations|Maxwell Equations]] as it is only valid for constant [[Current Density]].
