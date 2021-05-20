## 3.3 Line integrals of vector fields

Generalising the Line Integral from Scalar Fields to Vector Fields yields multiple different possible forms, of which we will focus on two.

- Vector Sum Integrals
- Inner Product Integrals

### 3.3.1 Vector Sum Integrals

The first possible extension is to consider integrating a vector-valued function on a curve, i.e. integrals of the form

$$ \int_C \boldF \, \rd s. $$

Notice that this expression is parameterisation-free, ie there is no explicit reference on the parameterisation used.

We must choose **a** parameterisation to do actual calculation, however the value obtained is independent of this choice.

In the integral above, we take the value of the vector $\boldF$ at each point along a curve $C$, multiply by an arclength element $\rd s$, and then sum up (i.e. integrate) over the length of the curve. The result is a vector, and is defined formally as follows.

[[3.13 Line Integral with Scalar Differential]]

### 3.3.2 Inner Product Integrals (rel. Work and Energy)

The second type of line integral of a vector field $\boldF$ is more important; as it yields a scalar quantity it can’t just be three copies of the line integral of a scalar field. It is written as

$$ \int_C \boldF \cdot \rd \boldx . $$

In this integral we have replaced the scalar $\rd s$ by the vector element $\rd \boldx$. As this is a dot product we are computing the component of the force in the tangential direction to the curve, and summing over the length of the curve.

As you might expect, it makes sense to think of $\boldF \cdot \rd \boldx = |\boldF| |\rd {\boldx }|\cos \theta$ where $\theta$ is the angle between the two vectors and so the result of the integral is a scalar quantity. So this is a scalar line integral of a vector field. This scalar is identified with the physical concept of work since

$$ \text { work } = \text { force } \ \times \ \text { distance}. $$

Formally, we define it as follows.

- [[3.14 Inner Product Integral of Vector Field]]
- [[3.15 Example of Inner Product Integrals]]
- [[3.16 Properties of Inner Product Integrals]]

### Remark: Further Extensions

There are further possible cases to consider for integration of a vector field along a line, for example one could compute

$$
\int_C \boldF \times \rd \boldx
$$

but we will not consider this case in any detail in this course.