\


### 3.1 Conditional probability

Suppose that in an experiment, we learn that an event $F$ has occurred.
Has does this information change our probability of some other event
$E$? If we know that $F$ has occurred then we know that the outcome of
the experiment is one of those sample points contained in $F$. Thus, to
evaluate the probability that $E$ occurs given that $F$ has occurred we
need to consider the set of outcomes in $F$ that also result in $E$,
that is the set $EcapF$.

## Definition 1 (Conditional probability)
For a probability space $(\Omega, ℱ, \P)$ if $E,F\inℱ$,
and $\P(F)>0$, then the conditional probability of event $E$
given event $F$, written $\P(E | F)$, is

$$
\begin{align}
\P(E | F) &= \frac{\P (E \cap F)}{\P (F)}. \text{(3.1)}text{}
\end{align}
$$

Notes:

1.  

What happens in the conditional probability calculation is that $F$
becomes the sample space: $\P(F | F)=1$. All other
probabilities are then recalibrated with respect to their relationship
with $F$.

2.  

It is straightforward to verify that $\P(\cdot | F)$
satisfies Kolmogorov's axioms (A1)-(A3) of Definition
[9](nose2.htm#x10-150029). Hence, all of the consequences, that is the
calculus of probabilities obtained in Section
[1.2.3](nose2.htm#x10-160003), hold in conditional versions. For
example, the inclusion-exclusion rule of Corollary
[4](nose2.htm#x10-160224) for conditional probability is that for any
events $E$ and $G$ we have:

$$
\begin{align}
\P(E \cup G | F) &= \P(E | F)+\P(G | F)-\P(E \cap G | F). text{}
\end{align}
$$

3.  

If $E$ and $F$ are disjoint, that is from Definition
[6](nose1.htm#x9-110206) $E\capF=oslash$, then
$\P(E \cap F)=0$ so that $\P(E | F)=0$.

## Example 2 A family has three children, but you don't know their sexes.
What's the probability that all three are boys when somebody tells you
there are at least two boys?

Let
$\Omega=\{ B B B, B B G, B G B, G B B, B G G, G B G, G G B, G G G }$
where, for example, $GBB$ represents eldest a girl, middle and youngest
are boys. If we set $E=\{ \text{Three boys} }$ and
$F=\{ \text{At least two boys} }$ then
$E=\{ B B B }$,
$F=\{ B B B, B B G, B G B, G B B }$ and
$E\capF=\{ B B B }$. If we assume that all sample points of
$Omega$ are equally likely then

$$
\begin{align}
\P(E) &= \frac{| E |}{| \Omega |}=\frac{1}{8},  \\ \P(F) &= \frac{| F |}{| \Omega |}=\frac{4}{8}=\frac{1}{2},  \\ \P(E \cap F) &= \frac{| E \cap F |}{| \Omega |}=\frac{1}{8}. text{}
\end{align}
$$

Using equation ([3.1](#x17-29002r3.1)), the probability that all the
children are boys given that there are at least two boys is

$$
\begin{align}
\P(E | F)=\frac{(\frac{| E \cap F |}{| \Omega |})}{(\frac{| F |}{| \Omega |})}=\frac{| E \cap F |}{| F |}=\frac{1}{4}. text{}
\end{align}
$$

Notice that $\P(E | F)>\P(E)$ which is not
a surprise: learning that there are at least two boys increases the
probability that there are three boys.
