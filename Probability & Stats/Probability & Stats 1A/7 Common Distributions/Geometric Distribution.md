# Geometric Distribution

A random variable $X$ is said to have a Geometric distribution with parameter $p \in (0, 1)$, written
$X \sim \mathrm{Geom}(p)$, if its pmf is given by

$$
ℙ( X = x ) = \begin{cases}
( 1 - p )^{x - 1} p
&\text{for $x \in \N$}⁡
\\
0 & \text{otherwise.}
\end{cases}
$$

with

- $\Expt(X) = \frac{1}{p}$
- $\Var(X) = \frac{1 - p}{p^{2}}$
- $G_{X}( s )=\frac{s p}{1 - s ( 1 - p )}$
