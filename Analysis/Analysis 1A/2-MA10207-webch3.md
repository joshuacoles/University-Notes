Chapter 3  
  
[Inequalities](MA10207-web.html#QQ2-7-16)
--------------------------------------------------------

### 3.1 [Solving inequalities](MA10207-web.html#QQ2-7-17)

Roughly speaking, by ‘inequality’ we mean a statement involving one of the symbols $<$ , $>$ , $\leq$ , or $\geq$ . You will see that inequalities appear quite often when we solve a problem in analysis. Therefore, it’s important to know how to deal with them. The key is to make use of the order axioms.

Example 24.  
  
Solve

$$
1 \leq \frac{x + 1}{x + 2} \leq 2.
$$

(That is, find all values of $x$ such that this is true.)

**Solution.** The basic idea is to multiply everything with $x + 2$ in order to get rid of the fraction. The difficulty is that the inequalities may be reversed if we multiply with a negative number. Therefore, we first check if $x + 2$ is negative.

We have several possibilities here. If $x > - 2$ , then $x + 2 > 0$ by (A13). Multiplying everything with $x + 2$ then gives

$$
x + 2 \leq x + 1 \leq 2 \left( x + 2 \right)
$$

by (A14). But if we just look at the first inequality (i.e., $x + 2 \leq x + 1$ ), we can subtract $x$ on both sides and end up with $2 \leq 1$ (by (A13) again). This is obviously nonsense (as it ultimately contradicts Proposition [18](MA10207-webch2.html#x6-13001r18).[(v)](MA10207-webch2.html#x6-130105)), so there is no solution in this case.

If $x < - 2$ , then $x + 2 < 0$ . Multiplying everything with $x + 2$ now gives

$$
x + 2 \geq x + 1 \geq 2 \left( x + 2 \right)
$$

by Proposition [18](MA10207-webch2.html#x6-13001r18).[(vii)](MA10207-webch2.html#x6-130147). By the same reasoning as before, we see that the first inequality reduces to $2 \geq 1$ , which is clearly true. Subtracting $x$ on both sides of the second inequality, we also obtain

$$
1 \geq 2 \left( x + 2 \right) - x = x + 4.
$$

Hence $x \leq 1 - 4 = - 3$ .

That leaves the case $x = 2$ , but then the fraction makes no sense, so this is not a solution.

Summarising, we see that all solutions satisfy $x \leq - 3$ .

As the example shows, solving an inequality is similar to solving an equation, but with the added difficulty that some manipulations don’t preserve the inequality. (Often they get reversed, like in the example, but sometimes the situation is more complicated.)

### 3.2 [Some useful inequalities](MA10207-web.html#QQ2-7-18)

Rather than solving an inequality, we sometimes want to use the information it contains to solve other problems. In this section we discuss some tools, including specific inequalities, that are useful for this purpose.

Definition 25.  
  
The **absolute value** of a number $x \in ℝ$ is

$$
\begin{align}
\left|x\right| = \left\{\begin{matrix} x & \text{if  }x\geq 0\text{}, \\ -x & \text{if  }x<0\text{}. \end{matrix}\right
\end{align}
$$

Here are some of the basic properties of the absolute value.

Proposition 26.  
  
For all $x \in ℝ$ ,

1.  $x \leq \left|x\right|$ ,
2.  $- x \leq \left|x\right|$ ,
3.  $\left|- x\right| = \left|x\right|$ .
4.  For all $x , y \in ℝ$ , the identity $\left|x y\right| = \left|x\right| \left|y\right|$ holds true.

Proof.  [(i)](#x7-180041) If $x > 0$ , then $x = \left|x\right|$ by the definition. If $x \leq 0$ , then $\left|x\right| = - x \geq 0$ by Proposition [18](MA10207-webch2.html#x6-13001r18).[(iii)](MA10207-webch2.html#x6-130063), so $x \leq \left|x\right|$ by (A12).

[(ii)](#x7-180062) This is similar, so we omit the details.

[(iii)](#x7-180083) If $x \geq 0$ , then $- x \leq 0$ by Proposition [18](MA10207-webch2.html#x6-13001r18).[(iii)](MA10207-webch2.html#x6-130063). Hence $\left|x\right| = x$ and $\left|- x\right| = - \left( - x \right) = x$ as well by Proposition [17](MA10207-webch2.html#x6-12002r17).[(iii)](MA10207-webch2.html#x6-120073). If $x < 0$ , then the same reasoning applies.

[(iv)](#x7-180104) If $x , y \geq 0$ , then $x y \geq 0$ by (A14). Hence $\left|x y\right| = x y = \left|x\right| \left|y\right|$ . If $x , y < 0$ , then $x y \geq 0$ by Proposition [18](MA10207-webch2.html#x6-13001r18).[(i)](MA10207-webch2.html#x6-130021); therefore $\left|x y\right| = x y = \left( - x \right) \left( - y \right) = \left|x\right| \left|y\right|$ . If $x \geq 0$ and $y < 0$ , then $x y \leq 0$ and $\left|x y\right| = - x y = x \left( - y \right) = \left|x\right| \left|y\right|$ . In the last argument, we can also exchange the roles of $x$ and $y$ , thus obtaining the proof for the remaining case. □

Proposition 27 (Triangle inequality).  
  
For all $x , y \in ℝ$ ,

1.  $\left|x + y\right| \leq \left|x\right| + \left|y\right|$ ,
2.  $\left| \left|x\right| - \left|y\right| \left| \leq \left|x - y\right|$ (reverse triangle inequality).

Proof.  [(i)](#x7-180141) First we use (A13) and Proposition [26](#x7-18003r26) to conclude that

$$
x + y \leq \left|x\right| + y \leq \left|x\right| + \left|y\right| .
$$

Similarly,

$$
- \left( x + y \right) = \left( - x \right) + \left( - y \right) \leq \left|x\right| + \left|y\right| .
$$

Now the value of $\left|x + y\right|$ is either $x + y$ or $- \left( x + y \right)$ . Both of these are less than or equal to $\left|x\right| + \left|y\right|$ , hence

$$
\left|x + y\right| \leq \left|x\right| + \left|y\right| .
$$

[(ii)](#x7-180162) Apply the inequality from [(i)](#x7-180141) to $x - y$ and $y$ instead of $x$ and $y$ . This gives

$$
\left|x\right| = \left|\left( x - y \right) + y\right| \leq \left|x - y\right| + \left|y\right| .
$$

Subtracting $\left|y\right|$ from both sides, we obtain

$$
\left|x\right| - \left|y\right| \leq \left|x - y\right| .
$$

Now exchange $x$ and $y$ in this argument. This will give

$$
\left|y\right| - \left|x\right| \leq \left|x - y\right| .
$$

The value of $\left| \left|x\right| - \left|y\right| \left|$ is either $\left|x\right| - \left|y\right|$ or $- \left( \left|x\right| - \left|y\right| \right) = \left|y\right| - \left|x\right|$ , so the desired inequality follows. □

Proposition 28 (Binomial inequality).  
  
For all $x \in ℝ$ and all $n \in ℕ_{0}$ , if $x \geq - 1$ , then

$$
\left(\left( 1 + x \right)\right)^{n} \geq 1 + n x .
$$

Proof.  We use induction on $n$ . For $n = 0$ , the inequality reads $1 \geq 1$ , which is obviously true.

Now assume that the inequality holds true for $n$ . We want to show that it still holds true for $n + 1$ . Indeed,

$$
\left(\left( 1 + x \right)\right)^{n + 1} = \left( 1 + x \right) \left(\left( 1 + x \right)\right)^{n} ,
$$

and $1 + x \geq 0$ as we assume that $x \geq - 1$ . Also, we know that $\left(\left( 1 + x \right)\right)^{n} \geq 1 + n x$ by the inductive hypothesis. Therefore,

$$
\left(\left( 1 + x \right)\right)^{n + 1} = \left( 1 + x \right) \left(\left( 1 + x \right)\right)^{n} \geq \left( 1 + x \right) \left( 1 + n x \right) = 1 + \left( n + 1 \right) x + n x^{2} .
$$

Finally, we know that $n x^{2} \geq 0$ by Proposition [18](MA10207-webch2.html#x6-13001r18).[(iv)](MA10207-webch2.html#x6-130084) and (A14). Hence

$$
\left(\left( 1 + x \right)\right)^{n + 1} \geq 1 + \left( n + 1 \right) x .
$$

This is the inductive step. This concludes the induction and the proof. □

Now we apply these tools to some examples.

Example 29.  
  
Assuming that $\left|x - y\right| \leq 1$ , show that

$$
\left|x^{2} - y^{2}\right| \leq \left( 2 \left|x\right| + 1 \right) \left|x - y\right| .
$$

**Solution.** We first factorise $x^{2} - y^{2}$ into $x^{2} - y^{2} = \left( x + y \right) \left( x - y \right)$ . Thus

$$
\left|x^{2} - y^{2}\right| = \left|x + y\right| \left|x - y\right|
$$

by Proposition [26](#x7-18003r26).[(iv)](#x7-180104). Furthermore,

$$
\left|x + y\right| = \left|2 x + \left( y - x \right)\right| \leq \left|2 x\right| + \left|y - x\right| = 2 \left|x\right| + \left|x - y\right| \leq 2 \left|x\right| + 1.
$$

Here we have used the triangle inequality, Proposition [26](#x7-18003r26), and the hypothesis of the problem. Combining these two facts, we obtain

$$
\left|x^{2} - y^{2}\right| \leq \left( 2 \left|x\right| + 1 \right) \left|x - y\right| .
$$

Example 30.  
  
For what values of $x \in ℝ$ do we have the inequality

$$
\frac{1}{\left|x - 1\right|} \geq 1 ?
$$

**Solution.** We can rule out $x = 1$ immediately, because the fraction makes no sense for this value.

Multiplying with $\left|x - 1\right|$ (which is always positive), we obtain

$$
1 \geq \left|x - 1\right| .
$$

If $x > 1$ , then this means that $1 \geq x - 1$ , so $x \leq 2$ . If $x < 1$ , then the inequality becomes $1 \geq 1 - x$ , which we can transform into $0 \geq - x$ and then into $x \geq 0$ .

To summarise, the inequality holds true when $1 < x \leq 2$ or $0 \leq x < 1$ .

### 3.3 [Intervals](MA10207-web.html#QQ2-7-19)

The following notation is often useful when we deal with inequalities. Given $a , b \in ℝ$ , we set

$$
\begin{align}
\left( a , b \right) & =\left\{x \in ℝ : a < x < b\right\}, & & \\ \left[ a , b \right] & =\left\{x \in ℝ : a \leq x \leq b\right\}, & & \\ \left( a , b \right] & =\left\{x \in ℝ : a < x \leq b\right\}, & & \\ \left[ a , b \right) & =\left\{x \in ℝ : a \leq x < b\right\}. & & 
\end{align}
$$

Furthermore, for any $a \in ℝ$ ,

$$
\begin{align}
\left( a , \infty \right) & =\left\{x \in ℝ : x > a\right\}, & & \\ \left[ a , \infty \right) & =\left\{x \in ℝ : x \geq a\right\}, & & \\ \left( - \infty , a \right) & =\left\{x \in ℝ : x < a\right\}, & & \\ \left( - \infty , a \right] & =\left\{x \in ℝ : x \leq a\right\}. & & 
\end{align}
$$

Example 31.  
  
The set of solutions in Example [30](#x7-18021r30) is $\left( 1 , 2 \right] \cup \left[ 0 , 1 \right)$ .