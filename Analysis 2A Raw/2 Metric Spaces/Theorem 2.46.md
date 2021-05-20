### [[Theorem 2.46]]

(Continuity of linear maps) Let $(X,\| \cdot \|_X)$ and $(Y,\|\cdot \|_Y)$ be normed spaces and let $f : X \to Y$ be a linear map. The following are equivalent:

- (1) $f$ is continuous in $X$;
- (2) $f$ is continuous at $0$;
- (3) there exists a constant $M > 0$ such that $\forall \, x \in X$: $\|f(x)\|_Y \leq M \|x\|_X$.

Proof. $(1)\Rightarrow (2)$: By assumption $f$ is continuous at every $x\in X$, so in particular at $x=0\in X$.

$(2)\Rightarrow (1)$: We use the sequential characterisation of continuity in [[Theorem 2.43]]. Let $x\neq 0$ and let $(x_k)_k\subset X$ be a sequence with $\|x_k-x\|_X \to 0$ as $k\to \infty$. This means that the sequence $y_k:= x_k-x$ (still $\subset X$) converges to $0$ in norm. So, since $f$ is continuous at $0$ by assumption and $\|y_k-0\|_X\to 0$, we have that $\|f(y_k)-f(0)\|_Y\to 0$. But $f$ is linear, so $f(0)=0$ and $f(y_k) = f(x_k)-f(x)$; hence $\|f(x_k)-f(x)\|_Y\to 0$, which implies that $f$ is continuous at $x$.

$(2)\Rightarrow (3)$: By [[Definition 2.37]], for every $\varepsilon >0$ there exists $\delta >0$ such that $\|x\|_X<\delta \Rightarrow \|f(x)\|_Y<\varepsilon$. Note that it is enough to show the claim for $x\neq 0$, since $f(0)=0$. So, let $x\neq 0$, and define $y:=\frac \delta 2 \frac {x}{\|x\|_X}$. Since $\|y\|_X<\delta$, by assumption $\|f(y)\|_Y<\varepsilon$; equivalently,

$$ \varepsilon > \|f(y)\|_Y = \frac \delta 2 \frac {1}{\|x\|_X}\|f(x)\|_Y \quad \Leftrightarrow \quad \|f(x)\|_Y \leq \frac {2\varepsilon }{\delta } \|x\|_X, $$

hence the claim follows for $M=\frac {2\varepsilon }{\delta }$.

$(3)\Rightarrow (2)$: We use the sequential characterisation of continuity in [[Theorem 2.43]]. Let $(x_k)\subset X$ be such that $\|x_k-0\|_X \to 0$ as $k\to \infty$. Then by assumption

$$ \|f(x_k)\|_Y \leq M\|x_k\|_X \to 0 \quad \textrm {as } k\to \infty , $$

namely, since $f(0)=0$, $\|f(x_k) - f(0)\|_Y \to 0$, which implies the continuity of $f$ at zero.

(Alternatively: by linearity, the assumption implies that $f$ is Lipschitz continuous, hence continuous, which would prove $(3)\Rightarrow (1)$.)