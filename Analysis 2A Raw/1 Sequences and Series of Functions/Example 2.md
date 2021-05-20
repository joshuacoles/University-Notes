### Example 2

Let $f_k: [0,1] \to \R$ be defined as $f_k(x)=x^k$.

Then clearly the sequence $(f_k)_{k\in \N }$ converges pointwise to the function $f:[0,1] \to \R$ defined as

$$ f(x) = \begin {cases} 0 \quad &\textrm {if } x\neq 1,\\ 1 \quad &\textrm {if } x = 1.\\ \end {cases} $$

The convergence is however not uniform. This is due to the points $x$ close to the endpoint $1$, but $x\neq 1$. Assume for contradiction that $f_k$ converges to $f$ uniformly in $[0,1]$, and let $0<\varepsilon <1$ be fixed and arbitrary. By definition of uniform convergence, there exists $N\in \N$ such that whenever $k\geq N$ we have

$$ \sup _{x\in [0,1]} |f_k(x) - f(x)| <\varepsilon . $$

This means in particular that

$$ x^{N+1} < \varepsilon \quad \forall x\in [0,1); $$

but this means that $x<\varepsilon ^{1/N}$ for every $x\in [0,1)$, which is clearly false since $0<\varepsilon ^{1/N}<1$ is a fixed number, while $x$ can be chosen arbitrarily close to $1$.

The convergence is however uniform in $[0,b]$ for every $0\leq b <1$ (by choosing $N \geq \frac {\log \varepsilon }{\log b}$).

A useful criterion for uniform convergence of sequences of functions (due to Cauchy) is as follows.