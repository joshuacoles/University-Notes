### 1.2 The rules of probability

Suppose that $E$ is an event of interest in the sample space $Omega$.
We want to assign a probability, $ℙ\left( E right)$, to the event $E$.
In order to do so, we need to define the collection of events over which
we will specify probabilities. This collection is termed the event
space.

#### 1.2.1 Event space

Definition 7 (Event space)
A collection $ℱ$ of subsets of $Omega$ is called an event space or
$sigma$-algebra if it satisfies

1.  

$\oslashinℱ$ (the empty set is an element of the event space).

2.  

if $E\inℱ$, then $E^{c}inℱ$ (the event space is closed[4](#fn4x1) under
complementation).

3.  

if $E_{1},E_{2},…⁡inℱ$ then
$\left(\cup ⁡\right)_{i = 1}^{\infty}E_{i}inℱ$ (the event space is
closed under countable unions).

Notes:

-   The sample space is an element of the event space. As $\oslashinℱ$
    and $\Omega=\left(\oslash\right)^{c}$ then $\Omegainℱ$.
-   The event space is closed under countable intersections. If
    $E_{1},E_{2},…⁡\inℱ$ then $E_{1}^{c},E_{2}^{c},…⁡inℱ$ and so
    $\left(\cup ⁡\right)_{i = 1}^{\infty}E_{i}^{c}inℱ$. Thus,
    $\left(\left(\left(\cup ⁡\right)_{i = 1}^{\infty} E_{i}^{c}\right)\right)^{c}inℱ$.
    Now from De Morgan's Laws, see equation
    ([1.2](nose1.htm#x9-12008r1.2)),

    $$
    begin{align}
    \left(\left(\cup_{i = 1}^{\infty} E_{i}^{c}\right)\right)^{c}=\cap_{i = 1}^{\infty}\left(\left(E_{i}^{c}\right)\right)^{c}=\cap_{i = 1}^{\infty}E_{i} & & & text{}
    end{align}
    $$

    so that $\left(\cap ⁡\right)_{i = 1}^{\infty}E_{i}inℱ$.

-   The event space is closed under finite unions and intersections.
    Notice that $\left(\cup ⁡\right)_{i = 1}^{\infty}E_{i}inℱ$ includes
    finite unions. Recalling that for any event $E$, $E\cuposlash=E$
    then if we let $E_{n + 1}=\oslash$, $E_{n + 2}=oslash$, $…⁡$ then

    $$
    begin{align}
    \cup_{i = 1}^{\infty}E_{i}=E_{1}\cup\dots \cupE_{n}\cupE_{n + 1}\cup\dots =E_{1}\cup\dots \cupE_{n}\cup\oslash=\cup_{i = 1}^{n}E_{i}, & & & text{}
    end{align}
    $$

    so that if $E_{1},…⁡,E_{n}inℱ$ then
    $\left(\cup ⁡\right)_{i = 1}^{n}E_{i}inℱ$ (and from De Morgan's
    Laws, $\left(\cap ⁡\right)_{i = 1}^{n}E_{i}inℱ$).

Associated with a sample space $Omega$ there are many different event
spaces.

Example 7

1.  

The collection of the two sets $\left\{ \oslash , \Omega \right}$ is an
event space, often termed the trivial event space.

2.  

If $E\subset\Omega$ then $\left\{ \oslash , E , E^{c} , \Omega \right}$
is an event space. For example, $E\cupE^{c}=Omega$,
$E\capE^{c}=oslash$ and so on.

Definition 8 (Power set)
For any set $S$, the power set of $S$, denoted $𝒫\left( S right)$, is
the set of all subsets of $S$, including $oslash$ and $S$ itself.

Example 8 The power set of $\Omega$, $𝒫\left( \Omega right)$, is an
event space. If $\Omega$ has $n<infty$ elements, written
$\left|\Omegaleft|=n$, then there are $2^{n}$ subsets, hence
$\left|𝒫\left( \Omega \right)left|=2^{n}$. For example if
$\Omega=\left\{ 1 , 2 , 3 \right}$ then there are $2^{3}=8$ subsets
with

$$
\begin{align}
𝒫\left( \Omega \right) & = & \left\{ \oslash , \left\{ 1 \right\} , \left\{ 2 \right\} , \left\{ 3 \right\} , \left\{ 1 , 2 \right\} , \left\{ 1 , 3 \right\} , \left\{ 2 , 3 \right\} , \left\{ 1 , 2 , 3 \right\} \right\}. & text{}
\end{align}
$$

In this course we are considering sample spaces that are either finite
or countably infinite and the only event space we will consider is
$𝒫\left( \Omega right)$.

Why do we need a separate definition of an event space rather than
$𝒫\left( \Omega \right)$?
It's really beyond the scope of this course to go into technical details
but if $\Omega$ is an uncountable set (eg. $\left[ 0 , 1 right]$ or
$ℝ$) then $𝒫\left( \Omega right)$ is simply too large! It contains
weird subsets (which are said to be non-measurable: if you study
probability in later years, you will explore the concept of measure
theory in more detail) which cannot be reasonably assigned
probabilities. An example of these are Vitali[5](#fn5x1) sets. In these
cases, a suitable event space can however be found which resolves these
problems. For example, if $Omega=ℝ$ then typically $ℱ$ is chosen to
contain all sets of the form $\left[ a , b right]$,
$\left( a , b \right]$, $\left( a , b \right)$, $\left[ a , b right)$
for all $a,binℝ$.

#### 1.2.2 Kolmogorov's axioms of probability

To complete our model of a random experiment we now assign probabilities
to each event in the event space. There are a number of rules that need
to be satisfied to make these assignments consistent. These rules, or
axioms, were formulated by Kolmogorov[6](#fn6x1) in the 1930s.

Definition 9 (Probability measure and Kolmogorov's axioms)
Let $Omega$ be a sample space and $ℱ$ an event space defined on
$\Omega$. A probability measure $ℙ$ on $\left( \Omega , ℱ right)$
satisfies the following three Kolmogorov axioms:

(A1)

$ℙ\left( E \right)\geq 0$ for all events $Einℱ$.

(A2)

$ℙ\left( \Omega right)=1$.

(A3)

If $E_{1},E_{2},…⁡$ is a collection of disjoint events in $ℱ$, so that
$E_{i}\inℱ$ and $E_{i}\capE_{j}=oslash$
$\forall⁡i,j\inℤ^{+}\left( i \neq j right)$, then

$$
\begin{align}
ℙ\left(\cup_{i = 1}^{\infty} E_{i}\right)=\sum_{i = 1}^{\infty}ℙ\left( E_{i} \right)=ℙ\left( E_{1} \right)+ℙ\left( E_{2} \right)+\dots . & & & text{}
\end{align}
$$

The triple $\left( \Omega , ℱ , ℙ right)$ is called a probability space
or probability triple. It represents a mathematical model of a random
experiment.

Hence, a probability measure on a sample space $Omega$ with associated
event space $ℱ$ is a specification of a number $ℙ\left( E right)$, the
probability of the event $E$, to each $Einℱ$ which satisfies
Kolmogorov's axioms (A1) - (A3). (A1) states that the probability of
every event must be non-negative, (A2) that if an event is certain to
occur then the probability of that event is 1 whilst (A3) states that
$ℙ$ is countably additive: if the $E_{i}$ are disjoint then the
probability that one of them occurs is the sum of their individual
probabilities.

#### 1.2.3 The calculus of probabilities

We can use Kolmogorov's axioms to build up properties of a probability
measure that will be useful when calculating complicated probabilities.

Theorem 2 (The probability of the empty set is zero)
For any $\left( \Omega , ℱ , ℙ right)$,

$$
\begin{align}
ℙ\left( \oslash \right) & = & 0. & text{}
\end{align}
$$

Proof: Let $E_{1}=\Omega$ and $E_{2}=E_{3}=\dots =oslash$. Thus

$$
\begin{align}
\cup_{i = 1}^{\infty}E_{i}=\Omega\cup\oslash\cup\oslash\cup\dots =\Omega & & & \text{(1.3)}\text{}text{}
\end{align}
$$

and, since (see Definition [4](nose1.htm#x9-100064))
$\Omega\cap\oslash=\oslash$ and $\oslash\cap\oslash=oslash$, then
$E_{i}\capE_{j}=\oslash$ $\forall⁡ineq j$ so that $E_{1},E_{2},…⁡$ are
a collection of disjoint events. Hence, from ([1.3](#x10-16003r1.3)),

$$
\begin{align}
ℙ\left( \Omega \right) & = & ℙ\left(\cup_{i = 1}^{\infty} E_{i}\right) & \text{} \\ & = & \sum_{i = 1}^{\infty}ℙ\left( E_{i} \right)=ℙ\left( E_{1} \right)+ℙ\left( E_{2} \right)+\dots \text{(by (A3) since }E_{i}\text{s disjoint)} & \text{} \\ & = & ℙ\left( E_{1} \right)+\sum_{i = 2}^{\infty}ℙ\left( E_{i} \right) & \text{} \\ & = & ℙ\left( \Omega \right)+\sum_{i = 2}^{\infty}ℙ\left( \oslash \right). & \text{(1.4)}\text{}text{}
\end{align}
$$

Subtracting $ℙ\left( \Omega right)$ from both sides of
([1.4](#x10-16004r1.4)) gives

$$
\begin{align}
\sum_{i = 2}^{\infty}ℙ\left( \oslash \right) & = & 0. & text{}
\end{align}
$$

From (A1), $ℙ\left( \oslash \right)geq 0$. If
$ℙ\left( \oslash right)>0$ then
$\sum ⁡_{i = 1}^{\infty}ℙ\left( \oslash \right)=\inftyneq 0$. Thus, we
must have $ℙ\left( \oslash \right)=0$. $square$

Theorem 3 (Finite additivity of $ℙ$ for disjoint events)
For any $\left( \Omega , ℱ , ℙ \right)$, if $E,Finℱ$ with
$E\capF=oslash$ then

$$
\begin{align}
ℙ\left( E \cup F \right) & = & ℙ\left( E \right)+ℙ\left( F \right). & \text{(1.5)}\text{}text{}
\end{align}
$$

Similarly, if $E_{1},E_{2},…⁡,E_{n}inℱ$ are disjoint then

$$
\begin{align}
ℙ\left(\cup_{i = 1}^{n} E_{i}\right)=\sum_{i = 1}^{n}ℙ\left( E_{i} \right)=ℙ\left( E_{1} \right)+\dots +ℙ\left( E_{n} \right). & & & \text{(1.6)}\text{}text{}
\end{align}
$$

Proof: We prove ([1.6](#x10-16008r1.6)), ([1.5](#x10-16007r1.5)) is the
case for $n=2$. Suppose that $E_{1},…⁡,E_{n}$ are disjoint events and
let $E_{n + 1}=E_{n + 2}=\dots =oslash$. Then, as
$E\cap\oslash=oslash$ for any event $E$, $E_{1},E_{2},…⁡$ are a
collection of disjoint events with

$$
\begin{align}
\cup_{i = 1}^{\infty}E_{i} & = & E_{1}\cup\dots \cupE_{n}\cup\oslash\cup\oslash\cup\dots  & \text{} \\ & = & E_{1}\cup\dots \cupE_{n}=\cup_{i = 1}^{n}E_{i}. & text{}
\end{align}
$$

Thus, by (A3) as the $E_{i}$s are disjoint,

$$
\begin{align}
ℙ\left(\cup_{i = 1}^{n} E_{i}\right) & = & \sum_{i = 1}^{\infty}ℙ\left( E_{i} \right)=ℙ\left( E_{1} \right)+\dots +ℙ\left( E_{n} \right)+ℙ\left( E_{n + 1} \right)+ℙ\left( E_{n + 2} \right)\dots  & \text{} \\ & = & ℙ\left( E_{1} \right)+\dots +ℙ\left( E_{n} \right)+\sum_{i = n + 1}^{\infty}ℙ\left( E_{i} \right) & \text{} \\ & = & \sum_{i = 1}^{n}ℙ\left( E_{i} \right)+\sum_{i = n + 1}^{\infty}ℙ\left( \oslash \right). & \text{(1.7)}\text{}text{}
\end{align}
$$

From Theorem [2](#x10-160012), $ℙ\left( \oslash right)=0$ and so
([1.6](#x10-16008r1.6)) follows by substituting this into
([1.7](#x10-16010r1.7)). $square$

Example 9 Consider the experiment where we toss a coin a single time. We
let the sample space $\Omega=\left\{ H , T \right}$ where
$H=\left\{ \text{toss is a head} \right}$ and
$T=\left\{ \text{toss is a tail} \right}$. For the event space we take
$ℱ=𝒫\left( \Omega \right)=\left\{ \oslash , \left\{ H \right\} , \left\{ T \right\} , \left\{ H , T \right\} \right}$.
From (A2) of Definition [9](#x10-150029) we have that
$ℙ\left( \left\{ H , T \right\} right)=1$ whilst from Theorem
[2](#x10-160012) we have $ℙ\left( \oslash right)=0$. As
$\left\{ H \right\}\cap\left\{ T \right\}=oslash$ then from Theorem
[3](#x10-160063) we have that

$$
\begin{align}
ℙ\left( \left\{ H \right\} \cup \left\{ T \right\} \right) & = & ℙ\left( \left\{ H \right\} \right)+ℙ\left( \left\{ T \right\} \right). & \text{(1.8)}\text{}text{}
\end{align}
$$

As $\left\{ H \right\}\cup\left\{ T \right\}=Omega$ it then follows
from equation ([1.8](#x10-16012r1.8)) that

$$
\begin{align}
ℙ\left( \left\{ H \right\} \right)+ℙ\left( \left\{ T \right\} \right) & = & 1. & \text{(1.9)}\text{}text{}
\end{align}
$$

From (A1) of Definition [9](#x10-150029),
$ℙ\left( \left\{ H \right\} \right)geq 0$ and
$ℙ\left( \left\{ T \right\} \right)geq 0$. So, any specification of
$ℙ\left( \left\{ H \right\} \right)=p$ where $p\in\left[ 0 , 1 right]$
with, from equation ([1.9](#x10-16013r1.9)),
$ℙ\left( \left\{ T \right\} right)=1-p$ is a valid probability measure
on $\left( \Omega , ℱ right)$. If, additionally we assert that the coin
is fair so that
$ℙ\left( \left\{ H \right\} \right)=ℙ\left( \left\{ T \right\} right)$
then we must take $p=frac{1}{2}$.

Corollary 1 (Probability of complements)
For any $\left( \Omega , ℱ , ℙ \right)$ and $Einℱ$

$$
\begin{align}
ℙ\left( E^{c} \right) & = & 1-ℙ\left( E \right). & \text{(1.10)}\text{}text{}
\end{align}
$$

Proof: From Definition [7](#x10-140017), as $E\inℱ$ then $E^{c}inℱ$
with $E\cupE^{c}=Omega$ so that, from (A2) of Definition
[9](#x10-150029),

$$
\begin{align}
ℙ\left( E \cup E^{c} \right)=ℙ\left( \Omega \right)=1. & & & \text{(1.11)}\text{}text{}
\end{align}
$$

Additionally, $E\capE^{c}=oslash$ so that $E$, $E^{c}$ are disjoint
events. Thus, from ([1.5](#x10-16007r1.5)) of Theorem [3](#x10-160063),

$$
\begin{align}
ℙ\left( E \cup E^{c} \right) & = & ℙ\left( E \right)+ℙ\left( E^{c} \right) & \text{(1.12)}\text{}\text{} \\ 1 & = & ℙ\left( E \right)+ℙ\left( E^{c} \right) & \text{(1.13)}\text{}text{}
\end{align}
$$

where ([1.13](#x10-16017r1.13)) follows by substituting
([1.11](#x10-16016r1.11)) into ([1.12](#x10-16017r1.12)). Rearranging
([1.13](#x10-16017r1.13)) gives ([1.10](#x10-16015r1.10)). $square$

Corollary 2 (Probabilities are between zero and one)
For any $\left( \Omega , ℱ , ℙ \right)$ and $Einℱ$

$$
\begin{align}
0\leqℙ\left( E \right)\leq 1. & & & \text{(1.14)}\text{}text{}
\end{align}
$$

Thus, $ℙ:ℱ\rightarrow\left[ 0 , 1 right]$.

Proof: From (A1) of Definition [9](#x10-150029),
$ℙ\left( E \right)\geq 0$ and $ℙ\left( E^{c} \right)geq 0$. Thus,
applying the latter inequality to ([1.10](#x10-16015r1.10)) of Corollary
[1](#x10-160141) gives $1-ℙ\left( E \right)geq 0$ so that
$ℙ\left( E \right)\leq 1$. $square$

Corollary 3 (Partition rule)
For any $\left( \Omega , ℱ , ℙ \right)$ and $E,Finℱ$

$$
\begin{align}
ℙ\left( F \right) & = & ℙ\left( F \cap E \right)+ℙ\left( F \cap E^{c} \right). & \text{(1.15)}\text{}text{}
\end{align}
$$

Proof: Problem Sheet Exercise. $square$

Corollary 4 (Inclusion-exclusion rule)
For any $\left( \Omega , ℱ , ℙ \right)$ and $E,Finℱ$

$$
\begin{align}
ℙ\left( E \cup F \right) & = & ℙ\left( E \right)+ℙ\left( F \right)-ℙ\left( E \cap F \right). & \text{(1.16)}\text{}text{}
\end{align}
$$

Proof: Problem Sheet Exercise. $square$

Corollary 5 (Containment rule)
For any $\left( \Omega , ℱ , ℙ \right)$ and $E\subsetFinℱ$

$$
\begin{align}
ℙ\left( F \right) & = & ℙ\left( E \right)+ℙ\left( F \cap E^{c} \right) & \text{(1.17)}\text{}text{}
\end{align}
$$

so that

$$
\begin{align}
ℙ\left( F \right) & \geq & ℙ\left( E \right). & \text{(1.18)}\text{}text{}
\end{align}
$$

Proof: As $E\subsetF$ then $FcapE=E$: see Figure [1.5](#x10-160275).

![PIC](MA10211_all-9.png)

Figure 1.5:If $E\subsetF$ then $FcapE=E$.

Substituting this into ([1.15](#x10-16021r1.15)) of Corollary
[3](#x10-160203) gives ([1.17](#x10-16025r1.17)). From (A1) of
Definition [9](#x10-150029) $ℙ\left( F \cap E^{c} \right)geq 0$. Using
this in ([1.17](#x10-16025r1.17)) immediately gives
([1.18](#x10-16026r1.18)). $square$

Example 10 In a game of Cluedo, a murder has been committed by a single
person with a single weapon. We have narrowed the choice of murderer and
the choice of weapon down to three possible choices each:

-   Murderer: Colonel Mustard (M), Professor Plum (P), Miss Scarlett (S)
-   Weapon: Candlestick (C), Lead Pipe (L), Rope (R)

Our sample space is thus

$$
\begin{align}
\Omega & = & \left\{ \left\{ M , C \right\} , \left\{ M , L \right\} , \left\{ M , R \right\} , \left\{ P , C \right\} , \left\{ P , L \right\} , \left\{ P , R \right\} , \left\{ S , C \right\} , \left\{ S , L \right\} , \left\{ S , R \right\} \right\}. & text{}
\end{align}
$$

Each possible outcome has been assigned the following
probabilities[7](#fn7x1)

$$
\begin{align}
\begin{matrix} & \text{Candlestick} & \text{Lead Pipe} & \text{Rope} \\ ̲ & ̲ & ̲ & ̲ \\ \text{Col. Mustard} & \frac{4}{2 7} & \frac{4}{2 7} & \frac{4}{2 7} \\ \text{Prof. Plum} & \frac{4}{2 7} & \frac{4}{2 7} & \frac{4}{2 7} \\ \text{Miss Scarlett} & \frac{1}{2 7} & \frac{1}{2 7} & \frac{1}{2 7}\end{matrix} & & & text{}
\end{align}
$$

Thus, for example,
$ℙ\left( \left\{ M , C \right\} \right)=frac{4}{2 7}$ and
$ℙ\left( \left\{ S , C \right\} \right)=frac{1}{2 7}$.

1.  

Find the probability the Colonel Mustard committed the murder.

Let $M$ denote the event that Mustard committed the murder then
$M=\left\{ M , C \right\}\cup\left\{ M , L \right\}\cup\left\{ M , R \right}$,
the union of three disjoint events. Thus, from Theorem [3](#x10-160063),

$$
\begin{align}
ℙ\left( M \right) & = & ℙ\left( \left\{ M , C \right\} \right)+ℙ\left( \left\{ M , L \right\} \right)+ℙ\left( \left\{ M , R \right\} \right) & \text{(1.19)}\text{}\text{} \\ & = & \frac{4}{2 7}+\frac{4}{2 7}+\frac{4}{2 7}=\frac{1 2}{2 7}. & text{}
\end{align}
$$

2.  

Find the probability that Professor Plum or Colonel Mustard did it.

In a similar way to the previous part, using Theorem [3](#x10-160063),

$$
\begin{align}
ℙ\left( P \right) & = & ℙ\left( \left\{ P , C \right\} \right)+ℙ\left( \left\{ P , L \right\} \right)+ℙ\left( \left\{ P , R \right\} \right) & \text{} \\ & = & \frac{4}{2 7}+\frac{4}{2 7}+\frac{4}{2 7}=\frac{1 2}{2 7}. & text{}
\end{align}
$$

Now, the murder has been committed by a single person and so
$M\capP=oslash$: they are disjoint events. Once again we can utilise
Theorem [3](#x10-160063) to find

$$
\begin{align}
ℙ\left( M \cup P \right)=ℙ\left( M \right)+ℙ\left( P \right)=\frac{1 2}{2 7}+\frac{1 2}{2 7}=\frac{2 4}{2 7}. & & & text{}
\end{align}
$$

3.  

Find the probability that Colonel Mustard is innocent.

Note that $M^{c}$ corresponds to Colonel Mustard being innocent. Using
Corollary [1](#x10-160141) we have

$$
\begin{align}
ℙ\left( M^{c} \right)=1-ℙ\left( M \right)=1-\frac{1 2}{2 7}=\frac{1 5}{2 7}. & & & text{}
\end{align}
$$

4.  

Calculate the probability that Mustard is the murderer, or that rope was
used.

Firstly we calculate the probability that rope, $R$, was the weapon
used.

$$
\begin{align}
ℙ\left( R \right) & = & ℙ\left( \left\{ M , R \right\} \right)+ℙ\left( \left\{ P , R \right\} \right)+ℙ\left( \left\{ S , R \right\} \right) & \text{(1.20)}\text{}\text{} \\ & = & \frac{4}{2 7}+\frac{4}{2 7}+\frac{1}{2 7}=\frac{9}{2 7}. & text{}
\end{align}
$$

As Mustard could have committed the murder using rope, these are not
disjoint events and so Theorem [3](#x10-160063) does not apply and we
must instead use the inclusion-exclusion rule, Corollary
[4](#x10-160224), to find

$$
\begin{align}
ℙ\left( M \cup R \right) & = & ℙ\left( M \right)+ℙ\left( R \right)-ℙ\left( M \cap R \right) & \text{(1.21)}\text{}\text{} \\ & = & \frac{1 2}{2 7}+\frac{9}{2 7}-\frac{4}{2 7}=\frac{1 7}{2 7}. & text{}
\end{align}
$$

Notice that we can see here the validity of the inclusion-exclusion
rule. In adding $ℙ\left( M \right)$ to $ℙ\left( R right)$ together
then, from equations ([1.19](#x10-16033r1.19)) and
([1.20](#x10-16040r1.20)), we double-count
$ℙ\left( M \cap R \right)=ℙ\left( \left\{ M , R \right\} right)$ and
hence why we have to subtract it in equation ([1.21](#x10-16041r1.21)).

As the final part illustrates, the inclusion-exclusion rule, Corollary
[5](#x10-160245), shows that we have to take care when calculating the
probability of the union of non-disjoint events to account for the
intersections and ensure that no double-counting occurs. As the number
of events in the union increases, the calculation becomes more
complicated but it is straightforward to find an upper bound on the
probability.

Theorem 4 (Boole's[8](#fn8x1) inequalities: the union and intersection
bounds)
For any $\left( \Omega , ℱ , ℙ right)$ and events
$E_{1},E_{2},…⁡,E_{n}inℱ$,

$$
\begin{align}
ℙ\left(\cup_{i = 1}^{n} E_{i}\right)\leq\sum_{i = 1}^{n}ℙ\left( E_{i} \right),ℙ\left(\cap_{i = 1}^{n} E_{i}\right)\geq 1-\sum_{i = 1}^{n}ℙ\left( E_{i}^{c} \right). & & & text{}
\end{align}
$$

The results also hold for infinite sums, unions, intersections and
events $E_{1},E_{2},…⁡$.

Proof: We use proof by induction to prove the finite case. Let
$P\left( k right)$ be the statement that

$$
\begin{align}
ℙ\left(\cup_{i = 1}^{k} E_{i}\right) & \leq & \sum_{i = 1}^{k}ℙ\left( E_{i} \right). & text{}
\end{align}
$$

The case $P\left( 1 right)$ is trivially true
($ℙ\left( E_{1} \right)\leqℙ\left( E_{1} right)$). Assume that
$P\left( k right)$ is true. Then by the inclusion-exclusion rule,
Corollary [5](#x10-160245),

$$
\begin{align}
ℙ\left(\cup_{i = 1}^{k + 1} E_{i}\right) & = & ℙ\left(\cup_{i = 1}^{k} E_{i}\right)+ℙ\left( E_{k + 1} \right)-ℙ\left(\left(\cup_{i = 1}^{k} E_{i}\right) \cap E_{k + 1}\right) & \text{} \\ & \leq & ℙ\left(\cup_{i = 1}^{k} E_{i}\right)+ℙ\left( E_{k + 1} \right)\text{(by (A1), }ℙ\left( E \right)\geq 0\text{ for any }E\inℱ\text{)} & \text{} \\ & \leq & \sum_{i = 1}^{k}ℙ\left( E_{i} \right)+ℙ\left( E_{k + 1} \right)\text{(since }P\left( k \right)\text{ is assumed true)} & \text{} \\ & = & \sum_{i = 1}^{k + 1}ℙ\left( E_{i} \right). & text{}
\end{align}
$$

Thus, if $P\left( k \right)$ true, so is $P\left( k + 1 right)$. Since
$P\left( 1 right)$ is true, it follows that the result holds for all
$ℤ^{+}$. Now using De Morgan's Laws for finite collections of events,
from equation ([1.1](nose1.htm#x9-12006r1.1)) it follows that
$\left(\cap ⁡\right)_{i = 1}^{n}E_{i}=\left(\left(\left(\cup ⁡\right)_{i = 1}^{n} E_{i}^{c}\right)right)^{c}$
so that

$$
\begin{align}
ℙ\left(\cap_{i = 1}^{n} E_{i}\right) & = & ℙ\left(\left(\left(\cup_{i = 1}^{n} E_{i}^{c}\right)\right)^{c}\right) & \text{} \\ & = & 1-ℙ\left(\cup_{i = 1}^{n} E_{i}^{c}\right)\text{(since }ℙ\left( E^{c} \right)=1-ℙ\left( E \right)\text{ for any }E\inℱ\text{)} & \text{} \\ & \geq & 1-\sum_{i = 1}^{n}ℙ\left( E_{i}^{c} \right) & text{}
\end{align}
$$

by the first inequality. $square$

#### 1.2.4 Specifying probabilities

As we noted in Section [1.1.1](nose1.htm#x9-90001), in this course we
shall be concerned with sample spaces that are countable so that they
are either finite,
$\Omega=\left\{ \left(\omega\right)_{1} , … ⁡ , \left(\omega\right)_{n} \right}$,
or countably infinite,
$\Omega=\left\{ \left(\omega\right)_{1} , \left(\omega\right)_{2} , … ⁡ \right}$.
In this case we can give a general method for specifying a probability
measure $ℙ$ on $\left( \Omega , ℱ right)$ which satisfies Kolmogorov's
axioms.

Theorem 5 (Specifying probabilities for a countable sample space)
Let
$\Omega=\left\{ \left(\omega\right)_{1} , … ⁡ , \left(\omega\right)_{n} \right}$
be a finite set and $ℱ$ any event space of subsets of $Omega$. Let
$p_{1},…⁡,p_{n}$ be non-negative numbers that sum to one. For any event
$E\inℱ$ define $ℙ\left( E right)$ by

$$
\begin{align}
ℙ\left( E \right) & = & \underset{i : \left(\omega\right)_{i} \in E}{\sum}p_{i} & \text{(1.22)}\text{}text{}
\end{align}
$$

where the sum over an empty set is defined to be zero. Then $ℙ$ is a
probability measure on $\left( \Omega , ℱ right)$. This remains true if
$\Omega=\left\{ \left(\omega\right)_{1} , \left(\omega\right)_{2} , … ⁡ \right}$
with corresponding non-negative numbers $p_{1},p_{2},…⁡$ which sum to
one.

Thus, if we specify $ℙ\left( \left(\omega\right)_{i} right)=p_{i}$ for
each $i$ where each $p_{i}geq 0$ and the sum of the $p_{i}$s is one
then the probability of any event $E$ can be found by adding the
probabilities $p_{i}$ of all outcomes $\left(\omegaright)_{i}$ which
are contained in $E$.

Example 11 Suppose we consider rolling a die with
$\Omega=\left\{ 1 , 2 , 3 , 4 , 5 , 6 \right}$ and set

$$
\begin{align}
ℙ\left( \left\{ \text{score on the die is }i\text{} \right\} \right)=ℙ\left( \left\{ i \right\} \right)=\frac{1}{6} & & & text{}
\end{align}
$$

for each $i=1,…⁡,6$ and for any event $E$ in $𝒫\left( \Omega right)$
set $ℙ\left( E right)$ as in equation ([1.22](#x10-17002r1.22)) then
$ℙ$ is a probability measure on
$\left( \Omega , 𝒫 \left( \Omega \right) right)$. Thus, for example,

$$
\begin{align}
ℙ\left( \left\{ \text{score is even} \right\} \right)=ℙ\left( \left\{ 2 , 4 , 6 \right\} \right) & = & ℙ\left( \left\{ 2 \right\} \right)+ℙ\left( \left\{ 4 \right\} \right)+ℙ\left( \left\{ 6 \right\} \right)=\frac{3}{6}; & \text{} \\ ℙ\left( \left\{ \text{score is less than 3} \right\} \right)=ℙ\left( \left\{ 1 , 2 \right\} \right) & = & ℙ\left( \left\{ 1 \right\} \right)+ℙ\left( \left\{ 2 \right\} \right)=\frac{2}{6}. & text{}
\end{align}
$$

Proof of Theorem [5](#x10-170015): We will prove the case for $Omega$
finite by verifying that axioms (A1)-(A3) of Definition [9](#x10-150029)
hold. As each $p_{i}$ is non-negative then, from equation
([1.22](#x10-17002r1.22)), $ℙ\left( E \right)geq 0$ and so (A1) holds.
Now,

$$
\begin{align}
ℙ\left( \Omega \right)=\underset{i : \left(\omega\right)_{i} \in \Omega}{\sum}p_{i}=\sum_{i = 1}^{n}p_{i}=1 & & & text{}
\end{align}
$$

so that (A2) holds. For (A3), as $Omega$ is finite then we only need to
consider finite unions. Let $E_{1},…⁡,E_{k}$ be pairwise disjoint
events. Thus, for $i\neq j$ $E_{i}\capE_{j}=oslash$ so that if
$\omega\in E_{i}$ then $\omeganotinE_{j}$. We have that

$$
\begin{align}
ℙ\left(\cup_{i = 1}^{k} E_{i}\right) & = & \underset{j : \left(\omega\right)_{j} \in \cup_{i = 1}^{k} E_{i}}{\sum}p_{j}\left( \text{from equation (}\text{1.22}\text{)} \right) & \text{} \\ & = & \sum_{i = 1}^{k}\left(\underset{j : \left(\omega\right)_{j} \in E_{i}}{\sum} p_{j}\right)\left( \text{as each }\left(\omega\right)_{j}\text{ is only in one of the }E_{i}\text{s} \right) & \text{} \\ & = & \sum_{i = 1}^{k}ℙ\left( E_{i} \right)\left( \text{from equation (}\text{1.22}\text{)} \right) & text{}
\end{align}
$$

and so (A3) holds. $square$

Notice that Theorem [5](#x10-170015) only requires the $p_{i}$s to be
non-negative and to sum to one, it does not determine the actual values
of the $p_{i}$s and there are an infinite number of ways of choosing the
$p_{i}$s for a particular experiment. For example in the die-rolling
example of Example [11](#x10-1700311), the specification
$p_{1}=\frac{1}{1 2}$, $p_{2}=\frac{1}{1 2}$, $p_{3}=frac{1}{1 2}$,
$p_{4}=\frac{1}{4}$, $p_{5}=\frac{1}{4}$ and $p_{6}=frac{1}{4}$ would
be a valid probability measure. In the next chapter we study one way of
defining the $p_{i}$: the classical definition of probability via the
notion of equally likely events.

[4](#fn4x1-bk)A set is closed under a given operation if that operation
returns a member of the set when evaluated on any member of the set.

[5](#fn5x1-bk)[Giuseppe Vitali
(1875-1932)](https://en.wikipedia.org/wiki/Giuseppe_Vitali). His 1905
paper provided the first example of a non-measurable subset of real
numbers.

[6](#fn6x1-bk)[Andrey Kolmogorov
(1903-1987)](https://en.wikipedia.org/wiki/Andrey_Kolmogorov). His 1933
book Foundations of the Theory of Probability laid the framework for the
axiomatic foundations of probability theory.

[7](#fn7x1-bk)Note that these non-negative numbers sum to one. In
Section [1.2.4](#x10-170004) we will demonstrate that this demonstrates
that we have a probability measure on
$\left( \Omega , 𝒫 \left( \Omega \right) right)$.

[8](#fn8x1-bk)[George Boole
(1815-1864)](https://en.wikipedia.org/wiki/George_Boole).

\
\
