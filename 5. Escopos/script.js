// Declaração e chamada de função
// Funções com e sem parâmetro e funções com e sem retorno.

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

// let nome = "Ciclano"

// if (true) {
//     // let nome = "Alex"
//     console.log(nome)
// }

// console.log(nome)

// Escopo de função

// let numero = 123;

// function escopo(parametro) {
//     let numero = 1;
//     console.log(numero);

//     if (true) {
//         let numero = 2;
//         console.log(numero);
//         if (true) {
//             let numero = 3;
//             console.log(numero);
//         }
//     }
// }

// escopo("teste");

// No-else return

// function verificaParOuImpar(num) {
//     if (num % 2 == 0) {
//         return "É par";
//     }
//     return "É impar";
// }

// console.log(verificaParOuImpar(251));

function isAdmin(nome) {
    if (nome === "Alex") {
        return "É admin"
    } else if (nome === "Fulano") {
        return "É supervisor"
    } 
    // else {
    //     return "Tem permissões normais"
    // }
    return "Tem permissões normais"

}

console.log(isAdmin("Ciclano"))