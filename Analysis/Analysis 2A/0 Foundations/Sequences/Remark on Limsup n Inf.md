### [[Remark on Limsup n Inf]]

It can be shown using the last proposition that



$$ \begin{align*} \limsup *{k\to \infty } \alpha _k&=\mathrm {max}\left \{\lim *{n\to \infty } \alpha *{k_n}: (\alpha *{k_n})_n \,\, \text {is a convergent subsequence} \right \} \end{align*} $$ so that $\limsup _{k\to \infty } \alpha _k$ is the largest of the subsequential limits of $(\alpha _k)$. To see this, let $(\alpha _{k_n})_{n\in \N }$ be a convergent subsequence of $(\alpha _k)_{k\in \N }$ with limit $l$ as $n\rightarrow \infty$. Then by [[Properties of limsup & liminf]] , for any $\epsilon >0$, there exists $N\in \N$ such that

$$ L*1 -\epsilon < \alpha *{k_n} < L_2+\epsilon \ \ \forall n\geq N. $$

Passing to the limit $n\rightarrow \infty$ we obtain $L_1-\epsilon \leq l \leq L_2+\epsilon$ and by the arbitrariness of $\epsilon >0$ it follows that $L_1\leq l\leq L_2$. Finally, we can use [[Properties of limsup & liminf]] to construct a subsequence converging to $L_2$, it follows then that $L_2$ is itself the limit of a subsequence and hence $\limsup _{k\rightarrow \infty }(\alpha _k)$ is the **largest** subsequential limit of $(\alpha _k)_k$. Similarly,



$$ \begin{align*} \liminf *{k\to \infty } \alpha _k&= \mathrm {min}\left \{\lim *{n\to \infty } \alpha *{k_n}: (\alpha *{k_n})_n \,\, \text {is a convergent subsequence} \right \} \end{align*} $$ so that $\liminf _{k\to \infty } \alpha _k$ is the **smallest** of the subsequential limits of $(\alpha _k)$.

Proof. For (1), let $(\alpha _{k_n})_n$ be a convergent subsequence with limit $\ell$. By proposition 0.6 part (3), for any $\epsilon >0$, there exists $N \in \N$ such that for all $n \geq N$

$$ \alpha _{k_n} < L_2 +\epsilon . $$

Taking the limit yields

$$ \alpha _{k_n} \to \ell \leq L_2 +\epsilon , $$

as $\epsilon$ was arbitrary we have $\ell \leq L_2$. Next we construct a subsequence that converges to $L_2$. By proposition 0.6 part (4), we can find $\alpha _{k_n}\to L_2$. Both parts combined, give that $\limsup _{k\to \infty } \alpha _k$ is the largest of the subsequential limit. The proof for $\liminf _{k\to \infty } \alpha _k$ is similar.

We recall some main results relating to convergence of series in $\R$.