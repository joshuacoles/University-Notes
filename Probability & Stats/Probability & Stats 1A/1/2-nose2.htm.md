# 1.2 The rules of probability

Suppose that $E$ is an event of interest in the sample space $\Omega$.
We want to assign a probability, $ℙ( E )$, to the event $E$.
In order to do so, we need to define the collection of events over which
we will specify probabilities. This collection is termed the event
space.

## 1.2.1 Event space

### Event Space
A collection of [[1. Event|Events]] $\calF \sub \calP(\Omega)$ in some [[2. Sample Space]] $\Omega$ is called an **Event Space** or $sigma$-algebra if it:

1. Contains the empty set, $\varnothing \in \calF$. ^sigma-1
2. Is closed under complement, $E \in \calF \implies E^c \in \calF$. ^sigma-2
3. Is closed under countable union, $E_1, E_2, \dots, E_n \in \calF \implies \bigcup E_i \in \calF$. ^sigma-3

Associated with a sample space $\Omega$ there are many different event spaces.

#### Immediate Implications

##### Inclusion of the Sample Space

By [[#^sigma-1|(1)]] and [[#^sigma-2|(2)]] $\Omega \in \calF$ as $\Omega = \varnothing^c$.

##### Closure under Countable Intersection

The Event Space is closed under countable intersection by [[De Morgan's Laws]]. Consider $E_1, \dots, E_n \in \calF$.

By [[#^sigma-2|(2)]] this implies $E_1^c, \dots, E_n^c \in \calF$ and hence by [[#^sigma-3|(3)]] also their countable union,

$$ \bigcup E_i^c \in \calF. $$

Taking the compliment of the above we obtain,

$$
\(\bigcup E_i^c\)^c
$$

which we know to be in $\calF$. Hence by [[De Morgan's Laws]] we have,

$$
\begin{align}
\(\bigcup E_i^c\)^c
&= \bigcap (E_i^c)^c \\
&= \bigcap E_i \in \calF
\end{align}
$$

#### Examples

1. The collection of the two sets $\set{ \oslash , \Omega }$ is an event space, often termed the trivial event space.

2. If $E\subset \Omega$ then $\set{ \oslash , E , E^c , \Omega }$ is an event space. For example, $E\cup E^c=\Omega$, $E\cap E^c=\oslash$ and so on.

---

## Definition 8 (Power set)

For any set $S$, the power set of $S$, denoted $𝒫( S )$, is
the set of all \subset s of $S$, including $oslash$ and $S$ itself.

### Example 8

The power set of $\Omega$, $𝒫( \Omega )$, is an
event space. If $\Omega$ has $n<infty$ elements, written
$\left|\Omegaleft|=n$, then there are $2^n$ \subset s, hence
$\left|𝒫( \Omega )left|=2^n$. For example if
$\Omega=\set{ 1 , 2 , 3 }$ then there are $2^3=8$ \subset s
with

$$
\begin{align}
𝒫( \Omega ) & = & \set{ \oslash , \set{ 1 } , \set{ 2 } , \set{ 3 } , \set{ 1 , 2 } , \set{ 1 , 3 } , \set{ 2 , 3 } , \set{ 1 , 2 , 3 } }. & text{}
\end{align}
$$

In this course we are considering sample spaces that are either finite
or countably infinite and the only event space we will consider is
$𝒫( \Omega )$.

Why do we need a separate definition of an event space rather than
$𝒫( \Omega )$?
It's really beyond the scope of this course to go into technical details
but if $\Omega$ is an uncountable set (eg. $\left[ 0 , 1 right]$ or
$ℝ$) then $𝒫( \Omega )$ is simply too large! It contains
weird \subset s (which are said to be non-measurable: if you study
probability in later years, you will explore the concept of measure
theory in more detail) which cannot be reasonably assigned
probabilities. An example of these are Vitali[5](#fn5x1) sets. In these
cases, a suitable event space can however be found which resolves these
problems. For example, if $\Omega=ℝ$ then typically $\calF$ is chosen to
contain all sets of the form $\left[ a , b right]$,
$( a , b \right]$, $( a , b )$, $\left[ a , b )$
for all $a,binℝ$.

#### 1.2.2 Kolmogorov's axioms of probability

To complete our model of a random experiment we now assign probabilities
to each event in the event space. There are a number of rules that need
to be satisfied to make these assignments consistent. These rules, or
axioms, were formulated by Kolmogorov[6](#fn6x1) in the 1930s.

Definition 9 (Probability measure and Kolmogorov's axioms)
Let $\Omega$ be a sample space and $\calF$ an event space defined on
$\Omega$. A probability measure $ℙ$ on $( \Omega , \calF )$
satisfies the following three Kolmogorov axioms:

(A1)

$ℙ( E )\geq 0$ for all events $Ein\calF$.

(A2)

$ℙ( \Omega )=1$.

(A3)

If $E_1,E_2,…⁡$ is a collection of disjoint events in $\calF$, so that
$E_{i}\in\calF$ and $E_{i}\cap E_{j}=oslash$
$\forall⁡i,j\inℤ^{+}( i \neq j )$, then

$$
\begin{align}
ℙ(\cup _{i = 1}^{\infty} E_{i})=\sum_{i = 1}^{\infty}ℙ( E_{i} )=ℙ( E_1 )+ℙ( E_2 )+\dots . & & & text{}
\end{align}
$$

The triple $( \Omega , \calF , ℙ )$ is called a probability space
or probability triple. It represents a mathematical model of a random
experiment.

Hence, a probability measure on a sample space $\Omega$ with associated
event space $\calF$ is a specification of a number $ℙ( E )$, the
probability of the event $E$, to each $Ein\calF$ which satisfies
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
For any $( \Omega , \calF , ℙ )$,

$$
\begin{align}
ℙ( \oslash ) & = & 0. & text{}
\end{align}
$$

Proof: Let $E_1=\Omega$ and $E_2=E_3=\dots =oslash$. Thus

$$
\begin{align}
\cup _{i = 1}^{\infty}E_{i}=\Omega\cup\oslash\cup\oslash\cup\dots =\Omega & & & \text{(1.3)}text{}
\end{align}
$$

and, since (see Definition [4](nose1.htm#x9-100064))
$\Omega\cap\oslash=\oslash$ and $\oslash\cap\oslash=oslash$, then
$E_{i}\cap E_{j}=\oslash$ $\forall⁡ineq j$ so that $E_1,E_2,…⁡$ are
a collection of disjoint events. Hence, from ([1.3](#x10-16003r1.3)),

$$
\begin{align}
ℙ( \Omega ) & = & ℙ(\cup _{i = 1}^{\infty} E_{i}) & \\ & = & \sum_{i = 1}^{\infty}ℙ( E_{i} )=ℙ( E_1 )+ℙ( E_2 )+\dots \text{(by (A3) since }E_{i}\text{s disjoint)} & \\ & = & ℙ( E_1 )+\sum_{i = 2}^{\infty}ℙ( E_{i} ) & \\ & = & ℙ( \Omega )+\sum_{i = 2}^{\infty}ℙ( \oslash ). & \text{(1.4)}text{}
\end{align}
$$

Subtracting $ℙ( \Omega )$ from both sides of
([1.4](#x10-16004r1.4)) gives

$$
\begin{align}
\sum_{i = 2}^{\infty}ℙ( \oslash ) & = & 0. & text{}
\end{align}
$$

From (A1), $ℙ( \oslash )geq 0$. If
$ℙ( \oslash )>0$ then
$\sum ⁡_{i = 1}^{\infty}ℙ( \oslash )=\inftyneq 0$. Thus, we
must have $ℙ( \oslash )=0$. $square$

Theorem 3 (Finite additivity of $ℙ$ for disjoint events)
For any $( \Omega , \calF , ℙ )$, if $E,Fin\calF$ with
$E\cap F=oslash$ then

$$
\begin{align}
ℙ( E \cup F ) & = & ℙ( E )+ℙ( F ). & \text{(1.5)}text{}
\end{align}
$$

Similarly, if $E_1,E_2,…⁡,E_{n}in\calF$ are disjoint then

$$
\begin{align}
ℙ(\cup _{i = 1}^n E_{i})=\sum_{i = 1}^nℙ( E_{i} )=ℙ( E_1 )+\dots +ℙ( E_{n} ). & & & \text{(1.6)}text{}
\end{align}
$$

Proof: We prove ([1.6](#x10-16008r1.6)), ([1.5](#x10-16007r1.5)) is the
case for $n=2$. Suppose that $E_1,…⁡,E_{n}$ are disjoint events and
let $E_{n + 1}=E_{n + 2}=\dots =oslash$. Then, as
$E\cap\oslash=oslash$ for any event $E$, $E_1,E_2,…⁡$ are a
collection of disjoint events with

$$
\begin{align}
\cup _{i = 1}^{\infty}E_{i} & = & E_1\cup\dots \cup E_{n}\cup\oslash\cup\oslash\cup\dots & \\ & = & E_1\cup\dots \cup E_{n}=\cup _{i = 1}^nE_{i}. & text{}
\end{align}
$$

Thus, by (A3) as the $E_{i}$s are disjoint,

$$
\begin{align}
ℙ(\cup _{i = 1}^n E_{i}) & = & \sum_{i = 1}^{\infty}ℙ( E_{i} )=ℙ( E_1 )+\dots +ℙ( E_{n} )+ℙ( E_{n + 1} )+ℙ( E_{n + 2} )\dots & \\ & = & ℙ( E_1 )+\dots +ℙ( E_{n} )+\sum_{i = n + 1}^{\infty}ℙ( E_{i} ) & \\ & = & \sum_{i = 1}^nℙ( E_{i} )+\sum_{i = n + 1}^{\infty}ℙ( \oslash ). & \text{(1.7)}text{}
\end{align}
$$

From Theorem [2](#x10-160012), $ℙ( \oslash )=0$ and so
([1.6](#x10-16008r1.6)) follows by substituting this into
([1.7](#x10-16010r1.7)). $square$

Example 9 Consider the experiment where we toss a coin a single time. We
let the sample space $\Omega=\set{ H , T }$ where
$H=\set{ \text{toss is a head} }$ and
$T=\set{ \text{toss is a tail} }$. For the event space we take
$\calF=𝒫( \Omega )=\set{ \oslash , \set{ H } , \set{ T } , \set{ H , T } }$.
From (A2) of Definition [9](#x10-150029) we have that
$ℙ( \set{ H , T } )=1$ whilst from Theorem
[2](#x10-160012) we have $ℙ( \oslash )=0$. As
$\set{ H }\cap\set{ T }=oslash$ then from Theorem
[3](#x10-160063) we have that

$$
\begin{align}
ℙ( \set{ H } \cup \set{ T } ) & = & ℙ( \set{ H } )+ℙ( \set{ T } ). & \text{(1.8)}text{}
\end{align}
$$

As $\set{ H }\cup\set{ T }=\Omega$ it then follows
from equation ([1.8](#x10-16012r1.8)) that

$$
\begin{align}
ℙ( \set{ H } )+ℙ( \set{ T } ) & = & 1. & \text{(1.9)}text{}
\end{align}
$$

From (A1) of Definition [9](#x10-150029),
$ℙ( \set{ H } )geq 0$ and
$ℙ( \set{ T } )geq 0$. So, any specification of
$ℙ( \set{ H } )=p$ where $p\in\left[ 0 , 1 right]$
with, from equation ([1.9](#x10-16013r1.9)),
$ℙ( \set{ T } )=1-p$ is a valid probability measure
on $( \Omega , \calF )$. If, additionally we assert that the coin
is fair so that
$ℙ( \set{ H } )=ℙ( \set{ T } )$
then we must take $p=frac{1}{2}$.

Corollary 1 (Probability of complements)
For any $( \Omega , \calF , ℙ )$ and $Ein\calF$

$$
\begin{align}
ℙ( E^c ) & = & 1-ℙ( E ). & \text{(1.10)}text{}
\end{align}
$$

Proof: From Definition [7](#x10-140017), as $E\in\calF$ then $E^cin\calF$
with $E\cup E^c=\Omega$ so that, from (A2) of Definition
[9](#x10-150029),

$$
\begin{align}
ℙ( E \cup E^c )=ℙ( \Omega )=1. & & & \text{(1.11)}text{}
\end{align}
$$

Additionally, $E\cap E^c=oslash$ so that $E$, $E^c$ are disjoint
events. Thus, from ([1.5](#x10-16007r1.5)) of Theorem [3](#x10-160063),

$$
\begin{align}
ℙ( E \cup E^c ) & = & ℙ( E )+ℙ( E^c ) & \text{(1.12)} \\ 1 & = & ℙ( E )+ℙ( E^c ) & \text{(1.13)}text{}
\end{align}
$$

where ([1.13](#x10-16017r1.13)) follows by substituting
([1.11](#x10-16016r1.11)) into ([1.12](#x10-16017r1.12)). Rearranging
([1.13](#x10-16017r1.13)) gives ([1.10](#x10-16015r1.10)). $square$

Corollary 2 (Probabilities are between zero and one)
For any $( \Omega , \calF , ℙ )$ and $Ein\calF$

$$
\begin{align}
0\leqℙ( E )\leq 1. & & & \text{(1.14)}text{}
\end{align}
$$

Thus, $ℙ:\calF\rightarrow\left[ 0 , 1 right]$.

Proof: From (A1) of Definition [9](#x10-150029),
$ℙ( E )\geq 0$ and $ℙ( E^c )geq 0$. Thus,
applying the latter inequality to ([1.10](#x10-16015r1.10)) of Corollary
[1](#x10-160141) gives $1-ℙ( E )geq 0$ so that
$ℙ( E )\leq 1$. $square$

Corollary 3 (Partition rule)
For any $( \Omega , \calF , ℙ )$ and $E,Fin\calF$

$$
\begin{align}
ℙ( F ) & = & ℙ( F \cap E )+ℙ( F \cap E^c ). & \text{(1.15)}text{}
\end{align}
$$

Proof: Problem Sheet Exercise. $square$

Corollary 4 (Inclusion-exclusion rule)
For any $( \Omega , \calF , ℙ )$ and $E,Fin\calF$

$$
\begin{align}
ℙ( E \cup F ) & = & ℙ( E )+ℙ( F )-ℙ( E \cap F ). & \text{(1.16)}text{}
\end{align}
$$

Proof: Problem Sheet Exercise. $square$

Corollary 5 (Containment rule)
For any $( \Omega , \calF , ℙ )$ and $E\subset Fin\calF$

$$
\begin{align}
ℙ( F ) & = & ℙ( E )+ℙ( F \cap E^c ) & \text{(1.17)}text{}
\end{align}
$$

so that

$$
\begin{align}
ℙ( F ) & \geq & ℙ( E ). & \text{(1.18)}text{}
\end{align}
$$

Proof: As $E\subset F$ then $F\cap E=E$: see Figure [1.5](#x10-160275).

![PIC](MA10211_all-9.png)

Figure 1.5:If $E\subset F$ then $F\cap E=E$.

Substituting this into ([1.15](#x10-16021r1.15)) of Corollary
[3](#x10-160203) gives ([1.17](#x10-16025r1.17)). From (A1) of
Definition [9](#x10-150029) $ℙ( F \cap E^c )geq 0$. Using
this in ([1.17](#x10-16025r1.17)) immediately gives
([1.18](#x10-16026r1.18)). $square$

Example 10 In a game of Cluedo, a murder has been committed by a single
person with a single weapon. We have narrowed the choice of murderer and
the choice of weapon down to three possible choices each:

- Murderer: Colonel Mustard (M), Professor Plum (P), Miss Scarlett (S)
- Weapon: Candlestick (C), Lead Pipe (L), Rope (R)

Our sample space is thus

$$
\begin{align}
\Omega & = & \set{ \set{ M , C } , \set{ M , L } , \set{ M , R } , \set{ P , C } , \set{ P , L } , \set{ P , R } , \set{ S , C } , \set{ S , L } , \set{ S , R } }. & text{}
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
$ℙ( \set{ M , C } )=frac{4}{2 7}$ and
$ℙ( \set{ S , C } )=frac{1}{2 7}$.

1. 

Find the probability the Colonel Mustard committed the murder.

Let $M$ denote the event that Mustard committed the murder then
$M=\set{ M , C }\cup\set{ M , L }\cup\set{ M , R }$,
the union of three disjoint events. Thus, from Theorem [3](#x10-160063),

$$
\begin{align}
ℙ( M ) & = & ℙ( \set{ M , C } )+ℙ( \set{ M , L } )+ℙ( \set{ M , R } ) & \text{(1.19)} \\ & = & \frac{4}{2 7}+\frac{4}{2 7}+\frac{4}{2 7}=\frac{1 2}{2 7}. & text{}
\end{align}
$$

2. 

Find the probability that Professor Plum or Colonel Mustard did it.

In a similar way to the previous part, using Theorem [3](#x10-160063),

$$
\begin{align}
ℙ( P ) & = & ℙ( \set{ P , C } )+ℙ( \set{ P , L } )+ℙ( \set{ P , R } ) & \\ & = & \frac{4}{2 7}+\frac{4}{2 7}+\frac{4}{2 7}=\frac{1 2}{2 7}. & text{}
\end{align}
$$

Now, the murder has been committed by a single person and so
$M\cap P=oslash$: they are disjoint events. Once again we can utilise
Theorem [3](#x10-160063) to find

$$
\begin{align}
ℙ( M \cup P )=ℙ( M )+ℙ( P )=\frac{1 2}{2 7}+\frac{1 2}{2 7}=\frac{2 4}{2 7}. & & & text{}
\end{align}
$$

3. 

Find the probability that Colonel Mustard is innocent.

Note that $M^c$ corresponds to Colonel Mustard being innocent. Using
Corollary [1](#x10-160141) we have

$$
\begin{align}
ℙ( M^c )=1-ℙ( M )=1-\frac{1 2}{2 7}=\frac{1 5}{2 7}. & & & text{}
\end{align}
$$

4. 

Calculate the probability that Mustard is the murderer, or that rope was
used.

Firstly we calculate the probability that rope, $R$, was the weapon
used.

$$
\begin{align}
ℙ( R ) & = & ℙ( \set{ M , R } )+ℙ( \set{ P , R } )+ℙ( \set{ S , R } ) & \text{(1.20)} \\ & = & \frac{4}{2 7}+\frac{4}{2 7}+\frac{1}{2 7}=\frac{9}{2 7}. & text{}
\end{align}
$$

As Mustard could have committed the murder using rope, these are not
disjoint events and so Theorem [3](#x10-160063) does not apply and we
must instead use the inclusion-exclusion rule, Corollary
[4](#x10-160224), to find

$$
\begin{align}
ℙ( M \cup R ) & = & ℙ( M )+ℙ( R )-ℙ( M \cap R ) & \text{(1.21)} \\ & = & \frac{1 2}{2 7}+\frac{9}{2 7}-\frac{4}{2 7}=\frac{1 7}{2 7}. & text{}
\end{align}
$$

Notice that we can see here the validity of the inclusion-exclusion
rule. In adding $ℙ( M )$ to $ℙ( R )$ together
then, from equations ([1.19](#x10-16033r1.19)) and
([1.20](#x10-16040r1.20)), we double-count
$ℙ( M \cap R )=ℙ( \set{ M , R } )$ and
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
For any $( \Omega , \calF , ℙ )$ and events
$E_1,E_2,…⁡,E_{n}in\calF$,

$$
\begin{align}
ℙ(\cup _{i = 1}^n E_{i})\leq\sum_{i = 1}^nℙ( E_{i} ),ℙ(\cap _{i = 1}^n E_{i})\geq 1-\sum_{i = 1}^nℙ( E_{i}^c ). & & & text{}
\end{align}
$$

The results also hold for infinite sums, unions, intersections and
events $E_1,E_2,…⁡$.

Proof: We use proof by induction to prove the finite case. Let
$P( k )$ be the statement that

$$
\begin{align}
ℙ(\cup _{i = 1}^k E_{i}) & \leq & \sum_{i = 1}^kℙ( E_{i} ). & text{}
\end{align}
$$

The case $P( 1 )$ is trivially true
($ℙ( E_1 )\leqℙ( E_1 )$). Assume that
$P( k )$ is true. Then by the inclusion-exclusion rule,
Corollary [5](#x10-160245),

$$
\begin{align}
ℙ(\cup _{i = 1}^{k + 1} E_{i}) & = & ℙ(\cup _{i = 1}^k E_{i})+ℙ( E_{k + 1} )-ℙ((\cup _{i = 1}^k E_{i}) \cap E_{k + 1}) & \\ & \leq & ℙ(\cup _{i = 1}^k E_{i})+ℙ( E_{k + 1} )\text{(by (A1), }ℙ( E )\geq 0\text{ for any }E\in\calF\text{)} & \\ & \leq & \sum_{i = 1}^kℙ( E_{i} )+ℙ( E_{k + 1} )\text{(since }P( k )\text{ is assumed true)} & \\ & = & \sum_{i = 1}^{k + 1}ℙ( E_{i} ). & text{}
\end{align}
$$

Thus, if $P( k )$ true, so is $P( k + 1 )$. Since
$P( 1 )$ is true, it follows that the result holds for all
$ℤ^{+}$. Now using De Morgan's Laws for finite collections of events,
from equation ([1.1](nose1.htm#x9-12006r1.1)) it follows that
$(\cap ⁡)_{i = 1}^nE_{i}=(((\cup ⁡)_{i = 1}^n E_{i}^c))^c$
so that

$$
\begin{align}
ℙ(\cap _{i = 1}^n E_{i}) & = & ℙ(((\cup _{i = 1}^n E_{i}^c))^c) & \\ & = & 1-ℙ(\cup _{i = 1}^n E_{i}^c)\text{(since }ℙ( E^c )=1-ℙ( E )\text{ for any }E\in\calF\text{)} & \\ & \geq & 1-\sum_{i = 1}^nℙ( E_{i}^c ) & text{}
\end{align}
$$

by the first inequality. $square$

#### 1.2.4 Specifying probabilities

As we noted in Section [1.1.1](nose1.htm#x9-90001), in this course we
shall be concerned with sample spaces that are countable so that they
are either finite,
$\Omega=\set{ (\omega )_1 , … ⁡ , (\omega )_{n} }$,
or countably infinite,
$\Omega=\set{ (\omega )_1 , (\omega )_2 , … ⁡ }$.
In this case we can give a general method for specifying a probability
measure $ℙ$ on $( \Omega , \calF )$ which satisfies Kolmogorov's
axioms.

Theorem 5 (Specifying probabilities for a countable sample space)
Let
$\Omega=\set{ (\omega )_1 , … ⁡ , (\omega )_{n} }$
be a finite set and $\calF$ any event space of \subset s of $\Omega$. Let
$p_1,…⁡,p_{n}$ be non-negative numbers that sum to one. For any event
$E\in\calF$ define $ℙ( E )$ by

$$
\begin{align}
ℙ( E ) & = & \underset{i : (\omega )_{i} \in E}{\sum}p_{i} & \text{(1.22)}text{}
\end{align}
$$

where the sum over an empty set is defined to be zero. Then $ℙ$ is a
probability measure on $( \Omega , \calF )$. This remains true if
$\Omega=\set{ (\omega )_1 , (\omega )_2 , … ⁡ }$
with corresponding non-negative numbers $p_1,p_2,…⁡$ which sum to
one.

Thus, if we specify $ℙ( (\omega )_{i} )=p_{i}$ for
each $i$ where each $p_{i}geq 0$ and the sum of the $p_{i}$s is one
then the probability of any event $E$ can be found by adding the
probabilities $p_{i}$ of all outcomes $(\omega )_{i}$ which
are contained in $E$.

Example 11 Suppose we consider rolling a die with
$\Omega=\set{ 1 , 2 , 3 , 4 , 5 , 6 }$ and set

$$
\begin{align}
ℙ( \set{ \text{score on the die is }i } )=ℙ( \set{ i } )=\frac{1}{6} & & & text{}
\end{align}
$$

for each $i=1,…⁡,6$ and for any event $E$ in $𝒫( \Omega )$
set $ℙ( E )$ as in equation ([1.22](#x10-17002r1.22)) then
$ℙ$ is a probability measure on
$( \Omega , 𝒫 ( \Omega ) )$. Thus, for example,

$$
\begin{align}
ℙ( \set{ \text{score is even} } )=ℙ( \set{ 2 , 4 , 6 } ) & = & ℙ( \set{ 2 } )+ℙ( \set{ 4 } )+ℙ( \set{ 6 } )=\frac{3}{6}; & \\ ℙ( \set{ \text{score is less than 3} } )=ℙ( \set{ 1 , 2 } ) & = & ℙ( \set{ 1 } )+ℙ( \set{ 2 } )=\frac{2}{6}. & text{}
\end{align}
$$

Proof of Theorem [5](#x10-170015): We will prove the case for $\Omega$
finite by verifying that axioms (A1)-(A3) of Definition [9](#x10-150029)
hold. As each $p_{i}$ is non-negative then, from equation
([1.22](#x10-17002r1.22)), $ℙ( E )geq 0$ and so (A1) holds.
Now,

$$
\begin{align}
ℙ( \Omega )=\underset{i : (\omega )_{i} \in \Omega}{\sum}p_{i}=\sum_{i = 1}^np_{i}=1 & & & text{}
\end{align}
$$

so that (A2) holds. For (A3), as $\Omega$ is finite then we only need to
consider finite unions. Let $E_1,…⁡,E_{k}$ be pairwise disjoint
events. Thus, for $i\neq j$ $E_{i}\cap E_{j}=oslash$ so that if
$\omega \in E_{i}$ then $\omega notinE_{j}$. We have that

$$
\begin{align}
ℙ(\cup _{i = 1}^k E_{i}) & = & \underset{j : (\omega )_{j} \in \cup _{i = 1}^k E_{i}}{\sum}p_{j}( \text{from equation (}\text{1.22}\text{)} ) & \\ & = & \sum_{i = 1}^k(\underset{j : (\omega )_{j} \in E_{i}}{\sum} p_{j})( \text{as each }(\omega )_{j}\text{ is only in one of the }E_{i}\text{s} ) & \\ & = & \sum_{i = 1}^kℙ( E_{i} )( \text{from equation (}\text{1.22}\text{)} ) & text{}
\end{align}
$$

and so (A3) holds. $square$

Notice that Theorem [5](#x10-170015) only requires the $p_{i}$s to be
non-negative and to sum to one, it does not determine the actual values
of the $p_{i}$s and there are an infinite number of ways of choosing the
$p_{i}$s for a particular experiment. For example in the die-rolling
example of Example [11](#x10-1700311), the specification
$p_1=\frac{1}{1 2}$, $p_2=\frac{1}{1 2}$, $p_3=frac{1}{1 2}$,
$p_4=\frac{1}{4}$, $p_5=\frac{1}{4}$ and $p_6=frac{1}{4}$ would
be a valid probability measure. In the next chapter we study one way of
defining the $p_{i}$: the classical definition of probability via the
notion of equally likely events.

[5](#fn5x1-bk)[Giuseppe Vitali
(1875-1932)](https://en.wikipedia.org/wiki/Giuseppe_Vitali). His 1905
paper provided the first example of a non-measurable \subset of real
numbers.

[6](#fn6x1-bk)[Andrey Kolmogorov
(1903-1987)](https://en.wikipedia.org/wiki/Andrey_Kolmogorov). His 1933
book Foundations of the Theory of Probability laid the framework for the
axiomatic foundations of probability theory.

[7](#fn7x1-bk)Note that these non-negative numbers sum to one. In
Section [1.2.4](#x10-170004) we will demonstrate that this demonstrates
that we have a probability measure on
$( \Omega , 𝒫 ( \Omega ) )$.

[8](#fn8x1-bk)[George Boole
(1815-1864)](https://en.wikipedia.org/wiki/George_Boole).

\
\
