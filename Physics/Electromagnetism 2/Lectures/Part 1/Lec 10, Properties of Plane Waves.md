> - [Panotpto](https://uniofbath.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=8fad9c41-3aed-45fa-83c9-acd200a5f83e)
> - #lecture #narrative
> - Navigation
>   - [[Lec 9, Waves in a Vacuum|Previous]]
>   - [[Lec 11, Impedance of Free Space|Next]]

Recall that the [[Wave Equation]] for $\vec{X} = \E, \B$ is given as,

$$
\(\nab^2 - \frac 1{c^2} \partial_t^2\)\vec{X} = 0,
$$

in a _source-free vacuum_ ($\rho = 0, \J = 0$). Remembering that,

$$
c = \frac{1}{\sqrt{\epsi_0\mu_0}}.
$$

> Note **again** the independence of this speed of any properties of the source, including speed. This is an insight into the [[Special Relativity|Special Relativistic]] nature of light.

## [[Monochromatic Electromagnetic Waves]]

Consider a plane wave, traveling in $+z$ direction, having a mathematical form for the [[Electric Field]] of,

$$
\begin{align*}
\E(\r, t)
&= \E_0 \exp\(i\(\vec{k} \dp \r - \omega t\)\) \\
&= \E_0 \exp(i\(k_zz - \omega t\)),
\end{align*}
$$

where the vector $\E_0$ is known as the [[Polarisation Vector]] and we can simplify the dot product we have defined the wave to be in the purely $z$ direction.

This leads to the following questions,

- What direction is the [[Polarisation Vector]] $\E_0$ in?
- What [[Magnetic Field]] $\B$ is associated with this [[Electric Field]] $\E$.

### What is the [[Polarisation Vector]]

Taking this equation in component form, we obtain,

$$
\begin{align*}
\E(\r, t)
&= \uvi\, \E_{0,x} \exp(i\(k_zz - \omega t\)) \\
&+ \uvj\, \E_{0,y} \exp(i\(k_zz - \omega t\)) \\
&+ \uvk\, \E_{0,z} \exp(i\(k_zz - \omega t\)). \\
\end{align*}
$$

Remembering [[Gauss's Law]], we have

$$
\begin{align*}
\divrg \E &=
  \parfrac{\E_{x}}{x}
+ \parfrac{\E_{y}}{y}
+ \parfrac{\E_{z}}{z}
\\
&= 0 + 0 + ik_z \E_{0, z} \exp(i\(k_zz - \omega t\)) \\
&= ik_z \E_{z}
\end{align*}
$$

However in a [[Source Free Vacuum]], we have $\rho(0) = 0 \implies \divrg \E = 0$. Thus either $k_z$ or $\E_z$ must be zero — of which it clearly cannot be the former as this would imply no spacial propagation of any kind, and thus must be the latter, ie, $\E_z = 0$.

This gives us the consequence that the [[Electric Field]] of a plane wave in a [[Source Free Vacuum]] must be a **transverse wave** (god its been a while since i've talked about those).

### What is the consequential [[Magnetic Field]]

^87ada2

Taking further, wlog, $\E_0 = \uvi E_0$ in addition to our previous assumption of $\vec{k} = \uvk k_z$. Ie that we have a $z$ direction [[Plane Wave]], with its displacement wholly within the $x$ direction. This gives our solution the form,

$$
\E(\r, t) = \uvi E_0 \exp(i\(k_zz - \omega t\)).
$$

Which using [[Faraday's Law]],

$$
\curl \E = - \partial_t \B,
$$

gives us an expression for $\B$. Computing this in the simplified case, we get,

$$
\curl \E =
\begin{vmatrix}
\uvi & \uvj & \uvk \\
\partial_x & \partial_y & \partial_z \\
E_0 \exp(i\(k_zz - \omega t\)) & 0 & 0
\end{vmatrix}
$$

Which in workings I shall lead for the fair reader as they are simple yet long, gives us,

$$
\begin{align*}
\curl \E
&= - \uvj\, (0 - ik_z E_0 \exp(i\(k_zz - \omega t\)))
\\
&= - \uvj\, ik_z E_0 \exp(i\(k_zz - \omega t\))
\\
&= - \partial_t \B.
\end{align*}
$$

Which by taking an integral wrt $t$ gives us (setting the constant of integration to $0$ (why?? #todo)),

$$
\begin{align*}
\B
&= -\uvj \, \frac{ik_z}{-i\omega} E_0 \exp(i\(k_zz - \omega t\)) \\
&= \uvj\, B_0 \exp(i\(k_zz - \omega t\))).
\end{align*}
$$

where $B_0 = \dfrac{k_z}{\omega} E_0 = \dfrac 1c E_0$. This leads us to the following insights,

- $\B$ is also a [[Transverse Wave]].
- $\B \perp \E$.
- $\E$ and $\B$ are **in-phase** (looking at complex phase of $\E$ & $\B$).

> Note again this doesn't mean that the [[Electric Field]] is more important than the [[Magnetic Field]]. It is just often the one which directly interacts with charges and antenna, and since they are equivalent in their solutions, we choose to focus on $\E$.
