# 2.6 Change of basis

In this section, we discuss how change of basis affects coordinate vectors and matrices representing linear maps/operators.

## Definition 1  
Let $\alpha:v_{1},\dots,v_{m}$ and $(\alpha)^{′}:v_{1}^{′},\dots,v_{n}^{′}$ be two bases of $V$ . The change of basis matrix from $\alpha$ to $(\alpha)^{′}$ is $P\in M_{m, n}(\F)$ such that

$$
v_{j}^{′} = \underset{i}{\sum} p_{i j} v_{i} .
$$

## Remark 2  
Following the definition of $P$, the following diagram commutes  

$e_{j}$

 

 

$(\searrow)^{(\phi)_{(\alpha)^{′}}}$

 

 

$(\phi)_{P}↓$

$v_{j}^{′}=(\sum)_{i}p_{i j}v_{i}$

 

 

$(\nearrow)_{(\phi)_{\alpha}}$

 

 

$(\sum)_{i}p_{i j}e_{i}$,

i.e., $(\phi)_{(\alpha)^{′}}=(\phi)_{\alpha}\circ(\phi)_{P}$ . This gives an alternative way to describe the change of basis matrix from $\alpha$ to $(\alpha)^{′}$,

$$
(\phi)_{P} = \phi_{\alpha}^{- 1} (\phi)_{(\alpha)^{′}}
$$

Note.  

*   By definition, $(col)_{j}(P)$ is the coordinate vector representing the basis element $v_{j}^{′}$ with respect to the basis $\alpha$ . This tells us how to find the change of basis matrix $P$ .
*   $(\phi)_{(\alpha)^{′}}=(\phi)_{\alpha}\circ(\phi)_{P}$ implies $(\phi)_{P}=\phi_{\alpha}^{- 1}(\phi)_{(\alpha)^{′}}$, which is an isomorphism. So $P$ is invertible and thus square, i.e. $m=n$ . Consequently, the two bases of $V$ have the same number of elements and so all basis of a vector space have the same number of basis.
*   $(\phi)_{(\alpha)^{′}}=(\phi)_{\alpha}\circ(\phi)_{P}$ implies $(\phi)_{\alpha}=(\phi)_{(\alpha)^{′}}\circ(\phi)_{P^{- 1}}$ . So by definition,the change of basis matrix from $(\alpha)^{′}$ to $\alpha$ is $P^{- 1}$ .  
    

#### [How does change of basis affect coordinate vectors?](MA10210li1.html#QQ2-15-25)

Let $\alpha:v_{1},\dots,v_{n}$ and $(\alpha)^{′}:v_{1}^{′},\dots,v_{n}^{′}$ be two bases of the same vector space $V$ . For some $u\in V$, let $x\in(\F)^{n}$ be the coordinate vector that represents $u$ with respect to $\alpha$, and $x^{′}\in(\F)^{m}$ the coordinate vector that represents $u$ with respect to  $(\alpha)^{′}$.

By definition we have

$$
u = \underset{i}{\sum} x_{i} v_{i} = (\phi)_{\alpha} (x)
$$

and

$$
u = \underset{i}{\sum} x_{i}^{′} v_{i}^{′} = (\phi)_{(\alpha)^{′}} (x^{′}) .
$$

So

$$
x = \phi_{\alpha}^{- 1} ((\phi)_{(\alpha)^{′}} (x^{′})), \text{ i.e. } x = P x^{′} .
$$

#### [How does change of basis affect the matrix representing a linear map/operator?](MA10210li1.html#QQ2-15-26)

## Proposition 3  
Let $\alpha:v_{1},\dots,v_{n}$ and $(\alpha)^{′}:v_{1}^{′},\dots,v_{n}^{′}$ be two bases of $V$ with $P$ the change of basis matrix from $\alpha$ to $(\alpha)^{′}$ and $\beta:w_{1},\dots .w_{m}$ and $(\beta)^{′}:w_{1}^{′},\dots .w_{m}^{′}$ bases of $W$ with $Q$ the change of basis matrix from $\beta$ to $(\beta)^{′}$. Let $\psi:Varrow W$ be a linear map represented by the matrix $A\in M_{m, n}(\F)$ with respect to the bases $\alpha$, $\beta$, and by $A^{′}\in M_{m, n}(\F)$ with respect to the bases $(\alpha)^{′}$, $(\beta)^{′}$. Then

$$
A^{′} = Q^{- 1} A P .
$$

### Proof Using the following diagram,

$(\F)^{n}$

$arrow _{}^{(\phi)_{A^{′}}}$

$(\F)^{m}$

 

 

 

 

 

$(\searrow)^{(\phi)_{(\alpha)^{′}}}$

$(\swarrow)^{(\phi)_{(\beta)^{′}}}$

 

 

 

 

 

$(\phi)_{P}↓$

$Varrow _{}^{\psi}W$

$↓(\phi)_{Q}$

 

 

 

 

 

$(\nearrow)^{(\phi)_{\alpha}}$

$(\nwarrow)^{(\phi)_{\beta}}$

 

 

 

 

 

$(\F)^{n}$

$arrow _{}^{(\phi)_{A}}$

$(\F)^{m}$

we have

$$
\begin{align}
(\phi)_{A} &= \phi_{\beta}^{- 1}\circ\psi\circ(\phi)_{\alpha}\text{ and }  \\ (\phi)_{A^{′}} &= (((\phi)_{(\beta)^{′}}))^{- 1}\circ\psi\circ(\phi)_{(\alpha)^{′}}  \\ &= (((\phi)_{(\beta)^{′}}))^{- 1}\circ(\phi)_{\beta}\circ(\phi)_{A}\circ\phi_{\alpha}^{- 1}\circ(\phi)_{(\alpha)^{′}}  \\ &= ((((\phi)_{(\beta)^{′}}))^{- 1} \circ (\phi)_{\beta})\circ(\phi)_{A}\circ(\phi_{\alpha}^{- 1} \circ (\phi)_{(\alpha)^{′}})  \\ &= (((\phi)_{Q}))^{- 1}\circ(\phi)_{A}\circ(\phi)_{P}  \\ &= ((\phi)_{Q^{- 1}})\circ(\phi)_{A}\circ(\phi)_{P}[ \text{Lemma } 1 . 4 . 2 ]  \\ &= (\phi)_{Q^{- 1} A P}.[ \text{Lemma } 1 . 3 . 4 ] 
\end{align}
$$

So by Proposition 1.3.5, $A^{′}=Q^{- 1}AP$, as required. □

## Corollary 4  
If $\psi:Varrow V$ is a linear operator represented by $B\in M_{n, n}(\F)$ wrt $\alpha$ and $B^{′}\in M_{n, n}(\F)$ wrt  $(\alpha)^{′}$, then

$$
B^{′} = P^{- 1} B P .
$$

## Example 5  
Let $A=\begin{pmatrix} 1 1 \\ 1 1 \end{pmatrix}$, $\psi=(\phi)_{A}:\R^{2}arrow\R^{2}$ and $\alpha:v_{1}=e_{1}+e_{2}$, $v_{2}=e_{1}-e_{2}$ .

1.

The list $\alpha$ is a basis (check!).

2.

$(\phi)_{\alpha}(v_{1})=\begin{pmatrix} 1 1 \\ 1 1 \end{pmatrix}\begin{pmatrix} 1 \\ 1 \end{pmatrix}=\begin{pmatrix} 2 \\ 2 \end{pmatrix}=2v_{1}+0v_{2}$ .

3.

$(\phi)_{\alpha}(v_{2})=\begin{pmatrix} 1 1 \\ 1 1 \end{pmatrix}\begin{pmatrix} 1 \\ -1 \end{pmatrix}=\begin{pmatrix} 0 \\ 0 \end{pmatrix}=0v_{1}+0v_{2}$ .

Therefore with respect to the basis $\alpha$, the linear operator $\psi$ is represented by the matrix $\begin{pmatrix} 2 0 \\ 0 0 \end{pmatrix}$ . This is a diagonal matrix and it is “nicer/simpler” than the matrix $A$ representing the linear operator $\psi$ . For instance it is easier to compute any power of a diagonal matrix.

## Definition 6  

1.

Two matrices $A,A^{′}\in M_{m, n}(\F)$ are equivalent iff $\exists$ $Q\in GL_{m}(\F)$ and $P\in GL_{n}(\F)$ (i.e.  $P$ and $Q$ are invertible matrices) such that

$$
A^{′} = Q^{- 1} A P .
$$

2.

Two matrices $A,A^{′}\in M_{n, n}(\F)$ are similar iff $\exists$ $P\in GL_{n}(\F)$ such that

$$
A^{′} = P^{- 1} A P .
$$

So change of basis changes the matrix $A$ representing a linear map to a matrix equivalent to $A$, and the matrix $B$ representing a linear operator to a matrix similar to $B$ . We will see later that

*   Two matrices of the same size are equivalent if and only if they have the same rank (which you can compute using Gaussian elimination)
*   Two square matrices are similar only if their eigenvalues are equal. Note that this is not an “if and only if” statement. Questions about similarity are in some sense more subtle than questions about equivalence.

[[prev](MA10210se10.html)] [[prev-tail](MA10210se10.html#tailMA10210se10.html)] [[front](MA10210se11.html)] [[up](MA10210ch2.html#MA10210se11.html)]