# 2.1 Basics of abstract linear algebra

## Definition 1.  
A vector space over a field $\F$ is an additive group $(V, +, 0)$ equipped with scalar multiplication

$$
\F \times V arrow V, (\lambda, v) arrow tail \lambda v
$$

such that $\forall\lambda,\mu\in\F$, $v,w\in V$,

1.

$\lambda(v + w)=\lambda v+\lambda w$ (i.e., $\lambda:(V, +)arrow(V, +)$ is a group homomorphism);

2.

$(\lambda + \mu)v=\lambda v+\mu v$ (i.e., $v:(\F, +)arrow(V, +)$ is a group homomorphism);

3.

$(\lambda \mu)v=\lambda(\mu v)$ ;

4.

$1v=v$ .

Because $+$ is associative and commutative, we can take general linear combinations: for $(\lambda)_{1},\dots,(\lambda)_{n}\in\F$ and $v_{1},\dots,v_{n}\in V$,

$$
\sum_{i = 1}^{n} (\lambda)_{i} v_{i} = (\lambda)_{1} v_{1} + \dots  + (\lambda)_{n} v_{n} \in V .
$$

Notation We denote elements of $(\F)^{n}$ by variables in bold font, e.g.  $v$ (or underlined in handwriting), and elements of an abstract vector space $V$ in ordinary font, e.g.  $v$ . We don’t usually distinguish additive identity $0\in\F$ and $0\in V$ .  

Recall Lemma 4.25 from Algebra 1A, if $f:Garrow H$ is a group homomorphism, then $f(0_{G})=0_{H}$ and $f(- g)=-f(g)$, where $G$ and $H$ are additive groups.

## Lemma 2.  
For any $\lambda\in\F,v\in V$,

1.

$\lambda 0=0$ and $\lambda(- v)=-(\lambda v)$ .

2.

$0v=0$ and $(- \lambda)v=-(\lambda v)$ .

In particular, $(- 1)v=-v$ .

3.

If $\lambda v=0$ then either $\lambda=0$ or $v=0$ .

### Proof

1.

Axiom (1) says the map $varrow tail\lambda v$ is a homomorphism of additive groups $Varrow V$, so preserves identity and inverses, by Algebra 1A Lemma 4.25.

2.

Axiom (2) says the map $\lambdaarrow tail\lambda v$ is a homomorphism of additive groups $\Farrow V$, so preserves identity and inverses, again by Algebra 1A Lemma 4.25.

In particular,

$$
(- 1) v = - v \text{by (4)} .
$$

3.

If $\lambda\neq 0$, then $\exists(\lambda)^{- 1}\in\F$ . So, if $\lambda v=0$, then 
$$
\begin{align}
v &=1v\text{axiom (4)} \\ &=((\lambda)^{- 1} \lambda)v \\ &=(\lambda)^{- 1}(\lambda v)\text{axiom (3)} \\ &=(\lambda)^{- 1}(0) \\ &=0.\text{by (a)} \square
\end{align}
$$

## Example 3.  

1.

$(\F)^{n}$ : vector space axioms follow from field axioms, as the addition and scalar multiplication are defined component-wise.

Convention: $(\F)^{0}=\{ 0 \}$ the smallest vector space.

2.

$M_{m, n}(\F)$ (similar to $(\F)^{m n}$) is a vector space.

3.

$\F[ X ]=\{ \text{polynomials in  }X\text{ with coefficients in  }\F \}$.

E.g. in $(\F)_{3}[ X ]$ (where $(\F)_{3}=\Z_{3}$),

$$
2 (X^{3} + 2 X) + (X + 1) = 2 X^{3} + 5 X + 1 = 2 X^{3} + 2 X + 1 .
$$

4.

For any set $S$

$$
\R^{S} = \{ \text{functions  }f:Sarrow\R \}
$$

under ‘pointwise’ operations. That is, $\forall f,g\in\R^{S}$ and $\lambda\in\R$, the functions $f+g$ and $\lambda f$ are defined by

$$
\begin{align}
 (f + g)(x)=f(x)+g(x),\forall x\in S;  \\ (\lambda f)(x)=\lambda f(x),\forall x\in S. 
\end{align}
$$
