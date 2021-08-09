# Polarisers

**Polarisers** are optical devices used to manipulate and analyse polarisation states of light. For example a sheet of Polaroid, which only allows light of certain polarisations to pass through.

![[Pasted image 20210304163637.png]]

Somewhat unintuitively it is the red wave which is **not aligned** with the polymer strands which is allowed to continue onwards, as the energy of the waves parallel to the strand is sapped by the electrons in the strand which find it easier move along them than across them.

This is known as the _transmission axis_, and only the component of $\vE_0$ which is parallel to the this axis is allowed to continue onwards. Ignoring the god awful isometry of the diagram below, this highlights the key point,

![[Pasted image 20210304164511.png]]

Here we need focus on the component of the [[Polarisation Vector]] of the red wave $\vE_0$ in the direction of $\uvec{e}_\parallel$, which is given as,

$$
\vE_1 = (\vE_0 \dp \uvec{e}_\parallel)\uvec{e}_\parallel,
$$

where the intensity transmitted is,

$$
I = \langle\vec{N}\rangle = \frac 12 c \epsi_0 \|\vE_1\|^2,
$$

which in relation to the incident intensity and the angle of the polariser is given as,

$$
\begin{align*}
I
&= \frac 12 c \epsi_0 \|\vE_1\|^2 \\
&= \frac 12 c \epsi_0 |\vE_0 \dp \uvec{e}_\parallel|^2 \\
&= \frac 12 c \epsi_0 \|\vE_0\|^2 \cos^2(\theta),
\end{align*}
$$

this is known as [[Malus' Law]] and is a display of one of the fundamental differences between wave and particle mechanics, see further [[Bells' Inequality]].

For light with [[Circular Polarisation]], since the angle between $\vE_0$ and $\uvec{e}_\parallel$ is constantly changing, in a linear fashion, when we take the time average as is required for the intensity calculations, we will end up simply with $I_1 = I_0 \langle\cos\theta^2\rangle = \frac 12 I_0$, invariable of the angle of the the polariser.

Finally, for [[Natural Light]] which is unpolarised and changing randomly (and assume uniformly), the behaviour is the same (prove pls #todo $E[cos^2(Dist)] = ???$).

> #todo: lookup https://en.wikipedia.org/wiki/Birefringence from notes.
