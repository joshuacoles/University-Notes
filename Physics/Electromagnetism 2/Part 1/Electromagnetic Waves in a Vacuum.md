# Electromagnetic Waves in a Vacuum

[[Maxwell's Equations]] (1)-(4) are **coupled equations**, however they can be decoupled to give us separate [[Wave Equation|Wave Equations]] for either the [[Electric Field]] $\vE$ or the [[Magnetic Field]] $\vB$, an [[Electromagnetic Waves|Electromagnetic Wave]].

## The Wave Equation for the Electric Field

To obtain a uncoupled equation for $\vE$ we start off with the [[Maxwell–Faraday equation]],

$$
\curl \vE = - \partial_t \vB,
$$

then taking the curl, taking the [[Curl of Curl Identity]] and swapping the order of differentiation,

$$
\begin{align*}
\curl\(\curl \vE\) &= \curl\(- \partial_t \vB\) \\
\nab\(\divrg \vE\) - \nab^2\vE &= -\partial_t\(\curl \vB\) \\
\end{align*}
$$

Then applying [[Gauss's law]] and [[Maxwell–Ampére Law]] to the LHS and RHS respectively,

$$
\begin{align*}
\nab\(\frac{\rho}{\epsi_0}\) - \nab^2\vE
&= -\partial_t\(
\mu_0\(\vJ + \epsi_0 \frac{\partial \vE}{\partial t}\)
\) \\

\nab\(\frac{\rho}{\epsi_0}\) - \nab^2\vE
&= -\mu_0 \frac{\partial \vJ}{\partial t}
-\mu_0\epsi_0 \frac{\partial^2 \vE}{\partial t^2}.
\end{align*}
$$

Here we see we have obtained a differential equation wholly in terms of $\vE$ we well as the [[Source Terms]] $\rho$ and $\vJ$.

From now on however we will consider a "source-free" vacuum, ie $\rho = 0 \land \vJ = 0$ so this becomes,

$$
\nab^2\vE = \mu_0\epsi_0 \frac{\partial^2 \vE}{\partial t^2},
$$

which is clearly a [[Wave Equation]].

## The Wave Equation for $\vB$

Similar to above we can take the double curl of $\vB$, applying the [[Curl of Curl Identity]],

$$
\curl \(\curl \vB\) = \nab\(\divrg \vB\) - \nab^2\vB
$$

This time however noting that by [[Gauss's law for magnetism]] $\divrg \vB = 0$, and applying [[Maxwell–Ampére Law]], as well as the [[Maxwell–Faraday equation]],

$$
\begin{align*}
\curl \(\mu_0 \vJ + \epsi_0\mu_0 \partial_t \vE\) &= - \nab^2\vB \\
\mu_0\(\curl \vJ\) + \epsi_0\mu_0 \partial_t \(\curl\vE\) &= - \nab^2\vB \\
\mu_0\(\curl \vJ\) + \epsi_0\mu_0 \partial_t \(- \partial_t \vB\) &= - \nab^2\vB \\
\mu_0\(\curl \vJ\) - \epsi_0\mu_0 \partial^2_t \vB &= - \nab^2\vB.
\end{align*}
$$

And again choosing to consider a "source-free vacuum",

$$
\nab^2\vB = \mu_0\epsi_0 \frac{\partial^2 \vB}{\partial t^2}.
$$

Which is identical in form to that of the $\vE$ field as before, and thus will have the same types of solutions. One such example is the [[Plane Wave]].

## Wave solutions

We want to find [[Plane Wave]] solutions to the previous equations, of which we will choose the [[Electric Field]] $\vE$ as it is the most physically relevant. For this we choose the trial solution,

$$
\vE(\r, t) = \vE_0 \exp\(i\(\vec{k} \dp \r - \omega t\)\),
$$

where $\vec{k}$ is the [[Wave Vector]] and $\omega$ is the [[Angular Frequency]]. Substituting this into the [[Wave Equation]] for $\vE$ as seen above, for the LHS we get,

$$
(\nab^2 \vE)_i = (\partial^2_x + \partial^2_y +  \partial^2_z)\vE_{0i},
$$

which, forgiving the massive abuse of notation give us

$$
\begin{align*}
(\nab^2 \vE)_i &= (\partial^2_x + \partial^2_y +  \partial^2_z)\vE_{i}
\\
(\nab^2 \vE)_i &= (-k^2_x - k^2_y - k^2_z)\vE_{i}
\\
(\nab^2 \vE)_i &= -(k^2)\vE_{i},
\end{align*}
$$

> Programming note: check that

trivially seeing,

$$
\nab^2 \vE = -k^2 \vE.
$$

And respectively for the right,

$$
\partial^2_t \vE = -\omega^2 \vE.
$$

Thus giving us a full equation of,

$$
-k^2 \vE = -\mu_0\epsi_0\omega^2\vE,
$$

and,

$$
k^2 = \mu_0\epsi_0\omega^2.
$$

Which allows us to form an expression for the [[Phase Velocity]],

$$
v_p = \frac{\omega}{k} = \frac{1}{\sqrt{\epsi_0\mu_0}},
$$

to which any solution to the initial wave equation must conform.

> Oh look, $v_p = 3 \times 10^{8}\,\mathrm{m.s^{-1}}$. Shocking!!!

This is kind of cool because it is entirely from theory, and has the same speed as the speed of light that had already been observed!

Also note that this has **no dependence** on anything to do with the source of the waves, it is a constant.




Recall that the [[Wave Equation]] for $\vec{X} = \vE, \vB$ is given as,

$$
\(\nab^2 - \frac 1{c^2} \partial_t^2\)\vec{X} = 0,
$$

in a _source-free vacuum_ ($\rho = 0, \vJ = 0$). Remembering that,

$$
c = \frac{1}{\sqrt{\epsi_0\mu_0}}.
$$

> Note **again** the independence of this speed of any properties of the source, including speed. This is an insight into the [[Special Relativity|Special Relativistic]] nature of light.

# Monochromatic Electromagnetic Waves

Consider a plane wave, traveling in $+z$ direction, having a mathematical form for the [[Electric Field]] of,

$$
\begin{align*}
\vE(\r, t)
&= \vE_0 \exp\(i\(\vec{k} \dp \r - \omega t\)\) \\
&= \vE_0 \exp(i\(k_zz - \omega t\)),
\end{align*}
$$

where the vector $\vE_0$ is known as the [[Polarisation Vector]] and we can simplify the dot product we have defined the wave to be in the purely $z$ direction.

This leads to the following questions,

- What direction is the [[Polarisation Vector]] $\vE_0$ in?
- What [[Magnetic Field]] $\vB$ is associated with this [[Electric Field]] $\vE$.

## What is the Polarisation Vector

Taking this equation in component form, we obtain,

$$
\begin{align*}
\vE(\r, t)
&= \uvi\, \vE_{0,x} \exp(i\(k_zz - \omega t\)) \\
&+ \uvj\, \vE_{0,y} \exp(i\(k_zz - \omega t\)) \\
&+ \uvk\, \vE_{0,z} \exp(i\(k_zz - \omega t\)). \\
\end{align*}
$$

Remembering [[Gauss's Law]], we have

$$
\begin{align*}
\divrg \vE &=
  \parfrac{\vE_{x}}{x}
+ \parfrac{\vE_{y}}{y}
+ \parfrac{\vE_{z}}{z}
\\
&= 0 + 0 + ik_z \vE_{0, z} \exp(i\(k_zz - \omega t\)) \\
&= ik_z \vE_{z}
\end{align*}
$$

However in a [[Source Free Vacuum]], we have $\rho(0) = 0 \implies \divrg \vE = 0$. Thus either $k_z$ or $\vE_z$ must be zero — of which it clearly cannot be the former as this would imply no spacial propagation of any kind, and thus must be the latter, ie, $\vE_z = 0$.

This gives us the consequence that the [[Electric Field]] of a plane wave in a [[Source Free Vacuum]] must be a **transverse wave** (god its been a while since i've talked about those).

## What is the consequential Magnetic Field

Taking further, wlog, $\vE_0 = \uvi E_0$ in addition to our previous assumption of $\vec{k} = \uvk k_z$. Ie that we have a $z$ direction [[Plane Wave]], with its displacement wholly within the $x$ direction. This gives our solution the form,

$$
\vE(\r, t) = \uvi E_0 \exp(i\(k_zz - \omega t\)).
$$

Which using [[Faraday's Law]],

$$
\curl \vE = - \partial_t \vB,
$$

gives us an expression for $\vB$. Computing this in the simplified case, we get,

$$
\curl \vE =
\begin{vmatrix}
\uvi & \uvj & \uvk \\
\partial_x & \partial_y & \partial_z \\
E_0 \exp(i\(k_zz - \omega t\)) & 0 & 0
\end{vmatrix}
$$

Which in workings I shall lead for the fair reader as they are simple yet long, gives us,

$$
\begin{align*}
\curl \vE
&= - \uvj\, (0 - ik_z E_0 \exp(i\(k_zz - \omega t\)))
\\
&= - \uvj\, ik_z E_0 \exp(i\(k_zz - \omega t\))
\\
&= - \partial_t \vB.
\end{align*}
$$

Which by taking an integral wrt $t$ gives us (setting the constant of integration to $0$ (why?? #todo)),

$$
\begin{align*}
\vB
&= -\uvj \, \frac{ik_z}{-i\omega} E_0 \exp(i\(k_zz - \omega t\)) \\
&= \uvj\, B_0 \exp(i\(k_zz - \omega t\))).
\end{align*}
$$

where $B_0 = \dfrac{k_z}{\omega} E_0 = \dfrac 1c E_0$. This leads us to the following insights,

- $\vB$ is also a [[Transverse Wave]].
- $\vB \perp \vE$.
- $\vE$ and $\vB$ are **in-phase** (looking at complex phase of $\vE$ & $\vB$).

> Note again this doesn't mean that the [[Electric Field]] is more important than the [[Magnetic Field]]. It is just often the one which directly interacts with charges and antenna, and since they are equivalent in their solutions, we choose to focus on $\vE$.




## Recap of Plane Waves

Recalling from [[Lec 10, Properties of Plane Waves]], we have plane waves described by the equation,

$$
\left[
\nab^2 - \frac 1{c^2} \partial_t^2
\right] \vE = 0,
$$

where $c^2 = \frac{1}{\epsi_0\mu_0}$. Leading to solutions of the form,

$$
\vE = \vE_0 \exp\(i\left[ \vec{k} \dp \r - \omega t \right]\),
$$

where $\vec{k}$ is the [[Wave Vector]] ($k = |\vec{k}|$) and $\omega$ is the _angular frequency_. Further we deduced that these solutions represent [[Transverse Wave|Transverse Waves]], ie $\vE \perp \vec{k}$ (see [[Lec 10, Properties of Plane Waves#What is the Polarisation Vector]]), summed up breifly as:

$$
\begin{align*}
&\phantom{\implies} \divrg \vE = 0
\tag{By Gauss's Law} \\
&\implies i \vec{k} \dp \vE = 0 \\
&\implies \vec{k} \dp \vE = 0 \\
&\implies \vec{k} \perp \vE. \quad\square
\end{align*}
$$

Of which we can apply the same arguments to $\vB$, implying $\vec{k} \perp \vB$ and further (see [[Lec 10, Properties of Plane Waves#What is the consequential Magnetic Field]]) $\vE \perp \vB$. The combination of these facts gives us $(\vE \cp \vB) \parallel k$ which gives us the direction of energy flow. This is in fact a more general result which we will discuss later.

## Note on Wave Polarisation

Currently we have,

$$
\vE \dp \vec{k} = \vB \dp \vec{k} = \vE \dp \vB = 0,
$$

however nothing prevents $\vE$ & $\vB$ from rotating in the plane, perpendicular to $\vk$. This phenomena is known as [[Wave Polarisation]]

(ie. $\vE_0$ has a time dependence, see later [[Circular Polarisation]], this being called [[Linear Polarisation]]).

## $\vH$ [[H Field| Fields]] and [[Impedance|Wave Impedance]]

Often seen when studying fields inside materials, the $\vec{H}$ is often just known as the _Magnetic Field_, much to the dismay of undergrads across the land. In these contexts the $\vB$ field is known as the _Induction_. However thankfully in [[Source Free Vacuum]] (or non-magnetic materials), these are trivially related as,

$$
\vec{H} = \frac 1{\mu_0} \vB.
$$

In terms of this [[H Field]], the plane wave can be obtained by considering,

- $\vE = \vE_0 \exp\(i\left[ \vec{k} \dp \r - \omega t \right]\),$
- $B \parallel \uvj$, $\vB_0 = \frac{\vE_0}{c}$ (see [[Lec 10, Properties of Plane Waves#What is the consequential Magnetic Field]]).

And thus given,

$$
\vE = \uvi\, E_0 \exp\(i\left[ \vec{k} \dp \r - \omega t \right]\),
$$

we have,

$$
\vec{H} = \uvj\, \frac{k_zE_0}{\mu_0\omega} \exp\(i\left[ \vec{k} \dp \r - \omega t \right]\).
$$

Therefore taking the ratio of magnitudes,

$$
\frac{|\vE|}{|\vec{H}|} = \frac{\mu_0 \omega}{k_z} = \mu_0 c = \sqrt{\frac{\mu}{\epsi_0}}.
$$

Where this result is the same for all waves in [[Source Free Vacuum]], and is called the [[Impedance|Wave Impedance]] (in this case the [[Impedance]] of Free Space $Z_0$).

> In fact this quantity has the units of electrical impedance as is equal to $Z_0 = 377\, \Omega$.




# Energy in Electromagnetic Systems

The place to start in this discussion is to consider where energy is stored in Electromagnetic Systems, examples include,

## Capacitors

Given a [[Capacitors|Capacitor]] of size $A\unit{m^2}$ with a separation of $L\unit{m}$ and a with charge density $\sigma \unit{Cm^{-2}}$ (thus possessing a total charge on the plate of $q \unit{~C} = \sigma A$).

![[Clipboard 1 Mar 2021 at 18.39.png]]

By considering the symmetry of the system we can determine that the [[Electric Field]] is perpendicular to the plates (ignoring edge effects). Thus applying [[Gauss's Law]] to the pillbox of area $a\mathrm{~m^2}$,

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

# Poynting Vector

We define the [[Poynting Vector]] as $\vec{N} = \vE \cp \vec{H}$, where,

- The direction of $\vN$ gives you the direction of energy flow.
- The magnitude of $\vN$ gives you the rate of energy flow per unit area perpendicular to $\vN$.

Here we see that this is the energy change flux field (the what?? #todo).

From this we can create a [[Conservation Law]] for the [[Conservation of Energy]], ie,

$$
\divrg \vN = - \parfrac{U}{t},
$$

which we can justify with the following demonstration.

## Justification

Starting from the expression above we can re-express it in terms of the $\vB$ field (assuming a [[Source Free Vacuum]])

$$
\vec{N} = \vE \cp \vec{H} = \frac{1}{\mu_0} \vE \cp \vB.
$$

From this we can apply the #todo vector calc identity for the [[Divergence of a Cross Product]] (and applying various of [[Maxwell's Equations]]),

$$
\begin{align*}
\divrg (\vE \cp \vB)
&= \vB \dp (\curl \vE) - \vE \dp (\curl \vB) \\
&= \vB \dp (-\partial_t \vB) - \vE \dp (\epsi_0\mu_0 \partial_t\vE). \\
\end{align*}
$$

Noting that the form $\vec{X} \dp \partial_t\vec{X}$ is the form given to $\frac12$ the derivative of the modulus of the field,

$$
\begin{align*}
\divrg (\vE \cp \vB)
&= -\parfrac{}{t}\(
\frac 12 \epsi_0 \|\vE\|^2 + \frac 12 \mu_0 \|\vB\|^2
\) \\
&= -\parfrac{U}{t} \quad\square
\end{align*}
$$




Recapping from last lecture we have expressions for the [[Electromagnetic Energy Density]] of a system gives by,

$$
U = \frac12 \epsi \|\vE\|^2 + \frac12 \mu_0 \|\vec{H}\|^2,
$$

and the [[Poynting Vector]] $\vec{N}$ (also known as the electromagnetic power flux)

$$
\vec{N} = \vE \cp \vec{H}.
$$

## Energy flow in an Electromagnetic Plane Wave

Given the [[Plane Wave]], oscillating in the $x$ direction, propagating in the $z$ direction, having the formula,

$$
\vE = \uvi\, E_0 \exp(i(k_z z - \omega t)),
$$

and also for the [[H Field]],

$$
\vec{H} = \uvj\, H_0 \exp(i(k_z z - \omega t)),
$$

where the [[Wave Impedance]] is given as $Z_0 = \sqrt{\frac{\mu_0}{\epsi_0}} = \frac{\|\vE\|}{\|\vec{H}\|}$. This when combined with the expression for the [[Electromagnetic Energy Density]] shows that the contribution of the [[Electric Field]] and the [[H Field]] to this total energy density are equal in a [[Source Free Vacuum]] [[Plane Wave]] (henceforth known as a [[Vacuum Plane Wave]]), ie,

$$
\frac 12 \epsi_0 \|\vE\|^2 = \frac12 \mu_0 \|\vec{H}\|^2.
$$

Thus the total Energy Density of a [[Vacuum Plane Wave]] (VPW) is twice that in only the [[Electric Field]]. $U_{\text{VPW}} = \epsi_0 \|\vE\|^2$, or,

$$
U_{\text{VPW}} = \epsi_0 E_0^2 \cos^2(k_z z - \omega t)
$$

> Note remember we use the the **Real Part** of the complex exponential to represent the actual field, the complex part is... idek ignored? Hence the cosine.
>
> **Programming Note**: Go write some shit on that.

> **Programming Note**: Clean up our $E_0$ vs $\vE_0$ vs whatever the fuck here. This has now been formalised in [[1.1 Notation for Cartesian Vectors]]

This expression shows us that the energy density of the wave is in-fact oscillating. However in most practical cases the instantaneous values of the energy density vary to quickly to measure (especially higher than the radio wave domain). Thus usually we consider instead the time average of this expression,

$$
\langle U_{\text{VPW}} \rangle_t = \frac12 \epsi_0 E_0^2.
$$

> From: $\langle {\cos^2(Kt)} \rangle_t = \frac12$.
> **Programming Note**: Explain our notation for time averages / averages in multivariable functions.

For our example we can compute the [[Poynting Vector]] to be,

$$
\begin{align*}
\vec{N}
&= \vE \cp \vec{H} \\
&=
\uvi E_0 \exp(k_z z - \omega t)
\cp
\uvj \sqrt{\frac{\epsi_0}{\mu_0}} E_0 \exp(k_z z - \omega t) \\
\vec{N} &= \uvk\, \sqrt{\frac{\epsi_0}{\mu_0}} E_0^2 \cos^2(k_z z - \omega t),
\end{align*}
$$

> #todo check our expression for the [[Wave Impedance]] as this differs from what we just used.

As expected $\vec{N}$ points along the direction of the wave, and further that,

$$
\vec{N} = \uvk c \epsi_0 E_0^2 \cos^2(k_z z - \omega t) = \uvk\, cU_{\text{VPW}}
$$

from $c = \frac{1}{\sqrt{\epsi_0\mu_0}}$. Which again taking the time average of the magnitude, we get,

$$
\left\langle \|\vec{N}\| \right\rangle_t
=
c\langle U_{\text{VPW}} \rangle_t
=
\frac12 c \epsi_0 E_0^2.
$$

^28405e

This is called the _Intensity of the Beam_ (power per unit area), a measurable quantity which allows us to experimentally compute the values of $E_0$ and $H_0$




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
