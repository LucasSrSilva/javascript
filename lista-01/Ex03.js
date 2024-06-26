const read = require("readline-sync");

salarioBruto = read.questionFloat("Digite o salario bruto: ");
adicionalNoturno = read.questionFloat("Digite o adicional noturno: ");
horasExtras = read.questionFloat("Digite as horas extras: ");
descontos = read.questionFloat("Digite o desconto: ");

let salarioLiquido = calcularSalarioLiquido(salarioBruto, adicionalNoturno, horasExtras, descontos);

console.log("O salário liquido é> " + salarioLiquido);

function calcularSalarioLiquido(salarioBruto, adicionalNoturno, horasExtras, descontos){
    let salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras*5) - descontos;
    return salarioLiquido;
}
