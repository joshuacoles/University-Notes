[[next](nose19.htm)] [[prev](nose17.htm)] [[prev-tail](nose17.htm#tailnose17.htm)] [[tail](#tailnose18.htm)] [[up](noch5.htm#nose18.htm)]

### 5.2 Variance

Expectation is a measure of location (you could think of $𝔼\left( X \right)$ as your best guess for the location of $X$ before you perform the experiment). We might also be interested in a measure of spread. One such measure is the variance which is the average value of the squared distance of $X$ from its expectation.

Definition 28 (Variance)  
If $X$ is a random variable with $𝔼\left( X^{2} \right)<\infty$ then the variance of $X$ is given by

$$
\begin{align}
Var\left( X \right) & = & 𝔼\left( \left(\left( X - 𝔼 \left( X \right) \right)\right)^{2} \right). & \text{}
\end{align}
$$

The standard deviation of $X$ is the (positive) square root of $Var\left( X \right)$.

Thus, for a discrete random variable $X$ with set of possible values $I$ and

$$
\begin{align}
\left(\mu\right)_{X}=𝔼\left( X \right)=\underset{x \in I}{\sum}xℙ\left( X = x \right) & & & \text{}
\end{align}
$$

then

$$
\begin{align}
Var\left( X \right) & = & \underset{x \in I}{\sum}\left(\left( x - \left(\mu\right)_{X} \right)\right)^{2}ℙ\left( X = x \right). & \text{}
\end{align}
$$

Note that in this calculation, $\left(\mu\right)_{X}=𝔼\left( X \right)$ is just some real number.

Corollary 13 (The variance is non-negative)  
For any random variable $X$, $Var\left( X \right)\geq 0$.

Proof: Let $Y=\left(\left( X - 𝔼 \left( X \right) \right)\right)^{2}$ then $Y\geq 0$ so, from Theorem [16](nose17.htm#x29-5000116), $Var\left( X \right)=𝔼\left( Y \right)\geq 0$. $\square$

Theorem 21 (Calculating the variance)  
If $X$ is a random variable with $𝔼\left( X^{2} \right)<\infty$[3](#fn3x5) then the variance of $X$ may be calculated as

$$
\begin{align}
Var\left( X \right) & = & 𝔼\left( X^{2} \right)-\left(\left( 𝔼 \left( X \right) \right)\right)^{2}. & \text{}
\end{align}
$$

Proof:

$$
\begin{align}
Var\left( X \right) & = & 𝔼\left( \left(\left( X - 𝔼 \left( X \right) \right)\right)^{2} \right) & \text{} \\ & = & 𝔼\left( X^{2} - 2 𝔼 \left( X \right) X + \left(\left( 𝔼 \left( X \right) \right)\right)^{2} \right) & \text{} \\ & = & 𝔼\left( X^{2} \right)-2𝔼\left( X \right)𝔼\left( X \right)+\left(\left( 𝔼 \left( X \right) \right)\right)^{2}\left( \text{by the linearity of  \exp ectation} \right) & \text{} \\ & = & 𝔼\left( X^{2} \right)-\left(\left( 𝔼 \left( X \right) \right)\right)^{2}. & \text{}
\end{align}
$$

 $\square$

   
Hence, if $X$ is discrete then we can calculate $Var\left( X \right)$ as

$$
\begin{align}
Var\left( X \right) & = & \underset{x \in I}{\sum}x^{2}ℙ\left( X = x \right)-\left(\left(\underset{x \in I}{\sum} x ℙ \left( X = x \right)\right)\right)^{2} & \text{}
\end{align}
$$

which is typically the easiest way to compute $Var\left( X \right)$.

Example 53 Suppose that $XsimGeom\left( p \right)$. Show that $Var\left( X \right)=\frac{1 - p}{p^{2}}$ .

   
We will use a similar observation to Example [49](nose17.htm#x29-4900949).

$$
\begin{align}
𝔼\left( X^{2} \right) & = & \sum_{x = 1}^{\infty}x^{2}\left(\left( 1 - p \right)\right)^{x - 1}p & \text{} \\ & = & p\left(1^{2} + 2^{2} q + 3^{2} q^{2} + \dots  \right)\left( \text{where }q=1-p\text{} \right) & \text{} \\ & = & p\left(1 + 2 q + 3 q^{2} + \dots  \right)+p\left(2 \left( 2 - 1 \right) q + 3 \left( 3 - 1 \right) q^{2} + \dots  \right) & \text{} \\ & = & 𝔼\left( X \right)+pq\left(\frac{d^{2}}{d q^{2}} 1 + \frac{d^{2}}{d q^{2}} q + \frac{d^{2}}{d q^{2}} q^{2} + \frac{d^{2}}{d q^{2}} q^{3} + \dots  \right) & \text{} \\ & = & 𝔼\left( X \right)+pq\frac{d^{2}}{d q^{2}}\left(\sum_{i = 0}^{\infty} q^{i}\right) & \text{} \\ & = & 𝔼\left( X \right)+pq\frac{d^{2}}{d q^{2}}\frac{1}{1 - q} & \text{} \\ & = & \frac{1}{p}+pq\frac{2}{\left(\left( 1 - q \right)\right)^{3}}=\frac{1}{p}+\frac{2 \left( 1 - p \right)}{p^{2}}=\frac{2 - p}{p^{2}}. & \text{}
\end{align}
$$

Thus,

$$
\begin{align}
Var\left( X \right) & = & 𝔼\left( X^{2} \right)-\left(\left( 𝔼 \left( X \right) \right)\right)^{2} & \text{} \\ & = & \frac{2 - p}{p^{2}}-\left(\left(\frac{1}{p}\right)\right)^{2}=\frac{1 - p}{p^{2}}. & \text{}
\end{align}
$$

Theorem 22 (Variance of a constant is zero)  
$Var\left( X \right)=0$ if and only if $ℙ\left( X = a \right)=1$ for some constant $a\inℝ$. Thus, $Var\left( a \right)=0$.

Proof: Suppose that $𝔼\left( X \right)=a$ for some $a\inℝ$. Then

$$
\begin{align}
Var\left( X \right) & = & \underset{x \in I}{\sum}\left(\left( x - a \right)\right)^{2}ℙ\left( X = x \right) & \text{} \\ & = & \underset{x \in I : x \neq a}{\sum}\left(\left( x - a \right)\right)^{2}ℙ\left( X = x \right) & \text{}
\end{align}
$$

as either $a\in I$ in which case $\left(\left( x - a \right)\right)^{2}=0$ when $x=a$ or $a\notinI$. Now, for $x\neq a$, $\left(\left( x - a \right)\right)^{2}>0$ so if $Var\left( X \right)=0$ we must have $ℙ\left( X = x \right)=0$ for $x\neq a$ so that $ℙ\left( X = a \right)=1$.

   
Conversely, if $ℙ\left( X = a \right)=1$ then $E\left( X^{2} \right)=a^{2}$ and $E\left( X \right)=a$ so that, from Theorem [21](#x30-5200621), $Var\left( X \right)=0$. $\square$

Theorem 23 (Variance of a linear function)  
If $X$ is a random variable with $𝔼\left( X^{2} \right)<\infty$ and $a,b\inℝ$ then

$$
\begin{align}
Var\left( a X + b \right) & = & a^{2}Var\left( X \right). & \text{}
\end{align}
$$

Proof: Note that, by the linearity of expectation, $𝔼\left( a X + b \right)=a𝔼\left( X \right)+b$ so that, from Definition [28](#x30-5200128),

$$
\begin{align}
Var\left( a X + b \right) & = & 𝔼\left( \left(\left( a X + b - 𝔼 \left( a X + b \right) \right)\right)^{2} \right) & \text{} \\ & = & 𝔼\left( \left(\left( a X + b - a 𝔼 \left( X \right) - b \right)\right)^{2} \right) & \text{} \\ & = & 𝔼\left( a^{2} \left(\left( X - 𝔼 \left( X \right) \right)\right)^{2} \right)=a^{2}Var\left( X \right). & \text{}
\end{align}
$$

 $\square$

Example 54 For $a=-1$ and $b=0$ we find that $Var\left( - X \right)=Var\left( X \right)$. Moreover, if $YsimGeom\left( 1 / 2 \right)$ then

$$
\begin{align}
Var\left( Y \right)=\frac{1 - \frac{1}{2}}{\left(\left(\frac{1}{2}\right)\right)^{2}}=2 & & & \text{}
\end{align}
$$

and $Var\left( 2 Y - 5 \right)=2^{2}Var\left( Y \right)=8$.

#### 5.2.1 Covariance

The covariance of two random variables is a measure of their joint variability or their degree of association.

Definition 29 (Covariance)  
If $X$ and $Y$ are random variables with $𝔼\left( X^{2} \right)<\infty$ and $𝔼\left( Y^{2} \right)<\infty$ then the covariance of $X$ and $Y$ is given by

$$
\begin{align}
Cov\left( X , Y \right) & = & 𝔼\left( \left( X - 𝔼 \left( X \right) \right) \left( Y - 𝔼 \left( Y \right) \right) \right). & \text{}
\end{align}
$$

If $Var\left( X \right)>0$ and $Var\left( Y \right)>0$ then the correlation of $X$ and $Y$ is

$$
\begin{align}
\left(\rho\right)_{X Y}=Corr\left( X , Y \right) & = & \frac{C o v \left( X , Y \right)}{\sqrt{V a r \left( X \right) V a r \left( Y \right)}}. & \text{}
\end{align}
$$

Notes:

1.

Notice that $Cov\left( X , Y \right)=Cov\left( Y , X \right)$ and $Cov\left( X , X \right)=Var\left( X \right)$.

2.

The correlation is the covariance divided by the product of the standard deviations.

3.

The covariance is the average value of the product of the deviation of $X$ from its expectation $𝔼\left( X \right)$ and $Y$ from its expectation $𝔼\left( Y \right)$.

(a)

If $X$ and $Y$ are positively associated (i.e. if $X$ is larger/smaller than $𝔼\left( X \right)$ then $Y$ is larger/smaller than $𝔼\left( Y \right)$) then $Cov\left( X , Y \right)$ is positive.

(b)

If $X$ and $Y$ are negatively associated (i.e. if $X$ is larger/smaller than $𝔼\left( X \right)$ then $Y$ is smaller/larger than $𝔼\left( Y \right)$) then $Cov\left( X , Y \right)$ is negative.

Theorem 24 (Calculating the covariance)  
The covariance of $X$ and $Y$ may be calculated as

$$
\begin{align}
Cov\left( X , Y \right) & = & 𝔼\left( X Y \right)-𝔼\left( X \right)𝔼\left( Y \right). & \text{}
\end{align}
$$

Proof:

$$
\begin{align}
Cov\left( X , Y \right) & = & 𝔼\left( \left( X - 𝔼 \left( X \right) \right) \left( Y - 𝔼 \left( Y \right) \right) \right) & \text{} \\ & = & 𝔼\left( X Y - 𝔼 \left( X \right) Y - 𝔼 \left( Y \right) X + 𝔼 \left( X \right) 𝔼 \left( Y \right) \right) & \text{} \\ & = & 𝔼\left( X Y \right)-𝔼\left( X \right)𝔼\left( Y \right)-𝔼\left( Y \right)𝔼\left( X \right)+𝔼\left( X \right)𝔼\left( Y \right) & \text{} \\ & = & 𝔼\left( X Y \right)-𝔼\left( X \right)𝔼\left( Y \right). & \text{}
\end{align}
$$

 $\square$

   
Hence, if $X$ and $Y$ are discrete then we can calculate $Cov\left( X , Y \right)$ as

$$
\begin{align}
Cov\left( X , Y \right) & = & \underset{x \in I_{X}}{\sum}\underset{y \in I_{Y}}{\sum}xyℙ\left( X = x , Y = y \right)-\left(\underset{x \in I_{X}}{\sum} x ℙ \left( X = x \right)\right)\left(\underset{y \in I_{Y}}{\sum} y ℙ \left( Y = y \right)\right). & \text{}
\end{align}
$$

Corollary 14 (Independent random variables have zero covariance)  
If $X$ and $Y$ are independent random variables then $Cov\left( X , Y \right)=0$.

Proof: From Theorem [12](nose17.htm#x29-5100112), if $X$ and $Y$ are independent then $𝔼\left( X Y \right)=𝔼\left( X \right)𝔼\left( Y \right)$ and so, from Theorem [24](#x30-5300924), $Cov\left( X , Y \right)=0$. $\square$

#### 5.2.2 The variance of a sum of random variables

We now explore the variance of a linear function of random variables.

Theorem 25 (Variance of a sum)  
For random variables $X$ and $Y$ , with $𝔼\left( X^{2} \right)<\infty$ and $𝔼\left( Y^{2} \right)<\infty$, and constants $a,b\inℝ$,

$$
\begin{align}
Var\left( a X + b Y \right) & = & a^{2}Var\left( X \right)+b^{2}Var\left( Y \right)+2abCov\left( X , Y \right). & \text{}
\end{align}
$$

Proof: Let $𝔼\left( X \right)=\left(\mu\right)_{X}$ and $𝔼\left( Y \right)=\left(\mu\right)_{Y}$ then $𝔼\left( a X + b Y \right)=a\left(\mu\right)_{X}+b\left(\mu\right)_{Y}$ so that

$$
\begin{align}
Var\left( a X + b Y \right) & = & 𝔼\left( \left(\left( a X + b Y - 𝔼 \left( a X + b Y \right) \right)\right)^{2} \right) & \text{} \\ & = & 𝔼\left( \left(\left( a \left( X - \left(\mu\right)_{X} \right) + b \left( Y - \left(\mu\right)_{Y} \right) \right)\right)^{2} \right) & \text{} \\ & = & 𝔼\left( a^{2} \left(\left( X - \left(\mu\right)_{X} \right)\right)^{2} + b^{2} \left(\left( Y - \left(\mu\right)_{Y} \right)\right)^{2} + 2 a b \left( X - \left(\mu\right)_{X} \right) \left( Y - \left(\mu\right)_{Y} \right) \right) & \text{} \\ & = & a^{2}𝔼\left( \left(\left( X - \left(\mu\right)_{X} \right)\right)^{2} \right)+b^{2}𝔼\left( \left(\left( Y - \left(\mu\right)_{Y} \right)\right)^{2} \right)+2ab𝔼\left( \left( X - \left(\mu\right)_{X} \right) \left( Y - \left(\mu\right)_{Y} \right) \right) & \text{} \\ & = & a^{2}Var\left( X \right)+b^{2}Var\left( Y \right)+2abCov\left( X , Y \right). & \text{}
\end{align}
$$

 $\square$

Example 55 Two important special cases are:

$$
\begin{align}
Var\left( X + Y \right) & = & Var\left( X \right)+Var\left( Y \right)+2Cov\left( X , Y \right)\text{(taking }a=b=1\text{)} & \text{} \\ Var\left( X - Y \right) & = & Var\left( X \right)+Var\left( Y \right)-2Cov\left( X , Y \right)\text{(taking }a=1\text{ and }b=-1\text{)} & \text{}
\end{align}
$$

Notice that if $X$ and $Y$ are independent then $Cov\left( X , Y \right)=0$ and so $Var\left( X + Y \right)=Var\left( X \right)+Var\left( Y \right)$ and $Var\left( X - Y \right)=Var\left( X \right)+Var\left( Y \right)$.

Corollary 15 (Variance of a sum of $n$ random variables)  
If $X_{1},…⁡,X_{n}$ are jointly distributed random variables with variances $Var\left( X_{i} \right)$, covariances $Cov\left( X_{i} , X_{j} \right)$ and $Y=\left(\sum ⁡\right)_{i = 1}^{n}b_{i}X_{i}$ for constants $b_{1},…⁡,b_{n}\inℝ$, then

$$
\begin{align}
Var\left( Y \right)=Var\left(\sum_{i = 1}^{n} b_{i} X_{i}\right)=\sum_{i = 1}^{n}b_{i}^{2}Var\left( X_{i} \right)+2\sum_{i = 1}^{n}\sum_{j > i}^{n}b_{i}b_{j}Cov\left( X_{i} , X_{j} \right). & & & \text{(5.8)}\text{}\text{}
\end{align}
$$

Proof: Follows from Theorem [25](#x30-5400125) which is the case for $n=2$ by induction. $\square$

Corollary 16 (Bienaymé’s[4](#fn4x5) formula: sum of independent random variables)  
If $X_{1},…⁡,X_{n}$ are independent then

$$
\begin{align}
Var\left(\sum_{i = 1}^{n} b_{i} X_{i}\right)=\sum_{i = 1}^{n}b_{i}^{2}Var\left( X_{i} \right). & & & \text{(5.9)}\text{}\text{}
\end{align}
$$

Proof: If $X_{1},…⁡,X_{n}$ are independent then $Cov\left( X_{i} , X_{j} \right)=0$ for all $i\neq j$ and so equation ([5.8](#x30-54007r5.8)) reduces to ([5.9](#x30-54010r5.9)). $\square$

Example 56 Suppose that $YsimB\left( n , p \right)$. Show that $Var\left( Y \right)=np\left( 1 - p \right)$.

   
In Example [52](nose17.htm#x29-5002252) we showed that if $YsimB\left( n , p \right)$ then $E\left( Y \right)=np$ by writing $Y=\left(\sum ⁡\right)_{i = 1}^{n}X_{i}$ where each $X_{i}simBern\left( p \right)$ denotes the outcome of the $i$th trial. Now, in Example [52](nose17.htm#x29-5002252) we showed that $𝔼\left( X_{i} \right)=p$ and $𝔼\left( X_{i}^{2} \right)=p$ so that

$$
\begin{align}
Var\left( X_{i} \right) & = & 𝔼\left( X_{i}^{2} \right)-\left(\left( 𝔼 \left( X_{i} \right) \right)\right)^{2} & \text{} \\ & = & p-p^{2}=p\left( 1 - p \right). & \text{}
\end{align}
$$

As the trials do not overlap then the $X_{i}$s are independent and so from Bienaymé’s formula, Corollary [16](#x30-5400816),

$$
\begin{align}
Var\left( Y \right)=Var\left(\sum_{i = 1}^{n} X_{i}\right)=\sum_{i = 1}^{n}Var\left( X_{i} \right)=np\left( 1 - p \right). & & & \text{}
\end{align}
$$

In a similar fashion to Theorem [25](#x30-5400125) we can consider the covariance of linear sums of random variables.

Theorem 26 (Covariance of linear functions)  
For random variables $W$, $X$, $Y$ , and $Z$ and constants $a,b,c,d\inℝ$,

$$
\begin{align}
Cov\left( a W + b X , c Y + d Z \right)=acCov\left( W , Y \right)+adCov\left( W , Z \right)+bcCov\left( X , Y \right)+bdCov\left( X , Z \right). & & & \text{}
\end{align}
$$

Proof: Analogous to Theorem [25](#x30-5400125). $\square$

Example 57

$$
\begin{align}
Cov\left( X + Y , X - Y \right) & = & Cov\left( X , X \right)-Cov\left( X , Y \right)+Cov\left( Y , X \right)-Cov\left( Y , Y \right) & \text{} \\ & = & Cov\left( X , X \right)-Cov\left( Y , Y \right)=Var\left( X \right)-Var\left( Y \right). & \text{}
\end{align}
$$

#### 5.2.3 A brief note on conditional expectation and variance

In our constructions of $𝔼\left( X \right)$ and $Var\left( X \right)$ for a random variable $X$ we have calculated these using the probability distribution $ℙ\left( X = x \right)$. We can also calculate conditional expectations and variances for $X$ given $Y=y$, these are denoted $𝔼\left( X \left| Y = y \right)$ and $Var\left( X \left| Y = y \right)$ and simply use the conditional distribution $ℙ\left( X = x \left| Y = y \right)$ rather than $ℙ\left( X = x \right)$. Thus,

$$
\begin{align}
𝔼\left( X \left| Y = y \right) & = & \underset{x \in I}{\sum}xℙ\left( X = x \left| Y = y \right) & \text{} \\ Var\left( X \left| Y = y \right) & = & 𝔼\left( \left(\left( X - 𝔼 \left( X \left| Y = y \right) \right)\right)^{2} \left| Y = y \right) & \text{} \\ & = & \underset{x \in I}{\sum}x^{2}ℙ\left( X = x \left| Y = y \right)-\left(\left(\underset{x \in I}{\sum} x ℙ \left( X = x \left| Y = y \right)\right)\right)^{2}. & \text{}
\end{align}
$$

Conditional expectations and variances satisfy all of the usual properties, for example for constants $a,b\inℝ$,

$$
\begin{align}
𝔼\left( a X + b Y \left| Z = z \right) & = & a𝔼\left( X \left| Z = z \right)+b𝔼\left( Y \left| Z = z \right) & \text{} \\ & = & a\left(\underset{x \in I_{X}}{\sum} x ℙ \left( X = x \left| Z = z \right)\right)+b\left(\underset{y \in I_{Y}}{\sum} y ℙ \left( Y = y \left| Z = z \right)\right). & \text{}
\end{align}
$$

[3](#fn3x5-bk)Note that if $𝔼\left( X^{2} \right)<\infty$ then $𝔼\left( \left| X \left| \right)<\infty$ so that the variance is well defined.

[4](#fn4x5-bk)[Irénée-Jules Bienaymé (1796-1878)](https://en.wikipedia.org/wiki/Ir\let \prOteCt \relax \let \prOteCt \relax \let \prOteCt \relax \Protect \csname acp:c\endcsname {3}en\let \prOteCt \relax \let \prOteCt \relax \let \prOteCt \relax \Protect \csname acp:c\endcsname {3}ee-Jules_Bienaym\let \prOteCt \relax \let \prOteCt \relax \let \prOteCt \relax \Protect \csname acp:c\endcsname {3}e).

[[next](nose19.htm)] [[prev](nose17.htm)] [[prev-tail](nose17.htm#tailnose17.htm)] [[front](nose18.htm)] [[up](noch5.htm#nose18.htm)]

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