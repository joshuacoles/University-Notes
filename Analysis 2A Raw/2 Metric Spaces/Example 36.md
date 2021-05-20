### Example 36

Consider the space $C^0([0,1])$ with the usual metric

$$ d*\infty (f,g):= \|f-g\|*{\infty } = \max _{0 \le t \le 1} |f(t) - g(t)| $$

defined in Example 14. (Recall that this is a normed space, see Example 16.)

A sequence $(f_k)_{k \in \N }$ converges to $f_0$ with respect to the metric $d_\infty$ if, and only if,

$$ \max _{0 \le t \le 1} |f_k(t) - f_0(t)| \to 0 \quad \textrm {as } k\to \infty , $$

namely if

$$ \forall \varepsilon > 0 \quad \exists \,N \in \N \quad \textrm {such that } \, \forall \, k \ge N \quad \textrm {and } \, \forall \, t \in [0,1] : |f_k(t) - f_0(t)| < \varepsilon . $$

But this is exactly the definition of uniform convergence of $f_k$ to $f_0$ in [[Definition 1.1]]! For this reason the metric $d_\infty$ is often referred to as the _uniform convergence metric_, since convergence in $d_\infty$ is equivalent to uniform convergence.