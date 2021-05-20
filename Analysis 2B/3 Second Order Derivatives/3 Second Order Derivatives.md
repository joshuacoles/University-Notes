# 3 Second order derivatives

If the [[1.2 Partial Derivative|Partial Derivatives]] of a function $f : U \to \R$ exist at every $x \in U$, then we obtain new functions $\parfrac{f}{x_j} : U \to \R$ for $j \in J_n$.

These of course may have [[1.2 Partial Derivative|Partial Derivatives]] of their own. If so, this gives rise to **second order** [[1.2 Partial Derivative|Partial Derivatives]]. We define

$$
\frac{\p^2}{\p x_j\p x_i} = \parfrac{}{x_j}\(\parfrac{f}{x_i}\)
$$

> **Note** that while the notation $\parfrac{}{x^2_j}$ may be occasionally used by lecturers, please avoid as it looks frightful.

for $j, k \in J_n$. Partial derivatives of even higher order are defined similarly.

## Example
Consider the function $f \colon \mathbb{R}^3 \to \mathbb{R}$ given by $f(x) = x_1^2 x_2 + x_1 x_3^2$. Then

$$
\begin{align*} \frac{\partial^2 f}{\partial x_1^2}(x) & = 2 x_2, & \quad \frac{\partial^2 f}{\partial x_1 \partial x_2}(x) & = 2x_1, & \quad \frac{\partial^2 f}{\partial x_1 \partial x_3}(x) & = 2x_3, \\ \frac{\partial^2 f}{\partial x_2 \partial x_1}(x) & = 2 x_1, & \quad \frac{\partial^2 f}{\partial x_2^2}(x) & = 0, & \quad \frac{\partial^2 f}{\partial x_2 \partial x_3}(x) & = 0, \\ \frac{\partial^2 f}{\partial x_3 \partial x_1}(x) & = 2x_3, & \quad \frac{\partial^2 f}{\partial x_3 \partial x_2}(x) & = 0, & \quad \frac{\partial^2 f}{\partial x_3^2}(x) & = 2x_1. \end{align*}
$$

It is no accident that some of these second order partial derivatives coincide. We will see shortly that

$$
\frac{\partial^2 f}{\partial x_j \partial x_k} = \frac{\partial^2 f}{\partial x_k \partial x_j}
$$

^eq-3-1

holds for $j, k = 1, \dotsc, n$ under relatively modest assumptions on $f$ (see [[3.2 Symmetry of the Hessian]]).

1. [[3.1 Hessian Matrix]]
2. [[3.2 Symmetry of the Hessian]]

## [[Taylor's Theorem]]

Recall Taylor's theorem for functions $g : (a, b) \to \R$ of one variable: if $g$ is $k$ times continuously differentiable in $(a, b)$, then for any $x, y \in (a, b)$ there exists $t$ between $x$ and $y$ such that

$$
g(y) = g(x) + g'(x) (y - x) + \dotsb + \frac{g^{(k - 1)}(x)}{(k - 1)!} (y - x)^{k - 1} + \frac{g^{(k)}(t)}{k!} (y - x)^k.
$$

^aa750e

It follows that there is a function $R \colon (a, b) \to \mathbb{R}$ such that $\lim_{y \to x} R(y) = 0$ and

$$
g(y) = g(x) + g'(x) (y - x) + \dotsb + \frac{g^{(k)}(x)}{k!} (y - x)^k + R(y)(y - x)^k.
$$

^09f422

> #todo research where tf that came from.

For functions of several variables, we have similar statements. However, while the basic ideas are similar to the above, the formulation becomes more complicated. For this reason, we only give Taylor's theorem for second order derivatives here. The corresponding first order formula is a direct consequence of [[2.3 Relation between the Jacobian and Derivative]] and is discussed in the exercises.

![[3.3 2nd order Taylor's Theorem in Higher Dimensions]]
