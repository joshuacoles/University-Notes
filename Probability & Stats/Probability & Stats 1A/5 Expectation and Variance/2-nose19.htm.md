\


### 5.3 Markov's inequality and Chebyshev's inequality

We consider two inequalities which help us to interpret how
$𝔼\left( X right)$ relates to $X$. In deriving these results we utilise
indicator functions.

Definition 30 (Indicator function)
If $E$ is an event then the indicator of $E$ is the random variable

$$
\begin{align}
\left(𝕀\right)_{E}=\left(𝕀\right)_{E}\left( \omega \right) & = & \left\{\begin{matrix} \begin{matrix}1 & \text{if }\omega\in E\text{,} \\ 0 & \text{if }\omega\notinE\text{.}\end{matrix} \end{matrix}\right. \}& text{}
\end{align}
$$

Thus, $\left(𝕀right)_{E}$ indicates whether or not the event $E$
occurs: if $\left(𝕀right)_{E}=1$ then $E$ occurs whilst if
$\left(𝕀right)_{E}=0$ then $E$ doesn't occur.

Notes:

1.  

The key property which we will use is that
$𝔼\left( \left(𝕀\right)_{E} \right)=ℙ\left( E right)$. This follows in
a similar fashion to a Bernoulli random variable:

$$
\begin{align}
𝔼\left( \left(𝕀\right)_{E} \right) & = & 0ℙ\left( \left(𝕀\right)_{E} = 0 \right)+1ℙ\left( \left(𝕀\right)_{E} = 1 \right)=ℙ\left( \left(𝕀\right)_{E} = 1 \right)=ℙ\left( E \right). & text{}
\end{align}
$$

Similarly, as

$$
\begin{align}
𝔼\left( 𝕀_{E}^{2} \right) & = & 0^{2}ℙ\left( \left(𝕀\right)_{E} = 0 \right)+1^{2}ℙ\left( \left(𝕀\right)_{E} = 1 \right)=ℙ\left( \left(𝕀\right)_{E} = 1 \right)=ℙ\left( E \right) & text{}
\end{align}
$$

we deduce that

$$
\begin{align}
Var\left( \left(𝕀\right)_{E} \right) & = & ℙ\left( E \right)\left( 1 - ℙ \left( E \right) \right). & text{}
\end{align}
$$

2.  

If $E$ doesn't occur then $E^{c}$ occurs and vice versa so that
$\left(𝕀\right)_{E^{c}}=1-\left(𝕀right)_{E}$.

3.  

For events $E$ and $F$ then
$\left(𝕀\right)_{E \cap F}=\left(𝕀\right)_{E}\left(𝕀right)_{F}$.

Theorem 27 (Markov's[5](#fn5x5) inequality)
If $X$ is a non-negative random variable then, for any $a>0$,

$$
\begin{align}
ℙ\left( X \geq a \right) & \leq & \frac{𝔼 \left( X \right)}{a}. & text{}
\end{align}
$$

Proof: Note that
$\left(𝕀\right)_{\left\{ X \geq a \right\}}+\left(𝕀\right)_{\left\{ X < a \right}}=1$
so that

$$
\begin{align}
𝔼\left( X \right) & = & 𝔼\left( X \left( \left(𝕀\right)_{\left\{ X \geq a \right\}} + \left(𝕀\right)_{\left\{ X < a \right\}} \right) \right) & \text{} \\ & = & 𝔼\left( X \left(𝕀\right)_{\left\{ X \geq a \right\}} \right)+𝔼\left( X \left(𝕀\right)_{\left\{ X < a \right\}} \right) & \text{} \\ & \geq & 𝔼\left( X \left(𝕀\right)_{\left\{ X \geq a \right\}} \right). & text{}
\end{align}
$$

Now, as $Xgeq 0$,
$X\left(𝕀\right)_{\left\{ X \geq a \right\}}\geq a\left(𝕀\right)_{\left\{ X \geq a \right}}$
so that, by Theorem [16](nose17.htm#x29-5000116),
$𝔼\left( X \left( \left(𝕀\right)_{\left\{ X \geq a \right\}} \right) \right)\geq𝔼\left( a \left(𝕀\right)_{\left\{ X \geq a \right\}} right)$.
Thus,

$$
\begin{align}
𝔼\left( X \right) & \geq & a𝔼\left( \left(𝕀\right)_{\left\{ X \geq a \right\}} \right) & \text{} \\ & = & aℙ\left( X \geq a \right) & text{}
\end{align}
$$

and so the result follows by rearrangement. $square$

The theorem states that the probability that $X$ is much bigger that
$𝔼\left( X right)$ is small.

Example 58 If $a=t𝔼\left( X right)$ for some $t>0$ then

$$
\begin{align}
ℙ\left( X \geq t 𝔼 \left( X \right) \right)\leq\frac{𝔼 \left( X \right)}{t 𝔼 \left( X \right)}=\frac{1}{t}. & & & text{}
\end{align}
$$

Corollary 17 (Chebyshev's[6](#fn6x5) inequality)
Let $X$ be a random variable with expectation $\mu=𝔼\left( X right)$
and variance $Var\left( X right)$. Then, for any $t>0$,

$$
\begin{align}
ℙ\left( \left| X - \mu \left| \geq t \right) & \leq & \frac{V a r \left( X \right)}{t^{2}}. & text{}
\end{align}
$$

Proof:

$$
\begin{align}
ℙ\left( \left| X - \mu \left| \geq t \right) & = & ℙ\left( \left(\left( X - \mu \right)\right)^{2} \geq t^{2} \right) & \text{} \\ & \leq & \frac{E \left( \left(\left( X - \mu \right)\right)^{2} \right)}{t^{2}}=\frac{V a r \left( X \right)}{t^{2}} & text{}
\end{align}
$$

by Markov's inequality, Theorem [27](#x31-5600927). $square$

Chebyshev's inequality says that if $Var\left( X right)$ is small then
the probability that $X$ will deviate from its expectation is also
small.

Example 59 If $t=r\sqrt{V a r \left( X right)}$ then

$$
\begin{align}
ℙ\left( \left| X - \mu \left| \geq r V a r \left( X \right) \right)\leq\frac{V a r \left( X \right)}{r^{2} V a r \left( X \right)}=\frac{1}{r^{2}}. & & & text{}
\end{align}
$$

That is, the probability that $X$ is more than
$r\sqrt{V a r \left( X \right)}$ away from $𝔼\left( X right)$ is less
than or equal to $1/r^{2}$ irrespective of the distribution of $X$.

Notice that as both Markov's inequality and Chebyshev's inequality do
not take into account the actual distribution of $X$ the bounds are
typically loose.

Example 60 Suppose that $X_{1},…⁡,X_{n}$ are independent random
variables with $X_{i}simPo\left( 1 right)$ for each $i=1,…⁡,n$ and let
$\bar{X}=\frac{1}{n}\left(\sum ⁡right)_{i = 1}^{n}X_{i}$. Use
Chebyshev's inequaility to find a sufficiently large value of $n$ for
which

$$
\begin{align}
ℙ\left( \left| \bar{X} - 1 \left| \geq 0 . 0 5 \right) & \leq & 0.02. & text{}
\end{align}
$$

Recall, see Question Sheet Nine and Ten, that if
$XsimPo\left( \lambda \right)$ then $𝔼\left( X \right)=lambda$ and
$Var\left( X \right)=\lambda$. Thus, $𝔼\left( X_{i} right)=1$ and
$Var\left( X_{i} right)=1$.Using the linearity of expectation,

$$
\begin{align}
𝔼\left( \bar{X} \right)=\frac{1}{n}\sum_{i = 1}^{n}𝔼\left( X_{i} \right)=1 & & & text{}
\end{align}
$$

whilst, from Corollary [16](nose18.htm#x30-5400816) (Bienaymé's
formula),

$$
\begin{align}
Var\left( \bar{X} \right)=\frac{1}{n^{2}}\sum_{i = 1}^{n}Var\left( X_{i} \right)=\frac{1}{n}. & & & text{}
\end{align}
$$

Applyling Chebyshev's formula to $\bar{X}$ with $mu=1$ and $t=0.05$
gives

$$
\begin{align}
ℙ\left( \left| \bar{X} - 1 \left| \geq 0 . 0 5 \right) & \leq & \frac{1}{\left(\left( 0 . 0 5 \right)\right)^{2} n}=\frac{4 0 0}{n}. & text{}
\end{align}
$$

If we require
$ℙ\left( \left| \bar{X} - 1 \left| \geq 0 . 0 5 \right)leq 0.02$ then
it is sufficient that

$$
\begin{align}
\frac{4 0 0}{n}\leq 0.02 & \Leftrightarrow & n\geq 20000. & text{}
\end{align}
$$

Thus, $n=20000$ is sufficiently large to achieve this bound using
Chebyshev's inequality.

[5](#fn5x5-bk)[Andrey Markov
(1856-1922)](https://en.wikipedia.org/wiki/Andrey_Markov).

[6](#fn6x5-bk)[Pafnuty Chebyshev
(1821-1894)](https://en.wikipedia.org/wiki/Pafnuty_Chebyshev).

\
\
