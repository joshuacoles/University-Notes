# Governing equation for Electromagnetic Waves in a Vacuum

[[Maxwell's Equations]] (1)-(4) are **coupled equations**, however they can be decoupled to give us separate [[Wave Equation|Wave Equations]] for either the [[Electric Field]] $\vE$ or the [[Magnetic Field]] $\vB$, an [[Electromagnetic Waves|Electromagnetic Wave]].

## The Wave Equation for the Electric Field

To obtain a uncoupled equation for $\vE$ we start off with the [[Maxwell–Faraday equation]],

$$
\curl \vE = - \partial_t \vB,
$$

then taking the curl, taking the [[Curl of Curl Identity]] and swapping the order of differentiation,

$$
\begin{align*}
\curl\(\curl \vE\) &= \curl\(- \partial_t \vB\) \\
\nab\(\divrg \vE\) - \nab^2\vE &= -\partial_t\(\curl \vB\) \\
\end{align*}
$$

Then applying [[Gauss's Law]] and [[Maxwell–Ampére Law]] to the LHS and RHS respectively,

$$
\begin{align*}
\nab\(\frac{\rho}{\epsi_0}\) - \nab^2\vE
&= -\partial_t\(
\mu_0\(\vJ + \epsi_0 \frac{\partial \vE}{\partial t}\)
\) \\

\nab\(\frac{\rho}{\epsi_0}\) - \nab^2\vE
&= -\mu_0 \frac{\partial \vJ}{\partial t}
-\mu_0\epsi_0 \frac{\partial^2 \vE}{\partial t^2}.
\end{align*}
$$

Here we see we have obtained a differential equation wholly in terms of $\vE$ we well as the [[Source Terms]] $\rho$ and $\vJ$.

From now on however we will consider a "source-free" vacuum, ie $\rho = 0 \land \vJ = 0$ so this becomes,

$$
\nab^2\vE = \mu_0\epsi_0 \frac{\partial^2 \vE}{\partial t^2},
$$

which is clearly a [[Wave Equation]].

## The Wave Equation for $\vB$

Similar to above we can take the double curl of $\vB$, applying the [[Curl of Curl Identity]],

$$
\curl \(\curl \vB\) = \nab\(\divrg \vB\) - \nab^2\vB
$$

This time however noting that by [[Gauss's law for magnetism]] $\divrg \vB = 0$, and applying [[Maxwell–Ampére Law]], as well as the [[Maxwell–Faraday equation]],

$$
\begin{align*}
\curl \(\mu_0 \vJ + \epsi_0\mu_0 \partial_t \vE\) &= - \nab^2\vB \\
\mu_0\(\curl \vJ\) + \epsi_0\mu_0 \partial_t \(\curl\vE\) &= - \nab^2\vB \\
\mu_0\(\curl \vJ\) + \epsi_0\mu_0 \partial_t \(- \partial_t \vB\) &= - \nab^2\vB \\
\mu_0\(\curl \vJ\) - \epsi_0\mu_0 \partial^2_t \vB &= - \nab^2\vB.
\end{align*}
$$

And again choosing to consider a "source-free vacuum",

$$
\nab^2\vB = \mu_0\epsi_0 \frac{\partial^2 \vB}{\partial t^2}.
$$

Which is identical in form to that of the $\vE$ field as before, and thus will have the same types of solutions. One such example is the [[Plane Wave]].