# Fourier series II

In the previous chapter we assumed that a $2\pi$-periodic function could represented in the form of a Fourier series, and we wrote

![[11 Fourier Series I#^eq-11-3]]

^eq-12-0

We subsequently derived formulas for the coefficients $a_n$ and $b_n$. In this chapter we aim to determine when the above equation converges.

Recall that the convergence of an [[Infinite Series]] depends on the convergence of its sequence of [[Partial Sums]], which for this case, for a fixed $x$, are given by


$$
S_N(x) = \frac {a_0}{2} + \sum_{n \in J_N}
\Big[
	a_n \cos (nx) + b_n \sin (nx)
\Big].
$$

^eq-12-1

Thus the Fourier series converges at a point $x$ if and only if its partial sums have a limit:

$$
\lim _{N\to \infty } S_N(x) = \tilde {f}(x).
$$
^eq-12-2

Proceeding carefully, we observe that this may or may not equal the value $f(x)$ of the original function. Sorting all this out is the subject of this chapter.

To begin with we present a classic example to demonstrate that convergence is perhaps not as straightforward as you might hope.

[[12.1 Square Wave Example FQQ]]


## Gibbs’ phenomenon

We now examine, pictorially, the effect of adding terms one by one to the infinite series; the first approximations to the square wave $f(x)$ are

$$ S_1(x) = \frac {4}{\pi }\sin x, \quad S_3(x) = \frac {4}{\pi }\left ( \sin x + \frac {1}{3} \sin 3x\right ). $$

Figure 12.1 shows $S_N$ with $N=1,3,5,7,9$ and $99$, all plotted on the same axes. We see that the function appears to converge for almost all $x$ but that oscillations remain at multiples of $\pi$ (i.e. where the function is discontinuous); the wavelength of these oscillations decreases as $N\rightarrow \infty$, but the amplitude appears to stay constant. The presence of these oscillations is called the _Gibbs’ phenomenon_.

![[12_FourierSquare.svg]]

Figure 12.1: Figure showing the square wave, $S_N$ with $N=1,3,5,7,9$ and $99$, all plotted on the same axes.

The error between the partial sums $S_N(x)$ and the original function $f(x)$ behaves differently depending on how we measure it. From the fact that for almost every $x$ the sequence of partial sums $S_N(x)$ approaches $f(x)$ we can prove that

$$ \lim _{N \rightarrow \infty } \int _{-\pi }^\pi |S_N(x) - f(x)|^2 \ \rd x = 0 . $$

However, if we look at the maximum value of the error over all values of $x$, i.e.


$$ \max _{x\in (-\pi ,\pi ]} |S_N(x)-f(x)|, $$
^eq-12-11


(sometimes called $\|S_N(x-f\|_\infty$ we observe that due to Gibbs’ phenomenon this does not tend to zero as $N\rightarrow \infty$ but remains around $9\%$.

More precisely, for any $N$ we can find a point $x_N$ corresponding to the highest peak of the oscillations near the point $0$, or equivalently $2\pi$ (i.e. where $f$ jumps up). We can show that the _height_ of the peak does not tend to zero as $N\rightarrow \infty$, although it does move closer to the location of the discontinuity. This shows that, as a function, $S_N$ does not converge uniformly to $f$. However, pointwise it is true that for every point $x$ away from the discontinuities, $S_N(x) \rightarrow f(x)$ as $N \rightarrow \infty$. This is explored further on problem sheet 7.

## Fourier Convergence

If the function in question has both left and right derivatives at a point then it [[Pointwise Convergence|converges pointwise]] to the averge of the left and right [[12.2 One-Sided Limits|one sided limits]] of the function, ie:

$$
\frac12 \Big[f(x_-) + f(x_+)\Big] = (Ff)(x)
$$

> cf [wikipeida](https://en.wikipedia.org/wiki/Convergence_of_Fourier_series#Pointwise_convergence)
> #todo rephrase all of this in terms of:
> - $Ff$ taking the fourier series
> - the partial sums
> - different types of convergence under different conditions linking into Anal 2A.

This discussed briefly in [[12.5 Fourier Convergence Theorem]], using the concepts of [[12.2 One-Sided Limits]] and [[12.4 Piecewise Continuity]].

# General Periodic Functions

Theorem 11.8 shows that the Fourier coefficients of $2\pi$ periodic function are given by [[12•2#^eq-11-16]] and [[12•2#^eq-11-17]]. More generally, for a function $f$ that is periodic with period $2L$, the formula [[12•2#^eq-11-16]] can be adapted.

[[12.7 Fourier Coefficients for General Periodic Function]]

[[12.8 Even and Odd Periodic Extensions]]