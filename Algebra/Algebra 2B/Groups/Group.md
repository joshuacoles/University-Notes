---
aliases: Groups, Group
---

# Group

A Group is a pair $(G, *)$, where $G$ is a set, $*$ is a binary operation on $G$ and the following axioms hold:

- **Associative**: $(a * b) * c = a * (b * c)$ for all $a, b, c \in G$. ^group-axiom-assoc
- **Identity**: There is an element $e \in G$ with the property that $e * a = a = a * e$ for all $a \in G$. ^group-axiom-identity
- **Inverse**: For each $a \in G$ there exists $b \in G$ such that $a * b= b * a = e$. ^group-axiom-inverse

^group-axioms

Often, in fact usually, we know what the group operation $*$ is, and then we don’t need to mention it and we just refer to the group as $G$ rather as $(G,*)$.

## Lemmas on Groups

### Uniqueness

In a group, both the **identity element** and **inverses** are ***unique***.

1. if $e, e’ \in G$ are two elements satisfying the identity property from I.3, then $e * e’ = e’$ because $e$ is an identity and $e * e’ = e$ because $e’$ is. So $e = e’$.
    
2. Given $a\in G$, if $b, b’\in G$ are both elements satisfying the inverse property for $a$ in I.3, then
    $$ b=b*e=b*(a*b’)=(b*a)*b’=e*b’=b’. $$
    
This unique element $b$ from (ii) is called the _inverse_ of $a$. It is often denoted by $a^{-1}$, especially if $*$ has been denoted by $\cdot$.

## Existence Qualifier Free Definition

A useful alternative way to view these requirements is that a Group has not one but three operations, these being:

1. The binary operation $* : G \times G \to G$ (usually called *the* group operation).
2. A unary operation: $\cdot^{-1} : G \to G$ which takes an element of $G$ to its inverse.
3. A null operator: $e : \phantom\cdot \to G$ which gives you the identity.

These allow us to compose the group axioms in a manner that is free of $\exists$ qualifiers which are computationally complex as they require "plucking" a value out of the air. Instead we define the behaviour in terms of the [[Function Graph]] of the above operations and their interactions.

```ad-info
We also see similar structures in the Bounding Function defintions of limits.
```

## Relation to Rings

One way to look at a Group – not the only way, and not always the best way – is to say that it is a set where you are allowed to multiply elements together. There is more to it than that, but that’s a starting point.

The corresponding basic informal idea of a Ring is that in a Ring you are allowed to multiply **and** you are allowed to add. Again, there’s more to it than that.

## Symmetries

#todo