# Field

A [[Ring]] $R$ is a **Field** if it is a [[Commutative]] [[Division Ring]] (and hence an [[Integral Domain]]).

Informally, in a Field you can add and multiply and divide by anything that isn't actually zero, and multiplication is commutative.

Fields are often called $K$ (German Körper). Every field $K$ is an [[Integral Domain]]: if $a,\, b\in K$ and $ab=0$, then if $a\neq 0$ we have $b=1\cdot b = a^{-1}ab=a^{-1}\cdot 0=0$.

## Examples

1. Every field is a commutative ring. In particular $\Q$, $\R$, and $\C$ are commutative rings.
    
2. Division rings need not be commutative, so division rings need not be fields.
    
3. The ring $\Z$ is an integral domain (that’s why they are called “integral”), but it is not a division ring, so it is not a field.
    
4. The set $\R[t]$ of polynomials in one variable with real coefficients is also an integral domain, but not a field.
    
5.  The commutative ring $\Z / 4\Z$ consists of the integers with arithmetic mod 4. It is a commutative ring, but it is not an integral domain because $2\times 2=4=0$ but $2\neq 0$.
    
6. On the other hand, $\Z / 5\Z$ is a field; in fact $\Z /p\Z$ is a field, called $\F_p$, whenever $p$ is prime.
 	- There is also a field with $4$ elements, called $\F_4$, which we shall meet later but it is not the same as $\Z / 4\Z$. They are both commutative rings and they both have four elements, but they are otherwise different.

---

# More Examples of Rings

For any ring $R$, let $M_n(R)$ denote the set of all $n\times n$ matrices with coefficients in the ring $R$. Then $M_n(R)$ is a ring with respect to usual addition and multiplication of square matrices. However, even if $R$ is a commutative ring, $M_n$ is not commutative, unless $n=1$ (when it is just $R$ in a very light disguise).

We saw this ring in I.18(iii) in the case $R=\RR$.

**1.27 Example.** Again take $R$ to be a ring and $t$ to be a variable, but now consider the set $R[[t]]$ of _formal power series_:

$$ R[[t]]=\{f=\sum _{k=0}^\infty a_kt^k\mid a_k\in R\}. $$

We do not care whether these converge (that is the meaning of the word “formal”). Indeed, it makes no sense to ask whether they converge, because $R$ might be any ring at all: $M_5(\ZZ /26\ZZ [s])$, for example. There is no sense in which two such things can be said to be close to one another, so there is no notion of convergence. If it happens that, say, $R=\CC$, then we could ask whether they converge, but we don’t. It doesn’t matter, because we never assign an actual value to $t$.

The element $a_k\in R$ is called the _coefficient of $t^k$ in $f$_.

$R[[t]]$ is a ring: addition and multiplication of power series are defined as usual by

$\seteqnumber{0}{}{0}$

$$ \begin{eqnarray*} \sum _{k=0}^\infty a_kt^k+\sum _{k=0}^\infty b_kt^k&= & \sum _{k=0}^\infty (a_k+b_k)t^k \\ \left (\sum _{k=0}^\infty a_kt^k\right )\cdot \left (\sum _{k=0}^\infty b_kt^k\right ) & = & \sum _{k=0}^\infty \left (\sum _{i+j=k}a_ib_j\right ) t^k\\ &=& a_0b_0 + (a_1b_0+a_0b_1)t + (a_2b_0+a_1b_1+a_0b_2)t^2 + \cdots \end{eqnarray*} $$

As $R$ is an abelian group with respect to the ring addition it follows readily that $(R[[t]],+)$ is an abelian group in which $0 = 0+0t+0t^2+\cdots$ is the zero element. To see that $(R[[t]],+,\cdot )$ is a ring, it remains to see that the multiplication is associative and that the distributive laws hold. For this, let

$$ f= \sum _{k=0}^\infty a_kt^k, \quad g=\sum _{k=0}^\infty b_kt^k,\quad h=\sum _{k=0}^\infty c_kt^k $$

be power series. The coefficient of $t^n$ in the product $(fg)h$ is

$$ \sum _{i+j+k=n}(a_ib_j)c_k $$

which (as multiplication in $R$ is associative) is the same as

$$ \sum _{i+j+k=n}a_i(b_jc_k), $$

which is the coefficient of $t^n$ in $f(gh)$. It follows that $(fg)h=f(gh)$, so multiplication in $R[[t]]$ is associative. Finally we check the distributive laws. The coefficent of $t^n$ in $f(g+h)$ is

$$ \sum _{i+j=n}a_i(b_j+c_j)=\sum _{i+j=n}a_ib_j+\sum _{i+j=n}a_ic_j $$

which equals the coefficient of $t^n$ in $fg+fh$, so $f(g+h)=fg+fh$. Similary one proves that $(g+h)f=gf+hf$. This completes the proof that $(R[t],+,\cdot )$ is a ring.

Notice that we did not need $R$ to be a commutative ring. It is easy to check that $R[t]$ is commutative if and only if $R$ is commutative.

**1.28 Example.** Let $R$ be a ring and let $t$ be a variable. Let $d\ge 0$ be a non-negative integer. A _polynomial $f$ over $R$ of degree $d$_ is a formal expression

$$ f=\sum _{k=0}^d a_kt^k = a_0+a_1t+a_2t^2+a_3t^3 + \cdots +a_dt^d, $$

with $a_k\in R$ for $0\leq k\leq d$ and $a_d\neq 0$.

We let $R[t]_d$ denote the set of all polynomials of degree $d$, and we set

$$ R[t]=\{0\}\cup \bigcup _{d=0}^\infty R[t]_d. $$

Thus $1+t$, $39-62t+3t^{19}$ and $94$ are all elements of $\Z[t]$, and so is $0$, but $\frac {1}{t}$ is not and neither is $e^t$.

The degree of a polynomial is the highest $k$ such that $a_k\neq 0$, i.e. the highest power of $t$ that actually occurs: a polynomial of degree $0$ is called a non-zero constant (it is just a non-zero element of $R$). The degree of the polynomial $0$ is not defined – sometimes one can save some writing by declaring that it is $0$, or that it is $-1$ or even $-\infty$, but only temporarily. $0$ is also called a constant, so the constants are just the elements of $R$.

A polynomial is just a special kind of formal power series, one for which all the coefficients of index $>d$ are zero, so we have defined addition and multiplication of formal power series exactly as we did for polynomials in I.27. The only difference being that we may replace the sums to $\infty$ by sums to some finite number. It follows immediately that $R[t]$ is a ring.

**1.29** Two formal power series $\sum _{k=0}^\infty a_kt^k$ and $\sum _{k=0}^\infty b_kt^k$ coincide if and only if $(a_k)=(b_k)$: the variable $t$ is superfluous. We could forget it and simply write the list of coefficients instead. But in fact one more often does the opposite: given an ordered list of ring elements (say numbers) it is often useful to organise them into a power series. This is especially common in probability, where it is called a generating function.

---
