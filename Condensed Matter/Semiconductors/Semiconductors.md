---
aliases: Semiconductor
tags: MOC
---

A Semiconductor is a crystal with a [[Band Gap]] of approximately $1\unit{eV}$, known as $E_G$, between its [[Valence Band]] band, the *highest*, **fully occupied** (and thus **inert** band), and its [[Conduction Band]], the *lowest* unoccupied band, which is completely empty. Electrons are excited from the Valence Band to the Conduction Band inline with the [[Fermi-Dirac Distribution]].

![[Example Semiconductor Band Gap.png]]

> Because of these properties a Semiconductor conducts at room temperature, but not $T = 0$. If the gap is $\gg 1eV$ then the chance of excitation is substantially lower and thus the material is an insulator.

There are 2 qualities which we use to classify Semiconductors.

- [[Direct Band Gap Semiconductors]] vs [[Indirect Band Gap Semiconductors]]
- [[Intrinsic Semiconductors]] vs [[Extrinsic Semiconductors]].
	- [[Extrinsic Semiconductors]] are split into two further categories of [[N-Type Extrinsic Semiconductors|n-type]]  and [[P-Type Extrinsic Semiconductors|p-type]].

When working with Semiconductors we take the following assumptions / conventions:

- We generally assume they are [[Direct Band Gap Semiconductors]] **unless stated otherwise**, with this point being at $\vk = 0$.
- We measure energies from the peak of the [[Valence Band]], labeling it $\epsi = 0$.
- We approximate the energies of the states in these bands as parabolic in $\|\vk\|$, cf [[#Energies of the Bands]].

## [[Direct Band Gap Semiconductors|Direct]] vs [[Indirect Band Gap Semiconductors|Indirect]]

A [[Direct Band Gap Semiconductors|Direct Band Gap Semiconductor]] has the maxima of the [[Valence Band]] at the same $\vk$ as the minima of the [[Conduction Band]]. In an [[Indirect Band Gap Semiconductors|Indirect Band Gap Semiconductor]] this is not the case. This is shown below.

![[Direct vs Indirect Band Gap Semiconductor Comparison.png]]

The primary difference between the two is in the nature of excitation events between their bands. For photons of energy comparable to the $1\unit{eV}$ [[Band Gap]], the corresponding momentum they carry is a small fraction of the [[Brillouin Zone]]. Hence we represent photon driven transitions as essentially vertical lines on the graphs used here. 

Hence, in an [[Indirect Band Gap Semiconductors]], a [[Phonon]] (lattice vibration) must also be involved to conserve both energy and momentum (lattice vibrations can have low energy, large momentum). This is an indirect absorption process and subsequently this substantially decreases the probability of such an event occurring.

## [[Intrinsic Semiconductors]] vs [[Extrinsic semiconductors]]

[[Intrinsic Semiconductors]] are pure Crystals, where we assume there are negligible impurities and defects, which are capable of semi-conduction in their own right. This is compared with [[Extrinsic Semiconductors]] where their Semiconductor nature is aided through [[Doping]], through either the addition of Electron Donors or Electron Acceptors.


## Energies of the Bands

As per our approximation of the Band Energies as parabolic in $\|\vk\|$ we take the following for their given energies.

### [[Conduction Band]]

$$
\epsi_{C}
$$