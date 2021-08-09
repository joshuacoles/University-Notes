# Order axioms

Building from the [[Field Axioms]] we have the following axioms to describe how the Real Numbers are ordered,

10. For any $a , b \in \R$ , either $a \leq b$ or $b \leq a$ .

11. For all $a , b \in \R$ , if $a \leq b$ and $b \leq a$ , then $a = b$ .

12. For all $a , b , c \in \R$ , if $a \leq b$ and $b \leq c$ , then $a \leq c$ .

13. For all $a , b , c \in \R$ , if $a \leq b$ , then $a + c \leq b + c$ .

14. For all $a , b , c \in \R$ , if $a \leq b$ and $c \geq 0$ , then $a c \leq b c$ .

In addition to the order relation $\leq$ , we have $<$ , which is defined as follows: for $a , b \in \R$ , we write $a < b$ if $a \leq b$ and $a \neq b$ . We further use the symbols $\geq$ and $>$ when the numbers occur in reverse order. So $a \geq b$ means the same thing as $b \leq a$ and $a > b$ means $b < a$ .

Here are a few consequences of the order axioms.

## Propositions

1.  For all $a , b \in \R$ ,
    - if $a \geq 0$ and $b \geq 0$ , then $a b \geq 0$ ;
    - if $a \leq 0$ and $b \leq 0$ , then $a b \geq 0$ ;
    - if $a \leq 0$ and $b \geq 0$ , then $a b \leq 0$ .
2.  For all $a , b , c , d \in \R$ , if $a \leq b$ and $c \leq d$ , then $a + c \leq b + d$ .
3.  For all $a \in \R$ , if $a \geq 0$ , then $- a \leq 0$ .
4.  $a^{2} \geq 0$ for all $a \in \R$ .
5.  $0 < 1$ .
6.  For all $a \in \R$ , if $a > 0$ , then $a^{- 1} > 0$ , and if $a < 0$ , then $a^{- 1} < 0$ .
7.  For all $a , b , c \in \R$ , if $a \leq b$ and $c \leq 0$ , then $a c \geq b c$ .

### Proof

(i) If $a \geq 0$ and $b \geq 0$ , then (A14) implies that

$$
0 = 0 \cdot b \leq a \cdot b = a b .
$$

The other two cases are covered by the exercises.

(ii) We use (A13) twice, together with (A2), to conclude that

$$
a + c \leq b + c = c + b \leq d + b = b + d .
$$

Now (A12) implies that $a + c \leq b + d$ .

(iii) By (A13), (A3), and (A4), if $a \geq 0$ , then

$$
- a = 0 + (- a ) \leq a + (- a ) = 0.
$$

(iv) If $a \geq 0$ , then this follows from the first statement in (i). Otherwise we use (A10) to conclude that $a \leq 0$ , and then the desired inequality follows from the second statement in (i).

(v) Because $1 = 1^{2}$ by (A7), it follows from (iv) that $0 \leq 1$ . But (A7) also says that $1 \neq 0$ , so $0 < 1$ .

(vi) If we had the inequalities $a > 0$ and $a^{- 1} < 0$ or vice versa, then (i) would tell us that

$$
1 = a a^{- 1} \leq 0 ,
$$

which would contradict (v). So this is impossible.

Thus if $a > 0$ , then $a^{- 1} </ 0$ , and (A10) tells us that $a^{- 1} \geq 0$ . But $a^{- 1} \neq 0$ , because $a \cdot 0 = 0 \neq 1$ by Proposition 17.(i) and (A7). Hence $a^{- 1} > 0$ .

If $a < 0$ , we use the same arguments to conclude that $a^{- 1} < 0$ .

(vii) This is an exercise.