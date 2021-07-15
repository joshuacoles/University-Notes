# Subrings

> Definition 1

A nonempty subset $S$ of a [[Ring]] $R$ is called a **Subring** if and only if, for any $a, b \in S$ we have both $a + b \in S$ and $a b \in S$.

> #programming-note this was originally $a - b$ but are equivalent: $a - b \in S$, re-write $\Forall b \in S \to \Forall (-b) \in S$ and hence $a + b$.

> Definition 2

**1.31 Lemma.** Let $S$ be a subset of a ring $(R,+, \cdot )$. Then $S$ is a subring of $R$ if and only if $(S,+,\cdot )$ is satisfies I.11(i)–(iii) of a ring.

In other words, a subring is a subset that happens to be a ring, **but not necessarily with a $1$.** This is an inconvenience of our convention that “ring” means “unital ring”, but it is what we want.

## Examples

1. For any ring $R$, both $\set{0}$ and $R$ are subrings of $R$.
    
2. The ring $\Z$ is a subring of $\Q$ which is a subring of $\R$ which is a subring of $\C$, under the usual operations of addition and multiplication.
    
3. The even integers $2\Z$ are a subring of $\Z$. By Lemma I.31 the even integers therefore form a ring but not necessarily with a $1$: and indeed $1$ is odd. (But $0$ is even, a fact that seems to be poorly understood.) So a subring does not have to be a ring in the full sense of satisfying I.11(iv) as well. #check
    
4. If $R$ is any ring and $t$ is a variable, then $R$ is a subring of $R[t]$ which is a subring of $R[[t]]$. In this case, the subrings really are rings.
    
5. The Gaussian integers $\Z[i] = \{a+bi \in \C \mid a, b\in \Z \}$ form a subring of the field $\C$: also $1 = 1+0i\in \Z [i]$, so $\Z [i]$ is a ring.
    

The notation $\Z [i]$ is not incompatible with the notation for polynomial rings: unlike $t$, $i$ is not a variable, but in any case,

$$ \sum _{k=0}^da_k i^k = \left (\sum _{l=0}^{\lceil d/4\rceil }(a_{4l}-a_{4l+2})\right )+i \left (\sum _{l=0}^{\lceil d/4\rceil }(a_{4l+1}-a_{4l+3})\right ) \in \Z [i]. $$

**1.33 Lemma.** If a subring $S$ of an integral domain $R$ contains the element $1 \in R$, then $S$ is an integral domain.