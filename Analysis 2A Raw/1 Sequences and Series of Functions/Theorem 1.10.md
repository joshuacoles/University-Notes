### [[Theorem 1.10]]

Let $(f_k)_{k\in \mathbb {N}}$ be a sequence of Riemann integrable functions on $[a,b]$ converging uniformly to a function $f : [a,b] \to \R$. Then $f$ is Riemann integrable and

$$ \int _a^b f_k(x)dx \to \int _a^b f(x)dx $$

as $k \to \infty$.

Proof. Let $\varepsilon > 0$ and fix a number $N \in \mathbb {N}$ such that for all $k \geq N$ and all $x \in [a, b]$, we have $|f_k (x) - f (x)| < \varepsilon$. By the definition of Riemann integrability, we find a subdivision $\Delta$ of $[a,b]$ such that $U(f_N,\Delta ) - L(f_N,\Delta ) < \varepsilon$. Let $I_1,...,I_M$ be the intervals of $\Delta$. Then for every $n = 1,...,M$, we have



$$ \begin{align*} \omega (f, I*n) &= \sup *{I*n} f - \inf *{I*n} f\\ &\leq \sup *{I*n} f_N + \varepsilon - \inf *{I_n} f_N + \varepsilon \\ &= \omega (f_N , I_n) + 2\varepsilon . \end{align*} $$ It follows that



$$ \begin{align*} U(f,\Delta ) - L(f,\Delta ) &= \sum *{n=1}^M \omega (f, I_n) |I_n| \leq \sum *{n=1}^M \omega (f*N, I_n) |I_n| + 2\varepsilon \sum *{n=1}^M |I_n| \\ & = U(f_N,\Delta ) - L(f_N,\Delta ) + 2\varepsilon (b-a) < \varepsilon (1+ 2b - 2a). \end{align*} $$ The right-hand side can be made arbitrarily small. Thus $f$ is Riemann integrable. Moreover, by the linearity and by the monotonicity of the integral we have



$$ \begin{align*} \left |\int *a^b f_k(x)dx - \int _a^b f(x)dx\right | &= \left |\int _a^b \Big (f_k(x) - f(x)\Big )dx \right |\\ &\leq \int _a^b \Big |f_k(x) - f(x)\Big |dx\\ &\leq (b-a) \sup *{x\in [a,b]} \Big |f_k(x) - f(x)\Big | \to 0\\ \end{align*} $$ as $k\to \infty$. Therefore, we have the desired convergence.