> - [Panotpto](https://uniofbath.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=5ab5cbc7-7633-4ef8-b625-acd7012955c7)
> - #lecture #narrative
> - Navigation
> 	- [[Lec 10, Properties of Plane Waves|Previous]]
> 	- [[Lec 12, Energy, Poynting vector|Next]]

## Recap of [[Plane Waves]]

Recalling from [[Lec 10, Properties of Plane Waves]], we have plane waves described by the equation,

$$
\left[
\nab^2 - \frac 1{c^2} \partial_t^2
\right] \E = 0,
$$

where $c^2 = \frac{1}{\epsi_0\mu_0}$. Leading to solutions of the form,

$$
\E = \E_0 \exp\(i\left[ \vec{k} \dp \r - \omega t \right]\),
$$

where $\vec{k}$ is the [[Wave Vector]] ($k = |\vec{k}|$) and $\omega$ is the *angular frequency*. Further we deduced that these solutions represent [[Transverse Wave|Transverse Waves]], ie $\E \perp \vec{k}$ (see [[Lec 10, Properties of Plane Waves#What is the Polarisation Vector]]), summed up breifly as:

$$
\begin{align*}
&\phantom{\implies} \divrg \E = 0
\tag{By Gauss's Law} \\
&\implies i \vec{k} \dp \E = 0 \\
&\implies \vec{k} \dp \E = 0 \\
&\implies \vec{k} \perp \E. \quad\square
\end{align*}
$$

Of which we can apply the same arguments to $\B$, implying $\vec{k} \perp \B$ and further (see [[Lec 10, Properties of Plane Waves#What is the consequential Magnetic Field]]) $\E \perp \B$. The combination of these facts gives us $(\E \cp \B) \parallel k$ which gives us the direction of energy flow. This is in fact a more general result which we will discuss later.

## Note on [[Polarisation]]
Currently we have,

$$
\E \dp \vec{k} = \B \dp \vec{k} = \E \dp \B = 0,
$$

however nothing prevents $\E$ & $\B$ from rotating in the plane, perpendicular to $\vec{k}$ (ie. $\E_0$ has a time dependence, see later circular Polarisation, this being called [[Linear Polarisation]]).

## $\vH$ [[H Field| Fields]] and [[Impedance|Wave Impedance]]

Often seen when studying fields inside materials, the $\vec{H}$ is often just known as the *Magnetic Field*, much to the dismay of undergrads across the land. In these contexts the $\B$ field is known as the *Induction*. However thankfully in [[Source Free Vacuum]] (or non-magnetic materials), these are trivially related as,

$$
\vec{H} = \frac 1{\mu_0} \B.
$$

In terms of this [[H Field]], the plane wave can be obtained by considering,

- $\E = \E_0 \exp\(i\left[ \vec{k} \dp \r - \omega t \right]\),$
- $B \parallel \uvj$, $\B_0 = \frac{\E_0}{c}$ (see [[Lec 10, Properties of Plane Waves#What is the consequential Magnetic Field]]).

And thus given,

$$
\E = \uvi\, E_0 \exp\(i\left[ \vec{k} \dp \r - \omega t \right]\),
$$

we have,

$$
\vec{H} = \uvj\, \frac{k_zE_0}{\mu_0\omega} \exp\(i\left[ \vec{k} \dp \r - \omega t \right]\).
$$

Therefore taking the ratio of magnitudes,

$$
\frac{|\E|}{|\vec{H}|} = \frac{\mu_0 \omega}{k_z} = \mu_0 c = \sqrt{\frac{\mu}{\epsi_0}}.
$$

Where this result is the same for all waves in [[Source Free Vacuum]], and is called the [[Impedance|Wave Impedance]] (in this case the [[Impedance]] of Free Space $Z_0$).

> In fact this quantity has the units of electrical impedance as is equal to $Z_0 = 377\, \Omega$.
