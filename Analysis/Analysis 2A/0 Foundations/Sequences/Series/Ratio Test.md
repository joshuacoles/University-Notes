# Ratio Test

Let $\seq \alpha k$ be [[Real Sequence]] such that $\alpha_k \ne 0$ for a sufficiently large $k$ then define

$$
L = \lim_{k \to \infty} \abs{\frac {\alpha_{k+1}}{\alpha_k}}
$$

Then the series

$$ \sum_{k = 1}^\infty \alpha_k $$

- $L < 1$, the series [[Absolute Convergence|Converges Absolutely]].
-  $L > 1$ then the series is divergent.
-  $L = 1$ or the limit fails to exist then the test in **inconclusive**.

#proof-needed

## Failure to Exist

In the cases that the limit above fails to exist then we can refine the test by instead focusing on the limit inferior and limit superior. Defining the new terms,

$$
r = \liminf_{k \to \infty } \abs{
	\frac {\alpha_{k+1}}{\alpha_k}
}

\qquad

R = \limsup_{k \to \infty } \abs{
	\frac {\alpha_{k+1}}{\alpha_k}
}
$$

We say

- If $R < 1$ then the series converges absolutely.
- If $r > 1$ then the series diverges.
- If $\abs{\frac {\alpha_{k+1}}{\alpha_k}} \ge 1$ for all $k$ sufficiently large then the series also diverges.
- Else the test is inconclusive.

### Simplification to the original test

If the standard limit as seen in the original test exists then $r = R$ and hence the modified test becomes the original.
