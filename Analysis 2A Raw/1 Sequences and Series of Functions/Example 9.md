### Example 9

(Complex logarithm) We have that the complex logarithm is defined as

$$ \log (1+z) = \sum _{k=1}^{\infty } \frac {(-1)^{k+1}z^{k}}{k}, \quad |z|<1 $$

Heuristically (for now, it will be clear in MA20219) we can obtain the formula from the formula of the complex geometric series. We know that

$$ \sum _{k=0}^\infty z^k = \frac {1}{1-z}, \quad |z|\le 1, z\neq -1. $$

In particular we also have

$$ \frac {1}{1-z} = \sum _{k=0}^n z^k + \frac {z^{n+1}}{1-z}. $$

Integrating the previous formula on the straight segment $L$ between $0$ and $z$ we have

$$ -\log (1-z) = \sum _{k=0}^n \frac {z^{k+1}}{k+1} + \int _L\frac {w^{n+1}}{1-w} dw. $$

It is easy to show that the second term in the right-hand side is infinitesimal for $n\to \infty$, since

$$ \left |\int _L\frac {w^{n+1}}{1-w} dw\right |\leq \frac {|z|^{n+2}}{1-|z|}. $$

In conclusion

$$ -\log (1-z) = \sum _{k=1}^{\infty } \frac {z^{k}}{k}, \quad |z|<1. $$