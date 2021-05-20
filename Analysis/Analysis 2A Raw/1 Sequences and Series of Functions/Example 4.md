### Example 4

Let $f_k:[-1,1]\to \R$, $f_k(x) = \sqrt {\frac {1}{k^2}+x^2}$ for every $k\in \N$.

The functions $f_k$ are differentiable for every $k$. Note that $f_k\to f$ uniformly as $k\to +\infty$, where $f(x)=|x|$; indeed

$$ |x|\leq f_k(x) \leq |x|+\frac 1k \quad \forall \,k, \, \forall \, x\in [-1,1], $$

hence

$$ \sup _{x\in [-1,1]} |f_k(x)-f(x)| \leq \frac 1k, $$

and the convergence is therefore uniform. The limit function $f$ is however not differentiable in $(-1,1)$.