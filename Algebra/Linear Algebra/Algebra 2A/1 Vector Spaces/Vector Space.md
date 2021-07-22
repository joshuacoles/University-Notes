---
aliases:
- Vector Spaces
---

# Vector Space

> Algebra 1B, §2.1:

A **Vector Space** $V$ over a [[Field]] $\F$ is a set $V$ and two operators.

- Addition, $+ : V \times V \to V$ with respect to which $(V, +)$ is an [[Abelian Group]]. Thus with axioms,
    - Associativity of vector addition $v + w = w + v$.
    - Commutativity of vector addition $u + (v + w) = (u + v) + w$.
    - Zero element (additive identity) $0 \in V$ such that $v + 0 = v = 0 + v$.
    - Existence of inverse, each element $v \in V$ has an _additive inverse_ $-v \in V$ for which $v + (-v) = 0 = (-v) + v$.
- Scalar Multiplication, $\dp : V \times \F \to V$
    - $(\lambda + \mu)v = \lambda v + \mu v$.
    - $\lambda (v + w) = \lambda v + \lambda w$.
    - $(\lambda \mu) v = \lambda (\mu v)$.
    - $1 v = v$, for all $v\in V$.

## Examples

1. A [[Field]] $\F$ is itself a Vector Space, inheriting the filed operations $+$ and $\dp$. ^15cd03
2. The tuple $\F^n$ formed from the [[Cartesian Product]] of $\F$ with itself is a field with addition and scalar multiplication defined component wise.
	- This in-fact extends to all finite Cartesian Products of Fields $\lst\F 1n$ as components remain exclusive.
3. The set of matrices over $\F$ given by $M_{n\cp m}(\F)$ is a Field operators  defined element-wise.

[[Function Index Vector Spaces]]