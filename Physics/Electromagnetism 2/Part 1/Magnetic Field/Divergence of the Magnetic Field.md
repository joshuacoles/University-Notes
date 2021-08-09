# Divergence of the Magnetic Field

Starting informally we should consider the following,

- Relativity argument from [[Lec 6, Introduction to Magentics, Lorentz Force]]
  - $\vB$ has no direct point source as it only arises from moving charges (???).
- The [[Biot-Savart Law]], the field lines are perpendicular to $\uvec{e}_r$ due to the cross-product, and thus they cannot come directly from the current element.
  - Which means intuitively they cannot have sources as there is no other privileged location in the thought experiment.

Thus our intuition as discussed above is that $\nabla \cdot \vB = 0$ (so no [[Magnetic Charges]]). This is true!! This the [[Gauss's law for magnetism]].

### Proving this for a general current distribution

To do this we will introduce the vector [[Current Density]], $\vJ(\r)$. Defined in terms,

- The **direction** of $\vJ(\r)$ is the direction of the current at $\r$. ^9ac418
- The **magnitude** of $\vJ(\r)$ is the current crossing the unit area perpendicular to $\vJ(\r)$.

Implies,

$$
I = \int_S \vJ \cdot \d \vec{S}
$$

Thus establishing the [[Current]] as the [[Vector Flux]] of the [[Current Density]].

This leads us to want to re-establish the [[Biot-Savart Law]] from above in terms of $\vJ$. Displayed below,

![[Clipboard 3 Feb 2021 at 14.14.png]]

This gives us,

$$
\d\vB(\r) = \frac{\mu_0}{4\pi} \frac{\vJ \times \uvec{e}_r}{r^2} \d V.
$$

To see this we take,

- $I = \|\vJ\|\d S$.
- By [[#^9ac418]], $I\d\r = \vJ\d S\d\r = J\d V.$

Now for a general [[Current Distribution]],

![[Clipboard 3 Feb 2021 at 14.49.png]]

Considers $\d\vB(\r)$,

$$
\d\vB(\r) = \frac{\mu_0}{4\pi} \frac{\vJ(\r') \times \uvR}{R^2} \d V'.
$$

Using the [[Principle of Superposition]] we can get,

$$
\vB(\r) = \frac{\mu_0}{4\pi}\int_{V'} \frac{\vJ(\r') \times \uvec{R}}{R^2} \d V'.
$$

And finding the **divergence** (note that we are differentiating with respect to $\r$ **not** $\r'$, should we change names cuz...?). Consider,

$$
\divrg \vB(\r) = \divrg \(\frac{\mu_0}{4\pi}\int_{V'} \frac{\vJ(\r') \times \uvec{R}}{R^2} \d V'\),
$$

we can move the $\nabla \cdot$ into the integral **CUZ MATHS #fixme**, so,

$$
\divrg \vB(\r) =
\frac{\mu_0}{4\pi}
\int_{V'} \nabla_{\r} \cdot \( \frac{\vJ(\r') \times \uvec{R}}{R^2} \) \d V',
$$

> **Programming Note**: when doing vector calc move into own note.
>
> $$
> \divrg (A \cp B) = B \dp (\curl A) - A \dp (\curl B)
> $$

And thus focusing only on the relevant form,

$$
\begin{align*}
\nabla_{\r} \cdot \( \frac{\vJ(\r') \times \uvec{R}}{R^2} \) &=
\frac{\uvec{R}}{R^2}\(\nabla_{\r} \cp \vJ(\r')\) -
\vJ(\r')\(\nabla_{\r} \cp \frac{\uvec{R}}{R^2}\)
\\&=0
\end{align*}
$$

True by considering the terms,

1. The first is $0$ as $\vJ(\r')$ has no dependence on $\r$.
2. The second is $0$ as $\dfrac{\uvec{R}}{R^2} = -\nab\(\dfrac{1}{R}\)$ and it's curl is zero by [[Vanishing Curl of Gradient Field]].

Hence $\divrg \vB = 0$. Thus we have derived [[Gauss's law for magnetism]] from [[Biot-Savart Law]].
