> - [Panotpto](https://uniofbath.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=05661336-65d6-4432-8a0b-acb6010884af)
> - #lecture #narrative
> - Navigation
>   - [[Lec 4, Empirical Derivation of Gauss's Law|Previous]]
>   - [[Lec 6, Introduction to Magentics, Lorentz Force|Next]]

## [[Electrostatics]]

Focusing on,

- The curl of the [[Electric Field]], $\nabla \times \E$
- [[Electrostatic potential]] $\phi$.

---

![[Clipboard 2 Feb 2021 at 19.13.png]]

The empirical claim is that [[Electrostatics|Electrostatic]] fields are [[Conservative Vector Fields]], ie the work done done moving a charge $Q$ around a closed path such as $C$ in the presence of an [[Electrostatics|Electrostatic]] [[Electric Field]] is $0$.

The work done moving along the path $C$ is given by,

$$
\begin{align*}
W
&= \int_C \vec{F}_e \cdot \d \r \\
&= Q \int_C \E_s \cdot \d \r = 0
\end{align*}
$$

We can apply [[Stokes' Theorem]], given as (given a surface $S$),

$$
\int_{\partial S} \E_s \cdot \d \r = \int_S (\nabla \times \E) \cdot \d \vec{S}
$$

Of which in our cases we identify $C = \partial S$. Thus applying it, we obtain,

$$
W = Q \int_C \E_s \cdot \d \r = \int_S (\nabla \times \E_s) \cdot \d \vec{S} = 0
$$

And since $S$ and $C$ are arbitrary we can conclude from the conservative nature of $\E$ that,

$$
\nabla \times \E_s = 0,
$$

in the [[Electrostatics|Electrostatic]] case.

> **NOTE**: This is **not** the full Maxwell Equation as this does not account for moving charges (as can be seen by its difference to that seen in [[Lec 2, Maxwells Eqs Intro]]).

## [[Electrostatic potential]]

All [[Electrostatics|Electrostatic]] fields satisfy,

1. $\nabla \cdot \E_s = \dfrac{\rho}{\epsilon_0}$.
2. $\nabla \times \E_s = 0$.

The 2nd point suggest a form of $\E = \nabla \psi$ .

> See [[Vanishing Curl of Gradient Field]], ie that $\nabla \times \nabla \psi = 0 \,\Forall \psi : \R^3 \to \R$.

Of which we write,

$$
\E_s = - \nabla \phi.
$$

^de4124

> Note the negative sign is convention as it is a potential energy field.

This trivially satisfies 2 as per its initial creation, and thus we must only satisfy 1, [[Gauss's law]],

$$
\begin{align*}
\nabla \cdot \E_s
&= \nabla \cdot (-\nabla \phi)
 = \frac{\rho}{\epsilon_0} \\

&= \nabla^2 \phi.
\end{align*}
$$

Where $\nabla^2$ is the [[Laplacian]] given by,

$$
\nabla^2 = \partial x^2 + \partial y^2 + \partial z^2.
$$

in Cartesian coordinates.

This gives us the [[Poisson Equation]],

$$
\nabla^2 \phi = \frac{\rho}{\epsilon_0}.
$$

Just as we say in [[Lec 4, Empirical Derivation of Gauss's Law]] we, solving for $\phi$ in empty space, we get the [[Laplace Equation]],

$$
\nabla^2 \phi = 0.
$$

## Solutions to [[Poisson Equation]]

Consider a [[Point Charges]] at the origin, with $\E$ given by,

$$
\E_s(\r) = \frac 1{4\pi \epsilon_0} \frac{Q}{r^2} \uvec{e}_r
$$

> Programming Note: Explain $E_s$ and why we use it (decomposition into curl free and other thing right?)

By inspection we can obtain,

$$
-\nabla\(\frac 1r\) = - \uvec{e}_r \partial_r \(\frac 1r\) = - \uvec{e}_r \frac 1{r^2}
$$

And thus by computing $\phi$ from [[Lec 5, Electostatics#^de4124]] we get,

$$
\phi(\r) = \frac{Q}{4\pi\epsilon_0 r}
$$

### Generalising to [[Charge Distributions]]

Using the [[14.8  Principle of superposition|Principle of superposition]] we get,

$$
\phi(\r) = \frac 1{4\pi\epsilon_0} \int_V \frac{\rho(\vec{s})}{\|\r - \vec{s}\|} \,\d V.
$$
