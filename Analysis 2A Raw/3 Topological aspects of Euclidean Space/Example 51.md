### Example 51

- (a) The sets $U_i:=\left (\dfrac 1{i},1+\dfrac 1{i}\right )$ form an open cover $(U_i)_{i\in \N }$ of $(0,2)\subset \R$. But any **finite** subcover $(U_{i_k})_k$ leaves the subset $\left (0,\dfrac 1{\max i_k}\right ]$ uncovered. Thus, $(0,2)$ is **non-compact**.
- (b) Let $I=[a,b]$ with $a,b \in \R$, $a<b$. Then $I$ is compact.

  Suppose it is not compact. Then there exists an open cover $(U_\lambda )_{\lambda \in \Lambda }$ such that no finite subcover will cover $I$. Then half the interval $I$ into $[a,(a+b)/2] \cup [(a+b)/2,b]$. Then at least one these subintervals cannot be covered by a finite subcover (otherwise $I$ could be covered by the union of the two finite subcovers). We call this subinterval $I_1=[a_1,b-1]$ and repeat sequentially to obtain

  $$ I \supset I_1\supset I_2\supset \ldots \mbox { with } I_k=[a_k,b_k] $$

  Then there exists $\xi \in I$ with $\cap _{k \in \N } I_k= \{\xi \}$ as can be seen in the following way: Consider $(b_k)_{k \in \N }$, this is a Cauchy sequence $m \geq \ell$:

  $$ |b_\ell -b_m | \leq (b-a) 2^{-\ell } \to 0 \mbox { as } \ell \to \infty $$

  So $(b_k)_{k \in \N }$ converges as $\R$ is complete, we call this limit $\xi$. Then

  $$ a_k=(a_k-b_k) +b_k = 2^{-k}(b-a) + b_k \to 0 +\xi =\xi \mbox { as } k \to \infty , $$

  which shows $\cap _{k \in \N } I_k= \{\xi \}$. Now as $(U_\lambda )_{\lambda \in \Lambda }$ is an open cover there exists a $\lambda \in \Lambda$ such that $x \in U_\lambda$. As $U_\lambda$ is open, there exists $\eps >0$ with $(\xi -\eps ,\xi +\eps ) \subseteq U_\lambda$ such that for $N \in \N$ large enough: for all $n \geq N$ $I_n \subseteq (\xi -\eps ,\xi +\eps )\subseteq U_\lambda$, hence there exists a finite cover for these $I_n$, which is the desired contradiction. Hence $[a,b]$ is compact.

We now connect the two notions of compactness.