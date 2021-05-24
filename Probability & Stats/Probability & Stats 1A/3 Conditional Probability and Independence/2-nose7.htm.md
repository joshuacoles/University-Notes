\


### 3.1 Conditional probability

Suppose that in an experiment, we learn that an event $F$ has occurred.
Has does this information change our probability of some other event
$E$? If we know that $F$ has occurred then we know that the outcome of
the experiment is one of those sample points contained in $F$. Thus, to
evaluate the probability that $E$ occurs given that $F$ has occurred we
need to consider the set of outcomes in $F$ that also result in $E$,
that is the set $EcapF$.

Definition 11 (Conditional probability)
For a probability space $\left( \Omega , ℱ , ℙ \right)$ if $E,Finℱ$,
and $ℙ\left( F right)>0$, then the conditional probability of event $E$
given event $F$, written $ℙ\left( E \left| F right)$, is

$$
\begin{align}
ℙ\left( E \left| F \right) & = & \frac{ℙ \left( E \cap F \right)}{ℙ \left( F \right)}. & \text{(3.1)}\text{}text{}
\end{align}
$$

Notes:

1.  

What happens in the conditional probability calculation is that $F$
becomes the sample space: $ℙ\left( F \left| F right)=1$. All other
probabilities are then recalibrated with respect to their relationship
with $F$.

2.  

It is straightforward to verify that $ℙ\left( \cdot \left| F right)$
satisfies Kolmogorov's axioms (A1)-(A3) of Definition
[9](nose2.htm#x10-150029). Hence, all of the consequences, that is the
calculus of probabilities obtained in Section
[1.2.3](nose2.htm#x10-160003), hold in conditional versions. For
example, the inclusion-exclusion rule of Corollary
[4](nose2.htm#x10-160224) for conditional probability is that for any
events $E$ and $G$ we have:

$$
\begin{align}
ℙ\left( E \cup G \left| F \right) & = & ℙ\left( E \left| F \right)+ℙ\left( G \left| F \right)-ℙ\left( E \cap G \left| F \right). & text{}
\end{align}
$$

3.  

If $E$ and $F$ are disjoint, that is from Definition
[6](nose1.htm#x9-110206) $E\capF=oslash$, then
$ℙ\left( E \cap F \right)=0$ so that $ℙ\left( E \left| F right)=0$.

Example 25 A family has three children, but you don't know their sexes.
What's the probability that all three are boys when somebody tells you
there are at least two boys?

Let
$\Omega=\left\{ B B B , B B G , B G B , G B B , B G G , G B G , G G B , G G G \right}$
where, for example, $GBB$ represents eldest a girl, middle and youngest
are boys. If we set $E=\left\{ \text{Three boys} \right}$ and
$F=\left\{ \text{At least two boys} \right}$ then
$E=\left\{ B B B \right}$,
$F=\left\{ B B B , B B G , B G B , G B B \right}$ and
$E\capF=\left\{ B B B \right}$. If we assume that all sample points of
$Omega$ are equally likely then

$$
\begin{align}
ℙ\left( E \right) & = & \frac{\left| E \left|}{\left| \Omega \left|}=\frac{1}{8}, & \text{} \\ ℙ\left( F \right) & = & \frac{\left| F \left|}{\left| \Omega \left|}=\frac{4}{8}=\frac{1}{2}, & \text{} \\ ℙ\left( E \cap F \right) & = & \frac{\left| E \cap F \left|}{\left| \Omega \left|}=\frac{1}{8}. & text{}
\end{align}
$$

Using equation ([3.1](#x17-29002r3.1)), the probability that all the
children are boys given that there are at least two boys is

$$
\begin{align}
ℙ\left( E \left| F \right)=\frac{\left(\frac{\left| E \cap F \left|}{\left| \Omega \left|}\right)}{\left(\frac{\left| F \left|}{\left| \Omega \left|}\right)}=\frac{\left| E \cap F \left|}{\left| F \left|}=\frac{1}{4}. & & & text{}
\end{align}
$$

Notice that $ℙ\left( E \left| F \right)>ℙ\left( E right)$ which is not
a surprise: learning that there are at least two boys increases the
probability that there are three boys.

\

