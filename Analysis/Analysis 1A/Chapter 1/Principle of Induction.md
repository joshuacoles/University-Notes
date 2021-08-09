# Principle of Induction

The Principle of Induction can be used to prove statements normally on the Natural Numbers $\N$ (or anything isomorphic to them). It is done in three steps

1. Given a proposition $P(n)$ we first we define a set $\Lambda$ such that $n \in \Lambda \iff P(n)$.
2. Next we prove a  **base case**, this is the start of out *"ladder"*.
	- Normally this would be $0$ or $1$.
	- That is we prove $1 \in \Lambda$, or equivalently $P(1)$.
3. Finally we prove the **inductive hypothesis**, $n + 1 \in \Lambda \impliedby n \in \Lambda$.
	- This is done by **assuming** that $n$ is in $\Lambda$ and then **proving this implies** $n + 1$ is also in $\Lambda$.

This is similar to the process by which we define the natural numbers in [[1.6 The natural numbers#Inductive Definition]].

## Example

Prove $P(n) : 1 + 2 + \dots + n = \frac{n (n + 1)}{2}$ for all $n \in \N$ .

**Solution.** Let $\Lambda \sub \N$ be the set of all $n \in \N$ such that the $P(n)$ holds true. 

1. Then clearly $1 \in \Lambda$ , as $1 = 1 \cdot 2 / 2$, this is the **base case**.
2. Moreover, assuming $n \in \Lambda$ , then
$$
\begin{align}
1 + 2 + \dots + (n + 1)
&= (1 + \dots  + n) + (n + 1) \\
&= \frac{n (n + 1)}{2} + (n + 1) \tag{by assumption} \\
&= \frac{(n + 1) (n + 2)}{2} \tag{hence $n \in \Lambda$}
\end{align}
$$

So if $n \in \Lambda$, then $n + 1 \in \Lambda$ . By induction, it follows that $\Lambda = \N$ . That is, the formula is true for all $n \in \N$ .
