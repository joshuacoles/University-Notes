### Convergence in $\C$.

We can immediately extend to $\C$ the concepts of sequences and convergence of sequences and series.

If $(z_k)_{k\in \N }$ is a sequence in $\C$ and $z_0\in \C$, we say that $z_k\to z_0$ as $k\to \infty$ if

$$ \forall \, \varepsilon >0 \quad \exists \, N\in \N : \, k\geq N \Rightarrow |z_k-z_0|<\varepsilon . $$

(Note that we only replaced $\R$ with $\C$ and the absolute value in $\R$ with the modulus in $\C$.)

We can also express convergence in $\C$ in terms of convergence in $\R$: Indeed, since a sequence $(z_k)_{k\in \N }$ in $\C$ corresponds to two real sequences $(x_k)_{k\in \N }$ and $(y_k)_{k\in \N }$ of its real and imaginary parts, we have that $z_k$ converges if and only if the sequences $(x_k)_k$ and $(y_k)_k$ converge.

Concerning complex series, it is clear that $\sum _k z_k$ converges if and only if the real series $\sum _k x_k$ and $\sum _k y_k$ converge. Similarly, if $\sum _k z_k$ converges, then $z_k \to 0$, as in the real case.

Moreover, if the real series $\sum _k |z_k|$ converges (namely, if $\sum _k z_k$ converges absolutely), then the series $\sum _k z_k$ converges as well. In addition, if a complex series converges absolutely, then every rearrangement of the series converges, and they all converge to the same sum.