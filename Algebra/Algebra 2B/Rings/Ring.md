# Ring

While [[Group|Groups]] have a clear correspondence to symmetries (see [[Group#Symmetries]]) it isn't so easy to give an overarching description of a Ring.

The basic idea of a ring is that you are allowed to add and subtract and multiply, *but not necessarily divide*: addition is [[Commutative]], but multiplication might not be.

The basic example of some things that you can add and multiply by not necessarily divide is the integers. You can’t expect to be able to divide an integer by $2$, not if you want the answer to be an integer. So $\Z$ should be one basic example of a ring. In that case multiplication is commutative. 

Another good example is the [[Ring of Polynomials]] with (say) real coefficients in one variable, $\R[t]$. You can add two of these and you can multiply them, but you can’t divide: $\frac {1}{t}$ isn’t a polynomial. 

In fact, these two turn out to have much more in common than just being rings: **they are very similar rings**. In other words, a polynomial may be nothing like an integer, but polynomials collectively behave remarkably like integers collectively.

If you want an example of a noncommutative ring, consider the set of (say) $2 \times 2$ (say) real matrices, $M_2(\R)$. Here you have addition and multiplication, and you can take inverses as long as the determinant isn;t zero; but sometimes it is zero.

## Definition

A **Ring** is a triple $(R, +, \cdot)$, where $R$ is a set with two binary operations called addition (denoted $+$) and multiplication (denoted $\cdot$, or elided entirely), such that the following axioms hold:

1. **Addition**: $(R,+)$ is an [[Abelian Group]].
2. **Associative**: $\cdot$ is [[Associative]].
3. **Distributive**: Multiplication is _distributive over addition_, from the left or the right: that is  ^ring-axiom-distributive
$$
\begin{align*}
\Forall a, b, c \in R : \\
a \cdot (b + c) &= (a \cdot b) + (a \cdot c) \\
(b + c) \cdot a &= (b \cdot a)+(c \cdot a)
\end{align*}
$$
    
4. **Identity**: there is a _multiplicative identity_, an element $1 \in R$ such that $1 \cdot a = a\cdot 1 = a$ for all $a \in R$. ^ring-axiom-mult-identity

We write $0$ for the (unique) additive identity, and $-a$ for the (unique) additive inverse of $a\in R$.

## Rings without 1 (non-unital Rings)

The last axiom ([[#^ring-axiom-mult-identity|identity]]) is in a sense optional. Many writers omit it, and allow rings without $1$.

The disadvantage is that when you want to talk about a ring with a $1$ (also called a unital ring), you have to say so; and that happens a lot, so you would rather keep the simpler phrasing for the commonest case. Here we have made the opposite decision, and the disadvantage is that we now have no name for a ring without a $1$, i.e. something that satisfies (1)–(3) but not necessarily (4).

## Existence-Qualifier Free Definitions

Then there have to be rules about how multiplication and addition interact. So, looking at I.5, we expect two binary operations, one unary operation (subtraction, or rather minus), and one or two nullary operations: $0$ and, optionally, $1$.

#todo

## Notation

- We often omit $\cdot$ and write $ab$ instead of $a\cdot b$.
- Sometimes we will need to write $0_R$ and $1_R$ for the identities in $R$, to distinguish them from identities in other rings or groups.
- As with Groups, we will very often know what the operations are and just talk about the ring $R$, rather than calling it $(R, +, \cdot)$.
- For simplicity we often avoid brackets when there is no ambiguity, defining (as in the Reals) $\cdot$ to have a higher precedence than $+$.

## Lemmas on Rings

### Product of Zero

For all $a \in R$,

$$
a \cdot 0 = 0 \land 0 \cdot a = 0
$$

##### Proof

Let $a \in R$. Consider,

$$ a \cdot 0 $$

by [[#^ring-axiom-mult-identity|the identity]] we have

$$ a \cdot (0 + 0) $$

applying [[#^ring-axiom-distributive|the distributive law]] to obtain

$$ a \cdot 0  = a \cdot 0 + a \cdot 0. $$

Adding $-(a \cdot 0)$ on the left on both sides gives

$$
-(a \cdot 0) + a \cdot 0 =
-(a \cdot 0) + a \cdot 0 + a \cdot 0.
$$

The left hand side is zero, and the additive associativity gives that the right hand side is

$$
(-(a \cdot 0) + a \cdot 0) + a \cdot 0 =
0 + a \cdot 0 =
a \cdot 0
$$

as required. The second identity is similar.

### Invariance of Inverse Position

For $a, b \in R$,

$$
a \cdot (-b) = -(a \cdot b) \land 
-(a \cdot b) = (-a) \cdot b
$$

#### Proof

Note that

$$ a\cdot b+a\cdot (-b)=a\cdot (b+(-b))=a\cdot 0=0. $$

This means that $a\cdot (-b)$ is the additive inverse of $ab$: that is, $a\cdot (-b)=-(a\cdot b)$. Again, the second identity is similar.

### Uniqueness

Let $R$ be a ring. Then the multiplicative identity is unique, and if $a\in R$ is a unit then the multiplicative inverse of $a$ is unique.

Proof: The same argument as in I.4 still works.

## Relation to Groups

Notice that if $R$ is a ring then $(R, \cdot)$ is _never_ a group, except in the trivial case where $R = \set{0}$ and $0 = 1$. This is because $0$ cannot possibly have a multiplicative inverse, because of I.14(i).

The set of [[Unit|Units]] in $R$ is denoted by $R^*$ or sometimes $R^\times$. It is easy to see that $R^*$ does form a [[Group]] under multiplication, trivially true by the axioms of the Ring itself.

```ad-warning
$R^*$ however **behaves very badly** under addition and does not necessarily form the hypothetical Group $(R^*, +)$.
```

##  Examples and types of rings

**1.18 Example.** Some examples of rings and their units are:

1. $R=\Z$; then $\Z^* = \set{\pm 1}$.
    
2. $R=\C$; then $\C ^* =\set{z \in \C \mid z \neq 0}$.
    
3. $R = M_2(\R)$; then $R^* = \set{A \in M_2(\R) \mid \det A \neq 0}$.

Notice how different these three are. In (1) there are very few units, but more than just $1$. In (2) everything is a unit, except for $0$ of course. In (3) most elements are units, but there are still exceptions.

## Types of Rings

- If a Ring is  is [[Commutative]] it is unoriginally known as a [[Commutative Ring]].
- If a [[Commutative Ring]] has $0 \ne 1$ it is an [[Integral Domain]].
- If a **plain Ring** has $0 \ne 1$ and all non-zero elements are [[Unit|Units]] then it is a [[Division Ring]].