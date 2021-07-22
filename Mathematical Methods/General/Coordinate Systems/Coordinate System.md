# Coordinate System

A Coordinate System in an $n$ dimensional Real [[Vector Space]] $V$ is a function:

$$
C : S \to V
$$

where $S \sub \R^3$ such that $C$ is [[Surjective]]. 

```ad-info
Here we only require this function is **Surjective**, allowing the possibility of it being 1–many.

If we would like it to be less, we should restrict $V$ to be some subset $V' \sub V$ such that $C$ is Surjective.

We do not require Injectivity (and hence Bijectivity) presently as 
```

---

as with all coordinate problems you can only really "define"

Examples include.

- Any set of [[Basis]] vectors $\lst\ve 1n$ 
$$ C(\lst x1n) = \sum x_i\ve_i $$
- Polar Coordinates
$$ C(r, \theta) = r $$

```ad-note
Is this true in a more general structure? 

What would we need:

- Addition
- Scaling by a field (for the coordinate vectors at a given point)
- 
```

## Relation to a [[Basis]]

A Coordinate System is a more general construct than a Basis as a basis requires $n$ vectors be constant across the whole space, whereas in a [[Coordinate System]] they can be a function of the coordinates themselves.

For instance the $\uvec x, \uvec y, \uvec z$ would form a [[Basis]] and hence a coordinate system (of Cartesian variety), however