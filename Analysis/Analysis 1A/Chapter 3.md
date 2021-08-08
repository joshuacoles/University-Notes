Chapter 3

# Inequalities

## 3.1 Solving inequalities

Roughly speaking, by ‘inequality’ we mean a statement involving one of the symbols $<$ , $>$ , $\leq$ , or $\geq$ . You will see that inequalities appear quite often when we solve a problem in analysis. Therefore, it’s important to know how to deal with them. The key is to make use of the order axioms.

### Example 2.

Solve

$$
1 \leq \frac{x + 1}{x + 2} \leq 2.
$$

(That is, find all values of $x$ such that this is true.)

**Solution.** The basic idea is to multiply everything with $x + 2$ in order to get rid of the fraction. The difficulty is that the inequalities may be reversed if we multiply with a negative number. Therefore, we first check if $x + 2$ is negative.

We have several possibilities here. If $x > - 2$ , then $x + 2 > 0$ by (A13). Multiplying everything with $x + 2$ then gives

$$
x + 2 \leq x + 1 \leq 2 (x + 2 )
$$

by (A14). But if we just look at the first inequality (i.e., $x + 2 \leq x + 1$ ), we can subtract $x$ on both sides and end up with $2 \leq 1$ (by (A13) again). This is obviously nonsense (as it ultimately contradicts Proposition 18.(v)), so there is no solution in this case.

If $x < - 2$ , then $x + 2 < 0$ . Multiplying everything with $x + 2$ now gives

$$
x + 2 \geq x + 1 \geq 2 (x + 2 )
$$

by Proposition 18.(vii). By the same reasoning as before, we see that the first inequality reduces to $2 \geq 1$ , which is clearly true. Subtracting $x$ on both sides of the second inequality, we also obtain

$$
1 \geq 2 (x + 2 ) - x = x + 4.
$$

Hence $x \leq 1 - 4 = - 3$ .

That leaves the case $x = 2$ , but then the fraction makes no sense, so this is not a solution.

Summarising, we see that all solutions satisfy $x \leq - 3$ .

As the example shows, solving an inequality is similar to solving an equation, but with the added difficulty that some manipulations don’t preserve the inequality. (Often they get reversed, like in the example, but sometimes the situation is more complicated.)

## 3.2 Some useful inequalities

Rather than solving an inequality, we sometimes want to use the information it contains to solve other problems. In this section we discuss some tools, including specific inequalities, that are useful for this purpose.

### Definition 2.

The **absolute value** of a number $x \in \R$ is

$$
\begin{align}
|x| = \{\begin{matrix} x \text{if  }x\geq 0, \\ -x \text{if  }x<0. \end{matrix}
\end{align}
$$

Here are some of the basic properties of the absolute value.

### Proposition 2.

For all $x \in \R$ ,

1.  $x \leq |x|$ ,
2.  $- x \leq |x|$ ,
3.  $|- x| = |x|$ .
4.  For all $x , y \in \R$ , the identity $|x y| = |x| |y|$ holds true.

#### Proof

(i) If $x > 0$ , then $x = |x|$ by the definition. If $x \leq 0$ , then $|x| = - x \geq 0$ by Proposition 18.(iii), so $x \leq |x|$ by (A12).

(ii) This is similar, so we omit the details.

(iii) If $x \geq 0$ , then $- x \leq 0$ by Proposition 18.(iii). Hence $|x| = x$ and $|- x| = - (- x ) = x$ as well by Proposition 17.(iii). If $x < 0$ , then the same reasoning applies.

(iv) If $x , y \geq 0$ , then $x y \geq 0$ by (A14). Hence $|x y| = x y = |x| |y|$ . If $x , y < 0$ , then $x y \geq 0$ by Proposition 18.(i); therefore $|x y| = x y = (- x ) (- y ) = |x| |y|$ . If $x \geq 0$ and $y < 0$ , then $x y \leq 0$ and $|x y| = - x y = x (- y ) = |x| |y|$ . In the last argument, we can also exchange the roles of $x$ and $y$ , thus obtaining the proof for the remaining case. □

### Proposition 2 (Triangle inequality).

For all $x , y \in \R$ ,

1.  $|x + y| \leq |x| + |y|$ ,
2.  $| |x| - |y| | \leq |x - y|$ (reverse triangle inequality).

#### Proof

(i) First we use (A13) and Proposition 26 to conclude that

$$
x + y \leq |x| + y \leq |x| + |y| .
$$

Similarly,

$$
- (x + y ) = (- x ) + (- y ) \leq |x| + |y| .
$$

Now the value of $|x + y|$ is either $x + y$ or $- (x + y )$ . Both of these are less than or equal to $|x| + |y|$ , hence

$$
|x + y| \leq |x| + |y| .
$$

(ii) Apply the inequality from (i) to $x - y$ and $y$ instead of $x$ and $y$ . This gives

$$
|x| = |(x - y ) + y| \leq |x - y| + |y| .
$$

Subtracting $|y|$ from both sides, we obtain

$$
|x| - |y| \leq |x - y| .
$$

Now exchange $x$ and $y$ in this argument. This will give

$$
|y| - |x| \leq |x - y| .
$$

The value of $| |x| - |y| |$ is either $|x| - |y|$ or $- (|x| - |y| ) = |y| - |x|$ , so the desired inequality follows. □

### Proposition 2 (Binomial inequality).

For all $x \in \R$ and all $n \in \N_{0}$ , if $x \geq - 1$ , then

$$
((1 + x ))^{n} \geq 1 + n x .
$$

#### Proof

We use induction on $n$ . For $n = 0$ , the inequality reads $1 \geq 1$ , which is obviously true.

Now assume that the inequality holds true for $n$ . We want to show that it still holds true for $n + 1$ . Indeed,

$$
((1 + x ))^{n + 1} = (1 + x ) ((1 + x ))^{n} ,
$$

and $1 + x \geq 0$ as we assume that $x \geq - 1$ . Also, we know that $((1 + x ))^{n} \geq 1 + n x$ by the inductive hypothesis. Therefore,

$$
((1 + x ))^{n + 1} = (1 + x ) ((1 + x ))^{n} \geq (1 + x ) (1 + n x ) = 1 + (n + 1 ) x + n x^{2} .
$$

Finally, we know that $n x^{2} \geq 0$ by Proposition 18.(iv) and (A14). Hence

$$
((1 + x ))^{n + 1} \geq 1 + (n + 1 ) x .
$$

This is the inductive step. This concludes the induction and the proof. □

Now we apply these tools to some examples.

### Example 2.

Assuming that $|x - y| \leq 1$ , show that

$$
|x^{2} - y^{2}| \leq (2 |x| + 1 ) |x - y| .
$$

**Solution.** We first factorise $x^{2} - y^{2}$ into $x^{2} - y^{2} = (x + y ) (x - y )$ . Thus

$$
|x^{2} - y^{2}| = |x + y| |x - y|
$$

by Proposition 26.(iv). Furthermore,

$$
|x + y| = |2 x + (y - x )| \leq |2 x| + |y - x| = 2 |x| + |x - y| \leq 2 |x| + 1.
$$

Here we have used the triangle inequality, Proposition 26, and the hypothesis of the problem. Combining these two facts, we obtain

$$
|x^{2} - y^{2}| \leq (2 |x| + 1 ) |x - y| .
$$

### Example 3.

For what values of $x \in \R$ do we have the inequality

$$
\frac{1}{|x - 1|} \geq 1 ?
$$

**Solution.** We can rule out $x = 1$ immediately, because the fraction makes no sense for this value.

Multiplying with $|x - 1|$ (which is always positive), we obtain

$$
1 \geq |x - 1| .
$$

If $x > 1$ , then this means that $1 \geq x - 1$ , so $x \leq 2$ . If $x < 1$ , then the inequality becomes $1 \geq 1 - x$ , which we can transform into $0 \geq - x$ and then into $x \geq 0$ .

To summarise, the inequality holds true when $1 < x \leq 2$ or $0 \leq x < 1$ .

## 3.3 Intervals

The following notation is often useful when we deal with inequalities. Given $a , b \in \R$ , we set

$$
\begin{align}
(a , b ) &=\{x \in \R : a < x < b\}, \\ [ a , b ] &=\{x \in \R : a \leq x \leq b\}, \\ (a , b ] &=\{x \in \R : a < x \leq b\}, \\ [ a , b ) &=\{x \in \R : a \leq x < b\}.
\end{align}
$$

Furthermore, for any $a \in \R$ ,

$$
\begin{align}
(a , \\infty ) &=\{x \in \R : x > a\}, \\ [ a , \\infty ) &=\{x \in \R : x \geq a\}, \\ (- \\infty , a ) &=\{x \in \R : x < a\}, \\ (- \\infty , a ] &=\{x \in \R : x \leq a\}.
\end{align}
$$

### Example 3.

The set of solutions in Example 30 is $(1 , 2 ] \cup [ 0 , 1 )$ .
