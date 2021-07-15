---
aliases: Partition Function, Partitions
---

# Partition

A **Partition** of a set $A$ is a subset $Q \sub \calP(A) \setminus \set{\emptyset}$, ie. a collection of non-empty subsets of $A$. Defined such that for all $a \in A$, there is a unique $X \in Q$ such that $a \in X$ (in other words, the subsets are disjoint and their union is $A$).

$$
\bigcup_{q \in Q} q = A
\quad\land\quad
\bigcap_{q \in Q} q = \varnothing
$$

We define the Partition Function,

$$
\begin{align}
q : A &\to Q \\
q :  a &\mapsto  q(a) \quad\st a \in q(a)
\end{align}
$$

## Examples

For example, if $A = \set{ 1, 2, 3, 4, 5 }$, then $Q = \set{ \set{ 1, 3, 5 }, \set{ 2, 4 } }$ is a partition of $A$, but $Q = \set{ \set{ 1, 2 }, \set{ 3, 4 } }$ is not, nor is $Q = \set{ \set{ 1, 2 }, \set{ 2, 3 }, \set{ 3, 4 }, \set{ 4, 5 } }$.