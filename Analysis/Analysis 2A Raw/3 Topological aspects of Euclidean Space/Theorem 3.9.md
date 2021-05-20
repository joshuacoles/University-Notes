### [[Theorem 3.9]]

[Heine-Borel] Let $n \in \N$. Suppose that $A$ is a subset of the Euclidean space $\R ^n$. Then the following are equivalent.

- (1) $A$ is sequentially compact;
- (2) $A$ is closed and bounded;
- (3) $A$ is compact.

Proof. We are going to prove $(1) \Rightarrow (2)$, $(2) \Rightarrow (3)$ and $(3) \Rightarrow (1)$.

$(1) \Rightarrow (2)$   Clearly a sequentially compact set is closed by [[Theorem 2.28]]. Now, assume that $A$ is not bounded and let $x_1\in A$. Let now $r>0$; since $A$ is not bounded, there exists $x_2\in A\setminus B_r(x_1)$. Similarly there is $x_3\in A\setminus (B_r(x_1)\cup B_r(x_2))$ and so on. In this way be can build a sequence $(x_k)_{k\in \N }\subset A$ such that $|x_k-x_j|\geq r$ whenever $k\neq j$. This sequence clearly does not have any convergent subsequence, contradicting the assumption. Hence $A$ is bounded.

$(2) \Rightarrow (3)$  Let $A$ be closed and bounded. Being $A$ bounded, there exists $R>0$ such that $A\subset [-R,R]^n$, where $[-R,R]^n$ denoted the $n$-dimensional cube. Being $A$ a closed subset of $[-R,R]^n$, by [[Lemma 3.7]] we only need to prove that $[-R,R]^n$ is compact. This follows by $[-R,R]^n$ being the product of compact sets, by [[Theorem 3.8]].

$(3) \Rightarrow (1)$  This is exactly [[Theorem 3.6]].