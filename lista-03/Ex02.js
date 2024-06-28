const rl = require("readline-sync");

let par = 0;
let impar = 0;

for(let i = 1; i <= 10; i++){
    let n = rl.questionInt(`Digite o ${i} numero: `)
    n % 2 == 0 ? par++ : impar++;
}

console.log("Total de número pares: " + par);
console.log("Total de números impares: " + impar);

