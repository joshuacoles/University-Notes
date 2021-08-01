# Electrostatic Potential

The **Electrostatic Potential** is a function,

$$ \phi : \R^3 \to \R $$

which solely determines the potential in the case of [[Electrostatics]] and in combination with the [[Magnetic Potential]] in general case. In the Electrostatic case we have the [[Electric Field]] being given by,

$$ \vE_s = \nab \phi $$

and the [[Charge Desnity]],

$$ \frac{\rho}{\epsi_0} = - \nab^2 \phi $$

which we can see is a [[Poisson Equation]], simplifying to [[Laplace's Equation]] in empty space ($\rho \equiv 0$).

## Solutions to [[Poisson Equation]]

Consider a [[Point Charges]] at the origin, with $\vE$ given by,

$$
\vE_s(\r) = \frac 1{4\pi \epsi_0} \frac{Q}{r^2} \uvec{e}_r
$$

```ad-note
#programming-note Explain $E_s$ and why we use it (decomposition into curl free and other thing right?)
```

By inspection we can obtain,

$$
-\nabla\(\frac 1r\) = - \uvec{e}_r \partial_r \(\frac 1r\) = - \uvec{e}_r \frac 1{r^2}
$$

And thus by computing $\phi$ from [[Lec 5, Electostatics#^de4124]] we get,

$$
\phi(\r) = \frac{Q}{4\pi\epsi_0 r}
$$

### Generalising to [[Charge Distributions]]

Using the [[14.8  Principle of superposition|Principle of superposition]] we get,

$$
\phi(\r) = \frac 1{4\pi\epsi_0} \int_V \frac{\rho(\vec{s})}{\|\r - \vec{s}\|} \,\d V.
$$
