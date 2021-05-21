Chapter 2  
  
[The real numbers](MA10207-web.html#QQ2-6-11)
------------------------------------------------------------

We take an axiomatic approach to the real numbers here. That is, we first state their basic properties, or axioms. These may be taken as self-evident and are not proved. Later on, however, we will prove any further statements by reducing them to these axioms. The axioms are presented in several groups, each of which correspond to a specific aspect of the theory.

### 2.1 [Field axioms](MA10207-web.html#QQ2-6-12)

The first group comprises the **field axioms**, which describe the algebraic properties under addition and multiplication.

(A1)

$\forall a , b , c \in ℝ : a + \left( b + c \right) = \left( a + b \right) + c$ (associative law for $+$ ).

(A2)

$\forall a , b \in ℝ : a + b = b + a$ (commutative law for $+$ ).

(A3)

$\exists 0 \in ℝ \forall a \in ℝ : a + 0 = a = 0 + a$ (additive identity).

(A4)

$\forall a \in ℝ \exists b \in ℝ : a + b = 0 = b + a$ (additive inverse). For a given $a \in ℝ$ , the additive inverse (referred to as $b$ in the previous formula) is unique and is usually denoted by $- a$ .

(A5)

$\forall a , b , c \in ℝ : a \left( b c \right) = \left( a b \right) c$ (associative law for $\times$ ).

(A6)

$\forall a , b \in ℝ : a b = b a$ (commutative law for $\times$ ).

(A7)

$\exists 1 \in ℝ \backslash \left\{ 0 \right\} \forall a \in ℝ : a 1 = a = 1 a$ (multiplicative identity).

(A8)

$\forall a \in ℝ \backslash \left\{ 0 \right\} \exists b \in ℝ : a b = 1 = b a$ (multiplicative inverse). The multiplicative inverse of $a$ is unique and is usually denoted by $1 / a$ or $a^{- 1}$ .

(A9)

$\forall a , b , c \in ℝ : a \left( b + c \right) = a b + a c$ (distributive law).

Here are a few consequences of the field axioms.

Proposition 17.  
  

1.  $0 a = a 0 = 0$ for all $a \in ℝ$ .
2.  If $a , b \in ℝ$ satisfy $a b = 0$ , then $a = 0$ or $b = 0$ .
3.  $- \left( - a \right) = a$ for all $a \in ℝ$ .
4.  $\left( - a \right) b = - a b = a \left( - b \right)$ for all $a , b \in ℝ$ .
5.  $\left( - a \right) \left( - b \right) = a b$ for all $a , b \in ℝ$ .
6.  If $a , b , c \in ℝ$ satisfy $a + b = a + c$ , then $b = c$ .
7.  If $a , b , c \in ℝ$ satisfy $a b = a c$ and $a \neq 0$ , then $b = c$ .
8.  $\left(\left( a^{- 1} \right)\right)^{- 1} = a$ for all $a \in ℝ \backslash \left\{ 0 \right\}$ .
9.  $\left(\left( - a \right)\right)^{- 1} = - a^{- 1}$ for all $a \in ℝ \backslash \left\{ 0 \right\}$ .

Proof.  These statements are proved for the most part in MA10209 and the arguments are not given here. □

### 2.2 [Order axioms](MA10207-web.html#QQ2-6-13)

The next few axioms describe how the real numbers are ordered.

(A10)

For any $a , b \in ℝ$ , either $a \leq b$ or $b \leq a$ .

(A11)

For all $a , b \in ℝ$ , if $a \leq b$ and $b \leq a$ , then $a = b$ .

(A12)

For all $a , b , c \in ℝ$ , if $a \leq b$ and $b \leq c$ , then $a \leq c$ .

(A13)

For all $a , b , c \in ℝ$ , if $a \leq b$ , then $a + c \leq b + c$ .

(A14)

For all $a , b , c \in ℝ$ , if $a \leq b$ and $c \geq 0$ , then $a c \leq b c$ .

In addition to the order relation $\leq$ , we have $<$ , which is defined as follows: for $a , b \in ℝ$ , we write $a < b$ if $a \leq b$ and $a \neq b$ . We further use the symbols $\geq$ and $>$ when the numbers occur in reverse order. So $a \geq b$ means the same thing as $b \leq a$ and $a > b$ means $b < a$ .

Here are a few consequences of the order axioms.

Proposition 18.  
  

1.  For all $a , b \in ℝ$ ,
    *   if $a \geq 0$ and $b \geq 0$ , then $a b \geq 0$ ;
    *   if $a \leq 0$ and $b \leq 0$ , then $a b \geq 0$ ;
    *   if $a \leq 0$ and $b \geq 0$ , then $a b \leq 0$ .
2.  For all $a , b , c , d \in ℝ$ , if $a \leq b$ and $c \leq d$ , then $a + c \leq b + d$ .
3.  For all $a \in ℝ$ , if $a \geq 0$ , then $- a \leq 0$ .
4.  $a^{2} \geq 0$ for all $a \in ℝ$ .
5.  $0 < 1$ .
6.  For all $a \in ℝ$ , if $a > 0$ , then $a^{- 1} > 0$ , and if $a < 0$ , then $a^{- 1} < 0$ .
7.  For all $a , b , c \in ℝ$ , if $a \leq b$ and $c \leq 0$ , then $a c \geq b c$ .

Proof.  [(i)](#x6-130021) If $a \geq 0$ and $b \geq 0$ , then (A14) implies that

$$
0 = 0 \cdot b \leq a \cdot b = a b .
$$

The other two cases are covered by the exercises.

[(ii)](#x6-130042) We use (A13) twice, together with (A2), to conclude that

$$
a + c \leq b + c = c + b \leq d + b = b + d .
$$

Now (A12) implies that $a + c \leq b + d$ .

[(iii)](#x6-130063) By (A13), (A3), and (A4), if $a \geq 0$ , then

$$
- a = 0 + \left( - a \right) \leq a + \left( - a \right) = 0.
$$

[(iv)](#x6-130084) If $a \geq 0$ , then this follows from the first statement in [(i)](#x6-130021). Otherwise we use (A10) to conclude that $a \leq 0$ , and then the desired inequality follows from the second statement in [(i)](#x6-130021).

[(v)](#x6-130105) Because $1 = 1^{2}$ by (A7), it follows from [(iv)](#x6-130084) that $0 \leq 1$ . But (A7) also says that $1 \neq 0$ , so $0 < 1$ .

[(vi)](#x6-130126) If we had the inequalities $a > 0$ and $a^{- 1} < 0$ or vice versa, then [(i)](#x6-130021) would tell us that

$$
1 = a a^{- 1} \leq 0 ,
$$

which would contradict [(v)](#x6-130105). So this is impossible.

Thus if $a > 0$ , then $a^{- 1} </ 0$ , and (A10) tells us that $a^{- 1} \geq 0$ . But $a^{- 1} \neq 0$ , because $a \cdot 0 = 0 \neq 1$ by Proposition [17](#x6-12002r17).[(i)](#x6-120031) and (A7). Hence $a^{- 1} > 0$ .

If $a < 0$ , we use the same arguments to conclude that $a^{- 1} < 0$ .

[(vii)](#x6-130147) This is an exercise. □

### 2.3 [Completeness axiom](MA10207-web.html#QQ2-6-14)

This axiom is somewhat more complicated, and we need to introduce some terminology before we can state it in a convenient form.

Definition 19.  
  
Consider a set $S \subseteq ℝ$ .

1.  A number $M \in ℝ$ is said to be an **upper bound** of $S$ if $s \leq M$ for all $s \in S$ .
2.  A number $m \in ℝ$ is said to be a **lower bound** of $S$ if $s \geq m$ for all $s \in S$ .
3.  The set $S$ is called **bounded above** if it has an upper bound and **bounded below** if it has a lower bound. We say that $S$ is **bounded** if it is bounded above and below.

Example 20.  
  
The set $ℕ \subseteq ℝ$ has a lower bound (for example $0$ ) but no upper bound. (We will eventually prove this.)

Definition 21.  
  
Consider a set $S \subseteq ℝ$ .

1.  A number $T \in ℝ$ is called **supremum** or **least upper bound** of $S$ if $T$ is an upper bound of $S$ and any other upper bound $M$ of $S$ satisfies $T \leq M$ .
2.  A number $t \in ℝ$ is called **infimum** or **greatest lower bound** of $S$ if $t$ is a lower bound of $S$ and any other lower bound $m$ of $S$ satisfies $t \geq m$ .

Finally we can state the last axiom of the real numbers, the completeness axiom.

(A15)

Every non-empty set of real numbers that is bounded above has a supremum. Every non-empty set of real numbers that is bounded below has an infimum.

The supremum and infimum of a set (if they exist) are unique. This can be seen as follows. Suppose that $T$ and $T^{′}$ are both suprema of $S$ . Then they are both upper bounds, and by the definition of a supremum, it follows that $T \leq T^{′}$ and $T^{′} \leq T$ . Hence $T = T^{′}$ . The same reasoning applies to infima.

We use the following notation: given a set $S \subseteq ℝ$ , we write $sup S$ for its supremum (if it exists) and $inf S$ for its infimum (if it exists). We use the symbols $sup S$ and $inf S$ even when the supremum or infimum does not exist. (By (A15), this is the case only if either $S$ is empty or unbounded above/below.) We write $sup S = \infty$ if $S$ is unbounded above and $inf S = - \infty$ if $S$ is unbounded below. Moreover,

$$
sup \oslash = - \infty \text{and } inf \oslash = \infty .
$$

Note, however, that these are just conventions and do not express any deeper truths.

The following is one of the key properties of the supremum and infimum.

Theorem 22.  
  
Let $S \subseteq ℝ$ be a non-empty set.

1.  Suppose that $S$ is bounded above. Then for any $ϵ > 0$ there exists $s \in S$ such that $s > sup S - ϵ$ .
2.  Suppose that $S$ is bounded below. Then for any $ϵ > 0$ there exists $s \in S$ such that $s < inf S + ϵ$ .

Proof.  We give only the proof of the first statement, as the arguments for the second statement are similar. We argue by contradiction, so we assume that the statement is false, seeking contradiction.

Assume that there exists $ϵ > 0$ such that any $s \in S$ satisfies $s \leq sup S - ϵ$ . But then $sup S - ϵ$ is an upper bound of $S$ , which means that $sup S$ is **not** the least upper bound. The contradiction concludes the proof. □

Here is another important consequence of the completeness axiom.

Theorem 23 (Archimedean postulate).  
  
For any real number $a \in ℝ$ there exists $n \in ℕ$ with $a < n$ .

Proof.  We give a proof by contradiction. If this were false, then we would have a number $a \in ℝ$ such that $n \leq a$ for all $n \in ℕ$ . Then $a$ is an upper bound for the set $ℕ$ ; or in other words, $ℕ$ is bounded above. Therefore, the supremum $sup ℕ$ exists. Moreover, by Theorem [22](#x6-14023r22), there exists $n \in ℕ$ with $n > sup ℕ - 1$ . But then $n + 1 > sup ℕ$ , which is a contradiction, as $n + 1 \in ℕ$ . □

### 2.4 [Powers](MA10207-web.html#QQ2-6-15)

In addition to the arithmetic operations $+$ and $\times$ , we have powers of real numbers. These are defined as follows. For $a \in ℝ$ and $n \in ℕ$ ,

$$
a^{n} = \underset{\text{}n\text{ times }}{\underbrace{a \dots  a}} .
$$

Earlier we have seen the notation $a^{- 1}$ for the multiplicative inverse. We further define

$$
a^{- n} = \left(\left( a^{- 1} \right)\right)^{n}
$$

for $n \in ℕ$ , as well as $a^{0} = 1$ . Then we have powers $a^{i}$ for every integer $i \in ℤ$ , provided that $a \neq 0$ . With these definitions, we have the following properties of powers.

1.  $a^{i j} = \left(\left( a^{i} \right)\right)^{j}$ for all $a \in ℝ \backslash \left\{ 0 \right\}$ and $i , j \in ℤ$ .
2.  $\left(\left( a b \right)\right)^{i} = a^{i} b^{i}$ for all $a , b \in ℝ \backslash \left\{ 0 \right\}$ and $i \in ℤ$ .
3.  $a^{i + j} = a^{i} a^{j}$ for all $a \in ℝ \backslash \left\{ 0 \right\}$ and $i , j \in ℤ$ .

You are probably familiar with powers with rational (and perhaps real) exponents, too. Later on, we will rigorously develop the theory of powers of the form $a^{x}$ for $a > 0$ and for every real number $x$ .