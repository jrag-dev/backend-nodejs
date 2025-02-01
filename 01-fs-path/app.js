

const fs = require('fs')

const poema = fs.readFileSync('poema.txt', 'utf-8');


const poemaModified = poema.replace(/Node.js/ig, 'Nodejs')

fs.writeFileSync('poema-copy.txt', poema)

console.log(poema)
console.log(poemaModified)
