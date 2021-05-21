# Chapter 5 Transformations of random variables and simulation

## 5.1 Transforming random variables

**Lecture 13**

Suppose $X$ is a RV and $g\,$: $\mathsf{R}\rightarrow \mathsf{R}$ is a function.

We know the distribution of $X$ and we wish to find the distribution of $Y = g(X)$.

If $\mathsf{P}(a < X < b) =1$, we may consider $g\,$: $(a,b) \rightarrow \mathsf{R}$.

**Example**

If $X \sim N(0,1)$ and $Y = X^2$, what is the distribution of $Y$?

Note that $\mathsf{P}(0 < Y < \infty) = 1$.

Take $y > 0$, then

$$
\begin{align} \mathsf{P}(Y \leq \, y) & \; = \; \mathsf{P}(X^2 \leq \, y) \\ & \; = \; P(-\sqrt{y} \; \leq X \; \leq \sqrt{y}) \\ & \; = \; \Phi(\sqrt{y}) - \Phi(-\sqrt{y}) \\ & \; = \; \Phi(\sqrt{y}) - \{1-\Phi(\sqrt{y})\} \\ & = 2\,\Phi(\sqrt{y}) -1. \end{align}
$$

So, if $X \sim N(0,1)$ and $Y = X^2$, the CDF of $Y$ is

$$
 F_Y(y) \; = \; \begin{cases} \; 2\,\Phi(\sqrt{y}) -1 & y>0, \\ \; 0 & \,y \leq 0. \end{cases}
$$

Now differentiate $F_Y(y)$ to find the PDF, $f_Y(y)$.

Recall that

$$
 \Phi(x) \; = \; \int_{-\infty}^x \, \frac{1}{\sqrt{2 \pi}} \, \exp(-u^2/2) \, du \; = \; \int_{-\infty}^x \, \phi(u) \, du.
$$

The fundamental theorem of calculus implies that

$$
 \frac{d}{dx} \, \Phi(x) \; = \;\phi(x) \; = \; \frac{1}{\sqrt{2 \pi}} \, \exp(-x^2/2).
$$

Hence, the PDF of $Y$ at $y>0$ is

$$
\begin{align} f_Y(y) & \; = \; \frac{d}{dy} \, \{2\,\Phi(\sqrt{y})-1\} \\ & \; = \; 2\,\Phi^{\prime}(\sqrt{y}) \, \frac{1}{2\sqrt{y}} \\ & \; = \; \phi(\sqrt{y}) \, \frac{1}{\sqrt{y}} \\ & \; = \; \frac{1}{\sqrt{2 \pi}} \; e^{-y/2} \; y^{-1/2}, \end{align}
$$

and $f_Y(y) = 0$ for $y < 0$.

By inspection $Y \sim \mathrm{Gamma}(1/2,1/2)$, as $\Gamma(1/2)=\sqrt{\pi}\,$ implies

$$
 f_Y(y) \; = \; \begin{cases} \; \frac{1}{\Gamma(1/2)} \, \left( \frac{1}{2} \right)^{1/2} \, y^{-1/2} \, e^{-\frac{1}{2}y} & \,y > 0, \\ \; 0 & \,y \leq 0. \end{cases}
$$

The random variable $Y$ is also said to have a $\chi^2_1$ distribution.

**The CDF method for finding the distribution of $g(X)$**

The preceding example illustrates a general approach to finding the CDF and PDF of $g(X)$ from the distribution of $X$.

i) $\;$Express the event $\{Y \leq y\}$ in terms of the RV $X$.

ii) $\;$Find $F_Y(y)$, the probability of {$Y \leq y\}$, from the CDF of $X$.

iii) $\;$Differentiate $F_Y(y)$ with respect to $y$ to find the PDF $f_Y(y)$.

**Theorem: The transformation formula**

Let $X$ be a continuous RV with PDF $f_X(x)$ and $\mathsf{P}(a < X < b) = 1$.

Suppose $g$: $(a,b) \rightarrow \mathsf{R}$ is continuous, strictly increasing and differentiable.

Then $Y=g(X)$ is a continuous RV with PDF

$$
 f_Y(y) \; = \; f_X(g^{-1}(y)) \; \frac{d}{dy} \, (g^{-1}(y)), \;\;\; g(a)<y<g(b),
$$

and $f_Y(y)=0$ for $y \leq g(a)$ or $y \geq g(b)$.

If we set $x=g^{-1}(y)$, so $y=g(x)$, we can write

$$
 f_Y(y) \; = \; f_X(x) \, \frac{dx}{dy} \; = \; f_X(x) \, \left( \frac{dy}{dx} \right)^{-1}.
$$

**Proof**

_See handwritten material_

**Example**

Let $X \sim \mathrm{Exp}(1)$ and $Y=\sqrt{X}$. What is the distribution of $Y$?

Define the function $g(x) = \sqrt{x}$ for $x \in (0,\infty)$.

Then $g(x)\,$: $(0,\infty) \rightarrow (0,\infty)$ is continuous, strictly increasing and differentiable, and we can apply the theorem.

With $x = g^{-1}(y) = y^2$,

$$
 \frac{dx}{dy} \; = \; 2 \, y
$$

and

$$
 f_Y(y) \; = \; f_X(x) \, \frac{dx}{dy} \; = \; e^{-x} \, 2 \, y \; = \; 2 \, y \, e^{-y^2} \;\;\; \mbox{for $y>0$}.
$$

We recognise this distribution as $Y \sim \mathrm{Weib}(1,2)$.

**Independence of transformed RVs**

We state the following theorem without proof.

**Theorem**

Suppose $X$ and $Y$ are independent RVs and we have functions

$$
 g: \mathsf{R}\rightarrow \mathsf{R}\;\;\; \mbox{and} \;\;\; h: \mathsf{R}\rightarrow \mathsf{R}.
$$

Then $g(X)$ and $h(Y)$ are also independent.

## 5.2 Applications of transformed RVs to simulation

There are good methods to simulate independent $\mathrm{Unif}(0,1)$ RVs.

These ‘pseudo random number’ generators lie at the heart of methods for simulating from more complex distributions.

We can take

$$
 U \; \sim \; \mathrm{Unif}(0,1)
$$

then produce a new RV

$$
 X \; = \; h(U).
$$

**Example**

Using the function $\,h(u) = -\log(1-u)\,$ gives values $\,X \sim \mathrm{Exp}(1)$.

_See handwritten material_

The next challenge is how to choose the function $h$ to obtain $X$ following a specified distribution.

**Lecture 14**

**The inverse CDF method for simulation**

Suppose we have a way of generating $\mathrm{Unif}(0,1)$ RVs but we wish to generate a RV from a distribution with CDF $G(x)$.

Consider the case where $G(x)$ is a continuous, strictly increasing function

$$
 G: [a,b] \rightarrow [0,1]
$$

with $G(a)=0$ and $G(b)=1$.

For $b=\infty$, we write the function $G$ as $G\,$: $[a,\infty) \rightarrow [0,1)$.

If also $a=-\infty$, we write $G\,$: $(-\infty,\infty) \rightarrow (0,1)$.

The function $G^{-1}\,$: $(0,1) \rightarrow (a,b)$ is well-defined.

![](Images/lec14/lec14_fig1.png)

Note that

$G(G^{-1}(y)) \, = \, y$.

**A key fact**

Suppose the continuous random variable $X$ has CDF $G(x)$, where $G(x)$ is a continuous, strictly increasing function on $[a,b]$.

Define the random variable $Y=G(X)$ $\;\,$—$\;\,$ so $X = G^{-1}(Y)$.

Then, $Y \sim \mathrm{Unif}(0,1)$.

**Proof**

By definition, $Y$ only takes values in the range $[0,1]$.

For $0 \leq y \leq 1$,

$$
\begin{align} \mathsf{P}(Y \leq y) & \; = \; \mathsf{P}\{G(X) \leq y\} \\ & \; = \; \mathsf{P}\{X \leq G^{-1}(y)\} \\ & \; = \; G( G^{-1}(y)) \\ & \; = \; y. \end{align}
$$

**Theorem**

Suppose $G(x)$ is a continuous, strictly increasing function from $[a,b] \rightarrow [0,1]$ with $G(a)=0$ and $G(b)=1$.

Cases $a=-\infty$ and $b=\infty$ are also allowed, as noted above.

Let $U \sim \mathrm{Unif}(0,1)\,$ and set $\,X = G^{-1}(U)$.

Then $X$ is a RV with CDF $G(x)$.

**Proof**

Since $\mathsf{P}(0 < U < 1) = 1$, $X$ is well-defined with probability 1.

For $x \in (a,b)$,

$$
\begin{align} F_X(x) & \; = \; \mathsf{P}(X \leq x) \\ & \; = \; \mathsf{P}(G^{-1}(U) \leq x) \\ & \; = \; \mathsf{P}\{ G(G^{-1}(U)) \leq G(x) \} \\ & \; = \; \mathsf{P}(U \leq G(x)) \\ & \; = \; G(x). \end{align}
$$

**Example of the inverse CDF method**

Generate a RV with CDF

$$
 G(x) \; = \; \begin{cases} \; 1-\exp\{-\lambda \, x^2\} & x > 0 \\ \; 0 & \,x \leq 0, \end{cases}
$$

where $\lambda > 0$.

_See handwritten material_

We find

$$
 G^{-1}(u) \; = \; \sqrt{ \frac{-\log(1-u)}{\lambda} },
$$

so take $U \sim \mathrm{Unif}(0,1)$ and

$$
 X \; = \; G^{-1}(U) \; = \; \sqrt{ \frac{-\log(1-U)}{\lambda} }.
$$

**Another example of the inverse CDF method**

Generate a RV with PDF

$$
 f_X(x) \; = \; \begin{cases} \; \frac{1}{2\,\sqrt{x}} \; & 0 < x < 1 \\ \; 0 & \mbox{otherwise}. \end{cases}
$$

Integrate $f_X$ to obtain

$$
 F_X(x) \; = \; \begin{cases} \; 0 & x \leq 0 \\ \; \sqrt{x} \; & 0 < x < 1 \\ \; 1 & \,x \geq 1. \end{cases}
$$

We have $F_X(x)\,$: $(0,1) \rightarrow (0,1)$ and we see this is continuous and strictly increasing.

We need to find the inverse of $F_X$.

If

$$
 u \; = \; F_X(x) \; = \; \sqrt{x},
$$

then

$$
 x \; = \; u^2 \; = \; F_X^{-1}(u).
$$

So, by the theorem, we take $U \sim \mathrm{Unif}(0,1)$ and set $X = U^2$.

**Example: Creating a Cauchy RV $\,$—$\,$ the novice tennis player**

A tennis player stands at a point P, $10m$ from a wall and hits balls in random directions.

The closest point on the wall is $C$.

![](Images/lec14/lec14_fig2.png)

Denote by $U$ the angle between the ball’s trajectory and a line parallel to the wall.

Consider cases where $0 < U < \pi$ and let $X$ be the distance (in $m$) to the right of $C$ that a ball hits the wall.

If $U \sim \mathrm{Unif}(0,\pi)$, what is the distribution of $X$?

Express $X$ in terms of $U$ and, hence, find an expression for $\mathsf{P}(X \leq x)$.

_See handwritten material_

We obtain

$$
 F_X(x) \; = \; \frac{1}{2} + \frac{1}{\pi} \, \tan^{-1} \left( \frac{x}{10} \right) \;\;\;\; \mbox{for $x \in \mathsf{R}$}.
$$

Differentiating gives

$$
 f_X(x) \; = \; \frac{1}{\pi} \frac{1}{10 \, (1+x^2/10^2)} \;\;\;\; \mbox{for $x \in \mathsf{R}$}.
$$

The RV $X$ follows a _Cauchy_ distribution.

**Definition**

The RV $Y$ follows a **Central Cauchy distribution** with parameter 1 if

$$
 f_Y(y) \; = \; \frac{1}{\pi} \, \frac{1}{1+y^2} \;\;\;\;\; \mbox{for $y \in \mathsf{R}$}.
$$

The RV $Y$ follows a central Cauchy distribution with parameter $\theta$ if

$$
 f_Y(y) \; = \; \frac{1}{\pi} \, \frac{1}{\theta\,(1+y^2/\theta^2)} \;\;\;\;\; \mbox{for $y \in \mathsf{R}$}.
$$

We have seen a method to generate a Cauchy random variable:

Take $U \sim \mathrm{Unif}(0,\pi)\,$ — $\,$ e.g., let $U$ be $\pi$ times a $\mathrm{Unif}(0,1)$ RV.

Then

$$
 X \; = \; \theta \tan \left( \frac{\pi}{2}-U \right) \; \sim \; \mathrm{Cauchy}(\theta).
$$

What is the mean of a Cauchy RV with parameter $\theta\,$?

_See handwritten material_

Calculation shows that

$$
 \int_{-\infty}^{\infty} \, \frac{|y|}{\pi \, (1+y^2)} \, dy \; = \; \infty.
$$

We can (with care) write $\mathsf{E}(|Y|) = \infty$.

But $\mathsf{E}(Y)$ is **undefined**.

Have we seen a previous example of a RV with infinite expectation?

_See handwritten material_
