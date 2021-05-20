# 1 Partial and Directional Derivatives

For most of this chapter we will be working with functions of the form $f : U \to \R$ where $U \sub \R^n$ is an [[1.1 Analytic Space]].

Starting from the standard $f : (a,b) \to \R$ we can define the [[Derivative]] $f'(x)$ at $x \in (a, b)$ as the limit of the [[Difference Quotient]],

$$
\begin{equation}
g'(x) = \lim_{h \to 0} \frac{g(x + h) - g(x)}{h}.
\tag{1.1}
\end{equation}
$$

^eq-1-1

This can be extended into two forms, the [[1.2 Partial Derivative]] and the [[1.3 Directional Derivative]]. These [[1.2 Partial Derivative|Partial Derivatives]], if they exist, can then be combined into the [[1.4 Gradient]] creating a *vector-valued* function,

![[1.4 Gradient#^7d9bab]]

For this and other *vector-valued* of the form $f : \R^n \to \R^m$ we have the [[1.5 Jacobian Matrix]] as the analogous construct.

Note that this links strongly with [[2-2 Directional Derivatives, Gradients, and Potentials]].

---

```ccard
items: [
  {
    title: 'Analytic Space',
    link: 'Analysis 2B/1 Partial and Directional Derivatives/1.1 Analytic Space.md',
    brief: 'Sufficently well behaved space.',
  },
  {
    title: 'Partial Derivative',
    link: 'Analysis 2B/1 Partial and Directional Derivatives/1.2 Partial Derivative.md',
    brief: '',
  },
  {
    title: 'Directional Derivative',
    link: 'Analysis 2B/1 Partial and Directional Derivatives/1.3 Directional Derivative.md',
    brief: '',
  },
  {
    title: 'Gradient',
    link: 'Analysis 2B/1 Partial and Directional Derivatives/1.4 Gradient.md',
    brief: 'A vector of Partial Derivatives',
  },
  {
    title: 'Jacobian Matrix',
    link: 'Analysis 2B/1 Partial and Directional Derivatives/1.5 Jacobian Matrix.md',
    brief: 'A matrix of partial derivatives',
  }
]
```
