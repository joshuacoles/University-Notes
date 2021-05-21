Chapter 5  
  
[Series](MA10207-web.html#QQ2-10-27)
---------------------------------------------------

What we study in this chapter is not really a new topic. We still consider sequences, but we now restrict our attention to sequences arising in the context of infinite sums. These are so common that they deserve special attention and a chapter of their own.

### 5.1 [Definition and convergence](MA10207-web.html#QQ2-10-28)

Definition 72.  
  
If $\left(\left( a_{n} \right)\right)_{n \in ℕ}$ is a real sequence, then $\sum_{n = 1}^{\infty} a_{n}$ is called an **infinite series** (or simply **series**). For any $N \in ℕ$ , the number $S_{N} = \sum_{n = 1}^{N} a_{n}$ is called a **partial sum** of the series.

Since for a given series, we have a partial sum $S_{N}$ for every $N \in ℕ$ , the partial sums form a sequence $\left(\left( S_{N} \right)\right)_{N \in ℕ}$ of their own. We now study convergence of this sequence of partial sums.

Definition 73.  
  
The series $\sum_{n = 1}^{\infty} a_{n}$ **converges** if the sequence of partial sums $\left(\left( S_{N} \right)\right)_{N \in ℕ}$ converges and **diverges** if the sequence of partial sums diverges. In the case of convergence, we write

$$
\sum_{n = 1}^{\infty} a_{n} = \underset{N \rightarrow \infty}{ \lim } S_{N} .
$$

Thus the expression $\sum_{n = 1}^{\infty} a_{n}$ really stands for two different things. On the one hand, we use it to denote the series itself, but on the other hand, it can mean the limit if we have convergence. If we write a formula such as

$$
\sum_{n = 1}^{\infty} a_{n} = L ,
$$

where $L \in ℝ$ , then this implicitly means that the series converges.

Just like for sequences, we can write

$$
\sum_{n = 1}^{\infty} a_{n} = \infty \text{or } \sum_{n = 1}^{\infty} a_{n} = - \infty
$$

if the partial sums diverge to $\infty$ or $- \infty$ .

Example 74.  
  
It is not too difficult to see that

$$
\sum_{n = 1}^{\infty} 1 = \infty .
$$

Example 75 (Geometric series).  
  
Suppose that $a \in ℝ$ . Find $\sum_{n = 0}^{\infty} a^{n}$ .

**Solution.** Consider the partial sums

$$
S_{N} = \sum_{n = 0}^{N} a^{n} = 1 + a + \dots  + a^{N} .
$$

Then

$$
a S_{N} = a + a^{2} + \dots  + a^{N + 1} .
$$

Hence

$$
\left( 1 - a \right) S_{N} = S_{N} - a S_{N} = 1 - a^{N + 1}
$$

and

$$
S_{N} = \frac{1 - a^{N + 1}}{1 - a}
$$

(unless $a = 1$ ). In order to solve the problem, we have to study convergence of $S_{N}$ , which we can now do with the help of the algebra of limits theorem and Proposition [36](MA10207-webch4.html#x8-21006r36). If $\left|a\right| < 1$ , it follows that

$$
\sum_{n = 0}^{\infty} a_{n} = \underset{N \rightarrow \infty}{ \lim } S_{N} = \frac{1}{1 - a} .
$$

If $\left|a\right| > 1$ , then $\sum_{n = 0}^{\infty} a^{n}$ diverges by Theorem [55](MA10207-webch4.html#x8-23009r55). (If $a > 1$ , then we can be more specific and say that

$$
\sum_{n = 0}^{\infty} a_{n} = \infty . \left(\right)
$$

This leaves two cases: $a = 1$ and $a = - 1$ . But the first of these we have already considered in Example [74](#x10-28008r74), because

$$
\sum_{n = 0}^{\infty} 1^{n} = \sum_{n = 0}^{\infty} 1 = \infty .
$$

For $a = - 1$ , we note that

$$
S_{0} = 1 , S_{1} = 1 - 1 = 0 , S_{2} = 1 - 1 + 1 = 1 , S_{3} = 1 - 1 + 1 - 1 = 0 , \dots  .
$$

Hence in this case, the series diverges.

Example 76.  
  
Find

$$
\sum_{n = 1}^{\infty} \frac{1}{n \left( n + 1 \right)} .
$$

**Solution.** Here the key observation is that

$$
\frac{1}{n \left( n + 1 \right)} = \frac{1}{n} - \frac{1}{n + 1} .
$$

Hence if we consider the partial sums

$$
S_{N} = \sum_{n = 1}^{N} \frac{1}{n \left( n + 1 \right)}
$$

again, we see that

$$
\begin{align}
\begin{matrix}S_{N} & =\left(1 - \frac{1}{2}\right)+\left(\frac{1}{2} - \frac{1}{3}\right)+\left(\frac{1}{3} - \frac{1}{4}\right)+\dots +\left(\frac{1}{N} - \frac{1}{N + 1}\right) \\ & =1-\frac{1}{N + 1}\rightarrow 1\end{matrix} & 
\end{align}
$$

as $N \rightarrow \infty$ . Hence

$$
\sum_{n = 1}^{\infty} \frac{1}{n \left( n + 1 \right)} = 1.
$$

Proposition 77.  
  
If $\sum_{n = 1}^{\infty} a_{n}$ is a convergent series, then $a_{n} \rightarrow 0$ as $n \rightarrow \infty$ .

Proof.  Suppose that $\sum_{n = 1}^{\infty} a_{n}$ converges and consider the partial sums

$$
S_{N} = \sum_{n = 1}^{N} a_{n} .
$$

Then $\left(\left( S_{N} \right)\right)_{N \in ℕ}$ is convergent, and by Theorem [65](MA10207-webch4.html#x8-25003r65), this means that it is a Cauchy sequence. Thus given $ϵ > 0$ , there exists $N_{0} \in ℕ$ such that $\left|S_{M} - S_{N}\right| < ϵ$ for all $M , N \geq N_{0}$ . If we consider $n \geq N_{0}$ , then we can choose $N = n$ and $M = n + 1$ in this inequality. This gives

$$
\left|a_{n}\right| = \left|S_{n + 1} - S_{n}\right| < ϵ .
$$

Hence $a_{n} \rightarrow 0$ as $n \rightarrow \infty$ . □

Note that the converse is false: if $a_{n} \rightarrow 0$ as $n \rightarrow \infty$ , it does **not** follow that $\sum_{n = 1}^{\infty} a_{n}$ converges. A counterexample is the series

$$
\sum_{n = 1}^{\infty} \frac{1}{\sqrt{n}} .
$$

Clearly $1 / \sqrt{n} \rightarrow 0$ as $n \rightarrow \infty$ , but the series diverges to $\infty$ , because

$$
\sum_{n = 1}^{N} \frac{1}{\sqrt{n}} = 1 + \frac{1}{\sqrt{2}} + \frac{1}{\sqrt{3}} + \dots  + \frac{1}{\sqrt{N}} \geq N \frac{1}{\sqrt{N}} = \sqrt{N} \rightarrow \infty
$$

as $N \rightarrow \infty$ .

As convergence of series is defined in terms of convergence of the partial sums, the results of the previous chapter apply here, too.

Theorem 78 (Algebra of limits for series).  
  
Suppose that $\sum_{n = 1}^{\infty} a_{n}$ and $\sum_{n = 1}^{\infty} b_{n}$ are convergent series. Then

1.  $\sum_{n = 1}^{\infty} \left( a_{n} + b_{n} \right) = \sum_{n = 1}^{\infty} a_{n} + \sum_{n = 1}^{\infty} b_{n}$ ,
2.  $\sum_{n = 1}^{\infty} \left( a_{n} - b_{n} \right) = \sum_{n = 1}^{\infty} a_{n} - \sum_{n = 1}^{\infty} b_{n}$ ,
3.  $\sum_{n = 1}^{\infty} \left( C a_{n} \right) = C \sum_{n = 1}^{\infty} a_{n}$ for any constant $C \in ℝ$ .

Proof.  This is an immediate consequence of the algebra of limits theorem for sequences (Theorem [42](MA10207-webch4.html#x8-21024r42)). □

Theorem 79.  
  
Suppose that $\sum_{n = 1}^{\infty} a_{n}$ and $\sum_{n = 1}^{\infty} b_{n}$ are convergent series. If $a_{n} \leq b_{n}$ for all $n \in ℕ$ , then

$$
\sum_{n = 1}^{\infty} a_{n} \leq \sum_{n = 1}^{\infty} b_{n} .
$$

Proof.  This is an immediate consequence of Proposition [18](MA10207-webch2.html#x6-13001r18).[(ii)](MA10207-webch2.html#x6-130042) and Proposition [37](MA10207-webch4.html#x8-21013r37). □

### 5.2 [Series of non-negative terms](MA10207-web.html#QQ2-10-29)

Here we study series $\sum_{n = 1}^{\infty} a_{n}$ such that $a_{n} \geq 0$ for every $n \in ℕ$ . It turns out that convergence is particularly easy to understand here. The reason is that the partial sums $S_{N} = \sum_{n = 1}^{N} a_{n}$ then automatically form an increasing sequence, as

$$
S_{N + 1} = S_{N} + a_{N + 1} \geq S_{N} , N \in ℕ .
$$

Proposition 80.  
  
Suppose that $\left(\left( a_{n} \right)\right)_{n \in ℕ}$ is a sequence with $a_{n} \geq 0$ for all $n \in ℕ$ . The series

$$
\sum_{n = 1}^{\infty} a_{n}
$$

converges if, and only if, there exists $M > 0$ such that

$$
\sum_{n = 1}^{N} a_{n} \leq M
$$

for all $N \in ℕ$ . If so, then

$$
\sum_{n = 1}^{N} a_{n} \leq M .
$$

Proof.  The sequence of partial sums is increasing, so it will converge if, and only if, it is bounded by Theorem [47](MA10207-webch4.html#x8-22015r47) and Proposition [41](MA10207-webch4.html#x8-21023r41). The inequality follows from Corollary [38](MA10207-webch4.html#x8-21014r38). □

Because of this fact, convergence of series of non-negative terms is often indicated by writing

$$
\sum_{n = 1}^{\infty} a_{n} < \infty .
$$

(But this makes no sense when there may be negative terms in the mix.)

Proposition 81.  
  
Suppose that $\left(\left( a_{n} \right)\right)_{n \in ℕ}$ is a sequence with $a_{n} \geq 0$ for all $n \in ℕ$ . If

$$
\sum_{n = 1}^{\infty} a_{n} < \infty ,
$$

then

$$
\underset{N \rightarrow \infty}{ \lim } \sum_{n = N}^{\infty} a_{n} = 0.
$$

Proof.  Consider the partial sums $S_{N} = \sum_{n = 1}^{N} a_{n}$ . If $\sum_{n = 1}^{\infty} a_{n} < \infty$ , then $\left(\left( S_{N} \right)\right)_{N \in ℕ}$ is a Cauchy sequence by Theorem [65](MA10207-webch4.html#x8-25003r65). Hence for all $ϵ > 0$ , there exists $N_{0} \in ℕ$ such that $\left|S_{M} - S_{N}\right| < ϵ$ for all $M , N \geq N_{0}$ . That is,

$$
\sum_{n = N}^{M} a_{n} = S_{M + 1} - S_{N} < ϵ
$$

whenever $N_{0} \leq N \leq M$ . Letting $M \rightarrow \infty$ , we obtain the inequality

$$
\sum_{n = N}^{\infty} a_{n} = \underset{M \rightarrow \infty}{ \lim } \sum_{n = N}^{M} a_{n} \leq ϵ .
$$

As $ϵ > 0$ is arbitrary, this means that $\sum_{n = N}^{\infty} a_{n} \rightarrow 0$ as $N \rightarrow \infty$ . □

### 5.3 [Absolute convergence](MA10207-web.html#QQ2-10-30)

The reasoning in the preceding section does not apply to a series $\sum_{n = 1}^{\infty} a_{n}$ if the terms may have either sign, but it always applies to $\sum_{n = 1}^{\infty} \left|a_{n}\right|$ .

Definition 82.  
  
We say that a series $\sum_{n = 1}^{\infty} a_{n}$ **converges absolutely** if

$$
\sum_{n = 1}^{\infty} \left|a_{n}\right| < \infty .
$$

Theorem 83.  
  
If $\sum_{n = 1}^{\infty} a_{n}$ converges absolutely, then it converges and

$$
\left| \sum_{n = 1}^{\infty} a_{n} \left| \leq \sum_{n = 1}^{\infty} \left|a_{n}\right| .
$$

Proof.  Consider the partial sums

$$
A_{N} = \sum_{n = 1}^{N} a_{n} \text{and } S_{N} = \sum_{n = 1}^{N} \left|a_{n}\right| .
$$

We know that $\left(\left( S_{N} \right)\right)_{N \in ℕ}$ is convergent and hence bounded by Proposition [41](MA10207-webch4.html#x8-21023r41). The triangle inequality implies that $\left|A_{N}\right| \leq S_{N}$ for all $N \in ℕ$ , and hence $\left(\left( A_{N} \right)\right)_{N \in ℕ}$ is bounded as well, and so is the sequence $\left(\left( S_{N} + A_{N} \right)\right)_{N \in ℕ}$ .

Furthermore, $\left(\left( S_{N} + A_{N} \right)\right)_{N \in ℕ}$ is increasing since

$$
\begin{align}
\begin{matrix}S_{N + 1}+A_{N + 1} & =S_{N}+\left|a_{N + 1}\right|+A_{N}+a_{N + 1} \\ & =S_{N}+A_{N}+\left\{\begin{matrix} \begin{matrix}2\left|a_{N + 1}\right| & \text{if  }a_{N + 1}>0\text{}, \\ 0 & \text{if  }a_{N + 1}\leq 0\text{},\end{matrix} \end{matrix}\right\end{matrix} & 
\end{align}
$$

for all $N \in ℕ$ . According to Theorem [47](MA10207-webch4.html#x8-22015r47), the limit

$$
L_{1} = \underset{N \rightarrow \infty}{ \lim } \left( S_{N} + A_{N} \right)
$$

exists. But by the hypothesis, the limit

$$
L_{2} = \underset{N \rightarrow \infty}{ \lim } S_{N}
$$

exists as well. Hence

$$
\underset{N \rightarrow \infty}{ \lim } A_{N} = L_{1} - L_{2}
$$

by Theorem [42](MA10207-webch4.html#x8-21024r42). Therefore, the series $\sum_{n = 1}^{\infty} a_{n}$ converges.

In order to prove the inequality, we use the fact that $\left|A_{N}\right| \leq S_{N}$ again. By Proposition [44](MA10207-webch4.html#x8-21039r44) and Proposition [37](MA10207-webch4.html#x8-21013r37), it follows that

$$
\left| \sum_{n = 1}^{\infty} a_{n} \left| = \underset{N \rightarrow \infty}{ \lim } \left|A_{N}\right| \leq \underset{N \rightarrow \infty}{ \lim } S_{N} = \sum_{n = 1}^{\infty} \left|a_{n}\right| .
$$

□

It is possible, however, that a sequence converges but does not converge absolutely. We will see examples of this later.

Definition 84.  
  
If a series converges but does not converge absolutely, then we say that it **converges conditionally**.

Theorem 85 (Rearrangement of series).  
  
Suppose that $\sum_{n = 1}^{\infty} a_{n}$ converges absolutely. Then for any bijection $\sigma : ℕ \rightarrow ℕ$ ,

$$
\sum_{n = 1}^{\infty} a_{\sigma \left( n \right)} = \sum_{n = 1}^{\infty} a_{n}
$$

and the convergence is absolute.

So for absolutely convergent series, the order of summation can be rearranged arbitrarily without changing the result. This is not true for conditionally convergent series. In fact, the Riemann rearrangement theorem (not covered here) says that a conditionally convergent series can be rearranged so that it converges to an arbitrary value or even diverges.

Proof.  Write

$$
L = \sum_{n = 1}^{\infty} a_{n} .
$$

Fix $ϵ > 0$ and choose $N_{1} \in ℕ$ such that

$$
\left|\sum_{n = 1}^{N} a_{n} - L\right|<\frac{ϵ}{2}
$$

(1)

for all $N \geq N_{1}$ and at the same time,

$$
\sum_{n = N_{1} + 1}^{\infty} \left|a_{n}\right| < \frac{ϵ}{2} .
$$

This is possible by Proposition [81](#x10-29002r81), because $\sum_{n = 1}^{\infty} \left|a_{n}\right| < \infty$ .

Now choose

$$
N_{2} =  \max  \left\{ \left(\sigma\right)^{- 1} \left( 1 \right) , \dots  , \left(\sigma\right)^{- 1} \left( N_{1} \right) \right\} .
$$

Then $N_{2} \geq N_{1}$ and

$$
\left\{ 1 , \dots  , N_{1} \right\} \subseteq \left\{ \sigma \left( 1 \right) , \dots  , \sigma \left( N_{2} \right) \right\} .
$$

Now let $N \geq N_{2}$ and consider

$$
\sum_{n = 1}^{N} a_{\sigma \left( n \right)} - \sum_{n = 1}^{N} a_{n} .
$$

For any $n \in ℕ$ , the term $a_{n}$ may appear in neither sum, or in exactly one of them, or in both. But in the last case, it will appear with opposite signs and will be cancelled out; and this will certainly happen for any $n \leq N_{1}$ . Therefore,

$$
\left|\sum_{n = 1}^{N} a_{\sigma \left( n \right)} - \sum_{n = 1}^{N} a_{n}\right| \leq \sum_{n = N_{1} + 1}^{\infty} \left|a_{n}\right| < \frac{ϵ}{2} .
$$

Using ([1](#x10-30008r1)), we derive the inequality

$$
\left|\sum_{n = 1}^{N} a_{\sigma \left( n \right)} - L\right| \leq \left|\sum_{n = 1}^{N} a_{\sigma \left( n \right)} - \sum_{n = 1}^{N} a_{n}\right| + \left|\sum_{n = 1}^{N} a_{n} - L\right| < ϵ .
$$

So we have shown that

$$
\sum_{n = 1}^{N} a_{\sigma \left( n \right)} \rightarrow L
$$

as $N \rightarrow \infty$ .

In order to prove that the convergence is absolute, it suffices to show that

$$
\sum_{n = 1}^{\infty} \left|a_{\sigma \left( n \right)}\right| < \infty .
$$

But the above arguments apply to this series as well and show that in fact

$$
\sum_{n = 1}^{\infty} \left|a_{\sigma \left( n \right)}\right| = \sum_{n = 1}^{\infty} \left|a_{n}\right| < \infty .
$$

□

### 5.4 [Tests for convergence](MA10207-web.html#QQ2-10-31)

Theorem 86 (Comparison test).  
  
Suppose that $\left(\left( a_{n} \right)\right)_{n \in ℕ}$ and $\left(\left( b_{n} \right)\right)_{n \in ℕ}$ are real sequences and $\left|a_{n}\right| \leq b_{n}$ for all $n \in ℕ$ . If

$$
\sum_{n = 1}^{\infty} b_{n} < \infty ,
$$

then $\sum_{n = 1}^{\infty} a_{n}$ converges absolutely.

Proof.  The hypothesis implies that

$$
\sum_{n = 1}^{N} \left|a_{n}\right| \leq \sum_{n = 1}^{N} b_{n} \leq \sum_{n = 1}^{\infty} b_{n}
$$

for all $N \in ℕ$ . Thus the absolute convergence follows from Proposition [80](#x10-29001r80). □

Example 87.  
  
The series

$$
\sum_{n = 1}^{\infty} \frac{1}{n^{2}}
$$

converges by comparison with

$$
1 + \sum_{n = 2}^{\infty} \frac{1}{\left( n - 1 \right) n} = 1 + \sum_{n = 1}^{\infty} \frac{1}{n \left( n + 1 \right)} .
$$

Example 88.  
  
Show that

$$
\sum_{n = 1}^{\infty} \frac{n}{2^{n}} < \infty .
$$

**Solution.** We write

$$
\frac{n}{2^{n}} = \frac{n}{\left(\left( \sqrt{2} \right)\right)^{n}} \left(\left(\frac{1}{\sqrt{2}}\right)\right)^{n} .
$$

We know that

$$
\frac{n}{\left(\left( \sqrt{2} \right)\right)^{n}} \rightarrow 0
$$

as $n \rightarrow \infty$ by Corollary [57](MA10207-webch4.html#x8-23016r57). Hence there exists $N \in ℕ$ such that

$$
\frac{n}{\left(\left( \sqrt{2} \right)\right)^{n}} \leq 1
$$

for all $n \geq N$ . So

$$
\frac{n}{2^{n}} \leq \left(\left(\frac{1}{\sqrt{2}}\right)\right)^{n}
$$

for $n \geq N$ . Now we use the comparison test with the geometric series

$$
\sum_{n = N}^{\infty} \left(\left(\frac{1}{\sqrt{2}}\right)\right)^{n}
$$

to show that

$$
\sum_{n = N}^{\infty} \frac{n}{2^{n}} < \infty .
$$

The full series has just a finite number of additional terms, so it converges, too.

The contrapositive of the comparison test gives the following.

Corollary 89.  
  
Suppose that $\left(\left( a_{n} \right)\right)_{n \in ℕ}$ and $\left(\left( b_{n} \right)\right)_{n \in ℕ}$ are real sequences and $0 \leq a_{n} \leq b_{n}$ for all $n \in ℕ$ . If

$$
\sum_{n = 1}^{\infty} a_{n} = \infty ,
$$

then

$$
\sum_{n = 1}^{\infty} b_{n} = \infty .
$$

Example 90.  
  
We know that

$$
\sum_{n = 1}^{\infty} \frac{1}{\sqrt{n}} = \infty .
$$

Hence

$$
\sum_{n = 1}^{\infty} \frac{1 + \frac{1}{n}}{\sqrt{n}} = \infty
$$

as well.

Theorem 91 (D’Alembert’s ratio test).  
  
Suppose that $\left(\left( a_{n} \right)\right)_{n \in ℕ}$ is a real sequence such that $a_{n} \neq 0$ for all $n \in ℕ$ and

$$
r = \underset{n \rightarrow \infty}{ \lim } \frac{\left|a_{n + 1}\right|}{\left|a_{n}\right|}
$$

exists (where $r = \infty$ is allowed).

1.  If $r < 1$ , then $\sum_{n = 1}^{\infty} a_{n}$ converges absolutely.
2.  If $r > 1$ , then $\sum_{n = 1}^{\infty} a_{n}$ diverges.

If $r = 1$ , then the test is inconclusive.

Proof.  [(i)](#x10-310091) Suppose that $r < 1$ and choose $s \in \left( r , 1 \right)$ . Then Lemma [54](MA10207-webch4.html#x8-23008r54) implies that there exists $C > 0$ such that $\left|a_{n}\right| \leq C s^{n}$ for all $n \in N$ . Now the comparison test with the geometric series $C \sum_{n = 1}^{\infty} s^{n}$ implies absolute convergence.

[(ii)](#x10-310112) If $r > 1$ , then Theorem [55](MA10207-webch4.html#x8-23009r55) implies that $\left(\left( a_{n} \right)\right)_{n \in ℕ}$ diverges, and then Proposition [77](#x10-28012r77) implies that $\sum_{n = 1}^{\infty} a_{n}$ diverges. □

Example 92.  
  
Using the ratio test, we can show that

$$
\sum_{n = 1}^{\infty} \frac{n^{3}}{2^{n}} , \sum_{n = 1}^{\infty} \frac{\left(\left( - 1 \right)\right)^{n}}{n !} , \text{and } \sum_{n = 1}^{\infty} \frac{n !}{n^{n}}
$$

all converge. It is quite obvious how to use the test for the first two of these. For the third series, we compute

$$
\frac{\frac{\left( n + 1 \right) !}{\left(\left( n + 1 \right)\right)^{n + 1}}}{\frac{n !}{n^{n}}} = \frac{\left( n + 1 \right) n^{n}}{\left(\left( n + 1 \right)\right)^{n + 1}} = \frac{n^{n}}{\left(\left( n + 1 \right)\right)^{n}} = \left(\left(\frac{n}{n + 1}\right)\right)^{n} = \frac{1}{\left(\left(1 + \frac{1}{n}\right)\right)^{n}} .
$$

Now recall Example [49](MA10207-webch4.html#x8-22019r49), where we showed that the sequence $\left(\left(\left(\left( 1 + 1 / n \right)\right)^{n}\right)\right)_{n \in ℕ}$ is increasing and bounded. Hence it has a limit

$$
e = \underset{n \rightarrow \infty}{ \lim } \left(\left(1 + \frac{1}{n}\right)\right)^{n} ,
$$

and $e \geq \left(\left( 1 + 1 / 1 \right)\right)^{1} = 2$ . Therefore,

$$
\underset{n \rightarrow \infty}{ \lim } \frac{\frac{\left( n + 1 \right) !}{\left(\left( n + 1 \right)\right)^{n + 1}}}{\frac{n !}{n^{n}}} = \frac{1}{e} < 1.
$$

The ratio test now confirms that the third series converges.

Example 93.  
  
The ratio test is inconclusive for

$$
\sum_{n = 1}^{\infty} \frac{1}{n} \text{and } \sum_{n = 1}^{\infty} \frac{1}{n^{2}} ,
$$

although we have already seen that the second series converges and you know from an exercise that the first one diverges.

Theorem 94 (Cauchy condensation test).  
  
Suppose that $\left(\left( a_{n} \right)\right)_{n \in ℕ}$ is a decreasing sequence with $a_{n} \geq 0$ for all $n \in ℕ$ . Let $b_{k} = 2^{k} a_{2^{k}}$ for all $k \in ℕ$ . Then

$$
\sum_{n = 1}^{\infty} a_{n} < \infty
$$

if, and only if,

$$
\sum_{k = 1}^{\infty} b_{k} < \infty .
$$

Proof.  Suppose first that $\sum_{k = 1}^{\infty} b_{k} < \infty$ . Fix an arbitrary $N \in ℕ$ . Choose $K \in ℕ$ such that $N \leq 2^{K + 1} - 1$ . Because $\left(\left( a_{n} \right)\right)_{n \in ℕ}$ is decreasing, we have the inequality

$$
\begin{align}
\begin{matrix}\sum_{n = 1}^{N}a_{n} & \leq\sum_{n = 1}^{2^{K + 1} - 1}a_{n} \\ & =a_{1}+\left( a_{2} + a_{3} \right)+\left( a_{4} + a_{5} + a_{6} + a_{7} \right)+\dots +\left( a_{2^{K}} + \dots  + a_{2^{K + 1} - 1} \right) \\ & \leq a_{1}+2a_{2}+4a_{4}+\dots +2^{K}a_{2^{K}} \\ & =a_{1}+\sum_{k = 1}^{K}b_{k} \\ & \leq a_{1}+\sum_{k = 1}^{\infty}b_{k}.\end{matrix} & 
\end{align}
$$

Hence $\sum_{n = 1}^{\infty} a_{n}$ converges by Proposition [80](#x10-29001r80).

Now suppose that $\sum_{n = 1}^{\infty} a_{n} < \infty$ . Then for any $K \in ℕ$ ,

$$
\begin{align}
\begin{matrix}\sum_{k = 1}^{K}b_{k} & =\sum_{k = 1}^{K}2^{k}a_{2^{k}}=2a_{2}+4a_{4}+8a_{8}+\dots +2^{K}a_{2^{K}} \\ & =\left( a_{2} + a_{2} \right)+\left( a_{4} + a_{4} + a_{4} + a_{4} \right)+\left( a_{8} + \dots  + a_{8} \right)+\dots + \\ & +\left( a_{2^{K}} + \dots  + a_{2^{K}} \right) \\ & \leq\left( a_{1} + a_{1} \right)+\left( a_{2} + a_{2} + a_{3} + a_{3} \right)+ \\ & +\left( a_{4} + a_{4} + a_{5} + a_{5} + a_{6} + a_{6} + a_{7} + a_{7} \right)+\dots + \\ & +\left( a_{2^{K - 1}} + \dots  + a_{2^{K} - 1} \right) \\ & \leq 2\sum_{n = 1}^{\infty}a_{n}.\end{matrix} & 
\end{align}
$$

Now we invoke Proposition [80](#x10-29001r80) again and conclude that $\sum_{k = 1}^{\infty} b_{k}$ converges. □

Theorem 95 (Leibniz’s alternating series test).  
  
Suppose that $\left(\left( a_{n} \right)\right)_{n \in ℕ}$ is a decreasing sequence with $a_{n} \rightarrow 0$ as $n \rightarrow \infty$ . Then the series

$$
\sum_{n = 1}^{\infty} \left(\left( - 1 \right)\right)^{n} a_{n}
$$

converges.

Caution: while all the previous tests give absolute convergence, this one does not in general. For example, the series

$$
\sum_{n = 1}^{\infty} \frac{\left(\left( - 1 \right)\right)^{n}}{n} = - 1 + \frac{1}{2} - \frac{1}{3} + \frac{1}{4} - \dots 
$$

meets the hypothesis of the theorem and therefore converges, but it converges only conditionally, as we know that

$$
\sum_{n = 1}^{\infty} \frac{1}{n} = \infty .
$$

Proof.  Consider the sequence of partial sums $\left(\left( S_{N} \right)\right)_{N \in ℕ}$ with

$$
S_{N} = \sum_{n = 1}^{N} \left(\left( - 1 \right)\right)^{n} a_{n} .
$$

We first study the subsequence $\left(\left( S_{2 N} \right)\right)_{N \in ℕ}$ and note that

$$
\begin{align}
\begin{matrix}S_{2 N + 2} & =-a_{1}+a_{2}-a_{3}+a_{4}-\dots -a_{2 N + 1}+a_{2 N + 2} \\ & =S_{2 N}-a_{2 N + 1}+a_{2 N + 2} \\ & \leq S_{2 N}\end{matrix} & 
\end{align}
$$

for all $N \in ℕ$ , since $a_{2 N + 2} \leq a_{2 N + 1}$ . Hence the sequence $\left(\left( S_{2 N} \right)\right)_{N \in ℕ}$ is decreasing. Moreover, it is bounded, as

$$
S_{2 N} = - a_{1} + \left( a_{2} - a_{3} \right) + \left( a_{4} - a_{5} \right) + \dots  + \left( a_{2 N - 2} - a_{2 N - 1} \right) + a_{2 N} \geq - a_{1}
$$

for all $N \in ℕ$ . By Theorem [47](MA10207-webch4.html#x8-22015r47), the limit

$$
L = \underset{N \rightarrow \infty}{ \lim } S_{2 N}
$$

exists.

Next we observe that

$$
S_{2 N - 1} = S_{2 N} - a_{2 N} \rightarrow L
$$

as well, because $a_{2 N} \rightarrow 0$ as $N \rightarrow \infty$ . Thus given $ϵ > 0$ , we can choose $N_{1} \in ℕ$ such that $\left|S_{2 N} - L\right| < ϵ$ for all $N \geq N_{1}$ , and we can choose $N_{2} \in ℕ$ such that $\left|S_{2 N - 1} - L\right| < ϵ$ for all $N \geq N_{2}$ . Setting $N_{0} =  \max  \left\{ 2 N_{1} , 2 N_{2} - 1 \right\}$ , we conclude that $\left|S_{N} - L\right| < ϵ$ whenever $N \geq N_{0}$ . Hence

$$
\sum_{n = 1}^{\infty} \left(\left( - 1 \right)\right)^{n} a_{n} = \underset{N \rightarrow \infty}{ \lim } S_{N} = L .
$$

□

### 5.5 [Multiplying series](MA10207-web.html#QQ2-10-32)

You may have noticed the absence of multiplication in Theorem [78](#x10-28013r78) (on the algebra of limits for series). This is because multiplication for series is somewhat more complicated. Here is how we multiply two absolutely convergent series.

Theorem 96 (Cauchy product of series).  
  
Suppose that the series $\sum_{n = 0}^{\infty} a_{n}$ and $\sum_{n = 0}^{\infty} b_{n}$ converge absolutely. For every $n \in ℕ_{0}$ , define

$$
c_{n} = \sum_{i = 0}^{n} a_{i} b_{n - i} = a_{0} b_{n} + a_{1} b_{n - 1} + \dots  + a_{n - 1} b_{1} + a_{n} b_{0} .
$$

Then $\sum_{n = 0}^{\infty} c_{n}$ converges absolutely and

$$
\left( \sum_{n = 0}^{\infty} a_{n} \right) \left( \sum_{n = 0}^{\infty} b_{n} \right) = \sum_{n = 0}^{\infty} c_{n} .
$$

It is more convenient to start the summation with $0$ rather than $1$ for the series in this theorem, but this is just a matter of notation and all the above principles and facts still apply.

Proof.  We write

$$
A = \sum_{n = 0}^{\infty} a_{n} \text{and } B = \sum_{n = 0}^{\infty} b_{n}
$$

and also

$$
\bar{A} = \sum_{n = 0}^{\infty} \left|a_{n}\right| \text{and } \bar{B} = \sum_{n = 0}^{\infty} \left|b_{n}\right| .
$$

For $N \in ℕ_{0}$ , write

$$
A_{N} = \sum_{n = 0}^{N} a_{n} , B_{N} = \sum_{n = 0}^{N} b_{n} , \text{and } C_{N} = \sum_{n = 0}^{N} c_{n} .
$$

Then

$$
C_{N} = \sum_{n = 0}^{N} c_{n} = \sum_{n = 0}^{N} \sum_{i = 0}^{n} a_{i} b_{n - i} = \underset{i + j \leq N}{\sum} a_{i} b_{j} .
$$

(Here the last sum is taken over all pairs of natural numbers $i , j \in ℕ_{0}$ that satisfy the inequality $i + j \leq N$ .) Compare this with

$$
A_{N} B_{N} = \left( \sum_{n = 0}^{N} a_{n} \right) \left( \sum_{n = 0}^{N} b_{n} \right) = \sum_{i = 0}^{N} \sum_{j = 0}^{N} a_{i} b_{j} .
$$

We see that

$$
A_{N} B_{N} - C_{N} = \underset{i,j\leq N \\ i+j\geq N+1}{\sum} a_{i} b_{j} .
$$

In particular, if $N \geq 2 M$ for some $M \in ℕ$ , then

$$
\left|C_{N} - A_{N} B_{N}\right| \leq \underset{i,j\leq N \\ i+j\geq N+1}{\sum} \left|a_{i}\right| \left|b_{j}\right| \leq \underset{i\leq N \\ M+1\leq j\leq N \\ i+j\geq N+1}{\sum} \left|a_{i}\right| \left|b_{j}\right| + \underset{M+1\leq i\leq N \\ j\leq N \\ i+j\geq N+1}{\sum} \left|a_{i}\right| \left|b_{j}\right| ,
$$

because for $i , j \in ℕ$ with $i + j \geq N + 1$ , one of the inequalities $i \geq M + 1$ or $j \geq M + 1$ must always be satisfied. Moreover,

$$
\begin{align}
\begin{matrix}\underset{\begin{matrix}i\leq N \\ M+1\leq j\leq N \\ i+j\geq N+1\end{matrix}}{\sum}\left|a_{i}\right|\left|b_{j}\right| & \leq\sum_{i = 0}^{N}\sum_{j = M + 1}^{N}\left|a_{i}\right|\left|b_{j}\right| \\ & =\left( \sum_{n = 0}^{N} \left|a_{i}\right| \right)\left( \sum_{j = M + 1}^{N} \left|b_{j}\right| \right) \\ & \leq\bar{A}\sum_{n = M + 1}^{\infty}\left|b_{n}\right|\end{matrix} & 
\end{align}
$$

and similarly

$$
\underset{M+1\leq i\leq N \\ j\leq N \\ i+j\geq N+1}{\sum} \left|a_{i}\right| \left|b_{j}\right| \leq \bar{B} \sum_{n = M + 1}^{\infty} \left|a_{n}\right| .
$$

Fix $ϵ > 0$ . Choose $N_{1} \in ℕ$ such that

$$
\left|A B - A_{N} B_{N}\right| < \frac{ϵ}{3}
$$

for all $N \geq N_{1}$ and at the same time,

$$
\sum_{n = N_{1} + 1}^{\infty} \left|a_{n}\right| < \frac{ϵ}{3 \bar{B} + 1} \text{and } \sum_{n = N_{1} + 1}^{\infty} \left|b_{n}\right| < \frac{ϵ}{3 \bar{A} + 1} .
$$

Now for $N \geq 2 N_{1}$ , we conclude that

$$
\begin{align}
\begin{matrix}\left|C_{N} - A B\right| & \leq\left|C_{N} - A_{N} B_{N}\right|+\left|A_{N} B_{N} - A B\right| \\ & \leq\bar{A}\sum_{n = N_{1} + 1}^{\infty}\left|b_{n}\right|+\bar{B}\sum_{n = N_{1} + 1}^{\infty}\left|a_{n}\right|+\left|A_{N} B_{N} - A B\right| \\ & <\bar{A}\frac{ϵ}{3 \bar{A} + 1}+\bar{B}\frac{ϵ}{3 \bar{B} + 1}+\frac{ϵ}{3}\leqϵ.\end{matrix} & 
\end{align}
$$

So we have proved that $\sum_{n = 0}^{\infty} c_{n}$ converges and that

$$
\sum_{n = 0}^{\infty} c_{n} = A B .
$$

The same reasoning applies to the series $\sum_{n = 0}^{\infty} \left|a_{n}\right|$ and $\sum_{n = 0}^{\infty} \left|b_{n}\right|$ . If we define

$$
c_{n}^{′} = \sum_{i = 0}^{n} \left|a_{i}\right| \left|b_{n - i}\right| , n \in ℕ_{0} ,
$$

then these arguments show that

$$
\sum_{n = 0}^{\infty} c_{n}^{′} < \infty .
$$

Since $\left|c_{n}\right| \leq c_{n}^{′}$ for all $n \in ℕ$ , the comparison test implies that $\sum_{n = 0}^{\infty} c_{n}$ converges absolutely. □

### 5.6 [Power series](MA10207-web.html#QQ2-10-33)

Here we discuss a type of series that involves a variable $x$ and can be thought of as an ‘infinite polynomial’.

Definition 97.  
  
A series of the form

$$
\sum_{n = 0}^{\infty} a_{n} x^{n} = a_{0} + a_{1} x + a_{2} x^{2} + \dots  + a_{n} x^{n} + \dots  ,
$$

where $a_{0} , a_{1} , a_{2} , \dots$ are real numbers, is called a **power series**.

We can evaluate a power series for every value of $x \in ℝ$ . This gives different series for different values, possibly with different convergence properties.

Theorem 98.  
  
For any power series $\sum_{n = 0}^{\infty} a_{n} x^{n}$ , there exists $R \in \left[ 0 , \infty \right) \cup \left\{ \infty \right\}$ such that

1.  if $\left|x\right| < R$ , then $\sum_{n = 0}^{\infty} a_{n} x^{n}$ converges absolutely, and
2.  if $\left|x\right| > R$ , then $\sum_{n = 0}^{\infty} a_{n} x^{n}$ diverges.

The theorem does not give any information about values of $x$ with $\left|x\right| = R$ . This question typically has to be settled independently.

Proof.  Define

$$
R = sup \left\{r \geq 0 : \left(\left( \left|a_{n}\right| r^{n} \right)\right)_{n \in ℕ_{0}} \text{ is bounded }\right\} .
$$

Since $\left(\left( \left|a_{n}\right| 0^{n} \right)\right)_{n \in ℕ_{0}} = \left( \left|a_{0}\right| , 0 , 0 , \dots  \right)$ is bounded, we conclude that $R \geq 0$ . (But $R = \infty$ is possible.)

[(i)](#x10-330041) If $\left|x\right| < R$ , then we may choose a number $r$ with $\left|x\right| < r < R$ such that $\left(\left( \left|a_{n}\right| r^{n} \right)\right)_{n \in ℕ_{0}}$ is bounded. Hence there exists $M \geq 0$ such that $\left|a_{n}\right| r^{n} \leq M$ for all $n \in ℕ_{0}$ . Then

$$
\left|a_{n} x^{n}\right| = \left|a_{n}\right| \left(\left|x\right|\right)^{n} = \left|a_{n}\right| r^{n} \left(\left(\frac{\left|x\right|}{r}\right)\right)^{n} \leq M \left(\left(\frac{\left|x\right|}{r}\right)\right)^{n} .
$$

But since $\left|x\right| / r < 1$ , the geometric series

$$
\sum_{n = 0}^{\infty} \left(\left(\frac{\left|x\right|}{r}\right)\right)^{n}
$$

converges. By the comparison test,

$$
\sum_{n = 0}^{\infty} \left|a_{n} x^{n}\right|
$$

converges as well. So we have absolute convergence.

[(ii)](#x10-330062) If $\left|x\right| > R$ , then $\left(\left( \left|a_{n} x^{n}\right| \right)\right)_{n \in ℕ_{0}}$ is unbounded by the definition of $R$ . But then clearly $\left|a_{n} x^{x}\right| ↛ 0$ as $n \rightarrow \infty$ . According to Proposition [77](#x10-28012r77) this means that $\sum_{n = 0}^{\infty} a_{n} x^{n}$ diverges. □

Definition 99.  
  
Given a power series $\sum_{n = 0}^{\infty} a_{n} x^{n}$ , the number $R$ from Theorem [98](#x10-33003r98) is called its **radius of convergence**.

Theorem 100.  
  
For any power series $\sum_{n = 0}^{\infty} a_{n} x^{n}$ , if

$$
R = \underset{n \rightarrow \infty}{ \lim } \frac{\left|a_{n}\right|}{\left|a_{n + 1}\right|}
$$

exists (where $R = \infty$ is allowed), then $R$ is the radius of convergence.

Proof.  Suppose that the limit exists (possibly $R = \infty$ ). Then for any $x \in ℝ$ ,

$$
\frac{\left|a_{n + 1} x^{n + 1}\right|}{\left|a_{n} x^{n}\right|} = \left|x\right| \frac{\left|a_{n + 1}\right|}{\left|a_{n}\right|} \rightarrow \frac{\left|x\right|}{R}
$$

as $n \rightarrow \infty$ . So the ratio test implies that $\sum_{n = 0}^{\infty} a_{n} x^{n}$ converges absolutely whenever $\left|x\right| < R$ and diverges when $\left|x\right| > R$ . This means that $R$ must be the radius of convergence. □

The limit in this theorem does not always exist, but if it does, then this is typically the easiest way to compute the radius of convergence. In any case, however, we have the following formula.

Theorem 101 (Cauchy-Hadamard).  
  
The radius of convergence of the power series $\sum_{n = 0}^{\infty} a_{n} x^{n}$ is

$$
R = \frac{1}{\left( \lim sup\right)_{n \rightarrow \infty} \sqrt[n]{\left|a_{n}\right|}} .
$$

Here $\left( \lim sup\right)_{n \rightarrow \infty} \sqrt[n]{\left|a_{n}\right|}$ may take any value in $\left[ 0 , \infty \right)$ or may be $\infty$ . The fraction should be interpreted as $1 / \infty = 0$ and $1 / 0 = \infty$ if we have one of the values $0$ or $\infty$ .

Proof.  Consider the set

$$
A = \left\{r \geq 0 : \left(\left( \left|a_{n}\right| r^{n} \right)\right)_{n \in ℕ_{0}} \text{ is bounded }\right\} .
$$

We have seen in the proof of Theorem [98](#x10-33003r98) that the radius of convergence is $sup A$ . Thus it suffices to show that $R = sup A$ .

For any $r < R$ , we see that

$$
r \left( \lim sup\right)_{n \rightarrow \infty} \sqrt[n]{\left|a_{n}\right|} < 1.
$$

Hence there exists $N \in ℕ$ such that $r \sqrt[n]{\left|a_{n}\right|} \leq 1$ for all $n \geq N$ . Then $r^{n} \left|a_{n}\right| \leq 1$ for all $n \geq N$ and it follows that $r \in A$ .

For any $r > R$ , we obtain

$$
r \left( \limsup\right)_{n \rightarrow \infty} \sqrt[n]{\left|a_{n}\right|} > 1.
$$

Hence there exists $s > 1$ such that $r \sqrt[n]{\left|a_{n}\right|} \geq s$ for infinitely many values of $n$ . Hence $r^{n} \left|a_{n}\right| \geq s^{n}$ for infinitely many values of $n$ , which means that $\left(\left( \left|a_{n}\right| r^{n} \right)\right)_{n \in ℕ}$ is unbounded and $r \notin A$ .

This implies that $R = sup A$ and concludes the proof. □