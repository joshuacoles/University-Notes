### [[Remark 1.14]]

If, in [[Theorem 1.13]], one replaces (i) with the stronger condition that $f_k$ converges pointwise to a function $f$ on $(a,b)$, then the proof simplifies as follows.

Fix some $x_0\in (a,b)$; the uniform convergence of $f’_k$ to $g$ implies that

$$ \int _{x_0}^x f’_k(t) dt \to \int _{x_0}^x g(t) dt \quad \textrm {as } k\to \infty , $$

by [[Theorem 1.10]]. It then follows from the Fundamental Theorem of Calculus that

$$ f*k(x) - f_k(x_0) \to \int *{x_0}^x g(t) dt \quad \textrm {as } k\to \infty . $$

The pointwise convergence of $f_k$ to $f$ then gives

$$ f(x) - f(x*0) = \int *{x_0}^x g(t) dt, $$

which, again by the Fundamental Theorem of Calculus implies that $f$ is differentiable and $f’=g$.