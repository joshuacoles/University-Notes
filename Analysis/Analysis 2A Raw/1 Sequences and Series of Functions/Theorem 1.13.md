### [[Theorem 1.13]]

Let $(f_k)_{k\in \N }$ be a sequence of functions $f_k:[a,b]\to \R$ of class $C^1$ in $(a,b)$ (namely differentiable in $(a,b)$ and with continuous derivative in $(a,b)$). Suppose that

- (i) there exists a number $x_0 \in (a, b)$ such that the sequence $(f_k(x_0))_{k\in \mathbb {N}}$ is convergent, and
- (ii) $(f’_k)_{k\in \mathbb {N}}$ converges uniformly on $(a,b)$.

Then there exists a continuously differentiable function $f : (a, b) \to \R$ such that $f_k \to f$ uniformly and $f’_k \to f’$ uniformly as $k \to \infty$.

Proof. Let $y_0:=\lim _{k\to \infty } f_k(x_0)$ and let $g : (a, b) \to \R$ be the uniform limit of $f’_k$. Then $g$ is continuous, being the uniform limit of continuous functions. Define

$$ f(x):= y*0 + \int *{x_0}^x g(t) dt, \quad x\in (a,b). $$

Then, by the Fundamental Theorem of Calculus, $f’=g$. Moreover, for any $x\in (a,b)$,



$$ \begin{align*} |f*k(x) - f(x)|&= \left |f_k(x_0)+\int *{x*0}^x f’_k(t) dt - y_0 - \int *{x*0}^x g(t) dt\right |\\ &\leq |f_k(x_0)-y_0|+ \left | \int *{x*0}^x \Big (f’_k(t) - g(t)\Big ) dt \right |\\ &\leq |f_k(x_0)-y_0|+ \int *{x*0}^x \Big |f’_k(t) - g(t)\Big | dt \\ &\leq |f_k(x_0)-y_0|+ (b-a)\sup *{t\in (a,b)}\Big |f’_k(t) - g(t)\Big | \to 0. \end{align*} $$ Hence $f_k \to f$ uniformly. We already know that $f’_k \to g = f’$ uniformly.