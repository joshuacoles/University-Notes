### [[Remark 2.31]]

If $\{x_k: k \in \N \}$ is bounded, then we speak of a bounded sequence.

Proof. There exists an $N \in \N$ such that $d(x_m,x_k) < 1$ for $m,k \ge N$. Define

$$ M = \max \{d(x*1,x_N),\ldots ,d(x*{N - 1},x_N),1\}. $$

Then for all $k \in \N$,

$$ d(x_k,x_N) \le M. $$

So for all $m,k \in \N$,

$$ d(x_m,x_k) \le d(x_m,x_N) + d(x_k,x_N) \le 2M. $$

We conclude that $\textrm {diam} \left (\{x_k: k \in \N \}\right ) \leq 2M$.