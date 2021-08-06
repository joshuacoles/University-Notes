# 2.3 Kernels and images

## Definition 1.  
Let $\phi:Varrow W$ be a linear map.

1. The kernel
$$
Ker \phi = \{ v \in V : \phi (v) = 0 \} .
$$

2.
The image 
$$
\begin{align}
\Im \phi &= \{ w \in W : w = \phi (v) \text{ for some }v\in V \}  \\ &= \{ \phi (v) : v \in V \}. 
\end{align}
$$

## Proposition 2.  

Let $\phi:Varrow W$ be a linear map.

a.

$Ker\phi$ is a linear subspace of $V$ .

b.

$ \Im \phi$ is a linear subspace of $W$ .

### Proof.

a.

$\phi(0)=0\Rightarrow 0\in Ker\phi$ .

If $v,w\in Ker\phi,\lambda,\mu\in\F$,

$$
\begin{align}
\phi(\lambda v + \mu w) &= \lambda\phi(v)+\mu\phi(w)  \\ &= \lambda 0+\mu 0=0  \\ \Rightarrow\lambda v+\mu w \in Ker\phi 
\end{align}
$$

b.

$\phi(0)=0\Rightarrow 0\in \Im \phi$ .

For any $\phi(v),\phi(w)\in \Im \phi$, we have

$$
\lambda \phi (v) + \mu \phi (w) = \phi (\lambda v + \mu w) \in  \Im  \phi .
$$

Thus $ \Im \phi$ is a subspace. □

## Example 3.  

1.

For $(\phi)_{A}:(\F)^{n}arrow(\F)^{m}:xarrow tailAx.$

$Ker(\phi)_{A}$ is the null space $N_{A}$ .

$ \Im (\phi)_{A}$ is the ‘column space’ of $A$

$$
= \{\sum_{i = 1}^{n} (\lambda)_{i} (col)_{i} (A) : (\lambda)_{i} \in \F\} .
$$

2.

$$
\phi = \frac{d^{k}}{d X^{k}} : \R [ X ] arrow \R [ X ]
$$

is a composition of linear maps, hence linear. Its kernel is

$$
Ker \phi = \{ \text{polynomials of degree  }\leq k-1 \}
$$

and its image is

$$
 \Im  (\phi)_{A} = \R [ x ], \text{ as integrating plynomials gives polynomials.}
$$

## Proposition 4.  
A linear map $\phi:Varrow W$ is injective iff $Ker\phi=\{ 0 \}$.

### Proof For $\Rightarrow$ : Suppose $x\in Ker\phi$, i.e.  $\phi(x)=0$ .

Now we know $\phi(0)=0$, so if $\phi$ is injective, then

$$
\phi (x) = \phi (0) \Rightarrow x = 0 .
$$

Therefore $Ker\phi=\{ 0 \}$.

For $\Leftarrow=$ : Suppose $\phi(x)=\phi(y)$ .

Since $\phi$ is linear,

$$
\phi (x - y) = \phi (x) - \phi (y) = 0 .
$$

Hence $x-y\in Ker\phi$ . As $Ker\phi=\{ 0 \}$, this means $x-y=0$, i.e.  $x=y$ .

Thus $\phi$ is injective. □

Note.  

*   A linear map $\phi:Varrow W$ is surjective if and only if $ \Im \phi=W$ . So $\phi$ is bijective if and only if $Ker\phi=\{ 0 \}$ and $ \Im \phi=W$ .
*   For a linear map $\phi:Varrow W$, we can define the fibre of $\phi$ at $w\in W$ by
    
    $$
    (\phi)^{- 1} (w) = \{ v \in V : \phi (v) = w \},
    $$
    
    So in terms of fibres,
    
    (i) $Ker\phi$ is the firber of the map $\phi$ at $0$ .
    
    (ii) the solution space of the linear system $Ax=b$ is the fibre $\phi_{A}^{- 1}(b)$ .
    