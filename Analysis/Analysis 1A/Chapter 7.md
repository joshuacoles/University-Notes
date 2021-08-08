Chapter 7

# Real functions

From now on, we study functions $f : I \to \R$ , where the domain $I$ is a subset of $\R$ , typically an interval. Such functions can be visualised with the help of their graphs.

### Definition 13.

Let $I \subseteq \R$ and consider a function $f : I \to \R$ . The **graph** of $f$ is the set $\{(x , f (x ) ) : x \in \R\} \subseteq I \times \R$ .

Since the graph of $f$ is a subset of $I \times \R$ , which in turn is a subset of $\R^{2}$ , we can draw a sketch of it. This is not the only purpose of a graph, but for the moment, this is what we mostly use it for (in the lectures but not in these notes).

## 7.1 Sequential continuity

The following notion is about what happens if we evaluate a function at the points given by a convergent sequence.

### Definition 14.

Let $I \subseteq \R$ and $x_{0} \in I$ . Consider a function $f : I \to \R$ . We say that $f$ is **sequentially continuous at $x_{0}$** if for every sequence $((x_{n} ))_{n \in \N}$ in $I$ with $x_{0} = \underset{n \to \infty}{ \lim } x_{n}$ ,

$$
f (x_{0} ) = \underset{n \to \infty}{ \lim } f (x_{n} ) .
$$

We say that $f$ is **sequentially continuous** if it is sequentially continuous at all points in $I$ .

This means that $f$ is sequentially continuous if

$$
f (\underset{n \to \infty}{ \lim } x_{n}) = \underset{n \to \infty}{ \lim } f (x_{n} )
$$

for all convergent sequences $((x_{n} ))_{n \in \N}$ in $I$ with limit in $I$ .

### Example 15.

The function $f : \R \to \R$ with $f (x ) = x^{2} - 3 x + 9$ is sequentially continuous, because

$$
\underset{n \to \infty}{ \lim } (x_{n}^{2} - 3 x_{n} + 9 ) = x_{0}^{2} - 3 x_{0} + 9
$$

whenever $((x_{n} ))_{n \in \N}$ is a sequence in $\R$ with $x_{0} = \underset{n \to \infty}{ \lim } x_{n}$ by the algebra of limits theorem.

### Example 16.

The function $f : [ 0 , \infty ) \to \R$ given by

$$
\begin{align}
f (x ) = \{\begin{matrix} \frac{1}{x} \text{if  }x>0, \\ 0 \text{if  }x=0, \end{matrix}
\end{align}
$$

is not sequentially continuous at $0$ . For example, if $x_{n} = 1 / n$ for $n \in \N$ , then $x_{n} \to 0$ and $f (x_{n} ) = n \to \infty$ as $n \to \infty$ , but $f (0 ) = 0$ .

### Example 17.

Consider the function $f : (0 , \infty ) \to \R$ given by

$$
f (x ) = \frac{1}{x}
$$

for $x \in (0 , \infty )$ . This function is sequentially continuous by the algebra of limits theorem.

The following is the key theorem of this chapter.

### Theorem 18 (Intermediate value theorem).

Let $a , b \in \R$ with $a < b$ and let $y \in \R$ . Suppose that $f : [ a , b ] \to \R$ is sequentially continuous. If $f (a ) \leq y \leq f (b )$ or $f (a ) \geq y \geq f (b )$ , then there exists $c \in [ a , b ]$ such that $f (c ) = y$ .

#### Proof

We only consider the case that $f (a ) \leq y \leq f (b )$ , as the other case is similar.

We define two sequences $((a_{n} ))_{n \in \N}$ and $((b_{n} ))_{n \in \N}$ in $[ a , b ]$ as follows. Set $a_{1} = a$ and $b_{1} = b$ . Now consider the mean $(a_{1} + b_{1} ) / 2$ and compare $y$ with $f ((a_{1} + b_{1} ) / 2 )$ . If $f ((a_{1} + b_{1} ) / 2 ) < y$ , set $a_{2} = (a_{1} + b_{1} ) / 2$ and $b_{2} = b_{1}$ . Otherwise, set $a_{2} = a_{1}$ and $b_{2} = (a_{1} + b_{1} ) / 2$ . Next define $a_{3}$ and $b_{3}$ similarly: if $f ((a_{2} + b_{2} ) / 2 ) < y$ , set $a_{3} = (a_{2} + b_{2} ) / 2$ and $b_{3} = b_{2}$ . Otherwise, set $a_{3} = a_{2}$ and $b_{3} = (a_{2} + b_{2} ) / 2$ . Continue indefinitely.

Due to the definition, the resulting sequences will always satisfy $f (a_{n} ) \leq y \leq f (b_{n} )$ for all $n \in \N$ . Moreover, the sequence $((a_{n} ))_{n \in \N}$ is increasing and $((b_{n} ))_{n \in \N}$ is decreasing. Because we half the distance with each step, they will satisfy

$$
b_{n} - a_{n} = 2^{1 - n} (b - a ) , n \in \N .
$$

It follows that there exists a common limit

$$
L = \underset{n \to \infty}{ \lim } a_{n} = \underset{n \to \infty}{ \lim } b_{n} \in [ a , b ] .
$$

Because $f$ is sequentially continuous, and because of Proposition 37, we conclude that

$$
f (L ) = \underset{n \to \infty}{ \lim } f (a_{n} ) \leq y \text{and } f (L ) = \underset{n \to \infty}{ \lim } f (b_{n} ) \geq y .
$$

Thus $f (L ) = y$ . □

### Corollary 19 ( $n$ -th roots).

Let $n \in \N$ and $a > 0$ . Then there exists $x > 0$ such that $x^{n} = a$ .

#### Proof

If $a \leq 1$ , consider the function $f : [ 0 , 1 ] \to \R$ with $f (x ) = x^{n}$ . It is sequentially continuous by the algebra of limits theorem. Moreover, we find that $f (0 ) = 0 < a$ and $f (1 ) = 1 \geq a$ . Thus the intermediate value theorem implies that there exists $x \in [ 0 , 1 ]$ with $f (x ) = a$ . Hence $x^{n} = a$ .

If $a > 1$ , consider $b = 1 / a < 1$ first. By the above arguments, there exists $y \in [ 0 , 1 ]$ such that $y^{n} = 1 / a$ . Then $x = 1 / y$ satisfies $x^{n} = a$ . □

## 7.2 The exponential function

If we have a power series with radius of convergence $R > 0$ , then it defines a function $f : (- R , R ) \to \R$ . In this section we consider a special power series and the corresponding function.

### Definition 10.

For $x \in \R$ define

$$
 \exp  (x ) = \sum_{n = 0}^{\infty} \frac{x^{n}}{n !} .
$$

### Theorem 10 implies that this power series has the radius of convergence $\infty$ , so there is a well-defined limit for every $x \in \R$ . Hence we may interpret $\exp$ as a function $\exp  : \R \to \R$ . This function is called the **exponential function**.

The following will be useful for some computations with the exponential function.

Lemma 121 (Binomial theorem).

For all $x , y \in \R$ and all $n \in \N$ ,

$$
((x + y ))^{n} = \sum_{i = 0}^{n} \frac{n !}{i ! (n - i ) !} x^{i} y^{n - i} .
$$

#### Proof

The proof is covered in the exercises. □

### Proposition 12.

For all $x , y \in \R$ ,

$$
 \exp  (x + y ) =  \exp  (x )  \exp  (y ) .
$$

#### Proof

Using Theorem 96, we find that

$$
\begin{align}
\begin{matrix} \exp (x ) \exp (y ) &=(\sum_{n = 0}^{\infty} \frac{x^{n}}{n !} )(\sum_{n = 0}^{\infty} \frac{y^{n}}{n !} ) \\ &=\sum_{n = 0}^{\infty}\sum_{i = 0}^{n}\frac{x^{i} y^{n - i}}{i ! (n - i ) !} \\ &=\sum_{n = 0}^{\infty}\frac{1}{n !}\sum_{i = 0}^{n}\frac{n !}{i ! (n - i ) !}x^{i}y^{n - i}.\end{matrix} &
\end{align}
$$

According to the binomial theorem, the last expression is

$$
\sum_{n = 0}^{\infty} \frac{((x + y ))^{n}}{n !} =  \exp  (x + y ) .
$$

□

### Corollary 13.

The exponential function satisfies $\exp  (x ) > 0$ for all $x \in \R$ .

#### Proof

This is an exercise. □

### Proposition 14.

The function $\exp  : \R \to \R$ is sequentially continuous.

#### Proof

We first note that for all $x \in [ - 1 , 1 ]$ ,

$$
| \exp  (x ) - 1|=| \sum_{n = 0}^{\infty} \frac{x^{n}}{n !} - 1 |=| \sum_{n = 1}^{\infty} \frac{x^{n}}{n !} |\leq\sum_{n = 1}^{\infty}\frac{(|x|)^{n}}{n !}\leq\sum_{n = 1}^{\infty}\frac{|x|}{n !}\leq|x| \exp (1 ).
$$

(1)

Now consider a sequence $((x_{n} ))_{n \in \N}$ converging to $x_{0} \in \R$ . Then

$$
| \exp  (x_{n} ) -  \exp  (x_{0} )| =  \exp  (x_{0} ) | \exp  (x_{n} - x_{0} ) - 1|
$$

by Proposition 122. If $n$ is sufficiently large, then $|x_{n} - x_{0}| \leq 1$ . Thus (1) applies and

$$
| \exp  (x_{n} ) -  \exp  (x_{0} )| \leq  \exp  (x_{0} )  \exp  (1 ) |x_{n} - x_{0}| \to 0
$$

as $n \to \infty$ by Proposition 26. This means that

$$
 \exp  (x_{0} ) = \underset{n \to \infty}{ \lim }  \exp  (x_{n} ) .
$$

□

### Corollary 15.

The exponential function is injective and attains every value in $(0 , \infty )$ .

Consequently, we can turn $\exp$ into a bijection $\R \to (0 , \infty )$ by restricting the codomain.

#### Proof

To prove that $\exp$ is injective, suppose that $x , y \in \R$ are such that $\exp  (x ) =  \exp  (y )$ . We may assume that $x \leq y$ (otherwise we exchange $x$ and $y$ ). Then

$$
 \exp  (x )  \exp  (y - x ) =  \exp  (y ) =  \exp  (x )
$$

by Proposition 122. But since $\exp  (x ) > 0$ , this implies that

$$
1 =  \exp  (y - x ) = \sum_{n = 0}^{\infty} \frac{((y - x ))^{n}}{n !} = 1 + y - x + \sum_{n = 2}^{\infty} \frac{((y - x ))^{n}}{n !} \geq 1 + y - x .
$$

Therefore, we conclude that $y - x \leq 0$ ; so $x = y$ .

Now we want to prove that $\exp$ attains every value in $(0 , \infty )$ . We fix $a > 0$ and need to find $x \in \R$ such that $\exp  (x ) = a$ . To this end, choose $M > 0$ such that $M \geq a$ and $1 / M \leq a$ . Then

$$
 \exp  (M ) = 1 + M + \sum_{n = 2}^{\infty} \frac{M^{n}}{n !} > M \geq a ,
$$

while

$$
 \exp  (- M ) = \frac{1}{ \exp  (M )} < \frac{1}{M} \leq a .
$$

We now apply the intermediate value theorem to the restriction of $\exp$ to $[ - M , M ]$ . We conclude that there exists $x \in [ - M , M ]$ with $\exp  (x ) = a$ . □

### Definition 16.

The inverse function of $\exp  : \R \to (0 , \infty )$ is called the **natural logarithm** and denoted by $log$ .

### Proposition 17.

For all $u , v > 0$ ,

$$
log (u v ) = log u + log v .
$$

#### Proof

This follows immediately from Proposition 122. □

### Definition 18.

For $a > 0$ and $x \in \R$ , define $a^{x} =  \exp  (x log a )$ .

For the number $e =  \exp  (1 )$ , this gives

$$
e^{x} =  \exp  (x log ( \exp  (1 ) ) ) =  \exp  (x ) .
$$

For this reason, the exponential function is often denoted by $x \to tail e^{x}$ .

### Proposition 19.

1.  $a^{x y} = ((a^{x} ))^{y}$ for all $a > 0$ and $x , y \in \R$ .
2.  $((a b ))^{x} = a^{x} b^{x}$ for all $a , b > 0$ and $x \in \R$ .
3.  $a^{x + y} = a^{x} a^{y}$ for all $a > 0$ and $x , y \in \R$ .

#### Proof

(i) Let $a > 0$ and $x , y \in \R$ . Then

$$
((a^{x} ))^{y} =  \exp  (y log (a^{x} )) =  \exp  (y log ( \exp  (x log a ) )) =  \exp  (x y log a ) = a^{x y} ,
$$

because $\exp$ and $log$ are inverse functions.

(ii) For $a , b > 0$ and $x \in \R$ ,

$$
((a b ))^{x}= \exp (x log (a b ) )= \exp (x (log a + log b ))= \exp (x log a + x log b ) \\ = \exp (x log a ) \exp (x log b )=a^{x}b^{x}
$$

by Proposition 127 and Proposition 122.

(iii) For $a > 0$ and $x , y \in \R$ ,

$$
a^{x + y}= \exp ((x + y ) log a )= \exp (x log a + y log a ) \\ = \exp (x log a ) \exp (y log a )=a^{x}a^{y}
$$

by Proposition 122. □

This proposition implies that the notation is consistent with the previous definition of powers. We have the equality

$$
a^{1} =  \exp  (log (a ) ) = a
$$

for all $a > 0$ , and hence for all $n \in \N$ :

$$
a^{n} = a^{1 + \dots  + 1} = a \dots  a .
$$

## 7.3 Trigonometric functions

We do not discuss trigonometric functions in detail here, but we give a definition of some of them in terms of power series and we derive some of their most basic properties.

### Definition 10.

For all $x \in \R$ ,

$$
cos (x ) = \sum_{n = 0}^{\infty} \frac{((- 1 ))^{n}}{(2 n ) !} x^{2 n} \text{and } \sin (x ) = \sum_{n = 0}^{\infty} \frac{((- 1 ))^{n}}{(2 n + 1 ) !} x^{2 n + 1} .
$$

We compare the coefficients of these two power series with the coefficients for $\exp  (x )$ :

$$
\begin{align}
 \exp (x ) &=1+x+\frac{x^{2}}{2}+\frac{x^{3}}{6}+\frac{x^{4}}{24}+\frac{x^{5}}{120}+\dots  \\ cos(x ) &=1-\frac{x^{2}}{2}+\frac{x^{4}}{24}-\dots  \\ \sin(x ) &=x-\frac{x^{3}}{6}+\frac{x^{5}}{120}-\dots  \\ &
\end{align}
$$

By comparison with the series $\sum_{n = 0}^{\infty} \frac{(|x|)^{n}}{n !}$ , using Theorem 86, we therefore conclude that the power series for $cos$ and $\sin$ converge for every $x \in \R$ . This means that they have the radius of convergence $\infty$ .

From the above power series representation, it is not immediately obvious that $cos$ and $\sin$ are the familiar **cosine** and **sine** functions. In order to see this, it’s best to work with complex numbers and make use of the formula $\exp  (i x ) = cos (x ) + i \sin (x )$ . But this discussion is postponed for later. Nevertheless, the following formula makes the connection more plausible.

### Proposition 11.

For every $x \in \R$ , the identity $(cos)^{2} (x ) + (\sin)^{2} (x ) = 1$ holds true.

#### Proof

We use Theorem 96 to compute

$$
(cos)^{2} (x ) = ((\sum_{n = 0}^{\infty} \frac{((- 1 ))^{n} x^{2 n}}{(2 n ) !} ))^{2} = \sum_{n = 0}^{\infty} c_{n} ,
$$

where

$$
\begin{align}
\begin{matrix}c_{n} &=\frac{((- 1 ))^{n} x^{2 n}}{(2 n ) !}\cdot 1+\frac{((- 1 ))^{n - 1} x^{2 n - 2}}{(2 n - 2 ) !}\cdot\frac{- x^{2}}{2}+\dots +1\cdot\frac{((- 1 ))^{n} x^{2 n}}{(2 n ) !} \\ &=((- 1 ))^{n}x^{2 n}(\frac{1}{(2 n ) ! 0 !} + \frac{1}{(2 n - 2 ) ! 2 !} + \dots  + \frac{1}{0 ! (2 n ) !})\end{matrix} &
\end{align}
$$

and for every $n \in \N_{0}$ . Similarly,

$$
\begin{align}
\begin{matrix}(\sin)^{2}(x ) &=((\sum_{n = 0}^{\infty} \frac{((- 1 ))^{n} x^{2 n + 1}}{(2 n + 1 ) !} ))^{2} \\ &=(\sum_{n = 1}^{\infty} \frac{((- 1 ))^{n - 1} x^{2 n - 1}}{(2 n - 1 ) !} )(\sum_{n = 0}^{\infty} \frac{((- 1 ))^{n} x^{2 n + 1}}{(2 n + 1 ) !} )=\sum_{n = 0}^{\infty}c_{n}^{′},\end{matrix} &
\end{align}
$$

where $c_{0}^{′} = 0$ and

$$
\begin{align}
\begin{matrix}c_{n}^{′} &=\frac{((- 1 ))^{n - 1} x^{2 n - 1}}{(2 n - 1 ) !}\cdot x+\frac{((- 1 ))^{n - 2} x^{2 n - 3}}{(2 n - 3 ) !}\cdot\frac{- x^{3}}{6}+\dots +x\cdot\frac{((- 1 ))^{n - 1} x^{2 n - 1}}{(2 n - 1 ) !} \\ &=-((- 1 ))^{n}x^{2 n}(\frac{1}{(2 n - 1 ) ! 1 !} + \frac{1}{(2 n - 3 ) ! 3 !} + \dots  + \frac{1}{1 ! (2 n - 1 ) !})\end{matrix} &
\end{align}
$$

for every $n \geq 1$ .

We now compute $c_{n} + c_{n}^{′}$ for every $n \in \N_{0}$ . Clearly $c_{0} + c_{0}^{′} = 1$ . Moreover, given $n \in \N$ , we compute

$$
\begin{align}
\begin{matrix}c_{n}+c_{n}^{′} &=((- 1 ))^{n}x^{2 n}(\frac{1}{(2 n ) ! 0 !} - \frac{1}{(2 n - 1 ) ! 1 !} + \frac{1}{(2 n - 2 ) ! 2 !} - \frac{1}{(2 n - 3 ) ! 3 !}) \\ (+ \dots  + \frac{1}{0 ! (2 n ) !}) \\ &=\frac{((- 1 ))^{n} x^{2 n}}{(2 n ) !}\sum_{i = 0}^{2 n}\frac{(2 n ) !}{(2 n - i ) ! i !}1^{2 n - i}((- 1 ))^{i} \\ &=\frac{((- 1 ))^{n} x^{2 n}}{(2 n ) !}((1 - 1 ))^{2 n}=0\end{matrix} &
\end{align}
$$

by the binomial theorem. Therefore,

$$
(cos)^{2} (x ) + (\sin)^{2} (x ) = \sum_{n = 0}^{\infty} (c_{n} + c_{n}^{′} ) = 1.
$$

□

The following is an immediate consequence.

### Corollary 12.

For every $x \in \R$ , the inequalities

$$
- 1 \leq cos (x ) \leq 1 \text{and } - 1 \leq \sin (x ) \leq 1
$$

hold true.
