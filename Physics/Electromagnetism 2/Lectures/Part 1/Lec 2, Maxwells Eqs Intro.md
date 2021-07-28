> - [Panotpto](https://uniofbath.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=64b72a9d-b5c5-401a-8e7c-acb501016cb6)
> - #lecture #narrative
> - Navigation
>   - [[Lec 1, Introduction|Previous]]
>   - [[Lec 3, Electrostatics, Coloumb's Law|Next]]

## [[Maxwell's Equations]]

4 differential equations, relating [[Electric Field]] $\E$ and [[Magnetic Field]] $\B$.

In a vacuum (in [[Differential Form]]),

| Law                                | Equation                                                           |
| ---------------------------------- | ------------------------------------------------------------------ |
| [[Gauss's Law]]                    | $\nabla \cdot \E = \dfrac{\rho}{\epsilon_0}$                       |
| [[Maxwell–Faraday equation]]       | $\nabla \times \E = \partial_t \B$                                 |
| [[Gauss's law for magnetism]]      | $\nabla \cdot \B = 0$                                              |
| [[Maxwell–Ampère's circuital law]] | $\nabla \times \B = \mu_0 \vec{J} + \epsilon_0 \mu_0 \partial_t\E$ |

- $\epsilon_0$ is the [[Permittivity of Free Space]]
- $\mu_0$ is the [[Permeability of Free Space]]

The **source terms** in these equations are

- $\rho(\vec{r})$ the [[Electrostatic potential]] ^9dc3d8
- $J(\r, t)$ is the [[Current Density]].

Knowing these you can solve using some boundary conditions to get $\E$ and $\B$.

> Consequence, all electromagnetic fields are caused by charges.

- Moving charges are the same as currents, hence we don't have time dependence in $\rho$, a moving charge is a current.

---

- We assume charged particles are "tiny" and thus can be approximated as **point charges**.
- We deal with **Classical Electrodynamics** not **Quantum Electrodynamics** (QED).

---

## Derivation of Maxwell's Equations from Empirical Laws

^1ce810

> The physicists derivation

Consider from,

- [[Coloumb's Law]]
- [[Gauss's Law]]
- [[Biot-Savart Law]]
- [[Ampere's Law]]
- [[Faraday's Law]]

We'll start by by writing them down in their [[Integral Form]].
