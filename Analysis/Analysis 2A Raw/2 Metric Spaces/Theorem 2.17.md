### [[Theorem 2.17]]

Let $(X,d)$ be a metric space. A set $F \subseteq X$ is closed if, and only if, its complement $X \backslash F$ is open.

Proof. Suppose that $F$ is closed. Let $x \in X \backslash F$. Then $x$ is not a cluster point of $F$. That is, there exists an $r > 0$ such that

$$ (B_r(x) \backslash \{x\}) \cap F = \emptyset . $$

Since $x \not \in F$, this means $B_r(x) \subseteq X \backslash F$. It follows that $X \backslash F$ is open.

Now suppose that $F$ is not closed. Then there exists a cluster point $x$ of $F$, with $x \in X \backslash F$. Then for any $r > 0$, we have $B_r(x) \cap F \not = \emptyset$, so $B_r(x) \not \subseteq X \backslash F$. This means that $x$ is not an interior point of $X \backslash F$, and $X \backslash F$ is not open.