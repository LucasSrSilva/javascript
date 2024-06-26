const read = require("readline-sync");

let nota1;
let nota2;
let nota3;
let nota4;
let media;

nota1 = read.questionFloat("Digite a nota 1: ");
nota2 = read.questionFloat("Digite a nota 2: ");
nota3 = read.questionFloat("Digite a nota 3: ");
nota4 = read.questionFloat("Digite a nota 4: ");

let notaFinal = calcularMedia(nota1, nota2, nota3, nota4).toFixed(1);

console.log("A média final é: " + notaFinal);

function calcularMedia(nota1, nota2, nota3, nota4){
    media = (nota1 + nota2 + nota3 + nota4) / 4;
    return media;
}