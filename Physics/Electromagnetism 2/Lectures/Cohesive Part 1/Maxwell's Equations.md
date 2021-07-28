# Maxwell's Equations

Maxwell's Equations are 4 _vector differential equations_ which relate and determine the [[Electric Field]] $\E$ and the [[Magnetic Field]] $\B$.

In a vacuum (in Differential Form),

| Law                                | Equation                                           |
| ---------------------------------- | -------------------------------------------------- |
| [[Gauss's Law]]                    | $\divrg \E = \dfrac{\rho}{\epsilon_0}$             |
| [[Maxwell–Faraday equation]]       | $\curl \E = \p_t \B$                               |
| [[Gauss's law for magnetism]]      | $\divrg \B = 0$                                    |
| [[Maxwell–Ampère's circuital law]] | $\curl \B = \mu_0 \J + \epsi_0 \mu_0 \partial_t\E$ |

where the constants in these equations are,

- $\epsilon_0$ is the [[Permittivity of Free Space]]
- $\mu_0$ is the [[Permeability of Free Space]]

There are also **Source Terms** which are

- $\rho(\vec{r})$ the [[Electrostatic potential]] ^9dc3d8
- $\J(\r, t)$ is the [[Current Density]].

Knowing these you can solve using some boundary conditions to get $\E$ and $\B$ ([[Solving Maxwell's Equations]]).

```ad-info
As a consequnce of this we can deduce that all Electromagnetic Fields are caused by [[Electric Charge|Electric Charges]].

Further applying basic logic we can see that moving charges are the same as Currents, hence we don't have time dependence in $\rho$, a moving charge is a current.
```

## Assumptions

- We assume charged particles are "tiny" and thus can be approximated as **point charges**.
- We deal with **Classical Electrodynamics** not **Quantum Electrodynamics** (QED).

## Derivation of Maxwell's Equations from Empirical Laws

These Equations referenced above can be _"derived"_, in the physicist's sense, from a set of Empirical Laws discussed below. These are,

- [[Coloumb's Law]]
- [[Gauss's Law]]
- [[Biot-Savart Law]]
- [[Ampere's Law]]
- [[Faraday's Law]]

We'll start by by writing them down in their [[Integral Form]].
