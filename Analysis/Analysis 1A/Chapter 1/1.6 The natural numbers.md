# The Natural Numbers

The natural number are the number $1,2,3,\dots$ comprising the set $\N$. As a matter of convention we take $0 \notin \N$ however we define $\N_0 = \N \cup \set{0}$. We will focus mainly on their [[#Inductive Definition]] as this is useful in proofs.

## Inductive Definition

What characterises the natural numbers are the following fundamental properties:

1.  $1$ is a natural number (i.e., $1 \in \N$ ).
2.  Every natural number $n$ has a **successor** $n + 1$ , which is also a natural number (so $\Forall n \in \N : n + 1 \in \N$ ).
3.  If a subset $\Lambda \sub \N$ satisfies $1 \in \Lambda$ and $\Forall n \in \Lambda : n + 1 \in \Lambda$ , then $\Lambda = \N$ .

The last property is the [[Principle of Induction]] and is the basis for various proofs of statements about the natural numbers.
