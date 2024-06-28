const rl = require("readline-sync");

console.log("=====================================================================");
console.log("Boas vindas a sua conta bancária! Digite o código para escolher a operação.");
console.log("Código 1: Consultar o saldo \nCódigo 2: Saque\nCódigo 3: Depósito");

let saldo = 1000.00;
let operacao = rl.questionInt("Digite o codigo da operacao desejada: ");
let dinheiro;

switch(operacao){
    case 1:
        console.log("Você escolheu vizualizar seu saldo! \nSeu saldo é: R$" + saldo.toFixed(2));
        break;
    case 2:
        console.log("Você escolheu sacar!\n");
        dinheiro = rl.questionFloat("Quanto deseja sacar? ");
        saldo > dinheiro && dinheiro < 0 ? (saldo -= dinheiro) + console.log("Seu novo saldo é: R$" + saldo.toFixed(2)) : console.log("Saldo insuficiente!");
        break;
    case 3:
        console.log("Você escolheu depositar!\n");
        saldo += rl.questionFloat("Quanto deseja depositar? ");
        console.log("Seu novo saldo é: R$" + saldo.toFixed(2));
        break;
    default:
        console.log("Operação inválida!");
}