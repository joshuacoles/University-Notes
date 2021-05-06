# Determining [[Band Gap]] in [[Intrinsic Semiconductors]]

Recalling that,

$$
N_C = 2 \(
	\frac{m_e^* k_BT}{2\pi \hbar^2}
\)^{\frac 32} \qquad
N_V = 2 \(
	\frac{m_h^* k_BT}{2\pi \hbar^2}
\)^{\frac 32}
$$

we can use the [[Law of Mass Action]], specialised to [[Intrinsic Semiconductors]], to determine the Band Gap of material.

$$
n_i
= \sqrt{N_C N_V} \expp{-E_G \over 2k_BT}
= A T^{\frac32} \expp{-E_G \over 2k_BT}
$$

where $A$ is a material constant dependent on the Effective Masses of Holes and Electrons. Taking logs we can use $(n_i, T)$ data to fit a line to the following,

$$
\ln{n_i \over T^{\frac32}} = \ln A - \frac{E_G}{2_kB} \frac 1T
$$

the issue begin obtaining values for $n_i$ in [[Intrinsic Semiconductors]].


