[[next](nose9.htm)] [[prev](nose7.htm)] [[prev-tail](nose7.htm#tailnose7.htm)] [[tail](#tailnose8.htm)] [[up](noch3.htm#nose8.htm)]

### 3.2 Multiplication law

We may re-arrange equation ([3.1](nose7.htm#x17-29002r3.1)) to obtain

$$
\begin{align}
ℙ\left( E \cap F \right) & = & ℙ\left( E \left| F \right)ℙ\left( F \right). & \text{(3.2)}\text{}\text{}
\end{align}
$$

which can be a useful way of calculating intersection probabilities as conditional probabilities may be easy to calculate directly.

Example 26 Two cards are drawn at random from a deck of 52 cards. What’s the probability that both are aces?

   
Let $E_{1}=\left\{ \text{First card is an ace} \right\}$ and $E_{2}=\left\{ \text{Second card is an ace} \right\}$ then

$$
\begin{align}
ℙ\left( \left\{ \text{Two aces} \right\} \right)=ℙ\left( E_{1} \cap E_{2} \right)=ℙ\left( E_{2} \left| E_{1} \right)ℙ\left( E_{1} \right)=\frac{3}{5 1}\times\frac{4}{5 2}=\frac{1}{2 2 1}. & & & \text{}
\end{align}
$$

We can extend equation ([3.2](#x18-30001r3.2)) to intersections of $n$ events.

Theorem 9 (Multiplication law)  
Suppose that $E_{1},…⁡,E_{n}$ are any events such that $ℙ\left( E_{1} \cap \dots  \cap E_{n - 1} \right)>0$. Then

$$
\begin{align}
ℙ\left( E_{1} \cap \dots  \cap E_{n} \right)=ℙ\left( E_{n} \left| E_{1} \cap \dots  \cap E_{n - 1} \right)\dots ℙ\left( E_{3} \left| E_{1} \cap E_{2} \right)ℙ\left( E_{2} \left| E_{1} \right)ℙ\left( E_{1} \right). & & & \text{(3.3)}\text{}\text{}
\end{align}
$$

Proof: For any $k\in\left\{ 1 , … ⁡ , n - 1 \right\}$, $\left(\cap ⁡\right)_{i = 1}^{n - 1}E_{i}\subset\left(\cap ⁡\right)_{i = 1}^{k}E_{i}$ and so, from Corollary [5](nose2.htm#x10-160245) (the containment rule: if $E\subsetF$ then $ℙ\left( F \right)\geqℙ\left( E \right)$),

$$
\begin{align}
ℙ\left(\cap_{i = 1}^{k} E_{i}\right) & \geq & ℙ\left(\cap_{i = 1}^{n - 1} E_{i}\right)>0. & \text{}
\end{align}
$$

Thus, all of the conditional probabilities in equation ([3.3](#x18-30005r3.3)) are well defined and

$$
\begin{align}
 & ℙ\left( E_{n} \left| E_{1} \cap \dots  \cap E_{n - 1} \right)\dots ℙ\left( E_{3} \left| E_{1} \cap E_{2} \right)ℙ\left( E_{2} \left| E_{1} \right)ℙ\left( E_{1} \right) & & \\ & =\frac{ℙ \left( E_{1} \cap \dots  \cap E_{n} \right)}{ℙ \left( E_{1} \cap \dots  \cap E_{n - 1} \right)}\dots \frac{ℙ \left( E_{1} \cap E_{2} \cap E_{3} \right)}{ℙ \left( E_{1} \cap E_{2} \right)}\frac{ℙ \left( E_{1} \cap E_{2} \right)}{ℙ \left( E_{1} \right)}ℙ\left( E_{1} \right) & & \\ & =ℙ\left( E_{1} \cap \dots  \cap E_{n} \right) & & 
\end{align}
$$

giving the result. $\square$

Example 27 An electrician’s tool box contains five good and two bad fuses. Fuses are selected at random without replacement for testing.

1.

Find the probability that the first two chosen are defective.

   
Let $D_{i}$ denote the event that the $i$th fuse is defective and $G_{i}$ that it is good so that $G_{i}^{c}=D_{i}$. Then

$$
\begin{align}
ℙ\left( \left\{ \text{First two defective} \right\} \right) & = & ℙ\left( D_{1} \cap D_{2} \right) & \text{} \\ & = & ℙ\left( D_{2} \left| D_{1} \right)ℙ\left( D_{1} \right)=\frac{1}{6}\times\frac{2}{7}=\frac{1}{2 1}. & \text{}
\end{align}
$$

2.

What is the probability that the second defective fuse is found on the third test?

   
Let $E$ be the event that the second defective fuse is found on third test, then we can write $E$ as the following disjoint union:

$$
\begin{align}
E & = & \left( G_{1} \cap D_{2} \cap D_{3} \right)\cup\left( D_{1} \cap G_{2} \cap D_{3} \right) & \text{}
\end{align}
$$

so that, using first the probability of disjoint events (Corollary [3](nose2.htm#x10-160063)) and then Theorem [9](#x18-300049),

$$
\begin{align}
ℙ\left( E \right) & = & ℙ\left( G_{1} \cap D_{2} \cap D_{3} \right)+ℙ\left( D_{1} \cap G_{2} \cap D_{3} \right) & \text{} \\ & = & ℙ\left( D_{3} \left| G_{1} \cap D_{2} \right)ℙ\left( D_{2} \left| G_{1} \right)ℙ\left( G_{1} \right)+ℙ\left( D_{3} \left| D_{1} \cap G_{2} \right)ℙ\left( G_{2} \left| D_{1} \right)ℙ\left( D_{1} \right) & \text{} \\ & = & \left(\frac{1}{5} \times \frac{2}{6} \times \frac{5}{7}\right)+\left(\frac{1}{5} \times \frac{5}{6} \times \frac{2}{7}\right)=\frac{2}{2 1}. & \text{}
\end{align}
$$

[[next](nose9.htm)] [[prev](nose7.htm)] [[prev-tail](nose7.htm#tailnose7.htm)] [[front](nose8.htm)] [[up](noch3.htm#nose8.htm)]

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