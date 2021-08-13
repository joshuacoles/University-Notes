# Introduction to Logic

For our purposes logic is comprised of,

1. Statements / Propositions which are either true or false
2. Operators which form new statements from existing ones
3. Quantifiers which make statements about the truth value of propositions on sets, or the existence of values where a given proposition holds.

As this is only an introduction we will not talk about the minutia of Logic which veers very much into the Philosophy of Maths territory. However we will mention that points (1) → (2) form the basis of [Propositional Logic](https://en.wikipedia.org/wiki/Propositional_calculus) where as (3) brings us into [First Order Logic](https://en.wikipedia.org/wiki/First-order_logic).

## Definition 1: Statement / Proposition

A **Statement** (or **Proposition**) is a sentence that is either true or false but not both.

```ad-note
Note here we assume the [Principle of Bivalence](https://en.wikipedia.org/wiki/Principle_of_bivalence) and the [Law of the Excluded Middle](https://en.wikipedia.org/wiki/Law_of_excluded_middle). These will be expanded on when we study Logic in more detail.
```

### Examples

The following are statements.

- 7 is an odd integer. (True)
- $2 < 7$ . (True)
- All integers are odd. (False)

But the following is **not** a statement.

- Welcome to the University of Bath!

---

## Operators

Operators combine statements to form new ones, we will focus on,

- Conjunction $P \land Q$
- Disjunction $P \lor Q$
- Negation $\neg P$
- Implication $P \implies Q$ (alternatively written as $Q \impliedby P$)
- Equivalence $P \iff Q$

In the following, as with all general logic, let $P$ and $Q$ denote any two statements.

### Conjunction

The expression $P \land Q$ stands for ‘ $P$ and $Q$ ’. This statement is true if both $P$ and $Q$ are true; otherwise it is false.

### Disjunction

The expression $P \lor Q$ stands for ‘ $P$ or $Q$ ’. This statement is true if either $P$ or $Q$ or both are true; otherwise it is false.

```ad-note
We always use the **inclusive or** (not *xor*) so $P \lor Q$ means 'either $P$ or $Q$ **or both**'.
```

```ad-example
Consider the following statement.

- All integers are odd, and $2 < 7$ .

This is false, as not all integers are odd. But consider the following.

- All integers are odd, or $2 < 7$ .

This statement is true, as $2 < 7$ .

We can use a **truth table** to demonstrate the truth values of a compound statement.

- Truth Table: $P$, $Q$, $P \land Q$, $P \lor Q$ #todo
```

### Negation

Given a statement $P$ , the expression $\neg  P$ stands for 'not $P$'. This statement is true if $P$ is false and is false if $P$ is true.

Here is the corresponding truth table.

- $P$, $\neg P$ #todo

### Implication

Given two statements $P$ and $Q$ , the expression $P \implies Q$ stands for ‘if $P$ , then $Q$ ’. It has the same truth values as $\neg  P \lor Q$ .

- Truth table #todo

### Equivalence

The expression $P \iff Q$ stands for '$P \implies Q$ and $Q \implies P$'. It means that $P$ is true when $Q$ is true and vice versa.

Instead of 'if $P$ , then $Q$', we sometimes say '$P$ implies $Q$'. The statement $P \iff Q$ can be expressed in words by saying '$P$ is equivalent to $Q$' or '$P$ if, and only if, $Q$'. A common abbreviation for the latter is ‘ $P$ *iff* $Q$ ’.

```ad-example
Consider a number $x$ . Then the following are true statements.

- $x > 0 \implies x \geq 0$ .
- $x > 0 \iff - x < 0$ .

The above concepts have the following truth tables.

- $P$, $Q$, $P \implies Q$, $P \iff Q$ #todo
```
