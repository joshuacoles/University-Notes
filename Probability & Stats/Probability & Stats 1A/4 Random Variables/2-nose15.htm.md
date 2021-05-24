\



### 4.3 The Poisson distribution

The Poisson distribution is often used to model counts of the number of
"successes" where there are a large number of independent trials, each
with a small probability of success.

e.g. The number of accidents at a busy traffic junction.

Definition 23 (Poisson distribution)
A random variable $X$ is said to have a Poisson distribution with
parameter $\lambda>0$, written $XsimPo\left( \lambda right)$, if its
pmf is given by

$$
\begin{align}
ℙ\left( X = x \right) & = & \left\{\begin{matrix} \begin{matrix}\text{}\frac{\left(\lambda\right)^{x}}{x !}\text{}e^{- \lambda} & \text{for }x\in\left\{ 0 , 1 , 2 , … ⁡ \right\}\text{}, \\ 0 & \text{otherwise.}\end{matrix} \end{matrix}\right. \}& text{}
\end{align}
$$

We'll verify that

$$
\begin{align}
\underset{x \in I}{\sum}ℙ\left( X = x \right)=\sum_{x = 0}^{\infty}ℙ\left( X = x \right)=1. & & & text{}
\end{align}
$$

Recall that the series expansion for $e^{y}$ is, for all $yinℝ$,

$$
\begin{align}
e^{y}=1+y+\frac{y^{2}}{2 !}+\dots =\sum_{i = 0}^{\infty}\frac{y^{i}}{i !}. & & & \text{(4.8)}\text{}text{}
\end{align}
$$

Now,

$$
\begin{align}
\sum_{x = 0}^{\infty}ℙ\left( X = x \right) & = & \sum_{x = 0}^{\infty}\frac{\left(\lambda\right)^{x}}{x !}e^{- \lambda} & \text{} \\ & = & e^{- \lambda}\sum_{x = 0}^{\infty}\frac{\left(\lambda\right)^{x}}{x !} & \text{(4.9)}\text{}\text{} \\ & = & e^{- \lambda}e^{\lambda}=1. & \text{(4.10)}\text{}text{}
\end{align}
$$

where equation ([4.10](#x26-42005r4.10)) follows from
([4.9](#x26-42005r4.9)) using ([4.8](#x26-42004r4.8)) with $y=lambda$.
We shall now show, in the following theorem which is sometimes called
the law of small numbers, that if $XsimB\left( n , p right)$ where $n$
is large and $p$ is small then $X$ may be approximated by the Poisson
distribution with parameter $lambda=np$. As a rule of thumb,
$pleq 0.05,n=20$ gives a reasonable approximation whilst $n=100$ gives
a good approximation.

Theorem 15 (Poisson approximation to the binomial)
Suppose that $XsimB\left( n , p right)$ and that
$\underset{n \rightarrow \infty}{ \lim ⁡}np=lambda$, so that
$n\rightarrow\infty$ and $prightarrow 0$ in such a way that
$np=lambda$ remains constant, then for each fixed non-negative integer
$x$

$$
\begin{align}
\underset{n \rightarrow \infty}{ \lim  ⁡}ℙ\left( X = x \right) & = & \frac{\left(\lambda\right)^{x}}{x !}e^{- \lambda}=ℙ\left( Y = x \right) & text{}
\end{align}
$$

where $YsimPo\left( \lambda right)$.

Sketch proof: Consider

$$
\begin{align}
ℙ\left( X = x \right) & = & \left(\frac{n}{x}\right)p^{x}\left(\left( 1 - p \right)\right)^{n - x} & \text{(4.11)}\text{}\text{} \\ & = & \frac{n \left( n - 1 \right) \dots  \left( n - x + 1 \right)}{x !}\left(\left(\frac{\lambda}{n}\right)\right)^{x}\left(\left(1 - \frac{\lambda}{n}\right)\right)^{n - x} & \text{(4.12)}\text{}\text{} \\ & = & \frac{\left(\lambda\right)^{x}}{x !}\left(\left(1 - \frac{\lambda}{n}\right)\right)^{n}\left\{\frac{n \left( n - 1 \right) \dots  \left( n - x + 1 \right)}{n^{x}}\right\}\left(\left(1 - \frac{\lambda}{n}\right)\right)^{- x} & \text{} \\ & = & \frac{\left(\lambda\right)^{x}}{x !}f\left( n \right)g\left( n \right)h\left( n \right) & text{}
\end{align}
$$

where equation ([4.12](#x26-42008r4.12)) follows from
([4.11](#x26-42008r4.11)) using $p=lambda/n$. Now,

$$
\begin{align}
g\left( n \right)=\frac{n \left( n - 1 \right) \dots  \left( n - x + 1 \right)}{n^{x}} & = & \frac{n}{n}\times\frac{\left( n - 1 \right)}{n}\times\dots \times\frac{\left( n - x + 1 \right)}{n} & \text{} \\ & = & 1\times\left(1 - \frac{1}{n}\right)\times\dots \times\left(1 - \frac{x - 1}{n}\right). & text{}
\end{align}
$$

Since the values of $lambda$ (by assumption) and $x$ are held fixed as
$n\rightarrowinfty$ then

$$
\begin{align}
\underset{n \rightarrow \infty}{ \lim  ⁡}f\left( n \right) & = & \underset{n \rightarrow \infty}{ \lim  ⁡}\left(\left(1 - \frac{\lambda}{n}\right)\right)^{n}=e^{- \lambda};\left(\text{by Euler’s formula:} \underset{n \rightarrow \infty}{ \lim  ⁡} \left(\left(1 + \frac{y}{n}\right)\right)^{n} = e^{y}\right) & \text{} \\ \underset{n \rightarrow \infty}{ \lim  ⁡}g\left( n \right) & = & \underset{n \rightarrow \infty}{ \lim  ⁡}1\times\left(1 - \frac{1}{n}\right)\times\dots \times\left(1 - \frac{x - 1}{n}\right)=1; & \text{} \\ \underset{n \rightarrow \infty}{ \lim  ⁡}h\left( n \right) & = & \underset{n \rightarrow \infty}{ \lim  ⁡}\left(\left(1 - \frac{\lambda}{n}\right)\right)^{- x}=1 & text{}
\end{align}
$$

so that, as the limits exist[5](#fn5x4),

$$
\begin{align}
\underset{n \rightarrow \infty}{ \lim  ⁡}ℙ\left( X = x \right) & = & \frac{\left(\lambda\right)^{x}}{x !}\left(\underset{n \rightarrow \infty}{ \lim  ⁡} f \left( n \right)\right)\left(\underset{n \rightarrow \infty}{ \lim  ⁡} g \left( n \right)\right)\left(\underset{n \rightarrow \infty}{ \lim  ⁡} h \left( n \right)\right) & \text{} \\ & = & \frac{\left(\lambda\right)^{x}}{x !}e^{- \lambda}. & text{}
\end{align}
$$

$square$

Example 44 When working properly, a machine makes components, each
independently having a probability of 0.99 of being up to standard. In a
sample of size 200, would you be concerned about the machine if 4 items
were below standard?

Let $X$ be the number of sub-standard components in a sample of 200.
Then $XsimB\left( 2 0 0 , 0 . 0 1 right)$ as we have 200 independent
Bernoulli trials each with probability $p=0.01$ of being a success. As
$n$ is large, $p$ small we apply the Poisson approximation to the
binomial.

$$
\begin{align}
\lambda=np=200\times 0.01=2. & & & text{}
\end{align}
$$

So, approximately, $XsimPo\left( 2 right)$. We consider what is the
probability of seeing, by chance, an outcome as least as extreme as the
value we observed. We find

$$
\begin{align}
ℙ\left( X \geq 4 \right) & = & 1-ℙ\left( X < 4 \right) & \text{} \\ & = & 1-\sum_{x = 0}^{3}\frac{2^{x}}{x !}e^{- 2}\left( \text{using the Poisson approximation} \right) & \text{} \\ & = & 1-e^{- 2}\left(1 + 2 + \frac{2^{2}}{2} + \frac{2^{3}}{6}\right)=1-\frac{1 9}{3}e^{- 2}=0.1429\left( \text{4dp} \right). & text{}
\end{align}
$$

If the machine was working correctly, 14% of my samples of size 200
would contain 4 or more defective items just by chance. This is not
especially small[6](#fn6x4) and so there's no evidence that the machine
is not working properly.

[5](#fn5x4-bk)Provided that the limits exist, the limit of a product is
the product of the limits.

[6](#fn6x4-bk)This question is calculating what is known as the
$p$-value of a statistical hypothesis. Classically, $p$-values below 5%
are used to suggest evidence against the status quo.

\


