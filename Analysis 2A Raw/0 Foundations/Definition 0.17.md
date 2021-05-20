### [[Definition 0.17]]

A function $f:[a,b]\ \to \R$ is said to be Riemann integrable on $[a,b]$ if for every $\varepsilon >0$ there exists a subdivision (partition) $\Delta$ of $[a,b]$, $\Delta = \{a=x_0<x_1<\dots <x_M=b\}$ such that



$$  U(f,\Delta ) - L(f,\Delta ) = \sum _{n=1}^M \left (\sup _{I*n} f - \inf *{I*n} f \right ) |I_n| <\varepsilon , \quad I_n = [x*{n-1},x*n], |I_n|=x_n-x*{n-1} $$

where $U(f,\Delta ), L(f,\Delta )$ denote the corresponding upper and lower sums respectively. We also denote by $\omega (f,I_n):= \sup _{I_n} f - \inf _{I_n} f$ the oscillation of $f$ on $I_n$; in this case (0.4) can be rewritten as

$$ U(f,\Delta ) - L(f,\Delta ) = \sum _{n=1}^M \omega (f,I_n)\, |I_n| <\varepsilon . $$