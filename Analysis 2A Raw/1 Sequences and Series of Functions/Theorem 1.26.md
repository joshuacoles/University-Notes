### [[Theorem 1.26]]

Suppose that the power series



$$  \sum _{k=0}^\infty a_k x^k $$

has radius of convergence $0<r<\infty$. Then the function $f$ defined as

$$ f(x):=\sum _{k=0}^\infty a_k x^k, \quad |x|<r, $$

is continuous and differentiable in $(-r,r)$, with

$$ f’(x) = \sum _{k=1}^\infty k a_k x^{k-1}, \quad |x|<r. $$

Proof. Let $\varepsilon >0$ be arbitrary. By [[Theorem 1.22]] we know that the series converges uniformly on $[-r+\varepsilon ,r-\varepsilon ]$ and $f$ is therefore continuous in that interval, as the uniform limit of a continuous sequence (the partial sums of the power series). Moreover, by the arbitrariness of $\varepsilon$ the function $f$ is well-defined and continuous for $|x|<r$.

Now, to prove differentiability, we first show that the series



$$  \sum _{k=1}^\infty k a_k x^{k-1} $$

converges in the same interval, namely for $|x|<r$. We calculate the radius of convergence using [[Theorem 1.25]]:

$$ \limsup _{k\to \infty } \left ( k |a_k|\right )^{\frac {1}k} = \lim _{k\to \infty } k^{\frac {1}k} \, \limsup _{k\to \infty } |a_k|^{\frac 1k} = \limsup _{k\to \infty } |a_k|^{\frac 1k} = \frac 1r, $$

We then define

$$ g(x):= \sum _{k=1}^\infty k a_k x^{k-1}, \quad |x|<r. $$

The fact that $g = f’$ for $|x|\leq r-\varepsilon$ is a direct consequence of [[Theorem 1.16]]. Since this is true for every $\varepsilon >0$ it follows that $f$ is differentiable in the whole interval $|x|<r$ and $f’=g$ (indeed, if $|x|<r$, then we can find $\varepsilon >0$ such that $|x|\leq r-\varepsilon$).