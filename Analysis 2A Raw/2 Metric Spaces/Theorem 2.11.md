### [[Theorem 2.11]]

Let $(X,d)$ be a metric space. Then

- (1) $\emptyset$ and $X$ are open;
- (2) if $\{U_\lambda : \lambda \in \Lambda \}$ is any collection of open sets, then the union

  $$ \bigcup _{\lambda \in \Lambda } U_\lambda $$

  is open;

- (3) if $\{U_1, \ldots , U_N\}$ is a finite collection of open sets, then the intersection

  $$ \bigcap _{k = 1}^N U_k $$

  is open.

Proof. (1) Clearly $\emptyset$ is open. Moreover, for every $x \in X$, we have $B_1(x)=\{y \in X: d(x,y) < 1\} \subseteq X$, so $X$ is open.

(2) Let $x \in \bigcup _{\lambda \in \Lambda } U_\lambda$. Then there exists an $\lambda ^\ast \in \Lambda$ such that $x \in U_{\lambda ^\ast }$. As $U_{\lambda ^\ast }$ is open, there exists an $r > 0$ such that $B_r(x) \subseteq U_{\lambda ^\ast }$, and then

$$ B*r(x) \subseteq \bigcup *{\lambda \in \Lambda } U_\lambda . $$

(3) Let $x \in \bigcap _{k = 1}^N U_k$. Since every $U_k$ is open, there exist $r_1,\ldots ,r_N > 0$ with

$$ B*{r_1}(x) \subseteq U_1, \ldots , B*{r_N}(x) \subseteq U_N. $$

Define $r = \min \{r_1,\ldots ,r_N\}$. Then

$$ B*r(x) \subseteq B*{r_k}(x) \subseteq U_k, \quad k = 1,\ldots ,N, $$

and thus $B_r(x) \subseteq \bigcap _{k = 1}^N U_k$.