# Subgroups

A subset $H$ of a group $G$ is called a Subgroup of $G$ if and only if it is closed under all the group operations. That means that $1\in H$ (so, in particular, $H \neq \emptyset$); that $a^{-1}\in H$ if $a\in H$; and that $a*b\in H$ if $a,\,b\in H$.

In other words, $H$ is a subgroup if it is a subset of $G$ that is also a group (with the same operation $*$).

## Practical Test for Subgroup

If we have been given a non-empty subset $H \subseteq G$ then we can check whether it is a Subgroup in one shot: $H$ is a subgroup iff,

$$
\Forall a, b \in H,
\text{ we have } a*b^{-1} \in H.
$$

To see that this works, suppose we have this condition. First choose $a \in H$ and take $b = a$. That tells us that $1 \in H$, so now we can start again and take $a=1$. That tells us that if $b\in H$ then $b^{-1}\in H$. Finally, if we want to show that $a*b\in H$ we take $c=b^{-1}$ and then the criterion tells us that $H\ni a*c^{-1}=a*b$.

In the other direction, if $H$ is a subgroup and $a,\,b\in H$ then $b^{-1}\in H$ and hence $a*b^{-1}\in H$, by I.3.
