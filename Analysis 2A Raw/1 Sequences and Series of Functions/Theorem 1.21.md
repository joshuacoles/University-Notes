### [[Theorem 1.21]]

Let $f: [a,b]\times \R \to \R$, $(x,t)\mapsto f(x,t)\in \R$, be a continuous function, and assume that the partial derivative $\frac {\partial f}{\partial t}$ is also continuous. Then the function

$$ F:\R \to \R , \quad F(t):= \int _a^b f(x,t) dx $$

is differentiable, and

$$ F’(t) = \frac {d}{dt} \int _a^b f(x,t) dx = \int _a^b \frac {\partial f}{\partial t}(x,t) dx. $$

Proof. Let $t_0\in \R$ and $r>0$, and let $\varepsilon >0$. Since the function $\frac {\partial f}{\partial t}$ is uniformly continuous in $[a,b]\times [t_0-r, t_0+r]$, we have that there exists $\delta =\delta (\varepsilon ,t_0)$ such that

$$ \|(x,t)-(y,s)\|<\delta \, \Rightarrow \, \left |\frac {\partial f}{\partial t}(x,t)-\frac {\partial f}{\partial t}(y,s)\right |<\varepsilon $$

for every $(x,t),(y,s) \in [a,b]\times [t_0-r, t_0+r]$. We claim that



$$ \begin{align*} \left |\frac {F(t_0+h) - F(t_0)}{h} - \int _a^b \frac {\partial f}{\partial t}(x,t_0) dx \right |<\varepsilon \quad \forall \, |h|<\min \{r,\delta \}. \end{align*} $$ (Clearly this estimate implies the claim, by the definition of differential of $F$ at $t_0$.)

Expanding the expression above we have that, whenever $|h|<\min \{r,\delta \}$,



$$ \begin{align*} \left |\frac {F(t_0+h) - F(t_0)}{h} - \int _a^b \frac {\partial f}{\partial t}(x,t_0) dx\right | \leq \int _a^b \left | \frac {f(x,t_0+h) - f(x,t_0)}{h} - \frac {\partial f}{\partial t}(x,t_0) \right | dx. \end{align*} $$ By the Mean Value Theorem applied to the function $t\mapsto f(x,t)$ at fixed $x$ we have that there exists $\theta = \theta (h,x)$ such that

$$ \frac {f(x,t_0+h) - f(x,t_0)}{h} = \frac {\partial f}{\partial t}(x,t_0+\theta ), \quad \textrm {with }\, |\theta |<|h|. $$

So we have



$$ \begin{align*} \left |\frac {F(t_0+h) - F(t_0)}{h} - \int _a^b \frac {\partial f}{\partial t}(x,t_0) dx\right | \leq \int _a^b \left | \frac {\partial f}{\partial t}(x,t_0+\theta )- \frac {\partial f}{\partial t}(x,t_0) \right | dx. \end{align*} $$ Note that, since $\|(x,t_0+\theta ) - (x,t_0)\|\leq |\theta |<|h|<\delta$, by uniform continuity

$$ \left | \frac {\partial f}{\partial t}(x,t_0+\theta )- \frac {\partial f}{\partial t}(x,t_0) \right | <\varepsilon , $$

and hence



$$ \begin{align*} \left |\frac {F(t_0+h) - F(t_0)}{h} - \int _a^b \frac {\partial f}{\partial t}(x,t_0) dx\right | \leq (b-a)\varepsilon \end{align*} $$ as claimed.