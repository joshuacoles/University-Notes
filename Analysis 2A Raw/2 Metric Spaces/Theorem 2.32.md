### [[Theorem 2.32]]

Any convergent sequence is a Cauchy sequence.

Proof. Let $(x_k)_{k \in \N }$ be a convergent sequence in the metric space $(X,d)$. Denote its limit by $x_0$. Fix $\varepsilon > 0$. Then there exists an $N \in \N$ such that $d(x_k,x_0) < \frac {\varepsilon }{2}$ for $k \ge N$. For $m,k \ge N$, we then also have

$$ d(x_m,x_k) \le d(x_m,x_0) + d(x_k,x_0) < \varepsilon , $$

as required.