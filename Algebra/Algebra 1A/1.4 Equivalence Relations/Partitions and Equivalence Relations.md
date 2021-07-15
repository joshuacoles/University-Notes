# [[Partition|Partitions]] and [[Equivalence Relation|Equivalence Relations]]

### Partition $\Rightarrow$ Equivalence Relation

If $Q$ is a partition of $A$, then it determines an equivalence relation by

$$
a \sim b \Leftrightarrow q (a) = q (b) .
$$

Proof. See Example [1.33](#x5-8002r33) (e). □

### Partition $\Leftarrow$ Equivalence Relation

Let $\sim$ be an equivalence relation on $A$ . For each $a \in A$ define the **equivalence classes**

$$
\left[ a \right] = \set{ x \in A : x \sim a } .
$$

#### Lemma 1.37.

In this situation, $a \sim b$ if and only if $\left[ a \right] = \left[ b \right]$ .

Proof. ( $\Leftarrow$ ) $a \in \left[ a \right]$ since $a \sim a$ (R), so

$$
\left[ a \right] = \left[ b \right] \Rightarrow a \in \left[ b \right] \Rightarrow a \sim b .
$$

( $\Rightarrow$ ) Now want to show

$$
a \sim b \Rightarrow (x \in \left[ a \right] \Leftrightarrow x \in \left[ b \right] \text{i.e.} x \sim a \Leftrightarrow x \sim b) ,
$$

Now, if $a \sim b$ and $x \sim a$, then $x \sim b$ by (T). On the other hand, if $a \sim b$ and $x \sim b$, then $b \sim a$ by (S) and so $x \sim a$ by (T). □

For example, the relation $\leq$ does not have this property, that is, $a \leq b$ is not equivalent to $\set{ x \in ℝ : x \leq a } = \set{ x \in ℝ : x \leq b }$, which is actually equivalent to $a = b$ .

#### Proposition 1.38.

The collection of equivalence class for an equivalence relation

$$
Q = \set{ \left[ a \right] \in P (A) : a \in A }
$$

is a partition of $A$ .

Proof. For all $a \in A$, we have $a \in \left[ a \right]$ by (R), so each $\left[ a \right] \in Q$ is non-empty and each $a \in A$ is in some $X \in Q$ .

For uniqueness (so that equivalence classes are disjoint or equal), suppose that $a \in \left[ b \right]$ for some other $b \in A$ . But this means that $a \sim b$ and so $\left[ a \right] = \left[ b \right]$ by Lemma [1.37](#x5-8006r37). Thus $\left[ a \right]$ is the only equivalence class containing $a$ and so the equivalence classes form a partition. □

Remark.

Combining Lemmas [1.35](#x5-8004r35) and [1.37](#x5-8006r37), we see that, if $Q$ is a partition of $A$, then the equivalence relation it determines (i.e. $a \sim b$ iff $q (a) = q (b)$ ) has equivalence classes $\left[ a \right] = q (a)$ . Likewise, the partition determined by an equivalence relation has $q (a) = \left[ a \right]$ and so its associated equivalence relation is the one we started with.

Thus the two processes described in this section are mutually inverse and show that a partitions of, or an equivalence relation on, a set are logically equivalent information.