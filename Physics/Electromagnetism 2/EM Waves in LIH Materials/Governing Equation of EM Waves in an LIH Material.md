# Governing Equation of EM Waves in an LIH Material

As in [[Lec 9, Waves in a Vacuum]] we start with [[Maxwell–Faraday equation]], given by,

$$ \curl \vE = -\p_t \vB. $$

Starting off taking the curl as before and applying the [[Curl of Curl Identity]] and applying [[3.2 Symmetry of the Hessian]] to re-order the differential,

$$
\begin{align}
\curl (\curl \vE) &=
\curl -\p_t \vB \\

\nab(\divrg \vE) - \nab^2 \vE &=
-\p_t (\curl \vB). \\
\end{align}
$$

Now as we are working in [[LIH Materials]] we can apply the relevant [[Maxwells Equations in Materials#Constitutive Equations|Constitutive Equations]] namely,

$$
\vD = \epsi \vE \qquad \vH = \frac 1\mu \vB
$$

to obtain,

$$
\frac 1\epsi \nab(\divrg \vD) - \nab^2 \vE =
-\mu \p_t (\curl \vH). \\
$$

By definition we know $\divrg \vD = \rho_f$ and further $\rho_f = 0$[^1] and hence,

[^1]: If $\rho_f \ne 0$ this would imply that $\vD \ne \vec0$ and thus $\vE \ne \vec0$ as per the [[Maxwells Equations in Materials#Constitutive Equations in LIH Materials]]. Thus there would be a force on these free charges which we know can move. Hence we assume that these charges are in a stable configuration where there is no force. [cf](https://physics.stackexchange.com/questions/22773/in-electrostatics-why-the-electric-field-inside-a-conductor-is-zero)

$$ \nab^2 \vE = \mu \p_t (\curl \vH). $$

Here we apply the [[Maxwell–Ampére Law in Materials]] giving us,

$$
\nab^2 \vE =
\mu \p_t (\vJ_f + \p_t \vD)
$$

and further apply [[Ohm's Law]] (with $\sigma = 0$ for an Ideal Insulator/Dielectric),

$$
\nab^2 \vE = \mu \p_t (\sigma \vE + \p_t \vD).
$$

From here we can now apply $\vD = \epsi\vE$ ([[Maxwells Equations in Materials#^15011a]]) giving us,

$$
\nab^2 \vE =
\mu\sigma \frac{\p \vE}{\p t}
+ \mu\epsi\frac{\p^2 \vE}{\p t^2}
$$

in the general case.

## Idealised Insulators

As mentioned above, in the case of an Idealised Insulator/Dielectric we take $\sigma = 0 \iff \vJ_f = 0$ and hence the previous equation simplifies to,

$$
\nab^2 \vE =
\mu\epsi\frac{\p^2 \vE}{\p t^2}
$$

which we can see clearly to be a [[Wave Equation]].
