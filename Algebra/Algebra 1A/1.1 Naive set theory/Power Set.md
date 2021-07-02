## Power Set

For any set $A$ , the **power set**

$$
\mathcal{P}(A) = \set{\text{subsets } B \sub A}
$$

Thus $B \in \mathcal{P}(A) \iff B \subseteq A$ .

For example, if $A = \set{1, 2}$, then $P(A) = \set{∅, \set{1}, \set{2}, \set{1, 2}}$. Note that we always have $∅ \in P(A)$ and $A \in P (A)$ .

### Size of Power Set of Finite Set

If $A$ is finite, then $P ( A )$ is finite and $\left|P ( A )\right| = 2^{\left|A\right|}$ .

#### Proof

To determine a subset of $A$ , we must include or omit each of the elements of $A$ , which requires $\left|A\right|$ binary choices. □

For example, $P ( ∅ ) = \set{ ∅ }$ and $2^{0} = 1$ , while $P ( \set{ 5 } ) = \set{ ∅ , \set{ 5 } }$ and $2^{1} = 2$ .

We can describe a subset of a set $A$ by specifying a property the characterises its elements, i.e.

$$
B = \set{ a \in A : ℙ ( a ) } ,
$$

where $ℙ ( a )$ denotes some statement about “ $a$ ” that is valid in $A$ .

For example, we can define the even integers $E = \set{ x \in ℤ : x\text{ is divisible by 2} }$, but not the red integers $R = \set{ x \in ℤ : x\text{ is red} }$. We can not consider $\set{ x : x\text{ is red} }$ or the set $\set{ x : x\text{ is divisible by 2} }$, without giving a set of things to which the property should apply.