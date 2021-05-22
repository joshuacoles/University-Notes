Chapter 6  
  
[More about the real numbers](MA10207-web.html#QQ2-11-34)
------------------------------------------------------------------------

### 6.1 [Nested intervals](MA10207-web.html#QQ2-11-35)

The following is the main theorem in this section.

Theorem 102 (Nested interval theorem).  
  
Let $\left(\left( a_{n} \right)\right)_{n \in ℕ}$ and $\left(\left( b_{n} \right)\right)_{n \in ℕ}$ be two sequences of real numbers such that $a_{n} \leq b_{n}$ and $\left[ a_{n + 1} , b_{n + 1} \right] \subseteq \left[ a_{n} , b_{n} \right]$ for every $n \in ℕ$ . Then

$$
\underset{n \in ℕ}{\cap} \left[ a_{n} , b_{n} \right] \neq \oslash .
$$

Here we have used the notation

$$
\underset{n \in ℕ}{\cap} \left[ a_{n} , b_{n} \right] = \left\{x \in ℝ : x \in \left[ a_{n} , b_{n} \right] \text{ for all  } n \in ℕ\right\} .
$$

So the statement is that the intersection of all the intervals is not empty, or, in other words, that there exists at least one point that is in all the intervals $\left[ a_{n} , b_{n} \right]$ .

Proof.  The condition that $\left[ a_{n + 1} , b_{n + 1} \right] \subseteq \left[ a_{n} , b_{n} \right]$ implies that $a_{n + 1} \geq a_{n}$ and $b_{n + 1} \leq b_{n}$ for all $n \in ℕ$ . So both of the sequences $\left(\left( a_{n} \right)\right)_{n \in ℕ}$ and $\left(\left( b_{n} \right)\right)_{n \in ℕ}$ are monotone. Since $a_{1} \leq b_{n}$ and $a_{n} \leq b_{1}$ for all $n \in ℕ$ , they are also bounded. According to Theorem [47](MA10207-webch4.html#x8-22015r47), this means that they both converge. Let $A = \underset{n \rightarrow \infty}{ \lim } a_{n}$ and $B = \underset{n \rightarrow \infty}{ \lim } b_{n}$ . Then

$$
a_{n} \leq A \leq B \leq b_{n}
$$

for all $n \in ℕ$ . Therefore, both $A$ and $B$ belong to $\left(\cap\right)_{n \in ℕ} \left[ a_{n} , b_{n} \right]$ . (They may coincide, however, so there may be only one point in the intersection.) □

Corollary 103.  
  
No real sequence contains every element of $\left[ 0 , 1 \right]$ .

Proof.  Consider an arbitrary real sequence $\left(\left( x_{n} \right)\right)_{n \in ℕ}$ . Consider the intervals $\left[ 0 , 1 / 3 \right]$ , $\left[ 1 / 3 , 2 / 3 \right]$ , and $\left[ 2 / 3 , 1 \right]$ , and note that any number belongs to at most two of them. Choose one that does **not** contain $x_{1}$ . In other words, choose $a_{1} , b_{1} \in \left\{ 1 , 1 / 3 , 2 / 3 , 1 \right\}$ such that $b_{1} - a_{1} = 1 / 3$ and $x_{1} \notin \left[ a_{1} , b_{1} \right]$ .

Now trisect the interval $\left[ a_{1} , b_{1} \right]$ similarly and consider $\left[ a_{1} , a_{1} + 1 / 9 \right]$ , $\left[ a_{1} + 1 / 9 , b_{1} - 1 / 9 \right]$ , and $\left[ b_{1} - 1 / 9 , b_{1} \right]$ . Any number belongs to at most two of these intervals. Hence we may choose $a_{2} , b_{2} \in \left\{ 0 , 1 / 9 , \dots  , 1 \right\}$ such that $b_{2} - a_{2} = 1 / 9$ and $x_{2} \notin \left[ a_{2} , b_{2} \right]$ and $\left[ b_{2} , a_{2} \right] \subseteq \left[ a_{1} , b_{1} \right]$ .

Continue this construction indefinitely. Once $a_{n} , b_{n}$ have been constructed, choose $a_{n + 1} , b_{n + 1} \in \left\{ 0 , \left(\left( 1 / 3 \right)\right)^{n + 1} , \dots  , 1 \right\}$ such that $b_{n + 1} - a_{n + 1} = \left(\left( 1 / 3 \right)\right)^{n + 1}$ and $x_{n + 1} \notin \left[ a_{n + 1} , b_{n + 1} \right]$ and $\left[ a_{n + 1} , b_{n + 1} \right] \subseteq \left[ a_{n} , b_{n} \right]$ . This gives rise to two sequences $\left(\left( a_{n} \right)\right)_{n \in ℕ}$ and $\left(\left( b_{n} \right)\right)_{n \in ℕ}$ that satisfy the hypothesis of Theorem [102](#x11-35001r102). Therefore, there exists a point

$$
x_{0} \in \underset{n \in ℕ}{\cap} \left[ a_{n} , b_{n} \right] .
$$

But by construction, every $x_{n}$ does not belong to this intersection, because $x_{n} \notin \left[ a_{n} , b_{n} \right]$ . Hence $x_{0} \neq x_{n}$ for every $n \in ℕ$ . □

### 6.2 [The relationship between $ℝ$ and $ℚ$](MA10207-web.html#QQ2-11-36)

There is some overlap with MA10209 here, but we discuss the following notions anyway because they have some important consequences for the real numbers.

Definition 104.  
  
A set $S$ is **finite** if there exists a bijection between $S$ and $\left\{ 1 , \dots  , n \right\}$ for some $n \in ℕ_{0}$ . In this case, we say that $n$ is the **cardinality** of $S$ . A set $S$ is **countable** if there exists an injective map from $S$ to $ℕ$ .

Example 105.  
  
The empty set is finite with cardinality $0$ .

Example 106.  
  
Any finite set is countable.

Example 107.  
  
All of the following are countably infinite: $ℕ$ , $ℤ$ , the set of all even numbers in $ℕ$ , and the set of all odd numbers in $ℕ$ .

Theorem 108.  
  
The set $ℚ$ of rational numbers is countable.

Proof.  This is proved in MA10209. □

Theorem 109.  
  
The interval $\left[ 0 , 1 \right]$ is uncountable.

Proof.  If it were countable, there would be an injective map $I : \left[ 0 , 1 \right] \rightarrow ℕ$ . Then we would be able to define a sequence $\left(\left( a_{n} \right)\right)_{n \in ℕ}$ in $\left[ 0 , 1 \right]$ as follows: for $n \in ℕ$ , if $n \in I \left( \left[ 0 , 1 \right] \right)$ , let $a_{n}$ be the unique number such that $I \left( a_{n} \right) = n$ ; otherwise, set $a_{n} = 0$ . This sequence would include all numbers in $\left[ 0 , 1 \right]$ , but this is impossible by Corollary [103](#x11-35003r103). □

Corollary 110.  
  
The set $ℝ$ is uncountable.

Proof.  This is an immediate consequence as $\left[ 0 , 1 \right] \subseteq ℝ$ . Every injective map $ℝ \rightarrow ℕ$ would induce an injective map $\left[ 0 , 1 \right] \rightarrow ℕ$ by restriction. □

This means that the sets $ℚ$ and $ℝ$ are fundamentally different in size. But while most real numbers do not belong to $ℚ$ , they can be approximated arbitrarily well by rational numbers.

Proposition 111.  
  
For any $x \in ℝ$ and $ϵ > 0$ , there exists $y \in ℚ$ such that $\left|x - y\right| < ϵ$ .

Proof.  Choose $q \in ℕ$ with $q \geq 1 / ϵ$ (making use of Theorem [23](MA10207-webch2.html#x6-14028r23)). Let

$$
p =  \max  \left\{i \in ℤ : i \leq q x\right\} .
$$

Then clearly $p \leq q x$ , so $p / q \leq x$ . On the other hand, we claim that $p / q > x - ϵ$ . Indeed, if this inequality were false, then it would follow that

$$
p \leq q \left( x - ϵ \right) = q x - q ϵ \leq q x - 1.
$$

Hence $p + 1 \leq q x$ , in contradiction to the definition of $p$ . Thus we have shown that $x - ϵ < p / q \leq x$ , which implies that $\left|p / q - x\right| < ϵ$ . □

Corollary 112.  
  
For every $x_{0} \in ℝ$ there exists a sequence $\left(\left( x_{n} \right)\right)_{n \in ℕ}$ of rational numbers such that $x_{0} = \underset{n \rightarrow \infty}{ \lim } x_{n}$ .

Proof.  For every $n \in ℕ$ , use Proposition [111](#x11-36011r111) to choose $x_{n} \in ℚ$ with $\left|x_{0} - x_{n}\right| < 1 / n$ . Then $x_{0} = \underset{n \rightarrow \infty}{ \lim } x_{n}$ . □