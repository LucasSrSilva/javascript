const read = require("readline-sync");

let salario;
let abono;
let novoSalario;

salario = read.questionFloat("\n Digite seu salario: ");
abono = read.questionFloat("\n Digite seu abono: ");

novoSalario = salario + abono;

console.log("Seu novo salário é: R$" + novoSalario.toFixed(2));