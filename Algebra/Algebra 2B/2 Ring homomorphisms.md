#### 2 Ring homomorphisms

##### Definitions and examples

**2.1** Ring homomorphisms do for rings what maps do for sets, what linear maps do for vector spaces and what group homomorphisms do for groups. That is, they connect them, and thereby allow us to compare one object (set, vector space etc.) with another.

**2.2 Definition.** Let $R$, and $S$ be rings. A map $\varphi \colon R\to S$ is said to be a _ring homomorphism_ if and only if for all $a,\, b\in R$, we have

$$ \varphi (a+b) = \varphi (a)+\varphi (b) \quad \text { and }\quad \varphi (a\cdot b) = \varphi (a)\cdot \varphi (b). $$

**2.3 Example.** Here are a few examples and unexamples.

*   (i) The map $\varphi \colon \ZZ \to \ZZ /2\ZZ$ defined by
    
    $$ \varphi (n) = \left \{\begin {array}{cr} 0 & \text {if }n\text { is even} \\ 1 & \text {if }n\text { is odd}\end {array}\right . $$
    
    is a ring homomorphism. Indeed, if we compare the rules for adding and multiplying even and odd integers with the addition and multiplication tables for $\ZZ /2\ZZ$, we see that computing in $\ZZ$ and then applying $\varphi$ is the same as applying $\varphi$ and then computing in $\ZZ /2\ZZ$.
    
*   (ii) More generally, the map $\varphi \colon \ZZ \to \ZZ /n\ZZ$ that takes an integer $a$ to its residue class $[a]$ mod $n$ is a ring homomorphism, for any $n\in \NN$.
    
*   (iii) The map $\varphi \colon \ZZ \to 2\ZZ$ defined by $\varphi (n)=2n$ is _not_ a ring homomorphism, because $\varphi (nm) = 2nm$ is typically not equal to $4nm=(2n)(2m)=\varphi (n)\varphi (m)$.
    
*   (iv) Let $R$ be a commutative ring and choose $r\in R$. a polynomial $f\in R[t]$ with coefficients in $R$, then $f(r)\in R$, so we obtain a map
    
    $$ \ev _r\colon R[t]\To R $$
    
    by taking $ev_r(f)=f(r)$. In other words, we _evaluate_ each polynomial at $r\in R$, i.e., substitute $r\in R$ into each polynomial. We shall see shortly in Proposition II.7 that $\ev _r$ is a ring homomorphism, for any $r\in R$.
    
*   (v) We cannot construct a map $\ev _r\colon R[[t]]\to R$, using power series instead of polynomials, in the same way as in (iv), because we do not know in general how to make sense of the infinite sum $\sum _{k=0}^\infty a_k r^k$. The ring axioms only allow us to add together finitely many elements of $R$. If $R=\RR$ or $R=\CC$ and we look only at convergent power series then we can hope to do something, but that is analysis, not algebra.
    
*   (vi) The map $\varphi \colon \RR \to M_{2\times 2}(\RR )$ given by $\varphi (x)=\begin {pmatrix} x & 0\\ 0 & 0 \end {pmatrix}$ is a ring homomorphism.
    

**2.4 Lemma.** The composition of two ring homomorphisms is a ring homomorphism.

**2.5 Lemma.** If $\varphi \colon R\to S$ is a ring homomorphism then

*   (i) for $a,\, b\in R$, we have $\varphi (b-a)= \varphi (b)-\varphi (a)$;
    
*   (ii) $\varphi (0_{R})=0_{S}$;
    
*   (iii) for $a\in R$, we have $\varphi (-a) = -\varphi (a)$.
    

Proof: For part (i), we have

$$ \varphi (b-a)+\varphi (a)=\varphi \big ((b-a)+a\big )=\varphi \big (b+(a-a)\big )=\varphi (b+0)=\varphi (b), $$

and we add $-\varphi (a)$ to both sides.

For (ii), substitute $b=a$ in (i) to obtain

$$ \varphi (0_R) = \varphi (a-a) = \varphi (a)-\varphi (a) = 0_S. $$

For part (iii), substitute $b=0$ into (i) and use (ii) to obtain

$$ \varphi (-a) = \varphi (0_R-a)=\varphi (0_R)-\varphi (a) = 0_S - \varphi (a) = -\varphi (a) $$

as required.

**2.6** Notice that in Lemma II.5 we have not claimed that $\varphi (1_R)=1_S$, and indeed that does not have to happen. For an example, see II.3(vi). In that case we have $\varphi (1)=\begin {pmatrix}1&0\\ 0&0 \end {pmatrix}$, which is not the identity matrix.

**2.7 Proposition.** Let $R$ be a commutative ring and $r\in R$. Then the evaluation map $\ev _r\colon R[t]\to R$ is a ring homomorphism.

Proof: Given any two polynomials $f=\sum _{k=0}^{d_1}a_kt^k$ and $g=\sum _{k=0}^{d_2}b_kt^k$, we have

$\seteqnumber{0}{}{0}$

$$ \begin{eqnarray*} \ev _r(f+g) &=& \ev _r\left (\sum _{k=0}^{\max \{d_1,d_2\}}(a_k+b_k)t^k\right )\\ &=& \sum _{k=0}^{\max \{d_1,d_2\}}(a_k+b_k)r^k\\ &=& \sum _{k=0}^{d_1}a_kr^k+\sum _{k=0}^{d_2}b_kr^k\\ &=& \ev _r(f)+\ev _r(g), \end{eqnarray*} $$

using commutativity of addition and distributivity in $R$ to get from the second line to the third. Similarly

$\seteqnumber{0}{}{0}$

$$ \begin{eqnarray*} \ev _r(fg) &=& \ev _r\left (\sum _{k=0}^{d_1+d_2}\left (\sum _{i+j=k}a_ib_j\right )t^k\right )\\ &=& \sum _{k=0}^{d_1+d_2}\left (\sum _{i+j=k}a_ib_j\right )r^k \\ &=& \sum _{i=0}^{d_1+d_2} a_ir^i \cdot \sum _{j=0}^n b_jr^j\\ &=& \ev _r\left (\sum _{i=0}^{d_1}a_it^i\right )\cdot \ev _r\left (\sum _{j=0}^{d_2}b_jt^j\right ) \\ &=& \ev _r(f)\cdot \ev _r(g), \end{eqnarray*} $$

where the first line comes from the definition of multiplication in $R[t]$ and getting from the second line to the third uses everything: the distributive laws, commutativity of addition and associativity of both addition and multiplication in the ring $R$.

**2.8** Actually we could replace $R[t]$ by $S[t]$ for $S$ a subring of $R$ (strictly speaking we ought to insist that $1\in S$ to avoid breaking our rules about what a ring is). So for example we could take decide to evaluate all real polynomials at $t=\sqrt {-1}$: of course we will then get complex numbers. We don’t even need $R$ to be commutative: it wasn’t used in the proof of Proposition II.7.

##### Kernel and image

**2.9 Definition.** Let $\varphi \colon R\to S$ be a ring homomorphism. The _kernel_ of $\varphi$ is the subset $\Ker \varphi$ of $R$ given by

$$ \Ker \varphi =\{a\in R \mid \varphi (a)=0\}. $$

This is very similar to the definition of null space in vector spaces, or kernel in groups. Remember, though, that the kernel consists of all those elements that are mapped to $0$, not $1$. This is because the only operation that makes a ring into a group is addition: we are missing multiplicative inverses.

**2.10 Definition.** Again let $\varphi \colon R\to S$ be a ring homomorphism. The _image_ of $\varphi$ is the subset $\Image \varphi$ of $S$ given by

$$ \Image \varphi =\{\varphi (a) \in S \mid a\in R\}. $$

**2.11 Lemma.** Let $\varphi \colon R\to S$ be a ring homomorphism. Then $\Ker \varphi$ is an ideal of $R$. Moreover, $\varphi$ is injective if and only if $\Ker \varphi = \{0\}$. Proof: Since $\varphi (0_R)=0_{S}$ we have $0_R\in \Ker \varphi$ and hence $\Ker \varphi \neq \varnothing$. If $a,\,b\in \Ker \varphi$ then

$$ \varphi (a-b)=\varphi (a)-\varphi (b)=0-0=0, $$

and for $r\in R$ and $a\in \Ker \varphi$ we have

$$ \varphi (ra)=\varphi (r)\varphi (a)=\varphi (r)\cdot 0=0\quad \text {and}\quad \varphi (ar)=\varphi (a)\varphi (r)=0\cdot \varphi (r)=0. $$

Thus $a+b,\,ra,\,ar\in \Ker \varphi$, so $\Ker \varphi$ is an ideal in $R$.

To prove the second statement, assume $\Ker \varphi =\{0\}$ and suppose that $a,\, b\in R$ satisfy $\varphi (a)=\varphi (b)$. Then Lemma II.5(1) implies that

$$ \varphi (b-a) = \varphi (b)-\varphi (a)=0 $$

so $b-a\in \Ker \varphi$. This forces $a=b$, so $\varphi$ is injective. Conversely, assume $\varphi$ is injective and let $a\in \Ker \varphi$. Lemma II.5(ii) gives $\varphi (0)=0 = \varphi (a)$, and injectivity of $\varphi$ forces $a=0$, hence $\Ker \varphi =\{0\}$ as required.

**2.12 Lemma.** Let $\varphi \colon R\to S$ be a ring homomorphism. Then $\Image \varphi$ is a subring of $S$. Moreover, $\varphi$ is surjective if and only $\Image \varphi = S$.

Proof: Again $\varphi (0_R)=0_S$, so $\Image \varphi$ is nonempty. Let $a,\, b\in \Image \varphi$, so there exist $c,\, d\in R$ such that $a=\varphi (c)$ and $b=\varphi (d)$. Then

$$ a-b = \varphi (c)-\varphi (d)= \varphi (c-d) $$

by Lemma II.5(i), and $ab = \varphi (c)\varphi (d) = \varphi (cd)$. This gives $a-b, ab\in \Image \varphi$, so $\Image \varphi$ is a subring of $S$.

That $\varphi$ is surjective if and only if $\Image \varphi =S$ holds by definition.

**2.13 Definition.** Let $I$ be an ideal in a ring $R$. The _quotient map_ $\pi \colon R \to R/I$ is defined by setting $\pi (a) = a+I$.

**2.14 Definition.** Let $R$ be a ring and let $S$ be a subring of $R$ such that $1\in S$. The _inclusion map_ $\iota \colon S\to R$ is defined by setting $\iota (s)=s\in R$. i.e. by sending each element $s\in S$ to the same element considered as an element in $R$.

**2.15 Lemma.** Let $R$ be a ring, let $I$ be an ideal in $R$ and let $S$ be a subring of $R$ with $1\in S$. Then

*   (i) $\pi \colon R\to R/I$ is a surjective ring homomorphism, so $\Image \pi =R/I$, and $\Ker \pi =I$;
    
*   (ii) $\iota \colon S\to R$ is an injective ring homomorphism, so $\Ker \iota =\{0\}$, and $\Image \iota =S$.
    

Proof:

*   (i) $\pi$ is a ring homomorphism, because
    
    $$ \pi (a+b) = (a+b)+I = (a+I) + (b+I) = \pi (a)+\pi (b), $$
    
    and
    
    $$ \pi (ab) = ab+I = (a+I)(b+I) = \pi (a)\cdot \pi (b). $$
    
    It is clearly surjective, and $\pi (a)=0\iff a\in I$. Therefore $\Image \pi =R/I$ and $\Ker \pi =I$.
    
*   (ii) $\iota$ is a ring homomorphism because
    
    $$ \iota (a+b)=a+b=\iota (a)+\iota (b) $$
    
    and
    
    $$ \iota (a\cdot b)=a\cdot b = \iota (a)\cdot \iota (b). $$
    
    It is clearly injective and has image $S\subseteq R$, so $\Ker \varphi = \{0\}$ and $\Image \varphi = S$.
    

**2.16 Theorem.** Let $\varphi \colon R\to S$ be a ring homomorphism and let $I$ be an ideal in $R$ satisfying $I\subseteq \Ker \varphi$. Then there exists a unique ring homomorphism $\overline {\varphi }\colon R/I\to S$ such that the diagram

![(-tikz- diagram)](algebranotes.ac-images/image-1.svg)

commutes, i.e., $\overline {\varphi }\circ \pi =\varphi$.

Proof: The map $\overline {\varphi }\colon R/I\to S$ is defined by setting $\overline {\varphi }\big (a+I\big ) = \varphi (a)$. To see that this map is well-defined, independent of any choices, notice that

$\seteqnumber{0}{}{0}$

$$ \begin{eqnarray*} a+I=b+I &\iff & a-b\in I\\ & \imp & a-b \in \text {Ker}(\varphi ) \\ & \iff &0=\varphi (a-b)=\varphi (a)-\varphi (b)\\ & \iff &\varphi (a)=\varphi (b). \end{eqnarray*} $$

In particular, $a+I=b+I\imp \varphi (a)=\varphi (b)$, so $\overline {\varphi }$ does not depend on the choice of representative $a$ in the coset $a+I$.

To see that $\overline {\varphi }$ is a ring homomorphism, notice that

$$ \overline {\varphi }((a+I)+(b+I))=\overline {\varphi }((a+b)+I)=\varphi (a+b)=\varphi (a)+\varphi (b)= \overline {\varphi }(a+I)+\overline {\varphi }(b+I) $$

and

$$ \overline {\varphi }((a+I)\cdot (b+I))=\overline {\varphi }(ab+I)=\varphi (ab)=\varphi (a)\cdot \varphi (b)= \overline {\varphi }(a+I)\cdot \overline {\varphi }(b+I). $$

The ring homomorphism $\overline \varphi$ satisfies $\overline {\varphi }\circ \pi = \varphi$, because for all $a\in R$ we have

$$ \big (\overline {\varphi }\circ \pi \big )(a) = \overline {\varphi }(a+I) = \varphi (a) $$

as required.

Finally, $\overline \varphi$ is the unique map (in particular, the unique ring homomorphism) satisfying the conditions. For if $\theta \colon R/I\to S$ satisfies $\theta \circ \pi =\varphi$ then $(\theta \circ \pi )(a) = \varphi (a)$ for all $a\in R$, and since $\pi (a)=a+I$, this implies that $\theta (a+I) = \varphi (a)$ for all $a\in R$: that is, $\theta =\overline \varphi$.

##### Isomorphism

**2.17 Definition.** Let $R,\, S$ be rings. A homomorphism $\varphi \colon R\to S$ is called an _isomorphism_ if there is a ring homomorphism $\psi \colon S\to R$ such that $\psi (\varphi (r))= r$ for all $r\in R$ and $\varphi (\psi (s))=s$ for all $s\in S$. Given an isomorphism $\varphi \colon R\to S$, we say that $R$ is _isomorphic_ to $S$ and write $R\cong S$.

**2.18** The inverse map to a ring isomorphism is a ring isomorphism. Indeed, forgetting for a moment the addition and multiplication, an isomorphism $\varphi \colon R\to S$ is bijective as a map of sets, and the inverse is the map $\varphi ^{-1}=\psi$ from II.17. In particular, isomorphism is symmetric: saying that $R$ is isomorphic to $S$ is the same as saying that $S$ is isomorphic to $R$.

Nevertheless, the definition does _not_ say that an isomorphism is a bijective homomorphism. It could in principle be that $\varphi \colon R \to S$ is a ring homomorphism and a bijection, but that $\varphi ^{-1}\colon S \to R$ fails to be a ring homomorphism. Actually that doesn’t happen, but that’s a theorem about rings: we can’t make it happen by definition. We shall use that theorem below in the proof of Theorem II.19.

Saying that two rings are isomorphic is saying that they are structurally identical. It doesn’t make them actually the same thing. For instance the map that takes $a\in \RR$ to $\begin {pmatrix}a & 0 \\ 0 & a \end {pmatrix}$ is an isomorphism from $\RR$ to the ring of $2\times 2$ diagonal real matrices having only one eigenvalue, but a real number is not a $2\times 2$ matrix.

**2.19 Theorem.** Let $\varphi \colon R\to S$ be a ring homomorphism. Then there is a ring isomorphism

$$ \overline \varphi \colon \big (R/\Ker \varphi \big )\To \Image \varphi . $$

Proof: Applying the universal property from Theorem II.16 to the ideal $I= \Ker \varphi$ gives a ring homomorphism $\overline \varphi \colon R/\Ker \varphi \to S$ given by $\overline \varphi (a+\Ker \varphi ) = \varphi (a)$. From this we get a surjective ring homomorphism (with the same name!)

$$ \overline \varphi \colon R/\Ker \varphi \To \Image \varphi $$

simply by changing the target of the morphism, making it be the image of $\varphi$ rather than $S$.

To see that $\overline \varphi$ is injective, suppose $\overline \varphi (a+I) = \overline \varphi (b+I)$. Then $\varphi (a)=\varphi (b)$, so $\varphi (a-b) = \varphi (a)-\varphi (b) = 0$, giving $a-b\in \Ker \varphi =I$ and hence $a+I=b+I$ as required.

Therefore the map $\overline \varphi \colon R/\Ker \varphi \to \Image \varphi$ is a bijective ring homomorphism, so it’s an isomorphism as we pointed out in II.18.

**2.20 Corollary.** Every ring homomorphism can be written as the composition of a surjective ring homomorphism, then an isomorphism, and finally an injective ring homomorphism.

Proof: We factorise $\varphi \colon R \to S$ as shown below:

![(-tikz- diagram)](algebranotes.ac-images/image-2.svg)

where $\pi$ is the quotient map from II.13, $\overline \varphi$ is the map from II.19, and $\iota$ is the inclusion map from II.14. These maps have the required properties by II.15 and II.19.

**2.21 Corollary.** Let $\varphi \colon K\to R$ be a ring homomorphism where $K$ is a field. Then $\varphi$ is either the zero map or an isomorphism from $K$ to a subring of $R$.

Proof: The kernel of $\varphi$ is an ideal in $K$, and a field can only have two ideals: $\{0\}$ (when $\varphi$ is an isomorphism onto its image) and $K$ (when $\varphi =0$). For if $I$ is a nonzero ideal in $K$ then we have $0\neq b\in I$, so $1=b^{-1}b\in I$, so for any $a\in K$ we have $1a\in I$, so $I=K$.

##### Characteristic

**2.22** Given a ring $R$, an element $a\in R$ and $n\in \ZZ$ we define an element $na\in R$ by

$$ n a = \underbrace {a+\cdots +a}_n \text { if $n\ge 0$, and } (-n)a=-(na). $$

In particular, zero copies of an element $a\in R$ is the zero element $0_R\in R$, that is $0a =0_R$, where $0$ is the zero element in $\ZZ$.

This is just notation. It is tempting to using the phrase “multiply $a$ by $n$” for it, and everybody does, but what it really means is “add together $n$ copies of $a$”. We are not doing any ring multiplication, only addition.

Slightly more formally, we could say that we are defining a map $\ZZ \times R \to R$ and calling this multiplication, even though we shouldn’t do because we have already used the word “multiplication” as the name of a map $\cdot \colon R\times R \to R$.

Notice that $0_R\cdot a=0_R$ is a fact that we proved in Lemma I.14 but $0a=0_R$ is just a natural notation when $0$ is the zero integer.

**2.23 Definition.** The _characteristic_ of a ring $R$, denoted $\Char R$, is a non-negative integer defined as follows: if there is a positive integer $m$ such that $m1_R=0_R$, then $\Char R$ is the smallest such positive integer; otherwise, there is no such positive integer and we say that $\Char R=0$.

**2.24 Example.** It is usually obvious what the characteristic is.

*   (i) The zero ring $R=\{0\}$ has $\Char R =1$, because $1_R=0_R=0$. No other ring has $\Char R=1$.
    
*   (ii) For any $n\in \NN$ we have $\Char \ZZ /n\ZZ =n$.
    
*   (iii) The field $\CC$ has characteristic zero, and hence so do $\ZZ$, $\QQ$ and $\RR$.
    

**2.25 Lemma.** Let $R$ be a ring of positive characteristic $n>0$. Then $na=0$ for all $a\in R$.

Proof: For $a\in R$, we have

$$ na=\underbrace {a+\cdots +a}_n= (\underbrace {1_R\cdot a+\cdots +1_R\cdot a}_n)= (\underbrace {1_R+\cdots +1_R}_n)\cdot a=0_R\cdot a=0_R $$

as required.

**2.26 Definition.** Let $R$ be a ring with $1$. Then

$$ \ZZ 1_R=\{n1_R \mid n\in \ZZ \} = \big \{\ldots ,(-2)1_R,-1_R,0_R,1_R,(2) 1_R,\ldots \big \}. $$

is (obviously) a subring of $R$ (with $1$), called the _prime subring_ of $R$.

**2.27 Lemma.** Let $R$ be a ring. Then either:

*   (i) $\Char R=0$, in which case $\ZZ 1_R$ is isomorphic to $\ZZ$; or
    
*   (ii) $\Char R=n>0$, in which case $\ZZ 1_R$ is isomorphic to $\ZZ /n\ZZ$.
    

Proof: The map $\varepsilon \colon \ZZ \to R$ given by $\varepsilon (n) = n1_R$ is a ring homomorphism because

$$ \varepsilon (n+m)=(n+m)1_R=n1_R+m1_R=\varepsilon (n)+\varepsilon (m), $$

and the distributive law gives

$$ \varepsilon (nm)=nm1_R=n1_R\cdot m1_R=\varepsilon (n)\cdot \varepsilon (m). $$

Moreover, the image of $\varepsilon$ is clearly $\ZZ 1_R$.

Suppose first that $\Char R=0$. Then $\varepsilon (n) = n1_R$, which equals $0_R$ if and only if $n=0$, so $\Ker \varepsilon =\{0\}$. Applying II.19 to $\varepsilon$ gives $\ZZ \cong \ZZ 1_R$ which proves (i).

Otherwise, $\Char (R)=n>0$. Then $\varepsilon (m)=m1_R$, which equals $0_R$ if and only if $n|m$, so $\Ker \varepsilon = n\ZZ$. Applying II.19 to $\varepsilon$ gives $\ZZ _n\cong \ZZ 1_R$, which proves (ii).

**2.28 Proposition.** The characteristic of an integral domain is either $0$ or a prime.

Proof: Let $R$ be an integral domain. Notice first that $\Char R\neq 1$, because $R\neq \{0\}$. So if $n=\Char R$ is neither $0$ nor a prime, it must be composite: that is, we can write $n=rs$ for some $1<r\le s<n$. Then

$$ 0_R=n1_R =(rs)1_R=(r1_R)\cdot (s1_R), $$

but since $R$ is an integral domain it follows that either $r1_R=0$ or $s1_R=0$. But then we have found $k$ with $0<k<n$ such that $k1_R=0_R$, which is impossible because $n$ was supposed to be the least such positive integer.

##### The Chinese remainder theorem

**2.29 Definition.** Let $I$ and $J$ be ideals of $R$.

*   (i) The _sum_ $I+J$ of $I$ and $J$ is the subset
    
    $$ I+J:=\{a+b\in R \mid a\in I,b\in J\}. $$
    
*   (ii) The _product_ $IJ$ of $I$ and $J$ is the subset
    
    $$ IJ:= \left \{ \sum _{i=1}^k a_ib_i \in R \mid k\in \NN ,\, a_i\in I,\, b_i\in J \text { for all }1\leq i\leq k\right \}. $$
    
*   (iii) The _intersection_ $I\cap J$ of $I$ and $J$ is the subset
    
    $$ I\cap J := \left \{ a\in R \mid a\in I\text { and }a\in J\right \}. $$
    

**2.30 Lemma.** If $I$ and $J$ are ideals of $R$ then $I+J$, $IJ$ and $I\cap J$ are all ideals of $R$. Moreover, $IJ \subseteq I\cap J\subseteq I+J$.

**2.31** $IJ$ is the smallest ideal containing the set of products $ab$ for $a\in I$ and $b\in J$. The set of such products fails to be an ideal itself because it is not closed under addition.

**2.32 Example.** Take $R=\ZZ$ and consider $m,\,n\in \ZZ$. If we take $I=m\ZZ =\latt m$ and $J=n\ZZ =\latt n$, then $IJ=\latt {mn}$, $I+J = \latt {\hcf (m,n)}$ and $I\cap J = \latt {\lcm (m,n)}$.

Notice that $mn\ge \lcm (m,n) \ge \hcf (m,n)$: compare this with II.30.

**2.33 Definition.** Let $R$ and $S$ be rings. The _direct product_ of $R$ and $S$ is the ring

$$ R\times S=\big \{(r,s) \mid r\in R,\ s\in S\big \}, $$

where the operations are $(a,b)+(c,d) = (a+c,b+d)$ and $(a,b)\cdot (c,d) = (ac,bd)$.

**2.34 Theorem.** (Chinese Remainder Theorem) Let $I,\, J$ be ideals in a ring $R$ satisfying $I+J=R$. Then there is a ring isomorphism

$$ \frac {R}{I\cap J}\cong \frac {R}{I}\times \frac {R}{J}. $$

Proof: Consider the map $\varphi \colon R\to R/I\times R/J$ defined by setting $\varphi (a) = (a+I, a+J)$. This is a ring homomorphism because

$\seteqnumber{0}{}{0}$

$$ \begin{align*} \varphi (a+b) & = (a+b+I, a+b+J) & \\ & = \big ( (a+I)+(b+I), (a+J)+(b+J)\big ) & \text { by I.45} \\ & = (a+I, a+J) + (b+I, b+J) & \text {by II.33} \\ & =\varphi (a) + \varphi (b) & \end{align*} $$ and

$\seteqnumber{0}{}{0}$

$$ \begin{align*} \varphi (a\cdot b) & = (a\cdot b+I, a\cdot b+J) & \\ & = \big ( (a+I)\cdot (b+I), (a+J)\cdot (b+J)\big ) & \text { by I.45} \\ & = (a+I, a+J) \cdot (b+I, b+J) & \text {by II.33} \\ & = \varphi (a) \cdot \varphi (b). & \end{align*} $$ We now compute the kernel of $\varphi$. For this, notice that

$$ a\in \Ker \varphi \iff (a+I,a+J)=(0+I,0+J)\iff a\in I\cap J, $$

so $\Ker \varphi =I\cap J$. The first isomorphism theorem, II.19, applied to $\varphi$ gives an isomorphism $\overline \varphi \colon R/(I\cap J)\to \Image \varphi$.

So it remains to show that $\varphi$ is surjective, i.e. that $\Image \varphi =R/I\times R/J$, so we choose an arbitrary $(a+I,b+J)\in R/I\times R/J$ and we need to show that this is in the image of $\varphi$. Since $R=I+J$, there exist $x\in I$ and $y\in J$ such that $1=x+y$: we set $r=ay+bx\in R$. Then

$\seteqnumber{0}{}{0}$

$$ \begin{align*} \varphi (r) & = (ay+bx+I, ay+bx+J) & \\ & = ( ay+I, bx+J) & \text { as }bx\in I\text { and } ay\in J \\ & = \big (a(1-x)+I, b(1-y)+J\big ) & \text {as } 1=x+y\\ & = \big (a-ax+I, b-by+J\big ) & \\ & = (a+I, b+J) & \text { as }x\in I\text { and } y\in J, \end{align*} $$ as required.

**2.35 Corollary.** Let $m,\, n\in \NN$ be coprime natural numbers: that is, there exist $\lambda ,\, \mu \in \ZZ$ such that $\lambda m+\mu n=1$. Then $\ZZ /mn\ZZ \cong \ZZ /m\ZZ \times \ZZ /n\ZZ$.

Proof: In this case we have $\ZZ = m\ZZ + n\ZZ$ (because the right-hand side is an ideal that contains $1$). Now II.34 gives the isomorphism: this is the Chinese Remainder Theorem from Algebra 1A.

##### Field of fractions

**2.36** The basic integral domain is $\ZZ$ and we can think of $\ZZ$ as determining $\QQ$. We want to do something similar starting with an arbitrary integral domain.

Consider the set $T=\{ (a,b)\in R\times R \mid b\neq 0\}$ together with two binary operations $T\times T\to T$ given by

$$ (a, b) + (c,d) := (ad+bc, bd) \quad \text {and}\quad (a, b)\cdot (c,d):= (ac, bd). $$

These operations are well defined – that is, the formulas each define a map from $T\times T$ to $T$ – precisely because $R$ is an integral domain. Indeed, suppose otherwise, i.e., suppose that $bd=0$. The fact that $R$ is an integral domain forces either $b=0$ or $d=0$, but then either $(a,b)\not \in T$ or $(c,d)\not \in T$ which is absurd.

Notice that $T$ with these operations is _not_ a ring: for instance, if $b\in R$ is not a unit then $(a,b)$ does not have an additive inverse.

**2.37 Lemma.** Define a relation $\sim$ on $T$ by setting $(a, b)\sim (c,d) \iff ad=bc$. Then for all $a,\, a’,\, b,\, b’,\, c,\, c’,\, d,\, d’ \in R$ with $b,\, b’,\, d,\, d’\neq 0$, we have

$$ (a,b)\sim (a’,b’)\text { and } (c,d)\sim (c’,d’) \imp \left \{\begin {array}{c} (a,b)+(c,d)\sim (a’,b’)+(c’,d’)\\ (a,b)\cdot (c,d)\sim (a’,b’)\cdot (c’,d’)\end {array}\right . $$

Proof: Notice that

$\seteqnumber{0}{}{0}$

$$ \begin{eqnarray*} (ad+bc)b’d’ & = & ab’dd’ + bb’cd’ \\ & = & a’bdd’ + bb’c’d \\ & = & (a’d’+b’c’)bd. \end{eqnarray*} $$

(The second line follows from the first by using the conditions $(a,b)\sim (a’,b’)$, i.e. $ab’=a’b$, and the same for $c$ and $d$.) But this says that $(ad+bc,bd)\sim (a’d’+b’c’,b’d’)$ and those are $(a,b)+(c,d)$ and $(a’,b’)+(c’,d’)$, so we have proved the part about addition.

Similarly for multiplication we notice that $ab’cd’ = a’bcd’ = a’bc’d$, and that says that $(ac, bd) \sim (a’c’,b’d’)$, i.e., that $(a,b)\cdot (c,d) = (a’,b’)\cdot (c’,d’)$ as required.

**2.38 Definition.** We define $\cQ (R)=T/{\sim }$, and we give the name $a/b$ (or $\frac {a}{b}$) to the equivalence class $[(a,b)]$.

$a/b$ is not quite the same thing as $ab^{-1}$, even if $b^{-1}$ happens to exist, but it almost is.

**2.39 Theorem.** Let $R$ be an integral domain. The operations $+$ and $\cdot$ on $T$ induce operations (also called $+$ and $\cdot$) on $\cQ (R)=T/{\sim }$. These rules make $\cQ (R)$ into a field, called the _field of fractions_ of $R$, and the map $R\to \cQ (R)$ defined by $a\mapsto \frac {a}{1}$ is an injective ring homomorphism.

Proof: The first part, the existence of the operations on $\cQ (R)$, is identical to the first part of the proof of Theorem I.37, because the conditions in Lemma II.37 are the same as in Definition I.36. Unfortunately, because $T$ is not a ring, we cannot simply continue by using Theorem I.37. We have to check the ring axioms in $\cQ (T)$ by hand.

Our convention that the classes are called $\frac {a}{b}$ does mean that addition and multiplication, as we have just defined them, are expressed in the usual way as addition and multiplication of fractions:

$\seteqnumber{0}{}{0}$

$$ \frac {a}{b} + \frac {c}{d} = \frac {ad+bc}{bd}\quad \text {and}\quad \frac {a}{b}\cdot \frac {c}{d} =\frac {ac}{bd}. $$

To check that $(\cQ (R),+)$ is an abelian group, take $\frac {a}{b},\, \frac {c}{d},\, \frac {e}{f}\in \cQ (R)$: then

$$ \left (\frac {a}{b}+\frac {c}{d}\right )+\frac {e}{f} = \frac {ad+bc}{bd}+\frac {e}{f} = \frac {adf+bcf+bde}{bdf} = \frac {a}{b}+\frac {cf+de}{df} = \frac {a}{b} + \left (\frac {c}{d}+\frac {e}{f}\right ) $$

so addition is associative. Addition is commutative in $\cQ (R)$ because multiplication in the integral domain $R$ is commutative (and addition is commutative) and hence

$$ \frac {a}{b} + \frac {c}{d} = \frac {ad+bc}{bd} = \frac {cb+da}{db} = \frac {c}{d}+\frac {a}{b} $$

The zero element is $\frac {0}{1}$ because

$$ \frac {a}{b}+\frac {0}{1} = \frac {a\cdot 1 + b\cdot 0}{b\cdot 1} = \frac {a}{b} = \frac {0\cdot b+1\cdot a}{1\cdot b} = \frac {0}{1}+\frac {a}{b}, $$

and the additive inverse of $\frac {a}{b}$ is $\frac {-a}{b}$ because $0\cdot 1 = 0 = b^2\cdot 0$ and hence in $\cQ (R)$ we have

$$ \frac {a}{b}+\frac {-a}{b} = \frac {ab + (-a)b}{b^2} = \frac {0}{b^2} = \frac {0}{1} = \frac {-ab+ab}{b^2} = \frac {-a}{b}+\frac {a}{b}. $$

Next multiplication is associative because multiplication in $R$ is associative, so

$$ \frac {a}{b}\cdot \left (\frac {c}{d}\cdot \frac {e}{f}\right ) = \frac {a}{b} \cdot \frac {ce}{df} = \frac {a(ce)}{b(df)} = \frac {(ac)e}{(bd)f} = \frac {ac}{bd}\cdot \frac {e}{f} = \left (\frac {a}{b}\cdot \frac {c}{d}\right )\cdot \frac {e}{f}. $$

For the distributive laws, $b^2df(acf+ade) = bdf(abcf+abde)$, so in $\cQ (R)$ we have

$\seteqnumber{0}{}{0}$

$$ \begin{eqnarray*} \frac {a}{b}\cdot \left (\frac {c}{d}+\frac {e}{f}\right ) & = &\frac {a}{b} \cdot \frac {cf+de}{df} = \frac {a(cf+de)}{bdf}= \frac {acf+ade}{bdf} \\ & = &\frac {abcf+abde}{b^2df} = \frac {ac}{bd}+\frac {ae}{bf} = \frac {a}{b}\cdot \frac {c}{d}+\frac {a}{b}\cdot \frac {e}{f}. \end{eqnarray*} $$

The other distributive law is similar, and the multiplicative identity is $\frac {1}{1}$. This proves that $\cQ (R)$ with the given operations is a ring.

To check that $\cQ (R)$ is a field, we need to check that it is commutative and not $\{0\}$ and nontrivial and that every nonzero element is a unit. Commutativity is easy: $\frac {a}{b}\frac {c}{d}=\frac {ac}{bd}=\frac {ca}{db}=\frac {c}{d}\frac {a}{c}$. It is not $\{0\}$ because $\frac {0}{1}\neq \frac {1}{1}$ (otherwise $0=1$ in $R$ which is excluded).

It remains to show that every nonzero element $\frac {a}{b}$ has a multiplicative inverse. But

$$ \frac {a}{b}\cdot \frac {b}{a} = \frac {ab}{ba} = \frac {1}{1} $$

so $\cQ (F)$ is a field.

Finally, $a\mapsto \frac {a}{1}$ is a homomorphism because $\frac {a}{1}+\frac {a’}{1}=\frac {a1+1a’}{1\cdot 1}=\frac {a+a’}{1}$ and $\frac {a}{1}\frac {a’}{1}=\frac {aa’}{1}$, and it is injective because $a\in R$ is in its kernel if and only if $\frac {a}{1}=\frac {0}{1}$, which immediately gives $a=0$.

**2.40 Example.** Apart from $\cQ (\ZZ )=\QQ$, the most familiar example of this is $\cQ (K[t])$ for $K$ a field, which is the field $K(t)$ of rational functions.