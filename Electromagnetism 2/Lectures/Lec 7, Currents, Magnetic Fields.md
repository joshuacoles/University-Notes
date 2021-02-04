> - [Panotpto](https://uniofbath.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=b3892d71-a23c-45b3-b393-acb700ba728a)
> - #lecture
> - Navigation
> 	- [[Lec 6, Introduction to Magentics, Lorentz Force|Previous]]
> 	- [[Lec 8, Time varying Charges and Currents|Next]]

In [[Lec 6, Introduction to Magentics, Lorentz Force]] we focused on moving charges, instead now we now want to focus on **Currents**. Considering a small component $\d r$ of a wire, with moving charges $Q_1$, as shown below,

![[Clipboard 3 Feb 2021 at 13.49.png]]

We have a [[Magnetic Field]] given as

$$
\B(\r) = \frac{\mu_0}{4\pi} \frac{Q_1}{r^2} (\vec{v}_1 \times \uvec{e}_r).
$$

We can clearly see that $Q_1\vec{v}_1 = I\d{\r}$ (note $\vec{v}_1 \parallel \d \r$), and thus we can say the contribution $\d \B$ of this small wire component is,

$$
\d\B(\r) = \frac{\mu_0}{4\pi} I \frac{\d\r \times \uvec{e}_r}{r^2}.
$$

This is known as the [[Biot-Savart Law]] and is one of the Empirical Laws we started with in [[Lec 2, Maxwells Eqs Intro#^1ce810]].

> **Programming Note**: Replace $\d\r$ with $\d\vec{l}$ to make $\d\r$ clearly different from $\uvec{e}_r$ which is...?

- This confirms that $\B$ from our thought experiment is in fact the [[Magnetic Field]].
- This is only valid for constant $\vec{v}_1$ (and thus constant $I$).

---

## Divergence of $\B$
Starting informally we should consider the following,
- Relativity argument from [[Lec 6, Introduction to Magentics, Lorentz Force]]
	- $\B$ has no direct point source as it only arises from moving charges (???).
- The [[Biot-Savart Law]], the field lines are perpendicular to $\uvec{e}_r$ due to the cross-product, and thus they cannot come directly from the current element.
	- Which means intuitively they cannot have sources as there is no other privileged location in the thought experiment.

Thus our intuition as discussed above is that $\nabla \cdot \B = 0$ (so no [[Magnetic Charges]]). This is true!! This the [[Gauss's law for magnetism]].

### Proving this for a general current distribution

To do this we will introduce the vector [[Current Density]], $\J(\r)$. Defined in terms,

- The **direction** of $\J(\r)$ is the direction of the current at $\r$. ^9ac418
- The magnitude of $\J(\r)$ is the current crossing the unit area perpendicular to $\J(\r)$.

Implies,

$$
I = \int_S \J \cdot \d \vec{S}
$$

Thus establishing the [[Current]] as the [[Vector Flux]] of the [[Current Density]].

This leads us to want to re-establish the [[Biot-Savart Law]] from above in terms of $\J$. Displayed below,

![[Clipboard 3 Feb 2021 at 14.14.png]]

This gives us,

$$
\d\B(\r) = \frac{\mu_0}{4\pi} \frac{\J \times \uvec{e}_r}{r^2} \d V.
$$

To see this we take,
-  $I = \|\J\|\d S$.
-  By [[#^9ac418]], $I\d\r = \J\d S\d\r = J\d V.$

Now for a general [[Current Distribution]],

![[Clipboard 3 Feb 2021 at 14.49.png]]

Considers $\d\B(\r)$,

$$
\d\B(\r) = \frac{\mu_0}{4\pi} \frac{\J(\r') \times \uvec{R}}{R^2} \d V'.
$$

Using the [[Principle of Superposition]] we can get,

$$
\B(\r) = \frac{\mu_0}{4\pi}\int_{V'} \frac{\J(\r') \times \uvec{R}}{R^2} \d V'.
$$

And finding the **divergence** (note that we are differentiating with respect to $\r$ **not** $\r'$, should we change names cuz...?). Consider,

$$
\divrg \B(\r) = \divrg \(\frac{\mu_0}{4\pi}\int_{V'} \frac{\J(\r') \times \uvec{R}}{R^2} \d V'\),
$$

we can move the $\nabla \cdot$ into the integral **CUZ MATHS #fixme**, so,

$$
\divrg \B(\r) =
\frac{\mu_0}{4\pi}
\int_{V'} \nabla_{\r} \cdot \( \frac{\J(\r') \times \uvec{R}}{R^2} \) \d V',
$$

> **Programming Note**: when doing vector calc move into own note.
> $$
> \divrg (A \cp B) = B \dp (\curl A) - A \dp (\curl B)
> $$

And thus focusing only on the relevant form,


$$
\begin{align*}
\nabla_{\r} \cdot \( \frac{\J(\r') \times \uvec{R}}{R^2} \) &=
\frac{\uvec{R}}{R^2}\(\nabla_{\r} \cp \J(\r')\) -
\J(\r')\(\nabla_{\r} \cp \frac{\uvec{R}}{R^2}\)
\\&=0
\end{align*}
$$


True by considering the terms,
1. The first is $0$ as $\J(\r')$ has no dependence on $\r$.
2. The second is $0$ as $\dfrac{\uvec{R}}{R^2} = -\nab\(\dfrac{1}{R}\)$ and it's curl is zero by [[Vanishing Curl of Gradient Field]].

Hence $\divrg \B = 0$. Thus we have derived [[Gauss's law for magnetism]] from [[Biot-Savart Law]].

## The curl of $\B$ (in constant current situations)
Starting the form the empirical [[Ampere's Law]], 

$$
\int_{\partial S} \B \cdot \d\r = \mu_0 I
$$

where $I$ is the total DC current passing through the surface $S$. Expressed in terms of the [[Current Density]] as,

$$
\int_{\partial S} \B \cdot \d\r = \mu_0 \int_S \J \cdot \d \vec{S}
$$

Which by [[Stokes' Theorem]] is equivalent to,

$$
\int_{\partial S} \B \cdot \d\r = \int_{S} \curl \B \dp \d\r = \mu_0 \int_S \J \cdot \d \vec{S},
$$

and since the surface $S$ is arbitrary it must be,

$$
\curl \B = \mu_0 \J.
$$

This implies current is a **[[Rotational Source]]** of [[Magnetic Field]]. This is not *quite* a [[Maxwell's Equations|Maxwell Equations]] as it is only valid for constant [[Current Density]].