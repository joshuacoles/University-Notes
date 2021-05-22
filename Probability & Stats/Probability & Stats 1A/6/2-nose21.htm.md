\



### 6.2 Properties of probability generating functions

The $k$th moment of a random variable $X$ is $𝔼\left( X^{k} right)$.
Typically we are interested in the first two moments,
$𝔼\left( X \right)$ and $𝔼\left( X^{2} right)$ as from these we can
deduce the expectation and variance of $X$. We can exploit the structure
of $G_{X}$ to find these.

Theorem 28 (Generating the $k$th factorial moment)
Let $X$ be a random variable with probability generating function
$G_{X}\left( s right)$. Then

(a) 

$G_{X}\left( 1 right)=1$.

(b) 

The $k$th factorial moment
$𝔼\left( X \left( X - 1 \right) \dots \left( X - k + 1 \right) right)$
is given by

$$
\begin{align}
𝔼\left( X \left( X - 1 \right) \dots  \left( X - k + 1 \right) \right)=G_{X}^{\left( k \right)}\left( 1 \right)=\left(\left(\frac{d^{k}}{d s^{k}} G_{X} \left( s \right)\right|\right)_{s = 1}. & & & text{}
\end{align}
$$

Proof:

(a) 

$$
\begin{align}
G_{X}\left( 1 \right)=\sum_{x = 0}^{\infty}1^{x}ℙ\left( X = x \right)=\sum_{x = 0}^{\infty}ℙ\left( X = x \right)=1. & & & text{}
\end{align}
$$

(b) 

It can be shown that if $s\in\left[ 0 , 1 right]$ we can exchange the
differential and the summation so that

$$
\begin{align}
\frac{d^{k}}{d s^{k}}G_{X}\left( s \right) & = & \sum_{x = 0}^{\infty}\left(\frac{d^{k}}{d s^{k}} s^{x}\right)ℙ\left( X = x \right) & \text{} \\ & = & \sum_{x = k}^{\infty}x\left( x - 1 \right)\dots \left( x - k + 1 \right)s^{x - k}ℙ\left( X = x \right). & \text{(6.1)}\text{}text{}
\end{align}
$$

Evaluating at $s=1$ gives

$$
\begin{align}
G_{X}^{\left( k \right)}\left( 1 \right) & = & \sum_{x = k}^{\infty}x\left( x - 1 \right)\dots \left( x - k + 1 \right)ℙ\left( X = x \right) & \text{} \\ & = & \sum_{x = 0}^{\infty}x\left( x - 1 \right)\dots \left( x - k + 1 \right)ℙ\left( X = x \right)=𝔼\left( X \left( X - 1 \right) \dots  \left( X - k + 1 \right) \right) & text{}
\end{align}
$$

since the first $k$ terms are zero.

$square$

To generate $𝔼\left( X \right)$ and $𝔼\left( X^{2} right)$ we use the
cases $k=1$ and $k=2$ of Theorem [28](#x34-5900128)(b) since

$$
\begin{align}
𝔼\left( X \right) & = & \left(\left(\frac{d}{d s} G_{X} \left( s \right)\right|\right)_{s = 1} & \text{} \\ 𝔼\left( X \left( X - 1 \right) \right) & = & \left(\left(\frac{d^{2}}{d s^{2}} G_{X} \left( s \right)\right|\right)_{s = 1} & text{}
\end{align}
$$

so that
$𝔼\left( X^{2} \right)=𝔼\left( X \left( X - 1 \right) \right)+𝔼\left( X right)$.

Example 63 Suppose that $XsimGeom\left( p right)$. Use
$G_{X}\left( s \right)$ to find $𝔼\left( X right)$ and
$Var\left( X right)$.

From Example [62](nose20.htm#x33-5800562),
$G_{X}\left( s \right)=\frac{s p}{1 - s \left( 1 - p right)}$ so that

$$
\begin{align}
\frac{d}{d s}G_{X}\left( s \right) & = & \frac{p \left( 1 - s \left( 1 - p \right) \right) + p s \left( 1 - p \right)}{\left(\left( 1 - s \left( 1 - p \right) \right)\right)^{2}}=\frac{p}{\left(\left( 1 - s \left( 1 - p \right) \right)\right)^{2}}, & \text{} \\ \frac{d^{2}}{d s^{2}}G_{X}\left( s \right) & = & \frac{2 p \left( 1 - p \right)}{\left(\left( 1 - s \left( 1 - p \right) \right)\right)^{3}}. & text{}
\end{align}
$$

Hence,

$$
\begin{align}
𝔼\left( X \right) & = & \left(\left(\frac{d}{d s} G_{X} \left( s \right)\right|\right)_{s = 1}=\frac{p}{\left(\left( 1 - \left( 1 - p \right) \right)\right)^{2}}=\frac{1}{p}, & \text{} \\ 𝔼\left( X \left( X - 1 \right) \right) & = & \left(\left(\frac{d^{2}}{d s^{2}} G_{X} \left( s \right)\right|\right)_{s = 1}=\frac{2 p \left( 1 - p \right)}{\left(\left( 1 - \left( 1 - p \right) \right)\right)^{3}}=\frac{2 \left( 1 - p \right)}{p^{2}}. & text{}
\end{align}
$$

Thus,

$$
\begin{align}
𝔼\left( X^{2} \right) & = & \frac{2 \left( 1 - p \right)}{p^{2}}+\frac{1}{p}=\frac{2 - p}{p^{2}} & text{}
\end{align}
$$

so that

$$
\begin{align}
Var\left( X \right) & = & \frac{2 - p}{p^{2}}-\left(\left(\frac{1}{p}\right)\right)^{2}=\frac{1 - p}{p^{2}}. & text{}
\end{align}
$$

Notice that these answers agree with those obtained directly: see
Examples [49](nose17.htm#x29-4900949) and [53](nose18.htm#x30-5201153).

\


