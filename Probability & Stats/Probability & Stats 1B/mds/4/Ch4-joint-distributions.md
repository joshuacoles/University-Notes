# Chapter 4 Joint distributions, independence and expectation

## 4.1 Joint PDFs

**Lecture 9**

The joint distribution for **discrete** RVs is easily defined.

As an example, suppose we roll a die and set

$$
 Y \; = \; \mbox{Score shown on the die}.
$$

Then we toss a coin once if $Y$ is odd and twice if $Y$ is even, and set

$$
 X \; = \; \mbox{Number of Heads obtained}.
$$

The joint distribution of $(X,Y)$ is given by the table of probabilities $\mathsf{P}(X=x \;\mbox{and}\; Y=y)$:

$y$

1

2

3

4

5

6

0

1/12

1/24

1/12

1/24

1/12

1/24

$x$

1

1/12

1/12

1/12

1/12

1/12

1/12

2

0

1/24

0

1/24

0

1/24

With continuous RVs, we need a multi-dimensional version of the probability density function that we have seen for a single RV.

The **joint PDF** needs to be able to capture connections between the RVs $X$ and $Y$, as seen in the previous discrete example.

Two RVs may vary together in a systematic way, for example,

$$
 X \; = \; \mbox{Height}, Y \; = \; \mbox{Weight} \;\;\; \mbox{of the same individual}.
$$

Possible values of one RV may depend on the value of the other, for example,if

$$
\begin{align} X & = \mbox{Time spent working on Example Sheets}, \\ Y & = \mbox{Time spent working on MA10212 Example Sheets}, \end{align}
$$

then $Y \leq X$.

As a preliminary, we need to discuss **double integrals.**

![](Images/lec9/lec9_fig1.png)

Consider a function $g$: $Q \rightarrow \mathsf{R}$, where $Q = (a,b) \times (c,d) \subset \mathsf{R}^2$.

We define

$$
 \int \int_Q g(x,y) \, dy \, dx = \int_a^b \left[ \int_c^d g(x,y) dy \right] \, dx = \int_c^d \! \left[ \int_a^b g(x,y) dx \right] \, dy.
$$

![](Images/lec9/lec9_fig2.png)

The double integral represents the limit of a sum of volumes under the surface $g(x,y)$ $\,$—$\,$ as the grid becomes finer and finer.

The order of integration $\,$—$\,$ over $x$ first or over $y$ first $\,$—$\,$ corresponds to the order of summation of these volumes.

For a well-behaved function $g$, the answer is the same either way.

**Example**

![](Images/lec9/lec9_fig3.png)

$Q = (0,2) \times (0,1)$ and

$$
 g(x,y) \; = \; \frac{3}{16} \, x^2 + \frac{1}{2} \, y.
$$

$$
 \int \int_Q g(x,y) \, dy \, dx \; = \; \int_0^2 \, \left\{ \int_0^1 \left( \frac{3}{16} \, x^2 + \frac{1}{2} \, y \right) \, dy \right\} \, dx \; = \; 1.
$$

_See handwritten material_

_Exercise:_ $\,$Check you get the same answer by writing this double integral as

$$
 \int \int_Q g(x,y) \, dx \, dy \; = \; \int_0^1 \, \left\{ \int_0^2 \left(\frac{3}{16} \, x^2 + \frac{1}{2} \, y\right) \, dx \right\} \, dy
$$

and integrating with respect to $x$ first, then with respect to $y$.

We can allow the region of integration to be something other than a rectangle $(a,b) \times (c,d)$.

**Example**

Consider

$$
 T \; = \; \{\mbox{$(x,y)$: $0 \leq y \leq x \leq 1$}\}
$$

and

$$
 g(x,y) \; = \; 2 \, e^{-x} \, e^{-2y}.
$$

Find

$$
 \int \int_T \, g(x,y) \, dx \, dy.
$$

We can evaluate the integral of $g(x,y)$ over $T$ by breaking the triagle into vertical slices

![](Images/lec9/lec9_fig4.png)

and writing

$$
 \int \int_T \, g(x,y) \, dx \, dy \; = \; \int_0^1 \, \left\{ \int_0^x g(x,y) \, dy \right\} \, dx \; = \; \ldots
$$

or we can break the triagle into horizontal slices

![](Images/lec9/lec9_fig5.png)

and write

$$
 \int \int_T \, g(x,y) \, dx \, dy \; = \; \int_0^1 \, \left\{ \int_y^1 g(x,y) \, dx \right\} \, dy \; =\;\; \ldots \; .
$$

_Exercise:_ $\,$Show that both these calculations give the same answer.

**The joint distribution of two continuous RVs**

**Definition**

We say $X$ and $Y$ are **jointly continuous RVs** if there exists a function $f_{X,Y}(x,y)$: $\mathsf{R}^2 \rightarrow [0,\infty)$ such that for any region $A \subset \mathsf{R}^2$,

$$
 \mathsf{P}\{(X,Y) \in A\} \; = \; \int \int_A \, f_{X,Y}(x,y) \, dy \, dx.
$$

The function $f_{X,Y}(x,y)$ is called the joint PDF of $X$ and $Y$.

**Example**

$$
 f_{X,Y}(x,y) \; = \; \begin{cases} \; \frac{3}{16} \, x^2 + \frac{1}{2} \, y \; & \mbox{if $0 < x < 2$ and $0 < y < 1$}, \\ \; 0 & \mbox{otherwise.} \end{cases}
$$

The function $f_{X,Y}(x,y)$ is positive everywhere and we have seen that it integrates to 1.

**Marginal distributions**

If $X$ and $Y$ have joint PDF $f_{X,Y}(x,y)$, then $X$ and $Y$ have PDFs

$$
 f_X(x) \, = \, \int_{-\infty}^{\infty} \, f_{X,Y}(x,y) \, dy \;\;\;\;\mbox{and}\;\;\;\; f_Y(y) \, = \, \int_{-\infty}^{\infty} \, f_{X,Y}(x,y) \, dx.
$$

Here, $f_X(x)$ and $f_Y(y)$ are called the **marginal PDFs** of $X$ and $Y$.

**Proof**

$$
\begin{align} \mathsf{P}(a \leq X \leq b) & = \mathsf{P}(a \leq X \leq b \;\mbox{and}\; -\infty < Y < \infty) \\ & = \int_a^b \int_{-\infty}^{\infty} \, f_{X,Y}(x,y) \, dy \, dx \; = \; \int_a^b \, f_{X}(x) \, dx \end{align}
$$

for $f_{X}(x)$ as defined above.

So $f_{X}(x)$ is the PDF of $X$.

The proof that $f_{Y}(y)$ is the PDF of $Y$ follows similarly.

Consider the joint PDF

$$
 f_{X,Y}(x,y) \; = \; \begin{cases} \; \frac{3}{16} \, x^2 + \frac{1}{2} \, y \; & \mbox{if $0 < x < 2$ and $0 < y < 1$}, \\ \; 0 & \mbox{otherwise.} \end{cases}
$$

The marginal PDF of $X$ is as follows:

$$
\begin{align} f_X(x) & = 0 \;\;\;\;\; \mbox{for $x \leq 0$ or $x \geq 2$}, \\ f_X(x) & = \int_{-\infty}^{\infty} \, f_{X,Y}(x,y) \, dy \; = \; \int_0^1 \, \left( \frac{3}{16} \, x^2 + \frac{1}{2} \, y \right) \, dy \\ & = \left[ \frac{3}{16} \, x^2 \, y + \frac{1}{4} \, y^2 \right]_0^1 \; = \; \frac{3}{16} \, x^2 + \frac{1}{4} \;\;\;\;\; \mbox{for $0 < x < 2$}. \end{align}
$$

For the same joint PDF,

$$
 f_{X,Y}(x,y) \; = \; \begin{cases} \; \frac{3}{16} \, x^2 + \frac{1}{2} \, y \; & \mbox{if $0 < x < 2$ and $0 < y < 1$}, \\ \; 0 & \mbox{otherwise,} \end{cases}
$$

the marginal PDF of $Y$ is:

$$
\begin{align} f_Y(y) & = 0 \;\;\;\;\; \mbox{for $y \leq 0$ or $y \geq 1$}, \\ f_Y(y) & = \int_{-\infty}^{\infty} \, f_{X,Y}(x,y) \, dx \; = \; \int_0^2 \, \left( \frac{3}{16} \, x^2 + \frac{1}{2} \, y \right) \, dx \\ & = \left[ \frac{x^3}{16} + \frac{1}{2} \, x \, y \right]_0^2 \; = \; \frac{1}{2} + y \;\;\;\;\; \mbox{for $0 < y < 1$}. \end{align}
$$

**Lecture 10**

**Definition**

The **joint CDF** of RVs $X$ and $Y$ is the function $F_{X,Y}$: $\mathsf{R}^2 \rightarrow [0,1]$ defined by

$$
 F_{X,Y}(x,y) \; = \; \mathsf{P}(X \leq x \;\mbox{and}\; Y \leq y).
$$

Recall that the marginal CDFs are

$$
 F_X(x) \; = \; \mathsf{P}(X \leq x) \;\;\;\;\mbox{and}\;\;\;\; F_Y(y) \; = \; \mathsf{P}(Y \leq y).
$$

**Definition**

The RVs $X$ and $Y$ are **independent** if

$$
 \mathsf{P}(X \leq x, \; Y \leq y) \, = \, \mathsf{P}(X \leq x) \, \mathsf{P}(Y \leq y) \;\; \mbox{for all $x \in \mathsf{R}$, $y \in \mathsf{R}$},
$$

i.e., if

$$
 F_{X,Y}(x,y) \; = \; F_X(x) \, F_Y(y) \;\;\; \mbox{for all $x \in \mathsf{R}$, $y \in \mathsf{R}$}.
$$

**Independence and joint PDFs**

**Theorem**

The jointly continuous RVs $X$ and $Y$ are independent if and only if

$$
\begin{equation} f_{X,Y}(x,y) \; = \; f_{X}(x) \, f_{Y}(y) \;\;\; \mbox{for all $x \in \mathsf{R}$, $y \in \mathsf{R}$}. \tag{4.1} \end{equation}
$$

Note: $\,$Strictly speaking, we should allow $f_{X,Y}$, $f_{X}$ and $f_{Y}$ to fail to satisfy [(4.1)](Ch4-joint-distributions.html#eq:independence) on a finite set of points $\,$—$\,$ since changing the value of a density at a point does not affect the probability of any event.

**Proof**

i) $\,$We need to show that [(4.1)](Ch4-joint-distributions.html#eq:independence) implies independence, according to the definition in terms of $F_{X,Y}$, $F_{X}$ and $F_{Y}$.

ii) $\,$We also need to show that the definition of independence, in terms of $F_{X,Y}$, $F_{X}$ and $F_{Y}$, implies [(4.1)](Ch4-joint-distributions.html#eq:independence).

_See handwritten material_

**Example**

Consider the joint PDF

$$
 f_{X,Y}(x,y) \; = \; \begin{cases} \; 2 \, e^{-x} \, e^{-2y} \; & \mbox{if $x > 0$ and $y > 0$}, \\ \; 0 & \mbox{otherwise.} \end{cases}
$$

Integrating over $y$ gives

$$
 f_{X}(x) \; = \; \begin{cases} \; e^{-x} & \; x > 0 \\ \; 0 & \; x \leq 0 \end{cases}
$$

and integrating over $x$ gives

$$
 f_{Y}(y) \; = \; \begin{cases} \; 2 \, e^{-2y} & \; y > 0 \\ \; 0 & \; y \leq 0. \end{cases}
$$

Since

$$
 f_{X,Y}(x,y) \; = \; f_{X}(x) \, f_{Y}(y) \;\;\; \mbox{for all $x \in \mathsf{R}$, $y \in \mathsf{R}$},
$$

the Theorem tells us that $X$ and $Y$ are independent.

By inspection, the marginal distribution of $X$ is $\mathrm{Exp}(1)$ and the marginal distribution of $Y$ is $\mathrm{Exp}(2)$.

Thus, the pair $(X,Y)$ is made up of two independent exponential RVs, with different rate parameters.

In fact, we can see that $f_{X,Y}(x,y)$ factorises into one term involving $x$ only and another term involving $y$ only $\,$—$\,$ and this is enough to imply independence of $X$ and $Y$.

**Example**

Consider the joint PDF

$$
 f_{X,Y}(x,y) \; = \; \begin{cases} \; \frac{3}{16} \, x^2 + \frac{1}{2} \, y \; & \mbox{if $0 < x < 2$ and $0 < y < 1$}, \\ \; 0 & \mbox{otherwise.} \end{cases}
$$

Integrating over $y$ gives

$$
 f_{X}(x) \; = \; \begin{cases} \; \frac{3}{16} \, x^2 + \frac{1}{4} & \; 0 < x < 2 \\ \; 0 & \; x \leq 0 \;\;\mbox{or}\;\; x \geq 2 \end{cases}
$$

and integrating over $x$ gives

$$
 f_{Y}(y) \; = \; \begin{cases} \; \frac{1}{2} + y & \; 0 < y < 1 \\ \; 0 & \; y \leq 0 \;\;\mbox{or}\;\; y \geq 1. \end{cases}
$$

![](Images/lec10/lec10_fig1.png)

The Theorem tells us that $X$ and $Y$ are not independent, since

$$
 f_{X,Y}(x,y) \; \neq \; f_{X}(x) \, f_{Y}(y) \;\;\; \mbox{for all $x \in \mathsf{R}$, $y \in \mathsf{R}$}.
$$

This is also evident from the form of $f_{X,Y}(x,y)$ and from the plot.

**More than two RVs**

**Definition**

We say $X_1, \, \ldots \, , X_n$ are **jointly continuous RVs** if there exists a function

$$
 f_{X_1,\ldots,X_n}(x_1,\ldots,x_n): \;\mathsf{R}^n \rightarrow [0,\infty)
$$

such that for any region $A \subset \mathsf{R}^n$,

$$
 \mathsf{P}\{(X_1, \, \ldots \, , X_n) \in A\} \; = \;\int \ldots \int_A \, f_{X_1, \, \ldots \, , X_n}(x_1,\ldots,x_n) \, dx_1 \ldots dx_n.
$$

The function $\,f_{X_1,\ldots,X_n}(x_1,\ldots,x_n)$, is called the joint PDF of $X_1, \, \ldots \, , X_n$.

If $X_1, \, \ldots \, , X_n$ are independent,

$$
 f_{X_1,\ldots,X_n}(x_1,\ldots,x_n) \; = \; \prod_{i=1}^n \, f_{X_i}(x_i).
$$

**Example**

Suppose $X_1, \, \ldots \, , X_n$ are independent RVs, each following an $\mathrm{Exp}(\lambda)$ distribution.

Then

$$
 f_{X_1, \, \ldots \, , X_n}(x_1,\ldots,x_n) \; = \; \prod_{i=1}^n \, f_{X_i}(x_i)
$$

$$
 = \; \begin{cases} \,\lambda^n \, \exp(-\lambda \sum_{i=1}^n x_i) & \mbox{if $x_1 > 0, \ldots, x_n >0,$} \\ \,0 & \mbox{otherwise.} \end{cases}
$$

**Properties of joint CDFs**

If $X$ and $Y$ are two RVs with joint CDF $F_{X,Y}(x,y)$, then

i) $\,$For all $x \in \mathsf{R}$,

$$
 \lim_{y \rightarrow \infty} F_{X,Y}(x,y) \, = \, F_X(x) \;\;\; \mbox{and} \;\;\; \lim_{y \rightarrow -\infty} F_{X,Y}(x,y) \, = \, 0.
$$

ii) $\,$For all $y \in \mathsf{R}$,

$$
 \lim_{x \rightarrow \infty} F_{X,Y}(x,y) \, = \, F_Y(y) \;\;\; \mbox{and} \;\;\; \lim_{x \rightarrow -\infty} F_{X,Y}(x,y) \, = \, 0.
$$

iii) $\,\lim_{x, \, y \rightarrow \infty} F_{X,Y}(x,y) \, = \, 1.$

iv) $\,$If $x_n \downarrow x$ and $y_n \downarrow y$, $\;\; \lim_{n \rightarrow \infty} F_{X,Y}(x_n,y_n) = F_{X,Y}(x,y)$.

v) $\,$For every $a < b$ and $c < d$,

$$
 F_{X,Y}(b,d) - F_{X,Y}(a,d) - F_{X,Y}(b,c) +F_{X,Y}(a,c) \, \geq \, 0.
$$

**Proof**

The methods used here are similar to those used in Lecture 3 to prove properties of the CDF of a single RV.

In doing this, we also call on the Lemma from that lecture.

i) $\,$Pick a sequence $y_n \uparrow \infty$, then by part (i) of the Lemma

$$
\begin{align} \lim_{n \rightarrow \infty} \mathsf{P}(X \leq x, Y \leq y_n) & = \mathsf{P}\left( \cup_{n=1}^{\infty} \, \{X \leq x, Y \leq y_n\} \right) \\ & = \mathsf{P}(X \leq x) \, = \, F_X(x). \end{align}
$$

Now pick a sequence $y_n \downarrow -\infty$, then by part (ii) of the Lemma

$$
\begin{align} \lim_{n \rightarrow \infty} \mathsf{P}(X \leq x, Y \leq y_n) & = \mathsf{P}\left( \cap_{n=1}^{\infty} \, \{X \leq x, Y \leq y_n\} \right) \\ & = \mathsf{P}(\emptyset) \, = \, 0. \end{align}
$$

The proof of (ii) is similar to that of (i) with the roles of $X$ and $Y$ interchanged.

The proof of (iii) is similar to that of (i) and (ii) but we let both $x_n \uparrow \infty$ and $y_n \uparrow \infty$ and note that

$$
 \cup_{n=1}^{\infty} \, \{X \leq x_n, Y \leq y_n\} \, = \, \Omega.
$$

iv) $\,$We use the fact that

$$
 \cap_{n=1}^{\infty} \, \{X \leq x_n, Y \leq y_n\} \, = \, \{X \leq x, Y \leq y\}.
$$

v) $\,$The expression is equal to $\mathsf{P}( a < X \leq b, c < Y \leq d)$, which is greater than or equal to zero.

## 4.2 Conditional PDFs

**Lecture 11**

Recall the definition of the conditional probability of event A given event B

$$
 \mathsf{P}(A \,|\,B) \; = \; \frac{\mathsf{P}(A \cap B)}{\mathsf{P}(B)} \;\;\;\;\; \mbox{if $\mathsf{P}(B)>0$}.
$$

So, for discrete RVs

$$
 \mathsf{P}(Y=y \,|\, X=x) \; = \; \frac{\mathsf{P}(Y=y, \, X=x)}{\mathsf{P}(X=x)} \;\;\;\;\; \mbox{if $\mathsf{P}_X(x)>0$}.
$$

We want a similar function for continuous RVs, which captures how the value of one RV, $X$, is affected by that of another RV, $Y$.

**Definition**

Let $X$ and $Y$ be continuous RVs with joint PDF $f_{X,Y}(x,y)$ and marginal PDFs $f_X(x)$ and $f_Y(y)$.

For a value $x$ with $f_X(x)>0$, the **conditional PDF** of $Y$ given $X=x$, written as $f_{Y|X}(y|x)$ or $f_{Y|X}(y \,|\, X=x)$, is

$$
 f_{Y|X}(y|x) \; = \; f_{Y|X}(y \,|\, X=x) \; = \; \frac{f_{X,Y}(x,y)}{f_X(x)} \;\;\;\;\; \mbox{for $y \in \mathsf{R}$}.
$$

Similarly, for values $y$ with $f_Y(y)>0$, the **conditional PDF** of $X$ given $Y=y$ is

$$
 f_{X|Y}(x|y) \; = \; f_{X|Y}(x \,|\, Y=y) \; = \; \frac{f_{X,Y}(x,y)}{f_Y(y)} \;\;\;\;\; \mbox{for $x \in \mathsf{R}$}.
$$

Note that $f_{Y|X}(y|x)$ is a PDF for $Y$ since it is positive and

$$
\begin{align} \int_{-\infty}^{\infty} \, f_{Y|X}(y|x) \, dy & \; = \; \int_{-\infty}^{\infty} \, \frac{f_{X,Y}(x,y)}{f_X(x)} \, dy \\ & \; = \; \frac{1}{f_X(x)} \int_{-\infty}^{\infty} \, f_{X,Y}(x,y) \, dy \\ & \; = \; \frac{1}{f_X(x)} \; {f_X(x)} \;\; = \;\; 1. \end{align}
$$

Similarly, $f_{X|Y}(x|y)$ is a PDF for $X$.

Motivation of this definition: _See handwritten material_

For the distribution of $Y$ given $X=x$, we can define conditional probabilities, the conditional CDF, and conditional expectation $\;$—$\;$ based on the **conditional PDF** $f_{Y|X}(y|x)$.

**Conditional probabilities** given $X=x$ are of the form

$$
 \mathsf{P}(a \leq Y \leq b \,|\, X=x) \; = \; \int_a^b \, f_{Y|X}(y|x) \, dy.
$$

The **conditional CDF** of $Y$ given $X=x$} is

$$
 F_{Y|X}(y|x) \; = \; \mathsf{P}(Y \leq y \,|\, X=x) \; = \; \int_{-\infty}^y \, f_{Y|X}(u|x) \, du.
$$

The **conditional expectation** of $Y$ given $X=x$ is

$$
 \mathsf{E}(Y \,|\, X=x) \; = \; \int_{-\infty}^{\infty} \, y \, f_{Y|X}(y|x) \, dy,
$$

when this integral exists.

**Example**

In a large college, 300 students sit exams in History and Geography.

![](Images/lec11/lec11_fig1.png)

Those scoring highly in one exam tend to do well in the other.

**Example**

Consider the joint PDF

$$
 f_{X,Y}(x,y) \; = \; \begin{cases} \; \frac{3}{16} \, x^2 + \frac{1}{2} \, y \; & \mbox{if $0 < x < 2$ and $0 < y < 1$}, \\ \; 0 & \mbox{otherwise.} \end{cases}
$$

![](Images/lec11/lec11_fig2.png)

In lecture 10, we derived the marginal PDFs for this $f_{X,Y}(x,y)$,

$$
 f_{X}(x) \; = \; \begin{cases} \; \frac{3}{16} \, x^2 + \frac{1}{4} & \; 0 < x < 2 \\ \; 0 & \; x \leq 0 \;\;\mbox{or}\;\; x \geq 2 \end{cases}
$$

and

$$
 f_{Y}(y) \; = \; \begin{cases} \; \frac{1}{2} + y & \; 0 < y < 1 \\ \; 0 & \; y \leq 0 \;\;\mbox{or}\;\; y \geq 1. \end{cases}
$$

Hence, the conditional PDF for $Y$ when $X=x \in (0,2)$ is

$$
 f_{Y|X}(y|x) \; = \; \frac{f_{X,Y}(x,y)}{f_X(x)} \; = \; \frac{3x^2/16 + y/2}{3x^2/16 + 1/4} \; = \; \frac{3x^2 + 8y}{3x^2 + 4}
$$

for $0<y<1$, and 0 otherwise.

Similarly, the conditional PDF for $X$ when $Y=y \in (0,1)$ is

$$
 f_{X|Y}(x|y) \; = \; \frac{f_{X,Y}(x,y)}{f_Y(y)} \; = \; \frac{3x^2/16 + y/2}{1/2 + y} \; = \; \frac{3x^2 + 8y}{8 + 16y}
$$

for $0<x<2$, and 0 otherwise.

It is convenient to define $f_{Y|X}(y|x)=0$ when $f_X(x)=0$, i.e., for $x<0$ or $x>2$.

Likewise, we set $f_{X|Y}(x|y)=0$ for $y<0$ or $y>1$.

![](Images/lec11/lec11_fig3.png)

![](Images/lec11/lec11_fig4.png)

The shapes of $f_{X|Y}(x|y)$ and $f_{Y|X}(y|x)$ can be seen in the 2D plot of $f_{X,Y}(x,y)$.

![](Images/lec11/lec11_fig2.png)

Dividing by $f_Y(y)$ or $f_X(x)$ scales the conditional PDFs, so that $\int f_{X|Y}(x|y) dx =1$ and $\int f_{Y|X}(y|x) dy =1$.

Suppose we wish to find the probability that $Y>0.5$ given that we know $X=1.5$.

We simply calculate

$$
 \int_{1/2}^1 \, f_{Y|X} \left( y \,|\, X=\frac{3}{2} \right) \, dy \; = \; \int_{1/2}^1 \, \frac{3(3/2)^2 + 8y}{3(3/2)^2 + 4} \, dy
$$

$$
 \; = \; \frac{1}{43} \, \int_{1/2}^1 \, 27 + 32y \, dy \;\; = \;\; \frac{51}{86}.
$$

**The multiplication rule**

It follows from the definitions of $f_{Y|X}(y|x)$ and $f_{X|Y}(x|y)$ that

$$
\begin{align} f_{X,Y}(x,y) & = f_X(x) \, f_{Y|X}(y|x) \\ & = f_Y(y) \, f_{X|Y}(x|y) \end{align}
$$

whenever $f_X(x) > 0$ and $f_Y(y) > 0$.

Recall that $X$ and $Y$ are independent if and only if

$$
 f_{X,Y}(x,y) \, = \, f_X(x) \, f_{Y}(y) \;\;\;\; \mbox{for all $x \in \mathsf{R}$, $y \in \mathsf{R}$}.
$$

So the property of independence is equivalent to

$$
 f_{Y|X}(y|x) \; =\; f_Y(y) \;\;\;\; \mbox{for all $y \in \mathsf{R}$, for all $x$ such that $f_X(x)>0$}
$$

and to

$$
 f_{X|Y}(x|y) \; =\; f_X(x) \;\;\;\; \mbox{for all $x \in \mathsf{R}$, for all $y$ such that $f_Y(y)>0$}.
$$

**Example**

In arbitration after a spate of treacherous activity, the Pirate Council rules the following division of spoils:

Captain Kidd must take a random number $X \sim \mathrm{Unif}(0,1)$ and give a fraction $X$ of his gold to Captain Calico Jack Rackham.

Captain Rackham must take $Y \sim \mathrm{Unif}(0,1)$ and give a fraction $Y$ of the gold he received to the infamous Blackbeard.

Let $Z$ be the fraction of Captain Kidd’s gold that eventually passes to Blackbeard (so $Z=X\,Y$).

Find the PDF of $Z$.

We have

$$
 f_X (x) \; = \; \begin{cases} \, 1 \; & 0 < x < 1 \\ \, 0 & \mbox{otherwise,} \end{cases}
$$

$$
 f_{Z|X}(z|x) \; = \; \begin{cases} \, 1/x \; & 0 < z < x \\ \, 0 & \mbox{otherwise}. \end{cases}
$$

_See handwritten material_

From $f_X (x)$ and $f_{Z|X}(z|x)$, non-zero values of the joint PDF are

$$
\begin{align} f_{X,Z}(x,z) & = f_X (x) \, f_{Z|X}(z|x) \\ & = 1 \, \cdot \, \frac{1}{x} \;\;\;\;\;\; \mbox{for $0 < x < 1$ and $0 < z < x$}. \end{align}
$$

![](Images/lec11/lec11_fig5.png)

Note the triangular shape of the region where $f_{X,Z}(x,z) > 0$.

Hence, for $0 < z < 1$,

$$
 f_Z (z) \; = \; \int_z^1 \, f_{X,Z}(x,z) \, dx \; =\; \int_z^1 \, \frac{1}{x} \, dx \; =\; \left[\, \log(x) \, \right]_z^1 \; = \; -\log(z).
$$

## 4.3 More on Expectation

**Lecture 12**

**Lemma**

Suppose $X$ is a continuous RV with $P(X \geq 0) = 1$ and $\mathsf{E}(X) < \infty$. Then

$$
 \mathsf{E}(X) \; = \; \int_0^{\infty} \,\mathsf{P}(X \geq t) \,dt.
$$

**Proof**

![](Images/lec12/lec12_fig1.png)

$$
 \mathsf{E}(X) \; = \; \int_0^{\infty} \, x \, f_X(x) \, dx \; = \; \int_0^{\infty} \,\left\{ \int_0^x \, dt \right\} \, f_X(x) \, dx.
$$

Rearrange the integral and change the order of integration:

![](Images/lec12/lec12_fig2.png)

$$
\begin{align} \mathsf{E}(X) & = \int_0^{\infty} \, x \, f_X(x) \, dx \; = \; \int_0^{\infty} \int_0^x \, f_X(x) \, dt \, dx \\ & = \int_0^{\infty} \int_t^{\infty} \, f_X(x) \, dx \, dt \; = \; \int_0^{\infty} \,\mathsf{P}(X \geq t) \, dt. \end{align}
$$

**Law of the Unconscious Statistician**

**Theorem**

Suppose $X$ is a continuous RV with PDF $f_X(x)$, $\,g$: $\mathsf{R}\rightarrow \mathsf{R}$ is a positive function, and $g(X)$ is a continuous RV.

_See handwritten material_

Then

$$
\begin{equation} \mathsf{E}[\,g(X)\,] \; = \; \int_{-\infty}^{\infty} \, g(x) \, f_X(x) \, dx. \tag{4.2} \end{equation}
$$

**Proof**

Since $g(X)$ is a positive, continuous RV, by the lemma,

$$
 \mathsf{E}[\,g(X)\,] \; = \; \int_{0}^{\infty} \mathsf{P}[\, g(X) \geq t \,] \, dt \; = \; \int_{t=0}^{\infty} \left\{ \int_{\{x:\, g(x) \geq t\}} \! f_X(x) \, dx \right\} dt.
$$

Hence,

$$
\begin{align} \mathsf{E}[g(X)] & = \int \int_{\{(x,t): \; t \geq 0, \, g(x) \geq t\}} \, f_X(x) \; dx \; dt \\ & = \int_{x=-\infty}^{\infty} \, \int_{\{t:\, 0 \leq t \leq g(x)\}} \, f_X(x) \; dt \; dx \\ & = \int_{x=-\infty}^{\infty} \, \int_0^{g(x)} \, f_X(x) \; dt \; dx \\ & = \int_{x=-\infty}^{\infty} \left\{ \int_0^{g(x)} dt \right\} \, f_X(x) \, dx \\ & = \int_{-\infty}^{\infty} g(x) \, f_X(x) \, dx. \end{align}
$$

_See handwritten material_

The theorem can be extended to the case of a function $g$ which takes positive and negative values, as long as $\mathsf{E}(g(X))$ is defined.

The details are outlined below.

First, generalise the lemma to a general, continuous RV $X$.

**Lemma**

If $\mathsf{E}(|X|) < \infty$, then

$$
 \mathsf{E}(X) \; = \; -\int_{-\infty}^0 \,\mathsf{P}(X \leq t) \,dt + \int_0^{\infty} \,\mathsf{P}(X \geq t) \,dt.
$$

**Proof**

Write

$$
 \mathsf{E}(X) \; = \; \int_{-\infty}^{\infty} \, x \, f_X(x) \, dx \; = \; \int_{-\infty}^0 \, x \, f_X(x) \, dx + \int_0^{\infty} \, x \, f_X(x) \, dx.
$$

Apply the argument used to prove the original lemma to show that

$$
 \int_{-\infty}^0 \, x \, f_X(x) \, dx \; = \; - \int_{-\infty}^0 \, \mathsf{P}(X \leq t) dt.
$$

We already have

$$
 \int_0^{\infty} \, x \, f_X(x) \, dx \; = \; \int_0^{\infty} \, \mathsf{P}(X \geq t) dt,
$$

so the result of the new lemma follows.

Applying the new lemma to the continuous RV $g(X)$ gives

$$
 \mathsf{E}(g(X)) \; = \; -\int_{-\infty}^0 \,\mathsf{P}(g(X) \leq t) \,dt + \int_0^{\infty} \,\mathsf{P}(g(X) \geq t) \,dt.
$$

Similar arguments to those used to prove [(4.2)](Ch4-joint-distributions.html#eq:lus) imply the above expression is equal to

$$
 -\int_{-\infty}^{\infty} I[g(x) \leq 0] \; (-g(x)) \, f_X(x) \, dx \; + \; \int_{-\infty}^{\infty} I[g(x) \geq 0] \; g(x) \, f_X(x) \, dx
$$

and the result follows.

**Expectation with two random variables**

We now state, without proof, a 2-dimensional version of the Law of the Unconscious Statistician.

A proof can be constructed following the same steps as in the 1-dimensional case.

**Theorem**

Suppose $X$ and $Y$ are continuous RVs with joint PDF $f_{X,Y}(x,y)$ and $h$: $\mathsf{R}^2 \rightarrow \mathsf{R}$ is a continuous function.

Then

$$
 \mathsf{E}[\,h(X,Y)\,] \; = \; \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} \, h(x,y) \, f_{X,Y}(x,y) \, dy \, dx
$$

as long as $\mathsf{E}(|h(X,Y)|)$ is defined, i.e., finite.

**Proposition**

If $X$ and $Y$ are jointly continuous RVs, $a \in \mathsf{R}$ and $b \in \mathsf{R}$, then

$$
 \mathsf{E}[\,a\,X + b\,Y\,] \; = \; a \, \mathsf{E}(X) + b \, \mathsf{E}(Y).
$$

**Proof**

_See handwritten material_

**Proposition**

Suppose $X$ and $Y$ are **independent**, jointly continuous RVs, and $g$ and $h$ are functions from $\mathsf{R}\rightarrow \mathsf{R}$.

If the relevant integrals exist,

i) $\;\mathsf{E}[\,XY\,] \; = \; \mathsf{E}(X) \, \mathsf{E}(Y)$

ii) $\;\mathsf{E}[\,g(X) \, h(Y)\,] \; = \; \mathsf{E}[g(X)] \; \mathsf{E}[h(Y)].$

**Proof**

_See handwritten material_

## 4.4 Covariance

Suppose $X$ and $Y$ are random variables and $\mathrm{Var}(X)$ and $\mathrm{Var}(Y)$ both exist.

**Definition**

The **covariance** of $X$ and $Y$ is

$$
 \mathrm{Cov}(X,Y) \; = \; \mathsf{E}\{\, [X-\mathsf{E}(X)] \, [Y-\mathsf{E}(Y)] \,\}.
$$

Note that

$$
\begin{align} Cov(X,Y) & = \mathsf{E}\{\, [X-\mathsf{E}(X)] \, [Y-\mathsf{E}(Y)] \,\} \\ & = \mathsf{E}(X\,Y) - \mathsf{E}(X)\,\mathsf{E}(Y) - \mathsf{E}(X)\,\mathsf{E}(Y) + \mathsf{E}(X)\,\mathsf{E}(Y) \\ & = \mathsf{E}(X\,Y) - \mathsf{E}(X)\,\mathsf{E}(Y). \end{align}
$$

**Definition**

The **correlation** between $X$ and $Y$ is

$$
 \mathrm{Corr}(X,Y) \; = \; \frac{\mathrm{Cov}(X,Y)}{\sqrt{\mathrm{Var}(X)\,\mathrm{Var}(Y)}} \, .
$$

**Properties of covariance and correlation**

You should **know and be able to apply** these results. (You should not expect to be asked to prove them.)

**Propositions**

i) $\; \mathrm{Cov}(X,X) \; = \; \mathrm{Var}(X)$

ii) $\; \mathrm{Cov}(X,Y) \; = \; \mathrm{Cov}(Y,X)$

iii) $\; \mathrm{Cov}(a\,X+b\,Y,\,Z) \; = \; a\,\mathrm{Cov}(X,Z)+ b\,\mathrm{Cov}(Y,Z)$

iv) $\; \mathrm{Var}(a\,X+b\,Y) \; = \; a^2\,\mathrm{Var}(X)+ b^2\,\mathrm{Var}(Y)+2\,a\,b\,\mathrm{Cov}(X,Y)$

v) $\; -1 \; \leq \; \mathrm{Corr}(X,Y) \; \leq \; 1$

vi) $\; \mathrm{Corr}(X,Y) = 1 \; \Leftrightarrow \; Y = a\,X+b$ for some $a > 0$ and $b \in \mathsf{R}$

vii) $\,\mathrm{Corr}(X,Y) = -1 \Leftrightarrow Y = a\,X+b$ for some $a < 0$ and $b \in \mathsf{R}$

viii) $\;$If $X$ and $Y$ are independent, then $\mathrm{Cov}(X,Y)=0$ $\,$—$\,$ but $\mathrm{Cov}(X,Y)=0$ does **not** imply $X$ and $Y$ are independent.

_For completeness, proofs of the above propositions are supplied in the supplementary material._
