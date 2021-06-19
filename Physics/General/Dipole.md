---
aliases:
- Dipoles
- Dipole Moment
- Dipole Moments
---

# Dipoles

## Far Field

![[Pasted image 20210612225417.png]]

When two charges $\pm q$ are position with separation $\vd$, their influence at a point $\r$ can be determined thus.

First we consider the separation between $\r$ and the two charges, labeled $\r_+$ & $\r_-$

$$
\begin{align}
\r_{+} &= \r - \frac \vd2 \\ 
\r_{-} &= \r + \frac \vd2
\end{align}
$$

which gives us separation distances of,

$$
\begin{align}
r_{+} &= r - \frac d2 \cos\theta \\ 
r_{-} &= r + \frac d2 \cos\theta
\end{align}
$$

> #todo prove

and thus,

$$
\begin{align}
V(\r)
&= \frac{q}{4\pi\epsi_0 r_{+}} + \frac{-q}{4 \pi\epsi_0 r_{-}} \\
&\approx \frac{q d \cos\theta}{4 \pi \epsi_0 r^2}\\
&= \frac{\vp \dp \r}{4 \pi \epsi_0 r^3}.
\end{align}
$$