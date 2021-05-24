### 2.2 Multiplication principle

Consider the problem where we have two finite sets, say $E$ and $F$, and
we wish to count the number of ways of choosing one element from $E$ and
one from $F$. How many ways are there of doing this?

Suppose that $E=\set{ e_{1} , … ⁡ , e_{n} }$ has
$|E|=n$ elements and $F=\set{ f_{1} , … ⁡ , f_{m} }$
has $|F|=m$ elements. We can write an outcome as the pair
$( e_{i} , f_{j} )$ and write all the outcomes in an
$ntimes m$ matrix:

$$
\begin{align}
\begin{matrix}( e_{1} , f_{1} ) & ( e_{1} , f_{2} ) & ( e_{1} , f_{3} ) & …⁡ & ( e_{1} , f_{m} ) \\ ( e_{2} , f_{1} ) & ( e_{2} , f_{2} ) & ( e_{2} , f_{3} ) & …⁡ & ( e_{2} , f_{m} ) \\ \vdots⁡ & \vdots⁡ & \vdots⁡ & \ddots & \vdots⁡ \\ ( e_{n} , f_{1} ) & ( e_{n} , f_{2} ) & ( e_{n} , f_{3} ) & …⁡ & ( e_{n} , f_{m} )\end{matrix} & & & text{}
\end{align}
$$

There are thus $ntimes m=nm$
$( = | E | | F | )$ possible choices of
choosing one from $E$ and one from $F$.

Theorem 6 (Multiplication principle)
Suppose that $E_{1},E_{2},…⁡,E_{m}$ are sets containing
$n_{1},n_{2},…⁡,n_{m}$ elements, respectively. The number of ways of
first choosing an element of $E_{1}$, then an element of $E_{2}$, $…⁡$
and finally an element of $E_{m}$, is

$$
\begin{align}
\prod_{i = 1}^{m}n_{i}=n_{1}n_{2}\dots n_{m}. & & & text{}
\end{align}
$$

Proof: We use induction. Let $F_{k}$ be the set of all choices from sets
$E_{1},…⁡,E_{k}$ as above $( k \leq m )$ then
$F_{k}=\set{ ( e_{1} , e_{2} , … ⁡ , e_{k} ) : e_{1} \in E_{1} , … ⁡ , e_{k} \in E_{k} }$.
The result is trivial for $k=1$ and we have shown above that if $k=2$
then
$|F_{2}|=|E_{1}|\times|E_{2}|=n_{1}n_{2}$.
Assume the result is true for $m=k$, so that
$|F_{k}|=|E_{1}|\times|E_{2}|\times\dots \times|E_{k}|=n_{1}n_{2}dots n_{k}$.
Consider

$$
\begin{align}
|F_{k + 1}| & = & |\set{ ( e_{1} , e_{2} , … ⁡ , e_{k + 1} ) : e_{1} \in E_{1} , … ⁡ , e_{k + 1} \in E_{k + 1} \right\}| & \text{} \\ & & & \text{} \\ & = & |\set{ ( e_{1} , e_{2} , … ⁡ , e_{k + 1} ) : ( e_{1} , … ⁡ , e_{k} ) \in F_{k} , e_{k + 1} \in E_{k + 1} \right\}| & \text{} \\ & & & \text{} \\ & = & |F_{k}|\times|E_{k + 1}|\text{(using the case }k=2\text{)} & \text{} \\ & & & \text{} \\ & = & ( | E_{1} | \times | E_{2} | \times \dots  \times | E_{k} | )\times|E_{k + 1}|=n_{1}n_{2}\dots n_{k}n_{k + 1}. & text{}
\end{align}
$$

Thus, if the result is true for $k$ it is true for $k+1$. Hence, as it
is true for $k=1,2$ it is true for all $m$. $square$

Example 16 Suppose that we toss a fair coin, roll a fair die and pick a
card at random from a full pack of cards. What is the probability that
we toss a head and score a $5$ or a $6$ on the die and pick a red
picture[2](#fn2x2) card?

Let
$\Omega=\set{ ( t , d , c ) : t \in \set{ H , T \right\} , d \in \set{ 1 , … ⁡ , 6 \right\} , c \in \set{ A ♡ ⁡ , … ⁡ , K ♣ ⁡ \right\} }$
then

$$
\begin{align}
|\Omega| & = & |\set{ H , T \right\}|\times|\set{ 1 , … ⁡ , 6 \right\}|\times|\set{ A ♡ ⁡ , … ⁡ , K ♣ ⁡ \right\}| & \text{} \\ & = & 2\times 6\times 52=624. & text{}
\end{align}
$$

Thus, there are 624 equally likely outcomes as the coin and the die are
fair and the card is picked at random. Let $E$ be the event that we toss
a head and score a $5$ or a $6$ on the die and pick a red picture card.
Then

$$
\begin{align}
E & = & \set{ ( t , d , c ) : t \in \set{ H \right\} , d \in \set{ 5 , 6 \right\} , c \in \set{ J ♡ ⁡ , Q ♡ ⁡ , K ♡ ⁡ , J ♢ ⁡ , Q ♢ ⁡ , K ♢ ⁡ \right\} \right\} & text{}
\end{align}
$$

so that

$$
\begin{align}
|E| & = & |\set{ H \right\}|\times|\set{ 5 , 6 \right\}|\times|\set{ J ♡ ⁡ , Q ♡ ⁡ , K ♡ ⁡ , J ♢ ⁡ , Q ♢ ⁡ , K ♢ ⁡ \right\}| & \text{} \\ & = & 1\times 2\times 6=12. & text{}
\end{align}
$$

Thus, $E$ can occur in 12 different ways. Using the classical
interpretation of probability, equation
([2.1](nose3.htm#x12-19005r2.1)), we have that

$$
\begin{align}
ℙ( E )=\frac{| E |}{| \Omega |}=\frac{1 2}{6 2 4}=\frac{1}{5 2}. & & & text{}
\end{align}
$$

[2](#fn2x2-bk)A picture card is either a Jack, Queen or King.

\


