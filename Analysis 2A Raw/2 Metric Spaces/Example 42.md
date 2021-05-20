### Example 42

The space $C^0([0,1])$ with the metric

$$ d*\infty (f,g) = \max *{t \in [0,1]} |f(t) - g(t)| \quad (=\|f-g\|_{\infty }), \quad f,g \in C^0([0,1]), $$

is complete. (It is actually a Banach space, since the metric can be defined by means of a norm.)

Indeed, let $(f_k)_{k \in \N } \subset C^0([0,1])$ be a Cauchy sequence with respect to the metric $d_\infty$. Since $C^0([0,1]) \subset B([0,1])$ (continuous functions on a compact set are bounded), and $(B([0,1]), d_\infty )$ is complete by [[Theorem 2.35]], if follows that $(f_k)_{k \in \N }$ converges in $d_\infty$, with limit $f_0 \in B([0,1])$.

On the other hand, since convergence in $d_\infty$ is the same as uniform convergence, and a uniform limit of continuous functions is continuous (by [[Theorem 1.8]]), $f_0 \in C^0([0,1])$. This proves the claim.