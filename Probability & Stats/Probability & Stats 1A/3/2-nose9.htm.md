\



### 3.3 The law of total probability

Definition 12 (Partition)
If $E_{1},…⁡,E_{n}$ are a collection of non-empty events, that is each
$E_{i}\neqoslash$, which are pairwise disjoint, so
$E_{i}\capE_{j}=\oslash$ for all $ineq j$, and
$\left(\cup ⁡\right)_{i = 1}^{n}E_{i}=Omega$ then
$\left\{ E_{1} , … ⁡ , E_{n} \right\}$ forms a partition of $Omega$.

Partitions are very useful as they allow us to divide the sample space
$Omega$ into non-overlapping pieces. Notice that for a partition
$\left\{ E_{1} , … ⁡ , E_{n} \right}$ we have

$$
\begin{align}
ℙ\left(\cup_{i = 1}^{n} E_{i}\right) & = & \sum_{i = 1}^{n}ℙ\left( E_{i} \right)=1. & text{}
\end{align}
$$

Example 28 For any event $E$ with $E\neq\oslash$ and $E\neqOmega$,
$\left\{ E , E^{c} \right\}$ is a partition of $Omega$:
$E\capE^{c}=\oslash$ and $E\cupE^{c}=Omega$.

Recall the partition rule, Corollary [3](nose2.htm#x10-160203) from
Section [1.2.3](nose2.htm#x10-160003),

$$
\begin{align}
ℙ\left( F \right) & = & ℙ\left( F \cap E \right)+ℙ\left( F \cap E^{c} \right). & \text{(3.4)}\text{}text{}
\end{align}
$$

Now, if $ℙ\left( E \right)>0$ and $ℙ\left( E^{c} right)>0$ so that
$ℙ\left( F \left| E \right)=ℙ\left( F \cap E \right)/ℙ\left( E right)$
and
$ℙ\left( F \left| E^{c} \right)=ℙ\left( F \cap E^{c} \right)/ℙ\left( E^{c} right)$
are well defined, then

$$
\begin{align}
ℙ\left( F \cap E \right) & = & ℙ\left( F \left| E \right)ℙ\left( E \right), & \text{(3.5)}\text{}\text{} \\ ℙ\left( F \cap E^{c} \right) & = & ℙ\left( F \left| E^{c} \right)ℙ\left( E^{c} \right). & \text{(3.6)}\text{}text{}
\end{align}
$$

Substituting equations ([3.5](#x19-31005r3.5)) and
([3.6](#x19-31005r3.6)) into ([3.4](#x19-31004r3.4)) gives

$$
\begin{align}
ℙ\left( F \right) & = & ℙ\left( F \left| E \right)ℙ\left( E \right)+ℙ\left( F \left| E^{c} \right)ℙ\left( E^{c} \right). & text{}
\end{align}
$$

This result can be extended into the following theorem.

Theorem 10 (The law of total probability)
If $\left\{ E_{1} , … ⁡ , E_{n} \right\}$ form a partition of $Omega$
and $ℙ\left( E_{i} right)>0$ for all $i$ then, for any event $F$,

$$
\begin{align}
ℙ\left( F \right) & = & \sum_{i = 1}^{n}ℙ\left( F \left| E_{i} \right)ℙ\left( E_{i} \right). & text{}
\end{align}
$$

Proof: Noting that $F=F\capOmega$ and
$\left(\cup ⁡\right)_{i = 1}^{n}E_{i}=Omega$ then,

$$
\begin{align}
F=F\cap\left(\cup_{i = 1}^{n} E_{i}\right)=\cup_{i = 1}^{n}\left( F \cap E_{i} \right) & & & text{}
\end{align}
$$

using the Distributive Law (see Theorem [1](nose1.htm#x9-110241)). Now,
for any $ineq j$,

$$
\begin{align}
\left( F \cap E_{i} \right)\cap\left( F \cap E_{j} \right)=F\cap\left( E_{i} \cap E_{j} \right)=F\cap\oslash=\oslash & & & text{}
\end{align}
$$

so that $F\capE_{1},…⁡,FcapE_{n}$ are pairwise disjoint. Thus,

$$
\begin{align}
ℙ\left( F \right)=ℙ\left(\cup_{i = 1}^{n} \left( F \cap E_{i} \right)\right) & = & \sum_{i = 1}^{n}ℙ\left( F \cap E_{i} \right) & \text{(3.7)}\text{}\text{} \\ & = & \sum_{i = 1}^{n}ℙ\left( F \left| E_{i} \right)ℙ\left( E_{i} \right) & \text{(3.8)}\text{}text{}
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
ℙ\left( F \right) & = & \sum_{i = 1}^{\infty}ℙ\left( F \left| E_{i} \right)ℙ\left( E_{i} \right). & text{}
\end{align}
$$

2.  

The result also holds for collections of disjoint events
$E_{1},…⁡,E_{n}$ with $F\subset\left(\cup ⁡right)_{i = 1}^{n}E_{i}$.

Example 29 In a bank's trading office, suppose Buster, Rich and Owen
made $30%$, $50%$ and $20%$ of all the deals last year, respectively,
and $1/2$, $1/3$ and $1/4$ of each of their own deals made in excess of
$£1$ million in profit, respectively. What is the probability a randomly
chosen deal from last year made over $£1$ million profit?

Let $Omega$ be collection of last years deals. Let $B$, $R$, $W$ be
event the deal was made by Buster. Rich, Owen respectively. Then, since
$B\cupR\cupW=Omega$ and $B$, $R$, $W$ are disjoint,
$\left\{ B , R , W \right\}$ is a partition of $Omega$.

If $E$ is the event that the chosen deal makes over $£1$ million in
profit, then by the law of total probability,

$$
\begin{align}
ℙ\left( E \right) & = & ℙ\left( E \left| B \right)ℙ\left( B \right)+ℙ\left( E \left| R \right)ℙ\left( R \right)+ℙ\left( E \left| W \right)ℙ\left( W \right) & \text{} \\ & = & \left(\frac{1}{2} \times \frac{3}{1 0}\right)+\left(\frac{1}{3} \times \frac{5}{1 0}\right)+\left(\frac{1}{4} \times \frac{2}{1 0}\right)=\frac{1 1}{3 0}. & text{}
\end{align}
$$

\


