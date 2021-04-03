> - [Panotpto](https://uniofbath.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=98b20a6c-dadb-4354-9520-acb600fee3ef)
> - #lecture #narrative
> - Navigation
> 	- [[Lec 3, Electrostatics, Coloumb's Law|Previous]]
>  	- [[Lec 5, Electostatics|Next]]

## [[Gauss's law]] for [[Point Charges]]

For a charge $Q$ surrounded by a closed surface $S$, [[Gauss's Law]] is given as,

$\vA$

$$
 \int_S \E \cdot \d \vec{S} = \frac {Q_{\mathrm{enc}}}{\epsilon_0}
$$

> Remember surface integrals of this form rely on the convention that  $\d \vec{S} = \uvec{n}\,\d S$, thus being given in a more explicit sense, as 
> $$ \int_S \E \cdot \uvec{n}\,\d S = \frac {Q_{\mathrm{enc}}}{\epsilon_0} $$

![[Clipboard 1 Feb 2021 at 17.39.png]]

To show this wlog we take $Q$ to be at the origin, so that as per [[Coloumb's Law]],

$$
\E(\r) = \frac 1{4\pi\epsilon_0} \frac{Q}{r^2} \uvec{e}_r
$$

Taking this into the LHS of [[Gauss's Law]] above, we get,

$$
\begin{align*}
&\phantom{=\,}
\int_S
\left(
	\frac 1{4\pi\epsilon_0}
	\frac{Q}{r^2}
	\uvec{e}_r
\right)

\cdot \d\vec{S}

\\\\
&=
\frac Q{4\pi\epsilon_0}
\int_S
\frac{\uvec{e}_r \cdot \d \vec{S}}{r^2}
\end{align*}
$$

![[Clipboard 2 Feb 2021 at 18.37.png]]

Where we can see in the above that $\uvec{e}_r \cdot \d \vec{S}$ is given by,

$$
\begin{align*}
\d S\,(\uvec{e}_r \cdot \uvec{n}) &= \d S \cos \theta \\
&= \d S_\perp
\end{align*}$$

And further applying [[Solid Angles]], $\d \Omega = \dfrac{\d S_\perp}{r^2}$, and thus,

$$
\begin{align*}
&\phantom{=\,}
\frac Q{4\pi\epsilon_0}
\int_S
\frac{\uvec{e}_r \cdot \d \vec{S}}{r^2}
\\
&=
\frac Q{4\pi\epsilon_0}
\int_S
\frac{\d \vec{S}_\perp}{r^2}

\\

&=
\frac Q{4\pi\epsilon_0}
\int_S \d \Omega

\\

&=
\frac Q{4\pi\epsilon_0}
4\pi

\\ &= \frac Q{\epsilon_0}
\end{align*}
$$

Thus giving us as desired,

$$
\int_S \E \cdot \d \vec{S} = \frac {Q}{\epsilon_0}
$$

This method is useful as it shows **that the shape of the object does not matter**.

### Extending this to [[Charge Distributions]]

Considering a general charge distribution $\rho$ inside $V$, total charge is,

$$
Q = \int_V \rho(\r) \,\d V
$$

Thus,

$$
\int_{\partial V} \E \cdot \d \vec{S}
=
\frac 1{\epsilon_0} \int_V \rho(\r) \,\d V
$$

^60b7a6

This is [[Gauss's law]] in [[Integral Form]].

> Programming note: make a note at start about $S = \partial V$ and explain what that means – see metric spaces.

## [[Integral Form]] => [[Differential Form]] by [[Divergence Theorem]]

The [[Divergence Theorem]] is given by,

$$
\int_{\partial V} \vec{F} \cdot \d \vec{S}
=
\int_V (\nabla \cdot \vec{F}) \,\d V
$$

> Note, there is no assumptions placed in $V$ (bar that it is closed?).

Thus applying this to [[Lec 4, Empirical Derivation of Gauss's Law#^60b7a6]] we get,

$$
\int_V (\nabla \cdot \vec{E}) \,\d V
=
\frac 1{\epsilon_0} \int_V \rho(\r) \,\d V
$$

And by the invariance of the equation on $V$ we get,

$$
\nabla \cdot \vec{E}
=
\frac 1{\epsilon_0} \rho(\r)
$$

Notes,
1. We derived this for static charges but this is true for charges in motion also.
2. This implies that "electric charges" are the [[sources]] of the [[Electric Field]] $\E$.
	- This relationship is true forall positions.
	- Ie
		- At point charge $\nabla \cdot \E = \frac{\rho}{\epsilon_0}$
		- Otherwise $\nabla \cdot \E = 0$.
			- Note $\nabla \cdot \E = 0 \nRightarrow \E = 0$.



