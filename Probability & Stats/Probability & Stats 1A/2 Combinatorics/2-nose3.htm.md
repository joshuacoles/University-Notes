### 2.1 Equally likely events and the classical interpretation of probability

The classical interpretation of probability, championed by
Laplace[1](#fn1x2), takes as a basic notion the situation where the
possible outcomes of an experiment are all considered to be equally
likely.

Example 12 A card is drawn at random from a well-shuffled deck, so that
each card is equally likely to be drawn.

Definition 10 (Classical interpretation of probability)
For a finite sample space
$\Omega=\set{ (\omega)_{1} , … ⁡ , (\omega)_{n} }$,
so $|\Omega|=n$, if the outcomes
$(\omega)_{1},…⁡,(\omega)_{n}$ are viewed to be
equally likely then the classical interpretation of probability defines
the probability of each $(\omega)_{i}$ to be

$$
\begin{align}
ℙ( (\omega)_{i} ) & = & \frac{1}{| \Omega |}=\frac{1}{n}, & text{}
\end{align}
$$

and, for any event $E\subsetOmega$, the probability of $E$ to be

$$
\begin{align}
ℙ( E ) & = & \frac{| E |}{| \Omega |}=\frac{\text{number of ways }E\text{ can occur}}{\text{total number of outcomes}}. & \text{(2.1)}\text{}text{}
\end{align}
$$

Corollary 6 (Calculating probabilities for equally likely events)
The function $ℙ:𝒫( \Omega )\rightarrow[ 0 , 1 ]$
defined by equation ([2.1](#x12-19005r2.1)) is a probability measure on
$( \Omega , 𝒫 ( \Omega ) )$.

Proof: In terms of Theorem [5](nose2.htm#x10-170015), we have
$p_{i}=\frac{1}{| \Omega |}=frac{1}{n}$ and

$$
\begin{align}
ℙ( E )=\frac{| E |}{| \Omega |}=\underset{i : (\omega)_{i} \in E}{\sum}\frac{1}{| \Omega |}=\underset{i : (\omega)_{i} \in E}{\sum}p_{i} & & & text{}
\end{align}
$$

and so the result follows immediately. $square$

Thus, the classical interpretation of probability gives us an automatic
way of calculating probabilities for situations where it seems
intuitively reasonable to say that a collection of outcomes is equally
likely.

Example 13 Suppose that we toss a fair coin three times. What is the
probability of obtaining at least two heads?

We may write the sample space as

$$
\begin{align}
\Omega & = & \set{ H H H , H H T , H T H , T H H , H T T , T H T , T T H , T T T \right\} & text{}
\end{align}
$$

where, for example, $THT$ denotes that the first toss was a tail, the
second a head and the third a tail. There are thus
$|\Omega|=8$ possible outcomes. As the coin is stated to be
fair, we proceed under the assumption that all the outcomes are equally
likely. Let $E$ be the event that we obtain at least two heads then

$$
\begin{align}
E & = & \set{ H H H , H H T , H T H , T H H \right\} & text{}
\end{align}
$$

so that $|E|=4$. Thus, using the classical interpretation of
probability, equation ([2.1](#x12-19005r2.1)),

$$
\begin{align}
ℙ( E ) & = & \frac{| E |}{| \Omega |}=\frac{4}{8}=\frac{1}{2}. & text{}
\end{align}
$$

Example 14 Suppose that we roll two fair dice, a red one and a blue one.
What is the probability that the total score of the two dice is $6$?

If we let $( r , b )$ denote that the score on the red dice
was $r$ and that on the blue dice was $b$ then the sample space is

$$
\begin{align}
\Omega & = & \set{ ( 1 , 1 ) , ( 1 , 2 ) , ( 1 , 3 ) , … ⁡ , ( 6 , 4 ) , ( 6 , 5 ) , ( 6 , 6 ) \right\} & text{}
\end{align}
$$

with $|\Omega|=36$ $( = 6 \times 6 )$. As the die
are fair, we assume that each outcome is equally likely. If we let
$E=\set{ \text{Total score is 6} }$ then to find
$ℙ( E )$ we need to find the total number of the outcomes
which total 6. We tabulate the possible outcomes and add the scores.

Blue

Red

1

2

3

4

5

6

------------------------------------------------------------------------

------------------------------------------------------------------------

------------------------------------------------------------------------

------------------------------------------------------------------------

------------------------------------------------------------------------

------------------------------------------------------------------------

------------------------------------------------------------------------

1

2

3

4

5

6

7

2

3

4

5

6

7

8

3

4

5

6

7

8

9

4

5

6

7

8

9

10

5

6

7

8

9

10

11

6

7

8

9

10

11

12

We thus obtain that

$$
\begin{align}
E & = & \set{ ( 1 , 5 ) , ( 2 , 4 ) , ( 3 , 3 ) , ( 4 , 2 ) , ( 5 , 1 ) \right\} & text{}
\end{align}
$$

so that $|E|=5$. Thus, using the classical interpretation of
probability, equation ([2.1](#x12-19005r2.1)),

$$
\begin{align}
ℙ( E ) & = & \frac{| E |}{| \Omega |}=\frac{5}{3 6}. & text{}
\end{align}
$$

Example 15 From a sample of $400$ adults, $300$ cycle or swim (or both),
$160$ swim, $120$ swim and cycle. What's the probability that an adult
selected at random doesn't cycle?

Let $Omega$ be the set of all the sampled adults, so that
$|\Omega|=400$. Letting $S$ be set of the adults who swim and
$C$ the set of the adults who cycle. Then,

$$
\begin{align}
|S|=160,|S\cupC|=300,|S\capC|=120. & & & text{}
\end{align}
$$

We can use a Venn diagram to easily summarise the number of adults who
fall into the disjoint events of $Omega$. This is shown in Figure
[2.1](#x12-190181).

![PIC](MA10211_all-10.png)

Figure 2.1:If $|\Omega|=400$ with $|S|=160$,
$|S\cupC|=300$ and $|S\capC|=120$ then we can
calculate the size of each disjoint subset: $|S\capC^{c}|=40$,
$|S^{c}\capC|=140$ (so that $|C|=260$) and
$|S^{c}\capC^{c}|=100$.

Choosing an adult at random corresponds to assuming that each adult is
equally likely to be chosen. Then, using the classical interpretation of
probability, equation ([2.1](#x12-19005r2.1)),

$$
\begin{align}
ℙ( S ) & = & \frac{| S |}{| \Omega |}=\frac{1 6 0}{4 0 0}=\frac{2}{5} & \text{} \\ ℙ( S \cup C ) & = & \frac{| S \cup C |}{| \Omega |}=\frac{3 0 0}{4 0 0}=\frac{3}{4} & \text{} \\ ℙ( S \cap C ) & = & \frac{| S \cap C |}{| \Omega |}=\frac{1 2 0}{4 0 0}=\frac{3}{1 0}. & text{}
\end{align}
$$

Now, using the inclusion-exclusion rule, see Corollary
[4](nose2.htm#x10-160224),
$ℙ( S \cup C )=ℙ( S )+ℙ( C )-ℙ( S \cap C )$.
Rearranging,

$$
\begin{align}
ℙ( C ) & = & ℙ( S \cup C )+ℙ( S \cap C )-ℙ( S ) & \text{} \\ & = & \frac{3}{4}+\frac{3}{1 0}-\frac{2}{5}=\frac{1 3}{2 0}. & text{}
\end{align}
$$

Now, using the probability of complements, see Corollary
[1](nose2.htm#x10-160141),

$$
\begin{align}
ℙ(\set{ \text{adult doesn’t cycle} \right\})=ℙ( C^{c} )=1-ℙ( C )=\frac{7}{2 0}. & & & text{}
\end{align}
$$

In these examples, it was relatively easy to count the number of
outcomes and thus calculate probabilities. In more complex situations,
we need to develop general counting techniques to find the number of
outcomes. This is known as combinatorics.
