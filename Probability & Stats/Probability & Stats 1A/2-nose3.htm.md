[[next](nose4.htm)] [[tail](#tailnose3.htm)] [[up](noch2.htm#nose3.htm)]

### 2.1 Equally likely events and the classical interpretation of probability

The classical interpretation of probability, championed by Laplace[1](#fn1x2), takes as a basic notion the situation where the possible outcomes of an experiment are all considered to be equally likely.

Example 12 A card is drawn at random from a well-shuffled deck, so that each card is equally likely to be drawn.

Definition 10 (Classical interpretation of probability)  
For a finite sample space $\Omega=\left\{ \left(\omega\right)_{1} , … ⁡ , \left(\omega\right)_{n} \right\}$, so $\left|\Omega\left|=n$, if the outcomes $\left(\omega\right)_{1},…⁡,\left(\omega\right)_{n}$ are viewed to be equally likely then the classical interpretation of probability defines the probability of each $\left(\omega\right)_{i}$ to be

$$
\begin{align}
ℙ\left( \left(\omega\right)_{i} \right) & = & \frac{1}{\left| \Omega \left|}=\frac{1}{n}, & \text{}
\end{align}
$$

and, for any event $E\subset\Omega$, the probability of $E$ to be

$$
\begin{align}
ℙ\left( E \right) & = & \frac{\left| E \left|}{\left| \Omega \left|}=\frac{\text{number of ways }E\text{ can occur}}{\text{total number of outcomes}}. & \text{(2.1)}\text{}\text{}
\end{align}
$$

Corollary 6 (Calculating probabilities for equally likely events)  
The function $ℙ:𝒫\left( \Omega \right)\rightarrow\left[ 0 , 1 \right]$ defined by equation ([2.1](#x12-19005r2.1)) is a probability measure on $\left( \Omega , 𝒫 \left( \Omega \right) \right)$.

Proof: In terms of Theorem [5](nose2.htm#x10-170015), we have $p_{i}=\frac{1}{\left| \Omega \left|}=\frac{1}{n}$ and

$$
\begin{align}
ℙ\left( E \right)=\frac{\left| E \left|}{\left| \Omega \left|}=\underset{i : \left(\omega\right)_{i} \in E}{\sum}\frac{1}{\left| \Omega \left|}=\underset{i : \left(\omega\right)_{i} \in E}{\sum}p_{i} & & & \text{}
\end{align}
$$

and so the result follows immediately. $\square$

   
Thus, the classical interpretation of probability gives us an automatic way of calculating probabilities for situations where it seems intuitively reasonable to say that a collection of outcomes is equally likely.

Example 13 Suppose that we toss a fair coin three times. What is the probability of obtaining at least two heads?

   
We may write the sample space as

$$
\begin{align}
\Omega & = & \left\{ H H H , H H T , H T H , T H H , H T T , T H T , T T H , T T T \right\} & \text{}
\end{align}
$$

where, for example, $THT$ denotes that the first toss was a tail, the second a head and the third a tail. There are thus $\left|\Omega\left|=8$ possible outcomes. As the coin is stated to be fair, we proceed under the assumption that all the outcomes are equally likely. Let $E$ be the event that we obtain at least two heads then

$$
\begin{align}
E & = & \left\{ H H H , H H T , H T H , T H H \right\} & \text{}
\end{align}
$$

so that $\left|E\left|=4$. Thus, using the classical interpretation of probability, equation ([2.1](#x12-19005r2.1)),

$$
\begin{align}
ℙ\left( E \right) & = & \frac{\left| E \left|}{\left| \Omega \left|}=\frac{4}{8}=\frac{1}{2}. & \text{}
\end{align}
$$

Example 14 Suppose that we roll two fair dice, a red one and a blue one. What is the probability that the total score of the two dice is $6$?

   
If we let $\left( r , b \right)$ denote that the score on the red dice was $r$ and that on the blue dice was $b$ then the sample space is

$$
\begin{align}
\Omega & = & \left\{ \left( 1 , 1 \right) , \left( 1 , 2 \right) , \left( 1 , 3 \right) , … ⁡ , \left( 6 , 4 \right) , \left( 6 , 5 \right) , \left( 6 , 6 \right) \right\} & \text{}
\end{align}
$$

with $\left|\Omega\left|=36$ $\left( = 6 \times 6 \right)$. As the die are fair, we assume that each outcome is equally likely. If we let $E=\left\{ \text{Total score is 6} \right\}$ then to find $ℙ\left( E \right)$ we need to find the total number of the outcomes which total 6. We tabulate the possible outcomes and add the scores.

Blue

Red

1

2

3

4

5

6

* * *

* * *

* * *

* * *

* * *

* * *

* * *

1

2

3

4

5

6

7

2

3

4

5

6

7

8

3

4

5

6

7

8

9

4

5

6

7

8

9

10

5

6

7

8

9

10

11

6

7

8

9

10

11

12

We thus obtain that

$$
\begin{align}
E & = & \left\{ \left( 1 , 5 \right) , \left( 2 , 4 \right) , \left( 3 , 3 \right) , \left( 4 , 2 \right) , \left( 5 , 1 \right) \right\} & \text{}
\end{align}
$$

so that $\left|E\left|=5$. Thus, using the classical interpretation of probability, equation ([2.1](#x12-19005r2.1)),

$$
\begin{align}
ℙ\left( E \right) & = & \frac{\left| E \left|}{\left| \Omega \left|}=\frac{5}{3 6}. & \text{}
\end{align}
$$

Example 15 From a sample of $400$ adults, $300$ cycle or swim (or both), $160$ swim, $120$ swim and cycle. What’s the probability that an adult selected at random doesn’t cycle?

   
Let $\Omega$ be the set of all the sampled adults, so that $\left|\Omega\left|=400$. Letting $S$ be set of the adults who swim and $C$ the set of the adults who cycle. Then,

$$
\begin{align}
\left|S\left|=160,\left|S\cupC\left|=300,\left|S\capC\left|=120. & & & \text{}
\end{align}
$$

We can use a Venn diagram to easily summarise the number of adults who fall into the disjoint events of $\Omega$. This is shown in Figure [2.1](#x12-190181).

![PIC](MA10211_all-10.png)

Figure 2.1:If $\left|\Omega\left|=400$ with $\left|S\left|=160$, $\left|S\cupC\left|=300$ and $\left|S\capC\left|=120$ then we can calculate the size of each disjoint subset: $\left|S\capC^{c}\left|=40$, $\left|S^{c}\capC\left|=140$ (so that $\left|C\left|=260$) and $\left|S^{c}\capC^{c}\left|=100$.

Choosing an adult at random corresponds to assuming that each adult is equally likely to be chosen. Then, using the classical interpretation of probability, equation ([2.1](#x12-19005r2.1)),

$$
\begin{align}
ℙ\left( S \right) & = & \frac{\left| S \left|}{\left| \Omega \left|}=\frac{1 6 0}{4 0 0}=\frac{2}{5} & \text{} \\ ℙ\left( S \cup C \right) & = & \frac{\left| S \cup C \left|}{\left| \Omega \left|}=\frac{3 0 0}{4 0 0}=\frac{3}{4} & \text{} \\ ℙ\left( S \cap C \right) & = & \frac{\left| S \cap C \left|}{\left| \Omega \left|}=\frac{1 2 0}{4 0 0}=\frac{3}{1 0}. & \text{}
\end{align}
$$

Now, using the inclusion-exclusion rule, see Corollary [4](nose2.htm#x10-160224), $ℙ\left( S \cup C \right)=ℙ\left( S \right)+ℙ\left( C \right)-ℙ\left( S \cap C \right)$. Rearranging,

$$
\begin{align}
ℙ\left( C \right) & = & ℙ\left( S \cup C \right)+ℙ\left( S \cap C \right)-ℙ\left( S \right) & \text{} \\ & = & \frac{3}{4}+\frac{3}{1 0}-\frac{2}{5}=\frac{1 3}{2 0}. & \text{}
\end{align}
$$

Now, using the probability of complements, see Corollary [1](nose2.htm#x10-160141),

$$
\begin{align}
ℙ\left(\left\{ \text{adult doesn’t cycle} \right\}\right)=ℙ\left( C^{c} \right)=1-ℙ\left( C \right)=\frac{7}{2 0}. & & & \text{}
\end{align}
$$

In these examples, it was relatively easy to count the number of outcomes and thus calculate probabilities. In more complex situations, we need to develop general counting techniques to find the number of outcomes. This is known as combinatorics.

[1](#fn1x2-bk)[Pierre-Simon Laplace (1749-1827)](https://en.wikipedia.org/wiki/Pierre-Simon_Laplace)

[[next](nose4.htm)] [[front](nose3.htm)] [[up](noch2.htm#nose3.htm)]

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