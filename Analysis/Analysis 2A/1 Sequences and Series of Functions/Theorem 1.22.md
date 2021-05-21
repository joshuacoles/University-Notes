### [[Theorem 1.22]]

If the power series

$$ \sum _{k=0}^\infty a_k x^k $$

converges at some point $y\in \R$, then it converges (pointwise) at every $x\in \R$ with $|x|< |y|$, and uniformly in $[-R,R]$, for every $R<|y|$.

Proof. Assume that $y\neq 0$; since by assumption the (real) series

$$ \sum _{k=0}^\infty a_k y^k $$

converges, we have that the (real) sequence $(a_k y^k)_k$ converges to zero as $k\to \infty$. In particular, the sequence $(a_k y^k)_k$ is bounded, namely there exists $M>0$ such that $|a_k y^k| \leq M$ for every $k\in \N$.

Now, let $x\in \R$; since $y\neq 0$, we have



$$ \begin{align*}  |a_k x^k| = \left | a_k x^k \, \frac {y^k}{y^k} \right | = |a_k y^k| \, \left | \frac {x}{y}\right |^k \leq M \, \left | \frac {x}{y}\right |^k; \end{align*} $$ hence, if $|x|<|y|$, by (1.5) we deduce the bound

$$ \sum _{k=0}^\infty a_k x^k \leq \sum _{k=0}^\infty |a*k x^k| \leq M \sum *{k=0}^\infty \left | \frac {x}{y}\right |^k, $$

and the series at the right-hand side converges since $\left | \frac {x}{y}\right | <1$. By the comparison principle we have that

$$ \sum _{k=0}^\infty a_k x^k $$

converges for every $x\in \R$ with $|x|<|y|$.

To show uniform convergence, we will use the Weierstrass $M$-test. Let $R\geq 0$ be such that $R<|y|$; then by (1.5) we obtain the uniform bound

$$ \sup _{|x|\leq R} |a_k x^k| \leq M \frac {R^k}{|y|^k} =:M_k $$

where $M_k$ is independent of $x$, and $\sum _k M_k<\infty$; the convergence of the series is then uniform on $[-R,R]$.