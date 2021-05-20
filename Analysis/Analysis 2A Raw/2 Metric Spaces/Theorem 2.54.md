### [[Theorem 2.54]]

(Contraction Mapping Principle) Let $(X,d)$ be a complete metric space, with $X\neq \emptyset$, and let $f : X \to X$ be a contraction. Then $f$ has a unique fixed point.

Proof. Choose an arbitrary point $x_1 \in X$ and define the sequence $(x_k)_{k \in \N }$ recursively as follows:

$$ x_{k + 1} = f(x_k), \quad k = 1,2,3,\ldots $$

We claim that this is a Cauchy sequence. In order to prove the claim, define $\delta _k = d(x_{k + 1},x_k)$. Note first that we have a number $\alpha \in (0,1)$ such that for all $k \in \N$,

$$ \delta _{k +1} = d(x_{k + 2},x*{k + 1}) = d(f(x*{k + 1}),f(x*k)) \le \alpha d(x*{k+ 1},x_k) = \alpha \delta _k, $$

because $f$ is a contraction. Hence $\delta _2 \le \alpha \delta _1$, $\delta _3 \le \alpha \delta _2 \le \alpha ^2 \delta _1$, etc., and

$$ \delta _k \le \alpha ^{k - 1} \delta _1, \quad k \in \N . $$

If $m,k \in \N$ with $m < k$, then



$$ \begin{align*} d(x*m,x_k) & \le \delta _m + \cdots + \delta *{k - 1} \\ & \le \left (\alpha ^{m - 1} + \cdots + \alpha ^{k - 2}\right ) \delta *1 \\ & \le \delta _1 \sum *{i = m - 1}^\infty \alpha ^i = \frac {\delta _1 \alpha ^{m - 1}}{1 - \alpha }. \end{align*} $$ In the last step we have used the fact that $\alpha \in (0,1)$. For the same reason, we have

$$ \frac {\delta _1 \alpha ^{m - 1}}{1 - \alpha } \to 0 \quad \text {as $m \to \infty $}. $$

Hence $(x_k)_{k \in \N }$ is a Cauchy sequence.

Because $(X,d)$ is a complete metric space, every Cauchy sequence converges. In particular, there exists a point $x_0 \in X$ such that $d(x_k,x_0)\to 0$ as $k \to \infty$.

Since $f$ is a contraction, it is Lipschitz continuous. In particular it is continuous by [[Theorem 2.39]]. Hence

$$ f(x*0) = f\left (\lim *{k \to \infty } x*k\right ) = \lim *{k \to \infty } f(x*k) = \lim *{k \to \infty } x_{k + 1} = x_0. $$

So $x_0$ is a fixed point of $f$.

It is a unique fixed point, because for every other fixed point $y_0 \in X$, we have

$$ d(x_0,y_0) = d(f(x_0),f(y_0)) \le \alpha d(x_0,y_0). $$

Because $\alpha < 1$, it follows that $d(x_0,y_0) = 0$, and so $x_0 = y_0$.