# Chapter 3 Important families of continuous random variables

**Lecture 5**

**Terminology**

By the **distribution** of a random variable, we mean

- **for a discrete RV:** its probability mass function,
- **for a continuous RV:** its PDF.

Alternatively, the CDF specifies a RV’s distribution in both the discrete and continuous cases.

## 3.1 The uniform distribution

**Definition**

The RV $X$ has a **uniform distribution** on $(a,b)$, denoted

$$
 X \sim \mathrm{Unif}(a,b) \;\;\; \mbox{or} \;\;\; X \sim U(a,b),
$$

if it has PDF

$$
 f_X(x) \; = \; \begin{cases} \frac{1}{b-a}\;\; & \text{$a < x < b$}, \\ 0 & \text{otherwise}. \end{cases}
$$

The uniform distribution provides a model for an observation which must lie between $a$ and $b$, and for which all parts of this range are equally likely.

It is the archetypal ‘random’ distribution.

**CDF of the uniform distribution**

The CDF of a $\mathrm{Unif}(a,b)$ RV is given by

$$
 F_X(x) \; = \; \int_{-\infty}^x \, f_X(u) \, du \; = \; \int_a^x \, \frac{1}{b-a} \, du \; = \; \frac{x-a}{b-a} \;\;\;\;\;\; \mbox{for $a \leq x \leq b$}.
$$

So, for the whole range of $x$,

$$
 F_X(x) \; = \; \begin{cases} \; 0 & \text{if $x< a$} \\ \; \frac{x-a}{b-a}\;\; & \text{if $a \leq x \leq b$}, \\ \; 1 & \text{if $x > b$}. \end{cases}
$$

![](Images/lec5/lec5_fig1.png)

**Lemma**

Let $U \sim \mathrm{Unif}(0,1)$ and

$$
 X \; = \; a + (b-a)U,
$$

where $a \in \mathsf{R}$, $b \in \mathsf{R}$ and $a < b$.

Then

$$
 X \, \sim \, \mathrm{Unif}(a,b).
$$

**Proof**

_See handwritten material_

**Mean and variance of a $\mathrm{Unif}(0,1)$ RV**

Let $U \sim \mathrm{Unif}(0,1)$. Then,

$$
 \mathsf{E}(U) \; = \; \int_{-\infty}^{\infty} \, u \, f_U(u) du \; = \; \int_0^1 \, u \, 1 \, du \; = \; \frac{1}{2}.
$$

Also,

$$
 \mathsf{E}(U^2) \; = \; \int_{-\infty}^{\infty} \, u^2 \, f_U(u) du \; = \; \int_0^1 \, u^2 \, 1 \, du \; = \; \frac{1}{3},
$$

so

$$
 \mathrm{Var}(U) \; = \; \mathsf{E}(U^2) - [\mathsf{E}(U)]^2 \; = \; \frac{1}{3} - \left( \frac{1}{2} \right)^2 \; = \; \frac{1}{12}.
$$

If $X \sim \mathrm{Unif}(a,b)$, we can write this RV as

$$
 X \; = \; a + (b-a)U,
$$

where $U \sim \mathrm{Unif}(0,1)$.

Hence,

$$
 \mathsf{E}(X) \; = \;\; \frac{1}{2} \, (a+b),
$$

$$
 \mathrm{Var}(X) \; = \;\; \frac{(b-a)^2}{12}.
$$

_See handwritten material_

**Example of a uniform RV**

A stick of length 50cm is broken in two at a random point, uniformly distributed along the stick.

Find the distribution of the longer piece of the stick.

_See handwritten material_

## 3.2 The normal distribution

![](Images/lec5/lec5_fig2.png)

The normal or ‘Gaussian’ distribution is a common choice for modelling experimental data.

The normal distribution arises in theory as the limiting distribution of the sum of a large number of independent RVs.

**PDF of the normal distribution**

![](Images/lec5/lec5_fig3.png)

About 68% of the $N(\mu,\sigma^2)$ distribution lies between $\mu-\sigma$ and $\mu+\sigma$,

about 95% lies between $\mu-2\sigma$ and $\mu+2\sigma$.

**Definition**

The RV $X$ has a **normal distribution** with mean $\mu$ and variance $\sigma^2$, denoted $X \sim N(\mu,\,\sigma^2)$, if it has PDF

$$
 f_X(x) \; = \; \frac{1}{\sqrt{2 \pi \sigma^2}} \, \exp \left\{ \frac{-(x-\mu)^2}{2 \, \sigma^2} \right\}, \;\;\; x \in \mathsf{R}.
$$

We shall see this does indeed imply mean $\mu$ and variance $\sigma^2$.

**Definition**

The random variable $Z$ is said to be **standard normal** if it follows a $N(0,\,1)$ distribution.

Thus, if $Z$ is a standard normal RV, it has PDF

$$
 f_Z(z) \; = \; \frac{1}{\sqrt{2 \pi}} \, \exp \left\{ \frac{-z^2}{2} \right\}, \;\;\; z \in \mathsf{R}.
$$

It is implicit in this definition of the PDF of a $N(0,\,1)$ RV that

$$
 \int_{-\infty}^{\infty} \, \frac{1}{\sqrt{2 \pi}} \, \exp \left\{ \frac{-z^2}{2} \right\} \, dz \; = \; 1.
$$

_See ‘Supplementary material’ in Lecture 6_

**Lecture 6**

**Proposition**

Suppose $X \sim N(\mu,\,\sigma^2)$ and $Y = a\,X + b$, where $a, \,b \in \mathsf{R}$, $a \neq 0$.

Then

$$
 Y \; \sim \; N (a\,\mu+b, \, a^2\,\sigma^2).
$$

**Proof**

_See handwritten material_

**Corollary**

If $X \sim N(\mu,\,\sigma^2)$, then $X-\mu \sim N(0,\,\sigma^2)$ and

$$
 Z \; = \; \frac{X-\mu}{\sigma} \; \sim \; N(0,\,1).
$$

**CDF of the normal distribution**

**Notation:** The CDF of the standard normal distribution is denoted by $\Phi(z)$.

It is equal to

$$
 \Phi(z) \; = \; \int_{-\infty}^z \, \frac{1}{\sqrt{2 \pi}} \, e^{-u^2/2} \, du \; = \; \int_{-\infty}^z \, \phi(u) \, du,
$$

where $\phi$ is used to denote the standard normal PDF.

![](Images/lec6/lec6_fig1.png)

The area under the curve to the left of $z$ is the CDF, $\Phi(z)$.

By symmetry, $\Phi(-z)=1-\Phi(z)$ for $z \in \mathsf{R}$.

**Mean and variance of a $N(0,\,1)$ RV**

We use the fact that

$$
 \int_{-\infty}^{\infty} \, \frac{1}{\sqrt{2 \pi}} \, \exp \left\{ \frac{-z^2}{2} \right\} \, dz \; = \; 1.
$$

_See supplementary material_

Let $Z \sim N(0,\,1)$.

Then,

$$
 \mathsf{E}(Z) \; = \; \int_{-\infty}^{\infty} \, z \, \frac{1}{\sqrt{2 \pi}} \, \exp \left\{ \frac{-z^2}{2} \right\} \, dz \; = \; \frac{1}{\sqrt{2 \pi}} \, \left[ -\exp \left\{ \frac{-z^2}{2} \right\} \right]_{-\infty}^{\infty} \; = \; 0.
$$

With $Z \sim N(0,\,1)$,

$$
\begin{align} \mathsf{E}(Z^2) & = \int_{-\infty}^{\infty} \, z^2 \, \frac{1}{\sqrt{2 \pi}} \, \exp \left\{ \frac{-z^2}{2} \right\} \, dz \\ & = \left[ \frac{-1}{\sqrt{2 \pi}} \; z \, \exp \left\{ \frac{-z^2}{2} \right\} \right]_{-\infty}^{\infty} - \, \int_{-\infty}^{\infty} \, \left( \frac{-1}{\sqrt{2 \pi}} \right) \, \exp \left\{ \frac{-z^2}{2} \right\} \, dz \; = \; 0 + 1 \; = \; 1. \end{align}
$$

Here, we have used integration by parts:

$$
 \int_a^b \, u(z) \, v'(z) \, dz \; = \; \left[ u(z) \, v(z) \right]_a^b \, - \int_a^b \, u'(z) \, v(z) \, dz
$$

with $u(z) = z$ and $v(z) = -\exp(-z^2/2)$, so $v'(z)=z\exp(-z^2/2)$.

For $Z \sim N(0,\,1)$,

$$
 \mathrm{Var}(Z) \; = \; \mathsf{E}(Z^2) -(E(Z))^2 \; = \; 1-0^2 \; = \; 1.
$$

Now consider $X \sim N(\mu,\,\sigma^2)$.

We can write $\, X = \mu + \sigma\,Z$, where $Z \sim N(0,\,1)$.

Thus,

$$
 \mathsf{E}(X) \; = \; \mu + \sigma \, \mathsf{E}(Z) = \mu
$$

and

$$
 \mathrm{Var}(X) \; = \; \sigma^2 \, \mathrm{Var}(Z) \; = \; \sigma^2.
$$

So we do have mean $\mu$ and variance $\sigma^2$.

**The deMoivre-Laplace Theorem**

We state this theorem without proof.

**Theorem**

Let $0 < p < 1$ and $S_n \sim \mathrm{Binom}(n,p)$.

Then, for any $a \in \mathsf{R}$,

$$
 \mathsf{P}\left( \frac{S_n - np}{\sqrt{np(1-p)}} \; \leq \; a \right) \, \rightarrow \, \Phi(a) \;\;\; \mbox{as $n \rightarrow \infty$}.
$$

Note that $(S_n - np)/\sqrt{np(1-p)}$ has mean zero and variance one.

There will be a proof of the ‘Central Limit Theorem’ in MA20224: Probability 2A and the deMoivre-Laplace Theorem can be deduced from this as a special case.

**Application of the deMoivre-Laplace Theorem**

**Example**

A new diet is designed to reduce cholesterol levels.

A group of 200 subjects with high cholesterol are put into pairs and one in each pair is randomly chosen to receive the new diet.

In 65 of the 100 pairs, the patient on the new diet shows the greater reduction in cholesterol level.

Let $X$ be the RV denoting the number of pairs in which the patient on the new diet has the greater improvement.

If the new diet has no benefit, then $X \sim \mathrm{Binom}\,(100, 0.5)$ and, according to the deMoivre-Laplace Theorem, we can treat

$$
 \frac{X-100 \times 0.5}{\sqrt{100 \times 0.5 \times 0.5}}
$$

as approximately $N(0,\,1)$.

Calculating probabilities for the case $X \sim \mathrm{Binom}\,(100,0.5)$,

$$
\begin{align} \mathsf{P}(X \geq 65) & = \mathsf{P}\left( \frac{X-100 \times 0.5} {\sqrt{100 \times 0.5 \times 0.5}} \, \geq \, \frac{65-100 \times 0.5}{\sqrt{100 \times 0.5 \times 0.5}} \right) \\ & \approx \mathsf{P}(Z > 3.0) \; = \; 1- \Phi(3.0) \; = \; 0.00135, \end{align}
$$

where $Z$ denotes a $N(0,\,1)$ random variable.

The value of $\Phi(3.0)$ is found in tables of the normal distribution $\,$ — $\,$or by the R command **pnorm()**.

Since there is only a small probability of such a high value of $X$ if the new diet offers no advantage, we may conclude that the new diet has at least some beneficial effect.

**Continuity correction**

Using the deMoivre-Laplace theorem, we approximate the distribution of $X \sim \mathrm{Binom}\,(n,p)$ by that of a normal RV

$$
 Y \, \sim \, N(np,\,n p (1-p)).
$$

Since $X$ takes integer values, it it is tricky to match its distribution to that of the continuous RV $Y$.

We can think of $X=x$ for the discrete $X$ as corresponding to $Y \in (x-0.5,x+0.5)$ for the continuous $Y$.

_See handwritten material_

Consequently, we match the events

$$
 X \leq x \;\;\; \mbox{and} \;\;\; Y \leq x+0.5
$$

and we match

$$
 X \geq x \;\;\; \mbox{and} \;\;\; Y \geq x-0.5.
$$

Applying this idea in making a normal approximation to a binomial probability is known as making a ‘continuity correction.’

Using the continuity correction in our example we obtain:

$$
\begin{align} \mathsf{P}(X \geq 65) & = \mathsf{P}(X > 64.5) \\ & = \mathsf{P}\left( \frac{X-100 \times 0.5}{\sqrt{100 \times 0.5 \times 0.5}} \, > \, \frac{64.5-100 \times 0.5} {\sqrt{100 \times 0.5 \times 0.5}} \right) \\ & \approx \mathsf{P}(Z > 2.9) \; = \; 1- \Phi(2.9) \; = \; 0.00187. \end{align}
$$

Without the continuity correction, we obtained the answer 0.00135.

The true probability, using the full binomial calculation, is 0.00176 — so the continuity correction has helped.

**Lecture 7**

## 3.3 The exponential distribution

**Definition**

The RV $X$ has an **exponential distribution** with rate parameter $\lambda \; (>0)$, denoted $\mathrm{Exp}(\lambda)$, if it has PDF

$$
 f_X(x) \; = \; \begin{cases} \lambda \, \exp\{-\lambda \, x\}\;\; & \text{$x \geq 0$}, \\ 0 & \text{otherwise}. \end{cases}
$$

**Uses of the exponential distribution**

- Survival times (medical)
- Failure times (industrial)
- Waiting times

![](Images/lec7/lec7_fig1.png)

**CDF of the $\mathrm{Exp}(\lambda)$ distribution**

For $x < 0$, the CDF is $F_X(x) = 0$.

For $x \geq 0$, the CDF is

$$
\begin{align} F_X(x) & = \int_0^x \, f_X(u) \, du \; = \; \int_0^x \, \lambda \, \exp\{-\lambda \, u\} \, du \\ & = \left[ \, -\exp\{-\lambda \, u\} \, \right]_0^x \; = \; 1-\exp\{-\lambda \, x\}. \end{align}
$$

Note this implies $F_X(x) \rightarrow 1$ as $x \rightarrow \infty$.

So, we have checked that the PDF does integrate to one.

**Mean and variance of an $\mathrm{Exp}(\lambda)$ RV**

If $X \sim \mathrm{Exp}(\lambda)$,

$$
 \mathsf{E}(X) \; = \; \frac{1}{\lambda},
$$

$$
 \mathsf{E}(X^2) \; = \; \frac{2}{\lambda^2}.
$$

Hence,

$$
 \mathrm{Var}(X) \; = \; \mathsf{E}(X^2) - [\mathsf{E}(X)]^2 \; = \; \frac{1}{\lambda^2}.
$$

_See handwritten material_

**The memoryless property of the exponential distribution**

Suppose $X \sim \mathrm{Exp}(\lambda)$ and consider the conditional probability that $X > t+s$ given that $X>t$, where $t>0$ and $s>0$.

Recall the definition of conditional probability,

$$
 \mathsf{P}(A \, | \, B) \; = \; \frac{\mathsf{P}(A \; \mbox{and} \; B)}{\mathsf{P}(B)}.
$$

So,

$$
\begin{align} \mathsf{P}\{X > t+s \, | \, X>t\} & = \frac{\mathsf{P}(X > t+s \;\; \mbox{and} \;\; X>t)}{\mathsf{P}(X>t)} \\ & = \frac{\mathsf{P}(X > t+s)}{\mathsf{P}(X>t)} \; = \; \frac{1-F_X(t+s)}{1-F_X(t)} \\ & = \frac{\exp\{-\lambda \, (t+s)\}}{\exp\{-\lambda \, t\}} \;\; = \;\; \exp\{-\lambda \, s\}. \end{align}
$$

Since

$$
 \mathsf{P}\{X > t+s \, | \, X>t\} \; = \; \exp\{-\lambda \, s\}
$$

does not depend on $t$, we say the exponential distribution is memoryless.

**Example**

An angler knows that the waiting time (in minutes) before he catches a fish follows an $\mathrm{Exp}(0.02)$ distribution.

How long does he have to wait to have a probability of $0.5$ of catching a fish? (This value of $t$ is called the ‘median’ of the distribution of $T$ — see also Problem Sheet 3, Question 3.)

If he has waited 30 minutes and not yet caught a fish, how much longer must he wait to have a $0.5$ probability of catching a fish?

_See handwritten material_

**The hazard rate of the exponential distribution**

**Definition**

The **hazard rate** at time $t$ of a survival time distribution is

$$
 h(t) \; = \; \lim_{\delta t \, \downarrow \, 0} \; \frac{1}{\delta t} \; \mathsf{P}\{X \in (t,t+\delta t] \, | \, X>t\},
$$

where $X$ is a RV following the specified distribution.

This can be viewed as the instantaneous rate of failure at time $t$, given survival up to time $t$.

The hazard rate is a very natural property of a lifetime distribution.

Risks from particular hazards are often expressed in terms of a hazard rate, for example, in the statement

`The rate of incidence of lung cancer is higher by a factor $n$ for smokers than for non-smokers.’

If $f_X$ is continuous at $t$,

$$
 \mathsf{P}\{X \in (t,t+\delta t] \; \mbox{and} \; X > t\} \; = \; \mathsf{P}\{X \in (t,t+\delta t]\} \approx f_X(t) \, \delta t.
$$

Also,

$$
 \mathsf{P}(X > t) \; = \; 1- F_X(t).
$$

Thus, we have

$$
\begin{align} h(t) & = \lim_{\delta t \rightarrow 0} \; \frac{1}{\delta t} \; \mathsf{P}\{X \in (t,t+\delta t] \, | \, X>t\}, \\ & = \lim_{\delta t \rightarrow 0} \; \frac{1}{\delta t} \; \frac{\mathsf{P}\{X \in (t,t+\delta t]\}}{1- F_X(t)}, \\ & = \lim_{\delta t \rightarrow 0} \; \frac{\mathsf{P}\{X \in (t,t+\delta t]\}}{\delta t} \; \frac{1}{1- F_X(t)} \; = \; \frac{f_X(t)}{1- F_X(t)}. \end{align}
$$

For an exponential RV, $X \sim \mathrm{Exp}(\lambda)$,

$$
 h(t) \; = \; \frac{f_X(t)}{1- F_X(t)} \; = \; \frac{\lambda \, \exp\{-\lambda \, t\}}{\exp\{-\lambda \, t\}} \; = \; \lambda.
$$

The constant hazard rate is in keeping with the memoryless property.

Working in the other direction, suppose we know a positive RV follows a continuous, ``memoryless’’ distribution, and so has a constant hazard rate. What distribution does this RV follow?

Let $X$ be a positive and continuous RV with hazard rate $\, h(t) \, = \, k$.

Then,

$$
 \frac{f_X(t)}{1- F_X(t)} \; = \; k,
$$

$$
 \int_0^x \, \frac{f_X(t)}{1- F_X(t)} \, dt \; = \; \int_0^x \, k \, dt,
$$

and

$$
 \left[ \, -\log\{1-F_X(t)\} \, \right]_0^x \; = \; k\,x.
$$

It follows that

$$
 -\log\{1-F_X(x)\} \; = \; k\,x
$$

and

$$
 F_X(x) \; = \; 1- \exp(-k\,x),
$$

so $X$ is an $\mathrm{Exp}(k)$ random variable $\,$—$\,$ which is why I referred to $k$ as the ``rate parameter’’.

**The Weibull distribution**

**Definition**

The RV $X$ has a **Weibull distribution** with parameters $\lambda$ and $\beta$, denoted $\mathrm{Weib}(\lambda, \beta)$, if it has PDF

$$
 f_X(x) \; = \; \begin{cases} \lambda \, \beta \, x^{\beta-1} \, \exp\{-\lambda \, x^{\beta}\} \;\; & \text{$x \geq 0$}, \\ 0 & \text{otherwise}. \end{cases}
$$

The CDF of the $\mathrm{Weib}(\lambda, \beta)$ distribution is

$$
 F_X(x) \; = \; \begin{cases} 0 & \text{$x < 0$}, \\ 1 - \exp\{-\lambda \, x^{\beta}\} \;\; & \text{$x \geq 0$}. \end{cases}
$$

The hazard rate of the Weibull distribution at time $t$ is

$$
 h(t) \; = \; \frac{f_X(t)}{1- F_X(t)} \; = \;\, \frac{\lambda \, \beta \, t^{\beta-1} \, \exp\{-\lambda \, t^{\beta}\}} { \exp\{-\lambda \, t^{\beta}\} } \;\, = \;\, \lambda \, \beta \, t^{\beta-1}.
$$

The value of $\beta$ shapes the hazard rate function $h(t)$.

- For $\beta=1$, $h(t)$ is constant and the $\mathrm{Weib}(\lambda,\beta)$ distribution is also the $\mathrm{Exp}(\lambda)$ distribution,
- For $\beta > 1$, $h(t)$ increases with $t$ $\;$—$\;$ old items are more likely to fail than new ones,
- For $\beta < 1$, $h(t)$ decreases with $t$ $\;$—$\;$ old items are less likely to fail than new ones.

**Lecture 8**

## 3.4 The Gamma distribution

Before defining the Gamma distribution, we first need to define the **Gamma function**.

**Definition**

The **Gamma function** is defined for $t>0$ as

$$
 \Gamma(t) \; = \; \int_0^{\infty} \, x^{t-1} \, e^{-x} \, dx.
$$

Note that

$$
\begin{align} \Gamma(t+1) & = \int_0^{\infty} \, x^{t} \, e^{-x} \, dx \\ & = \left[ \, -x^t \, e^{-x} \, \right]_0^{\infty} + \int_0^{\infty} \, t \, x^{t-1} \, e^{-x} \, dx \\ & = t \, \Gamma(t) \; = \; t \, (t-1) \, \Gamma(t-1) \; = \; \ldots \; . \end{align}
$$

For $t=1$,

$$
 \Gamma(1) \; = \; \int_0^{\infty} \, e^{-x} \, dx \; = \; 1.
$$

For integer values of $t$, $\,\Gamma(t+1) = t \, \Gamma(t)$ and $\Gamma(1)=1$ imply

$$
 \Gamma(t) \; = \; (t-1)!
$$

For $t=1/2$,

$$
 \Gamma(1/2) \; = \; \int_0^{\infty} \, x^{-1/2} e^{-x} \, dx \; = \; \sqrt{\pi}
$$

—$\,$ to see this, make a change of variable to $y=\sqrt{2x}$ and use

$$
 \int_0^{\infty} \, \frac{1}{\sqrt{2 \pi}} \, \exp(-y^2/2) \, dy \; = \; \frac{1}{2}.
$$

![](Images/lec8/lec8_fig1.png)

**Definition**

The RV $X$ has a **Gamma distribution** with parameters $\lambda$ and $k$ ($\lambda > 0$, $k > 0$), denoted $\mathrm{Gamma}(\lambda,k)$, if it has PDF

$$
 f_X(x) \; = \; \begin{cases} \frac{1}{\Gamma(k)} \, \lambda^k \, x^{k-1} \, \exp\{-\lambda \, x\} \;\; & \text{$x \geq 0$}, \\ 0 & \text{otherwise}. \end{cases}
$$

We can check:

$$
\begin{align} \int_0^{\infty} \, f_X(x) \, dx & = \int_0^{\infty} \, \frac{1}{\Gamma(k)} \, \lambda^k \, x^{k-1} \, \exp\{-\lambda \, x\} \, dx \\ & = \int_0^{\infty} \, \frac{1}{\Gamma(k)} \, u^{k-1} \, \exp\{-u\} \, du \; = \; 1 \end{align}
$$

—$\,$ substituting $u = \lambda \, x$, with ‘$du = \lambda \, dx$’ .

**Mean and variance of the $\mathrm{Gamma}(\lambda,k)$ distribution**

If $X \sim \mathrm{Gamma}(\lambda,k)$,

$$
 \mathsf{E}(X) \; = \; \frac{k}{\lambda}
$$

$$
 \mathsf{E}(X^2) \; = \; \frac{(k+1)\,k}{\lambda^2}
$$

Hence,

$$
 \mathrm{Var}(X) \; = \; \mathsf{E}(X^2) - [\mathsf{E}(X)]^2 \; = \; \frac{(k+1)\,k}{\lambda^2} \, - \, \left\{ \frac{k}{\lambda} \right\}^2 \; = \;\;\; \frac{k}{\lambda^2}
$$

_See handwritten material_

**Properties of the Gamma distribution**

**Scaling**

$$
 X \sim \mathrm{Gamma}(\lambda,k) \; \Rightarrow \; Y = c\,X \sim \mathrm{Gamma}(\lambda/c,k).
$$

_See handwritten material_

The parameter $\lambda$ serves to scale the Gamma distribution, but the mean is _inversely_ proportional to $\lambda$.

So, the role of $\lambda$ is similar to that of the rate parameter in the exponential distribution $\;$—$\;$ and we shall see more of a connection in due course.

![](Images/lec8/lec8_fig2.png)

The parameter $k$ determines the shape of the Gamma distribution.

**Relation between the Gamma and exponential distributions**

Note that the $\mathrm{Gamma}(\lambda,1)$ distribution has density

$$
 f_X(x) \; = \; \lambda \, e^{-\lambda \, x} \;\;\; \mbox{for $x \geq 0$},
$$

and so is an $\mathrm{Exp}(\lambda)$ distribution.

We state but do not prove here that:

If $X_1, \ldots , X_k$ are independent $\mathrm{Exp}(\lambda)$ RVs, then

$$
 X_1 + \ldots + X_k \; \sim \; \mathrm{Gamma}(\lambda,k).
$$

Hence, for integers $k_1$ and $k_2$, if $Y_1 \sim \mathrm{Gamma}(\lambda,k_1)$ and $Y_2 \sim \mathrm{Gamma}(\lambda,k_2)$ are independent RVs, then

$$
 Y_1 + Y_2 \; \sim \; \mathrm{Gamma}(\lambda,k_1+k_2).
$$

(Express $Y_1$ and $Y_2$ as sums of independent $\mathrm{Gamma}(\lambda,1)$ RVs.)

**Relation between the Gamma and normal distributions**

We state but do not prove here that:

1.  $\;$If $X \sim N(0,1)$, then $\, X^2 \; \sim \; \mathrm{Gamma}(\frac{1}{2},\frac{1}{2})$.
2.  $\;$If $X_1, \ldots , X_k$ are independent $N(0,1)$ RVs, then
    $$
     X_1^2 + \ldots + X_k^2 \; \sim \; \mathrm{Gamma}\left(\frac{1}{2},\frac{k}{2}\right)
    $$
    —$\,$ this is also known as the $\chi^2_k$ distribution, or $\chi^2$ (chi squared) distribution on $k$ degrees of freedom.

Thus, if $X_1$ and $X_2$ are independent $N(0,1)$ RVs, $X_1^2 + X_2^2$ is the sum of two independent $\mathrm{Gamma}(\frac{1}{2},\frac{1}{2})$ RVs, so

$$
 X_1^2 + X_2^2 \; \sim \; \mathrm{Gamma}\left(\frac{1}{2},\,1\right) \; \sim \; \mathrm{Exp}\left(\frac{1}{2}\right).
$$
