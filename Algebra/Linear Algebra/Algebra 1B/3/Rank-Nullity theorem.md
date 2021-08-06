# 3.4 Rank-Nullity theorem

## Definition 1  

(a)

The nullity of a linear map $\phi:Varrow W$ is

$$
null \phi = dim Ker \phi .
$$

(b)

The nullity of a matrix $A\in M_{m, n}(\F)$ is 
$$
\begin{align}
nullA &= null(\phi)_{A}  \\ &= dimN_{A}.\text{(}N_{A}\text{=the null space of }A\text{)} 
\end{align}
$$

## Theorem 2(Rank-Nullity, aka Dimension Theorem).  

If $V$ is finite-dimensional and $\phi:Varrow W$ is a linear map, then

$$
 \rank  \phi + null \phi = dim V .
$$

Note.  
Let $A\in M_{m, n}(\F)$ and consider $(\phi)_{A}:(\F)^{n}arrow(\F)^{m}$ .

1.

We have

$$
 \rank  (\phi)_{A} =  \rank  A = \text{\# pivots in a REF reduction}
$$

and

$$
\begin{align}
null(\phi)_{A} &= dimN_{A}  \\ &= \text{\# parameters in general solution of }Ax=0  \\ &= \text{\# non-pivot variables} 
\end{align}
$$

So in this case the Rank-Nullity theorem amounts to

$$
\text{\# pivot variables + \# non-pivot variables = \# variables } = n,
$$

which is clearly correct. But we give a more formal proof (valid also for $W$ of infinite dimension) below.

2.

Alternatively, if we consider

$$
 \rank  (\phi)_{A} = row  \rank  A = \text{\# independent equations}
$$

then the Rank-Nullity theorem can be interpreted as

$$
\begin{align}
 \text{\# parameters in general solution of }Ax=0  \\ &= \text{\# variables}-\text{\# independent equations} 
\end{align}
$$

### Proof Set

$$
dim V = n, null \phi = k .
$$

Choose a basis $v_{1},\dots,v_{k}$ for $Ker\phi$ and extend it to a basis $v_{1},\dots,v_{n}$ for $V$ (by Theorem [3.2.6](MA10210se13.html#x18-29018r6) (b)).

To prove the theorem, it suffices to show that the list

$$
\begin{align}
\phi(v_{k + 1}),\dots,\phi(v_{n}) \text{(1)}
\end{align}
$$

is a basis of $ \Im \phi$, as this then implies $dim \Im \phi=n-k$ and so

$$
 \rank  \phi + null \phi = n - k + k = n = dim V,
$$

as required.

We first show that the list in ([3.4.1](#x20-31010r3.4.1)) is spanning. Let $w=\phi(v)\in \Im \phi$ with

$$
v = \sum_{i = 1}^{n} (\lambda)_{i} v_{i} .
$$

Then, as $\phi$ linear and $v_{1},\dots,v_{k}\in Ker\phi$,

$$
\begin{align}
w &= \sum_{i = 1}^{n}(\lambda)_{i}\phi(v_{i})  \\ &= \sum_{i = k + 1}^{n}(\lambda)_{i}\phi(v_{i})\in\langle \phi (v_{k + 1}), \dots, \phi (v_{n}) \rangle 
\end{align}
$$

Next we show that the list in ([3.4.1](#x20-31010r3.4.1)) is independent. Suppose there is a dependence

$$
\begin{align}
0 &= \sum_{i = k + 1}^{n}(\lambda)_{i}\phi(v_{i})  \\ &= \phi(\sum_{i = k + 1}^{n} (\lambda)_{i} v_{i}), 
\end{align}
$$

as $\phi$ is linear. Thus,

$$
\sum_{i = k + 1}^{n} (\lambda)_{i} v_{i} \in Ker \phi = \langle v_{1}, \dots, v_{k} \rangle
$$

hence

$$
\sum_{i = k + 1}^{n} (\lambda)_{i} v_{i} = \sum_{j = 1}^{k} (\mu)_{j} v_{j}, \text{ i.e. } \sum_{j = 1}^{k} (\mu)_{j} v_{j} - \sum_{i = k + 1}^{n} (\lambda)_{i} v_{i} = 0 .
$$

As $v_{1},\dots,v_{n}$ is a basis, all $(\mu)_{j}=0$ and all $(\lambda)_{i}=0$ . Hence $\phi(v_{k + 1}),\dots,\phi(v_{n})$ are independent and so a basis. □

#### Key consequence

For any linear map $\phi:Varrow W$,

$$
\begin{align}
\phi\text{ injective} \Leftrightarrow Ker\phi=\{ 0 \}\text{Proposition  }\text{2.3.4}  \\ \Leftrightarrow null\phi=0  \\ \Leftrightarrow  \rank \phi=dimV\text{Rank-Nullity Theorem }\text{3.4.2} 
\end{align}
$$

On the other hand,

$$
\begin{align}
\phi\text{ surjective} \Leftrightarrow  \Im \phi=W  \\ \Leftrightarrow  \rank \phi=dimW 
\end{align}
$$

Thus, if $dimV=dimW$, then we have

$$
\begin{align}
\phi\text{ injective} \Leftrightarrow \phi\text{ surjective}  \\ \Leftrightarrow \phi\text{ bijective} 
\end{align}
$$

Note that $ \rank \phi\leq dimW$ because $ \Im \phi\leq W$, while we can deduce e.g. from the Rank-Nullity theorem that $ \rank \phi\leq dimV$ . Therefore say that $\phi$ has maximal rank if

$$
 \rank  \phi = min \{ dim V, dim W \} .
$$

We can now summarise the conclusions above as: if $\begin{Bmatrix} dimV\leq dimW \\ dimV\geq dimW \\ dimV=dimW \end{Bmatrix}$ then

$$
\phi \text{ has maximal  \rank } \Leftrightarrow \phi \text{ is } \{\begin{matrix} \text{injective} \\ \text{surjective} \\ \text{bijective} \end{matrix}
$$

#### Applications to sums and direct sums

#programming-note 

## Definition 3  
For vector spaces $U$ and $W$ over $\F$, the direct sum $U\oplusW$ is $U\times W$ equipped with component-wise operations, i.e. addition

$$
(u, w) + (u^{′}, w^{′}) = (u + u^{′}, w + w^{′})
$$

and scalar multiplication

$$
\lambda (u, w) = (\lambda u, \lambda w) .
$$

(Check that this satisfies the conditions for a vector space over $\F$ .)

Lemma 4.  
If $U$ and $W$ have finite dimension then

$$
dim (U \oplus W) = dim U + dim W .
$$

### Proof Define a linear map $\phi:U\oplusWarrow W,(u, w)arrow tailw$ . Then $\phi$ is surjective, so $ \rank \phi=dimW$ . On the other hand, $Uarrow U\oplusW,uarrow tail(u, 0)$ defines an isomorphism $U\congKer\phi$, so $null\phi=dimU$ . Hence the Rank-Nullity theorem implies

$$
dim (U \oplus W) = null \phi +  \rank  \phi = dim U + dim W . \square
$$

Recall that for $U$ and $W$ subspaces of $V$,

$$
U + W = \{ v \in V : v = u + w \text{ for some } u \in U, w \in W \}
$$

and that both $U\capW$ and $U+W$ are subspaces of $V$ and thus vector spaces.

## Proposition 5  
If $U$ and $W$ are finite-dimensional subspaces of $V$ then

$$
dim (U + W) + dim (U \cap W) = dim U + dim W .
$$

### Proof Define a linear map $\phi:U\oplusWarrow U+W,(u, w)arrow tailu+w$ . Then $\phi$ is surjective, so $ \rank \phi=dim(U + W)$ . On the other hand, the linear maps

$$
\begin{align}
U\capWarrow Ker\phi,varrow tail(v, - v) \\ Ker\phiarrow U\capW,(u, w)arrow tailu 
\end{align}
$$

are inverses, so $U\capW\congKer\phi$ and hence $null\phi=dim(U \cap W)$ . Therefore by the Rank-Nullity theorem and Lemma [3.4.4](#x20-33002r4)

$$
dim (U \oplus W) =  \rank  \phi + null \phi = dim (U + W) + dim (U \cap W) .
$$

□

[[prev](MA10210se14.html)] [[prev-tail](MA10210se14.html#tailMA10210se14.html)] [[front](MA10210se15.html)] [[up](MA10210ch3.html#MA10210se15.html)]