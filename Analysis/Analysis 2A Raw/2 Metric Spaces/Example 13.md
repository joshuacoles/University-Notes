### Example 13

(Railway metric) Define $d : \R ^n \times \R ^n \to \R$ as follows: for $x,y \in \R ^n$,

$$ d(x,y) = \begin {cases} \|x - y\| & \text {if $x,y,0$ are collinear}, \\ \|x\| + \|y\| & \text {otherwise}. \end {cases} $$

E.g., for $n = 2$,



$$ \begin{align*} d((1,1),(2,2)) & = \sqrt {2}, \\ d((1,1),(-2,2)) & = 3\sqrt {2}. \end{align*} $$ (_Curiosity:_ It is called the Railway metric in Britain (and in France), because all the train lines radiate from London (and Paris), located at the origin. To take a train from town $x$ to town $y$, one has to take a train from $x$ to $0$ and then take a train from $0$ to $y$, unless $x$ and $y$ are on the same line, when one can take a direct train.)