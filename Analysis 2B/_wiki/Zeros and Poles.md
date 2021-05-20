---
created: 2021-05-16T17:38:13 (UTC +01:00)
source: https://en.wikipedia.org/wiki/Zeros_and_poles
---

# Zeros and poles - Wikipedia

> ## Excerpt
> In complex analysis (a branch of mathematics), a pole is a certain type of singularity of a function, nearby which the function behaves relatively regularly, in contrast to essential singularities, such as 0 for the logarithm function, and branch points, such as 0 for the complex square root function.

---

A [[Pole]] is a type of [[Singularity]] nearby which the function behaves relatively regularly. This is in contrast to [[Essential Singularity|Essential Singularities]].

- A zero of a [[Meromorphic Function]] $f$ is a complex number $z$ such that $f(z) = 0$.
- A [[Pole]] of f is a **zero** of $\frac 1f$.

This induces a duality between _zeros_ and _Poles_, that is obtained by replacing the function f by its reciprocal 1/_f_ . 

This duality is fundamental for the study of meromorphic functions. For example, if a function is meromorphic on the whole [complex plane], including the [point at infinity], then the sum of the [multiplicities] of its poles equals the sum of the multiplicities of its zeros.

## Definitions 

A [function of a complex variable] z is [holomorphic] in an [open domain] U if it is [differentiable] with respect to z at every point of U. Equivalently, it is holomorphic if it is [analytic], that is, if its [Taylor series] exists at every point of U, and converges to the function in some [neighbourhood] of the point. A function is [meromorphic] in U if every point of U has a neighbourhood such that either f or 1/_f_ is holomorphic in it.

A **[zero]** of a meromorphic function f is a complex number z such that _f_(_z_) = 0. A **pole** of f is a zero of 1/_f_.

If f is a function that is meromorphic in a neighbourhood of a point $z_{0}$ of the [complex plane], then there exists an integer n such that

$$ (z-z_{0})^{n}f(z) $$

is holomorphic and nonzero in a neighbourhood of $z_{0}$ (this is a consequence of the analytic property). If _n_ > 0, then $z_{0}$ is a _pole_ of **order** (or multiplicity) n of f. If _n_ < 0, then ![z_{0}](https://wikimedia.org/api/rest_v1/media/math/render/svg/9e72d1d86e86355892b39b8eb32b964834e113bf) is a zero of order ![{\displaystyle |n|}](https://wikimedia.org/api/rest_v1/media/math/render/svg/35a62139afd28f74d3306e3bf603bebdecefe169) of f. _Simple zero_ and _simple pole_ are terms used for zeroes and poles of order ![{\displaystyle |n|=1.}$ _Degree_ is sometimes used synonymously to order.

This characterization of zeros and poles implies that zeros and poles are [isolated], that is, every zero or pole has a neighbourhood that does not contain any other zero and pole.

Because of the _order_ of zeros and poles being defined as a non-negative number n and the symmetry between them, it is often useful to consider a pole of order n as a zero of order –_n_ and a zero of order n as a pole of order –_n_. In this case a point that is neither a pole nor a zero is viewed as a pole (or zero) of order 0.

A meromorphic function may have infinitely many zeros and poles. This is the case for the [gamma function] (see the image in the infobox), which is meromorphic in the whole complex plane, and has a simple pole at every non-positive integer. The [Riemann zeta function] is also meromorphic in the whole complex plane, with a single pole of order 1 at _z_ = 1. Its zeros in the left halfplane are all the negative even integers, and the [Riemann hypothesis] is the conjecture that all other zeros are along Re(_z_) = 1/2.

In a neighbourhood of a point ${\displaystyle z_{0},}$ a nonzero meromorphic function f is the sum of a [Laurent series] with at most finite _principal part_ (the terms with negative index values):

$$
f(z)=\sum _{k\geq -n}a_{k}(z-z_{0})^{k},
$$

where n is an integer, and $a_{-n}\neq 0.$ Again, if $n > 0$ (the sum starts with $a_{-|n|}(z-z_{0})^{-|n|}$, the principal part has $n$ terms), one has a pole of order $n$, and if $n ≤ 0$ (the sum starts with $a_{|n|}(z-z_{0})^{|n|}$, there is no principal part), one has a zero of order $|n|$.

## At infinity\[[edit]\]

A function $z\mapsto f(z)$ is _meromorphic at infinity_ if it is meromorphic in some neighbourhood of infinity (that is outside some [disk]), and there is an integer n such that

$$\lim _{z\to \infty }{\frac {f(z)}{z^{n}}}$$

exists and is a nonzero complex number.

In this case, the [point at infinity] is a pole of order n if _n_ > 0, and a zero of order ${\displaystyle |n|}$ if _n_ < 0.

For example, a [polynomial] of degree n has a pole of degree n at infinity.

The [complex plane] extended by a point at infinity is called the [Riemann sphere].

If f is a function that is meromorphic on the whole Riemann sphere, then it has a finite number of zeros and poles, and the sum of the orders of its poles equals the sum of the orders of its zeros.

Every [rational function] is meromorphic on the whole Riemann sphere, and, in this case, the sum of orders of the zeros or of the poles is the maximum of the degrees of the numerator and the denominator.

## Examples\[[edit]\]

![](https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Pole-order9-infin.png/300px-Pole-order9-infin.png)


-   The function $f(z) = \frac{3}{z}$ is meromorphic on the whole Riemann sphere. It has a pole of order 1 or simple pole at ${\displaystyle z=0,}$ and a simple zero at infinity.

-   The function $f(z) = \frac{z+2}{(z-5)^2(z+7)^3}$ is meromorphic on the whole Riemann sphere. It has a pole of order 2 at $z=5$ and a pole of order $3$ at $z = -7$. It has a simple zero at $z=-2$ and a quadruple zero at infinity.

-   The function $f(z) = \frac{z-4}{e^z-1}$ is meromorphic in the whole complex plane, but not at infinity. It has poles of order 1 at $z=2\pi ni{\text{ for }}n\in \mathbb {Z}$. This can be seen by writing the [Taylor series] of $e^z$ around the origin.

-   The function $f(z) = z$ has a single pole at infinity of order 1, and a single zero at the origin.

All above examples except for the third are [rational functions]. For a general discussion of zeros and poles of such functions, see [Pole–zero plot § Continuous-time systems].

## Function on a curve\[[edit]\]

The concept of zeros and poles extends naturally to functions on a _complex curve_, that is [complex analytic manifold] of dimension one (over the complex numbers). The simplest examples of such curves are the [complex plane] and the [Riemann surface]. This extension is done by transferring structures and properties through [charts], which are analytic [isomorphisms].

More precisely, let f be a function from a complex curve M to the complex numbers. This function is holomorphic (resp. meromorphic) in a neighbourhood of a point z of M if there is a chart $\phi$ such that $f\circ \phi ^{-1}$ is holomorphic (resp. meromorphic) in a neighbourhood of $\phi (z)$. Then, z is a pole or a zero of order n if the same is true for $\phi (z)$.

If the curve is [compact], and the function f is meromorphic on the whole curve, then the number of zeros and poles is finite, and the sum of the orders of the poles equals the sum of the orders of the zeros. This is one of the basic facts that are involved in [Riemann–Roch theorem].

[complex analysis]: https://en.wikipedia.org/wiki/Complex_analysis "Complex analysis"
[singularity]: https://en.wikipedia.org/wiki/Singularity_(mathematics) "Singularity (mathematics)"
[essential singularities]: https://en.wikipedia.org/wiki/Essential_singularities "Essential singularities"
[logarithm function]: https://en.wikipedia.org/wiki/Logarithm_function "Logarithm function"
[branch points]: https://en.wikipedia.org/wiki/Branch_point
[square root function]: https://en.wikipedia.org/wiki/Square_root_function "Square root function"
[complex variable]: https://en.wikipedia.org/wiki/Complex_variable "Complex variable"
[meromorphic]: https://en.wikipedia.org/wiki/Meromorphic_function "Branch point"
[neighbourhood]: https://en.wikipedia.org/wiki/Neighbourhood_(mathematics) "Neighbourhood (mathematics)"
[reciprocal]: https://en.wikipedia.org/wiki/Multiplicative_inverse "Multiplicative inverse"
[holomorphic]: https://en.wikipedia.org/wiki/Holomorphic_function "Holomorphic function"
[complex differentiable]: https://en.wikipedia.org/wiki/Complex_differentiable "Complex differentiable"
[zero]: https://en.wikipedia.org/wiki/Zero_of_a_function "Zero of a function"
[complex plane]: https://en.wikipedia.org/wiki/Complex_plane "Complex plane"
[point at infinity]: https://en.wikipedia.org/wiki/Point_at_infinity "Point at infinity"
[multiplicities]: https://en.wikipedia.org/wiki/Multiplicity_(mathematics) "Multiplicity (mathematics)"
[edit]: https://en.wikipedia.org/w/index.php?title=Zeros_and_poles&action=edit&section=1 "Edit section: Definitions"
[function of a complex variable]: https://en.wikipedia.org/wiki/Function_of_a_complex_variable "Function of a complex variable"
[holomorphic]: https://en.wikipedia.org/wiki/Holomorphic_function "Holomorphic function"
[open domain]: https://en.wikipedia.org/wiki/Open_set "Open set"
[differentiable]: https://en.wikipedia.org/wiki/Differentiable_function "Differentiable function"
[analytic]: https://en.wikipedia.org/wiki/Analytic_function "Analytic function"
[Taylor series]: https://en.wikipedia.org/wiki/Taylor_series "Taylor series"
[neighbourhood]: https://en.wikipedia.org/wiki/Neighbourhood_(mathematics) "Neighbourhood (mathematics)"
[meromorphic]: https://en.wikipedia.org/wiki/Meromorphic_function "Meromorphic function"
[zero]: https://en.wikipedia.org/wiki/Zero_of_a_function "Zero of a function"
[complex plane]: https://en.wikipedia.org/wiki/Complex_plane "Complex plane"
[isolated]: https://en.wikipedia.org/wiki/Isolated_point "Isolated point"
[gamma function]: https://en.wikipedia.org/wiki/Gamma_function "Gamma function"
[Riemann zeta function]: https://en.wikipedia.org/wiki/Riemann_zeta_function "Riemann zeta function"
[Riemann hypothesis]: https://en.wikipedia.org/wiki/Riemann_hypothesis "Riemann hypothesis"
[Laurent series]: https://en.wikipedia.org/wiki/Laurent_series "Laurent series"
[edit]: https://en.wikipedia.org/w/index.php?title=Zeros_and_poles&action=edit&section=2 "Edit section: At infinity"
[disk]: https://en.wikipedia.org/wiki/Disk_(mathematics) "Disk (mathematics)"
[point at infinity]: https://en.wikipedia.org/wiki/Point_at_infinity "Point at infinity"
[polynomial]: https://en.wikipedia.org/wiki/Polynomial "Polynomial"
[complex plane]: https://en.wikipedia.org/wiki/Complex_plane "Complex plane"
[Riemann sphere]: https://en.wikipedia.org/wiki/Riemann_sphere "Riemann sphere"
[rational function]: https://en.wikipedia.org/wiki/Rational_function "Rational function"
[edit]: https://en.wikipedia.org/w/index.php?title=Zeros_and_poles&action=edit&section=3 "Edit section: Examples"
[Taylor series]: https://en.wikipedia.org/wiki/Taylor_series "Taylor series"
[rational functions]: https://en.wikipedia.org/wiki/Rational_functions "Rational functions"
[Pole–zero plot § Continuous-time systems]: https://en.wikipedia.org/wiki/Pole%E2%80%93zero_plot#Continuous-time_systems "Pole–zero plot"
[edit]: https://en.wikipedia.org/w/index.php?title=Zeros_and_poles&action=edit&section=4 "Edit section: Function on a curve"
[complex analytic manifold]: https://en.wikipedia.org/wiki/Complex_analytic_manifold "Complex analytic manifold"
[complex plane]: https://en.wikipedia.org/wiki/Complex_plane "Complex plane"
[Riemann surface]: https://en.wikipedia.org/wiki/Riemann_surface "Riemann surface"
[charts]: https://en.wikipedia.org/wiki/Atlas_(topology) "Atlas (topology)"
[isomorphisms]: https://en.wikipedia.org/wiki/Isomorphism "Isomorphism"
[compact]: https://en.wikipedia.org/wiki/Compact_space "Compact space"
[Riemann–Roch theorem]: https://en.wikipedia.org/wiki/Riemann%E2%80%93Roch_theorem "Riemann–Roch theorem"
[edit]: https://en.wikipedia.org/w/index.php?title=Zeros_and_poles&action=edit&section=5 "Edit section: See also"
[Control theory#Stability]: https://en.wikipedia.org/wiki/Control_theory#Stability "Control theory"
[Filter design]: https://en.wikipedia.org/wiki/Filter_design "Filter design"
[Filter (signal processing)]: https://en.wikipedia.org/wiki/Filter_(signal_processing) "Filter (signal processing)"
[Gauss–Lucas theorem]: https://en.wikipedia.org/wiki/Gauss%E2%80%93Lucas_theorem "Gauss–Lucas theorem"
[Hurwitz's theorem (complex analysis)]: https://en.wikipedia.org/wiki/Hurwitz%27s_theorem_(complex_analysis) "Hurwitz's theorem (complex analysis)"
[Marden's theorem]: https://en.wikipedia.org/wiki/Marden%27s_theorem "Marden's theorem"
[Nyquist stability criterion]: https://en.wikipedia.org/wiki/Nyquist_stability_criterion "Nyquist stability criterion"
[Pole–zero plot]: https://en.wikipedia.org/wiki/Pole%E2%80%93zero_plot "Pole–zero plot"
[Residue (complex analysis)]: https://en.wikipedia.org/wiki/Residue_(complex_analysis) "Residue (complex analysis)"
[Rouché's theorem]: https://en.wikipedia.org/wiki/Rouch%C3%A9%27s_theorem "Rouché's theorem"
[Sendov's conjecture]: https://en.wikipedia.org/wiki/Sendov%27s_conjecture "Sendov's conjecture"
[edit]: https://en.wikipedia.org/w/index.php?title=Zeros_and_poles&action=edit&section=6 "Edit section: References"
[Conway, John B.]: https://en.wikipedia.org/wiki/John_B._Conway "John B. Conway"
[ISBN]: https://en.wikipedia.org/wiki/ISBN_(identifier) "ISBN (identifier)"
[0-387-90328-3]: https://en.wikipedia.org/wiki/Special:BookSources/0-387-90328-3 "Special:BookSources/0-387-90328-3"
[ISBN]: https://en.wikipedia.org/wiki/ISBN_(identifier) "ISBN (identifier)"
[0-387-94460-5]: https://en.wikipedia.org/wiki/Special:BookSources/0-387-94460-5 "Special:BookSources/0-387-94460-5"
[Henrici, Peter]: https://en.wikipedia.org/wiki/Peter_Henrici_(mathematician) "Peter Henrici (mathematician)"
[John Wiley & Sons]: https://en.wikipedia.org/wiki/John_Wiley_%26_Sons "John Wiley & Sons"
[edit]: https://en.wikipedia.org/w/index.php?title=Zeros_and_poles&action=edit&section=7 "Edit section: External links"
[Weisstein, Eric W.]: https://en.wikipedia.org/wiki/Eric_W._Weisstein "Eric W. Weisstein"
["Pole"]: https://mathworld.wolfram.com/Pole.html
[MathWorld]: https://en.wikipedia.org/wiki/MathWorld "MathWorld"
