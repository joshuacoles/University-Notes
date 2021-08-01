# Maxwell's Equations

In the vacuum **Maxwell's Equation** are 4 differential equations, relating [[Electric Field]] $\vE$ and [[Magnetic Field]] $\vB$.

| Equation                      | Equation                                         |
| ----------------------------- | ------------------------------------------------ |
| [[Gauss's Law]]               | $\divrg \vE = \dfrac{\rho}{\epsi_0}$             |
| [[Maxwell–Faraday equation]]  | $\curl \vE = \p_t \vB$                           |
| [[Gauss's law for Magnetism]] | $\divrg \vB = 0$                                 |
| [[Maxwell–Ampère's Law]]      | $\curl \vB = \mu_0 \vJ + \epsi_0 \mu_0 \p_t \vE$ |

- $\epsi_0$ is the [[Permittivity]] of Free Space,
- $\mu_0$ is the [[Permeability]] of Free Space.

The **source terms** in these equations are

- $\rho(\r)$ the [[Electrostatic Potential]], ^9dc3d8
- $J(\r, t)$ is the [[Current Density]].

```ad-note
Moving charges are the same as currents, hence we don't have time dependence in $\rho$, a moving charge is a current.
```

Knowing these you can solve using some boundary conditions to get $\vE$ and $\vB$ ([[Solving Maxwell's Equations]]).

```ad-info
As a consequnce of this we can deduce that all Electromagnetic Fields are caused by [[Electric Charge|Electric Charges]].

Further applying basic logic we can see that moving charges are the same as Currents, hence we don't have time dependence in $\rho$, a moving charge is a current.
```

## Assumptions

- We assume charged particles are "tiny" and thus can be approximated as **point charges**.
- We deal with **Classical Electrodynamics** not **Quantum Electrodynamics** (QED).

## Derivation of Maxwell's Equations from Empirical Laws

There are a number of experimentally deduced empirical laws from which we can derive[^1] the above equations. These are,

[^1]: Derive in the physistis' sense of course.

- [[Physics/Electromagnetism 2/Part 1/Coloumb's Law]]
- [[Biot-Savart Law]]
- [[Ampere's Law]]
- [[Faraday's Law]]