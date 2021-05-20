### Example 47

(Solving algebraic equations) Show that the equation



$$  x^7 - x^3 -21 x+5 =0 $$

has a unique solution in the interval $[0,1]$.

Note that the equation (2.2) can be equivalently rewritten as



$$ x= \frac {x^7 - x^3 +5}{21}; $$

so, by defining $f:[0,1] \to \R$ as $f(x):= \frac {x^7 - x^3 +5}{21}$, the original equation (2.2) can be written as a fixed point problem $x=f(x)$.

In particular, there exists a unique solution to (2.2) if and only if there is a unique fixed point of $f$ in $[0,1]$.

This would be a direct consequence of the Contraction Mapping Theorem, **provided** $f$ is a contraction from a complete metric space in itself, so all is left is to verify this:

- • We prove that $f([0,1])\subset [0,1]$: Note that, for every $x\in [0,1]$ we have

  $$ 0< \frac {- 1 +5}{21} \leq f(x)= \frac {x^7 - x^3 +5}{21} \leq \frac {1+5}{21} <1, $$

  which proves the claim.

- • Clearly $([0,1],|\cdot |)$ is a complete metric space, since $[0,1]$ is a closed subset of $\R$ and $(\R ,|\cdot |)$ is a complete metric space (by Problem Sheet 7, Practice question 1).
- • Finally, we need to prove that $f$ is a contraction, namely that there exists $0<\alpha <1$ such that $|f(x) - f(y)| \leq \alpha |x-y|$ for every $x,y\in [0,1]$.

  To see this, we apply the Mean Value Theorem ([[Theorem 0.19]]) to $f$ (which is differentiable with continuous derivative in particular) to obtain that

  $$ f(x) - f(y) = f’(\xi )(x-y), \quad \textrm {for some } \xi \in [x,y] \quad (\textrm {or } \xi \in [y,x] \, \textrm {if } x>y). $$

  Hence

  

  $$  |f(x) - f(y)| \leq |f’(\xi )| |x-y| \quad \forall \, x,y \in [0,1]. $$

  Now note that we can estimate $f’$ as we estimated $f$ previously, in $[0,1]$:

  $$ \frac {- 3}{21} \leq f’(\xi ) = \frac {7x^6 - 3x^2}{21} \leq \frac {7}{21} \quad \Rightarrow \quad \|f’\|_{\infty } = \sup _{\xi \in [0,1]} |f’(\xi )| <1. $$

  From (2.4) it follows immediately that

  $$ |f(x) - f(y)| \leq \alpha |x-y| \quad \forall \, x,y \in [0,1], \quad \alpha = \|f’\|_{\infty } <1, $$

  hence $f$ is a contraction.