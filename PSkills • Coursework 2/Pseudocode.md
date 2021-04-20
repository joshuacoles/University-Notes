### Pseudocode

#### N uniform-random index generator

See `grid.rs#random_indexes_in_range`,

```rust
fn random_indexes_in_range(range: Range<usize>, expected: usize) -> HashSet<usize> {  
    let mut out = HashSet::with_capacity(expected);  
	let uniform = Uniform::from(range);  
	let mut rng = rand::thread_rng();  
  
	while out.len() < expected {  
        let i = rng.sample(uniform);  
		out.insert(i);  
	}  
  
  	return out;  
}
```

To achieve uniform distribution across the space of grid-configurations we used a uniform distribution, indexed contiguously for ease of generation, repeating if there were any coincident samples until the required number of indexes had been generated.

> - Given
> 	- A range of integers `R0 <= i < R1`.
> 	- An expected number of items to generate `N`
> - Let `out` be collection of sufficient capacity to store `N` unique items.
> - While the length of `out` is less than `N`
> 	- Generate a new random number `r` from a uniform distribution across `R0 <= i < R1`.
> 	- If this random number is already present in `out`, continue, else append to `out`.
> - Return `out`, now being full of `N` uniformly random unique numbers in the desired range.

#### Cluster Finder

The rust code this can be found in `src/q2b/cluster_finder.rs`, it is split into 4 parts,

1. Initialisation
2. A function performing single search iteration.
3. The search loop
4. A predicate to determine if the cluster forms a conductive path across the Grid.

The algorithm maintains the following two collections as state:

- A set of *unique* points which are within the cluster, henceforth known as ***Cluster Points***.
- A set of *unique* points which have just been added to the cluster and thus must be searched on the next iteration, henceforth known as the ***Process Queue***.
	- This set is defined as a strict subset of the ***Cluster Points***.

##### Initialisation

> - Given a Grid `G` of dimensions `Lx` by `Ly`.
> - Generate an initial `(x, y)` uniformly from the set the set $[0, L_x]_{\N} \times [0, L_y]_{\N}$.
> - Add this point to the set of ***Cluster Points*** and the ***Process Queue***.

##### Single Search Iteration

- Let `found` be a set of *unique* points found in this iteration.
- For each point in the ***Process Queue*** `p`
	- Iterate through each of the directly reachable points, `q` from this position, as defined by the [[CW 2 Report#Spec|Problem Specification]].
	- If this point `q` is not already in the set of ***Cluster Points***, add it, ensuring uniqueness, to the set of points found this iteration, `found`.
	- Once this is done remove the point `p` from the ***Process Queue***.
- Add all those points found this iteration to the set of ***Cluster Points***.
- All those points found this iteration are now the ***Process Queue*** (which was previously made empty by the loop).

##### The Search Loop

- While the ***Process Queue*** is not empty (recalling that on [[Pseudocode#Initialisation]] it is not empty, containing the *initial point*).
	- Perform a [[Pseudocode#Single Search Iteration]] step.

##### Conduction Path Existence Predicate

The [[CW 2 Report#Problem Specification]] presents the criteria for a conduction path to exist between the two plates. If we were wishing to determine what the path is, for example to determine the approximate resistance of the path, then we would have to apply a path finding algorithm to the problem to determine if any paths exists, and the shortest traversal length.

However since we only wish to determine *if* a path exists, not what it is, we can rely on the construction of the Cluster itself to determine this, in time linear with the size of the two conductors. An algorithm for this is presented below.

- Let `connected_bottom` and `connected_top` be booleans initialised to `false`.
- Iterating through each point `p` in the set of ***Cluster Points***.
	- If the point `p` is in direct contact with the top plate (ie. a `y` value of `0`), set `connected_top` to `true`.
	- If the point `p` is in direct contact with the top plate (ie. a `y` value of `Ly`), set `connected_bottom` to `true`.
- A path has formed if `connected_bottom && connected_top`.
