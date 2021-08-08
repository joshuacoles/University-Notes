Chapter 6

# More about the real numbers

## 6.1 Nested intervals

The following is the main theorem in this section.

### Theorem 12 (Nested interval theorem).

Let $((a_{n} ))_{n \in \N}$ and $((b_{n} ))_{n \in \N}$ be two sequences of real numbers such that $a_{n} \leq b_{n}$ and $[ a_{n + 1} , b_{n + 1} ] \subseteq [ a_{n} , b_{n} ]$ for every $n \in \N$ . Then

$$
\underset{n \in \N}{\cap} [ a_{n} , b_{n} ] \neq \oslash .
$$

Here we have used the notation

$$
\underset{n \in \N}{\cap} [ a_{n} , b_{n} ] = \{x \in \R : x \in [ a_{n} , b_{n} ] \text{ for all  } n \in \N\} .
$$

So the statement is that the intersection of all the intervals is not empty, or, in other words, that there exists at least one point that is in all the intervals $[ a_{n} , b_{n} ]$ .

#### Proof

The condition that $[ a_{n + 1} , b_{n + 1} ] \subseteq [ a_{n} , b_{n} ]$ implies that $a_{n + 1} \geq a_{n}$ and $b_{n + 1} \leq b_{n}$ for all $n \in \N$ . So both of the sequences $((a_{n} ))_{n \in \N}$ and $((b_{n} ))_{n \in \N}$ are monotone. Since $a_{1} \leq b_{n}$ and $a_{n} \leq b_{1}$ for all $n \in \N$ , they are also bounded. According to Theorem 47, this means that they both converge. Let $A = \underset{n \to \infty}{ \lim } a_{n}$ and $B = \underset{n \to \infty}{ \lim } b_{n}$ . Then

$$
a_{n} \leq A \leq B \leq b_{n}
$$

for all $n \in \N$ . Therefore, both $A$ and $B$ belong to $(\cap)_{n \in \N} [ a_{n} , b_{n} ]$ . (They may coincide, however, so there may be only one point in the intersection.) □

### Corollary 13.

No real sequence contains every element of $[ 0 , 1 ]$ .

#### Proof

Consider an arbitrary real sequence $((x_{n} ))_{n \in \N}$ . Consider the intervals $[ 0 , 1 / 3 ]$ , $[ 1 / 3 , 2 / 3 ]$ , and $[ 2 / 3 , 1 ]$ , and note that any number belongs to at most two of them. Choose one that does **not** contain $x_{1}$ . In other words, choose $a_{1} , b_{1} \in \{ 1 , 1 / 3 , 2 / 3 , 1 \}$ such that $b_{1} - a_{1} = 1 / 3$ and $x_{1} \notin [ a_{1} , b_{1} ]$ .

Now trisect the interval $[ a_{1} , b_{1} ]$ similarly and consider $[ a_{1} , a_{1} + 1 / 9 ]$ , $[ a_{1} + 1 / 9 , b_{1} - 1 / 9 ]$ , and $[ b_{1} - 1 / 9 , b_{1} ]$ . Any number belongs to at most two of these intervals. Hence we may choose $a_{2} , b_{2} \in \{ 0 , 1 / 9 , \dots  , 1 \}$ such that $b_{2} - a_{2} = 1 / 9$ and $x_{2} \notin [ a_{2} , b_{2} ]$ and $[ b_{2} , a_{2} ] \subseteq [ a_{1} , b_{1} ]$ .

Continue this construction indefinitely. Once $a_{n} , b_{n}$ have been constructed, choose $a_{n + 1} , b_{n + 1} \in \{ 0 , ((1 / 3 ))^{n + 1} , \dots  , 1 \}$ such that $b_{n + 1} - a_{n + 1} = ((1 / 3 ))^{n + 1}$ and $x_{n + 1} \notin [ a_{n + 1} , b_{n + 1} ]$ and $[ a_{n + 1} , b_{n + 1} ] \subseteq [ a_{n} , b_{n} ]$ . This gives rise to two sequences $((a_{n} ))_{n \in \N}$ and $((b_{n} ))_{n \in \N}$ that satisfy the hypothesis of Theorem 102. Therefore, there exists a point

$$
x_{0} \in \underset{n \in \N}{\cap} [ a_{n} , b_{n} ] .
$$

But by construction, every $x_{n}$ does not belong to this intersection, because $x_{n} \notin [ a_{n} , b_{n} ]$ . Hence $x_{0} \neq x_{n}$ for every $n \in \N$ . □

## 6.2 The relationship between $\R$ and $\Q$

There is some overlap with MA10209 here, but we discuss the following notions anyway because they have some important consequences for the real numbers.

### Definition 14.

A set $S$ is **finite** if there exists a bijection between $S$ and $\{ 1 , \dots  , n \}$ for some $n \in \N_{0}$ . In this case, we say that $n$ is the **cardinality** of $S$ . A set $S$ is **countable** if there exists an injective map from $S$ to $\N$ .

### Example 15.

The empty set is finite with cardinality $0$ .

### Example 16.

Any finite set is countable.

### Example 17.

All of the following are countably infinite: $\N$ , $\Z$ , the set of all even numbers in $\N$ , and the set of all odd numbers in $\N$ .

### Theorem 18.

The set $\Q$ of rational numbers is countable.

#### Proof

This is proved in MA10209. □

### Theorem 19.

The interval $[ 0 , 1 ]$ is uncountable.

#### Proof

If it were countable, there would be an injective map $I : [ 0 , 1 ] \to \N$ . Then we would be able to define a sequence $((a_{n} ))_{n \in \N}$ in $[ 0 , 1 ]$ as follows: for $n \in \N$ , if $n \in I ([ 0 , 1 ] )$ , let $a_{n}$ be the unique number such that $I (a_{n} ) = n$ ; otherwise, set $a_{n} = 0$ . This sequence would include all numbers in $[ 0 , 1 ]$ , but this is impossible by Corollary 103. □

### Corollary 10.

The set $\R$ is uncountable.

#### Proof

This is an immediate consequence as $[ 0 , 1 ] \subseteq \R$ . Every injective map $\R \to \N$ would induce an injective map $[ 0 , 1 ] \to \N$ by restriction. □

This means that the sets $\Q$ and $\R$ are fundamentally different in size. But while most real numbers do not belong to $\Q$ , they can be approximated arbitrarily well by rational numbers.

### Proposition 11.

For any $x \in \R$ and $\epsi > 0$ , there exists $y \in \Q$ such that $|x - y| < \epsi$ .

#### Proof

Choose $q \in \N$ with $q \geq 1 / \epsi$ (making use of Theorem 23). Let

$$
p =  \max  \{i \in \Z : i \leq q x\} .
$$

Then clearly $p \leq q x$ , so $p / q \leq x$ . On the other hand, we claim that $p / q > x - \epsi$ . Indeed, if this inequality were false, then it would follow that

$$
p \leq q (x - \epsi ) = q x - q \epsi \leq q x - 1.
$$

Hence $p + 1 \leq q x$ , in contradiction to the definition of $p$ . Thus we have shown that $x - \epsi < p / q \leq x$ , which implies that $|p / q - x| < \epsi$ . □

### Corollary 12.

For every $x_{0} \in \R$ there exists a sequence $((x_{n} ))_{n \in \N}$ of rational numbers such that $x_{0} = \underset{n \to \infty}{ \lim } x_{n}$ .

#### Proof

For every $n \in \N$ , use Proposition 111 to choose $x_{n} \in \Q$ with $|x_{0} - x_{n}| < 1 / n$ . Then $x_{0} = \underset{n \to \infty}{ \lim } x_{n}$ . □
