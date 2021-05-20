### Example 45

On $\R ^2$, consider three different metrics:

- • the Euclidean metric $d_2(x,y) = \sqrt {(x_1 - y_1)^2 + (x_2 - y_2)^2}$,
- • the metric $d_1(x,y) = |x_1 - y_1| + |x_2 - y_2|$, and
- • the railway metric

  $$ d_{\mathrm {R}}(x,y) = \begin {cases} d_2(x,y) & \text {if $x$, $y$, and $0$ are collinear}, \\ d_2(x,0) + d_2(y,0) & \text {else}. \end {cases} $$

This gives rise to three metric spaces: $(\R ^2,d_2)$, $(\R ^2,d_1)$, and $(\R ^2,d_{\mathrm {R}})$. Consider the identity map

$$ \id : \R ^2 \to \R ^2, \quad \, \id (x_1,x_2) = (x_1,x_2). $$

The continuity of $\id$ depends on the metrics that we use.

First regard $\id$ as a map from $(\R ^2,d_2)$ to $(\R ^2,d_1)$. If $d_2(x,y) < \delta$, then

$$ d_1(x,y) = |x_1 - y_1| + |x_2 - y_2| < 2\delta , $$

which we can make arbitrarily small by choosing $\delta$ small enough. Hence $\id : (\R ^2,d_2) \to (\R ^2,d_1)$ is continuous.

Similarly, we see that $\id : (\R ^2,d_1) \to (\R ^2,d_2)$ is continuous.

Now we regard $\id$ as a map from $(\R ^2,d_2)$ to $(\R ^2,d_{\mathrm {R}})$. Consider the point $(1,0) \in \R ^2$. For $\eta \in \R$, also consider the point $(1,\eta ) \in \R ^2$. We have

$$ d_2((1,0),(1,\eta )) = |\eta | $$

and

$$ d_{\mathrm {R}}((1,0),(1,\eta )) = 1 + \sqrt {1 + \eta ^2} \quad \text {if $\eta \not = 0$}. $$

The latter does not become small when $\eta \to 0$, but the former does. We conclude that the map $\id : (\R ^2,d_2) \to (\R ^2,d_{\mathrm {R}})$ is not continuous.

On the other hand, it is possible (and not too difficult) to show that $\id : (\R ^2,d_{\mathrm {R}}) \to (\R ^2,d_2)$ is continuous.

There are also stronger versions of continuity.