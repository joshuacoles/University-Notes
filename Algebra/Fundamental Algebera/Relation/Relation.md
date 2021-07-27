# Relation

A **Relation** $\sim$ on a Set $A$ can be characterised (as with functions) by its Graph, that is, 

$$
\set{(a, b) \in A \cp A : a \sim b }.
$$

This can be defined in terms of a boolean function,

$$
\sim_\mathbb{B} : A \times A \to \mathbb{B} \quad\qquad
(a, b) \mapsto \begin{cases}
\mathrm{T} &\text{if}~ a \sim b\\
\mathrm{F} &\text{otherwise.} \\
\end{cases}
$$

Relation equality is defined in terms of their associated Graphs.

A special type of Relation is the [[Equivalence Relation]].