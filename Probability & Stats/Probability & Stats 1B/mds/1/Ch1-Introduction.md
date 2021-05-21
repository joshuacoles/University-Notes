# MA10212 Lectures

_Chris Jennison_

_2021-04-10_

# Chapter 1 Introduction

**Lecture 1**

This is course MA10212: Probability and Statistics 1B

_Your lecturer is_

- Professor Chris Jennison

_The aims of the course are_

- To introduce probability for continuous random variables
- To introduce statistical modelling and parameter estimation
- To introduce statistical computing (the R language)

_The course will be delivered through_

- Live Lectures via Zoom on Mondays and Tuesdays
- Live Problems Classes via Zoom on Wednesdays
- Live Tutorials and Computer Labs via Zoom on Thursdays or Fridays

_The MA10212 MOODLE page has further information on_

- Course contents
- Schedule of Tutorials and Computing Labs
- Recordings of Lectures, Problems Classes and Tutorials
- Workshops and MASH drop in sessions
- Assessment: Assessed Coursework and Final Exam

The assessed coursework counts for 25% of the assessment: this must be **your own work.**

_See the MA10212 MOODLE page for_

- Problem sheets and solutions
- Assessed coursework
- An introduction to the statistical programming language R
- Lectures
- Problems Classes

**An introductory example: Catching a bus**

Each day you arrive at the bus stop at a random time, evenly distributed between 5pm and 6pm.

- Bus A runs at 5:05, 5:25 and 5:45.
- Bus B runs at 5:00, 5:30 and 6:00.
- You observe that you take bus A 2/3 of the time.
- Why is this so?

![](Images/lec1/lec1_fig1.png)

**Mathematical model of a probability space**

**Definition**

**The sample space** $\Omega$ is the set of all possible outcomes.

In the Bus example, let elements of $\Omega$ be the outcomes

$$
 \omega = \mbox{Time of arrival measured in minutes after 5pm}.
$$

Then $\Omega = [0,60]$.

**Definition**

**Events** are subsets of $\Omega$.

Some events in the Bus example are

$$
 \mbox{Arrive at a time to catch bus B} \; = \; \{0\} \, \cup \, (25,30] \, \cup \, (45,60],
$$

$$
 \mbox{Wait at least 8 minutes} \; = \; (5,17] \, \cup \, (30,37] \, \cup \, (45,52].
$$

**Mathematical model of a probability space**

**Definition**

The **set of events** is denoted by ${\cal F}$.

**Definition**

**Probability** is a function $\mathsf{P}: {\cal F}\rightarrow [0,1]$.

How should we define $\mathsf{P}$ in our example?

If $E=(a,b) \subset \Omega$, set

$$
 \mathsf{P}(E) = \frac{b-a}{60}.
$$

If $E=(a_1,b_1) \cup \ldots \cup (a_k,b_k) \subset \Omega$, where the intervals $(a_j,b_j)$ are disjoint, set

$$
 \mathsf{P}(E) \; = \; \sum_{j=1}^k \frac{b_j-a_j}{60} \; = \; \frac{\mbox{Total length of $E$}}{60}.
$$

**The probability of a single outcome**

For every $\omega \in \Omega$,

$$
 \mathsf{P}\{\omega\} \; = \; \frac{\mbox{Length of $(\omega,\omega)$}}{60} \; = \; 0.
$$

Each individual outcome $\omega$ has probability zero — but $\mathsf{P}(\Omega)=1$.

Why does this not contradict the axioms of probability?

The set $\Omega$ is uncountable, so it makes no sense to write

$$
 \mathsf{P}(\Omega) = \sum_{\omega} \mathsf{P}(\omega) = \ldots
$$

**Corollary**

In the bus example,

$$
 \mathsf{P}([a,b)) \; = \; \mathsf{P}((a,b)) \; = \; \mathsf{P}((a,b]).
$$

**Definition**

A **random variable (RV)** is a real-valued function defined on the sample space,

$$
 X: \Omega \rightarrow \mathsf{R}.
$$

Outcome $\omega$ gives the value $X(\omega)$.

![](Images/lec1/lec1_fig1.png)

**Examples of RVs** in the bus example are

a) $X=$ Time until bus B arrives

$$
 X(\omega) \; = \; \begin{cases} 0 & \text{if $\omega = 0$,} \\ 30-\omega & \text{if $0 < \omega \leq 30$,} \\ 60-\omega & \text{if $30 < \omega \leq 60$.} \end{cases}
$$

b) $Y=$ Arrival time of next bus B

$$
 Y(\omega) \; = \; \begin{cases} 0 & \text{if $\omega = 0$,} \\ 30 & \text{if $0 < \omega \leq 30$,} \\ 60 & \text{if $30 < \omega \leq 60$.} \end{cases}
$$

c) $Z=$ Your arrival time at the bus stop

$$
 Z(\omega) \; = \; \omega.
$$

d) Let $B$ be the event that Bus B is the next bus to arrive, so

$$
 B \; = \; \{0\} \; \cup \; (25,30] \; \cup (45,60]
$$

and define the **indicator variable**

$$
 I_B(\omega) \; = \; \begin{cases} 1 & \text{if $\omega \in B$,} \\ 0 & \text{if $\omega \notin B$.} \end{cases}
$$

**Discrete and continuous random variables**

Note that $Y$ and $I_B$ are **discrete** RVs:

$$
 \mathsf{P}(Y=30) \;=\; \frac{1}{2}, \;\;\; \mathsf{P}(Y=60) \;=\; \frac{1}{2}
$$

and

$$
 \mathsf{P}(I_B=0) \;=\; \frac{2}{3}, \;\;\; \mathsf{P}(I_B=1) \;=\; \frac{1}{3}.
$$

In contrast, $X$ and $Z$ are **continuous** RVs.

This course unit is concerned with developing a way to describe continuous RVs and to calculate their properties.
