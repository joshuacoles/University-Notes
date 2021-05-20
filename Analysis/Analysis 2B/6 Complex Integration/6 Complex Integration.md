# 6 Complex integration

We know from the theory of functions of a real variable that differentiation and integration complement each other, as shown by the [[Fundamental Theorem of Calculus]]. We will see that something similar is true for complex variables as well. But we first have to discuss what we mean by integration in $\C$.

## Integration by Real Value

If we want to integrate a complex-valued function $f : [a, b] \to \C$ of a _real_ variable, then we simply integrate the real and imaginary parts separately:

$$
\int_a^b f(t) \rd t =
\int_a^b \Re\, f(t) \rd t + i \int_a^b \Im f(t) \,\d t.
$$

But we will need a more general notion of integration.

## Contour integrals

The basis for our integrals across complex domains will be [[6.1 Contours]] defined as suitably Piecewise Continuously Differentiable function, $\gamma : [a, b] \to \C$. 

Integrals along Contours are known as [[6.2 Contour Integral|6.2 Contour Integrals]], relating to our comments on [[#Integration by Real Value]] by the following,

![[6.2 Contour Integral#^a62d2e]]

In addition we call sets in which you can form contours between any two points, where the contour is wholly connected in the set [[6.3 Contour Connected Set]].

We can also treat these contours similar to [[3.1 Definition of a Curve|Curves]] in real space, for example computing the [[6.5 Length of a contour]].

## Estimates and Convergence of [[6.2 Contour Integral|Contour Integrals]]

In order to prove certain statements about integrals, we need some inequalities. 

We begin with an estimate that you have already seen for real integrands and is now extended to complex integrands.

- [[6.4 Absolute value Integral Inequality]]
- [[6.7 Maximum Attained Integral Inequality]]

Next we study what happens when we integrate the members of a uniformly convergent sequence of functions.

- [[6.8 Contour Integrals of Uniformly Convergent Complex Functions is Convergent]]
- [[6.9 Contour Integrals Commute with Uniformly Convergent Series]]

## Parameterisation

As discussed above we can also associate Contours with a given curve in complex space in a 1 to many relationships dependent on the Parameterisation chosen.

- [[6.10 Curve of the Contour]]

With the Contour Integral itself being mostly independent of said Parameterisation.

- [[6.11 Invariance of the Contour Integral under Reparametrisation]]

Because in order to evaluate the contour integral, it's enough to know the curve $\Gamma = \gamma([a, b])$ and the orientation of the parametrisation, we sometimes write

$$
\begin{equation*} \int_\Gamma f(z) \,\d z, \end{equation*}
$$

provided that it's clear from the context what the orientation is.

We can also perform operations such as the [[6.12 Concatenation of Contours]].

