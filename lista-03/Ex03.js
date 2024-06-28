const rl = require("readline-sync");

let menor = 0;
let maior = 0;
let n = 0;

while(n >= 0){
    n = rl.questionInt(`Digite uma idade: `)
    verificarIdade(n);
}

console.log("Total de pessoas menores de 21 anos: " + menor);
console.log("Total de pessoas maiores de 50 anos: " + maior);

function verificarIdade(n){
    if(n < 21 && n > 0){
        menor++;
    }
    else if(n > 50){
        maior++;
    }
}

