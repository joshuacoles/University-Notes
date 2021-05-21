### [[Theorem 2.23]]

Let $(X,d)$ be a metric space, $A\subset X$, and let $x\in X$. Then

$$ x\in \partial A \quad \Leftrightarrow \quad \forall \, r>0 \,\, \textrm {we have } \,\, B_r(x)\cap A\neq \emptyset \quad \textrm {and} \quad B_r(x)\cap (X\setminus A)\neq \emptyset . $$

Proof. “$\Rightarrow$": Let $x\in \partial A$. Either $x\in A$ or $x\in X\setminus A$. We assume that $x\in A$ and a similar argument works in the other case.

Since $x\in A$, then $x\notin X\setminus A$; but

$$ x\in \partial A\subset \overline {X\setminus A} = (X\setminus A)\cup (X\setminus A)’, $$

hence $x\in (X\setminus A)’$. By definition, for every $r>0$, $(B_r(x)\setminus \{x\})\cap (X\setminus A)\neq \emptyset$; on the other hand, since $x\in A$, $B_r(x)\cap A\neq \emptyset$.

In conclusion, we have the claim.

“$\Leftarrow$": Let $x\in X$. Either $x\in A$ or $x\in X\setminus A$. We assume that $x\in A$ and a similar argument works in the other case.

Since $x\in A\subseteq \overline A$, clearly $x\in \overline A$.

On the other hand, $x\notin X\setminus A$, but for every $r>0$, $B_r(x) \cap (X\setminus A) \neq \emptyset$, which equivalently means that for every $r>0$, $(B_r(x)\setminus \{x\})\cap (X\setminus A)\neq \emptyset$, since $x\notin X\setminus A$. By definition, $x\in (X\setminus A)’$, and since $(X\setminus A)’\subseteq \overline {X\setminus A}$, we have the claim.