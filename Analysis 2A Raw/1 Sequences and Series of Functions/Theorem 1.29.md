### [[Theorem 1.29]]

Assume that the power series (1.4) has radius of convergence $0<r<\infty$ and let



$$  f(x):= \sum _{k=0}^\infty a_k x^k, \quad x\in (-r,r). $$

Then $f$ is infinitely many times differentiable in $(-r,r)$ and for every $m\in \N$ and every $x\in (-r,r)$ we have



$$  f^{(m)}(x) = \sum _{k=m}^\infty k(k-1)\dots (k-m+1)a_kx^{k-m}. $$

(Here, $f^{(m)}$ is the $m$-th derivative of $f$.)

Proof. We only need to show that the series

$$ \sum _{k=m}^\infty k(k-1)\dots (k-m+1)a_kx^{k-m} $$

has radius of convergence $r$ for every $m$. Once this is proved, we simply apply [[Theorem 1.16]] to deduce that the series equals the $m$-th derivative of $f$.

To compute the radius of convergence, note that



$$ \begin{align*} \limsup *{k\to \infty } \left ( k(k-1)\dots (k-m+1)|a_k|\right )^{\frac {1}k} &= \lim *{k\to \infty } k^{\frac {1}k} \, \lim *{k\to \infty } (k-1)^{\frac {1}k} \dots \lim *{k\to \infty } (k-m+1)^{\frac {1}k} \limsup *{k\to \infty } |a_k|^{\frac 1k} \\ &= \limsup *{k\to \infty } |a_k|^{\frac 1k} = \frac 1r, \end{align*} $$ which completes the proof.

From [[Theorem 1.29]] we deduce that the sum of the series $f$ in (1.8) is a well-defined and infinitely differentiable function in the interval of convergence of the series. Furthermore, we can get an expression for the coefficients $a_k$ in terms of $f$: The coefficients are simply the Taylor coefficients of $f$.