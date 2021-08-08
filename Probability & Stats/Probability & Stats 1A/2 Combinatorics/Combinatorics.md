# Combinatorics

Combinatorics is the foundation of classical probability theory, providing a formula for the [[1.6 Specifying probabilities]] in terms of the [[1.2 Sample Space|Sample Space]] alone, with no additional knowledge required.

At its foundation is the principle of [[2.1 Principle of a Priori Equal Probabilities]] which **presupposes** that all possible elements of the Sample Space are **equally likely**.

This leads to the simple formula to the formula,

$$
\P(E) = \frac{|E|}{|\Omega|}
$$

for the general probability of a given event. When considering independent events we have the [[2.2 Multiplication Principle]].

The quintessential application is drawing cards from a well-shuffled deck, rolling a dice, etc as seen in [[2.3 Deck of Cards Example]].

## Permutations

A permutation is an **ordered arrangement of objects**. Suppose that $E = \set{\lst e1n}$ is a set and we wish to choose $r$ elements from $E$ and list them in order. How many ways can we do this?

The answer depends on if we allow choosing the same element more than once, if we are sample *with* or *without* replacement.

- Permutations with replacemnt