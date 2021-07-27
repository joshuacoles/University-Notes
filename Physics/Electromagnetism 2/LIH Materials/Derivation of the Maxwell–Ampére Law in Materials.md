# Derivation of the Maxwell–Ampére Law in Materials

While the first 3 of [[Maxwells Equations in Materials]] can be derived relatively easily, the 4th, the [[Maxwell–Ampére Law]] law is more complicated. In its vacuum form is given as,

$$ \curl \vB = \mu_0 \vJ + \epsi_0 \mu_0 \partial_t \vE. $$

## Naive Approach

Starting naively we consider the conservation of charge expressed in the [[Continuity Equation for Electric Charge]],

$$ \divrg \vJ = -\frac{\p\rho}{\p t}. $$

Focusing first on the LHS we split this into free and bound currents ($\vJ = \vJ_f + \vJ_b$),

$$ \divrg \vJ = \divrg \vJ_f + \divrg \vJ_b $$

but we know $\vJ = \curl \vM$ and hence by the [[Divergence of a Cross Product]] identity we have,

$$
\begin{align}
\divrg \vJ 
&= \divrg \vJ_f + \divrg \vJ_b \\
&= \divrg \vJ_f + \divrg (\curl \vM) \\
&= \divrg \vJ_f + 0 \\
&= \divrg \vJ_f.
\end{align}
$$

This can then be combined with the [[Continuity Equation for Free Electric Charge,]]

$$ \divrg \vJ_f = - \frac{\p \rho_f}{\p t} $$

gives us,

$$
\divrg \vJ = \divrg \vJ_f = - \frac{\p \rho_f}{\p t} = -\frac{\p \rho}{\p t}.
$$

However if we instead focus on the RHS, we split again into free and bound charges ($\rho = \rho_f + \rho_p$),

$$
\frac{\p\rho}{\p t} =
\frac{\p\rho_f}{\p t}
+\frac{\p\rho_b}{\p t}
$$

we obtain the result,

$$
\frac{\p\rho}{\p t} = \frac{\p \rho_f}{\p t} 
\quad\land\quad
\frac{\p\rho}{\p t} =
\frac{\p\rho_f}{\p t}
+\frac{\p\rho_b}{\p t}
$$

and hence

$$ \frac{\p\rho_b}{\p t} = 0. $$

This however is clearly nonsense as as we know, $\divrg \vP = -\rho_b$ and hence this would imply,

$$
\frac{\p\rho_b}{\p t} = \divrg \frac{\p\vP}{\p t} = 0
$$

which for a time dependent Electric Field is impossible as $\vP = \alpha \vE$ in an [[LIH Materials|LIH Material]].

## Polarisation Current

To fulfill the continuity equation, we define new Current Density to express how the [[Polarisation Density]] changes in time,

$$ \vJ_p = \frac{\p \vP}{\p t} $$

such that,

$$ \vJ = \vJ_f + \vJ_b + \vJ_p. $$

As a result we can take the [[Maxwell–Ampére Law]]

$$
\curl \vB = \mu_0 \vJ + \mu_0\epsi_0\frac{\p \vE}{\p t}
$$

combined with our new current abstractions,

$$
\begin{align}
\curl \vB
&= \mu_0 (\vJ_f + \vJ_b + \vJ_p) + \mu_0\epsi_0\dfrac{\p \vE}{\p t} \\
&= \mu_0 \(\vJ_f + \curl \vM + \frac{\p \vP}{\p t}\) + \mu_0\epsi_0\frac{\p \vE}{\p t} \\
\end{align}
$$

which collecting terms and substituting in our auxiliary fields gives us,

$$
\begin{align}
\curl \(\vB - \mu_0 \vM\) &=
\mu_0\vJ_f + 
\mu_0\frac{\p}{\p t} \(\vP + \epsi_0 \vE\) \\

\curl \(\frac1{\mu_0} \vB - \vM\) &=
\vJ_f + 
\frac{\p}{\p t} \(\vP + \epsi_0 \vE\) \\\\

\curl \vH &=
\vJ_f + 
\frac{\p}{\p t} \vD 
\end{align}
$$

as a version of the [[Maxwell–Ampére Law]] applicable in materials.