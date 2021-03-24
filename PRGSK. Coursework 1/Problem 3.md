## Problem 3

### Specialised Solution

In the case provided of two 2-variable equations, the most obvious solution is to form a set of explicit equations, solving these using the method described in Problem 2.

This can be done, albeit bluntly, by rearranging each equation in turn to be in the form $y = \dots$ and then $x = \dots$ and substituting in. This results in the following equations:

$$
4\left(\left(4\left(1-y-y^{4}\right)\right)^{0.25}\right)-2\left(\left(4\left(1-y-y^{4}\right)\right)^{0.25}\right)^{2}+2y^{3\ }=1
$$

and,

$$
4\left(\left(1-4x+2x^{2}\right)^{\frac{1}{3}}\right)^{4}+x^{4}+4\left(\left(1-4x+2x^{2}\right)^{\frac{1}{3}}\right)=4.
$$

Which are in forms which are amenable to methods of Problem 2.

### Further Generalisations

Generalising the problem from [[Problem 2]] into the multivariate case increases the complexity dramatically. In the ideal case we would combine the techniques seen before, with the separation of Candidate Finder and Root Finder to make the problem tractable, allowing for generalisations to arbitrary dimensions. Suggestions for these algorithms are provided in the following.

First considering the Candidate Finder. In two dimensions, we would still be able to choose the method seen previously, creating in this case a lattice of linear points within the problem domain.

However when generalising this to even higher dimensions, the complexity becomes unmanageable (growing $n^d$ where n is the points per axis and $d$ is the dimension). It is instead suggested to partition the domain into $N$ regions, in which a $n$ points are randomly distributed, as candidates. Allowing for an approximately even covering of the domain whilst keeping the Candidate Finder roughly linear.

As for the Root Finder itself, as provided in the notes, the Newton-Raphson method generalises through the use of the jacobian analogous to the derivative. However computing the jacobian and then its inverse in high dimensional settings is a complex affair. Instead a possible alternative is Broyden's method, in combination with the "Bad Broyden's method" extension, to iteratively determine the inverse jacobian.

These methods were attempted, and their source provided for interest, however their values ran away to infinity within a number of iterations, suggesting coding error.





while for 2 dimensions the increase in complexity by ta

