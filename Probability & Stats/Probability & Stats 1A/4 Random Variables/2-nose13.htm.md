\


### 4.1 Real-valued random variables

Suppose that we consider tossing a coin $n$ times. The sample space has
$2^{n}$ elements. Let $X$ be the number of heads obtained in the $n$
tosses which has $\left\{ 0 , 1 , … ⁡ , n \right}$ as its sample space.
It may be that the only quantities of interest are derived from $X$.

e.g. The event
$\left\{ \text{}x\text{ heads in }n\text{ tosses} \right}$ is
equivalent to the event $\left\{ X = x \right}$

$X$ is a mapping from the original sample space to a new sample space in
$ℝ$. It is an example of a random variable.

Definition 15 (Random variable)
A (real-valued) random variable $X$ is a function that assigns a
real-valued number to each possible outcome of an experiment, that is it
is a mapping

$$
\begin{align}
X:\Omega\rightarrowℝ. & & & text{}
\end{align}
$$

Definition 16 (Discrete random variable)
A random variable $X$ is discrete[1](#fn1x4) if it only has a finite or
countably infinite number of possible values.

Notational note: we'll typically denote random variables using capital
letters near to the end of the alphabet such as $X$, $Y$ , and $Z$
(random variables are, prior to the experiment, unknown). We'll use
lower case letters for the numerical outcomes such as $x$, $y$ and $z$
(these are known real numbers) and consider events such as
$\left\{ X = x \right}$.

If $X$ is a discrete random variable then we might regard
$X:\Omega\rightarrow Isubsetℝ$ where either:

(a) 

$I$ is finite, so $I=\left\{ x_{1} , x_{2} , … ⁡ , x_{n} \right}$ for
suitable $x_{i}\inℝ$ (e.g. $\left\{ 1 , 2 , … ⁡ , n \right}$).

(b) 

$I$ is countably infinite so $I=\left\{ x_{1} , x_{2} , … ⁡ \right}$
for suitable $x_{i}\inℝ$ (e.g. $I=ℤ^{+}=\left\{ 1 , 2 , … ⁡ \right}$).

Notational note: we'll typically use $I$ to denote the set of possible
values of $X$, irrespective of whether $I$ is finite or infinite. If we
want to make the random variable explicit to which the set refers then
we'll use $I_{X}$.

Suppose that we have a probability space $\left( \Omega , ℱ , ℙ right)$
then for a random variable $X$ we have related sets of interest such as

$$
\begin{align}
\left\{ X = x \right\} & := & \left\{ \omega \in \Omega : X \left( \omega \right) = x \right\}, & \text{} \\ \left\{ X \leq x \right\} & := & \left\{ \omega \in \Omega : X \left( \omega \right) \leq x \right\}, & text{}
\end{align}
$$

which are events in $Omega$ (as they're subsets of the sample points).
Thus, since they are in the event space $ℱ$, we have an induced
probability measure $ℙ_{X}$:

$$
\begin{align}
ℙ_{X}\left( \left\{ X = x \right\} \right) & := & ℙ\left( \left\{ \omega \in \Omega : X \left( \omega \right) = x \right\} \right), & \text{} \\ ℙ_{X}\left( \left\{ X \leq x \right\} \right) & := & ℙ\left( \left\{ \omega \in \Omega : X \left( \omega \right) \leq x \right\} \right). & text{}
\end{align}
$$

We can formalise this approach to consider subsets $A$ of $ℝ$.

Definition 17 (Distribution of a random variable)
The distribution of a random variable $X$ is the probability measure
$ℙ_{X}:ℱ^{′}\rightarrow\left[ 0 , 1 right]$ defined by

$$
\begin{align}
ℙ_{X}\left( A \right) & = & ℙ\left( \left\{ X \in A \right\} \right) & \text{(4.1)}\text{}text{}
\end{align}
$$

where $ℱ^{′}$ is the event space consisting of all subsets $A$ of the
real line such that

$$
\begin{align}
\left\{ X \in A \right\} & := & \left\{ \omega \in \Omega : X \left( \omega \right) \in A \right\}\inℱ. & text{}
\end{align}
$$

It is possible to check Kolmogorov's axioms, see Definition
[9](nose2.htm#x10-150029), for $ℙ_{X}$ as well as the axioms of an event
space, see Definition [7](nose2.htm#x10-140017), for $ℱ^{′}$. We
typically assume that at least the events $\left\{ X \leq a \right}$,
$ainℝ$, are in the event space.[2](#fn2x4)

Example 37 Consider tossing a fair coin three times. The sample space is

$$
\begin{align}
\Omega & = & \left\{ \text{HHH} , \text{HHT} , \text{HTH} , \text{THH} , \text{HTT} , \text{THT} , \text{TTH} , \text{TTT} \right\}. & text{}
\end{align}
$$

Let $X$ denote the number of heads obtained in the three tosses. Then
for each $\omega\in\Omega$ we can find $X\left( \omega right)$.

$$
\begin{align}
\begin{matrix}\omega & \text{HHH} & \text{HHT} & \text{HTH} & \text{THH} & \text{HTT} & \text{THT} & \text{TTH} & \text{TTT} \\ ̲ & ̲ & ̲ & ̲ & ̲ & ̲ & ̲ & ̲ & ̲ \\ X\left( \omega \right) & 3 & 2 & 2 & 2 & 1 & 1 & 1 & 0\end{matrix} & & & text{}
\end{align}
$$

Thus, $X$ is discrete, and we can find the probability measure $ℙ_{X}$
induced by $\left( \Omega , ℱ , ℙ right)$.

1.  

Suppose that $A=\left[ 2 , \infty right)$ then
$\left\{ X \in \left[ 2 , \infty \right) \right\}=\left\{ \text{HHH} , \text{HHT} , \text{HTH} , \text{THH} \right}$
so that $ℙ_{X}\left( \left[ 2 , \infty \right) right)=4/8=1/2$. This is
most simply written as $ℙ_{X}\left( \left\{ X \geq 2 \right\} right)$.

2.  

Suppose that $A=x$ for each $x\in\left\{ 0 , 1 , 2 , 3 \right}$ then

$$
\begin{align}
\begin{matrix}x & 0 & 1 & 2 & 3 \\ ̲ & ̲ & ̲ & ̲ & ̲ \\ ℙ_{X}\left( \left\{ X = x \right\} \right) & \frac{1}{8} & \frac{3}{8} & \frac{3}{8} & \frac{1}{8}\end{matrix} & & & text{}
\end{align}
$$

Notice that we can use the $ℙ_{X}\left( \left\{ X = x \right\} right)$s
to obtain the probability that $X$ lies in any real interval.

We can define many random variables on $Omega$. For example, we could
let $Y$ denote the number of tails obtained in the three tosses (so
$Y=3-X$) or $Z$ denote the number of heads achieved on the second and
third tosses.

Notational note: in equation ([4.1](#x24-36008r4.1)), it's customary to
drop the braces so we'll write $ℙ\left( X \in A right)$ for the
probability of the event $\left\{ X \in A \right}$. We will also prefer
to use $ℙ\left( X \in A \right)$ rather than $ℙ_{X}\left( A right)$.
Thus, for example, we'll use $ℙ\left( X = x right)$ for the probability
that $X$ takes the value $x$.

Rather than deducing the probability distribution of $X$ from the
original probability space $\left( \Omega , ℱ , ℙ right)$, we'll
typically assume that the probabilities are specified directly. From
Theorem [5](nose2.htm#x10-170015) it is sufficient to specify, for each
$x\in I$, $ℙ\left\{ X = x \right\}geq 0$ where
$\left(\sum ⁡\right)_{x \in I}ℙ\left\{ X = x \right}=1$. We this in
mind we make the following definition.

Definition 18 (Probability mass function)
The probability mass function (pmf) of a discrete random variable $X$,
$f_{X}:ℝ\rightarrow\left[ 0 , 1 right]$[3](#fn3x4), is given by

$$
\begin{align}
f_{X}\left( x \right) & = & ℙ\left( X = x \right). & text{}
\end{align}
$$

Thus, if $I$ is the set of possible values of $X$ then
$f_{X}\left( x \right)=0$ for all $xnotinI$ and
$\left(\sum ⁡\right)_{x \in I}ℙ\left( X = x right)=1$.

In this chapter we will define various probability distributions through
their probability mass functions.

[1](#fn1x4-bk)Next semester in MA10212: Probability & Statistics 1B you
will study continuous random variables.

[2](#fn2x4-bk)This is related to the idea of a cumulative distribution
function which you'll meet next semester.

[3](#fn3x4-bk)Note that some authors use $p_{X}\left( x right)$ and/or
drop the $X$ subscript. Next semester you'll see the continuous version
of the pmf: the probability density function (pdf).

\

