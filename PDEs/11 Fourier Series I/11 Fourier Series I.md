# Fourier series I

Previously we encountered the relation

![[10.4 Motivation for Fourier Series from Heat Equation#^eq-10-35]]

for an arbitrary $f$, where $(B_n)_{n \in \N} \sub \R$ is a sequence of unknown coefficients, this infinite sum on the RHS is known as *[[Fourier Sine Series]]*.

Generalising and simplifying this, we take $L = \pi$ and consider also in the inclusion of of cosines, we get the general form,

$$
f(x) = \frac {a_0}{2} + \sum_{n \in \N}
\Big[
	a_n \cos (nx) + b_n \sin (nx)
\Big],
$$

^eq-11-3

where we attempt a representation of a function, $f(x)$, through the addition of an infinite number of sines and cosines, whose contributions are determined by the pair of sequences $\seq{a_n \in \R}{n}$ and $\seq{b_n \in \R}{n}$.

> The writing of the first (constant) term as $a_0/2$ is just a convention. We also notice also that there is no need to add $b_0 \sin (0 \cdot x)$ as this is identically zero.

> #todo Stepping back here, are there not issues wrt the [[Pigeonhole Principle]] here? Like aren't we essentially forming a function $\N \to \R$ here and saying its [[Bijective]]? This needs work and should be brought into this header.
> Given that the collection of coefficients is a [[Countable]] set, somehow they are apparently able to enable us to compute the values of $f(x)$ at an [[Uncountable]] number of points $x \in [0,L]$. Clearly this demands some rather careful investigation.

This raises two immediate questions,

1. For a given function $f : \R \to \R$, what are the values of $a_n$ and $b_n$?
2. In what cases, and under what conditions, does this series converge in various senses.

> Note that we have formed a [[Function Series]] defined by the sequence $f_n(x) = a_n \cos (nx) + b_n \sin (nx)$.

But first we must talk briefly about periodic functions.

## Periodic Functions and Even / Odd Functions

A [[11.1 Periodic Function]] is a function $f : \R \to \R$ such that,

![[11.1 Periodic Function#^6f3434]]

for some $a \in \R$. These can be formed as a [[11.2 Periodic Extension]] of a function over a *subset* of the real numbers.

We can also classify functions by their behaviours around the zero point, ie if they are,

- [[11.3 Odd Function]], where $f(-x) = -f(x)$, for example $\sin(x)$.
- [[11.4 Even Function]], where $f(-x) = f(x)$, for example $\cos(x)$.

These classifications are used both in Fourier Series Analysis, but also in the applied sciences as they can be used to simplify models greatly. Further we can apply a number of trivial [[11.5 Properties of Even and Odd Functions]] which can simplify calculations.

## Helpful Trig

## Fourier Series for Functions of Period $2\pi$

Fourier Series for functions of period $2\pi$ are the base case of our analysis of periodic functions, since the Fourier Series itself is based on the functions $\cos(x)$ and $\sin(x)$ which are themselves $2\pi$ periodic and thus so are their infinite sums (prove periodicity survives infinite sums pls #todo).

We will use the following properties of sines and cosines to analyse these series,

- [[11.6 Trig Product Identities]]
- [[11.7 Orthogonality Lemma]]

Whereby the [[11.7 Orthogonality Lemma|Orthogonality Lemma]] gives us a formula for the [[11.8 Fourier Coefficients]],

![[11.8 Fourier Coefficients#^2pi-f-coefs]]

## Convergence

Thus far we have avoided answering the 2nd question on our list, namely under what conditions and in which cases does this series converge, and if it does, how does it.

