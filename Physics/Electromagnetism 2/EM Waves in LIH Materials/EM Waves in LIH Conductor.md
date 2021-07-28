# EM Waves in LIH Conductor

As seen in the [[Governing Equation of EM Waves in an LIH Material]]: for a general conductor with [[Conductivity]] $\sigma \ne 0$, such that it obeys [[Ohm's Law]],

![[Ohm's Law#^vec]]
![[Ohm's Law#^sigma-note]]

we have a *"modified"* wave equation

$$
\nab^2 \vE =
\mu\sigma \frac{\p \vE}{\p t}
+ \mu\epsi\frac{\p^2 \vE}{\p t^2}.
$$

We do not have sufficient maths to deal with this PDE rigorously however in true physicist fashion we will just kinda... try.

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

```ad-note
We take all variables bar $\gamma$ to be $\R$ in this case.
```

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

### Determining Values for Wave Variables

Since we have,

$$
\begin{align}
\gamma^2 &= \mu\omega(-\epsi\omega - i\sigma) \\
a^2 - b^2 &= -\mu\epsi\omega^2.
\end{align}
$$

From the first we can determine,

$$
\begin{align}
\gamma^2
&= \mu\omega(-\epsi\omega - i\sigma) \\
&= -\mu\epsi\omega^2\(1 + i\frac{\sigma}{\epsi\omega}\) \\
\end{align}
$$

And hence,

$$
\begin{align}
b^2 + a^2 &= \mu\epsi\omega^2\left[1 + \sqrt{
	1 + \(\frac{\sigma}{\epsi\omega}\)^2	
}\right] \\
b^2 - a^2 &= \mu\epsi\omega^2.
\end{align}
$$

These give us,

$$
\begin{align}
\beta &= \omega\sqrt{\frac{\mu\epsi}{2}\(\sqrt{1 + \(\frac{\sigma}{\epsi\omega}\)^2} + 1\)} \\
\alpha &= \omega\sqrt{\frac{\mu\epsi}{2}\(\sqrt{1 + \(\frac{\sigma}{\epsi\omega}\)^2} - 1\)}
\end{align}
$$

noting the difference in sign of the final $\pm1$.


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
- [[Loss Tangent]]
