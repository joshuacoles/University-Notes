`
> - [Panotpto](https://uniofbath.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=c0dc122f-e261-450e-82a0-acb60126279b)
> - #lecture #narrative
> - Navigation
>   - [[Lec 5, Electostatics|Previous]]
>   - [[Lec 7, Currents, Magnetic Fields|Next]]
`

P = /\[\[([^|]+)\|Previous\]\]/
N = /\[\[([^|]+)\|Next\]\]/
PAN = /\[Panotpto\]\(([^\)]+)\)/

const child_process = require("child_process");
c = child_process.spawnSync('pbpaste').output[1].toString();


o = `
---
panopto: ${PAN.exec(c)[1]}
sibling:
  - [[${P.exec(c)[1]}]]
  - [[${N.exec(c)[1]}]]
---
`

console.log(o)

