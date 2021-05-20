### [[Theorem 1.4]]

A sequence of functions $(f_k)_{k\in \mathbb {N}}$, $f_k:A\to \R$ converges uniformly on $A$ if and only if for every $\varepsilon >0$ there exists an integer $N$ such that if $j,m\geq N$ and $x\in A$, then

$$ |f_j(x) - f_m(x)| < \varepsilon . $$

Proof. Assume that $f_k$ converges to $f$ uniformly on $A$. Then, by definition, for every $\varepsilon >0$ there exists $N\in \N$ such that for every $k>N$ we have

$$ |f_k(x) - f(x)|<\frac {\varepsilon }{2} \quad \forall \, x\in A. $$

By the triangle inequality, for any $j,m>N$ we then have

$$ |f_j(x) - f_m(x)|\leq |f_j(x) - f(x)| + |f_m(x) - f(x)| <\varepsilon . $$

Now, let us assume the Cauchy condition. Let then $\varepsilon >0$ be fixed: by assumption there exists $N\in \N$ such that for every $j,m>N$ we have $|f_j(x) - f_m(x)| <\varepsilon /2$ for every $x\in A$.

First, note that this implies that for all $x\in A$ the real sequence $(f_k(x))_k$ is a Cauchy sequence in $\R$, so it converges by the completeness of $\R$. We set

$$ f(x):= \lim _{k\to \infty } f_k(x). $$

Clearly $(f_k)_k$ converges pointwise to $f$ (by definition of $f$); hence, for every $x\in A$ we can choose $m>N(\varepsilon ,x)>N$ such that

$$ |f_m(x) - f(x)|<\frac {\varepsilon }{2}. $$

By the choice of $m$ and by the uniform Cauchy assumption we have that, for every $j>N$ and every $x\in A$,

$$ |f_j(x) - f(x)| \leq |f_j(x) - f_m(x)| + |f_m(x) - f(x)| <\varepsilon , $$

implying uniform convergence.

(Note: the fact that $m$ might depend on $x$ is not relevant here: $m$ is chosen as intermediate step of the proof, but the conclusion does not depend on $m$.)

This result can be translated immediately into an analogous result for series: