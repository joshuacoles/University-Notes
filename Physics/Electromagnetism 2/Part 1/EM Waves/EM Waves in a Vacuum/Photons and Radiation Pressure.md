# Photons and Radiation Pressure

In this course [[Electromagnetic Waves]] are only considered in a classical setting, ie as vector fields with continuous allowable energies.

However in [[Quantum Mechanics]] these waves exist as photons, with energy $E = \hbar \omega$.

> **Programming Note**: Try express solutions to TISE as solution to $U = x^2$?

In addition we must also consider [[Special Relativity]] where we have the [[Energy Momentum Relation]], $E^2 = (pc)^2 + (mc^2)^2$. Which for photons, given they are mass-less particles, leads to $E = pc = \frac{\hbar \omega}{c} = \hbar k$ (see the [[de Broglie Wavelength]]).

This provides a nice explanation for [[Radiation Pressure]] as caused by the change in momentum of the photons. This is notated as $P_r$ and has an expression given by the following example.

Imagine a beam of light with area $A\mathrm{~m^2}$ incident on a black body (hence wholly absorbed), this will have a pressure,

$$
P_r = \frac FA = \frac 1A \parfrac{p}{t},
$$

which applying the [[Energy Momentum Relation]] becomes,

$$
P_r = \frac 1A \parfrac{}t{}\(\frac{E}{c}\) = \frac 1c \frac{\partial_t E}{A}.
$$

But we can note that $\frac 1A\partial_tE$ is in-fact, the power per unit area, the intensity given by $\langle \|\vec{N}\| \rangle$. Thus having the expression,

$$
P_r = \frac 1c \langle \|\vec{N}\| \rangle = \langle U_{\text{VPW}} \rangle
$$

> See [[Lec 13, Energy flow in plane waves#^28405e]]

And for a reflecting surface, since the radiation is completely turned around, it would exert twice the radiation pressure.

In general to a grey body of reflectivity $\alpha$, at an angle $\theta$ it would be $\propto \alpha \sin\theta$. #todo
