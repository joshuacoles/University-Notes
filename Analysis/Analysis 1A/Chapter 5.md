Chapter 5

# Series

What we study in this chapter is not really a new topic. We still consider sequences, but we now restrict our attention to sequences arising in the context of infinite sums. These are so common that they deserve special attention and a chapter of their own.

## 5.1 Definition and convergence

### Definition 7.

If $((a_{n} ))_{n \in \N}$ is a real sequence, then $\sum_{n = 1}^{\infty} a_{n}$ is called an **infinite series** (or simply **series**). For any $N \in \N$ , the number $S_{N} = \sum_{n = 1}^{N} a_{n}$ is called a **partial sum** of the series.

Since for a given series, we have a partial sum $S_{N}$ for every $N \in \N$ , the partial sums form a sequence $((S_{N} ))_{N \in \N}$ of their own. We now study convergence of this sequence of partial sums.

### Definition 7.

The series $\sum_{n = 1}^{\infty} a_{n}$ **converges** if the sequence of partial sums $((S_{N} ))_{N \in \N}$ converges and **diverges** if the sequence of partial sums diverges. In the case of convergence, we write

$$
\sum_{n = 1}^{\infty} a_{n} = \underset{N \to \infty}{ \lim } S_{N} .
$$

Thus the expression $\sum_{n = 1}^{\infty} a_{n}$ really stands for two different things. On the one hand, we use it to denote the series itself, but on the other hand, it can mean the limit if we have convergence. If we write a formula such as

$$
\sum_{n = 1}^{\infty} a_{n} = L ,
$$

where $L \in \R$ , then this implicitly means that the series converges.

Just like for sequences, we can write

$$
\sum_{n = 1}^{\infty} a_{n} = \infty \text{or } \sum_{n = 1}^{\infty} a_{n} = - \infty
$$

if the partial sums diverge to $\infty$ or $- \infty$ .

### Example 7.

It is not too difficult to see that

$$
\sum_{n = 1}^{\infty} 1 = \infty .
$$

### Example 7 (Geometric series).

Suppose that $a \in \R$ . Find $\sum_{n = 0}^{\infty} a^{n}$ .

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
(1 - a ) S_{N} = S_{N} - a S_{N} = 1 - a^{N + 1}
$$

and

$$
S_{N} = \frac{1 - a^{N + 1}}{1 - a}
$$

(unless $a = 1$ ). In order to solve the problem, we have to study convergence of $S_{N}$ , which we can now do with the help of the algebra of limits theorem and Proposition 36. If $|a| < 1$ , it follows that

$$
\sum_{n = 0}^{\infty} a_{n} = \underset{N \to \infty}{ \lim } S_{N} = \frac{1}{1 - a} .
$$

If $|a| > 1$ , then $\sum_{n = 0}^{\infty} a^{n}$ diverges by Theorem 55. (If $a > 1$ , then we can be more specific and say that

$$
\sum_{n = 0}^{\infty} a_{n} = \infty . ()
$$

This leaves two cases: $a = 1$ and $a = - 1$ . But the first of these we have already considered in Example 74, because

$$
\sum_{n = 0}^{\infty} 1^{n} = \sum_{n = 0}^{\infty} 1 = \infty .
$$

For $a = - 1$ , we note that

$$
S_{0} = 1 , S_{1} = 1 - 1 = 0 , S_{2} = 1 - 1 + 1 = 1 , S_{3} = 1 - 1 + 1 - 1 = 0 , \dots  .
$$

Hence in this case, the series diverges.

### Example 7.

Find

$$
\sum_{n = 1}^{\infty} \frac{1}{n (n + 1 )} .
$$

**Solution.** Here the key observation is that

$$
\frac{1}{n (n + 1 )} = \frac{1}{n} - \frac{1}{n + 1} .
$$

Hence if we consider the partial sums

$$
S_{N} = \sum_{n = 1}^{N} \frac{1}{n (n + 1 )}
$$

again, we see that

$$
\begin{align}
\begin{matrix}S_{N} &=(1 - \frac{1}{2})+(\frac{1}{2} - \frac{1}{3})+(\frac{1}{3} - \frac{1}{4})+\dots +(\frac{1}{N} - \frac{1}{N + 1}) \\ &=1-\frac{1}{N + 1}\to 1\end{matrix}
\end{align}
$$

as $N \to \infty$ . Hence

$$
\sum_{n = 1}^{\infty} \frac{1}{n (n + 1 )} = 1.
$$

### Proposition 7.

If $\sum_{n = 1}^{\infty} a_{n}$ is a convergent series, then $a_{n} \to 0$ as $n \to \infty$ .

#### Proof

Suppose that $\sum_{n = 1}^{\infty} a_{n}$ converges and consider the partial sums

$$
S_{N} = \sum_{n = 1}^{N} a_{n} .
$$

Then $((S_{N} ))_{N \in \N}$ is convergent, and by Theorem 65, this means that it is a Cauchy sequence. Thus given $\epsi > 0$ , there exists $N_{0} \in \N$ such that $|S_{M} - S_{N}| < \epsi$ for all $M , N \geq N_{0}$ . If we consider $n \geq N_{0}$ , then we can choose $N = n$ and $M = n + 1$ in this inequality. This gives

$$
|a_{n}| = |S_{n + 1} - S_{n}| < \epsi .
$$

Hence $a_{n} \to 0$ as $n \to \infty$ . □

Note that the converse is false: if $a_{n} \to 0$ as $n \to \infty$ , it does **not** follow that $\sum_{n = 1}^{\infty} a_{n}$ converges. A counterexample is the series

$$
\sum_{n = 1}^{\infty} \frac{1}{\sqrt{n}} .
$$

Clearly $1 / \sqrt{n} \to 0$ as $n \to \infty$ , but the series diverges to $\infty$ , because

$$
\sum_{n = 1}^{N} \frac{1}{\sqrt{n}} = 1 + \frac{1}{\sqrt{2}} + \frac{1}{\sqrt{3}} + \dots  + \frac{1}{\sqrt{N}} \geq N \frac{1}{\sqrt{N}} = \sqrt{N} \to \infty
$$

as $N \to \infty$ .

As convergence of series is defined in terms of convergence of the partial sums, the results of the previous chapter apply here, too.

### Theorem 7 (Algebra of limits for series).

Suppose that $\sum_{n = 1}^{\infty} a_{n}$ and $\sum_{n = 1}^{\infty} b_{n}$ are convergent series. Then

1.  $\sum_{n = 1}^{\infty} (a_{n} + b_{n} ) = \sum_{n = 1}^{\infty} a_{n} + \sum_{n = 1}^{\infty} b_{n}$ ,
2.  $\sum_{n = 1}^{\infty} (a_{n} - b_{n} ) = \sum_{n = 1}^{\infty} a_{n} - \sum_{n = 1}^{\infty} b_{n}$ ,
3.  $\sum_{n = 1}^{\infty} (C a_{n} ) = C \sum_{n = 1}^{\infty} a_{n}$ for any constant $C \in \R$ .

#### Proof

This is an immediate consequence of the algebra of limits theorem for sequences (Theorem 42). □

### Theorem 7.

Suppose that $\sum_{n = 1}^{\infty} a_{n}$ and $\sum_{n = 1}^{\infty} b_{n}$ are convergent series. If $a_{n} \leq b_{n}$ for all $n \in \N$ , then

$$
\sum_{n = 1}^{\infty} a_{n} \leq \sum_{n = 1}^{\infty} b_{n} .
$$

#### Proof

This is an immediate consequence of Proposition 18.(ii) and Proposition 37. □

## 5.2 Series of non-negative terms

Here we study series $\sum_{n = 1}^{\infty} a_{n}$ such that $a_{n} \geq 0$ for every $n \in \N$ . It turns out that convergence is particularly easy to understand here. The reason is that the partial sums $S_{N} = \sum_{n = 1}^{N} a_{n}$ then automatically form an increasing sequence, as

$$
S_{N + 1} = S_{N} + a_{N + 1} \geq S_{N} , N \in \N .
$$

### Proposition 8.

Suppose that $((a_{n} ))_{n \in \N}$ is a sequence with $a_{n} \geq 0$ for all $n \in \N$ . The series

$$
\sum_{n = 1}^{\infty} a_{n}
$$

converges if, and only if, there exists $M > 0$ such that

$$
\sum_{n = 1}^{N} a_{n} \leq M
$$

for all $N \in \N$ . If so, then

$$
\sum_{n = 1}^{N} a_{n} \leq M .
$$

#### Proof

The sequence of partial sums is increasing, so it will converge if, and only if, it is bounded by Theorem 47 and Proposition 41. The inequality follows from Corollary 38. □

Because of this fact, convergence of series of non-negative terms is often indicated by writing

$$
\sum_{n = 1}^{\infty} a_{n} < \infty .
$$

(But this makes no sense when there may be negative terms in the mix.)

### Proposition 8.

Suppose that $((a_{n} ))_{n \in \N}$ is a sequence with $a_{n} \geq 0$ for all $n \in \N$ . If

$$
\sum_{n = 1}^{\infty} a_{n} < \infty ,
$$

then

$$
\underset{N \to \infty}{ \lim } \sum_{n = N}^{\infty} a_{n} = 0.
$$

#### Proof

Consider the partial sums $S_{N} = \sum_{n = 1}^{N} a_{n}$ . If $\sum_{n = 1}^{\infty} a_{n} < \infty$ , then $((S_{N} ))_{N \in \N}$ is a Cauchy sequence by Theorem 65. Hence for all $\epsi > 0$ , there exists $N_{0} \in \N$ such that $|S_{M} - S_{N}| < \epsi$ for all $M , N \geq N_{0}$ . That is,

$$
\sum_{n = N}^{M} a_{n} = S_{M + 1} - S_{N} < \epsi
$$

whenever $N_{0} \leq N \leq M$ . Letting $M \to \infty$ , we obtain the inequality

$$
\sum_{n = N}^{\infty} a_{n} = \underset{M \to \infty}{ \lim } \sum_{n = N}^{M} a_{n} \leq \epsi .
$$

As $\epsi > 0$ is arbitrary, this means that $\sum_{n = N}^{\infty} a_{n} \to 0$ as $N \to \infty$ . □

## 5.3 Absolute convergence

The reasoning in the preceding section does not apply to a series $\sum_{n = 1}^{\infty} a_{n}$ if the terms may have either sign, but it always applies to $\sum_{n = 1}^{\infty} |a_{n}|$ .

### Definition 8.

We say that a series $\sum_{n = 1}^{\infty} a_{n}$ **converges absolutely** if

$$
\sum_{n = 1}^{\infty} |a_{n}| < \infty .
$$

### Theorem 8.

If $\sum_{n = 1}^{\infty} a_{n}$ converges absolutely, then it converges and

$$
| \sum_{n = 1}^{\infty} a_{n} | \leq \sum_{n = 1}^{\infty} |a_{n}| .
$$

#### Proof

Consider the partial sums

$$
A_{N} = \sum_{n = 1}^{N} a_{n} \text{and } S_{N} = \sum_{n = 1}^{N} |a_{n}| .
$$

We know that $((S_{N} ))_{N \in \N}$ is convergent and hence bounded by Proposition 41. The triangle inequality implies that $|A_{N}| \leq S_{N}$ for all $N \in \N$ , and hence $((A_{N} ))_{N \in \N}$ is bounded as well, and so is the sequence $((S_{N} + A_{N} ))_{N \in \N}$ .

Furthermore, $((S_{N} + A_{N} ))_{N \in \N}$ is increasing since

$$
\begin{align}
\begin{matrix}S_{N + 1}+A_{N + 1} &=S_{N}+|a_{N + 1}|+A_{N}+a_{N + 1} \\ &=S_{N}+A_{N}+\{\begin{matrix} \begin{matrix}2|a_{N + 1}| \text{if  }a_{N + 1}>0, \\ 0 \text{if  }a_{N + 1}\leq 0,\end{matrix} \end{matrix}\end{matrix}
\end{align}
$$

for all $N \in \N$ . According to Theorem 47, the limit

$$
L_{1} = \underset{N \to \infty}{ \lim } (S_{N} + A_{N} )
$$

exists. But by the hypothesis, the limit

$$
L_{2} = \underset{N \to \infty}{ \lim } S_{N}
$$

exists as well. Hence

$$
\underset{N \to \infty}{ \lim } A_{N} = L_{1} - L_{2}
$$

by Theorem 42. Therefore, the series $\sum_{n = 1}^{\infty} a_{n}$ converges.

In order to prove the inequality, we use the fact that $|A_{N}| \leq S_{N}$ again. By Proposition 44 and Proposition 37, it follows that

$$
| \sum_{n = 1}^{\infty} a_{n} | = \underset{N \to \infty}{ \lim } |A_{N}| \leq \underset{N \to \infty}{ \lim } S_{N} = \sum_{n = 1}^{\infty} |a_{n}| .
$$

□

It is possible, however, that a sequence converges but does not converge absolutely. We will see examples of this later.

### Definition 8.

If a series converges but does not converge absolutely, then we say that it **converges conditionally**.

### Theorem 8 (Rearrangement of series).

Suppose that $\sum_{n = 1}^{\infty} a_{n}$ converges absolutely. Then for any bijection $\sigma : \N \to \N$ ,

$$
\sum_{n = 1}^{\infty} a_{\sigma (n )} = \sum_{n = 1}^{\infty} a_{n}
$$

and the convergence is absolute.

So for absolutely convergent series, the order of summation can be rearranged arbitrarily without changing the result. This is not true for conditionally convergent series. In fact, the Riemann rearrangement theorem (not covered here) says that a conditionally convergent series can be rearranged so that it converges to an arbitrary value or even diverges.

#### Proof

Write

$$
L = \sum_{n = 1}^{\infty} a_{n} .
$$

Fix $\epsi > 0$ and choose $N_{1} \in \N$ such that

$$
|\sum_{n = 1}^{N} a_{n} - L|<\frac{\epsi}{2}
$$

(1)

for all $N \geq N_{1}$ and at the same time,

$$
\sum_{n = N_{1} + 1}^{\infty} |a_{n}| < \frac{\epsi}{2} .
$$

This is possible by Proposition 81, because $\sum_{n = 1}^{\infty} |a_{n}| < \infty$ .

Now choose

$$
N_{2} =  \max  \{ (\sigma)^{- 1} (1 ) , \dots  , (\sigma)^{- 1} (N_{1} ) \} .
$$

Then $N_{2} \geq N_{1}$ and

$$
\{ 1 , \dots  , N_{1} \} \subseteq \{ \sigma (1 ) , \dots  , \sigma (N_{2} ) \} .
$$

Now let $N \geq N_{2}$ and consider

$$
\sum_{n = 1}^{N} a_{\sigma (n )} - \sum_{n = 1}^{N} a_{n} .
$$

For any $n \in \N$ , the term $a_{n}$ may appear in neither sum, or in exactly one of them, or in both. But in the last case, it will appear with opposite signs and will be cancelled out; and this will certainly happen for any $n \leq N_{1}$ . Therefore,

$$
|\sum_{n = 1}^{N} a_{\sigma (n )} - \sum_{n = 1}^{N} a_{n}| \leq \sum_{n = N_{1} + 1}^{\infty} |a_{n}| < \frac{\epsi}{2} .
$$

Using (1), we derive the inequality

$$
|\sum_{n = 1}^{N} a_{\sigma (n )} - L| \leq |\sum_{n = 1}^{N} a_{\sigma (n )} - \sum_{n = 1}^{N} a_{n}| + |\sum_{n = 1}^{N} a_{n} - L| < \epsi .
$$

So we have shown that

$$
\sum_{n = 1}^{N} a_{\sigma (n )} \to L
$$

as $N \to \infty$ .

In order to prove that the convergence is absolute, it suffices to show that

$$
\sum_{n = 1}^{\infty} |a_{\sigma (n )}| < \infty .
$$

But the above arguments apply to this series as well and show that in fact

$$
\sum_{n = 1}^{\infty} |a_{\sigma (n )}| = \sum_{n = 1}^{\infty} |a_{n}| < \infty .
$$

□

## 5.4 Tests for convergence

### Theorem 8 (Comparison test).

Suppose that $((a_{n} ))_{n \in \N}$ and $((b_{n} ))_{n \in \N}$ are real sequences and $|a_{n}| \leq b_{n}$ for all $n \in \N$ . If

$$
\sum_{n = 1}^{\infty} b_{n} < \infty ,
$$

then $\sum_{n = 1}^{\infty} a_{n}$ converges absolutely.

#### Proof

The hypothesis implies that

$$
\sum_{n = 1}^{N} |a_{n}| \leq \sum_{n = 1}^{N} b_{n} \leq \sum_{n = 1}^{\infty} b_{n}
$$

for all $N \in \N$ . Thus the absolute convergence follows from Proposition 80. □

### Example 8.

The series

$$
\sum_{n = 1}^{\infty} \frac{1}{n^{2}}
$$

converges by comparison with

$$
1 + \sum_{n = 2}^{\infty} \frac{1}{(n - 1 ) n} = 1 + \sum_{n = 1}^{\infty} \frac{1}{n (n + 1 )} .
$$

### Example 8.

Show that

$$
\sum_{n = 1}^{\infty} \frac{n}{2^{n}} < \infty .
$$

**Solution.** We write

$$
\frac{n}{2^{n}} = \frac{n}{((\sqrt{2} ))^{n}} ((\frac{1}{\sqrt{2}}))^{n} .
$$

We know that

$$
\frac{n}{((\sqrt{2} ))^{n}} \to 0
$$

as $n \to \infty$ by Corollary 57. Hence there exists $N \in \N$ such that

$$
\frac{n}{((\sqrt{2} ))^{n}} \leq 1
$$

for all $n \geq N$ . So

$$
\frac{n}{2^{n}} \leq ((\frac{1}{\sqrt{2}}))^{n}
$$

for $n \geq N$ . Now we use the comparison test with the geometric series

$$
\sum_{n = N}^{\infty} ((\frac{1}{\sqrt{2}}))^{n}
$$

to show that

$$
\sum_{n = N}^{\infty} \frac{n}{2^{n}} < \infty .
$$

The full series has just a finite number of additional terms, so it converges, too.

The contrapositive of the comparison test gives the following.

### Corollary 8.

Suppose that $((a_{n} ))_{n \in \N}$ and $((b_{n} ))_{n \in \N}$ are real sequences and $0 \leq a_{n} \leq b_{n}$ for all $n \in \N$ . If

$$
\sum_{n = 1}^{\infty} a_{n} = \infty ,
$$

then

$$
\sum_{n = 1}^{\infty} b_{n} = \infty .
$$

### Example 9.

We know that

$$
\sum_{n = 1}^{\infty} \frac{1}{\sqrt{n}} = \infty .
$$

Hence

$$
\sum_{n = 1}^{\infty} \frac{1 + \frac{1}{n}}{\sqrt{n}} = \infty
$$

as well.

### Theorem 9 (D’Alembert’s ratio test).

Suppose that $((a_{n} ))_{n \in \N}$ is a real sequence such that $a_{n} \neq 0$ for all $n \in \N$ and

$$
r = \underset{n \to \infty}{ \lim } \frac{|a_{n + 1}|}{|a_{n}|}
$$

exists (where $r = \infty$ is allowed).

1.  If $r < 1$ , then $\sum_{n = 1}^{\infty} a_{n}$ converges absolutely.
2.  If $r > 1$ , then $\sum_{n = 1}^{\infty} a_{n}$ diverges.

If $r = 1$ , then the test is inconclusive.

#### Proof

(i) Suppose that $r < 1$ and choose $s \in (r , 1 )$ . Then Lemma 54 implies that there exists $C > 0$ such that $|a_{n}| \leq C s^{n}$ for all $n \in N$ . Now the comparison test with the geometric series $C \sum_{n = 1}^{\infty} s^{n}$ implies absolute convergence.

(ii) If $r > 1$ , then Theorem 55 implies that $((a_{n} ))_{n \in \N}$ diverges, and then Proposition 77 implies that $\sum_{n = 1}^{\infty} a_{n}$ diverges. □

### Example 9.

Using the ratio test, we can show that

$$
\sum_{n = 1}^{\infty} \frac{n^{3}}{2^{n}} , \sum_{n = 1}^{\infty} \frac{((- 1 ))^{n}}{n !} , \text{and } \sum_{n = 1}^{\infty} \frac{n !}{n^{n}}
$$

all converge. It is quite obvious how to use the test for the first two of these. For the third series, we compute

$$
\frac{\frac{(n + 1 ) !}{((n + 1 ))^{n + 1}}}{\frac{n !}{n^{n}}} = \frac{(n + 1 ) n^{n}}{((n + 1 ))^{n + 1}} = \frac{n^{n}}{((n + 1 ))^{n}} = ((\frac{n}{n + 1}))^{n} = \frac{1}{((1 + \frac{1}{n}))^{n}} .
$$

Now recall Example 49, where we showed that the sequence $((((1 + 1 / n ))^{n}))_{n \in \N}$ is increasing and bounded. Hence it has a limit

$$
e = \underset{n \to \infty}{ \lim } ((1 + \frac{1}{n}))^{n} ,
$$

and $e \geq ((1 + 1 / 1 ))^{1} = 2$ . Therefore,

$$
\underset{n \to \infty}{ \lim } \frac{\frac{(n + 1 ) !}{((n + 1 ))^{n + 1}}}{\frac{n !}{n^{n}}} = \frac{1}{e} < 1.
$$

The ratio test now confirms that the third series converges.

### Example 9.

The ratio test is inconclusive for

$$
\sum_{n = 1}^{\infty} \frac{1}{n} \text{and } \sum_{n = 1}^{\infty} \frac{1}{n^{2}} ,
$$

although we have already seen that the second series converges and you know from an exercise that the first one diverges.

### Theorem 9 (Cauchy condensation test).

Suppose that $((a_{n} ))_{n \in \N}$ is a decreasing sequence with $a_{n} \geq 0$ for all $n \in \N$ . Let $b_{k} = 2^{k} a_{2^{k}}$ for all $k \in \N$ . Then

$$
\sum_{n = 1}^{\infty} a_{n} < \infty
$$

if, and only if,

$$
\sum_{k = 1}^{\infty} b_{k} < \infty .
$$

#### Proof

Suppose first that $\sum_{k = 1}^{\infty} b_{k} < \infty$ . Fix an arbitrary $N \in \N$ . Choose $K \in \N$ such that $N \leq 2^{K + 1} - 1$ . Because $((a_{n} ))_{n \in \N}$ is decreasing, we have the inequality

$$
\begin{align}
\begin{matrix}\sum_{n = 1}^{N}a_{n} \leq\sum_{n = 1}^{2^{K + 1} - 1}a_{n} \\ &=a_{1}+(a_{2} + a_{3} )+(a_{4} + a_{5} + a_{6} + a_{7} )+\dots +(a_{2^{K}} + \dots  + a_{2^{K + 1} - 1} ) \\ \leq a_{1}+2a_{2}+4a_{4}+\dots +2^{K}a_{2^{K}} \\ &=a_{1}+\sum_{k = 1}^{K}b_{k} \\ \leq a_{1}+\sum_{k = 1}^{\infty}b_{k}.\end{matrix}
\end{align}
$$

Hence $\sum_{n = 1}^{\infty} a_{n}$ converges by Proposition 80.

Now suppose that $\sum_{n = 1}^{\infty} a_{n} < \infty$ . Then for any $K \in \N$ ,

$$
\begin{align}
\begin{matrix}\sum_{k = 1}^{K}b_{k} &=\sum_{k = 1}^{K}2^{k}a_{2^{k}}=2a_{2}+4a_{4}+8a_{8}+\dots +2^{K}a_{2^{K}} \\ &=(a_{2} + a_{2} )+(a_{4} + a_{4} + a_{4} + a_{4} )+(a_{8} + \dots  + a_{8} )+\dots + \\ +(a_{2^{K}} + \dots  + a_{2^{K}} ) \\ \leq(a_{1} + a_{1} )+(a_{2} + a_{2} + a_{3} + a_{3} )+ \\ +(a_{4} + a_{4} + a_{5} + a_{5} + a_{6} + a_{6} + a_{7} + a_{7} )+\dots + \\ +(a_{2^{K - 1}} + \dots  + a_{2^{K} - 1} ) \\ \leq 2\sum_{n = 1}^{\infty}a_{n}.\end{matrix}
\end{align}
$$

Now we invoke Proposition 80 again and conclude that $\sum_{k = 1}^{\infty} b_{k}$ converges. □

### Theorem 9 (Leibniz’s alternating series test).

Suppose that $((a_{n} ))_{n \in \N}$ is a decreasing sequence with $a_{n} \to 0$ as $n \to \infty$ . Then the series

$$
\sum_{n = 1}^{\infty} ((- 1 ))^{n} a_{n}
$$

converges.

Caution: while all the previous tests give absolute convergence, this one does not in general. For example, the series

$$
\sum_{n = 1}^{\infty} \frac{((- 1 ))^{n}}{n} = - 1 + \frac{1}{2} - \frac{1}{3} + \frac{1}{4} - \dots
$$

meets the hypothesis of the theorem and therefore converges, but it converges only conditionally, as we know that

$$
\sum_{n = 1}^{\infty} \frac{1}{n} = \infty .
$$

#### Proof

Consider the sequence of partial sums $((S_{N} ))_{N \in \N}$ with

$$
S_{N} = \sum_{n = 1}^{N} ((- 1 ))^{n} a_{n} .
$$

We first study the subsequence $((S_{2 N} ))_{N \in \N}$ and note that

$$
\begin{align}
\begin{matrix}S_{2 N + 2} &=-a_{1}+a_{2}-a_{3}+a_{4}-\dots -a_{2 N + 1}+a_{2 N + 2} \\ &=S_{2 N}-a_{2 N + 1}+a_{2 N + 2} \\ \leq S_{2 N}\end{matrix}
\end{align}
$$

for all $N \in \N$ , since $a_{2 N + 2} \leq a_{2 N + 1}$ . Hence the sequence $((S_{2 N} ))_{N \in \N}$ is decreasing. Moreover, it is bounded, as

$$
S_{2 N} = - a_{1} + (a_{2} - a_{3} ) + (a_{4} - a_{5} ) + \dots  + (a_{2 N - 2} - a_{2 N - 1} ) + a_{2 N} \geq - a_{1}
$$

for all $N \in \N$ . By Theorem 47, the limit

$$
L = \underset{N \to \infty}{ \lim } S_{2 N}
$$

exists.

Next we observe that

$$
S_{2 N - 1} = S_{2 N} - a_{2 N} \to L
$$

as well, because $a_{2 N} \to 0$ as $N \to \infty$ . Thus given $\epsi > 0$ , we can choose $N_{1} \in \N$ such that $|S_{2 N} - L| < \epsi$ for all $N \geq N_{1}$ , and we can choose $N_{2} \in \N$ such that $|S_{2 N - 1} - L| < \epsi$ for all $N \geq N_{2}$ . Setting $N_{0} =  \max  \{ 2 N_{1} , 2 N_{2} - 1 \}$ , we conclude that $|S_{N} - L| < \epsi$ whenever $N \geq N_{0}$ . Hence

$$
\sum_{n = 1}^{\infty} ((- 1 ))^{n} a_{n} = \underset{N \to \infty}{ \lim } S_{N} = L .
$$

□

## 5.5 Multiplying series

You may have noticed the absence of multiplication in Theorem 78 (on the algebra of limits for series). This is because multiplication for series is somewhat more complicated. Here is how we multiply two absolutely convergent series.

### Theorem 9 (Cauchy product of series).

Suppose that the series $\sum_{n = 0}^{\infty} a_{n}$ and $\sum_{n = 0}^{\infty} b_{n}$ converge absolutely. For every $n \in \N_{0}$ , define

$$
c_{n} = \sum_{i = 0}^{n} a_{i} b_{n - i} = a_{0} b_{n} + a_{1} b_{n - 1} + \dots  + a_{n - 1} b_{1} + a_{n} b_{0} .
$$

Then $\sum_{n = 0}^{\infty} c_{n}$ converges absolutely and

$$
(\sum_{n = 0}^{\infty} a_{n} ) (\sum_{n = 0}^{\infty} b_{n} ) = \sum_{n = 0}^{\infty} c_{n} .
$$

It is more convenient to start the summation with $0$ rather than $1$ for the series in this theorem, but this is just a matter of notation and all the above principles and facts still apply.

#### Proof

We write

$$
A = \sum_{n = 0}^{\infty} a_{n} \text{and } B = \sum_{n = 0}^{\infty} b_{n}
$$

and also

$$
\bar{A} = \sum_{n = 0}^{\infty} |a_{n}| \text{and } \bar{B} = \sum_{n = 0}^{\infty} |b_{n}| .
$$

For $N \in \N_{0}$ , write

$$
A_{N} = \sum_{n = 0}^{N} a_{n} , B_{N} = \sum_{n = 0}^{N} b_{n} , \text{and } C_{N} = \sum_{n = 0}^{N} c_{n} .
$$

Then

$$
C_{N} = \sum_{n = 0}^{N} c_{n} = \sum_{n = 0}^{N} \sum_{i = 0}^{n} a_{i} b_{n - i} = \underset{i + j \leq N}{\sum} a_{i} b_{j} .
$$

(Here the last sum is taken over all pairs of natural numbers $i , j \in \N_{0}$ that satisfy the inequality $i + j \leq N$ .) Compare this with

$$
A_{N} B_{N} = (\sum_{n = 0}^{N} a_{n} ) (\sum_{n = 0}^{N} b_{n} ) = \sum_{i = 0}^{N} \sum_{j = 0}^{N} a_{i} b_{j} .
$$

We see that

$$
A_{N} B_{N} - C_{N} = \underset{i,j\leq N \\ i+j\geq N+1}{\sum} a_{i} b_{j} .
$$

In particular, if $N \geq 2 M$ for some $M \in \N$ , then

$$
|C_{N} - A_{N} B_{N}| \leq \underset{i,j\leq N \\ i+j\geq N+1}{\sum} |a_{i}| |b_{j}| \leq \underset{i\leq N \\ M+1\leq j\leq N \\ i+j\geq N+1}{\sum} |a_{i}| |b_{j}| + \underset{M+1\leq i\leq N \\ j\leq N \\ i+j\geq N+1}{\sum} |a_{i}| |b_{j}| ,
$$

because for $i , j \in \N$ with $i + j \geq N + 1$ , one of the inequalities $i \geq M + 1$ or $j \geq M + 1$ must always be satisfied. Moreover,

$$
\begin{align}
\begin{matrix}\underset{\begin{matrix}i\leq N \\ M+1\leq j\leq N \\ i+j\geq N+1\end{matrix}}{\sum}|a_{i}||b_{j}| \leq\sum_{i = 0}^{N}\sum_{j = M + 1}^{N}|a_{i}||b_{j}| \\ &=(\sum_{n = 0}^{N} |a_{i}| )(\sum_{j = M + 1}^{N} |b_{j}| ) \\ \leq\bar{A}\sum_{n = M + 1}^{\infty}|b_{n}|\end{matrix}
\end{align}
$$

and similarly

$$
\underset{M+1\leq i\leq N \\ j\leq N \\ i+j\geq N+1}{\sum} |a_{i}| |b_{j}| \leq \bar{B} \sum_{n = M + 1}^{\infty} |a_{n}| .
$$

Fix $\epsi > 0$ . Choose $N_{1} \in \N$ such that

$$
|A B - A_{N} B_{N}| < \frac{\epsi}{3}
$$

for all $N \geq N_{1}$ and at the same time,

$$
\sum_{n = N_{1} + 1}^{\infty} |a_{n}| < \frac{\epsi}{3 \bar{B} + 1} \text{and } \sum_{n = N_{1} + 1}^{\infty} |b_{n}| < \frac{\epsi}{3 \bar{A} + 1} .
$$

Now for $N \geq 2 N_{1}$ , we conclude that

$$
\begin{align}
\begin{matrix}|C_{N} - A B| \leq|C_{N} - A_{N} B_{N}|+|A_{N} B_{N} - A B| \\ \leq\bar{A}\sum_{n = N_{1} + 1}^{\infty}|b_{n}|+\bar{B}\sum_{n = N_{1} + 1}^{\infty}|a_{n}|+|A_{N} B_{N} - A B| \\ <\bar{A}\frac{\epsi}{3 \bar{A} + 1}+\bar{B}\frac{\epsi}{3 \bar{B} + 1}+\frac{\epsi}{3}\leq\epsi.\end{matrix}
\end{align}
$$

So we have proved that $\sum_{n = 0}^{\infty} c_{n}$ converges and that

$$
\sum_{n = 0}^{\infty} c_{n} = A B .
$$

The same reasoning applies to the series $\sum_{n = 0}^{\infty} |a_{n}|$ and $\sum_{n = 0}^{\infty} |b_{n}|$ . If we define

$$
c_{n}^{′} = \sum_{i = 0}^{n} |a_{i}| |b_{n - i}| , n \in \N_{0} ,
$$

then these arguments show that

$$
\sum_{n = 0}^{\infty} c_{n}^{′} < \infty .
$$

Since $|c_{n}| \leq c_{n}^{′}$ for all $n \in \N$ , the comparison test implies that $\sum_{n = 0}^{\infty} c_{n}$ converges absolutely. □

## 5.6 Power series

Here we discuss a type of series that involves a variable $x$ and can be thought of as an ‘infinite polynomial’.

### Definition 9.

A series of the form

$$
\sum_{n = 0}^{\infty} a_{n} x^{n} = a_{0} + a_{1} x + a_{2} x^{2} + \dots  + a_{n} x^{n} + \dots  ,
$$

where $a_{0} , a_{1} , a_{2} , \dots$ are real numbers, is called a **power series**.

We can evaluate a power series for every value of $x \in \R$ . This gives different series for different values, possibly with different convergence properties.

### Theorem 9.

For any power series $\sum_{n = 0}^{\infty} a_{n} x^{n}$ , there exists $R \in [ 0 , \infty ) \cup \{ \infty \}$ such that

1.  if $|x| < R$ , then $\sum_{n = 0}^{\infty} a_{n} x^{n}$ converges absolutely, and
2.  if $|x| > R$ , then $\sum_{n = 0}^{\infty} a_{n} x^{n}$ diverges.

The theorem does not give any information about values of $x$ with $|x| = R$ . This question typically has to be settled independently.

#### Proof

Define

$$
R = \sup \{r \geq 0 : ((|a_{n}| r^{n} ))_{n \in \N_{0}} \text{ is bounded }\} .
$$

Since $((|a_{n}| 0^{n} ))_{n \in \N_{0}} = (|a_{0}| , 0 , 0 , \dots  )$ is bounded, we conclude that $R \geq 0$ . (But $R = \infty$ is possible.)

(i) If $|x| < R$ , then we may choose a number $r$ with $|x| < r < R$ such that $((|a_{n}| r^{n} ))_{n \in \N_{0}}$ is bounded. Hence there exists $M \geq 0$ such that $|a_{n}| r^{n} \leq M$ for all $n \in \N_{0}$ . Then

$$
|a_{n} x^{n}| = |a_{n}| (|x|)^{n} = |a_{n}| r^{n} ((\frac{|x|}{r}))^{n} \leq M ((\frac{|x|}{r}))^{n} .
$$

But since $|x| / r < 1$ , the geometric series

$$
\sum_{n = 0}^{\infty} ((\frac{|x|}{r}))^{n}
$$

converges. By the comparison test,

$$
\sum_{n = 0}^{\infty} |a_{n} x^{n}|
$$

converges as well. So we have absolute convergence.

(ii) If $|x| > R$ , then $((|a_{n} x^{n}| ))_{n \in \N_{0}}$ is unbounded by the definition of $R$ . But then clearly $|a_{n} x^{x}| ↛ 0$ as $n \to \infty$ . According to Proposition 77 this means that $\sum_{n = 0}^{\infty} a_{n} x^{n}$ diverges. □

### Definition 9.

Given a power series $\sum_{n = 0}^{\infty} a_{n} x^{n}$ , the number $R$ from Theorem 98 is called its **radius of convergence**.

### Theorem 10.

For any power series $\sum_{n = 0}^{\infty} a_{n} x^{n}$ , if

$$
R = \underset{n \to \infty}{ \lim } \frac{|a_{n}|}{|a_{n + 1}|}
$$

exists (where $R = \infty$ is allowed), then $R$ is the radius of convergence.

#### Proof

Suppose that the limit exists (possibly $R = \infty$ ). Then for any $x \in \R$ ,

$$
\frac{|a_{n + 1} x^{n + 1}|}{|a_{n} x^{n}|} = |x| \frac{|a_{n + 1}|}{|a_{n}|} \to \frac{|x|}{R}
$$

as $n \to \infty$ . So the ratio test implies that $\sum_{n = 0}^{\infty} a_{n} x^{n}$ converges absolutely whenever $|x| < R$ and diverges when $|x| > R$ . This means that $R$ must be the radius of convergence. □

The limit in this theorem does not always exist, but if it does, then this is typically the easiest way to compute the radius of convergence. In any case, however, we have the following formula.

### Theorem 11 (Cauchy-Hadamard).

The radius of convergence of the power series $\sum_{n = 0}^{\infty} a_{n} x^{n}$ is

$$
R = \frac{1}{(\lim \sup)_{n \to \infty} \sqrt[n]{|a_{n}|}} .
$$

Here $(\lim \sup)_{n \to \infty} \sqrt[n]{|a_{n}|}$ may take any value in $[ 0 , \infty )$ or may be $\infty$ . The fraction should be interpreted as $1 / \infty = 0$ and $1 / 0 = \infty$ if we have one of the values $0$ or $\infty$ .

#### Proof

Consider the set

$$
A = \{r \geq 0 : ((|a_{n}| r^{n} ))_{n \in \N_{0}} \text{ is bounded }\} .
$$

We have seen in the proof of Theorem 98 that the radius of convergence is $\sup A$ . Thus it suffices to show that $R = \sup A$ .

For any $r < R$ , we see that

$$
r (\lim \sup)_{n \to \infty} \sqrt[n]{|a_{n}|} < 1.
$$

Hence there exists $N \in \N$ such that $r \sqrt[n]{|a_{n}|} \leq 1$ for all $n \geq N$ . Then $r^{n} |a_{n}| \leq 1$ for all $n \geq N$ and it follows that $r \in A$ .

For any $r > R$ , we obtain

$$
r (\lim\sup)_{n \to \infty} \sqrt[n]{|a_{n}|} > 1.
$$

Hence there exists $s > 1$ such that $r \sqrt[n]{|a_{n}|} \geq s$ for infinitely many values of $n$ . Hence $r^{n} |a_{n}| \geq s^{n}$ for infinitely many values of $n$ , which means that $((|a_{n}| r^{n} ))_{n \in \N}$ is unbounded and $r \notin A$ .

This implies that $R = \sup A$ and concludes the proof. □
