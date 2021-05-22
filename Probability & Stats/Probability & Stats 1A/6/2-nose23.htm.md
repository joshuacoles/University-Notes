\


### 6.4 Finding the distribution of sums of independent random variables

Much of probability and statistics is concerned with sums of independent
random variables. Probability generating functions provide a powerful
tool for finding the probability distribution of such sums.

Theorem 30 (Pgf of a sum of independent random variables)
If $X$ and $Y$ are independent random variables with pgfs $G_{X}$ and
$G_{Y}$ respectively then the pgf, $G_{X + Y}$ , of $X+Y$ is

$$
\begin{align}
G_{X + Y}\left( s \right)=G_{X}\left( s \right)G_{Y}\left( s \right). & & & text{}
\end{align}
$$

Proof: From Corollary [12](nose17.htm#x29-5100112), if $X$ and $Y$ are
independent then
$𝔼\left( s^{X + Y} \right)=𝔼\left( s^{X} \right)𝔼\left( s^{Y} right)$
so that

$$
\begin{align}
G_{X + Y}\left( s \right)=𝔼\left( s^{X + Y} \right)=𝔼\left( s^{X} \right)𝔼\left( s^{Y} \right)=G_{X}\left( s \right)G_{Y}\left( s \right). & & & text{}
\end{align}
$$

$square$

Notice that this result can be extended to $n$ independent random
variables $X_{1},…⁡,X_{n}$, with individual pgfs
$G_{X_{i}}\left( s right)$, so that if
$Y=\left(\sum ⁡right)_{i = 1}^{n}X_{i}$ then

$$
\begin{align}
G_{Y}\left( s \right) & = & \prod_{i = 1}^{n}G_{X_{i}}\left( s \right). & \text{(6.2)}\text{}text{}
\end{align}
$$

Example 66 Suppose that $XsimPo\left( \lambda right)$ and
$YsimPo\left( \mu right)$ are independent. Find the distribution of
$X+Y$ .

If $XsimPo\left( \lambda right)$ then

$$
\begin{align}
G_{X}\left( s \right) & = & \sum_{x = 0}^{\infty}s^{x}\frac{\left(\lambda\right)^{x}}{x !}e^{- \lambda} & \text{} \\ & = & e^{- \lambda}e^{s \lambda}\sum_{x = 0}^{\infty}\frac{\left(\left( s \lambda \right)\right)^{x}}{x !}e^{- s \lambda}=e^{\lambda \left( s - 1 \right)} & text{}
\end{align}
$$

as the sum is the sum of $Po\left( s \lambda right)$ probabilities. By
the uniqueness of pgfs,
$G_{Y}\left( s \right)=e^{\mu \left( s - 1 right)}$ so that

$$
\begin{align}
G_{X + Y}\left( s \right) & = & G_{X}\left( s \right)G_{Y}\left( s \right) & \text{} \\ & = & e^{\lambda \left( s - 1 \right)}e^{\mu \left( s - 1 \right)}=e^{\left( \lambda + \mu \right) \left( s - 1 \right)}. & text{}
\end{align}
$$

Thus, by the uniqueness of pgfs, $X+YsimPo\left( \lambda + \mu right)$.

Example 67 Suppose that $XsimB\left( n , p right)$. Use the uniqueness
property of pgfs to find the pgf of $X$.

Note that $X$ is the sum of $n$ independent Bernoulli trials, each with
probability of success $p$. That is
$X=\left(\sum ⁡right)_{i = 1}^{n}X_{i}$ where each
$X_{i}simBern\left( p right)$ and $X_{1},…⁡,X_{n}$ are independent.
From Example [61](nose20.htm#x33-5800361) we have that

$$
\begin{align}
G_{X_{i}}\left( s \right) & = & \left( 1 - p \right)+sp. & text{}
\end{align}
$$

Using equation ([6.2](#x36-61004r6.2)),

$$
\begin{align}
G_{X}\left( s \right) & = & \prod_{i = 1}^{n}G_{X_{i}}\left( s \right) & \text{} \\ & = & \prod_{i = 1}^{n}\left\{ \left( 1 - p \right) + s p \right\}=\left(\left\{ \left( 1 - p \right) + s p \right\}\right)^{n}. & text{}
\end{align}
$$

We know, by construction, that $XsimB\left( n , p right)$ and so, by
the uniqueness of pgfs, the pgf of $XsimB\left( n , p right)$ is
$G_{X}\left( s \right)=\left(\left\{ \left( 1 - p \right) + s p \right\}right)^{n}$.

Notice that for $n=2$ and $p=1/2$ we find
$G_{X}\left( s \right)=\frac{\left(\left( 1 + s \right)right)^{2}}{4}$
which matches with our observation in Example
[65](nose22.htm#x35-6000965).

\
\
