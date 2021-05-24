# Bernoulli distribution

The [[Random Variable]] $X \sim \mathrm{B}(n, p)$ has a pmf,

$$
\P(X = x) = \begin{cases}

\pmat{n \\ x} p^x (1 - p)^{n - x}

&\text{for $x \in J_n$}
\\

0 &\text{otherwise}.

\end{cases}
$$

- $\Expt(X) = np$.
- $\Var(X) = np(1- p)$
- $G_{X}( s )=(\left\{ ( 1 - p ) + s p \right\})^{n}$
