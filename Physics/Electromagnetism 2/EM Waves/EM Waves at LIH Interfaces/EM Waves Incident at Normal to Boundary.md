# EM Waves Incident at Normal to Boundary

Given a clean boundary at $z = 0$ between two non-conducting [[LIH Materials]] characterised by $(\epsi_1, \mu_1[, Z_1])$, $(\epsi_2, \mu_2[, Z_2])$ ($Z_i$ being redundant as $Z = \sqrt\frac{\mu}{\epsi}$).

We consider three waves

![[Pasted image 20210731154839.png]]

> Note $y$ is coming **out** of the page.

with forms,

$$
\begin{align}
\vE_I &= E^0_I \expp{k_I z - \omega_I t} \uvx \\
\vE_R &= E^0_R \expp{-k_R z - \omega_R t} \uvx \\
\vE_T &= E^0_T \expp{k_T z - \omega_T t} \uvx
\end{align}
$$

> Note that $k_A$ is given as a scalar, hence we have computed the sign of $\vk_A \dp \r = \pm k_A z$ already, notably for $\vE_r$

These determine entirely the [[H Field]] forms of,

$$
\begin{align}
\vH_I &= \frac{E^0_I}{Z_1} \expp{k_I z - \omega_I t} \uvy \\
\vH_R &= -\frac{E^0_R}{Z_1} \expp{-k_R z - \omega_R t} \uvy \\
\vH_T &= \frac{E^0_T}{Z_2} \expp{k_T z - \omega_T t} \uvy
\end{align}
$$

> Note that the sign of $\vH_R$ is given by considering $\vk$ has changed direction.

Now we apply the [[Interface Conditions of EM Waves between LIH Materials]] giving us,

$$
\begin{align}
\vE_1^\parallel = \vE_2^\parallel \\
\vH_1^\parallel = \vH_2^\parallel \\
\end{align}
$$

> Hence why we work with $\vH$ not $\vB$ here as the $\vB$ condition is in the $\perp$ where we have $0 = 0$ trivially.

Noting that,

$$
\begin{align}
\vE_1 &= \vE_I + \vE_R \\
\vH_1 &= \vH_I + \vH_R \\
\end{align}
$$

for $\vE$ we have,

$$
E^0_I \expp{k_I z - \omega_I t} \uvx +
E^0_R \expp{-k_R z - \omega_R t} \uvx =
E^0_T \expp{k_T z - \omega_T t} \uvx
$$

which evaluated at $z = 0$ (the boundary, thus $\exp(0 \dp k_A) = 1 \,\forall A$) and considering $\Forall t$ (leading to $\omega_I = \omega_R = \omega_T$) we get, ^8ea2c5

$$
E^0_I + E^0_R = E^0_T.
$$

Now by similar logic for $\vH$, but accounting for the change in signs due to the change in orientation of $\vk \cp \vE$ for $R$,

$$
\frac{E^0_I}{Z_1} \expp{k_I z - \omega_I t} \uvy +
-\frac{E^0_R}{Z_1} \expp{-k_R z - \omega_R t} \uvy =
\frac{E^0_T}{Z_2} \expp{k_T z - \omega_T t} 
$$

and hence with the same conditions as [[#^8ea2c5|before]] becomes

$$
\frac{E^0_I}{Z_1} - \frac{E^0_R}{Z_1} = \frac{E^0_T}{Z_2}.
$$

## Putting it all together

Combining these we have the system,

$$
\begin{align}
E^0_I + E^0_R &= E^0_T \\\\
\frac{E^0_I}{Z_1} - \frac{E^0_R}{Z_1} &= \frac{E^0_T}{Z_2}
\end{align}
$$

which gives us (with $E_I^0$ being independent variable)

$$
\begin{align}
E^0_T &= \frac{2 Z_2}{Z_2 + Z_1}E^0_I \\
E^0_R &= \frac{Z_2 - Z_1}{Z_2 + Z_1}E^0_I
\end{align}
$$

where we define,

$$
\begin{align}
t &= \frac{E^0_R}{E^0_I} = \frac{2 Z_2}{Z_2 + Z_1} \\
r &= \frac{E^0_R}{E^0_I} = \frac{Z_2 - Z_1}{Z_2 + Z_1}
\end{align}
$$

Note that $t - r = 1$, $t^2 + r^2 = 1$, $t, r \in \C$.