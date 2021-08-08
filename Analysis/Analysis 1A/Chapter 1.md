Chapter 1

# Some basic concepts

Analysis is the theory of limits and the concepts dependent on limits, including derivatives and integrals. In this course, we will see a mathematically rigorous development of the theory. This means that all statements will be accompanied by proofs, based on logical arguments. For this reason, we first discuss the basic elements of logic, followed by other notions that the theory depends on.

## 1.1 Key logical concepts

But let’s first clarify a key expression in the preceding paragraph.

### Definition 1

A **statement** (or **proposition**) is a sentence that is either true or false but not both.

### Example 2

The following are statements.

*   7 is an odd integer. (True)
*   $2 < 7$ . (True)
*   All integers are odd. (False)

But the following is **not** a statement.

*   Welcome to the University of Bath!

If we have two statements, we can form other statements (compound statements) from them using the logical connectives ‘and’ and ‘or’. In the following, let $P$ and $Q$ denote two statements. (Here $P$ and $Q$ are place holders that may be replaced by **any** statement.)

Conjunction

The expression $P \wedge Q$ stands for ‘ $P$ and $Q$ ’. This statement is true if both $P$ and $Q$ are true; otherwise it is false.

Disjunction

The expression $P \vee Q$ stands for ‘ $P$ or $Q$ ’. This statement is true if either $P$ or $Q$ or both are true; otherwise it is false.

Remark.

We always use the inclusive or; so $P \vee Q$ means ‘either $P$ or $Q$ **or both**’. This is still the case if we use words instead of symbols; so ‘ $P$ or $Q$ ’ means the same. Even the phrase ‘either $P$ or $Q$ ’ should be interpreted this way. The word ‘either’ is used merely as an aid to parse a sentence.

### Example 3

Consider the following statement.

*   All integers are odd, and $2 < 7$ .

This is false, as not all integers are odd. But consider the following.

*   All integers are odd, or $2 < 7$ .

This statement is true, as $2 < 7$ .

We can use a **truth table** to demonstrate the truth values of a compound statement.

$P$

$Q$

$P \wedge Q$

$P \vee Q$

true

true

true

true

true

false

false

true

false

true

false

true

false

false

false

false

Negation

Given a statement $P$ , the expression $\neg  P$ stands for ‘not $P$ ’. This statement is true if $P$ is false and is false if $P$ is true.

Here is the corresponding truth table.

$P$

$\neg  P$

true

false

false

true

Implication

Given two statements $P$ and $Q$ , the expression $P \implies Q$ stands for ‘if $P$ , then $Q$ ’. It has the same truth values as $\neg  P \vee Q$ .

Equivalence

The expression $P \iff Q$ stands for ‘ $P \implies Q$ and $Q \implies P$ ’. It means that $P$ is true when $Q$ is true and vice versa.

Instead of ‘if $P$ , then $Q$ ’, we sometimes say ‘ $P$ implies $Q$ ’. The statement $P \iff Q$ can be expressed in words by saying ‘ $P$ is equivalent to $Q$ ’ or ‘ $P$ if, and only if, $Q$ ’. A common abbreviation for the latter is ‘ $P$ iff $Q$ ’.

### Example 4

Consider a number $x$ . Then the following are true statements.

*   $x > 0 \implies x \geq 0$ .
*   $x > 0 \iff - x < 0$ .

The above concepts have the following truth tables.

$P$

$Q$

$P \implies Q$

$P \iff Q$

true

true

true

true

true

false

false

false

false

true

true

false

false

false

true

true

## 1.2 Transformation of logical expressions

These are laws about how to manipulate complex chains of conjunctions and disjunctions.

### Proposition 5(Distributive laws).

Given any three statements $P , Q , R$ , the following equivalences hold true.

$$
\begin{align}
P\wedge(Q \vee R ) \iff(P \wedge Q )\vee(P \wedge R ) \\ P\vee(Q \wedge R ) \iff(P \vee Q )\wedge(P \vee R ) &
\end{align}
$$

#### Proof
 It suffices to compare the truth tables. Here is the truth table (with an intermediate step) for $P \wedge (Q \vee R )$ .

$P$

$Q$

$R$

$Q \vee R$

$P \wedge (Q \vee R )$

true

true

true

true

true

true

true

false

true

true

true

false

true

true

true

true

false

false

false

false

false

true

true

true

false

false

true

false

true

false

false

false

true

true

false

false

false

false

false

false

Here is the truth table (with two intermediate steps) for $(P \wedge Q ) \vee (P \wedge R )$ .

$P$

$Q$

$R$

$P \wedge Q$

$P \wedge R$

$(P \wedge Q ) \vee (P \wedge R )$

true

true

true

true

true

true

true

true

false

true

false

true

true

false

true

false

true

true

true

false

false

false

false

false

false

true

true

false

false

false

false

true

false

false

false

false

false

false

true

false

false

false

false

false

false

false

false

false

Comparing the last columns, we see that the first equivalence holds true. The second one is proved with the same method, but we omit the details here. □

### Proposition 6(De Morgan’s laws).

Given two statements $P$ and $Q$ , the following equivalences hold true.

$$
\begin{align}
\neg (P \vee Q ) \iff\neg P\wedge\neg Q \\ \neg (P \wedge Q ) \iff\neg P\vee\neg Q &
\end{align}
$$

#### Proof
 This is proved with the same method as Proposition 5. We omit the details. □

### Example 7

What is the negation of the statement $P \implies Q$ ?

We first recall that $\neg  P \vee Q$ is another way to write $P \implies Q$ . Then by De Morgan’s law,

$$
\neg  (\neg  P \vee Q ) \iff \neg  (\neg  P ) \wedge \neg  Q .
$$

But $\neg  (\neg  P ) \iff P$ . Hence

$$
\neg  (P \implies Q ) \iff P \wedge \neg  Q .
$$

That is, $P \wedge \neg  Q$ is another way to express $\neg  (P \implies Q )$ .

### Proposition 8(Contrapositive).

Given two statements $P$ and $Q$ , the implication

$$
P \implies Q
$$

is equivalent to

$$
\neg  Q \implies \neg  P
$$

#### Proof
 We already know that the implication $P \implies Q$ is equivalent to $(\neg  P ) \vee Q$ , which in turn may be written in the form $Q \vee (\neg  P )$ . Now we observe that $Q \iff \neg  (\neg  Q )$ , and therefore, we conclude that $Q \vee (\neg  P )$ is equivalent to $\neg  (\neg  Q ) \vee (\neg  P )$ . Finally, the last statement can be written in the form $\neg  Q \implies \neg  P$ . □

## 1.3 The notation of set theory

Again we begin with a definition of the sort of object we consider here.

### Definition 9

A **set** is a collection of distinct objects. These objects are called the **elements** of the set.

The order of the elements doesn’t matter. For example, the set $\{ 1 , 2 , 3 \}$ comprises the numbers $1$ , $2$ , and $3$ , and is exactly the same as $\{ 3 , 2 , 1 \}$. That is,

$$
\{ 1 , 2 , 3 \} = \{ 3 , 2 , 1 \} .
$$

The following is some notation that we use in connection with sets. First we have some statements related to sets.

**Notation**

**Meaning**

$x \in A$

$x$ is an element of the set $A$.

$x \notin A$

$x$ is not an element of the set $A$.

$A \subseteq B$

$A$ is a **subset** of another set $B$; i.e., every element of $A$ is also an element of $B$.

Here is some notation related to forming new sets from two given sets $A$ and $B$ .

**Notation**

**Meaning**

$A \cap B$

The **intersection** of $A$ and $B$ (i.e., the set containing all objects that are elements of $A$ and of $B$).

$A \cup B$

The **union** of $A$ and $B$ (i.e., the set containing all objects that are elements of $A$ or of $B$).

$A \backslash B$

The **set difference** (i.e., the set of all elements of $A$ that are not elements of $B$).

$A \times B$

The **Cartesian product**, comprising all pairs $(a , b )$ with one element $a \in A$ and one element $b \in B$.

Finally, here are some specific sets that we will use often.

**Notation**

**Meaning**

$\oslash$

The **empty set** (i.e., the set containing no objects at all).

$\N = \{ 1 , 2 , 3 , \dots  \}$

The set of **natural numbers**.

$\Z = \{ \dots  , - 2 , - 1 , 0 , 1 , 2 , \dots  \}$

The set of **integers**.

$\N_{0} = \{ 0 , 1 , 2 , \dots  \}$

The set of non-negative integers.

$\Q = \{p / q : p \in \Z \text{ and } q \in \N\}$

The set of **rational numbers** (numbers given as fractions).

$\R$

The set of **real numbers** (to be discussed later).

$\C$

The set of **complex numbers** (to be discussed even later).

## 1.4 Quantifiers

**Quantifiers** are expressions that indicate how a variable is to be interpreted in a logical statement. Sometimes they are expressed by symbols, so that a logical statement can be represented in terms of a formula. We have two such symbols: $\forall$ stands for the phrase ‘for all’, and $\exists$ stands for ‘there exists’. For example, the formula

$$
\forall x : x \in \R \implies x^{2} \geq 0
$$

means

$$
\text{‘For all }x\text{, if }x\text{ is a real number, then }x^{2}\geq 0\text{.’}
$$

The formula

$$
\exists x : x \in \R \wedge x^{2} \geq 0
$$

means

$$
\text{‘There exists }x\text{ such that }x\text{ is a real number and }x\geq 0\text{.’}
$$

Both of these are of course true statements. Since most of the time, the variables in such a statement are taken from a specific set, there following usage of the quantifiers is also common:

$$
\forall x \in \R : x^{2} \geq 0
$$

(meaning ‘for all real numbers $x$ , the inequality $x^{2} \geq 0$ holds true’); and

$$
\exists x \in \R : x^{2} \geq 0
$$

(meaning ‘there exists a real number $x$ such that $x^{2} \geq 0$ ).

### Example 1.

Is this a true statement:

$$
\exists x \in \Z \forall y \in \N : x < y ?
$$

Yes, this is a true statement, because there does a exist an integer $x$ that is smaller than any natural number $y$ (e.g. $x = - 1$ will do).

We have seen De Morgan’s laws in Proposition 6, which tell us how conjunction and disjunction behave under negation. We have a similar law for quantifiers. In the following, we write $P (x )$ for a statement depending on a variable $x$ .

### Proposition 1.

1.  The statements

    $$
    \neg  (\forall x : P (x ) ) \text{and} \exists x : \neg  P (x )
    $$

    are equivalent.

2.  The statements

    $$
    \neg  (\exists x : P (x ) ) \text{and} \forall x : \neg  P (x )
    $$

    are equivalent.

This proposition should be intuitively clear. It is not proved here, because it belongs to the theory of logic rather than analysis.

### Example 1.

We have seen in Example 10 that

$$
\exists x \in \Z \forall y \in \N : x < y .
$$

Therefore, the negation of this statement, which is

$$
\forall x \in \Z \exists y \in \N : x \geq y ,
$$

is **not** true.

## 1.5 Functions

A question that we study a lot in analysis is how one varying quantity depends on another. The following concepts formalises the idea of quantities depending on one another.

### Definition 1.

Let $A$ and $B$ be sets. A **function** from $A$ to $B$ is a rule that assigns to each element of $A$ a unique element of $B$ . We write $f : A arrow B$ to indicate that the symbol $f$ denotes a function from $A$ to $B$ . Given any $a \in A$ , we then write $f (a )$ for the element from $B$ assigned to $a$ by the function. The set $A$ is called the **domain** of $f$ and $B$ is called the **codomain** or **target set** of $f$ .

So in order to specify a function, we need three things: a domain, a codomain, and a rule.

### Example 1.

We may define a function from $\R$ to $\R$ by assigning to every real number $x$ its square. This gives a function $f : \R arrow \R$ with the property that $f (x ) = x^{2}$ for all $x \in \R$ .

As the example shows, an equation such as $f (x ) = x^{2}$ can be used to describe a specific function once the domain and codomain are known. Another way to refer to the same rule is $x arrow tail x^{2}$ . The function should not be confused with the expression $x^{2}$ , however. In order to obtain a well-defined function, we need to say what the domain and the codomain are and we need to specify the rule. Even so, you will sometimes see phrases such as ‘the function $f (x ) = x^{2}$ ’. This wording is acceptable when the context leaves no doubt about the domain and codomain, but should not be used otherwise.

Not all functions are given by such a convenient formula.

### Example 1.

We may define a function $f : \R arrow \Q$ as follows: if $x \in \R$ is a rational number, then $f (x ) = \frac{1}{2}$ . Otherwise $f (x ) = 0$ . Thus

$$
\begin{align}
f (x ) = \{\begin{matrix} 1/2 \text{if }x\in\Q, \\ 0 \text{otherwise}. \end{matrix}
\end{align}
$$

## 1.6 The natural numbers

These are the numbers $1 , 2 , 3 , \dots$ , comprising the set $\N$ that we have already seen. It is assumed here that you have at least an intuitive understanding of the natural numbers. Therefore, this discussion is very brief and serves mostly to highlight one aspect of $\N$ that will be important later.

What characterises the natural numbers are the following fundamental properties:

1.  $1$ is a natural number (i.e., $1 \in \N$ ).
2.  Every natural number $n$ has a successor $n + 1$ , which is also a natural number (so $\forall n \in \N : n + 1 \in \N$ ).
3.  If a subset $\Lambda \subseteq \N$ satisfies $1 \in \Lambda$ and $\forall n \in \Lambda : n + 1 \in \Lambda$ , then $\Lambda = \N$ .

The last property is the principle of induction and is the basis for various proofs of statements about the natural numbers.

### Example 1.

Prove that $1 + 2 + \dots  + n = n (n + 1 ) / 2$ for all $n \in \N$ .

**Solution.** Let $\Lambda \subseteq \N$ be the set of all $n \in \N$ such that the formula holds true. Then clearly $1 \in \Lambda$ , as $1 = 1 \cdot 2 / 2$ .

Moreover, if $n \in \Lambda$ , then

$$
\begin{align}
\begin{matrix}1+2+\dots +(n + 1 ) &=(1 + \dots  + n )+(n + 1 ) \\ &=\frac{n (n + 1 )}{2}+(n + 1 ) \\ &=\frac{(n + 1 ) (n + 2 )}{2}.\end{matrix} &
\end{align}
$$

So if $n \in \Lambda$ , then $n + 1 \in \Lambda$ . By induction, it follows that $\Lambda = \N$ . That is, the formula is true for all $n \in \N$ .
