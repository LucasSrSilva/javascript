const read = require("readline-sync");

let quantidade = read.questionInt("Digite um numero inteiro: ");

console.log(quantidade);

let altura = read.questionFloat("Digite sua altura: ", {limitMessage: "tipo errado amigo"});

console.log(altura);

let a = 1;
let b = 2;
let c = 3;
console.log(a + b * c);