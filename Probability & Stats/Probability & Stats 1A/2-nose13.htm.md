[[next](nose14.htm)] [[tail](#tailnose13.htm)] [[up](noch4.htm#nose13.htm)]

### 4.1 Real-valued random variables

Suppose that we consider tossing a coin $n$ times. The sample space has $2^{n}$ elements. Let $X$ be the number of heads obtained in the $n$ tosses which has $\left\{ 0 , 1 , … ⁡ , n \right\}$ as its sample space. It may be that the only quantities of interest are derived from $X$.

e.g. The event $\left\{ \text{}x\text{ heads in }n\text{ tosses} \right\}$ is equivalent to the event $\left\{ X = x \right\}$

$X$ is a mapping from the original sample space to a new sample space in $ℝ$. It is an example of a random variable.

Definition 15 (Random variable)  
A (real-valued) random variable $X$ is a function that assigns a real-valued number to each possible outcome of an experiment, that is it is a mapping

$$
\begin{align}
X:\Omega\rightarrowℝ. & & & \text{}
\end{align}
$$

Definition 16 (Discrete random variable)  
A random variable $X$ is discrete[1](#fn1x4) if it only has a finite or countably infinite number of possible values.

Notational note: we’ll typically denote random variables using capital letters near to the end of the alphabet such as $X$, $Y$ , and $Z$ (random variables are, prior to the experiment, unknown). We’ll use lower case letters for the numerical outcomes such as $x$, $y$ and $z$ (these are known real numbers) and consider events such as $\left\{ X = x \right\}$.

   
If $X$ is a discrete random variable then we might regard $X:\Omega\rightarrow I\subsetℝ$ where either:

(a)

$I$ is finite, so $I=\left\{ x_{1} , x_{2} , … ⁡ , x_{n} \right\}$ for suitable $x_{i}\inℝ$ (e.g. $\left\{ 1 , 2 , … ⁡ , n \right\}$).

(b)

$I$ is countably infinite so $I=\left\{ x_{1} , x_{2} , … ⁡ \right\}$ for suitable $x_{i}\inℝ$ (e.g. $I=ℤ^{+}=\left\{ 1 , 2 , … ⁡ \right\}$).

Notational note: we’ll typically use $I$ to denote the set of possible values of $X$, irrespective of whether $I$ is finite or infinite. If we want to make the random variable explicit to which the set refers then we’ll use $I_{X}$.

   
Suppose that we have a probability space $\left( \Omega , ℱ , ℙ \right)$ then for a random variable $X$ we have related sets of interest such as

$$
\begin{align}
\left\{ X = x \right\} & := & \left\{ \omega \in \Omega : X \left( \omega \right) = x \right\}, & \text{} \\ \left\{ X \leq x \right\} & := & \left\{ \omega \in \Omega : X \left( \omega \right) \leq x \right\}, & \text{}
\end{align}
$$

which are events in $\Omega$ (as they’re subsets of the sample points). Thus, since they are in the event space $ℱ$, we have an induced probability measure $ℙ_{X}$:

$$
\begin{align}
ℙ_{X}\left( \left\{ X = x \right\} \right) & := & ℙ\left( \left\{ \omega \in \Omega : X \left( \omega \right) = x \right\} \right), & \text{} \\ ℙ_{X}\left( \left\{ X \leq x \right\} \right) & := & ℙ\left( \left\{ \omega \in \Omega : X \left( \omega \right) \leq x \right\} \right). & \text{}
\end{align}
$$

We can formalise this approach to consider subsets $A$ of $ℝ$.

Definition 17 (Distribution of a random variable)  
The distribution of a random variable $X$ is the probability measure $ℙ_{X}:ℱ^{′}\rightarrow\left[ 0 , 1 \right]$ defined by

$$
\begin{align}
ℙ_{X}\left( A \right) & = & ℙ\left( \left\{ X \in A \right\} \right) & \text{(4.1)}\text{}\text{}
\end{align}
$$

where $ℱ^{′}$ is the event space consisting of all subsets $A$ of the real line such that

$$
\begin{align}
\left\{ X \in A \right\} & := & \left\{ \omega \in \Omega : X \left( \omega \right) \in A \right\}\inℱ. & \text{}
\end{align}
$$

It is possible to check Kolmogorov’s axioms, see Definition [9](nose2.htm#x10-150029), for $ℙ_{X}$ as well as the axioms of an event space, see Definition [7](nose2.htm#x10-140017), for $ℱ^{′}$. We typically assume that at least the events $\left\{ X \leq a \right\}$, $a\inℝ$, are in the event space.[2](#fn2x4)

Example 37 Consider tossing a fair coin three times. The sample space is

$$
\begin{align}
\Omega & = & \left\{ \text{HHH} , \text{HHT} , \text{HTH} , \text{THH} , \text{HTT} , \text{THT} , \text{TTH} , \text{TTT} \right\}. & \text{}
\end{align}
$$

Let $X$ denote the number of heads obtained in the three tosses. Then for each $\omega\in\Omega$ we can find $X\left( \omega \right)$.

$$
\begin{align}
\begin{matrix}\omega & \text{HHH} & \text{HHT} & \text{HTH} & \text{THH} & \text{HTT} & \text{THT} & \text{TTH} & \text{TTT} \\ ̲ & ̲ & ̲ & ̲ & ̲ & ̲ & ̲ & ̲ & ̲ \\ X\left( \omega \right) & 3 & 2 & 2 & 2 & 1 & 1 & 1 & 0\end{matrix} & & & \text{}
\end{align}
$$

Thus, $X$ is discrete, and we can find the probability measure $ℙ_{X}$ induced by $\left( \Omega , ℱ , ℙ \right)$.

1.

Suppose that $A=\left[ 2 , \infty \right)$ then $\left\{ X \in \left[ 2 , \infty \right) \right\}=\left\{ \text{HHH} , \text{HHT} , \text{HTH} , \text{THH} \right\}$ so that $ℙ_{X}\left( \left[ 2 , \infty \right) \right)=4/8=1/2$. This is most simply written as $ℙ_{X}\left( \left\{ X \geq 2 \right\} \right)$.

2.

Suppose that $A=x$ for each $x\in\left\{ 0 , 1 , 2 , 3 \right\}$ then 
$$
\begin{align}
\begin{matrix}x & 0 & 1 & 2 & 3 \\ ̲ & ̲ & ̲ & ̲ & ̲ \\ ℙ_{X}\left( \left\{ X = x \right\} \right) & \frac{1}{8} & \frac{3}{8} & \frac{3}{8} & \frac{1}{8}\end{matrix} & & & \text{}
\end{align}
$$

Notice that we can use the $ℙ_{X}\left( \left\{ X = x \right\} \right)$s to obtain the probability that $X$ lies in any real interval.

We can define many random variables on $\Omega$. For example, we could let $Y$ denote the number of tails obtained in the three tosses (so $Y=3-X$) or $Z$ denote the number of heads achieved on the second and third tosses.

Notational note: in equation ([4.1](#x24-36008r4.1)), it’s customary to drop the braces so we’ll write $ℙ\left( X \in A \right)$ for the probability of the event $\left\{ X \in A \right\}$. We will also prefer to use $ℙ\left( X \in A \right)$ rather than $ℙ_{X}\left( A \right)$. Thus, for example, we’ll use $ℙ\left( X = x \right)$ for the probability that $X$ takes the value $x$.

   
Rather than deducing the probability distribution of $X$ from the original probability space $\left( \Omega , ℱ , ℙ \right)$, we’ll typically assume that the probabilities are specified directly. From Theorem [5](nose2.htm#x10-170015) it is sufficient to specify, for each $x\in I$, $ℙ\left\{ X = x \right\}\geq 0$ where $\left(\sum ⁡\right)_{x \in I}ℙ\left\{ X = x \right\}=1$. We this in mind we make the following definition.

Definition 18 (Probability mass function)  
The probability mass function (pmf) of a discrete random variable $X$, $f_{X}:ℝ\rightarrow\left[ 0 , 1 \right]$[3](#fn3x4), is given by

$$
\begin{align}
f_{X}\left( x \right) & = & ℙ\left( X = x \right). & \text{}
\end{align}
$$

Thus, if $I$ is the set of possible values of $X$ then $f_{X}\left( x \right)=0$ for all $x\notinI$ and $\left(\sum ⁡\right)_{x \in I}ℙ\left( X = x \right)=1$.

In this chapter we will define various probability distributions through their probability mass functions.

[1](#fn1x4-bk)Next semester in MA10212: Probability & Statistics 1B you will study continuous random variables.

[2](#fn2x4-bk)This is related to the idea of a cumulative distribution function which you’ll meet next semester.

[3](#fn3x4-bk)Note that some authors use $p_{X}\left( x \right)$ and/or drop the $X$ subscript. Next semester you’ll see the continuous version of the pmf: the probability density function (pdf).

[[next](nose14.htm)] [[front](nose13.htm)] [[up](noch4.htm#nose13.htm)]

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