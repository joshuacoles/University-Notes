### [[Theorem 2.45]]

Let $(X,d_X)$ and $(Y,d_Y)$ be metric spaces and $f : X \to Y$ a map. The following are equivalent.

- (1) The map $f$ is continuous.
- (2) If $U \subset Y$ is open in $Y$, then

  $$ f^{-1}(U) = \{x \in X: f(x) \in U\} $$

  is open in $X$.

- (3) If $F \subset Y$ is closed in $Y$, then $f^{-1}(F)$ is closed in $X$.

Proof. We use the notation $B_r^X(x_0)$ and $B_r^Y(y_0)$ for open balls in $X$ and $Y$, respectively.

Firstly we show that the statements (1) and (2) are equivalent.

Suppose that $f$ is continuous, and let $U \subset Y$ be open. Let $x_0 \in f^{-1}(U)$. Since $U$ is open, and $f(x_0) \in U$, there exists an $\varepsilon > 0$ such that $B_\varepsilon ^Y(f(x_0)) \subset U$. Choose a corresponding $\delta > 0$ such that

$$ d_X(x,x_0) < \delta \Rightarrow d_Y(f(x),f(x_0)) < \varepsilon . $$

This condition can be rewritten in the form

$$ x \in B*\delta ^X(x_0) \Rightarrow f(x) \in B*\varepsilon ^Y(f(x_0)). $$

Therefore, we have $B_\delta ^X(x_0) \subset f^{-1}(U)$ and $f^{-1}(U)$ is open.

Conversely, suppose that $f^{-1}(U)$ is open for every open set $U \subset Y$. Let $x_0 \in X$ and fix $\varepsilon > 0$. Now $B_\varepsilon ^Y(f(x_0))$ is an open set in $Y$ by [[Lemma 2.10]]. So $V := f^{-1}(B_\varepsilon ^Y(f(x_0)))$ is open in $X$. We have $x_0 \in V$ (because $f(x_0) \in B_\varepsilon ^Y(f(x_0))$). Hence there exists a number $\delta > 0$ such that $B_\delta ^X(x_0) \subset V$. As a consequence, we have the following: if $d_X(x,x_0) < \delta$, then $x \in B_\delta ^X(x_0) \subset V$, so $f(x) \in B_\varepsilon ^Y(f(x_0))$, so $d_Y(f(x),f(x_0)) < \varepsilon$. Thus $f$ is continuous.

Next we show that (2) and (3) are equivalent. To this end, we use the fact that for any $A \subset Y$, we have $f^{-1}(Y \backslash A) = X \backslash f^{-1}(A)$. Moreover, by [[Theorem 2.17]], a set $A \subset Y$ is closed if, and only if, its complement $Y \backslash A$ is open; and a similar statement holds in $X$.

If (2) is true and $F \subset Y$ is closed, then $Y \backslash F$ is open. Therefore $f^{-1}(Y \backslash F) = X \backslash f^{-1}(F)$ is open, and $f^{-1}(F)$ is closed.

Conversely, if (3) is true and $U \subset Y$ is open, then $Y \backslash U$ is closed. Hence $f^{-1}(Y \backslash U) = X \backslash f^{-1}(U)$ is closed, and $f^{-1}(U)$ is open.