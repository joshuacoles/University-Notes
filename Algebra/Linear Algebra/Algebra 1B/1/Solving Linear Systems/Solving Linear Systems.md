
# Solving Linear Systems


In this section we provide some elementary examples and set the scene for this course.

Example 1.  
Solve the following system of equations.

$$
\begin{align}
3x - y  &= 1 \tag{1} \\
-x + 2y &= 3 \tag{2}
\end{align}
$$

Solution. 
$$
\begin{align}
5y &=10 \tag{$(1) + 3 \dp (2)$} \\ 
&\implies  y = 2
\end{align}
$$

Then

$$
\begin{align}
\left( 1 \right)\Rightarrow & & 3x=1+y=3 & \text{} \\ \Rightarrow & & x=1 & \text{}
\end{align}
$$

3 points of view:

a.

Intersection of two lines

![No alt text was set.](diagrams/fig01a.svg)

b.

Matrix equation $Ax=b$

$$
\begin{align}
\begin{pmatrix} 3 & -1 \\ -1 & 2 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 1 \\ 3 \end{pmatrix}
\end{align}
$$

c.

Linear combinations

$$
\begin{align}
x\begin{pmatrix} \begin{matrix}3 \\ -1\end{matrix} \end{pmatrix}+y\begin{pmatrix} \begin{matrix}-1 \\ 2\end{matrix} \end{pmatrix}=\begin{pmatrix} \begin{matrix}1 \\ 3\end{matrix} \end{pmatrix} & & & \text{}
\end{align}
$$

![No alt text was set.](diagrams/fig01b.svg)

$$
1 \cdot v_{1} + 2 \cdot v_{2} = w
$$

Remark: matrix $A$ defines a ‘linear map’

$$
\left(\phi\right)_{A} : \R^{2} \rightarrow \R^{2} : x \rightarrow tail A x .
$$

![No alt text was set.](diagrams/fig01c.svg)

In this case $\left(\phi\right)_{a}$ is a bijection as

$$
 \det  A = 3 \cdot 2 - \left( - 1 \right) \cdot \left( - 1 \right) \neq 0 ,
$$

so a solution of $Ax=b$ exists and is unique for all $b$ .

Example 2.  
Find the line of intersection of the following two planes in $\R^{3}$ ,

1.

$2x+6y+3z=8$

2.

$3x+2y+z=5$

Solution. 

![[fig1.svg]]

Solve the matrix equation, i.e.

$$
\begin{pmatrix} 2 & 6 & 3 \\ 3 & 2 & 1 \end{pmatrix} \begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 8 \\ 5 \end{pmatrix}
$$

Apply ’elementary row operations (EROs)’ to the augmented matrix.

$$
\begin{align}
 & & \begin{pmatrix} \begin{matrix}2 & 6 & 3 \\ 3 & 2 & 1\end{matrix} \left|\begin{matrix} \begin{matrix}8 \\ 5\end{matrix} \end{matrix}\right \end{pmatrix} & \text{} \\ & \frac{1}{2}R_{1}\rightarrow & \begin{pmatrix} \begin{matrix}1 & 3 & \frac{3}{2} \\ 3 & 2 & 1\end{matrix} \left|\begin{matrix} \begin{matrix}4 \\ 5\end{matrix} \end{matrix}\right \end{pmatrix} & \text{} \\ & R_{2}-3R_{1}\rightarrow & \begin{pmatrix} \begin{matrix}1 & 3 & \frac{3}{2} \\ 0 & -7 & -\frac{7}{2}\end{matrix} \left|\begin{matrix} \begin{matrix}4 \\ -7\end{matrix} \end{matrix}\right \end{pmatrix} & \text{} \\ & -\frac{1}{7}R_{2}\rightarrow & \begin{pmatrix} \begin{matrix}1 & 3 & \frac{3}{2} \\ 0 & 1 & \frac{1}{2}\end{matrix} \left|\begin{matrix} \begin{matrix}4 \\ 1\end{matrix} \end{matrix}\right \end{pmatrix} & \text{}
\end{align}
$$

I.e. 

$$
\begin{align}
x+3y+\frac{3}{2}z & = & 4 & \text{} \\ y+\frac{1}{2}z & = & 1 & \text{}
\end{align}
$$

Choose

$$
\begin{align}
 & & z=2t & \text{} \\ \Rightarrow & & y=1-t & \text{} \\ \Rightarrow & & x=4-3\left( 1 - t \right)-3t=1 & \text{}
\end{align}
$$

Thus

$$
\begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix} + t \begin{pmatrix} 0 \\ -1 \\ 2 \end{pmatrix} ,
$$

i.e. of form $L=\left\{ v + t w : t \in \R \right\}$, the line through point $v$ in direction $w$ .

Example 3.  
Solve the following system of equations.

1.

$2x+2y+4z=3$

2.

$x+y+2z=1$

Solution.  The two equations are not consistent and so the system has no solutions.  