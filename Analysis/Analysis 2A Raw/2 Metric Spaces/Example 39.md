### Example 39

The Euclidean spaces $(\R ^n, d_2)$ are complete (here $d_2 = \|\cdot \|_2$ is the Euclidean distance - and norm - defined in Example 10).

Indeed, let $(x_k)_{k \in \N } \subset \R ^n$ be a Cauchy sequence, with $x_k=(x_k^{(1)},\dots ,x_k^{(n)})$; namely, for every $\varepsilon >0$ there exists $N\in \N$ such that whenever $m,k\geq N$, we have that $\|x_k -x_m\|_2<\varepsilon$.

Since $\|x_k -x_m\|_\infty \leq \|x_k -x_m\|_2$ (see, e.g. Problem Sheet 5, Homework question 2(i)), it follows that

$$ \|x*k -x_m\|*\infty = \max _{i=1,\dots ,n} |x_k^{(i)}-x_m^{(i)}| < \varepsilon . $$

This implies in particular that for every fixed $i$ the sequence $(x_k^{(i)})$ of the $i$-th components is a Cauchy sequence in $\R$, hence convergent. Let $x_0^{(i)}:= \lim _k x_k^{(i)}$, and let $x_0:=(x_0^{(1)},\dots ,x_0^{(n)})\in \R ^n$. Since

$$ \|x*k - x_0\|_2 \leq \sqrt n \|x_k -x_0\|*\infty = \sqrt n \max _{i=1,\dots ,n} |x_k^{(i)}-x_0^{(i)}|, $$

we have that $\|x_k - x_0\|_2 \to 0$ as $k\to \infty$, and so the sequence $(x_k)_{k \in \N }$ converges to $x_0$ in $d_2$.