Chapter 7

## [Real functions](MA10207-web.html#QQ2-12-37)

From now on, we study functions $f : I \rightarrow ℝ$ , where the domain $I$ is a subset of $ℝ$ , typically an interval. Such functions can be visualised with the help of their graphs.

Definition 113.

Let $I \subseteq ℝ$ and consider a function $f : I \rightarrow ℝ$ . The **graph** of $f$ is the set $\left\{\left( x , f \left( x \right) \right) : x \in ℝ\right\} \subseteq I \times ℝ$ .

Since the graph of $f$ is a subset of $I \times ℝ$ , which in turn is a subset of $ℝ^{2}$ , we can draw a sketch of it. This is not the only purpose of a graph, but for the moment, this is what we mostly use it for (in the lectures but not in these notes).

### 7.1 [Sequential continuity](MA10207-web.html#QQ2-12-38)

The following notion is about what happens if we evaluate a function at the points given by a convergent sequence.

Definition 114.

Let $I \subseteq ℝ$ and $x_{0} \in I$ . Consider a function $f : I \rightarrow ℝ$ . We say that $f$ is **sequentially continuous at $x_{0}$** if for every sequence $\left(\left( x_{n} \right)\right)_{n \in ℕ}$ in $I$ with $x_{0} = \underset{n \rightarrow \infty}{ \lim } x_{n}$ ,

$$
f \left( x_{0} \right) = \underset{n \rightarrow \infty}{ \lim } f \left( x_{n} \right) .
$$

We say that $f$ is **sequentially continuous** if it is sequentially continuous at all points in $I$ .

This means that $f$ is sequentially continuous if

$$
f \left(\underset{n \rightarrow \infty}{ \lim } x_{n}\right) = \underset{n \rightarrow \infty}{ \lim } f \left( x_{n} \right)
$$

for all convergent sequences $\left(\left( x_{n} \right)\right)_{n \in ℕ}$ in $I$ with limit in $I$ .

Example 115.

The function $f : ℝ \rightarrow ℝ$ with $f \left( x \right) = x^{2} - 3 x + 9$ is sequentially continuous, because

$$
\underset{n \rightarrow \infty}{ \lim } \left( x_{n}^{2} - 3 x_{n} + 9 \right) = x_{0}^{2} - 3 x_{0} + 9
$$

whenever $\left(\left( x_{n} \right)\right)_{n \in ℕ}$ is a sequence in $ℝ$ with $x_{0} = \underset{n \rightarrow \infty}{ \lim } x_{n}$ by the algebra of limits theorem.

Example 116.

The function $f : \left[ 0 , \infty \right) \rightarrow ℝ$ given by

$$
\begin{align}
f \left( x \right) = \left\{\begin{matrix} \frac{1}{x} & \text{if  }x>0\text{}, \\ 0 & \text{if  }x=0\text{}, \end{matrix}\right
\end{align}
$$

is not sequentially continuous at $0$ . For example, if $x_{n} = 1 / n$ for $n \in ℕ$ , then $x_{n} \rightarrow 0$ and $f \left( x_{n} \right) = n \rightarrow \infty$ as $n \rightarrow \infty$ , but $f \left( 0 \right) = 0$ .

Example 117.

Consider the function $f : \left( 0 , \infty \right) \rightarrow ℝ$ given by

$$
f \left( x \right) = \frac{1}{x}
$$

for $x \in \left( 0 , \infty \right)$ . This function is sequentially continuous by the algebra of limits theorem.

The following is the key theorem of this chapter.

Theorem 118 (Intermediate value theorem).

Let $a , b \in ℝ$ with $a < b$ and let $y \in ℝ$ . Suppose that $f : \left[ a , b \right] \rightarrow ℝ$ is sequentially continuous. If $f \left( a \right) \leq y \leq f \left( b \right)$ or $f \left( a \right) \geq y \geq f \left( b \right)$ , then there exists $c \in \left[ a , b \right]$ such that $f \left( c \right) = y$ .

Proof.  We only consider the case that $f \left( a \right) \leq y \leq f \left( b \right)$ , as the other case is similar.

We define two sequences $\left(\left( a_{n} \right)\right)_{n \in ℕ}$ and $\left(\left( b_{n} \right)\right)_{n \in ℕ}$ in $\left[ a , b \right]$ as follows. Set $a_{1} = a$ and $b_{1} = b$ . Now consider the mean $\left( a_{1} + b_{1} \right) / 2$ and compare $y$ with $f \left( \left( a_{1} + b_{1} \right) / 2 \right)$ . If $f \left( \left( a_{1} + b_{1} \right) / 2 \right) < y$ , set $a_{2} = \left( a_{1} + b_{1} \right) / 2$ and $b_{2} = b_{1}$ . Otherwise, set $a_{2} = a_{1}$ and $b_{2} = \left( a_{1} + b_{1} \right) / 2$ . Next define $a_{3}$ and $b_{3}$ similarly: if $f \left( \left( a_{2} + b_{2} \right) / 2 \right) < y$ , set $a_{3} = \left( a_{2} + b_{2} \right) / 2$ and $b_{3} = b_{2}$ . Otherwise, set $a_{3} = a_{2}$ and $b_{3} = \left( a_{2} + b_{2} \right) / 2$ . Continue indefinitely.

Due to the definition, the resulting sequences will always satisfy $f \left( a_{n} \right) \leq y \leq f \left( b_{n} \right)$ for all $n \in ℕ$ . Moreover, the sequence $\left(\left( a_{n} \right)\right)_{n \in ℕ}$ is increasing and $\left(\left( b_{n} \right)\right)_{n \in ℕ}$ is decreasing. Because we half the distance with each step, they will satisfy

$$
b_{n} - a_{n} = 2^{1 - n} \left( b - a \right) , n \in ℕ .
$$

It follows that there exists a common limit

$$
L = \underset{n \rightarrow \infty}{ \lim } a_{n} = \underset{n \rightarrow \infty}{ \lim } b_{n} \in \left[ a , b \right] .
$$

Because $f$ is sequentially continuous, and because of Proposition [37](MA10207-webch4.html#x8-21013r37), we conclude that

$$
f \left( L \right) = \underset{n \rightarrow \infty}{ \lim } f \left( a_{n} \right) \leq y \text{and } f \left( L \right) = \underset{n \rightarrow \infty}{ \lim } f \left( b_{n} \right) \geq y .
$$

Thus $f \left( L \right) = y$ . □

Corollary 119 ( $n$ -th roots).

Let $n \in ℕ$ and $a > 0$ . Then there exists $x > 0$ such that $x^{n} = a$ .

Proof.  If $a \leq 1$ , consider the function $f : \left[ 0 , 1 \right] \rightarrow ℝ$ with $f \left( x \right) = x^{n}$ . It is sequentially continuous by the algebra of limits theorem. Moreover, we find that $f \left( 0 \right) = 0 < a$ and $f \left( 1 \right) = 1 \geq a$ . Thus the intermediate value theorem implies that there exists $x \in \left[ 0 , 1 \right]$ with $f \left( x \right) = a$ . Hence $x^{n} = a$ .

If $a > 1$ , consider $b = 1 / a < 1$ first. By the above arguments, there exists $y \in \left[ 0 , 1 \right]$ such that $y^{n} = 1 / a$ . Then $x = 1 / y$ satisfies $x^{n} = a$ . □

### 7.2 [The exponential function](MA10207-web.html#QQ2-12-39)

If we have a power series with radius of convergence $R > 0$ , then it defines a function $f : \left( - R , R \right) \rightarrow ℝ$ . In this section we consider a special power series and the corresponding function.

Definition 120.

For $x \in ℝ$ define

$$
 \exp  \left( x \right) = \sum_{n = 0}^{\infty} \frac{x^{n}}{n !} .
$$

Theorem [100](MA10207-webch5.html#x10-33010r100) implies that this power series has the radius of convergence $\infty$ , so there is a well-defined limit for every $x \in ℝ$ . Hence we may interpret $\exp$ as a function $\exp  : ℝ \rightarrow ℝ$ . This function is called the **exponential function**.

The following will be useful for some computations with the exponential function.

Lemma 121 (Binomial theorem).

For all $x , y \in ℝ$ and all $n \in ℕ$ ,

$$
\left(\left( x + y \right)\right)^{n} = \sum_{i = 0}^{n} \frac{n !}{i ! \left( n - i \right) !} x^{i} y^{n - i} .
$$

Proof.  The proof is covered in the exercises. □

Proposition 122.

For all $x , y \in ℝ$ ,

$$
 \exp  \left( x + y \right) =  \exp  \left( x \right)  \exp  \left( y \right) .
$$

Proof.  Using Theorem [96](MA10207-webch5.html#x10-32001r96), we find that

$$
\begin{align}
\begin{matrix} \exp \left( x \right) \exp \left( y \right) & =\left( \sum_{n = 0}^{\infty} \frac{x^{n}}{n !} \right)\left( \sum_{n = 0}^{\infty} \frac{y^{n}}{n !} \right) \\ & =\sum_{n = 0}^{\infty}\sum_{i = 0}^{n}\frac{x^{i} y^{n - i}}{i ! \left( n - i \right) !} \\ & =\sum_{n = 0}^{\infty}\frac{1}{n !}\sum_{i = 0}^{n}\frac{n !}{i ! \left( n - i \right) !}x^{i}y^{n - i}.\end{matrix} &
\end{align}
$$

According to the binomial theorem, the last expression is

$$
\sum_{n = 0}^{\infty} \frac{\left(\left( x + y \right)\right)^{n}}{n !} =  \exp  \left( x + y \right) .
$$

□

Corollary 123.

The exponential function satisfies $\exp  \left( x \right) > 0$ for all $x \in ℝ$ .

Proof.  This is an exercise. □

Proposition 124.

The function $\exp  : ℝ \rightarrow ℝ$ is sequentially continuous.

Proof.  We first note that for all $x \in \left[ - 1 , 1 \right]$ ,

$$
\left| \exp  \left( x \right) - 1\right|=\left| \sum_{n = 0}^{\infty} \frac{x^{n}}{n !} - 1 \left|=\left| \sum_{n = 1}^{\infty} \frac{x^{n}}{n !} \left|\leq\sum_{n = 1}^{\infty}\frac{\left(\left|x\right|\right)^{n}}{n !}\leq\sum_{n = 1}^{\infty}\frac{\left|x\right|}{n !}\leq\left|x\right| \exp \left( 1 \right).
$$

(1)

Now consider a sequence $\left(\left( x_{n} \right)\right)_{n \in ℕ}$ converging to $x_{0} \in ℝ$ . Then

$$
\left| \exp  \left( x_{n} \right) -  \exp  \left( x_{0} \right)\right| =  \exp  \left( x_{0} \right) \left| \exp  \left( x_{n} - x_{0} \right) - 1\right|
$$

by Proposition [122](#x12-39005r122). If $n$ is sufficiently large, then $\left|x_{n} - x_{0}\right| \leq 1$ . Thus ([1](#x12-39008r1)) applies and

$$
\left| \exp  \left( x_{n} \right) -  \exp  \left( x_{0} \right)\right| \leq  \exp  \left( x_{0} \right)  \exp  \left( 1 \right) \left|x_{n} - x_{0}\right| \rightarrow 0
$$

as $n \rightarrow \infty$ by Proposition [26](MA10207-webch3.html#x7-18003r26). This means that

$$
 \exp  \left( x_{0} \right) = \underset{n \rightarrow \infty}{ \lim }  \exp  \left( x_{n} \right) .
$$

□

Corollary 125.

The exponential function is injective and attains every value in $\left( 0 , \infty \right)$ .

Consequently, we can turn $\exp$ into a bijection $ℝ \rightarrow \left( 0 , \infty \right)$ by restricting the codomain.

Proof.  To prove that $\exp$ is injective, suppose that $x , y \in ℝ$ are such that $\exp  \left( x \right) =  \exp  \left( y \right)$ . We may assume that $x \leq y$ (otherwise we exchange $x$ and $y$ ). Then

$$
 \exp  \left( x \right)  \exp  \left( y - x \right) =  \exp  \left( y \right) =  \exp  \left( x \right)
$$

by Proposition [122](#x12-39005r122). But since $\exp  \left( x \right) > 0$ , this implies that

$$
1 =  \exp  \left( y - x \right) = \sum_{n = 0}^{\infty} \frac{\left(\left( y - x \right)\right)^{n}}{n !} = 1 + y - x + \sum_{n = 2}^{\infty} \frac{\left(\left( y - x \right)\right)^{n}}{n !} \geq 1 + y - x .
$$

Therefore, we conclude that $y - x \leq 0$ ; so $x = y$ .

Now we want to prove that $\exp$ attains every value in $\left( 0 , \infty \right)$ . We fix $a > 0$ and need to find $x \in ℝ$ such that $\exp  \left( x \right) = a$ . To this end, choose $M > 0$ such that $M \geq a$ and $1 / M \leq a$ . Then

$$
 \exp  \left( M \right) = 1 + M + \sum_{n = 2}^{\infty} \frac{M^{n}}{n !} > M \geq a ,
$$

while

$$
 \exp  \left( - M \right) = \frac{1}{ \exp  \left( M \right)} < \frac{1}{M} \leq a .
$$

We now apply the intermediate value theorem to the restriction of $\exp$ to $\left[ - M , M \right]$ . We conclude that there exists $x \in \left[ - M , M \right]$ with $\exp  \left( x \right) = a$ . □

Definition 126.

The inverse function of $\exp  : ℝ \rightarrow \left( 0 , \infty \right)$ is called the **natural logarithm** and denoted by $log$ .

Proposition 127.

For all $u , v > 0$ ,

$$
log \left( u v \right) = log u + log v .
$$

Proof.  This follows immediately from Proposition [122](#x12-39005r122). □

Definition 128.

For $a > 0$ and $x \in ℝ$ , define $a^{x} =  \exp  \left( x log a \right)$ .

For the number $e =  \exp  \left( 1 \right)$ , this gives

$$
e^{x} =  \exp  \left( x log \left(  \exp  \left( 1 \right) \right) \right) =  \exp  \left( x \right) .
$$

For this reason, the exponential function is often denoted by $x \rightarrow tail e^{x}$ .

Proposition 129.

1.  $a^{x y} = \left(\left( a^{x} \right)\right)^{y}$ for all $a > 0$ and $x , y \in ℝ$ .
2.  $\left(\left( a b \right)\right)^{x} = a^{x} b^{x}$ for all $a , b > 0$ and $x \in ℝ$ .
3.  $a^{x + y} = a^{x} a^{y}$ for all $a > 0$ and $x , y \in ℝ$ .

Proof.  [(i)](#x12-390151) Let $a > 0$ and $x , y \in ℝ$ . Then

$$
\left(\left( a^{x} \right)\right)^{y} =  \exp  \left(y log \left( a^{x} \right)\right) =  \exp  \left(y log \left(  \exp  \left( x log a \right) \right)\right) =  \exp  \left( x y log a \right) = a^{x y} ,
$$

because $\exp$ and $log$ are inverse functions.

[(ii)](#x12-390172) For $a , b > 0$ and $x \in ℝ$ ,

$$
\left(\left( a b \right)\right)^{x}= \exp \left( x log \left( a b \right) \right)= \exp \left(x \left( log a + log b \right)\right)= \exp \left( x log a + x log b \right) \\ = \exp \left( x log a \right) \exp \left( x log b \right)=a^{x}b^{x}
$$

by Proposition [127](#x12-39012r127) and Proposition [122](#x12-39005r122).

[(iii)](#x12-390193) For $a > 0$ and $x , y \in ℝ$ ,

$$
a^{x + y}= \exp \left( \left( x + y \right) log a \right)= \exp \left( x log a + y log a \right) \\ = \exp \left( x log a \right) \exp \left( y log a \right)=a^{x}a^{y}
$$

by Proposition [122](#x12-39005r122). □

This proposition implies that the notation is consistent with the previous definition of powers. We have the equality

$$
a^{1} =  \exp  \left( log \left( a \right) \right) = a
$$

for all $a > 0$ , and hence for all $n \in ℕ$ :

$$
a^{n} = a^{1 + \dots  + 1} = a \dots  a .
$$

### 7.3 [Trigonometric functions](MA10207-web.html#QQ2-12-40)

We do not discuss trigonometric functions in detail here, but we give a definition of some of them in terms of power series and we derive some of their most basic properties.

Definition 130.

For all $x \in ℝ$ ,

$$
cos \left( x \right) = \sum_{n = 0}^{\infty} \frac{\left(\left( - 1 \right)\right)^{n}}{\left( 2 n \right) !} x^{2 n} \text{and } sin \left( x \right) = \sum_{n = 0}^{\infty} \frac{\left(\left( - 1 \right)\right)^{n}}{\left( 2 n + 1 \right) !} x^{2 n + 1} .
$$

We compare the coefficients of these two power series with the coefficients for $\exp  \left( x \right)$ :

$$
\begin{align}
 \exp \left( x \right) & =1+x+\frac{x^{2}}{2}+\frac{x^{3}}{6}+\frac{x^{4}}{24}+\frac{x^{5}}{120}+\dots  & & \\ cos\left( x \right) & =1-\frac{x^{2}}{2}+\frac{x^{4}}{24}-\dots  & & \\ sin\left( x \right) & =x-\frac{x^{3}}{6}+\frac{x^{5}}{120}-\dots  & & \\ & &
\end{align}
$$

By comparison with the series $\sum_{n = 0}^{\infty} \frac{\left(\left|x\right|\right)^{n}}{n !}$ , using Theorem [86](MA10207-webch5.html#x10-31001r86), we therefore conclude that the power series for $cos$ and $sin$ converge for every $x \in ℝ$ . This means that they have the radius of convergence $\infty$ .

From the above power series representation, it is not immediately obvious that $cos$ and $sin$ are the familiar **cosine** and **sine** functions. In order to see this, it’s best to work with complex numbers and make use of the formula $\exp  \left( i x \right) = cos \left( x \right) + i sin \left( x \right)$ . But this discussion is postponed for later. Nevertheless, the following formula makes the connection more plausible.

Proposition 131.

For every $x \in ℝ$ , the identity $\left(cos\right)^{2} \left( x \right) + \left(sin\right)^{2} \left( x \right) = 1$ holds true.

Proof.  We use Theorem [96](MA10207-webch5.html#x10-32001r96) to compute

$$
\left(cos\right)^{2} \left( x \right) = \left(\left( \sum_{n = 0}^{\infty} \frac{\left(\left( - 1 \right)\right)^{n} x^{2 n}}{\left( 2 n \right) !} \right)\right)^{2} = \sum_{n = 0}^{\infty} c_{n} ,
$$

where

$$
\begin{align}
\begin{matrix}c_{n} & =\frac{\left(\left( - 1 \right)\right)^{n} x^{2 n}}{\left( 2 n \right) !}\cdot 1+\frac{\left(\left( - 1 \right)\right)^{n - 1} x^{2 n - 2}}{\left( 2 n - 2 \right) !}\cdot\frac{- x^{2}}{2}+\dots +1\cdot\frac{\left(\left( - 1 \right)\right)^{n} x^{2 n}}{\left( 2 n \right) !} \\ & =\left(\left( - 1 \right)\right)^{n}x^{2 n}\left(\frac{1}{\left( 2 n \right) ! 0 !} + \frac{1}{\left( 2 n - 2 \right) ! 2 !} + \dots  + \frac{1}{0 ! \left( 2 n \right) !}\right)\end{matrix} &
\end{align}
$$

and for every $n \in ℕ_{0}$ . Similarly,

$$
\begin{align}
\begin{matrix}\left(sin\right)^{2}\left( x \right) & =\left(\left( \sum_{n = 0}^{\infty} \frac{\left(\left( - 1 \right)\right)^{n} x^{2 n + 1}}{\left( 2 n + 1 \right) !} \right)\right)^{2} \\ & =\left( \sum_{n = 1}^{\infty} \frac{\left(\left( - 1 \right)\right)^{n - 1} x^{2 n - 1}}{\left( 2 n - 1 \right) !} \right)\left( \sum_{n = 0}^{\infty} \frac{\left(\left( - 1 \right)\right)^{n} x^{2 n + 1}}{\left( 2 n + 1 \right) !} \right)=\sum_{n = 0}^{\infty}c_{n}^{′},\end{matrix} &
\end{align}
$$

where $c_{0}^{′} = 0$ and

$$
\begin{align}
\begin{matrix}c_{n}^{′} & =\frac{\left(\left( - 1 \right)\right)^{n - 1} x^{2 n - 1}}{\left( 2 n - 1 \right) !}\cdot x+\frac{\left(\left( - 1 \right)\right)^{n - 2} x^{2 n - 3}}{\left( 2 n - 3 \right) !}\cdot\frac{- x^{3}}{6}+\dots +x\cdot\frac{\left(\left( - 1 \right)\right)^{n - 1} x^{2 n - 1}}{\left( 2 n - 1 \right) !} \\ & =-\left(\left( - 1 \right)\right)^{n}x^{2 n}\left(\frac{1}{\left( 2 n - 1 \right) ! 1 !} + \frac{1}{\left( 2 n - 3 \right) ! 3 !} + \dots  + \frac{1}{1 ! \left( 2 n - 1 \right) !}\right)\end{matrix} &
\end{align}
$$

for every $n \geq 1$ .

We now compute $c_{n} + c_{n}^{′}$ for every $n \in ℕ_{0}$ . Clearly $c_{0} + c_{0}^{′} = 1$ . Moreover, given $n \in ℕ$ , we compute

$$
\begin{align}
\begin{matrix}c_{n}+c_{n}^{′} & =\left(\left( - 1 \right)\right)^{n}x^{2 n}\left(\frac{1}{\left( 2 n \right) ! 0 !} - \frac{1}{\left( 2 n - 1 \right) ! 1 !} + \frac{1}{\left( 2 n - 2 \right) ! 2 !} - \frac{1}{\left( 2 n - 3 \right) ! 3 !}\right) \\ & \left( + \dots  + \frac{1}{0 ! \left( 2 n \right) !}\right) \\ & =\frac{\left(\left( - 1 \right)\right)^{n} x^{2 n}}{\left( 2 n \right) !}\sum_{i = 0}^{2 n}\frac{\left( 2 n \right) !}{\left( 2 n - i \right) ! i !}1^{2 n - i}\left(\left( - 1 \right)\right)^{i} \\ & =\frac{\left(\left( - 1 \right)\right)^{n} x^{2 n}}{\left( 2 n \right) !}\left(\left( 1 - 1 \right)\right)^{2 n}=0\end{matrix} &
\end{align}
$$

by the binomial theorem. Therefore,

$$
\left(cos\right)^{2} \left( x \right) + \left(sin\right)^{2} \left( x \right) = \sum_{n = 0}^{\infty} \left( c_{n} + c_{n}^{′} \right) = 1.
$$

□

The following is an immediate consequence.

Corollary 132.

For every $x \in ℝ$ , the inequalities

$$
- 1 \leq cos \left( x \right) \leq 1 \text{and } - 1 \leq sin \left( x \right) \leq 1
$$

hold true.
