### Example 10

(Euclidean space) Let $n \in \N$; we define $d_2 : \R ^n \times \R ^n \to \R$ as

$$ d*2(x,y):= \|x - y\|_2 = \left (\sum *{i = 1}^n (x_i - y_i)^2\right )^{1/2}, \quad x,y \in \R ^n. $$

If $n=1$ we use the notation $d_2(x,y) = |x-y|$. We often omit the subscript $2$ from the Euclidean distance $\|x-y\|_2$.

We prove that $d_2$ is a metric and thus $(\R ^n,d_2)$ is a metric space. Axioms (1)–(3) are easy to verify. For the triangle inequality, we first need the **Cauchy-Schwarz inequality** (see 2A Algebra MA20216):



$$  \left |\sum _{i=1}^n u_i v_i \right | \leq \left (\sum _{i=1}^n u*i^2\right )^{\frac 12} \left (\sum *{i=1}^n v_i^2\right )^{\frac 12} \quad (=\|u\|\, \|v\|). $$

To prove (2.1) it is sufficient to prove the inequality for $u_i, v_i\geq 0$ and for $u\neq 0$ and $v\neq 0$ (otherwise it is trivial). For every $\alpha ,\beta >0$, we have

$$ 0\leq \sum _{i=1}^n (\alpha u_i - \beta v_i)^2 = \alpha ^2 \sum _{i=1}^n u*i^2 + \beta ^2 \sum *{i=1}^n v*i^2 - 2\alpha \beta \sum *{i=1}^n u_i v_i $$

or equivalently, rearranging the terms,

$$ 2\alpha \beta \sum _{i=1}^n u_i v_i \leq \alpha ^2 \sum _{i=1}^n u*i^2 + \beta ^2 \sum *{i=1}^n v_i^2. $$

The inequality (2.1) follows by choosing $\alpha = \left (\sum _{i=1}^n v_i^2\right )^{\frac 12}$ and $\beta = \left (\sum _{i=1}^n u_i^2\right )^{\frac 12}$, and by dividing the resulting estimate by $2\alpha \beta$ (note that $2\alpha \beta > 0$).

Now we are ready to prove the triangle inequality. By the definition of the Euclidean norm, proving (4) means to show that

$$ \|x-z\| \leq \|x-y\| + \|y-z\| \quad \textrm {for all } \, x,y,z\in \R ^n. $$

Let $u:=x-y$ and $v:=y-z$; then $u+v=x-z$. We are going to prove (equivalently) that $\|u+v\| \leq \|u\| + \|v\|$.

To this end, note that by expanding the square and by using the Cauchy-Schwarz inequality, we have



$$ \begin{align*} \|u+v\|^2 = \sum *{i=1}^n (u_i + v_i)^2 &= \sum *{i=1}^n u*i^2 + \sum *{i=1}^n v*i^2 + 2\sum *{i=1}^n u_i v_i \leq \|u\|^2 + \|v\|^2 + 2 \|u\|\, \|v\| = (\|u\|+\|v\|)^2, \end{align*} $$ and the claim follows by taking the square root.