### [[Theorem 2.42]]

(Continuity of compositions) Let $(X,d_X)$, $(Y,d_Y)$, and $(Z,d_Z)$ be metric spaces. Suppose that $f : X \to Y$ and $g : Y \to Z$ are maps. Let $x_0 \in X$. If $f$ is continuous at $x_0$ and $g$ is continuous at $f(x_0)$, then $g \circ f$ is continuous at $x_0$.

Proof. Fix $\varepsilon > 0$. As $g$ is continuous at $f(x_0)$, there exists a $\rho > 0$ such that

$$ d_Y(y,f(x_0)) < \rho \Rightarrow d_Z(g(y),g(f(x_0))) < \varepsilon . $$

As $f$ is continuous at $x_0$, there exists a $\delta > 0$ such that

$$ d_X(x,x_0) < \delta \Rightarrow d_Y(f(x),f(x_0)) < \rho . $$

So if $d_X(x,x_0) < \delta$, it follows that $d_Z(g(f(x)),g(f(x_0))) < \varepsilon$, as required.

In metric spaces, continuity can be equivalently stated in terms of sequences.