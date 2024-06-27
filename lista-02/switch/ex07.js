const rl = require("readline-sync");

console.log("=====================================================================");
console.log("Boas vindas a calculadora no terminal! Digite o código para escolher a operação matemática.");
console.log("Código 1: Soma \nCódigo 2: Subtração\nCódigo 3: Multiplicação\nCódigo 4: Divisão");

let operacao = rl.questionInt("Digite o codigo: "), num1 = rl.questionInt("Digite um numero: "), num2 = rl.questionInt("Digite outro numero: ");

switch(operacao){
    case 1: 
        console.log("Você escolher somar!");
        console.log(`A soma de ${num1} + ${num2} é: ${num1 + num2}`)
        break;
    case 2:
        console.log("Você escolher subtrair!");
        console.log(`A subtração de ${num1} - ${num2} é: ${num1 - num2}`)
    break;
    case 3:
        console.log("Você escolher multiplicar!");
        console.log(`A multiplicação de ${num1} * ${num2} é: ${num1 * num2}`)
        break;
    case 4:
        console.log("Você escolher Dividr!");;
        console.log(`A divisão de ${num1} / ${num2} é: ${(num1 / num2).toFixed(2)}`)
        break;
    default:
        console.log("Operação inválida!");
        break;
}