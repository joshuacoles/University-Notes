## [[Fourier Series]]

Given [[11.1 Periodic Function|Periodic Function]] $f : [-L, L] \to \R$ with period $P = 2L$, we define the following,

$$
F[f](x) = \sum_{n = 0}^{\infty} a_n \cos\(\frac{\pi}{L}nx\) + b_n\sin\(\frac{\pi}{L}nx\)
$$

with,

$$
\begin{align}
a_n &= \frac{1}{L} \int_{-L}^L f(x) \cos(\frac{\pi}{L}nx) \rd x \\
b_n &= \frac{1}{L} \int_{-L}^L f(x) \sin(\frac{\pi}{L}nx) \rd x
\end{align}
$$

- Even will have $a_n$ only
- Odd $b_n$ only
- $F[f + \lambda g] = F[f] + \lambda F[g]$
- $F[A] = (a_0 = A, a_n = b_n = 0)$
- $F[x] = (a_0 = 0, a_n = 0, b_n = (-1)^{n-1}\frac2n)$
- $F[x^m]$ m odd,



- compute $a_0$, it has a half in some forms as it is inlcuded in the sum and separatly