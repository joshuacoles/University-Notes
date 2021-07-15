# Congruence on a Ring

Considering an [[Equivalence Relation]] on $X$, if $X$ has some additional structure such as being a [[Ring]] or [[Group]], we cannot expect $X / \sim$ (the set of [[Equivalence Class|Equivalence Classes]]) to inherit that structure unless $\sim$ satisfies some extra conditions.

```ad-example
Again comparing to Groups, if $X = G$ is a Group, the condition is that $\sim$ should be given by a Normal Subgroup $H \vartriangleleft G$, so $x \sim y \iff xH = yH$.
```

The next step is to work out what the corresponding thing is for rings. Fortunately, we already know some examples.

## Definition

Let $R$ be a [[Ring]] and $\sim$ be an [[Equivalence Relation]] on $R$. We say that $\sim$ is a **Congruence** if for all $a, b, a’, b’ \in R$, we have

$$
a \sim a’ \land b \sim b’
\implies
[a + b \sim a’ + b’]
\land
[a \cdot b \sim a’ \cdot b’].
$$

The [[Equivalence Classes]] of a congruence $\sim$ are called **Congruence Classes**.

This condition says that one can add or multiply any two equivalence classes $[a], [b] \in R/\sim$ by first adding or multiplying any representatives of the equivalence classes in the ring $R$, and then taking the congruence class of the result. This is exactly what happens in I.35 #fixme.

### Example

```ad-example
title: Example: Divisibility

For any $n \in \N$, consider the subset $n\Z = \set{nm \in \Z \mid m \in \Z}$ of integers that are divisible by $n$. There is an equivalence relation $\sim_n$ on $\Z$ defined by

$$ a \sim b \iff n \vert (b-a) \iff b-a\in n\Z . $$

> #programming-note breakout that notation.

Any integer $m$ can be written in the form $m = qn + r$ for a unique $0 \le r < n$, in which case $[m] = [r]$. Therefore the set $\Z/\sim$ of equivalence (or _congruence_) classes is simply $\set{[0], [1], \dots, [n-1]}$. We will denote this set by $\Z /n\Z$ (or $\Z/n$). We can define addition and multiplication in $\Z /n\Z$ by

$$
[a] + [b] := [a + b]
\qquad \text{and} \qquad
[a] \cdot [b] := [a \cdot b].
$$

This says simply that we add and multiply the representatives $a$ and $b$ in $\Z$, and then take the equivalence class of the result. This is the familiar modular arithmetic: if we know that we are working in $n\Z$ we may as well drop the square brackets and use $a$ instead of $[a]$, just remembering that $a$ and $a+n$ then become different names for the same thing.

With this definition $\Z/n\Z$ becomes a [[Ring]] with the following specialisations,

- If $n$ is prime then it is in fact a [[Field]].
- $n = 0$ makes $\sim$ trivially giving us $\Z/0\Z = \Z$.
- We can allow $n < 0$ as  $n\Z =(-n)\Z$.
- We can also allow $n=1$ we get the trivial ring with one element, in which $0 = 1$ (hence it is neither an [[Integral Domain]] nor a [[Division Ring]]).

```
