# 2 Differentiable functions

Partial and directional derivatives are easy to compute, but they give *limited information* about the behaviour of a function.

A more complete approach is provided by considering the the derivative as a linear approximation of a function at a given point.

For a differentiable function $g : (a, b) \to \R$ of a single variable, we know that for $x \in (a, b)$, the derivative $g'(x)$ is the slope of the tangent line to the graph of $g$ at the point $(x, g(x))$, giving the best[^1] linear approximation to the function $g$ near $x$.

![[tangent.png|Tangent line to the graph of a function]]

[^1]: Proof of best? #todo probably through contradiction.

## 2.1 The Derivative

For functions of several variables, we can use a similar idea. The derivative then corresponds to a [[Linear Map]] which approximates the given function. This is no different if we have vector-valued functions $f : U \to \R^m$ so we formulate the concept for this situation, the [[2.1 Derivative]] $A : \R^n \to \R^m$ such that,

![[2.1 Derivative#^2cef8b]]

saying that a function is [[2.1 Derivative|Differentiable]] if this [[Linear Map]] $A$ exists. This has some nice properties:

- Similarly to functions of one variable, [[2.2 Differentiability => Continuity]].
- The [[2.1 Derivative|Derivative Map]] is equal to the [[1.5 Jacobian Matrix|Jacobian]] under the [[Standard Basis]]: cf. [[2.3 Relation between the Jacobian and Derivative]]

[[2.4 Continuity of Partial Derivatives in a Open Region => Differentiability within Region]]

## 2.2 The chain rule

We have the following formula for the derivative of composite functions.

[[2.5 Chain Rule for Real Functions]]

---

```ccard
style: strip
items: [
  {
    title: '2.1 Derivative',
    link: 'Analysis 2B/2 Differentiability/2.1 Derivative.md',
    brief: 'Gives a more full sense of the local behaviour of a function',
    head: 'Concept'
  },
  {
    title: '2.2 Differentiability => Continuity',
    link: 'Analysis 2B/2 Differentiability/2.2 Differentiability => Continuity.md',
    brief: 'All differentiable functions are continuous ',
    head: 'Theorem'
  },
  {
    title: '2.3 Relation between the Jacobian and Derivative',
    link: 'Analysis 2B/2 Differentiability/2.3 Relation between the Jacobian and Derivative.md',
    brief: 'Jacobian as the matrix form of the Derivative',
    head: 'Note'
  },
  {
    title: '2.4 Continuity of Partial Derivatives in a Open Region => Differentiability within Region',
    link: 'Analysis 2B/2 Differentiability/2.4 Continuity of Partial Derivatives in a Open Region => Differentiability within Region.md',
    brief: 'Relationship between continuous partial derivatives and differentiability',
    head: 'Theorem'
  },
  {
    title: '2.5 Chain Rule for Real Functions',
    link: 'Analysis 2B/2 Differentiability/2.5 Chain Rule for Real Functions.md',
    brief: 'Proof of chain rule for real multidimensional functions',
    head: 'Concept'
  }
]
```
