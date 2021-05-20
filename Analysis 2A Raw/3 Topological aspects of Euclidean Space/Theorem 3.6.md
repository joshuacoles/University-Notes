### [[Theorem 3.6]]

Every compact set $A\subset \R ^n$ is sequentially compact.

Proof. Assume for contradiction that there exists a sequence $(x_k)_{k \in \N }\subset A$ that has no convergent subsequence. This means that every $y \in A$ is not a cluster point of $\{x_k: k \in \N \}$, cf. Sheet 7 TQ2 (ii). i.e. there exists $r_y > 0$ such that

$$ B_{r_y}(y)\setminus \{y\} \cap \{x_k: k \in \N = \emptyset ,\} $$

which means that

$$ B_{r_y}(y) \cap \{x_k: k \in \N ,\} $$

is a finite set,

Now the collection $\{B_{r_y}(y): y \in A\}$ is an open cover of $A$. Since $A$ is compact, there exist $y_1, \ldots , y_N \in A$ with

$$ A \subseteq \bigcup _{i = 1}^N B_{r_{y_i}}(y_i). $$

As $(x_k)_{k}\subset A$ we have

$$ \{x*k: k \in \N \} = A\cap \{x_k: k \in \N \} \subset \bigcup *{i = 1}^N B*{r*{y_i}}(y_i) \cap \{x_k: k \in \N \}. $$

Thus $\{x_k: k \in \N \}$ is a finite set (finite union of finite sets on right hand side). Hence $(x_k)_{k}$ is a bounded sequence and has a convergent subsequence by Bolzano-Weierstrass [[Theorem 3.2]]. This contradicts the assumption.