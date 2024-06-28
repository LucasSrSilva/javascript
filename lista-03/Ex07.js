const rl = require("readline-sync");
const vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];
let num = rl.questionInt("Digite um numero para buscar na lista: ") 
let encontrou = false;
let numIndice = 0;

for(let i = 0; i < vetor.length; i++){
    if(num == vetor[i]){
        encontrou = true;
        numIndice = i;
    }
}


if(!encontrou){
    console.log("O número 40 não foi encontrado!")
}
else{
    console.log("O número 7 está localizado na posição: " + numIndice);
}
