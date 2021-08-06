# 2.5 Coordinates and representing linear maps/operators by matrices

## Definition 1  
Let $\alpha:v_{1},dots,v_{n}$ be a basis. For $w\in V$, write

$$
w = \underset{i}{\sum} (\lambda)_{i} v_{i} .
$$

We call the vector

$$
\lambda = ((\lambda)_{1}, \dots, (\lambda)_{n}) \in (\F)^{n}
$$

the coordinate vector $w$ with respect to the basis $\alpha$ .

In other words, the vector $\lambda=\phi_{\alpha}^{- 1}(w)$ is the coordinate vector of $w$ with respect to the basis $\alpha$ . Note that here $(\phi)_{\alpha}$ is an isomorphism, as $\alpha$ is a basis.

## Example 2  

*   Recall the standard basis $e_{1},\dots,e_{n}$ of $(\F)^{n}$ .
    *   For any $x\in(\F)^{n}$, the coordinate vector representing $x$ with respect to the standard basis is $x$ itself, because $x=(\sum)_{i}x_{i}e_{i}$ .
    *   Consider the case $n=2$ . Then $\alpha:e_{1}+e_{2},e_{2}$ is a basis of $(\F)^{2}$ as well. The coordinate vector of $x=(1, 1)\in(\F)^{2}$ with respect to $\alpha$ is $(1, 0)$, as
        
        $$
        x = 1 \cdot (e_{1} + e_{2}) + 0 \cdot e_{2} .
        $$
        
    *   For any basis $\alpha:v_{1},\dots,v_{n}$ of $V$, the coordinate vector of $v_{i}$ wrt $\alpha$ is the elementary vector $e_{i}$ . For instance,
        
        $$
        v_{1} = 1 \cdot v_{1} + 0 \cdot v_{2} + . . . + 0 \cdot v_{n}, v_{2} = 0 \cdot v_{1} + 1 \cdot v_{2} + . . . + 0 \cdot v_{n},
        $$
        
        so the coordinate vectors of $v_{1}$, $v_{2}$ wrt $\alpha$ is $e_{1}$ and $e_{2}$, respectively.
        
*   Let $V\leq C^{2}(\R)$ be the subspace of functions $f:\Rarrow\R$ such that
    
    $$
    \frac{d^{2} f}{d x^{2}} + f = 0 .
    $$
    
    Define $f_{1},f_{2},g\in V$ by
    
    $$
    f_{1} (x) = cos (x), f_{2} (x) = sin (x), g (x) = cos (x + \frac{\pi}{3}) .
    $$
    
    Note that the list $\alpha:f_{1},f_{2}$ is a basis of $V$ (cf. Methods IA). Since
    
    $$
    g (x) = cos (x) cos (\frac{\pi}{3}) - sin (x) sin (\frac{\pi}{3}) = \frac{1}{2} f_{1} (x) - \frac{\sqrt{3}}{2} f_{2} (x) \text{ for all } x \in \R
    $$
    
    the coordinate vector representing $g$ with respect to $\alpha$ is $(\frac{1}{2}, - \frac{\sqrt{3}}{2})\in\R^{2}$ .
    

Now suppose that we have two vector spaces $V$, $W$ and that

$V$ has a basis $\alpha:v_{1},\dots,v_{n}$ $rightarrow$ $(\phi)_{\alpha}:(\F)^{n}arrow _{}^{\cong}V$

$W$ has a basis $\beta:w_{1},\dots,w_{m}$ $rightarrow$ $(\phi)_{\beta}:(\F)^{m}arrow _{}^{\cong}W$ .

## Definition 3  
Say the matrix $A=(a_{i j})\in M_{m, n}(\F)$ represents the linear map $\psi:Varrow W$ with respect to the bases $\alpha$ and $\beta$ if

$$
\psi (v_{j}) = \underset{i}{\sum} a_{i j} w_{i}, \forall j .
$$

Note that, as $\beta$ is a basis, the matrix $A$ in Definition [2.5.3](#x14-23003r3)  is unique.

## Remark 4  
Following the definition of $A$, we have the following diagram,

$e_{j}$

$arrow _{}^{(\phi)_{A}}$

$(\sum)_{i}a_{i j}e_{i}$

 

 

 

$(\phi)_{\alpha}↓$

$↓(\phi)_{\beta}$

 

 

 

$v_{j}$

$arrow _{}^{ \psi }$

$(\sum)_{i}a_{i j}w_{i}$

That is, the following diagram commutes.

$(\F)^{n}$

$arrow _{}^{(\phi)_{A}}$

$(\F)^{m}$

 

 

 

$(\phi)_{\alpha}↓$

$↓(\phi)_{\beta}$

 

 

 

$V$

$arrow _{}^{ \psi }$

$W$

That is,

$$
\psi=(\phi)_{\beta}\circ(\phi)_{A}\circ\phi_{\alpha}^{- 1}
$$

1.

or

$$
(\phi)_{A}=\phi_{\beta}^{- 1}\circ\psi\circ(\phi)_{\alpha}.
$$

2.

In fact, we can use either (1) or (2) to define the matrix $A$ in Definition [2.5.3](#x14-23003r3).

## Definition 5  

1.

A linear operator is a linear map $\phi:Varrow V$, i.e. is a linear map with the domain and codomain the same vector space.

2.

Let one $\alpha:v_{1},\dots,v_{n}$ be a basis of $V$, an $A\in M_{n, n}(\F)$ is said to represent the linear operator $\psi:Varrow V$ with respect to $\alpha$ if

$$
\psi (v_{j}) = \underset{i}{\sum} a_{i j} v_{i} .
$$

Note that this matrix $A$ is unique as in Definition [2.5.3](#x14-23003r3).

## Remark 6  
As in Remark [2.5.4](#x14-23004r4), we have the following commutative diagram

$(\F)^{n}$

$arrow _{}^{(\phi)_{A}}$

$(\F)^{n}$

 

 

 

$(\phi)_{\alpha}↓$

$↓(\phi)_{\alpha}$

 

 

 

$V$

$arrow _{}^{ \psi }$

$V$

and the matrix $A$ in Definition [2.5.5](#x14-23007r5) can be defined by

$$
(\phi)_{A} = \phi_{\alpha}^{- 1} \circ \psi \circ (\phi)_{\alpha} .
$$

## Example 7  
Let

$$
\begin{align}
 V=\{ \text{polynomials degree }\leq 3 \}\leq\F[ X ]  \\ \psi:Varrow V:Parrow tail\frac{d P}{d X}, 
\end{align}
$$

then $1,X,X^{2},X^{3}$ is a basis of $V$ and

$$
\begin{align}
 \frac{d}{d X}(1)=0;  \\ \frac{d}{d X}(X)=1;  \\ \frac{d}{d X}(X^{2})=2X;  \\ \frac{d}{d X}(X^{3})=3X^{2}. 
\end{align}
$$

Thus, the matrix representing $\psi=\frac{d}{d X}$ is

$$
\begin{align}
A = \begin{pmatrix} 0 1 0 0 \\ 0 0 2 0 \\ 0 0 0 3 \\ 0 0 0 0 \end{pmatrix}
\end{align}
$$

Check:

$$
A \begin{pmatrix} a_{0} \\ a_{1} \\ a_{2} \\ a_{3} \end{pmatrix} = \begin{pmatrix} a_{1} \\ 2a_{2} \\ 3a_{3} \\ 0 \end{pmatrix}
$$

represents the equation

$$
\psi (a_{0} 1 + a_{1} X + a_{2} X^{2} + a_{3} X^{3}) = a_{1} 1 + 2 a_{2} X + 3 a_{3} X^{2} .
$$

[[next](MA10210se11.html)] [[prev](MA10210se9.html)] [[prev-tail](MA10210se9.html#tailMA10210se9.html)] [[front](MA10210se10.html)] [[up](MA10210ch2.html#MA10210se10.html)]