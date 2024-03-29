# Bases

###### Definitions

. Let $\lst {v}1n$ be a list of vectors in a vector space $V$.

- 1. The _span_ of $\lst {v}1n$ is

  $\seteqnumber{0}{1.}{0}$

  $$ \Span {\lst {v}1n}:=\set {\lc \lambda {v}1n\st \lambda \_i\in \F , 1\leq i\leq n}\leq V. $$

- 2. $\lst {v}1n$ _span $V$_ (or _are a spanning list for $V$_) if $\Span {\lst {v}1n}=V$.
- 3. $\lst {v}1n$ are _linearly independent_ if, whenever $\lc \lambda {v}1n=0$, then each $\lambda _i=0$, $1\leq i\leq n$, and _linearly dependent_ otherwise.
- 4. $\lst {v}1n$ is a _basis_ for $V$ if they are linearly independent and span $V$.

###### Definition

. A vector space is _finite-dimensional_ if it admits a finite list of vectors as basis and _infinite-dimensional_ otherwise.

If $V$ is finite-dimensional, the _dimension_ of $V$, $\dim V$, is the number of vectors in a (any) basis of $V$.

###### Terminology

. Let $\lst {v}1n$ be a list of vectors.

- 1. A vector of the form $\lc \lambda {v}1n$ is called a _linear combination of the $v_i$_.
- 2. An equation of the form $\lc \lambda {v}1n=0$ is called a _linear relation on the $v_i$_.

Recall:

- [[Proposition 1.1]] (Algebra 1B, Section 2.4, Proposition 5). $\lst {v}1n$ is a basis for $V$ if and only if any $v\in V$ can be written in the form

  $\seteqnumber{0}{1.}{0}$

  $$ \label {eq:1} v=\lc \lambda {v}1n $$

  for _unique_ $\lst \lambda 1n\in \F$. In this case, $\vec \lambda 1n$ is called the _coordinate vector_ of $v$ with respect to $\lst {v}1n$.

##### 1.3.1 Standard bases

In general, finite-dimensional vector spaces have many bases and there is no good reason to prefer any particular one. However, some lucky vector spaces come equipped with a natural basis.

- [[Proposition 1.2]]. For $\cI$ a set and $i\in \cI$, define $e_i\in \F ^{\cI }$ by

  $\seteqnumber{0}{1.}{1}$

  $$ e_i(j)= \begin{cases} 1&\text {if $i=j$}\\0&\text {if $i\neq j$}, \end {cases} $$

  for all $j\in \cI$.

  If $\cI$ is finite then $(e_i)_{i\in \cI }$ is a basis, called the _standard basis_, of $\F ^{\cI }$.

  In particular, $\dim \F ^{\cI }=\abs {\cI }$.

- Proof. For $f\in \F ^{\cI }$, we observe that

  $\seteqnumber{0}{1.}{1}$

  $$ f=\sum \_{i\in \cI }f(i)e_i. $$

  Indeed, for $j\in \cI$,

  $\seteqnumber{0}{1.}{1}$

  $$ \bigl (\sum _{i\in \cI }f(i)e_i\bigr )(j)= \sum _{i\in \cI }f(i)e*i(j)=\sum *{i\neq j}f(i)0+f(j)1=f(j). $$

  In particular, $(e_i)_{i\in \cI }$ span.

  For linear independence, suppose that $\sum _{i\in \cI }\lambda _ie_i=0$ and evaluate both sides at $j\in \cI$ to get

  $\seteqnumber{0}{1.}{1}$

  $$ \lambda \_j=0. $$

  □

###### Examples

.

##### 1.3.2 Useful facts

A very useful fact about bases that we shall use many times was proved in Algebra 1B:

- [[Proposition 1.3]] (Algebra 1B, Chapter 3, Theorem 6(b)). Any linearly independent list of vectors in a finite-dimensional vector space can be extended to a basis.

Here is another helpful result :

- [[Lemma 1.4]] (Algebra 1B, Chapter 3, Theorem 5). Let $V$ be a finite-dimensional vector space and $U\leq V$. Then

  $\seteqnumber{0}{1.}{1}$

  $$ \dim U\leq \dim V $$

  with equality if and only if $U=V$.
