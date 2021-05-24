# Bernoulli distribution

The [[Random Variable]] $X \sim \mathrm{Bern}(p)$ has a pmf,

$$
\P(X = x) = \begin{cases}
p^x (1 - p)^{1 - x}
& \text{for } x \in \set{0, 1}, \\

0 & \text{otherwise}.
\end{cases}
$$

with,

- $X$ has expectation $\Expt( X )=p$
- variance $\Var(X) = p(1 - p)$
- probability generating function $G_X(s) = (1 - p) + sp$.
