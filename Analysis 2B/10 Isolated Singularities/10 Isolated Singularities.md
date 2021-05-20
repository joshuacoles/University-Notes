# 10 Isolated Singularities

In this chapter, we want to understand functions that are not necessarily differentiable (or even defined) at every point in the set of interest. Typical examples include the functions given by

$$
f(z) = \frac{1}{(z - z_0)^k},
$$

for fixed $z_0 \in \C$ and $k \in \mathbb{N}$ (or more generally, rational functions, given by the quotients of two polynomials) or

$$
\begin{equation*} f(z) = e^{1/z}. \end{equation*}
$$

The points where a function fails to be analytic are called _singularities_.

![[10§1 Laurent Series]]

## Classification of isolated singularities

Suppose that we have a holomorphic function $f : U \to \C$ for an open set $U \sub \C$ with a puncture at $z_0 \in \C$. That is, we assume that $z_0 \not\in U$, but there exists $r > 0$ such that $B_r(z_0) \setminus \{z_0\} \sub U$.

Then Theorem [10.1](laurent-series.html#thm:Laurent) can be applied in any annulus $B_S(z_0) \setminus \overline{B_s(z_0)}$ with $0 < s < S < r$. Moreover, by the uniqueness of the Laurent series expansion, we can let $s \to 0$ and $S \to r$ and find that we have unique coefficients $a_k \in \C$ such that

$$
\begin{equation*} f(z) = \sum_{k = -\infty}^\infty a_k (z - z_0)^k \end{equation*}
$$

for every $z \in B_r(0) \setminus \{z_0\}$. We now study this situation in more detail.

We distinguish between the following cases.

Three types of [[10.3 Isolated Singularities]],

![[10.3 Isolated Singularities#^singularities]]

which which we can apply [[10.4 Classification of Isolated Singularities]], obtaining,

![[10.4 Classification of Isolated Singularities#^rules]]

