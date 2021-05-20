# Green's Identity

Green's Identities are two vector Identities which follow directly from the [[7.6 The Divergence Theorem|Divergence Theorem]] and other results. They are as follows:

## Green's First Identity

Let $u, v : \R^3 \to \R$ be sufficiently differentiable scalar functions. Let $\Omega \subset \R^3$ be a volume with a piecewise-smooth surface $S = \p \Omega$. Then,

$$
\iiint_\Omega \Big(
	u \nab^2 v + (\nabla u) \dp (\nabla v)
\Big)\rd V
= \iint_S u \fdp (\nab v \dp \boldn) \rd S
= \iint_S u \fdp \nab v \dp \rd \boldS
$$
^first-green-identity

where $\nab v \dp \boldn$ is also written as $\frac{\p v}{\p \boldn}$ #todo, discuss this form of writing because we have used it before and it feels.... ehhh.

> Notational note, we have used $\fdp$ to differentiate the Inner Product in $\R^3$ from Field Multiplication and function application.

### Proof

Let $\phi : \R ^3 \to \R$ and let $\boldF, \boldG : \R^3 \to \R^3$. Starting with the [[7.6 The Divergence Theorem|Divergence Theorem]] we have,

$$
\iint_S \boldG \dp \boldn \rd S =
\iiint_\Omega \divrg \boldG \rd V,
$$

which now applying $\boldG = \phi \boldF$, gives us,

$$
\begin{align}
\iint_S \boldG \dp \boldn \rd S
&= \iiint_\Omega \divrg (\phi \boldF) \rd V \\
&= \iiint_\Omega (\nab \phi) \dp \boldF + \phi \fdp (\divrg \boldF)\rd V \\
\end{align}
$$

which setting $\phi = u$ and $\boldF = \nab v$ we obtain,

$$
\iint_S (u \nab v) \dp \boldn \rd S
= \iiint_\Omega (\nab u) \dp (\nab v) + u \nab^2 u \rd V
$$

where the integrand on LHS is exactly $u \overset{\F}\dp (\boldn \dp \nab v) \equiv u \pdiff{v}{\boldn}$ and thus,

$$
\iint_S u \pdiff{v}{\boldn} \rd S
= \iiint_\Omega (\nab u) \dp (\nab v) + u \nab^2 u \rd V
$$

as needed.

> #todo this is a mess.

---

## Green's Second Identity

Let $u, v : \R^3 \to \R$ be sufficiently differentiable scalar functions. Let $\Omega \subset \R^3$ be a volume with a piecewise-smooth surface $S = \p \Omega$. Then,

$$
\iiint_\Omega \Big(
	u \nab^2 v - v \nab^2 u
\Big) \rd V
= \iint_S u \pdiff {v}{\boldn} - v \pdiff {u}{\boldn} \rd S
$$

### Proof

Green’s Second Identity follows from writing down the First Identity switching the roles of $u$ and $v$ and then subtracting one from the other:

$$
\iint_S u \pdiff{v}{n} \rd S
= \iiint_\Omega
	\nab u \dp \nab v + u \nab^2 v
\rd V
$$

and

$$
\iint_S v \pdiff{u}{n} \rd S
= \iiint_\Omega
	\nab v \dp \nab u + v \nab^2u 
\rd V
$$

which after subtraction yields

$$
\iint_S u \pdiff{v}{n} - v \pdiff{u}{n} \rd S
= \iiint_\Omega u \nabla ^2 v - v \nabla ^2 u \rd V
$$

as required.