# Empirical Derivation of Gauss's Law for the Magnetic Field

To determine the divergence of the [[Magnetic Field]] we will first present an argument of intuition, then mathematics.

## Intuition from Special Relativity and the Biot-Savart Law

Starting informally we should consider the following,

- By the argument presented in [[Electric & Magnetic Fields and Special Relativity]] we can see $\vB$ has no direct point source as it only arises from moving charges (???).
- The [[Biot-Savart Law]], the field lines are perpendicular to $\uve_r$ due to the cross-product, and thus they cannot come directly from the current element.
  - Which means intuitively they cannot have sources as there is no other privileged location in the thought experiment.

Thus our intuition as discussed above is that

$$
\divrg \vB = 0
$$

(so no [[Magnetic Charges]]). This is true!! This the [[Gauss's law for Magnetism]].

## Proving this for a general current distribution

To prove this we will use the [[Current Density]] (definition in page) which is a vector representation of the current. This leads us to want to re-establish the [[Biot-Savart Law]] from above in terms of $\vJ$. Displayed below,

![[Clipboard 3 Feb 2021 at 14.14.png]]

This gives us,

$$
\d\vB(\vr) = \frac{\mu_0}{4\pi} \frac{\vJ \cp \uve_r}{r^2} \d V.
$$

To see this we take,

- $I = \nrm\vJ \d S$.
- By [[#^9ac418]], $I\d\r = \vJ\d S\d\r = J\d V.$

Now for a general Current Distribution,

![[Clipboard 3 Feb 2021 at 14.49.png]]

Consider $\d\vB(\r)$,

$$
\d\vB(\r) = \frac{\mu_0}{4\pi} \frac{\vJ(\r') \times \uvR}{R^2} \d V'.
$$

Using the [[Principle of Superposition]] we can get,

$$
\vB(\r) = \frac{\mu_0}{4\pi}\int_{V'} \frac{\vJ(\r') \times \uvec{R}}{R^2} \d V'.
$$

And finding the **divergence** (note that we are differentiating with respect to $\r$ **not** $\r'$, should we change names cuz...?). Consider,

$$
\divrg \vB(\vr) = \nab_{\vr} \dp \(\frac{\mu_0}{4\pi}\int_{V'} \frac{\vJ(\vr') \cp \uvR}{R^2} \d V'\),
$$

we can move the $\nabla_{\vr} \dp$ into the integral as it is independent of the integration variable, so,

$$
\divrg \vB(\vr) =
\frac{\mu_0}{4\pi}
\int_{V'} \nabla_{\vr} \dp \(
	\frac{\vJ(\vr') \cp \uvR}{R^2}
\) \d V'.
$$

Applying [[Divergence of a Cross Product]] and thus focusing only on the relevant form,

$$
\begin{align}
\nab_\r \dp \(\frac{\vJ(\vr') \cp \uvR}{R^2}\)
&= \frac{\uvR}{R^2}\(
	\nab_\r \cp \vJ(\r')
\) - \vJ(\r')\(
	\nab_\r \cp \frac{\uvR}{R^2}
\) \\
&=0
\end{align}
$$

True by considering the terms,

1. The first is $0$ as $\vJ(\r')$ has no dependence on $\r$.
2. The second is $0$ as $\dfrac{\uvec{R}}{R^2} = -\nab\(\dfrac{1}{R}\)$ and it's curl is zero by [[Vanishing Curl of Gradient Field]].

Hence $\divrg \vB = 0$. Thus we have derived [[Gauss's law for magnetism]] from [[Biot-Savart Law]].
