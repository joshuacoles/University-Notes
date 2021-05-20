### [[Theorem 2.43]]

Let $(X,d_X)$ and $(Y,d_Y)$ be metric spaces. Let $x_0 \in X$ and let $f : X \to Y$ be a map. The following are equivalent.

- (1) The map $f$ is continuous at $x_0$.
- (2) If $(x_k)_{k \in \N }$ is a sequence in $X$ with $x_k \to x_0$ as $k \to \infty$, then $f(x_k) \to f(x_0)$ as $k \to \infty$.

Proof. $(1) \Rightarrow (2)$: Suppose that $f$ is continuous at $x_0$, and let $\varepsilon > 0$. Then there exists a $\delta > 0$ such that

$$ d_X(x,x_0) < \delta \Rightarrow d_Y(f(x),f(x_0)) < \varepsilon . $$

Now let $(x_k)_{k \in \N }$ be a sequence with $x_k \to x_0$ as $k \to \infty$. There exists an $N \in \N$ such that $d_X(x_k,x_0) < \delta$ whenever $k \ge N$. So for $k \ge N$, we also have $d_Y(f(x_k),f(x_0)) < \varepsilon$. It then follows that $f(x_k) \to f(x_0)$ as $k \to \infty$.

$(2) \Rightarrow (1)$: Now suppose that $f$ is not continuous at $x_0$. That is,

$$ \exists \,\varepsilon > 0 \,\,\textrm {such that } \, \forall \, \delta > 0 \, \exists \, x \in X: d_X(x,x_0) < \delta \wedge d_Y(f(x),f(x_0)) \ge \varepsilon . $$

Choose $\varepsilon > 0$ with this property and consider $\delta = \frac {1}{k}$ for an arbitrary $k \in \N$. We conclude that there exists a point $x_k \in X$ with $d_X(x_k,x_0) < \frac {1}{k}$ and $d_Y(f(x_k),f(x_0)) \ge \varepsilon$. Since we have such a point $x_k$ for every $k \in \N$, we obtain a sequence $(x_k)_{k \in \N }$. This sequence satisfies $x_k \to x_0$, but $f(x_k) \not \to f(x_0)$ as $k \to \infty$.