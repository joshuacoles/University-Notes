## Functions

#### 1.2 [Functions](http://localhost:5000/moodle.bath.ac.uk/pluginfile.php/1625344/mod_resource/content/13/MA10209-notes/MA10209-web.html#QQ2-5-6)

Definition 1.10. Given sets A and B, a **function** or **map** f:A→B is a rule which assigns to every element a∈A a unique element f(a)∈B. We call A the **domain** of f and B the **codomain** of f.

Two functions f,g:A→B are deemed equal when f(a)\=g(a) for all a∈A. Note: functions with different domains or different codomains would not be considered equal, even if determined by the same rule. For example, the rule f(x)\=x2 determines different functions f:ℚ→ℚ, f:ℤ→ℚ, f:ℤ→ℤ.

Definition 1.11. Given a function f:A→B, the **graph** of f is the subset of A×B given by

Graph(f)\={(a,b)∈A×B:b\=f(a)}

![No alt text was set. Please request alt text from the person who provided you with this resource.](http://localhost:5000/moodle.bath.ac.uk/pluginfile.php/1625344/mod_resource/content/13/MA10209-notes/figures/pdf/MA10209-web-figure2.svg)

Note: a subset G⊆A×B is equal to Graph(f) for some, necessarily unique, function f if and only if it has the following ‘graph property’:

for each a∈A there is a unique b∈B such that (a,b)∈G.

(1)

Functions are also things, so can be elements of sets. For sets A,B we write

which can also be identified with the following subset of P(A×B):

{G⊆A×B: G has the graph property}.

If A and B are finite sets, then because a function A→B is determined by A choices, each from B options. For example, a function f:{1,2,3}→{4,5} is determined by writing, e.g. where ↦ is read as “maps to”, so that a↦f(a).

Example 1.12. If B\={0,1}, then notice that BA\=2A\=P(A). This is not a coincidence, because we can identify P(A) and {0,1}A by associating to each subset X⊆A its **characteristic function** 𝔣X (also called indicator function)

𝔣X:A→{0,1}:a↦1if a∈X0if a∉X

Conversely,

X\={a∈A:𝔣X(a)\=1}.

Definition 1.13. Given functions f:A→B and g:B→C, their **composite** g∘f:A→C is given by

We do not consider

g∘f, unless the codomain of

f and the domain of

g coincide.

Note: the composite g∘f is indeed a function, because it gives a well-defined and unique output for each input a∈A. Furthermore composition is associative, that is, given a third function h:C→D, we have

because both sides are the function A→D given by a↦h(g(f(a))). We can therefore write this triple composite as just h∘g∘f without ambiguity and similarly for longer compsites fn∘⋯∘f1.

In the case of a function f:A→A with the same domain and codomain, we can write powers fn\=f∘⋯∘f, where f is composed with itself n times, for any positive integer n.

\= Lecture 5 =

Definition 1.14. For any set A, there is an **identity map**

For any subset

X⊆A, there is an **inclusion map**

If f:A→B is any other map, then f∘IdA\=f\=IdB∘f.

Example 1.15. Since ∅⊆A, for any set A, there should be a map inc:∅→A. What would its graph be? Observe that

But the only

G⊆∅ is

G\=∅, which in fact **does** have the graph property:

for all x∈X, there is a unique a∈A such that (x,a)∈G.

This is simply because, if

X\=∅, then

∀x∈X:ℙ(x) is vacuously true for any

ℙ. Thus

G\=∅⊆∅×A is the graph of the empty inclusion

inc:∅→A. In particular there is an empty identity map

Id∅:∅→∅

Definition 1.16. Let f:A→B be a map.

-   for any X⊆A, the **restriction** f|X:X→B is given by f|X\=f∘inc
    
    ![No alt text was set. Please request alt text from the person who provided you with this resource.](http://localhost:5000/moodle.bath.ac.uk/pluginfile.php/1625344/mod_resource/content/13/MA10209-notes/figures/pdf/MA10209-web-figure3.svg)
    
-   the **image** im(f)⊆B is
    
    im(f)\={b∈B:b\=f(a) for some a∈A}\={f(a):a∈A}
    

Note that, any f:A→B will determine another map f̃:A→im(f):a↦f(a) such that f\=inc∘f̃

![No alt text was set. Please request alt text from the person who provided you with this resource.](http://localhost:5000/moodle.bath.ac.uk/pluginfile.php/1625344/mod_resource/content/13/MA10209-notes/figures/pdf/MA10209-web-figure4.svg)

Definition 1.17. Let f:A→B be a map.

(a)

f is **an injection / injective** (one-to-one) when that is,

(b)

f is **a surjection / surjective** (onto) when im(f)\=B, that is,

(c)

f is **a bijection / bijective** (a one-to-one correspondence) when f is both injective and surjective.

In common language, a map f:A→B is surjective when the equation f(x)\=y has a solution for every y∈B; it is injective when the solution is unique whenever it exists. Thus f is bijective if a solution always exists and is always unique.

Example 1.18.**(a)** The map f:ℝ→ℝ:x↦x2 is not injective because x\=±1 both have x2\=1; it is not surjective because −1 is not x2 for any x∈ℝ. However if we define

then

f̃:ℝ→ℝ0+:x↦x2 is now surjective. Indeed changing the codomain to the image makes any map surjective.

**(b)** If X⊆A, then inc:X→A is injective, because, if inc(x)\=inc(y), then x\=y, since inc(a)\=a, for any a∈X. Note that, if X\=∅, then this is remains true vacuously, because there are no x,y∈X to test the condition on.

**(c)** The map g:ℝ→ℝ:x↦3x+2 is injective because 3x+2\=3y+2⇒x\=y; it is surjective because y\=3x+2 can always be solved .. by choosing x\=(y−2)∕3.

\= Lecture 6 =

Proposition 1.19. Given maps f:A→B and g:B→C,

(a)

if f and g are injective, then so is g∘f,

(b)

if f and g are surjective, then so is g∘f,

(c)

if f and g are bijective, then so is g∘f.

Proof. **(a)** For x,y∈A, suppose g∘f(x)\=g∘f(y). Then

g(f(x))\=g(f(y))⇒f(x)\=f(y), as g is injective,⇒x\=y, as f is injective.

Thus g∘f is injective.

**(b)** Note: g∘f:A→C. So consider any c∈C. Then

∃b∈B:g(b)\=c, as g is surjective, and∃a∈A:f(a)\=b, as f is surjective.

Then g∘f(a)\=g(f(a))\=g(b)\=c, as required.

**(c)** Combine (a) and (b). □

Theorem 1.20. Given f:A→B with A, and hence B, non-empty sets,

(a)

f is injective iff ∃g:B→A with g∘f\=IdA (we call g a **left inverse** of f),

(b)

f is surjective iff ∃h:B→A with f∘h\=IdB (we call h a **right inverse** of f),

(c)

f is bijective iff ∃k:B→A with k∘f\=IdA and f∘k\=IdB. Further, k is unique (we call k the **two-sided inverse** of f and write k\=f−1).

Proof. **(a)** Suppose f has a left inverse g and consider any x,y∈A with f(x)\=f(y). Since g∘f\=IdA, we have g(f(x))\=x for all x∈A. Hence

as required. Thus,

f is injective.

Conversely, if f is injective, then we can define g:B→A by

-   if b∈im(f), set g(b)\= the (unique) a such that f(a)\=b;
-   if b∉im(f), set g(b)\= any element of A (which is possible since A≠∅).

Then, for any a∈A, consider b\=f(a)∈im(f) and observe that g(b) must be a, as no other x∈A has f(x)\=b, because f is injective. Thus g(f(a))\=a for all a∈A, i.e. g∘f\=IdA.

**(b)** Suppose f has a right inverse h, that is, f(h(b))\=b for all b∈B. Then setting a\=h(b) gives a solution to f(a)\=b and thus f is surjective.

Conversely, if f is surjective, then for each b∈B we can choose some a∈A such that f(a)\=b and set h(b)\=a. Hence f(h(b))\=f(a)\=b. Thus f∘h\=IdB.

**(c)** If a two-sided inverse k:B→A exists, then it is both a left and a right inverse, so, by (a) and (b), f is injective and surjective, that is, f is bijective.

Conversely, if f is bijective, then, by (a) and (b), it has a left inverse g and a right inverse h. Hence

g\=g∘IdB\=g∘(f∘h)\=(g∘f)∘h\=IdA∘h\=h.

Thus

k\=g\=h is a two-sided inverse. Further, if

k′ is another two-sided inverse, then it is, in particular, a left inverse and so

k′\=h by the same argument, i.e.

k′\=k. Thus a two-sided inverse is unique. □

Example 1.21.**(a)** The map f:ℝ→ℝ0+:x↦x2 is surjective and has two right inverses

h+:ℝ0+→ℝ:y↦+y,h−:ℝ0+→ℝ:y↦−y.

**(b)** The map g:ℝ→ℝ:x↦3x+2 is bijective and has a two-sided inverse

since both

3y−23+2\=y,that is,g∘g−1\=Id,

and

(3x+2)−23\=x,that is,g−1∘g\=Id.

Corollary 1.22.

(a)

If f is injective, then any left inverse g is surjective;

(b)

If f is surjective, then any right inverse h is injective;

(c)

If f is bijective, then the two-sided inverse f−1 is bijective;

(d)

If A≠∅, then ∃ some injective f:A→B⇔∃ some surjective g:B→A.

Proof. 

(a)

As g∘f\=IdA, f is a right inverse of g, so g is surjective;

(b)

As f∘h\=IdB, f is a left inverse of h, so h is injective;

(c)

Combine (a) and (b)

(d)

Given an injective map f, take g to be a left inverse. Given a surjective map g, take f to be a right inverse (noting that B≠∅ if A≠∅ and g is surjective).

□

Note that A≠∅ is a necessary assumption for (d), because there is always an injective map f:∅→B, but no map g:B→∅ at all when B≠∅.

\= Lecture 7 =