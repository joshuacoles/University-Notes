## Question 1, Diffraction Limit of a Telescope

This involved computing the diffraction pattern of a monochromatic point source of wavelength $\lambda$ passing through a circular aperture. This setup is known as the *Airy Disk*, and is given by the *Fraunhofer diffraction* formula,

$$
I(r) = I_0\left(\frac{2 J_1(x(r))}{x(r)}\right)^2,
$$

where,

- $I_0$ is the initial intensity.
- $J_1$ a **Bessel Function of the First Kind**.
- $x(r)$ is the relative phase of the light ray incident at the point $r$ distance away from the center of the screen.

This example is displayed in the following diagram,
	
![[Pasted image 20210309164300.png|Airy Disk Example]]

> Credits lecturers and Wikipedia.

From this we can see a value of $x(r)$ would be given as,

$$
\begin{align*}
x(r)
&= k \cdot (a \sin \theta) \\
&= \frac{2\pi}{\lambda} (a \cdot \frac rR).
\end{align*}
$$

To implement and display this situation we used the following technologies,

- The Bessel Function integral was computed using the Trapezium Rule, as specified in the brief, with $N = 1000$.
- Exporting the resulting data to *csv* format.
- Julia to plot the *csv* data in a manner to be included in this report.

This process is discussed below.

### Part A

The brief calls for the evaluation of the Bessel Function for $x \in [0, 20]$, for $m = 0,1,2$. To do this we must first inspect the general formula for the Bessel Function,

$$
J_m(x) = \frac 1 \pi \int_0^\pi \cos(m\theta - x \sin\theta)\mathrm{d} \theta.
$$

We see this is comprised of two parts,

- The generic Bessel Function $J$ itself, involving a definite integral, and a scaling, which takes two parameters $m, x$.
- The integrand $f(m, x, \theta) = \cos(m\theta - x\sin\theta)$, where $m$ & $x$ are the parameters from $J$ above and $\theta$ is the variable of integration.

Starting from the bottom and working upwards, we first define the integrand,

```c, loc: 9a3ea9a5d5ad0744e930a2ae596546a6787b3181:q1_a.c:4-6
double JIntegrand(int m, double x, double theta) {  
    return cos(m * theta - x * sin(theta));  
}
```

> **Note**: Code in this development log is provided in snippet form, click on the links provided to see the code in full context, including for example, include directives (in this case `#include <math.h>`).

Then a prototype of the Bessel Function itself,

```c a5436629ae447942447ae3e3cbadb1696e5fa291
// Bessel function of the first kind.
// Implemented inline with Wikipedia's numerical implementation of
// the uniform grid trapezium rule with N = 10,000 as per the brief.
double J(int m, double x) {
    double dtheta = (J_INTEGRAL_END - J_INTEGRAL_START) / TRAPEZIUM_N;
    double sum = 0;

    // - Sum internal trapeziums, indexed `i` = `1` -> `TRAPEZIUM_N - 1`
    //   - `i = 0` being the first, and `i = TRAPEZIUM_N` being the last.
    // - Each having width `dtheta` (accounted for later)
    // - Evaluating based on the initial point of the trapezium
    for (int i = 1; i < TRAPEZIUM_N - 1; ++i) {
        double theta = interpolate(J_INTEGRAL_START, J_INTEGRAL_END, TRAPEZIUM_N, i);
        sum += JIntegrand(m, x, theta);
    }

    // Account for ends of the integral domain
    sum += (JIntegrand(m, x, J_INTEGRAL_START) + JIntegrand(m, x, J_INTEGRAL_START)) / 2;

    // M_1_PI = 1 / PI, a constant included in <math.h>
    return M_1_PI * dtheta * sum;
}
```

> Implemented as specified in the code, in-line with [Wikipedia's section on Numerical Implementation of uniform grid Trapezium Rule](https://en.wikipedia.org/wiki/Trapezoidal_rule#Numerical_implementation).

There a number of constants used in this function which we have defined above,

```c 9a3ea9a5d5ad0744e930a2ae596546a6787b3181
const int TRAPEZIUM_N = 10000;  
const double J_INTEGRAL_START = 0;  
const double J_INTEGRAL_END = M_PI;
```

In addition we also make use of the `interpolate` function which takes a start and end point, in addition a max $N$ and an integer progression, giving you the number,

$$
x_n = (\text{start point} - \text{end point}) \cdot \frac nN,
$$

implemented as so,

```c 9a3ea9a5d5ad0744e930a2ae596546a6787b3181
double interpolate(double dom_start, double dom_end, int max_i, int i) {  
    double i_ratio = i / (double) max_i;
	return dom_start + (dom_end - dom_start) * i_ratio;  
}
```

#### Polishing

##### $m$ bounds

The next step now we have got the code roughly written is to start improving it, from the outset we can see the following:

Firstly the $m$ passed into `J` (and then `J_integrand`) should be a non-negative integer. The integer part of this is accounted for in the type declaration (as much as it can be in a language with implicit casts), however not the non-negative factor.

We can address this in one of two ways:

1. We could declare the type instead to be `unsigned int` as opposed to just `int` which has the advantage of allowing us to to use values of $m$ up to $4294967295 \approx 4 \cdot 10^9$ instead of $2147483647 \approx 2.1 \cdot 10^9$ (these being `INT_MAX` and `UINT_MAX` respectively).
2. Or we could insert an assertion to validate the domain of $m \ge 0$ when the function is called.

The first solution has the advantage of allowing a larger range of accepted $m$ values as mentioned, in addition that all values of `m` will lead to "working" code, ie it will do *something* even instead of failing at run-time. However since these values of $m$ are far outside our problem domain, and may be liable to cause issues in other regions of the code. Further C being C will also casually re-interpret the bit patterns of any negative numbers we pass it, as if they were `unsigned int`s, thus giving us a major foot-gun of our code "working", functioning in an unexpected way.

For these reasons we chose go down the assertion route, adding the following to the `J_integrand` function,

```c a5436629ae447942447ae3e3cbadb1696e5fa291
assert(m >= 0);
```

> Note this is accompanied with the required `#include <assert.h>` in the preamble.

##### `interpolate` argument bounds

The next constraints to verify would be those regarding the arguments to interpolate, these are (in code order),

- `double dom_start`
- `double dom_end`
- `int max_i`
- `int i`

Of which we have the following constraints,

- $\text{dom start} \le \text{dom end}$
- $0 \le i \le \text{max i}$

Implemented in code with the following assertions,

```c e157fc66b8ee77f93b6279d30b87fa0ec1292838
assert(dom_start <= dom_end);  
assert(0 <= i && i <= max_i);
```

#### Arbitrary Integration

At the moment if we want to integrate anything else in our C code we will need to copy the trapezium rule code from the `J` function and remove or change the Bessel Function specific bits (the bounds, multiplication by $\frac 1\pi$, etc). This is not great from a code reuseability point of view. Instead we made the following changes,

Abstracted the trapezium rule logic from `J` to an `integrate` function. The arguments of which are as follows:

- `double dom_start`, the start of the integral domain.
- `double dom_end`, the end of the integral domain.
- `int N`, the number of Trapeziums to use.
- `double (*integrand)(double)`, a function pointer to the integrand to integrate.

This is shown below,

```c 1222d6892b1acacf7bb877ba814f89006663ad60
// Implemented in-line with Wikipedia's numerical implementation of
// the uniform grid with N = 10,000 as per the brief.
// Note that integrand is a function pointer taking the current
// value of t.
double integrate(double (*integrand)(double), double t_start, double t_end, int N) {
    double dt = (t_end - t_start) / N;
    double sum = 0;

    for (int i = 1; i < N - 1; ++i) {
        double t = interpolate(t_start, t_end, N, i);
        sum += integrand(t);
    }

    sum += (integrand(t_start) + integrand(t_end)) / 2;

    return dt * sum;
}
```

However when attempting to implement our `J` function in terms of this new `integrate` function we run into an issue, there is no (easy) way to get our value of $x$ in the `integrand` function as C lacks currying or closures. To get around this we will instead use a *context* struct, this will allow us to pass in additional arguments to the integrand as needed. To do this we use a void pointer to pass an "unknown" (C again lacking generics) type to the integrand, implemented as so,

```c 7e0b11a887b1f7a274e06b3adfce1c89454e613d
// Implemented in-line with Wikipedia's numerical implementation of
// the uniform grid with N = 10,000 as per the brief.
// Note that integrand is a function pointer taking the current
// value of t and a pointer to a context variable of some fashion.
double integrate(double (*integrand)(double, void *), double t_start, double t_end, int N, void *context) {
    // Width of the trapeziums
    double dt = (t_end - t_start) / N;
    double sum = 0;

    // - Sum internal trapeziums, indexed `i` = `1` -> `TRAPEZIUM_N - 1`
    //   - `i = 0` being the first, and `i = TRAPEZIUM_N` being the last.
    // - Evaluating based on the initial point of the trapezium
    for (int i = 1; i < N - 1; ++i) {
        double t = interpolate(t_start, t_end, N, i);
        sum += integrand(t, context);
    }

    sum += (integrand(t_start, context) + integrand(t_end, context)) / 2;

    return dt * sum;
}
```

The context in this case being the $m$ and $x$ variables,

```c 7e0b11a887b1f7a274e06b3adfce1c89454e613d
typedef struct JContext {
    double m;
	double x;  
} JContext;
```

Changing our integrand function to instead read,

```c
double J_integrand(double theta, JContext *context) {
    assert(context->m >= 0);
    return cos(theta * context->m - context->x * sin(theta));
}
```

This allows us finally to implement our `J` function with the new `integrate` function,

```c 84b2b3892f22d4c1c4d37e72d39c3e13b36013bd
// Bessel function of the first kind.
double J(int m, double x) {
    // Create the context parameter to allow for access to m and x in
    // the integrand. 
    JContext context = {
            .m = m,
            .x = x
    };

    return M_1_PI * integrate(
            (double (*)(double, void *)) J_integrand,
            J_INTEGRAL_START,
            J_INTEGRAL_END,
            TRAPEZIUM_N,
            &context
    );
}
```

NOTE ON THE POINTER CAST
NOTE ON `double` USE

## Testing

Now we have a te
