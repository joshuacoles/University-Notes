# Negative Binomial Distribution

A [[Random Variable]] $X$ is said to have a Negative Binomial distribution with parameters $r$ and $p\in( 0 , 1 )$, written $X\sim \mathrm{NB}(r ,p)$, if its pmf is given by

$$
\P( X = x ) =\begin{cases}
(\frac{x - 1}{r - 1}) p^{r} ( 1 - p )^{x - r}
&\text{for $x \in \set{r, r + 1, \dots}$}
\\
0 & \text{otherwise.}
\end{cases}
$$

with

- $\Expt(X)=\frac{r}{p}$
- $\Var(X) = \frac{r ( 1 - p )}{p^{2}}$
- $G_{X}( s )=\(\frac{s p}{1 - s ( 1 - p )}\)^r$
