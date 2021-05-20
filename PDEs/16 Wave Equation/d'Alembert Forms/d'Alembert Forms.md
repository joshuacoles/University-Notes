---
aliases: d'Alembert Form
---

# d'Alembert Forms

The [[Separation of Variables]] technique work well for simple domains such as rectangles and circles. However on the infinite 1D line the [[Wave Equation]] admits solutions which have a different, but interesting form.

We will consider the 1D wave equation for $u(x, y): \R \times \R \to \R$, ie not restricted to a given finite range, such that,

$$
u_{tt} = c^2 u_{xx} \qquad x \in \R.
$$

^infinite-wave-equation

where the [[d'Alembert Forms|d'Alembert Form]] is the super position of two ***arbitrary*** **twice-differentiable** functions

$$
u(x,t)
= F(\xi) + G(\eta)
= F(x - ct) + G(x + ct)
$$

where each is a function of one of the two new variables

$$
\begin{align}
\xi &= x - ct \\
\eta &= x + ct.
\end{align}
$$
^vars

We first prove that all solutions of the [[Wave Equation]] can be written in this form,

- [[16.6 Existence of d’Alembert forms for Wave Equation Solutions]]

these two functions are called the forwards or right traveling solution $F(\xi)$, and the retarded or left traveling solution $G(\eta)$.

This form can be of especial on the infinite line we cannot apply [[Separation of Variables]] and [[Fourier Series]] since these require a bounded interval to be defined. In this can the traveling waves can be used to compute an explicit solution to the wave equation.

- [[16.7 Explicit Solution from Boundary Conditions]]

d’Alembert’s formula on a finite interval and the connection with Fourier series

Observe that theorem 19.1 did not actually require us to state whether we were considering the infinite line or a finite interval. So it must apply to both cases. In fact d’Alembert’s formula above for the case of the infinite interval can also be used on a finite interval (Olver, 2016) as long as we consider the appropriate periodic extension of functions from the finite interval to the real line. This is established by the following theorem.


[[16.8  d’Alembert’s formula Finite Interval]]