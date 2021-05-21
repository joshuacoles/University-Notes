# Chapter 2 Random variables and cumulative distribution functions

**Lecture 2**

## 2.1 Probability density functions (PDFs)

Recall that a random variable is a function $X: \Omega \rightarrow \mathsf{R}$.

A discrete RV takes values in a set which is finite or countable,

$$
 X(\omega) \, \in \, \{x_1, x_2, \ldots \} \;\;\; \mbox{for $\omega \in \Omega$},
$$

and

$$
 \mathsf{P}(a \leq X \leq b) \; = \; \sum_{x_i: \, a \leq x_i \leq b} \, \mathsf{P}(X=x_i).
$$

**Definition**

We say $X$ is a **continuous RV** if there exists a piecewise continuous function $f_X: \mathsf{R}\rightarrow [0,\infty)$ such that for all $a \leq b$

$$
 \mathsf{P}(a \leq X \leq b) \; = \; \int_{a}^{b} \, f_{X}(x) \, dx.
$$

Then, $f_X(x)$ is the **probability density function** (PDF) of $X$.

The probability that $X$ lies in an interval is given by the area under the curve $f_X(x)$ over that interval.

![](Images/lec2/lec2_fig1.png)

$$
 \mathsf{P}(a \leq X \leq b) \; = \; \int_a^b \, f_X(x) \, dx.
$$

Since

$$
 \mathsf{P}(a \leq X \leq b) \; = \; \int_{a}^{b} \, f_X(x) \, dx,
$$

it is necessary that i) $\; f_X(x) \geq 0$ for all $x \in \mathsf{R}$ ii) $\; \int_{-\infty}^{\infty} \, f_X(x) \, dx \; = \; 1$.

Note that, in general, $f_X(x) \neq \mathsf{P}(X=x)$.

In fact,

$$
 \mathsf{P}(X=a) \; = \; \int_{a}^{a} \, f_X(x) \, dx \; = \; 0
$$

and

$$
 \mathsf{P}(a < X < b) \; = \; \mathsf{P}(a \leq X \leq b).
$$

![](Images/lec2/lec2_fig2.png)

Consider the event that $X$ lies in the interval $(a,\,a+\delta)$.

If $f_X(x)$ is continuous at $a$, then for small $\delta$

$$
 \mathsf{P}(a < X < a+\delta) \; = \; \int_a^{a+\delta} \, f_X(x) \, dx \; \approx \; \delta \, f_X(a).
$$

The **uniform distribution**

**Definition**

The random variable $X$ has a **uniform distribution** on $(a,b)$, written as $X \sim \mathrm{Unif}(a,b)$ or $X \sim U(a,b),$ if it has PDF

$$
 f_X(x) \; = \; \begin{cases} \frac{1}{b-a} & \text{for $a < x < b$}, \\ 0 & \text{otherwise}. \end{cases}
$$

![](Images/lec2/lec2_fig3.png)

In the bus example

![](Images/lec1/lec1_fig1.png)

Your arrival time $Z$ is a $\mathrm{Unif}(0,60)$ RV.

**Example**

Suppose $X \sim \mathrm{Unif}(0,10)$.

Find $\mathsf{P}(2 < X < 15)$.

_See handwritten material_

## 2.2 Expectation and variance

Recall that if $X$ is a discrete RV, its expectation is

$$
 \mathsf{E}(X) \; = \; \sum_{x_i} \, x_i \, P(X=x_i).
$$

**Definition**

**The expectation** of a continuous random variable $X$ is

$$
 \mathsf{E}(X) \; = \; \int_{-\infty}^{\infty} \, x \, f_X(x) \, dx,
$$

as long as

$$
 \int_{-\infty}^{\infty} \, |x| \, f_X(x) \, dx \, < \, \infty.
$$

Question: $\,$How should we define $\mathsf{E}(X^2)\,$?

**The law of the unconscious statistician**

For a function $g: \mathsf{R}\rightarrow \mathsf{R}$,

$$
 \mathsf{E}[g(X)] \; = \; \int_{-\infty}^{\infty} \, g(x) \, f_X(x) \, dx
$$

whenever the integral exists.

**Proof**

Treat $Y=g(X)$ as a random variable.

Find $f_Y(y)$, the PDF of~$Y$, then use the original definition of expectation:

$$
 \mathsf{E}(Y) \; = \; \int_{-\infty}^{\infty} \, y \, f_Y(y) \, dy,
$$

and show this equals $\int_{-\infty}^{\infty} \, g(x) \, f_X(x) \, dx$ — $\,$see Ch. 4 for details.

**Proposition**

Whenever the integrals exist

i) $\; \mathsf{E}(a\,X+b) \; = \; a\,\mathsf{E}(X) + b$

ii) $\; \mathsf{E}[g(X) + h(X)] \; = \; E[g(X)] + \mathsf{E}[h(X)]$.

**Proof**

Apply the law of the unconscious statistician.

_See handwritten material_

**Definition**

**The variance** of $X$ is defined to be

$$
 \mathrm{Var}(X) \; = \; \mathsf{E}[ \, (X-\mathsf{E}(X))^2 \, ]
$$

— just as for a discrete RV.

**Definition**

**The standard deviation** of $X$ is

$$
 SD(X) \; = \; \sqrt{\mathrm{Var}(X)}.
$$

**Lemma**

$$
 \mathrm{Var}(X) \; = \; \mathsf{E}(X^2) - [\mathsf{E}(X)]^2.
$$

**Proof**

Using previous propositions (i) and (ii),

$$
\begin{align} \mathrm{Var}(X) & = \mathsf{E}[ \, (X-\mathsf{E}(X))^2 \, ] \\ & = \mathsf{E}[ \, X^2 - 2 \, X \, \mathsf{E}(X) + [\mathsf{E}(X)]^2 \, ] \\ & = \mathsf{E}(X^2) - 2 \mathsf{E}(X) \mathsf{E}(X) + [\mathsf{E}(X)]^2 \\ & = \mathsf{E}(X^2) - [\mathsf{E}(X)]^2 \end{align}
$$

**Lemma**

$$
 \mathrm{Var}(a+b\,X) \; = \; b^2 \, \mathrm{Var}(X)
$$

**Proof**

$$
\begin{align} \mathrm{Var}(a+b\,X) & = \mathsf{E}[ \, (a+b\,X)^2 \, ] - [\mathsf{E}(a+b\,X)]^2 \\ & = \mathsf{E}[a^2 +2ab\,X +b^2X^2] - [a+b\,\mathsf{E}(X)]^2 \\ & = a^2 +2ab\,\mathsf{E}(X) +b^2\,\mathsf{E}(X^2) - a^2 -2ab\,\mathsf{E}(X) -b^2[\mathsf{E}(X)]^2 \\ & = b^2 ( \, \mathsf{E}(X^2) - [\mathsf{E}(X)]^2 \,) \\ & = b^2 \, \mathrm{Var}(X) \end{align}
$$

**Example**

Suppose $X$ has PDF

$$
 f_X(x) \; = \; \begin{cases} \frac{3}{4} (1-x^2) & -1 < x < 1, \\ 0 & \text{otherwise}. \end{cases}
$$

Calculation shows that

$$
 \mathsf{E}(X) \; = \; 0 \;\;\; \mbox{and} \;\;\; \mathsf{E}(X^2) \; = \; \frac{1}{5}.
$$

Hence, we can conclude

$$
 \mathrm{Var}(X) \; = \; \mathsf{E}(X^2) -[\mathsf{E}(X)]^2 \; = \; \frac{1}{5}.
$$

## 2.3 Independence of random variables

**Lecture 3**

**Definition**

**Events $A$ and $B$ are independent** if

$$
 \mathsf{P}(A \cap B) \; = \; \mathsf{P}(A) \, \mathsf{P}(B).
$$

**Definition**

**The random variables $X$ and $Y$ are independent** if

$$
\begin{equation} \mathsf{P}(X \leq x, Y \leq y) \; = \; \mathsf{P}(X \leq x) \, \mathsf{P}(Y \leq y) \;\;\; \mbox{for all $x$ and $y$}. \tag{2.1} \end{equation}
$$

Note: This definition applies to both discrete and continuous RVs.

However, for continuous RVs, the property

$$
 \mathsf{P}(X = x, Y = y) \; = \; \mathsf{P}(X = x) \, \mathsf{P}(Y = y) \;\;\; \mbox{for all $x$ and $y$}
$$

does **not** imply independence — both sides are automatically zero.

We might instead have defined RVs $X$ and $Y$ to be independent if

$$
 \mathsf{P}(X \in (x_1,x_2], Y \in (y_1,y_2]) \; = \; \mathsf{P}(X \in (x_1,x_2]) \, \mathsf{P}(Y \in (y_1,y_2])
$$

$$
\begin{equation} \mbox{for all $x_1$, $x_2$, $y_1$ and $y_2 \in \mathsf{R}$.} \tag{2.2} \end{equation}
$$

In fact, condition [(2.1)](Ch2-Random-variables.html#eq:ind) $\,\Leftrightarrow\,$ condition [(2.2)](Ch2-Random-variables.html#eq:altv-ind).

So we could use either definition.

Proof of the equivalence of the two definitions: In a Problems Class.

For continuous RVs, independence can be stated in terms of PDFs — $\,$but this involves the joint PDF of two RVs $X$ and $Y$, which we have not yet introduced.

We shall return to this later in the course.

## 2.4 Cumulative distribution functions

**Definition**

**The cumulative distribution function** (CDF) of the random variable $X$ is the function $F_X : \mathsf{R}\rightarrow [0,1]$ defined by

$$
 F_X(x) \; = \; \mathsf{P}(X \leq x).
$$

Note: $\,$This definition applies to both discrete and continuous RVs.

We may sometimes omit the subscript $X$ and write $F(x)$ if it is clear from the context that we are referring to the RV $X$.

**Theorem**

The CDF of the random variable $X$ has the following properties

i) $\,F_X$ is increasing, i.e., if $x \leq y$, then $F_X(x) \leq F_X(y)$,

ii) $\,\lim _{x \rightarrow -\infty}F_X(x) \, = \, 0$,

iii) $\,\lim _{x \rightarrow \infty}F_X(x) \, = \, 1$,

iv) $\,F_X$ is right-continuous, i.e., if $x_n \downarrow x$, then $F_X(x_n) \downarrow F_X(x)$.

Notation: $\,$Here, $a_n \downarrow a$ means that $\{a_n\}$ is a decreasing sequence with $a_n > a$ for all $n$ and $\lim_{n \rightarrow \infty} a_n = a$.

_See handwritten material for a full proof_

**Proof of (i)**

We need to show

$$
 F_X(x) \; \leq \; F_X(y) \;\;\; \mbox{for $x < y$}
$$

We have

$$
\begin{align} F_X(x) & = \mathsf{P}(X \leq x) \;\; = \;\; \mathsf{P}\{\omega : X(\omega) \leq x \}, \\ F_X(y) & = \mathsf{P}(X \leq y) \;\; = \;\; \mathsf{P}\{\omega : X(\omega) \leq y\}. \end{align}
$$

Now, $\;x < y ; \Rightarrow \; \{\omega : X(\omega) \leq x \} \; \subseteq \; \{\omega : X(\omega) \leq y \}$.

So

$$
 \mathsf{P}\{\omega : X(\omega) \leq x \} \; \leq \; \mathsf{P}\{\omega : X(\omega) \leq y \},
$$

i.e.,

$$
 F_X(x) \; \leq \; F_X(y).
$$

Before proving the rest of the Theorem, we prove a Lemma.

**Lemma**

i) If $A_1 \, \subset \, A_2 \, \subset \, \ldots \,$ are events, then

$$
 \mathsf{P}(\cup_{n=1}^{\infty} \, A_n) \; = \; \lim_{n \rightarrow \infty} \mathsf{P}(A_n),
$$

ii) $\,$If $B_1 \, \supset \, B_2 \, \supset \, \ldots \,$ are events, then

$$
 \mathsf{P}(\cap_{n=1}^{\infty} \, B_n) \; = \; \lim_{n \rightarrow \infty} \mathsf{P}(B_n).
$$

**Proof**

_See handwritten material for full details_

The proof uses the axioms of probability:

- $\mathsf{P}(E) \; \in \; [0,\,1]$ for any event $E$.
- $\mathsf{P}(\Omega) \; = \; 1.$
- If $E_1$ and $E_2$ are disjoint,

  $$
   \mathsf{P}(E_1 \cup E_2) \; = \; \mathsf{P}(E_1) + \mathsf{P}(E_2).
  $$

- If $E_1, \, E_2, \, \ldots$ are disjoint,
  $$
   \mathsf{P}(\cup_{i=1}^{\infty} E_i ) \; = \; \sum_{i=1}^{\infty} \mathsf{P}(E_i).
  $$

We are now ready to prove the rest of the Theorem.

**Proof of (iv): $F_X(x)$ is right-continuous at $x$**

Let $x_n \downarrow x$

**Define**

$$
\begin{align} B_n & = \{\omega : X(\omega) \leq x_n\}, \;\;\; n=1, \, 2, \,\ldots \, , \\ B & = \{\omega : X(\omega) \leq x\}. \end{align}
$$

Then $\;B_1 \supset B_2 \supset \ldots$ and, I claim,

$$
 \cap_{n=1}^\infty \; B_n \; = \; B.
$$

**Proof of the claim that $\cap_{n=1}^\infty \; B_n \; = \; B$**

a) Suppose $\omega \in B$,

then $\,X(\omega) \; \leq \; x \; \leq \; x_n$ for all $n$

so $\,\omega \in B_n$ for all $n$

and $\,\omega \in \cap_{n=1}^\infty B_n$.

b) Suppose $\omega \in \cap_{n=1}^\infty B_n$,

then $\,X(\omega) \; \leq \; x_n$ for all $n$

therefore $\;X(\omega) \; \leq \; \lim_{n \rightarrow \infty} x_n \; = \; x$

so $\,\omega \in B$.

Thus, the claim is proved.

Now we use Lemma (ii).

Since $\,B_1 \supset B_2 \supset \ldots \;$,

$$
\begin{equation} \mathsf{P}\{ \cap_{n=1}^\infty \; B_n \} \; = \; \lim_{n \rightarrow \infty} \mathsf{P}(B_n). \tag{2.3} \end{equation}
$$

The RHS of [(2.3)](Ch2-Random-variables.html#eq:int-bn) is

$$
 \lim_{n \rightarrow \infty} \mathsf{P}(X \leq x_n) \; = \; \lim_{n \rightarrow \infty} F_X(x_n).
$$

The LHS of [(2.3)](Ch2-Random-variables.html#eq:int-bn) is

$$
 \mathsf{P}(B) \; = \; \mathsf{P}(X \leq x) \; = \; F_X(x).
$$

So we have $\, \lim_{n \rightarrow \infty} F_X(x_n) \; = \; F_X(x)$, as required.

Proofs of (ii) and (iii): See Problem Sheet 2.

**Lecture 4**

**Example: A discrete random variable**

Let $X$ be the number of Heads in 4 tosses of a fair coin.

$x$

$\mathsf{P}(X=x)$

0

1/16

1

4/16

2

6/16

3

4/16

4

1/16

The CDF is defined as

$$
 F_X(x) = \mathsf{P}(X \leq x), \;\;\; x \in \mathsf{R}.
$$

Thus,

$$
 F_X(x) \; = \; \begin{cases} \;\;\;0 & \text{for $x < 0$} \\ \;1/16 & \text{for $0 \leq x < 1$} \\ \;5/16 & \text{for $1 \leq x < 2$} \\ \;11/16 & \text{for $2 \leq x < 3$} \\ \;15/16 & \text{for $3 \leq x < 4$} \\ \;\;\;1 & \text{for $x \geq 4$} \end{cases}
$$

![](Images/lec4/lec4_fig1.png)

The size of the jump at $x$ is $\mathsf{P}(X=x)$, for $x=0$, 1, 2, 3 and 4.

**Example: A continuous random variable**

Scrat the squirrel buries an acorn in a 1 metre square patch of~earth.

Scrat chooses the location **uniformly** over the square:

Define co-ordinates in the range 0 to 1.

Then, for any set $A \subset [0,1] \times [0,1]$,

$$
 \mathsf{P}(\text{Acorn is buried in area $A$}) \; = \; \text{Area}(A).
$$

Let $Y$ be the distance from the acorn to the border of the square.

_Question:_ $\,$What is the CDF of the random variable $Y\,$?

_Answer:_

$$
 F_Y(y) \; = \; \begin{cases} 0 & \text{for $y < 0$} \\ 4y(1-y) & \text{for $0 \leq y \leq 1/2$} \\ 1 & \text{for $y > 1/2$} \end{cases}
$$

_See handwritten material_

![](Images/lec4/lec4_fig2.png)

**Relating the PDF and CDF**

We restrict attention here to the case of continuous RVs.

Recalling the definition of a PDF, the following relationship holds between the CDF $F_X(x)$ and PDF $f_X(x)$

$$
 F_X(x) \; = \; \mathsf{P}(X \leq x) \; = \; \int_{-\infty}^x \, f_X(u) \, du.
$$

So, by the fundamental theorem of calculus,

$$
\begin{equation} f_X(x) \; = \; \frac {d}{dx} \, F_X(x). \tag{2.4} \end{equation}
$$

Note: $\,$To be precise, property [(2.4)](Ch2-Random-variables.html#eq:ftc) holds where $f_X(x)$ is continuous.

_See handwritten material_

With $Y =$ The distance from the acorn to the border of the square, we found the CDF

$$
 F_Y(y) \; = \; \begin{cases} 0 & \text{for $y < 0$} \\ 4y-4y^2 & \text{for $0 \leq y \leq 1/2$} \\ 1 & \text{for $y > 1/2$}. \end{cases}
$$

Differentiating with respect to $y$, we find the PDF is

$$
 f_Y(y) \; = \; \begin{cases} 0 & \text{for $y < 0$} \\ 4-8y & \text{for $0 < y < 1/2$} \\ 0 & \text{for $y > 1/2$}. \end{cases}
$$

We did not define the PDF at $y=0$ or $y=1/2$.

![](Images/lec4/lec4_fig2.png)

We cannot differentiate $F_Y(y)$ at $y=0$.

Although the form of $F$ changes at $y=1/2$, it does have a derivative there — of zero.

However, we can define $f_Y(0)$ and $f_Y(1/2)$ arbitrarily — since this will not affect any probabilities

$$
 \mathsf{P}(a \leq Y \leq b) \; = \; \int_a^b \, f_Y(y) \, dy.
$$

Let us find $\mathsf{P}(Y \geq 1/4)$ in two ways:

a) $\,$Using the CDF

_See handwritten material_

b) $\,$Using the PDF

_See handwritten material_

**Expressing $\mathsf{P}(X < a)$**

**Definition**

If $F$ is a CDF and $a \in \mathsf{R}$, we define

$$
 F(a-) \; = \; \lim_{n \rightarrow \infty} \, F(a_n)
$$

where $\{a_n\}$ is a sequence such that $a_n \uparrow a$.

Here, $a_n \uparrow a$ means that $\{a_n\}$ is an increasing sequence with $a_n < a$ for all $n$ and $\lim_{n \rightarrow \infty} a_n = a$.

**Lemma**

For any random variable $X$ and $a \in \mathsf{R}$,

$$
 \mathsf{P}(X < a) = F_X(a-).
$$

**Proof**

Let $a_n \uparrow a$.

Then

$$
\begin{align} \mathsf{P}(X < a) & = \mathsf{P}\left[ \, \cup_{n=1}^{\infty} \, \{X \leq a_n\} \, \right] \\ & = \lim_{n \rightarrow \infty} \mathsf{P}(X \leq a_n) \\ & = F_X(a-). \end{align}
$$
