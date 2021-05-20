## 2.2 Directional derivatives, gradients, and potentials

### 2.2.1 Directional derivatives and gradients

- [[2.13 Gradient]]
- [[2.14 Properties of the Gradient]]

The components of the gradient $\nabla f$ quantify the rate of change of $f$ in each of the Cartesian directions. In order to obtain the rate of change in a typical direction, not aligned with an axis, we define the _directional derivative_.

- [[2.15 Directional Derivative]]

The link between the directional derivative and the gradient comes from the next important lemma.

- [[2.16 Link between directional derivative and gradient]]

Note that if $\nabla f (\boldx _0)=0$ then the directional derivative $D_{\bolda }f(\boldx _0)=0$ for every direction $\bolda$. Then we say that $f$ has a _stationary point_ (this is the analogue in $\R ^3$ of a point where $f’(x_0)=0$ for a function of a single variable $f:\R \rightarrow \R$).

- [[2.17 Gradient as direction of steepest descent]]
- [[2.18 Gradient is Perpendicular to Contours]]

### 2.2.2 A note on conservative fields and potentials

In physics you will often deal with *conservative* forces, a type of path independent Vector Field. These being the main mathematically expression for Forces, for example $\boldB(\boldx,t)$ being the Magnetic Field and $\boldE(\boldx, t)$ being the Electric Field.

There are multiple equivalent definitions of these kinds of vector fields, but we will define them mathematically via the existence of a scalar potential, $\phi$. [[4.3 Properties of Conservative Fields]] presents a number of equivalent features of being “conservative", which serves to unify different starting points.

- [[2.19 Conservative Fields]]
	- [[2.20 Example of a Potential]]