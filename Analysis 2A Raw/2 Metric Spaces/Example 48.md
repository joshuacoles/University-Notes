### Example 48

(Unique local solutions to differential equations) Let $f:\R ^2 \to \R$ be a continuous and bounded function; namely $f: (\R ^2,\|\cdot \|) \to (\R , |\cdot |)$ is continuous and there exists a constant $M>0$ such that $|f(x,y)|\leq M$ for every $x, y\in \R$. Assume also that there exists a constant $L>0$ such that



$$  |f(x,y)-f(x,z)| \leq L|y-z| \quad \forall \, x, y, z\in \R . $$

Show that for every $(x_0,y_0) \in \R ^2$ the ordinary differential equation (ODE)



$$  y’(x) = f(x,y(x)), \quad y(x_0)=y_0 $$

has a unique solution in the interval $I:= \big [x_0-\frac {1}{2L}, x_0+\frac {1}{2L}\big ]$.

We want to write the ODE as a fixed point problem; we do it by integrating the equation between $x_0$ and $x$:

$$ y(x) - y*0 = \int *{x*0}^x y’(t) dt = \int *{x*0}^x f(t,y(t)) dt \quad \Leftrightarrow \quad y(x) = y_0 + \int *{x_0}^x f(t,y(t)) dt. $$

We can define for $y\in C^0(I)$ a function $F(y): I\to \R$, as $(F(y))(x):= y_0 + \int _{x_0}^x f(t,y(t)) dt$; hence the ODE becomes $y = F(y)$. In particular, there exists a unique solution to the ODE if and only if there is a unique fixed point of $F$ in $C^0(I)$.

Again, this would be a direct consequence of the Contraction Mapping Theorem, **provided** $F$ is a contraction from a complete metric space into itself, so all is left is to verify this:

- • We prove that $F(C^0(I))\subset C^0(I)$, namely that $F(y) \in C^0(I)$ for every $y \in C^0(I)$. For $x_1,x_2\in I$, $x_1<x_2$, we have

  

  $$ \begin{align*} (F(y))(x*2) - (F(y))(x_1) &= \int *{x*0}^{x_2} f(t,y(t)) dt - \int *{x*0}^{x_1} f(t,y(t)) dt \&= \int *{x_1}^{x_2} f(t,y(t)) dt \leq M\, |x_2-x_1|, \end{align*} $$ and similarly if $x_1>x_2$; so $F(y)$ is a Lipschitz function, hence continuous.

- • Clearly $(C^0(I), \|\cdot \|_{\infty })$ is a complete metric space.
- • Finally, we need to prove that $F$ is a contraction. Let $y_1, y_2 \in C^0(I)$; then for every $x\in I$

  

  $$ \begin{align*} [F(y_1) - F(y_2)](x) &= \int *{x_0}^{x} f(t,y_1(t)) dt - \int *{x*0}^{x} f(t,y_2(t)) dt \\ & \leq L \int *{x*0}^x |y_1(t) - y_2(t)| dt \&\leq L|x_0-x| \|y_1-y_2\|*{\infty } \leq \frac 12 \|y*1-y_2\|*{\infty }. \end{align*} $$ So this implies that

  $$ \| F(y*1) - F(y_2)\|*{\infty } \leq \frac 12 \|y*1-y_2\|*{\infty }, $$

  hence $F$ is a contraction.