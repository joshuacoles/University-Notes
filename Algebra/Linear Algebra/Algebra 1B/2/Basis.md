# Basis: spanning and independence

## Definition 1.  
For a subset $S$ of a vector space $V$ a linear span $\langle S \rangle$ is the smallest subspace of $V$ containing $S$ = intersection of all subspaces containing $S$ . In particular: for vectors $v_{1},\dots,v_{n}$,

$$
\langle v_{1}, \dots, v_{n} \rangle = \{\sum_{i = 1}^{n} (\lambda)_{i} v_{i} : (\lambda)_{i} \in \F\} .
$$

Note.  
i. By convention, the linear span of the empty set $\langle \text{the empty set} \rangle=\{ 0 \}$.

(ii) As (V, +) is commutative, the linear span $\langle v_{1}, \dots, v_{n} \rangle$ is independent of the order the vectors $v_{1},\dots,v_{n}$ .

## Definition 2.  
A list $v_{1},\dots,v_{n}$ of vectors in $V$ is:

1.

(linearly) independent if

$$
\sum_{i = 1}^{n} (\lambda)_{i} v_{i} = 0 \Rightarrow (\lambda)_{i} = 0 \forall i ;
$$

and (linearly) dependent otherwise.

2.

spanning if $\langle v_{1}, \dots, v_{n} \rangle=V$ .

3.

a basis of $V$ if it is both independent and spanning.

Note.  

*   By definition, if the list $v_{1},\dots,v_{n}$ is linearly dependent, then there is a non-trivial dependence. That is, there exists scalars $(\lambda)_{1},\dots,(\lambda)_{n}$, which are not all zero, such that
    
    $$
    \sum_{i = 1}^{n} (\lambda)_{i} v_{i} = 0 .
    $$
    
*   If there is a repetition in the list, then the list is linearly dependent. E.g. the list $v,v$ is linearly dependent, since
    
    $$
    1 v + (- 1) v = 0
    $$
    
    is a non-trivial dependence.
    
*   A basis can be infinite. For instance the infinite list $1,X,X^{2},\dots $ is a basis of the vector space of polynomials $\R[ X ]$ . However, in this course we assume that a vector space is ”finite-dimensional” (i.e. it has a finite basis, see Definition [3.1.2](MA10210se12.html#x17-28006r2)(a)), unless otherwise stated.

## Proposition 3  
A list $\alpha:v_{1},\dots,v_{n}$ is a basis of $V$ if and only if every vector $v\in V$ can be uniquely written as a linear combination

$$
v = \sum_{i = 1}^{n} (\lambda)_{i} v_{i} .
$$

### Proof Recall the map $(\phi)_{\alpha}:(\F)^{n}arrow V$ with $(\phi)_{\alpha}(x)=(\sum)_{i}x_{i}v_{i}.$  

By definition,

i. $\alpha$ is spanning $\Leftrightarrow$ $(\phi)_{\alpha}$ surjective.  

(ii) $v_{1},\dots,v_{n}$ is independent $\LeftrightarrowKer(\phi)_{\alpha}=0,$ which is equivalent to $(\phi)_{\alpha}$ is injective by Prop. [2.3.4](MA10210se8.html#x12-20006r4).  

Therefore, $\alpha$ is a basis $\Leftrightarrow$ $\phi$ is a bijection, as required. □

For subspaces of $(\F)^{n}$, we introduced a notion of basis in Definition [1.4.4](MA10210se4.html#x7-10005r4). Proposition [2.4.3](#x13-21003r3) says that Definition [1.4.4](MA10210se4.html#x7-10005r4) is equivalent to Definition [2.4.2](#x13-21002r2) (3).

#### [Linear dependence of a list of vectors](MA10210li1.html#QQ2-13-22)

First, consider the special cases of one or two vectors in the list as in the following lemma.

Lemma 4.  

a.

A single vector $v$ is independent iff $v\neq 0$ .

b.

Two vectors $v_{1},v_{2}$ are dependent iff one is a multiple of the other.

### Proof

a.

We know that

$$
\lambda v = 0 \text{and} v \neq 0 \Rightarrow \lambda = 0 .
$$

Conversely, if $v=0$ then

$$
\lambda v = 0 \forall \lambda
$$

e.g. $\lambda=1$ . (Lemma 2.1.2(c)) and so $v$ is not independent.

b.

Suppose that $v_{1},v_{2}$ are dependent. There there is a non-trivial dependence

$$
(\lambda)_{1} v_{1} + (\lambda)_{2} v_{2} = 0 .
$$

If $(\lambda)_{2}\neq 0$ then $v_{2}=-\frac{(\lambda)_{1}}{(\lambda)_{2}}v_{1}$ . (Similarly if $(\lambda)_{1}\neq 0$ .)

Conversely, if $v_{2}=\lambda v_{1}$, then

$$
v_{1} + (- \lambda) v_{2} = 0 .
$$

So $v_{1},v_{2}$ are dependent. □

In general, for a list $\alpha:v_{1},\dots,v_{k}$ of vectors in $(\F)^{n}$, we can decide L. I./spanning using Gaussian elimination. Define $A\in M_{n, k}(\F)$ by $(col)_{i}(A)=v_{i}$ . Then

$$
A x = \underset{i}{\sum} x_{i} (col)_{i} = \underset{i}{\sum} x_{i} v_{i} .
$$

## Proposition 5  
Use the same notation as above.

*   $\alpha$ is L. I. if and only if every column in any REF of $A$ contains a pivot.
*   $\alpha$ is spanning if and only if there is no zero rows in any REF of $A$ .

### Proof (a) $\alpha$ L. I. $\Leftrightarrow$ $\nexists$ non-zero $\lambda\in(\F)^{k}$ such that $\sum(\lambda)_{i}v_{i}=0$  
$\Leftrightarrow$ only solution of $Ax=0$ is $x=0$  
$\Leftrightarrow$ in REF reduction of $A$, every column contains a pivot.  

b. $\alpha$ spanning $\Leftrightarrow$ every $w\in(\F)^{n}$ can be written as $\sum(\lambda)_{i}v_{i}$ for some $\lambda\in(\F)^{n}$  
$\Leftrightarrow$ $Ax=w$ has a solution for every $w\in(\F)^{n}$  
$\Leftrightarrow$ no zero rows in REF reduction of $A$ □

[[next](MA10210se10.html)] [[prev](MA10210se8.html)] [[prev-tail](MA10210se8.html#tailMA10210se8.html)] [[front](MA10210se9.html)] [[up](MA10210ch2.html#MA10210se9.html)]