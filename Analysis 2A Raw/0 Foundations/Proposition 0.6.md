### [[Proposition 0.6]]

(Properties of $\limsup$ and $\liminf$) Let $(\alpha _k)_k$ be a real sequence; let $L_1:= \liminf _{k\to \infty } \alpha _k$ and $L_2:= \limsup _{k\to \infty } \alpha _k$. Suppose further that $L_1,L_2\in \R$. Then

- (1) For every $\varepsilon >0$ there exists $N\in \N$ such that

  $$ \alpha _k > L_1 - \varepsilon \quad \forall \, k\geq N, $$

  namely only a finite number of elements is smaller than $L_1 - \varepsilon$.

- (2) For every $\varepsilon >0$ there exist infinitely many $k\in \N$ such that

  $$ \alpha _k < L_1+\varepsilon . $$

Similarly

- (3) For every $\varepsilon >0$ there exists $N\in \N$ such that

  $$ \alpha _k < L_2+\eps \quad \forall \, k\geq N, $$

  namely only a finite number of elements is larger than $L_2 + \varepsilon$.

- (4) For every $\varepsilon >0$ there exist infinitely many $k\in \N$ such that

  $$ \alpha _k > L_2-\eps . $$

Proof. For (1), use the meaning of the limit in the definition of $\liminf$: Given $\eps >0$ there exists $N \in \N$ such that for all $k \geq N$



$$  \inf \{ \alpha _m : m \geq k\}>L_1-\eps $$

Then use that $\inf$ is a lower bound:



$$  \alpha _k \geq \inf \{ \alpha _m : m \geq k\} $$

Combining (0.2) and (0.3) yields $\alpha _k > L_1 -\epsilon$. For (2) argue by contradiction. Assume there are only finitely many $\alpha _k$ with $\alpha _k < L_1 +\epsilon$, so there exists $N \in \N$ such that for all $n \geq N$

$$ \alpha _n \geq L_1+\epsilon . $$

Hence

$$ \inf \{ \alpha _m : m \geq N\} \geq L_1+\epsilon , $$

which is a contradiction. (3) and (4) follow along the same line as (1) and (2).