### [[Theorem 2.19]]

Let $A$ be a subset of a metric space $(X,d)$. Then

- (1) $\overline {A}$ is closed, and
- (2) if $F \supseteq A$ is closed, then $F \supseteq \overline {A}$.

In other words, the closure $\overline {A}$ is the smallest closed set containing $A$, and

$$ A \mbox { is closed} \Leftrightarrow A = \overline A. $$

Proof. (2) Suppose that $F \supseteq A$ is closed. Let $x \in \overline {A} = A \cup A’$. If $x \in A$, then it is clear that $x \in F$ as well. If $x \in A’$, then for every $r > 0$, we have

$$ \emptyset \not = (B_r(x) \backslash \{x\}) \cap A \subseteq (B_r(x) \backslash \{x\}) \cap F. $$

Hence $x$ is a cluster point of $F$, too. Since $F$ is closed, this means that $x \in F$ and $\overline {A} \subseteq F$.

(1) We want to show that $X \backslash \overline {A}$ is open, and the claim then follows from [[Theorem 2.17]].

Let $x \in X \backslash \overline {A}$. As $x$ is not a cluster point of $A$, there exists a radius $r > 0$ such that $B_r(x) \subseteq X \backslash A$. We know that $B_r(x)$ is open ([[Lemma 2.10]]); therefore $X \backslash B_r(x)$ is closed. By (2), we have $\overline {A} \subseteq X \backslash B_r(x)$, i.e., $B_r(x) \subseteq X \backslash \overline {A}$. Therefore $X \backslash \overline {A}$ is open, as required.