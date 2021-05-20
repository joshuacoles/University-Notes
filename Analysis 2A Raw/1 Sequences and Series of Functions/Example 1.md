### Example 1

Let $f_k: [0,1] \to \R$ be defined as

$$ f_k(x)= \frac {kx}{1+k^2x^2}. $$

Then clearly the sequence $(f_k)_{k\in \N }$ converges pointwise to the function $f:[0,1] \to \R$ defined as $f(x) = 0$ for every $x\in [0,1]$:

For $x=0$: $f_k(0)=0$ for all $k \in \N$. For $x>0$, by the algebra of limits:

$$ \lim f_k(x)= \lim \frac {kx}{1+k^2x^2}= \lim \frac {1}{k} \frac {x}{1/k+x^2}=0 \frac {1}{x}=0 $$

The convergence is however not uniform as $f_k(\frac {1}{k})=\frac {k\frac {1}{k} }{1+ k^2 \left (\frac {1}{k}\right )^2}= \frac {1}{2}$.