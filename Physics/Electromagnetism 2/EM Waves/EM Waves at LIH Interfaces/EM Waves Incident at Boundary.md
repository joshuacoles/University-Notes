# EM Waves Incident at Boundary

This is a generalisation of [[EM Waves Incident at Normal to Boundary]] for cases such that $\vk \not\parallel \uvn$. In this case we define the following,

$$
\begin{align}
\vE_I(\vr, t) &= \vE^0_I \expp{\vk_I \dp \vr - \omega_I t} \\\\
\vE_R(\vr, t) &= \vE^0_R \expp{\vk_R \dp \vr - \omega_R t} \\\\
\vE_T(\vr, t) &= \vE^0_T \expp{\vk_T \dp \vr - \omega_T t}
\end{align}
$$

We note that any equality across the boundary will be of the form,

$$
(\cdots) \expp{\vk_I \dp \vr - \omega_I t} +
(\cdots) \expp{\vk_R \dp \vr - \omega_R t} =
(\cdots) \expp{\vk_T \dp \vr - \omega_T t}
$$

with $x, y, t$ dependence being confined to the exponential term, thus for it to be true $\Forall t$ and $\Forall (x, y)$ (ie any point on $z = 0$ plane) we must have,

$$
\vk_I \dp \vr - \omega_I t = 
\vk_R \dp \vr - \omega_R t = 
\vk_T \dp \vr - \omega_T t \tag{at z = 0}
$$

which can only be true if

$$
\omega = \omega_I = \omega_R = \omega_T
$$

and,

$$
\vk^\parallel = \vk^\parallel_I = \vk^\parallel_R = \vk^\parallel_T
$$

where $\vk^\parallel = (k_x, k_y, 0)$. Because of this each of $\vk_I, \vk_R, \vk_T$ lie in the Plane of Incidence,

$$
P: \mathrm{span}(\vk_I, \uvn)
$$



