---
aliases: Homomorphisms, Homomorphism
---

# Homomorphisms

Let $G$ and $H$ be [[Group|Groups]]. A map $\alpha : G \to H$ is a **Homomorphism** if

$$
\Forall g, h \in G : \alpha (g h) = \alpha (g) \alpha (h)
$$

ie $\alpha$ is **compatible** with the Group Operation.

```ad-note
The LHS product is in $G$, right-hand product is in $H$.
```

## Examples

### Exponentiation of $(\Z, +)$

Power map for $g \in G, \alpha : \Z \to G : m \to  g^m$ is a Homomorphism, when $\Z$ is an additive group, as $g^{n + m} = g^{n} g^{m}$ .

If $g$ has order $n$, then this reduces a bijective Homomorphism $\Z_n \to \left<g\right>$, since the induced map is well-defined and injective mod $n$ and the image is $\left<g\right>$ by definition.

### Inclusion Map

The [[Inclusion Map]] $inc : H \to G$ for any [[Subgroup]] $H \leq G$ as the product is same for both; this includes $Id : G \to G$ .

If $\alpha : G \to H$ and $\beta : H \to K$ are both Homomorphisms, then so is $\beta \circ \alpha : G \to K$ .

### Determinant of General Linear Group

The determinant is a Homomorphism from $GL_n$ to $(\F^*, \dp)$ as,

$$
\det : GL_n \to \ad\F \quad\because\quad \det(AB) = \det(A) \det(B)
$$

$sgn : S_{n} \to C_{2} = \set{ + 1, - 1 }$, since $sgn (\sigma \tau) = sgn (\sigma) sgn (\tau) .$

### Example 4.23.

If $a \in 𝔽$, a field, then $m_{a} : 𝔽 \to 𝔽 : x \to  a x$ is a homomorphism of additive groups as $a (x + y) = a x + a y$ (F5). Hence Lemma [4.22](#x8-19003r22) implies $a \cdot 0 = 0$ and $a (- x) = - a x$ (F5x).

## Lemma 4.22.

### Identity under Homomorphism

If $\alpha : G \to H$ is a Homomorphism, then

$$
\alpha(e_G) = e_H
$$

#### Proof

For $g \in G$,

$$
\alpha (g) = \alpha (g e_G) = \alpha (g) \alpha (e_{G}) \to \alpha (e_{G}) = e_{H}
$$

by cancellation law Lemma [4.9](#x8-18003r9)(c), special case.

### Inverse under Homomorphism

A Homomorphism is compatible with inversion,

$$
\alpha(g^{-1}) = (\alpha(g))^{-1}
$$

(left-hand inverse in $G$ ; right-hand inverse in $H$).

#### Proof

By [[#Identity under Homomorphism]],

$$ e_H = \alpha(e_G) $$

hence $\Forall g \in G$,

$$
e_H = \alpha(e_G) = \alpha(g g^{-1})
= \alpha(g) \alpha( g^{-1})
$$

which implies by Lemma [4.9](#x8-18003r9)(c), (special case) that,

$$
\alpha(g^{-1}) = (\alpha(g))^{-1}.
$$

# Isomorphism

An **Isomorphism** $\alpha : G \to H$ is a [[Homomorphisms|Homomorphism]] which is [[Bijective]].

If such an Isomorphism exists, we say $G$ is **isomorphic** to $H$ and write $G \cong H$ .

## Two-sided inverse Definition

This is equivalent to,

$$
\Exists \beta  : H \to G \st\quad
\alpha \circ \beta = Id_H \land 
\beta \circ \alpha = Id_G
$$

### Proof

- (1) $\to$ (2): $\beta$ is a two-sided inverse, so $\alpha$ is a bijection (Theorem 1.20) and in fact $\beta$ is unique.
- (2) $\to$ (1): If $\alpha$ is a bijection, then it has a two-sided inverse $\beta : H \to G$ (Theorem 1.20), so it remains to prove that $\beta$ is a homomorphism. For $g, h \in H$
$$
\alpha (\beta (g) \beta (h)) = \alpha (\beta (g)) \alpha (\beta (h)) = g h
$$
as $\alpha$ is a homomorphism and $\alpha \circ \beta = (Id)_{H}$ . But also $\beta \circ \alpha = (Id)_{G}$, so applying $\beta$ gives $\beta (g) \beta (h) = \beta (g h)$, as required. □

## Examples

**(a)** $exp : ℝ \to ℝ^{+} : x \to  e^{x}$ is a homomorphism (since $e^{x + y} = e^{x} e^{y}$) from $ℝ$ as an additive group to $ℝ^{+} = \set{ x \in ℝ : x > 0 }$ as a multiplication group, and this is a bijection, so its inverse $log ℝ^{+} \to ℝ$ is also a homomorphism, i.e.

$$
log (x y) = log x + log y
$$

**(b)** When $g \in G$ has order $n$, the homomorphism $ℤ_{n} \to \left<g\right> : \left[ m \right] \to  g^{m}$ is a bijection hence an isomorphism, so $ℤ_{n} \cong \left<g\right>$, e.g. recall $ℤ_{4} \cong C_{4} = \left<i\right>$, $ℤ_{4} \cong ℤ_{10}^{*} = \left<3\right>$ .

Remark.

$G \cong H$ is a formal equivalence relation, i.e.

(R) $G \cong G$ ; (S) $G \cong H \to H \cong G$ ; (T) $G \cong H$ and $H \cong K \to G \cong K$ .

----

## Lemma 4.26 (**& Definition**).

If $\alpha : G \to H$ is a homomorphism of groups, then

(a)

the **image** $im \alpha = \set{ \alpha (g) : g \in G }$ is a subgroup of $H$,

(b)

the **kernel** $Ker \alpha = \set{ g \in G : \alpha (g) = e_{H} }$ is a subgroup of $G$ .

Proof. **(a)** (S1): If $\alpha (g), \alpha (h) \in im \alpha$, then $\alpha (g) \alpha (h) = \alpha (g h) \in im \alpha$ .

(S2): By Lemma [4.22](#x8-19003r22)(a), $e_{H} = \alpha (e_{G}) \in im \alpha$ .

(S3): If $\alpha (g) \in im \alpha$, then, by Lemma [4.22](#x8-19003r22)(b), $\alpha ((g))^{- 1} = \alpha (g^{- 1}) \in im \alpha$ .

**(b)** Check (S1), (S2), (S3) - Exercise. □

## Proposition 4.27.

A homomorphism $\alpha : G \to H$ is injective if and only if $Ker \alpha = \set{ e_{G} }$.

Proof. ($\to$) If $\alpha$ is injective, then

$$
g \in Ker \alpha \to \alpha (g) = e_{H} = \alpha (e_{G}) \to g = e_{G} .
$$

($\Leftarrow$) If $\alpha (g) = \alpha (h)$, then

$$
\alpha (g h^{- 1}) = \alpha (g) \alpha (h^{- 1}) = \alpha (g) \alpha ((h))^{- 1} = e_{H},
$$

so $g h^{- 1} \in Ker \alpha$, which is $\set{ e_{G} }$ by assumption. Thus $g h^{- 1} = e_{G}$ and so $g = h$, showing that $\alpha$ is injective. □

## Example 4.28.

For $a \in 𝔽$ (or any ring) let $m_{a} : 𝔽 \to 𝔽 : x \to a x$ . Then $m_{a}$ is injective, i.e. $a x = a y \to x = y$, if and only if $Ker m_{a} = \set{ 0 }$, i.e. $a x = 0 \to x = 0$ .

### Remark.

If $\alpha : G \to H$ is injective, then $\alpha : G \to im \alpha$ is a bijection, hence an isomorphism and thus $G \cong im \alpha \leq H$ .
