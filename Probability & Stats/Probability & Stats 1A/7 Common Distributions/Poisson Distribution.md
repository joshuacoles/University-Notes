# Poisson Distribution

The [[Random Variable]] $X \sim \mathrm{Po}(\lambda)$ has a pmf,

$$
\P(X = x) = \begin{cases}
	\frac{\lambda^x}{x!} e^{-\lambda}
	&\text{for $x \in \N$}
\\

0 &\text{otherwise}.
\end{cases}
$$

with

- $\Expt(X) = \lambda$.
- $\Var(X) = \lambda$
- $G_{X}( s )=e^{\lambda ( s - 1 )}$
