### [[Theorem 2.35]]

Let $S\neq \emptyset$ and $B(S)$ the set of bounded functions $f : S \to \R$. For $f,g \in B(S)$, let

$$ d*\infty (f,g) =\|f-g\|*\infty = \sup _{s \in S} |f(s) - g(s)|. $$

Then $(B(S),d_\infty )$ is a complete metric space.

Proof. It is easy to check that $d_\infty$ is a metric on $B(S)$.

To verify that the space is complete, consider a Cauchy sequence $(f_k)_{k \in \N }$ in $(B(S), d_\infty )$: namely, for any given $\varepsilon > 0$, there exists an $N \in \N$ such that $d_\infty (f_m,f_k) < \varepsilon$ whenever $m,k \ge N$. By definition of $d_\infty$ this implies that for every $s\in S$

$$ |f*m(s) - f_k(s)| \le d*\infty (f_m,f_k) < \varepsilon . $$

Hence $(f_k(s))_{k \in \N }$ is a Cauchy sequence in $\R$. Since $\R$ is complete, there exists a limit. Call the limit $f_0(s)$. Thus for every $s \in S$ we obtain a number $f_0(s)$, and this gives rise to a function $f_0 : S \to \R$. This is the candidate limit of $(f_k)_k$.

We claim that $f_0$ is bounded, namely $f_0\in B(S)$.

As $(f_k)_{k \in \N }$ is a Cauchy sequence, there exists $N\in \N$ such that $d_\infty (f_m,f_k) < 1$ for $m,k \geq N$. Moreover, the function $f_N$ is bounded. So there exists an $M \geq 0$ such that

$$ \sup _{s\in S} |f_N(s)| \le M. $$

Then for all $k \geq N$ and all $s \in S$, we have

$$ |f_k(s)| = |f_k(s) - f_N(s) + f_N(s)| \leq |f_k(s) - f_N(s)| + |f_N(s)| < M + 1. $$

Therefore,

$$ |f*0(s)| = \lim *{k \to \infty } |f_k(s)| \le M + 1. $$

This proves that $f_0$ is bounded, i.e., $f_0 \in B(S)$.

Finally, we want to show that $d_\infty (f_k,f_0) = \|f_k-f_0\|_{\infty } \to 0$ as $k \to \infty$. To this end, fix $\varepsilon > 0$. Choose $N \in \N$ such that $d_\infty (f_m,f_k) < \frac {\varepsilon }{2}$ when $m,k \geq N$. Then for any $s \in S$,

$$ |f*k(s) - f_0(s)| = \left |f_k(s) - \lim *{m \to \infty } f*m(s)\right | = \lim *{m \to \infty } |f_k(s) - f_m(s)| \le \frac {\varepsilon }{2} $$

whenever $k \geq N$. This yields

$$ d*\infty (f_k,f_0) = \sup *{s \in S} |f_k(s) - f_0(s)| \le \frac {\varepsilon }{2} < \varepsilon $$

for all $k \geq N$, and hence the desired convergence