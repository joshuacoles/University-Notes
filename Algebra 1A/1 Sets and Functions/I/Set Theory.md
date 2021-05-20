## Set Theory

#### 1.1 [Naive set theory](http://localhost:5000/moodle.bath.ac.uk/pluginfile.php/1625344/mod_resource/content/13/MA10209-notes/MA10209-web.html#QQ2-5-5)

A **set** is a collection of things, called its **elements**. We write x∈A to mean that x is an element of the set A and x∉A to mean that it isn’t. A set can be specified by writing a list of its elements between curly brackets and . Thus A\={1,2,5} is a set with three elements, which are all numbers. Then, for example, 5∈A, but 4∉A.

Sets with the same elements are considered to be the same, so repeats and reordering the list don’t change the set:

The empty list is allowed, so {} is a set with no elements.

A set is also a ‘thing’ so can be part of another set. For example, B\={{1,2},{3,4,5}} is a set with two elements, both of which are themselves sets. Note that B is different from {1,2,3,4,5}, which is a set with five elements, all of which are numbers. As another example, {2}≠2 and {{2}}≠{2}.

Definition 1.1.For sets A and B,

-   A\=B when they have the same elements, i.e. x∈A⇔x∈B.
-   A is a **subset** of B, denoted A⊆B, if x∈A⇒x∈B.
-   A is **empty** if A has no elements, i.e. x∈A is never true.

Thus A\=B if and only if A⊆B and B⊆A, which is often used in practice.

Lemma 1.2. If A is empty, then A⊆B for any set B.

Proof. Since x∈A is never true, the implication x∈A⇒x∈B holds for any B. □

Corollary 1.3. If A and B are both is empty, then A\=B.

Proof. By Lemma [1.2](http://localhost:5000/moodle.bath.ac.uk/pluginfile.php/1625344/mod_resource/content/13/MA10209-notes/MA10209-webse1#x5-5002r2), A⊆B, because A is empty, and B⊆A, because B is empty. Hence A\=B, as required. □

This means that we can talk about **the** empty set, because Corollary [1.3](http://localhost:5000/moodle.bath.ac.uk/pluginfile.php/1625344/mod_resource/content/13/MA10209-notes/MA10209-webse1#x5-5003r3) says that it is unique. We could just call it {}, but prefer to use the special symbol ∅. Note that the set ∅ is different from the number 0, although ∅ is a set (indeed the unique set) with 0 elements.

Example 1.4. Here are some familiar sets of numbers and their standard names.

-   positive integers ℤ+\={1,2,3,…}.
-   natural numbers (including zero) ℕ0\={0,1,2,…}.
-   integers ℤ\={…,−2,−1,0,1,2,…}.
-   rationals ℚ\={m∕n:m,n∈ℤ with n≠0}, where “:” here means “such that”. Note that m∕n\=p∕q⇔mq\=np.
-   real numbers ℝ (defined in Analysis 1).
-   complex numbers ℂ\={x+iy:x,y∈ℝ}, where i2\=−1, by definition.
    
    Note that
    
    x+iy\=a+ib⇔x\=a and y\=b.

We consider that ℤ+⊆ℕ0⊆ℤ⊆ℚ⊆ℝ⊆ℂ, by identifying m∈ℤ with m∕1∈ℚ and x∈ℝ with x+i0∈ℂ. We leave the embedding ℚ⊆ℝ for Analysis 1 also.

\= Lecture 2 =

Definition 1.5. For any set A, the **power set**

Thus

B∈P(A)⇔B⊆A.

For example, if A\={1,2}, then P(A)\={∅,{1},{2},{1,2}}. Note that we always have ∅∈P(A) and A∈P(A).

Definition 1.6. If A is a finite set, the **size** or **cardinality** of A is the number of elements in A and is written A.

For example, {4,5}\=2 and ∅\=0.

Lemma 1.7. If A is finite, then P(A) is finite and P(A)\=2A.

Proof. To determine a subset of A, we must include or omit each of the elements of A, which requires A binary choices. □

For example, P(∅)\={∅} and 20\=1, while P({5})\={∅,{5}} and 21\=2.

We can describe a subset of a set A by specifying a property the characterises its elements, i.e.

where ℙ(a) denotes some statement about “a” that is valid in A.

For example, we can define the even integers E\={x∈ℤ:x is divisible by 2}, but not the red integers R\={x∈ℤ:x is red}. We can not consider {x:x is red} or the set {x:x is divisible by 2}, without giving a set of things to which the property should apply.

Definition 1.8. Given sets A and B we can form their

-   **union** A∪B\={x: x∈A or x∈B }
-   **intersection** A∩B\={x: x∈A and x∈B }\={x∈A:x∈B}
-   **difference** A\\B\={x∈A:x∉B}

When B⊆A, the difference A\\B is called the **complement** of B (in A). Note that the definition of union strictly breaks the rules above, but we can get away with it because the choice of elements is not unlimited.

Given an indexed collection of sets {Aj:j∈J}, where J is some (non-empty) index set, e.g. J\={1,…,n}, we can form their

-   **union** ⋃j∈JAj\={x:x∈Aj for some j∈J}
-   **intersection** ⋂j∈JAj\={x:x∈Aj for all j∈J}

For example, suppose that A1\={5,6}, A2\={6,7} and A3\={6,8,9}. Then in this case the index set J\={1,2,3} and we have

⋃j∈JAj\=⋃j\=13Aj\={5,6,7,8,9}and⋂j∈JAj\=⋂j\=13Aj\={6}

All these definitions have equivalent logical forms, such as

which should be used to prove basic identities for set operations, such as commutativity A∪B\=B∪A and associativity (A∪B)∪C\=A∪(B∪C). We prove these by showing that the sets have the same elements, e.g.

x∈A∪B⇔x∈A or x∈B⇔x∈B or x∈A⇔x∈B∪A.

Since union is associative and commutative, we have well-defined multiple unions

x∈A1∪⋯∪An⇔x∈A1 or ⋯ or x∈An⇔x∈⋃j\=1nAj

\= Lecture 3 =

Note that similar applies to ∩, replacing “or” by “and”, which is also logically associative and commutative. However A\\B≠B\\A and (A\\B)\\C≠A\\(B\\C), so you must think about the logic, not apply identities automatically. \[ Logic and set operations are studied more in Analysis (Ma10207) and Probability (MA10211). \]

Another way to produce new things from old is to form **ordered pairs, triples or n\-tuples**, denoted by enclosing a finite list in ( and ). Thus

(a,b)\=(x,y)⇔a\=x and b\=y(a,b,c)\=(x,y,z)⇔a\=x, b\=y and c\=z(a1,…,an)\=(x1,…,xn)⇔ai\=xi for i\=1,…,n

For example, (1,2)≠(2,1)≠(2,1,1).

Definition 1.9. **Cartesian products** of sets are defined as follows.

A×B\={(a,b):a∈A,b∈B},A×B×C\={(a,b,c):a∈A,b∈B,c∈C},A1×⋯×An\={(a1,…,an):ai∈Ai for i\=1,…,n}.

**Cartesian powers** of sets are defined as follows.

A2\=A×A,A3\=A×A×A,An\={(a1,…,an):ai∈A for i\=1,…,n}.

For example, if A\={1,3} and B\={4,5}, then A×B\={(1,4),(1,5),(3,4),(3,5)} and A2\={(1,1),(1,3),(3,1),(3,3)}.

For finite sets, A×B\=A⋅B, A×B×C\=A⋅B⋅C, etc. and An\=An. For example,

![No alt text was set. Please request alt text from the person who provided you with this resource.](http://localhost:5000/moodle.bath.ac.uk/pluginfile.php/1625344/mod_resource/content/13/MA10209-notes/figures/pdf/MA10209-web-figure0.svg)

The term “Cartesian” is in honour of the French mathematician and philosopher Descartes, who observed that you can model the plane by ℝ2 and three-dimensional space by ℝ3. You can then model subsets of ℝ2, etc. using equations and inequalities. For example,

-   {(x,y)∈ℝ2:x2+y2\=r2} is the circle radius r centred at (0,0),
-   {(x,y)∈ℝ2:x≥0,y≥0} is the positive quadrant.

![No alt text was set. Please request alt text from the person who provided you with this resource.](http://localhost:5000/moodle.bath.ac.uk/pluginfile.php/1625344/mod_resource/content/13/MA10209-notes/figures/pdf/MA10209-web-figure1.svg)

\= Lecture 4 =