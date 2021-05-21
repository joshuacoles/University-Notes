[[next](nose10.htm)] [[prev](nose8.htm)] [[prev-tail](nose8.htm#tailnose8.htm)] [[tail](#tailnose9.htm)] [[up](noch3.htm#nose9.htm)]

### 3.3 The law of total probability

Definition 12 (Partition)  
If $E_{1},…⁡,E_{n}$ are a collection of non-empty events, that is each $E_{i}\neq\oslash$, which are pairwise disjoint, so $E_{i}\capE_{j}=\oslash$ for all $i\neq j$, and $\left(\cup ⁡\right)_{i = 1}^{n}E_{i}=\Omega$ then $\left\{ E_{1} , … ⁡ , E_{n} \right\}$ forms a partition of $\Omega$.

Partitions are very useful as they allow us to divide the sample space $\Omega$ into non-overlapping pieces. Notice that for a partition $\left\{ E_{1} , … ⁡ , E_{n} \right\}$ we have

$$
\begin{align}
ℙ\left(\cup_{i = 1}^{n} E_{i}\right) & = & \sum_{i = 1}^{n}ℙ\left( E_{i} \right)=1. & \text{}
\end{align}
$$

Example 28 For any event $E$ with $E\neq\oslash$ and $E\neq\Omega$, $\left\{ E , E^{c} \right\}$ is a partition of $\Omega$: $E\capE^{c}=\oslash$ and $E\cupE^{c}=\Omega$.

Recall the partition rule, Corollary [3](nose2.htm#x10-160203) from Section [1.2.3](nose2.htm#x10-160003),

$$
\begin{align}
ℙ\left( F \right) & = & ℙ\left( F \cap E \right)+ℙ\left( F \cap E^{c} \right). & \text{(3.4)}\text{}\text{}
\end{align}
$$

Now, if $ℙ\left( E \right)>0$ and $ℙ\left( E^{c} \right)>0$ so that $ℙ\left( F \left| E \right)=ℙ\left( F \cap E \right)/ℙ\left( E \right)$ and $ℙ\left( F \left| E^{c} \right)=ℙ\left( F \cap E^{c} \right)/ℙ\left( E^{c} \right)$ are well defined, then

$$
\begin{align}
ℙ\left( F \cap E \right) & = & ℙ\left( F \left| E \right)ℙ\left( E \right), & \text{(3.5)}\text{}\text{} \\ ℙ\left( F \cap E^{c} \right) & = & ℙ\left( F \left| E^{c} \right)ℙ\left( E^{c} \right). & \text{(3.6)}\text{}\text{}
\end{align}
$$

Substituting equations ([3.5](#x19-31005r3.5)) and ([3.6](#x19-31005r3.6)) into ([3.4](#x19-31004r3.4)) gives

$$
\begin{align}
ℙ\left( F \right) & = & ℙ\left( F \left| E \right)ℙ\left( E \right)+ℙ\left( F \left| E^{c} \right)ℙ\left( E^{c} \right). & \text{}
\end{align}
$$

This result can be extended into the following theorem.

Theorem 10 (The law of total probability)  
If $\left\{ E_{1} , … ⁡ , E_{n} \right\}$ form a partition of $\Omega$ and $ℙ\left( E_{i} \right)>0$ for all $i$ then, for any event $F$,

$$
\begin{align}
ℙ\left( F \right) & = & \sum_{i = 1}^{n}ℙ\left( F \left| E_{i} \right)ℙ\left( E_{i} \right). & \text{}
\end{align}
$$

Proof: Noting that $F=F\cap\Omega$ and $\left(\cup ⁡\right)_{i = 1}^{n}E_{i}=\Omega$ then,

$$
\begin{align}
F=F\cap\left(\cup_{i = 1}^{n} E_{i}\right)=\cup_{i = 1}^{n}\left( F \cap E_{i} \right) & & & \text{}
\end{align}
$$

using the Distributive Law (see Theorem [1](nose1.htm#x9-110241)). Now, for any $i\neq j$,

$$
\begin{align}
\left( F \cap E_{i} \right)\cap\left( F \cap E_{j} \right)=F\cap\left( E_{i} \cap E_{j} \right)=F\cap\oslash=\oslash & & & \text{}
\end{align}
$$

so that $F\capE_{1},…⁡,F\capE_{n}$ are pairwise disjoint. Thus,

$$
\begin{align}
ℙ\left( F \right)=ℙ\left(\cup_{i = 1}^{n} \left( F \cap E_{i} \right)\right) & = & \sum_{i = 1}^{n}ℙ\left( F \cap E_{i} \right) & \text{(3.7)}\text{}\text{} \\ & = & \sum_{i = 1}^{n}ℙ\left( F \left| E_{i} \right)ℙ\left( E_{i} \right) & \text{(3.8)}\text{}\text{}
\end{align}
$$

where equation ([3.7](#x19-31011r3.7)) follows from Theorem [3](nose2.htm#x10-160063) and ([3.8](#x19-31011r3.8)) from equation ([3.1](nose7.htm#x17-29002r3.1)). $\square$

   
Notes

1.

We can extend Definition [12](#x19-3100112) to a countably infinite collection of non-empty disjoint events $E_{1},E_{2},…⁡$ which partition $\Omega$. In this case, Theorem [10](#x19-3100710) naturally extends to 
$$
\begin{align}
ℙ\left( F \right) & = & \sum_{i = 1}^{\infty}ℙ\left( F \left| E_{i} \right)ℙ\left( E_{i} \right). & \text{}
\end{align}
$$

2.

The result also holds for collections of disjoint events $E_{1},…⁡,E_{n}$ with $F\subset\left(\cup ⁡\right)_{i = 1}^{n}E_{i}$.

Example 29 In a bank’s trading office, suppose Buster, Rich and Owen made $30%$, $50%$ and $20%$ of all the deals last year, respectively, and $1/2$, $1/3$ and $1/4$ of each of their own deals made in excess of $£1$ million in profit, respectively. What is the probability a randomly chosen deal from last year made over $£1$ million profit?

Let $\Omega$ be collection of last years deals. Let $B$, $R$, $W$ be event the deal was made by Buster. Rich, Owen respectively. Then, since $B\cupR\cupW=\Omega$ and $B$, $R$, $W$ are disjoint, $\left\{ B , R , W \right\}$ is a partition of $\Omega$.

If $E$ is the event that the chosen deal makes over $£1$ million in profit, then by the law of total probability,

$$
\begin{align}
ℙ\left( E \right) & = & ℙ\left( E \left| B \right)ℙ\left( B \right)+ℙ\left( E \left| R \right)ℙ\left( R \right)+ℙ\left( E \left| W \right)ℙ\left( W \right) & \text{} \\ & = & \left(\frac{1}{2} \times \frac{3}{1 0}\right)+\left(\frac{1}{3} \times \frac{5}{1 0}\right)+\left(\frac{1}{4} \times \frac{2}{1 0}\right)=\frac{1 1}{3 0}. & \text{}
\end{align}
$$

[[next](nose10.htm)] [[prev](nose8.htm)] [[prev-tail](nose8.htm#tailnose8.htm)] [[front](nose9.htm)] [[up](noch3.htm#nose9.htm)]

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