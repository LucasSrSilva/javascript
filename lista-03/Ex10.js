const rl = require("readline-sync");

let matriz = Array(10);
let soma = 0;
let vetorMedia = [];

for (let indiceLinha = 0; indiceLinha < matriz.length; indiceLinha++){
    matriz[indiceLinha] = Array(4);
}

for(let indiceLinha = 0; indiceLinha < matriz.length; indiceLinha++){
    for(let indiceColuna = 0; indiceColuna < matriz[indiceLinha].length; indiceColuna++){
        matriz[indiceLinha][indiceColuna] = (rl.questionFloat(`Digite um numero do elemento[${indiceLinha}][${indiceColuna}]: `));
    }
}

for(let i = 0; i < matriz.length; i++){
    for(j = 0; j < matriz[i].length; j++){
        soma += matriz[i][j];
        vetorMedia[i] = (soma / matriz[i].length).toFixed(1);
    }
    soma = 0;
}


console.log("Notas dos alunos: ")
console.table(matriz);
console.log("Media dos alunos: ")
console.table(vetorMedia);