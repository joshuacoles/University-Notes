## Logical Distributive Laws

Given any three statements $P , Q , R$ , the following equivalences hold true.

$$
\begin{align}
P \land (Q \lor R) &\iff (P \land Q) \lor (P \land R) \\
P \lor (Q \land R) &\iff (P \lor Q) \land (P \lor R)
\end{align}
$$

These can be applied to become general distributive

### Proof

It suffices to compare the truth tables. Here is the truth table (with an intermediate step) for $P \land (Q \lor R )$ .

```ad-example
title: Truth Table
collapse:
| $P$ | $Q$ | $R$ | $Q \lor R$ | $P \land (Q \lor R )$ |
| --- | --- | --- | ---------- | --------------------- |
| ✅  | ✅  | ✅  | ✅         | ✅                    |
| ✅  | ✅  | ❌  | ✅         | ✅                    |
| ✅  | ❌  | ✅  | ✅         | ✅                    |
| ✅  | ❌  | ❌  | ❌         | ❌                    |
| ❌  | ✅  | ✅  | ✅         | ❌                    |
| ❌  | ✅  | ❌  | ✅         | ❌                    |
| ❌  | ❌  | ✅  | ✅         | ❌                    |
| ❌  | ❌  | ❌  | ❌         | ❌                    |
```

Here is the truth table (with two intermediate steps) for $(P \land Q ) \lor (P \land R )$ .

```ad-example
title: Truth Table
collapse:
| $P$ | $Q$ | $R$ | $P \land Q$ | $P \land R$ | $(P \land Q ) \lor (P \land R )$ |
| --- | --- | --- | ----------- | ----------- | -------------------------------- |
| ✅  | ✅  | ✅  | ✅          | ✅          | ✅                               |
| ✅  | ✅  | ❌  | ✅          | ❌          | ✅                               |
| ✅  | ❌  | ✅  | ❌          | ✅          | ✅                               |
| ✅  | ❌  | ❌  | ❌          | ❌          | ❌                               |
| ❌  | ✅  | ✅  | ❌          | ❌          | ❌                               |
| ❌  | ✅  | ❌  | ❌          | ❌          | ❌                               |
| ❌  | ❌  | ✅  | ❌          | ❌          | ❌                               |
| ❌  | ❌  | ❌  | ❌          | ❌          | ❌                               |
```

Comparing the last columns, we see that the first equivalence holds true. The second one is proved with the same method, but we omit the details here. □
