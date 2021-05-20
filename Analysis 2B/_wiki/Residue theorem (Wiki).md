---
created: 2021-05-17T14:21:46 (UTC +01:00)
tags: []
source: https://en.wikipedia.org/wiki/Residue_theorem
author: 
---

# Residue theorem - Wikipedia

> ## Excerpt
> In complex analysis, a discipline within mathematics, the residue theorem, sometimes called Cauchy's residue theorem, is a powerful tool to evaluate line integrals of analytic functions over closed curves; it can often be used to compute real integrals and infinite series as well. It generalizes the Cauchy integral theorem and Cauchy's integral formula.  From a geometrical perspective, it can be seen as a special case of the generalized Stokes' theorem.

---
In [complex analysis], a discipline within mathematics, the **residue theorem**, sometimes called **Cauchy's residue theorem**, is a powerful tool to evaluate [line integrals] of [analytic functions] over closed curves; it can often be used to compute real integrals and [infinite series] as well. It generalizes the [Cauchy integral theorem] and [Cauchy's integral formula]. From a geometrical perspective, it can be seen as a special case of the [generalized Stokes' theorem].

## Statement\[[edit]\]

The statement is as follows:

![](https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Residue_theorem_illustration.png/250px-Residue_theorem_illustration.png)

Illustration of the setting.

Let U be a [simply connected] [open subset] of the [complex plane] containing a finite list of points _a_1, ..., _a__n_, _U_0 = _U_ \\ {_a_1, ..., _a__n_}, and a function f defined and [holomorphic] on _U_0. Let γ be a closed [rectifiable curve] in _U_0, and denote the [winding number] of γ around _a__k_ by I(_γ_, _a__k_). The line integral of f around γ is equal to 2π_i_ times the sum of [residues] of f at the points, each counted as many times as γ winds around the point:

![{\displaystyle \oint _{\gamma }f(z)\,dz=2\pi i\sum _{k=1}^{n}\operatorname {I} (\gamma ,a_{k})\operatorname {Res} (f,a_{k}).}](https://wikimedia.org/api/rest_v1/media/math/render/svg/d6308b3568edef0ca286eea192c8a0c7600db8a4)

If γ is a [positively oriented] [simple closed curve], I(_γ_, _a__k_) = 1 if _a__k_ is in the interior of γ, and 0 if not, therefore

![{\displaystyle \oint _{\gamma }f(z)\,dz=2\pi i\sum \operatorname {Res} (f,a_{k})}](https://wikimedia.org/api/rest_v1/media/math/render/svg/56bd97647c868b1c01e92831b55dbadb2d55e1ca)

with the sum over those _a__k_ inside γ.[\[1\]]

The relationship of the residue theorem to Stokes' theorem is given by the [Jordan curve theorem]. The general [plane curve] γ must first be reduced to a set of simple closed curves {_γ__i_} whose total is equivalent to γ for integration purposes; this reduces the problem to finding the integral of _f_ _dz_ along a Jordan curve _γ__i_ with interior V. The requirement that f be holomorphic on _U_0 = _U_ \\ {_a__k_} is equivalent to the statement that the [exterior derivative] _d_(_f_ _dz_) = 0 on _U_0. Thus if two planar regions V and W of U enclose the same subset {_a__j_} of {_a__k_}, the regions _V_ \\ _W_ and _W_ \\ _V_ lie entirely in _U_0, and hence

![{\displaystyle \int _{V\smallsetminus W}d(f\,dz)-\int _{W\smallsetminus V}d(f\,dz)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/22f423d864ed7ff3fcf05b3d6145888f8fca1fb9)

is well-defined and equal to zero. Consequently, the contour integral of _f_ _dz_ along _γ__j_ = ∂V is equal to the sum of a set of integrals along paths _λ__j_, each enclosing an arbitrarily small region around a single _a__j_ — the residues of f (up to the conventional factor 2π_i_) at {_a__j_}. Summing over {_γ__j_}, we recover the final expression of the contour integral in terms of the winding numbers {I(_γ_, _a__k_)}.

In order to evaluate real integrals, the residue theorem is used in the following manner: the integrand is extended to the complex plane and its residues are computed (which is usually easy), and a part of the real axis is extended to a closed curve by attaching a half-circle in the upper or lower half-plane, forming a semicircle. The integral over this curve can then be computed using the residue theorem. Often, the half-circle part of the integral will tend towards zero as the radius of the half-circle grows, leaving only the real-axis part of the integral, the one we were originally interested in.

## Examples\[[edit]\]

### An integral along the real axis\[[edit]\]

The integral

![{\displaystyle \int _{-\infty }^{\infty }{\frac {e^{itx}}{x^{2}+1}}\,dx}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c555271abb07c7d5b1c0721d86358e4c6d1a930f)

[![](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Contour_example.svg/300px-Contour_example.svg.png)]

arises in [probability theory] when calculating the [characteristic function] of the [Cauchy distribution]. It resists the techniques of elementary [calculus] but can be evaluated by expressing it as a limit of [contour integrals].

Suppose _t_ > 0 and define the contour C that goes along the [real] line from −_a_ to a and then counterclockwise along a semicircle centered at 0 from a to −_a_. Take a to be greater than 1, so that the [imaginary] unit i is enclosed within the curve. Now consider the contour integral

![{\displaystyle \int _{C}{f(z)}\,dz=\int _{C}{\frac {e^{itz}}{z^{2}+1}}\,dz.}](https://wikimedia.org/api/rest_v1/media/math/render/svg/3ab4554a28f03c46fc28301e38a0dd95de7fc070)

Since _e__itz_ is an [entire function] (having no [singularities] at any point in the complex plane), this function has singularities only where the denominator _z_2 + 1 is zero. Since _z_2 + 1 = (_z_ + _i_)(_z_ − _i_), that happens only where _z_ = _i_ or _z_ = −_i_. Only one of those points is in the region bounded by this contour. Because _f_(_z_) is

![{\begin{aligned}{\frac {e^{itz}}{z^{2}+1}}&={\frac {e^{itz}}{2i}}\left({\frac {1}{z-i}}-{\frac {1}{z+i}}\right)\\&={\frac {e^{itz}}{2i(z-i)}}-{\frac {e^{itz}}{2i(z+i)}},\end{aligned}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/b79b933acee9a0cbe36a144fa05e235a214d7551)

the [residue] of _f_(_z_) at _z_ = _i_ is

![{\displaystyle \operatorname {Res} _{z=i}f(z)={\frac {e^{-t}}{2i}}.}](https://wikimedia.org/api/rest_v1/media/math/render/svg/e9a0d478f6bfaaf63d122775022893267d878d82)

According to the residue theorem, then, we have

![{\displaystyle \int _{C}f(z)\,dz=2\pi i\cdot \operatorname {Res} \limits _{z=i}f(z)=2\pi i{\frac {e^{-t}}{2i}}=\pi e^{-t}.}](https://wikimedia.org/api/rest_v1/media/math/render/svg/36d12a8694522e2d74b9fd53ec20617c67474ef1)

The contour C may be split into a straight part and a curved arc, so that

![\int _{\mathrm {straight} }f(z)\,dz+\int _{\mathrm {arc} }f(z)\,dz=\pi e^{-t}\,](https://wikimedia.org/api/rest_v1/media/math/render/svg/583b2e5c171efdfe02e14d1f171ed41930eefe44)

and thus

![\int _{-a}^{a}f(z)\,dz=\pi e^{-t}-\int _{\mathrm {arc} }f(z)\,dz.](https://wikimedia.org/api/rest_v1/media/math/render/svg/deb00671798bfe9925dfc5dc0234055028fedc6d)

Using some [estimations], we have

![{\displaystyle \left|\int _{\mathrm {arc} }{\frac {e^{itz}}{z^{2}+1}}\,dz\right|\leq \pi a\cdot \sup _{\text{arc}}\left|{\frac {e^{itz}}{z^{2}+1}}\right|\leq \pi a\cdot \sup _{\text{arc}}{\frac {1}{|z^{2}+1|}}\leq {\frac {\pi a}{a^{2}-1}},}](https://wikimedia.org/api/rest_v1/media/math/render/svg/7c07d6a27cd521b4ec31c718950458ee62191d02)

and

![{\displaystyle \lim _{a\to \infty }{\frac {\pi a}{a^{2}-1}}=0.}](https://wikimedia.org/api/rest_v1/media/math/render/svg/7e9342e489babecc58ae479ae8374530e257f8f2)

The estimate on the numerator follows since _t_ > 0, and for complex numbers z along the arc (which lies in the upper halfplane), the argument φ of z lies between 0 and π. So,

![{\displaystyle \left|e^{itz}\right|=\left|e^{it|z|(\cos \varphi +i\sin \varphi )}\right|=\left|e^{-t|z|\sin \varphi +it|z|\cos \varphi }\right|=e^{-t|z|\sin \varphi }\leq 1.}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c3a92de8c8cc7ce504ce683ea13abbca1162eecc)

Therefore,

![{\displaystyle \int _{-\infty }^{\infty }{\frac {e^{itz}}{z^{2}+1}}\,dz=\pi e^{-t}.}](https://wikimedia.org/api/rest_v1/media/math/render/svg/080ca8ec036289831e7ef5a145f158d03bbe7e2d)

If _t_ < 0 then a similar argument with an arc _C_′ that winds around −_i_ rather than _i_ shows that

[![](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Contour_example_2.svg/300px-Contour_example_2.svg.png)]

![{\displaystyle \int _{-\infty }^{\infty }{\frac {e^{itz}}{z^{2}+1}}\,dz=\pi e^{t},}](https://wikimedia.org/api/rest_v1/media/math/render/svg/62792c970f892f164119679b8ba3983f8450513d)

and finally we have

![{\displaystyle \int _{-\infty }^{\infty }{\frac {e^{itz}}{z^{2}+1}}\,dz=\pi e^{-\left|t\right|}.}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a84fc9e615a9733fbe62a80a77c0ebe363e34478)

(If _t_ = 0 then the integral yields immediately to elementary calculus methods and its value is π.)

### An infinite sum\[[edit]\]

The fact that _π_ cot(_πz_) has simple poles with residue 1 at each integer can be used to compute the sum

![{\displaystyle \displaystyle \sum _{n=-\infty }^{\infty }f(n).}](https://wikimedia.org/api/rest_v1/media/math/render/svg/45e0460f0625440f218b57e0e9d35b78a04cddf3)

Consider, for example, _f_(_z_) = _z_−2. Let Γ_N_ be the rectangle that is the boundary of \[−_N_ − 1/2, _N_ + 1/2\]2 with positive orientation, with an integer N. By the residue formula,

![{\displaystyle {\frac {1}{2\pi i}}\int _{\Gamma _{N}}f(z)\pi \cot(\pi z)\,dz=\operatorname {Res} \limits _{z=0}+\sum _{n=-N \atop n\neq 0}^{N}n^{-2}.}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f01c773fd7c0b0b133eacd67a6163a3cad92574a)

The left-hand side goes to zero as _N_ → ∞ since the integrand has order ![{\displaystyle O(n^{-2})}](https://wikimedia.org/api/rest_v1/media/math/render/svg/1db12032fc70fc0fb78482cfda95b31a70abc484). On the other hand,[\[2\]]

![{\displaystyle {\frac {z}{2}}\cot \left({\frac {z}{2}}\right)=1-B_{2}{\frac {z^{2}}{2!}}+\cdots \qquad }](https://wikimedia.org/api/rest_v1/media/math/render/svg/b1ad7792df525dc4d503d57729f6c8a03842a204) where the [Bernoulli number] ![{\displaystyle B_{2}={\frac {1}{6}}.}](https://wikimedia.org/api/rest_v1/media/math/render/svg/503abde8b1101b0372374a304587efa0efa85ff2)

(In fact, _z_/2 cot(_z_/2) = _iz_/1 − _e_−_iz_ − _iz_/2.) Thus, the residue Res_z_\=0 is −_π_2/3. We conclude:

![{\displaystyle \sum _{n=1}^{\infty }{\frac {1}{n^{2}}}={\frac {\pi ^{2}}{6}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/26a915462f991c41d6da8e006e857aed0ee427cf)

which is a proof of the [Basel problem].

The same trick can be used to establish the sum of the [Eisenstein series]:

![{\displaystyle \pi \cot(\pi z)=\lim _{N\to \infty }\sum _{n=-N}^{N}(z-n)^{-1}.}](https://wikimedia.org/api/rest_v1/media/math/render/svg/6ef0755c90ae183ef1ad762c2b4caf21629aeddc)

We take _f_(_z_) = (_w_ − _z_)−1 with w a non-integer and we shall show the above for w. The difficulty in this case is to show the vanishing of the contour integral at infinity. We have:

![{\displaystyle \int _{\Gamma _{N}}{\frac {\pi \cot(\pi z)}{z}}\,dz=0}](https://wikimedia.org/api/rest_v1/media/math/render/svg/545fdab43d2ce3e769d329570f39a9a2476d0ba7)

since the integrand is an even function and so the contributions from the contour in the left-half plane and the contour in the right cancel each other out. Thus,

![{\displaystyle \int _{\Gamma _{N}}f(z)\pi \cot(\pi z)\,dz=\int _{\Gamma _{N}}\left({\frac {1}{w-z}}+{\frac {1}{z}}\right)\pi \cot(\pi z)\,dz}](https://wikimedia.org/api/rest_v1/media/math/render/svg/0f337f19c55f5be4ee43806483a1617cb801ac95)

goes to zero as _N_ → ∞.

## See also\[[edit]\]

-   [Cauchy's integral formula]
-   [Glasser's master theorem]
-   [Jordan's lemma]
-   [Methods of contour integration]
-   [Morera's theorem]
-   [Nachbin's theorem]
-   [Residue at infinity]
-   [Logarithmic form]

## Notes\[[edit]\]

## References\[[edit]\]

-   [Ahlfors, Lars] (1979). _Complex Analysis_. McGraw Hill. [ISBN] [0-07-085008-9].
-   [Lindelöf, Ernst L.] (1905). _Le calcul des résidus et ses applications à la théorie des fonctions_ (in French). Editions Jacques Gabay (published 1989). [ISBN] [2-87647-060-8].
-   Mitrinović, Dragoslav; Kečkić, Jovan (1984). _The Cauchy method of residues: Theory and applications_. D. Reidel Publishing Company. [ISBN] [90-277-1623-4].
-   [Whittaker, E. T.]; [Watson, G. N.] (1920). _[A Course of Modern Analysis]_ (3rd ed.). Cambridge University Press.

## External links\[[edit]\]

-   ["Cauchy integral theorem"], _[Encyclopedia of Mathematics]_, [EMS Press], 2001 \[1994\]
-   [Residue theorem] in [MathWorld]

[complex analysis]: https://en.wikipedia.org/wiki/Complex_analysis "Complex analysis"
[line integrals]: https://en.wikipedia.org/wiki/Line_integral "Line integral"
[analytic functions]: https://en.wikipedia.org/wiki/Analytic_function "Analytic function"
[infinite series]: https://en.wikipedia.org/wiki/Infinite_series "Infinite series"
[Cauchy integral theorem]: https://en.wikipedia.org/wiki/Cauchy_integral_theorem "Cauchy integral theorem"
[Cauchy's integral formula]: https://en.wikipedia.org/wiki/Cauchy%27s_integral_formula "Cauchy's integral formula"
[generalized Stokes' theorem]: https://en.wikipedia.org/wiki/Generalized_Stokes%27_theorem "Generalized Stokes' theorem"
[edit]: https://en.wikipedia.org/w/index.php?title=Residue_theorem&action=edit&section=1 "Edit section: Statement"
[simply connected]: https://en.wikipedia.org/wiki/Simply_connected "Simply connected"
[open subset]: https://en.wikipedia.org/wiki/Open_subset "Open subset"
[complex plane]: https://en.wikipedia.org/wiki/Complex_plane "Complex plane"
[holomorphic]: https://en.wikipedia.org/wiki/Holomorphic_function "Holomorphic function"
[rectifiable curve]: https://en.wikipedia.org/wiki/Rectifiable_curve "Rectifiable curve"
[winding number]: https://en.wikipedia.org/wiki/Winding_number "Winding number"
[residues]: https://en.wikipedia.org/wiki/Residue_(complex_analysis) "Residue (complex analysis)"
[positively oriented]: https://en.wikipedia.org/wiki/Curve_orientation "Curve orientation"
[simple closed curve]: https://en.wikipedia.org/wiki/Jordan_curve "Jordan curve"
[\[1\]]: https://en.wikipedia.org/wiki/Residue_theorem#cite_note-1
[Jordan curve theorem]: https://en.wikipedia.org/wiki/Jordan_curve_theorem "Jordan curve theorem"
[plane curve]: https://en.wikipedia.org/wiki/Plane_curve "Plane curve"
[exterior derivative]: https://en.wikipedia.org/wiki/Exterior_derivative "Exterior derivative"
[edit]: https://en.wikipedia.org/w/index.php?title=Residue_theorem&action=edit&section=2 "Edit section: Examples"
[edit]: https://en.wikipedia.org/w/index.php?title=Residue_theorem&action=edit&section=3 "Edit section: An integral along the real axis"
[probability theory]: https://en.wikipedia.org/wiki/Probability_theory "Probability theory"
[characteristic function]: https://en.wikipedia.org/wiki/Characteristic_function_(probability_theory) "Characteristic function (probability theory)"
[Cauchy distribution]: https://en.wikipedia.org/wiki/Cauchy_distribution "Cauchy distribution"
[calculus]: https://en.wikipedia.org/wiki/Calculus "Calculus"
[contour integrals]: https://en.wikipedia.org/wiki/Contour_integral "Contour integral"
[real]: https://en.wikipedia.org/wiki/Real_number "Real number"
[imaginary]: https://en.wikipedia.org/wiki/Imaginary_number "Imaginary number"
[entire function]: https://en.wikipedia.org/wiki/Entire_function "Entire function"
[singularities]: https://en.wikipedia.org/wiki/Mathematical_singularity "Mathematical singularity"
[residue]: https://en.wikipedia.org/wiki/Residue_(complex_analysis) "Residue (complex analysis)"
[estimations]: https://en.wikipedia.org/wiki/Estimation_lemma "Estimation lemma"
[edit]: https://en.wikipedia.org/w/index.php?title=Residue_theorem&action=edit&section=4 "Edit section: An infinite sum"
[\[2\]]: https://en.wikipedia.org/wiki/Residue_theorem#cite_note-2
[Bernoulli number]: https://en.wikipedia.org/wiki/Bernoulli_number "Bernoulli number"
[Basel problem]: https://en.wikipedia.org/wiki/Basel_problem "Basel problem"
[Eisenstein series]: https://en.wikipedia.org/wiki/Eisenstein_series "Eisenstein series"
[edit]: https://en.wikipedia.org/w/index.php?title=Residue_theorem&action=edit&section=5 "Edit section: See also"
[Cauchy's integral formula]: https://en.wikipedia.org/wiki/Cauchy%27s_integral_formula "Cauchy's integral formula"
[Glasser's master theorem]: https://en.wikipedia.org/wiki/Glasser%27s_master_theorem "Glasser's master theorem"
[Jordan's lemma]: https://en.wikipedia.org/wiki/Jordan%27s_lemma "Jordan's lemma"
[Methods of contour integration]: https://en.wikipedia.org/wiki/Methods_of_contour_integration "Methods of contour integration"
[Morera's theorem]: https://en.wikipedia.org/wiki/Morera%27s_theorem "Morera's theorem"
[Nachbin's theorem]: https://en.wikipedia.org/wiki/Nachbin%27s_theorem "Nachbin's theorem"
[Residue at infinity]: https://en.wikipedia.org/wiki/Residue_at_infinity "Residue at infinity"
[Logarithmic form]: https://en.wikipedia.org/wiki/Logarithmic_form "Logarithmic form"
[edit]: https://en.wikipedia.org/w/index.php?title=Residue_theorem&action=edit&section=6 "Edit section: Notes"
[edit]: https://en.wikipedia.org/w/index.php?title=Residue_theorem&action=edit&section=7 "Edit section: References"
[Ahlfors, Lars]: https://en.wikipedia.org/wiki/Lars_Ahlfors "Lars Ahlfors"
[ISBN]: https://en.wikipedia.org/wiki/ISBN_(identifier) "ISBN (identifier)"
[0-07-085008-9]: https://en.wikipedia.org/wiki/Special:BookSources/0-07-085008-9 "Special:BookSources/0-07-085008-9"
[Lindelöf, Ernst L.]: https://en.wikipedia.org/wiki/Ernst_Leonard_Lindel%C3%B6f "Ernst Leonard Lindelöf"
[ISBN]: https://en.wikipedia.org/wiki/ISBN_(identifier) "ISBN (identifier)"
[2-87647-060-8]: https://en.wikipedia.org/wiki/Special:BookSources/2-87647-060-8 "Special:BookSources/2-87647-060-8"
[ISBN]: https://en.wikipedia.org/wiki/ISBN_(identifier) "ISBN (identifier)"
[90-277-1623-4]: https://en.wikipedia.org/wiki/Special:BookSources/90-277-1623-4 "Special:BookSources/90-277-1623-4"
[Whittaker, E. T.]: https://en.wikipedia.org/wiki/E._T._Whittaker "E. T. Whittaker"
[Watson, G. N.]: https://en.wikipedia.org/wiki/G._N._Watson "G. N. Watson"
[A Course of Modern Analysis]: https://en.wikipedia.org/wiki/A_Course_of_Modern_Analysis "A Course of Modern Analysis"
[edit]: https://en.wikipedia.org/w/index.php?title=Residue_theorem&action=edit&section=8 "Edit section: External links"
["Cauchy integral theorem"]: https://www.encyclopediaofmath.org/index.php?title=Cauchy_integral_theorem
[Encyclopedia of Mathematics]: https://en.wikipedia.org/wiki/Encyclopedia_of_Mathematics "Encyclopedia of Mathematics"
[EMS Press]: https://en.wikipedia.org/wiki/European_Mathematical_Society "European Mathematical Society"
[Residue theorem]: http://mathworld.wolfram.com/ResidueTheorem.html
[MathWorld]: https://en.wikipedia.org/wiki/MathWorld "MathWorld"
