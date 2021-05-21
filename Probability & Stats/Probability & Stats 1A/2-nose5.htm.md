[[next](nose6.htm)] [[prev](nose4.htm)] [[prev-tail](nose4.htm#tailnose4.htm)] [[tail](#tailnose5.htm)] [[up](noch2.htm#nose5.htm)]

### 2.3 Ordered choice: permutations

A permutation is an ordered arrangement of objects. Suppose that $E=\left\{ e_{1} , … ⁡ , e_{n} \right\}$ is a set and we wish to choose $r$ elements from $E$ and list them in order. How many ways can we do this?

   
The answer depends upon whether or not elements can be chosen more than once. If we are allowed to duplicate elements from $E$ then we are sampling with replacement whilst if duplication is not permitted we are sampling without replacement.

#### 2.3.1 Sampling with replacement

Corollary 7 (Ordered choice: sampling with replacement)  
The number of ways of choosing $r$ elements from a set of $n$ elements, with replacement, where the order in which they are drawn matters, is $n^{r}$.

Proof: Follows immediately from Theorem [6](nose4.htm#x13-200026), the multiplication principle, with $m=r$ and $n_{i}=n$ for each $i=1,…⁡,r$. $\square$

Example 17 A fair die is rolled four times. You win if at least one of the rolls scores a $6$ otherwise you lose. What is the probability that you lose?

   
We can think of each roll as being the selection of an element from the set $\left\{ 1 , 2 , … ⁡ , 6 \right\}$ and duplication is allowed so it is as if we are sampling with replacement from $\left\{ 1 , 2 , … ⁡ , 6 \right\}$. If $s_{i}$ denotes the score on the $i$th roll then the sample space is

$$
\begin{align}
\Omega & = & \left\{ \left( s_{1} , s_{2} , s_{3} , s_{4} \right) : s_{1} , s_{2} , s_{3} , s_{4} \in \left\{ 1 , 2 , … ⁡ , 6 \right\} \right\}=\left(\left\{ 1 , 2 , … ⁡ , 6 \right\}\right)^{4} & \text{}
\end{align}
$$

(so, for example, the sample point $\left( 1 , 5 , 3 , 5 \right)$ corresponds to an outcome of $1$ on the first roll, $5$ on the second roll, $3$ on the third roll , and $5$ on the last roll). Using Corollary [7](#x14-220017), $\left|\Omega\left|=6^{4}$. Let $E=\left\{ \text{you lose} \right\}=\left\{ \text{you don’t roll a 6} \right\}$ then the number of ways of $E$ occurring can be thought of as the number of ways of choosing $4$ elements from the set $\left\{ 1 , 2 , 3 , 4 , 5 \right\}$ when duplication is allowed,

$$
\begin{align}
E & = & \left\{ \left( s_{1} , s_{2} , s_{3} , s_{4} \right) : s_{1} , s_{2} , s_{3} , s_{4} \in \left\{ 1 , 2 , … ⁡ , 5 \right\} \right\}=\left(\left\{ 1 , 2 , … ⁡ , 5 \right\}\right)^{4} & \text{}
\end{align}
$$

Thus, $\left|E\left|=5^{4}$. As the die is fair then all outcomes are equally likely and so,

$$
\begin{align}
ℙ\left( E \right) & = & \frac{\left| E \left|}{\left| \Omega \left|}=\frac{5^{4}}{6^{4}}=\frac{6 2 5}{1 2 9 6}. & \text{}
\end{align}
$$

#### 2.3.2 Sampling without replacement

We now consider the number of ways of choosing $r$ different elements in order from a set of $n$ elements. Thus, once an item has been chosen, it is not replaced and so the number of remaining elements decrease. There are $n$ ways to choose the first item. Having not replaced this item, there are then $n-1$ ways to choose the second item and so on so that once $\left( r - 1 \right)$ have been chosen (and not replaced), there are then $n-\left( r - 1 \right)$ ways to choose the $r$th item. Using the multiplication principle, Theorem [6](nose4.htm#x13-200026), we thus have $n\times\left( n - 1 \right)\times\dots \times\left( n - \left( r - 1 \right) \right)$ ways of choosing the $r$ elements in order. For any non-negative integer $m$, define $m$-factorial, written $m!$, by

$$
\begin{align}
m! & = & \left\{\begin{matrix} \begin{matrix}m\left( m - 1 \right)\left( m - 2 \right)\dots 3\times 2\times 1 & \text{if}m=1,2,3,…⁡; \\ 1 & \text{if}m=0.\end{matrix} \end{matrix}\right. \}& \text{}
\end{align}
$$

Putting this together, we have the following corollary.

Corollary 8 (Ordered choice: sampling without replacement, permutations)  
The number of permutations of length $r$ taken from a set of size $n$, or equivalently, the number of ways of choosing $r$ different elements in order from a set of $n$ elements is

$$
\begin{align}
n\left( n - 1 \right)\left( n - 2 \right)\dots \left( n - \left( r - 1 \right) \right) & = & \frac{n \left( n - 1 \right) \dots  \left( n - \left( r - 1 \right) \right) \left( n - r \right) \left( n - \left( r + 1 \right) \right) \dots  1}{\left( n - r \right) \left( n - \left( r + 1 \right) \dots  1} & \text{} \\ & = & \frac{n !}{\left( n - r \right) !}. & \text{}
\end{align}
$$

Example 18 Five cards from a shuffled pack are dealt face up in a row. What is the probability that they are all picture cards?

   
Let $\Omega$ be the set of ordered sequences of five cards drawn at random without replacement. Then

$$
\begin{align}
\left|\Omega\left| & = & 52\times 51\times 50\times 49\times 48. & \text{}
\end{align}
$$

Let $E$ be the event that you get a sequence only containing picture cards. As there are a total of 12 picture cards (four suits, three picture cards in each suit) then

$$
\begin{align}
\left|E\left| & = & 12\times 11\times 10\times 9\times 8 & \text{}
\end{align}
$$

As all sequences of cards are equally likely,

$$
\begin{align}
ℙ\left( E \right) & = & \frac{\left| E \left|}{\left| \Omega \left|}=\frac{1 2 \times 1 1 \times 1 0 \times 9 \times 8}{5 2 \times 5 1 \times 5 0 \times 4 9 \times 4 8}=0.0003\left( \text{4dp} \right). & \text{}
\end{align}
$$

Corollary 9 (Number of permutations of $n$ objects)  
The number of permutations of $n$ objects, equivalently, the number of ways $n$ elements can be arranged in order is $n!$.

Proof: From Corollary [8](#x14-230028) with $r=n$ gives $n!/0!=n!$. $\square$

Example 19

(a)

How many distinct permutations of the word “METHODS” are there?

   
There are seven distinct letters so there are $7!=5040$ permutations.

(b)

How many distinct permutations of the word “ALGEBRA” are there?

   
Notice that there are two “A”s. If we label the $A$s as $A_{1}$, $A_{2}$ then there are $7!$ permutations of the letters $A_{1}$LGEBR$A_{2}$ when we distinguish the $A$s. Consider any one of these permutations, say $A_{1}A_{2}$LGEBR. This is equivalent to $A_{2}A_{1}$LGEBR: there are $2!$ ways of permuting the $A$s whilst keeping the remaining five letters fixed. Thus, there are $7!/2!=2520$ distinct permutations.

We can generalise Example [19](#x14-2300919)(b) into the following theorem which we’ll revisit with Theorem [8](nose6.htm#x15-260048) in Section [2.4.2](nose6.htm#x15-260002).

Theorem 7 (Number of distinguishable permutations)  
The number of distinguishable permutations of $n$ objects of $k$ different types where there are $n_{1}$ of identical type $1$, $n_{2}$ of identical type $2$, $…⁡$, $n_{k}$ of identical type $k$, where $n_{1}+n_{2}+\dots +n_{k}=n$ is

$$
\begin{align}
\frac{n !}{n_{1} ! n_{2} ! \dots  n_{k} !}. & & & \text{(2.2)}\text{}\text{}
\end{align}
$$

[[next](nose6.htm)] [[prev](nose4.htm)] [[prev-tail](nose4.htm#tailnose4.htm)] [[front](nose5.htm)] [[up](noch2.htm#nose5.htm)]

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