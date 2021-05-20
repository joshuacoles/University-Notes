### [[Theorem 2.28]]

Let $(X,d)$ be a metric space and $A \subseteq X$.

- (1) A point $x_0 \in X$ belongs to $\overline {A}$ if, and only if, there exists a sequence in $A$ converging (in $d$) to $x_0$.
- (2) The set $A$ is closed if, and only if, for every sequence in $A$ that converges in $X$, the limit belongs to $A$.
- (3) The set $A$ is open if, and only if, for every sequence $(x_k)_{k \in \N }$ converging to a limit in $A$, there exists an $N \in \N$ such that $x_k \in A$ for all $k \ge N$.

Proof. (1) Suppose that $x_0 \in \overline {A}= A \cup A’$. If $x_0 \in A$, then consider the sequence $(x_k)_{k \in \N }$ with $x_k = x_0$ for every $k \in \N$. This is a sequence in $A$ converging to $x_0$. If $x_0 \in A’\setminus A$, then for every $k \in \N$, we have

$$ (B*{1/k}(x_0)\setminus \{x_0\}) \cap A \not = \emptyset \quad \Leftrightarrow \quad B*{1/k}(x_0) \cap A \not = \emptyset . $$

Now choose $x_k \in B_{1/k}(x_0) \cap A$. Then $d(x_k,x_0) \le \frac {1}{k} \to 0$ as $k \to \infty$. Hence the sequence $(x_k)_{k \in \N }\subseteq A$ converges to $x_0$.

Conversely, suppose that $x_0 \in X$ and that there exists a sequence $(x_k)_{k \in \N }$ in $A$ with $x_k \to x_0$ as $k \to \infty$. If $x_0 \in A$, there is nothing to prove, since $A\subseteq \overline {A}$. Otherwise, fix $r > 0$. Then there exists an $N \in \N$ such that $d(x_k,x_0) < r$ for $k \ge N$. In particular, we have $x_N \in B_r(x_0) \cap A$. As $x_0 \not \in A$, this implies

$$ \left (B_r(x_0) \backslash \{x_0\}\right ) \cap A \not = \emptyset . $$

So in this case, we have $x_0 \in A’ (\subseteq \overline A)$.

(2) Suppose that $A$ is closed and let $(x_k)_{k \in \N }$ be a sequence in $A$ with limit $x_0 \in X$. By (1), we have that $x_0 \in \overline {A} = A$.

Conversely, suppose that $A$ contains all limits of sequences in $A$. In order to show that $A$ is closed, it suffices to prove $\overline {A} \subseteq A$. So let $x_0 \in \overline {A}$. By (1), there exists a sequence $(x_k)_{k \in \N }$ in $A$ with $x_k \to x_0$ as $k \to \infty$. But then the hypothesis implies that $x_0 \in A$.

(3) Suppose that $A$ is open and let $(x_k)_{k \in \N }$ be a sequence in $X$ with limit $x_0 \in A$. Since $A$ is open, there exists an $r > 0$ such that $B_r(x_0) \subseteq A$. Moreover, there exists a $N \in \N$ such that $d(x_k,x_0) < r$ for all $k \ge N$. Thus $x_k \in A$ for $k \ge N$.

Conversely, suppose that $A$ is not open. Then $X \backslash A$ is not closed by [[Theorem 2.17]]. According to (2), there exists a sequence $(x_k)_{k \in \N }$ in $X \backslash A$ that converges to an $x_0 \notin X\setminus A$, so $x_0\in A$. But for this sequence, we have $x_k \not \in A$ for all $k \in \N$.