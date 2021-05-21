# Chapter 7 Estimation

## 7.1 Introduction to model fitting

**Lecture 17**

We have seen how a specified model leads to random samples.

$$
 \mbox{Model} \;\;\; \rightarrow \;\;\; \mbox{Data}
$$

We now consider the situation where we have observed data and wish to learn about the model that produced them.

This is the transition from Probability to Statistics.

Note that the word ‘data’ is plural

**Definition**

Datum: $\;\,$One piece of information

Data: $\;\,$Several or many pieces of information

So, write ‘the data are’ not ‘the data is’ .

**Learning about the model that generated the data**

The problem is most interesting when data concern several variables.

We could consider the relation between the variables

$$
\begin{align} H & \; = \; \mbox{Height} \\ W & \; = \; \mbox{Weight} \\ S & \; = \; \mbox{Systolic blood pressure} \end{align}
$$

measured on a set of individuals.

We can add the variable

$$
\begin{align} X & \; = \; \mbox{Subject has a heart attack in the next 5 years} \end{align}
$$

and consider the dependence of $X$ on $H$, $W$ and $S$.

Suppose the analysis of these data shows that the likelihood of a heart attack is increased if an individual has a high value of

$$
 \mbox{Body Mass Index} \; = \; \, \frac{W}{H^2},
$$

where $W$ is measured in $kg$ and $H$ in $m$.

If interventions (diet or medication) are made to reduce $S$ or $BMI$, will this reduce the risk of a heart attack?

In a study of such interventions, care should be taken to allow for other risk factors, e.g., age and family history of heart disease.

Cholesterol level is another risk factor — this could be treated too.

For proper control of variation between the individuals in a study, a **Randomised Clinical Trial** is the best approach.

**Modelling data**

We start with the simple case of modelling the distribution of a single random variable.

Here, we have to choose a suitable distribution and estimate parameters of this distribution.

**Example**

Two fish are randomly positioned in a $30cm \times 50cm \times 100cm$ aquarium, and their positions are independent.

The random variable $Y$ is the distance (in $cm$) between the fish.

This is a similar example to the distance between two flies on a sphere (Computer Lab Sheet 3, Problem 1) but the distribution has a rather different shape.

Can we model the distribution of $Y$, at least approximately, as some standard distribution?

A histogram of 10,000 realisations of the distance variable $Y$.

![](Images/lec17/lec17_fig1.png)

In these data, the minimum observed value of $Y$ was 1.6 and the maximum was 108.8.

The range of possible values for $Y$ is from 0 to

$$
 \surd\{30^2 + 50^2 + 100^2\} \; = \; 115.8.
$$

We define the standardised distance between the fish to be

$$
 X \; = \; \frac{Y}{115.8}
$$

and re-draw the histogram.

![](Images/lec17/lec17_fig2.png)

One standard distribution for a random variable taking values in the interval $(0,1)$ is the Beta distribution.

The $\mathrm{Beta}(a,b)$ distribution has PDF

$$
 f_X(x) \; = \; \frac{\Gamma(a+b)}{\Gamma(a)\,\Gamma(b)} \, x^{a-1} \, (1-x)^{b-1} \;\;\;\;\; \mbox{for $x \in (0,1)$},
$$

and $f_X(x)=0$ otherwise.

![](Images/lec17/lec17_fig3.png)

![](Images/lec17/lec17_fig4.png)

**Fitting a Beta distribution**

We want to find values for the parameters $a$ and $b$ such that the $\mathrm{Beta}(a,b)$ distribution matches the histogram for our data.

We could use trial and error to find values for $a$ and $b$ for which the PDF $f_X(x)$ follows the histogram (plotted as a density by giving the ‘prob=TRUE’ command).

We shall take a more systematic approach.

We shall match properties of the $\mathrm{Beta}(a,b)$ distribution to properties of our sample.

This is known as estimation by **The Method of Moments.**

If $X \sim \mathrm{Beta}(a,b)$, it can be shown that

$$
 \mathsf{E}(X) \; = \; \frac{a}{a+b} \;\;\;\;\; \mbox{and} \;\;\;\; \mathrm{Var}(X) \; = \; \frac{ab}{(a+b+1)\,(a+b)^2}\,.
$$

Hence

$$
 \mathsf{E}(X^2) \; = \; \mathrm{Var}(X) + [\mathsf{E}(X)]^2 \; = \; \frac{ab}{(a+b+1)\,(a+b)^2} \, + \, \frac{a^2}{(a+b)^2}\,.
$$

The average of the observed values $\,x_1, \,\ldots\,,\, x_{1000}\,$ is 0.368.

The average value of $\,x_i^2\,$ for our sample is 0.167.

Equating sample averages of $x_i$ and $x^2_i$ to $\,\mathsf{E}(X)$ and $\mathsf{E}(X^2)\,$ gives

$$
\begin{equation} \tag{7.1} \frac{a}{a+b} \; = \; 0.368 \end{equation}
$$

and

$$
\begin{equation} \tag{7.2} \frac{ab}{(a+b+1)\,(a+b)^2} \, + \, \frac{a^2}{(a+b)^2} \; = \; 0.167. \end{equation}
$$

Substituting [(7.1)](Ch7-estimation.html#eq:17-1) into [(7.2)](Ch7-estimation.html#eq:17-2), gives

$$
 \frac{ab}{(a+b+1)\,(a+b)^2} \; = \; 0.167 - 0.368^2 \; = \; 0.032.
$$

Hence

$$
 a+b+1 \; = \; \left(\frac{a}{a+b}\right) \, \left(\frac{b}{a+b}\right) \, \frac{1}{0.032} \; =\; \frac{0.368 \times (1-0.368)}{0.032}\,,
$$

which implies $a+b = 6.3$.

Combining $\,a/(a+b) = 0.368\,$ and $a+b = 6.3$, we get

$$
 a \; = \; 2.3 \;\;\;\; \mbox{and} \;\;\;\; b \; = \; 4.0.
$$

Superimposing the $\mathrm{Beta}(2.3,4.0)$ distribution on the histogram of $X$ values gives a reasonably good fit.

![](Images/lec17/lec17_fig5.png)

The R command ‘help(rbeta)’ provides information about a _Non-central Beta distribution_.

Experimenting with this, we find $a=2.3$ and $b=5.0$ along with a non-centrality parameter of 0.5 fits the mode of the sample better.

The same is true for further sets of simulated data.

Superimposing the $\mathrm{Beta}(2.3,5.0,0.5)$ distribution for our example produces the blue curve in the figure below.

![](Images/lec17/lec17_fig6.png)

We have modelled $X = Y/115.8$ as $X \sim \mathrm{Beta}(a,b)$.

A model for the original distance $Y$ follows, namely

$$
 Y \; \sim \; 115.8 \; \mathrm{Beta}(a,b).
$$

Even using a Non-central Beta distribution, it is difficult to match both the mode and the upper tail of the histogram.

We conclude that the data do not follow a Beta distribution exactly — but this might be a useful approximation for some purposes.

Suppose you are asked to estimate $\mathsf{E}(Y)$:

Having a particular distribution in mind does not necessarily help — in fitting the Beta distribution we effectively estimated $\mathsf{E}(X)$ by $\,(x_1+\ldots+x_{1000})/1000\,$ in order to fit values for $a$ and $b$, and so we would estimate $\mathsf{E}(Y) = 115.8 \, \mathsf{E}(X)$ by $\,(y_1+\ldots+y_{1000})/1000$.

However, in other cases, there may be better ways to estimate $\mathsf{E}(X)$ than by the sample mean.

**Mean and variance of a Beta distribution** (not essential knowledge but included for completeness).

The $\mathrm{Beta}(a,b)$ distribution has PDF $f_X(x)=0$ for $x<0$ and $x>1$, and

$$
 f_X(x) \; = \; \frac{\Gamma(a+b)}{\Gamma(a)\,\Gamma(b)} \, x^{a-1} \, (1-x)^{b-1} \;\;\;\;\; \mbox{for $x \in (0,1)$}.
$$

Hence

$$
 \mathsf{E}(X) \; = \; \int_0^1 x \;\frac{\Gamma(a+b)}{\Gamma(a)\,\Gamma(b)} \, x^{a-1} \, (1-x)^{b-1} \, dx
$$

$$
 = \; \ldots \; = \; \frac{a}{a+b}
$$

and

$$
 \mathsf{E}(X^2) \; = \; \int_0^1 x^2 \;\frac{\Gamma(a+b)}{\Gamma(a)\,\Gamma(b)} \, x^{a-1} \, (1-x)^{b-1} \, dx
$$

$$
 = \; \ldots \; = \; \frac{a(a+1)}{(a+b)(a+b+1)}.
$$

_See handwritten material_

**Lecture 18**

Recap: Given observed data, we want to set up a statistical model that describes the data, then use this model to make inferences or guide future actions.

![](Images/lec18/lec18_fig1.png)

With i.i.d. observations of a single random variable, we need to

_Choose a suitable distribution_

- Discrete or continuous
- Real valued, positive, or taking values in an interval

_Estimate parameters of this distribution._

**Estimating parameter values**

Suppose a graphical display suggests that the data follow an exponential distribution.

![](Images/lec18/lec18_fig2.png)

How should we estimate the rate parameter $\lambda\,$?

We shall look at two methods of estimation:

- The Method of Moments,
- Maximum Likelihood Estimation.

Estimation by the Method of Moments: ‘Distance between fish’ example

We assumed observations, $X_1,\ldots,X_n$, to be i.i.d. RVs following a $\mathrm{Beta}(a,b)$ distribution.

We needed two pieces of information to estimate two parameters, $a$ and $b$.

We found formulae for $\mathsf{E}(X)$ and $\mathsf{E}(X^2)$ when $X \sim \mathrm{Beta}(a,b)$,

$$
 \mathsf{E}(X) \; = \; \frac{a}{a+b}\,, \;\;\; \mathsf{E}(X^2) \; = \; \frac{ab}{(a+b+1)\,(a+b)^2} + \left( \frac{a}{a+b} \right)^2 .
$$

With observed values $x_1,\ldots,x_n$, we set up equations matching the sample means of $x_i$ and $x_i^2$ to expected values $\mathsf{E}(X)$ and $\mathsf{E}(X^2)$,

$$
 \frac{a}{a+b} \; = \; \frac{1}{n} \, \sum_{i=1}^n \, x_i, \;\;\; \frac{ab}{(a+b+1)\,(a+b)^2} + \left( \frac{a}{a+b} \right)^2 \; = \; \frac{1}{n} \, \sum_{i=1}^n \, x_i^2.
$$

Denoting the solutions of this pair of equations by $\hat{a}$ and $\hat{b}$, we concluded that, approximately, each $X_i \sim \mathrm{Beta}(\hat{a},\hat{b})$.

## 7.2 Estimation: the Method of Moments

**Definition**

For $k > 0$, the $k$th moment of a RV $X$ is

$$
 \mu_k \; = \; \mathsf{E}(X^k)
$$

(if this exists).

So $\mu_0 = 1$, $\mu_1 = \mathsf{E}(X)$, $\mu_2 = \mathsf{E}(X^2)$, etc.

Suppose we observe random variables $\,X_1,\ldots,X_n$.

Denote the observed values of these variables by $\,x_1,\ldots,x_n$.

We assume $X_1,\ldots,X_n$ are i.i.d. and follow a specific form of distribution which involves unknown parameters $\theta_1,\ldots,\theta_p$.

We estimate the values of $\mu_1,\ldots,\mu_p$ from the observed data.

Then, we find $\theta_1,\ldots,\theta_p$ that give these values for $\mu_1,\ldots,\mu_p$.

**Estimating $\mu_1$**

Assume $\mathsf{E}(X_1)=\mu_1$ and $\mathrm{Var}(X_1)=\sigma^2$ both exist.

Each $X_i$ has mean $\mu_1$ and variance $\sigma^2$, so

$$
 \mathsf{E}\left( \sum_{i=1}^n \, X_i \right) \;= \; n \, \mu_1 \;\;\;\; \mbox{and} \;\;\;\; \mathrm{Var}\left( \sum_{i=1}^n \, X_i \right) \;= \; n \, \sigma^2.
$$

Thus,

$$
 \mathsf{E}\left( \frac{1}{n} \, \sum_{i=1}^n \, X_i \right) \;= \; \mu_1 \;\;\;\; \mbox{and} \;\;\;\; \mathrm{Var}\left( \frac{1}{n} \, \sum_{i=1}^n \, X_i \right) \;= \; \sigma^2/n.
$$

By the Central Limit Theorem,

$$
 {\overline{X}}\; = \; \frac{1}{n} \, \sum_{i=1}^n \, X_i
$$

behaves like a $N(\mu_1,\sigma^2 /n)$ RV, for large $n$.

We have, approximately, for large $n$,

$$
 {\overline{X}}\, - \, \mu_1 \; \sim \; N(0,\frac{\sigma^2}{n}) \;\;\; \mbox{and} \;\;\; (\,{\overline{X}}\, - \, \mu_1) \, \frac{\sqrt{n}}{\sigma} \; \sim \; N(0,1).
$$

Thus, for large $n$,

$$
\begin{align} \mathsf{P}\left( \left| \,{\overline{X}}- \mu_1 \right| \, > \epsilon \, \right) & \; = \; \mathsf{P}\left( \left| \,{\overline{X}}- \mu_1 \right| \frac{\sqrt{n}}{\sigma} \, > \, \epsilon \, \frac{\sqrt{n}}{\sigma} \right) \\ & \; \approx \; \mathsf{P}\left( |Z| \, > \, \epsilon \, \frac{\sqrt{n}}{\sigma} \right), \end{align}
$$

where $Z \sim N(0,1)$, and this probability $\rightarrow 0$ as $n \rightarrow \infty$.

Hence, for large $n$, with high probability $\, {\overline{X}}\, \approx \, \mu_1$.

Thus, it is reasonable to approximate $\,\mu_1\,$ by ${\overline{x}}\, = \, \frac{1}{n} \, \sum_{i=1}^n \, x_i$, where $x_1,\ldots,x_n$ are the observed values of $X_1,\ldots,X_n$.

**Estimating $\mu_k$ for $k > 1$**

We can apply the same reasoning to RVs $X_i^k$, $i=\,\ldots,n$, assuming both $\mathsf{E}(X_i^k) = \mu_k$ and $\mathrm{Var}(X_i^k)$ exist.

We conclude that, with high probability,

$$
 \frac{1}{n} \, \sum_{i=1}^n \, X_i^k \; \approx \; \mu_k
$$

and it is reasonable to approximate $\,\mu_k\,$ by $\, \frac{1}{n} \, \sum_{i=1}^n \, x_i^k$.

**Definition of Method of Moments estimation**

Suppose a probability distribution has unknown parameters $\theta_1,\ldots,\theta_p$ and we observe i.i.d. observations $X_1,\ldots,X_n$.

The **Method of Moments Estimates** of $\theta_1,\ldots,\theta_p$ are the solutions to

$$
 \frac{1}{n} \, \sum_{i=1}^n \, x_i^k \; = \; \mu_k \; = \; \mu_k(\theta_1,\ldots,\theta_p) \;\;\; \mbox{for $k=1,\ldots,p$},
$$

where $x_1,\ldots,x_n$ denote the observed values of $X_1,\ldots,X_n$.

For large $n$, there is a high probability that each $\frac{1}{n} \sum_{i=1}^n \, X_i^k$ is close to the true value of $\mu_k$, $k=1,\ldots,p$.

Hence, it is also likely that the estimates $\widehat{\theta}_1,\ldots,\widehat{\theta}_p$ are close to the true values $\theta_1,\ldots,\theta_p$.

**Example: Fitting an exponential distribution**

Suppose $X_1,\ldots,X_n$ are i.i.d. $\mathrm{Exp}(\lambda)$ RVs and we wish to estimate the parameter $\lambda$.

The first moment of each $X_i$, $i=1,\ldots,n$, is

$$
 \mathsf{E}(X_i) \; = \; \frac{1}{\lambda}.
$$

With observed values $x_1,\ldots,x_n$, we solve

$$
\begin{equation} \tag{7.3} \frac{1}{n} \, \sum_{i=1}^n \, x_i \; = \; \frac{1}{\lambda} \, . \end{equation}
$$

It is standard practice to denote an estimate by placing a ‘hat’ over the name of the parameter.

So, from [(7.3)](Ch7-estimation.html#eq:lambda), we obtain the estimate

$$
 \widehat{\lambda} \; = \; \frac{n}{x_1 + \ldots + x_n} \, .
$$

**Fitting a Uniform distribution**

Suppose $X_1,\ldots,X_n$ are i.i.d. $\mathrm{Unif}(0,\theta)$ RVs and we wish to estimate the parameter $\theta$.

The first moment of each $X_i$, $i=1,\ldots,n$, is

$$
 \mathsf{E}(X_i) \; = \; \frac{\theta}{2}.
$$

With observed values $x_1,\ldots,x_n$, we solve

$$
 \frac{1}{n} \, \sum_{i=1}^n \, x_i \; = \; \frac{\theta}{2}
$$

to obtain the estimate

$$
 \widehat{\theta} \; = \; \frac{2\,(x_1 + \ldots + x_n)}{n} \, .
$$

**Fitting a normal distribution**

Suppose $X_1,\ldots,X_n$ are i.i.d. $N(\mu,\sigma^2)$ RVs and we wish to estimate the parameters $\mu$ and $\sigma^2$.

The first moment of each $X_i$, $i=1,\ldots,n$, is

$$
 \mathsf{E}(X_i) \; = \; \mu.
$$

The second moment of each $X_i$ is

$$
 \mathsf{E}(X_i^2) \; = \; \mathrm{Var}(X_i) + [\mathsf{E}(X_i)]^2 \; = \; \sigma^2 + \mu^2.
$$

So, we need to solve

$$
\begin{equation} \tag{7.4} \frac{1}{n} \, \sum_{i=1}^n \, x_i \; = \; \mu \end{equation}
$$

and

$$
\begin{equation} \tag{7.5} \frac{1}{n} \, \sum_{i=1}^n \, x_i^2 \; = \; \sigma^2 + \mu^2. \end{equation}
$$

Defining the random variable

$$
 {\overline{X}}\; = \; \frac{1}{n} \, \sum_{i=1}^n \, X_i
$$

and the observed value of this RV,

$$
 {\overline{x}}\; = \; \frac{1}{n} \, \sum_{i=1}^n \, x_i .
$$

From [(7.4)](Ch7-estimation.html#eq:normal-1), we have

$$
 \widehat{\mu} \; = \; {\overline{x}}
$$

and substituting this into [(7.5)](Ch7-estimation.html#eq:normal-2) gives

$$
 \widehat{\sigma}^2 \; = \; \frac{1}{n} \, \sum_{i=1}^n \, x_i^2 \, - \, {\overline{x}}^2.
$$

## 7.3 Estimates and estimators

We have used upper and lower case letters to distinguish between:

- the name of a random variable, $X$, and
- the value $x$ that this variable takes.

Similarly, we wish to distinguish between:

- a parameter estimate viewed as a random variable and
- the value (i.e., a number) this estimate takes for given data.

The first of these is defined in terms of the RVs $\,X_1,\,\ldots,X_n$.

The second is defined in terms of observed values $\,x_1,\,\ldots,x_n$.

**Definition**

An **Estimate** is a real number computed from the data.

An estimate of the parameter $\theta$ based on observations $x_1,\,\ldots,x_n$ can be written as

$$
 \widehat{\theta} \; = \; h(x_1,\,\ldots,x_n)
$$

for the appropriate function $h$.

**Definition**

An **Estimator** is a random variable, a function of the random variables $X_1,\,\ldots,X_n$ that comprise the data.

If the estimate of $\theta$ based on observations $x_1,\,\ldots,x_n$ is $\widehat{\theta} = h(x_1,\,\ldots,x_n)$, the estimator is the random variable

$$
 h(X_1,\,\ldots,X_n).
$$

**A notational quandary**

What name should we give to the _estimator_ $h(X_1,\,\ldots,X_n)\,$?

For consistency, we ought to use the upper case version of the estimate $\widehat{\theta}$ $\;$—$\;$ which would be $\widehat{\Theta}$.

However, it is not usual to use upper case Greek letters in this way.

We can introduce a new name altogether, e.g.,

$$
 T \; = \; h(X_1,\,\ldots,X_n).
$$

This enables to talk about the estimator as a random variable and write down its ‘sampling distribution’ e.g.,

$$
\begin{equation} \tag{7.6} T \; \sim \; N(\theta,\frac{\sigma^2}{n}). \end{equation}
$$

It is tempting to use $\widehat{\theta}$ in place of $T$ in [(7.6)](Ch7-estimation.html#eq:T) $\;$—$\;$ but then we would be using the same symbol both for the name of a random variable and for the value it takes.

Some write $\widehat{\theta}_{RV}$, adding $RV$ to indicate this is a random variable.

## 7.4 Maximum likelihood estimation

**Lecture 19**

Suppose the random variables $X_1, \ldots, X_n$ follow a certain type of distribution but the parameters of that distribution are unknown.

As an example, if we assume $X_i \sim \mathrm{Exp}(\lambda)$, $i=1,\ldots,n$, there is one unknown parameter, $\lambda$, to estimate.

**Definition**

Let $\,X_1, \ldots, X_n \,$ be i.i.d. _continuous_ RVs with PDF $f_X(\theta,x)$, where $\theta$ denotes a parameter or a vector of parameters.

Suppose values $X_i=x_i$, $i=1,\ldots,n$, are observed, and define ${x}=(x_1,\ldots,x_n)$.

The **likelihood function** for these continuous RVs is

$$
 L(\theta,{x}) \; = \; \prod_{i=1}^n \, f_X(\theta,x_i).
$$

**Definition**

Let $X_1, \ldots, X_n$ be i.i.d. _discrete_ RVs for which

$$
 \mathsf{P}(X=x) = p_X(\theta,x), \;\;\; x \in \Omega,
$$

where $\theta$ denotes a parameter or a vector of parameters.

Suppose values $X_i=x_i$, $i=1,\ldots,n$, are observed, and let ${x}=(x_1,\ldots,x_n)$.

The **likelihood function** for these discrete RVs is

$$
 L(\theta,{x}) \; = \; \prod_{i=1}^n \, p_X(\theta,x_i).
$$

In both the continuous and discrete cases, the log-likelihood function is

$$
 {\cal L}(\theta,{x}) \; = \; \log\{ L(\theta,{x}) \}.
$$

**Definition**

The **Maximum Likelihood Estimate (MLE)** of a parameter or vector of parameters, $\theta$, is the value of $\theta$ that maximises the likelihood function $L(\theta,{x})$ for the observed data.

Equivalently, the MLE is the value of $\theta$ that maximises the log-likelihood, ${\cal L}(\theta,{x})$.

Why is the Maximum Likelihood Estimate (MLE) a good choice?

- A parameter value under which the observed data are ‘likely’ seems plausible.
- Case by case, one can usually show this estimate has good properties.
- Theory for large sample sizes shows that maximum likelihood estimation is an efficient, all purpose method (see Statistics 2a and later courses where maximum likelihood estimation is used in more complex models).

There are exceptional situations where other methods may be preferable, even with large sample sizes. This tends to be the case when the set of values for which $f_X(\theta,x) > 0$ depends on $\theta$.

**Example: Maximum likelihood estimation for Bernoulli observations**

Suppose $X_1,\ldots,X_n$ are i.i.d. $\mathrm{Bernoulli}(p)$ random variables, so

$$
 \mathsf{P}(X_i=x) \; = \; \begin{cases} \, 1-p \; & \mbox{if $x=0$} \\ \, p \; & \mbox{if $x=1$} \\ \, 0 \; & \mbox{otherwise} \\ \end{cases}
$$

Let

$$
 S \; = \; \sum_{i=1}^n \ X_i \;\;\;\; \mbox{and} \;\;\;\; s \; = \; \sum_{i=1}^n \ x_i.
$$

Calculations show the maximum likelihood estimate is

$$
 \widehat{p} \; = \; \frac{s}{n} \; = \; \frac{1}{n} \, \sum_{i=1}^n \, x_i.
$$

_See handwritten material_

**Maximising $L(\theta,{x})$ over possible values of $\theta$**

In many cases (but not all), we find the MLE of $\theta$ by solving

$$
 \frac{d}{d\theta} \,L(\theta,{x}) \; = \; 0.
$$

We still need to prove this gives a maximum of $L(\theta,{x})$.

Possible arguments are:

i) $\;d^2 \,L(\theta,{x}) /d\theta^2 < 0$ for all $\theta$;

ii) $\;d \,L(\theta,{x})/d\theta = 0$ at $\theta = \tilde{\theta}$,

$\;\;\;\;\; d \,L(\theta,{x})/d\theta > 0$ for $\theta < \tilde{\theta}$,

$\;\;\;\;\;$and $d \,L(\theta,{x})/d\theta < 0$ for $\theta > \tilde{\theta}$;

iii) $\;L(\theta,{x}) > 0$ for all $\theta$ $\;L(\theta,{x}) \rightarrow 0$ as $\theta \rightarrow -\infty$ and $\theta \rightarrow \infty$,

$\;\;\;\;\;$ and there is only one solution to $d \,L(\theta,{x})/d\theta = 0$.

Sometimes it is simpler to work with ${\cal L}(\theta,{x}) \; = \; \log\{ L(\theta,{x}) \}$.

Consider the Bernoulli example, where

$$
 {\cal L}(p,{x}) \; = \; s \log(p) + (n-s)\log(1-p).
$$

For $1 \leq s \leq n-1$,

$$
 \frac{d}{dp} \,{\cal L}(p,{x}) \; = \; \frac{s}{p} -\frac{n-s}{1-p}
$$

and

$$
 \frac{d^2}{dp^2} \,{\cal L}(p,{x}) \,\; = \,\; \frac{-s}{p^2} -\frac{n-s}{(1-p)^2} \,\; < \,\; 0.
$$

The solution to $\,d {\cal L}(p,{x}) /dp = 0\,$ is $\,\widehat{p}=s/n$.

Since $\,d^2 {\cal L}(p,{x}) /dp^2 < 0$, $\,\widehat{p}=s/n$ gives the maximum of ${\cal L}(\theta,{x})$ $\,$—$\,$ and therefore of $L(\theta,{x})$.

**Example: Maximum likelihood estimation for normal observations**

Suppose $X_1,\ldots,X_n$ are i.i.d. $N(\mu,\sigma^2)$ random variables.

Find the maximum likelihood estimate of $\theta \; = \; (\mu,\,\sigma^2)$.

We have

$$
\begin{align} L(\theta,{x}) & \; = \; \prod_{i=1}^n \, f_X(\theta,x_i) \\ & \; = \; (2\pi\sigma^2)^{-n/2} \, \exp\{- \frac{1}{2\sigma^2} \sum_{i=1}^n \, (x_i-\mu)^2\}, \end{align}
$$

and

$$
 {\cal L}(\theta,{x}) \; = \; \mbox{constant} \, - \, n \log(\sigma) \, - \, \frac{1}{2\sigma^2} \sum_{i=1}^n \, (x_i-\mu)^2.
$$

We shall find the value of $\theta=(\mu,\,\sigma^2)$ that maximises ${\cal L}(\theta,{x})$.

First, we consider the problem of maximising ${\cal L}(\theta,{x})$ with respect to $\mu$ for a fixed value of $\sigma^2$.

Then we shall maximise over $\sigma^2$.

**Step 1**

For given $\sigma^2$, we maximise

$$
 {\cal L}(\theta,{x}) \; = \; \mbox{constant} \, - \, n \log(\sigma) \, - \, \frac{1}{2\sigma^2} \sum_{i=1}^n \, (x_i-\mu)^2
$$

over $\mu$.

To do this, we need to minimise

$$
 \sum_{i=1}^n \, (x_i-\mu)^2.
$$

Note that

$$
 \frac{d}{d\mu} \, \sum_{i=1}^n \, (x_i-\mu)^2 \; = \; - \sum_{i=1}^n \, 2(x_i-\mu)
$$

and

$$
 \frac{d^2}{d\mu^2} \, \sum_{i=1}^n \, (x_i-\mu)^2 \; = \; - \sum_{i=1}^n \, (-2) \;\; > \; 0.
$$

So, the minimum of $\,\sum_{i=1}^n (x_i-\mu)^2\,$ is the solution to

$$
 \frac{d}{d\mu} \, \sum_{i=1}^n \, (x_i-\mu)^2 \; = \; 0,
$$

which has $\;n\mu \; = \; \sum_{i=1}^n x_i$, i.e., $\;\mu \; = \; \frac{1}{n} \sum_{i=1}^n x_i \; = \; {\overline{x}}$ $\;\;$—$\;$ and this does not depend on $\sigma^2$.

**Step 2**

Remember, our aim is to maximise the log likelihood over values of $\theta=(\mu,\,\sigma^2)$.

We have seen that, for a given value of $\sigma^2$, the log likelihood is maximised by taking $\mu = {\overline{x}}$.

Since we get the same answer for any $\sigma^2$, the MLE of $\mu$ is $\,\widehat{\mu} = {\overline{x}}$.

We now maximise the log likelihood over $\sigma^2$ when $\mu = {\overline{x}}$, so

$$
\begin{align} {\cal L}(\theta,{x}) & \; = \; \mbox{constant} \, - \, n \log(\sigma) \, - \, \frac{1}{2\sigma^2} \sum_{i=1}^n \, (x_i-{\overline{x}})^2 \\ & \; = \; c \, - \, n \log(\sigma) - A/(2 \sigma^2), \end{align}
$$

where $A = \sum_{i=1}^n (x_i -{\overline{x}})^2$.

Consider minimising

$$
 h(\sigma) \; = \; n \log(\sigma) + A/(2 \sigma^2),
$$

where $A$ is positive.

The minimum occurs when

$$
 \sigma^2 \; = \; \frac{A}{n} \; = \; \frac{\sum_{i=1}^n (x_i -{\overline{x}})^2}{n}.
$$

_See handwritten material_

So, we have

$$
 \widehat{\sigma}^2 \; =\; \frac{1}{n} \, \sum_{i=1}^n (x_i -{\overline{x}})^2
$$

to go with $\widehat{\mu} = {\overline{x}}$.

**Comparison of methods of estimation**

We have derived the maximum likelihood estimates of $\mu$ and $\sigma^2$,

$$
 \widehat{\mu} \; = \; {\overline{x}}\; = \; \frac{1}{n} \, \sum_{i=1}^n \, x_i \;\;\;\; \mbox{and} \;\;\;\; \widehat{\sigma}^2 \; = \; \frac{1}{n} \, \sum_{i=1}^n \, (x_i-\widehat{\mu})^2.
$$

Recall that the method of moments gave

$$
 \widehat{\mu} \; = \; {\overline{x}}\; = \; \frac{1}{n} \, \sum_{i=1}^n \, x_i \;\;\;\; \mbox{and} \;\;\;\; \widehat{\sigma}^2 \; = \; \frac{1}{n} \, \sum_{i=1}^n \, x_i^2 \;- \widehat{\mu}^2.
$$

The two versions of $\widehat{\sigma}^2$ are, in fact, the same since

$$
 \sum_{i=1}^n \, (x_i-{\overline{x}})^2 \; = \; \sum_{i=1}^n \, (x_i^2-2\,x_i\,{\overline{x}}+{\overline{x}}^2) \; = \; \left( \sum_{i=1}^n \, x_i^2 \right) -n\,{\overline{x}}^2.
$$

However in general, these two methods **can** lead to different estimates.

## 7.5 Sampling distributions, bias and mean square error

**Lecture 20**

**Example**

Suppose $X_1, \ldots, X_n$ are i.i.d. $\mathrm{Unif}(0,\theta)$ RVs, where the parameter $\theta>0$ is unknown.

_Method of moments estimation_

We saw in Lecture 19, the method of moments estimator for $\theta$ is

$$
 T_1 (X_1,\ldots,X_n) \; = \; \frac{2}{n} \, \sum_{i=1}^n \, X_i.
$$

_Maximum likelihood estimation_

We can write

$$
 f_X(x) \; = \; \begin{cases} \; \frac{1}{\theta} \, {\cal I}(x \leq \theta) & \mbox{for $x \geq 0$} \\ \; 0 \; & \mbox{for $x < 0$} \end{cases}
$$

where ${\cal I}(x \leq \theta)=1$ if $x \leq \theta$ and 0 otherwise.

Let ${x}=(x_1,\ldots,x_n)$, where each $x_i \geq 0$.

The likelihood function is

$$
\begin{align} L(\theta,{x}) & \; = \; \prod_{i=1}^n \; \frac{1}{\theta} \; {\cal I}(x_i \leq \theta) \\ & \; = \; \frac{1}{\theta^n} \; {\cal I}(\theta \geq \max_{\,i=1,\ldots,n}\{x_i\}). \end{align}
$$

With observed data

$$
 {x}=(0.4,0.12,0.8,1.05,0.23,1.2),
$$

the maximum of $L(\theta,{x})$ is at

$$
 \widehat{\theta} \; = \; \max_{\,i=1,\ldots,6}\{x_i\} \; = \; 1.2.
$$

![](Images/lec20/lec20_fig1.png)

In general, for data ${x}=(x_1,\ldots,x_n)$, the maximum likelihood **estimate** is $\max_{\,i=1,\ldots,n} \, \{x_i\}$.

Thus, the maximum likelihood **estimator** of $\theta$ is

$$
 T_2 (X_1,\ldots,X_n) \; = \; \max_{\,i=1,\ldots,n} \, \{X_i\}.
$$

So, we now have two possible estimators:

**Method of moments**

$$
 T_1 (X_1,\ldots,X_n) \; = \; \frac{2}{n} \, \sum_{i=1}^n \, X_i
$$

**Maximum likelihood**

$$
 T_2 (X_1,\ldots,X_n) \; = \; \max_{\,i=1,\ldots,n} \, \{X_i\}
$$

What should we consider when choosing between these estimators?

**Definition**

The **sampling distribution** of an estimator $T(X_1,\ldots,X_n)$ is the distribution of the random variable $T$ — which follows from the definition of $T$ and the joint distribution of $X_1,\ldots,X_n$.

**Example**

Simulations of $X_1,\ldots,X_6 \sim\,$ i.i.d. $\mathrm{Unif}(0,\theta)$, with $\theta=1.5$, gave 1000 values of the method of moments estimator $T_1(X_1,\ldots,X_6)$ and the maximum likelihood estimator $T_2(X_1,\ldots,X_6)$:

![](Images/lec20/lec20_fig2.png)

![](Images/lec20/lec20_fig3.png)

Note: We always have $\,T_2 \leq \theta$. On average, $T_2$ is closer to the true $\theta$ than $T_1$.

**Bias and precision**

**Definition**

An estimator $T(X_1,\ldots,X_n)$ of $\theta$ is **unbiased** if

$$
 \mathsf{E}(T) \; = \; \theta \;\;\;\; \mbox{for all $\theta$}.
$$

The bias of an estimator $T(X_1,\ldots,X_n)$ of $\theta$ is

$$
 \mathrm{Bias}(T) \; = \; \mathsf{E}(T) - \theta.
$$

Note: Since $\mathsf{E}(T)$ and $\mathrm{Bias}(T)$ depend on $\theta$, we could indicate this by writing $\mathsf{E}_{\theta}(T)$ and $\mathrm{Bias}_{\theta}(T)$.

**Definition**

The precision of an estimator $T(X_1,\ldots,X_n)$ of $\theta$ is

$$
 {\mathsf{Precision}}(T) \; = \; \frac{1}{\mathrm{Var}(T)}\,.
$$

**Example:** $\, X_1, \ldots, X_n \, \sim\;$ i.i.d. $\,\mathrm{Unif}(0,\theta)$

In our example, the **method of moments** estimator is

$$
 T_1 \; = \; \frac{2}{n} \, \sum_{i=1}^n \, X_i.
$$

This has expected value

$$
 \mathsf{E}(T_1) \; = \; \frac{2}{n} \; n \; \frac{\theta}{2} \; = \;\theta,
$$

so $T_1$ is an unbiased estimator of $\theta$.

Since

$$
 \mathrm{Var}(T_1) \; = \; \frac{4}{n^2} \; n\, \frac{\theta^2}{12} \; = \; \frac{\theta^2}{3\,n}\,,
$$

the precision of $T_1$ is

$$
 {\mathsf{Precision}}(T_1) \; = \; \frac{3\,n}{\theta^2}\,.
$$

In the same example, the **maximum likelihood** estimator is

$$
 T_2 \; = \; \max_{\,i=1,\ldots,n}\{X_i\}.
$$

This estimator has CDF

$$
 F_{T_2}(t_2) \; = \; \mathsf{P}(T_2 \leq t_2) \; = \; \left( \frac{t_2}{\theta} \right)^n,
$$

and its PDF is

$$
 f_{T_2}(t_2) \; = \; \frac{d\,F_{T_2}(t_2)}{d\,t_2} \; = \; \frac{n \, t_2^{n-1}}{\theta^n}\, \;\;\; \mbox{for $0 \leq t_2 \leq \theta$}.
$$

Hence, we can calculate

$$
 \mathsf{E}(T_2) \; = \; \frac{n}{n+1} \; \theta \;\;\;\; \mbox{and} \;\;\;\; \mathrm{Var}(T_2) \; = \; \frac{n}{(n+1)^2\,(n+2)} \; \theta^2.
$$

_See handwritten material_

The **maximum likelihood** estimator $T_2$ has expectation

$$
 \mathsf{E}(T_2) \; = \; \frac{n}{n+1} \; \theta
$$

so this estimator has bias

$$
 \mathrm{Bias}(T_2) \; = \; \mathsf{E}(T_2) - \theta \; = \; \frac{-\theta}{n+1}\,.
$$

The variance of $T_2$ is

$$
 \mathrm{Var}(T_2) \; = \; \frac{n \, \theta^2}{(n+1)^2\,(n+2)} \,\; < \,\; \frac{\theta^2}{3\,n} \; = \; \mathrm{Var}(T_1).
$$

However, low variance (and high precision) is not so helpful if an estimator’s distribution is not centred on the true parameter value.

**Mean square error**

**Definition**

The **mean square error** of an estimator $T(X_1,\ldots,X_n)$ of $\theta$ is

$$
 {\mathsf{MSE}}(T) \; = \; \mathsf{E}\{(T-\theta)^2\}.
$$

Now

$$
\begin{align} {\mathsf{MSE}}(T) & \; = \; \mathsf{E}\{\,([T-\mathsf{E}(T)] \, + \, [\mathsf{E}(T)-\theta])^2\,\} \\ & \; = \; \mathsf{E}\{[T-\mathsf{E}(T)]^2\} \, + \, 2\,\mathsf{E}\{T-\mathsf{E}(T)\}\,[\mathsf{E}(T)-\theta] \, + \, [\mathsf{E}(T)-\theta]^2 \\ & \; = \; \mathrm{Var}(T) \, + \, 0 \, + \, (\mathrm{Bias}(T))^2. \end{align}
$$

So, the MSE combines bias and variance as

$$
 {\mathsf{MSE}}(T) \; = \; \mathrm{Var}(T) \, + \, (\mathrm{Bias}(T))^2.
$$

In our example, the **method of moments** estimator is unbiased and so has mean square error

$$
 {\mathsf{MSE}}(T_1) \; = \; \mathrm{Var}(T_1) \; = \; \frac{\theta^2}{3 \, n}\,.
$$

The **maximum likelihood** estimator has mean square error

$$
\begin{align} {\mathsf{MSE}}(T_2) & \; = \; \mathrm{Var}(T_2) \, + \, (\mathrm{Bias}(T_2))^2 \\ & \; = \; \frac{n\,\theta^2}{(n+1)^2\,(n+2)} \, + \, \frac{\theta^2}{(n+1)^2} \\ & \; = \; \frac{2\,\theta^2}{(n+1)\,(n+2)} \\ & \; \leq \; \frac{\theta^2}{3n} \;\;\; \mbox{for $n \geq 1$}. \end{align}
$$

In our example, simulations were conducted with $n=6$, for which

$$
 {\mathsf{MSE}}(T_1)/{\mathsf{MSE}}(T_2) = 14/9.
$$

![](Images/lec20/lec20_fig2.png)

![](Images/lec20/lec20_fig3.png)

The ratio ${\mathsf{MSE}}(T_1)/{\mathsf{MSE}}(T_2)$ increases with $n$, so maximum likelihood estimation appears to be superior to the method of moments for this problem.

There is a simple way to modify the maximum likelihood estimate to make it unbiased. We know that

$$
 \mathsf{E}(T_2) \; = \; \frac{n}{n+1} \; \theta.
$$

Thus, defining

$$
 T_3 \; = \; \frac{n+1}{n} \; T_2 \; = \; \frac{n+1}{n} \; \max_{\,i=1,\ldots,n} \, \{X_i\}
$$

gives an unbiased estimator with variance

$$
 \mathrm{Var}(T_3) \; = \; \left( \frac{n+1}{n} \right)^2 \, \mathrm{Var}(T_2) \; = \; \frac{\theta^2}{n\,(n+2)}\,.
$$

Since $T_3$ is unbiased, it has mean square error

$$
 {\mathsf{MSE}}(T_3) \; = \; \mathrm{Var}(T_3) \; = \; \frac{\theta^2}{n\,(n+2)},
$$

which can be seen to be lower that that of $T_1$ and $T_2$.

The histogram shows result of 1000 simulated values of the modified maximum likelihood estimator, $T_3$.

![](Images/lec20/lec20_fig4.png)

Note that the true value $\theta=1.5$ is now at the ‘centre of mass’ of the distribution.

**Finding the best estimator**

Later statistics courses will address the issues:

- Finding the best possible estimator in terms of bias or MSE,
- General theory of maximum likelihood estimation,
- Proof that MLE gives best the possible estimators (for most problems) when the sample size is large,
- Estimation in complex models involving several parameters.

## 7.6 Assessment of goodness of fit

**Lecture 21**

Recall the scheme for modelling data and drawing inferences:

![](Images/lec18/lec18_fig1.png)

Within ‘Model fitting’ we have taken a two step approach to model a random variable:

1.  $\,$Select a family of distributions, e.g., exponential or normal
2.  $\,$Estimate the parameter or parameters of this distribution.

We can extend this approach to allow validation of the choice of distribution to check that the model agrees with the observed data.

**Goodness of fit**

An iterative approach to model fitting:

1.  $\,$Select a family of distributions, e.g., exponential or normal
2.  $\,$Estimate the parameter or parameters for this distribution.
3.  $\,$Check whether the data are typical for the fitted distribution:

- If the data follow the fitted distribution well, STOP HERE.
- If not, go back to (1) and try another distribution.

One option on returning to step (1) is to consider a larger family of distributions:

- The Weibull distribution contains the exponential as a special case but allows other possibilities too,
- The Gamma family contains cases close to the normal distribution — plus a variety of asymmetric distributions.

In Problems Class 9, we looked at data comprising the petal length (in $cm$) for 50 specimens of Iris versicolor.

Supposing these lengths follow a $N(\mu,\sigma^2)$ distribution, the method of moments (or maximum likelihood) estimates are

$$
 \hat{\mu} \; = \; 4.26 \;\;\; \mbox{and} \;\;\; \hat{\sigma}^2 \; = \; 0.216.
$$

Superimposing a $N(4.26,0.216)$ PDF on the data histogram gives

![](Images/lec21/lec21_fig2.png)

Is this model a good enough fit to the data?

**Quantile-quantile plots**

Quantile-quantile plots (q-q plots) avoid the ‘blocking’ effect of histograms and so present data in more detail.

Suppose we observe i.i.d. RVs $X_1,\ldots,X_n$.

Denote the ordered values of the observed data $x_1,\ldots,x_n$ by

$$
 x_{(1)} \leq \ldots \leq x_{(n)}.
$$

Let $F_X(x)$ be the CDF of a distribution proposed for the RVs $X_i$.

A q-q plot is a graph of

$$
 x_{(i)} \;\; \mbox{against} \;\; F_X^{-1} \left( \frac{i}{n+1} \right).
$$

If the RVs do indeed come from the distribution with CDF $F_X(x)$, then the q-q plot should be, approximately, a straight line through the origin with slope 1.

The q-q plot for the petal lengths of Iris versicolor is shown below.

![](Images/lec21/lec21_fig3.png)

_Questions:_

1.  $\,$Why do we expect to see a line, $y=x$, if the model is correct?
2.  $\,$How close should a q-q plot be to a straight line?
3.  $\,$What do departures from a straight line tell us?

_Answers_

**1. $\,$Why we expect to see $\,x_{(i)} \, \approx \, F_X^{-1}\{i/(n+1)\}$**

The expected value of a $\mathrm{Binom}(n,F_X(x))$ RV is $n\,F_X(x)$, so we ‘expect’ this many observations to be $\leq x$ $\,$—$\,$ and the binomial variance indicates the likely variation in this number.

Applying this argument with $x=x_{(i)}$, we might expect $n\,F_X(x_{(i)})$ observations $\leq x_{(i)}$.

Since $i$ observations are less than or equal to $x_{(i)}$, this implies

$$
 \frac{i}{n} \; \approx \; F_X(x_{(i)}) \;\;\;\;\; \mbox{and so} \;\;\;\;\; x_{(i)} \; \approx \; F_X^{-1} \left( \frac{i}{n}\right).
$$

Usually, we can ignore the probability that a continuous RV is exactly equal to a particular value.

However, we have just considered $x=x_{(i)}$ where, by definition, one of the RVs $X_1,\ldots,X_n$ has this as an observed value.

If we do not ‘count’ the observation at $x_{(i)}$ we get

$$
 x_{(i)} \; \approx \; F_X^{-1} \left( \frac{i-1}{n}\right).
$$

In fact, it can be shown (see Example Sheet 6, Question 5) that

$$
 \mathsf{E}\{ \, F_X(X_{(i)}) \, \} \; = \; \frac{i}{n+1},
$$

suggesting we might ‘expect’ to see

$$
 x_{(i)} \; \approx \; F_X^{-1} \left( \frac{i}{n+1}\right).
$$

**2. $\,$How closely a q-q plot should follow the line $y=x$**

We can use simulation to see how a typical q-q plot might appear when a fitted model is actually correct.

The following q-q plots are for the real iris data and three sets of fifty $N(4.26,0.216)$ RVs:

![](Images/lec21/lec21_fig4.png)

The variation about the line $y=x$ for the actual iris data is similar to that seen in the plots based on data generated from a normal distribution. Thus, we conclude that the normal distributionis a good model for the iris data.

**3. $\,$What departures from a straight line tell us**

If the points in a q-q plot do not follow a straight line with slope 1, their pattern should indicate the failings of the assumed model.

**Example: Fitting a normal model to observations from a uniform distribution**

Suppose we have data from a $\mathrm{Unif}(3.0,5.0)$ distribution and we try to model these by a normal distribution.

The q-q plots below show the ordered observations vs quantiles of a $N(4,0.33)$ distribution for two sets of 50 observations:

![](Images/lec21/lec21_fig5.png)

![](Images/lec21/lec21_fig6.png)

The ‘S’ shaped q-q plots reflect the fact that the $\mathrm{Unif}(3.0,5.0)$ distribution does not extend as far outwards as the normal distribution.

![](Images/lec21/lec21_fig7.png)

Thus, the ordered values, $x_{(1)},\ldots,x_{(50)}$, flatten off just above 3.0 and just below 5.0.

**Example: Fitting a normal model to observations from a Cauchy distribution**

Now consider observations from a Cauchy distribution centred on 4, with shape parameter 0.5.

The q-q plots below show the ordered observations vs quantiles of a $N(4,1)$ distribution for two sets of 50 observations:

![](Images/lec21/lec21_fig8.png)

![](Images/lec21/lec21_fig9.png)

The $N(4,1)$ distribution matches the $\mathrm{Cauchy}(4,0.5)$ distribution reasonably well at its centre, but the Cauchy PDF has heavier tails.

![](Images/lec21/lec21_fig10.png)

In fact, the tails of the Cauchy distribution are so long that in both simulated data sets, a few data points are omitted as they were off the vertical scale — by a long way!

**The role of simulation**

Simulation plays a large role in modern statistics.

It is nice to derive exact formulae for probabilities and other properties of distributions — but that can be just about impossible for complex models.

Simulation provides a very powerful way to carry out calculations — basically, high dimensional integrals.

For some problems, even simulation is difficult — there is much current research on methods for simulating from complex, high dimensional distributions.

**What next?**

**Probability** courses in Year 2 and beyond cover

- Markov chains — sequences of random variables
- Convergence theorems — limiting behaviour as ‘$n \rightarrow \infty$’
- Discrete probability — random structures
- Applications of probability:

$\;\;\;$Queues, Networks, Mathematical finance, Statistical physics.

**Statistics courses in Year 2 and beyond cover**

- Modelling a response distribution in terms of other variables
- Time series and forecasting — sequences of random variables
- Multivariate data — multiple observations on each subject
- Formal statistical inference
- Applications of statistics:

$\;\;\;$Medicine (drug development, clinical trials, epidemiology), The environment, Agriculture, Biostatistics, Social science, Psychology, Risk assessment $\ldots$ .
