# Ring of Congruence Classes

Let $\sim$ be a [[Congruence on a Ring|Congruence]] on a [[Ring]] $R$. Define addition and multiplication on the set $R/\sim$ of [[Equivalence Classes]] as follows: for $a, b \in R$, define

$$
[a]+ [b] := [a + b]
\quad \text { and }\quad
[a]\cdot [b]:= [a \cdot b].
$$

Then $(R/\sim, +, \cdot)$ is a Ring with zero element $[0]$, and it is [[Commutative]] if $R$ is Commutative.

## Proof

We first check that addition and multiplication are well-defined for equivalence classes. For this, consider alternative representatives of the equivalence classes $[a]$ and $[b]$, say $a’ \in R$ satisfying $[a] = [a’]$ and $b’ \in R$ satisfying $[b] = [b’]$. Then

$$
\begin{align}
[a’] + [b’]
&= [a’ + b’] 	&\text{ by definition} \\
&= [a + b] 		&\text{ by the congruence property} \\
&= [a] + [b]	&\text{by definition,}
\end{align}
$$

and similarly

$$
\begin{align}
[a’] \cdot [b’]
&= [a’ \cdot b’] 	&\text{ by definition} \\
&= [a \cdot b] 		&\text{ by the congruence property} \\
&= [a] \cdot [b]	&\text{by definition}
\end{align}
$$

as required. This means that addition and multiplication define binary operations on the set $R/\sim$ of equivalence classes.

We now check that all the ring axioms hold.

1.  $(R/{\sim },+)$ is an abelian group. We could check each condition by hand, but it is easier to note that $[0]$ is a subgroup of $(R,+)$ and furthermore (because $(R,+)$ is an abelian group) it is a normal subgroup: so $(R/{\sim },+)$ is nothing but the quotient group $(R,+)/[0]$.
    
2.  To check that $(R/{\sim },\cdot )$ is associative, note that for $a, b, c\in R$ we have
    
    $$ ([a]\cdot [b])\cdot [c]=[ab]\cdot [c]=[(ab)c]=[a(bc)]= [a]\cdot [bc]=[a]\cdot ([b]\cdot [c]). $$
    
3.  To check that $R/{\sim }$ satisfies the distributive laws, note that for $a, b, c\in R$ we have
    $$ \begin{eqnarray*} [c]\cdot ([a]+[b]) = [c]\cdot [a+b] & = & [c(a+b)] \\ & = & [ca+cb] \\ & = & [ca]+[cb] \\ & = &[c]\cdot [a]+[c]\cdot [b]. \end{eqnarray*} $$
    
    One proves that $([a]+[b])\cdot [c] = [a]\cdot [c]+[b]\cdot [c]$ similarly.
    
4.  $[1]\in R/{\sim }$ is a multiplicative identity because
    
    $$ [a]\cdot [1] = [a\cdot 1] = [a] = [1\cdot a]=[1]\cdot [a]. $$

Finally, if $R$ is Commutative then $[a] \cdot [b] = [a \cdot b] = [b \cdot a] = [b] \cdot [a]$, so $R/\sim$ is Commutative.
