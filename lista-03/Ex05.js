const rl = require("readline-sync");
let num = 0;
let soma = 0;
do{
    num = rl.questionInt("Digite um numero inteiro: ");
    if(num > 0){soma += num};
}while(num != 0);

console.log("A soma dos números positivos é: " + soma);