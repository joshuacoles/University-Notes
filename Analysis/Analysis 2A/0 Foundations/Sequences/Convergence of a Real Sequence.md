# Convergence of a Real Sequence

Let $\seq{a_k}k$ be a [[Real Sequence]], we say that $(a_k)$ converges to a limit $L\in \R$ iff,

$$
\Forall \epsi > 0 \; \Exists N \in \N \st n > N \implies |a_n - L| < \epsi
$$
^seq-convergence

equivalently this means that 

$$
L - \epsi < a_n < L + \epsi \quad \Forall n \ge N.
$$

This is notated as,

$$
\lim_{k \to \infty} a_k = L
$$

## Existence-Qualifier Free Definition

If we wish to make the problem more explicit we can re-frame the question as finding a relation $N(\epsi) : \R^+ \to \N$ such that

$$
\Forall \epsi > 0 : n > N(\epsi) \implies |a_n -L| < \epsi
$$
^seq-convergence-bf

where $N$ is known as the Bounding Function. This has the property that $a \le b \implies N(a) \ge N(b)$.




Let $(\alpha _k)_{k\in \N }$ be real sequence, namely $\alpha _k\in \R$ for every $k\in \N$. We say that $(\alpha _k)_{k\in \N }$ converges to a limit $L\in \R$, namely $L=\lim _{k\to \infty } \alpha _k$ if, by definition, for every $\varepsilon >0$ there exists $N\in \N$ such that

$$ |\alpha _k - L|< \varepsilon \quad \forall \, k\geq N. $$

Equivalently, this means that



$$  L-\varepsilon < \alpha _k < L+\varepsilon \quad \forall \, k\geq N. $$

We say that $(\alpha _k)_{k\in \N }$ diverges to $+\infty$ (or that it diverges positively) if for every $M\in \R$ there exists $N\in \N$ such that

$$ \alpha _k > M \quad \forall \, k\geq N. $$

Similarly, we say that $(\alpha _k)_{k\in \N }$ diverges to $-\infty$ (or that it diverges negatively) if for every $M\in \R$ there exists $N\in \N$ such that

$$ \alpha _k < M \quad \forall \, k\geq N. $$