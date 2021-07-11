Chapter 1

## [Some basic concepts](MA10207-web.html#QQ2-5-4)

Analysis is the theory of limits and the concepts dependent on limits, including derivatives and integrals. In this course, we will see a mathematically rigorous development of the theory. This means that all statements will be accompanied by proofs, based on logical arguments. For this reason, we first discuss the basic elements of logic, followed by other notions that the theory depends on.

### 1.1 [Key logical concepts](MA10207-web.html#QQ2-5-5)

But let’s first clarify a key expression in the preceding paragraph.

Definition 1.

A **statement** (or **proposition**) is a sentence that is either true or false but not both.

Example 2.

The following are statements.

- 7 is an odd integer. (True)
- $2 < 7$ . (True)
- All integers are odd. (False)

But the following is **not** a statement.

- Welcome to the University of Bath!

If we have two statements, we can form other statements (compound statements) from them using the logical connectives ‘and’ and ‘or’. In the following, let $P$ and $Q$ denote two statements. (Here $P$ and $Q$ are place holders that may be replaced by **any** statement.)

Conjunction

The expression $P \wedge Q$ stands for ‘ $P$ and $Q$ ’. This statement is true if both $P$ and $Q$ are true; otherwise it is false.

Disjunction

The expression $P \vee Q$ stands for ‘ $P$ or $Q$ ’. This statement is true if either $P$ or $Q$ or both are true; otherwise it is false.

Remark.

We always use the inclusive or; so $P \vee Q$ means ‘either $P$ or $Q$ **or both**’. This is still the case if we use words instead of symbols; so ‘ $P$ or $Q$ ’ means the same. Even the phrase ‘either $P$ or $Q$ ’ should be interpreted this way. The word ‘either’ is used merely as an aid to parse a sentence.

Example 3.

Consider the following statement.

- All integers are odd, and $2 < 7$ .

This is false, as not all integers are odd. But consider the following.

- All integers are odd, or $2 < 7$ .

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

Given a statement $P$ , the expression $\neg P$ stands for ‘not $P$ ’. This statement is true if $P$ is false and is false if $P$ is true.

Here is the corresponding truth table.

$P$

$\neg P$

true

false

false

true

Implication

Given two statements $P$ and $Q$ , the expression $P \Rightarrow Q$ stands for ‘if $P$ , then $Q$ ’. It has the same truth values as $\neg P \vee Q$ .

Equivalence

The expression $P \Leftrightarrow Q$ stands for ‘ $P \Rightarrow Q$ and $Q \Rightarrow P$ ’. It means that $P$ is true when $Q$ is true and vice versa.

Instead of ‘if $P$ , then $Q$ ’, we sometimes say ‘ $P$ implies $Q$ ’. The statement $P \Leftrightarrow Q$ can be expressed in words by saying ‘ $P$ is equivalent to $Q$ ’ or ‘ $P$ if, and only if, $Q$ ’. A common abbreviation for the latter is ‘ $P$ iff $Q$ ’.

Example 4.

Consider a number $x$ . Then the following are true statements.

- $x > 0 \Rightarrow x \geq 0$ .
- $x > 0 \Leftrightarrow - x < 0$ .

The above concepts have the following truth tables.

$P$

$Q$

$P \Rightarrow Q$

$P \Leftrightarrow Q$

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

### 1.2 [Transformation of logical expressions](MA10207-web.html#QQ2-5-6)

These are laws about how to manipulate complex chains of conjunctions and disjunctions.

Proposition 5 (Distributive laws).

Given any three statements $P , Q , R$ , the following equivalences hold true.

$$
\begin{align}
P\wedge\left( Q \vee R \right) & \Leftrightarrow\left( P \wedge Q \right)\vee\left( P \wedge R \right) & & \\ P\vee\left( Q \wedge R \right) & \Leftrightarrow\left( P \vee Q \right)\wedge\left( P \vee R \right) & &
\end{align}
$$

Proof. It suffices to compare the truth tables. Here is the truth table (with an intermediate step) for $P \wedge \left( Q \vee R \right)$ .

$P$

$Q$

$R$

$Q \vee R$

$P \wedge \left( Q \vee R \right)$

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

Here is the truth table (with two intermediate steps) for $\left( P \wedge Q \right) \vee \left( P \wedge R \right)$ .

$P$

$Q$

$R$

$P \wedge Q$

$P \wedge R$

$\left( P \wedge Q \right) \vee \left( P \wedge R \right)$

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

Proposition 6 (De Morgan’s laws).

Given two statements $P$ and $Q$ , the following equivalences hold true.

$$
\begin{align}
\neg\left( P \vee Q \right) & \Leftrightarrow\negP\wedge\negQ & & \\ \neg\left( P \wedge Q \right) & \Leftrightarrow\negP\vee\negQ & &
\end{align}
$$

Proof. This is proved with the same method as Proposition [5](#x5-6001r5). We omit the details. □

Example 7.

What is the negation of the statement $P \Rightarrow Q$ ?

We first recall that $\neg P \vee Q$ is another way to write $P \Rightarrow Q$ . Then by De Morgan’s law,

$$
\neg \left( \neg P \vee Q \right) \Leftrightarrow \neg \left( \neg P \right) \wedge \neg Q .
$$

But $\neg \left( \neg P \right) \Leftrightarrow P$ . Hence

$$
\neg \left( P \Rightarrow Q \right) \Leftrightarrow P \wedge \neg Q .
$$

That is, $P \wedge \neg Q$ is another way to express $\neg \left( P \Rightarrow Q \right)$ .

Proposition 8 (Contrapositive).

Given two statements $P$ and $Q$ , the implication

$$
P \Rightarrow Q
$$

is equivalent to

$$
\neg Q \Rightarrow \neg P
$$

Proof. We already know that the implication $P \Rightarrow Q$ is equivalent to $\left( \neg P \right) \vee Q$ , which in turn may be written in the form $Q \vee \left( \neg P \right)$ . Now we observe that $Q \Leftrightarrow \neg \left( \neg Q \right)$ , and therefore, we conclude that $Q \vee \left( \neg P \right)$ is equivalent to $\neg \left( \neg Q \right) \vee \left( \neg P \right)$ . Finally, the last statement can be written in the form $\neg Q \Rightarrow \neg P$ . □

### 1.3 [The notation of set theory](MA10207-web.html#QQ2-5-7)

Again we begin with a definition of the sort of object we consider here.

Definition 9.

A **set** is a collection of distinct objects. These objects are called the **elements** of the set.

The order of the elements doesn’t matter. For example, the set $\left\{ 1 , 2 , 3 \right\}$ comprises the numbers $1$ , $2$ , and $3$ , and is exactly the same as $\left\{ 3 , 2 , 1 \right\}$. That is,

$$
\left\{ 1 , 2 , 3 \right\} = \left\{ 3 , 2 , 1 \right\} .
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

The **Cartesian product**, comprising all pairs $\left( a , b \right)$ with one element $a \in A$ and one element $b \in B$.

Finally, here are some specific sets that we will use often.

**Notation**

**Meaning**

$\oslash$

The **empty set** (i.e., the set containing no objects at all).

$ℕ = \left\{ 1 , 2 , 3 , \dots  \right\}$

The set of **natural numbers**.

$ℤ = \left\{ \dots  , - 2 , - 1 , 0 , 1 , 2 , \dots  \right\}$

The set of **integers**.

$ℕ_{0} = \left\{ 0 , 1 , 2 , \dots  \right\}$

The set of non-negative integers.

$ℚ = \left\{p / q : p \in ℤ \text{ and } q \in ℕ\right\}$

The set of **rational numbers** (numbers given as fractions).

$ℝ$

The set of **real numbers** (to be discussed later).

$ℂ$

The set of **complex numbers** (to be discussed even later).

### 1.4 [Quantifiers](MA10207-web.html#QQ2-5-8)

**Quantifiers** are expressions that indicate how a variable is to be interpreted in a logical statement. Sometimes they are expressed by symbols, so that a logical statement can be represented in terms of a formula. We have two such symbols: $\forall$ stands for the phrase ‘for all’, and $\exists$ stands for ‘there exists’. For example, the formula

$$
\forall x : x \in ℝ \Rightarrow x^{2} \geq 0
$$

means

$$
\text{‘For all }x\text{, if }x\text{ is a real number, then }x^{2}\geq 0\text{.’}
$$

The formula

$$
\exists x : x \in ℝ \wedge x^{2} \geq 0
$$

means

$$
\text{‘There exists }x\text{ such that }x\text{ is a real number and }x\geq 0\text{.’}
$$

Both of these are of course true statements. Since most of the time, the variables in such a statement are taken from a specific set, there following usage of the quantifiers is also common:

$$
\forall x \in ℝ : x^{2} \geq 0
$$

(meaning ‘for all real numbers $x$ , the inequality $x^{2} \geq 0$ holds true’); and

$$
\exists x \in ℝ : x^{2} \geq 0
$$

(meaning ‘there exists a real number $x$ such that $x^{2} \geq 0$ ).

Example 10.

Is this a true statement:

$$
\exists x \in ℤ \forall y \in ℕ : x < y ?
$$

Yes, this is a true statement, because there does a exist an integer $x$ that is smaller than any natural number $y$ (e.g. $x = - 1$ will do).

We have seen De Morgan’s laws in Proposition [6](#x5-6003r6), which tell us how conjunction and disjunction behave under negation. We have a similar law for quantifiers. In the following, we write $P \left( x \right)$ for a statement depending on a variable $x$ .

Proposition 11.

1.  The statements

    $$
    \neg \left( \forall x : P \left( x \right) \right) \text{and} \exists x : \neg P \left( x \right)
    $$

    are equivalent.

2.  The statements

    $$
    \neg \left( \exists x : P \left( x \right) \right) \text{and} \forall x : \neg P \left( x \right)
    $$

    are equivalent.

This proposition should be intuitively clear. It is not proved here, because it belongs to the theory of logic rather than analysis.

Example 12.

We have seen in Example [10](#x5-8002r10) that

$$
\exists x \in ℤ \forall y \in ℕ : x < y .
$$

Therefore, the negation of this statement, which is

$$
\forall x \in ℤ \exists y \in ℕ : x \geq y ,
$$

is **not** true.

### 1.5 [Functions](MA10207-web.html#QQ2-5-9)

A question that we study a lot in analysis is how one varying quantity depends on another. The following concepts formalises the idea of quantities depending on one another.

Definition 13.

Let $A$ and $B$ be sets. A **function** from $A$ to $B$ is a rule that assigns to each element of $A$ a unique element of $B$ . We write $f : A \rightarrow B$ to indicate that the symbol $f$ denotes a function from $A$ to $B$ . Given any $a \in A$ , we then write $f \left( a \right)$ for the element from $B$ assigned to $a$ by the function. The set $A$ is called the **domain** of $f$ and $B$ is called the **codomain** or **target set** of $f$ .

So in order to specify a function, we need three things: a domain, a codomain, and a rule.

Example 14.

We may define a function from $ℝ$ to $ℝ$ by assigning to every real number $x$ its square. This gives a function $f : ℝ \rightarrow ℝ$ with the property that $f \left( x \right) = x^{2}$ for all $x \in ℝ$ .

As the example shows, an equation such as $f \left( x \right) = x^{2}$ can be used to describe a specific function once the domain and codomain are known. Another way to refer to the same rule is $x \rightarrow tail x^{2}$ . The function should not be confused with the expression $x^{2}$ , however. In order to obtain a well-defined function, we need to say what the domain and the codomain are and we need to specify the rule. Even so, you will sometimes see phrases such as ‘the function $f \left( x \right) = x^{2}$ ’. This wording is acceptable when the context leaves no doubt about the domain and codomain, but should not be used otherwise.

Not all functions are given by such a convenient formula.

Example 15.

We may define a function $f : ℝ \rightarrow ℚ$ as follows: if $x \in ℝ$ is a rational number, then $f \left( x \right) = \frac{1}{2}$ . Otherwise $f \left( x \right) = 0$ . Thus

$$
\begin{align}
f \left( x \right) = \left\{\begin{matrix} 1/2 & \text{if }x\inℚ\text{}, \\ 0 & \text{otherwise}. \end{matrix}\right
\end{align}
$$

### 1.6 [The natural numbers](MA10207-web.html#QQ2-5-10)

These are the numbers $1 , 2 , 3 , \dots$ , comprising the set $ℕ$ that we have already seen. It is assumed here that you have at least an intuitive understanding of the natural numbers. Therefore, this discussion is very brief and serves mostly to highlight one aspect of $ℕ$ that will be important later.

What characterises the natural numbers are the following fundamental properties:

1.  $1$ is a natural number (i.e., $1 \in ℕ$ ).
2.  Every natural number $n$ has a successor $n + 1$ , which is also a natural number (so $\forall n \in ℕ : n + 1 \in ℕ$ ).
3.  If a subset $\Lambda \subseteq ℕ$ satisfies $1 \in \Lambda$ and $\forall n \in \Lambda : n + 1 \in \Lambda$ , then $\Lambda = ℕ$ .

The last property is the principle of induction and is the basis for various proofs of statements about the natural numbers.

Example 16.

Prove that $1 + 2 + \dots  + n = n \left( n + 1 \right) / 2$ for all $n \in ℕ$ .

**Solution.** Let $\Lambda \subseteq ℕ$ be the set of all $n \in ℕ$ such that the formula holds true. Then clearly $1 \in \Lambda$ , as $1 = 1 \cdot 2 / 2$ .

Moreover, if $n \in \Lambda$ , then

$$
\begin{align}
\begin{matrix}1+2+\dots +\left( n + 1 \right) & =\left( 1 + \dots  + n \right)+\left( n + 1 \right) \\ & =\frac{n \left( n + 1 \right)}{2}+\left( n + 1 \right) \\ & =\frac{\left( n + 1 \right) \left( n + 2 \right)}{2}.\end{matrix} &
\end{align}
$$

So if $n \in \Lambda$ , then $n + 1 \in \Lambda$ . By induction, it follows that $\Lambda = ℕ$ . That is, the formula is true for all $n \in ℕ$ .