[[next](nose8.htm)] [[tail](#tailnose7.htm)] [[up](noch3.htm#nose7.htm)]

### 3.1 Conditional probability

Suppose that in an experiment, we learn that an event $F$ has occurred. Has does this information change our probability of some other event $E$? If we know that $F$ has occurred then we know that the outcome of the experiment is one of those sample points contained in $F$. Thus, to evaluate the probability that $E$ occurs given that $F$ has occurred we need to consider the set of outcomes in $F$ that also result in $E$, that is the set $E\capF$.

Definition 11 (Conditional probability)  
For a probability space $\left( \Omega , ℱ , ℙ \right)$ if $E,F\inℱ$, and $ℙ\left( F \right)>0$, then the conditional probability of event $E$ given event $F$, written $ℙ\left( E \left| F \right)$, is

$$
\begin{align}
ℙ\left( E \left| F \right) & = & \frac{ℙ \left( E \cap F \right)}{ℙ \left( F \right)}. & \text{(3.1)}\text{}\text{}
\end{align}
$$

Notes:

1.

What happens in the conditional probability calculation is that $F$ becomes the sample space: $ℙ\left( F \left| F \right)=1$. All other probabilities are then recalibrated with respect to their relationship with $F$.

2.

It is straightforward to verify that $ℙ\left( \cdot \left| F \right)$ satisfies Kolmogorov’s axioms (A1)-(A3) of Definition [9](nose2.htm#x10-150029). Hence, all of the consequences, that is the calculus of probabilities obtained in Section [1.2.3](nose2.htm#x10-160003), hold in conditional versions. For example, the inclusion-exclusion rule of Corollary [4](nose2.htm#x10-160224) for conditional probability is that for any events $E$ and $G$ we have: 
$$
\begin{align}
ℙ\left( E \cup G \left| F \right) & = & ℙ\left( E \left| F \right)+ℙ\left( G \left| F \right)-ℙ\left( E \cap G \left| F \right). & \text{}
\end{align}
$$

3.

If $E$ and $F$ are disjoint, that is from Definition [6](nose1.htm#x9-110206) $E\capF=\oslash$, then $ℙ\left( E \cap F \right)=0$ so that $ℙ\left( E \left| F \right)=0$.

Example 25 A family has three children, but you don’t know their sexes. What’s the probability that all three are boys when somebody tells you there are at least two boys?

   
Let $\Omega=\left\{ B B B , B B G , B G B , G B B , B G G , G B G , G G B , G G G \right\}$ where, for example, $GBB$ represents eldest a girl, middle and youngest are boys. If we set $E=\left\{ \text{Three boys} \right\}$ and $F=\left\{ \text{At least two boys} \right\}$ then $E=\left\{ B B B \right\}$, $F=\left\{ B B B , B B G , B G B , G B B \right\}$ and $E\capF=\left\{ B B B \right\}$. If we assume that all sample points of $\Omega$ are equally likely then

$$
\begin{align}
ℙ\left( E \right) & = & \frac{\left| E \left|}{\left| \Omega \left|}=\frac{1}{8}, & \text{} \\ ℙ\left( F \right) & = & \frac{\left| F \left|}{\left| \Omega \left|}=\frac{4}{8}=\frac{1}{2}, & \text{} \\ ℙ\left( E \cap F \right) & = & \frac{\left| E \cap F \left|}{\left| \Omega \left|}=\frac{1}{8}. & \text{}
\end{align}
$$

Using equation ([3.1](#x17-29002r3.1)), the probability that all the children are boys given that there are at least two boys is

$$
\begin{align}
ℙ\left( E \left| F \right)=\frac{\left(\frac{\left| E \cap F \left|}{\left| \Omega \left|}\right)}{\left(\frac{\left| F \left|}{\left| \Omega \left|}\right)}=\frac{\left| E \cap F \left|}{\left| F \left|}=\frac{1}{4}. & & & \text{}
\end{align}
$$

Notice that $ℙ\left( E \left| F \right)>ℙ\left( E \right)$ which is not a surprise: learning that there are at least two boys increases the probability that there are three boys.

[[next](nose8.htm)] [[front](nose7.htm)] [[up](noch3.htm#nose7.htm)]

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