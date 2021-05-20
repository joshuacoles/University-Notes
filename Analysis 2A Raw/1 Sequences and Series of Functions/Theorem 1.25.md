### [[Theorem 1.25]]

Let

$$ \sum _{k=0}^\infty a_k x^k $$

be a power series, and let

$$ L:= \limsup _{k\to \infty } (|a_k|^{\frac 1k}). $$

Then the radius of convergence of the series is

$$ r = \begin {cases} 0 \quad &\textrm {if } L=+\infty \\ +\infty \quad &\textrm {if } L=0\\ \frac 1L \quad &\textrm {if } 0<L<+\infty . \end {cases} $$

Proof. Assume that $0<L<+\infty$, and let $x\in \R$ with $|x|<\frac 1L$. By the definition of $L$ we have that, for every $\varepsilon >0$ there exists $N\in \N$ with the property that

$$ \forall \, k\in \N , \quad k\geq N \quad \Rightarrow \quad (|a_k|)^{\frac 1k} < L+\varepsilon . $$

So, if we choose $\varepsilon >0$ such that $c:=|x|(L+\varepsilon )<1$, we have that there exists $N\in \N$ such that if $k\geq N$ then

$$ |a_k x^k| = |a_k| |x|^k < (L+\varepsilon )^k |x|^k = (|x|(L+\varepsilon ))^k = c^k. $$

Since $\sum _{k=0}^\infty c^k <\infty$, this proves that the series $\sum _{k=0}^\infty a_k x^k$ converges whenever $|x|< \frac 1L$, and hence $r\geq \frac 1L$. (Note that we proved that the tails of the power series are controlled by the tails of the geometric converging series. To conclude we just observe that each of the first $N$ terms is bounded by the constant $\max \{a_k r^k: k=1, \dots , N\} <\infty$.)

To conclude the proof we need to show that the series does not converge for $|x|>\frac 1L$. Let then $x\in \R$ be such that $|x|>\frac 1L$; by the definition of $L$ we have that, for every $\varepsilon >0$ there exist infinitely many $k\in \N$ such that

$$ (|a_k|)^{\frac 1k} > L-\varepsilon . $$

If we choose $\varepsilon >0$ such that $|x|(L-\varepsilon )> 1$ we then have that for infinitely many $k\in \N$

$$ |a_k x^k| = |a_k| |x|^k > (L-\varepsilon )^k |x|^k = (|x|(L -\varepsilon ))^k >1. $$

This proves that the series does not converge, since a necessary condition for convergence is that $a_k x^k \to 0$ as $k\to \infty$, while for infinitely many $k\in \N$ we have that $|a_k x^k|>1$, which implies that at least a subsequence of $a_k x^k$ will not converge to zero.

(The cases $L=0$ and $L=+\infty$ are left as exercise.)

If the power series (1.4) has radius of convergence $r>0$, then in the interval $(-r,r)$ the function

$$ f(x) = \sum _{k=0}^\infty a_k x^k $$

enjoys lots of properties, as the following theorem shows.