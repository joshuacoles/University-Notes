# Function Index Vector Spaces

A very general example of a [[Vector Space]] is the set of functions $\cI \to V = V^\cI$ (link notation #todo) where $V$ is a Vector Space (or Field by [[#^15cd03|example 1]]). These can be useful in checking if an object is a Vector Space.

Operations here are defined point-wise on $\cI$ as so. For $f, g \in V^\cI$ and $\lambda \in \F$,

$$
\begin{align}
(f + g)(i) &= f(i) + g(i) \\
(\lambda f)(i) &= \lambda f(i) \\
(0_{V^\cI})(i) &= 0_V \\
(-f)(i) &= -(f(i)) \\
\end{align}
$$

Using this construct we can in fact express many of the example seen before,

```yaml
headers:
  - original: Original Set
  - funcs: Function Set
  - assoc: Association
entries:
  - original: $\F^n$
    funcs: $\F^{J_n}$
	assoc: $(\lst x1n) \to (i \mapsto x_i)$
  - original: $M_{m \cp n}(\F)$
    funcs: $\F^{J_m \cp J_n}$
	assoc: $A \in M_{m \cp n}(\F) \to ((i, j) \mapsto A_{ij})$
  - original: [[Real Sequence]] $(a_n)_{n \in \N}$
    funcs: $\R^\N$
	assoc: $(a_n)_{n \in \N} \to (i \to a_i)$
```

| Original Set                         | Function Set       | Association                                         |
| ------------------------------------ | ------------------ | --------------------------------------------------- |
| $\F^n$                               | $\F^{J_n}$         | $(\lst x1n) \to (i \mapsto x_i)$                    |
| $M_{m \cp n}(\F)$                    | $\F^{J_m \cp J_n}$ | $A \in M_{m \cp n}(\F) \to ((i, j) \mapsto A_{ij})$ | 
| [[Real Sequence]] $(a_n)_{n \in \N}$ | $\R^\N$            | $(a_n)_{n \in \N} \to (i \to a_i)$                  |
