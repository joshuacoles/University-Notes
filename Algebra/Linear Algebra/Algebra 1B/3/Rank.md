# 3.3 Rank

For the rest of the chapter, assume all vector spaces to be finite dimensional.

## Definition 1  
The rank of a linear map $\phi:Varrow W$ is

$$
 \rank  \phi = dim  \Im  \phi
$$

Lemma 2.  
Given $\phi:Varrow W$ and isomorphisms

$$
f : V^{′} arrow _{}^{\cong} V, g : W^{′} arrow _{}^{\cong} W,
$$

let $(\phi)^{′}=g^{- 1}\circ\phi\circ f:V^{′}arrow W^{′}.$ Then

$$
 \rank  (\phi)^{′} =  \rank  \phi .
$$

### Proof

First, since $f:V^{′}arrow V$ is a bijection, we have

$$
 \Im  \phi \circ f =  \Im  \phi,
$$

so

$$
 \Im  (g^{- 1} \circ \phi \circ f) = g^{- 1} (\Im  \phi) .
$$

As $g^{- 1}$ is an isomorphism

$$
 \Im  \phi arrow _{}^{\cong}  \Im  g^{- 1} (\Im  \phi) =  \Im  (g^{- 1} \circ \phi \circ f) =  \Im  (\phi)^{′} .
$$

Therefore

$$
dim  \Im  \phi = dim  \Im  (\phi)^{′}, \text{ i.e. }  \rank  \phi =  \rank  (\phi)^{′} .
$$

□

Note.  

*   This lemma implies that composition with isomorphisms preserves the rank of a linear map.
*   Recall that in Definition [1.4.8](MA10210se4.html#x7-12001r8), we define the rank of a matrix $A$ as the number of pivots in any RREF (or REF) of $A$ . The following proposition shows that $ \rank A$ is the same as $ \rank (\phi)_{A}$, where $(\phi)_{A}$ is the linear map induced by $A$ . In particular, it implies that $ \rank A$ in Definition [1.4.8](MA10210se4.html#x7-12001r8) is well-defined.

## Proposition 3  
Let $A$ be an $m\times n$ -matrix. Then $ \rank A= \rank (\phi)_{A}$ .

### Proof

Denote by $f_{1},\dots,f_{n}$ and $e_{1},\dots,e_{m}$ the standard bases of $(\F)^{n}$ and $(\F)^{m}$, respectively.

(1) We first prove that if $A$ is in RREF and has $k$ pivots, then $ \rank (\phi)_{A}$ is exactly the number $k$ . Indeed, $b\in \Im (\phi)_{A}$ means that the linear system $Ax=b$ has a solution, and we know that this system is consistent if and only if $b_{i}=0$ for $i>k$, i.e. $b$ is a linear combination of $e_{1},\dots,e_{k}$ . Observe also that

$$
Af_{i}=e_{i}\in \Im (\phi)_{A}
$$

for $i\leq k$, Thus $ \Im (\phi)_{A}$ has a basis $e_{1},\dots,e_{k}$, and so

$$
dim \Im (\phi)_{A}=k= \rank A,
$$

as required.

(2) Now assume that $A$ is an arbitrary $m\times n$ -matrix and $PA$ is a RREF of $A$ (with $P$ invertible), then Lemma [3.3.2](#x19-30002r2)   implies that

$$
 \rank (\phi)_{A}= \rank (\phi)_{P}(\phi)_{A}.
$$

As $(\phi)_{P}(\phi)_{A}=(\phi)_{P A}$, we have

$$
 \rank  (\phi)_{A} =  \rank  (\phi)_{P A} = \text{number of pivots of } P A =  \rank  A
$$

as required, where the second equality follows from (1) and the last one is the definition of $ \rank A$ . □

## Corollary 4  

(a)

If $A\in M_{m, n}(\F)$ represents $\phi:Varrow W$ with respect to any bases $\alpha$ of $V$ and $\beta$ of $W$, then

$$
 \rank  A =  \rank  \phi .
$$

(b)

If $A,B\in M_{m, n}(\F)$ are equivalent, i.e.  $B=P^{- 1}AQ$ for $P,Q$ invertible, then

$$
 \rank  A =  \rank  B .
$$

### Proof

(a)

Applying Lemma [3.3.2](#x19-30002r2) with $V^{′}=(\F)^{m}$, $f=(\phi)_{\alpha}$, $W^{′}=(\F)^{n}$ and $g=(\phi)_{\beta}$ shows that

$$
 \rank  (\phi)_{A} =  \rank  \phi .
$$

(b)

It follows from Proposition [3.3.3](#x19-30003r3) and Lemma [3.3.2](#x19-30002r2). □

## Remark 5  
By Q6.6, if $ \rank A=r$, then $A$ is equivalent to the matrix

$$
\begin{align}
\begin{pmatrix} I_{r} 0 \\ 0 0 \end{pmatrix} .
\end{align}
$$

Thus together with Collorary [(b)](#x19-300062), we can deduce that two matrices $A$ and $B$ of equal size are equivalent if and only if they have the same rank.

## Proposition 6  
For a matrix $A\in M_{m, n}(\F)$, $ \rank A$ is equal to

(a)

$dim\langle cols (A) \rangle$, ‘column rank’

(b)

$dim\langle rows (A) \rangle$, ‘row rank’

(c)

Smallest $r$ such that

$$
A = B C \text{for some} B \in M_{m, r} (\F), C \in M_{r, n} (\F) .
$$

### Proof

(a) is immediate from the definition of rank and Proposition [3.3.3](#x19-30003r3) as

$$
 \Im  (\phi)_{A} = \langle cols (A) \rangle .
$$

It remains to prove (b) and (c). Suppose $A=BC$ with $B\in M_{m, r}(\F),C\in M_{r, n}(\F)$ . Then

$$
\begin{align}
(col)_{k}(A) &= \sum_{j = 1}^{r}c_{j k}(col)_{j}(B) \text{(1)}
\end{align}
$$

and

$$
\begin{align}
(row)_{i}(A) &= \sum_{j = 1}^{r}b_{i j}(row)_{j}(C). \text{(2)}
\end{align}
$$

Therefore

$$
\langle cols (A) \rangle \leq \langle cols (B) \rangle \text{ and } \langle rows (A) \rangle \leq \langle rows (C) \rangle .
$$

Hence, in any factorisation

$$
\begin{align}
r\geq dim\langle cols (B) \rangle= \rank B\geq col \rank A= \rank A \text{(3)}
\end{align}
$$

and

$$
\begin{align}
r\geq dim\langle rows (C) \rangle\geq row \rank A. \text{(4)}
\end{align}
$$

Now we choose $B$ so that $cols(B)$ is a basis of $\langle cols (A) \rangle$ and ([3.3.1](#x19-30014r3.3.1)) determines a (unique) $C$ such that we have a factorization

$$
\begin{align}
A=BC \text{(5)}
\end{align}
$$

In this case $r= \rank A$ and ([3.3.3](#x19-30016r3.3.3)) implies that this $r$ is minimal. So (c) follows.

Next note that ([3.3.4](#x19-30017r3.3.4)) and ([3.3.5](#x19-30018r3.3.5)) imply that

$$
\begin{align}
 \rank A\geq row \rank A. \text{(6)}
\end{align}
$$

On the other hand, we can choose $C$ so that $rows(C)$ is a basis of $\langle rows (A) \rangle$, then $B$ is determined by ([3.3.2](#x19-30015r3.3.2)). Thus there is a factorisation with $r=row \rank A$ and so

$$
\begin{align}
row \rank A\geq \rank A, \text{(7)}
\end{align}
$$

Now by ([3.3.6](#x19-30019r3.3.6)) and ([3.3.7](#x19-30020r3.3.7)), (b) follows. □

Since the rows of $A$ are the same as the columns of the transpose $A^{T}$, the equality of row rank and column rank can also be phrased as

## Corollary 7  

$$
 \rank  (A) =  \rank  (A^{T}) .
$$

The proof of Proposition [3.3.6](#x19-30010r6) also shows how to find “minimal” factorisations.

## Example 8  
Let $A$ be the matrix $\begin{pmatrix} 1 6 5 \\ 2 7 5 \\ 3 8 5 \\ 4 9 5 \\ 1 6 5 \end{pmatrix}$ .

(1) Denote the column vectors by $v_{1},v_{2},v_{3}$ . Sifting the columns of $A$ gives us a basis $v_{1},v_{2}$ and we have

$$
v_{3}=-v_{1}+v_{2}.
$$

Let $B=\begin{pmatrix} 1 6 \\ 2 7 \\ 3 8 \\ 4 9 \\ 1 6 \end{pmatrix}$ . Then $C=\begin{pmatrix} 1 0 -1 \\ 0 1 1 \end{pmatrix}$ and we have $A=BC$ .

(2) Denote the row vectors by $u_{1},u_{2},\dots,u_{5}$ . Sifting the rows of $A$ gives us a basis $u_{1},u_{2}$ and we have

$$
u_{3} = - u_{1} + 2 u_{2}, u_{4} = - 2 u_{1} + 3 u_{2}, u_{5} = u_{1} .
$$

Let $C=\begin{pmatrix} 1 6 5 \\ 2 7 5 \end{pmatrix}$ . Then $B=\begin{pmatrix} 1 0 \\ 0 1 \\ -1 2 \\ -2 3 \\ 1 0 \end{pmatrix}$ . Again, we have $A=BC$ .

Note.  
(1) An important special case is when $colsB$ is the basis of $\langle cols A \rangle$ obtained by sifting the list $colsA$ . Then $C$ is the matrix that represents

$$
(\phi)_{A} : (\F)^{n} arrow \langle cols A \rangle
$$

with respect to the standard basis for $(\F)^{n}$ and the sifted basis for $\langle cols A \rangle$.

(2) The proof shows that

the factorisation $A=BC$ is ‘minimal’, i.e. when $r= \rank A$ .

$\Leftrightarrow$ $colsB$ are independent, hence a basis for the column space $\langle cols A \rangle$

$\Leftrightarrow$ $rowsC$ are independent, hence a basis for the row space $\langle rows A \rangle$

Then

$$
A x = 0 \Leftrightarrow C x = 0,
$$

as $(\phi)_{B}$ is injective. So $C$ gives an equivalent linear system.

[[next](MA10210se15.html)] [[prev](MA10210se13.html)] [[prev-tail](MA10210se13.html#tailMA10210se13.html)] [[front](MA10210se14.html)] [[up](MA10210ch3.html#MA10210se14.html)]