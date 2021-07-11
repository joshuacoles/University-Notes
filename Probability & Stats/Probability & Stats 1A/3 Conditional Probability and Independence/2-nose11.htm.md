\



### 3.5 Independence

Definition 13 (Independence)
Two events, $E$ and $F$, are independent if

$$
\begin{align}
ℙ\left( E \cap F \right) & = & ℙ\left( E \right)ℙ\left( F \right). & \text{(3.11)}\text{}text{}
\end{align}
$$

If two events are not independent, they are dependent.

Suppose $ℙ\left( E \right)>0$ and $ℙ\left( F right)>0$ and that $E$ and
$F$ are independent. From equation ([3.1](nose7.htm#x17-29002r3.1)) we
have that

$$
\begin{align}
ℙ\left( E \left| F \right) & = & \frac{ℙ \left( E \cap F \right)}{ℙ \left( F \right)} & \text{(3.12)}\text{}\text{} \\ & = & \frac{ℙ \left( E \right) ℙ \left( F \right)}{ℙ \left( F \right)}=ℙ\left( E \right). & \text{(3.13)}\text{}text{}
\end{align}
$$

where equation ([3.13](#x21-33003r3.13)) follows from
([3.11](#x21-33002r3.11)). Similarly,

$$
\begin{align}
ℙ\left( F \left| E \right)=\frac{ℙ \left( E \cap F \right)}{ℙ \left( E \right)}=\frac{ℙ \left( E \right) ℙ \left( F \right)}{ℙ \left( E \right)}=ℙ\left( F \right). & & & \text{(3.14)}\text{}text{}
\end{align}
$$

Thus, independence captures our intuition that we view events $E$ and
$F$ as independent, if knowing one gives us no information about the
other: the conditional probability is unchanged,
$ℙ\left( E \left| F \right)=ℙ\left( E right)$ and
$ℙ\left( F \left| E \right)=ℙ\left( F right)$.

Notes

1.  

Assuming $ℙ\left( E \right)>0$ and $ℙ\left( F right)>0$, we could have
equivalently defined independence by either ([3.13](#x21-33003r3.13)) or
([3.14](#x21-33004r3.14)) but ([3.11](#x21-33002r3.11)) is used as it
treats events symmetrically and naturally generalises to many events as
we'll see in the next section.

2.  

Moreover, Definition [13](#x21-3300113) allows us to consider the case
when an event has zero probability. If $ℙ\left( E right)=0$ then $E$ is
independent of every event: $E\capFsubsetE$ so that
$0=ℙ\left( E \right)\geqℙ\left( E \cap F right)$ whence
$ℙ\left( E \cap F right)=0$.

Example 31 A fair coin is tossed twice. Let $E$ and $F$ be the event of
getting a head on the first and second tosses respectively. Intuitively,
as we know the coin is fair, the outcome of the first toss has no
influence on the second, $ℙ\left( F \left| E \right)=ℙ\left( F right)$,
so that $ℙ\left( E \cap F \right)=ℙ\left( E \right)ℙ\left( F right)$.

We now demonstrate that this is the case. Let
$\Omega=\left\{ H H , H T , T H , T T \right}$ be the sample space of
equally likely events. Then,

$$
\begin{align}
ℙ\left( E \right)=\frac{1}{2},ℙ\left( F \right)=\frac{1}{2},ℙ\left( E \cap F \right)=\frac{1}{4} & & & text{}
\end{align}
$$

Thus,
$ℙ\left( E \cap F \right)=\frac{1}{4}=ℙ\left( E \right)ℙ\left( F right)$
so that $E$ and $F$ are independent.

Example 32 Draw a card from a shuffled pack. Let $E$ be the event we get
an ace and $F$ that we get a heart. Unlike the previous part, in this
case the two events are physically related. Are they independent?

Using equally likely events we have

$$
\begin{align}
ℙ\left( E \right)=\frac{1}{1 3},ℙ\left( F \right)=\frac{1}{4},ℙ\left( E \cap F \right)=\frac{1}{5 2}. & & & text{}
\end{align}
$$

Thus,
$ℙ\left( E \cap F \right)=\frac{1}{5 2}=ℙ\left( E \right)ℙ\left( F right)$
and so $E$ and $F$ are independent. Note that
$ℙ\left( E \left| F \right)=ℙ\left( E right)$ so that learning the suit
of a card does not give you any information about the number of the
card: there's still the same proportion of each number of cards
remaining. Notice that this argument would be the same if we learnt that
the card was not a heart:

$$
\begin{align}
ℙ\left( F^{c} \right)=\frac{3}{4},ℙ\left( E \cap F^{c} \right)=\frac{3}{5 2} & & & text{}
\end{align}
$$

so that

$$
\begin{align}
ℙ\left( E \right)ℙ\left( F^{c} \right)=\frac{1}{1 3}\times\frac{3}{4}=\frac{3}{5 2}=ℙ\left( E \cap F^{c} \right) & & & text{}
\end{align}
$$

demonstrating that $E$ and $F^{c}$ are independent. This result
generalises as we now show in Theorem [12](#x21-3301312).

Theorem 12 (Independence of events includes their complements)
If $E$ and $F$ are independent events, then

(a) 

$E$ and $F^{c}$ are independent,

(b) 

$E^{c}$ and $F$ are independent,

(c) 

$E^{c}$ and $F^{c}$ are independent.

Proof: From the partition rule, Corollary [3](nose2.htm#x10-160203),
$ℙ\left( E \right)=ℙ\left( E \cap F \right)+ℙ\left( E \cap F^{c} right)$
so that

$$
\begin{align}
ℙ\left( E \cap F^{c} \right) & = & ℙ\left( E \right)-ℙ\left( E \cap F \right) & \text{} \\ & = & ℙ\left( E \right)-ℙ\left( E \right)ℙ\left( F \right)\left( \text{by independence of }E\text{ and }F\text{} \right) & \text{} \\ & = & ℙ\left( E \right)\left( 1 - ℙ \left( F \right) \right)=ℙ\left( E \right)ℙ\left( F^{c} \right) & text{}
\end{align}
$$

using the probability of complements, Corollary
[1](nose2.htm#x10-160141). Hence, $E$ and $F^{c}$ are independent giving
part (a). Part (b) follows by symmetry and part (c) from applying part
(a) to part (b). $square$

Remark: disjoint events are typically not independent.

If $E$ and $F$ are disjoint events, that is $E\capF=oslash$, and both
$ℙ\left( E \right)>0$ and $ℙ\left( F right)>0$ then
$ℙ\left( E \right)ℙ\left( F right)>0$. However,
$ℙ\left( E \cap F right)=0$ so that $E$ and $F$ are dependent events.

Intuitively, if $E$ and $F$ are disjoint then given that one has
occurred, then we know the other cannot occur, that is
$ℙ\left( E \left| F \right)=0\neqℙ\left( E right)>0$. Learning $F$
changes the probability of $E$ so they are dependent.

\

