# Groups

A **Group** is a set $G$ equipped with a binary operation

$$* : G \times G \to G : (x, y) \to  x * y$$

with axioms,

1. $*$ is **Associative**: $\forall x, y, z \in G$, $(x * y) * z = x * (y * z)$
2. there is an **identity element** $e \in G$ such that $\forall x \in G$, $e * x = x = x * e$
3. every $x \in G$ has an **inverse** $x^{- 1} \in G$ such that $x^{- 1} * x = e = x * x^{- 1} .$

Further $G$ is an **abelian group** if

G4

$*$ is **commutative**: $\forall x, y \in G$, $x * y = y * x$ .

## Order

If $G$ is a finite set, then $\left|G\right|$ is called the **order** of the group $G$ .

## Example 4.8.

**(a)** The additive group underlying any ring or field, such as $ℤ, ℚ, ℝ, ℂ, ℤ_{n}$ . Here $*$ is $+$, $e$ is $0$, $x^{- 1}$ is $- x$ and (G4) holds. Recall $\left|ℤ_{n}\right| = n$ .

**(b)** Invertible elements (’units’) in any ring or field, under multiplication, so $*$ is $\cdot$, $e$ is $1$ or $I$, $x^{- 1}$ is $x^{- 1}$ . Examples include $(𝔽)^{*} = 𝔽 \backslash \set{ 0 }$ for any field $𝔽$ ; the ’group of units mod $n$ ’ $ℤ_{n}^{*}$ (recall $\left|ℤ_{n}\right| = \phi (n)$); the general linear group $(GL)_{n} (𝔽) = \set{ A \in M_{n} (𝔽) : A\text{ invertible} }$

In such cases multiplication is defined more widely, so we need to check that $G$ is ’closed’, i.e. $\forall x, y \in G$ $x * y \in G$ . For example, if $A, B \in M_{n} (𝔽)$ are invertible, then check $A B$ is that invertible and indeed $((A B))^{- 1} = B^{- 1} A^{- 1}$ .

**(c)** The $n$ th roots of unity

$$
C_{n} = \set{ z \in ℂ : z^{n} = 1 }
$$

under multiplication. Recall $\left|C_{n}\right| = n$ . Closure: if $(\alpha)^{n} = 1 = (\beta)^{n}$, then $((\alpha \beta))^{n} = (\alpha)^{n} (\beta)^{n} = 1$ . Also $1^{n} = 1$ and $((z^{- 1}))^{n} = z^{- n} = 1^{- 1} = 1$ .

**(d)** For any set $X$, the ’symmetric group’

$$
Sym (X) = \set{ \text{bijections }\sigma:X\to X }
$$

$*$ is composition $\circ$, $e$ is $(Id)_{X}$, also have closure and inverses. Recall, if $\left|X\right| = n$, then $\left|Sym (X)\right| = n !$ .

(From now on just write $x y$ for $x * y$)

## Lemma 4.9.

(a)

the identity element is unique

(b)

the inverse of $x$ is unique

(c)

the cancellation law holds on both sides

$$
x y = x z \to y = z \text{and} y x = z x \to y = z
$$

Special cases:

$$
\begin{align}
 & & xy=x(= x e)\to y=e &  \\ & & xy=e(= x x^{- 1})\to y=x^{- 1}
\end{align}
$$

so $x^{- 1} x = e \to x = ((x^{- 1}))^{- 1}$

**Note:** for additive groups, this says

$$
\begin{align}
 & & x+y=x\to y=0 &  \\ & & x+y=0\to y=-x &  \\ & & -(- x)=x
\end{align}
$$

Proof.

(a)

If $e_{1}$ and $e_{2}$ were identities, then both satisfy (G2) and so

$$
e_{2} = e_{1} e_{2} = e_{1} .
$$

(b)

If $x^{′}$ and $x^{''}$ are both inverses of $x$, then

$$
x^{''} = x^{''} e = x^{''} (x x^{′}) = (x^{''} x) x^{′} = e x^{′} = x^{′}
$$

(c)

We just prove one side as the other side is similar.

$$
\begin{align}
xy=xz & \to x^{- 1}(x y)=x^{- 1}(x z) & & \\ & \to(x^{- 1} x)y=(x x^{- 1})z\text{by (G1)} & & \\ & \to ey=ez\text{by (G3)} & & \\ & \to y=z\text{by (G2)}
\end{align}
$$

□

## Definition 4.10.

For any $g \in G$, we can define **powers** of $g$ for $n \in ℤ$ by

$$
\begin{align}
g^{n} = \set{\begin{matrix} \underset{n\text{ times}}{\underbrace{g \dots  g}} & n>0\text{using (G1)} \\ e & n=0\text{using (G2)} \\ \underset{-n\text{ times}}{\underbrace{g^{- 1} \dots  g^{- 1}}} & n<0\text{using (G3)} \end{matrix}\right
\end{align}
$$

e.g. $g^{- 5} = ((g^{- 1}))^{5}$ . We can check the general power laws $g^{n} \cdot g^{m} = g^{n + m}$ and $((g^{n}))^{m} = g^{n m}$ .

The **order** of $g$, denoted $ord (g)$, is either the smallest $n \in ℤ^{+}$ such that $g^{n} = e$, or $\in fty$ if no such $n$ exists.

= Lecture 27 =

## Example 4.11.

**(a)** $ord (e) = 1$, because $e^{1} = e$ and no smaller power exists, and only $e$ has order 1, because $g^{1} = e$ means $g = e$ . Note also $e^{n} = e$ for any $n \in ℤ$ .

**(b)** In the additive group $ℤ_{m}$, where $e = \left[ 0 \right]$, the element $\left[ 1 \right]$ has order $m$, because that is the smallest $n$ such that $\left[ 1 \right] + \dots  + \left[ 1 \right]$ ($n$ times) is $\left[ 0 \right]$ . In the additive group $ℤ$, $ord (1) = \in fty$.

**(c)** For $w \in C_{n}$, $ord (w) = n$ if and only if $w$ is a primitive root.

## Lemma 4.12.

If $g \in G$ has finite order, then $g^{m} = e \Leftrightarrow ord (g) | m .$

Proof. Let $ord (g) = n$, so in particular $g^{n} = e$ .

$(\Leftarrow)$ If $n | m$, i.e. $m = n q$, then $g^{m} = ((g^{n}))^{q} = e^{q} = e$ .

$(\to)$ If $g^{m} = e$, write $m = n q + r$ with $0 \leq r < n$ . Then

$$
g^{r} = g^{m - n q} = (g^{m}) ((g^{n}))^{- q} = e (e^{- q}) = e
$$

But $n$ is the smallest such positive integer, so $r = 0$ and $m = n q$, i.e. $n | m$ . □

Remark.

**(a)** If $g \in G$ has infinite order, then

$$
g^{m} = e \Leftrightarrow m = 0.
$$

To see this, suppose $n > 0$ . Then $g^{n} \neq e$ by definition, and if $g^{- n} = ((g^{n}))^{- 1} = e$, then $g^{n} = e^{- 1} = e$ . So no positive or negative power of $g$ can be $e$ .

**(b)** More generally, consider when two powers are equal. Now $g^{m} = g^{k} \Leftrightarrow g^{m - k} = e$ . So, if $ord (g)$ is finite, then

$$
\begin{align}
g^{m}=g^{k} & \Leftrightarrow & ord(g)|m-k\text{[Lemma }\text{4.12}\text{]} &  \\ & \Leftrightarrow & m\equiv k(mod ord (g))
\end{align}
$$

If $ord (g) = \in fty$, then $g^{m} = g^{k} \Leftrightarrow m = k$ . Either way $\left|\set{ g^{m} : m \in ℤ }\right| = ord (g) .$

Example 4.13.

Can present the whole group operation in a Cayley Table. For example,

$$
\begin{align}
ℤ_{4} : + & 0 & 1 & 2 & 3 \\ 0 & 0 & 1 & 2 & 3 \\ 1 & 1 & 2 & 3 & 0 \\ 2 & 2 & 3 & 0 & 1 \\ 3 & 3 & 0 & 1 & 2 C_{4} : \cdot & 1 & i & -1 & -i \\ 1 & 1 & i & -1 & -i \\ i & i & -1 & -i & 1 \\ -1 & -1 & -i & 1 & i \\ -i & -i & 1 & i & -1 ℤ_{10}^{*} : \cdot & 1 & 3 & 9 & 7 \\ 1 & 1 & 3 & 9 & 7 \\ 3 & 3 & 9 & 7 & 1 \\ 9 & 9 & 7 & 1 & 3 \\ 7 & 7 & 1 & 3 & 9
\end{align}
$$

**Note:** The cancellation law implies the ’sudoku’ property, i.e. that every element appears once in every row and column.

The maps $ℤ_{4} \to C_{4} : m \to  i^{m}$ and $ℤ_{4} \to ℤ_{10}^{*} : m \to  3^{m}$ are bijections which respect the group operation. Hence, we say that $ℤ_{4}$, $C_{4}$ and $ℤ_{10}^{*}$ are all **isomorphic** and write $ℤ_{4} \cong C_{4}$ and $ℤ_{4} \cong ℤ_{10}^{*}$ because of these maps.

Definition 4.14.

For a subset $H$ of a group $G$, we say $H$ is a **subgroup**, written $H \leq G$, if

**(S1)** $\forall a, b \in H$, $a b \in H$ ; **(S2)** $e \in H$ ; **(S3)** $\forall a \in H$, $a^{- 1} \in H$ .

This is just what is needed for $H$ to be a group using the same operation as  $G$ . This is because $e$ and $a^{- 1}$ are unique in $G$ and associativity is inherited from  $G$ .

Example 4.15.

**(a)** $\set{ e }$ and $G$ are trivially subgroups. The empty set is not as (S2) fails.

**(b)** As additive groups, $ℤ \leq ℚ \leq ℝ \leq ℂ$ .

**(c)** The **orthogonal group** $O (n) : = \set{ A \in M_{n} (ℝ) : A\text{ is orthogonal} }$ is a subgroup of $(GL)_{n} (ℝ)$, while $\set{ z \in ℂ : \left|z\right| = 1 }$ is a subgroup of $ℂ^{*} = (GL)_{1} (ℂ)$ .

**(d)** For any $g \in G$, the **cyclic subgroup** generated by $g$ is $\left<g\right> = \set{ g^{m} : m \in ℤ }$, which is a subgroup of $G$ as (S1): $g^{m} g^{n} = g^{m + n}$, (S2): $e = g^{0}$, (S3): $((g^{m}))^{- 1} = g^{- m}$ .

Notice that the order of $\left<g\right>$ is the order of $g$ [Remark [4.2](#x8-180004.2)(b)].

## Definition 4.16.

$G$ is a **cyclic group** if $G = \left<g\right>$ for some $g \in G$ .

Example 4.17.

**(a)** $C_{4}$ is a cyclic group of order $4$, with $C_{4} = \left<i\right>$ and $ord (i) = 4$ . Also $ℤ_{10}^{*}$ is a cyclic group of order $4$, with $ℤ_{10}^{*} = \left<3\right>$ .

**(b)** Now consider whether $ℤ_{7}^{*} = \set{ 1, 2, 3, 4, 5, 6 }$ is a cyclic group. Since $\left|ℤ_{7}^{*}\right| = 6$, we seek an element $g$ of order 6, since then $\left<g\right> \subseteq ℤ_{7}^{*}$ with $\left|\left<g\right>\right| = 6$, so $\left<g\right> = ℤ_{7}^{*}$, as required.

Now $ord (1) = 1$ as $1$ is the identity, so try $g = 2$ .

$$
2^{1} = 2 \neq 1, 2^{2} = 4 \neq 1, 2^{3} = 1,
$$

so $ord (2) = 3$ and indeed $\left<2\right> = \set{ 1, 2, 4 }$ is a cyclic subgroup of order $3$ .

Next try $g = 3$ and note that $3^{2} = 2$, so $3^{6} = 1$ . Hence, by Lemma [4.12](#x8-18008r12), we know that $ord (3) | 6$, that is, $ord (3)$ is $6$, $3$ or $2$ (not $1$ as $3 \neq 1$), but $3^{2} = 2$ and $3^{3} = 6$, so we can conclude that $ord (3) = 6$, which is what we were looking for, and so $\left<3\right> = ℤ_{7}^{*}$, so $ℤ_{7}^{*}$ is a cyclic group (generated by $3$). Indeed, we can find all powers by repeatedly multiplying by 3 mod  $7$ and check that $\left<3\right> = \set{ 1, 3, 2, 6, 4, 5 }$.

Definition 4.18.

If $G, H$ are groups, the **product** group is

$$
G \times H = \set{ (g, h) : g \in G, h \in H }
$$

with operation $(g_{1}, h_{1}) \cdot (g_{2}, h_{2}) = (g_{1} g_{2}, h_{1} h_{2})$ .

**Exercise:** Check the group axioms (G1,2,3). Further note that $((g, h))^{n} = (g^{n}, h^{n})$ . If $G, H$ are finite, then $\left|G \times H\right| = \left|G\right| \cdot \left|H\right|$ and for $g \in G, h \in H$

$$
ord ((g, h)) = lcm \set{ ord g, ord h } .
$$

Example 4.19.

For $C_{2} = \set{ 1, - 1 }$, the product group $C_{2} \times C_{2}$ is a group of order $4$ . Since $- 1$ has order $2$ in $C_{2}$, each of $(- 1, 1), (- 1, - 1), (1, - 1)$ has order $2$, so $C_{2} \times C_{2}$ is not cyclic, that is, $C_{2} \times C_{2} \ncong C_{4}$ .

= Lecture 28 =
