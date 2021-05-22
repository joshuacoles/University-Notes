#!/usr/bin/env node

let fs = require('fs');
let rawjson = (fs.readFileSync('/dev/stdin').toString());
let json = JSON.parse(rawjson);

let index = json.blocks.findIndex(x => x.t == 'Header' && x.c[1][0] === 'contents')
json.blocks = json.blocks.slice(0, index);
console.log(JSON.stringify(json));

