---
aliases: Group Actions
---

# Group Action

Let $G$ be a [[Group]] and $X$ a set. An **action of $G$ on $X$** is a map

$$
G \times X \to X :
(g, x) \to g \dp x
$$

satisfying $\Forall g,h \in G, x,y \in X$:

1. Compatibility with group action, $(g h) \cdot x = g \cdot (h \cdot x)$
2. Identity $e \in G$, $\forall x \in X, e \cdot x = x$

From these we can determine trivially (see [[#Action of Inverse]])

1. For all $g \in G$, $\forall x, y \in X, y = g \cdot x \to x = g^{- 1} \cdot y$

Further, we say $G$ acts **Faithfully** on $X$ if

$$
\Forall x \in X, g \dp x = x \iff g = e
$$

## Examples

### (a)

If $H$ is a [[Subgroup]] of a Group $G$, then $H$ acts faithfully on $G$ by multiplication $h \cdot g = h g$.

The action axioms follow from the group axioms: 

- (A1) is (G1)
- (A2) is (G2) and (A3) is the cancellation law.

This includes the special case $H = G$, that is, every group acts faithfully on itself.

### (b)

The group $G = (GL)_n (\F)$ acts on $X = (\F)^n$ by matrix multiplication on column vectors, i.e. $A \cdot x = A x$, because

(A1): $(A B) x = A (B x)$ (A2): $I x = x$

This action is also faithful because the map $(\phi)_{A} : x \to A x$ (as in Sec. 3.2) determines the matrix $A$, in particular $(\phi)_{A} = (Id)_{X}$ if and only if $A = I$ .

## Action of Inverse

This is sometimes called the 3rd axiom of Group Actions, but is gives as a consequence of the other 2 and the Group Axioms themselves. It is,

1. For all $g \in G$, $\forall x, y \in X, y = g \cdot x \to x = g^{- 1} \cdot y$

### Proof

Suppose that $y = g \cdot x$, then

$$
\begin{align}
g^{-1} \dp y
&= g^{-1} \dp (g \cdot x) \\
&= (g^{-1} g) \cdot x\tag{by A1} \\
&= e \cdot x \tag{by G3} \\
&= x \tag{by A2}
\end{align}
$$

## Proposition 4.41.

An action of $G$ on $X$ determines a Homomorphism

$$
\Phi : G \to Sym (X) : g \to (\phi)_{g}
$$

where $(\phi)_{g} (x) = g \cdot x$ and every such homomorphism arises from a unique action.

Further, $G$ acts faithfully on $X$ if and only if $\Phi$ is injective.

Proof. The first step is to show that $\Phi$ has the stated codomain, i.e. that $(\phi)_{g}$ is a bijection. Indeed we show that $(\phi)_{g}$ has two-sided inverse $(\phi)_{g^{- 1}}$, i.e. $(\phi)_{g^{- 1}} \circ (\phi)_{g} = (Id)_{X} = (\phi)_{g} \circ (\phi)_{g^{- 1}}$, i.e.

$$
\forall x \in X, g^{- 1} \cdot (g \cdot x) = x = g \cdot (g^{- 1} \cdot x) .
$$

The first equality is (A2x) and the second is also, after swapping $g$ and $g^{- 1}$, as $((g^{- 1}))^{- 1} = g$ . Then (A1) says $(\phi)_{g h} = (\phi)_{g} \circ (\phi)_{h}$, that is, $\Phi$ is a homomorphism.

Conversely, if $\Phi$ is a homomorphism, then we can define $g \cdot x = (\phi)_{g} (x)$ and (A1) holds, as does (A2) as that says $\Phi (e) = (\phi)_{e} = (Id)_{X}$ [Lemma [4.22](#x8-19003r22)(a)]. Finally, (A3) says

$$
(\phi)_{g} = (Id)_{X} \to g = e,
$$

that is, $Ker \Phi = \set{ e }$, which is equivalent to saying that $\Phi$ is injective [Prop. [4.27](#x8-19010r27)]. □

Remark.

If $G$ acts faithfully on some set $X$, then $\Phi : G \to Sym (X)$ is injective, so $G \cong im (\Phi)$, which is a subgroup of $Sym (X)$ . Such a subgroup can (and will) be called a **transformation group**.

## Corollary 4.42 (Cayley’s Theorem).

Every group is isomorphic to a transformation group.

Proof. The faithful action of a group $G$ on itself by multiplication, as in Example [4.39](#x8-21002r39)(a), determines an injective homomorphism $\Phi : G \to Sym (G)$ [Prop. [4.41](#x8-21005r41)]. Hence $G \cong im (\Phi)$ and $im (\Phi) \leq Sym (G)$, that is, it is a transformation group. □

Definition 4.43.

If $G$ acts on $X$ and $x \in X$, then the **orbit** of $x$ is $G \cdot x = \set{ g \cdot x : g \in G }$.

For example, with the action of $H \leq G$ on $G$ by multiplication in Example [4.39](#x8-21002r39)(a), the orbit $H \cdot g$ is precisely the right coset $H g$ .

## Proposition 4.44.

The orbits $\set{ G \cdot x : x \in X }$ form a partition of $X$ .

Proof. We note that $G \cdot x = \left[ x \right]$, for the relation

$$
y sim x \Leftrightarrow \exists g \in G : y = g \cdot x,
$$

so we need to prove that this is an equivalence relation.

(R) $x sim x$, as $x = e \cdot x$, by (A2).

(S) if $x sim y$, i.e. $x = g \cdot y$ for some $g \in G$, then $y sim x$, as $y = g^{- 1} \cdot x$, by (A2x).

(T) if $x sim y$ and $y sim z$, i.e. $x = g \cdot y$ and $y = h \cdot z$ for $g, h \in G$, then

$$
x = g \cdot (h \cdot z) = (g h) \cdot z,
$$

by (A1), so $x sim z$ . □

Note that, in general, the sizes of different orbits can be different, so the case of cosets has some additional special features.

## Example 4.45.

**(a)** If $g \in Sym (X)$ is some permutation of $X$, then $inc : \left<g\right> \to Sym (X)$ gives an action of the cyclic group $\left<g\right>$ on $X$ . The orbits are the cycles (including 1-cycles) in the cycle notation for $g$ . See also Example 1.40, where this is described using an (essentially equivalent) action of $ℤ$ on $X$ written as $n \cdot x = g^{n} (x)$ .

**(b)** If $H \leq G$, then a second action of $H$ on $G$ is by $h \cdot g = g h^{- 1}$, as we can check:

$$
\begin{align}
h\cdot(k \cdot g) & = & h\cdot(g k^{- 1}) &  \\ & = & gk^{- 1}h^{- 1} &  \\ & = & g((h k))^{- 1} &  \\ & = & (h k)\cdot g
\end{align}
$$

and $e \cdot g = g e^{- 1} = g e = e$ . The orbits are the left cosets $g H$, as $\set{ h^{- 1} : h \in H } = H$ .

**(c)** Another action of $G$ on itself is by **conjugation** $h \cdot g = h g h^{- 1}$ (Exercise). The orbits are called **conjugacy classes**.
