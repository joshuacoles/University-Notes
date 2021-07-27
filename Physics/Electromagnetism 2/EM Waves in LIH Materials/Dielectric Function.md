# Dielectric Function

If we look further at [[Maxwell–Ampére Law in Materials]] in a conductor, with this trial solution we obtain

$$
\begin{align}
\curl \vH
&= \vJ_f + \p_t \vD \\
&= \sigma\vE + \epsi \p_t \vE
\end{align}
$$

where $\vJ_f$ is the **Ohmic Current** and $\p_t\vD$ is the **Displacement Current**. Observing that for the ansatz given in [[EM Waves in LIH Conductor]],

$$ \p_t \vE = -i\omega\vE \implies \vE = \frac{1}{-i\omega}\p_t \vE $$

gives us,

$$
\begin{align}
\curl \vH 
&= \sigma\frac{1}{-i\omega}\p_t \vE + \epsi \p_t \vE \\
&= \epsi_0\epsi_r\(
	1 + i\frac{\sigma}{\omega\epsi}
\) \p_t \vE. \\
\end{align}
$$

This forms a dielectric function,

$$
\epsi(\omega) = \epsi_r(\omega) + i\frac{\sigma(\omega)}{\epsi_0\omega} = \epsi' + i\epsi''
$$

which is the object connecting time-varying external electric field to the magnetic field intensity created in response.

In particular, it captures both the 'insulating aspect', expressed by the dielectric “constant” $\epsi_r$, and the conduction of a material, through the appearance of Conductivity $\sigma$ in the dimensionless ratio $\frac{\sigma}{\epsi\omega}$.

![[Dielectric_responses.svg]]

where each peak is a resonance of a different object in material.

We will however approximate this greatly with $\epsi'$ being constant and $\epsi''$ being determined by a constant Conductivity.