\



### 3.4 Bayes' theorem

Suppose that $ℙ\left( E \right)>0$ and $ℙ\left( F right)>0$ then using
the multiplication law,

$$
\begin{align}
ℙ\left( E \cap F \right)=ℙ\left( E \left| F \right)ℙ\left( F \right)=ℙ\left( F \left| E \right)ℙ\left( E \right) & & & text{}
\end{align}
$$

so that

$$
\begin{align}
ℙ\left( E \left| F \right) & = & \frac{ℙ \left( F \left| E \right) ℙ \left( E \right)}{ℙ \left( F \right)} & \text{(3.9)}\text{}text{}
\end{align}
$$

which gives a formula for reversing the conditioning. In many cases,
$ℙ\left( F \left| E right)$ might be straightforward to obtain but we
are interested in $ℙ\left( E \left| F right)$. For example, as a
patient visiting the doctor we are interested in
$ℙ\left( \text{disease} \left| \text{symptoms} right)$ whilst medical
evidence typically knows
$ℙ\left( \text{symptoms} \left| \text{disease} right)$.

Equation ([3.9](#x20-32002r3.9)) is often called Bayes'
theorem[1](#fn1x3) but there is a more general form which applies to
partitions of $Omega$.

Theorem 11 (Bayes' theorem)
If $\left\{ E_{1} , … ⁡ , E_{n} \right\}$ form a partition of $Omega$
and $ℙ\left( E_{i} right)>0$ for all $i$ then, for any $j=1,…⁡,n$,

$$
\begin{align}
ℙ\left( E_{j} \left| F \right) & = & \frac{ℙ \left( F \left| E_{j} \right) ℙ \left( E_{j} \right)}{\sum_{i = 1}^{n} ℙ \left( F \left| E_{i} \right) ℙ \left( E_{i} \right)}. & \text{(3.10)}\text{}text{}
\end{align}
$$

Proof: Equation ([3.10](#x20-32005r3.10)) follows from equation
([3.9](#x20-32002r3.9)) by taking $E=E_{j}$ and then using the law of
total probability, Theorem [10](nose9.htm#x19-3100710), for
$ℙ\left( F \right)$. $square$

Notes:

1.  

Recall that for any event $E$, $\left\{ E , E^{c} \right}$ forms a
partition so that for any event $E$,

$$
\begin{align}
ℙ\left( E \left| F \right) & = & \frac{ℙ \left( F \left| E \right) ℙ \left( E \right)}{ℙ \left( F \left| E \right) ℙ \left( E \right) + ℙ \left( F \left| E^{c} \right) ℙ \left( E^{c} \right)}. & text{}
\end{align}
$$

2.  

As with the law of total probability, the result can be extended to the
case where $E_{1},E_{2},…⁡$ form a partition and also that where
$E_{1},…⁡,E_{n}$ are disjoint with
$F\subset\left(\cup ⁡right)_{i = 1}^{n}E_{i}$.

Example 30 We revisit Example [29](nose9.htm#x19-3101529). Suppose
$1/4$, $1/8$ and $1/16$ of Buster, Rich and Owen's own deals made a
loss, respectively. What is the probability a randomly chosen deal that
made a loss is one of Buster's?

Let $L$ be the event that the deal made a loss. Then we know

$$
\begin{align}
ℙ\left( L \left| B \right) & = & \frac{1}{4},ℙ\left( B \right)=\frac{3}{1 0}\text{(Buster)} & \text{} \\ ℙ\left( L \left| R \right) & = & \frac{1}{8},ℙ\left( R \right)=\frac{5}{1 0}\text{(Rich)} & \text{} \\ ℙ\left( L \left| W \right) & = & \frac{1}{1 6},ℙ\left( W \right)=\frac{2}{1 0}\text{(Owen)} & text{}
\end{align}
$$

and, so by Bayes' Theorem

$$
\begin{align}
ℙ\left( B \left| L \right) & = & \frac{ℙ \left( L \left| B \right) ℙ \left( B \right)}{ℙ \left( L \left| B \right) ℙ \left( B \right) + ℙ \left( L \left| R \right) ℙ \left( R \right) + ℙ \left( L \left| W \right) ℙ \left( W \right)} & \text{} \\ & & & \text{} \\ & = & \frac{\left(\frac{1}{4} \times \frac{3}{1 0}\right)}{\left(\frac{1}{4} \times \frac{3}{1 0}\right) + \left(\frac{1}{8} \times \frac{5}{1 0}\right) + \left(\frac{1}{1 6} \times \frac{2}{1 0}\right)} & \text{} \\ & & & \text{} \\ & = & \frac{6}{6 + 5 + 1}=\frac{1}{2}. & text{}
\end{align}
$$

[1](#fn1x3-bk)[Thomas Bayes
(1701-1761)](https://en.wikipedia.org/wiki/Thomas_Bayes).

\


