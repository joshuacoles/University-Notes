### [[Theorem 1.8]]

Let $(f_k)_{k\in \mathbb {N}}$ be a sequence of continuous functions $f_k:[a,b]\to \R$, and assume that $f_k\to f$ uniformly as $k \to \infty$, where $f: [a,b]\to \R$. Then $f$ is continuous on $[a,b]$.

Proof. Let $x_0\in [a,b]$ be an arbitrary point; we claim that $f$ is continuous at $x_0$, namely that for every $\varepsilon >0$ there exists $\delta >0$ such that

$$ \text {for every } x\in [a,b], \, |x-x_0| < \delta \quad \Rightarrow \quad |f(x)-f(x_0)|<\varepsilon . $$

Since, by assumption, $f_k\to f$ uniformly as $k \to \infty$, for the $\varepsilon$ fixed above there exists $N\in \N$ such that for every $k\geq N$,



$$  \sup _{x\in [a,b]} |f_k(x)-f(x)| < \frac {\varepsilon }3. $$

On the other hand, since by assumption $f_N$ is continuous, for the $\varepsilon$ fixed above there exists $\delta >0$ such that



$$  \text {for every } x\in [a,b], \, |x-x_0| < \delta \quad \Rightarrow \quad |f_N(x)-f_N(x_0)|<\frac {\varepsilon }3. $$

By combining (1.1) and (1.2) we then conclude that, whenever $x\in [a,b]$ is such that $|x-x_0| < \delta$ we have



$$ \begin{align*} |f(x)-f(x_0)| \leq |f(x)-f_N(x)| + |f_N(x)-f_N(x_0)| + |f_N(x_0)-f(x_0)| \leq \varepsilon , \end{align*} $$ which proves the claim.