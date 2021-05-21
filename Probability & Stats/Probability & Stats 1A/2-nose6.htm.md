[[prev](nose5.htm)] [[prev-tail](nose5.htm#tailnose5.htm)] [[tail](#tailnose6.htm)] [[up](noch2.htm#nose6.htm)]

### 2.4 Unordered choice: combinations

A combination is an unordered arrangement of objects. Suppose that we have a set $E=\left\{ e_{1} , … ⁡ , e_{n} \right\}$ of $n$ distinct elements and wish to choose $r$ elements from $E$ so that the arrangement of the elements is irrelevant. How many ways can we do this?

Example 20 An ice-cream shop offers three flavours of ice-cream: vanilla (V), strawberry (S) and lemon (L). You are allowed to choose two scoops. How many different ways can you choose these?

   
The order of the scoops does not matter. There are two cases:

1.

You are not allowed to pick the same flavour twice (sampling without replacement).   
From Corollary [8](nose5.htm#x14-230028) there are $3!/\left( 3 - 2 \right)!=6$ permutations: $\left( V , S \right)$, $\left( S , V \right)$, $\left( V , L \right)$, $\left( L , V \right)$, $\left( S , L \right)$, $\left( L , S \right)$ but as the order of the scoops don’t matter then each option appears twice and thus there are only $\frac{3 !}{\left( 3 - 2 \right) ! 2 !}=3$ combinations: $\left( V , S \right)$ $\left( = \left( S , V \right) \right)$, $\left( V , L \right)$ $\left( = \left( L , V \right) \right)$, $\left( S , L \right)$ $\left( = \left( L , S \right) \right)$.

2.

You are allowed to pick the same flavour twice (sampling with replacement).   
From Corollary [7](nose5.htm#x14-220017) there are $3^{2}=9$ permutations: $\left( V , S \right)$, $\left( S , V \right)$, $\left( V , L \right)$, $\left( L , V \right)$, $\left( S , L \right)$, $\left( L , S \right)$, $\left( V , V \right)$, $\left( S , S \right)$, $\left( L , L \right)$ but as the order of the scoops don’t matter there are only six combinations: $\left( V , S \right)$ $\left( = \left( S , V \right) \right)$, $\left( V , L \right)$ $\left( = \left( L , V \right) \right)$, $\left( S , L \right)$ $\left( = \left( L , S \right) \right)$, $\left( V , V \right)$, $\left( S , S \right)$, $\left( L , L \right)$. Note that in discounting the order, we treat differently the choices with no repetition (which, in this case, can be ordered two ways) to those with repetition (which, in this case, can only be ordered one way).

As Example [20](#x15-2400120) suggests, it will be easier to consider the number of combinations which correspond to sampling without replacement.

#### 2.4.1 Sampling without replacement

We consider the number of ways of choosing $r$ different elements from a set of $n$ elements where order does not matter.

From Corollary [8](nose5.htm#x14-230028), the number of ordered samples (or permutations) is $n!/\left( n - r \right)!$. The number of times that we have counted each choice, when we do not take account of order, is the number of distinct ways of arranging $r$ different objects. From Corollary [9](nose5.htm#x14-230089), there are $r!$ ways of doing this. Therefore, for each of the $n!/\left( n - r \right)!$ different permutations there are $r!$ permutations which contain the same elements. Thus, when order does not matter, there are $n!/\left\{ \left( n - r \right) ! r ! \right\}$ distinct combinations. We thus have the following corollary.

Corollary 10 (Unordered choice: sampling without replacement, combinations)  
The number of combinations of length $r$ taken from a set of size $n$, or equivalently, the number of ways of choosing $r$ different elements from a set of $n$ elements where order does not matter is

$$
\begin{align}
\left(\frac{n}{r}\right) & := & \frac{n !}{r ! \left( n - r \right) !}. & \text{(2.3)}\text{}\text{}
\end{align}
$$

Notes

1.

$\left(\frac{n}{r}\right)$ is read as “$n$ choose $r$”.

2.

The numbers $\left(\frac{n}{r}\right)$ are called the binomial coefficients and occur in the expansion[3](#fn3x2) 
$$
\begin{align}
\left(\left( x + y \right)\right)^{n} & = & \sum_{r = 0}^{n}\left(\frac{n}{r}\right)x^{r}y^{n - r} & \text{} \\ & = & \left(\frac{n}{0}\right)y^{n}+\left(\frac{n}{1}\right)xy^{n - 1}+\dots +\left(\frac{n}{n - 1}\right)x^{n - 1}y+\left(\frac{n}{n}\right)x^{n}. & \text{}
\end{align}
$$

3.

From equation ([2.3](#x15-25002r2.3)), it’s immediate that for $r=0,1,…⁡,n$ 
$$
\begin{align}
\left(\frac{n}{r}\right) & = & \left(\frac{n}{n - r}\right). & \text{}
\end{align}
$$

Example 21 Suppose that we capture $6$ fish from a lake containing $10$ fish in total, tag them and return them to the lake. Later, we return and catch $3$ fish from the lake. What’s the probability that exactly $r$ of them are tagged?

   
Let $\Omega=\left\{$all subsets of size $3$ from $10$ fish$\right\}$ then

$$
\begin{align}
\left|\Omega\left|=\left(\frac{1 0}{3}\right)=\frac{1 0 !}{3 ! 7 !}=\frac{1 0 \cdot 9 \cdot 8}{3 \cdot 2 \cdot 1}=120. & & & \text{}
\end{align}
$$

Let $E_{r}=\left\{$subsets of size $3$ of $10$ fish with exactly $r$ marked fish$\right\}$ then, for each $r\in\left\{ 0 , 1 , 2 , 3 \right\}$,

$$
\begin{align}
\left|E_{r}\left| & = & \left( \text{\# subsets of size }r\text{ from }6\text{ marked fish} \right) & \text{} \\ & & \times\left( \text{\# subsets of size }\left( 3 - r \right)\text{ from }4\text{ unmarked fish} \right) & \text{} \\ & = & \left(\frac{6}{r}\right)\times\left(\frac{4}{3 - r}\right). & \text{}
\end{align}
$$

As all fish are assumed equally likely to be caught, then each sample point of $\Omega$ is equally likely so that, for each $r\in\left\{ 0 , 1 , 2 , 3 \right\}$,

$$
\begin{align}
ℙ\left( E_{r} \right) & = & \frac{\left| E_{r} \left|}{\left| \Omega \left|}=\frac{\left(\frac{6}{r}\right) \left(\frac{4}{3 - r}\right)}{1 2 0} & \text{}
\end{align}
$$

Thus, for example,

$$
\begin{align}
ℙ\left( \left\{ \text{none tagged} \right\} \right) & = & ℙ\left( E_{0} \right)=\frac{1}{1 2 0}\left(\frac{6}{0}\right)\left(\frac{4}{3}\right)=\frac{1}{3 0} & \text{} \\ & & & \text{} \\ ℙ\left( \left\{ \text{exactly 2 tagged} \right\} \right) & = & ℙ\left( E_{2} \right)=\frac{1}{1 2 0}\left(\frac{6}{2}\right)\left(\frac{4}{1}\right)=\frac{1}{1 2 0}\frac{6 \cdot 5 \cdot 4}{2 \cdot 1}=\frac{1}{2}. & \text{}
\end{align}
$$

Example 22 Five cards are dealt from a shuffled pack of 52 cards. What’s the probability of getting a full house, that is, three of one number and a pair of another number?

   
We first find the number of different hands of five cards. Let $\Omega=\left\{$subsets of $5$ cards$\right\}$ then $\left|\Omega\left|=\left(\frac{5 2}{5}\right)$ .

We now count how many possible ways there are of obtaining a full house. There are 13 ways of choosing the number of the card that is in the triple and, having done so, there are $\left(\frac{4}{3}\right)$ ways of choosing the three suits. As there are only four cards of each number then there are 12 ways of choosing the number of the card that is in the pair and $\left(\frac{4}{2}\right)$ ways of choosing the suits. If we let $E=\left\{$get a full house$\right\}$ then

$$
\begin{align}
\left|E\left| & = & 13\times\left(\frac{4}{3}\right)\times 12\times\left(\frac{4}{2}\right) & \text{}
\end{align}
$$

As all hands are equally likely,

$$
\begin{align}
ℙ\left( E \right)=\frac{\left| E \left|}{\left| \Omega \left|} & = & \frac{1 3 \times 1 2 \times \left(\frac{4}{3}\right) \times \left(\frac{4}{2}\right)}{\left(\frac{5 2}{5}\right)} & \text{} \\ & = & 13\cdot 12\cdot 4\cdot\frac{4 \cdot 3}{2 \cdot 1}\frac{5 \cdot 4 \cdot 3 \cdot 2 \cdot 1}{5 2 \cdot 5 1 \cdot 5 0 \cdot 4 9 \cdot 4 8} & \text{} \\ & & & \text{} \\ & = & \frac{6}{4 1 6 5}=0.0014\text{(4 d.p)}. & \text{}
\end{align}
$$

#### 2.4.2 Multinomial coefficients

When choosing $r$ objects from $n$ distinct objects, we can equivalently think of the number of ways $n$ objects can be placed into two subsets with $r$ objects in one subset and $n-r$ objects in the other. We can extend this to $k$ subsets where we place $n_{i}$ objects into the $i$th subset.

*   there are $\left(\frac{n}{n_{1}}\right)$ ways of choosing the first subset, leaving $n-n_{1}$ objects;
*   there are $\left(\frac{n - n_{1}}{n_{2}}\right)$ ways of choosing the second subset, leaving $n-n_{1}-n_{2}$ objects;  
    $$
    \begin{align}
    \vdots⁡\vdots⁡\vdots⁡\vdots⁡\vdots⁡ & & & \text{}
    \end{align}
    $$
    
*   there are $\left(\frac{n - n_{1} - \dots  - n_{k - 2}}{n_{k - 1}}\right)$ ways of choosing the $\left( k - 1 \right)$th subset, leaving $n-n_{1}-\dots -n_{k - 1}=n_{k}$ objects;
*   there are $\left(\frac{n - n_{1} - \dots  - n_{k - 1}}{n_{k}}\right)$ ways of choosing the $k$th subset, leaving no objects remaining.

Noting that

$$
\begin{align}
\left(\frac{n}{m}\right)\left(\frac{n - m}{q}\right)=\frac{n !}{m ! \left( n - m \right) !}\frac{\left( n - m \right) !}{q ! \left( n - m - q \right) !}=\frac{n !}{m ! q ! \left( n - m - q \right) !} & & & \text{}
\end{align}
$$

we may show that

$$
\begin{align}
\left(\frac{n}{n_{1}}\right)\left(\frac{n - n_{1}}{n_{2}}\right)\times\dots \times\left(\frac{n - n_{1} - \dots  - n_{k - 1}}{n_{k}}\right) & = & \frac{n !}{n_{1} ! n_{2} ! \dots  n_{k} !} & \text{}
\end{align}
$$

so that we obtain the following theorem.

Theorem 8 (Dividing $n$ objects into $k$ subsets)  
The number of ways a set of $n$ objects can be divided into $k$ subsets of sizes $n_{1},n_{2},…⁡,n_{k}$ where $n_{1}+n_{2}+\dots +n_{k}=n$ is

$$
\begin{align}
\left(\frac{n}{n_{1} , n_{2} , … ⁡ , n_{k}}\right) & := & \frac{n !}{n_{1} ! n_{2} ! \dots  n_{k} !}. & \text{(2.4)}\text{}\text{}
\end{align}
$$

Notes

1.

For $k=2$ we recover Corollary [10](#x15-2500110): take $n_{1}=r$ so that $n_{2}=n-n_{1}=n-r$.

2.

The numbers $\left(\frac{n}{n_{1} , n_{2} , … ⁡ , n_{k}}\right)$ are called the multinomial coefficients and occur in the expansion 
$$
\begin{align}
\left(\left( x_{1} + x_{2} + \dots  + x_{k} \right)\right)^{n} & = & \sum\left(\frac{n}{n_{1} , n_{2} , \dots  , n_{k}}\right)x_{1}^{n_{1}}x_{2}^{n_{2}}\dots x_{k}^{n_{k}} & \text{}
\end{align}
$$

where the sum is over all non-negative integers $n_{1},n_{2},…⁡,n_{k}$ such that $n_{1}+n_{2}+\dots +n_{k}=n$.

3.

Notice that equation ([2.4](#x15-26005r2.4)) in Theorem [8](#x15-260048) is identical to equation ([2.2](nose5.htm#x14-23011r2.2)) in Theorem [7](nose5.htm#x14-230107) when we considered the number of distinguishable permutations of $n$ objects of $k$ different types where there are $n_{1}$ of the first type, $…⁡$, $n_{k}$ of the $k$th type, where $n_{1}+n_{2}+\dots +n_{k}=n$.

Example 23 A pack of cards is dealt between $N,E,S$ and $W$. What’s the probability $N$ and $S$ each get $2$ aces?

   
Let $\Omega=\left\{$partitions of $52$ cards into 4 hands of $13$ cards$\right\}$ so

$$
\begin{align}
\left|\Omega\left|=\left(\frac{5 2}{1 3 , 1 3 , 1 3 , 1 3}\right)=\frac{5 2 !}{1 3 ! 1 3 ! 1 3 ! 1 3 !}=\frac{5 2 !}{\left(\left( 1 3 ! \right)\right)^{4}}. & & & \text{}
\end{align}
$$

Let $E=\left\{$partitions of $52$ cards into $4$ hands of $13$ with $2$ aces for $N$and $S\right\}$ then

$$
\begin{align}
\left|E\left| & = & \left( \text{\# ways choosing }2\text{ of }4\text{ aces for }N\text{} \right) & \text{} \\ & & \times\left( \text{\# ways dividing }48\text{ non aces into }11,13,11,13\text{} \right) & \text{} \\ & = & \left(\frac{4}{2}\right)\times\left(\frac{4 8}{1 1 , 1 3 , 1 1 , 1 3}\right)=\frac{4 !}{2 ! 2 !}\times\frac{4 8 !}{1 1 ! 1 3 ! 1 1 ! 1 3 !}. & \text{}
\end{align}
$$

As all partitions of $52$ cards are equally likely,

$$
\begin{align}
ℙ\left( E \right) & = & \frac{\left(\frac{4}{2}\right) \left(\frac{4 8}{1 1 , 1 3 , 1 1 , 1 3}\right)}{\left(\frac{5 2}{1 3 , 1 3 , 1 3 , 1 3}\right)} & \text{} \\ & = & \frac{4 !}{2 ! 2 !}\frac{4 8 !}{\left(\left( 1 1 ! \right)\right)^{2} \left(\left( 1 3 ! \right)\right)^{2}}\frac{\left(\left( 1 3 ! \right)\right)^{4}}{5 2 !}=\frac{4 6 8}{2 0 8 2 5}=0.0225\left( \text{4dp} \right). & \text{}
\end{align}
$$

#### 2.4.3 Sampling with replacement

We now consider how to choose $r$ elements from a set $E=\left\{ e_{1} , e_{2} , … ⁡ , e_{n} \right\}$ of $n$ elements, with replacement, when the order in which they are drawn does not matter. Any such sample consists of $m_{1}$ picks of $e_{1}$, $m_{2}$ picks of $e_{2}$, $…⁡$, $m_{n}$ picks of $e_{n}$ where each $m_{i}$ is a non-negative integer and $m_{1}+\dots +m_{n}=r$.

   
We can represent this sample by considering $r$ red balls laid out in a row from left-to-right. Starting at the left most ball and moving to the right we do the following:

*   after $m_{1}$ red balls, insert a black ball into the row of balls
*   after the next $m_{2}$ red balls, insert a black ball into the row of balls 
    $$
    \begin{align}
    \vdots⁡\vdots⁡\vdots⁡\vdots⁡\vdots⁡ & & & \text{}
    \end{align}
    $$
    
*   after passing through $m_{1}+…⁡+m_{n - 2}$ red balls and having inserted $n-2$ black balls, after the next $m_{n - 1}$ red balls, insert a black ball into the row of balls
*   to the right of this black ball are $m_{n}$ red balls

This procedure gives us $r$ red balls and $n-1$ black balls, a total of $n-1+r$ balls. The number of samples is thus the number of distinguishable permutations of $n-1+r$ objects of $2$ different types where there are $r$ of the first type (the red balls) and $n-1$ of the second type (the black balls). From Theorem [7](nose5.htm#x14-230107) we have the following corollary.

Corollary 11 (Unordered choice: sampling with replacement)  
The number of ways of choosing $r$ elements from a set of $n$ elements, with replacement, where the order in which they are drawn does not matter is

$$
\begin{align}
\left(\frac{n - 1 + r}{r}\right) & = & \frac{\left( n - 1 + r \right) !}{r ! \left( n - 1 \right) !}. & \text{}
\end{align}
$$

Example 24 Recall the ice-cream example of Example [20](#x15-2400120). If we can choose any of the three flavours twice, including duplication, then there are

$$
\begin{align}
\left(\frac{3 - 1 + 2}{2}\right)=\left(\frac{4}{2}\right)=\frac{4 !}{2 ! 2 !}=6 & & & \text{}
\end{align}
$$

possible selections.

[3](#fn3x2-bk)Taking $x=y=1$ gives that $\left(\sum ⁡\right)_{r = 0}^{n}\left(\frac{n}{r}\right)=2^{n}$ and provides a proof as to the number of elements in the power set of a set of size $n$ being $2^{n}$ as we sum over the number of subsets with $0$ elements, $1$ element, $…⁡$, $n$ elements.

[[prev](nose5.htm)] [[prev-tail](nose5.htm#tailnose5.htm)] [[front](nose6.htm)] [[up](noch2.htm#nose6.htm)]

Contents
--------

[Preface](noli2.htm#Q1-3-3)  
1 [Foundations of Probability](noch1.htm#x8-70001)  
 1.1 [Set theory](nose1.htm#x9-80001)  
 1.2 [The rules of probability](nose2.htm#x10-130002)  
2 [The classical interpretation of probability; combinatorics](noch2.htm#x11-180002)  
 2.1 [Equally likely events and the classical interpretation of probability](nose3.htm#x12-190001)  
 2.2 [Multiplication principle](nose4.htm#x13-200002)  
 2.3 [Ordered choice: permutations](nose5.htm#x14-210003)  
 2.4 [Unordered choice: combinations](nose6.htm#x15-240004)  
3 [Conditional probability and independence](noch3.htm#x16-280003)  
 3.1 [Conditional probability](nose7.htm#x17-290001)  
 3.2 [Multiplication law](nose8.htm#x18-300002)  
 3.3 [The law of total probability](nose9.htm#x19-310003)  
 3.4 [Bayes’ theorem](nose10.htm#x20-320004)  
 3.5 [Independence](nose11.htm#x21-330005)  
 3.6 [Independence of many events](nose12.htm#x22-340006)  
4 [Random variables](noch4.htm#x23-350004)  
 4.1 [Real-valued random variables](nose13.htm#x24-360001)  
 4.2 [Distributions derived from Bernoulli trials](nose14.htm#x25-370002)  
 4.3 [The Poisson distribution](nose15.htm#x26-420003)  
 4.4 [Joint distributions](nose16.htm#x27-430004)  
5 [Expectation and variance](noch5.htm#x28-480005)  
 5.1 [Expectation of a discrete random variable](nose17.htm#x29-490001)  
 5.2 [Variance](nose18.htm#x30-520002)  
 5.3 [Markov’s inequality and Chebyshev’s inequality](nose19.htm#x31-560003)  
6 [Probability generating functions](noch6.htm#x32-570006)  
 6.1 [Defining a probability generating function](nose20.htm#x33-580001)  
 6.2 [Properties of probability generating functions](nose21.htm#x34-590002)  
 6.3 [Uniqueness property of pgfs](nose22.htm#x35-600003)  
 6.4 [Finding the distribution of sums of independent random variables](nose23.htm#x36-610004)  
7 [Appendix: properties of common distributions](noch7.htm#x37-620007)  
 7.1 [Bernoulli distribution](nose24.htm#x38-630001)  
 7.2 [Binomial distribution](nose25.htm#x39-640002)  
 7.3 [Geometric distribution](nose26.htm#x40-650003)  
 7.4 [Negative Binomial distribution](nose27.htm#x41-660004)  
 7.5 [The Poisson distribution](nose28.htm#x42-670005)