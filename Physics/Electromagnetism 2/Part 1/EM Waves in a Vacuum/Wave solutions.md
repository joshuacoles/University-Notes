# Wave solutions

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

## Monochromatic Electromagnetic Waves

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

## H Fields and Impedance

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