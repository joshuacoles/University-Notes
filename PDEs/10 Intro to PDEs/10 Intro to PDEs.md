# 10 Intro to PDEs

A partial differential equation (PDE) is a differential equation that involves derivatives with respect to more than one independent variable, and so must involve functions of more than one variable, say $u(x,y,t)$, and the partial derivatives of $u$. In this course we will focus almost exclusively on three canonical PDEs, which we list below.

## [[Heat Equation]]

$$
\pdiff
{u}{t} = \kappa \pdiff {^2 u}{x^2},
$$

^eq10-0

for a function $u(x,t)$ where $\kappa$ is a (_positive_) constant. This equation describes the process of diffusion (of heat or chemicals), as measured by the variable $u$, describing temperature or concentration, at a given position $x$ and time $t$.

## [[Wave Equation]]

$$
\pdiff {^2 u}{t^2} = c^2 \pdiff {^2 u}{x^2},
$$

^eq-10-1

for a function $u(x,t)$ where $c$ is constant. This equation describes the propagation of waves by describing their transverse displacement, $u$; for example the sideways displacement at position $x$ and time $t$ of a stretched string.

## [[Laplace's equation]]

$$
\pdiff {^2 u}{x^2} + \pdiff {^2 u}{y^2} = 0,
$$

^eq-10-2

for a function $u = u(x,y)$. This equation emerges is a huge variety of situations, but physically corresponds, for example, to steady-state (or long-time) solutions for a diffusing quantity, e.g. steady states solutions for the diffusion equation in two spatial dimensions. In such a scenario, solutions $u$ have intriguing mathematical properties, such as having the smallest spatial variations possible while still satisfying the boundary conditions imposed on the problem.

In order to develop methods for solving each of these three PDEs, each equation must be accompanied by specification of an appropriate domain where the equations are solved, as well as appropriate boundary or initial conditions. In many cases, what constitutes an ‘appropriate’ condition is informed by the physics.