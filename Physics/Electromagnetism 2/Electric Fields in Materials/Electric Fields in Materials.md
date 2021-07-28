# Electric Fields in Materials

When dealing with [[Electric Field|Electric Fields]] in materials our previously simple laws are disturbed by the presence of the various charges and currents within the materials themselves, and the effects that our experimentation has on them.

As materials are naturally neutral these will be in the form of [[Dipole|Induced Dipoles]].

## Atomic Polarisability

Starting at the microscopic level we model these Atomic Dipoles using the [[Atomic Polarisability]] which gives us the equation

$$ \vp = \alpha \E\_{\'{ext}} $$
^atomic-polarisability

for the [[Dipole|Dipole Moment]] of a given atom under the external Electric Field $\E_{\'{ext}}$. Here $\alpha$ is a constant of the atom itself given by $\alpha = 3\epsi_0 V$ (see [[Atomic Polarisability#Computation]]).

## Polarisation Density & Bound Charges

We then combine these individual [[Atomic Dipoles]] into a macroscopic field $\vP$ known as the [[Polarisation Density]] which is defined as,

$$


$$

## [[Gauss's Law]] for Materials

This gives us sufficient knowledge to derive [[Gauss's Law for Materials]] giving us,

![[Gauss's  Law for Materials#^law]]

Here we split the field and the charges into $\vD, \vP$ as well as $\rho_f, \rho_b$. But while this makes the form easier to work with we need an equation for the field $\E$ as it is the field with **Physical Significance**.

## Electric Susceptibility

To find this relation we derive a quantity called the [[Electric Susceptibility]] $\chi_E$ which relates the [[Electric Field]] $\E$ with the [[Polarisation Density]] $\vP$. In the simplest case this is a linear relation of the form,

$$
\vP = \dots \E = \chi_E \epsi_0 \E
$$

> #programming-note $\chi_E$ is dimensionless

With this linear relation we can find a form for $\vD$ with respect to $\vE$ as so

$$
\begin{align}
\vD
&= \epsi_0\vE + \vP \\
&= \epsi_0\vE + \chi_E \epsi_0 \vE \\
&= \vE\epsi_0(1 + \chi_E) \\
&= \vE\epsi_0\epsi_r \\
\end{align}
$$

where $\epsi_r  = 1 + \chi_E$ is the [[Relative Permeability]] of the material. Defined to be $1$ in the vacuum and close to $1$ in air. Sometimes we will write $\epsi = \epsi_0 \epsi_r$ as a shorthand.

## LIH Materials

In this course we will will be dealing with materials known as [[LIH Materials]], these are:

- **Linear**: $\abs\vP \propto \abs\vE$
  - This breaks down at high $\abs\vE$.
- **Isotropic**: $\vP \parallel \vE$.
  - In non-isotropic materials $\epsi_r$ is a tensor.
- **Homogeneous**: $\vP$ is constant across the material.

## Example: Capacitor iwth
