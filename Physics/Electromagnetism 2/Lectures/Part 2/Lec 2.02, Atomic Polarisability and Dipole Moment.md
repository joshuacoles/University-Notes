https://uniofbath.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=7e6d739b-5aec-4077-8680-acd3012d8e4b

## Why we need to consider non-vacuum Systems

Thus far we have considered [[Maxwell's Equations]] within the [[Vacuum]] obtaining a set of equations with universal applicability (at least within the classical realm). These are also known as the microscopic variant.

When dealing with these equations in materials however they become unwieldy as they relate the electric and magnetic fields to total charge and total current, including the complicated charges and currents in materials at the atomic scale. Factors for this complication include,

- Waves propagating across media.
- Induced oscillations of atomic cores and electrons.
- Temporary dipoles / current flows in materials in response to the presence of Electric and Magnetic fields.    
- EM waves hitting boundaries between materials and we need to be able to describe their reflection/transmission
    
Instead we form a Macroscopic variant of these equations defining two new auxiliary fields, that describe the large-scale behaviour of matter **without** having to consider atomic scale charges and quantum phenomena like spins.

This births a less "pure" theory but one of much more experimental use. To do this we must determine the behaviour of these dipoles.

## [[Atomic Dipoles]] & [[Atomic Polarisability]]

Under the influence of an external [[Electric Field]] $\E_{\'{ext}}$ we model the negative electron cloud and positive atomic core as being displaced from their rest positions as displayed below.

![[Clipboard 12 Jun 2021 at 22.29.png]]

For fields that are not *too* strong we model the displacement as **linear** with the field strength (ignoring any deformation of the cloud) giving us an induced [[Dipole Moment]],

$$
\vp = \alpha \E_{\'{ext}}
$$

where $\alpha$ is the [[Atomic Polarisability]], who's value is computed below.

### Atomic Polarisability

As displayed above we assume that the field has been displaced by an amount $\vd = d\uvec{z}$ gibing us the induced field as being,

$$
E_\'{ind} = \frac{-q}{4\pi\epsi_0 r^3} \vd
$$

> #programming-note need to go back and explain why that is a $r^{-3}$ relation for [[Dipole Moment]]'s.

Assuming a steady state we known that,

$$
\vF
$$