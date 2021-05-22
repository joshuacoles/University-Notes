### 1.1 Set theory

#### 1.1.1 Sample spaces and events

Definition 1 (Sample space, sample point)
The set, $Omega$, of all possible outcomes of an experiment is called
the sample space. Each individual outcome, $omega$, is called a sample
point. The sample points $omega$ are the elements of the sample space.
Equivalently, $\omega$ is a member of the set $Omega$, written
$\omega\inOmega$.

We classify sample spaces into two types:

-   if the sample points can be put into one-to-one correspondence with
    a subset of the positive integers,
    $ℤ^{+}=\left\{ 1 , 2 , 3 , … ⁡ \right\}$ then the sample space is
    countable,
-   if the sample space is not countable then it is uncountable.

Example 1 (Examples of different types of sample spaces)

1.  

Suppose that we toss a coin $n$ times and count the number of heads
obtained. The sample space $\Omega=\left\{ 0 , 1 , … ⁡ , n \right}$
contains a finite number of elements and thus is countable. e.g. let
$\left(\omegaright)_{i}$ denote the outcome that $i-1$ heads are
obtained then
$\Omega=\left\{ \left(\omega\right)_{1} , … ⁡ , \left(\omega\right)_{n + 1} \right}$.

2.  

Suppose that we toss a coin repeatedly and count the number of tosses up
to and including that when the first head is obtained. The sample space
$\Omega=\left\{ 1 , 2 , 3 , … ⁡ \right}$ contains an infinite number of
elements but is countable (often termed countably infinite). e.g. let
$\left(\omegaright)_{i}$ denote the outcome that the first $i-1$ tosses
were tails and the $i$th toss was a head then
$\Omega=\left\{ \left(\omega\right)_{1} , \left(\omega\right)_{2} , \left(\omega\right)_{3} , … ⁡ \right}$.

3.  

Suppose we consider the reaction time to a certain stimulus. The set of
outcomes is then any positive real number so that
$\Omega=\left( 0 , \infty right)$. This set is not countable.

In this course we shall primarily deal with sample spaces that are
countable (essentially, discrete); next semester you'll study sample
spaces that are uncountable (essentially, continuous).

Definition 2 (Event)
An event is a collection of possible outcomes of an experiment,
equivalently a set of sample points.

Let $E$ be an event. Then $E$ is a subset of the sample space $Omega$,
written $E\subsetOmega$. Note that we include the possibility that $E$
is the whole sample space. If the outcome of the experiment is $omega$
and $\omega$ belongs to the event $E$, that is $\omegain E$, we say
that the event $E$ has occurred.

Example 2 Consider the experiment of rolling a (six-sided) die. Then the
possible outcomes, or sample points, are the scores $1$, $2$, $3$, $4$,
$5$, and $6$ so that the sample space is
$\Omega=\left\{ 1 , 2 , 3 , 4 , 5 , 6 \right}$. Examples of events
include:

(a) 

$E_{1}=\left\{ \text{score is an even number} \right\}=\left\{ 2 , 4 , 6 \right}$.

(b) 

$E_{2}=\left\{ \text{score is bigger than }4\text{} \right\}=\left\{ 5 , 6 \right}$.

(c) 

$E_{3}=\left\{ \text{score is }1\text{} \right\}=\left\{ 1 \right}$.

If the outcome of the die roll is a $6$, that is $omega=6$, then the
event $E_{1}$ occurs (as $6in E_{1}$), the event $E_{2}$ occurs (as
$6\in E_{2}$), but the event $E_{3}$ doesn't occur (as $6notinE_{3}$).

#### 1.1.2 Relations of set theory

Definition 3 (Subset and equal set)

1.  

An event[1](#fn1x1) $E$ is a subset of event $F$, written $EsubsetF$,
if, whenever $E$ occurs $F$ also occurs. Thus if $EsubsetF$ then for
any $\omega\in E$ we have $\omegain F$.

2.  

Events $E$ and $F$ are equal, written $E=F$, if and only if both
$E\subsetF$ and $F\subsetE$. Thus, $E=F\LeftrightarrowEsubsetF$ and
$FsubsetE$.

We can use Venn diagrams to provide a pictorial representation for
events.

![PIC](MA10211_all-1.png)

Figure 1.1:Event $E$ is a subset of event $F$ if, whenever $E$ occurs
$F$ also occurs. Note that in addition to $EsubsetF$ we have
$E\subset\Omega$ and $F\subsetOmega$.

For example, Figure [1.1](#x9-100051) represents that $EsubsetF$. Note
that any event is a subset of $Omega$ and so we have that
$E\subset\Omega$ and $F\subsetOmega$.

Definition 4 (Certain and impossible events; the empty set)
The sample space $Omega$ is termed the certain event as it must occur.
The subset of $Omega$ which contains no outcomes is the empty set,
written $\oslash$ so that $\oslash=\left\{ \right\}$. As $oslash$
cannot occur it is termed the impossible event.

Example 3 Suppose we consider rolling the die as in Example
[2](#x9-90072) and consider the event
$E_{4}=\left\{ \text{score is a negative number} \right}$. Then there
are no outcomes where $E_{4}$ occurs so that $E_{4}=\left\{ \right}$
and is thus the impossible event.

Consider an arbitrary event $E$. As $oslash$ contains no sample points
then it is logically correct to say that any point belonging to
$\oslash$ belongs to $E$ so that $\oslashsubsetE$. Consequently, for
any event $E$ we have $\oslash\subsetE\subsetOmega$.

#### 1.1.3 Operations of set theory

Definition 5 (Elementary set operations)
Given any two events $E$ and $F$ we have the following elementary
operations:

1.  

The union of $E$ and $F$, written $EcupF$, is the event which contains
all of the outcomes that belong to either $E$ or $F$ or both so that
$E\cupF=\left\{ \omega : \omega \in E \text{ or } \omega \in F \right}$.

2.  

The intersection of $E$ and $F$, written $EcapF$, is the event which
contains all of the outcomes that belong to both $E$ and $F$ so that
$E\capF=\left\{ \omega : \omega \in E \text{ and } \omega \in F \right}$.

3.  

The difference of $E$ and $F$, written $Ebackslash F$, is the event
which contains all the outcomes that belong to $E$ but not to $F$ so
that
$E\backslash F=\left\{ \omega : \omega \in E \text{ and } \omega \notin F \right}$.

4.  

The complement of $E$, written $E^{c}$, is the event which contains all
of the outcomes which do not belong to $E$ so that
$E^{c}=\left\{ \omega : \omega \notin E \right}$.

Notes:

-   Figure [1.2](#x9-110082)(a) shows the union of $E$ and $F$.

    ![PIC](MA10211_all-3.png)

    (a) The union of events $E$ and $F$, $EcupF$.

    ![PIC](MA10211_all-2.png)

    (b) The intersection of events $E$ and $F$, $EcapF$.

    Figure 1.2:The union and intersection of events $E$ and $F$.
    $EcupF$ occurs whenever at least one (and possibly both) of $E$ and
    $F$ occur. $EcapF$ occurs whenever both $E$ and $F$ occur
    simultaneously.

    For any event $E$, $\Omega\cupE=\Omega$ and $\oslashcupE=E$.

-   Figure [1.2](#x9-110082)(b) shows the intersection of $E$ and $F$.
    For any event $E$, $\Omega\capE=E$ and $\oslash\capE=oslash$.
-   Figure [1.3](#x9-110113)(a) shows the difference of $E$ and $F$.

    ![PIC](MA10211_all-6.png)

    (a) The difference of events $E$ and $F$, $Ebackslash F$.

    ![PIC](MA10211_all-4.png)

    (b) The complement of event $E$, $E^{c}$.

    Figure 1.3:The difference of events $E$ and $F$ and the complement
    of the event $E$. $Ebackslash F$ occurs whenever $E$ occurs but $F$
    doesn't occur whilst $E^{c}$, occurs precisely when $E$ doesn't
    occur.

    Note that $E\backslash F=EcapF^{c}$ and
    $E=\left( E \cap F \right)\cup\left( E \cap F^{c} right)$.

-   Figure [1.3](#x9-110113)(b) shows the complement of the event $E$.
    For any event $E$, $E^{c}=\Omegabackslash E$, that is everything in
    $Omega$ but not in $E$. It's simple to show that the following
    properties hold:

    1.  

    $\left(\left( E^{c} \right)right)^{c}=E$ (the complement of the
    complement of an event is the event).

    2.  

    $\left(\oslash\right)^{c}=Omega$ and
    $\left(\Omega\right)^{c}=oslash$ (the complement of the empty set
    is the sample space and vice versa).

    3.  

    $E\cupE^{c}=Omega$ (the sample space is the union of the events $E$
    and $E^{c}$).

    4.  

    $E\capE^{c}=oslash$ ($E$ and $E^{c}$ have no outcomes in common).

Example 4 Recall the die tossing example of Example [2](#x9-90072) so
that $\Omega=\left\{ 1 , 2 , 3 , 4 , 5 , 6 \right}$ and we defined the
events
$E_{1}=\left\{ \text{score is an even number} \right\}=\left\{ 2 , 4 , 6 \right}$,
$E_{2}=\left\{ \text{score is bigger than }4\text{} \right\}=\left\{ 5 , 6 \right}$,
and
$E_{3}=\left\{ \text{score is }1\text{} \right\}=\left\{ 1 \right}$.
Then:

1.  

$E_{1}\cupE_{2}=\left\{ 2 , 4 , 5 , 6 \right\}=\left\{ \text{score is an even number or bigger than }4\text{} \right}$

2.  

$E_{1}\capE_{2}=\left\{ 6 \right\}=\left\{ \text{score is an even number and bigger than }4\text{} \right}$

3.  

$E_{1}^{c}=\left\{ 1 , 3 , 5 \right\}=\left\{ \text{score is not an even number} \right\}=\left\{ \text{score is an odd number} \right}$.
From this we see that
$E_{1}\cupE_{1}^{c}=\Omega=\left\{ \text{score is an even or an odd number} \right}$
and
$E_{1}\capE_{1}^{c}=\oslash=\left\{ \text{score is an even and an odd number} \right}$

Definition 6 (Disjoint events)
Events $E$ and $F$ are disjoint or mutually exclusive if they cannot
both occur at the same time, that is $E\capF=oslash$.

Figure [1.4](#x9-110214) gives an example of disjoint events $E$ and
$F$.

![PIC](MA10211_all-7.png)

Figure 1.4:Events $E$ and $F$ are disjoint or mutually exclusive if they
cannot both occur at the same time.

Note that an equivalent statement to $E\capF=oslash$ for disjoint
events is that $EsubsetF^{c}$.[2](#fn2x1)

Example 5 Continuing Example [4](#x9-110164), $E_{2}$ and $E_{3}$ are
disjoint events as
$E_{2}\capE_{3}=\left\{ \right\}=\oslash=\left\{ \text{score is bigger than }4\text{ and score is }1\text{} \right}$.

We shall see in Section [1.2.2](nose2.htm#x10-150002) that disjoint
events play a fundamental role in calculating probabilities. In a
similar way to addition and multiplication, the elementary set
operations of Definition [5](#x9-110015) can be combined.

Theorem 1 (Laws of set theory)
For any three events $E$, $F$ and $G$ defined on a sample space $Omega$
the following relationships hold:

1.  

Commutative Laws

(a) 

$E\cupF=FcupE$,

(b) 

$E\capF=FcapE$;

2.  

Associative Laws

(a) 

$E\cup\left( F \cup G \right)=\left( E \cup F \right)cupG$,

(b) 

$E\cap\left( F \cap G \right)=\left( E \cap F \right)capG$;

3.  

Distributive Laws

(a) 

$\left( E \cap F \right)\cupG=\left( E \cup G \right)\cap\left( F \cup G right)$,

(b) 

$\left( E \cup F \right)\capG=\left( E \cap G \right)\cup\left( F \cap G right)$;

4.  

De Morgan's Laws[3](#fn3x1)

(a) 

$\left(\left( E \cup F \right)\right)^{c}=E^{c}capF^{c}$,

(b) 

$\left(\left( E \cap F \right)\right)^{c}=E^{c}cupF^{c}$.

Proof: We'll prove De Morgan's first law. From Definition
[3](#x9-100013),
$\left(\left( E \cup F \right)\right)^{c}=E^{c}capF^{c}$ if and only if
$\left(\left( E \cup F \right)\right)^{c}\subsetE^{c}capF^{c}$ and
$E^{c}\capF^{c}\subset\left(\left( E \cup F \right)right)^{c}$. To show
that $\left(\left( E \cup F \right)\right)^{c}\subsetE^{c}capF^{c}$ we
must show that for any
$\omega\in\left(\left( E \cup F \right)right)^{c}$ we have
$\omega\in E^{c}capF^{c}$. Using the definition of the complement of a
set, see Definition [5](#x9-110015), then

$$
\begin{align}
\omega\in\left(\left( E \cup F \right)\right)^{c} & \Rightarrow & \omega\notin\left( E \cup F \right) & \text{} \\ & \Rightarrow & \omega\notinE\text{ and }\omega\notinF & \text{} \\ & \Rightarrow & \omega\in E^{c}\text{ and }\omega\in F^{c} & \text{} \\ & \Rightarrow & \omega\in E^{c}\capF^{c} & text{}
\end{align}
$$

so that $\left(\left( E \cup F \right)\right)^{c}\subsetE^{c}capF^{c}$.
Now consider any $\omega\in E^{c}capF^{c}$. We have

$$
\begin{align}
\omega\in E^{c}\capF^{c} & \Rightarrow & \omega\in E^{c}\text{ and }\omega\in F^{c} & \text{} \\ & \Rightarrow & \omega\notinE\text{ and }\omega\notinF & \text{} \\ & \Rightarrow & \omega\notin\left( E \cup F \right) & \text{} \\ & \Rightarrow & \omega\in\left(\left( E \cup F \right)\right)^{c}. & text{}
\end{align}
$$

Thus, for any $\omega\in E^{c}capF^{c}$ we have
$\omega\in\left(\left( E \cup F \right)right)^{c}$ so that
$E^{c}\capF^{c}\subset\left(\left( E \cup F \right)right)^{c}$. Hence,
$\left(\left( E \cup F \right)\right)^{c}\subsetE^{c}capF^{c}$ and
$E^{c}\capF^{c}\subset\left(\left( E \cup F \right)right)^{c}$ giving
the result. $square$

#### 1.1.4 Extensions to collections of events

Note that from the Associative Laws, as
$E\cup\left( F \cup G \right)=\left( E \cup F \right)cupG$ and
$E\cap\left( F \cap G \right)=\left( E \cap F \right)capG$ then the
parenthesis don't matter. Thus, we write $E\cupFcupG$ for the event
that at least one of these events occur and $E\capFcapG$ that all three
events occur. We can extend this notion to both finite and countably
infinite collections of events.

Unions and intersections of collections of events

1.  

If $E_{1},…⁡,E_{n}$ is any finite collection of events defined on
$Omega$ then

$$
\begin{align}
\cup_{i = 1}^{n}E_{i}:=E_{1}\cupE_{2}\cup\dots \cupE_{n} & = & \left\{ \omega : \omega \in E_{i} \text{ for some } i \in \left\{ 1 , 2 , … ⁡ , n \right\} \right\} & \text{} \\ \cap_{i = 1}^{n}E_{i}:=E_{1}\capE_{2}\cap\dots \capE_{n} & = & \left\{ \omega : \omega \in E_{i} \text{ for all } i \in \left\{ 1 , 2 , … ⁡ , n \right\} \right\} & text{}
\end{align}
$$

2.  

If $E_{1},E_{2},…⁡,$ is any countably infinite collection of events
defined on $Omega$ then

$$
\begin{align}
\cup_{i = 1}^{\infty}E_{i}=E_{1}\cupE_{2}\cup\dots \cupE_{n}\cupE_{n + 1}\cup\dots  & = & \left\{ \omega : \omega \in E_{i} \text{ for some } i \in ℤ^{+} \right\} & \text{} \\ \cap_{i = 1}^{\infty}E_{i}=E_{1}\capE_{2}\cap\dots \capE_{n}\capE_{n + 1}\cap\dots  & = & \left\{ \omega : \omega \in E_{i} \text{ for all } i \in ℤ^{+} \right\} & text{}
\end{align}
$$

In a similar way the Distributive Laws and De Morgan's Laws can be
extended to many events. We only reference the latter here.

De Morgan's Laws for collections of events

1.  

If $E_{1},…⁡,E_{n}$ is any finite collection of events defined on
$Omega$ then

$$
\begin{align}
\left(\left(\cup_{i = 1}^{n} E_{i}\right)\right)^{c}=\cap_{i = 1}^{n}E_{i}^{c}, & & \left(\left(\cap_{i = 1}^{n} E_{i}\right)\right)^{c}=\cup_{i = 1}^{n}E_{i}^{c}. & \text{(1.1)}\text{}text{}
\end{align}
$$

2.  

If $E_{1},E_{2},…⁡,$ is any countably infinite collection of events
defined on $Omega$ then

$$
\begin{align}
\left(\left(\cup_{i = 1}^{\infty} E_{i}\right)\right)^{c}=\cap_{i = 1}^{\infty}E_{i}^{c},\left(\left(\cap_{i = 1}^{\infty} E_{i}\right)\right)^{c}=\cup_{i = 1}^{\infty}E_{i}^{c}. & & & \text{(1.2)}\text{}text{}
\end{align}
$$

Example 6 As in Example [1](#x9-90021), suppose that we toss a coin
repeatedly and count the number of tosses up to and including that when
the first head is obtained. Letting $\left(\omegaright)_{i}$ denote the
outcome that the first $i-1$ tosses were tails and the $i$th toss was a
head then
$\Omega=\left\{ \left(\omega\right)_{1} , \left(\omega\right)_{2} , \left(\omega\right)_{3} , … ⁡ \right}$.
Let
$E_{\text{even}}=\left\{ \text{first head occurs on an even toss} \right}$
then

$$
\begin{align}
E_{\text{even}}=\left(\omega\right)_{2}\cup\left(\omega\right)_{4}\cup\left(\omega\right)_{6}\cup\dots =\cup_{i = 1}^{\infty}\left(\omega\right)_{2 i}. & & & text{}
\end{align}
$$

Let
$E_{\text{odd}}=\left\{ \text{first head occurs on an odd toss} \right}$
then $E_{\text{odd}}=E_{text{even}}^{c}$ and so using De Morgan's Laws,
see equation ([1.2](#x9-12008r1.2)),

$$
\begin{align}
E_{\text{odd}}=E_{\text{even}}^{c}=\left(\left(\cup_{i = 1}^{\infty} \left(\omega\right)_{2 i}\right)\right)^{c}=\cap_{i = 1}^{\infty}\omega_{2 i}^{c}, & & & text{}
\end{align}
$$

that is the first head does not occur on the 2nd toss and it does not
occur on the 4th toss and it does not occur on the 6th toss and $…⁡$.
Note that as
$\omega_{2}^{c}=\left\{ \left(\omega\right)_{1} , \left(\omega\right)_{3} , \left(\omega\right)_{4} , \left(\omega\right)_{5} , … ⁡ \right}$,
$\omega_{4}^{c}=\left\{ \left(\omega\right)_{1} , \left(\omega\right)_{2} , \left(\omega\right)_{3} , \left(\omega\right)_{5} , … ⁡ \right}$
and so on then

$$
\begin{align}
E_{\text{odd}}=\cap_{i = 1}^{\infty}\omega_{2 i}^{c}=\cup_{i = 1}^{\infty}\left(\omega\right)_{2 i - 1}. & & & text{}
\end{align}
$$

Pairwise disjoint events (extension of Definition [6](#x9-110206) to
pairwise disjoint events.)

1.  

The events $E_{1},E_{2},…⁡,E_{n}$ are said to be disjoint or pairwise
disjoint or mutually exclusive if no two can simultaneously occur, that
is $E_{1},E_{2},…⁡,E_{n}$ are disjoint if and only if
$E_{i}\capE_{j}=\oslash$ for all $i,j=1,…⁡,n,ineq j$.

2.  

The events $E_{1},E_{2},…⁡$ are disjoint if and only if
$E_{i}\capE_{j}=oslash$ for all
$i,j\inℤ^{+}=\left\{ 1 , 2 , … ⁡ \right\},ineq j.$

Thus, for example, $E_{1},E_{2},E_{3}$ are disjoint if and only if

$$
\begin{align}
E_{1}\capE_{2}=\oslash\text{ and }E_{1}\capE_{3}=\oslash\text{ and }E_{2}\capE_{3}=\oslash. & & & text{}
\end{align}
$$

[1](#fn1x1-bk)In probability theory, the convention is to consider the
probability of an event rather than a set. As such we use the terms set
and event interchangeably.

[2](#fn2x1-bk)Recall that for any events $E$ and $F$ we can write
$E=\left( E \cap F \right)\cup\left( E \cap F^{c} right)$ so that if
$E\capF=\oslash$ then $E=EcapF^{c}$.
