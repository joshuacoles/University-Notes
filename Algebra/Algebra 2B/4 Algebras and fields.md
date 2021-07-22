#### 4 Algebras and fields

##### Algebras

**4.1 Definition.** Fix a field $\kk$. A _$\kk$-algebra_ is a $\kk$-vector space $V$ equipped with a multiplication $\cdot \colon V\times V\to V$, such that $V$ is a ring with respect to multiplication and vector space addition, and multiplication and scalar product are compatible in the sense that

$$ \lambda (u\cdot v) = (\lambda u)\cdot v = u\cdot (\lambda v) \quad \text { for all }u,\,v\in V,\,\, \lambda \in \kk . $$

The _dimension_ of a $\kk$-algebra $V$ is the dimension of $V$ as a vector space over $\kk$, and a nonempty subset $W$ of $V$ is a _subalgebra_ if it is both a subring and a vector subspace.

**4.2** If $V$ is a $\kk$-algebra and we fix an element $v\in V$, then there is a left multiplication map $L_v\colon V\to V$ given by $L_v(u)=v\cdot u$. This map, and the right multiplication map $R_v(u)=u\cdot v$, are $\kk$-linear maps: this follows immediately from the compatibility condition in Definition IV.1 and the distributive law. For this reason, a product on a vector space $V$ making $V$ into a $\kk$-algebra as in Definition IV.1 is often called a _bilinear product_.

**4.3** Suppose that $(v_i)_{i\in I}$ is a basis for the $\kk$-algebra $V$ as $\kk$-vector space. The multiplication on $V$ is determined by the values of $v_i\cdot v_j$ for all $i,\,j\in I$, because if $u=\sum \alpha _iv_i$ and $v=\sum \beta _i v_i$ then

$$ u\cdot v = \left (\sum _{i\in I}\alpha _iv_i\right )\cdot \left (\sum _{j\in I}\beta _jv_j\right )= \sum _{i, j\in I}(\alpha _i\beta _j)(v_i\cdot v_j). $$

Note, however, that an arbitrary collection of values for $v_i\cdot v_j$ will not in general determine a multiplication that satisfies the ring axioms, so if we specify a $\kk$-algebra this way, we must still check that what we have defined is a ring.

**4.4 Example.**

*   (i) Let $\kk$ be a field. Then $\kk$ is a $\kk$-algebra of dimension $1$.
    
*   • For $n\geq 1$, the set $M_{n\times n}(\kk )$ of $n\times n$ matrices with coefficients in $\kk$ is a $\kk$-algebra of dimension $n^2$.
    
*   • The field $\CC =\RR +\RR i$ is an $\RR$-algebra of dimension $2$ over $\RR$ (as well as being a $\CC$-algebra of dimension $1$ over $\CC$ by (i)).
    

**4.5 Example.** Consider a vector space $\HH$ over $\RR$ with basis $\{1,\,i,\,j,\,k\}$: that is

$$ \HH =\RR +\RR i+\RR j+\RR k = \big \{a+bi+cj+dk \mid a,\, b,\, c,\, d\in \RR \big \}, $$

where the $\RR$-bilinear product is determined according to IV.3 by

$$ i^2=j^2=k^2=-1,\ \ ij=k,\ jk=i,\ ki=j,\ ji=-k,\ kj=-i,\ ik=-j. $$

With this definition, $\HH$ is a noncommutative ring. Since the product was defined to be $\RR$-bilinear, it follows that $\HH$ is an $\RR$-algebra of dimension $4$; this is the _quaternionic algebra_, or simply _the quaternions_. In fact $\HH$ is a division ring but, as it is not commutative, it is not a field.

**4.6** Strictly speaking, what we have defined here are _associative algebras_. It turns out to be useful to consider $\kk$-vector spaces equipped with a bilinear product that is not associative but instead satisfies some other axiom. Famous examples include the _octonions_ $\OO$, a dimension $8$ $\RR$-algebra in which the multiplication satisfies the rules $a\cdot (a\cdot b) = (a\cdot a)\cdot b$ and $(a\cdot b)\cdot b = a \cdot (b\cdot b)$, and the famous _Lie algebras_, in which the multiplication is usually denoted $[a,b]$ and satisfies the Jacobi identity

$$ [[a,b],c]+[[b,c],a]+[[c,a],b]=0. $$

Lie algebras are among the most important objects in modern mathematics, but are not covered in this course.

##### General polynomial rings

**4.7 Definition.** Let $R$ be a ring and introduce variables $t_1,\ldots ,t_n$. The _polynomial ring in $n$ variables_ with coefficients in $R$ is defined inductively by $R[t_1,\ldots ,t_n]=R[t_1,\ldots ,t_{n-1}][t_n]$.

**4.8** This is a convenient way to make the definition, and to give the ring operations and the fact that they obey the ring axioms without any work (it is enough to refer to I.28), but it is not very convenient for notation. Instead we can write the general element of $R[t_1, \dots , t_n]$ as $\sum _{I\in \ZZ ^n_{\ge 0}} a_I \bdt ^I$, where $a_I\in R$ for all $I=\{i_1,\ldots ,i_n\}\in \ZZ ^n_{\ge 0}$, all but finitely many of the $a_I$ are zero, and the notation $\bdt ^I$ means $t_1^{i_1}\cdots t_n^{i_n}$.

**4.9 Example.** To illustrate this, set $n=3$ and write $\RR [x,y,z]$ for the polynomial ring in three variables. Then for $f=x^2y+3xz$ and $g = 2x-3xz$, we have

$$ f+g = x^2y + 2x\quad \text {and}\quad f\cdot g = 2x^3y+6x^2z-3x^3yz-9x^2z^2. $$

**4.10 Example.** If the coefficient ring $R$ is a field $\kk$, then the general polynomial ring $\kk [x_1, \dots , x_n]$ is a $\kk$-algebra with basis as a vector space equal to the set of all monomials $\bdt ^I$ for $I\in \ZZ _{\ge 0}^n$. So this is an infinite-dimensional $\kk$-algebra. The multiplication is determined by the fact that $\bdt ^I\cdot \bdt ^J=\bdt ^{I+J}$, as in IV.3

**4.11 Proposition.** Let $\kk$ be a field. Then $\kk [x_1, \dots , x_n]$ is a UFD.

Proof: $\kk$ is a PID, so it is a UFD. The result follows immediately by induction using Theorem III.42.

**4.12 Example.** $\kk [x_1,\dots ,x_n]$ is not a PID for $n\geq 2$.

##### Field extensions

**4.13 Definition.** A non-zero subring $K$ of a field $L$ is a _subfield_ if for each nonzero element $a\in K$, the multiplicative inverse of $a$ in $L$ lies in $K$. If $K$ is a subfield of $L$ we say that $L$ is an _field extension_ or just an _extension_ of $K$.

One often uses the notation $L:K$ to indicate that $L$ is an extension of $K$. Notice that the definition implies that $K$ is itself a field, because $aa^{-1}=1_L\in K$.

**4.14 Lemma.** Let $L:K$ be a field extension. Then $L$ is a $K$-algebra.

Proof: $L$ is a field so $(L,+)$ is already an abelian group. We need a scalar multiplication $K\times L\to L$, and that is simply the restriction of the multiplication in $L$. We need to check that $L$ is a $K$-vector space with respect to this multiplication: that is, that $a(x+y)=ax+ay$ if $a\in K$ and $x,\,y\in L$, and we need to check the compatibility in Definition IV.1. But the first of these is just the distributive law in $L$ and the second is just the associative law in $L$.

**4.15 Definition.** If $L:K$ is a field extension, an _intermediate field_ is a subfield $M$ of $L$ that contains $K$.

**4.16 Definition.** Let $L:K$ be a field extension and suppose $a\in L$. We say that $a$ is _algebraic over $K$_ if there exists a nonzero $p\in K[t]$ such that $p(a)=0\in L$. If $a$ is algebraic over $K$, the _degree_ of $a$ is the smallest integer $n$ such that there exists a polynomial $p\in K[t]$ of degree $n$ such that $p(a)=0$.

**4.17 Theorem.** Let $L:K$ be a field extension, and let $a\in L$ be algebraic over $K$. Then

$$ K[a]=\big \{f(a) \in L \mid f\in K[t]\big \} $$

is a intermediate field: that is, it is a field and $K\subseteq K[a]\subseteq L$. If $a$ is of degree $n$, then $(1, a, a^2, \dots , a^{n-1})$ is a basis for $K[a]$ over $K$.

Proof: We consider the evaluation homomorphism $\ev _a\colon K[t]\to L$, given by $\ev _a(f) = f(a)$ (Example II.3(iv) and Proposition II.7). Since $K$ is a field, $K[t]$ is a PID (see Example III.17(iii)), so $\Ker (\ev _a)$ is a principal ideal: that is, $\Ker (\ev _a)= p\kk [t]$ for some $p\in \kk [t]$.

We claim that $p$ is irreducible. Certainly $p\neq 0$, because $a$ is algebraic, so it is annihilated by some nonzero polynomial; and $p$ is not a unit because that would imply $\Ker (\ev _a)=K[t]$, but $1\not \in \Ker (\ev _a)$. So $p$ is a nonzero nonunit: suppose it is reducible. Then $p=fg$ and neither $f$ nor $g$ is a unit, so $0=p(a)=f(a)g(a)$ in $L$, and since $L$ is a field that implies that one of the factors is zero: say $f(a)=0$, so $f\in \Ker (\ev _a)$. Since $\Ker (\ev _a)=\latt {p}$ that tells us that $p|f$, so $\deg p\le \deg f$.

On the other hand, $g$ is not a unit, so $\deg g>0$: but $\deg f+\deg g=\deg p$ so $\deg f <\deg p$. This is a contradiction, so $p$ is irreducible. In particular, $n=\deg p$.

Now observe that $K[a]=\Image (\ev _a)$, so it is isomorphic to $K[t]/\Ker (\ev _a)=\kk [t]/p\kk [t]$ by the first isomorphism theorem II.19. But $\kk [t]/p\kk [t]$ is a field by Theorem III.22,

Lemma IV.14 shows that $\kk [a]$ is a $\kk$-algebra, so all that remains is to show that $(1, a, a^2, \dots , a^{n-1})$ is a basis of $\kk [a]$ over $\kk$. First we show linear independence: if there exist $\lambda _i\in K$ such that $\sum _{i=0}^{n-1} \lambda _ia^i=0$ then $f(t)=\sum _{i=0}^{n-1}\lambda _it^i\in \Ker (\ev _a)$ so $p|f$, but then $p|f$ so either $f=0$ in $K[t]$ (so $\lambda _i=0$ for all $i$) or $n=\deg p \le \deg f\le n-1$, which is impossible.

It remains to show that $(1,a,\ldots ,a^{n-1})$ is a spanning set. Let $f(a)\in \kk [a]$. Since $\kk [t]$ is a Euclidean domain with Euclidean valuation $\nu (f)=\deg (f)$ (see Example III.13(iii)) we can write $f=qp+r$ where either $r=0$ or $\deg (r)<\deg (p)=n$: say $r=\mu _0+\mu _1x+\cdots +\mu _{n-1}x^{n-1}$. Now

$$ f(a) = q(a)p(a)+r(a) = r(a) = \mu _0\cdot 1+\mu _1a+\cdots +\mu _{n-1}a^{n-1}. $$

**4.18 Example.**

*   (i) $\CC =\RR [i]$ is a field extension obtained by taking $K=\RR$ (and $L=\CC$) and $p(t)=t^2+1$ and a $\RR$-basis for $\CC$ is $(1,i)$.
    
*   (ii) $\QQ \subseteq \RR$ and $\sqrt [3]2$ is a root of the irreducible polynomial $t^3-2\in \QQ [t]$. Hence $\QQ [\sqrt [3]2]=\QQ +\QQ \sqrt [3]2+ \QQ (\sqrt [3]2)^2$ has basis $(1,\sqrt [3]2,(\sqrt [3]2)^2)$.
    

**4.19** To use Theorem IV.17 we require a big field $L$ that already contains $a$. So in Example IV.18(i) we have not constructed the complex numbers starting from the reals: we were working in the complex numers already. However, almost the same argument allows us to dispense with $L$ if we want to.

**4.20 Theorem.** Let $p\in \kk [t]$ be irreducible in $\kk [t]$. The field extension $\kk \subseteq L=\kk [t]/p\kk [t]$ has dimension $n=\deg (p)$ as a $\kk$-vector space, and the element $a=t+pK[t]\in L$ is a root of $p$.

Proof: For convenience, for $f\in K[t]$ we write $\overline f= f+pK[t]\in L$.

$\kk [t]$ is a PID, so $L$ is a field by Theorem III.22. We may identify $\kk$ with the subfield $\kk \cdot \overline {1}\subseteq L$ so as to get a field extension $L:K$.

Now $a=\overline t \in L$: let $f=\sum \lambda _it^i\in \kk [t]$. Then

$$ f(a)=\sum _i\lambda _ia^i=\sum _i\lambda _i\overline {t}^i=\overline {\sum _i\lambda _i t^i}=\overline {f}. $$

In particular, $p(a)=\overline {p}=\overline {0}=0_L$, so $a$ is a root of $p$ in $L$. Now we can apply Theorem IV.17 and we notice that

$$ \kk [a]=\{f(a)\mid f\in \kk [t]\}=\{\overline {f}\mid f\in \kk [t]\}=L. $$

So by Theorem IV.17, the dimension of $L=\kk [a]$ as a vector space over $\kk$ is the minimum degree of a polynomial in $\kk [t]$ that vanishes at $a$. Now $p$ is such a polynomial and if $h$ is another, then $h(a)=\overline {h}=0_L$ so $p|h$ and hence $\deg h\geq \deg p$. Thus $\dim _\kk L=\deg p$.

**4.21 Corollary.** Let $\kk$ be a field and let $f\in \kk [t]$ be nonconstant. Then there exists a field extension $L:\kk$ and an element $a\in L$ such that $f(a)=0$ and such that $f$ can be written as product of polynomials of degree $1$ in $L[t]$.

**4.22 Example.**

*   (i) The polynomial $p=t^2+1\in \RR [t]$ is irreducible in $\RR [t]$, so Theorem IV.20 gives a root $a$ in the field $\RR [t]/\RR [t](t^2+1)=\RR +\RR a$ where $a=\overline {t}$. Now $a^2+1=0$ and thus $a^2=-1$, so this field is isomorphic to $\CC$.
    
*   (ii) Consider the polynomial $t^2-3\in \QQ [t]$. This is an irreducible polynomial in $\QQ [t]$ and Theorem IV.20 gives a root $a$ in the field $\QQ [t]/\QQ [t](x^2-3)=\QQ +\QQ a$, where $a=\overline {t}$. This field is isomorphic to the subfield $\QQ +\QQ \sqrt {3}$ of $\RR$.
    
*   (iii) Consider $p=t^2+t+1$ in $\FF _2[t]$. If the polynomial were not irreducible there would be a linear factor in $\FF _2[t]$. But as $p(0)=p(1)=1$ this is not the case, so $p$ is irreducible and has a root $a=\overline {t}$ in the field $\FF _4=\FF _2[t]/p\FF _2[t]=\FF _2+ \FF _2a$.
    

##### Normed $\RR$-algebras

**4.23 Definition.** An _inner product_ on a real vector space $V$ is a positive definite symmetric bilinear form

$$ \latt {\; \cdot \; ,\; \cdot \;} \colon V\times V\to \RR . $$

A real vector space with a chosen inner product is called an _inner product space_.

**4.24 Definition.** If $V$ is an inner product space, the _norm_ is $\| \cdot \| \colon V\to \RR$ given by $\|v\| = \sqrt {\latt {v, v}}$.

**4.25 Lemma.** Let $V$ be an inner product space.

*   (i) Nondegeneracy: if $\|v\|=0$ then $v=0$.
    
*   (ii) Triangle inequality: $\|v+w\|\leq \|v\|+\|w\|$, for $v,\,w\in V$, with equality if and only if $v=tw$ for some $t\ge 0$ (or $w=0$).
    
*   (iii) Pythagoras: $\|v+w\|^2=\|v\|^2+\|w\|^2$ if and only if $\latt {v,w}=0$.
    

**4.26 Definition.** Let $V$ be a nontrivial $\RR$-algebra. We say that $V$ is a _normed $\RR$-algebra_ if it is an inner product space and $\|u\cdot v\|=\|u\|\cdot \|v\|$ for all $u,\,v\in V$.

**4.27** Since $V$ is nontrivial, i.e. $1_V\neq 0_V$, it is easy to check that $\|1_V\|=1$.

**4.28 Example.**

*   (i) $\RR$ is a normed $\RR$-algebra with $\latt {a,b}=ab$ and norm the usual absolute value $|a| = \sqrt {a^2}$.
    
*   (ii) $\CC$ is a normed $\RR$-algebra in which the inner product is the usual dot product with respect to the standard basis $(1,i)$ and the norm is the usual complex modulus $\| a+bi\| = \sqrt {a^2+b^2}$.
    
*   (iii) The ring of quaternions $\HH$ (see Example IV.5) is a normed $\RR$-algebra: again the inner product is dot product with respect to the basis $(1,i,j,k)$ and the norm is $\|a+bi+cj+dk\| = \sqrt {a^2+b^2+c^2+d^2}$.
    

**4.29 Lemma.** Let $V$ be a normed $\RR$-algebra.

*   (i) If $(1,i)\in V$ are orthonormal, then $i^2=-1$.
    
*   (ii) If $(1,i,j)\in V$ are orthonormal, then $(1,i,j,ij)$ are orthonormal and $ji=-ij$.
    

Proof: For part (i), we have $\|i^2\|=\|i\|^2=1$, so

$$ \|i^2+(-1)\|=\|(i-1)(i+1)\|=\|i-1\|\cdot \|i+1\|=\sqrt {2}\sqrt {2}=1+1=\|i^2\|+\|-1\|. $$

By the triangle inequality we should only get equality here if $i^2$ is a positive multiple of $-1$ and, as $\|i^2\|=1$, this can only happen if $i^2=-1$.

For part (ii), notice that $\frac {i+j}{\sqrt {2}}$ is orthogonal to $1$ and of norm $1$, so by (i)

$$ -1=\left (\frac {i+j}{\sqrt {2}}\right )^2=\frac {i^2+j^2+ij+ji}{2}=\frac {(-1)+(-1)+ij+ji}{2}= -1+\frac {ij+ji}{2}. $$

Hence $ji=-ij$. Notice also that $\|ij\|=\|i\|\cdot \|j\|=1$, so

$$ \|ij+(-i)\|^2=\|i(j-1)\|^2=\|i\|^2\cdot \|j-1\|^2= 1\cdot 2=1+1=\|ij\|^2+\|-i\|^2. $$

By Pythagoras, $ij$ is orthogonal to $i$, and similarly it is orthogonal to $j$. Finally

$$ \|ij-1\|^2=\|ij+i^2\|^2=\|i(j+i)\|^2=\|i\|^2\cdot \|j+i\|^2= 1\cdot 2=2=\|ij\|^2+\|-1\|^2 $$

gives that $ij$ is orthogonal to $1$ as well.

**4.30 Theorem.** There are exactly three normed $\RR$-algebras up to isomorphism, namely, $\RR$, $\CC$ and $\HH$.

Proof: Let $V$ be a normed $\RR$-algebra.

*   • If $\dim V=1$, then $V=\RR 1_V$. Since $1_V\cdot 1_V=1_V$, we have that $V$ is isomorphic as an $\RR$-algebra (that is, as a ring and as an $\RR$-vector space) to $\RR$.
    
*   • If $\dim V=2$, we may choose an orthonormal basis $(1,i)$. Then $i^2=-1$ by Lemma IV.29(i), we have $i^2=-1$. Thus $V$ is isomorphic as an $\RR$-algebra to $\CC$.
    
*   • $\dim V = 3$ is impossible by Lemma IV.29(ii).
    
*   • If $\dim (V)=4$, we may choose an orthonormal basis $(1,i,j,ij)$ of $V$. The linear map $\varphi \colon V\to \HH$ sending $1, i, j, ij$ to $1, i, j, k$ respectively preserves the product and hence shows that $V$ is isomorphic to $\HH$ as an $\RR$-algebra. Indeed, we have $i^2=j^2=(ij)^2=-1$ on $V$ by Lemma IV.29(i) and $i^2=j^2=k^2=-1$ on $\HH$ by definition. As for the other products in $V$, Lemma IV.29(ii) shows that $ji=-ij$ (and similarly, for any pair among $i, j, ij$) while in $\HH$ we have $ji=-ij = -k$ by definition (and similarly, for any pair among $i, j, k$). Thus, the product of any two basis elements, and hence the structure of the algebra, is uniquely determined.
    
*   • $\dim (V)>4$ is also impossible. To see this take three orthonormal vectors $(1,i,j)$ and put $k=ij$: by Lemma IV.29(ii) we get a subspace $\RR +\RR i+\RR j+ \RR k$ of $V$. If $\dim V>4$ we can find $l\in V$ with $\| l\| = 1$ orthogonal to $1,i,j,k$. But then Lemma IV.29(ii) gives
    
    $$ kl=-lk=-lij=ilj=-ijl=-kl $$
    
    so $kl=0$. But $\|kl\|=\|ijl\|=\|i\|\cdot \|j\|\cdot \|l\|=1$, a contradiction.