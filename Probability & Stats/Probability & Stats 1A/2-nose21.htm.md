[[next](nose22.htm)] [[prev](nose20.htm)] [[prev-tail](nose20.htm#tailnose20.htm)] [[tail](#tailnose21.htm)] [[up](noch6.htm#nose21.htm)]

### 6.2 Properties of probability generating functions

The $k$th moment of a random variable $X$ is $𝔼\left( X^{k} \right)$. Typically we are interested in the first two moments, $𝔼\left( X \right)$ and $𝔼\left( X^{2} \right)$ as from these we can deduce the expectation and variance of $X$. We can exploit the structure of $G_{X}$ to find these.

Theorem 28 (Generating the $k$th factorial moment)  
Let $X$ be a random variable with probability generating function $G_{X}\left( s \right)$. Then

(a)

$G_{X}\left( 1 \right)=1$.

(b)

The $k$th factorial moment $𝔼\left( X \left( X - 1 \right) \dots  \left( X - k + 1 \right) \right)$ is given by 
$$
\begin{align}
𝔼\left( X \left( X - 1 \right) \dots  \left( X - k + 1 \right) \right)=G_{X}^{\left( k \right)}\left( 1 \right)=\left(\left(\frac{d^{k}}{d s^{k}} G_{X} \left( s \right)\right|\right)_{s = 1}. & & & \text{}
\end{align}
$$

Proof:

(a)

$$
\begin{align}
G_{X}\left( 1 \right)=\sum_{x = 0}^{\infty}1^{x}ℙ\left( X = x \right)=\sum_{x = 0}^{\infty}ℙ\left( X = x \right)=1. & & & \text{}
\end{align}
$$

(b)

It can be shown that if $s\in\left[ 0 , 1 \right]$ we can exchange the differential and the summation so that 
$$
\begin{align}
\frac{d^{k}}{d s^{k}}G_{X}\left( s \right) & = & \sum_{x = 0}^{\infty}\left(\frac{d^{k}}{d s^{k}} s^{x}\right)ℙ\left( X = x \right) & \text{} \\ & = & \sum_{x = k}^{\infty}x\left( x - 1 \right)\dots \left( x - k + 1 \right)s^{x - k}ℙ\left( X = x \right). & \text{(6.1)}\text{}\text{}
\end{align}
$$

Evaluating at $s=1$ gives

$$
\begin{align}
G_{X}^{\left( k \right)}\left( 1 \right) & = & \sum_{x = k}^{\infty}x\left( x - 1 \right)\dots \left( x - k + 1 \right)ℙ\left( X = x \right) & \text{} \\ & = & \sum_{x = 0}^{\infty}x\left( x - 1 \right)\dots \left( x - k + 1 \right)ℙ\left( X = x \right)=𝔼\left( X \left( X - 1 \right) \dots  \left( X - k + 1 \right) \right) & \text{}
\end{align}
$$

since the first $k$ terms are zero.

  $\square$

   
To generate $𝔼\left( X \right)$ and $𝔼\left( X^{2} \right)$ we use the cases $k=1$ and $k=2$ of Theorem [28](#x34-5900128)(b) since

$$
\begin{align}
𝔼\left( X \right) & = & \left(\left(\frac{d}{d s} G_{X} \left( s \right)\right|\right)_{s = 1} & \text{} \\ 𝔼\left( X \left( X - 1 \right) \right) & = & \left(\left(\frac{d^{2}}{d s^{2}} G_{X} \left( s \right)\right|\right)_{s = 1} & \text{}
\end{align}
$$

so that $𝔼\left( X^{2} \right)=𝔼\left( X \left( X - 1 \right) \right)+𝔼\left( X \right)$.

Example 63 Suppose that $XsimGeom\left( p \right)$. Use $G_{X}\left( s \right)$ to find $𝔼\left( X \right)$ and $Var\left( X \right)$.

   
From Example [62](nose20.htm#x33-5800562), $G_{X}\left( s \right)=\frac{s p}{1 - s \left( 1 - p \right)}$ so that

$$
\begin{align}
\frac{d}{d s}G_{X}\left( s \right) & = & \frac{p \left( 1 - s \left( 1 - p \right) \right) + p s \left( 1 - p \right)}{\left(\left( 1 - s \left( 1 - p \right) \right)\right)^{2}}=\frac{p}{\left(\left( 1 - s \left( 1 - p \right) \right)\right)^{2}}, & \text{} \\ \frac{d^{2}}{d s^{2}}G_{X}\left( s \right) & = & \frac{2 p \left( 1 - p \right)}{\left(\left( 1 - s \left( 1 - p \right) \right)\right)^{3}}. & \text{}
\end{align}
$$

Hence,

$$
\begin{align}
𝔼\left( X \right) & = & \left(\left(\frac{d}{d s} G_{X} \left( s \right)\right|\right)_{s = 1}=\frac{p}{\left(\left( 1 - \left( 1 - p \right) \right)\right)^{2}}=\frac{1}{p}, & \text{} \\ 𝔼\left( X \left( X - 1 \right) \right) & = & \left(\left(\frac{d^{2}}{d s^{2}} G_{X} \left( s \right)\right|\right)_{s = 1}=\frac{2 p \left( 1 - p \right)}{\left(\left( 1 - \left( 1 - p \right) \right)\right)^{3}}=\frac{2 \left( 1 - p \right)}{p^{2}}. & \text{}
\end{align}
$$

Thus,

$$
\begin{align}
𝔼\left( X^{2} \right) & = & \frac{2 \left( 1 - p \right)}{p^{2}}+\frac{1}{p}=\frac{2 - p}{p^{2}} & \text{}
\end{align}
$$

so that

$$
\begin{align}
Var\left( X \right) & = & \frac{2 - p}{p^{2}}-\left(\left(\frac{1}{p}\right)\right)^{2}=\frac{1 - p}{p^{2}}. & \text{}
\end{align}
$$

Notice that these answers agree with those obtained directly: see Examples [49](nose17.htm#x29-4900949) and [53](nose18.htm#x30-5201153).

[[next](nose22.htm)] [[prev](nose20.htm)] [[prev-tail](nose20.htm#tailnose20.htm)] [[front](nose21.htm)] [[up](noch6.htm#nose21.htm)]

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