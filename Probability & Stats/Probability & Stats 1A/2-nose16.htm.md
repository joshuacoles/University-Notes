[[prev](nose15.htm)] [[prev-tail](nose15.htm#tailnose15.htm)] [[tail](#tailnose16.htm)] [[up](noch4.htm#nose16.htm)]

### 4.4 Joint distributions

#### 4.4.1 Bivariate distributions

Suppose that $X$ and $Y$ are two discrete random variables defined on the same sample space $\Omega$. Then each $\omega\in\Omega$ yields a value $X\left( \omega \right)=x$ of $X$ and $Y\left( \omega \right)=y$ of $Y$ so that we can think of an outcome as being the vector $\left( x , y \right)$. This leads us to the idea of a joint probability distribution,

$$
\begin{align}
ℙ\left( X = x , Y = y \right) & = & ℙ\left( \left\{ \omega \in \Omega : X \left( \omega \right) = x , Y \left( \omega \right) = y \right\} \right) & \text{}
\end{align}
$$

and the corresponding joint probability mass function.

Definition 24 (Joint probability mass function)  
Suppose that $X$ and $Y$ are discrete random variables defined on the sample space $\Omega$ with set of possible values $I_{X}$ and $I_{Y}$ respectively. The joint probability mass function of $X$ and $Y$ is given by

$$
\begin{align}
f_{X , Y}\left( x , y \right) & = & ℙ\left( X = x , Y = y \right) & \text{}
\end{align}
$$

Thus, if $I_{X , Y}=\left\{ \left( x , y \right) : x \in I_{X} , y \in I_{Y} \right\}$ then $f_{X , Y}\left( x , y \right)=0$ for all $\left( x , y \right)\notinI_{X , Y}$ and

$$
\begin{align}
\underset{x \in I_{X}}{\sum}\underset{y \in I_{Y}}{\sum}ℙ\left( X = x , Y = y \right) & = & 1. & \text{}
\end{align}
$$

Notice that we can find the marginal distributions (or pmf) of each random variable by summing $f_{X , Y}\left( x , y \right)$ over each possible value of the other random variable. That is,

$$
\begin{align}
f_{X}\left( x \right)=\underset{y \in I_{Y}}{\sum}f_{X , Y}\left( x , y \right) & \Rightarrow & ℙ\left( X = x \right)=\underset{y \in I_{Y}}{\sum}ℙ\left( X = x , Y = y \right); & \text{} \\ f_{Y}\left( y \right)=\underset{x \in I_{X}}{\sum}f_{X , Y}\left( x , y \right) & \Rightarrow & ℙ\left( Y = y \right)=\underset{x \in I_{X}}{\sum}ℙ\left( X = x , Y = y \right). & \text{}
\end{align}
$$

Example 45 Suppose that the discrete random variables $X$ and $Y$ have the joint probability mass function

$$
\begin{align}
ℙ\left( X = x , Y = y \right) & = & \left\{\begin{matrix} \begin{matrix}\text{}\frac{2 x + y}{3 6}\text{} & \text{if }x\in\left\{ 0 , 1 , 2 \right\}\text{ and }y\in\left\{ 1 , 2 , 3 \right\}\text{}, \\ 0 & \text{otherwise}.\end{matrix} \end{matrix}\right. \}& \text{}
\end{align}
$$

Find the marginal distributions of $X$ and $Y$ .

   
The marginal distribution for $X$ is, for each $x\in\left\{ 0 , 1 , 2 \right\}$,

$$
\begin{align}
ℙ\left( X = x \right) & = & \sum_{y = 1}^{3}ℙ\left( X = x , Y = y \right) & \text{} \\ & = & \sum_{y = 1}^{3}\frac{2 x + y}{3 6} & \text{} \\ & = & \frac{1}{3 6}\left(6 x + \sum_{y = 1}^{3} y\right) & \text{} \\ & = & \frac{6 x + 1 + 2 + 3}{3 6}=\frac{x + 1}{6}. & \text{}
\end{align}
$$

The marginal distribution for $Y$ is, for each $y\in\left\{ 1 , 2 , 3 \right\}$,

$$
\begin{align}
ℙ\left( Y = y \right) & = & \sum_{x = 0}^{2}ℙ\left( X = x , Y = y \right) & \text{} \\ & = & \sum_{x = 0}^{2}\frac{2 x + y}{3 6} & \text{} \\ & = & \frac{1}{3 6}\sum_{x = 0}^{2}\left( 2 x + y \right) & \text{} \\ & = & \frac{0 + 2 + 4 + 3 y}{3 6}=\frac{2 + y}{1 2}. & \text{}
\end{align}
$$

Notice that as we have a bivariate problem, we can represent our values in a joint distribution table:

$$
\begin{align}
\begin{matrix}X/Y & 1 & 2 & 3 & ℙ\left( X = x \right) \\ ̲ & ̲ & ̲ & ̲ & ̲ \\ 0 & \frac{1}{3 6} & \frac{2}{3 6} & \frac{3}{3 6} & \begin{matrix} \\ \frac{6}{3 6} \\ \end{matrix} \\ 1 & \frac{3}{3 6} & \frac{4}{3 6} & \frac{5}{3 6} & \frac{1 2}{3 6} \\ 2 & \frac{5}{3 6} & \frac{6}{3 6} & \frac{7}{3 6} & \begin{matrix} \\ \frac{1 8}{3 6} \\ \end{matrix} \\ ̲ & ̲ & ̲ & ̲ & ̲ \\ ℙ\left( Y = y \right) & \begin{matrix} \\ \frac{9}{3 6} \\ \end{matrix} & \begin{matrix} \\ \frac{1 2}{3 6} \\ \end{matrix} & \begin{matrix} \\ \frac{1 5}{3 6} \\ \end{matrix} & 1\end{matrix} & & & \text{}
\end{align}
$$

#### 4.4.2 Conditional distribution

We generalise the definition of conditional probability, see Definition [11](nose7.htm#x17-2900111), to random variables.

Definition 25 (Conditional distribution)  
If $X$ and $Y$ are jointly distributed discrete random variables then the conditional distribution of $X$ given $Y=y$ where $ℙ\left( Y = y \right)>0$ is given by

$$
\begin{align}
ℙ\left( X = x \left| Y = y \right) & = & \frac{ℙ \left( X = x , Y = y \right)}{ℙ \left( Y = y \right)}. & \text{(4.13)}\text{}\text{}
\end{align}
$$

Notice that conditional distributions are just probability distributions and so satisfy all the usual properties of probability distributions. For example,

$$
\begin{align}
\underset{x \in I_{X}}{\sum}ℙ\left( X = x \left| Y = y \right) & = & 1. & \text{}
\end{align}
$$

We can extend results such as the law of total probability, see Theorem [10](nose9.htm#x19-3100710) to conditional distributions.

$$
\begin{align}
ℙ\left( X = x \right) & = & \underset{y \in I_{Y}}{\sum}ℙ\left( X = x , Y = y \right) & \text{(4.14)}\text{}\text{} \\ & = & \underset{y \in I_{Y}}{\sum}ℙ\left( X = x \left| Y = y \right)ℙ\left( Y = y \right) & \text{(4.15)}\text{}\text{}
\end{align}
$$

where equation ([4.15](#x27-45004r4.15)) follows from ([4.14](#x27-45004r4.14)) using ([4.13](#x27-45002r4.13)).

Example 46 We return to Example [45](#x27-4400645) and find various conditional distributions. For example, if $Y=1$ then

$$
\begin{align}
ℙ\left( X = x \left| Y = 1 \right) & = & \frac{ℙ \left( X = x , Y = 1 \right)}{ℙ \left( Y = 1 \right)} & \text{} \\ & = & \frac{\frac{2 x + 1}{3 6}}{\frac{3}{1 2}}=\frac{2 x + 1}{9} & \text{}
\end{align}
$$

for $x\in\left\{ 0 , 1 , 2 \right\}$ and $0$ otherwise. If $X=2$ then

$$
\begin{align}
ℙ\left( Y = y \left| X = 2 \right) & = & \frac{ℙ \left( X = 2 , Y = y \right)}{ℙ \left( X = 2 \right)} & \text{} \\ & = & \frac{\frac{4 + y}{3 6}}{\frac{3}{6}}=\frac{4 + y}{1 8} & \text{}
\end{align}
$$

for $y\in\left\{ 1 , 2 , 3 \right\}$ and $0$ otherwise.

#### 4.4.3 Independence of random variables

We can also extend the definition of independence, see Definition [13](nose11.htm#x21-3300113), to random variables.

Definition 26 (Independent random variables)  
Suppose that $X$ and $Y$ are discrete random variables with pmfs $f_{X}\left( x \right)$ and $f_{Y}\left( y \right)$ respectively. $X$ and $Y$ are independent random variables if, for every $x\inℝ$ and $y\inℝ$, the joint pmf $f_{X , Y}\left( x , y \right)$ may be written as

$$
\begin{align}
f_{X , Y}\left( x , y \right) & = & f_{X}\left( x \right)f_{Y}\left( y \right). & \text{}
\end{align}
$$

That is, $ℙ\left( X = x , Y = y \right)=ℙ\left( X = x \right)ℙ\left( Y = y \right)$ for all $x$ and $y$.

Note that if $I_{X , Y}=\left\{ \left( x , y \right) : x \in I_{X} , y \in I_{Y} \right\}$ then $f_{X , Y}\left( x , y \right)=0$ for all $\left( x , y \right)\notinI_{X , Y}$ and when this occurs at least one of $ℙ\left( X = x \right)$ and $ℙ\left( Y = y \right)$ are zero (as at least one of $x$, $y$ are not possible) so that we may restrict attention to the set of possible values of $X$ and $Y$ .

Example 47 Let $X$, $Y$ be discrete random variables each taking values in $\left\{ 1 , 2 , 3 , … ⁡ \right\}$ with joint distribution

$$
\begin{align}
ℙ\left( X = x , Y = y \right) & = & \frac{3^{x}}{4^{x + y}}. & \text{}
\end{align}
$$

Show that $X$ and $Y$ are independent.

   
Notice that

$$
\begin{align}
ℙ\left( X = x \right) & = & \sum_{y = 1}^{\infty}\frac{3^{x}}{4^{x + y}} & \text{} \\ & = & \left(\left(\frac{3}{4}\right)\right)^{x}\sum_{y = 1}^{\infty}\left(\left(\frac{1}{4}\right)\right)^{y} & \text{} \\ & = & \left\{\left(\left(\frac{3}{4}\right)\right)^{x - 1} \left(\frac{1}{4}\right)\right\}\left\{\sum_{y = 1}^{\infty} \left(\left(\frac{1}{4}\right)\right)^{y - 1} \left(\frac{3}{4}\right)\right\} & \text{(4.16)}\text{}\text{} \\ & = & \left(\left(\frac{3}{4}\right)\right)^{x - 1}\frac{1}{4} & \text{}
\end{align}
$$

as the summation in equation ([4.16](#x27-46005r4.16)) is of the probabilities of a $Geom\left( 3 / 4 \right)$ distribution. Thus, $XsimGeom\left( 1 / 4 \right)$. Similarly,

$$
\begin{align}
ℙ\left( Y = y \right) & = & \left(\left(\frac{1}{4}\right)\right)^{y - 1}\frac{3}{4} & \text{}
\end{align}
$$

so that $YsimGeom\left( 3 / 4 \right)$. Thus, for all $x,y\in\left\{ 1 , 2 , 3 , … ⁡ \right\}$,

$$
\begin{align}
ℙ\left( X = x , Y = y \right)=\frac{3^{x}}{4^{x + y}}=\left\{\left(\left(\frac{3}{4}\right)\right)^{x - 1} \frac{1}{4}\right\}\left\{\left(\left(\frac{1}{4}\right)\right)^{y - 1} \frac{3}{4}\right\}=ℙ\left( X = x \right)ℙ\left( Y = y \right) & & & \text{}
\end{align}
$$

so that $X$ and $Y$ are independent.

#### 4.4.4 Multivariate distributions

We can extend the results we have developed for two discrete random variables $X$ and $Y$ to $n$ discrete random variables $X_{1},…⁡,X_{n}$ defined on the same sample space. In general, the joint distribution of more than two random variables is called a multivariate distribution. In this case, each $\omega\in\Omega$ gives rise to an $n$-vector $\left( x_{1} , … ⁡ , x_{n} \right)$ and joint probability distribution

$$
\begin{align}
ℙ\left( X_{1} = x_{1} , … ⁡ , X_{n} = x_{n} \right) & = & ℙ\left( \omega \in \Omega : X_{1} \left( \omega \right) = x_{1} , … ⁡ , X_{n} \left( \omega \right) = x_{n} \right). & \text{}
\end{align}
$$

Marginal distributions of subcollections of the $X_{i}$s can then be obtained by summing over the remaining variables. For example,

$$
\begin{align}
ℙ\left( X_{1} = x_{1} , X_{2} = x_{2} \right) & = & \underset{x_{3} \in I_{X_{3}}}{\sum}\dots \underset{x_{n} \in I_{X_{n}}}{\sum}ℙ\left( X_{1} = x_{1} , \dots  , X_{n} = x_{n} \right). & \text{}
\end{align}
$$

We can then extend the idea of independence, as given by Definition [26](#x27-4600126): the discrete random variables $X_{1},…⁡,X_{n}$ are independent if for all possible $\left( x_{1} , … ⁡ , x_{n} \right)$,

$$
\begin{align}
ℙ\left( X_{1} = x_{1} , … ⁡ , X_{n} = x_{n} \right) & = & \prod_{i = 1}^{n}ℙ\left( X_{i} = x_{i} \right). & \text{}
\end{align}
$$

It is then immediate, using marginalisation, that this result holds for any subcollection of the $X_{i}$s.

[[prev](nose15.htm)] [[prev-tail](nose15.htm#tailnose15.htm)] [[front](nose16.htm)] [[up](noch4.htm#nose16.htm)]

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