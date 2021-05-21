[[next](nose5.htm)] [[prev](nose3.htm)] [[prev-tail](nose3.htm#tailnose3.htm)] [[tail](#tailnose4.htm)] [[up](noch2.htm#nose4.htm)]

### 2.2 Multiplication principle

Consider the problem where we have two finite sets, say $E$ and $F$, and we wish to count the number of ways of choosing one element from $E$ and one from $F$. How many ways are there of doing this?

   
Suppose that $E=\left\{ e_{1} , … ⁡ , e_{n} \right\}$ has $\left|E\left|=n$ elements and $F=\left\{ f_{1} , … ⁡ , f_{m} \right\}$ has $\left|F\left|=m$ elements. We can write an outcome as the pair $\left( e_{i} , f_{j} \right)$ and write all the outcomes in an $n\times m$ matrix:

$$
\begin{align}
\begin{matrix}\left( e_{1} , f_{1} \right) & \left( e_{1} , f_{2} \right) & \left( e_{1} , f_{3} \right) & …⁡ & \left( e_{1} , f_{m} \right) \\ \left( e_{2} , f_{1} \right) & \left( e_{2} , f_{2} \right) & \left( e_{2} , f_{3} \right) & …⁡ & \left( e_{2} , f_{m} \right) \\ \vdots⁡ & \vdots⁡ & \vdots⁡ & \ddots & \vdots⁡ \\ \left( e_{n} , f_{1} \right) & \left( e_{n} , f_{2} \right) & \left( e_{n} , f_{3} \right) & …⁡ & \left( e_{n} , f_{m} \right)\end{matrix} & & & \text{}
\end{align}
$$

There are thus $n\times m=nm$ $\left( = \left| E \left| \left| F \left| \right)$ possible choices of choosing one from $E$ and one from $F$.

Theorem 6 (Multiplication principle)  
Suppose that $E_{1},E_{2},…⁡,E_{m}$ are sets containing $n_{1},n_{2},…⁡,n_{m}$ elements, respectively. The number of ways of first choosing an element of $E_{1}$, then an element of $E_{2}$, $…⁡$ and finally an element of $E_{m}$, is

$$
\begin{align}
\prod_{i = 1}^{m}n_{i}=n_{1}n_{2}\dots n_{m}. & & & \text{}
\end{align}
$$

Proof: We use induction. Let $F_{k}$ be the set of all choices from sets $E_{1},…⁡,E_{k}$ as above $\left( k \leq m \right)$ then $F_{k}=\left\{ \left( e_{1} , e_{2} , … ⁡ , e_{k} \right) : e_{1} \in E_{1} , … ⁡ , e_{k} \in E_{k} \right\}$. The result is trivial for $k=1$ and we have shown above that if $k=2$ then $\left|F_{2}\left|=\left|E_{1}\left|\times\left|E_{2}\left|=n_{1}n_{2}$. Assume the result is true for $m=k$, so that $\left|F_{k}\left|=\left|E_{1}\left|\times\left|E_{2}\left|\times\dots \times\left|E_{k}\left|=n_{1}n_{2}\dots n_{k}$. Consider

$$
\begin{align}
\left|F_{k + 1}\left| & = & \left|\left\{ \left( e_{1} , e_{2} , … ⁡ , e_{k + 1} \right) : e_{1} \in E_{1} , … ⁡ , e_{k + 1} \in E_{k + 1} \right\}\left| & \text{} \\ & & & \text{} \\ & = & \left|\left\{ \left( e_{1} , e_{2} , … ⁡ , e_{k + 1} \right) : \left( e_{1} , … ⁡ , e_{k} \right) \in F_{k} , e_{k + 1} \in E_{k + 1} \right\}\left| & \text{} \\ & & & \text{} \\ & = & \left|F_{k}\left|\times\left|E_{k + 1}\left|\text{(using the case }k=2\text{)} & \text{} \\ & & & \text{} \\ & = & \left( \left| E_{1} \left| \times \left| E_{2} \left| \times \dots  \times \left| E_{k} \left| \right)\times\left|E_{k + 1}\left|=n_{1}n_{2}\dots n_{k}n_{k + 1}. & \text{}
\end{align}
$$

Thus, if the result is true for $k$ it is true for $k+1$. Hence, as it is true for $k=1,2$ it is true for all $m$. $\square$

Example 16 Suppose that we toss a fair coin, roll a fair die and pick a card at random from a full pack of cards. What is the probability that we toss a head and score a $5$ or a $6$ on the die and pick a red picture[2](#fn2x2) card?

   
Let $\Omega=\left\{ \left( t , d , c \right) : t \in \left\{ H , T \right\} , d \in \left\{ 1 , … ⁡ , 6 \right\} , c \in \left\{ A ♡ ⁡ , … ⁡ , K ♣ ⁡ \right\} \right\}$ then

$$
\begin{align}
\left|\Omega\left| & = & \left|\left\{ H , T \right\}\left|\times\left|\left\{ 1 , … ⁡ , 6 \right\}\left|\times\left|\left\{ A ♡ ⁡ , … ⁡ , K ♣ ⁡ \right\}\left| & \text{} \\ & = & 2\times 6\times 52=624. & \text{}
\end{align}
$$

Thus, there are 624 equally likely outcomes as the coin and the die are fair and the card is picked at random. Let $E$ be the event that we toss a head and score a $5$ or a $6$ on the die and pick a red picture card. Then

$$
\begin{align}
E & = & \left\{ \left( t , d , c \right) : t \in \left\{ H \right\} , d \in \left\{ 5 , 6 \right\} , c \in \left\{ J ♡ ⁡ , Q ♡ ⁡ , K ♡ ⁡ , J ♢ ⁡ , Q ♢ ⁡ , K ♢ ⁡ \right\} \right\} & \text{}
\end{align}
$$

so that

$$
\begin{align}
\left|E\left| & = & \left|\left\{ H \right\}\left|\times\left|\left\{ 5 , 6 \right\}\left|\times\left|\left\{ J ♡ ⁡ , Q ♡ ⁡ , K ♡ ⁡ , J ♢ ⁡ , Q ♢ ⁡ , K ♢ ⁡ \right\}\left| & \text{} \\ & = & 1\times 2\times 6=12. & \text{}
\end{align}
$$

Thus, $E$ can occur in 12 different ways. Using the classical interpretation of probability, equation ([2.1](nose3.htm#x12-19005r2.1)), we have that

$$
\begin{align}
ℙ\left( E \right)=\frac{\left| E \left|}{\left| \Omega \left|}=\frac{1 2}{6 2 4}=\frac{1}{5 2}. & & & \text{}
\end{align}
$$

[2](#fn2x2-bk)A picture card is either a Jack, Queen or King.

[[next](nose5.htm)] [[prev](nose3.htm)] [[prev-tail](nose3.htm#tailnose3.htm)] [[front](nose4.htm)] [[up](noch2.htm#nose4.htm)]

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