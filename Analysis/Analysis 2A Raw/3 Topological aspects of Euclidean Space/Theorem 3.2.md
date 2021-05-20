### [[Theorem 3.2]]

(Bolzano-Weierstrass) Every bounded sequence in $\R ^n$ has a convergent subsequence.

Proof. Let $(x_k)_{k\in \N }$ be a bounded sequence in $\R ^n$ (namely there exists $M>0$ such that $\|x_k \| \leq M$ for every $k\in \N$) with $x_k = (x_k^{(1)},\dots ,x_k^{(n)})$. Note that for any $i = 1,\dots ,n$, we have $|x_k^{(i)}| \leq \|x_k\|$ (indeed we have seen that $\|\cdot \|_\infty \leq \|\cdot \|_2$), so the sequence $(x_k^{(i)})_{k\in \N }$ is bounded in $\R$.

By the Bolzano-Weierstrass theorem in $\R$, there exists a convergent sub-sequence of $(x_k^{(1)})_{k\in \N }$. That is, there exists an infinite subset $\Lambda _1\subset \N$ such that $(x_k^{(1)})_{k\in \Lambda _1}$ is convergent. Let $x_0^{(1)}$ denote its limit.

Now $(x_k^{(2)})_{k\in \Lambda _1}$ is a bounded sequence in $\R$ as well. Apply the same arguments to obtain an infinite set $\Lambda _2\subset \Lambda _1$ such that $(x_k^{(2)})_{k\in \Lambda _2}$ is convergent with limit $x_0^{(2)}$. Note that $(x_k^{(1)})_{k\in \Lambda _2}$, being a subsequence of a convergent sequence, still converges to $x_0^{(1)}$.

Apply the same arguments to the remaining coordinates in turn, constructing infinite subsets $\N \supset \Lambda _1\supset \dots \supset \Lambda _n$ chosen such that $x_k^{(i)}\to x_0^{(i)}$ as $k\to \infty$ while $k\in \Lambda _i$ for $i=1,\dots ,n$.

Then for $(x_k)_{k\in \Lambda _n}$, all the coordinates converge, hence the subsequence is convergent in $\R ^n$ (since $\|\cdot \|_2\leq \sqrt n \|\cdot \|_\infty$).