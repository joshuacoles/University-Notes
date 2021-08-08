Chapter 4

# Sequences

This chapter is about the following notion.

### Definition 3.

A **sequence** of real numbers is a function from $\N$ to $\R$ .

We will also use the expressions ‘real sequence’ and ‘sequence in $\R$ ’ for the same concept.

Although this means that a sequence is a rule assigning a real number to every element of $\N$ , the structure of $\N$ also allows the interpretation implied by the word ‘sequence’. We use the notation $(a_{1} , a_{2} , a_{3} , \dots  )$ for the rule that assigns the number $a_{1}$ to $1$ , the number $a_{2}$ to $2$ , etc. Often this is abbreviated as $((a_{n} ))_{n \in \N}$ or $((a_{n} ))_{n = 1}^{\\infty}$ .

### Example 3.

The sequence $(1 , 2 , 4 , 8 , 16 , \dots  )$ may be written as $((2^{n - 1} ))_{n \in \N}$ , and the sequence $(1 , 1 / 2 , 1 / 3 , \dots  )$ may be written as $((1 / n ))_{n \in \N}$ .

## 4.1 Convergence

When studying sequences, we are often interested in their behaviour for very large values of $n$ . Of particular importance is the question whether for a given sequence $((a_{n} ))_{n \in \N}$ , the values $a_{n}$ approach a certain number when $n$ tends to infinity.

### Definition 3.

A real sequence $((a_{n} ))_{n \in \N}$ **converges** to a real number $L$ if for every $\epsi > 0$ there exists $N \in \N$ such that $|a_{n} - L| < \epsi$ for all $n \geq N$ . If so, then $L$ is called the **limit** of the sequence. We denote convergence of $((a_{n} ))_{n \in \N}$ to $L$ by $a_{n} arrow L$ as $n arrow \\infty$ , or alternatively by $L = \underset{n arrow \\infty}{ \lim } a_{n}$ .

If a sequence does not converge, then we say that is **diverges**.

The condition in this definition is perhaps a bit complicated, so we discuss it briefly. We may write it with the help of quantifiers as follows: convergence of $((a_{n} ))_{n \in \N}$ to $L$ means that

$$
\forall \epsi > 0 \exists N \in \N \forall n \geq N : |a_{n} - L| < \epsi .
$$

The quantity $|a_{n} - L|$ can be thought of as the distance between $a_{n}$ and $L$ . So the inequality $|a_{n} - L| < \epsi$ means that $a_{n}$ is less than $\epsi$ away from $L$ . The whole statement means that no matter what positive number $\epsi$ you choose, you can always find a corresponding natural number $N$ such that from $N$ onward (for all $n \geq N$ ), the members of the sequence are less than $\epsi$ away from $L$ . In other words, the sequence eventually approximates $L$ arbitrarily well.

One more subtlety: the number $N$ can (and will in general) depend on $\epsi$ . Choosing $\epsi$ smaller may force you to increase the value of $N$ in order to still satisfy the condition.

### Example 3.

Does the sequence $((1 / n ))_{n \in \N}$ converge?

**Solution.** If we suspect convergence, then we have to identify a limit. Inspection of the sequence suggests the limit $0$ . Now to check if indeed $\underset{n arrow \\infty}{ \lim } 1 / n = 0$ , we need to verify the criterion. This is what we do next.

Suppose we’re given some $\epsi > 0$ . We examine the inequality $|1 / n - 0| < \epsi$ , which can be rewritten in the form $1 / n < \epsi$ or $n > 1 / \epsi$ . Now if we choose $N \in \N$ with $N > 1 / \epsi$ (which is possible by the Archimedean postulate, Theorem 23), then any $n \geq N$ will also satisfy $n > 1 / \epsi$ . Hence $|1 / n - 0| < \epsi$ for all $n \geq N$ .

The conclusion is that the sequence does converge and the limit is $0$ .

As this simple example shows, verifying convergence directly with the criterion can be laborious. Sometimes there is no other way, but often it is possible to deduce convergence or divergence from general facts such as the following.

### Proposition 3.

1.  For any $c \in \R$ , the constant sequence $(c , c , c , \dots  )$ converges to $c$ .
2.  The sequence $((1 / n ))_{n \in \N}$ converges to $0$ .
3.  For any $a \in \R$ , if $|a| < 1$ , then the sequence $((a^{n} ))_{n \in \N}$ converges to $0$ .

#### Proof

(i) For any $\epsi > 0$ , the inequality $|c - c| < \epsi$ holds automatically, so we may choose any $N \in \N$ to satisfy the criterion.

(ii) The proof has been given in Example 35.

(iii) Suppose that $|a| < 1$ . Then $1 / |a| > 1$ and therefore $1 / |a| - 1 > 0$ . Define $b = 1 / |a| - 1$ . Then

$$
|a^{n} - 0| = |a^{n}| = (|a|)^{n} = ((\frac{1}{1 + b}))^{n} = \frac{1}{((1 + b ))^{n}} \leq \frac{1}{1 + n b}
$$

by the binomial inequality (Proposition 28).

Fix $\epsi > 0$ . Choose $N \in \N$ with

$$
N > \frac{1 / \epsi - 1}{b} .
$$

Then for $n \geq N$ , we conclude that

$$
1 + n b \geq 1 + N b > 1 + \frac{1 / \epsi - 1}{b} b = \frac{1}{\epsi} .
$$

Therefore,

$$
|a^{n} - 0| \leq \frac{1}{1 + n b} < \frac{1}{1 / \epsi} = \epsi .
$$

This proves that $\underset{n arrow \\infty}{ \lim } a^{n} = 0$ . □

### Proposition 3.

Suppose that $((a_{n} ))_{n \in \N}$ and $((b_{n} ))_{n \in \N}$ are real sequences with $a_{n} \leq b_{n}$ for all $n \in \N$ . If $L = \underset{n arrow \\infty}{ \lim } a_{n}$ and $M = \underset{n arrow \\infty}{ \lim } b_{n}$ exist, then $L \leq M$ .

#### Proof

We argue by contradiction.

Suppose (seeking contradiction) that $M < L$ . Let $\epsi = (L - M ) / 2$ . Since $a_{n} arrow L$ as $n arrow \\infty$ , there exists $N_{1} \in \N$ such that $|a_{n} - L| < \epsi$ for all $n \geq N_{1}$ . Similarly, there exists $N_{2} \in \N$ such that $|b_{n} - M| < \epsi$ for all $n \geq N_{2}$ . Now set $N =  \max  \{ N_{1} , N_{2} \}$ . Then for all $n \geq N$ ,

$$
a_{n} > L - \epsi = L - \frac{L - M}{2} = \frac{L + M}{2}
$$

and

$$
b_{n} < M + \epsi = M + \frac{L - M}{2} = \frac{L + M}{2} .
$$

Therefore, we see that $a_{n} > b_{n}$ for $n \geq N$ , which contradicts the hypothesis. □

### Corollary 3.

Suppose that $((a_{n} ))_{n \in \N}$ is a convergent sequence.

1.  If $b \in \R$ is a number with $a_{n} \leq b$ for all $n \in \N$ , then $\underset{n arrow \\infty}{ \lim } a_{n} \leq b$ .
2.  If $c \in \R$ is a number with $a_{n} \geq c$ for all $n \in \N$ , then $\underset{n arrow \\infty}{ \lim } a_{n} \geq c$ .

### Theorem 3 (Uniqueness of limits).

A sequence of real numbers has at most one limit.

In other words, if a limit exists at all (if the sequence converges), then that limit is unique.

#### Proof

Suppose that $((a_{n} ))_{n \in \N}$ is a real sequence that converges simultaneously to $L \in \R$ and to $M \in \R$ . Then, as $a_{n} \leq a_{n}$ for all $n$ , Proposition 37 implies that $L \leq M$ . But it also implies that $M \leq L$ , and according to (A11), this means that $L = M$ . □

### Definition 4.

A real sequence $((a_{n} ))_{n \in \N}$ is **bounded** if the set $\{a_{n} : n \in \N\}$ (the set of all its members) is bounded.

### Proposition 4.

Any convergent sequence is bounded.

#### Proof

Suppose that $((a_{n} ))_{n \in \N}$ converges and let $L = \underset{n arrow \\infty}{ \lim } a_{n}$ . Apply the convergence criterion with $\epsi = 1$ . This yields a number $N \in \N$ such that $|a_{n} - L| < 1$ for all $n \geq N$ . Hence

$$
|a_{n}| < |L| + 1
$$

for all $n \geq N$ . Now set

$$
M =  \max  \{ |a_{1}| , \dots  , |a_{N - 1}| , |L| + 1 \} .
$$

Then $|a_{n}| \leq M$ for all $n \in \N$ . Hence $M$ serves as an upper bound of $\{a_{n} : n \in \N\}$ while $- M$ serves as a lower bound. □

### Theorem 4 (Algebra of limits).

Let $((a_{n} ))_{n \in \N}$ and $((b_{n} ))_{n \in \N}$ be convergent sequences with limits $A = \underset{n arrow \\infty}{ \lim } a_{n}$ and $B = \underset{n arrow \\infty}{ \lim } b_{n}$ . Then

1.  $\underset{n arrow \\infty}{ \lim } (a_{n} + b_{n} ) = A + B$ ,
2.  $\underset{n arrow \\infty}{ \lim } (a_{n} - b_{n} ) = A - B$ ,
3.  $\underset{n arrow \\infty}{ \lim } C a_{n} = C A$ for any constant $C \in \R$ ,
4.  $\underset{n arrow \\infty}{ \lim } (a_{n} b_{n} ) = A B$ , and
5.  if $b_{n} \neq 0$ for all $n \in \N$ and if $B \neq 0$ , then $\underset{n arrow \\infty}{ \lim } (a_{n} / b_{n} ) = A / B$ .

#### Proof

(i) Let $\epsi > 0$ . Then there exists $N_{1} \in \N$ such that $|a_{n} - A| < \epsi / 2$ for all $n \geq N_{1}$ and there exists $N_{2} \in \N$ such that $|b_{n} - B| < \epsi / 2$ for all $n \geq N_{2}$ .

Define $N =  \max  \{ N_{1} , N_{2} \}$ . If $n \geq N$ , then

$$
|(a_{n} + b_{n} ) - (A + B )| = |(a_{n} - A ) + (b_{n} - B )| \leq |a_{n} - A| + |b_{n} - B| < \frac{\epsi}{2} + \frac{\epsi}{2} = \epsi .
$$

(Here we have used the triangle inequality.) Hence $a_{n} + b_{n} arrow A + B$ as $n arrow \\infty$ .

(iv) First note that

$$
\begin{align}
\begin{matrix}|a_{n} b_{n} - A B| &=|(a_{n} - A ) b_{n} + A (b_{n} - B )| \\ \leq|(a_{n} - A ) b_{n}|+|A (b_{n} - B )| \\ &=|a_{n} - A||b_{n}|+|A||b_{n} - B|\end{matrix}
\end{align}
$$

(1)

by the triangle inequality and Proposition 26. According to Proposition 41, there exists $M > 0$ such that $|b_{n}| \leq M$ for all $n \in \N$ .

Now let $\epsi > 0$ . Choose $N_{1} \in \N$ such that

$$
|a_{n} - A| < \frac{\epsi}{2 M + 1}
$$

for all $n \geq N_{1}$ and choose $N_{2} \in \N$ such that

$$
|b_{n} - B| < \frac{\epsi}{2 |A| + 1}
$$

for all $n \geq N_{2}$ . Set $N =  \max  \{ N_{1} , N_{2} \}$ . Then for $n \geq N$ , we have the inequalities

$$
|a_{n} - A| |b_{n}| < \frac{\epsi}{2 M + 1} M \leq \frac{\epsi}{2} , \text{and } |A| |b_{n} - B| < |A| \frac{\epsi}{2 |A| + 1} \leq \frac{\epsi}{2} .
$$

Combine these estimates with (1). This yields

$$
|a_{n} b_{n} - A B| < \frac{\epsi}{2} + \frac{\epsi}{2} = \epsi .
$$

(iii) Consider the sequence $((c_{n} ))_{n \in \N}$ with $c_{n} = C$ for every $n \in \N$ . Then $\underset{n arrow \\infty}{ \lim } c_{n} = C$ by Proposition 36. Now we simply apply (iv), which gives

$$
\underset{n arrow \\infty}{ \lim } (C a_{n} ) = \underset{n arrow \\infty}{ \lim } (c_{n} a_{n} ) = C A .
$$

(ii) Note that

$$
a_{n} - b_{n} = a_{n} + (- 1 ) b_{n} .
$$

By (iii), we have the limit $\underset{n arrow \\infty}{ \lim } ((- 1 ) b_{n} ) = - B$ . Now (i) implies that

$$
\underset{n arrow \\infty}{ \lim } (a_{n} - b_{n} ) = A + (- B ) = A - B .
$$

(v) Here we first prove that

$$
\underset{n arrow \\infty}{ \lim }\frac{1}{b_{n}}=\frac{1}{B}.
$$

(2)

To this end, first note that

$$
|\frac{1}{b_{n}} - \frac{1}{B}| = |\frac{B - b_{n}}{b_{n} B}| = \frac{|B - b_{n}|}{|b_{n}| |B|} .
$$

Since $B \neq 0$ , we know that $|B| > 0$ . Therefore, there exists $N_{1} \in \N$ such that $|b_{n} - B| < |B| / 2$ for all $n \geq N_{1}$ . Then it also follows that

$$
|b_{n}| \geq |B| - |b_{n} - B| > \frac{|B|}{2}
$$

by the reverse triangle inequality.

Now fix $\epsi > 0$ arbitrarily. Choose $N_{2} \in \N$ such that

$$
|b_{n} - B| < \frac{\epsi (|B|)^{2}}{2}
$$

for all $n \geq N_{2}$ . Set $N =  \max  \{ N_{1} , N_{2} \}$ . Then for $n \geq N$ , we find that

$$
|\frac{1}{b_{n}} - \frac{1}{B}| = \frac{|B - b_{n}|}{|b_{n}| |B|} < \frac{\epsi (|B|)^{2} / 2}{(|B|)^{2} / 2} = \epsi .
$$

This proves (2).

Finally, we prove the full statement with the help of (iv). We now know that

$$
\underset{n arrow \\infty}{ \lim } \frac{a_{n}}{b_{n}} = \underset{n arrow \\infty}{ \lim } (a_{n} \frac{1}{b_{n}}) = \frac{A}{B} .
$$

□

### Example 4.

Find

$$
\underset{n arrow \\infty}{ \lim } \frac{2^{- n} + n^{3} - 7 n}{5 n^{3} + 2 n^{2} - 8 n + 9} .
$$

**Solution.** We need to rewrite this expression a bit before we can apply the algebra of limits theorem. Note that

$$
\frac{2^{- n} + n^{3} - 7 n}{5 n^{3} + 2 n^{2} - 8 n + 9} = \frac{\frac{((1 / 2 ))^{n}}{n^{3}} + 1 - \frac{7}{n^{2}}}{5 + \frac{2}{n} - \frac{8}{n^{2}} + \frac{9}{n^{3}}} .
$$

Now

$$
\frac{((1 / 2 ))^{n}}{n^{3}} = ((\frac{1}{2}))^{n} (\frac{1}{n}) (\frac{1}{n}) (\frac{1}{n}) arrow 0 \cdot 0 \cdot 0 \cdot 0 = 0 \text{as  }Narrow\\infty
$$

by Theorem 42. Similarly,

$$
\frac{7}{n^{2}} arrow 0 , \frac{2}{n} arrow 0 , \frac{8}{n^{2}} arrow 0 , \frac{9}{n^{3}} arrow 0 \text{as  }Narrow\\infty .
$$

Using Theorem 42 again, we finally find that

$$
\underset{n arrow \\infty}{ \lim } \frac{2^{- n} + n^{3} - 7 n}{5 n^{3} + 2 n^{2} - 8 n + 9} = \frac{0 + 1 - 0}{5 + 0 - 0 + 0} = \frac{1}{5} .
$$

### Proposition 4.

Let $((a_{n} ))_{n \in \N}$ be a real sequence.

1.  If $a_{n} arrow L$ as $n arrow \\infty$ for some $L \in \R$ , then $|a_{n}| arrow |L|$ as $n arrow \\infty$ .
2.  If $|a_{n}| arrow 0$ as $n arrow \\infty$ , then $a_{n} arrow 0$ as $n arrow \\infty$ as well.

But caution: the second statement becomes false if $0$ is replaced by any other value. For example, consider the sequence with $a_{n} = ((- 1 ))^{n}$ . Then $|a_{n}| = 1 arrow 1$ as $n arrow \\infty$ , but $((a_{n} ))_{n \in \N}$ oscillates between $- 1$ and $1$ and does not converge.

#### Proof

(i) Suppose that $a_{n} arrow L$ as $n arrow \\infty$ . Given $\epsi > 0$ , choose $N \in \N$ such that $|a_{n} - L| < \epsi$ for all $n \geq N$ . Then by the reverse triangle inequality,

$$
||a_{n}| - |L|| \leq |a_{n} - L| < \epsi
$$

as well.

(ii) This is an exercise. □

In addition to convergent sequences, the following types of sequences are sometimes useful, too.

### Definition 4.

1.  We say that a real sequence $((a_{n} ))_{n \in \N}$ **diverges to $\\infty$** if for all $M \in \R$ there exists $N \in \N$ such that $a_{n} > M$ for all $n \geq \N$ . In this case, we write $a_{n} arrow \\infty$ as $n arrow \\infty$ or $\underset{n arrow \\infty}{ \lim } a_{n} = \\infty$ .
2.  We say that $((a_{n} ))_{n \in \N}$ **diverges to $- \\infty$** if for all $M \in \R$ there exists $N \in \N$ such that $a_{n} < M$ for all $n \in \N$ . In this case, we write $a_{n} arrow - \\infty$ as $n arrow \\infty$ or $\underset{n arrow \\infty}{ \lim } a_{n} = - \\infty$ .

Some, but not all, of the statements from Theorem 42 extend to sequences diverging to $\\infty$ or $- \\infty$ . You can explore the corresponding statements in an exercise.

## 4.2 Monotone sequences

### Definition 4.

A real sequence $((a_{n} ))_{n \in \N}$ is called

1.  **increasing** if $a_{n} \leq a_{n + 1}$ for all $n \in \N$ ,
2.  **strictly increasing** if $a_{n} < a_{n + 1}$ for all $n \in \N$ ,
3.  **decreasing** if $a_{n} \geq a_{n + 1}$ for all $n \in \N$ ,
4.  **strictly decreasing** if $a_{n} > a_{n + 1}$ for all $n \in \N$ .

We say that the sequence is **monotone** if it has any of the above properties.

Some books use the expressions ‘nondecreasing/increasing’ and ‘nonincreasing/decreasing’ for sequences satisfying (i)–(iv), respectively.

The following is one of the reasons why monotone sequences are useful.

### Theorem 4.

If a real sequence is monotone and bounded, then it converges.

#### Proof

We only give the proof for increasing sequences, as the arguments for decreasing sequences are essentially the same.

Suppose that $((a_{n} ))_{n \in \N}$ is a bounded, increasing sequence. Then the set $\{a_{n} : n \in \N\}$ is bounded (by definition of bounded sequences) and non-empty (as, e.g., $a_{1}$ belongs to the set). The completeness axiom (A15) says that

$$
L : = \sup \{a_{n} : n \in \N\}
$$

exists. We claim that $L = \underset{n arrow \\infty}{ \lim } a_{n}$ .

In order to verify this claim, choose $\epsi > 0$ . Then by Theorem 22, there exists $N \in \N$ such that $a_{N} > L - \epsi$ . Now for all $n \geq N$ , we have the inequality

$$
a_{n} \geq a_{N} > L - \epsi .
$$

By the definition of $L$ , we also know that $a_{n} \leq L$ , and both inequalities together imply that

$$
|a_{n} - L| < \epsi
$$

for all $n \geq N$ . □

The theorem tells you that a limit exists, but it does not tell you what it is. Nevertheless, this is useful information and we can often find out what the limit is with other means once we know it exists.

### Example 4.

Show that there exists a number $x \in \R$ with $x^{2} = 2$ .

**Solution.** Let $a_{1} = 2$ and define a sequence $((a_{n} ))_{n \in \N}$ recursively by the formula1

$$
a_{n + 1} = a_{n} - \frac{a_{n}^{2} - 2}{2 a_{n}} , n = 1 , 2 , \dots  .
$$

First we claim that $a_{n} > 0$ for all $n \in \N$ and hence the definition makes sense. We prove this by induction. It is obvious that $a_{1} > 0$ . Assuming that $a_{n} > 0$ , we obtain the inequality

$$
a_{n + 1} = \frac{a_{n}}{2} + \frac{1}{a_{n}} > 0
$$

as well. This is the induction step, so we have indeed proved that $a_{n} > 0$ for all $n \in \N$ .

Now note that for all $n \in \N$ ,

$$
a_{n + 1}^{2}-2=((\frac{a_{n}}{2} + \frac{1}{a_{n}}))^{2}-2=\frac{a_{n}^{2}}{4}-1+\frac{1}{a_{n}^{2}}=\frac{a_{n}^{4} - 4 a_{n}^{2} + 4}{4 a_{n}^{2}}=\frac{((a_{n}^{2} - 2 ))^{2}}{4 a_{n}^{2}}\geq 0.
$$

(3)

Therefore,

$$
a_{n + 1} = a_{n} - \frac{a_{n}^{2} - 2}{2 a_{n}} \leq a_{n}
$$

for all $n \in \N$ . That is, we have a decreasing sequence. Because we have already seen that $a_{n} > 0$ for all $n \in \N$ , it is bounded.

Inequality (3) even implies that $a_{n} > 1$ for all $n \in \N$ , because we know that $a_{n} > 0$ and any number $a \in (0 , 1 ]$ will satisfy $a^{2} - 2 < 0$ .

### Theorem 4 implies that $x = \underset{n arrow \\infty}{ \lim } a_{n}$ exists. As we have seen that $a_{n} > 1$ for all $n \in \N$ , the limit will satisfy $x \geq 1$ . By the algebra of limits theorem (Theorem 42), it also satisfies

$$
x = \underset{n arrow \\infty}{ \lim } a_{n + 1} = \underset{n arrow \\infty}{ \lim } (\frac{a_{n}}{2} + \frac{1}{a_{n}}) = \frac{x}{2} + \frac{1}{x} .
$$

Hence

$$
\frac{x}{2} = \frac{1}{x} ,
$$

which is equivalent to the equation $x^{2} = 2$ .

### Example 4.

Show that

$$
\underset{n arrow \\infty}{ \lim } ((1 + \frac{1}{n}))^{n}
$$

exists.

**Solution.** According to Theorem 47, it suffices to show that the sequence with members $a_{n} = ((1 + 1 / n ))^{n}$ is bounded and increasing.

We first show that $((a_{n} ))_{n \in \N}$ is increasing. To this end, we write

$$
a_{n} = ((\frac{n + 1}{n}))^{n} .
$$

Thus

$$
\frac{a_{n + 1}}{a_{n}} = \frac{((\frac{n + 2}{n + 1}))^{n + 1}}{((\frac{n + 1}{n}))^{n}} = \frac{((n + 2 ))^{n + 1} n^{n}}{((n + 1 ))^{n + 1} ((n + 1 ))^{n}} = \frac{n + 2}{n + 1} ((\frac{(n + 2 ) n}{((n + 1 ))^{2}}))^{n} .
$$

Now

$$
\frac{(n + 2 ) n}{((n + 1 ))^{2}} = \frac{n^{2} + 2 n}{((n + 1 ))^{2}} = \frac{((n + 1 ))^{2} - 1}{((n + 1 ))^{2}} = 1 - \frac{1}{((n + 1 ))^{2}} .
$$

Therefore,

$$
\frac{a_{n + 1}}{a_{n}} = \frac{n + 2}{n + 1} ((1 - \frac{1}{((n + 1 ))^{2}}))^{n} .
$$

In the next step, we want to apply the binomial inequality (Proposition 28) to the power. In order to do so, we need to check that

$$
- \frac{1}{((n + 1 ))^{2}} \geq - 1.
$$

But this is evidently true, as $n + 1 > 1$ for all $n \in \N$ . Hence the binomial inequality implies that

$$
((1 - \frac{1}{((n + 1 ))^{2}}))^{n} \geq 1 - \frac{n}{((n + 1 ))^{2}} .
$$

We now obtain the inequality

$$
\frac{a_{n + 1}}{a_{n}} \geq \frac{n + 2}{n + 1} (1 - \frac{n}{((n + 1 ))^{2}}) = \frac{n^{3} + 3 n^{2} + 3 n + 2}{n^{3} + 3 n^{2} + 3 n + 1} > 1.
$$

Therefore, we have proved that $a_{n + 1} > a_{n}$ , and the sequence is in fact strictly increasing.

Next we need to show that it is bounded. We consider even indices (of the form $n = 2 k$ for some $k \in \N$ ) first. We compute

$$
\frac{1}{a_{2 k}} = ((\frac{2 k}{2 k + 1}))^{2 k} = ([((1 - \frac{1}{2 k + 1}))^{k}])^{2} \geq ([1 - \frac{k}{2 k + 1}])^{2} = ([\frac{k + 1}{2 k + 1}])^{2} .
$$

(We have used the binomial inequality again in the third step.) Since $2 (k + 1 ) > 2 k + 1$ for every $k \in \N$ , we conclude that

$$
\frac{k + 1}{2 k + 1} > \frac{1}{2} .
$$

Hence

$$
\frac{1}{a_{2 k}} > \frac{1}{4} ,
$$

which means that $a_{2 k} < 4$ for all $k \in \N$ . For odd indices $n$ , we use the monotonicity that we have already proved. If $n$ is odd, then $a_{n} < a_{n + 1} < 4$ as well. So the sequence is bounded. Therefore, there exists a limit.

We will come back to the limit of this sequence later. It is common to use the symbol $e$ for it. That is,

$$
e = \underset{n arrow \\infty}{ \lim } ((1 + \frac{1}{n}))^{n} .
$$

## 4.3 Tests for convergence

In this section we discuss ways to find out if a given sequence is convergent. We already know one criterion: if a sequence is bounded and monotone, then it is convergent by Theorem 47. But this does not apply to all interesting sequences, which is why we want other tests.

### Theorem 5 (Pinching theorem/sandwich theorem).

Suppose that $((a_{n} ))_{n \in \N}$ , $((b_{n} ))_{n \in \N}$ , and $((c_{n} ))_{n \in \N}$ are real sequences with $a_{n} \leq b_{n} \leq c_{n}$ for all $n \in \N$ . If $((a_{n} ))_{n \in \N}$ and $((c_{n} ))_{n \in \N}$ converge and

$$
\underset{n arrow \\infty}{ \lim } a_{n} = \underset{n arrow \\infty}{ \lim } c_{n} ,
$$

then $((b_{n} ))_{n \in \N}$ converges as well and

$$
\underset{n arrow \\infty}{ \lim } a_{n} = \underset{n arrow \\infty}{ \lim } b_{n} = \underset{n arrow \\infty}{ \lim } c_{n} .
$$

#### Proof

Assume that $((a_{n} ))_{n \in \N}$ and $((c_{n} ))_{n \in \N}$ do indeed converge with $a_{n} arrow L$ and $c_{n} arrow L$ as $n arrow \\infty$ for some $L \in \R$ . We need to show that $b_{n} arrow L$ as well as $n arrow \\infty$ .

To this end, fix $\epsi > 0$ . Choose $N \in \N$ so large that

$$
|a_{n} - L| < \epsi \text{and } |c_{n} - L| < \epsi
$$

for all $n \in \N$ . Then

$$
L - \epsi < a_{n} \leq b_{n} \leq c_{n} < L + \epsi
$$

for $n \geq N$ , which implies that $|b_{n} - L| < \epsi$ . □

### Example 5.

Consider the sequence $((b_{n} ))_{n \in \N}$ with

$$
b_{n} = \frac{\sin n}{n} , n \in \N .
$$

This permits an application of Theorem 50 with $a_{n} = - 1 / n$ and $c_{n} = 1 / n$ for $n \in \N$ . Then $a_{n} \leq b_{n} \leq c_{n}$ , because $|\sin n| \leq 1$ , for all $n \in \N$ . Since $\underset{n arrow \\infty}{ \lim } (- 1 / n ) = \underset{n arrow \\infty}{ \lim } (1 / n ) = 0$ , it follows that

$$
\underset{n arrow \\infty}{ \lim } \frac{\sin n}{n} = 0.
$$

Whenever we deal with convergence, we examine only the behaviour of a sequence for very large indices. Therefore, we can always ignore any finite number of members. This observation gives rise to the following version of the sandwich theorem.

### Corollary 5 (Bitten sandwich theorem).

Suppose that $((a_{n} ))_{n \in \N}$ , $((b_{n} ))_{n \in \N}$ , and $((c_{n} ))_{n \in \N}$ are real sequences and there exists $N \in \N$ such that $a_{n} \leq b_{n} \leq c_{n}$ for all $n \geq N$ . If $((a_{n} ))_{n \in \N}$ and $((c_{n} ))_{n \in \N}$ converge with

$$
\underset{n arrow \\infty}{ \lim } a_{n} = \underset{n arrow \\infty}{ \lim } c_{n} ,
$$

then $((b_{n} ))_{n \in \N}$ converges as well and

$$
\underset{n arrow \\infty}{ \lim } a_{n} = \underset{n arrow \\infty}{ \lim } b_{n} = \underset{n arrow \\infty}{ \lim } c_{n} .
$$

### Proposition 5.

If $((a_{n} ))_{n \in \N}$ is a real sequence such that $\underset{n arrow \\infty}{ \lim } a_{n} = 0$ and $a_{n} \neq 0$ for all $n \in \N$ , then $((1 / a_{n} ))_{n \in \N}$ is divergent.

#### Proof

We first prove that $1 / |a_{n}| arrow \\infty$ as $n arrow \\infty$ . To this end, let $M > 0$ . Set $\epsi = 1 / M$ and choose $N \in \N$ such that $|a_{n}| < \epsi$ for all $n \geq N$ . Then $1 / |a_{n}| > 1 / \epsi = M$ for all $n \geq N$ . So indeed, we have shown that $1 / |a_{n}| arrow \\infty$ as $n arrow \\infty$ .

But this means that $((1 / a_{n} ))_{n \in \N}$ cannot be convergent, because if it were, then Proposition 44 would imply that $1 / |a_{n}|$ is convergent as well, and we have just seen that this is not the case. □

For the next theorem we will need the following auxiliary result.

Lemma 54.

Suppose that $((a_{n} ))_{n \in \N}$ is a sequence of positive numbers such that

$$
r = \underset{n arrow \\infty}{ \lim } \frac{a_{n + 1}}{a_{n}}
$$

exists. Then for any $s > r$ there exists a number $C > 0$ such that

$$
a_{n} \leq C s^{n}
$$

for all $n \in \N$ .

#### Proof

Fix $s > r$ and let $\epsi = s - r$ . Then there exists $N \in \N$ such that

$$
|\frac{a_{n + 1}}{a_{n}} - r| < \epsi
$$

for all $n \geq N$ . But then

$$
\frac{a_{n + 1}}{a_{n}} \leq r + \epsi = s
$$

for $n \geq N$ . Therefore,

$$
a_{N + k} = \frac{a_{N + k}}{a_{N + k - 1}} \frac{a_{N + k - 1}}{a_{k + k - 2}} \dots  \frac{a_{N + 1}}{a_{N}} a_{N} \leq s^{k} a_{N}
$$

for all $k \in \N$ .

Define

$$
C =  \max  \{\frac{a_{1}}{s} , \frac{a_{2}}{s^{2}} , \dots  , \frac{a_{N}}{s^{N}}\} .
$$

Then it is clear that $a_{n} \leq C s^{n}$ for $n \leq N$ , and for $n > N$ , we know that

$$
a_{n} \leq a_{N} s^{n - N} \leq C s^{N} s^{n - N} = C s^{n} .
$$

□

### Theorem 5 (Growth factor test).

Let $((a_{n} ))_{n \in \N}$ be a sequence of positive numbers. Suppose that

$$
r = \underset{n arrow \\infty}{ \lim } \frac{a_{n + 1}}{a_{n}}
$$

exists (allowing divergence to infinity, so $0 \leq r \leq \\infty$ ).

1.  If $0 \leq r < 1$ , then $a_{n} arrow 0$ as $n arrow \\infty$ .
2.  If $r > 1$ , then $a_{n} arrow \\infty$ as $n arrow \\infty$ .

If $r = 1$ , then the test is inconclusive.

#### Proof

(i) If $r < 1$ , we choose $s \in (r , 1 )$ and use Lemma 54. We find $C > 0$ such that

$$
0 < a_{n} \leq C s^{n}
$$

for all $n \in \N$ . Then the result follows from the pinching theorem.

(ii) If $r > 1$ , then we can apply statement (i) to the sequence $((1 / a_{n} ))_{n \in \N}$ . If $r < \\infty$ , we find that

$$
\frac{1 / a_{n + 1}}{1 / a_{n}} = \frac{1}{\frac{a_{n + 1}}{a_{n}}} arrow \frac{1}{r} < 1
$$

as $n arrow \\infty$ by Theorem 42. If $r = \\infty$ , then

$$
\frac{1 / a_{n + 1}}{1 / a_{n}} arrow 0
$$

as $n arrow \\infty$ . (That’s because for any $\epsi > 0$ there exists $N \in \N$ such that $a_{n + 1} / a_{n} > 1 / \epsi$ for all $n \geq N$ , and then

$$
\frac{1 / a_{n + 1}}{1 / a_{n}} = \frac{1}{a_{n + 1} / a_{n}} < \epsi
$$

for $n \geq N$ .) In either case, we conclude that $((1 / a_{n} ))_{n arrow \\infty}$ converges to $0$ . Then $a_{n} arrow \\infty$ as $n arrow \\infty$ , as shown in an exercise. □

### Example 5.

Does the sequence $((a_{n} ))_{n \in \N}$ with $a_{n} = \frac{n}{2^{n}}$ converge?

**Solution.** We compute

$$
\frac{a_{n + 1}}{a_{n}} = \frac{2^{n} (n + 1 )}{2^{n + 1} n} = \frac{1}{2} (1 + \frac{1}{n}) arrow \frac{1}{2}
$$

as $n arrow \\infty$ . Hence the growth factor test says that $a_{n} arrow 0$ as $n arrow \\infty$ .

This example can be generalised.

### Corollary 5.

Let $k \in \N$ and $a > 1$ . Then

$$
\frac{n^{k}}{a^{n}} arrow 0 \text{and } \frac{a^{n}}{n^{k}} arrow \\infty
$$

as $n arrow \\infty$ .

Roughly speaking, this result says that exponential growth (as in $a^{n}$ ) beats polynomial growth (as in $n^{k}$ ) as $n arrow \\infty$ .

#### Proof

We use the growth factor test:

$$
\frac{\frac{((n + 1 ))^{k}}{a^{n + 1}}}{\frac{n^{k}}{a^{n}}} = \frac{1}{a} ((1 + \frac{1}{n}))^{k} arrow \frac{1}{a}
$$

as $n arrow \\infty$ . This proves the convergence of the first sequence, and if we take the reciprocal value, it also proves the divergence of the second sequence. □

## 4.4 Subsequences

Here we study sequences obtained from other sequences by selecting only some of the members.

### Definition 5.

Suppose that $((a_{n} ))_{n \in \N}$ is a sequence of real numbers and $((n_{k} ))_{k \in \N}$ is a strictly increasing sequence of natural numbers. Then $((a_{n_{k}} ))_{k \in \N}$ is called a **subsequence** of $((a_{n} ))_{n \in \N}$ .

### Example 5.

Consider the alternating sequence $((a_{n} ))_{n \in \N}$ with $a_{n} = ((- 1 ))^{n}$ for all $n \in \N$ . It is divergent, but contains two convergent subsequences. If we take all even indices, i.e., $n_{k} = 2 k$ for $k \in \N$ , then $a_{n_{k}} = ((- 1 ))^{2 k} = 1$ for all $k$ , so $((a_{n_{k}} ))_{k \in \N} = (1 , 1 , 1 , \dots  )$ . If we take all odd indices, i.e., $n_{k} = 2 k - 1$ for $k \in \N$ , then $((a_{n_{k}} ))_{k \in \N} = (- 1 , - 1 , - 1 , \dots  )$ .

### Proposition 6.

Let $((a_{n} ))_{n \in \N}$ be a real sequence converging to $L \in \R$ . Then any subsequence of $((a_{n} ))_{n \in \N}$ also converges to $L$ .

#### Proof

Consider a subsequence $((a_{n_{k}} ))_{k \in \N}$ . Given $\epsi > 0$ , we can choose $N \in \N$ such that $|a_{n} - L| < \epsi$ for all $n \geq N$ . Now choose $K \in \N$ such that $n_{K} \geq N$ . Then for every $k \geq K$ , we know that $n_{k} \geq N$ as well, since $((n_{k} ))_{k \in \N}$ is increasing. Therefore,

$$
|a_{n_{k}} - L| < \epsi
$$

for all $k \geq K$ , and we conclude that $a_{n_{k}} arrow L$ as $k arrow \\infty$ . □

### Corollary 6.

If a sequence $((a_{n} ))_{n \in \N}$ has two subsequences converging to different limits, then $((a_{n} ))_{n \in \N}$ is divergent.

### Example 6.

The sequence from Example 59 has two subsequences that converge to $1$ and $- 1$ , respectively.

The following is one of the key theorems concerning subsequences.

### Theorem 6 (Bolzano-Weierstrass).

Every bounded real sequence contains a convergent subsequence.

#### Proof

We first want to find a monotone subsequence. To this end, define the set

$$
S = \{n \in \N : a_{m} \leq a_{n} \text{ for all  } m > n\} .
$$

We distinguish two possible cases.

If $S$ is infinite, we choose $n_{1} , n_{2} , \dots  \in S$ such that $n_{1} < n_{2} < \dots$ . Then it follows that $a_{n_{1}} \geq a_{n_{2}} \geq \dots$ , so the subsequence $((a_{n_{k}} ))_{k \in \N}$ is decreasing.

If $S$ is finite, choose $n_{1} =  \max  S + 1$ . Since $n_{1} \notin S$ , there exists $n_{2} > n_{1}$ such that $a_{n_{2}} > a_{n_{1}}$ . But then $n_{2} >  \max  S$ as well, so $n_{2} \notin S$ . Therefore, there exists $n_{3} > n_{2}$ such that $a_{n_{3}} > a_{n_{2}}$ . We may continue this construction indefinitely. Hence we obtain a subsequence $((a_{n_{k}} ))_{k \in \N}$ that is strictly increasing.

In either case, the subsequence is bounded again. So Theorem 47 applies. The conclusion is that $((a_{n_{k}} ))_{k \in \N}$ converges. □

## 4.5 Cauchy sequences

The following notion can be used to characterise convergence.

### Definition 6.

A real sequence $((a_{n} ))_{n \in \N}$ is called a **Cauchy sequence** if

$$
\forall \epsi > 0 \exists N \in \N \forall m , n \geq N : |a_{m} - a_{n}| < \epsi .
$$

### Theorem 6.

A sequence $((a_{n} ))_{n \in \N}$ converges if, and only if, it is a Cauchy sequence.

#### Proof

Suppose that $((a_{n} ))_{n \in \N}$ is convergent. Then there exists a limit

$$
L = \underset{n arrow \\infty}{ \lim } a_{n} .
$$

Now fix $\epsi > 0$ . Choose $N \in \N$ such that

$$
|a_{n} - L| < \frac{\epsi}{2}
$$

for all $n \geq N$ . Then for any pair of indices $m , n \geq N$ ,

$$
|a_{m} - a_{n}| \leq |a_{m} - L| + |L - a_{n}| < \frac{\epsi}{2} + \frac{\epsi}{2} = \epsi
$$

by the triangle inequality. So the Cauchy condition is satisfied.

Now suppose that $((a_{n} ))_{n \in \N}$ is a Cauchy sequence. Then there exists $N_{1} \in \N$ such that $|a_{m} - a_{n}| < 1$ for all $m , n \geq N_{1}$ . In particular,

$$
|a_{n}| \leq |a_{n} - a_{N}| + |a_{N}| < |a_{N}| + 1
$$

for all $n \geq N_{1}$ . It follows that

$$
|a_{n}| \leq  \max  \{ |a_{1}| , \dots  , |a_{N}| \} + 1
$$

for all $n \in \N$ , and the sequence $((a_{n} ))_{n \in \N}$ is bounded.

By Theorem 63, there exists a convergent subsequence $((a_{n_{k}} ))_{k \in \N}$ . Let $L = \underset{k arrow \\infty}{ \lim } a_{n_{k}}$ . We claim that $a_{n} arrow L$ as $n arrow \\infty$ as well.

In order to prove this statement, fix $\epsi > 0$ . Choose $N_{0} \in \N$ such that $|a_{m} - a_{n}| < \epsi / 2$ for $m , n \geq N_{0}$ and choose $K \in \N$ such that $n_{K} \geq N_{0}$ and $|a_{n_{k}} - L| < \epsi / 2$ for all $k \geq K$ . Define $N =  \max  \{ N_{0} , n_{K} \}$ . Then for any $n \geq N$ ,

$$
|a_{n} - L| \leq |a_{n} - a_{n_{K}}| + |a_{n_{K}} - L| < \epsi .
$$

Hence we have proved that $a_{n} arrow L$ as $n arrow \\infty$ . □

It may not be immediately obvious why the concept of a Cauchy sequence is useful. After all, the condition in the definition seems more complicated than the definition of convergence. But the key difference is that in order to verify convergence directly, you need to have an idea of what the limit is. For Cauchy sequences, you can simply check the condition and decide whether or not it is satisfied.

## 4.6 Limsup and liminf

Not every sequence has a limit. But there are two related concepts which do always exist (although they may be infinite).

We first recall the supremum and infimum from Section 2.3. If $((a_{n} ))_{n \in \N}$ is a given real sequence and if $k \in \N$ , then we use the abbreviation

$$
\underset{n \geq k}{\sup} a_{n} = \sup \{a_{n} : n \geq k\} \text{and } \underset{n \geq k}{\inf} a_{n} = \inf \{a_{n} : n \geq k\}
$$

### Proposition 6.

Let $((a_{n} ))_{n \in \N}$ be a real sequence.

1.  If $((a_{n} ))_{n \in \N}$ is bounded above, then the sequence $((\underset{n \geq k}{\sup} a_{n} ))_{k \in \N}$ is a decreasing real sequence. Otherwise, $\underset{n \geq k}{\sup} a_{n} = \\infty$ for all $k \in \N$ .
2.  If $((a_{n} ))_{n \in \N}$ is bounded below, then the sequence $((\underset{n \geq k}{\inf} a_{n} ))_{k \in \N}$ is an increasing real sequence. Otherwise, $\underset{n \geq k}{\inf} a_{n} = - \\infty$ for all $k \in \N$ .

#### Proof

(i) For $k \in \N$ , let $S_{k} = \{a_{n} : n \geq k\}$ . Then $S_{1} \\supseteq S_{2} \\supseteq \dots$ .

Now suppose that $((a_{n} ))_{n \in \N}$ is bounded above. This means that $S_{1}$ has an upper bound, say $M \in \R$ . But then $M$ is an upper bound for every $S_{k}$ , so $\sup S_{k} \leq M$ for all $k \in \N$ . In particular, we see that $\sup S_{k} \in \R$ for all $k \in \N$ .

Furthermore, every upper bound for $S_{k}$ is an upper bound for $S_{k + 1}$ . Hence $\sup S_{k} \geq \sup S_{k + 1}$ for all $k \in \N$ , which means that $((\sup S_{k} ))_{k \in \N}$ is decreasing.

On the other hand, if $((a_{n} ))_{n \in \N}$ is unbounded above, then every $S_{k}$ is unbounded above, as $S_{1} \backslash S_{k}$ is a finite set. So in this case, $\sup S_{k} = \\infty$ for all $k \in \N$ .

(ii) This part of the proof is similar. □

The consequence of this proposition is that the sequences $((\underset{n \geq k}{\sup} a_{n} ))_{k \in \N}$ and $((\underset{n \geq k}{\inf} a_{n} ))_{k \in \N}$ always have limits, provided that we include $\pm \\infty$ as possible limits.

### Definition 6.

Let $((a_{n} ))_{n \in \N}$ be a real sequence.

1.  If it is bounded above, then we define

    $$
    (\lim \sup)_{n arrow \\infty} a_{n} = \underset{k arrow \\infty}{ \lim } \underset{n \geq k}{\sup} a_{n} .
    $$

    Otherwise, $(\lim \sup)_{n arrow \\infty} a_{n} = \\infty$ .

2.  If $((a_{n} ))_{n \in \N}$ is bounded below, then we define

    $$
    (\lim \inf)_{n arrow \\infty} a_{n} = \underset{k arrow \\infty}{ \lim } \underset{n \geq k}{\inf} a_{n} .
    $$

    Otherwise, $(\lim \inf)_{n arrow \\infty} a_{n} = - \\infty$ .

### Example 6.

Consider the sequence $((a_{n} ))_{n \in \N}$ with $a_{n} = n$ for $n \in \N$ . Then

$$
\underset{n \geq k}{\sup} a_{n} = \\infty \text{and } \underset{n \geq k}{\inf} a_{n} = k
$$

for all $k \in \N$ . Therefore,

$$
(\lim \inf)_{n arrow \\infty} a_{n} = (\lim \inf)_{n arrow \\infty} a_{n} = \\infty .
$$

### Example 6.

Suppose that $a_{n} = ((- 1 ))^{n}$ for $n \in \N$ . Then

$$
(\lim \sup)_{n arrow \\infty} a_{n} = 1 \text{and } (\lim \inf)_{n arrow \\infty} a_{n} = - 1.
$$

### Proposition 7.

For any real sequence $((a_{n} ))_{n \in \N}$ ,

$$
(\lim \inf)_{n arrow \\infty} a_{n} \leq (\lim \sup)_{n arrow \\infty} a_{n} .
$$

#### Proof

This is proved in an exercise. □

### Theorem 7.

A real sequence $((a_{n} ))_{n \in \N}$ converges if, and only if,

$$
(\lim \sup)_{n arrow \\infty} a_{n} = (\lim \inf)_{n arrow \\infty} a_{n}
$$

and the common value is a real number (not $\\infty$ or $- \\infty$ ). If so, then

$$
\underset{n arrow \\infty}{ \lim } a_{n} = (\lim \sup)_{n arrow \\infty} a_{n} = (\lim \inf)_{n arrow \\infty} a_{n} .
$$

#### Proof

Suppose that $((a_{n} ))_{n \in \N}$ converges. Let $L = \underset{n arrow \\infty}{ \lim } a_{n}$ . Then for any $\epsi > 0$ , we may choose $N \in \N$ such that

$$
|a_{n} - L| < \epsi
$$

for all $n \geq N$ . Thus for $k \geq N$ , the number $L + \epsi$ is an upper bound and $L - \epsi$ is a lower bound for the set $\{a_{n} : n \geq k\}$ . That is,

$$
L - \epsi \leq \underset{n \geq k}{\inf} a_{n} \leq \underset{n \geq k}{\sup} a_{n} \leq L + \epsi .
$$

### Proposition 3 implies that

$$
L - \epsi \leq (\lim \inf)_{n arrow \\infty} a_{n} \leq (\lim \sup)_{n arrow \\infty} a_{n} \leq L + \epsi .
$$

But this is true for any $\epsi > 0$ , so

$$
L \leq (\lim \inf)_{n arrow \\infty} a_{n} \leq (\lim \sup)_{n arrow \\infty} a_{n} \leq L .
$$

That is,

$$
L = (\lim \inf)_{n arrow \\infty} a_{n} = (\lim \sup)_{n arrow \\infty} a_{n} .
$$

Now suppose that

$$
(\lim \inf)_{n arrow \\infty} a_{n} = (\lim \sup)_{n arrow \\infty} a_{n}
$$

and denote this common value by $L$ . Fix $\epsi > 0$ . Then there exists $N \in \N$ such that

$$
|\underset{n \geq k}{\sup} a_{n} - L| < \epsi \text{and } |\underset{n \geq k}{\inf} a_{n} - L| < \epsi
$$

for all $k \geq N$ . That is,

$$
L - \epsi < \underset{n \geq k}{\inf} a_{n} < \underset{n \geq k}{\sup} a_{n} < L + \epsi .
$$

In particular,

$$
L - \epsi < a_{k} < L + \epsi
$$

for all $k \geq N$ . This proves that $L = \underset{n arrow \\infty}{ \lim } a_{n}$ . □
