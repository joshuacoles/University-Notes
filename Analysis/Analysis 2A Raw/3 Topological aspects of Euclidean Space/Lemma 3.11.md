### [[Lemma 3.11]]

Let $K\subset \R ^n$ be a compact set, and let $E\subset K$ be an infinite set. Then $E$ has a cluster point in $K$.

Proof. Assume that no points in $K$ are cluster points of $E$. Then for every $y\in K$ there exists $r_y$ such that

$$ (B_{r_y}(y)\setminus \{y\})\cap E = \emptyset . $$

Since $\{B_{r_y}(y): y\in K\}$ is an open cover of $K$, there exists

$$ y*1, \dots , y_N \in K \quad \text {such that}\quad K\subset \bigcup *{k=1}^N B*{r*{y_k}}(y_k). $$

But $E\subset K$ implies that

$$ E = E\cap K\subset E\cap \bigcup _{k=1}^{N } B_{r_{y_k}}(y_k) \subset \{y_1,\dots ,y_N\}, $$

contradicting the fact that $E$ is an infinite set.