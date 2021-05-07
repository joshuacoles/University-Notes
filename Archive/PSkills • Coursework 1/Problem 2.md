 ## Problem 2

 Problem 2 involves finding all the roots of a non-linear equation, for this specific example the equation,

$$
f(x) = x^3 + 5x^2 + x + \sin x.
$$

This problem lead to a number of considerations,

- A consideration of numerical precision & possible sources of rounding errors (as per brief).
- Considerations to adapt standard root finding methods to a multi-root problem.
- Considerations to allow for greater code reuse in wider problems.

### Numerical Precision & Possible Sources of Rounding Errors

Computers being digital in nature cannot store the full gamut of real numbers, in finite space, nor do they need to. Instead the *IEEE754 Floating Point Standard*. Important considerations include:

- Being careful of specifying a precision greater than machine epsilon, or the precision offered in the solution region.
- Ordering complex operations such as to limit rounding errors and position the values in question in a suitable region of the Floating Point domain.

### Multiple Root Considerations

Standard root finding methods work in one of two main ways,

1. Bracketing the root, each step improving the accuracy of the bracket around the root. The most notable example being the [[Bisection Method]].
2. Defining an iterative formula for a series which is expected to converge towards the root. For example the Secant or Newton–Raphson methods

In general however these algorithms will only converge to a single root, as a function of whatever input data is provided to them. Thus we are presented with a problem, how best to find *all* roots.

Possible solutions presented themselves including:

A method of root removal, such that you avoid converging to the same root twice. The obvious example being, progressively modifying the function $f(x)$ into a series $f_i$ as shown below,

$$
\begin{align}
f_0 = f \\
f_i = \frac{f_{i-1}}{r_i}
\end{align}
$$

where $r_i$ is the $i$'th root to be found, either stopping at a known number of roots, or when your root finding efforts fail to come to fruition in reasonable time, indicating there are no more roots to find. This presents issues however in that depending on your choice of algorithm, you may continue to converge onto a known root, even after removal. This being indicative of root finding's fundemental property of caring more of the behaviour *around* a point, than of the point itself.

Another promising method is recursive application of a bracketing method, such as [[Bisection Method]]. At each root found, splitting the domain at that point and searching the two created regions, stopping again after either a given number of iterations, or roots found. Care must be taken however to ensure that you do not converge in your successive applications to a previous root. Indeed also one must be mindful to do this searching in a breadth-first manner, to ensure that you do not "drill-down" deeper into a given region, ignoring the remainder of the domain.

The final method presented, which is by far the simplest conceptually and programmatically, is to use a separate algorithm to find *"candidates"* for submission to the various root finding algorithms. This algorithm is hence forth known as the *[[Problem 2#Candidate Finder]]*, distinct from the [[Problem 2#Root Finder]].

In one dimensions the simplest manner for providing these candidates is to iterate linearly along the domain of interest, until a sign change is found, indicating that the function crosses the axis over the region. This method also generalises well however to higher dimensional problems, as will be discussed in Problem 3, as methods can be freely chosen which do not have a complexity determined by the dimension.

### Generic Considerations

To make the code more generic the subject function was accepted as an argument to the [[Problem 2#Candidate Finder]], then passed through to the [[Problem 2#Root Finder]].

### Pseudocode

#### Candidate Finder

The Candidate Finder used to detect regions which should be passed to the Root Finder. Pseudocode for this is presented below:

> - Given:
> 	- An `lowerBound` and `upperBound` defining the `searchRegion` as `lowerBound <= x <= upperBound`.
> 	- The subject function `f: R -> R`, defined in the `searchRegion`.
> 	- `searchResolution`, the increment used for linear searching along the `searchRegion`.
> 	- An expected `Number of Roots`.
> - Ensure that:
> 	- The region is well formed: `lowerBound < upperBound`.
> 	- The resolution is greater than zero and smaller than the length of the search region: `0 < searchResolution < upperBound - lowerBound`.
> - Let:
>   - `n` be the number of roots found thus far, initially equal to `0`.
>   - `roots` be an array of doubles capable of holding all roots which could be found (indicated by the `Number of Roots` provided to the algorithm).
> - Walking the `searchRegion` in increments of `searchResolution`, perform the following:
> 	- Let `x0` be the trailing edge of the increment.
> 	- Let `x1` be the leading edge of the increment, equal to `x0 + searchResolution`.
> 	- If the sign of `f(x0)` is different from the sign of `f(x1)` then:
> 		- Subject the region `x0 <= x <= x1` to root finding, passing it to the [[Problem 2#Root Finder]].
> 		- If a root is found (the returned root is not `NaN`)
> 		    - Add the root the the list `roots`.
>			- Increment `n` by 1.
>			- Check if we have located all of the roots, if so break from the loop.
>		- Else continue
> 	- Else continue.
> - Return the list `roots` to the calling function, as well as `n` number of roots found.

> Note this code has been written in a way which ignores the memory behaviour and features of C.
> 
> As C does not have multiple return values, instead `roots` is provided as a parameter, and `n` the number of found routes is returned.

#### Root Finder

The root finding method used is the [[Secant Method]], chosen as it has good performance on a number of problems, see table on   5:11 of 1. TODO. Pseudocode again presented below:

> - Given:
> 	- Candidate values of `x0` and `x1` provided by the [[Problem 2#Candidate Finder]] above.
> 	- The subject function `f: R -> R` from above.
> 	- A numerical precision $\epsilon$, with the aim to find roots within $\pm\epsilon$ of the analytic root.
> - Let:
>	- Values `x0`, `x1`, initially assigned to the provided candidate values `x0` and `x1`.
> 	- `f0` be the initial value of `f(x0)`.
> 	- `f1` be the initial value of `f(x1)`
> 	- `n` be the number of iterations, to be incremented each iteration to a maximum of some preset value (`MAX_SECANT_ITER`) of secant performed thus far, providing a hard stop if converge is not forthcoming.
> - While the absolute value of the difference between `x0` and `x1` is greater than $2\epsilon$, and n is less than the maximum number of iterations (`MAX_SECANT_ITER`).
> 	- Let `x2` be the linear interpolation of $(x_0, f(x_0))$ and $(x_1, f(x_1))$ provided by the formula
> 		$$ x_2 = \frac{x_0 f(x_1) - x_1 f(x_0)}{f(x_1) - f(x_2)} $$
> 	- Perform the propagation `x2 -> x1 -> x0` updating the `f1` and `f0` values as such.
> - Once this loop has run to completion. 
> 	- If the absolute value of the difference between `x0` and `x1` is greater than $2\epsilon$.
> 		- Then the method hit the maximum iteration limit and failed to converge in reasonable time.
> 		- Return `NaN` to signal convergence failed.
> 	- Else return the value of `x2` as the root.

#### User Interface

The brief requires that the program accept input from the user for a number of parameters, the pseudocode for this final section is presented below:

> - Input the lower and lower bound for the [[Problem 2#Candidate Finder]]'s  search.
> - Input the resolution of the search performed by the [[Problem 2#Candidate Finder]].
> - Input the number of decimal places `dp` of precision is desired for the roots found.
> 	- This number of decimal places is converted into an $\epsilon$ of $\frac 12 \times 10^{\text{dp}}$.
> - Create an array of capacity 3 (the predetermined maximum number of roots our polynomial may find)
> - Pass this information to the [[Problem 2#Candidate Finder]] (which will then pass the relevant information to the [[Problem 2#Root Finder]]), along with a pointer to the subject function `f` defined elsewhere, and the maximum number of roots which is 3 for our.
> - Print out all the roots found to the user at the desired number of decimal places.

We do not allow for the selection of the subject function by the user as this would require the parsing of maths by the program, or some means of loading code at runtime. Both of which are out of scope for this problem. Further for testing purposes this input handling is also behind an `if` to allow for more rapid testing.

We also opted for *decimal places* as opposed to *significant figures* as in the domain in question they are roughly equivalent (-10 -> +10) and they allow for simple computation of an epsilon value.

### C Code

```c
#include <math.h>
#include <printf.h>
#include <libc.h>
#include <stdbool.h>

double f(double x) {
    return pow(x, 3) + 5 * pow(x, 2) + x + sin(x);
}

double sign(double x) {
    if (x > 0) return 1;
    if (x < 0) return -1;
    return 0;
}

#define MAX_SECANT_ITER 100

double findRoot(double (*f)(double), double x0, double x1, double epsilon) {
    double f0 = f(x0);
    double f1 = f(x1);
    double x2;

    int n = 0;

    while (fabs(x0 - x1) > 2 * epsilon && n < MAX_SECANT_ITER) {
        x2 = (x0 * f1 - x1 * f0) / (f1 - f0);

        // Reset values
        x0 = x1;
        f0 = f(x0);
        x1 = x2;
        f1 = f(x1);
        n++;
    }

//    printf("Found in %d\n", n);

    // We failed to converge
    if (fabs(x0 - x1) > 2) return nan("");

    return x2;
}

// To find all of the roots, we blanket a "sensible domain" with linear points
int findRoots(double (*f)(double), double *roots, double lowerBound, double upperBound, double signDetectionResolution,
              double epsilon, int expectedRoots) {
    int n = 0;

    double x0 = lowerBound;
    double x1 = x0;

    double f0 = f(x0);
    double f1;

    do {
        x1 += signDetectionResolution;
        f1 = f(x1);

        // Do we have a root in [x0, x1]
        if (sign(f1) != sign(f0)) {
            double root = findRoot(f, x0, x1, epsilon);

            if (isnan(root)) {
                printf(
                        "Candidate region [%f, %f] failed to yield any roots to the required precision in reasonable time",
                        x0,
                        x1
                );
            } else {
                roots[n] = root;
                n++;
                if (n == expectedRoots) break;
            }
        }

        // Make x0, x1 and move on
        x0 = x1;
        f0 = f1;
    } while (x1 <= upperBound);

    // We failed to find all the roots, return the number we did find
    return n;
}

int main() {
    double lowerBound;
    double upperBound;
    double signDetectionResolution;
    double epsilon;
    int decimalPlaces = -1;

    bool input = true;

    if (input) {
        printf("Please enter the lower bound for candidate finding: ");
        scanf("%lf", &lowerBound);

        printf("Please enter the upper bound for candidate finding: ");
        scanf("%lf", &upperBound);

        printf("Please enter a search resolution for candidate finding: ");
        scanf("%lf", &signDetectionResolution);

        printf("Please enter the desired number of decimal places for the roots: ");
        scanf("%d", &decimalPlaces);

        epsilon = 0.5 * pow(10, -decimalPlaces);
    } else {
        lowerBound = -10;
        upperBound = 10;
        signDetectionResolution = 0.1;
        epsilon = 1e-10;
    }

    double roots[3];
    int numberOfRoots = findRoots(
            &f,
            roots,
            lowerBound,
            upperBound,
            signDetectionResolution,
            epsilon,
            3
    );

    char fmtString[10];

    // If we specified a decimal places we need to create the correct format string for
    // the printf function.
    if (decimalPlaces != -1) {
        sprintf(fmtString, "%%.%dlf\n", decimalPlaces);
    } else {
        strcpy(fmtString, "%lf\n");
    }

    printf("Found roots:\n");
    for (int i = 0; i < numberOfRoots; ++i) {
        printf(fmtString, roots[i]);
    }

    return 0;
}
```

### Testing

The method was tested by comparing the returned roots of a number of problems to those determined analytically and from other numerical solvers.
