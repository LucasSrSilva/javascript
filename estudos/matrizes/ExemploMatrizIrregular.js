const rl = require("readline-sync");

let matrizInteiros = Array(2);

for (let indiceLinha = 0; indiceLinha < matrizInteiros.length; indiceLinha++){
    matrizInteiros[indiceLinha] = Array(3);
}

for(let indiceLinha = 0; indiceLinha < matrizInteiros.length; indiceLinha++){
    for(let indiceColuna = 0; indiceColuna < matrizInteiros[indiceLinha].length; indiceColuna++){
        matrizInteiros[indiceLinha][indiceColuna] = rl.questionInt(`Digite um numero do elemento[${indiceLinha}][${indiceColuna}]: `);
    }
}

console.table(matrizInteiros);