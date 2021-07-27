---
aliases: Equivalence Relations
---

# Equivalence Relation

As for functions, a relation $\sim$ on a set $A$ (such as $\leq$ of $ℝ$ ) can be characterised by its graph, that is, $\set{(a, b)\in A \times A : a \sim b }$. In other words, two relations on the same set $A$ are equal if and only if their graphs are equal (as subsets of $A \times A$ ).

Let $\sim$ be a relation on a set $A$ be:

1. **[[Reflexive]]** *iff* $\Forall a \in A : a \sim a$.
2. **[[Symmetric]]** *iff* $\Forall a, b \in A : a \sim b \implies b \sim a$.
3. **[[Transitive]]** *iff* $\Forall a, b, c \in A : a \sim b \land b \sim c \Rightarrow a \sim c$.

When all of these hold we call $\sim$ an Equivalence Relation.

## Examples

1. On any set, $=$ is an equivalence relation.

2. The relation $\leq$ on $ℝ$ is reflexive and transitive, but **not** symmetric. The relation $<$ on $ℝ$ is just transitive.

3. On $\calP(A) \setminus \set{∅}$ define $\sim$ to be ’overlaps’, that is, $X \sim Y$ iff $X \cap Y \neq ∅$ . This is reflexive and symmetric, but not transitive.

4. The relation $\cong$ on $P (A)$ for any set $A$ (see Section [1.3](#x5-70001.3)).
	1. For any set $A$, there is an equivalence relation on $P (A)$ given by $\cong$ as in Def. [1.26](#x5-7004r26). Equivalence classes classes consist of sets of the same size. Conceptually, $\cong$ is an equivalence relation on sets, but not formally, because there is no set of all sets.

### Equality Through Function

Let $f : A \rightarrow B$ be any function. Define $\sim$ on $A$ by $x \sim y$ iff $f (x) = f (y)$ .

- [[Reflexive]] $f (x) = f (x)$,
- [[Symmetric]] $f (x) = f (y) \Rightarrow f (y) = f (x)$ ,
- [[Transitive]] $f (x) = f (y)$ and $f (y) = f (z) \Rightarrow f (x) = f (z)$ .

Think of $\sim$ as ’ $=$ ’ pulled back from $B$ .

### Finite Combination of Permutations

Let $f : A \to A$ be a [[Bijection]] from a finite set $A$ to itself (also called a [[Permutation]] of $A$ ). We can then define $f^n : A \to A$, for any $n \in \Z$, by

$$
f^{n} = \begin{cases}
\underset{n ~ \text{times}}{\underbrace{
	f \circ \dots \circ f
}} & n > 0

\\\\

(Id)_A & n = 0

\\\\

\underset{-n ~ \text{times}}{\underbrace{
	f^{-1} \circ \dots \circ f^{-1}}
} & n < 0
\end{cases}
$$

One can check the power laws $f^{n} \circ f^{m} = f^{n + m}$ and $((f^{n}))^{m} = f^{n m}$, for all $n, m \in ℤ$ .

Consider the relation,

$$
a \sim b
\quad\iff\quad
\Exists n \in \Z \quad \st a = f^n(b)
$$

- [[Reflexive]], clearly with $n = 0$, $a=f^{0}(a)$.
- [[Symmetric]], by the power laws above, $a = f^n(b) \implies b = f^{-n}(a)$.
- [[Transitive]] again by power laws, $a = f^n(b) \land b = f^{m}(c) \implies a = f^{n + m}(c)$.

The equivalence classes are called *orbits* of $f$ and these are finite, as $A$ is finite. This helps give a simple picture of the action of $f$, because it must ‘cycle’ the elements in each orbit, that is,

$$
f: a_1 \to a_2 \to \dots \to  a_n \to a_1
$$

Note that the cycle must return to the beginning, because $f$ is injective and every other element in it has a predecessor. i.e. $a_{k} = f (a_{k - 1})$ unless $k = 1$.