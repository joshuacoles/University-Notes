https://uniofbath.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=7e6d739b-5aec-4077-8680-acd3012d8e4b

# Why we need to consider non-vacuum Systems

Thus far we have considered [[Physics/Electromagnetism 2/Cohesive Part 1/Maxwell's Equations]] within the [[Vacuum]] obtaining a set of equations with universal applicability (at least within the classical realm). These are also known as the **Microscopic Variant**.

When dealing with these equations in materials however they become unwieldy as they relate the electric and magnetic fields to total charge and total current, including the complicated charges and currents in materials at the atomic scale. Factors for this complication include,

- Waves propagating across media.
- Induced oscillations of atomic cores and electrons.
- Temporary dipoles / current flows in materials in response to the presence of Electric and Magnetic fields.
- EM waves hitting boundaries between materials and we need to be able to describe their reflection/transmission

Instead we form a **Macroscopic Variant** of these equations defining two new auxiliary fields, that describe the large-scale behaviour of matter _without having to consider atomic scale charges and quantum phenomena like spins_.

This births a less "pure" theory but one of much more experimental use. To do this we must determine the behaviour of these dipoles.

# Electric Fields in Materials

## [[Atomic Dipoles]] & [[Atomic Polarisability]]

Under the influence of an external [[Electric Field]] $\E_{\'{ext}}$ we model the negative electron cloud and positive atomic core as being displaced from their rest positions as displayed below.

![[Clipboard 12 Jun 2021 at 22.29.png]]

For fields that are not _too_ strong we model the displacement as **linear** with the field strength (ignoring any deformation of the cloud) giving us an induced [[Dipole Moment]],

$$
\vp = \alpha \E_{\'{ext}}
$$

where $\alpha$ is the [[Atomic Polarisability]].

### Computation

To determine the actual value of this constant, and prove the applicability of the model, we consider the following.

Given,

- The external force, $\E_\'{ext} = E_\'{ext}\uvec{z}$
- Causing a displacement, $\vd = d\uvec{z}$ of both charged bodies.

We induce a [[Dipole]] and thus an [[Electric Field]],

$$
E_\'{ind} = \frac{-q}{4\pi\epsi_0 r^3} \vd
$$

> #programming-note why do we have $r^{-3}$s?

which since we have a steady state gives us,

$$
\begin{align}
0
&= \vF_\'{ind} + \vF_\'{ext} \\
&= \E_\'{ind} + \E_\'{ext} \\
&= \E_\'{ind} + \E_\'{ext} \\
\E_\'{ind} &=
\end{align}
$$

## Atomic Polarisability

As displayed above we assume that the field has been displaced by an amount $\vd = d\uvec{z}$ gibing us the induced field as being,

$$
E_\'{ind} = \frac{-q}{4\pi\epsi_0 r^3} \vd
$$

Assuming a steady state we known that,

$$
\begin{align}
\vF_\'{ind} + \vF_\'{ext} &= 0 \\
\vF_\'{ind} + \vF_\'{ext} &= 0
\end{align}
$$
