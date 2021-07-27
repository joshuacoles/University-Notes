# EM Waves in LIH Conductor

Here we extend on the work in [[EM Waves in Idealised LIH Insulator]] to account for cases where $\sigma \ne 0$ and the material obeys [[Ohm's Law]],

$$ V = IR $$

which can be written in terms of the vector fields as,

$$ \vJ = \sigma \vE $$

where $\sigma$ is the [[Conductivity]] of the material.

```ad-note
[[Conductivity]] is the inverse of [[Resistivity]] which has units $\ohm\mathrm{.m}$. This also explains the change from Potential $V$ to Force Field $\vE$. Sigma has units of $\unit{S.m^{-1} = \ohm^{-1} m^{-1}}$.

We have seen [[Conductivity]] $\sigma$ in the static limit or pseudo-static limit (very slow moving). Of interest here is the [[Optical Conductivity]] $\sigma(\omega)$ which is a generalisation of the static conductivity ($\sigma = \lim_{w \to \infty}\sigma(w)$).
```

Now obtaining an equation for EM waves in an Idealised Conductor (noting still we have $\rho_f = 0$[^1]), we now diverge from [[EM Waves in Idealised LIH Insulator]] (at [[EM Waves in Idealised LIH Insulator#^conductor-insulator-point|this point]]) as we no longer have $\vJ_f = 0$. 

[^1]: If $\rho_f \ne 0$ this would imply that $\vD \ne \vec0$ and thus $\vE \ne \vec0$ as per the [[Maxwells Equations in Materials#Constitutive Equations in LIH Materials]]. Thus there would be a force on these free charges which we know can move. Hence we assume that these charges are in a stable configuration where there is no force. [cf](https://physics.stackexchange.com/questions/22773/in-electrostatics-why-the-electric-field-inside-a-conductor-is-zero)

Instead we apply [[Ohm's Law]] to equation below,

$$
\nab^2 \vE =
\mu \p_t (\vJ_f + \p_t \vD)
$$

giving us,

$$
\nab^2 \vE =
\mu \p_t (\sigma \vE + \p_t \vD).
$$

From here we can now apply $\vD = \epsi\vE$ ([[Maxwells Equations in Materials#^15011a]]) giving us,

$$
\nab^2 \vE =
\mu\sigma \frac{\p \vE}{\p t}
+ \mu\epsi\frac{\p^2 \vE}{\p t^2}
$$

Here we see we **no longer have a [[Wave Equation]]**, we do not have sufficient maths to deal with this PDE rigorously however in true physicist fashion we will just kinda... try.

## Attempting a Solution

Instead of the standard space dependence $ik$ we will instead use an arbitrary complex constant $\gamma$ giving us,

$$ \vE = \vE_0 \exp({\gamma x - i\omega t}) $$

which when substituted results in,

$$
\gamma^2 \vE =
\mu\epsi (-i\omega)^2 \vE + 
\mu\sigma (-i\omega)  \vE
$$

Now splitting $\gamma = -a + bi$ we get,

```ad-note
We set the real part as $-a$ as opposed to $+a$ as we will find later this is a decay coefficent and thus we choose it to be positive in magnitude.
```

$$
\begin{align}
\gamma^2 
&= (a^2 - b^2) - (2ab) i \\
&= (-\mu\epsi\omega^2) - i(\mu\sigma\omega)\\
&= \mu\omega(-\epsi\omega - i\sigma)
\end{align}
$$

and hence

$$
\begin{align}
a^2 - b^2 &= -\mu\epsi\omega^2 
\\
-2ab &= -i\mu\sigma\omega.
\end{align}
$$

Taking the ratio of these quantities gives us,

$$
\frac{-2ab}{a^2 - b^2}
= \frac{-i\mu\sigma\omega}{-\mu\epsi\omega^2}
= \frac{\sigma}{\epsi\omega}.
$$

which can be seen to be a dimensionless property which is important in determining the conductivity of a material.

## (Complex) Wave Vector

If we explore our solution further we can see there are two parts,

$$
\begin{align}
\vE
&= \vE_0 \exp(\gamma x - i\omega t) \\
&= \vE_0 \expp{-\alpha x} \expp{i(\beta x - \omega t)} \\
\end{align}
$$

where,

- The $a$ / $\alpha$ term is an exponential decay with distance.
- The $b$ / $\beta$ term is the progressive portion seen in standard plane waves.

With the aim of a more standard Plane Wave form we can collect the $x$ dependence as so,

$$
\expp{-\alpha x} \expp{i\beta x}
=
\expp{(i\beta - \alpha) x}
=
\expp{i(\beta + i \alpha) x}
$$

identifying $k$ as

$$ k = \beta + i\alpha. $$
^complex-wave-vector

```ad-note
Note that the component which is complex and which is real has **swapped** by essentially incorporating a factor of $\frac 1i$.
```

## Applications of the Solution

Using this model (and the ratio above) we can determine important quantities such as the,

- [[Dielectric Function]]
- [[Impedance in a Conductor]]
- [[Refractive Index in Conductors]]

