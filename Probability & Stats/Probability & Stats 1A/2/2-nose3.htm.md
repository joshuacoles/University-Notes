\


### 2.1 Equally likely events and the classical interpretation of probability

The classical interpretation of probability, championed by
Laplace[1](#fn1x2), takes as a basic notion the situation where the
possible outcomes of an experiment are all considered to be equally
likely.

Example 12 A card is drawn at random from a well-shuffled deck, so that
each card is equally likely to be drawn.

Definition 10 (Classical interpretation of probability)
For a finite sample space
$\Omega=\left\{ \left(\omega\right)_{1} , … ⁡ , \left(\omega\right)_{n} \right}$,
so $\left|\Omegaleft|=n$, if the outcomes
$\left(\omega\right)_{1},…⁡,\left(\omegaright)_{n}$ are viewed to be
equally likely then the classical interpretation of probability defines
the probability of each $\left(\omegaright)_{i}$ to be

$$
\begin{align}
ℙ\left( \left(\omega\right)_{i} \right) & = & \frac{1}{\left| \Omega \left|}=\frac{1}{n}, & text{}
\end{align}
$$

and, for any event $E\subsetOmega$, the probability of $E$ to be

$$
\begin{align}
ℙ\left( E \right) & = & \frac{\left| E \left|}{\left| \Omega \left|}=\frac{\text{number of ways }E\text{ can occur}}{\text{total number of outcomes}}. & \text{(2.1)}\text{}text{}
\end{align}
$$

Corollary 6 (Calculating probabilities for equally likely events)
The function $ℙ:𝒫\left( \Omega \right)\rightarrow\left[ 0 , 1 right]$
defined by equation ([2.1](#x12-19005r2.1)) is a probability measure on
$\left( \Omega , 𝒫 \left( \Omega \right) right)$.

Proof: In terms of Theorem [5](nose2.htm#x10-170015), we have
$p_{i}=\frac{1}{\left| \Omega \left|}=frac{1}{n}$ and

$$
\begin{align}
ℙ\left( E \right)=\frac{\left| E \left|}{\left| \Omega \left|}=\underset{i : \left(\omega\right)_{i} \in E}{\sum}\frac{1}{\left| \Omega \left|}=\underset{i : \left(\omega\right)_{i} \in E}{\sum}p_{i} & & & text{}
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
\Omega & = & \left\{ H H H , H H T , H T H , T H H , H T T , T H T , T T H , T T T \right\} & text{}
\end{align}
$$

where, for example, $THT$ denotes that the first toss was a tail, the
second a head and the third a tail. There are thus
$\left|\Omegaleft|=8$ possible outcomes. As the coin is stated to be
fair, we proceed under the assumption that all the outcomes are equally
likely. Let $E$ be the event that we obtain at least two heads then

$$
\begin{align}
E & = & \left\{ H H H , H H T , H T H , T H H \right\} & text{}
\end{align}
$$

so that $\left|Eleft|=4$. Thus, using the classical interpretation of
probability, equation ([2.1](#x12-19005r2.1)),

$$
\begin{align}
ℙ\left( E \right) & = & \frac{\left| E \left|}{\left| \Omega \left|}=\frac{4}{8}=\frac{1}{2}. & text{}
\end{align}
$$

Example 14 Suppose that we roll two fair dice, a red one and a blue one.
What is the probability that the total score of the two dice is $6$?

If we let $\left( r , b right)$ denote that the score on the red dice
was $r$ and that on the blue dice was $b$ then the sample space is

$$
\begin{align}
\Omega & = & \left\{ \left( 1 , 1 \right) , \left( 1 , 2 \right) , \left( 1 , 3 \right) , … ⁡ , \left( 6 , 4 \right) , \left( 6 , 5 \right) , \left( 6 , 6 \right) \right\} & text{}
\end{align}
$$

with $\left|\Omega\left|=36$ $\left( = 6 \times 6 right)$. As the die
are fair, we assume that each outcome is equally likely. If we let
$E=\left\{ \text{Total score is 6} \right}$ then to find
$ℙ\left( E right)$ we need to find the total number of the outcomes
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
E & = & \left\{ \left( 1 , 5 \right) , \left( 2 , 4 \right) , \left( 3 , 3 \right) , \left( 4 , 2 \right) , \left( 5 , 1 \right) \right\} & text{}
\end{align}
$$

so that $\left|Eleft|=5$. Thus, using the classical interpretation of
probability, equation ([2.1](#x12-19005r2.1)),

$$
\begin{align}
ℙ\left( E \right) & = & \frac{\left| E \left|}{\left| \Omega \left|}=\frac{5}{3 6}. & text{}
\end{align}
$$

Example 15 From a sample of $400$ adults, $300$ cycle or swim (or both),
$160$ swim, $120$ swim and cycle. What's the probability that an adult
selected at random doesn't cycle?

Let $Omega$ be the set of all the sampled adults, so that
$\left|\Omegaleft|=400$. Letting $S$ be set of the adults who swim and
$C$ the set of the adults who cycle. Then,

$$
\begin{align}
\left|S\left|=160,\left|S\cupC\left|=300,\left|S\capC\left|=120. & & & text{}
\end{align}
$$

We can use a Venn diagram to easily summarise the number of adults who
fall into the disjoint events of $Omega$. This is shown in Figure
[2.1](#x12-190181).

![PIC](MA10211_all-10.png)

Figure 2.1:If $\left|\Omega\left|=400$ with $\left|Sleft|=160$,
$\left|S\cupC\left|=300$ and $\left|S\capCleft|=120$ then we can
calculate the size of each disjoint subset: $\left|S\capC^{c}left|=40$,
$\left|S^{c}\capC\left|=140$ (so that $\left|Cleft|=260$) and
$\left|S^{c}\capC^{c}left|=100$.

Choosing an adult at random corresponds to assuming that each adult is
equally likely to be chosen. Then, using the classical interpretation of
probability, equation ([2.1](#x12-19005r2.1)),

$$
\begin{align}
ℙ\left( S \right) & = & \frac{\left| S \left|}{\left| \Omega \left|}=\frac{1 6 0}{4 0 0}=\frac{2}{5} & \text{} \\ ℙ\left( S \cup C \right) & = & \frac{\left| S \cup C \left|}{\left| \Omega \left|}=\frac{3 0 0}{4 0 0}=\frac{3}{4} & \text{} \\ ℙ\left( S \cap C \right) & = & \frac{\left| S \cap C \left|}{\left| \Omega \left|}=\frac{1 2 0}{4 0 0}=\frac{3}{1 0}. & text{}
\end{align}
$$

Now, using the inclusion-exclusion rule, see Corollary
[4](nose2.htm#x10-160224),
$ℙ\left( S \cup C \right)=ℙ\left( S \right)+ℙ\left( C \right)-ℙ\left( S \cap C right)$.
Rearranging,

$$
\begin{align}
ℙ\left( C \right) & = & ℙ\left( S \cup C \right)+ℙ\left( S \cap C \right)-ℙ\left( S \right) & \text{} \\ & = & \frac{3}{4}+\frac{3}{1 0}-\frac{2}{5}=\frac{1 3}{2 0}. & text{}
\end{align}
$$

Now, using the probability of complements, see Corollary
[1](nose2.htm#x10-160141),

$$
\begin{align}
ℙ\left(\left\{ \text{adult doesn’t cycle} \right\}\right)=ℙ\left( C^{c} \right)=1-ℙ\left( C \right)=\frac{7}{2 0}. & & & text{}
\end{align}
$$

In these examples, it was relatively easy to count the number of
outcomes and thus calculate probabilities. In more complex situations,
we need to develop general counting techniques to find the number of
outcomes. This is known as combinatorics.

[1](#fn1x2-bk)[Pierre-Simon Laplace
(1749-1827)](https://en.wikipedia.org/wiki/Pierre-Simon_Laplace)

\

