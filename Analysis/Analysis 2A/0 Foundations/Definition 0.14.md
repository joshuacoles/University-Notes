### [[Definition 0.14]]

Let $A\subset \R$ be a set and $f : A \to \R$ a function. Suppose that $x \in A$. We say that $f$ is continuous at $x$ if

$$ \forall \, \varepsilon \,\, \exists \, \delta >0 \quad \textrm {such that } \, \forall \, y\in A: |y - x| < \delta \Rightarrow |f (y) - f (x)| < \varepsilon . $$

Equivalently, in terms of sequences, we have that $f$ is continuous at $x$ if for any sequence $(x_k)_{k\in \N }$ in $A$ with $x=\lim _{k\to \infty } x_k$, we have

$$ f(x)=\lim _{k\to \infty } f(x_k). $$

We say that $f$ is continuous if it is continuous at every point of $A$. We say that $f$ is uniformly continuous if

$$ \forall \, \varepsilon \,\, \exists \, \delta >0 \quad \textrm {such that } \, \forall \, x, y\in A: |y - x| < \delta \Rightarrow |f (y) - f (x)| < \varepsilon . $$

Finally, we say that $f$ is Lipschitz continuous if there exists a number $L > 0$ such that for all $x,y \in A$,

$$ |f(y) - f(x)| \le L |y - x|. $$

These definitions may have been given in MA10207 only for functions defined on an interval. The conditions are exactly the same, however, for any set $A\subset \R$. If $A$ is a closed, bounded interval, then continuity has particularly nice consequences.