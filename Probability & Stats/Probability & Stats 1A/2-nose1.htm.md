[[next](nose2.htm)] [[tail](#tailnose1.htm)] [[up](noch1.htm#nose1.htm)]

### 1.1 Set theory

#### 1.1.1 Sample spaces and events

Definition 1 (Sample space, sample point)  
The set, $\Omega$, of all possible outcomes of an experiment is called the sample space. Each individual outcome, $\omega$, is called a sample point. The sample points $\omega$ are the elements of the sample space. Equivalently, $\omega$ is a member of the set $\Omega$, written $\omega\in\Omega$.

We classify sample spaces into two types:

*   if the sample points can be put into one-to-one correspondence with a subset of the positive integers, $ℤ^{+}=\left\{ 1 , 2 , 3 , … ⁡ \right\}$ then the sample space is countable,
*   if the sample space is not countable then it is uncountable.

Example 1 (Examples of different types of sample spaces)

1.

Suppose that we toss a coin $n$ times and count the number of heads obtained. The sample space $\Omega=\left\{ 0 , 1 , … ⁡ , n \right\}$ contains a finite number of elements and thus is countable. e.g. let $\left(\omega\right)_{i}$ denote the outcome that $i-1$ heads are obtained then $\Omega=\left\{ \left(\omega\right)_{1} , … ⁡ , \left(\omega\right)_{n + 1} \right\}$.

2.

Suppose that we toss a coin repeatedly and count the number of tosses up to and including that when the first head is obtained. The sample space $\Omega=\left\{ 1 , 2 , 3 , … ⁡ \right\}$ contains an infinite number of elements but is countable (often termed countably infinite). e.g. let $\left(\omega\right)_{i}$ denote the outcome that the first $i-1$ tosses were tails and the $i$th toss was a head then $\Omega=\left\{ \left(\omega\right)_{1} , \left(\omega\right)_{2} , \left(\omega\right)_{3} , … ⁡ \right\}$.

3.

Suppose we consider the reaction time to a certain stimulus. The set of outcomes is then any positive real number so that $\Omega=\left( 0 , \infty \right)$. This set is not countable.

In this course we shall primarily deal with sample spaces that are countable (essentially, discrete); next semester you’ll study sample spaces that are uncountable (essentially, continuous).

Definition 2 (Event)  
An event is a collection of possible outcomes of an experiment, equivalently a set of sample points.

Let $E$ be an event. Then $E$ is a subset of the sample space $\Omega$, written $E\subset\Omega$. Note that we include the possibility that $E$ is the whole sample space. If the outcome of the experiment is $\omega$ and $\omega$ belongs to the event $E$, that is $\omega\in E$, we say that the event $E$ has occurred.

Example 2 Consider the experiment of rolling a (six-sided) die. Then the possible outcomes, or sample points, are the scores $1$, $2$, $3$, $4$, $5$, and $6$ so that the sample space is $\Omega=\left\{ 1 , 2 , 3 , 4 , 5 , 6 \right\}$. Examples of events include:

(a)

$E_{1}=\left\{ \text{score is an even number} \right\}=\left\{ 2 , 4 , 6 \right\}$.

(b)

$E_{2}=\left\{ \text{score is bigger than }4\text{} \right\}=\left\{ 5 , 6 \right\}$.

(c)

$E_{3}=\left\{ \text{score is }1\text{} \right\}=\left\{ 1 \right\}$.

If the outcome of the die roll is a $6$, that is $\omega=6$, then the event $E_{1}$ occurs (as $6\in E_{1}$), the event $E_{2}$ occurs (as $6\in E_{2}$), but the event $E_{3}$ doesn’t occur (as $6\notinE_{3}$).

#### 1.1.2 Relations of set theory

Definition 3 (Subset and equal set)  

1.

An event[1](#fn1x1) $E$ is a subset of event $F$, written $E\subsetF$, if, whenever $E$ occurs $F$ also occurs. Thus if $E\subsetF$ then for any $\omega\in E$ we have $\omega\in F$.

2.

Events $E$ and $F$ are equal, written $E=F$, if and only if both $E\subsetF$ and $F\subsetE$. Thus, $E=F\LeftrightarrowE\subsetF$ and $F\subsetE$.

We can use Venn diagrams to provide a pictorial representation for events.

![PIC](MA10211_all-1.png)

Figure 1.1:Event $E$ is a subset of event $F$ if, whenever $E$ occurs $F$ also occurs. Note that in addition to $E\subsetF$ we have $E\subset\Omega$ and $F\subset\Omega$.

For example, Figure [1.1](#x9-100051) represents that $E\subsetF$. Note that any event is a subset of $\Omega$ and so we have that $E\subset\Omega$ and $F\subset\Omega$.

Definition 4 (Certain and impossible events; the empty set)  
The sample space $\Omega$ is termed the certain event as it must occur. The subset of $\Omega$ which contains no outcomes is the empty set, written $\oslash$ so that $\oslash=\left\{ \right\}$. As $\oslash$ cannot occur it is termed the impossible event.

Example 3 Suppose we consider rolling the die as in Example [2](#x9-90072) and consider the event $E_{4}=\left\{ \text{score is a negative number} \right\}$. Then there are no outcomes where $E_{4}$ occurs so that $E_{4}=\left\{ \right\}$ and is thus the impossible event.

Consider an arbitrary event $E$. As $\oslash$ contains no sample points then it is logically correct to say that any point belonging to $\oslash$ belongs to $E$ so that $\oslash\subsetE$. Consequently, for any event $E$ we have $\oslash\subsetE\subset\Omega$.

#### 1.1.3 Operations of set theory

Definition 5 (Elementary set operations)  
Given any two events $E$ and $F$ we have the following elementary operations:

1.

The union of $E$ and $F$, written $E\cupF$, is the event which contains all of the outcomes that belong to either $E$ or $F$ or both so that $E\cupF=\left\{ \omega : \omega \in E \text{ or } \omega \in F \right\}$.

2.

The intersection of $E$ and $F$, written $E\capF$, is the event which contains all of the outcomes that belong to both $E$ and $F$ so that $E\capF=\left\{ \omega : \omega \in E \text{ and } \omega \in F \right\}$.

3.

The difference of $E$ and $F$, written $E\backslash F$, is the event which contains all the outcomes that belong to $E$ but not to $F$ so that $E\backslash F=\left\{ \omega : \omega \in E \text{ and } \omega \notin F \right\}$.

4.

The complement of $E$, written $E^{c}$, is the event which contains all of the outcomes which do not belong to $E$ so that $E^{c}=\left\{ \omega : \omega \notin E \right\}$.

Notes:

*   Figure [1.2](#x9-110082)(a) shows the union of $E$ and $F$.
    
    ![PIC](MA10211_all-3.png)
    
    (a) The union of events $E$ and $F$, $E\cupF$.
    
    ![PIC](MA10211_all-2.png)
    
    (b) The intersection of events $E$ and $F$, $E\capF$.
    
    Figure 1.2:The union and intersection of events $E$ and $F$. $E\cupF$ occurs whenever at least one (and possibly both) of $E$ and $F$ occur. $E\capF$ occurs whenever both $E$ and $F$ occur simultaneously.
    
    For any event $E$, $\Omega\cupE=\Omega$ and $\oslash\cupE=E$.
    
*   Figure [1.2](#x9-110082)(b) shows the intersection of $E$ and $F$. For any event $E$, $\Omega\capE=E$ and $\oslash\capE=\oslash$.
*   Figure [1.3](#x9-110113)(a) shows the difference of $E$ and $F$.
    
    ![PIC](MA10211_all-6.png)
    
    (a) The difference of events $E$ and $F$, $E\backslash F$.
    
    ![PIC](MA10211_all-4.png)
    
    (b) The complement of event $E$, $E^{c}$.
    
    Figure 1.3:The difference of events $E$ and $F$ and the complement of the event $E$. $E\backslash F$ occurs whenever $E$ occurs but $F$ doesn’t occur whilst $E^{c}$, occurs precisely when $E$ doesn’t occur.
    
    Note that $E\backslash F=E\capF^{c}$ and $E=\left( E \cap F \right)\cup\left( E \cap F^{c} \right)$.
    
*   Figure [1.3](#x9-110113)(b) shows the complement of the event $E$. For any event $E$, $E^{c}=\Omega\backslash E$, that is everything in $\Omega$ but not in $E$. It’s simple to show that the following properties hold:
    
    1.
    
    $\left(\left( E^{c} \right)\right)^{c}=E$ (the complement of the complement of an event is the event).
    
    2.
    
    $\left(\oslash\right)^{c}=\Omega$ and $\left(\Omega\right)^{c}=\oslash$ (the complement of the empty set is the sample space and vice versa).
    
    3.
    
    $E\cupE^{c}=\Omega$ (the sample space is the union of the events $E$ and $E^{c}$).
    
    4.
    
    $E\capE^{c}=\oslash$ ($E$ and $E^{c}$ have no outcomes in common).
    

Example 4 Recall the die tossing example of Example [2](#x9-90072) so that $\Omega=\left\{ 1 , 2 , 3 , 4 , 5 , 6 \right\}$ and we defined the events $E_{1}=\left\{ \text{score is an even number} \right\}=\left\{ 2 , 4 , 6 \right\}$, $E_{2}=\left\{ \text{score is bigger than }4\text{} \right\}=\left\{ 5 , 6 \right\}$, and $E_{3}=\left\{ \text{score is }1\text{} \right\}=\left\{ 1 \right\}$. Then:

1.

$E_{1}\cupE_{2}=\left\{ 2 , 4 , 5 , 6 \right\}=\left\{ \text{score is an even number or bigger than }4\text{} \right\}$

2.

$E_{1}\capE_{2}=\left\{ 6 \right\}=\left\{ \text{score is an even number and bigger than }4\text{} \right\}$

3.

$E_{1}^{c}=\left\{ 1 , 3 , 5 \right\}=\left\{ \text{score is not an even number} \right\}=\left\{ \text{score is an odd number} \right\}$. From this we see that $E_{1}\cupE_{1}^{c}=\Omega=\left\{ \text{score is an even or an odd number} \right\}$ and $E_{1}\capE_{1}^{c}=\oslash=\left\{ \text{score is an even and an odd number} \right\}$

Definition 6 (Disjoint events)  
Events $E$ and $F$ are disjoint or mutually exclusive if they cannot both occur at the same time, that is $E\capF=\oslash$.

Figure [1.4](#x9-110214) gives an example of disjoint events $E$ and $F$.

![PIC](MA10211_all-7.png)

Figure 1.4:Events $E$ and $F$ are disjoint or mutually exclusive if they cannot both occur at the same time.

Note that an equivalent statement to $E\capF=\oslash$ for disjoint events is that $E\subsetF^{c}$.[2](#fn2x1)

Example 5 Continuing Example [4](#x9-110164), $E_{2}$ and $E_{3}$ are disjoint events as $E_{2}\capE_{3}=\left\{ \right\}=\oslash=\left\{ \text{score is bigger than }4\text{ and score is }1\text{} \right\}$.

We shall see in Section [1.2.2](nose2.htm#x10-150002) that disjoint events play a fundamental role in calculating probabilities. In a similar way to addition and multiplication, the elementary set operations of Definition [5](#x9-110015) can be combined.

Theorem 1 (Laws of set theory)  
For any three events $E$, $F$ and $G$ defined on a sample space $\Omega$ the following relationships hold:

1.

Commutative Laws

(a)

$E\cupF=F\cupE$,

(b)

$E\capF=F\capE$;

2.

Associative Laws

(a)

$E\cup\left( F \cup G \right)=\left( E \cup F \right)\cupG$,

(b)

$E\cap\left( F \cap G \right)=\left( E \cap F \right)\capG$;

3.

Distributive Laws

(a)

$\left( E \cap F \right)\cupG=\left( E \cup G \right)\cap\left( F \cup G \right)$,

(b)

$\left( E \cup F \right)\capG=\left( E \cap G \right)\cup\left( F \cap G \right)$;

4.

De Morgan’s Laws[3](#fn3x1)

(a)

$\left(\left( E \cup F \right)\right)^{c}=E^{c}\capF^{c}$,

(b)

$\left(\left( E \cap F \right)\right)^{c}=E^{c}\cupF^{c}$.

Proof: We’ll prove De Morgan’s first law. From Definition [3](#x9-100013), $\left(\left( E \cup F \right)\right)^{c}=E^{c}\capF^{c}$ if and only if $\left(\left( E \cup F \right)\right)^{c}\subsetE^{c}\capF^{c}$ and $E^{c}\capF^{c}\subset\left(\left( E \cup F \right)\right)^{c}$. To show that $\left(\left( E \cup F \right)\right)^{c}\subsetE^{c}\capF^{c}$ we must show that for any $\omega\in\left(\left( E \cup F \right)\right)^{c}$ we have $\omega\in E^{c}\capF^{c}$. Using the definition of the complement of a set, see Definition [5](#x9-110015), then

$$
\begin{align}
\omega\in\left(\left( E \cup F \right)\right)^{c} & \Rightarrow & \omega\notin\left( E \cup F \right) & \text{} \\ & \Rightarrow & \omega\notinE\text{ and }\omega\notinF & \text{} \\ & \Rightarrow & \omega\in E^{c}\text{ and }\omega\in F^{c} & \text{} \\ & \Rightarrow & \omega\in E^{c}\capF^{c} & \text{}
\end{align}
$$

so that $\left(\left( E \cup F \right)\right)^{c}\subsetE^{c}\capF^{c}$. Now consider any $\omega\in E^{c}\capF^{c}$. We have

$$
\begin{align}
\omega\in E^{c}\capF^{c} & \Rightarrow & \omega\in E^{c}\text{ and }\omega\in F^{c} & \text{} \\ & \Rightarrow & \omega\notinE\text{ and }\omega\notinF & \text{} \\ & \Rightarrow & \omega\notin\left( E \cup F \right) & \text{} \\ & \Rightarrow & \omega\in\left(\left( E \cup F \right)\right)^{c}. & \text{}
\end{align}
$$

Thus, for any $\omega\in E^{c}\capF^{c}$ we have $\omega\in\left(\left( E \cup F \right)\right)^{c}$ so that $E^{c}\capF^{c}\subset\left(\left( E \cup F \right)\right)^{c}$. Hence, $\left(\left( E \cup F \right)\right)^{c}\subsetE^{c}\capF^{c}$ and $E^{c}\capF^{c}\subset\left(\left( E \cup F \right)\right)^{c}$ giving the result. $\square$

#### 1.1.4 Extensions to collections of events

Note that from the Associative Laws, as $E\cup\left( F \cup G \right)=\left( E \cup F \right)\cupG$ and $E\cap\left( F \cap G \right)=\left( E \cap F \right)\capG$ then the parenthesis don’t matter. Thus, we write $E\cupF\cupG$ for the event that at least one of these events occur and $E\capF\capG$ that all three events occur. We can extend this notion to both finite and countably infinite collections of events.

   
Unions and intersections of collections of events

1.

If $E_{1},…⁡,E_{n}$ is any finite collection of events defined on $\Omega$ then 
$$
\begin{align}
\cup_{i = 1}^{n}E_{i}:=E_{1}\cupE_{2}\cup\dots \cupE_{n} & = & \left\{ \omega : \omega \in E_{i} \text{ for some } i \in \left\{ 1 , 2 , … ⁡ , n \right\} \right\} & \text{} \\ \cap_{i = 1}^{n}E_{i}:=E_{1}\capE_{2}\cap\dots \capE_{n} & = & \left\{ \omega : \omega \in E_{i} \text{ for all } i \in \left\{ 1 , 2 , … ⁡ , n \right\} \right\} & \text{}
\end{align}
$$

2.

If $E_{1},E_{2},…⁡,$ is any countably infinite collection of events defined on $\Omega$ then 
$$
\begin{align}
\cup_{i = 1}^{\infty}E_{i}=E_{1}\cupE_{2}\cup\dots \cupE_{n}\cupE_{n + 1}\cup\dots  & = & \left\{ \omega : \omega \in E_{i} \text{ for some } i \in ℤ^{+} \right\} & \text{} \\ \cap_{i = 1}^{\infty}E_{i}=E_{1}\capE_{2}\cap\dots \capE_{n}\capE_{n + 1}\cap\dots  & = & \left\{ \omega : \omega \in E_{i} \text{ for all } i \in ℤ^{+} \right\} & \text{}
\end{align}
$$

In a similar way the Distributive Laws and De Morgan’s Laws can be extended to many events. We only reference the latter here.

   
De Morgan’s Laws for collections of events

1.

If $E_{1},…⁡,E_{n}$ is any finite collection of events defined on $\Omega$ then 
$$
\begin{align}
\left(\left(\cup_{i = 1}^{n} E_{i}\right)\right)^{c}=\cap_{i = 1}^{n}E_{i}^{c}, & & \left(\left(\cap_{i = 1}^{n} E_{i}\right)\right)^{c}=\cup_{i = 1}^{n}E_{i}^{c}. & \text{(1.1)}\text{}\text{}
\end{align}
$$

2.

If $E_{1},E_{2},…⁡,$ is any countably infinite collection of events defined on $\Omega$ then 
$$
\begin{align}
\left(\left(\cup_{i = 1}^{\infty} E_{i}\right)\right)^{c}=\cap_{i = 1}^{\infty}E_{i}^{c},\left(\left(\cap_{i = 1}^{\infty} E_{i}\right)\right)^{c}=\cup_{i = 1}^{\infty}E_{i}^{c}. & & & \text{(1.2)}\text{}\text{}
\end{align}
$$

Example 6 As in Example [1](#x9-90021), suppose that we toss a coin repeatedly and count the number of tosses up to and including that when the first head is obtained. Letting $\left(\omega\right)_{i}$ denote the outcome that the first $i-1$ tosses were tails and the $i$th toss was a head then $\Omega=\left\{ \left(\omega\right)_{1} , \left(\omega\right)_{2} , \left(\omega\right)_{3} , … ⁡ \right\}$. Let $E_{\text{even}}=\left\{ \text{first head occurs on an even toss} \right\}$ then

$$
\begin{align}
E_{\text{even}}=\left(\omega\right)_{2}\cup\left(\omega\right)_{4}\cup\left(\omega\right)_{6}\cup\dots =\cup_{i = 1}^{\infty}\left(\omega\right)_{2 i}. & & & \text{}
\end{align}
$$

Let $E_{\text{odd}}=\left\{ \text{first head occurs on an odd toss} \right\}$ then $E_{\text{odd}}=E_{\text{even}}^{c}$ and so using De Morgan’s Laws, see equation ([1.2](#x9-12008r1.2)),

$$
\begin{align}
E_{\text{odd}}=E_{\text{even}}^{c}=\left(\left(\cup_{i = 1}^{\infty} \left(\omega\right)_{2 i}\right)\right)^{c}=\cap_{i = 1}^{\infty}\omega_{2 i}^{c}, & & & \text{}
\end{align}
$$

that is the first head does not occur on the 2nd toss and it does not occur on the 4th toss and it does not occur on the 6th toss and $…⁡$. Note that as $\omega_{2}^{c}=\left\{ \left(\omega\right)_{1} , \left(\omega\right)_{3} , \left(\omega\right)_{4} , \left(\omega\right)_{5} , … ⁡ \right\}$, $\omega_{4}^{c}=\left\{ \left(\omega\right)_{1} , \left(\omega\right)_{2} , \left(\omega\right)_{3} , \left(\omega\right)_{5} , … ⁡ \right\}$ and so on then

$$
\begin{align}
E_{\text{odd}}=\cap_{i = 1}^{\infty}\omega_{2 i}^{c}=\cup_{i = 1}^{\infty}\left(\omega\right)_{2 i - 1}. & & & \text{}
\end{align}
$$

Pairwise disjoint events (extension of Definition [6](#x9-110206) to pairwise disjoint events.)

1.

The events $E_{1},E_{2},…⁡,E_{n}$ are said to be disjoint or pairwise disjoint or mutually exclusive if no two can simultaneously occur, that is $E_{1},E_{2},…⁡,E_{n}$ are disjoint if and only if $E_{i}\capE_{j}=\oslash$ for all $i,j=1,…⁡,n,i\neq j$.

2.

The events $E_{1},E_{2},…⁡$ are disjoint if and only if $E_{i}\capE_{j}=\oslash$ for all $i,j\inℤ^{+}=\left\{ 1 , 2 , … ⁡ \right\},i\neq j.$

Thus, for example, $E_{1},E_{2},E_{3}$ are disjoint if and only if

$$
\begin{align}
E_{1}\capE_{2}=\oslash\text{ and }E_{1}\capE_{3}=\oslash\text{ and }E_{2}\capE_{3}=\oslash. & & & \text{}
\end{align}
$$

[1](#fn1x1-bk)In probability theory, the convention is to consider the probability of an event rather than a set. As such we use the terms set and event interchangeably.

[2](#fn2x1-bk)Recall that for any events $E$ and $F$ we can write $E=\left( E \cap F \right)\cup\left( E \cap F^{c} \right)$ so that if $E\capF=\oslash$ then $E=E\capF^{c}$.

[3](#fn3x1-bk)The laws are named after [Augustus De Morgan (1806-1871)](https://en.wikipedia.org/wiki/Augustus_De_Morgan). They show that intersection and union interchange under complementation so that negating an “or” makes it an “and” and negating an “and” makes it an “or”.

[[next](nose2.htm)] [[front](nose1.htm)] [[up](noch1.htm#nose1.htm)]

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