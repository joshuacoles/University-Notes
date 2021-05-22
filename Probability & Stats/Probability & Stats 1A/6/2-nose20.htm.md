\


### 6.1 Defining a probability generating function

The probability generating function (pgf) of a discrete random variable
which takes values in the non-negative integers is a power series
representation of the probability mass function.

Definition 31 (Probability generating function)
Suppose that $X$ is a discrete random variable taking values in the
non-negative integers $ℤ^{+}=\left\{ 0 , 1 , 2 , … ⁡ \right}$. The
probability generating function $G_{X}:\left[ 0 , 1 \right]rightarrowℝ$
of $X$ is

$$
\begin{align}
G_{X}\left( s \right)=𝔼\left( s^{X} \right) & = & \sum_{x = 0}^{\infty}s^{x}ℙ\left( X = x \right) & \text{} \\ & = & ℙ\left( X = 0 \right)+sℙ\left( X = 1 \right)+s^{2}ℙ\left( X = 2 \right)+\dots  & text{}
\end{align}
$$

for $s\in\left[ 0 , 1 right]$.

Example 61 Suppose that $XsimBern\left( p right)$. Find its pgf
$G_{X}\left( s right)$.

Note that as $ℙ\left( X = x right)=0$ for
$x\in\left\{ 2 , 3 , … ⁡ \right}$ then

$$
\begin{align}
G_{X}\left( s \right)=𝔼\left( s^{X} \right) & = & ℙ\left( X = 0 \right)+sℙ\left( X = 1 \right) & \text{} \\ & = & \left( 1 - p \right)+sp. & text{}
\end{align}
$$

Example 62 Suppose that $XsimGeom\left( p right)$, where
$p\in\left( 0 , 1 \right)$. Find its pgf $G_{X}\left( s right)$.

Note that $ℙ\left( X = 0 right)=0$ so that

$$
\begin{align}
G_{X}\left( s \right)=𝔼\left( s^{X} \right) & = & \sum_{x = 1}^{\infty}s^{x}\left(\left( 1 - p \right)\right)^{x - 1}p & \text{} \\ & = & sp\sum_{x = 1}^{\infty}\left(\left\{ s \left( 1 - p \right) \right\}\right)^{x - 1} & \text{} \\ & = & sp\sum_{i = 0}^{\infty}\left(\left\{ s \left( 1 - p \right) \right\}\right)^{i}=\frac{s p}{1 - s \left( 1 - p \right)} & text{}
\end{align}
$$

as for $s\in\left[ 0 , 1 \right]$, $p\in\left( 0 , 1 right)$,
$\left|s\left( 1 - p \right)left|<1$ so that the infinite geometric
series converges.

\

