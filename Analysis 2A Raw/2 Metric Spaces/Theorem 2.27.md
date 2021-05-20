### [[Theorem 2.27]]

Let $(X,d)$ be a metric space, let $x_0\in X$, and let $(x_k)_{k \in \N }$ be a sequence converging to $x_0$.

- (1) If $x_k \to y_0$ in $(X,d)$, then $x_0 = y_0$ (i.e., limits are unique).
- (2) For every subsequence $(x_{k_j})_{j \in \N }$, the convergence $x_{k_j} \to x_0$ holds as well.

Proof. (1) We have, by the triangle inequality,

$$ d(x_0,y_0) \le d(x_0,x_k) + d(y_0,x_k) \to 0 $$

as $k \to \infty$. Hence $d(x_0,y_0) = 0$, which means that $x_0 = y_0$.

(2) Recall: when we say that $(x_{k_j})_{j \in \N }$ is a subsequence of $(x_k)_{k \in \N }$, this means that $(k_j)_{j\in \N }$ is a strictly increasing sequence of natural numbers. Let $\varepsilon > 0$. As $x_k \to x_0$ as $k \to \infty$, there exists an $N \in \N$ such that $d(x_k,x_0) < \varepsilon$ for $k \ge N$. Moreover, there is an $M \in \N$ such that $k_j \ge N$ for $j \ge M$. Therefore we also have $d(x_{k_j},x_0) < \varepsilon$ for $j \ge M$, which proves the convergence $x_{k_j} \to x_0$ as $j \to \infty$.