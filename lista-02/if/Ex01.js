const rl = require("readline-sync");



const a =  rl.questionInt("Digite um numero inteiro: ");
const b =  rl.questionInt("Digite um numero inteiro: ");
const c =  rl.questionInt("Digite um numero inteiro: ");

verificarMaior(a, b, c);

function verificarMaior(a, b, c){
    if(a + b == c){
        console.log("A Soma de A + B é Igual a C");
    }
    else if(a + b < c){
        console.log("A Soma de A + B é Menor do que C");
    }
    else{
        console.log("A Soma de A + B é Maior do que C");
    }
}
