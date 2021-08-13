# Special Relativity

Special Relativity is a theory about: 

- Inertial Reference Frames;
- the transformation between them;
- how quantities in one reference frame relate to quantities in another

## Inertial Reference Frames

We define Inertial Reference Frames (IRFs) be a non-accelerating reference frame, sufficiently far from all gravitational influence. A Reference Frame itself is defined by some [[Coordinate System]], normally comprised of a chosen point of origin and three basis vectors.

```ad-note
Note we do not require much lest the existance of the Coordinate System in a manner we can determine their offset by the distance of their origins. We will generally only speak of IFRs with [[Cartesian Coordinates]] or occasionally [[Spherical Coordinates]] but other systems are equally valid.
```

We denote IRFs with a capital greek letter such as $\Sigma$, $\Gamma$, $\Lambda$, etc.

## Relation Between

We relate the IRFs $\Lambda$ and $\Gamma$ by two quantities,

- Some offset $\vx(\Lambda, \Gamma)$ by which their origins are translated.
```ad-question
Is $\vx$ a 4-vector or 3-vector here?
```
- Some quantity $\beta(\Lambda, \Gamma) \in \R$ which represents the relative motion of these reference frames.
```ad-question
In the general case does this have to be $\R^3$
```

## Transformation Between Reference Frames

The transformation between coordinate systems is comprised of a translation followed by a Lorentz Boost which is similar to a "rotation in time". Assuming wlog we are moving in one direction using block notation we have,

$$
B = \begin{bmatrix}
\gamma & -\beta \gamma \\
-\beta \gamma & \gamma
\end{bmatrix}
$$

$$
L = \begin{bmatrix}
B & 0 \\
0 & I
\end{bmatrix}
$$


## Bridge Rules

Given $\Sigma$, $\Gamma$ and $\Lambda$, if we have,

- $\Sigma \to \Gamma$
	- $\vx(\Sigma, \Gamma)$
	- $\beta(\Sigma, \Gamma)$
- $\Gamma \to \Lambda$
	- $\vx(\Gamma, \Lambda)$
	- $\beta(\Gamma, \Lambda)$

Define
- E
	- $\vx(\Sigma, \Lambda)$
	- $\beta(\Sigma, \Lambda)$
