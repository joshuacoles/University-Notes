### Example 49

(Revisit the Newton method at the start of this section) Let $f : \R \to \R$ be a function with continuous derivatives up to second order. We want to reformulate Newton’s method as an example of the Contraction Mapping Principle. Guided by the iteration formula, we define $F : \R \to \R$ by

$$ F(x) := x - \frac {f(x)}{f’(x)} $$

for $x \in \R$ with $f’(x) \not = 0$. Is this a contraction?

We have a criterion involving the derivative of $F$, so we compute

$$ F’(x) = 1 - \frac {f’(x)}{f’(x)} + \frac {f(x) f’’(x)}{(f’(x))^2} = \frac {f(x) f’’(x)}{(f’(x))^2}. $$

This does not necessarily satisfy $|F’(x)| < 1$, and thus $F$ is not a contraction in general. In fact, it is not even necessarily well-defined on all of $\R$, as $f’$ may have zeros. On the other hand, we know that Newton’s method does not work in every situation, so it’s no surprise that we need some more restrictions.

Suppose for simplicity that we look for a simple zero $x_0 \in \R$ of $f$, i.e., $f(x_0) = 0$ **but** $f’(x_0)\not = 0$. Then

$$ \lim _{x \to x_0}F’(x)= \lim _{x \to x_0}\frac {f(x) f’’(x)}{(f’(x))^2} =0. $$

Hence there exists a number $a > 0$ such that

$$ |F’(x)| \le \frac {1}{2} \text {\quad on\quad } [x_0 - a,x_0 + a]=:I. $$

Hence for $x, y \in I$, we have

$$ |F(x) - F(y)| \le \frac {1}{2} |x - y|. $$

In particular, this means that for $x \in I$, we have

$$ |F(x) - x_0| = |F(x) - F(x_0)| \le \frac {1}{2} |x - x_0| < a. $$

It follows that $F(I) \subset I$. Hence we can define a map $G :I \to I$ with $G(x) = F(x)$ on $I$, and $G$ is a contraction. Since $I$ is a complete metric space, [[Theorem 2.54]] applies. We obtain a unique point $y_0 \in I$ with $G(y_0) = y_0$, i.e.,

$$ y_0 = y_0 - \frac {f(y_0)}{f’(y_0)}. $$

This implies $f(y_0) = 0$.

Of course we have started with the assumption $f(x_0) = 0$, so this outcome is no surprise. In fact, the uniqueness of the fixed point implies $y_0 = x_0$. As $x_0$ is unknown when we use Newton’s method, we cannot determine $a$ in advance, and so in practice, we often have to take an educated guess for the initial point. But these observations prove that under certain circumstances, Newton’s method will work (i.e. converge), as long as we choose a sufficiently good approximation as initial point.