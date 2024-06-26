const read = require("readline-sync");

let num1 = read.questionFloat("Digite o numero 1: ");
let num2 = read.questionFloat("Digite o numero 2: ");
let num3 = read.questionFloat("Digite o numero 3: ");
let num4 = read.questionFloat("Digite o numero 4: ");

let diferenca = calcularDiferenca(num1, num2, num3, num4);

console.log("A diferenca é: " + diferenca);

function calcularDiferenca(n1, n2, n3, n4){
    let diferenca = (n1 * n2) - (n3 * n4);
    return diferenca;
}