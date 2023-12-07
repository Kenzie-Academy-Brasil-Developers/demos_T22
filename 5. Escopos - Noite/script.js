// Funções e sintaxe
// Funções com e sem parâmetro e funções com e sem retorno

// function formataNumeral (numeral) {
//     if (numeral.length < 2) {
//         return "0" + numeral
//     } else {
//         return numeral
//     }
// }

// let dia = formataNumeral(prompt("Digite o dia: "))
// let mes = formataNumeral(prompt("Digite o mes: "))
// let ano = prompt("Digite o ano: ")

// if (dia.length < 2) {
//     dia = "0" + dia
// }

// if (mes.length < 2) {
//     mes = "0" + mes
// }

// let dataFormatada = `${dia}/${mes}/${ano}`

// console.log(dataFormatada)

// Escopos

// Escopo global

// let nome = "Alex"

// console.log(nome)

// Escopo de bloco

// {
//     // let nome = "Fulano"
//     {
//         // let nome = "Ciclano"

//     }
//     // console.log(nome)

// }

// console.log(nome)

// if (true) {
//     let nome = "Ciclano"

//     // console.log(nome)
// }

// console.log(nome)

// Escopo de função

// let nome = "Alex";

// function teste(parametro) {
//     let nome = "Ciclano";
//     console.log(parametro);
//     if (true) {
//         console.log(parametro);
//         if (true) {
//             console.log(nome);
//         }
//     }
// }

// teste("qualquer");

// No-else-return

// function verificaPar(num) {
//     if (num % 2 == 0) {
//         return "É par";
//     }

//     return "É impar";
// }

// console.log(verificaPar(7));

function verificaAdmin(nome) {
    if (nome == "Alex") {
        return "Você é admin";
    } else if (nome == "Fulano") {
        return "Você é supervisor";
    }

    return "Você não tem permissão";
}

console.log(verificaAdmin("Alex"));
console.log(verificaAdmin("Fulano"));
console.log(verificaAdmin("Ciclano"));
