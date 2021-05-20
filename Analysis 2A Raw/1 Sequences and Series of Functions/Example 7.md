### Example 7

(Complex exponential) The complex power series



$$  \sum _{k=0}^\infty \frac {z^k}{k!} $$

is convergent for every $z\in \C$. Indeed we have the bound in terms of

$$ \left |\frac {z^k}{k!}\right | \leq \frac {|z|^k}{k!}, $$

which defines a real and convergent series. (Alternatively: Since $\alpha _k = 1/k!$, and $\lim _k|\alpha _{k+1}|/|\alpha _k|=0$, this power series has radius of convergence $r=\infty$, so it converges for all $z$.)

Since on the real line the series (1.10) is equal to the exponential function (by the convergence of the Taylor series of the exponential), we set



$$  e^z:= \sum _{k=0}^\infty \frac {z^k}{k!} $$

to define the _complex exponential function_.

It is obvious that $e^0 =1$, by plugging in $z= 0$ into the power series expression for $e^z$.

It is easy to see that $(e^z)’=e^z$. Indeed, by differentiating the power series expression for $e^z$ term by term (allowed since the derivative series has the same radius of convergence of $e^z$, hence it converges for every $z\in \C$), we find

$$ (e^z)’ = 1+ \frac {2z}{2!} + \frac {3z^2}{3!}+\dots = 1+ z+\frac {z^2}{2!} + \frac {z^3}{3!}+\dots = e^z. $$

We moreover have the following property:



$$ e^z e^w = e^{z+w}. $$

To prove it, we need to recall the definition of multiplication of complex series. Given $\sum _k \alpha _k$ and $\sum _k \beta _k$, the product of the series is

$$ \sum _k c_k, \quad c_k = \sum _{m=0}^k \alpha _m \beta _{k-m}, \quad k=0,1,\dots . $$

We also recall that the product of two convergent sequences converges to the product of their sums if at least one of the two converges absolutely.

Hence, we can see that



$$ \begin{align*} e^z e^w &= \left (\sum *{k=0}^\infty \frac {z^k}{k!}\right )\left (\sum *{k=0}^\infty \frac {w^k}{k!} \right ) = \sum *{k=0}^\infty \sum *{m=0}^k \frac {z^m w^{k-m}}{m!(k-m)!}\\ & = \sum *{k=0}^\infty \frac {1}{k!} \sum *{m=0}^k \binom {k}{m}z^m w^{k-m} = \sum _{k=0}^\infty \frac {1}{k!} (z+w)^k = e^{z+w}. \end{align*} $$

Now note that if we write (1.11) for $z=iy$, with $y\in \R$, then we have



$$ \begin{align*} e^{iy} = \sum *{k=0}^\infty \frac {(iy)^k}{k!} = \sum *{m=0}^\infty (-1)^m\frac {y^{2m}}{(2m)!} + i \sum _{m=0}^\infty (-1)^m\frac {y^{2m+1}}{(2m+1)!} = \cos y+ i\sin y. \end{align*} $$ This is the famous Euler formula, a surprising relation between the exponential function and trigonometric functions:

$$ e^{iy} = \cos y + i \sin y. $$