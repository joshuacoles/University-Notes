---
link: "https://en.wikipedia.org/wiki/Lande_g-factor"
---

# Landé _g_-factor

The  Landé _g_-factor is one of many [[G Factors]][^gf], namely for an Electron with both Spin and Orbital Angular Momentum. It is given by,

$$
g_J = 1 +
\frac{J(J + 1) + S(S + 1) - L(L + 1)}{2J(J + 1)}
$$
^lande-g-factor

[^gf]: cf https://en.wikipedia.org/wiki/G-factor_(physics)

In atomic physics, the Landé _g_-factor is a multiplicative term appearing in the expression for the energy levels of an atom in a weak [[Magnetic Field]]. The quantum states of electrons in atomic orbitals are normally [[Degenerate]] in energy, with these degenerate states all sharing the same angular momentum. When the atom is placed in a weak magnetic field, however, the degeneracy is lifted.

## Discussion

> This is based on the logic found in [#3](https://isbn.nu/9780030493461) and [#4](https://isbn.nu/9789814277167) from the source Wikipedia article.

Both the Orbital Angular Momentum and the Spin Angular Momentum of an electron contribute to the [[Magnetic Moment]], with each electron contributing to the atomic total. In particular the Orbital and Spin components contribute in terms of,

$$
\begin{align}
\vec\mu_L &= -\vL g_L\mu_B \\
\vec\mu_S &= -\vS g_S\mu_B \\
\vec\mu_J &= \vec\mu_L + \vec\mu_S
\end{align}
$$

where $g_L = 1, g_S \approx 2$[^amdp] and the negatives are from the negative charge of an electron (the charge itself contained within the [[Bohr Magneton]] $\mu_B$).

[^amdp]: cf [Anomalous magnetic dipole moment](https://en.wikipedia.org/wiki/Anomalous_magnetic_dipole_moment) and [Dirac's equation](https://en.wikipedia.org/wiki/Dirac%27s_equation).

Note that the Total Magnetic Moment $\vec\mu_J$ does not lie on the direction of Total Angular Momentum $\vJ = \vL + \vS$ as there are different coefficients in the sum. Its expectation value does however lie effectively in the direction of $\vJ$[^wet]

[^wet]: cf [Wigner-Eckart theorem](https://en.wikipedia.org/wiki/Wigner-Eckart_theorem) and [angular momentum coupling](https://en.wikipedia.org/wiki/Angular_momentum_coupling).

The theorem providing this in fact also provides its value, in a long derivation not repeated here, please see the source. This gives us the expression,

$$
g_J = 1 +
\frac{J(J + 1) + S(S + 1) - L(L + 1)}{2J(J + 1)}.
$$
