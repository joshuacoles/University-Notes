# Chapter 6 Sums of random variables

## 6.1 Mean and variance of sums of random variables

**Lecture 15**

Recall that

$$
 \mathsf{E}(X_1 + X_2) \; = \; \mathsf{E}(X_1) + \mathsf{E}(X_2)
$$

and

$$
 \mathrm{Var}(X_1 + X_2) \; = \; \mathrm{Var}(X_1) + \mathrm{Var}(X_2) \, + \, 2\, \mathrm{Cov}(X_1,X_2).
$$

**Proposition**

$$
 \mathsf{E}\left( \, \sum_{i=1}^n \, X_i \right) \; = \; \sum_{i=1}^n \, \mathsf{E}(X_i).
$$

**Proposition**

$$
 \mathrm{Var}\left( \, \sum_{i=1}^n \, X_i \right) \; = \; \sum_{i=1}^n \, \mathrm{Var}(X_i) \, + \, 2 \sum_{1 \leq i < j \leq n} \, \mathrm{Cov}(X_i,X_j).
$$

_See handwritten material_

**Proposition**

Suppose $X_1, \, \ldots \,,X_n$ are independent RVs.

Then

$$
 \mathrm{Var}\left( \, \sum_{i=1}^n \, X_i \right) \; = \; \sum_{i=1}^n \, \mathrm{Var}(X_i).
$$

**Proof**

Since $X_1, \, \ldots \,,X_n$ are independent, we have

$$
 \mathrm{Cov}(X_i,X_j) \; = \; 0 \;\;\;\; \mbox{for each pair $i$ and $j$}.
$$

Substituting this in the previous result gives the desired answer.

**Random samples**

**Definition**

Let $\,X_1, \, \ldots \,,X_n\,$ be independent RVs from the same distribution.

Then, $\,X_1, \, \ldots \,,X_n\,$ are said to be **independent and identically distributed,** or **i.i.d.** for short.

The values taken by these RVs, $\,x_1, \, \ldots \,,x_n\,$, are said to form a **random sample** from the distribution in question.

**Example**

An experiment is performed $n$ times, independently.

We define

$$
 X_i \; = \; \begin{cases} \,1 \; & \mbox{if a certain event occurs in experiment $i$} \\ \,0 \; & \mbox{if the event does not occur in experiment $i$.} \end{cases}
$$

The set of values $\{x_1,\,\ldots\,,x_n\}$ is a random sample from the $\mathrm{Bernoulli}(p)$ distribution, where $p$ is the probability the event occurs in a particular experiment.

## 6.2 The Central Limit Theorem

In the preceding example, the sum of the Bernoulli RVs is

$$
 S_n \; = \; X_1 + \,\ldots\, + X_n \; \sim \; \mathrm{Binom}(n,p).
$$

It is easy to check that, for a single Bernoulli RV,

$$
 \mathsf{E}(X_i) \; = \; p \;\;\;\; \mbox{and} \;\;\;\; \mathrm{Var}(X_i) \; = \; p\,(1-p).
$$

Hence, by our earlier results

$$
 \mathsf{E}(S_n) \; = \; n\,p \;\;\;\; \mbox{and} \;\;\;\; \mathrm{Var}(S_n) \; = \; n\,p\,(1-p).
$$

The deMoivre-Laplace theorem tells us that, for large $n$, approximately

$$
 \frac{S_n - n\,p}{\sqrt{n\,p\,(1-p)}} \; \sim \; N(0,1).
$$

The Central Limit Theorem is a more general form of this result.

We state without proof:

**The Central Limit Theorem**

Suppose $\,X_1$, $X_2,\,\ldots\,$ are i.i.d. RVs with finite expectation and variance

$$
 \mathsf{E}(X_i) \; = \; \mu \;\; \mbox{and} \;\; \mathrm{Var}(X_i) \; = \; \sigma^2 >0 \;\; \mbox{for each $i=1$, $2,\,\ldots\;\,$}.
$$

Let $\,S_n \; = \; X_1 + \,\ldots\, + X_n$.

Then, for any $a \in \mathsf{R}$,

$$
 \mathsf{P}\left( \frac{S_n-n\,\mu}{\sqrt{n\,\sigma^2}} \, < \, a \right) \; \rightarrow \; \Phi(a) \;\;\; \mbox{as $n \rightarrow \infty$},
$$

where $\Phi(x)$ is the CDF at $x$ of a standard normal distribution.

Previous results imply $(S_n-n\,\mu)/\sqrt{n\,\sigma^2}\,$ has mean zero and variance 1.

The Central Limit Theorem gives us the full information about the shape of this distribution $\,$—$\,$ for large $n$.

**Example**

Suppose

$$
 X_i \sim \mathrm{Exp}(0.2), \;\;\; i=1,\;2,\;\ldots\;.
$$

We can look at the distribution of one observation $X_i$ by taking 1000 realisations and plotting the histogram.

Suppose, instead, we draw a sample of $5$ RVs $X_1,\ldots,X_5$ and take their sum.

Now repeat this 1000 times and plot the histogram.

We see a distribution whose _shape_ is somewhat like that of a normal distribution. However, the left hand tail is rather short and the right hand tail is rather long.

Repeating with sums of 20 or 100 $\mathrm{Exp}(0.2)$ RVs, the histograms look to follow the shape of a normal density closely.

Histograms of sums of $\mathrm{Exp}(0.2)$ RVs:

![](Images/lec15/lec15_fig1.png)

The Weibull distribution with $\beta=0.5$ has a longer upper tail and convergence to a normal distribution is slower.

Histograms of sums of $\mathrm{Weib}(1,0.5)$ RVs:

![](Images/lec15/lec15_fig2.png)

## 6.3 Distribution of a sum of RVs

**Lecture 16**

Suppose $X$ and $Y$ are continuous RVs with joint PDF $f_{X,Y}(x,y)$.

Let $W=X+Y$.

What is the PDF, $f_W(w)$, of $W\,$?

First consider the CDF,

$$
 \mathsf{P}(W \leq w) \; = \; \mathsf{P}(X+Y \leq w).
$$

If we can write this in the form

$$
 \mathsf{P}(W \leq w) \; = \; \int_{-\infty}^w \, h(v) \, dv,
$$

then we can deduce $f_W(w) = h(w)$.

Let $A_w \; = \; \{\,(x,y): \; x+y \leq w\,\}$.

Then,

$$
\begin{align} \mathsf{P}(W \leq w) & \; = \; \int_{A_w} \, f_{X,Y}(x,y) \; dy \; dx \\ & \; = \; \int_{-\infty}^{\infty} \, \left\{ \, \int_{-\infty}^{w-x} \, f_{X,Y}(x,y) \; dy \, \right\} \, dx \\ & \; = \; \int_{-\infty}^{\infty} \, \left\{ \, \int_{-\infty}^{w} \, f_{X,Y}(x,v-x) \; dv \right\} \, dx, \end{align}
$$

using the substitution $v=y+x$ in the inner integral.

_See handwritten material_

Re-arrange this equation as

$$
\begin{align} \mathsf{P}(W \leq w) & \; = \; \int_{-\infty}^{\infty} \, \left\{ \, \int_{-\infty}^{w} \, f_{X,Y}(x,v-x) \; dv\right\} \, dx \\ & \; = \; \int_{-\infty}^{w} \, \left\{ \, \int_{-\infty}^{\infty} \, f_{X,Y}(x,v-x) \; dx \, \right\} \, dv. \end{align}
$$

**Convolution formula: General case**

Comparing the above formula with

$$
 \mathsf{P}(W \leq w) \; = \; \int_{-\infty}^w \, f_W(v) \, dv,
$$

we can deduce that $W=X+Y$ has PDF

$$
 f_W(w) \; = \; \int_{-\infty}^{\infty} \, f_{X,Y}(x,w-x) \; dx.
$$

If $X$ and $Y$ are independent, continuous RVs, then their sum $W=X+Y$ has PDF

$$
\begin{align} f_W(w) & \; = \; \int_{-\infty}^{\infty} \, f_{X,Y}(x,w-x) \; dx \\ & \; = \; \int_{-\infty}^{\infty} \, f_{X}(x) \, f_Y(w-x) \; dx. \end{align}
$$

This is known as the **Convolution formula**.

**The convolution formula for two positive RVs**

If $X$ and $Y$ are continuous RVs taking positive values, their sum $W=X+Y$ has PDF

$$
 f_W(w) \; = \; \int_{0}^{w} \, f_{X,Y}(x,w-x) \; dx.
$$

If, in addition, $X$ and $Y$ are independent, then

$$
 f_W(w) \; = \; \int_{0}^{w} \, f_{X}(x) \, f_Y(w-x) \; dx.
$$

## 6.4 The sum of two normal random variables

**Proposition**

If $X$ and $Y$ are independent and

$$
 X \; \sim \; N(\mu_X,\,\sigma^2_X) \;\;\; \mbox{and} \;\;\; Y \; \sim \; N(\mu_Y,\,\sigma^2_Y),
$$

then

$$
 W \; = \; X+Y \; \sim \; N(\mu_X + \mu_Y, \, \sigma^2_X + \sigma^2_Y).
$$

**Proof**

We first consider the case where $\mu_X=\mu_Y=0$.

Using the convolution formula,

$$
\begin{align} f_W(w) & \; = \; \int_{-\infty}^{\infty} \, f_X(x) \, f_Y(w-x) \, dx \\ & \; = \; \int_{-\infty}^{\infty} \frac{1}{\sqrt{2\pi\sigma^2_X}} \, \exp\left(\frac{-x^2}{2\sigma^2_X}\right) \, \frac{1}{\sqrt{2\pi\sigma^2_Y}} \, \exp\left(\frac{-(w-x)^2}{2\sigma^2_Y}\right) dx. \end{align}
$$

Hence,

$$
 f_W(w) \; = \; \frac{1}{2\pi} \, \frac{1}{\sqrt{\sigma^2_X \, \sigma^2_Y}} \, \int_{-\infty}^{\infty} \exp \left( \frac{-1}{2} \left[ \frac{x^2}{\sigma^2_X}+\frac{w^2-2\,w\,x+x^2}{\sigma^2_Y} \right] \right) dx.
$$

We can re-arrange the terms in the exponential as a quadratic in $x$ (which involves $w$) plus a term in $w^2$.

This gives an expression of the form

$$
\begin{align} f_W(w) & \; = \; k \, \int_{-\infty}^{\infty} \, \exp \lbrace -a(x-b\,w)^2 - c\,w^2 \rbrace \, dx, \\ & \; = \; k \; e^{-c\,w^2} \, \int_{-\infty}^{\infty} \, \exp \lbrace -a(x-b\,w)^2 \rbrace \, dx, \end{align}
$$

where $k$, $a$, $b$ and $c$ are constants (not involving $x$ or $w$).

We have

$$
 f_W(w) \; = \; k \; e^{-c\,w^2} \, \int_{-\infty}^{\infty} \, \exp \lbrace -a(x-b\,w)^2 \rbrace \, dx.
$$

Note that in

$$
 \int_{-\infty}^{\infty} \, \exp \lbrace -a(x-b\,w)^2 \rbrace \, dx
$$

the integrand is a multiple of the PDF of a normal RV $X$ with mean $bw$, so the answer is a constant which does not involve $w$.

It follows that $f_W(w)$ has the form

$$
 f_W(w) \; = \; h \; e^{-c\,w^2}
$$

for a constant $h$ $\,$—$\,$ so $W$ is normally distributed (with mean 0).

Given that $W$ is normally distributed, all that remains is to find $\mathsf{E}(W)$ and $\mathrm{Var}(W)$.

Using standard results for independent RVs $X$ and $Y$,

$$
 \mathsf{E}(W) \; = \; \mathsf{E}(X) + \mathsf{E}(Y) \; = \; 0
$$

and

$$
 \mathrm{Var}(W) \; = \; \mathrm{Var}(X) + \mathrm{Var}(Y) \; = \; \sigma^2_X + \sigma^2_Y.
$$

Thus, we have

$$
 W \; \sim \; N(0, \, \sigma^2_X + \sigma^2_Y) \; = \; N(\mu_X + \mu_Y, \, \sigma^2_X + \sigma^2_Y),
$$

which proves the result for the case $\mu_X=\mu_Y=0$.

**An algebraic derivation** giving $\mathsf{E}(W)$ and $\mathrm{Var}(W)$ is possible. We present one for interested readers — but this derivation may be skipped without any great loss.

We have

$$
\begin{equation} \tag{6.1} f_W(w) = \frac{1}{2\pi} \frac{1}{\sqrt{\sigma^2_X \sigma^2_Y}} \int_{-\infty}^{\infty} \exp \left( \frac{-1}{2} \left[ \frac{x^2}{\sigma^2_X}+\frac{(w-x)^2}{\sigma^2_Y} \right] \right) dx. \end{equation}
$$

First, note that

$$
\begin{align} \frac{x^2}{\sigma^2_X}+\frac{(w-x)^2}{\sigma^2_Y} & \; = \; \sigma^{-2}_X \, x^2 + \sigma^{-2}_Y \, (x^2 -2 \, w \, x + w^2) \\ & \; = \; (\sigma^{-2}_X + \sigma^{-2}_Y) \, x^2 -2 \, \sigma^{-2}_Y \, w \, x + \sigma^{-2}_Y \, w^2 \\ & \; = \;(\sigma^{-2}_X + \sigma^{-2}_Y) \left\{ x^2 - \frac{2 \, \sigma^{-2}_Y \, w}{\sigma^{-2}_X + \sigma^{-2}_Y} \, x \right\} + \sigma^{-2}_Y \, w^2 \\ & \; = \; (\sigma^{-2}_X + \sigma^{-2}_Y) \left\{ x - \frac{\sigma^{-2}_Y \, w}{\sigma^{-2}_X + \sigma^{-2}_Y} \right\}^2 - \frac{\sigma^{-4}_Y \, w^2}{\sigma^{-2}_X + \sigma^{-2}_Y} + \sigma^{-2}_Y \, w^2 \\ & \; = \; \frac{(\sigma^2_X + \sigma^2_Y)}{\sigma^2_X \, \sigma^2_Y} \, \left\{ x - \frac{\sigma^{-2}_Y \, w}{\sigma^{-2}_X + \sigma^{-2}_Y} \right\}^2 + \frac{w^2}{(\sigma^2_X + \sigma^2_Y)}. \end{align}
$$

Substituting into [(6.1)](Ch6-sums-of-random-variables.html#eq:fW), we get

$$
 f_W(w) \; = \; \frac{1}{\sqrt{2\pi (\sigma^2_X + \sigma^2_Y)}} \, \exp \left( \,\frac{-1}{2} \frac{w^2}{(\sigma^2_X + \sigma^2_Y)} \, \right) \int_{-\infty}^{\infty} \, g_X(x) \, dx,
$$

where

$$
 g_X(x) \; = \; \sqrt{\frac{(\sigma^2_X + \sigma^2_Y)}{2\pi (\sigma^2_X \, \sigma^2_Y)}} \, \exp \left( \,\frac{-(\sigma^2_X + \sigma^2_Y)} {2\;\sigma^2_X \, \sigma^2_Y} \left\{ x - \frac{\sigma^{-2}_Y \, w}{\sigma^{-2}_X + \sigma^{-2}_Y} \right\}^2 \right)
$$

is the PDF of a random variable

$$
 X \; \sim \; N \, \left( \, \frac{\sigma^{-2}_Y}{\sigma^{-2}_X + \sigma^{-2}_Y}\,w, \;\frac{\sigma^2_X \, \sigma^2_Y}{(\sigma^2_X + \sigma^2_Y)} \, \right).
$$

Since

$$
 \int g_X(x) \, dx=1,
$$

we have

$$
 f_W(w) \; = \; \frac{1}{\sqrt{2\pi (\sigma^2_X + \sigma^2_Y)}} \, \exp \left( \,\frac{-1}{2} \frac{w^2}{(\sigma^2_X + \sigma^2_Y)} \, \right)
$$

and we see that

$$
 W \; \sim \; N(0,\,\sigma^2_X + \sigma^2_Y).
$$

Thus, if $X \sim N(0,\,\sigma^2_X)$ and $Y \sim N(0,\,\sigma^2_Y)$ are independent,

$$
 X + Y \; \sim \; N(0,\,\sigma^2_X + \sigma^2_Y).
$$

QED

**Proof of Proposition: continued**

Let $X$ and $Y$ be independent,

$$
 X \; \sim \; N(\mu_X,\,\sigma^2_X) \;\;\; \mbox{and} \;\;\; Y \; \sim \; N(\mu_Y,\,\sigma^2_Y).
$$

Recall that if $Z \sim N(\mu,\sigma^2)$, then $Z+a \sim N(\mu+a,\sigma^2)$.

Let $X^\prime \, = \, X - \mu_X \, \sim \, N(0,\,\sigma^2_X)$ and $Y^\prime \, = \, Y - \mu_Y \, \sim \, N(0,\,\sigma^2_Y)$.

These RVs are independent with mean zero, so we have proved that

$$
 X^\prime + Y^\prime \; \sim \; N(0,\,\sigma^2_X + \sigma^2_Y).
$$

Hence

$$
 X+Y \; = \; X^\prime +\mu_X + Y^\prime + \mu_Y \; \sim \; N(\mu_X+\mu_Y,\,\sigma^2_X + \sigma^2_Y).
$$

QED

**The sum of $n$ i.i.d. normal random variables**

**Proposition**

Suppose $X_1, \ldots, X_n$ are independent, identically distributed with $X_i \sim N(\mu,\,\sigma^2)$, $i=1,\ldots,n$.

Then

$$
 \sum_{i=1}^n \, X_i \; \sim \; N(n\,\mu, \, n\,\sigma^2).
$$

**Proof**

We prove this result by induction. The previous result covers the case $n=2$.

Given

$$
 \sum_{i=1}^{n-1} \, X_i \; \sim \; N((n-1)\,\mu, \, (n-1)\,\sigma^2),
$$

apply the previous result to the two RVs $\;\sum_{i=1}^{n-1} \, X_i \,$ and $\,X_n$.

**The mean of $n$ i.i.d. normal (or other) random variables**

Suppose $X_1, \ldots, X_n$ are independent, identically distributed with

$$
 X_i \sim N(\mu,\,\sigma^2), \;\;\;\; i=1,\ldots,n.
$$

Then

$$
 \bar{X} \; = \; \frac{1}{n} \sum_{i=1}^n \, X_i \; \sim \; N(\mu, \, \frac{\sigma^2}{n}).
$$

More generally, for any i.i.d. RVs $X_1, \ldots, X_n$, with $\mathsf{E}(X_i)=\mu$ and $\mathrm{Var}(X_i)=\sigma^2$, $i=1,\ldots,n$,

$$
 \mathsf{E}(\bar{X}) \; = \; \mu \;\;\; \mbox{and} \;\;\; \mathrm{Var}(\bar{X}) \; = \; \frac{\sigma^2}{n}
$$

and the Central Limit Theorem implies the distribution of $\bar{X}$ is _approximately_ normal for large $n$.
