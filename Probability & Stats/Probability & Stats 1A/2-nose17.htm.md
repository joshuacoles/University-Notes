[[next](nose18.htm)] [[tail](#tailnose17.htm)] [[up](noch5.htm#nose17.htm)]

### 5.1 Expectation of a discrete random variable

A measure of location of a random variable $X$ is the expectation, $𝔼\left( X \right)$, which represents its average value, or mean, weighted according to the probability distribution. We hope to summarise a typical, or expected, value of $X$.

Definition 27 (Expectation)  
Let $X$ be a discrete random variable with set of possible values $I$. If $\left(\sum ⁡\right)_{x \in I}\left|x\left|ℙ\left( X = x \right)<\infty$ then the expectation (or expected value) of $X$ is

$$
\begin{align}
𝔼\left( X \right) & = & \underset{x \in I}{\sum}xℙ\left( X = x \right). & \text{(5.1)}\text{}\text{}
\end{align}
$$

Note: The requirement that $\left(\sum ⁡\right)_{x \in I}\left|x\left|ℙ\left( X = x \right)<\infty$ ensures that the summation in equation ([5.1](#x29-49002r5.1)) converges. If $I=\left\{ x_{1} , … ⁡ , x_{n} \right\}$ then

$$
\begin{align}
𝔼\left( X \right) & = & \sum_{i = 1}^{n}x_{i}ℙ\left( X = x_{i} \right) & \text{}
\end{align}
$$

contains only a finite number of terms and so the sum will converge. If $I=\left\{ x_{1} , x_{2} , … ⁡ \right\}$ then

$$
\begin{align}
𝔼\left( X \right) & = & \sum_{i = 1}^{\infty}x_{i}ℙ\left( X = x_{i} \right) & \text{}
\end{align}
$$

and absolute convergence[1](#fn1x5) of this infinite series ensures that $𝔼\left( X \right)$ exists.

Example 48 Let $X$ be the score obtained on a single roll of a fair die. Thus,

$$
\begin{align}
ℙ\left( X = x \right) & = & \frac{1}{6} & \text{}
\end{align}
$$

for $x\in\left\{ 1 , 2 , 3 , 4 , 5 , 6 \right\}$ and $0$ otherwise. Find the expectation of $X$.

$$
\begin{align}
𝔼\left( X \right) & = & \sum_{x = 1}^{6}xℙ\left( X = x \right) & \text{} \\ & = & 1\left(\frac{1}{6}\right)+2\left(\frac{1}{6}\right)+3\left(\frac{1}{6}\right)+4\left(\frac{1}{6}\right)+5\left(\frac{1}{6}\right)+6\left(\frac{1}{6}\right) & \text{} \\ & = & \frac{2 1}{6}=\frac{7}{2}. & \text{}
\end{align}
$$

Example 49 Suppose that $XsimGeom\left( p \right)$. Show that $𝔼\left( X \right)=\frac{1}{p}$.

   
If $XsimGeom\left( p \right)$ then $ℙ\left( X = x \right)=\left(\left( 1 - p \right)\right)^{x - 1}p$ for $x\in\left\{ 1 , 2 , … ⁡ \right\}$. Thus,

$$
\begin{align}
𝔼\left( X \right) & = & \sum_{x = 1}^{\infty}x\left(\left( 1 - p \right)\right)^{x - 1}p & \text{} \\ & = & p\left(1 + 2 \left( 1 - p \right) + 3 \left(\left( 1 - p \right)\right)^{2} + \dots  \right)\left( \text{let }q=1-p\text{} \right) & \text{} \\ & = & p\left(\frac{d}{d q} 1 + \frac{d}{d q} q + \frac{d}{d q} q^{2} + \frac{d}{d q} q^{3} + \dots  \right) & \text{} \\ & = & p\frac{d}{d q}\left(\sum_{i = 0}^{\infty} q^{i}\right)\left( \text{as }\left|q\left|=\left|1-p\left|<1\text{ for }p\in\left( 0 , 1 \right)\text{} \right) & \text{} \\ & = & p\frac{d}{d q}\frac{1}{1 - q} & \text{} \\ & = & p\frac{1}{\left(\left( 1 - q \right)\right)^{2}}=\frac{1}{p}. & \text{}
\end{align}
$$

#### 5.1.1 Properties of expectation

We now explore a number of key properties of expectation.

Theorem 16 (Non-negative random variables have non-negative expectation)  
If $X\geq 0$ then $𝔼\left( X \right)\geq 0$.

Proof: If $X\geq 0$ then $x\geq 0$ for all $x\in I$. Thus, $xℙ\left( X = x \right)\geq 0$ so that

$$
\begin{align}
𝔼\left( X \right) & = & \underset{x \in I}{\sum}xℙ\left( X = x \right)\geq 0. & \text{}
\end{align}
$$

 $\square$

Theorem 17 (The expectation of a constant is that constant)  
If $ℙ\left( X = a \right)=1$ for some $a\inℝ$ then $𝔼\left( X \right)=a$. Thus, $𝔼\left( a \right)=a$.

Proof:

$$
\begin{align}
𝔼\left( X \right) & = & aℙ\left( X = a \right)=a. & \text{}
\end{align}
$$

 $\square$

Theorem 18 (The law of the unconscious statistician)

1.

For a discrete random variable $X$, with set of possible values $I$, and function $g:ℝ\rightarrowℝ$ then 
$$
\begin{align}
𝔼\left( g \left( X \right) \right) & = & \underset{x \in I}{\sum}g\left( x \right)ℙ\left( X = x \right) & \text{}
\end{align}
$$

whenever $\left(\sum ⁡\right)_{x \in I}\left|g\left( x \right)\left|ℙ\left( X = x \right)<\infty$.

2.

For discrete random variables $X_{1},…⁡,X_{n}$, with set of possible values $I_{1},…⁡,I_{n}$ respectively, and function $g:ℝ^{n}\rightarrowℝ$ then 
$$
\begin{align}
𝔼\left( g \left( X_{1} , … ⁡ , X_{n} \right) \right) & = & \underset{x_{1} \in I_{1}}{\sum}\dots \underset{x_{n} \in I_{n}}{\sum}g\left( x_{1} , \dots  , x_{n} \right)ℙ\left( X_{1} = x_{1} , \dots  , X_{n} = x_{n} \right) & \text{}
\end{align}
$$

whenever $\left(\sum ⁡\right)_{x_{1} \in I_{1}}\dots \left(\sum ⁡\right)_{x_{n} \in I_{n}}\left|g\left( x_{1} , … ⁡ , x_{n} \right)\left|ℙ\left( X_{1} = x_{1} , … ⁡ , X_{n} = x_{n} \right)<\infty$.

Proof: 1. Let $Y=g\left( X \right)$ so that $Y$ is a discrete random variable. Let $I_{Y}=\left\{ y_{1} , y_{2} , … ⁡ \right\}$ be the range of $g$ so that for each $y\in I_{Y}$ there exists at least one $x\in I$ such that $g\left( x \right)=y$. For each $y_{i}\in I_{Y}$ form the set

$$
\begin{align}
A_{i} & = & \left\{ x \in I : g \left( x \right) = y_{i} \right\}. & \text{}
\end{align}
$$

Thus, $A_{i}$ is the set of $x$s mapped to $y_{i}$. Note that, for $i\neq j$, $A_{i}\capA_{j}=\oslash$ (the $A_{i}$s are disjoint) and each $x$ belongs to one (and only one) such $A_{i}$. Hence, as $\left\{ Y = y_{i} \right\}=\left(\cup ⁡\right)_{x \in A_{i}}\left\{ X = x \right\}$,

$$
\begin{align}
ℙ\left( Y = y_{i} \right) & = & \underset{x \in A_{i}}{\sum}ℙ\left( X = x \right). & \text{(5.2)}\text{}\text{}
\end{align}
$$

Assuming that $𝔼\left( Y \right)$ exists, that is that $𝔼\left( \left| Y \left| \right)<\infty$, then

$$
\begin{align}
𝔼\left( g \left( X \right) \right)=𝔼\left( Y \right) & = & \underset{i}{\sum}y_{i}ℙ\left( Y = y_{i} \right) & \text{(5.3)}\text{}\text{} \\ & = & \underset{i}{\sum}y_{i}\left\{\underset{x \in A_{i}}{\sum} ℙ \left( X = x \right)\right\} & \text{(5.4)}\text{}\text{} \\ & = & \underset{i}{\sum}\underset{x \in A_{i}}{\sum}y_{i}ℙ\left( X = x \right) & \text{(5.5)}\text{}\text{}
\end{align}
$$

where ([5.4](#x29-50012r5.4)) follows from ([5.3](#x29-50012r5.3)) by ([5.2](#x29-50011r5.2)). Noting that, for each $x\in A_{i}$, $y_{i}=g\left( x \right)$ then ([5.5](#x29-50012r5.5)) becomes

$$
\begin{align}
𝔼\left( g \left( X \right) \right)=𝔼\left( Y \right) & = & \underset{i}{\sum}\underset{x \in A_{i}}{\sum}g\left( x \right)ℙ\left( X = x \right) & \text{(5.6)}\text{}\text{} \\ & = & \underset{x \in I}{\sum}g\left( x \right)ℙ\left( X = x \right) & \text{(5.7)}\text{}\text{}
\end{align}
$$

where ([5.7](#x29-50013r5.7)) follows from ([5.6](#x29-50013r5.6)) as the $A_{i}$s are disjoint and each $x$ belongs to exactly one of them so that the double summation exactly covers every $x$. $\square$

   
2. Omitted: the proof is the natural extension of the univariate case. $\square$

Example 50 For discrete random variables $X$ and $Y$ , with set of possible values $I_{X}$ and $I_{Y}$ respectively,

$$
\begin{align}
𝔼\left( X^{2} \right) & = & \underset{x \in I_{X}}{\sum}x^{2}ℙ\left( X = x \right) & \text{} \\ 𝔼\left( X Y \right) & = & \underset{x \in I_{X}}{\sum}\underset{y \in I_{Y}}{\sum}xyℙ\left( X = x , Y = y \right). & \text{}
\end{align}
$$

Theorem 19 (Linearity of expectation)  
If $X_{1},…⁡,X_{n}$ are jointly distributed random variables with expectations $𝔼\left( X_{i} \right)$ and $Y$ is a linear function of the $X_{i}$s, $Y=a+\left(\sum ⁡\right)_{i = 1}^{n}b_{i}X_{i}$ for constants $a,b_{1},…⁡,b_{n}\inℝ$, then

$$
\begin{align}
𝔼\left( Y \right)=𝔼\left(a + \sum_{i = 1}^{n} b_{i} X_{i}\right)=a+\sum_{i = 1}^{n}b_{i}𝔼\left( X_{i} \right). & & & \text{}
\end{align}
$$

Proof: For simplicity of notation we’ll take $n=2$.[2](#fn2x5) Then, using Theorem [18](#x29-5000518),

$$
\begin{align}
𝔼\left( Y \right) & = & \underset{x_{1} \in I_{1}}{\sum}\underset{x_{2} \in I_{2}}{\sum}\left( a + b_{1} x_{1} + b_{2} x_{2} \right)ℙ\left( X_{1} = x_{1} , X_{2} = x_{2} \right) & \text{} \\ & = & a\left(\underset{x_{1} \in I_{1}}{\sum} \underset{x_{2} \in I_{2}}{\sum} ℙ \left( X_{1} = x_{1} , X_{2} = x_{2} \right)\right)+b_{1}\underset{x_{1} \in I_{1}}{\sum}x_{1}\left(\underset{x_{2} \in I_{2}}{\sum} ℙ \left( X_{1} = x_{1} , X_{2} = x_{2} \right)\right) & \text{} \\ & & +b_{2}\underset{x_{2} \in I_{2}}{\sum}x_{2}\left(\underset{x_{1} \in I_{1}}{\sum} ℙ \left( X_{1} = x_{1} , X_{2} = x_{2} \right)\right) & \text{} \\ & = & a+b_{1}\underset{x_{1} \in I_{1}}{\sum}x_{1}ℙ\left( X_{1} = x_{1} \right)+b_{2}\underset{x_{2} \in I_{2}}{\sum}x_{2}ℙ\left( X_{2} = x_{2} \right) & \text{} \\ & = & a+b_{1}𝔼\left( X_{1} \right)+b_{2}𝔼\left( X_{2} \right). & \text{}
\end{align}
$$

 $\square$

Example 51 Suppose that $XsimGeom\left( 1 / 4 \right)$ and $YsimPo\left( 2 \right)$ find $𝔼\left( 3 X - Y + 5 \right)$.

   
In Example [49](#x29-4900949) we showed that if $XsimGeom\left( p \right)$ then $𝔼\left( X \right)=1/p$ and so when $p=1/4$ we have $𝔼\left( X \right)=4$. On Exercise Sheet Nine, you’ll show that if $YsimPo\left( \lambda \right)$ then $𝔼\left( Y \right)=\lambda$. Thus, if $\lambda=2$ then $𝔼\left( Y \right)=2$. Using the linearity of expectation, Theorem [19](#x29-5001619), we have

$$
\begin{align}
𝔼\left( 3 X - Y + 5 \right) & = & 3𝔼\left( X \right)-𝔼\left( Y \right)+5 & \text{} \\ & = & \left( 3 \times 4 \right)-2+5=15. & \text{}
\end{align}
$$

Example 52 Use the linearity of expectation to show that if $YsimB\left( n , p \right)$ then $𝔼\left( Y \right)=np$.

   
Recall that we may write $Y=\left(\sum ⁡\right)_{i = 1}^{n}X_{i}$ where each $X_{i}simBern\left( p \right)$ denotes the outcome of the $i$th trial. Now

$$
\begin{align}
𝔼\left( X_{i} \right) & = & 0\timesℙ\left( X_{i} = 0 \right)+1\timesℙ\left( X_{i} = 1 \right) & \text{} \\ & = & ℙ\left( X_{i} = 1 \right)=p. & \text{}
\end{align}
$$

Using the linearity of expectation, Theorem [19](#x29-5001619), we have

$$
\begin{align}
𝔼\left( Y \right) & = & 𝔼\left(\sum_{i = 1}^{n} X_{i}\right) & \text{} \\ & = & \sum_{i = 1}^{n}𝔼\left( X_{i} \right)=np. & \text{}
\end{align}
$$

Note that if $X_{i}simBern\left( p \right)$ then either $X_{i}=0$ or $X_{i}=1$ so that $X_{i}\left( X_{i} - 1 \right)=0$. Thus, from Theorem [17](#x29-5000317), $𝔼\left( X_{i} \left( X_{i} - 1 \right) \right)=0$. We can verify this directly as

$$
\begin{align}
𝔼\left( X_{i}^{2} \right) & = & 0^{2}\timesℙ\left( X_{i} = 0 \right)+1^{2}\timesℙ\left( X_{i} = 1 \right) & \text{} \\ & = & ℙ\left( X_{i} = 1 \right)=p & \text{}
\end{align}
$$

so that, using the linearity of expectation, Theorem [19](#x29-5001619),

$$
\begin{align}
𝔼\left( X_{i} \left( X_{i} - 1 \right) \right)=𝔼\left( X_{i}^{2} - X_{i} \right)=𝔼\left( X_{i}^{2} \right)-𝔼\left( X_{i} \right)=p-p=0. & & & \text{}
\end{align}
$$

Theorem 20 (Expectation of the modulus $\geq$ the modulus of the expectation)  
If $𝔼\left( X \right)$ exists then $\left|𝔼\left( X \right)\left|\leq𝔼\left( \left| X \left| \right)$.

Proof: We can repeatedly use the triangle inequality that for $a,b\inℝ$, $\left|a+b\left|\leq\left|a\left|+\left|b\left|$ so that

$$
\begin{align}
\left|𝔼 \left( X \right)\right| & = & \left|\underset{x \in I}{\sum} x ℙ \left( X = x \right)\right| & \text{} \\ & \leq & \underset{x \in I}{\sum}\left|x ℙ \left( X = x \right)\right|=\underset{x \in I}{\sum}\left|x\left|ℙ\left( X = x \right)=𝔼\left( \left| X \left| \right). & \text{}
\end{align}
$$

 $\square$

   
Recall that we required $𝔼\left( \left| X \left| \right)=\left(\sum ⁡\right)_{x \in I}\left|x\left|ℙ\left( X = x \right)<\infty$ for $𝔼\left( X \right)$ to be well defined; this result demonstrates why this will be the case. Note that the properties we have proved in this section also hold for continuous random variables which you’ll meet next semester.

#### 5.1.2 Expectation of the product of independent random variables

Corollary 12 (Expected value of the product of independent random variables)  
If $X$ and $Y$ are independent random variables and functions $g:ℝ\rightarrowℝ$ and $h:ℝ\rightarrowℝ$ are such that $𝔼\left( \left| g \left( X \right) \left| \right)<\infty$ and $𝔼\left( \left| h \left( Y \right) \left| \right)<\infty$ then

$$
\begin{align}
𝔼\left( g \left( X \right) h \left( Y \right) \right) & = & 𝔼\left( g \left( X \right) \right)𝔼\left( h \left( Y \right) \right). & \text{}
\end{align}
$$

Proof: From Definition [26](nose16.htm#x27-4600126), as $X$ and $Y$ are independent then for all $x\in I_{X}$, $y\in I_{Y}$ ,

$$
\begin{align}
ℙ\left( X = x , Y = y \right) & = & ℙ\left( X = x \right)ℙ\left( Y = y \right). & \text{}
\end{align}
$$

Then, using the law of the unconscious statistician, Theorem [18](#x29-5000518),

$$
\begin{align}
𝔼\left( g \left( X \right) h \left( Y \right) \right) & = & \underset{x \in I_{X}}{\sum}\underset{y \in I_{Y}}{\sum}g\left( x \right)h\left( y \right)ℙ\left( X = x , Y = y \right) & \text{} \\ & = & \underset{x \in I_{X}}{\sum}\underset{y \in I_{Y}}{\sum}g\left( x \right)h\left( y \right)ℙ\left( X = x \right)ℙ\left( Y = y \right) & \text{} \\ & = & \left(\underset{x \in I_{X}}{\sum} g \left( x \right) ℙ \left( X = x \right)\right)\left(\underset{y \in I_{Y}}{\sum} h \left( y \right) ℙ \left( Y = y \right)\right) & \text{} \\ & = & 𝔼\left( g \left( X \right) \right)𝔼\left( h \left( Y \right) \right). & \text{}
\end{align}
$$

 $\square$

   
Notes:

1.

This is a further illustration that “independence means multiply”: if $X$ and $Y$ are independent then 
$$
\begin{align}
ℙ\left( X = x , Y = y \right)=ℙ\left( X = x \right)ℙ\left( Y = y \right)\text{and}𝔼\left( g \left( X \right) h \left( Y \right) \right)=𝔼\left( g \left( X \right) \right)𝔼\left( h \left( Y \right) \right). & & & \text{}
\end{align}
$$

This multiplicative property is not true in general.

2.

This result can be extended to $n$ independent random variables in the usual fashion.

3.

An important application of this corollary is when $g\left( X \right)=X$ and $h\left( Y \right)=Y$ which gives 
$$
\begin{align}
𝔼\left( X Y \right) & = & 𝔼\left( X \right)𝔼\left( Y \right) & \text{}
\end{align}
$$

if $X$ and $Y$ are independent. This will be especially useful when we consider the covariance of two random variables.

[1](#fn1x5-bk)If a series satisfies $\left(\sum ⁡\right)_{i = 1}^{\infty}a_{i}<\infty$ but $\left(\sum ⁡\right)_{i = 1}^{\infty}\left|a_{i}\left|=\infty$ then the series is said to converge conditionally. In a conditionally convergent series it is possible, by the Riemann Rearrangement Theorem, to rearrange the terms so that the new series sums to any given value.

[2](#fn2x5-bk)The general case can be applied by using the $n=2$ case recursively: $𝔼\left( a + b X + c Y + d Z \right)=a+b𝔼\left( X \right)+𝔼\left( c Y + d Z \right)=a+b𝔼\left( X \right)+c𝔼\left( Y \right)+d𝔼\left( Z \right)$.

[[next](nose18.htm)] [[front](nose17.htm)] [[up](noch5.htm#nose17.htm)]

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