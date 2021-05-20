### Example 41

Consider an arbitrary set $X \not = \emptyset$ with the discrete metric

$$ d(x,y) = \begin {cases} 0 & \text {if $x = y$}, \\ 1 & \text {if $x \not = y$}. \end {cases} $$

We have seen: a sequence $(x_k)_{k \in \N }$ is convergent in $(X,d)$ with limit $x_0$ if there exists an $N \in \N$ such that $x_k = x_0$ for all $k \ge N$. What does it mean for a sequence to be a Cauchy sequence in $(X,d)$?

For any $\varepsilon > 0$, we need to have an $N \in \N$ such that $d(x_m,x_k) < \varepsilon$ for $m,k \ge N$. If $\varepsilon \le 1$, then this means $x_m = x_k$ for $m,k \ge N$. Therefore a Cauchy sequence is convergent. Thus a metric space with the discrete metric is always complete.