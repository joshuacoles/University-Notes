## Fields

In this course we will be considering [[Scalar Field|Scalar Fields]] and [[Vector Field|Vector Fields]], normally over $\R^2$ or $\R^3$. They are defined as

![[Scalar Field]]

![[Vector Field]]

### Unit Vectors

To keep things simple we will operate pretty much exclusively in the [[Standard Basis]], using the following notation equivalently,

$$
\begin{align}
\uvec{e}_x = \uvec{e}_1 = \uvi \\
\uvec{e}_y = \uvec{e}_2 = \uvj \\
\uvec{e}_z = \uvec{e}_3 = \uvk
\end{align}
$$

## Multidimensional Integrals

![[Notation of Multiple Integration]]

> See also [[Riemann Sums in higher dimensions]].

If the integrand in these integrals is itself a vector, then one can rely on the [[Linearity of the Integral]], to give you,

$$
\iint_\Omega \F \,\d A = \begin{pmatrix}
\iint F_1 \,\d A\\
\iint F_2 \,\d A\\
\iint F_3 \,\d A
\end{pmatrix} = \iint F_i \,\d A.
$$

### Change of Variables

> See further [[Change of Variables in Integration]].

> See further [[Examples of Jacobians]]

## Various Derivative Constructs

In higher dimensions we lose the simplicity of a single derivative, instead broadening into many different concepts such as,

The [[Directional Derivative]] of which the [[Partial Derivative|Partial Derivatives]] can be viewed as a specialisation with respect to the [[Standard Basis]]. These provide the "numerical" building blocks of differentiation in higher dimensions.

The [[Gradient of a Scalar Field]], built from, and highly connected to the [[Partial Derivative]] and [[Directional Derivative]]. Expressing many relations with the two such as,

- [[Gradient as Direction of Deepest Decent]]
- Behaviour of [[Directional Derivative]] at zero of [[Gradient of Scalar Field]].

Naturally leading to a discussion of [[Conservative Vector Fields]] and their relation to [[Scalar Field|Scalar Fields]], in the form of a [[Scalar Potential Function]].

> Aside 
> - [[Countors of Scalar Field]]
>	- [[Contour Diagrams]]
>	- [[Perpendicularity of Gradient to Contours]]
