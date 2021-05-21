### Example 6

(Complex geometric series) The complex geometric series

$$ \sum _{k=0}^\infty z^k, \quad z\in \C $$

converges if $|z|<1$ and does not converge if $|z|\geq 1$ by using the (algebraic) formula $\sum _{k=0}^{N} z^k= \frac {1-z^{N+1}}{1-z}$.

This is clear, since for $|z|<1$ we have the bound (in terms of a real series)

$$ \sum _{k=0}^\infty |z^k| \leq \sum _{k=0}^\infty |z|^k, $$

which ensures convergence by the comparison principle. On the other hand, if $|z|\geq 1$, then $|z^k|\geq 1$, and hence does not converge to zero, which is a necessary condition for the convergence of the series.

Notice that to prove convergence we generally try to bound a series which we know very little about by a geometric series, which we fully understand. This is a frequent technique in analysis!

More in general, the series

$$ \sum _{k=0}^\infty \alpha _k z^k, \quad \alpha _k, z\in \C $$

converges at $z=0$, and if it converges at some $w\neq 0$, then it converges for every $z\in \C$, $|z|<|w|$. We can therefore define a radius of convergence as for the case of real power series. Note that in $\C$ the set of points where the series converges is a disc, and not an interval.