> - [Panotpto](https://uniofbath.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=c8f6e54b-b9d7-4a90-a625-acdd0172ae64)
> - #lecture #narrative
> - Navigation
> 	- [[Lec 14, Radiation pressure|Previous]]

Previously we discussed that EM [[Plane Waves]] are [[Transverse Wave]] (see [[Lec 10, Properties of Plane Waves#What is the Polarisation Vector]]), expressed mathematically as,

$$
\E = \uvi\, E_0 \exp(i(k_z z - \omega t)).
$$

However this is only a specific case of [[Electromagnetic Waves]], in general all we determined is that $\vec{k}\perp\E$ (and $\vec{k}\perp\B$). (see [[Lec 11, Impedance of Free Space#Note on Polarisation]], noting plane waves are an example of [[Linear Polarisation]].

Moving to the more general case we can consider waves where the [[Polarisation Vector]] $\E_0$ has a time dependence, expressed as, 

$$
\E(z, t) = \E_0(t) \exp(i(k_z z - \omega t)).
$$

We say that the *polarisation state* is the behaviour of $\E$ in the transverse plane, and is determined by $\E_0$ and is not fixed by [[Maxwell's Equations]].

For an example of this we can apply the [[Principle of Superposition]], considering the superposition of two [[Plane Wave|Plane Waves]] $\E_x$ and $\E_y$ oscillating in the same transverse plane, one with a *phase lag* $\beta \in [0, 2\pi)$,

$$
\begin{align*}
\E_x(z, t) &= \uvi\, E_{0x} \exp(i(k_z z - \omega t))
\\
\E_y(z, t) &= \uvj\, E_{0y} \exp(i(k_z z - \omega t + \beta)) 
\\\\

\E(z, t) &= \E_x(z, t) + \E_y(z, t).
\end{align*}
$$

The system now being parameterised by the constants $E_{0x}$, $E_{0y}$, $\beta$, $k$ & $\omega$. Where the first three constants describe the *polarisation state*. 

> **Programming Note**: Can we get a playground of this?

This can express different types of polarisation, shown below,

## [[Plane Polarisation]]
When $\beta = 0$. In [[Plane Polarisation]] $\E_0$ is constant over time and is given by,

$$
\E_0 = \uvi E_{0x} + \uvj E_{0y}.
$$

This is known as [[Plane Polarisation]] as the wave oscillates in the plane defined by $\E_0$ & $\vec{k}$.

![[Clipboard 3 Mar 2021 at 11.33.png]]

This is also the case if $\beta = \pi$, just $\E_0 = \uvi E_{0x} - \uvj E_{0y}$.

## [[Circular Polarisation]]
In the case that $\beta = \pm \frac\pi 2$ and $E_{0y} = E_{0x}$ labeled $E_0$, we have [[Circular Polarisation]] given as,

$$
\begin{align*}
\E_x(z, t) &= \uvi\, E_{0x} \cos(k_z z - \omega t)
\\
\E_y(z, t) &= \uvj\, E_{0y} \cos(k_z z - \omega t \pm \frac\pi2)
\\ &= \pm \uvj\, E_{0y} \sin(k_z z - \omega t)
\end{align*}
$$

This quite obviously gives us a wave with circular behaviour, where,

- $\|\E\| = E_{0x}^2 + E_{0y}^2$
- $\E$ traces a circle either clockwise or anticlockwise dependent on the sign of $\beta$.
- It will have a temporal frequency of $\omega$.

There is a convention to say that anticlockwise is left circular polarisation, and clockwise is right circular. Ahhhh :(

## [[Elliptical Polarisation]]

The more general case will lead to the tip of your $\E$ vector to trace out an ellipse in the transverse plane. (Can we quantify this with conic sections notes #todo)?

---

## [[Poincaré Sphere]]

It is possible to define an angle, $\theta = 2\tan\frac{E_{0y}}{E_{0x}}$, in addition to the angle $\beta$ seen above.  Then it is possible to address all polarisations on the surface of a sphere, known as the [[Poincaré Sphere]].

https://en.wikipedia.org/wiki/Polarization_(waves)#Poincaré_sphere

> This is heavily related to the [[Bloch Sphere]] used to describe the states of a [[Qubit]].

---

## [[Natural Light]]

Natural Light is known as *"unpolarised"*. This is not that a polarisation does not exist, just that due to the large volume of random uncorrelated events involved in its creation, the lights [[Polarisation]] changes randomly from instant to instant. Thus the average of the polarisation is zero.

---

## [[Polarisers]]

Polarisers are optical devices used to manipulate and analyse polarisation states of light. For example a sheet of Polaroid, which only allows light of certain polarisations to pass through.

![[Pasted image 20210304163637.png]]

Somewhat unintuitively it is the red wave which is **not aligned** with the polymer strands which is allowed to continue onwards, as the energy of the waves parallel to the strand is sapped by the electrons in the strand which find it easier move along them than across them.

This is known as the *transmission axis*, and only the component of $\E_0$ which is parallel to the this axis is allowed to continue onwards. Ignoring the god awful isometry of the diagram below, this highlights the key point,

![[Pasted image 20210304164511.png]]

Here we need focus on the component of the [[Polarisation Vector]] of the red wave $\E_0$ in the direction of $\uvec{e}_\parallel$, which is given as,

$$
\E_1 = (\E_0 \dp \uvec{e}_\parallel)\uvec{e}_\parallel,
$$

where the intensity transmitted is,

$$
I = \langle\vec{N}\rangle = \frac 12 c \epsi_0 \|\E_1\|^2,
$$

which in relation to the incident intensity and the angle of the polariser is given as,

$$
\begin{align*}
I 
&= \frac 12 c \epsi_0 \|\E_1\|^2 \\
&= \frac 12 c \epsi_0 |\E_0 \dp \uvec{e}_\parallel|^2 \\
&= \frac 12 c \epsi_0 \|\E_0\|^2 \cos^2(\theta),
\end{align*}
$$

this is known as [[Malus' Law]] and is a display of one of the fundamental differences between wave and particle mechanics, see further [[Bells' Inequality]].

For light with [[Circular Polarisation]], since the angle between $\E_0$ and $\uvec{e}_\parallel$ is constantly changing, in a linear fashion, when we take the time average as is required for the intensity calculations, we will end up simply with $I_1 = I_0 \langle\cos\theta^2\rangle = \frac 12 I_0$, invariable of the angle of the the polariser.

Finally, for [[Natural Light]] which is unpolarised and changing randomly (and assume uniformly), the behaviour is the same (prove pls #todo $E[cos^2(Dist)] = ???$).
