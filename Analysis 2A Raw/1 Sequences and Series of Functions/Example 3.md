### Example 3

We use the Cauchy criterion to show that the geometric series $\sum _{k=0}^\infty x^k$ does not converge uniformly in $(-1,1)$. Assume that it does converge uniformly in $(-1,1)$; then for every $\varepsilon >0$ there exists $N\in \N$ such that $\forall \, j>m> N$:

$$ \left | \sup _{x\in (-1,1)} \sum _{k=m+1}^j x^k \right | <\varepsilon . $$

This implies in particular that



$$ \begin{align*} \varepsilon > \sup *{x\in (0,1)} \sum *{k=m+1}^j x^k > \sup *{x\in (0,1)} \sum *{k=m+1}^j x^j = \sup *{x\in (0,1)} (j-m) x^j \geq \sup *{x\in (0,1)}x^j, \end{align*} $$ since for $x\in (0,1)$ we have that $x^k \geq x^j$ for every $k\leq j$. Hence we have that

$$ x^{N+1} < \varepsilon \quad \forall \, x\in (0,1) $$

which is false, since $\varepsilon ^{1/(N+1)}\in (0,1)$ is a fixed number, while $x$ can get arbitrarily close to $1$.

The convergence of the series is however uniform on $[-\rho ,\rho ]$ for every $0\leq \rho <1$.

For series there is a useful test for uniform convergence, due to Weierstrass. (The name comes from the letter traditionally used to denote the constants, or ‘majorants’, that bound the terms in the series.)