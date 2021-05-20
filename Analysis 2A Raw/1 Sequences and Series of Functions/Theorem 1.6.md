### [[Theorem 1.6]]

(Weierstrass $M$-test) Let $(f_k)_{k\in \mathbb {N}}$ be a sequence of functions, $f_k:A\to \R$, and suppose that for every $k\in \N$ there exists a constant $M_k>0$ such that

$$ |f*k(x)| \leq M_k \quad \textrm {for every } x\in A, \quad \sum *{k=1}^\infty M_k <\infty . $$

Then the series $\sum _k f_k$ converges uniformly on $A$.

Proof. Since $\sum _k M_k$ converges, the Cauchy criterion for real series (analogue of [[Theorem 1.5]] for real series) ensures that for any $\varepsilon >0$ there exists $N\in \N$ such that for $j>m>N$ one has

$$ \sum _{k=m+1}^j M_k < \varepsilon . $$

Then, by the bound on $\sup _A|f_k|$ we immediately deduce that for $j>m>N$

$$ \Bigg | \sum _{k=m+1}^j f_k(x)\Bigg | \leq \sum _{k=m+1}^j M_k < \varepsilon \quad \forall \, x\in A. $$

Then the claim follows directly from [[Theorem 1.5]].

This theorem shows the value of the Cauchy condition: We can prove uniform convergence of the series without having to know what its sum is.