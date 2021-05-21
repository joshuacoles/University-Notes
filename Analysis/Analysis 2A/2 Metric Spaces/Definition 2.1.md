### [[Definition 2.1]]

Let $X$ be a set. A function $d : X \times X \to \R$ is called a **metric** if it satisfies the following properties:

- (1) $d(x,y) \ge 0$ for all $x,y \in X$,
- (2) $d(x,y) = 0$ if, and only if, $x = y$,
- (3) $d(x,y) = d(y,x)$ for all $x,y \in X$ (symmetry),
- (4) $d(x,z) \le d(x,y) + d(y,z)$ for all $x,y,z \in X$ (triangle inequality).

The pair $(X,d)$ is then called a **metric space**.

Sometimes $d$ is called ‘distance function’ rather than ‘metric’. Often you can find statements such as ‘$X$ is a metric space’; but this makes only sense if it is clear what the corresponding metric is.