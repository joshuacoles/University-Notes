# 2.2 Subspaces and linear maps

## Definition 1.  linear subspace
Let $V$ be a vector space over $\F$ . A subset $U\subseteq V$ is a linear subspace (written $U\leq V$) if:

1. $0\in U$ ;

2. $\forall\lambda,\mu\in\F$, $v,w\in U$,
$$
\lambda v + \mu w \in U .
$$

For instance, lines through the origin in $\R^{2}$ are subspaces of $\R^{2}$, as seen in Chapter 1.

Note.  

*   Equivalently, $U$ is an additive subgroup of $V$ closed under scalar multiplication, i.e. 
    
    $$
    \forall \lambda \in \F, v \in U, \text{ we have } \lambda v \in U .
    $$
    
*   A subspace is itself a vector space under the restricted operations.
*   If $V=(\F)^{n}$, then Definition [2.2.1](#x11-19001r1) coincides with Definition [1.4.1](MA10210se4.html#x7-10001r1).

Terminology. $\{ 0 \}$ and $V$ are always subspaces of $V$ . We call $\{ 0 \}$ the trivial subspace. We call any subspace $U\neq V$ a proper subspace.

### Examples

Some interesting subspaces of $\R^{\R}$ :

1. $C^{0}(\R)=\{ \text{continuous functions } \R arrow \R \}$.

2. $C^{k}(\R)=\{ k \text{ times differentiable functions } \R arrow \R \}$ ($k\geq 1$).

3. $C^{\in fty}(\R)=\{ \text{infinitely differentiable functions } \R arrow \R \}$.

## Definition 3.  linear map

For $V$ and $W$ vector spaces over $\F$, a function $\psi:Varrow W$ is a linear map if $\forall\lambda,\mu\in\F,v,w\in V$,

$$
\psi (\lambda v + \mu w) = \lambda \psi (v) + \mu \psi (w) .
$$

### Note.  

*   Equivalently, $\psi$ is a homomorphism of additive groups (i.e. $\psi(v + w)=\psi(v)+\psi(w)$) that respects scalar multiplication
    
    $$
    \psi (\lambda v) = \lambda \psi (v) .
    $$
    
*   Hence if $\psi$ is a linear map, then
    
    $$
    \psi (0) = 0 \text{and} \psi (- v) = - \psi (v) .
    $$
    
*   $\psi(\sum_{i = 1}^{n} (\lambda)_{i} v_{i})=\sum_{i = 1}^{n}(\lambda)_{i}\psi(v_{i}).$

### Example 4.  

1. $(\phi)_{A}:(\F)^{n}arrow(\F)^{m}:xarrow tailAx=\sum_{i = 1}^{n}x_{i}(col)_{i}(A)$ is a linear map for any $A\in M_{m, n}(\F)$ .

2. For any list of vectors $\alpha:v_{1},\dots,v_{n}$ in $V$, $(\phi)_{\alpha}:(\F)^{n}arrow V,xarrow tail\sum_{i = 1}^{n}x_{i}v_{i}$ is a linear map.

3. The formal derivative $D:\F[ X ]arrow\F[ X ],P=\sum_{i = 0}^{n}a_{i}X^{i}arrow tail\frac{d P}{d X}=\sum_{i = 1}^{n}ia_{i}X^{i - 1}$ is a linear map as

$$
\frac{d}{d x} (P + Q) = \frac{d P}{d X} + \frac{d Q}{d X}
$$

and

$$
\frac{d}{d X} (\lambda P) = \lambda \frac{d P}{d X}.
$$

Let $V_{k}=\{ \text{polynomials of degree  }\leq k \}$ is a subspace of $\F[ X ]$ . Then $D$ restricts to a linear map $V_{k}arrow V_{k - 1}$ .

4.

$\frac{d}{d x}:C^{k}(\R)arrow C^{k - 1}(\R)$ is a linear map for $k\geq 1$ .

### Non-Examples
The following are not linear.

1. The map $f:\Rarrow\R$, $xarrow tailx+1$ is not linear. Since $f(0)=1\neq 0$, we know that $f$ is not a group homomorphism and thus not linear.

2. Similarly, the map $g:\R^{2}arrow\R^{3}$, $(x, y)arrow(x + 1, x + y)$ is not linear.

3. The map $h:\R^{2}arrow\R$, $(x, y)arrow xy$ is not a linear map, as $h(v + w)=g(v)+g(w)$ does not hold in general. For instance, when $xy\neq 0$,
$$
0 \neq h (x, y), \text{ but } (x, y) = (x, 0) + (0, y) \text{ and } h (x, 0) + h (0, y) = 0 .
$$

## Lemmas on Maps

1. $id:Varrow V$ is a linear map.

2. If $\phi:Varrow W$, $\psi:Warrow U$ are linear maps, then so is $\psi\circ\phi:Varrow U$ .

3. If $\psi:Varrow W$ is a linear bijection, then $(\psi)^{- 1}:Warrow V$ is a linear map.

### Proof.

For any $v,w\in V,\lambda,\mu\in\F$,

1.
$$
\begin{align}
id(\lambda v + \mu w) &= \lambda v+\mu w  \\ &= \lambda id(v)+\mu id(w). 
\end{align}
$$

2.
$$
\begin{align}
\phi\circ\psi(\lambda v + \mu w) &= \phi(\psi (\lambda v + \mu w))  \\ &= \phi(\lambda \psi (v) + \mu \psi (w))  \\ &= \lambda\phi(\psi (v))+\mu\phi(\psi (w))  \\ &= \lambda\phi\circ\psi(v)+\mu\phi\circ\psi(w). 
\end{align}
$$

3.
For $v,w\in W$, $\psi\circ(\psi)^{- 1}=id$ since the map $(\psi)^{- 1}$ is the inverse, then 
$$
\begin{align}
\lambda v+\mu w &= \lambda\psi((\psi)^{- 1} (v))+\mu\psi((\psi)^{- 1} (w))  \\ &= \psi(\lambda (\psi)^{- 1} (v) + \mu (\psi)^{- 1} (w)) 
\end{align}
$$

But also $(\psi)^{- 1}\circ\psi=id$, so

$$
\begin{align}
(\psi)^{- 1}(\lambda v + \mu w) &=(\psi)^{- 1}(\psi (\lambda (\psi)^{- 1} (v) + \mu (\psi)^{- 1} (w))) \\ &=\lambda(\psi)^{- 1}(v)+\mu(\psi)^{- 1}(w) \square
\end{align}
$$

## Corollary 7.  

For a matrix $A\in M_{m, n}(\F)$,

 
$$
A\text{ is invertible} \iff
(\phi)_A : (\F)^n \to (\F)^m \text{ is a bijection}
$$

### Proof.

If $(\phi)_{A}$ is a bijection, then by Lemma [2.2.6](#x11-19009r6)[(c)](#x11-190123), $\phi_{A}^{- 1}$ is a linear map $(\F)^{m}arrow(\F)^{n}$, hence it is $(\phi)_{X}$ for some matrix $X$ by Proposition [1.3.5](MA10210se3.html#x6-9006r5).

Then

$$
\begin{align}
 (\phi)_{X A}=(\phi)_{X}\circ(\phi)_{A}=id=(\phi)_{I}  \\ \Rightarrow XA=I 
\end{align}
$$

Similarly,

$$
(\phi)_{A X} = id \Rightarrow A X = I .
$$

So $A$ is invertible. For the converse, see Lemma [1.5.4](MA10210se5.html#x8-14001r4) [(d)](MA10210se5.html#x8-140064). □

## Definition 8. linear isomorphism

A linear bijection $\phi:Varrow W$ is called (linear) isomorphism, and we say $V$ is isomorphic to $W$, write $V\cong W$ if such an isomorphism exists.

## Remark 9.  

1. Lemma [2.2.6](#x11-19009r6) means that $\cong$ gives an equivalence relation on vector spaces, i.e.  
$$
\begin{align}
V \cong V, \\
V \cong W, W \cong U \Rightarrow V \cong U \\
V \cong W \Rightarrow W \cong V.
\end{align}
$$

2. Recall that according to Lemma [1.5.4](MA10210se5.html#x8-14001r4) [(e)](MA10210se5.html#x8-140075), if $A\in M_{m, n}(\F)$ is invertible then $m=n$ . Therefore Corollary [2.2.7](#x11-19020r7) implies that
$$
(\F)^{n}\cong(\F)^{m} \iff m=n
$$
