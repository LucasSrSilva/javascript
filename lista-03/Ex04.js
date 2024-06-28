const rl = require("readline-sync");

let desejaContinuar = true;
let idade = [];
let contador = 0;
let media = 0;

const genero = [];
const funcao = [];


while (desejaContinuar) {
    let i = rl.questionInt("Idade: ");
    listarIdade(i);

    let g = rl.questionInt("\n 1 - Mulher Cis\n 2 - Homem Cis\n 3 - Nao Binario\n 4 - Mulher Trans\n 5 - Homem Trans\n 6 - Outros\nDigite o codigo para seu genero: ");
    adicionarGenero(g);

    let f = rl.questionInt("\n 1 - Backend\n 2 - Frontend\n 3 - Mobile\n 4 - FullStack \nDigite o codigo para sua funcao: ")
    adicionarFuncao(f);

    desejaContinuar = rl.keyInYNStrict("Deseja continuar (Y/N)");
}

//---------------------------------------------------------------------------------------------
console.log("\nTotal de pessoas desenvolvedoras Backend: " + somarBuscaUmaLista(funcao, "Backend"));
//----------------------------------------------------------------------------------------------
console.log(
    "\nTotal de mulheres Cis e Trans Desenvolvedora Frontend: " +
    (somarBuscaDuasListas(genero, funcao, "Mulher Cis", "Frontend") +
        somarBuscaDuasListas(genero, funcao, "Mulher Trans", "Frontend")));
//---------------------------------------------------------------------------------------------

console.log(
    "Total de homens Cis e Trans Desenvolvedores Mobile maiores de 40 anos: " +
    (somarBuscaDuasListasEIdade(genero, funcao, "Homem Cis", "Mobile", "40", "maior") +
        somarBuscaDuasListasEIdade(genero, funcao, "Homem Trans", "Mobile", "40", "maior")));
//----------------------------------------------------------------------------------------------
console.log(
    "O número de Não Binários desenvolvedores FullStack menores de 30 anos: " +
    somarBuscaDuasListasEIdade(genero, funcao, "Não binário", "FullStack", "30", "menor"));
//----------------------------------------------------------------------------------------------
calcularMediaIdade(idade);
console.log("O número total de pessoas que responderam a pesquisa: " + idade.length)
console.log("A média de idade das pessoas que responderam a pesquisa é: " + media);


function listarIdade(i) {
    idade[contador] = i;
    contador++;
}

function adicionarGenero(g) {
    switch (g) {
        case 1:
            genero.push("Mulher Cis");
            break;
        case 2:
            genero.push("Homem Cis");
            break;
        case 3:
            genero.push("Não binário");
            break;
        case 4:
            genero.push("Mulher Trans");
            break;
        case 5:
            genero.push("Homem Trans");
            break;
        default:
            genero.push("Outros");
            break;
    }
}

function adicionarFuncao(f) {
    switch (f) {
        case 1:
            funcao.push("Backend");
            break;
        case 2:
            funcao.push("Frontend");
            break;
        case 3:
            funcao.push("Mobile");
            break;
        default:
            funcao.push("FullStack");
            break;
    }
}

function calcularMediaIdade(idade) {
    let somaMedia = 0;
    for (let i = 0; i < idade.length; i++) {
        somaMedia += idade[i];
    }
    media = somaMedia / idade.length;
}


function somarBuscaUmaLista(lista, index) {
    let soma = 0;
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] == index) {
            soma++;
        }
    }
    return soma;
}

function somarBuscaDuasListas(lista1, lista2, index1, index2) {
    let soma = 0;
    for (let i = 0; i < lista1.length; i++) {
        if (lista1[i] == index1 && lista2[i] == index2) {
            soma++;
        }
    }
    return soma;
}

function somarBuscaDuasListasEIdade(lista1, lista2, index1, index2, id, maiorOuMenor) {
    let soma = 0;
    if (maiorOuMenor == "menor") {
        for (let i = 0; i < lista1.length; i++) {
            if (lista1[i] == index1 && lista2[i] == index2 && idade < id) {
                soma++;
                return soma;
            }
        }
    } else {
        for (let i = 0; i < lista1.length; i++) {
            if (lista1[i] == index1 && lista2[i] == index2 && idade > id) {
                soma++;
                return soma;
            }
        }
    }
    return soma;
}


console.log(idade)
console.log(genero)
console.log(funcao)
