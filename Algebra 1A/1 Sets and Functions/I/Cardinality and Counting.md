# Cardinality and Counting

We start with a fundamental fact, that may seem obvious. We will not give a proof, but will investigate more closely what it actually means.

## $J_n$ Counting Sets

Define the set $J_n$ to be the set $\set{1, \dots, n} \sub \N$. Further define $J_0 = \varnothing$ as a natural extension.

## [[Pigeonhole Principle]]

Let $A, B$ be [[Finite Sets]]. If there is an [[Injection]] $f:A \to B$, then $|A| \le |B|$. Alternatively, if $|A| > |B|$, then there exists no [[Injection]] $A \to B$.

> In more concrete terms, if you want to put some balls ($A$) in some boxes ($B$) and you have more balls than boxes, then some box will end up with more than one ball in it. Hence the name Pigeonhole Principle.

## Corollary 1.24

If $A, B$ are [[Finite Sets]] and there is a [[Bijection]] $f : A \to B$, then $|A| = |B|$.

### Proof

Apply the [[Pigeonhole Principle]] to both $f$ and $f^{−1}$, which are both [[Injective]], to deduce that $|A| \le |B|$ and $|B| \le |A|$, so $|A| = |B|$.

### Converse
Is the converse to Corollary 1.24 true? To think about this and how we might prove the PHP, we must first ask: how is $|A|$ actually defined? The answer begins like this.

## [[Finite Set|Finite Sets]]

A set $A$ is **Finite** if there is a [[Bijection]] $c : J_n \to A$ which *counts* it, for some $n \in \N_0$

> We include $n=0$ by saying $J_0 = \varnothing$.

Informally, $A$ is finite if we can write it as $A=\set{a_1, \dots ,a_n}$, without repeats. We would like to then say that $|A| = n$, but should worry whether a finite set A could satisfy this for two different values of n. We start by thinking more about [[Bijection|bijections]].

## Definition 1.26 Cardinal Equality

Two sets $A, B$ are **equinumerous** (i.e. have the same size) if there exists a bijection $f : A \to B$. If so, we write $A \cong B$.

Observe that

- $A \cong A$ because $Id_A : A \to A$ is a [[Bijection]].
- If $A \cong B$, then $B \cong A$ because if $f:A→B$ is a bijection, then $f^{−1} : B \to A$ is also a [[Bijection]] (Theorem 1.20(c)).
- if $A \cong B$ and $B \cong C$, then $A \cong C$, because the [[Function Composition]] of two [[Bijections]] is also a [[Bijection]] (Prop. 1.19(c)).

Thus we can say that Cardinal Equality forms an [[Equivalence Relation]].

All these properties are clearly necessary for using the term “same size”. We can now say that $A$ is finite if and only if $A \cong \set{1,…,n}$, for some $n\in\N_0$. But, if $A \cong \set{1,…,n}$ and $A \cong \set {1,…,m}$, then these properties mean that $\set{1,…,n} \cong \set{1,…,m}$, so we see that the size $A$ of a finite set $A$ is well-defined, provided we can prove the following.

> **Programming Note**: Move this above the one before and make it a Corollary of this.

## Proposition 1.27 Injection Ordering

If there is an [[Injection]] $\set{1,…,n} \to \set {1,…,m}$, then $n≤m$.

Just as for with Cor. 1.24, we can then immediately deduce what we need.

> **Programming Note**: This is literally just the [[Pigeonhole Principle]] isnt it?

## Corollary 1.28. bijection equality

If there is a bijection $\set{1,…,n} \to \set{1,…,m}$, then n\=m.

Note that Prop. 1.27 looks like a special case of the PHP (Prop. 1.23), but is in fact it what you need to prove it. Indeed, combining an injection A→B with counting bijections gives (by Prop 1.19(a)) an injection

to which Prop. 1.27 applies and gives $A = n \le m = B$.

We will not prove Prop. 1.27, but it can be proved by induction on $m$. The base case $m = 0$ rests on the fact that there is no map at all A→∅ when $A \ne \varnothing$.

## Proposition 1.29

Let $A$ be a finite set.

- If $X \sub A$, then $X$ is finite and $X \le A$.
- If $f : Y \to A$ is an Injection, then Y is finite and $Y \le A$.
- If $g : A \to Z$ is a Surjection, then $Z$ is finite and $Z \le A$.

### Proof

1. The key is to prove that X is finite, then we can apply PHP to the inclusion map X→A to get the final inequality. Informally, if we can write A\={a1,…,am} in some order, then we can use the same order to write X\={x1,…,xn} and so count X.

2. Since f:Y→A is injective, the induced map f̃:Y→im(f) is also injective and is surjective by construction, so is a bijection, that is Y≅im(f). But im(f)⊆A so im(f) is finite, that is, im(f)≅{1,…,n} for some n∈ℕ0 by (a). Hence Y≅{1,…,n}, that is, Y is finite. The final inequality follows again from PHP.

3. Since g:A→Z is surjective, it has a right inverse h:Z→A (Thm. [1.20](http://localhost:5000/moodle.bath.ac.uk/pluginfile.php/1625344/mod_resource/content/13/MA10209-notes/MA10209-webse1#x5-6012r20)(b)) and h is injective because g is a left inverse (Thm. [1.20](http://localhost:5000/moodle.bath.ac.uk/pluginfile.php/1625344/mod_resource/content/13/MA10209-notes/MA10209-webse1#x5-6012r20)(a)). Hence we can apply (b) to h and get the result. □

Observe that Def. 1.26 applies to arbitrary sets not just finite ones and we can wonder whether all infinite sets are equinumerous. In fact, they are not. In particular, there is never a bijection between A and P(A) (see Ex. 3.9). On the other hand, we have the following.

## Proposition 1.30

A set A is infinite (i.e. not finite) if and only if there is an injection f:ℤ+→A.

Proof. Suppose first there is an injection f:ℤ+→A and a bijection c:{1,…,n}→A. Then, by Prop. 1.19 (a), the composite c−1∘f∘inc:{1,…,m}→{1,…,n} will be injective, for any m∈ℤ+, contradicting PHP (Prop.1.27). Thus, if there is such an injection f, then A must be infinite.

Conversely, if A is infinite, then we can build an injection f:ℤ+→A recursively. That is, we can build injections fn:{1,…,n}→A, for all n∈ℤ+, such that, for all m≤n, the restriction of fn to {1,…,m} is fm. We start with f0:∅→A, which is always an injection. Given an injection fn−1, we can make fn by choosing some a∈A\\im(fn−1) and setting fn(n)\=a. This will only fail if fn−1 is surjective, and hence a bijection, so that A is finite. Thus, if A is infinite, then this recursive construction works. □

## Definition 1.31

Let $A$ be a set.

- $A$ is **Countably Infinite** if there is a Bijection $f : \Z^+ → A$.
- $A$ is **Countable** if A is Finite or Countably Infinite.

We will not study this in any detail, but note a few facts that are good to know. Some of these will be revisited in Analysis 1.

- $\Z$ is Countably Infinite,
- $\Z \times \Z$ and $\Q$ are Countably Infinite,
- $\mathcal{P}(\Z)$ and $\R$ are Uncountably Infinite (i.e. infinite but not countably so).

More generally

- if $A$ is Countable and there is a Surjection $A \to B$ or an Injection $B \to A$, then $B$ is Countable.
	- In particular, any subset of a countable set is countable.
 - $A$ is countable if and only if there is an injection $f : A → \Z^+$.
- If $A$ and $B$ are Countable, then so is $A ∪ B$ and $A×B$.
