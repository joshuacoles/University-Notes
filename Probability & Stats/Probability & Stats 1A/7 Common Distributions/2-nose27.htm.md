\



### 7.4 Negative Binomial distribution

A random variable $X$ is said to have a Negative Binomial distribution
with parameters $r$ and $p\in( 0 , 1 )$, written
$X\sim NB( r , p )$, if its pmf is given by

$$
\begin{align}
ℙ( X = x ) & = & \left\{\begin{matrix} \begin{matrix}\text{}(\frac{x - 1}{r - 1})\text{}p^{r}(( 1 - p ))^{x - r} & \text{for }x\in\left\{ r , r + 1 , r + 2 , … ⁡ \right\}\text{}, \\ 0 & \text{otherwise.}\end{matrix} \end{matrix}\right. \}& text{}
\end{align}
$$

$X$ has expectation $𝔼( X )=frac{r}{p}$, variance
$Var( X )=\frac{r ( 1 - p )}{p^{2}}$ , and
probability generating function
$G_{X}( s )=((\frac{s p}{1 - s ( 1 - p )}))^{r}$.

\


