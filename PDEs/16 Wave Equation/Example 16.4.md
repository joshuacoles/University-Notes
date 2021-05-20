###### Example 16.4

(Plucked string).  Consider the Dirichlet problem with $L=\pi$, $c=1$, and the initial conditions on position and velocity of the string given by

$$ u_0(x) = \begin {cases} x, & 0<x<\dfrac {\pi }{2}\\ \pi -x, & \dfrac {\pi }{2}<x<\pi \end {cases} \quad \text {and} \quad v_0(x) = 0. $$

**Solution:** Note that this corresponds to a string of length $\pi$ deformed into a steady sawtooth-like shape and then released at $t=0$. Since $v_{0}=0$ we see immediately that

$$ B_{n} \;=\; 0 \quad \text {for all} \quad n. $$

Using the definition of $u_0$ in [[#^eq-16-17]] we have


$$ \begin{align*} A_{n} & \;=\;\frac {2}{\pi }\left [\int _{0}^{\frac {\pi }{2}}x \sin \left (nx\right )\ \mathrm {d}x +\int _{\frac {\pi }{2}}^{\pi }\left (\pi -x\right )\sin \left (nx\right )\ \mathrm {d}x\right ] \end{align*} $$

^eq-16-18

As usual, we now need to carry out these integrations, using integration by parts. First (a trick that works here due to the symmetry of the initial condition $u_0(x)$ around its midpoint) we note that the change of variables $y=\pi -x$ shows that


$$ \int _{\pi /2}^\pi (\pi -x)\sin (nx)\, \rd x = - (-1)^n \int _0^{\pi /2} y \sin (ny)\, \rd y. $$

^eq-16-18


This shows that if $n$ is even then $A_n=0$, and that when $n$ is odd


$$ A_n = \frac {4}{\pi } \int _0^{\pi /2} x \sin (nx)\, \rd x. $$

^eq-16-19


Now, using integration by parts we find that


$$ A_n = \frac {4}{\pi n^2}\sin \left (\frac {n\pi }{2}\right ) $$
^eq-16-20


when $n$ is odd. In fact this formula is true also when $n=2k$ is even (since $\sin (k \pi )=0$). Therefore, theorem 16.3 implies that the solution to this particular Dirichlet problem is given by


$$ u(x,t)= \frac {4}{\pi }\ \sum _{n=1}^{\infty }\sin \left (\frac {n\pi }{2}\right )\frac {1}{n^{2}} \sin \left (nx\right )\ \cos \left (nt\right ). $$

^eq-16-21


The observation about symmetry is not necessary in order to compute the coefficients $A_n$ - a more direct approach to the integrations would have yielded the same answer but just with a little more working required.

Figure 16.2 shows this solution plotted at various times. Note how the points at which the string has a discontinuity in its gradient propagate away from the midpoint and then back towards it through a period of the oscillation.

Figure 16.2: The plucked string from Example 16.4 at $t=0, \pi /3, 2\pi /3$ (from top to bottom).