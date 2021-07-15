# Quotient Ring

Let $I$ be an [[Ideal]] in a [[Ring]] $R$. The [[Quotient Ring]] $R/I$ is the set

$$ R/I = \set{a + I \mid a \in R} $$

of [[Coset|Cosets]] of $I$ in $R$. Addition and multiplication in the ring $R/I$ are defined by

$$ \begin{eqnarray*} (a+I)+(b+I) & = & (a+b)+I \\ (a+I)\cdot (b+I) & = & (a\cdot b) + I. \end{eqnarray*} $$

That is, we add and multiply Cosets by choosing representatives of them and doing the addition and multiplication in $R$, and then taking the Coset of the result.

## Example 1

$n\Z$ is an ideal in $\Z$, so the example in I.35 is a case of this. That explains why we chose the notation $\Z /n\Z$.

## Example 2

For a ring $R$, consider the polynomial ring $R[t]$ and look at the ideal $\latt {t^2}=\{t^2f \in R[t]\mid f\in R[t]\}$. The corresponding equivalence relation is given by $f\sim g\iff f-g\in \latt {t^2}\iff t^2 \vert f-g$.


Any polynomial $f$ can be written in the form $f=t^2h+at+b$ for unique $a,\,b\in R$ (and $h\in R[t]$), so $[f]=[ax+b]$ for some unique $a,\,b\in R$. Therefore $R[t]/\latt {t^2} =\{[at+b] \mid a,\,b\in R\}$, and addition and multiplication are given by

$$ [at+b]+[ct+d]=[(a+c)t+(b+d)] $$

and

$$ [at+b]\cdot [ct+d]=[act^{2}+(ad+bc)t+bd]=[(ad+bc)t+bd]. $$

respectively. In other words we work with polynomials and then discard all the terms involving $t^2$, because that is zero in $R[t]/\latt {t^2}$.

```ad-note
I.46(ii) provides a respectable way to say the thing that you said when learning calculus: “$\varepsilon ^2$ is small so we’ll ignore it”. You were actually working in $R[\varepsilon ]/\latt {\varepsilon ^2}$.
```