const rl = require("readline-sync");

console.log("=====================================================================")

let tipo1, tipo2, tipo3, resultado, pergunta;

while (true) {
    pergunta = rl.question("E um animal vertebrado? ");

    if (pergunta.toLowerCase() == "sim") {
        tipo1 = "vertebrado";

        pergunta = rl.question("E uma ave? ");
        if (pergunta.toLowerCase() == "sim") {
            tipo2 = "ave";
            pergunta = rl.question("E carnivoro? ");

            if (pergunta.toLowerCase() == "sim") {
                tipo3 = "Carnívoro";
                resultado = "Águia";
                break;
            }
            else if (pergunta.toLowerCase() == "nao") {
                tipo3 = "Onívoro";
                resultado = "Pomba";
                break;
            }
            else {
                console.log("Digite apenas 'sim' ou 'nao'.");
                continue;
            }
        }
        else if (pergunta.toLowerCase() == "nao") {
            tipo2 = "mamifero"
            pergunta = rl.question("E onívoro? ");

            if (pergunta.toLowerCase() == "sim") {
                tipo3 = "Onívoro";
                resultado = "Humano";
                break;
            }
            else if (pergunta.toLowerCase() == "nao") {
                tipo3 = "Herbívoro";
                resultado = "Vaca";
                break;
            }
            else {
                console.log("Digite apenas 'sim' ou 'nao'.");
                continue;
            }
        }
        else {
            console.log("Digite apenas 'sim' ou 'nao'.");
            continue;
        }
    }
    else if (pergunta.toLowerCase() == "nao") {
        tipo1 = "invertebrado";

        pergunta = rl.question("E um inseto? ");
        if (pergunta.toLowerCase() == "sim") {
            tipo2 = "inseto";
            pergunta = rl.question("E hematofogo? ");

            if (pergunta.toLowerCase() == "sim") {
                tipo3 = "hematófogo";
                resultado = "Pulga";
                break;
            }
            else if (pergunta.toLowerCase() == "nao") {
                tipo3 = "Herbívoro";
                resultado = "Lagarta";
                break;
            }
            else {
                console.log("Digite apenas 'sim' ou 'nao'.");
                continue;
            }
        }
        else if (pergunta.toLowerCase() == "nao") {
            tipo2 = "Anelídeo"
            pergunta = rl.question("E Hematofogo? ");

            if (pergunta.toLowerCase() == "sim") {
                tipo3 = "Hematófogo";
                resultado = "Sanguessuga";
                break;
            }
            else if (pergunta.toLowerCase() == "nao") {
                tipo3 = "Onívoro";
                resultado = "Minhoca";
                break;
            }
            else {
                console.log("Digite apenas 'sim' ou 'nao'.");
                continue;
            }
        }
        else {
            console.log("Digite apenas 'sim' ou 'nao'.");
            continue;
        }
    }
    else {
        console.log("Digite apenas 'sim' ou 'nao'.");
        continue;
    }
}

console.log(`O animal que você escolheu é ${tipo1}, sendo um(a) ${tipo2} e ${tipo3}, então é um(a) ${resultado}`);
