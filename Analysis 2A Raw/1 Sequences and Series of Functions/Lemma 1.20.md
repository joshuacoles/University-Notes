### [[Lemma 1.20]]

Let $f: [a,b]\times \R \to \R$, $(x,t)\mapsto f(x,t)\in \R$, be a continuous function. Then

$$ F:\R \to \R , \quad F(t):= \int _a^b f(x,t) dx $$

is continuous.

Proof. Let $t_0\in \R$ and $r>0$, and let $\varepsilon >0$. Since the function $f$ is uniformly continuous in $[a,b]\times [t_0-r, t_0+r]$, we have that there exists $\delta =\delta (\varepsilon ,t_0)$ such that

$$ \|(x,t)-(y,s)\|<\delta \, \Rightarrow \, |f(x,t)-f(y,s)|<\varepsilon $$

for every $(x,t),(y,s) \in [a,b]\times [t_0-r, t_0+r]$. Now let $h\in \R$, with $|h|<\min \{r,\delta \}$, and consider

$$ F(t_0+h) - F(t_0) = \int _a^b \big (f(x,t_0+h) - f(x,t_0)\big ) dx. $$

Since, clearly, $\|(x,t_0+h) - (x,t_0)\| \leq |h|$, by uniform continuity we have

$$ |f(x,t_0+h) - f(x,t_0)|<\varepsilon . $$

This implies, in terms of $F$, that

$$ |F(t_0+h)-F(t_0)| \leq (b-a) \varepsilon , $$

which gives the continuity of $F$ at $t_0$.