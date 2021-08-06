\



### 3.3 The law of total probability

## Definition 1 (Partition)
If $E_{1},…⁡,E_{n}$ are a collection of non-empty events, that is each
$E_{i}\neq\oslash$, which are pairwise disjoint, so
$E_{i} \cap E_{j}=\oslash$ for all $ineq j$, and
$(\cup ⁡)_{i = 1}^{n}E_{i}=Omega$ then
$\set{ E_{1}, … ⁡, E_{n} }$ forms a partition of $Omega$.

Partitions are very useful as they allow us to divide the sample space
$Omega$ into non-overlapping pieces. Notice that for a partition
$\set{ E_{1}, … ⁡, E_{n} }$ we have

$$
\begin{align}
\P(\cup_{i = 1}^{n} E_{i}) &= \sum_{i = 1}^{n}\P(E_{i})=1. text{}
\end{align}
$$

## Example 2 For any event $E$ with $E\neq\oslash$ and $E\neqOmega$,
$\set{ E, E^{c} }$ is a partition of $Omega$:
$E\capE^{c}=\oslash$ and $E\cupE^{c}=Omega$.

Recall the partition rule, Corollary [3](nose2.htm#x10-160203) from
Section [1.2.3](nose2.htm#x10-160003),

$$
\begin{align}
\P(F) &= \P(F \cap E)+\P(F \cap E^{c}). \text{(3.4)}text{}
\end{align}
$$

Now, if $\P(E)>0$ and $\P(E^{c})>0$ so that
$\P(F | E)=\P(F \cap E)/\P(E)$
and
$\P(F | E^{c})=\P(F \cap E^{c})/\P(E^{c})$
are well defined, then

$$
\begin{align}
\P(F \cap E) &= \P(F | E)\P(E), \text{(3.5)} \\ \P(F \cap E^{c}) &= \P(F | E^{c})\P(E^{c}). \text{(3.6)}text{}
\end{align}
$$

Substituting equations ([3.5](#x19-31005r3.5)) and
([3.6](#x19-31005r3.6)) into ([3.4](#x19-31004r3.4)) gives

$$
\begin{align}
\P(F) &= \P(F | E)\P(E)+\P(F | E^{c})\P(E^{c}). text{}
\end{align}
$$

This result can be extended into the following theorem.

## Theorem 1 (The law of total probability)
If $\set{ E_{1}, … ⁡, E_{n} }$ form a partition of $Omega$
and $\P(E_{i})>0$ for all $i$ then, for any event $F$,

$$
\begin{align}
\P(F) &= \sum_{i = 1}^{n}\P(F | E_{i})\P(E_{i}). text{}
\end{align}
$$

### Proof
 Noting that $F=F\capOmega$ and
$(\cup ⁡)_{i = 1}^{n}E_{i}=Omega$ then,

$$
\begin{align}
F=F\cap(\cup_{i = 1}^{n} E_{i})=\cup_{i = 1}^{n}(F \cap E_{i}) text{}
\end{align}
$$

using the Distributive Law (see Theorem [1](nose1.htm#x9-110241)). Now,
for any $ineq j$,

$$
\begin{align}
(F \cap E_{i})\cap(F \cap E_{j})=F\cap(E_{i} \cap E_{j})=F\cap\oslash=\oslash text{}
\end{align}
$$

so that $F\capE_{1},…⁡,FcapE_{n}$ are pairwise disjoint. Thus,

$$
\begin{align}
\P(F)=\P(\cup_{i = 1}^{n} (F \cap E_{i})) &= \sum_{i = 1}^{n}\P(F \cap E_{i}) \text{(3.7)} \\ &= \sum_{i = 1}^{n}\P(F | E_{i})\P(E_{i}) \text{(3.8)}text{}
\end{align}
$$

where equation ([3.7](#x19-31011r3.7)) follows from Theorem
[3](nose2.htm#x10-160063) and ([3.8](#x19-31011r3.8)) from equation
([3.1](nose7.htm#x17-29002r3.1)). $square$

Notes

1.  

We can extend Definition [12](#x19-3100112) to a countably infinite
collection of non-empty disjoint events $E_{1},E_{2},…⁡$ which partition
$Omega$. In this case, Theorem [10](#x19-3100710) naturally extends to

$$
\begin{align}
\P(F) &= \sum_{i = 1}^{\infty}\P(F | E_{i})\P(E_{i}). text{}
\end{align}
$$

2.  

The result also holds for collections of disjoint events
$E_{1},…⁡,E_{n}$ with $F\subset(\cup ⁡)_{i = 1}^{n}E_{i}$.

## Example 2 In a bank's trading office, suppose Buster, Rich and Owen
made $30%$, $50%$ and $20%$ of all the deals last year, respectively,
and $1/2$, $1/3$ and $1/4$ of each of their own deals made in excess of
$£1$ million in profit, respectively. What is the probability a randomly
chosen deal from last year made over $£1$ million profit?

Let $Omega$ be collection of last years deals. Let $B$, $R$, $W$ be
event the deal was made by Buster. Rich, Owen respectively. Then, since
$B\cupR\cupW=Omega$ and $B$, $R$, $W$ are disjoint,
$\set{ B, R, W }$ is a partition of $Omega$.

If $E$ is the event that the chosen deal makes over $£1$ million in
profit, then by the law of total probability,

$$
\begin{align}
\P(E) &= \P(E | B)\P(B)+\P(E | R)\P(R)+\P(E | W)\P(W)  \\ &= (\frac{1}{2} \times \frac{3}{1 0})+(\frac{1}{3} \times \frac{5}{1 0})+(\frac{1}{4} \times \frac{2}{1 0})=\frac{1 1}{3 0}. text{}
\end{align}
$$

\


