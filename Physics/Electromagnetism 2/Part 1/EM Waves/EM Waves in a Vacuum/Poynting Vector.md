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

