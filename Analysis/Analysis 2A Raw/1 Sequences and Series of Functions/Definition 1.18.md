### [[Definition 1.18]]

(Continuity) A function $f:[a,b]\times \R \to \R$ is said to be continuous at $(x_0,t_0) \in [a,b]\times \R$ if for very $\varepsilon >0$ there exists $\delta =\delta (\varepsilon ,x_0,t_0)$ such that for every $(x,t)\in [a,b]\times \R$

$$ \|(x,t)-(x_0,t_0)\|<\delta \quad \Rightarrow \quad |f(x,t) - f(x_0,t_0)| < \varepsilon , $$

where $\|(x,t)-(x_0,t_0)\| = \sqrt {(x-x_0)^2+(t-t_0)^2}$.

A function $f:[a,b]\times \R \to \R$ is said to be uniformly continuous if for every $\varepsilon >0$ there exists $\delta =\delta (\varepsilon )$ such that for every $(x,t), (y,s)\in [a,b]\times \R$:

$$ \|(x,t)-(y,s)\|<\delta \quad \Rightarrow \quad |f(x,t) - f(y,s)| < \varepsilon , $$

where $\|(x,t)-(y,s)\| = \sqrt {(x-y)^2+(t-s)^2}$.

In particular, a continuous function on a ‘compact’ set $[a,b]\times [c,d]$ is uniformly continuous.