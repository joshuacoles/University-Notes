# Impedance in a Conductor

As seen in [[EM Waves in Idealised LIH Insulator#Impedance]] we can compute the [[Impedance]] as,

$$
Z = \frac{\omega \mu}{k}.
$$

If we apply our modified solution to this problem, using the [[EM Waves in LIH Conductor#^complex-wave-vector|equation for the complex wave vector]] as seen previously,

$$
Z = \frac{\omega \mu}{-i\gamma}
$$

which applying our value for $\gamma^2$ from above,

$$
\begin{align}
Z
&= \frac{\omega \mu}{
	-i\sqrt{\mu\omega(-\epsi\omega - i\sigma)}
} \\
&= \sqrt\frac{\omega^2 \mu^2}{
	\mu\omega(\epsi\omega + i\sigma)
} \tag{Take out negative}\\
&= \sqrt\frac{\omega^2 \mu^2}{
	\mu\omega^2\epsi(1 + i\frac{\sigma}{\omega\epsi})
} \\
&= \sqrt\frac{\mu}{\epsi(1 + i\frac{\sigma}{\omega\epsi})} \\
\end{align}
$$

where our [[Impedance|Intrinsic Impedance]] is in general a complex **quantity**.

## Dielectric / Poor Conductor

We can see that the expected real value is restored (cf [[EM Waves in Idealised LIH Insulator#Impedance]]) if $\frac{\sigma}{\omega\epsi} \ll 1$, ie in a poor conductor / dielectric giving us,

$$
Z = \frac{\mu}{\epsi}
$$

Here we see again that this ratio $\frac{\sigma}{\omega\epsi}$ quantifies how good a conductor the material is at a given frequency $\omega$.