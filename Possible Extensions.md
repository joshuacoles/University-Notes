### Possible Extensions

Extensions to this model could be developed where the cluster is grown using a similar algorithm to the one seen in this document, viewing the cluster as a direct graph of connections. A path finding algorithm such as A* could then be applied to to this directed graph to detect the path. A quick schematic example of this directed graph is provided below.

![[Clipboard 20 Apr 2021 at 13.15.png|Path finding example]]

> Note that we would not need to store the edges in a given graph, only the nodes, aka the location of cells in the cluster. This is because valid edges are a pure function of the cell's type.

This would also allow for the modeling of quantities such as resistance, thermal conductivity, and other path properties.

Further extending the model in a different direction. If it is these path properties we care most about, and we are willing to drop the requirements for a random starting cell, we can forgo finding clusters entirely replacing the requirements for cluster generation entirely, instead simply performing path finding alone. 

If a cluster is still desired, but we are willing to limit ourselves to possibly incomplete clusters starting at the initial point, we can alter the traditional stopping conditions of the path finding algorithm to instead continue until all routes are exhausted, instead the shortest path found.

Less physically relevant, extending the problem to even higher dimensions and investigating the effects this has on the path statistics would be interest