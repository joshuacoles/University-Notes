---
aliases: Permutations, Permutation, Symmetric Group
---

# Permutations

For a set $X$ we define the,

$$
\Sym(X) = \set{f \in X \to X \st f~\text{is bijective}}.
$$

Recall the following:

- For [[Bijection|Bijections]] $\sigma, \tau \in \Sym(X)$ their composition $\sigma \circ \tau$ is also Bijective and hence $\circ$ is [[Associative]] on $\Sym(X)$.
- $Id_X \in \Sym(X)$ is the identity of $\circ$.
- For a Bijection $\sigma \in \Sym(X)$ its inverse $(\sigma)^{-1}$ is also Bijective and in $\Sym(X)$.

Hence $(\Sym(X), \circ)$ forms a [[Group]] which if $X = J_n$ is known as the Symmetric Group on $n$ elements, $S_n$.

We know $\left|S_{n}\right| = n !$ . For example $S_{3}$ contains the permutation $\sigma : 123 \to 321$, which we can also depict by a ’crossing diagram’.

![[MA10209-web-figure13.svg]]

Lines join $i$ to $\sigma(i)$ and composition is given by stacking diagrams.

![[MA10209-web-figure14.svg]]

## Order

The **order** $ord(\sigma)$ of a Permutation $\sigma \in S_n$ is the smallest $m \in \Z^+$ such that $(\sigma)^{m} = Id$ .

## Types of Permutation

### Transposition

A **transposition** (or 2-cycle) interchanges precisely two elements

$$
(a b) : \begin{cases}
a\to b & \\ b\to a & \\ k\to k & k\notin\set{ a, b }
\end{cases}
$$

$$
((a b))^{-1} = (a b) \text{ and } ord (a b) = 2.
$$

### Elementary Transposition

An **elementary transposition** is $(i i + 1)$ .

### r-cycle

An **$r$ -cycle** $(a_1 a_2 \dots  a_r)$ cycles the listed elements

$$
a_{1} \to  a_{2} \to  a_{3} \to  \dots  \to  a_{r} \to  a_{1}
$$

and $k \to  k$ if $k \notin \set{ a_{1}, \dots , a_{r} }$. Then $((a_{1} \dots  a_{r}))^{- 1} = (a_{r} \dots  a_{1})$ and its order is  $r$ .

For example, $(1 2 4 3)$ has order $4$ and $((1 2 4 3))^{- 1} = (3 4 2 1) = (1 3 4 2)$ .

The permutations pictured earlier are $\sigma = (1 3)$, $\tau = (2 3)$ and $\tau \circ \sigma = (1 2 3)$ .

## Examples

1.  $S_2 = \set{Id, (1 2)}$
2.  In $S_3$, the 6 elements are $Id$ and three 2-cycles $(1 2), (1 3), (2 3)$ and two 3-cycles $(1 2 3), (1 3 2) = ((1 2 3))^{-1}$ .
3.  In $S_{4}$, have $Id$ and 6 2-cycles, 8 3-cycles, 6 4-cycles and 3 other elements of order 2:

    ![[MA10209-web-figure15.svg]]

```ad-note
Here and later we drop the Symbol $\circ$ and just write the composite as a product.
```

## Decomposition into Cycles

Every $\sigma \in S_{n}$ can be written uniquely (up to order) as a product (i.e. composite) of disjoint cycles; the order doesn’t matter as disjoint cycles commute.

For example, $\sigma : 1 2 3 4 5 6 \to  3 2 5 6 1 4$ becomes

$$
\sigma : 1 \to  3 \to  5 \to  1 ; 2 \to  2 ; 4 \to  6 \to  4,
$$

so $\sigma = (1 3 5) (2) (4 6)$, but usually omit 1-cycles, so $\sigma = (1 3 5) (4 6) = (4 6) (1 3 5)$ . We consider $Id$ is either an empty product of cycles or a product of $n$ 1-cycles.

Furthermore $ord \sigma = lcm \set{ \text{orders of its cycles} }$

## Decomposition into non-unique Elementary Transposition

Every $\sigma \in S_{n}$ can be written (not uniquely) as a product of elementary transpositions. For example, $\sigma = (1 3) = (1 2) (2 3) (1 2)$,

![[MA10209-web-figure16.svg]]

## Length of Permutation

For $\sigma \in S_{n}$, the ’length’ $len (\sigma)$ is

$$
\begin{align}
len(\sigma) &= \left|\set{(i, j) : 1 \le i < j \leq n \text{ and } \sigma (i) > \sigma (j) }\right| &  \\ & = & \text{\# pairs reversed by }\sigma
\end{align}
$$

- say $\sigma$ is even/odd when $len (\sigma)$ is even/odd.
- **sign** of $\sigma$

    $$

    sgn (\sigma) = ((- 1))^{len (\sigma)} = \begin{cases} +1 & \sigma\text{ even} \\ -1 & \sigma\text{ odd} \end{cases}


    $$

## Lemma 4.4, crossing diagram

For any crossing diagram $D$ representing $\sigma$,

$$
\text{number of crossings in }D \equiv len (\sigma) (mod 2) .
$$

Hence $sgn (\sigma) = ((- 1))^{\text{\# crossings}}$ .

Proof. We show that the contribution to each side, from each pair $(i, j)$ with $i < j$, is the same mod 2. The contribution to $len (\sigma)$ is 0 if $\sigma (i) < \sigma (j)$ and 1 if $\sigma (i) > \sigma (j)$ . On the other hand, since the order changes with each crossing, the number of crossings of the lines joining $i$ to $\sigma (i)$ and $j$ to $\sigma (j)$ is even if $\sigma (i) < \sigma (j)$ and odd if $\sigma (i) > \sigma (j)$ . □

### Example 4.5.

$Id$ is even and every transposition is odd. Indeed, $len (a b) = 2 (b - a - 1) + 1$ .

![[MA10209-web-figure17.svg]]

## Theorem 4.6. Sign of Product

The sign function $sgn : S_{n} \to \set{ \pm 1 }$ satisfies the product rule

$$
sgn (\sigma \tau) = sgn (\sigma) sgn (\tau) .
$$

Proof. If $\sigma$ has a crossing diagram with $s$ crossings and $\tau$ has a crossing diagram with $t$ crossings, then stacking the diagrams gives a diagram with $s + t$ crossings, so

$$
sgn (\sigma \tau) = ((- 1))^{s + t} = ((- 1))^{s} ((- 1))^{t} = sgn (\sigma) sgn (\tau)
$$

□

## Remark.

**(a)** If $\tau$ is a transposition, then $M_{\tau} : S_{n} \to S_{n} : \sigma \to  \tau \sigma$ is a bijection $\set{ \text{even perms} } \leftrightarrow \set{ \text{odd perms} }$. Hence # even perms = # odd perms = $n ! / 2$ .

**(b)** An $r$ -cycle

$$
\sigma = (a_{1} \dots  a_{r}) = \underset{r-1\text{ transpositions}}{\underbrace{(a_{1} a_{2})(a_{2} a_{3})\dots (a_{r - 1} a_{r})}} \text{e.g.}
$$

![[MA10209-web-figure18.svg]]

so $sgn \sigma = ((- 1))^{r - 1}$ .

**(c)** Even permutations are closed under composition, include $Id$ and $sgn ((\sigma)^{- 1}) = sgn (\sigma)$, so even permutations also form a group called the **alternating group** $A_{n}$ .
