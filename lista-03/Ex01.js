const rl = require("readline-sync");

let loop = true;
while(loop){
    let n1 = rl.questionInt("Digite o primeiro numero: ");
    let n2 = rl.questionInt("Digite o segundo numero: ");
    
    if(n1 < n2){
        for(let i = n1; i < n2; i++){
            verificarMultiplo(i);
        }
    }
    else{
        console.log("Intervalo inválido");
    }
    
    loop = rl.keyInYNStrict("Deseja continuar?");
}


function verificarMultiplo(num){
    if(num % 3 == 0 && num % 5 == 0){
        console.log(`${num} é mútiplo de 3 e 5`);
    }
}