### [[Theorem 2.13]]

Let $A$ be a subset of a metric space $(X,d)$. Then

- (1) $A^\circ$ is open, and
- (2) if $U \subseteq A$ is open, then $U \subseteq A^\circ$.

We can summarise this theorem as follows: the interior of $A$ is the largest open set contained in $A$.

Proof. (2) Let $U \subseteq A$ be open. If $x \in U$ is an arbitrary point, then there exists an $r > 0$ such that $B_r(x) \subseteq U \subseteq A$. So $x$ is an interior point, and hence $x \in A^\circ$.

(1) Let $x \in A^\circ$. Then there exists an $r > 0$ such that $B_r(x) \subseteq A$. By [[Lemma 2.10]], we know that $B_r(x)$ is open. By (2), we have $B_r(x) \subseteq A^\circ$. Therefore $A^\circ$ is open.