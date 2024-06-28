const rl = require("readline-sync");

let matriz = Array(3);
let vetorDIagonalPrincipal = [];
let vetorDiagonalSecundaria = [];
let somaDiagonalPrincipal = 0;
let somaDiagonalSecundaria = 0;

for (let indiceLinha = 0; indiceLinha < matriz.length; indiceLinha++) {
    matriz[indiceLinha] = Array(3);
}

for (let indiceLinha = 0; indiceLinha < matriz.length; indiceLinha++) {
    for (let indiceColuna = 0; indiceColuna < matriz.length; indiceColuna++) {
        matriz[indiceLinha][indiceColuna] = rl.questionInt(`Digite um numero do elemento[${indiceLinha}][${indiceColuna}]: `);
    }
}

for (let i = 0; i < matriz.length; i++) {
    vetorDIagonalPrincipal[i] = matriz[i][i];
    vetorDiagonalSecundaria[i] = matriz[i][matriz.length - i -1]
    somaDiagonalPrincipal += vetorDIagonalPrincipal[i];
    somaDiagonalSecundaria += vetorDiagonalSecundaria[i];
}


console.table(matriz);
console.log("Elementos da Diagonal Principal: " + vetorDIagonalPrincipal);
console.log("Elementos da Diagonal Secundaria: " + vetorDiagonalSecundaria);
console.log("Soma dos elementos da Diagonal Principal: " + somaDiagonalPrincipal);
console.log("Soma dos elementos da Diagonal Secundaria: " + somaDiagonalSecundaria);