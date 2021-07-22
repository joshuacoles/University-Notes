#### 3 Factorisation in integral domains

##### Primes and irreducibles

**3.1** Integral domains are very common and are significantly better behaved than general rings. For this whole section, $R$ denotes an integral domain: in particular, $0_R\neq 1_R$.

**3.2 Example.** We’ve already seen many examples of integral domains:

*   (i) any field $\FF$ is an integral domain (see I.23);
    
*   (ii) the ring $\ZZ$ and the ring of Gaussian integers $\ZZ [i]$ are both integral domains by Lemma I.33 because they are subrings of $\CC$ and contain $1$.
    
*   (iii) the rings $R[t]$ and $R[[t]]$ associated to an integral domain $R$ are integral domains.
    

**3.3 Lemma.** Let $R$ be a commutative ring such that $0\neq 1$. Then $R$ is an integral domain if and only if it satisfies the _cancellation property_:

$$ \text {if }a,\,b,\,c\in R \text { and } a\neq 0, \text { then } ab=ac \imp b=c. $$

Proof: First, let $R$ be an integral domain, and suppose $ab=ac$ and $a\neq 0$. Then $0=ab+(-ac)=ab+a(-c)=a(b+(-c))$. Since $R$ is an integral domain and $a\neq 0$, we have $b+(-c)=0$, that is $b=c$.

In the other direction, let $R$ be a commutative ring such that $0\neq 1$, and assume the cancellation property. Suppose $ab=0$ and $a\neq 0$. Then $ab=0=a\cdot 0_R$, and since $a\neq 0$ the cancellation property gives $b=0$, which shows that $R$ is an integral domain.

**3.4 Definition.** Let $a,\, b\in R$. We say that $a$ _divides_ $b$ (or that $b$ is _divisible by_ $a$), and write $a|b$, if there exists $c\in R$ such that $b=ac$.

The $|$ in $a|b$ is a verb, and $a|b$ is a sentence which may be true or false, but is not, ever, the name of an element of $R$.

**3.5 Lemma.** Suppose $a,\,b\in R$. The following are equivalent:

*   (i) $a\vert b$
    
*   (ii) $b\in aR$
    
*   (iii) $bR\subseteq aR$.
    

Proof: (i)![(math image)](algebranotes.ac1-images/48E18AC3906D51BBC70057EFA59C8CCE.svg)(ii): f $a\vert b$ then there exists $c\in R$ such that $b=ca=ac\in aR$. (ii)![(math image)](algebranotes.ac1-images/48E18AC3906D51BBC70057EFA59C8CCE.svg)(iii) $aR$ is an ideal so if $b\in aR$ then $br\in aR$ for all $r\in R$, so $bR\subseteq aR$. (iii)![(math image)](algebranotes.ac1-images/48E18AC3906D51BBC70057EFA59C8CCE.svg)(i) If $bR\subseteq aR$ then $b=b1_R\in aR$ so $b=ac$ for some $c\in R$, so $a\vert b$.

**3.6** Lemma III.5 says that “dividing” means “generating a bigger ideal”: for example, $6$ divides $12$ and every multiple of $12$ is also a multiple of $6$

**3.7 Lemma.** Let $R$ be an integral domain and let $a,\,b\in R$. Then $aR = bR$ if and only if $a=ub$ for some unit $u\in R$. In particular, $uR = R$ if and only if $u\in R^*$.

Proof: If $aR=bR$ then $aR\subseteq bR$ and $bR\subseteq aR$, so by Lemma III.5 $b\vert a$ and $a\vert b$. Thus there exist $u,\,v\in R$ such that $a=ub$ and $b=va$, so $a = uva$. If $a=0$, then $b=0$ and there is nothing to prove. Otherwise, the cancellation law gives $uv = 1$, so $u$ is a unit in $R$.

Conversely, if $a= ub$ for some unit $u\in R^*$ then $a\in bR$, so $aR\subseteq bR$. Since $u$ is a unit, we may multiply $a= ub$ by $u^{-1}$ to obtain $b= u^{-1}a$: this gives $b\in aR$ and hence $bR\subseteq aR$. Hence $Ra=Rb$ as required. The final statement is just the case $a=1$.

**3.8 Definition.** Let $R$ be an integral domain. Let $p\in R$ be nonzero and not a unit. Then we say

*   (i) $p$ is a _prime_ if $p \vert ab \imp p|a$ or $p|b$.
    
*   (ii) $p$ is _irreducible_ if $p=ab \imp a\in R^*$ or $b\in R^*$.
    

We say that $p$ is _reducible_ if it is not irreducible, i.e., if there exist $a,\,b\in R$ such that $p=ab$ where neither $a$ nor $b$ is a unit: this is what is usually called “composite” in the case $R=\ZZ$.

**3.9 Example.**

*   (i) The prime elements in $\ZZ$ are
    
    $$ \{\dots , -11, -7, -5, -3, -2, 2, 3, 5, 7, 11, \dots \}, $$
    
    i.e., $\pm 1$ (a unit!) times the (positive) prime numbers. The irreducible elements are the same ones.
    
*   (ii) If $R=\FF$ is a field then every nonzero element is a unit, so $\FF$ contains neither primes nor irreducibles.
    
*   (iii) $t^2+1\in \RR [t]$ is irreducible (and, in fact, prime), but $t^2+1\in \CC [t]$ is reducible because $t^2+1=(t+i)(t-i)$.
    

**3.10 Proposition.** Let $R$ be an integral domain. Then every prime element is irreducible.

Proof : Let $p\in R$ be prime, and suppose $p=ab$. Then either $p\vert a$ or $p\vert b$, so without loss of generality $p\vert a$, say $a=pc$. Then $p=p\cdot 1_R=ab=pcb$, and the cancellation property gives $cb=1$, so $b$ is a unit. This shows that $p$ is irreducible.

The converse is not true in general.

##### Euclidean domains and PIDs

**3.11 Definition.** Let $R$ be an integral domain. A _Euclidean valuation_ on $R$ is a map $\nu \colon R\smallsetminus \{0\} \to \ZZ _{\ge 0}$ such that:

*   (i) if $f,\,g\in R\smallsetminus \{0\}$ then $\nu (f) \leq \nu (fg)$; and
    
*   (ii) for all $f,\,g\in R$ with $g\neq 0$, there exists $q,\,r\in R$ such that $f = qg + r$ and either $r=0$ or $r\neq 0$ and $\nu (r) < \nu (g)$.
    

A _valuation_ is a function satisfying (i) but not necessarily (ii).

**3.12 Definition.** We say that $R$ is a _Euclidean domain_ if it has a Euclidean valuation.

**3.13 Example.**

*   (i) Any field is trivially a Euclidean domain because we may take $\nu (a)=1$ for all $a\in \FF$.
    
*   (ii) The absolute value $\nu (n) = |n|$ provides a Euclidean valuation on $\ZZ$, so $\ZZ$ is a Euclidean domain.
    
*   (iii) For $\FF$ a field, the degree of a polynomial $\nu (f(t)) = \deg f(t)$ provides a Euclidean valuation on $\FF [t]$, so $\FF [t]$ is a Euclidean domain. This is the reason for the choice of the letters $f$, $g$, $q$ and $r$ in Definition III.11.
    
*   (iv) $\ZZ [i]$ is a Euclidean domain.
    

**3.14 Definition.** Recall from I.41 that an ideal $I$ of a commutative ring $R$ is a _principal ideal_ if $I=aR$ (also denoted $\latt {a}$ if $R$ is understood) for some $a\in R$. An integral domain $R$ is called a _principal ideal domain_ or _PID_ if and only if every ideal in $R$ is principal.

**3.15 Lemma.** Let $R$ be a nonzero commutative ring. Then $R$ is a field if and only if the only ideals of $R$ are $\{0_R\}=\latt {0_R}$ and $R=\latt {1_R}$.

Proof: If $R$ is a field and $I$ is a nonzero ideal then choose any $0\neq u\in I$. Since $R$ is a field, $u$ is a unit so $uR=R$ by III.7. But $uR\subseteq I\subseteq R$, so $I=R$.

Conversely, if $R$ is not a field then let $a\neq 0$ be any nonzero non-unit. Then $aR\neq R$ by III.7 and $aR\neq \{0\}$ either.

**3.16 Theorem.** Let $R$ be a Euclidean domain. Then $R$ is a PID.

Proof: Denote the Euclidean valuation on $R$ by $\nu$ and suppose $I$ is a nonzero ideal in $R$.

Consider the image $\nu (I\smallsetminus \{0\}$, i.e. $\{ \nu (a) \in \ZZ _{\geq 0} \mid a\in I,\, a\neq 0\}$. This is a nonempty subset of $\ZZ _{\ge 0}$, so it has a least element $\sigma$.

Choose $g\in I$ such that $\nu (g)=\sigma$: in other words, we choose $0\neq g\in I$ with $\nu (g)$ as small as possible, so $\nu (f) \geq \nu (g)$ for all $0\neq f\in I$. If we take any $f\in I$, then since $R$ is a Euclidean domain there exist $q,\,r\in R$ such that $f = qg + r$, and $r =0$ or $\nu (r) < \nu (g)=\sigma$. But if $r \neq 0$ then $r = f- qg \in I$, so $\nu (r)>\sigma$. This is a contradiction, so we must have $r = 0$, but then $f = qg \in gR$. Since $f$ was arbitrary, that means $I \subseteq gR$; but $g \in I$ so we also have $gR \subseteq I$. Hence $I = gR$ and so $I$ is a principal ideal.

**3.17 Example.** Theorem III.16 implies that the following rings are PIDs:

*   (i) any field (this also follows from III.15);
    
*   (ii) the ring of integers $\ZZ$;
    
*   (iii) the polynomial ring $\FF [t]$ with coefficients in a field $\FF$;
    
*   (iv) the ring of Gaussian integers $\ZZ [i]$.
    

**3.18 Example.** The integral domain $R=\ZZ [t]$ is not a PID, so it it is also not a Euclidean domain. It is slightly harder to produce a PID that is not a Euclidean domain. One example is $\ZZ [\theta ]$ for $\theta =\frac {1}{2}+i\frac {\sqrt {19}}{2}$. We shall not prove this, but for reasons of space, not difficulty.

##### Properties of PIDs

**3.19 Definition.** Let $R$ be a PID. Two elements $a,\, b\in R$ are said to be _coprime_ if every common factor is a unit; by this, we mean that if $d\vert a$ and $d\vert b$, then $d$ is a unit.

**3.20 Lemma.** Let $R$ be a PID and let $a,\,b\in R$ be coprime. There exist $r,\, s\in R$ such that $1=ra+sb$.

Proof: Consider the ideal $aR+bR$. Since $R$ is a PID, there exists $d\in R$ such that $aR+bR = dR$: then $aR\subset dR$ so $d|a$ by III.5 and similarly $d|b$. By hypothesis, then $d$ is a unit, so $dR=R$ by III.7: in particular, $1\in dR=aR+bR$, which is to say that there exist $r,\, s\in R$ such that $1=ra+sb$.

**3.21 Proposition.** Let $R$ be a PID. Then every irreducible element in $R$ is prime.

Proof: Suppose that $p$ is irreducible and that $p|ab$, and that $p$ does not divide $a$. We need to show that $p|b$.

We claim first that $a$ and $p$ are coprime. To see this, let $d$ be a common factor of $a$ and $p$: say $p=cd$ and $a=ed$. Since $p$ is irreducible, we know that either $c$ or $d$ is a unit. But if $c$ is a unit, then $a=ed=ec^{-1}cd=ec^{-1}p$ so $p\vert a$ which is contrary to the assumptions. Therefore $d$ is a unit, so $a$ and $p$ are coprime.

Now by III.20 there exist $r,\,s\in R$ such that $1=ra+sp$. But now $b=1\cdot b=(ra+sp)\cdot b=rab+psb$, and we assumed that $ab$ is divisible by $p$: so $b$ is divisible by $p$, as required.

**3.22 Theorem.** Let $R$ be a PID. If $p$ is irreducible then $R/pR$ is a field.

Proof: The ring $R/Rp$ is commutative because $R$ is commutative, and it is nonzero because $pR\neq R$ by III.7. It remains to show that every nonzero element of $R/pR$ is a unit.

Choose $a \in R$ and consider the ideal $pR+aR=dR$ for some $d$ (since $R$ is a PID). This tells us that $pR\subseteq dR$, that is $d|p$, so $p=de$ for some $e$, and also that $d|a$. Since $p$ is irreducible, either $d$ or $e$ must be a unit.

If $e$ is a unit, then $a\in dR=deR=pR$ so $p|a$ and in that case $a+pR\in R/pR$ is zero.

If $e$ is not a unit, then $d$ is a unit; but $d\in pR+aR$ so $d=rp+sa$ for some $r$ and $s$. So then $1=d^{-1}rp+d^{-1}sa$, which means that $d^{-1}s+pR$ is an inverse of $a+pR$ in $R/pR$.

##### Unique factorisation domains

**3.23 Definition.** An integral domain $R$ is called a _unique factorisation domain_ or _UFD_ if

*   (i) every nonzero nonunit element in $R$ can be written as the product of finitely many irreducibles in $R$; and
    
*   (ii) given two such decompositions, say $r_1\cdots r_s =r’_1\cdots r’_t$ we have that $s=t$ and, after renumbering if necessary, we have $r_iR = r’_iR$ for $1\leq i\leq s$.
    

**3.24** By III.7, the condition III.23(ii) means that the factorisation into irreducibles is unique up to reordering and multiplying the factors by units.

**3.25 Example.** It is not usually easy to tell whether a given ring is a UFD. Some well-known examples are

*   (i) $\ZZ$ is a UFD;
    
*   (ii) $\RR [t]$ is a UFD;
    
*   (iii) $\ZZ [t]$ is a UFD;
    
*   (iv) $\ZZ [i]$ is a UFD;
    
*   (v) $\ZZ [\sqrt {-5}]$ is not a UFD – in fact $6=2\cdot 3 = (1+\sqrt {-5})\cdot (1-\sqrt {-5})$ is an example of two different factorisations of the same element into irreducibles.
    

**3.26 Proposition.** Let $R$ be a UFD. Then $p\in R$ is irreducible if and only if it is prime.

Proof: Every prime is irreducible by Proposition III.10, since $R$ is an integral domain.

Conversely, let $p\in R$ be irreducible, and suppose that $p\vert ab$: say $ab = cp$ for some $c\in R$. We want to show that $p|a$ or $p|b$. We may as well assume that neither $a$ nor $b$ is a unit, since if $a$ is a unit then $b=a^{-1}cp$ and so $p\vert b$. Also $p|0$ so we may assume that $a$ and $b$ are nonzero.

Using Definition III.23(i), we may take irreducible factorisations of $a$ as $a=p_1\cdots p_k$, of $b$ as $b=q_1\cdots q_l$ and of $c$ as $c=r_1\cdots r_m$. (Note that these irreducibles are not necessarily distinct!) Now we have two factorisations of $ab$:

$$ p_1\cdots p_k\cdot q_1\cdots q_l = ab = cp = r_1\cdots r_m \cdot p. $$

According to Definition III.23(ii) and Lemma III.7, there must be a a unit $u\in R$ such that either $p_i=up$ for some $1\leq i\leq k$ or $q_j=up$ for some $1\leq j\leq l$. In the first case $p|a$, and in the second case $p|b$.

**3.27 Theorem.** Let $R$ be a PID. Then $R$ is a UFD.

Proof: We need to check Definition III.23(i) and Definition III.23(ii). Both parts are nontrivial. We begin with III.23(i), which says that factorisations exist.

Let $a\in R$ be a nonzero, nonunit element. Let us say, temporarily, that an element of $R$ is _factorisable_ if it can be written as the product of finitely many irreducibles, and suppose that $a$ is unfactorisable. Then it is certainly reducible, so we can write $a=a_0=a_1b_1$, with $a_1$ and $b_1$ non-units: moreover, at least one of $a_1$ and $b_1$ must be unfactorisable as well. Without loss of generality we may assume that $a_1$ is unfactorisable, and we continue in this way: each $a_{j+1}$ is chosen to be an unfactorisable factor of $a_j$, and $a_j=a_{j+1}b_{j+1}$ with $b_{j+1}$ not a unit.

So we have $\ldots a_n|a_{n-1}|a_{n-2}|\ldots |a_1|a=a_0$, or, using Lemma III.5

$$ a_0R\subseteq a_1R\subseteq \ldots \subseteq a_{n-2}R\subseteq a_{n-1}R\subseteq a_nR\subseteq \ldots . $$

Next, we take $I=\bigcup _{j=0}^\infty a_jR$. We claim that $I$ is an ideal in $R$: it obviously contains $a_0$ so it is not empty. Suppose that $c,\,d\in I$ and $r\in R$: it is enough to show that $rc\in I$ and $c-d\in I$, by I.39. But since $c\in I$ we know that $c\in a_nR$ for some $n$, and similarly $d\in a_mR$ for some $m$. Without loss of generality we assume $m\ge n$. Then $a_nR\subseteq a_mR$, so $c\in a_mR$ as well as $d\in a_mR$. But $a_mR$ is an ideal, so $rc\in a_mR\subseteq I$ and $c-d\in a_mR\subseteq I$, so $I$ is an ideal.

Because $I$ is an ideal and $R$ is a PID, we have $I=eR$ for some $e\in R$. But then $e\in I$, so $e\in a_iR$ for some $i$, and then

$$ a_{i+1}R\subseteq I=eR\subseteq a_iR\subseteq a_{i+1}R $$

so $a_{i+1}R=a_iR$. According to Lemma III.7 that implies that $a_i=ua_{i+1}$ for some unit $u$, but we also know that $a_i=b_{i+1}a_{i+1}$. By the cancellation property Lemma III.3, that implies $b_{i+1}=u$; but $b_{i+1}$ was chosen to be not a unit.

This is a contradiction, so no unfactorisable elements exist, and we have checked Definition III.23(i).

Now we check Definition III.23(ii). Suppose that there do exist elements of $R$ violating this condition, so that we can find equations

$$ v p_1\cdots p_s = q_1\cdots q_t $$

where the $p_i$ and the $q_j$ are irreducibles, $v$ is a unit and the left-hand side is not just a rearrangement of the right-hand side, and we assume without loss of generality that $0<s\leq t$. Among all such equations, we choose a shortest one: one for which $t$ is as small as possible.

We have $p_s|q_1\cdots q_t$. By Proposition III.26, $p_s$ is prime, so it divides one of the $q_j$: without loss of generality we may assume that $p_s|q_t$. However, $q_t$ is irreducible, so $q_t=up_s$ for some unit. So now we have

$$ u^{-1}v p_1\cdots p_s=q_1\cdots q_{t-1}\cdot p_s. $$

Cancelling the $p_s$ gives a shorter violation of Definition III.23(ii): one with only $t-1$ irreducibles $q_j$. This is a contradiction, so no such violations exist.

**3.28** It is somewhat easier to prove that a Euclidean domain is a UFD, because we can use the valuation for inductions, but the argument is essentially the same and it is worth taking the extra care to prove this stronger result.

**3.29 Corollary.** If $a\in \ZZ$ and $a>1$ then $a$ can be written as $a=\prod p_i^{n_i}$, where the $p_i$ are distinct prime numbers and the $n_i$ are positive integers. The primes $p_i$ and their exponents $n_i$ are uniquely determined (up to order).

This follows from Theorem III.27 and the facts that $\ZZ$ is a Euclidean domain, hence a PID, and that the units in $\ZZ$ are $\pm 1$ so every nonzero ideal has a unique positive generator.

**3.30 Example.** Not every UFD is a PID: in fact $\ZZ [t]$ is a UFD but not a PID.

**3.31** So far we have seen that shown that

*   • Fields are Euclidean domains — Example III.13(i)
    
*   • Euclidean domains are PIDs — Theorem III.16
    
*   • PIDs are UFDs — Theorem III.27
    
*   • UFDs are integral domains — Definition III.23
    

and examples to show that the reverse implications do not hold.

##### UFDs and polynomial rings

**3.32** We want to investigate polynomial rings where the coefficients come from a UFD. For the rest of this section, we assume that $R$ is a UFD.

**3.33 Definition.** An ideal in a commutative ring $A$ is said to be _finitely generated_ if it is of the form $a_1A+\cdots +a_kA$ (also written $\latt {a_1,\ldots ,a_k}$) for some finite set $\{a_1,\ldots ,a_k\}\subset A$.

**3.34** Many important rings are _noetherian_ (named after Emmy Noether): this means that all their ideals are finitely generated. We shan’t need to impose this condition because the ideals we are about to consider are finitely generated anyway.

**3.35 Lemma.** Let $R$ be a UFD and suppose that $I=\latt {a_1,\ldots ,a_k}$ is a finitely generated ideal. Then there is a unique smallest principal ideal $C$ containing $I$: that is, $C$ is principal, $C\supseteq I$, and if $C’\supseteq I$ is another principal ideal containing $I$, then $C’\supseteq C$.

Proof: We proceed by induction on $k$. If $k=1$ there is nothing to prove. Otherwise, suppose that $C_1=\latt {c_1}$ is the least principal ideal containing $I_1=\latt {a_1,\ldots ,a_{k-1}}$, which exists by the induction hypothesis. (Note that $I_1\subseteq I$.) Since $R$ is a UFD, there are finitely many irreducibles $p_1,\ldots ,p_m$ such that $p_j|c_1$. For each $p_j$, we let $n_j\in \ZZ _{\ge 0}$ be the largest integer such that $p_j^{n_j}|c_1$ and $p_j^{n_j}|a_k$, and we take $c=p_1^{n_1}\cdots p_m^{n_m}$. I claim that $C=\latt {c}$ has the required properties.

Firstly, $C$ is a principal ideal. Second, again because $R$ is a UFD, $c|c_1$ so $C\supseteq C_1$, so $C\supseteq I_1$. Third, $c|a_k$, so $C\supseteq I$. Finally, suppose $C’=\latt {c’}\supseteq I$. Then $C’\supseteq I_1$ because $I\supseteq I_1$, so $C’\supseteq C_1$ by definition of $C_1$; so $c’|c_1$. Also, $C’\supseteq \latt {a_k}$, so $c’|a_k$. Now if $p^n$ is a power of an irreducible and $p^n|c’$ then $p^n|c_1$ and $p^n|a_k$, so $p^n|p_j^{n_j}$ for some $j$: in other words, all the irreducible factors of $c’$ divide $c$ to at least the same power. So, by unique factorisation, $c’|c$: that is, $C’\supseteq C$.

**3.36** The element $c$ in Lemma III.35 is the product of all the powers of irreducibles that divide all of the $a_i$, so it should be thought of as the hcf of the $a_i$: we can’t say it that way because we do not have a notion of “highest” until Lemma III.35 gives us one.

**3.37 Definition.** A nonconstant polynomial $g=\sum _{i=0}^n a_it^i\in R[t]$ is _primitive_ if the only common divisors of all the coefficients of $g$ are units in $R$.

**3.38** In light of unique factorisation in $R$, it is equivalent to say that $g$ is primitive if and only if no irreducible element of $R$ divides all coefficients of $g$.

If $f$ is an arbitrary polynomial, then according to Lemma III.35 the smallest principal ideal $C_f$ containing all its coefficients is generated by an element $c\in R$, unique up to a unit factor, which is called the _content_ of $f$, and then $f=cg$ with $g$ primitive.

Another way to express Definition III.37 is to say that $g$ is primitive if the content of $g$ is a unit (so the ideal $C_g$ is $R$).

**3.39 Example.** $t^3+2t-1\in \ZZ [t]$ is primitive and so is $t^2+6t-3$, whereas $3t^3+6t-3\in \ZZ [t]$ is not.

**3.40 Proposition.** Let $R$ be a UFD. The product of finitely many primitive polynomials in $R[t]$ is primitive.

Proof: It suffices to prove the result for two primitive polynomials $f=\sum _{i=0}^n a_it^i$ and $g=\sum _{i=0}^m b_it^i$. Suppose that $fg=\sum _{l=0}^{m+n}d_lt^l$ is not primitive: then the content $c\in R$ of $fg$ is not a unit, so it has an irreducible factor $p|c$. Thus $p|d_l$ for any $l$. Since $f$ and $g$ are primitive, $p$ does not divide all of the coefficients of either $f$ or $g$. Let $a_{i_0}$ and $b_{j_0}$ be the first coefficients of $f$ and $g$ respectively that are not divisible by $p$, so $p|a_i$ if $i<i_0$ and $p|b_j$ if $j<j_0$.

Now we take $l_0=i_0+j_0$ and consider the coefficient of $t^{l_0}$ in the product $fg$, namely

$$ d_{l_0}=(a_0b_{l_0} + \dots + a_{i_0-1}b_{j_0+1})+a_{i_0}b_{j_0}+(a_{i_0+1}b_{j_0-1}+\dots + a_{l_0}b_0). $$

Rearranging this, we get

$\seteqnumber{0}{}{0}$

$$ \begin{eqnarray*} a_{i_0}b_{j_0}&=&-d_{l_0}+(a_0b_{l_0} + \dots + a_{i_0-1}b_{j_0+1})+(a_{i_0+1}b_{j_0-1}+\dots + a_{l_0}b_0)\\ &=&-d_{i_0+j_0}+\sum _{i<i_0}a_ib_{l_0-i}+\sum _{j<j_0}a_{l_0-j}b_j, \end{eqnarray*} $$

and $p$ divides all the terms on the right-hand side. So $p|a_{i_0}b_{j_0}$; but $p$ is irreducible and hence prime by Proposition III.26, so $p$ must divide either $a_{i_0}$ or $b_{j_0}$, which is a contradiction.

**3.41 Corollary.** Let $R$ be a UFD with field of fractions $F=\cQ (R)$, and let $f\in R[t]$. Then $f$ is irreducible if and only if either

*   (i) $f$ is an irreducible element of $R$, or
    
*   (ii) $f$ is primitive in $R[t]$ and irreducible in $F[t]$.
    

Proof: (![(math image)](algebranotes.ac1-images/48E18AC3906D51BBC70057EFA59C8CCE.svg)) From III.38 we have $f=c\cdot g$ for $c\in R$ and $g\in R[t]$ primitive. Since $f$ is irreducible, either $c$ or $g$ must be a unit in $R[t]$.

*   (i) If $g$ is a unit in $R[t]$, then $g\in R$ and hence $f\in R$. Then since $f$ is irreducible in $R[t]$ it is also irreducibile in $R$.
    
*   (ii) If $c$ is a unit then $f=cg$ is primitive because $g$ is primitive. Moreover, $f\not \in R$, since otherwise it would be primitive and thus a unit in $R$, so not irreducible. So $f$ is primitive in $R[t]$ and of positive degree: such an $f$ is irreducible in $F[t]$ (Exercise!).
    

($\Leftarrow$) If $f\in R$ is irreducible then it is irreducible in $R[t]$, so it remains to prove the result when $f \in R[t]$ is primitive in $R[t]$ and irreducible in $F[t]$. Since $f$ is irreducible in $F[t]$, it is nonzero and a nonunit in $F[t]$, so it has positive degree and is therefore nonzero and a nonunit in $R[t]$ also.

Suppose now that there exist $g,\,h\in R[t]$ such that $f = g\cdot h$. We know $f$ is irreducible in $F[t]$, so without loss of generality $g$ is a unit in $F[t]$: that is, $g=a\in F^*$ because the units of $F[t]$ are the units of $F$. Since $F\cap R[t]=R$ that tells us that $a\in R$. From $f=ah$ we see that $a$ divides the content of $f$, but $f$ is primitive in $R[t]$, so its content is a unit. Hence $a=g$ is a unit in $R$, and thus a unit in $R[t]$, and we have shown that $f$ is irreducible in $R[t]$.

**3.42 Theorem.** If $R$ is a UFD, then the polynomial ring $R[t]$ is also a UFD.

Proof: For Definition III.23(i), let $f\in R[t]$ be a nonzero nonunit. If $f\in R$, then it is a nonzero nonunit in $R$, and since $R$ is a UFD, $f$ can be written as the product of finitely many irreducibles in $R$ which are necessarily irreducibles in $R[t]$.

Otherwise, $f$ has positive degree. We may regard $f$ as an element of $F[t]$ where $F=\cQ (R)$. Since $F$ is a field, $F[t]$ is a UFD by Example III.17 and Theorem III.27. Accordingly, we write $f = q_1q_2\cdots q_k$ for irreducible elements $q_1, \dots , q_k\in F[t]$. We clear denominators: take $d_i$ to be the product of all the denominators of all the coefficients of $q_i$ and put $f_i=d_iq_i\in R[t]$. Then $df = f_1f_2\cdots f_k$ for some $d=d_1\cdots d_k\in R$.

Then we use III.38 to write $f_i=c_i g_i$ with $c_i\in R$ (the content of $f_i$) and $g_i\in R[t]$ primitive, and similarly $f=cg$, so that

$$ dcg = df = f_1 \cdots f_k = (c_1\cdots c_k) \cdot g_1\cdots g_k. $$

Notice that in $F[t]$ we have $g_i=\frac {d_i}{c_i}q_i$ which is irreducible (in $F[t]$) as $q_i$ is irreducible and $\frac {d_i}{c_i}\neq 0$ is a unit. By Corollary III.41, therefore, $g_i$ is irreducible in $R[t]$, and the product $g_1\cdots g_k$ is primitive by Proposition III.40, so the uniqueness part of Lemma III.35 shows that there exists a unit $u\in R$ such that $dcu = c_1\cdots c_k$.

So $df=dcu g_1\cdots g_k$, so $f=uc g_1\cdots g_k$ and since $c\in R$ which is a UFD we can factorise $cu=r_1\cdots r_l$ with $r_i\in R$ irreducible or a unit, and thus

$$ f = r_1\cdots r_l\cdot g_1g_2\cdots g_k, $$

with each factor irreducible or a unit in $R[t]$ as required for Definition III.23(i).

To show Definition III.23(ii), suppose $f\in R[t]$ admits two such decompositions

$$ r_1\cdots r_l\cdot g_1\cdots g_k = r’_1\cdots r’_m \cdot g’_1\cdots g’_n. $$

These two polynomials have the same content (up to a unit factor), so $r_1\cdots r_l = u\cdot r’_1\cdots r’_m$ for some unit $u\in R$. Since $R$ is a UFD, we have $l=m$ and (after permuting indices) $r_iR=r’_iR$ for $1\leq i\leq l$. Similarly, the primitive part of $f$ is unique up to multiplication by a unit, so there exists a unit $u’\in R$ such that $g_1\cdots g_k = u’ \cdot g’_1\cdots g’_n$.

By Corollary III.41, each $g_i,\, g’_j\in F[t]$ is irreducible: but $F[t]$ is a UFD because $F$ is a field, so $k=n$ and (after permuting indices) $g_iF[t]=g’_iF[t]$ for $1\leq i\leq k$. Now Lemma III.7 gives a unit $u_i\in F$ such that $g_i = u_ig_i’\in R[t]$. But $g_i$ and $g’_i$ are primitive, so comparing contents shows that $u_i$ is a unit in $R$.