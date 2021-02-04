> - [Panotpto](https://uniofbath.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=aeeada9a-ff9d-4acd-b235-acc200b3d5d4)
> - #lecture
> - Navigation
> 	- [[Lec 8, Time varying Charges and Currents|Previous]]
> 	- [[Lec 10|Next]]

## [[Electromagnetic Waves]] in a Vacuum

### The [[Wave Equation]] for $\E$
[[Maxwell's Equations]] (1)-(4) are coupled equations, however they can be decoupled to give us separate [[Wave Equation|Wave Equations]] for either the [[Electric Field]] $\E$ or the [[Magnetic Field]] $\B$.

To obtain a uncoupled equation for $\E$ we start off with the [[Maxwell–Faraday equation]],

$$
\curl \E = - \partial_t \B,
$$

then taking the curl, taking the [[Curl of Curl Identity]] and swapping the order of differentiation,

$$
\begin{align*}
\curl\(\curl \E\) &= \curl\(- \partial_t \B\) \\
\nab\(\divrg \E\) - \nab^2\E &= -\partial_t\(\curl \B\) \\
\end{align*}
$$

Then applying [[Gauss's law]] and [[Maxwell–Ampére Law]] to the LHS and RHS respectively,

$$
\begin{align*}
\nab\(\frac{\rho}{\epsi_0}\) - \nab^2\E
&= -\partial_t\(
\mu_0\(\J + \epsi_0 \frac{\partial \E}{\partial t}\)
\) \\

\nab\(\frac{\rho}{\epsi_0}\) - \nab^2\E
&= -\mu_0 \frac{\partial \J}{\partial t}
-\mu_0\epsi_0 \frac{\partial^2 \E}{\partial t^2}.
\end{align*}
$$

Here we see we have obtained a differential equation wholly in terms of $\E$ we well as the [[Source Terms]] $\rho$ and $\J$.

From now on however we will consider a "source-free" vacuum, ie $\rho = 0 \land \J = 0$ so this becomes,

$$
\nab^2\E = \mu_0\epsi_0 \frac{\partial^2 \E}{\partial t^2},
$$

which is clearly a [[Wave Equation]].

### The [[Wave Equation]] for $\B$
Similar to above we can take the double curl of $\B$, applying the [[Curl of Curl Identity]],

$$
\curl \(\curl \B\) = \nab\(\divrg \B\) - \nab^2\B
$$

This time however noting that by [[Gauss's law for magnetism]] $\divrg \B = 0$, and applying [[Maxwell–Ampére Law]], as well as the [[Maxwell–Faraday equation]],

$$
\begin{align*}
\curl \(\mu_0 \J + \epsi_0\mu_0 \partial_t \E\) &= - \nab^2\B \\
\mu_0\(\curl \J\) + \epsi_0\mu_0 \partial_t \(\curl\E\) &= - \nab^2\B \\
\mu_0\(\curl \J\) + \epsi_0\mu_0 \partial_t \(- \partial_t \B\) &= - \nab^2\B \\
\mu_0\(\curl \J\) - \epsi_0\mu_0 \partial^2_t \B &= - \nab^2\B.
\end{align*}$$

And again choosing to consider a "source-free vacuum",

$$
\nab^2\B = \mu_0\epsi_0 \frac{\partial^2 \B}{\partial t^2}.
$$

Which is identical in form to that of the $\E$ field as before, and thus will have the same types of solutions. One such example is the [[Plane Wave]].

## Wave solutions

We want to find [[Plane Wave]] solutions to the previous equations, of which we will choose the [[Electric Field]] $\E$ as it is the most physically relevant. For this we choose the trial solution,

$$
\E(\r, t) = \E_0 \exp(\vec{k} \dp \r - \omega t),
$$

where $\vec{k}$ is the [[Wave Vector]] and $\omega$ is the [[Angular Frequency]]. Substituting this into the [[Wave Equation]] for $\E$ as seen above, for the LHS we get,

$$
(\nab^2 \E)_i = (\partial^2_x + \partial^2_y +  \partial^2_z)\E_{0i},
$$

which, forgiving the massive abuse of notation give us

$$
\begin{align*}
(\nab^2 \E)_i &= (\partial^2_x + \partial^2_y +  \partial^2_z)\E_{i}
\\
(\nab^2 \E)_i &= (-k^2_x - k^2_y - k^2_z)\E_{i}
\\
(\nab^2 \E)_i &= -(k^2)\E_{i},
\end{align*}$$

> Programming note: check that

trivially seeing,

$$
\nab^2 \E = -k^2 \E.
$$

And respectively for the right,

$$
\partial^2_t \E = -\omega^2 \E.
$$

Thus giving us a full equation of,

$$
-k^2 \E = -\mu_0\epsi_0\omega^2\E,
$$

and,

$$
k^2 = \mu_0\epsi_0\omega^2.
$$

Which allows us to form an expression for the [[Phase Velocity]],

$$
v_p = \frac{\omega}{k} = \frac{1}{\sqrt{\epsi_0\mu_0}},
$$

to which any solution to the initial wave equation must conform.

> Oh look, $v_p = 3 \times 10^{8}\,\mathrm{m.s^{-1}}$. Shocking!!!

This is kind of cool because it is entirely from theory, and has the same speed as the speed of light that had already been observed!

Also note that this has **no dependence** on anything to do with the source of the waves, it is a constant.