# 3.1 [Dimension](MA10210.html#QQ2-17-28)

## Theorem 1  

1. If $v_{1},\dots,v_{n}$ in $V$ are independent and $w_{1},\dots,w_{m}$ span $V$, then $n\leq m$ .

2. If $v_{1},\dots,v_{n}$ and $w_{1},\dots,w_{m}$ are bases of $V$, then $n=m$ .

### Proof

1. As $w_{1},\dots,w_{m}$ span $V$ we can write

$$
v_{j} = \sum_{i = 1}^{m} a_{i j} w_{i}
$$

giving

$$
A = (a_{i j}) \in M_{m, n} (\F) .
$$

Consider $x\in N_{A}$, i.e.  $Ax=0$ .

Then

$$
\sum_{j = 1}^{n} x_{j} v_{j} = \sum_{i = 1}^{m} (\sum_{j = 1}^{n} a_{i j} x_{j}) w_{i} = 0
$$

$$
\Rightarrow x = 0
$$

as $v_{1},\dots,v_{n}$ are independent.

Thus $N_{A}=\{ 0 \}$ and so $n\leq m$ by the Fundamental Lemma (Lemma [1.2.6](MA10210se2.html#x5-6001r6)).

2.  Apply (a) twice:

$v_{1},\dots,v_{n}$ are independent and $w_{1},\dots,w_{m}$ span $V$ $\Rightarrow$ $n\leq m$ .

$w_{1},\dots,w_{m}$ are independent and $v_{1},\dots,v_{n}$ span $V$ $\Rightarrow$ $m\leq n$ . So $m=n$ . □

Theorem [3.1.1](#x17-28001r1) (b) implies any two bases of a vector space have the same number of elements. So we can define the dimension of a vector space as follows.

## Definition 2  

1. A vector space $V$ is finite dimensional iff it has a finite basis.

2. The dimension $dimV$ is the number of vectors in any basis of $V$ .

Note.  
We have proved separately that dimension is well-defined and that invertible matrices are square. Here we remark that these two statements can be deduced from each other. That is, they are equivalent.

” $\Rightarrow$”: Recall from Example [1.4.5](MA10210se4.html#x7-10006r5) that $(\F)^{n}$ has a standard basis

$$
(\{e_{i} = (col)_{i} (I)\})_{i = 1}^{n},
$$

so $dim(\F)^{n}=n$ .

If $A\in M_{n, m}(\F)$, then we have

$$
\begin{align}
A\text{ invertible} \Leftrightarrow (\phi)_{A}\text{ bijection}  \\ \Leftrightarrow colsA\text{ are a basis of }(\F)^{m} 
\end{align}
$$

Thus ‘dimension well-defined’ $\Rightarrow m=dim(\F)^{m}=\text{\# }colsA=n$, i.e.  $A$ is square.  

” $\Leftarrow$”: Suppose that $V$ has bases of sizes $m$ and $n$, respectively. Then $V\cong(\F)^{m}$ and $V\cong(\F)^{n}$, so $(\F)^{m}\cong(\F)^{n}$ and the isomorphism is defined by an invertible $n\times m$ matrix. As invertible matrices are square, we have $m=n$ . That is, all bases of $V$ have the same number of elements and so dim $V$ is well-defined.

## Example 3  

1. $dimM_{m, n}(\F)=mn$ as

$$
M_{m, n} arrow _{}^{\cong} (\F)^{m n} : (a_{i j}) arrow tail (a_{1 1}, \dots, a_{1 n}, \dots, a_{m 1}, \dots, a_{m n})
$$

This is the basis isomorphism for the basis of ’elementary matrices’ $E_{i j}$ with one $1$ and all other entries $0$, e.g.

$$
\begin{align}
E_{2 3} = \begin{pmatrix} 0 0 0 \\ 0 0 1 \\ 0 0 0 \end{pmatrix} \in M_{3, 3} (\F)
\end{align}
$$

2. $$
V = \{f \in C^{\in fty} (\R) : \frac{d^{2} f}{d x^{2}} = (\lambda)^{2} f\}
$$

is a 2-dimensional space: it is shown in Methods IA that we could pick e.g.  $\alpha:e^{\lambda x},e^{- \lambda x}$ or $\beta:cosh\lambda x,sinh\lambda x$ as basis. Note that

$$
\begin{align}
 cosh\lambda x=\frac{1}{2}e^{\lambda x}+\frac{1}{2}e^{- \lambda x}  \\ sinh\lambda x=\frac{1}{2}e^{\lambda x}-\frac{1}{2}e^{- \lambda x} 
\end{align}
$$

so the change of basis matrix from $\alpha$ to $\beta$ is

$$
\begin{align}
\begin{pmatrix} 1/2 1/2 \\ 1/2 -1/2 \end{pmatrix}
\end{align}
$$
