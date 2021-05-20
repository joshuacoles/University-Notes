# Equivalence Relations

As for functions, a relation ∼ on a set A (such as ≤ of ℝ) can be characterised by its graph, that is, {(a,b)∈A×A:a∼b}. In other words, two relations on the same set A are equal if and only if their graphs are equal (as subsets of A×A).

## E1 [[Equivalence Relation]]

Let $\sim$ be a relation on a set $A$. It is an [[Equivalence Relation]] iff it is,

1. **Reflexive**, $\Forall a \in A : a \sim a$
2. **Symmetric**: $\Forall a, b \in A: a \sim b \implies b \sim a$.
3. **Transitive**: $\forall a, b, c : a \sim b \land b \sim c \implies a \sim c$.

### Examples

| Relation                          | Reflexive | Symmetric | Transitive |
| --------------------------------- | --------- | --------- | ---------- |
| Set Equality                      | Yes       | Yes       | Yes        |
| $\le$ on $\R$                     | Yes       | **No**    | Yes        |
| Overlap of non-empty subsets[^1]  | Yes       | Yes       | **No**     | 
| Cardinality #todo link            | Yes       | Yes       | Yes        |
| Equality through function $f$[^2] | Yes       | Yes       | Yes        |

[^1]: For a given set $A$, define the non-empty subsets as $S = \mathcal{P}(A) \setminus \set{\varnothing}$. $X \sim Y \iff X \cap Y \ne \varnothing$. We remove the empty set as else $\varnothing \nsim \varnothing$, breaking reflexivity, among other things.

[^2]: Let $f : A \to B$, $x \sim y \iff f(x) = f(y)$. This can be thought of equality "pulled back" from $B$.

## E2 Set Partition

A [[Partition]] of a set $A$ is a collection of non-empty subsets, $Q \sub \mathcal{P}(A) \setminus \set{∅}$, such that for all $a \in A$ there is a unique $X \in Q$ such that $x \in X$, given as:

$$
\Forall a \in A : \Exists_! X \in Q \st x \in X
$$

> Using the $\Exists_!$ notation to read, there exists a unique.

This is equivalent to saying $Q$ is a collection of disjoint subsets covering $A$,

$$
\bigcup_{X \in Q} X = A \land \bigcap_{X \in Q} X = \varnothing
$$

For example, if $A = \set{1,2,3,4,5}$, then

- $Q = \set{\set{1,3,5},\set{2,4}}$ is a partition of $A$,
- But $Q = \set{\set{1,2},\set{3,4}}$ is not
- Nor is $Q=\set{\set{1,2},\set{2,3},\set{3,4},\set{4,5}}$.


### [[Partition Function]]

We define the function $q : A \to Q$ for a given [[Partition]] $Q$ of the set $A$ such that,

$$
\Forall a \in A : a \in q(a) ~\text{uniquely}
$$

## E3 Set Partition Equivalence Relation 

If $Q$ is a [[Partition]] of $A$, then it determines an equivalence relation equality pulled back through the [[Partition Function]], ie

$$
a \sim b \iff q(a) =q(b).
$$

## E4 [[Equivalence Classes]]

Let $\sim$ be an [[Equivalence Relation]] on $A$. For each $a \in A$ define the **Equivalence Classes**,

$$
[a] = \set{x \in A \mathrel| x \sim A}
$$

This leads to the statement,

$$
a \sim b \iff [a] = [b]
$$

> #todo cf. Lemma 1.37

For example, the relation $\le$ does not have this property, that is, $a \le b$ is not equivalent to $\set{x \in \R : x \le a} = \set{x \in \R : x \le b}$ (this in fact being equivalent to $a = b$).

### Collection of Equivalence Classes

The collection of equivalence class for an equivalence relation

$$
Q = \set{[a] \in \mathcal{P}(A) \mathrel| a \in A}
$$

is a [[Partition]] of $A$.

#### Proof

For all a∈A, we have a∈\[a\] by (R), so each \[a\]∈Q is non-empty and each a∈A is in some X∈Q.

For uniqueness (so that equivalence classes are disjoint or equal), suppose that a∈\[b\] for some other b∈A. But this means that a∼b and so \[a\]\=\[b\] by Lemma 1.37. Thus \[a\] is the only equivalence class containing a and so the equivalence classes form a partition. □

Remark.Combining Lemmas [1.35](http://localhost:5000/moodle.bath.ac.uk/pluginfile.php/1625344/mod_resource/content/13/MA10209-notes/MA10209-webse1#x5-8004r35) and [1.37](http://localhost:5000/moodle.bath.ac.uk/pluginfile.php/1625344/mod_resource/content/13/MA10209-notes/MA10209-webse1#x5-8006r37), we see that, if Q is a partition of A, then the equivalence relation it determines (i.e. a∼b iff q(a)\=q(b)) has equivalence classes \[a\]\=q(a). Likewise, the partition determined by an equivalence relation has q(a)\=\[a\] and so its associated equivalence relation is the one we started with.

Thus the two processes described in this section are mutually inverse and show that a partitions of, or an equivalence relation on, a set are logically equivalent information.

Example 1.39. For any set A, there is an equivalence relation on P(A) given by ≅ as in Def. [1.26](http://localhost:5000/moodle.bath.ac.uk/pluginfile.php/1625344/mod_resource/content/13/MA10209-notes/MA10209-webse1#x5-7004r26). Equivalence classes classes consist of sets of the same size. Conceptually, ≅ is an equivalence relation on sets, but not formally, because there is no set of all sets.

Example 1.40. Let f:A→A be a bijection from a finite set A to itself (also called a ‘permutation’ of A). We can then define fn:A→A, for any n∈ℤ, by

fn\=f∘…∘f⏟n timesn\>0IdAn\=0f−1∘…∘f−1⏟−n timesn<0

One can check the power laws

fn∘fm\=fn+m and

(fn)m\=fnm, for all

n,m∈ℤ.

Consider the relation on A given by a∼b iff a\=fn(b) for some n∈ℤ. We can check this is an equivalence relation:

(R)a\=f0(a),(S)a\=fn(b)⇒b\=f−n(a),(T)a\=fn(b)andb\=fm(c)⇒a\=fn+m(c).

The equivalence classes are called ‘orbits’ of f and these are finite, as A is finite. This helps give a simple picture of the action of f, because it must ‘cycle’ the elements in each orbit, that is,

Note that the cycle must return to the beginning, because

f is injective and every other element in it has a predecessor. i.e.

ak\=f(ak−1) unless

k\=1.