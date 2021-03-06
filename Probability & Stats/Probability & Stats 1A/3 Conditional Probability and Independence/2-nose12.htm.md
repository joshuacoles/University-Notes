\


### 3.6 Independence of many events

We now consider independence of many events. If $n$ events
$E_{1},…⁡,E_{n}$ are independent then it is natural to assume that

$$
\begin{align}
ℙ\left( E_{1} \cap \dots  \cap E_{n} \right) & = & \prod_{i = 1}^{n}ℙ\left( E_{i} \right). & text{}
\end{align}
$$

Furthermore, if $E_{1},…⁡,E_{n}$ are independent then this product rule
should hold for the intersection of any two of them, any three of them,
and so on. This leads us to the following definition.

Definition 14 (Independence of many events)
The collection of events $E_{1},…⁡,E_{n}$ are said to be independent if

$$
\begin{align}
ℙ\left( E_{i_{1}} \cap E_{i_{2}} \cap \dots  \cap E_{i_{k}} \right)=\prod_{j = 1}^{k}ℙ\left( E_{i_{j}} \right)=ℙ\left( E_{i_{1}} \right)ℙ\left( E_{i_{2}} \right)\times\dots \timesℙ\left( E_{i_{k}} \right) & & & text{}
\end{align}
$$

for all $i_{1}<i_{2}<\dots <i_{k}$, $2\leq kleq n$ and dependent
otherwise.

Example 33 $E_{1}$, $E_{2}$, $E_{3}$ are independent events if all of
the following equalities hold:

$$
\begin{align}
ℙ\left( E_{1} \cap E_{2} \right) & = & ℙ\left( E_{1} \right)ℙ\left( E_{2} \right)\left( \text{}k=2\text{, }i_{1}=1\text{, }i_{2}=2\text{} \right) & \text{} \\ ℙ\left( E_{1} \cap E_{3} \right) & = & ℙ\left( E_{1} \right)ℙ\left( E_{3} \right)\left( \text{}k=2\text{, }i_{1}=1\text{, }i_{2}=3\text{} \right) & \text{} \\ ℙ\left( E_{2} \cap E_{3} \right) & = & ℙ\left( E_{2} \right)ℙ\left( E_{3} \right)\left( \text{}k=2\text{, }i_{1}=2\text{, }i_{2}=3\text{} \right) & \text{} \\ ℙ\left( E_{1} \cap E_{2} \cap E_{3} \right) & = & ℙ\left( E_{1} \right)ℙ\left( E_{2} \right)ℙ\left( E_{3} \right)\left( \text{}k=3\text{, }i_{1}=1\text{, }i_{2}=2\text{, }i_{3}=3\text{} \right) & text{}
\end{align}
$$

Example 34 We return to Example [31](nose11.htm#x21-3300731) where we
considered tossing a fair coin twice. We showed that events
$E=\left\{ \text{head on first toss} \right}$ and
$F=\left\{ \text{head on second toss} \right}$ were independent.
Consider a third event
$G=\left\{ \text{both tosses show the same side} \right}$ then
$ℙ\left( G \right)=ℙ\left( H H \right)+ℙ\left( T T right)=1/2$,
$ℙ\left( E \cap G \right)=ℙ\left( H H right)=1/4$ and
$ℙ\left( F \cap G \right)=ℙ\left( H H right)=1/4$. Thus,

$$
\begin{align}
ℙ\left( E \cap G \right)=ℙ\left( E \right)ℙ\left( G \right),ℙ\left( F \cap G \right)=ℙ\left( F \right)ℙ\left( G \right) & & & text{}
\end{align}
$$

so that $E$ and $G$ are also independent as are $F$ and $G$ so that the
events are pairwise independent. However,

$$
\begin{align}
ℙ\left( E \cap F \cap G \right)=ℙ\left( H H \right)=\frac{1}{4}\neq\frac{1}{8}=ℙ\left( E \right)ℙ\left( F \right)ℙ\left( G \right) & & & text{}
\end{align}
$$

so that $E$, $F$ and $G$ are not independent. Note that
$ℙ\left( G \left| E \cap F \right)=1$: $G$ and $EcapF$ are not
independent (knowing the result of each toss tells us the pair!)

Theorem 13 (Independence of complements, intersection and unions)
If the collection of events $E_{1},…⁡,E_{n}$ are independent, then

(a) 

$E_{1}^{c},E_{2},…⁡,E_{n}$ are independent,

(b) 

$E_{1}capE_{2},E_{3},…⁡,E_{n}$ are independent,

(c) 

$E_{1}cupE_{2},E_{3},…⁡,E_{n}$ are independent.

Proof: In each case we must show that the probability of the
intersection of any subcollection of the events is the product of the
probabilities for each event. This follows immediately for any
subcollection that, respectively, doesn't include the events
$E_{1}^{c}$, $E_{1}\capE_{2}$, $E_{1}cupE_{2}$ and so we need only
demonstrate this is true for subcollections including these events. For
part (a), for all $i_{1}=1<i_{2}<dots <i_{k}$ we have

$$
\begin{align}
ℙ\left( E_{1}^{c} \cap E_{i_{2}} \cap \dots  \cap E_{i_{k}} \right) & = & ℙ\left( E_{i_{2}} \cap \dots  \cap E_{i_{k}} \right)-ℙ\left( E_{1} \cap E_{i_{2}} \cap \dots  \cap E_{i_{k}} \right) & \text{} \\ & = & ℙ\left( E_{i_{2}} \right)\dots ℙ\left( E_{i_{k}} \right)-ℙ\left( E_{1} \right)ℙ\left( E_{i_{2}} \right)\dots ℙ\left( E_{i_{k}} \right) & \text{} \\ & = & \left( 1 - ℙ \left( E_{1} \right) \right)ℙ\left( E_{i_{2}} \right)\dots ℙ\left( E_{i_{k}} \right) & \text{} \\ & = & ℙ\left( E_{1}^{c} \right)ℙ\left( E_{i_{2}} \right)\dots ℙ\left( E_{i_{k}} \right) & text{}
\end{align}
$$

giving independence. For part (b), for all $2<i_{2}<dots <i_{k}$ we
have

$$
\begin{align}
ℙ\left( \left( E_{1} \cap E_{2} \right) \cap E_{i_{2}} \cap \dots  \cap E_{i_{k}} \right) & = & ℙ\left( E_{1} \right)ℙ\left( E_{2} \right)ℙ\left( E_{i_{2}} \right)\dots ℙ\left( E_{i_{k}} \right) & \text{} \\ & = & ℙ\left( E_{1} \cap E_{2} \right)ℙ\left( E_{i_{2}} \right)\dots ℙ\left( E_{i_{k}} \right) & text{}
\end{align}
$$

giving independence. For part (c), from part (a),
$E_{1}^{c},E_{2}^{c},E_{3},…⁡,E_{n}$ are independent and so, from part
(b), $E_{1}^{c}capE_{2}^{c},E_{3},…⁡,E_{n}$ are independent. From De
Morgan's Laws, see Theorem [1](nose1.htm#x9-110241),
$E_{1}^{c}\capE_{2}^{c}=\left(\left( E_{1} \cup E_{2} \right)right)^{c}$
so that
$\left(\left( E_{1} \cup E_{2} \right)right)^{c},E_{3},…⁡,E_{n}$ are
independent and thus, from part (a), $E_{1}cupE_{2},E_{3},…⁡,E_{n}$ are
independent. $square$

Notes:

1.  

These properties can be used repeatedly. For example, if
$E_{1},…⁡,E_{n}$ are independent then, for example
$E_{1}^{c},E_{2}^{c},…⁡,E_{n}^{c}$ are independent as are
$\left( E_{1} \cup E_{2} \right)\capE_{3},E_{4}^{c}cupE_{5},E_{6}^{c},…⁡,E_{n}$.

2.  

Definition [14](#x22-3400214) and Theorem [13](#x22-3400913) also hold
for countably infinite collections of events. For $E_{1},E_{2},…⁡$ to be
independent we require that all finite subcollection of the events must
be independent.

Example 35 Three missiles are fired at a target and hit independently
with probabilities $0.7$, $0.8$, $0.9$, respectively. What is the
probability that the target is hit?

Let $H_{i}$ be the event that missile $i$ hits the target. Then

$$
\begin{align}
ℙ\left( H_{1} \right)=0.7, & ℙ\left( H_{2} \right)=0.8, & ℙ\left( H_{3} \right)=0.9 & text{}
\end{align}
$$

and $H_{1}$, $H_{2}$, $H_{3}$ are independent events. Let $T$ be the
event that the target is hit by at least one missile so that $T^{c}$ is
the event the target is missed by all missiles. Then

$$
\begin{align}
ℙ\left( T \right) & = & 1-ℙ\left( T^{c} \right) & \text{} \\ & = & 1-ℙ\left( H_{1}^{c} \cap H_{2}^{c} \cap H_{3}^{c} \right) & \text{} \\ & = & 1-ℙ\left( H_{1}^{c} \right)ℙ\left( H_{2}^{c} \right)ℙ\left( H_{3}^{c} \right)\text{(as }H_{1}^{c}\text{, }H_{2}^{c}\text{, }H_{3}^{c}\text{ are independent)} & \text{} \\ & = & 1-\left( 0 . 3 \right)\left( 0 . 2 \right)\left( 0 . 1 \right)\text{(as }ℙ\left( H_{i}^{c} \right)=1-ℙ\left( H_{i} \right)\text{)} & \text{} \\ & = & 0.994. & text{}
\end{align}
$$

Example 36 The electric circuit shown in Figure [3.1](#x22-340181) is
made up of switches which are independently closed or open with
probability $p$ and $1-p$, respectively.

![PIC](MA10211_all-15.png)

Figure 3.1:An electric circuit: switches are independently closed with
probability $p$

If a signal is fed into the input, what is the probability it is
transmitted to the output?

Let $E_{i}$ be event switch at location $i$ ($i=1,2,3,4$) is closed.

$$
\begin{align}
ℙ\left( \left\{ \text{transmitted} \right\} \right) & = & ℙ\left( \left( E_{1} \cap E_{2} \right) \cup \left( E_{3} \cap E_{4} \right) \right) & \text{} \\ & = & ℙ\left( E_{1} \cap E_{2} \right)+ℙ\left( E_{3} \cap E_{4} \right)-ℙ\left( \left( E_{1} \cap E_{2} \right) \cap \left( E_{3} \cap E_{4} \right) \right) & \text{(3.15)}\text{}\text{} \\ & = & ℙ\left( E_{1} \right)ℙ\left( E_{2} \right)+ℙ\left( E_{3} \right)ℙ\left( E_{4} \right)-ℙ\left( E_{1} \right)ℙ\left( E_{2} \right)ℙ\left( E_{3} \right)ℙ\left( E_{4} \right) & \text{(3.16)}\text{}\text{} \\ & = & p^{2}+p^{2}-p^{4}=p^{2}\left( 2 - p^{2} \right) & text{}
\end{align}
$$

where equation ([3.16](#x22-34019r3.16)) follows from
([3.15](#x22-34019r3.15)) using the independence of $E_{1}$, $E_{2}$,
$E_{3}$ and $E_{4}$.

\
\
