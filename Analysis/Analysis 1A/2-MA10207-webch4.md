Chapter 4  
  
[Sequences](MA10207-web.html#QQ2-8-20)
-----------------------------------------------------

This chapter is about the following notion.

Definition 32.  
  
A **sequence** of real numbers is a function from $ℕ$ to $ℝ$ .

We will also use the expressions ‘real sequence’ and ‘sequence in $ℝ$ ’ for the same concept.

Although this means that a sequence is a rule assigning a real number to every element of $ℕ$ , the structure of $ℕ$ also allows the interpretation implied by the word ‘sequence’. We use the notation $\left( a_{1} , a_{2} , a_{3} , \dots  \right)$ for the rule that assigns the number $a_{1}$ to $1$ , the number $a_{2}$ to $2$ , etc. Often this is abbreviated as $\left(\left( a_{n} \right)\right)_{n \in ℕ}$ or $\left(\left( a_{n} \right)\right)_{n = 1}^{\infty}$ .

Example 33.  
  
The sequence $\left( 1 , 2 , 4 , 8 , 16 , \dots  \right)$ may be written as $\left(\left( 2^{n - 1} \right)\right)_{n \in ℕ}$ , and the sequence $\left( 1 , 1 / 2 , 1 / 3 , \dots  \right)$ may be written as $\left(\left( 1 / n \right)\right)_{n \in ℕ}$ .

### 4.1 [Convergence](MA10207-web.html#QQ2-8-21)

When studying sequences, we are often interested in their behaviour for very large values of $n$ . Of particular importance is the question whether for a given sequence $\left(\left( a_{n} \right)\right)_{n \in ℕ}$ , the values $a_{n}$ approach a certain number when $n$ tends to infinity.

Definition 34.  
  
A real sequence $\left(\left( a_{n} \right)\right)_{n \in ℕ}$ **converges** to a real number $L$ if for every $ϵ > 0$ there exists $N \in ℕ$ such that $\left|a_{n} - L\right| < ϵ$ for all $n \geq N$ . If so, then $L$ is called the **limit** of the sequence. We denote convergence of $\left(\left( a_{n} \right)\right)_{n \in ℕ}$ to $L$ by $a_{n} \rightarrow L$ as $n \rightarrow \infty$ , or alternatively by $L = \underset{n \rightarrow \infty}{ \lim } a_{n}$ .

If a sequence does not converge, then we say that is **diverges**.

The condition in this definition is perhaps a bit complicated, so we discuss it briefly. We may write it with the help of quantifiers as follows: convergence of $\left(\left( a_{n} \right)\right)_{n \in ℕ}$ to $L$ means that

$$
\forall ϵ > 0 \exists N \in ℕ \forall n \geq N : \left|a_{n} - L\right| < ϵ .
$$

The quantity $\left|a_{n} - L\right|$ can be thought of as the distance between $a_{n}$ and $L$ . So the inequality $\left|a_{n} - L\right| < ϵ$ means that $a_{n}$ is less than $ϵ$ away from $L$ . The whole statement means that no matter what positive number $ϵ$ you choose, you can always find a corresponding natural number $N$ such that from $N$ onward (for all $n \geq N$ ), the members of the sequence are less than $ϵ$ away from $L$ . In other words, the sequence eventually approximates $L$ arbitrarily well.

One more subtlety: the number $N$ can (and will in general) depend on $ϵ$ . Choosing $ϵ$ smaller may force you to increase the value of $N$ in order to still satisfy the condition.

Example 35.  
  
Does the sequence $\left(\left( 1 / n \right)\right)_{n \in ℕ}$ converge?

**Solution.** If we suspect convergence, then we have to identify a limit. Inspection of the sequence suggests the limit $0$ . Now to check if indeed $\underset{n \rightarrow \infty}{ \lim } 1 / n = 0$ , we need to verify the criterion. This is what we do next.

Suppose we’re given some $ϵ > 0$ . We examine the inequality $\left|1 / n - 0\right| < ϵ$ , which can be rewritten in the form $1 / n < ϵ$ or $n > 1 / ϵ$ . Now if we choose $N \in ℕ$ with $N > 1 / ϵ$ (which is possible by the Archimedean postulate, Theorem [23](MA10207-webch2.html#x6-14028r23)), then any $n \geq N$ will also satisfy $n > 1 / ϵ$ . Hence $\left|1 / n - 0\right| < ϵ$ for all $n \geq N$ .

The conclusion is that the sequence does converge and the limit is $0$ .

As this simple example shows, verifying convergence directly with the criterion can be laborious. Sometimes there is no other way, but often it is possible to deduce convergence or divergence from general facts such as the following.

Proposition 36.  
  

1.  For any $c \in ℝ$ , the constant sequence $\left( c , c , c , \dots  \right)$ converges to $c$ .
2.  The sequence $\left(\left( 1 / n \right)\right)_{n \in ℕ}$ converges to $0$ .
3.  For any $a \in ℝ$ , if $\left|a\right| < 1$ , then the sequence $\left(\left( a^{n} \right)\right)_{n \in ℕ}$ converges to $0$ .

Proof.  [(i)](#x8-210071) For any $ϵ > 0$ , the inequality $\left|c - c\right| < ϵ$ holds automatically, so we may choose any $N \in ℕ$ to satisfy the criterion.

[(ii)](#x8-210092) The proof has been given in Example [35](#x8-21005r35).

[(iii)](#x8-210113) Suppose that $\left|a\right| < 1$ . Then $1 / \left|a\right| > 1$ and therefore $1 / \left|a\right| - 1 > 0$ . Define $b = 1 / \left|a\right| - 1$ . Then

$$
\left|a^{n} - 0\right| = \left|a^{n}\right| = \left(\left|a\right|\right)^{n} = \left(\left(\frac{1}{1 + b}\right)\right)^{n} = \frac{1}{\left(\left( 1 + b \right)\right)^{n}} \leq \frac{1}{1 + n b}
$$

by the binomial inequality (Proposition [28](MA10207-webch3.html#x7-18018r28)).

Fix $ϵ > 0$ . Choose $N \in ℕ$ with

$$
N > \frac{1 / ϵ - 1}{b} .
$$

Then for $n \geq N$ , we conclude that

$$
1 + n b \geq 1 + N b > 1 + \frac{1 / ϵ - 1}{b} b = \frac{1}{ϵ} .
$$

Therefore,

$$
\left|a^{n} - 0\right| \leq \frac{1}{1 + n b} < \frac{1}{1 / ϵ} = ϵ .
$$

This proves that $\underset{n \rightarrow \infty}{ \lim } a^{n} = 0$ . □

Proposition 37.  
  
Suppose that $\left(\left( a_{n} \right)\right)_{n \in ℕ}$ and $\left(\left( b_{n} \right)\right)_{n \in ℕ}$ are real sequences with $a_{n} \leq b_{n}$ for all $n \in ℕ$ . If $L = \underset{n \rightarrow \infty}{ \lim } a_{n}$ and $M = \underset{n \rightarrow \infty}{ \lim } b_{n}$ exist, then $L \leq M$ .

Proof.  We argue by contradiction.

Suppose (seeking contradiction) that $M < L$ . Let $ϵ = \left( L - M \right) / 2$ . Since $a_{n} \rightarrow L$ as $n \rightarrow \infty$ , there exists $N_{1} \in ℕ$ such that $\left|a_{n} - L\right| < ϵ$ for all $n \geq N_{1}$ . Similarly, there exists $N_{2} \in ℕ$ such that $\left|b_{n} - M\right| < ϵ$ for all $n \geq N_{2}$ . Now set $N =  \max  \left\{ N_{1} , N_{2} \right\}$ . Then for all $n \geq N$ ,

$$
a_{n} > L - ϵ = L - \frac{L - M}{2} = \frac{L + M}{2}
$$

and

$$
b_{n} < M + ϵ = M + \frac{L - M}{2} = \frac{L + M}{2} .
$$

Therefore, we see that $a_{n} > b_{n}$ for $n \geq N$ , which contradicts the hypothesis. □

Corollary 38.  
  
Suppose that $\left(\left( a_{n} \right)\right)_{n \in ℕ}$ is a convergent sequence.

1.  If $b \in ℝ$ is a number with $a_{n} \leq b$ for all $n \in ℕ$ , then $\underset{n \rightarrow \infty}{ \lim } a_{n} \leq b$ .
2.  If $c \in ℝ$ is a number with $a_{n} \geq c$ for all $n \in ℕ$ , then $\underset{n \rightarrow \infty}{ \lim } a_{n} \geq c$ .

Theorem 39 (Uniqueness of limits).  
  
A sequence of real numbers has at most one limit.

In other words, if a limit exists at all (if the sequence converges), then that limit is unique.

Proof.  Suppose that $\left(\left( a_{n} \right)\right)_{n \in ℕ}$ is a real sequence that converges simultaneously to $L \in ℝ$ and to $M \in ℝ$ . Then, as $a_{n} \leq a_{n}$ for all $n$ , Proposition [37](#x8-21013r37) implies that $L \leq M$ . But it also implies that $M \leq L$ , and according to (A11), this means that $L = M$ . □

Definition 40.  
  
A real sequence $\left(\left( a_{n} \right)\right)_{n \in ℕ}$ is **bounded** if the set $\left\{a_{n} : n \in ℕ\right\}$ (the set of all its members) is bounded.

Proposition 41.  
  
Any convergent sequence is bounded.

Proof.  Suppose that $\left(\left( a_{n} \right)\right)_{n \in ℕ}$ converges and let $L = \underset{n \rightarrow \infty}{ \lim } a_{n}$ . Apply the convergence criterion with $ϵ = 1$ . This yields a number $N \in ℕ$ such that $\left|a_{n} - L\right| < 1$ for all $n \geq N$ . Hence

$$
\left|a_{n}\right| < \left|L\right| + 1
$$

for all $n \geq N$ . Now set

$$
M =  \max  \left\{ \left|a_{1}\right| , \dots  , \left|a_{N - 1}\right| , \left|L\right| + 1 \right\} .
$$

Then $\left|a_{n}\right| \leq M$ for all $n \in ℕ$ . Hence $M$ serves as an upper bound of $\left\{a_{n} : n \in ℕ\right\}$ while $- M$ serves as a lower bound. □

Theorem 42 (Algebra of limits).  
  
Let $\left(\left( a_{n} \right)\right)_{n \in ℕ}$ and $\left(\left( b_{n} \right)\right)_{n \in ℕ}$ be convergent sequences with limits $A = \underset{n \rightarrow \infty}{ \lim } a_{n}$ and $B = \underset{n \rightarrow \infty}{ \lim } b_{n}$ . Then

1.  $\underset{n \rightarrow \infty}{ \lim } \left( a_{n} + b_{n} \right) = A + B$ ,
2.  $\underset{n \rightarrow \infty}{ \lim } \left( a_{n} - b_{n} \right) = A - B$ ,
3.  $\underset{n \rightarrow \infty}{ \lim } C a_{n} = C A$ for any constant $C \in ℝ$ ,
4.  $\underset{n \rightarrow \infty}{ \lim } \left( a_{n} b_{n} \right) = A B$ , and
5.  if $b_{n} \neq 0$ for all $n \in ℕ$ and if $B \neq 0$ , then $\underset{n \rightarrow \infty}{ \lim } \left( a_{n} / b_{n} \right) = A / B$ .

Proof.  [(i)](#x8-210261) Let $ϵ > 0$ . Then there exists $N_{1} \in ℕ$ such that $\left|a_{n} - A\right| < ϵ / 2$ for all $n \geq N_{1}$ and there exists $N_{2} \in ℕ$ such that $\left|b_{n} - B\right| < ϵ / 2$ for all $n \geq N_{2}$ .

Define $N =  \max  \left\{ N_{1} , N_{2} \right\}$ . If $n \geq N$ , then

$$
\left|\left( a_{n} + b_{n} \right) - \left( A + B \right)\right| = \left|\left( a_{n} - A \right) + \left( b_{n} - B \right)\right| \leq \left|a_{n} - A\right| + \left|b_{n} - B\right| < \frac{ϵ}{2} + \frac{ϵ}{2} = ϵ .
$$

(Here we have used the triangle inequality.) Hence $a_{n} + b_{n} \rightarrow A + B$ as $n \rightarrow \infty$ .

[(iv)](#x8-210324) First note that

$$
\begin{align}
\begin{matrix}\left|a_{n} b_{n} - A B\right| & =\left|\left( a_{n} - A \right) b_{n} + A \left( b_{n} - B \right)\right| \\ & \leq\left|\left( a_{n} - A \right) b_{n}\right|+\left|A \left( b_{n} - B \right)\right| \\ & =\left|a_{n} - A\right|\left|b_{n}\right|+\left|A\right|\left|b_{n} - B\right|\end{matrix} & 
\end{align}
$$

(1)

by the triangle inequality and Proposition [26](MA10207-webch3.html#x7-18003r26). According to Proposition [41](#x8-21023r41), there exists $M > 0$ such that $\left|b_{n}\right| \leq M$ for all $n \in ℕ$ .

Now let $ϵ > 0$ . Choose $N_{1} \in ℕ$ such that

$$
\left|a_{n} - A\right| < \frac{ϵ}{2 M + 1}
$$

for all $n \geq N_{1}$ and choose $N_{2} \in ℕ$ such that

$$
\left|b_{n} - B\right| < \frac{ϵ}{2 \left|A\right| + 1}
$$

for all $n \geq N_{2}$ . Set $N =  \max  \left\{ N_{1} , N_{2} \right\}$ . Then for $n \geq N$ , we have the inequalities

$$
\left|a_{n} - A\right| \left|b_{n}\right| < \frac{ϵ}{2 M + 1} M \leq \frac{ϵ}{2} , \text{and } \left|A\right| \left|b_{n} - B\right| < \left|A\right| \frac{ϵ}{2 \left|A\right| + 1} \leq \frac{ϵ}{2} .
$$

Combine these estimates with ([1](#x8-21036r1)). This yields

$$
\left|a_{n} b_{n} - A B\right| < \frac{ϵ}{2} + \frac{ϵ}{2} = ϵ .
$$

[(iii)](#x8-210303) Consider the sequence $\left(\left( c_{n} \right)\right)_{n \in ℕ}$ with $c_{n} = C$ for every $n \in ℕ$ . Then $\underset{n \rightarrow \infty}{ \lim } c_{n} = C$ by Proposition [36](#x8-21006r36). Now we simply apply [(iv)](#x8-210324), which gives

$$
\underset{n \rightarrow \infty}{ \lim } \left( C a_{n} \right) = \underset{n \rightarrow \infty}{ \lim } \left( c_{n} a_{n} \right) = C A .
$$

[(ii)](#x8-210282) Note that

$$
a_{n} - b_{n} = a_{n} + \left( - 1 \right) b_{n} .
$$

By [(iii)](#x8-210303), we have the limit $\underset{n \rightarrow \infty}{ \lim } \left( \left( - 1 \right) b_{n} \right) = - B$ . Now [(i)](#x8-210261) implies that

$$
\underset{n \rightarrow \infty}{ \lim } \left( a_{n} - b_{n} \right) = A + \left( - B \right) = A - B .
$$

[(v)](#x8-210345) Here we first prove that

$$
\underset{n \rightarrow \infty}{ \lim }\frac{1}{b_{n}}=\frac{1}{B}.
$$

(2)

To this end, first note that

$$
\left|\frac{1}{b_{n}} - \frac{1}{B}\right| = \left|\frac{B - b_{n}}{b_{n} B}\right| = \frac{\left|B - b_{n}\right|}{\left|b_{n}\right| \left|B\right|} .
$$

Since $B \neq 0$ , we know that $\left|B\right| > 0$ . Therefore, there exists $N_{1} \in ℕ$ such that $\left|b_{n} - B\right| < \left|B\right| / 2$ for all $n \geq N_{1}$ . Then it also follows that

$$
\left|b_{n}\right| \geq \left|B\right| - \left|b_{n} - B\right| > \frac{\left|B\right|}{2}
$$

by the reverse triangle inequality.

Now fix $ϵ > 0$ arbitrarily. Choose $N_{2} \in ℕ$ such that

$$
\left|b_{n} - B\right| < \frac{ϵ \left(\left|B\right|\right)^{2}}{2}
$$

for all $n \geq N_{2}$ . Set $N =  \max  \left\{ N_{1} , N_{2} \right\}$ . Then for $n \geq N$ , we find that

$$
\left|\frac{1}{b_{n}} - \frac{1}{B}\right| = \frac{\left|B - b_{n}\right|}{\left|b_{n}\right| \left|B\right|} < \frac{ϵ \left(\left|B\right|\right)^{2} / 2}{\left(\left|B\right|\right)^{2} / 2} = ϵ .
$$

This proves ([2](#x8-21037r2)).

Finally, we prove the full statement with the help of [(iv)](#x8-210324). We now know that

$$
\underset{n \rightarrow \infty}{ \lim } \frac{a_{n}}{b_{n}} = \underset{n \rightarrow \infty}{ \lim } \left(a_{n} \frac{1}{b_{n}}\right) = \frac{A}{B} .
$$

□

Example 43.  
  
Find

$$
\underset{n \rightarrow \infty}{ \lim } \frac{2^{- n} + n^{3} - 7 n}{5 n^{3} + 2 n^{2} - 8 n + 9} .
$$

**Solution.** We need to rewrite this expression a bit before we can apply the algebra of limits theorem. Note that

$$
\frac{2^{- n} + n^{3} - 7 n}{5 n^{3} + 2 n^{2} - 8 n + 9} = \frac{\frac{\left(\left( 1 / 2 \right)\right)^{n}}{n^{3}} + 1 - \frac{7}{n^{2}}}{5 + \frac{2}{n} - \frac{8}{n^{2}} + \frac{9}{n^{3}}} .
$$

Now

$$
\frac{\left(\left( 1 / 2 \right)\right)^{n}}{n^{3}} = \left(\left(\frac{1}{2}\right)\right)^{n} \left(\frac{1}{n}\right) \left(\frac{1}{n}\right) \left(\frac{1}{n}\right) \rightarrow 0 \cdot 0 \cdot 0 \cdot 0 = 0 \text{as  }N\rightarrow\infty\text{}
$$

by Theorem [42](#x8-21024r42). Similarly,

$$
\frac{7}{n^{2}} \rightarrow 0 , \frac{2}{n} \rightarrow 0 , \frac{8}{n^{2}} \rightarrow 0 , \frac{9}{n^{3}} \rightarrow 0 \text{as  }N\rightarrow\infty\text{} .
$$

Using Theorem [42](#x8-21024r42) again, we finally find that

$$
\underset{n \rightarrow \infty}{ \lim } \frac{2^{- n} + n^{3} - 7 n}{5 n^{3} + 2 n^{2} - 8 n + 9} = \frac{0 + 1 - 0}{5 + 0 - 0 + 0} = \frac{1}{5} .
$$

Proposition 44.  
  
Let $\left(\left( a_{n} \right)\right)_{n \in ℕ}$ be a real sequence.

1.  If $a_{n} \rightarrow L$ as $n \rightarrow \infty$ for some $L \in ℝ$ , then $\left|a_{n}\right| \rightarrow \left|L\right|$ as $n \rightarrow \infty$ .
2.  If $\left|a_{n}\right| \rightarrow 0$ as $n \rightarrow \infty$ , then $a_{n} \rightarrow 0$ as $n \rightarrow \infty$ as well.

But caution: the second statement becomes false if $0$ is replaced by any other value. For example, consider the sequence with $a_{n} = \left(\left( - 1 \right)\right)^{n}$ . Then $\left|a_{n}\right| = 1 \rightarrow 1$ as $n \rightarrow \infty$ , but $\left(\left( a_{n} \right)\right)_{n \in ℕ}$ oscillates between $- 1$ and $1$ and does not converge.

Proof.  [(i)](#x8-210401) Suppose that $a_{n} \rightarrow L$ as $n \rightarrow \infty$ . Given $ϵ > 0$ , choose $N \in ℕ$ such that $\left|a_{n} - L\right| < ϵ$ for all $n \geq N$ . Then by the reverse triangle inequality,

$$
\left|\left|a_{n}\right| - \left|L\right|\right| \leq \left|a_{n} - L\right| < ϵ
$$

as well.

[(ii)](#x8-210422) This is an exercise. □

In addition to convergent sequences, the following types of sequences are sometimes useful, too.

Definition 45.  
  

1.  We say that a real sequence $\left(\left( a_{n} \right)\right)_{n \in ℕ}$ **diverges to $\infty$** if for all $M \in ℝ$ there exists $N \in ℕ$ such that $a_{n} > M$ for all $n \geq ℕ$ . In this case, we write $a_{n} \rightarrow \infty$ as $n \rightarrow \infty$ or $\underset{n \rightarrow \infty}{ \lim } a_{n} = \infty$ .
2.  We say that $\left(\left( a_{n} \right)\right)_{n \in ℕ}$ **diverges to $- \infty$** if for all $M \in ℝ$ there exists $N \in ℕ$ such that $a_{n} < M$ for all $n \in ℕ$ . In this case, we write $a_{n} \rightarrow - \infty$ as $n \rightarrow \infty$ or $\underset{n \rightarrow \infty}{ \lim } a_{n} = - \infty$ .

Some, but not all, of the statements from Theorem [42](#x8-21024r42) extend to sequences diverging to $\infty$ or $- \infty$ . You can explore the corresponding statements in an exercise.

### 4.2 [Monotone sequences](MA10207-web.html#QQ2-8-22)

Definition 46.  
  
A real sequence $\left(\left( a_{n} \right)\right)_{n \in ℕ}$ is called

1.  **increasing** if $a_{n} \leq a_{n + 1}$ for all $n \in ℕ$ ,
2.  **strictly increasing** if $a_{n} < a_{n + 1}$ for all $n \in ℕ$ ,
3.  **decreasing** if $a_{n} \geq a_{n + 1}$ for all $n \in ℕ$ ,
4.  **strictly decreasing** if $a_{n} > a_{n + 1}$ for all $n \in ℕ$ .

We say that the sequence is **monotone** if it has any of the above properties.

Some books use the expressions ‘nondecreasing/increasing’ and ‘nonincreasing/decreasing’ for sequences satisfying [(i)](#x8-220021)–[(iv)](#x8-220114), respectively.

The following is one of the reasons why monotone sequences are useful.

Theorem 47.  
  
If a real sequence is monotone and bounded, then it converges.

Proof.  We only give the proof for increasing sequences, as the arguments for decreasing sequences are essentially the same.

Suppose that $\left(\left( a_{n} \right)\right)_{n \in ℕ}$ is a bounded, increasing sequence. Then the set $\left\{a_{n} : n \in ℕ\right\}$ is bounded (by definition of bounded sequences) and non-empty (as, e.g., $a_{1}$ belongs to the set). The completeness axiom (A15) says that

$$
L : = sup \left\{a_{n} : n \in ℕ\right\}
$$

exists. We claim that $L = \underset{n \rightarrow \infty}{ \lim } a_{n}$ .

In order to verify this claim, choose $ϵ > 0$ . Then by Theorem [22](MA10207-webch2.html#x6-14023r22), there exists $N \in ℕ$ such that $a_{N} > L - ϵ$ . Now for all $n \geq N$ , we have the inequality

$$
a_{n} \geq a_{N} > L - ϵ .
$$

By the definition of $L$ , we also know that $a_{n} \leq L$ , and both inequalities together imply that

$$
\left|a_{n} - L\right| < ϵ
$$

for all $n \geq N$ . □

The theorem tells you that a limit exists, but it does not tell you what it is. Nevertheless, this is useful information and we can often find out what the limit is with other means once we know it exists.

Example 48.  
  
Show that there exists a number $x \in ℝ$ with $x^{2} = 2$ .

**Solution.** Let $a_{1} = 2$ and define a sequence $\left(\left( a_{n} \right)\right)_{n \in ℕ}$ recursively by the formula[1](MA10207-web9.html#fn1x5)

$$
a_{n + 1} = a_{n} - \frac{a_{n}^{2} - 2}{2 a_{n}} , n = 1 , 2 , \dots  .
$$

First we claim that $a_{n} > 0$ for all $n \in ℕ$ and hence the definition makes sense. We prove this by induction. It is obvious that $a_{1} > 0$ . Assuming that $a_{n} > 0$ , we obtain the inequality

$$
a_{n + 1} = \frac{a_{n}}{2} + \frac{1}{a_{n}} > 0
$$

as well. This is the induction step, so we have indeed proved that $a_{n} > 0$ for all $n \in ℕ$ .

Now note that for all $n \in ℕ$ ,

$$
a_{n + 1}^{2}-2=\left(\left(\frac{a_{n}}{2} + \frac{1}{a_{n}}\right)\right)^{2}-2=\frac{a_{n}^{2}}{4}-1+\frac{1}{a_{n}^{2}}=\frac{a_{n}^{4} - 4 a_{n}^{2} + 4}{4 a_{n}^{2}}=\frac{\left(\left( a_{n}^{2} - 2 \right)\right)^{2}}{4 a_{n}^{2}}\geq 0.
$$

(3)

Therefore,

$$
a_{n + 1} = a_{n} - \frac{a_{n}^{2} - 2}{2 a_{n}} \leq a_{n}
$$

for all $n \in ℕ$ . That is, we have a decreasing sequence. Because we have already seen that $a_{n} > 0$ for all $n \in ℕ$ , it is bounded.

Inequality ([3](#x8-22018r3)) even implies that $a_{n} > 1$ for all $n \in ℕ$ , because we know that $a_{n} > 0$ and any number $a \in \left( 0 , 1 \right]$ will satisfy $a^{2} - 2 < 0$ .

Theorem [47](#x8-22015r47) implies that $x = \underset{n \rightarrow \infty}{ \lim } a_{n}$ exists. As we have seen that $a_{n} > 1$ for all $n \in ℕ$ , the limit will satisfy $x \geq 1$ . By the algebra of limits theorem (Theorem [42](#x8-21024r42)), it also satisfies

$$
x = \underset{n \rightarrow \infty}{ \lim } a_{n + 1} = \underset{n \rightarrow \infty}{ \lim } \left(\frac{a_{n}}{2} + \frac{1}{a_{n}}\right) = \frac{x}{2} + \frac{1}{x} .
$$

Hence

$$
\frac{x}{2} = \frac{1}{x} ,
$$

which is equivalent to the equation $x^{2} = 2$ .

Example 49.  
  
Show that

$$
\underset{n \rightarrow \infty}{ \lim } \left(\left(1 + \frac{1}{n}\right)\right)^{n}
$$

exists.

**Solution.** According to Theorem [47](#x8-22015r47), it suffices to show that the sequence with members $a_{n} = \left(\left( 1 + 1 / n \right)\right)^{n}$ is bounded and increasing.

We first show that $\left(\left( a_{n} \right)\right)_{n \in ℕ}$ is increasing. To this end, we write

$$
a_{n} = \left(\left(\frac{n + 1}{n}\right)\right)^{n} .
$$

Thus

$$
\frac{a_{n + 1}}{a_{n}} = \frac{\left(\left(\frac{n + 2}{n + 1}\right)\right)^{n + 1}}{\left(\left(\frac{n + 1}{n}\right)\right)^{n}} = \frac{\left(\left( n + 2 \right)\right)^{n + 1} n^{n}}{\left(\left( n + 1 \right)\right)^{n + 1} \left(\left( n + 1 \right)\right)^{n}} = \frac{n + 2}{n + 1} \left(\left(\frac{\left( n + 2 \right) n}{\left(\left( n + 1 \right)\right)^{2}}\right)\right)^{n} .
$$

Now

$$
\frac{\left( n + 2 \right) n}{\left(\left( n + 1 \right)\right)^{2}} = \frac{n^{2} + 2 n}{\left(\left( n + 1 \right)\right)^{2}} = \frac{\left(\left( n + 1 \right)\right)^{2} - 1}{\left(\left( n + 1 \right)\right)^{2}} = 1 - \frac{1}{\left(\left( n + 1 \right)\right)^{2}} .
$$

Therefore,

$$
\frac{a_{n + 1}}{a_{n}} = \frac{n + 2}{n + 1} \left(\left(1 - \frac{1}{\left(\left( n + 1 \right)\right)^{2}}\right)\right)^{n} .
$$

In the next step, we want to apply the binomial inequality (Proposition [28](MA10207-webch3.html#x7-18018r28)) to the power. In order to do so, we need to check that

$$
- \frac{1}{\left(\left( n + 1 \right)\right)^{2}} \geq - 1.
$$

But this is evidently true, as $n + 1 > 1$ for all $n \in ℕ$ . Hence the binomial inequality implies that

$$
\left(\left(1 - \frac{1}{\left(\left( n + 1 \right)\right)^{2}}\right)\right)^{n} \geq 1 - \frac{n}{\left(\left( n + 1 \right)\right)^{2}} .
$$

We now obtain the inequality

$$
\frac{a_{n + 1}}{a_{n}} \geq \frac{n + 2}{n + 1} \left(1 - \frac{n}{\left(\left( n + 1 \right)\right)^{2}}\right) = \frac{n^{3} + 3 n^{2} + 3 n + 2}{n^{3} + 3 n^{2} + 3 n + 1} > 1.
$$

Therefore, we have proved that $a_{n + 1} > a_{n}$ , and the sequence is in fact strictly increasing.

Next we need to show that it is bounded. We consider even indices (of the form $n = 2 k$ for some $k \in ℕ$ ) first. We compute

$$
\frac{1}{a_{2 k}} = \left(\left(\frac{2 k}{2 k + 1}\right)\right)^{2 k} = \left(\left[\left(\left(1 - \frac{1}{2 k + 1}\right)\right)^{k}\right]\right)^{2} \geq \left(\left[1 - \frac{k}{2 k + 1}\right]\right)^{2} = \left(\left[\frac{k + 1}{2 k + 1}\right]\right)^{2} .
$$

(We have used the binomial inequality again in the third step.) Since $2 \left( k + 1 \right) > 2 k + 1$ for every $k \in ℕ$ , we conclude that

$$
\frac{k + 1}{2 k + 1} > \frac{1}{2} .
$$

Hence

$$
\frac{1}{a_{2 k}} > \frac{1}{4} ,
$$

which means that $a_{2 k} < 4$ for all $k \in ℕ$ . For odd indices $n$ , we use the monotonicity that we have already proved. If $n$ is odd, then $a_{n} < a_{n + 1} < 4$ as well. So the sequence is bounded. Therefore, there exists a limit.

We will come back to the limit of this sequence later. It is common to use the symbol $e$ for it. That is,

$$
e = \underset{n \rightarrow \infty}{ \lim } \left(\left(1 + \frac{1}{n}\right)\right)^{n} .
$$

### 4.3 [Tests for convergence](MA10207-web.html#QQ2-8-23)

In this section we discuss ways to find out if a given sequence is convergent. We already know one criterion: if a sequence is bounded and monotone, then it is convergent by Theorem [47](#x8-22015r47). But this does not apply to all interesting sequences, which is why we want other tests.

Theorem 50 (Pinching theorem/sandwich theorem).  
  
Suppose that $\left(\left( a_{n} \right)\right)_{n \in ℕ}$ , $\left(\left( b_{n} \right)\right)_{n \in ℕ}$ , and $\left(\left( c_{n} \right)\right)_{n \in ℕ}$ are real sequences with $a_{n} \leq b_{n} \leq c_{n}$ for all $n \in ℕ$ . If $\left(\left( a_{n} \right)\right)_{n \in ℕ}$ and $\left(\left( c_{n} \right)\right)_{n \in ℕ}$ converge and

$$
\underset{n \rightarrow \infty}{ \lim } a_{n} = \underset{n \rightarrow \infty}{ \lim } c_{n} ,
$$

then $\left(\left( b_{n} \right)\right)_{n \in ℕ}$ converges as well and

$$
\underset{n \rightarrow \infty}{ \lim } a_{n} = \underset{n \rightarrow \infty}{ \lim } b_{n} = \underset{n \rightarrow \infty}{ \lim } c_{n} .
$$

Proof.  Assume that $\left(\left( a_{n} \right)\right)_{n \in ℕ}$ and $\left(\left( c_{n} \right)\right)_{n \in ℕ}$ do indeed converge with $a_{n} \rightarrow L$ and $c_{n} \rightarrow L$ as $n \rightarrow \infty$ for some $L \in ℝ$ . We need to show that $b_{n} \rightarrow L$ as well as $n \rightarrow \infty$ .

To this end, fix $ϵ > 0$ . Choose $N \in ℕ$ so large that

$$
\left|a_{n} - L\right| < ϵ \text{and } \left|c_{n} - L\right| < ϵ
$$

for all $n \in ℕ$ . Then

$$
L - ϵ < a_{n} \leq b_{n} \leq c_{n} < L + ϵ
$$

for $n \geq N$ , which implies that $\left|b_{n} - L\right| < ϵ$ . □

Example 51.  
  
Consider the sequence $\left(\left( b_{n} \right)\right)_{n \in ℕ}$ with

$$
b_{n} = \frac{sin n}{n} , n \in ℕ .
$$

This permits an application of Theorem [50](#x8-23001r50) with $a_{n} = - 1 / n$ and $c_{n} = 1 / n$ for $n \in ℕ$ . Then $a_{n} \leq b_{n} \leq c_{n}$ , because $\left|sin n\right| \leq 1$ , for all $n \in ℕ$ . Since $\underset{n \rightarrow \infty}{ \lim } \left( - 1 / n \right) = \underset{n \rightarrow \infty}{ \lim } \left( 1 / n \right) = 0$ , it follows that

$$
\underset{n \rightarrow \infty}{ \lim } \frac{sin n}{n} = 0.
$$

Whenever we deal with convergence, we examine only the behaviour of a sequence for very large indices. Therefore, we can always ignore any finite number of members. This observation gives rise to the following version of the sandwich theorem.

Corollary 52 (Bitten sandwich theorem).  
  
Suppose that $\left(\left( a_{n} \right)\right)_{n \in ℕ}$ , $\left(\left( b_{n} \right)\right)_{n \in ℕ}$ , and $\left(\left( c_{n} \right)\right)_{n \in ℕ}$ are real sequences and there exists $N \in ℕ$ such that $a_{n} \leq b_{n} \leq c_{n}$ for all $n \geq N$ . If $\left(\left( a_{n} \right)\right)_{n \in ℕ}$ and $\left(\left( c_{n} \right)\right)_{n \in ℕ}$ converge with

$$
\underset{n \rightarrow \infty}{ \lim } a_{n} = \underset{n \rightarrow \infty}{ \lim } c_{n} ,
$$

then $\left(\left( b_{n} \right)\right)_{n \in ℕ}$ converges as well and

$$
\underset{n \rightarrow \infty}{ \lim } a_{n} = \underset{n \rightarrow \infty}{ \lim } b_{n} = \underset{n \rightarrow \infty}{ \lim } c_{n} .
$$

Proposition 53.  
  
If $\left(\left( a_{n} \right)\right)_{n \in ℕ}$ is a real sequence such that $\underset{n \rightarrow \infty}{ \lim } a_{n} = 0$ and $a_{n} \neq 0$ for all $n \in ℕ$ , then $\left(\left( 1 / a_{n} \right)\right)_{n \in ℕ}$ is divergent.

Proof.  We first prove that $1 / \left|a_{n}\right| \rightarrow \infty$ as $n \rightarrow \infty$ . To this end, let $M > 0$ . Set $ϵ = 1 / M$ and choose $N \in ℕ$ such that $\left|a_{n}\right| < ϵ$ for all $n \geq N$ . Then $1 / \left|a_{n}\right| > 1 / ϵ = M$ for all $n \geq N$ . So indeed, we have shown that $1 / \left|a_{n}\right| \rightarrow \infty$ as $n \rightarrow \infty$ .

But this means that $\left(\left( 1 / a_{n} \right)\right)_{n \in ℕ}$ cannot be convergent, because if it were, then Proposition [44](#x8-21039r44) would imply that $1 / \left|a_{n}\right|$ is convergent as well, and we have just seen that this is not the case. □

For the next theorem we will need the following auxiliary result.

Lemma 54.  
  
Suppose that $\left(\left( a_{n} \right)\right)_{n \in ℕ}$ is a sequence of positive numbers such that

$$
r = \underset{n \rightarrow \infty}{ \lim } \frac{a_{n + 1}}{a_{n}}
$$

exists. Then for any $s > r$ there exists a number $C > 0$ such that

$$
a_{n} \leq C s^{n}
$$

for all $n \in ℕ$ .

Proof.  Fix $s > r$ and let $ϵ = s - r$ . Then there exists $N \in ℕ$ such that

$$
\left|\frac{a_{n + 1}}{a_{n}} - r\right| < ϵ
$$

for all $n \geq N$ . But then

$$
\frac{a_{n + 1}}{a_{n}} \leq r + ϵ = s
$$

for $n \geq N$ . Therefore,

$$
a_{N + k} = \frac{a_{N + k}}{a_{N + k - 1}} \frac{a_{N + k - 1}}{a_{k + k - 2}} \dots  \frac{a_{N + 1}}{a_{N}} a_{N} \leq s^{k} a_{N}
$$

for all $k \in ℕ$ .

Define

$$
C =  \max  \left\{\frac{a_{1}}{s} , \frac{a_{2}}{s^{2}} , \dots  , \frac{a_{N}}{s^{N}}\right\} .
$$

Then it is clear that $a_{n} \leq C s^{n}$ for $n \leq N$ , and for $n > N$ , we know that

$$
a_{n} \leq a_{N} s^{n - N} \leq C s^{N} s^{n - N} = C s^{n} .
$$

□

Theorem 55 (Growth factor test).  
  
Let $\left(\left( a_{n} \right)\right)_{n \in ℕ}$ be a sequence of positive numbers. Suppose that

$$
r = \underset{n \rightarrow \infty}{ \lim } \frac{a_{n + 1}}{a_{n}}
$$

exists (allowing divergence to infinity, so $0 \leq r \leq \infty$ ).

1.  If $0 \leq r < 1$ , then $a_{n} \rightarrow 0$ as $n \rightarrow \infty$ .
2.  If $r > 1$ , then $a_{n} \rightarrow \infty$ as $n \rightarrow \infty$ .

If $r = 1$ , then the test is inconclusive.

Proof.  [(i)](#x8-230111) If $r < 1$ , we choose $s \in \left( r , 1 \right)$ and use Lemma [54](#x8-23008r54). We find $C > 0$ such that

$$
0 < a_{n} \leq C s^{n}
$$

for all $n \in ℕ$ . Then the result follows from the pinching theorem.

[(ii)](#x8-230132) If $r > 1$ , then we can apply statement [(i)](#x8-230111) to the sequence $\left(\left( 1 / a_{n} \right)\right)_{n \in ℕ}$ . If $r < \infty$ , we find that

$$
\frac{1 / a_{n + 1}}{1 / a_{n}} = \frac{1}{\frac{a_{n + 1}}{a_{n}}} \rightarrow \frac{1}{r} < 1
$$

as $n \rightarrow \infty$ by Theorem [42](#x8-21024r42). If $r = \infty$ , then

$$
\frac{1 / a_{n + 1}}{1 / a_{n}} \rightarrow 0
$$

as $n \rightarrow \infty$ . (That’s because for any $ϵ > 0$ there exists $N \in ℕ$ such that $a_{n + 1} / a_{n} > 1 / ϵ$ for all $n \geq N$ , and then

$$
\frac{1 / a_{n + 1}}{1 / a_{n}} = \frac{1}{a_{n + 1} / a_{n}} < ϵ
$$

for $n \geq N$ .) In either case, we conclude that $\left(\left( 1 / a_{n} \right)\right)_{n \rightarrow \infty}$ converges to $0$ . Then $a_{n} \rightarrow \infty$ as $n \rightarrow \infty$ , as shown in an exercise. □

Example 56.  
  
Does the sequence $\left(\left( a_{n} \right)\right)_{n \in ℕ}$ with $a_{n} = \frac{n}{2^{n}}$ converge?

**Solution.** We compute

$$
\frac{a_{n + 1}}{a_{n}} = \frac{2^{n} \left( n + 1 \right)}{2^{n + 1} n} = \frac{1}{2} \left(1 + \frac{1}{n}\right) \rightarrow \frac{1}{2}
$$

as $n \rightarrow \infty$ . Hence the growth factor test says that $a_{n} \rightarrow 0$ as $n \rightarrow \infty$ .

This example can be generalised.

Corollary 57.  
  
Let $k \in ℕ$ and $a > 1$ . Then

$$
\frac{n^{k}}{a^{n}} \rightarrow 0 \text{and } \frac{a^{n}}{n^{k}} \rightarrow \infty
$$

as $n \rightarrow \infty$ .

Roughly speaking, this result says that exponential growth (as in $a^{n}$ ) beats polynomial growth (as in $n^{k}$ ) as $n \rightarrow \infty$ .

Proof.  We use the growth factor test:

$$
\frac{\frac{\left(\left( n + 1 \right)\right)^{k}}{a^{n + 1}}}{\frac{n^{k}}{a^{n}}} = \frac{1}{a} \left(\left(1 + \frac{1}{n}\right)\right)^{k} \rightarrow \frac{1}{a}
$$

as $n \rightarrow \infty$ . This proves the convergence of the first sequence, and if we take the reciprocal value, it also proves the divergence of the second sequence. □

### 4.4 [Subsequences](MA10207-web.html#QQ2-8-24)

Here we study sequences obtained from other sequences by selecting only some of the members.

Definition 58.  
  
Suppose that $\left(\left( a_{n} \right)\right)_{n \in ℕ}$ is a sequence of real numbers and $\left(\left( n_{k} \right)\right)_{k \in ℕ}$ is a strictly increasing sequence of natural numbers. Then $\left(\left( a_{n_{k}} \right)\right)_{k \in ℕ}$ is called a **subsequence** of $\left(\left( a_{n} \right)\right)_{n \in ℕ}$ .

Example 59.  
  
Consider the alternating sequence $\left(\left( a_{n} \right)\right)_{n \in ℕ}$ with $a_{n} = \left(\left( - 1 \right)\right)^{n}$ for all $n \in ℕ$ . It is divergent, but contains two convergent subsequences. If we take all even indices, i.e., $n_{k} = 2 k$ for $k \in ℕ$ , then $a_{n_{k}} = \left(\left( - 1 \right)\right)^{2 k} = 1$ for all $k$ , so $\left(\left( a_{n_{k}} \right)\right)_{k \in ℕ} = \left( 1 , 1 , 1 , \dots  \right)$ . If we take all odd indices, i.e., $n_{k} = 2 k - 1$ for $k \in ℕ$ , then $\left(\left( a_{n_{k}} \right)\right)_{k \in ℕ} = \left( - 1 , - 1 , - 1 , \dots  \right)$ .

Proposition 60.  
  
Let $\left(\left( a_{n} \right)\right)_{n \in ℕ}$ be a real sequence converging to $L \in ℝ$ . Then any subsequence of $\left(\left( a_{n} \right)\right)_{n \in ℕ}$ also converges to $L$ .

Proof.  Consider a subsequence $\left(\left( a_{n_{k}} \right)\right)_{k \in ℕ}$ . Given $ϵ > 0$ , we can choose $N \in ℕ$ such that $\left|a_{n} - L\right| < ϵ$ for all $n \geq N$ . Now choose $K \in ℕ$ such that $n_{K} \geq N$ . Then for every $k \geq K$ , we know that $n_{k} \geq N$ as well, since $\left(\left( n_{k} \right)\right)_{k \in ℕ}$ is increasing. Therefore,

$$
\left|a_{n_{k}} - L\right| < ϵ
$$

for all $k \geq K$ , and we conclude that $a_{n_{k}} \rightarrow L$ as $k \rightarrow \infty$ . □

Corollary 61.  
  
If a sequence $\left(\left( a_{n} \right)\right)_{n \in ℕ}$ has two subsequences converging to different limits, then $\left(\left( a_{n} \right)\right)_{n \in ℕ}$ is divergent.

Example 62.  
  
The sequence from Example [59](#x8-24003r59) has two subsequences that converge to $1$ and $- 1$ , respectively.

The following is one of the key theorems concerning subsequences.

Theorem 63 (Bolzano-Weierstrass).  
  
Every bounded real sequence contains a convergent subsequence.

Proof.  We first want to find a monotone subsequence. To this end, define the set

$$
S = \left\{n \in ℕ : a_{m} \leq a_{n} \text{ for all  } m > n\right\} .
$$

We distinguish two possible cases.

If $S$ is infinite, we choose $n_{1} , n_{2} , \dots  \in S$ such that $n_{1} < n_{2} < \dots$ . Then it follows that $a_{n_{1}} \geq a_{n_{2}} \geq \dots$ , so the subsequence $\left(\left( a_{n_{k}} \right)\right)_{k \in ℕ}$ is decreasing.

If $S$ is finite, choose $n_{1} =  \max  S + 1$ . Since $n_{1} \notin S$ , there exists $n_{2} > n_{1}$ such that $a_{n_{2}} > a_{n_{1}}$ . But then $n_{2} >  \max  S$ as well, so $n_{2} \notin S$ . Therefore, there exists $n_{3} > n_{2}$ such that $a_{n_{3}} > a_{n_{2}}$ . We may continue this construction indefinitely. Hence we obtain a subsequence $\left(\left( a_{n_{k}} \right)\right)_{k \in ℕ}$ that is strictly increasing.

In either case, the subsequence is bounded again. So Theorem [47](#x8-22015r47) applies. The conclusion is that $\left(\left( a_{n_{k}} \right)\right)_{k \in ℕ}$ converges. □

### 4.5 [Cauchy sequences](MA10207-web.html#QQ2-8-25)

The following notion can be used to characterise convergence.

Definition 64.  
  
A real sequence $\left(\left( a_{n} \right)\right)_{n \in ℕ}$ is called a **Cauchy sequence** if

$$
\forall ϵ > 0 \exists N \in ℕ \forall m , n \geq N : \left|a_{m} - a_{n}\right| < ϵ .
$$

Theorem 65.  
  
A sequence $\left(\left( a_{n} \right)\right)_{n \in ℕ}$ converges if, and only if, it is a Cauchy sequence.

Proof.  Suppose that $\left(\left( a_{n} \right)\right)_{n \in ℕ}$ is convergent. Then there exists a limit

$$
L = \underset{n \rightarrow \infty}{ \lim } a_{n} .
$$

Now fix $ϵ > 0$ . Choose $N \in ℕ$ such that

$$
\left|a_{n} - L\right| < \frac{ϵ}{2}
$$

for all $n \geq N$ . Then for any pair of indices $m , n \geq N$ ,

$$
\left|a_{m} - a_{n}\right| \leq \left|a_{m} - L\right| + \left|L - a_{n}\right| < \frac{ϵ}{2} + \frac{ϵ}{2} = ϵ
$$

by the triangle inequality. So the Cauchy condition is satisfied.

Now suppose that $\left(\left( a_{n} \right)\right)_{n \in ℕ}$ is a Cauchy sequence. Then there exists $N_{1} \in ℕ$ such that $\left|a_{m} - a_{n}\right| < 1$ for all $m , n \geq N_{1}$ . In particular,

$$
\left|a_{n}\right| \leq \left|a_{n} - a_{N}\right| + \left|a_{N}\right| < \left|a_{N}\right| + 1
$$

for all $n \geq N_{1}$ . It follows that

$$
\left|a_{n}\right| \leq  \max  \left\{ \left|a_{1}\right| , \dots  , \left|a_{N}\right| \right\} + 1
$$

for all $n \in ℕ$ , and the sequence $\left(\left( a_{n} \right)\right)_{n \in ℕ}$ is bounded.

By Theorem [63](#x8-24007r63), there exists a convergent subsequence $\left(\left( a_{n_{k}} \right)\right)_{k \in ℕ}$ . Let $L = \underset{k \rightarrow \infty}{ \lim } a_{n_{k}}$ . We claim that $a_{n} \rightarrow L$ as $n \rightarrow \infty$ as well.

In order to prove this statement, fix $ϵ > 0$ . Choose $N_{0} \in ℕ$ such that $\left|a_{m} - a_{n}\right| < ϵ / 2$ for $m , n \geq N_{0}$ and choose $K \in ℕ$ such that $n_{K} \geq N_{0}$ and $\left|a_{n_{k}} - L\right| < ϵ / 2$ for all $k \geq K$ . Define $N =  \max  \left\{ N_{0} , n_{K} \right\}$ . Then for any $n \geq N$ ,

$$
\left|a_{n} - L\right| \leq \left|a_{n} - a_{n_{K}}\right| + \left|a_{n_{K}} - L\right| < ϵ .
$$

Hence we have proved that $a_{n} \rightarrow L$ as $n \rightarrow \infty$ . □

It may not be immediately obvious why the concept of a Cauchy sequence is useful. After all, the condition in the definition seems more complicated than the definition of convergence. But the key difference is that in order to verify convergence directly, you need to have an idea of what the limit is. For Cauchy sequences, you can simply check the condition and decide whether or not it is satisfied.

### 4.6 [Limsup and liminf](MA10207-web.html#QQ2-8-26)

Not every sequence has a limit. But there are two related concepts which do always exist (although they may be infinite).

We first recall the supremum and infimum from Section [2.3](MA10207-webch2.html#x6-140002.3). If $\left(\left( a_{n} \right)\right)_{n \in ℕ}$ is a given real sequence and if $k \in ℕ$ , then we use the abbreviation

$$
\underset{n \geq k}{sup} a_{n} = sup \left\{a_{n} : n \geq k\right\} \text{and } \underset{n \geq k}{inf} a_{n} = inf \left\{a_{n} : n \geq k\right\}
$$

Proposition 66.  
  
Let $\left(\left( a_{n} \right)\right)_{n \in ℕ}$ be a real sequence.

1.  If $\left(\left( a_{n} \right)\right)_{n \in ℕ}$ is bounded above, then the sequence $\left(\left( \underset{n \geq k}{sup} a_{n} \right)\right)_{k \in ℕ}$ is a decreasing real sequence. Otherwise, $\underset{n \geq k}{sup} a_{n} = \infty$ for all $k \in ℕ$ .
2.  If $\left(\left( a_{n} \right)\right)_{n \in ℕ}$ is bounded below, then the sequence $\left(\left( \underset{n \geq k}{inf} a_{n} \right)\right)_{k \in ℕ}$ is an increasing real sequence. Otherwise, $\underset{n \geq k}{inf} a_{n} = - \infty$ for all $k \in ℕ$ .

Proof.  [(i)](#x8-260021) For $k \in ℕ$ , let $S_{k} = \left\{a_{n} : n \geq k\right\}$ . Then $S_{1} \supseteq S_{2} \supseteq \dots$ .

Now suppose that $\left(\left( a_{n} \right)\right)_{n \in ℕ}$ is bounded above. This means that $S_{1}$ has an upper bound, say $M \in ℝ$ . But then $M$ is an upper bound for every $S_{k}$ , so $sup S_{k} \leq M$ for all $k \in ℕ$ . In particular, we see that $sup S_{k} \in ℝ$ for all $k \in ℕ$ .

Furthermore, every upper bound for $S_{k}$ is an upper bound for $S_{k + 1}$ . Hence $sup S_{k} \geq sup S_{k + 1}$ for all $k \in ℕ$ , which means that $\left(\left( sup S_{k} \right)\right)_{k \in ℕ}$ is decreasing.

On the other hand, if $\left(\left( a_{n} \right)\right)_{n \in ℕ}$ is unbounded above, then every $S_{k}$ is unbounded above, as $S_{1} \backslash S_{k}$ is a finite set. So in this case, $sup S_{k} = \infty$ for all $k \in ℕ$ .

[(ii)](#x8-260042) This part of the proof is similar. □

The consequence of this proposition is that the sequences $\left(\left( \underset{n \geq k}{sup} a_{n} \right)\right)_{k \in ℕ}$ and $\left(\left( \underset{n \geq k}{inf} a_{n} \right)\right)_{k \in ℕ}$ always have limits, provided that we include $\pm \infty$ as possible limits.

Definition 67.  
  
Let $\left(\left( a_{n} \right)\right)_{n \in ℕ}$ be a real sequence.

1.  If it is bounded above, then we define
    
    $$
    \left( \lim sup\right)_{n \rightarrow \infty} a_{n} = \underset{k \rightarrow \infty}{ \lim } \underset{n \geq k}{sup} a_{n} .
    $$
    
    Otherwise, $\left( \lim sup\right)_{n \rightarrow \infty} a_{n} = \infty$ .
2.  If $\left(\left( a_{n} \right)\right)_{n \in ℕ}$ is bounded below, then we define
    
    $$
    \left( \lim inf\right)_{n \rightarrow \infty} a_{n} = \underset{k \rightarrow \infty}{ \lim } \underset{n \geq k}{inf} a_{n} .
    $$
    
    Otherwise, $\left( \lim inf\right)_{n \rightarrow \infty} a_{n} = - \infty$ .

Example 68.  
  
Consider the sequence $\left(\left( a_{n} \right)\right)_{n \in ℕ}$ with $a_{n} = n$ for $n \in ℕ$ . Then

$$
\underset{n \geq k}{sup} a_{n} = \infty \text{and } \underset{n \geq k}{inf} a_{n} = k
$$

for all $k \in ℕ$ . Therefore,

$$
\left( \lim inf\right)_{n \rightarrow \infty} a_{n} = \left( \lim inf\right)_{n \rightarrow \infty} a_{n} = \infty .
$$

Example 69.  
  
Suppose that $a_{n} = \left(\left( - 1 \right)\right)^{n}$ for $n \in ℕ$ . Then

$$
\left( \lim sup\right)_{n \rightarrow \infty} a_{n} = 1 \text{and } \left( \lim inf\right)_{n \rightarrow \infty} a_{n} = - 1.
$$

Proposition 70.  
  
For any real sequence $\left(\left( a_{n} \right)\right)_{n \in ℕ}$ ,

$$
\left( \lim inf\right)_{n \rightarrow \infty} a_{n} \leq \left( \lim sup\right)_{n \rightarrow \infty} a_{n} .
$$

Proof.  This is proved in an exercise. □

Theorem 71.  
  
A real sequence $\left(\left( a_{n} \right)\right)_{n \in ℕ}$ converges if, and only if,

$$
\left( \lim sup\right)_{n \rightarrow \infty} a_{n} = \left( \lim inf\right)_{n \rightarrow \infty} a_{n}
$$

and the common value is a real number (not $\infty$ or $- \infty$ ). If so, then

$$
\underset{n \rightarrow \infty}{ \lim } a_{n} = \left( \lim sup\right)_{n \rightarrow \infty} a_{n} = \left( \lim inf\right)_{n \rightarrow \infty} a_{n} .
$$

Proof.  Suppose that $\left(\left( a_{n} \right)\right)_{n \in ℕ}$ converges. Let $L = \underset{n \rightarrow \infty}{ \lim } a_{n}$ . Then for any $ϵ > 0$ , we may choose $N \in ℕ$ such that

$$
\left|a_{n} - L\right| < ϵ
$$

for all $n \geq N$ . Thus for $k \geq N$ , the number $L + ϵ$ is an upper bound and $L - ϵ$ is a lower bound for the set $\left\{a_{n} : n \geq k\right\}$ . That is,

$$
L - ϵ \leq \underset{n \geq k}{inf} a_{n} \leq \underset{n \geq k}{sup} a_{n} \leq L + ϵ .
$$

Proposition [37](#x8-21013r37) implies that

$$
L - ϵ \leq \left( \lim inf\right)_{n \rightarrow \infty} a_{n} \leq \left( \lim sup\right)_{n \rightarrow \infty} a_{n} \leq L + ϵ .
$$

But this is true for any $ϵ > 0$ , so

$$
L \leq \left( \lim inf\right)_{n \rightarrow \infty} a_{n} \leq \left( \lim sup\right)_{n \rightarrow \infty} a_{n} \leq L .
$$

That is,

$$
L = \left( \lim inf\right)_{n \rightarrow \infty} a_{n} = \left( \lim sup\right)_{n \rightarrow \infty} a_{n} .
$$

Now suppose that

$$
\left( \lim inf\right)_{n \rightarrow \infty} a_{n} = \left( \lim sup\right)_{n \rightarrow \infty} a_{n}
$$

and denote this common value by $L$ . Fix $ϵ > 0$ . Then there exists $N \in ℕ$ such that

$$
\left|\underset{n \geq k}{sup} a_{n} - L\right| < ϵ \text{and } \left|\underset{n \geq k}{inf} a_{n} - L\right| < ϵ
$$

for all $k \geq N$ . That is,

$$
L - ϵ < \underset{n \geq k}{inf} a_{n} < \underset{n \geq k}{sup} a_{n} < L + ϵ .
$$

In particular,

$$
L - ϵ < a_{k} < L + ϵ
$$

for all $k \geq N$ . This proves that $L = \underset{n \rightarrow \infty}{ \lim } a_{n}$ . □