\



### 6.3 Uniqueness property of pgfs

We now show that the pgf determines the distribution of $X$.

Theorem 29 (Extracting probabilities from the pgf)
The pgf, $G_{X}$, of a random variable $X$ uniquely determines the
distribution of $X$ by

$$
\begin{align}
ℙ\left( X = k \right) & = & \frac{G_{X}^{\left( k \right)} \left( 0 \right)}{k !} & text{}
\end{align}
$$

for $k=0,1,2,…⁡$ where
$G_{X}^{\left( 0 \right)}\left( s \right)=G_{X}\left( s right)$ and
$G_{X}^{\left( k \right)}\left( s \right)=\frac{d^{k}}{d s^{k}}G_{X}\left( s right)$.

Proof: Noting that

$$
\begin{align}
G_{X}\left( s \right)=\sum_{x = 0}^{\infty}s^{x}ℙ\left( X = x \right)=ℙ\left( X = 0 \right)+sℙ\left( X = 1 \right)+s^{2}ℙ\left( X = 2 \right)+\dots  & & & text{}
\end{align}
$$

then $G_{X}\left( 0 \right)=ℙ\left( X = 0 right)$ whilst, as in
equation ([6.1](nose21.htm#x34-59004r6.1)),

$$
\begin{align}
\frac{d^{k}}{d s^{k}}G_{X}\left( s \right) & = & \sum_{x = 0}^{\infty}\left(\frac{d^{k}}{d s^{k}} s^{x}\right)ℙ\left( X = x \right) & \text{} \\ & = & \sum_{x = k}^{\infty}x\left( x - 1 \right)\dots \left( x - k + 1 \right)s^{x - k}ℙ\left( X = x \right) & \text{} \\ & = & k!ℙ\left( X = k \right)+\sum_{x = k + 1}^{\infty}x\left( x - 1 \right)\dots \left( x - k + 1 \right)s^{x - k}ℙ\left( X = x \right) & text{}
\end{align}
$$

so that, evaluating at $s=0$, gives

$$
\begin{align}
G_{X}^{\left( k \right)}\left( 0 \right) & = & k!ℙ\left( X = k \right) & text{}
\end{align}
$$

and the result thus follows by rearrangement. $square$

Corollary 18 (Uniqueness property)
Suppose that $X$ and $Y$ have pgfs $G_{X}$ and $G_{Y}$ respectively and
$G_{X}\left( s \right)=G_{Y}\left( s right)$ for all
$s\in\left[ 0 , 1 right]$ then
$ℙ\left( X = k \right)=ℙ\left( Y = k right)$ for $k=0,1,2,…⁡$ so that
$X$ and $Y$ have the same distribution.

Proof: If $G_{X}\left( s \right)=G_{Y}\left( s right)$ for all
$s\in\left[ 0 , 1 right]$ then
$G_{X}^{\left( k \right)}\left( s \right)=G_{Y}^{\left( k \right)}\left( s right)$
for all $k=0,1,2,…⁡$. In particular,
$G_{X}^{\left( k \right)}\left( 0 \right)=G_{Y}^{\left( k \right)}\left( 0 right)$
so that, from Theorem [29](#x35-6000129),
$ℙ\left( X = k \right)=ℙ\left( Y = k \right)$. $square$

Thus, specifying the pgf is equivalent to specifying the probability
distribution and we can use the pgf to identify the distribution.

Example 64 Suppose that a random variable $Y$ has pgf
$G_{Y}\left( s \right)=frac{s}{2 - s}$ find the distribution of $Y$ .

Note that

$$
\begin{align}
\frac{s}{2 - s} & = & \frac{s \frac{1}{2}}{1 - s \frac{1}{2}} & text{}
\end{align}
$$

and, from Example [62](nose20.htm#x33-5800562), if
$XsimGeom\left( p right)$ then
$G_{X}\left( s \right)=\frac{s p}{1 - s \left( 1 - p right)}$. Thus, by
the uniqueness property, $YsimGeom\left( 1 / 2 right)$.

Example 65 Suppose that $X$ has pgf
$G_{X}\left( s \right)=\frac{\left(\left( 1 + s \right)right)^{2}}{4}$
. Find the distribution of $X$.

Note that

$$
\begin{align}
\frac{d}{d s}G_{X}\left( s \right)=\frac{1 + s}{2},\frac{d^{2}}{d s^{2}}G_{X}\left( s \right)=\frac{1}{2},\frac{d^{k}}{d s^{k}}G_{X}\left( s \right)=0 & & & text{}
\end{align}
$$

for $k=3,4,…⁡$. Thus,

$$
\begin{align}
ℙ\left( X = 0 \right)=G_{X}\left( 0 \right)=\frac{1}{4},ℙ\left( X = 1 \right)=\frac{G_{X}^{\left( 1 \right)} \left( 0 \right)}{1 !}=\frac{1}{2},ℙ\left( X = 2 \right)=\frac{G_{X}^{\left( 2 \right)} \left( 0 \right)}{2 !}=\frac{1}{4} & & & text{}
\end{align}
$$

with $ℙ\left( X = k right)=0$ for $k=3,4,…⁡$. Note that these
probabilities are exactly those for $XsimB\left( 2 , 1 / 2 right)$.

\


