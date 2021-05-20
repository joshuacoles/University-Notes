---
created: 2021-05-17T14:23:58 (UTC +01:00)
tags: []
source: https://en.wikipedia.org/wiki/Residue_(complex_analysis)
author: 
---

# Residue (complex analysis) - Wikipedia

> ## Excerpt
> In mathematics, more specifically complex analysis, the residue is a complex number proportional to the contour integral of a meromorphic function along a path enclosing one of its singularities. (More generally, residues can be calculated for any function  that is holomorphic except at the discrete points {ak}k, even if some of them are essential singularities.) Residues can be computed quite easily and, once known, allow the determination of general contour integrals via the residue theorem.

---
In [mathematics], more specifically [complex analysis], the **residue** is a [complex number] proportional to the [contour integral] of a [meromorphic function] along a path enclosing one of its [singularities]. (More generally, residues can be calculated for any function ![{\displaystyle f\colon \mathbb {C} \setminus \{a_{k}\}_{k}\rightarrow \mathbb {C} }](https://wikimedia.org/api/rest_v1/media/math/render/svg/24265b74a9fd05d00f5f9592113321eb8436f17b) that is [holomorphic] except at the discrete points {_a__k_}_k_, even if some of them are [essential singularities].) Residues can be computed quite easily and, once known, allow the determination of general contour integrals via the [residue theorem].

## Definition\[[edit]\]

The residue of a [meromorphic function] ![f](https://wikimedia.org/api/rest_v1/media/math/render/svg/132e57acb643253e7810ee9702d9581f159a1c61) at an [isolated singularity] ![a](https://wikimedia.org/api/rest_v1/media/math/render/svg/ffd2487510aa438433a2579450ab2b3d557e5edc), often denoted ![\operatorname {Res} (f,a)](https://wikimedia.org/api/rest_v1/media/math/render/svg/3f08a7995adf47b824a851c88688c3fe9f94f0f0) or ![\operatorname {Res} _{a}(f)](https://wikimedia.org/api/rest_v1/media/math/render/svg/8a5c246eb90054728b8edc1dcc584116f92ad054), is the unique value ![R](https://wikimedia.org/api/rest_v1/media/math/render/svg/4b0bfb3769bf24d80e15374dc37b0441e2616e33) such that ![f(z)-R/(z-a)](https://wikimedia.org/api/rest_v1/media/math/render/svg/bc0144555f7887cde6ea6bd4b59698da93357466) has an [analytic] [antiderivative] in a [punctured disk] ![0<\vert z-a\vert <\delta ](https://wikimedia.org/api/rest_v1/media/math/render/svg/ec58b29bef91a155737d101de1a1cb6629f0310e).

Alternatively, residues can be calculated by finding [Laurent series] expansions, and one can define the residue as the coefficient _a_−1 of a Laurent series.

The definition of a residue can be generalized to arbitrary [Riemann surfaces]. Suppose ![\omega ](https://wikimedia.org/api/rest_v1/media/math/render/svg/48eff443f9de7a985bb94ca3bde20813ea737be8) is a [1-form] on a Riemann surface. Let ![\omega ](https://wikimedia.org/api/rest_v1/media/math/render/svg/48eff443f9de7a985bb94ca3bde20813ea737be8) be meromorphic at some point ![x](https://wikimedia.org/api/rest_v1/media/math/render/svg/87f9e315fd7e2ba406057a97300593c4802b53e4), so that we may write ![\omega ](https://wikimedia.org/api/rest_v1/media/math/render/svg/48eff443f9de7a985bb94ca3bde20813ea737be8) in local coordinates as ![f(z)\;dz](https://wikimedia.org/api/rest_v1/media/math/render/svg/d7c79b8e82c6bb8c5ece48e9fd10a5ed4e509a58). Then the residue of ![\omega ](https://wikimedia.org/api/rest_v1/media/math/render/svg/48eff443f9de7a985bb94ca3bde20813ea737be8) at ![x](https://wikimedia.org/api/rest_v1/media/math/render/svg/87f9e315fd7e2ba406057a97300593c4802b53e4) is defined to be the residue of ![f(z)](https://wikimedia.org/api/rest_v1/media/math/render/svg/d8dd568d570b390c337c0a911f0a1c5c214e8240) at the point corresponding to ![x](https://wikimedia.org/api/rest_v1/media/math/render/svg/87f9e315fd7e2ba406057a97300593c4802b53e4).

## Examples\[[edit]\]

### Residue of a monomial\[[edit]\]

Computing the residue of a [monomial]

![{\displaystyle \oint _{C}z^{k}\,dz}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c07f2bb2366cc946ca30be753e8eb0d926d36744)

makes most residue computations easy to do. Since path integral computations are [homotopy] invariant, we will let ![C](https://wikimedia.org/api/rest_v1/media/math/render/svg/4fc55753007cd3c18576f7933f6f089196732029) be the circle with radius ![1](https://wikimedia.org/api/rest_v1/media/math/render/svg/92d98b82a3778f043108d4e20960a9193df57cbf). Then, using the change of coordinates ![{\displaystyle z\to e^{i\theta }}](https://wikimedia.org/api/rest_v1/media/math/render/svg/2b5d183999b60fb4135bf189cf70cbf74943eec7) we find that

![{\displaystyle dz\to d(e^{i\theta })=ie^{i\theta }\,d\theta }](https://wikimedia.org/api/rest_v1/media/math/render/svg/cc27fe948c200cd414cb666d7b6f39ad04ba2c54)

hence our integral now reads as

![{\displaystyle \oint _{C}z^{k}dz=\int _{0}^{2\pi }ie^{i(k+1)\theta }\,d\theta ={\begin{cases}2\pi i&{\text{if }}k=-1,\\0&{\text{otherwise}}.\end{cases}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/dad1f852b1dba24f247f8b1b28ea06767bfd7c71)

### Application of monomial residue\[[edit]\]

As an example, consider the [contour integral]

![\oint _{C}{e^{z} \over z^{5}}\,dz](https://wikimedia.org/api/rest_v1/media/math/render/svg/b7a77dad0024b956391a788fe86b39e0676d169f)

where _C_ is some [simple closed curve] about 0.

Let us evaluate this integral using a standard convergence result about integration by series. We can substitute the [Taylor series] for ![e^{z}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f4772def31b56e642df3e4d1160cadff3d80ba45) into the integrand. The integral then becomes

![\oint _{C}{1 \over z^{5}}\left(1+z+{z^{2} \over 2!}+{z^{3} \over 3!}+{z^{4} \over 4!}+{z^{5} \over 5!}+{z^{6} \over 6!}+\cdots \right)\,dz.](https://wikimedia.org/api/rest_v1/media/math/render/svg/0000b5b221ac208372b7af248080a6ac0f28e9d2)

Let us bring the 1/_z_5 factor into the series. The contour integral of the series then writes

![{\displaystyle {\begin{aligned}&\oint _{C}\left({1 \over z^{5}}+{z \over z^{5}}+{z^{2} \over 2!\;z^{5}}+{z^{3} \over 3!\;z^{5}}+{z^{4} \over 4!\;z^{5}}+{z^{5} \over 5!\;z^{5}}+{z^{6} \over 6!\;z^{5}}+\cdots \right)\,dz\\[4pt]={}&\oint _{C}\left({1 \over \;z^{5}}+{1 \over \;z^{4}}+{1 \over 2!\;z^{3}}+{1 \over 3!\;z^{2}}+{1 \over 4!\;z}+{1 \over \;5!}+{z \over 6!}+\cdots \right)\,dz.\end{aligned}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/5b09463f46e4136ed8344f2e394e8a558f240a55)

Since the series converges uniformly on the support of the integration path, we are allowed to exchange integration and summation. The series of the path integrals then collapses to a much simpler form because of the previous computation. So now the integral around _C_ of every other term not in the form _cz_−1 is zero, and the integral is reduced to

![{\displaystyle \oint _{C}{1 \over 4!\;z}\,dz={1 \over 4!}\oint _{C}{1 \over z}\,dz={1 \over 4!}(2\pi i)={\pi i \over 12}.}](https://wikimedia.org/api/rest_v1/media/math/render/svg/43c1bebaae80a9bc3ac0d03794abb6fba18a11c6)

The value 1/4! is the _residue_ of _e__z_/_z_5 at _z_ = 0, and is denoted

![{\displaystyle \operatorname {Res} _{0}{e^{z} \over z^{5}},{\text{ or }}\operatorname {Res} _{z=0}{e^{z} \over z^{5}},{\text{ or }}\operatorname {Res} (f,0){\text{ for }}f={e^{z} \over z^{5}}.}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c943b1608c23ecec78fd6117245346d466e6a5bf)

## Calculating residues\[[edit]\]

Suppose a [punctured disk] _D_ = {_z_ : 0 < |_z_ − _c_| < _R_} in the complex plane is given and _f_ is a [holomorphic function] defined (at least) on _D_. The residue Res(_f_, _c_) of _f_ at _c_ is the coefficient _a_−1 of (_z_ − _c_)−1 in the [Laurent series] expansion of _f_ around _c_. Various methods exist for calculating this value, and the choice of which method to use depends on the function in question, and on the nature of the singularity.

According to the [residue theorem], we have:

![{\displaystyle \operatorname {Res} (f,c)={1 \over 2\pi i}\oint _{\gamma }f(z)\,dz}](https://wikimedia.org/api/rest_v1/media/math/render/svg/e2bb730a3baa8a31d174c87c7b1981b958bff2d5)

where _γ_ traces out a circle around _c_ in a counterclockwise manner. We may choose the path _γ_ to be a circle of radius _ε_ around _c_, where _ε_ is as small as we desire. This may be used for calculation in cases where the integral can be calculated directly, but it is usually the case that residues are used to simplify calculation of integrals, and not the other way around.

### Removable singularities\[[edit]\]

If the function _f_ can be [continued] to a [holomorphic function] on the whole disk ![{\displaystyle |y-c|<R}](https://wikimedia.org/api/rest_v1/media/math/render/svg/227708865fd31ac1dd1e4f03b3ecab0aec8bc4b5), then Res(_f_, _c_) = 0. The converse is not generally true.

### Simple poles\[[edit]\]

At a [simple pole] _c_, the residue of _f_ is given by:

![\operatorname {Res} (f,c)=\lim _{z\to c}(z-c)f(z).](https://wikimedia.org/api/rest_v1/media/math/render/svg/d3c77989d4967c0c228f0823d85fc6911773e4ab)

It may be that the function _f_ can be expressed as a quotient of two functions, ![{\displaystyle f(z)={\frac {g(z)}{h(z)}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/d3d8f35ef272d1ae13512039785558ef487c6997), where _g_ and _h_ are [holomorphic functions] in a [neighbourhood] of _c_, with _h_(_c_) = 0 and _h'_(_c_) ≠ 0. In such a case, [L'Hôpital's rule] can be used to simplify the above formula to:

![{\displaystyle {\begin{aligned}\operatorname {Res} (f,c)&=\lim _{z\to c}(z-c)f(z)=\lim _{z\to c}{\frac {zg(z)-cg(z)}{h(z)}}\\[4pt]&=\lim _{z\to c}{\frac {g(z)+zg'(z)-cg'(z)}{h'(z)}}={\frac {g(c)}{h'(c)}}.\end{aligned}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/01cb4655fbceb73b05badb56c402e796553ac2d1)

### Limit formula for higher-order poles\[[edit]\]

More generally, if _c_ is a [pole] of order _n_, then the residue of _f_ around _z_ = _c_ can be found by the formula:

![{\displaystyle \operatorname {Res} (f,c)={\frac {1}{(n-1)!}}\lim _{z\to c}{\frac {d^{n-1}}{dz^{n-1}}}\left((z-c)^{n}f(z)\right).}](https://wikimedia.org/api/rest_v1/media/math/render/svg/6f44e0a17959301a72cd92e589aeaf2e5098767e)

This formula can be very useful in determining the residues for low-order poles. For higher-order poles, the calculations can become unmanageable, and series expansion is usually easier. For [essential singularities], no such simple formula exists, and residues must usually be taken directly from series expansions.

### Residue at infinity\[[edit]\]

In general, the [residue at infinity] is defined as:

![{\displaystyle \operatorname {Res} (f(z),\infty )=-\operatorname {Res} \left({\frac {1}{z^{2}}}f\left({\frac {1}{z}}\right),0\right).}](https://wikimedia.org/api/rest_v1/media/math/render/svg/1c8d30a6f02f1aed3ecaeb0862ea07721f712b4f)

If the following condition is met:

![{\displaystyle \lim _{|z|\to \infty }f(z)=0,}](https://wikimedia.org/api/rest_v1/media/math/render/svg/06a4e84489a680fffcd78708d74784da24bd81ba)

then the [residue at infinity] can be computed using the following formula:

![{\displaystyle \operatorname {Res} (f,\infty )=-\lim _{|z|\to \infty }z\cdot f(z).}](https://wikimedia.org/api/rest_v1/media/math/render/svg/e6296a87e4a9f756aa65552e6c796db6d347dde5)

If instead

![{\displaystyle \lim _{|z|\to \infty }f(z)=c\neq 0,}](https://wikimedia.org/api/rest_v1/media/math/render/svg/344070915da9eabeae68c835246cf4ca4ab8f723)

then the [residue at infinity] is

![{\displaystyle \operatorname {Res} (f,\infty )=\lim _{|z|\to \infty }z^{2}\cdot f'(z).}](https://wikimedia.org/api/rest_v1/media/math/render/svg/d97b2defa6ef84edb84e67b9de7ca9cdb694957c)

### Series methods\[[edit]\]

If parts or all of a function can be expanded into a [Taylor series] or [Laurent series], which may be possible if the parts or the whole of the function has a standard series expansion, then calculating the residue is significantly simpler than by other methods.

1.  As a first example, consider calculating the residues at the singularities of the function
    
    ![{\displaystyle f(z)={\sin z \over z^{2}-z}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c6837fee278a6c2fa963e97e9dd079569aea7216)
    
    which may be used to calculate certain contour integrals. This function appears to have a singularity at _z_ = 0, but if one factorizes the denominator and thus writes the function as
    
    ![{\displaystyle f(z)={\sin z \over z(z-1)}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ea706753a80cd0b8552d744bd4d545a92832abd5)
    
    it is apparent that the singularity at _z_ = 0 is a [removable singularity] and then the residue at _z_ = 0 is therefore 0.
    
    The only other singularity is at _z_ = 1. Recall the expression for the Taylor series for a function _g_(_z_) about _z_ = _a_:
    
    ![g(z)=g(a)+g'(a)(z-a)+{g''(a)(z-a)^{2} \over 2!}+{g'''(a)(z-a)^{3} \over 3!}+\cdots ](https://wikimedia.org/api/rest_v1/media/math/render/svg/f1b965178a995efefbdb1ca3210ddf3b68005b09)
    
    So, for _g_(_z_) = sin _z_ and _a_ = 1 we have
    
    ![{\displaystyle \sin z=\sin 1+(\cos 1)(z-1)+{-(\sin 1)(z-1)^{2} \over 2!}+{-(\cos 1)(z-1)^{3} \over 3!}+\cdots .}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ffbefd7f01c95451baa8778794c54aa8827a0098)
    
    and for _g_(_z_) = 1/_z_ and _a_ = 1 we have
    
    ![{\displaystyle {\frac {1}{z}}={\frac {1}{(z-1)+1}}=1-(z-1)+(z-1)^{2}-(z-1)^{3}+\cdots .}](https://wikimedia.org/api/rest_v1/media/math/render/svg/639e34e4714cd22e3c73d5997745d4d4f1cf2cff)
    
    Multiplying those two series and introducing 1/(_z_ − 1) gives us
    
    ![{\displaystyle {\frac {\sin z}{z(z-1)}}={\sin 1 \over z-1}+(\cos 1-\sin 1)+(z-1)\left(-{\frac {\sin 1}{2!}}-\cos 1+\sin 1\right)+\cdots .}](https://wikimedia.org/api/rest_v1/media/math/render/svg/7afe6ef474d2a1fa03d82aba4a8ae8a85a8564c4)
    
    So the residue of _f_(_z_) at _z_ = 1 is sin 1.
2.  The next example shows that, computing a residue by series expansion, a major role is played by the [Lagrange inversion theorem]. Let
    
    ![{\displaystyle u(z):=\sum _{k\geq 1}u_{k}z^{k}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/206af1c62288050577641b65c8f760f3393fc884)
    
    be an [entire function], and let
    
    ![{\displaystyle v(z):=\sum _{k\geq 1}v_{k}z^{k}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/d1e801400e098baa576b4ff9b96f11982ff4e86a)
    
    with positive radius of convergence, and with ![{\displaystyle \textstyle v_{1}\neq 0}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f025aa8ce47108e8fc1128adb5b770cdba7e1d1b). So ![\textstyle v(z)](https://wikimedia.org/api/rest_v1/media/math/render/svg/b64a241bb8267613e70c20097fd1ce646d0ae7d5) has a local inverse ![\textstyle V(z)](https://wikimedia.org/api/rest_v1/media/math/render/svg/97b0c5e5546a8a2adac58b7b7db2f7a877075ad8) at 0, and ![\textstyle u(1/V(z))](https://wikimedia.org/api/rest_v1/media/math/render/svg/3251b11fd442aca42a7808610721bb6db22251ae) is [meromorphic] at 0. Then we have:
    
    ![{\displaystyle \operatorname {Res} _{0}{\big (}u(1/V(z)){\big )}=\sum _{k=0}^{\infty }ku_{k}v_{k}.}](https://wikimedia.org/api/rest_v1/media/math/render/svg/cbc0fc98edd7c65e002a6af6d76dfe2c56ebfcc5)
    
    Indeed,
    
    ![{\displaystyle \operatorname {Res} _{0}{\big (}u(1/V(z)){\big )}=\operatorname {Res} _{0}\left(\sum _{k\geq 1}u_{k}V(z)^{-k}\right)=\sum _{k\geq 1}u_{k}\operatorname {Res} _{0}{\big (}V(z)^{-k}{\big )}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ad1f63ed2342c517b112552e7b0716795b7867b7)
    
    because the first series converges uniformly on any small circle around 0. Using the Lagrange inversion theorem
    
    ![{\displaystyle \operatorname {Res} _{0}{\big (}V(z)^{-k}{\big )}=kv_{k},}](https://wikimedia.org/api/rest_v1/media/math/render/svg/e910d379fdf7cce12b9fc07317472049a7a4dbb2)
    
    and we get the above expression. For example, if ![{\displaystyle u(z)=z+z^{2}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/56fb7501a373747d9a16fd3f6bb997441a75d654) and also ![{\displaystyle v(z)=z+z^{2}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ea35bde7188925c610690077ccb83133bc388a0b), then
    
    ![{\displaystyle V(z)={\frac {2z}{1+{\sqrt {1+4z}}}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/618b5ad9a5bcceb281ad27ca5c64056ff8c48e07)
    
    and
    
    ![{\displaystyle u(1/V(z))={\frac {1+{\sqrt {1+4z}}}{2z}}+{\frac {1+2z+{\sqrt {1+4z}}}{2z^{2}}}.}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a9d1afaf83d02a58a88135987ed1de12e827c8f4)
    
    The first term contributes 1 to the residue, and the second term contributes 2 since it is asymptotic to ![{\displaystyle 1/z^{2}+2/z}](https://wikimedia.org/api/rest_v1/media/math/render/svg/284c79d08329f81982618e1ca4d1218b074017fd). Note that, with the corresponding stronger symmetric assumptions on ![\textstyle u(z)](https://wikimedia.org/api/rest_v1/media/math/render/svg/79478ba06fd9c6670ebf84c40d31f9ddb826d884) and ![\textstyle v(z)](https://wikimedia.org/api/rest_v1/media/math/render/svg/b64a241bb8267613e70c20097fd1ce646d0ae7d5), it also follows
    
    ![{\displaystyle \operatorname {Res} _{0}\left(u(1/V)\right)=\operatorname {Res} _{0}\left(v(1/U)\right),}](https://wikimedia.org/api/rest_v1/media/math/render/svg/746a8d0dc5ead7e6bcce3e4efb841affaab97cb6)
    
    where ![\textstyle U(z)](https://wikimedia.org/api/rest_v1/media/math/render/svg/5efedab72c8909c6c95ac6a90038b499710f180a) is a local inverse of ![\textstyle u(z)](https://wikimedia.org/api/rest_v1/media/math/render/svg/79478ba06fd9c6670ebf84c40d31f9ddb826d884) at 0.

## See also\[[edit]\]

-   The [residue theorem] relates a contour integral around some of a function's poles to the sum of their residuals
-   [Cauchy's integral formula]
-   [Cauchy's integral theorem]
-   [Mittag-Leffler's theorem]
-   [Methods of contour integration]
-   [Morera's theorem]
-   [Partial fractions in complex analysis]

## References\[[edit]\]

-   [Ahlfors, Lars] (1979). _Complex Analysis_. McGraw Hill. CS1 maint: discouraged parameter ([link])
-   Marsden, Jerrold E.; Hoffman, Michael J. (1998). [_Basic Complex Analysis_] (3rd ed.). W. H. Freeman. [ISBN] [978-0-7167-2877-1].

## External links\[[edit]\]

-   ["Residue of an analytic function"], _[Encyclopedia of Mathematics]_, [EMS Press], 2001 \[1994\]
-   [Weisstein, Eric W.] ["Complex Residue"]. _[MathWorld]_.

[mathematics]: https://en.wikipedia.org/wiki/Mathematics "Mathematics"
[complex analysis]: https://en.wikipedia.org/wiki/Complex_analysis "Complex analysis"
[complex number]: https://en.wikipedia.org/wiki/Complex_number "Complex number"
[contour integral]: https://en.wikipedia.org/wiki/Line_integral "Line integral"
[meromorphic function]: https://en.wikipedia.org/wiki/Meromorphic_function "Meromorphic function"
[singularities]: https://en.wikipedia.org/wiki/Mathematical_singularity "Mathematical singularity"
[holomorphic]: https://en.wikipedia.org/wiki/Holomorphic_function
[essential singularities]: https://en.wikipedia.org/wiki/Essential_singularity "Essential singularity"
[residue theorem]: https://en.wikipedia.org/wiki/Residue_theorem "Residue theorem"
[edit]: https://en.wikipedia.org/w/index.php?title=Residue_(complex_analysis)&action=edit&section=1 "Edit section: Definition"
[meromorphic function]: https://en.wikipedia.org/wiki/Meromorphic_function "Meromorphic function"
[isolated singularity]: https://en.wikipedia.org/wiki/Isolated_singularity "Isolated singularity"
[analytic]: https://en.wikipedia.org/wiki/Analytic_function "Analytic function"
[antiderivative]: https://en.wikipedia.org/wiki/Antiderivative "Antiderivative"
[punctured disk]: https://en.wikipedia.org/wiki/Punctured_disk "Punctured disk"
[Laurent series]: https://en.wikipedia.org/wiki/Laurent_series "Laurent series"
[Riemann surfaces]: https://en.wikipedia.org/wiki/Riemann_surfaces "Riemann surfaces"
[1-form]: https://en.wikipedia.org/wiki/One-form "One-form"
[edit]: https://en.wikipedia.org/w/index.php?title=Residue_(complex_analysis)&action=edit&section=2 "Edit section: Examples"
[edit]: https://en.wikipedia.org/w/index.php?title=Residue_(complex_analysis)&action=edit&section=3 "Edit section: Residue of a monomial"
[monomial]: https://en.wikipedia.org/wiki/Monomial "Monomial"
[homotopy]: https://en.wikipedia.org/wiki/Homotopy "Homotopy"
[edit]: https://en.wikipedia.org/w/index.php?title=Residue_(complex_analysis)&action=edit&section=4 "Edit section: Application of monomial residue"
[contour integral]: https://en.wikipedia.org/wiki/Contour_integral "Contour integral"
[simple closed curve]: https://en.wikipedia.org/wiki/Simple_closed_curve "Simple closed curve"
[Taylor series]: https://en.wikipedia.org/wiki/Taylor_series "Taylor series"
[edit]: https://en.wikipedia.org/w/index.php?title=Residue_(complex_analysis)&action=edit&section=5 "Edit section: Calculating residues"
[punctured disk]: https://en.wikipedia.org/wiki/Punctured_disk "Punctured disk"
[holomorphic function]: https://en.wikipedia.org/wiki/Holomorphic_function "Holomorphic function"
[Laurent series]: https://en.wikipedia.org/wiki/Laurent_series "Laurent series"
[residue theorem]: https://en.wikipedia.org/wiki/Residue_theorem "Residue theorem"
[edit]: https://en.wikipedia.org/w/index.php?title=Residue_(complex_analysis)&action=edit&section=6 "Edit section: Removable singularities"
[continued]: https://en.wikipedia.org/wiki/Analytic_continuation "Analytic continuation"
[holomorphic function]: https://en.wikipedia.org/wiki/Holomorphic_function "Holomorphic function"
[edit]: https://en.wikipedia.org/w/index.php?title=Residue_(complex_analysis)&action=edit&section=7 "Edit section: Simple poles"
[simple pole]: https://en.wikipedia.org/wiki/Simple_pole "Simple pole"
[holomorphic functions]: https://en.wikipedia.org/wiki/Holomorphic_function "Holomorphic function"
[neighbourhood]: https://en.wikipedia.org/wiki/Neighbourhood_(mathematics) "Neighbourhood (mathematics)"
[L'Hôpital's rule]: https://en.wikipedia.org/wiki/L%27H%C3%B4pital%27s_rule "L'Hôpital's rule"
[edit]: https://en.wikipedia.org/w/index.php?title=Residue_(complex_analysis)&action=edit&section=8 "Edit section: Limit formula for higher-order poles"
[pole]: https://en.wikipedia.org/wiki/Pole_(complex_analysis) "Pole (complex analysis)"
[essential singularities]: https://en.wikipedia.org/wiki/Essential_singularity "Essential singularity"
[edit]: https://en.wikipedia.org/w/index.php?title=Residue_(complex_analysis)&action=edit&section=9 "Edit section: Residue at infinity"
[residue at infinity]: https://en.wikipedia.org/wiki/Residue_at_infinity "Residue at infinity"
[residue at infinity]: https://en.wikipedia.org/wiki/Residue_at_infinity "Residue at infinity"
[residue at infinity]: https://en.wikipedia.org/wiki/Residue_at_infinity "Residue at infinity"
[edit]: https://en.wikipedia.org/w/index.php?title=Residue_(complex_analysis)&action=edit&section=10 "Edit section: Series methods"
[Taylor series]: https://en.wikipedia.org/wiki/Taylor_series "Taylor series"
[Laurent series]: https://en.wikipedia.org/wiki/Laurent_series "Laurent series"
[removable singularity]: https://en.wikipedia.org/wiki/Removable_singularity "Removable singularity"
[Lagrange inversion theorem]: https://en.wikipedia.org/wiki/Formal_series#The_Lagrange_inversion_formula "Formal series"
[entire function]: https://en.wikipedia.org/wiki/Entire_function "Entire function"
[meromorphic]: https://en.wikipedia.org/wiki/Meromorphic "Meromorphic"
[edit]: https://en.wikipedia.org/w/index.php?title=Residue_(complex_analysis)&action=edit&section=11 "Edit section: See also"
[residue theorem]: https://en.wikipedia.org/wiki/Residue_theorem "Residue theorem"
[Cauchy's integral formula]: https://en.wikipedia.org/wiki/Cauchy%27s_integral_formula "Cauchy's integral formula"
[Cauchy's integral theorem]: https://en.wikipedia.org/wiki/Cauchy%27s_integral_theorem "Cauchy's integral theorem"
[Mittag-Leffler's theorem]: https://en.wikipedia.org/wiki/Mittag-Leffler%27s_theorem "Mittag-Leffler's theorem"
[Methods of contour integration]: https://en.wikipedia.org/wiki/Methods_of_contour_integration "Methods of contour integration"
[Morera's theorem]: https://en.wikipedia.org/wiki/Morera%27s_theorem "Morera's theorem"
[Partial fractions in complex analysis]: https://en.wikipedia.org/wiki/Partial_fractions_in_complex_analysis "Partial fractions in complex analysis"
[edit]: https://en.wikipedia.org/w/index.php?title=Residue_(complex_analysis)&action=edit&section=12 "Edit section: References"
[Ahlfors, Lars]: https://en.wikipedia.org/wiki/Lars_Ahlfors "Lars Ahlfors"
[link]: https://en.wikipedia.org/wiki/Category:CS1_maint:_discouraged_parameter "Category:CS1 maint: discouraged parameter"
[_Basic Complex Analysis_]: https://books.google.com/books?id=Z26tKIymJjMC&q=residue
[ISBN]: https://en.wikipedia.org/wiki/ISBN_(identifier) "ISBN (identifier)"
[978-0-7167-2877-1]: https://en.wikipedia.org/wiki/Special:BookSources/978-0-7167-2877-1 "Special:BookSources/978-0-7167-2877-1"
[edit]: https://en.wikipedia.org/w/index.php?title=Residue_(complex_analysis)&action=edit&section=13 "Edit section: External links"
["Residue of an analytic function"]: https://www.encyclopediaofmath.org/index.php?title=Residue_of_an_analytic_function
[Encyclopedia of Mathematics]: https://en.wikipedia.org/wiki/Encyclopedia_of_Mathematics "Encyclopedia of Mathematics"
[EMS Press]: https://en.wikipedia.org/wiki/European_Mathematical_Society "European Mathematical Society"
[Weisstein, Eric W.]: https://en.wikipedia.org/wiki/Eric_W._Weisstein "Eric W. Weisstein"
["Complex Residue"]: https://mathworld.wolfram.com/ComplexResidue.html
[MathWorld]: https://en.wikipedia.org/wiki/MathWorld "MathWorld"
