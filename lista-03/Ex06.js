const rl = require("readline-sync");
let num = 0;
let soma = 0;
let media = 0;
let totalNuns = 0;
do{
    num = rl.questionInt("Digite um numero inteiro: ");
    if(num % 3 == 0 && num != 0){
        soma += num; 
        totalNuns++;
    };
}while(num != 0);

media = soma / totalNuns;
console.log("A média de todos os números múltiplos de 3 é: "  + media);