### [[Proposition 1.32]]

Assume that the power series

$$ \sum _{k=0}^\infty a_k (x - x_0)^k \quad \textrm { and } \sum _{k=0}^\infty b_k (x - x_0)^k $$

have nonzero (possibly different) radii of convergence and assume that the series are equal on some neighbourhood of $x_0$. Then $a_k=b_k$ for every $k\in \N$.

Proof. Let $(x_0-\delta , x_0 +\delta )$ be the neighbourhood of $x_0$ (open interval containing $x_0$) where the two series are equal. Note that $(x_0-\delta , x_0+\delta )$ is contained in the (possibly different) intervals of convergence of the two series. We can then define $g: (x_0-\delta , x_0+\delta ) \to \R$ as

$$ g(x):= \sum _{k=0}^\infty a_k (x - x_0)^k = \sum _{k=0}^\infty b_k (x - x_0)^k, \quad x\in (x_0-\delta , x_0+\delta ). $$

By [[Theorem 1.30]] applied to $g$ we have that $g$ is infinitely many times differentiable in $(x_0-\delta , x_0+\delta )$ and

$$ a_k = \frac {g^{(k)}(x_0)}{k!} = b_k, $$

hence $a_k = b_k$ for every $k\in \N$.

Power series can be also integrated term by term, as a direct consequence of [[Corollary 1.12]]: