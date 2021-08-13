# Energy in Electromagnetic Systems

The place to start in this discussion is to consider where energy is stored in Electromagnetic Systems, examples include,

## Capacitors

Given a [[Capacitors|Capacitor]] of size $A\unit{m^2}$ with a separation of $L\unit{m}$ and a with charge density $\sigma \unit{Cm^{-2}}$ (thus possessing a total charge on the plate of $q \unit{~C} = \sigma A$).

![[Clipboard 1 Mar 2021 at 18.39.png]]

By considering the symmetry of the system we can determine that the [[Electric Field]] is perpendicular to the plates (ignoring edge effects). Thus applying [[Gauss's Law]] to the pillbox of area $a\unit{m^2}$,

$$
\int_{\partial(\text{Box})} E \dp \d \vec{S}
=
\frac{q_{\text{enc}}}{\epsi_0}.
$$

Providing expressions for both the Integral and the enclosed charge,

$$
a\|\vE\| = \frac{a\sigma}{\epsi_0},
$$

we obtain an expression for the magnitude of the Electric Field,

$$
\begin{align*}
\|\vE\|
&= \frac{\sigma}{\epsi_0} \\
&= \frac{q}{A\epsi_0} \\
\end{align*}
$$

Thus having an [[Electrostatic Potential]] of,

$$
V(d) = \|\vE\|d = \frac{qd}{A\epsi_0},
$$

and a total potential difference across them of,

$$
V = \|\vE\|L.
$$

Hence the change in energy, when adding additional charge to the capacitor can be expressed as,

$$
\begin{align*}
\d E
&= V \d q \\
&= \frac{qL}{A\epsi_0} \d q
\end{align*}
$$

Which can be converted into a total energy by considering its integral from $0 \to Q$,

$$
\begin{align*}
E
&= \int \d E \\
&= \int_0^Q \frac{qL}{A\epsi_0} \d q \\
&= \frac{L}{A\epsi_0} \int_0^Q q \d q \\
&= \frac{L}{A\epsi_0} \frac 12 Q^2 \\
&= \frac 12 \frac{QL}{A\epsi_0}.
\end{align*}
$$

Which can be re-written in terms of $\vE$ to be,

$$
\begin{align*}
E
&= \frac{L}{2 \epsi_0 A} (\|\vE\|A \epsi_0) ^2 \\
&= \frac{L}{2 \epsi_0 A} (\|\vE\|A \epsi_0) ^2 \\
&= \frac 12 \epsi_0  \|\vE\|^2 (LA) \\
&= \frac 12 \epsi_0  \|\vE\|^2 V.
\end{align*}
$$

Where we can see $\frac 12 \epsi_0 \|\vE\|^2$ provides an [[Energy Density per Volume]].

> **Programming Note**: Move this into its own note about finding $\vE$ in [[Capacitors]].

## Inductors

Given a Solenoid of length $L \unit{m}$, area $A \unit{m^2}$ and a total of $N$ turns, which has a current $I \unit{A}$ flowing around it generating the [[Magnetic Field]] $\vB$.

![[Clipboard 2 Mar 2021 at 14.13.png]]

Applying [[Faraday's Law]], we get,

$$
V = \parfrac{\Phi_{\vB}}{t},
$$

which we can use to compute a change in energy,

$$
\begin{align*}
\d E
&= V \d q \\
&= \frac{\d\Phi_{\vB}}{\d t} \d q\\
&= \frac{\d q}{\d t} {\d\Phi_{\vB}} \\
&= I {\d\Phi_{\vB}}.
\end{align*}
$$

> Remembering that the surface the flux $\Phi_{\vB}$ is taken across the helix surface of the spiraling wire.

Where we can obtain the strength of the [[Magnetic Field]] by taking [[Ampere's Law]] and considering the rectangular loop as shown.

$$
\begin{align*}
\oint \vB \dp \d\r &= \mu_0 \int \vJ \dp \d\vec{S} \\\\
BL &= \mu_0 N I.
\end{align*}
$$

^b-field-mag

From which we can compute the Magnetic Flux as so (assuming that the solenoid is sufficiently tightly wound as to make the helical surface perpendicular to the $\vB$ field),

$$
\begin{align*}
\Phi_\vB &= BA \\
&= \frac{\mu_0 N I A}{L}.
\end{align*}
$$

Which we can combine with the change in energy formula,

$$
\begin{align*}
\d E
&= I \d\(\frac{\mu_0 N I A}{L}\) \\
&= I \frac{\mu_0 N A}{L} \d I,
\end{align*}
$$

and further integrate to lift out of the infinitesimal domain,

$$
\begin{align*}
E = \int \d E &= \int I \frac{\mu_0 N A}{L} \d I \\
&= \frac{\mu_0 N A}{L} \int I \d I \\
&= \frac{\mu_0 N A}{L} \frac{I^2}2. \\
\end{align*}
$$

Of which it would be useful to express in terms of field strength instead of just current, hence applying [[#^b-field-mag|the equation for magnetic field strength above]],

$$
\begin{align*}
E
&= \frac{\mu_0 N A}{2L} \(\frac{BL}{\mu_0N}\)^2 \\
&= \frac{\mu_0 N A}{2L} \frac{B^2L^2}{\mu_0^2N^2} \\
&= \frac{A}{2} \frac{B^2L}{\mu_0N} \\
&= \frac 12 \frac 1{\mu_0} B^2 AL. \\
&= \frac 12 \frac 1{\mu_0} B^2 V. \\
\end{align*}
$$

which if we frame it in terms of the [[H Field]] becomes,

$$
E = \frac 12 \mu_0 H^2 V
$$

## General result for Energy Density

Combing the two expressions we derived for the separate situations above we can obtain a more general solution for the electromagnetic volumetric energy density $U\unit{J.m^{-3}}$,

$$
U = \frac 12 \epsi_0 \|\vE\|^2 + \frac 12 \mu_0 \|\vec{H}\|^2.
$$

