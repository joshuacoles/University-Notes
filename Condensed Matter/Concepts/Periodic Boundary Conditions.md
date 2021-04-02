# [[Periodic Boundary Conditions]]

> ### cf.
> - [[051. Lec 18, Electrons in solids, The Sommerfeld model]]

[[Periodic Boundary Conditions]] is an extension of the normal [[Square Well]] boundary conditions imposed upon a [[Wave Function]][^1]. In this model we impose the stronger condition that,

$$
\psi(\r + \vec{R}) = \psi(\r) ~~\forall \vec{R} \in L
$$

where $L$ determines the periodicity of the solution. Normally $L$ will be given by the **integer span** of a set of [[Primitive Lattice Vectors]]. If $L$ is a continuous set, then $\psi$ must be constant along it's span.

[^1]: See the diagram below, given mathematically as,
	$$ \begin{gather}
	\psi : [0, L] \to \C \\\\
	\psi(0) = 0 \\
	\psi(L) = 0
	\end{gather} $$
	![[Pasted image 20210330143106.png]]

## Application to Potential Free Systems (aka [[Plane Wave|Plane Waves]])

If we restrict ourselves to systems with a zero potential, given by the [[Time Independent Schrödinger Equation]]:

$$
\frac{\hbar^2}{2m} \nab^2 \psi = E\psi
$$

we obtain [[Wave Function]]

