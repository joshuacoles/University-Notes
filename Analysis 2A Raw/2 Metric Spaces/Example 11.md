### Example 11

The following are also metrics on $\R ^n$:



$$ \begin{align*} d*1(x,y):= \|x-y\|_1 = \sum *{i = 1}^n |x_i - y_i|, \end{align*} $$ also called the $\ell ^1$ metric (also referred to informally as the “taxi-cab" metric, since it’s the distance one would travel by taxi on a rectangular grid of streets);



$$ \begin{align*} d*\infty (x,y):= \|x-y\|*\infty = \max _{i \in \{1,\ldots ,n\}} |x_i - y_i|, \end{align*} $$ also called the $\ell ^\infty$ metric, or the maximum metric. More generally, for $1 \le p < \infty$, we have a metric

$$ d*p(x,y):= \|x-y\|_p = \left (\sum *{i = 1}^n |x_i - y_i|^p\right )^{1/p} $$

on $\R ^n$, but this is more difficult to verify (the triangle inequality does not follow from the Cauchy-Schwarz inequality, but from the Minkowski inequality). For $p < 1$, $d_p$ does not define a metric since the triangle inequality fails! E.g., in $\R ^2$, for $p=\frac 12$, and $x=(1,0)$, $z=(0,-1)$, $y=(0,0)$, we have

$$ \|x-z\|_{\frac 12} = \|(1,1)\|_{\frac 12} = (1+1)^2 = 4; \quad \|x-0\|_{\frac 12} + \|0-z\|_{\frac 12} = 2. $$