> See, <marginnote3app://note/0B06D857-7B2B-4E86-A32F-9393B870EF77>

As is provided for now without proof, one can employ the [[Jacobian]] to change the variables of integration such that given an integral,

$$
\iint_R f(x, y) \,\d x \,\d y,
$$

and a change of variables $x = x(u, v), y = y(u, v)$. One can obtain the [[Jacobian]] and rephrase the variables of integration in the new frame as such,

$$
\begin{align*}
\iint_R f(x, y) \,\d x \,\d y,
= 
\iint_R f(x(u, v), y(u, v)) \,
\left|
\parfrac{(x, y)}{(u, v)}
\right|
\,\d u \,\d v,
\end{align*}
$$

where the [[Jacobian]] is defined by,


$$
\left|
\parfrac{(x, y)}{(u, v)}
\right| = \begin{vmatrix}
\parfrac{x}{u} & \parfrac{x}{v} \\
\parfrac{y}{u} & \parfrac{y}{v}
\end{vmatrix}.
$$

> Note that the order of $(u, v)$ matters  as it will change the handedness of the coordinate space and also the order of integration (I believe?).


## Specialisation to $\R\to\R$ result

Given a single variable coordinate change, the [[Jacobian]] simplifies to the following,

$$
\left|
\parfrac{(x)}{(u)}
\right| =
\begin{vmatrix}
\parfrac{x}{u}
\end{vmatrix} = \frac{\d x}{\d u}
$$

which one can clearly see provides the traditional change in variable formula.