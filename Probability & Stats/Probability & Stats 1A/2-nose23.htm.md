[[prev](nose22.htm)] [[prev-tail](nose22.htm#tailnose22.htm)] [[tail](#tailnose23.htm)] [[up](noch6.htm#nose23.htm)]

### 6.4 Finding the distribution of sums of independent random variables

Much of probability and statistics is concerned with sums of independent random variables. Probability generating functions provide a powerful tool for finding the probability distribution of such sums.

Theorem 30 (Pgf of a sum of independent random variables)  
If $X$ and $Y$ are independent random variables with pgfs $G_{X}$ and $G_{Y}$ respectively then the pgf, $G_{X + Y}$ , of $X+Y$ is

$$
\begin{align}
G_{X + Y}\left( s \right)=G_{X}\left( s \right)G_{Y}\left( s \right). & & & \text{}
\end{align}
$$

Proof: From Corollary [12](nose17.htm#x29-5100112), if $X$ and $Y$ are independent then $𝔼\left( s^{X + Y} \right)=𝔼\left( s^{X} \right)𝔼\left( s^{Y} \right)$ so that

$$
\begin{align}
G_{X + Y}\left( s \right)=𝔼\left( s^{X + Y} \right)=𝔼\left( s^{X} \right)𝔼\left( s^{Y} \right)=G_{X}\left( s \right)G_{Y}\left( s \right). & & & \text{}
\end{align}
$$

 $\square$

   
Notice that this result can be extended to $n$ independent random variables $X_{1},…⁡,X_{n}$, with individual pgfs $G_{X_{i}}\left( s \right)$, so that if $Y=\left(\sum ⁡\right)_{i = 1}^{n}X_{i}$ then

$$
\begin{align}
G_{Y}\left( s \right) & = & \prod_{i = 1}^{n}G_{X_{i}}\left( s \right). & \text{(6.2)}\text{}\text{}
\end{align}
$$

Example 66 Suppose that $XsimPo\left( \lambda \right)$ and $YsimPo\left( \mu \right)$ are independent. Find the distribution of $X+Y$ .

   
If $XsimPo\left( \lambda \right)$ then

$$
\begin{align}
G_{X}\left( s \right) & = & \sum_{x = 0}^{\infty}s^{x}\frac{\left(\lambda\right)^{x}}{x !}e^{- \lambda} & \text{} \\ & = & e^{- \lambda}e^{s \lambda}\sum_{x = 0}^{\infty}\frac{\left(\left( s \lambda \right)\right)^{x}}{x !}e^{- s \lambda}=e^{\lambda \left( s - 1 \right)} & \text{}
\end{align}
$$

as the sum is the sum of $Po\left( s \lambda \right)$ probabilities. By the uniqueness of pgfs, $G_{Y}\left( s \right)=e^{\mu \left( s - 1 \right)}$ so that

$$
\begin{align}
G_{X + Y}\left( s \right) & = & G_{X}\left( s \right)G_{Y}\left( s \right) & \text{} \\ & = & e^{\lambda \left( s - 1 \right)}e^{\mu \left( s - 1 \right)}=e^{\left( \lambda + \mu \right) \left( s - 1 \right)}. & \text{}
\end{align}
$$

Thus, by the uniqueness of pgfs, $X+YsimPo\left( \lambda + \mu \right)$.

Example 67 Suppose that $XsimB\left( n , p \right)$. Use the uniqueness property of pgfs to find the pgf of $X$.

   
Note that $X$ is the sum of $n$ independent Bernoulli trials, each with probability of success $p$. That is $X=\left(\sum ⁡\right)_{i = 1}^{n}X_{i}$ where each $X_{i}simBern\left( p \right)$ and $X_{1},…⁡,X_{n}$ are independent. From Example [61](nose20.htm#x33-5800361) we have that

$$
\begin{align}
G_{X_{i}}\left( s \right) & = & \left( 1 - p \right)+sp. & \text{}
\end{align}
$$

Using equation ([6.2](#x36-61004r6.2)),

$$
\begin{align}
G_{X}\left( s \right) & = & \prod_{i = 1}^{n}G_{X_{i}}\left( s \right) & \text{} \\ & = & \prod_{i = 1}^{n}\left\{ \left( 1 - p \right) + s p \right\}=\left(\left\{ \left( 1 - p \right) + s p \right\}\right)^{n}. & \text{}
\end{align}
$$

We know, by construction, that $XsimB\left( n , p \right)$ and so, by the uniqueness of pgfs, the pgf of $XsimB\left( n , p \right)$ is $G_{X}\left( s \right)=\left(\left\{ \left( 1 - p \right) + s p \right\}\right)^{n}$.

   
Notice that for $n=2$ and $p=1/2$ we find $G_{X}\left( s \right)=\frac{\left(\left( 1 + s \right)\right)^{2}}{4}$ which matches with our observation in Example [65](nose22.htm#x35-6000965).

[[prev](nose22.htm)] [[prev-tail](nose22.htm#tailnose22.htm)] [[front](nose23.htm)] [[up](noch6.htm#nose23.htm)]

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