[[next](nose21.htm)] [[tail](#tailnose20.htm)] [[up](noch6.htm#nose20.htm)]

### 6.1 Defining a probability generating function

The probability generating function (pgf) of a discrete random variable which takes values in the non-negative integers is a power series representation of the probability mass function.

Definition 31 (Probability generating function)  
Suppose that $X$ is a discrete random variable taking values in the non-negative integers $ℤ^{+}=\left\{ 0 , 1 , 2 , … ⁡ \right\}$. The probability generating function $G_{X}:\left[ 0 , 1 \right]\rightarrowℝ$ of $X$ is

$$
\begin{align}
G_{X}\left( s \right)=𝔼\left( s^{X} \right) & = & \sum_{x = 0}^{\infty}s^{x}ℙ\left( X = x \right) & \text{} \\ & = & ℙ\left( X = 0 \right)+sℙ\left( X = 1 \right)+s^{2}ℙ\left( X = 2 \right)+\dots  & \text{}
\end{align}
$$

for $s\in\left[ 0 , 1 \right]$.

Example 61 Suppose that $XsimBern\left( p \right)$. Find its pgf $G_{X}\left( s \right)$.

   
Note that as $ℙ\left( X = x \right)=0$ for $x\in\left\{ 2 , 3 , … ⁡ \right\}$ then

$$
\begin{align}
G_{X}\left( s \right)=𝔼\left( s^{X} \right) & = & ℙ\left( X = 0 \right)+sℙ\left( X = 1 \right) & \text{} \\ & = & \left( 1 - p \right)+sp. & \text{}
\end{align}
$$

Example 62 Suppose that $XsimGeom\left( p \right)$, where $p\in\left( 0 , 1 \right)$. Find its pgf $G_{X}\left( s \right)$.

   
Note that $ℙ\left( X = 0 \right)=0$ so that

$$
\begin{align}
G_{X}\left( s \right)=𝔼\left( s^{X} \right) & = & \sum_{x = 1}^{\infty}s^{x}\left(\left( 1 - p \right)\right)^{x - 1}p & \text{} \\ & = & sp\sum_{x = 1}^{\infty}\left(\left\{ s \left( 1 - p \right) \right\}\right)^{x - 1} & \text{} \\ & = & sp\sum_{i = 0}^{\infty}\left(\left\{ s \left( 1 - p \right) \right\}\right)^{i}=\frac{s p}{1 - s \left( 1 - p \right)} & \text{}
\end{align}
$$

as for $s\in\left[ 0 , 1 \right]$, $p\in\left( 0 , 1 \right)$, $\left|s\left( 1 - p \right)\left|<1$ so that the infinite geometric series converges.

[[next](nose21.htm)] [[front](nose20.htm)] [[up](noch6.htm#nose20.htm)]

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