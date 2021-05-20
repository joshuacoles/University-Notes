### [[Theorem 2.20]]

Let $(X,d)$ be a metric space. Then

- • $\emptyset$ and $X$ are closed;
- • if $\{F_\lambda : \lambda \in \Lambda \}$ is any collection of closed sets, then

  $$ \bigcap _{\lambda \in \Lambda } F_\lambda $$

  is closed; and

- • if $F_1, \ldots , F_N$ is a finite collection of closed sets, then

  $$ \bigcup _{k = 1}^N F_k $$

  is closed.

Proof. Again this is easily reduced to a theorem about open sets ([[Theorem 2.11]]), using [[Theorem 2.17]], since

$$ X\setminus \bigcap _{\lambda \in \Lambda } F_\lambda = \bigcup _{\lambda \in \Lambda } (X\setminus F_\lambda ) $$

and

$$ X\setminus \bigcup _{k = 1}^N F_k = \bigcap _{k = 1}^N (X\setminus F_k). $$