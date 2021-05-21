[[next](nose23.htm)] [[prev](nose21.htm)] [[prev-tail](nose21.htm#tailnose21.htm)] [[tail](#tailnose22.htm)] [[up](noch6.htm#nose22.htm)]

### 6.3 Uniqueness property of pgfs

We now show that the pgf determines the distribution of $X$.

Theorem 29 (Extracting probabilities from the pgf)  
The pgf, $G_{X}$, of a random variable $X$ uniquely determines the distribution of $X$ by

$$
\begin{align}
ℙ\left( X = k \right) & = & \frac{G_{X}^{\left( k \right)} \left( 0 \right)}{k !} & \text{}
\end{align}
$$

for $k=0,1,2,…⁡$ where $G_{X}^{\left( 0 \right)}\left( s \right)=G_{X}\left( s \right)$ and $G_{X}^{\left( k \right)}\left( s \right)=\frac{d^{k}}{d s^{k}}G_{X}\left( s \right)$.

Proof: Noting that

$$
\begin{align}
G_{X}\left( s \right)=\sum_{x = 0}^{\infty}s^{x}ℙ\left( X = x \right)=ℙ\left( X = 0 \right)+sℙ\left( X = 1 \right)+s^{2}ℙ\left( X = 2 \right)+\dots  & & & \text{}
\end{align}
$$

then $G_{X}\left( 0 \right)=ℙ\left( X = 0 \right)$ whilst, as in equation ([6.1](nose21.htm#x34-59004r6.1)),

$$
\begin{align}
\frac{d^{k}}{d s^{k}}G_{X}\left( s \right) & = & \sum_{x = 0}^{\infty}\left(\frac{d^{k}}{d s^{k}} s^{x}\right)ℙ\left( X = x \right) & \text{} \\ & = & \sum_{x = k}^{\infty}x\left( x - 1 \right)\dots \left( x - k + 1 \right)s^{x - k}ℙ\left( X = x \right) & \text{} \\ & = & k!ℙ\left( X = k \right)+\sum_{x = k + 1}^{\infty}x\left( x - 1 \right)\dots \left( x - k + 1 \right)s^{x - k}ℙ\left( X = x \right) & \text{}
\end{align}
$$

so that, evaluating at $s=0$, gives

$$
\begin{align}
G_{X}^{\left( k \right)}\left( 0 \right) & = & k!ℙ\left( X = k \right) & \text{}
\end{align}
$$

and the result thus follows by rearrangement. $\square$

Corollary 18 (Uniqueness property)  
Suppose that $X$ and $Y$ have pgfs $G_{X}$ and $G_{Y}$ respectively and $G_{X}\left( s \right)=G_{Y}\left( s \right)$ for all $s\in\left[ 0 , 1 \right]$ then $ℙ\left( X = k \right)=ℙ\left( Y = k \right)$ for $k=0,1,2,…⁡$ so that $X$ and $Y$ have the same distribution.

Proof: If $G_{X}\left( s \right)=G_{Y}\left( s \right)$ for all $s\in\left[ 0 , 1 \right]$ then $G_{X}^{\left( k \right)}\left( s \right)=G_{Y}^{\left( k \right)}\left( s \right)$ for all $k=0,1,2,…⁡$. In particular, $G_{X}^{\left( k \right)}\left( 0 \right)=G_{Y}^{\left( k \right)}\left( 0 \right)$ so that, from Theorem [29](#x35-6000129), $ℙ\left( X = k \right)=ℙ\left( Y = k \right)$. $\square$

   
Thus, specifying the pgf is equivalent to specifying the probability distribution and we can use the pgf to identify the distribution.

Example 64 Suppose that a random variable $Y$ has pgf $G_{Y}\left( s \right)=\frac{s}{2 - s}$ find the distribution of $Y$ .

   
Note that

$$
\begin{align}
\frac{s}{2 - s} & = & \frac{s \frac{1}{2}}{1 - s \frac{1}{2}} & \text{}
\end{align}
$$

and, from Example [62](nose20.htm#x33-5800562), if $XsimGeom\left( p \right)$ then $G_{X}\left( s \right)=\frac{s p}{1 - s \left( 1 - p \right)}$. Thus, by the uniqueness property, $YsimGeom\left( 1 / 2 \right)$.

Example 65 Suppose that $X$ has pgf $G_{X}\left( s \right)=\frac{\left(\left( 1 + s \right)\right)^{2}}{4}$ . Find the distribution of $X$.

   
Note that

$$
\begin{align}
\frac{d}{d s}G_{X}\left( s \right)=\frac{1 + s}{2},\frac{d^{2}}{d s^{2}}G_{X}\left( s \right)=\frac{1}{2},\frac{d^{k}}{d s^{k}}G_{X}\left( s \right)=0 & & & \text{}
\end{align}
$$

for $k=3,4,…⁡$. Thus,

$$
\begin{align}
ℙ\left( X = 0 \right)=G_{X}\left( 0 \right)=\frac{1}{4},ℙ\left( X = 1 \right)=\frac{G_{X}^{\left( 1 \right)} \left( 0 \right)}{1 !}=\frac{1}{2},ℙ\left( X = 2 \right)=\frac{G_{X}^{\left( 2 \right)} \left( 0 \right)}{2 !}=\frac{1}{4} & & & \text{}
\end{align}
$$

with $ℙ\left( X = k \right)=0$ for $k=3,4,…⁡$. Note that these probabilities are exactly those for $XsimB\left( 2 , 1 / 2 \right)$.

[[next](nose23.htm)] [[prev](nose21.htm)] [[prev-tail](nose21.htm#tailnose21.htm)] [[front](nose22.htm)] [[up](noch6.htm#nose22.htm)]

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