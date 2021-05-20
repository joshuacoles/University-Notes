### [[Theorem 3.8]]

(Tychonov’s Theorem) Let $n,m\in \N$. If $A\subset \R ^n$ and $B\subset \R ^m$ are compact, then the product

$$ A\times B=\{(a,b): a\in A, b\in B\} $$

is compact.

Proof. Let $\{U_{\lambda }: \lambda \in \Lambda \}$ be an open cover of $A\times B$. The idea is to kind of ‘project’ the cover onto $A$ and $B$, which are compact, to extract a finite sub-cover for the ‘projected’ sets, and then combine them to get a finite sub-cover of $A\times B$.

Let $(a,b)\in A\times B$; then there exists $\lambda _{(a,b)}\in \Lambda$ such that $(a,b) \in U_{\lambda _{(a,b)}}$. Since $U_{\lambda _{(a,b)}}$ is open, there exists a radius $r_{(a,b)}>0$ such that

$$ (a,b) \in B*{r*{(a,b)}}(a,b)\subset U*{\lambda *{(a,b)}}. $$

On the other hand, we can always put a ‘rectangle’ in the ball $B_{r_{(a,b)}}(a,b)$; more precisely, there exist open sets $V_{(a,b)}\subset A$ and $W_{(a,b)}\subset B$ such that

$$ (a,b) \in V*{(a,b)}\times W*{(a,b)} \subset B*{r*{(a,b)}}(a,b)\subset U*{\lambda *{(a,b)}}. $$

Clearly, for fixed $a\in A$, $\{W_{(a,b)}: b\in B\}$ is an open sub-cover of $B$. Since $B$ is compact, there exists a finite sub-cover

$$ \{ W*{(a,b_1(a))}, W*{(a,b*2(a))}, \dots , W*{(a,b_N(a))}\} $$

of $B$. Now we do a similar thing for $A$. Note that for every $a\in A$, the set

$$ V*a:= \bigcap *{j=1}^N V_{(a,b_j(a))} $$

is open (finite intersection of open sets) and $a\in V_a$. So $\{V_a: a\in A\}$ is an open cover of $A$. Since $A$ is compact, there exists a finite sub-cover

$$ \{V*{a_1}, V*{a*2}, \dots , V*{a_M}\} $$

of $A$.

In conclusion, we have that

$$ \{ V*{a_i} \times W*{(a_i,b_j(a_i))}: i=1,\dots , M, \quad j=1,\dots , N\} $$

is an open and finite cover of $A\times B$. From this we can obtain a finite sub-cover of the original cover $\{U_{\lambda }: \lambda \in \Lambda \}$:

$$ \{U*{\lambda *{(a_i,b_j(a_i))}}: i=1,\dots , M, \quad j=1,\dots , N\}, $$

which is a cover of $A\times B$ since

$$ V*{a_i} \times W*{(a*i,b_j(a_i))} \subset V*{(a*i,b_j(a_i))} \times W*{(a*i,b_j(a_i))} \subset U*{\lambda _{(a_i,b_j(a_i))}}. $$

Hence $A\times B$ is compact.