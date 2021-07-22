# #Example Parallel Plate Capacitor

![[IMG_EB7D7901917C-1.jpeg]]

Given a [[Capacitor]] as described schematically above what is,

1. [[Electric Displacement Field]] $\vD$
2. [[Polarisation Density]] $\vP$
3. [[Electric Field]] $\vE$
4. Potential Across the Plate $V$
5. Capacitance of the Capacitor

Note that we must apply [[Gauss's Law for Materials]] as opposed to the Vacuum Gauss's Law as we do not care for the charges within the [[Dogma]] itself.

## Electric Displacement Field

To compute the Displacement Field we take Gauss' Law,

$$
\oint_S \vD \dp \rd \vS = Q_f
$$

and consider it for the pillbox $S$ in the diagram. We can simplify the problem further as so:

- To start we take the assumption that the plate is infinite in size, thus ignoring edge effects meaning $\vD \parallel \uvec z$. This allows us to ignore the curved surface of the pillbox.
- Secondly considering the bottom face of the pillbox which is within the conductor, the field must zero at this point as else the system is not in a steady state as desired.

This leaves us only with the top face which we take to have area $S$ giving us,

$$
\oint_S \vD \dp \rd \vS = \frac SA Q
$$

where $A$ is the area of the overall surface, assuming uniform distribution.

Now focusing on the RHS, our statement of the direction of $\vD$ gives us its orientation, in addition to the result of the dot product and thus it becomes

$$
DS = \frac SA Q

\quad\implies\quad
\vD = \frac QA \uvec z
$$

## Electric Field

Noting the relation seen previously 

$$ \vD = \epsi_0 \epsi_r \vE $$

we can trivially determine $\vE$ as,

$$ \vE = \frac Q{\epsi_0 \epsi_r A} \uvec{z} $$

which when compared to vacuum form we see the addition of a $\frac 1{\epsi_r}$ term.

## Polarisation Density

Again we have a relation between $\vP$ and $\vE$ seen previously and given by,

$$ \vP = \epsi_0 \chi_E \vE $$

giving us, 

$$ \vP = \frac{\chi_E Q}{\epsi_R A} \uvec z $$

## Potential Difference

Noting that it is the $\vE$ field which has physical significance we state,

$$
\begin{align}
V
&= - \int_{\'{-'ve plate}}^{\'{+'ve plate}} \vE \dp \rd \vl \\
&= - \int_{z = d}^{z = 0} \vE \dp \rd \vl \\
&= - \int_{z = d}^{z = 0} \frac Q{\epsi_0 \epsi_r A} \uvec{z} \dp \rd \vl \\
&= - \frac Q{\epsi_0 \epsi_r A}  \int_{d}^{0} -1 \rd z \\
&= - \frac Q{\epsi_0 \epsi_r A}  (-0 - -d) \\
&= - \frac Q{\epsi_0 \epsi_r A} d 
\end{align}
$$

#programming-note why is this negative it should be positive.

```ad-note
Note that $\vE \parallel -\rd \vl$ in this case hence the inner minus sign.
```

## Capacitance

From the Potential Difference we have the Capacitance trivially as, 

$$
C = \frac QV = \frac{\epsi_0\epsi_r A}{d} = \epsi_r C_0
$$

where $C_0$ is the vacuum capacitance. Note that this implies than a dielectric (which always has $\epsi_r > 1$ will increase the Capacitance of a given Capacitor).

## Energy

![[Pasted image 20210715193059.png]]

This generalises to a result about the general [[Energy in Dielectric]].