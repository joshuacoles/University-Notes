\



### 4.2 Distributions derived from Bernoulli trials

#### 4.2.1 Bernoulli trial

An experiment, or trial, of a particularly simply type is one in which
there are only two possible outcomes, such as head or tail, success or
failure, defective or not defective, and so on. It is convenient to
designate the two possible outcomes as 1 (usually the success) and 0
(the failure). Such a trial is called a Bernoulli[4](#fn4x4) trial.

Definition 19 (Bernoulli distribution)
A random variable $X$ is said to have the Bernoulli distribution with
parameter $p$, written $XsimBern\left( p right)$, if its pmf is given
by

$$
\begin{align}
ℙ\left( X = x \right) & = & \left\{\begin{matrix} \begin{matrix}p^{x}\left(\left( 1 - p \right)\right)^{1 - x} & \text{for }x\in\left\{ 0 , 1 \right\}\text{}, \\ 0 & \text{otherwise.}\end{matrix} \end{matrix}\right. \}& text{}
\end{align}
$$

Thus, $ℙ\left( X = 1 \right)=p$ and $ℙ\left( X = 0 right)=1-p$. The
statement $XsimBern\left( p right)$ should be read as "the random
variable $X$ is distributed like a Bernoulli distribution with parameter
$p$" so that " $sim$" corresponds to "is distributed according to".
Notice that if $Y=1-X$ then

$$
\begin{align}
ℙ\left( Y = 1 \right) & = & ℙ\left( 1 - X = 1 \right) & \text{} \\ & = & ℙ\left( X = 0 \right)=1-p & text{}
\end{align}
$$

which explicitly demonstrates that $YsimBern\left( 1 - p right)$.

#### 4.2.2 Binomial distribution

The Binomial distribution is used to model the number of successes, $X$,
in $n$ independent Bernoulli trials each with probability $p$ of a
success.

Definition 20 (Binomial distribution)
A random variable $X$ is said to have the Binomial distribution with
parameters $n$ and $p$, written $XsimB\left( n , p right)$, if its pmf
is given by

$$
\begin{align}
ℙ\left( X = x \right) & = & \left\{\begin{matrix} \begin{matrix}\text{}\left(\frac{n}{x}\right)\text{}p^{x}\left(\left( 1 - p \right)\right)^{n - x} & \text{for }x\in\left\{ 0 , 1 , … ⁡ , n \right\}\text{}, \\ 0 & \text{otherwise.}\end{matrix} \end{matrix}\right. \}& text{}
\end{align}
$$

Thus, $XsimB\left( n , p right)$ is read as "the random variable $X$ is
distributed like a Binomial distribution with parameters $n$ and $p$"

Example 38 Three components are made with each component having
independent probability of $1/4$ of being perfect. What is the
probability that at least two of the components are perfect?

Let
$X=\left\{ \text{Number of perfect components out of three} \right}$ so
that we have $n=3$ independent trials, each trial being a success
("perfect") or a failure with probability $p=1/4$ of success. We thus
model $XsimB\left( 3 , 1 / 4 right)$. Hence,

$$
\begin{align}
ℙ\left( X \geq 2 \right) & = & ℙ\left( \left\{ X = 2 \right\} \cup \left\{ X = 3 \right\} \right) & \text{} \\ & = & ℙ\left( X = 2 \right)+ℙ\left( X = 3 \right)\left( \text{as disjoint events} \right) & \text{} \\ & = & \begin{pmatrix} \begin{matrix}3 \\ 2\end{matrix} \end{pmatrix}\left(\left(\frac{1}{4}\right)\right)^{2}\left(\left(\frac{3}{4}\right)\right)^{1}+\begin{pmatrix} \begin{matrix}3 \\ 3\end{matrix} \end{pmatrix}\left(\left(\frac{1}{4}\right)\right)^{3}\left(\left(\frac{3}{4}\right)\right)^{0}\left( \text{as }XsimB\left( 3 , 1 / 4 \right)\text{} \right) & \text{} \\ & = & 3\left(\left(\frac{1}{4}\right)\right)^{2}\left(\left(\frac{3}{4}\right)\right)^{1}+\left(\left(\frac{1}{4}\right)\right)^{3} & \text{} \\ & = & \frac{5}{3 2}. & text{}
\end{align}
$$

Notes:

1.  

From the binomial expansion,

$$
\begin{align}
\left(\left( a + b \right)\right)^{n} & = & \sum_{x = 0}^{n}\left(\frac{n}{x}\right)a^{x}b^{n - x} & text{}
\end{align}
$$

taking $a=p$ and $b=1-p$ gives

$$
\begin{align}
\sum_{x = 0}^{n}ℙ\left( X = x \right)=\sum_{x = 0}^{n}\left(\frac{n}{x}\right)p^{x}\left(\left( 1 - p \right)\right)^{n - x}=\left(\left( p + \left( 1 - p \right) \right)\right)^{n}=1. & & & text{}
\end{align}
$$

2.  

If $n=1$ we have a single Bernoulli trial and so
$XsimB\left( 1 , p \right)$ is equivalent to $XsimBern\left( p right)$.

3.  

If $Y_{1},…⁡,Y_{n}$ are independent random variables with each
$Y_{i}simB\left( 1 , p right)$ then

$$
\begin{align}
 & X=\sum_{i = 1}^{n}Y_{i}simB\left( n , p \right). & & text{}
\end{align}
$$

For $\left\{ X = x \right}$ then $x$ of our trials must have been a
success and $n-x$ a failure: there are $\left(\frac{n}{x}right)$ ways
of choosing $x$ items from $n$ where order doesn't matter and each
sequence of $n$ $Y_{i}$s that has $x$ of them being a success has
probability $p^{x}\left(\left( 1 - p \right)right)^{n - x}$ of
occurring.

4.  

If $XsimB\left( n , p right)$ and $Y=n-X$ then
$YsimB\left( n , 1 - p right)$: $X$ is the number of successes in $n$
trials and $Y$ is the number of failures in $n$ trials with $X+Y=n$.

#### 4.2.3 Geometric distribution

The Geometric distribution is used to model the number of independent
Bernoulli trials up to (and including) the first success.

Definition 21 (Geometric distribution)
A random variable $X$ is said to have a Geometric distribution with
parameter $p\in\left( 0 , 1 right)$, written
$XsimGeom\left( p right)$, if its pmf is given by

$$
\begin{align}
ℙ\left( X = x \right) & = & \left\{\begin{matrix} \begin{matrix}\left(\left( 1 - p \right)\right)^{x - 1}p & \text{for }x\in\left\{ 1 , 2 , 3 , … ⁡ \right\}\text{}, \\ 0 & \text{otherwise.}\end{matrix} \end{matrix}\right. \}& text{}
\end{align}
$$

Notes:

1.  

For $\left\{ X = x \right}$, the first $x-1$ trials must have been
failures (each with independent probability $1-p$) and the $x$th trial a
success (with probability $p$).

2.  

There are a number of alternative formulations of the Geometric
distribution. For example we might let $Y$ be the number of independent
Bernoulli trials before the first success. Then

$$
\begin{align}
ℙ\left( Y = y \right) & = & \left(\left( 1 - p \right)\right)^{y}p & text{}
\end{align}
$$

for each $y\in\left\{ 0 , 1 , 2 , … ⁡ \right}$. Observe that if
$XsimGeom\left( p right)$ then $Y=X-1$.

Notice that if $XsimGeom\left( p right)$ then the set of possible
values are countably infinite. We shall verify that
$\left(\sum ⁡\right)_{x = 1}^{\infty}ℙ\left( X = x right)=1$ and for
this we'll require the geometric series theorem.

Theorem 14 (Geometric series theorem)
If $\left|rleft|<1$ then

$$
\begin{align}
\sum_{i = 0}^{\infty}r^{i}=1+r+r^{2}+r^{3}+\dots =\frac{1}{1 - r}. & & & text{}
\end{align}
$$

Proof: Let

$$
\begin{align}
S_{n}=\sum_{i = 0}^{n}r^{i}=1+r+r^{2}+\dots +r^{n}. & & & \text{(4.2)}\text{}text{}
\end{align}
$$

Multiplying equation ([4.2](#x25-40008r4.2)) by $r$ gives

$$
\begin{align}
rS_{n}=\sum_{i = 0}^{n}r^{i + 1}=r+r^{2}+r^{3}+\dots +r^{n + 1}. & & & \text{(4.3)}\text{}text{}
\end{align}
$$

Subtracting equation ([4.3](#x25-40009r4.3)) from
([4.2](#x25-40008r4.2)) gives

$$
\begin{align}
\left( 1 - r \right)S_{n} & = & 1-r^{n + 1} & text{}
\end{align}
$$

so that

$$
\begin{align}
S_{n} & = & \left\{\begin{matrix} \begin{matrix}\frac{1 - r^{n + 1}}{1 - r} & r\neq 1, \\ n+1 & r=1.\end{matrix} \end{matrix}\right. \}& \text{(4.4)}\text{}text{}
\end{align}
$$

If $\left|r\left|<1$ then $r^{n + 1}rightarrow 0$ as
$n\rightarrow\infty$ so that $S_{n}\rightarrowfrac{1}{1 - r}$.
$square$

Example 39 Suppose that $XsimGeom\left( p right)$ then

$$
\begin{align}
\sum_{x = 1}^{\infty}ℙ\left( X = x \right) & = & \sum_{x = 1}^{\infty}\left(\left( 1 - p \right)\right)^{x - 1}p\left( \text{from Definition }\text{21}\text{} \right) & \text{} \\ & = & p\sum_{x = 1}^{\infty}\left(\left( 1 - p \right)\right)^{x - 1}\left( \text{let }i=x-1\text{} \right) & \text{} \\ & = & p\sum_{i = 0}^{\infty}\left(\left( 1 - p \right)\right)^{i}\left( \text{take }r=1-p<1\text{ in Theorem }\text{14}\text{} \right) & \text{} \\ & = & p\left(\frac{1}{1 - \left( 1 - p \right)}\right)=1. & text{}
\end{align}
$$

Thus, the sum of probabilities is $1$ (as expected). Notice that this
result also says that the probability we eventually get a success is
$1$, since

$$
\begin{align}
ℙ\left( X < \infty \right)=ℙ\left(\cup_{x = 1}^{\infty} \left\{ X = x \right\}\right)=\sum_{x = 1}^{\infty}ℙ\left( X = x \right)=1. & & & text{}
\end{align}
$$

Example 40 If $XsimGeom\left( 1 / 4 right)$, find
$ℙ\left( X > 2 right)$.

As $XsimGeom\left( 1 / 4 right)$ then, from Definition
[21](#x25-4000121), we have

$$
\begin{align}
ℙ\left( X = x \right) & = & \left(\left(\frac{3}{4}\right)\right)^{x - 1}\left(\frac{1}{4}\right) & \text{(4.5)}\text{}text{}
\end{align}
$$

for each $x\in\left\{ 1 , 2 , 3 , … ⁡ \right}$. Noting that, by the
probability of complements $ℙ\left( E \right)=1-ℙ\left( E^{c} right)$,
if we take $E=\left\{ X > 2 \right}$ then
$E^{c}=\left\{ X \leq 2 \right}$ giving

$$
\begin{align}
ℙ\left( X > 2 \right) & = & 1-ℙ\left( X \leq 2 \right) & \text{} \\ & = & 1-ℙ\left( \left\{ X = 1 \right\} \cup \left\{ X = 2 \right\} \right)\left( \text{as }\left\{ X \leq 2 \right\}=\left\{ X = 1 \right\}\cup\left\{ X = 2 \right\}\text{} \right) & \text{} \\ & = & 1-\left[ ℙ \left( X = 1 \right) + ℙ \left( X = 2 \right) \right]\left( \text{as }\left\{ X = 1 \right\}\text{ and }\left\{ X = 2 \right\}\text{ are disjoint} \right) & \text{} \\ & = & 1-\left[\left(\frac{1}{4}\right) + \left(\frac{3}{4}\right) \left(\frac{1}{4}\right)\right]\left( \text{using equation (}\text{4.5}\text{) for }x=1,2\text{} \right) & \text{} \\ & = & \frac{9}{1 6}=\left(\left(\frac{3}{4}\right)\right)^{2}. & text{}
\end{align}
$$

Example 41 We can generalise Example [40](#x25-4001540). Let $n$ be a
positive integer and suppose that $XsimGeom\left( p right)$. Find
$ℙ\left( X \leq n \right)$ and $ℙ\left( X > n right)$.

Notice that
$\left\{ X \leq n \right\}=\left(\cup ⁡\right)_{x = 1}^{n}\left\{ X = x \right}$
which is the union of disjoint events so that

$$
\begin{align}
ℙ\left( X \leq n \right) & = & \sum_{x = 1}^{n}ℙ\left( X = x \right) & \text{} \\ & = & \sum_{x = 1}^{n}\left(\left( 1 - p \right)\right)^{x - 1}p\left( \text{as }XsimGeom\left( p \right)\text{} \right) & \text{} \\ & = & p\sum_{x = 1}^{n}\left(\left( 1 - p \right)\right)^{x - 1}\left( \text{set }i=x-1\text{} \right) & \text{} \\ & = & p\sum_{i = 0}^{n - 1}\left(\left( 1 - p \right)\right)^{i}. & \text{(4.6)}\text{}text{}
\end{align}
$$

The summation in equation ([4.6](#x25-40019r4.6)) is of the form
$S_{n - 1}=\left(\sum ⁡right)_{i = 0}^{n - 1}r^{i}$ where $r=1-p$.
Thus, using ([4.4](#x25-40011r4.4)),

$$
\begin{align}
ℙ\left( X \leq n \right) & = & p\left(\frac{1 - \left(\left( 1 - p \right)\right)^{n}}{1 - \left( 1 - p \right)}\right)=1-\left(\left( 1 - p \right)\right)^{n}. & \text{(4.7)}\text{}text{}
\end{align}
$$

As $\left\{ X > n \right\}=\left(\left\{ X \leq n \right\}right)^{c}$
then, from ([4.7](#x25-40020r4.7)),

$$
\begin{align}
ℙ\left( X > n \right) & = & \left(\left( 1 - p \right)\right)^{n}. & text{}
\end{align}
$$

Notice that this is not a surprise: the event $\left\{ X > n \right}$
is equivalent to the event that we obtain no successes in our $n$
trials.

Example 42 Billy Forgetful independently remembers to attend each
MA10211 lecture with probability $p=0.3$. Let $X$ be the number of
lectures up to and including his first attendance. Then
$XsimGeom\left( 0 . 3 right)$ and

$$
\begin{align}
ℙ\left( X > 5 \right) & = & \left(\left( 1 - 0 . 3 \right)\right)^{5}=0.16807\left( \text{5dp} \right), & \text{} \\ ℙ\left( X \leq 3 3 \right) & = & 1-\left(\left( 1 - 0 . 3 \right)\right)^{3 3}=1-\left(\left( 0 . 7 \right)\right)^{3 3}=0.99999\left( \text{5dp} \right). & text{}
\end{align}
$$

#### 4.2.4 Negative Binomial distribution

A generalisation of the Geometric distribution is the Negative Binomial
distribution where we count the number of trials up to and including the
$r$th success (so that $r=1$ gives the Geometric).

Definition 22 (Negative Binomial distribution)
A random variable $X$ is said to have a Negative Binomial distribution
with parameters $r$ and $p\in\left( 0 , 1 right)$, written
$XsimNB\left( r , p right)$, if its pmf is given by

$$
\begin{align}
ℙ\left( X = x \right) & = & \left\{\begin{matrix} \begin{matrix}\text{}\left(\frac{x - 1}{r - 1}\right)\text{}p^{r}\left(\left( 1 - p \right)\right)^{x - r} & \text{for }x\in\left\{ r , r + 1 , r + 2 , … ⁡ \right\}\text{}, \\ 0 & \text{otherwise.}\end{matrix} \end{matrix}\right. \}& text{}
\end{align}
$$

Notes:

1.  

For $\left\{ X = x \right}$, the first $x-1$ trials must have contained
$r-1$ successes and $x-r$ failures. The $x$th trial must be a success.

2.  

Let $Y_{i}$ denote the number of trials between the
$\left( i - 1 right)$th success up to and including the $i$th success.
Then $Y_{i}simGeom\left( p right)$ and $Y_{1},Y_{2},…⁡$ are
independent. If $X=\left(\sum ⁡right)_{i = 1}^{r}Y_{i}$ then
$XsimNB\left( r , p right)$.

For example, the sequence FS$\parallel$FFS$\parallel$FFFFS$parallel$S
corresponds to $Y_{1}=2$, $Y_{2}=3$, $Y_{3}=5$ and $Y_{4}=1$ so that
$X=11$ with $r=4$.

3.  

An alternate formulation of the Negative-Binomial is to let $Y$ be the
number of failures before the $r$th success. Then $Y=X-r$ and, for
$y\in\left\{ 0 , 1 , … ⁡ \right}$,

$$
\begin{align}
ℙ\left( Y = y \right) & = & ℙ\left( X - r = y \right) & \text{} \\ & = & ℙ\left( X = r + y \right) & \text{} \\ & = & \left(\frac{r + y - 1}{r - 1}\right)p^{r}\left(\left( 1 - p \right)\right)^{y}. & text{}
\end{align}
$$

Notice that this makes sense: if $\left\{ Y = y \right}$ then we have
had a total of $r+y$ trials. On the first $r+y-1$ trials we have had
$r-1$ successes and $y$ failures and the $\left( r + y right)$th trial
is a success.

Example 43 We revisit Example [42](#x25-4002242). If we let $Y$ be the
number of lectures up to and including the fifth lecture that Billy
attends then $YsimNB\left( 5 , 0 . 3 right)$ and, for example,

$$
\begin{align}
ℙ\left( Y = 3 3 \right) & = & \left(\frac{3 3 - 1}{5 - 1}\right)\left(\left( 0 . 3 \right)\right)^{5}\left(\left( 0 . 7 \right)\right)^{3 3 - 5}=0.0040\left( \text{4dp} \right). & text{}
\end{align}
$$

[4](#fn4x4-bk)[Jacob Bernoulli
(1654-1705)](https://en.wikipedia.org/wiki/Jacob_Bernoulli).

\


