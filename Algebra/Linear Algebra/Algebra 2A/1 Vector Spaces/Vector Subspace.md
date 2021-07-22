---
aliases: 
- Subspace
- Subspaces
- Vector Subspace
- Vector Subspaces
- Linear Subspace
- Linear Subspaces
---

# Vector Subspace

A **Vector Subspace** of 

. A _vector_ (or _linear_) _subspace_ of a vector space $V$ over $\F$ is a non-empty subset $U\sub V$ which is closed under addition and scalar multiplication: whenever $u,u_1,u_2\in U$ and $\lambda \in \F$, then $u_1+u_2\in U$ and $\lambda u\in U$.

In this case, we write $U\leq V$.

Say that $U$ is _trivial_ if $U=\set {0}$ and _proper_ if $U\neq V$.

Of course, $U$ is now a vector space in its own right using the addition and scalar multiplication of $V$.

- Exercise.2 $U\sub V$ is a subspace if and only if $U$ satisfies the following conditions:

  - 1. $0\in U$;
  - 2. For all $u_1,u_2\in U$ and $\lambda \in \F$, $u_1+\lambda u_2\in U$.

  This gives a efficient recipe for checking when a subset is a subspace.

###### Examples

. A good way to see that something is a vector space is to see that it is a subspace of some $V^{\cI }$. That way, there is no need to verify all the tedious axioms (associativity, distributivity and so on).

- 1. The set $c:=\set {\text {real convergent sequences}}\leq \R ^{\N }$ and so is a vector space. This is part of the content of the Algebra of Limits Theorem in Analysis 1.
- 2. Let $[a,b]\sub \R$ be an interval and set

  $\seteqnumber{0}{1.}{0}$

  $$ C^0[a,b]:=\set {f:[a,b]\to \R \st \text {$f$ is continuous}}, $$

  the set of continuous functions.

  Then $C^0[a,b]\leq \R ^{[a,b]}$. This is most of the Algebra of Continuous Functions Theorem from Analysis 1.

2 Question 1 on sheet 1.