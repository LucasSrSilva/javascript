const rl = require("readline-sync");

const vetor = [];
const vetorPar = [];
const vetorIndiceImpar = [];

let j = 0;
let k = 0;
let soma = 0;
let media = 0;

for(let i = 0; i < 10; i++){
    vetor[i] = rl.questionInt("Digite um numero: ");
}

for(let i = 0; i < vetor.length; i++){
    if(vetor[i] % 2 == 0){        
        vetorPar[k] = vetor[i];
        k++;
    }
    if(i % 2 != 0){
        vetorIndiceImpar[j] = vetor[i];
        j++;
    }
    soma += vetor[i];
}

console.log(vetor);
console.log("Elementos nos índices ímpares: ")
console.log(vetorIndiceImpar);
console.log("Elementos pares: ");
console.log(vetorPar);

media = soma / vetor.length;

console.log("Soma: " + soma);
console.log("Média: " + media);


