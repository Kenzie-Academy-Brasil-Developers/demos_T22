// Operadores lógicos
// Not (!)

// let valorBoleano = false

// if (!valorBoleano) {
//     console.log("Entrou no if")
// }

// console.log(valorBoleano)

// Or (||) -> Se pelo menos uma expressão ou operação for verdadeira, o resultado de toda a expressão é true

// true - true   = true
// true - false  = true
// false - true  = true
// false - false = false

// let nome = "Alex"
// let sobrenome = "Sakaki"

// //         true
// //    true  ||  false
// if (10 > 5 || 5 > 200 || 20 > 150) {
//     console.log("Entrou no if")
// }

// And (&&) -> TODAS as operações ou expressões devem ser verdadeiras para o resultado ser true

// true - true   = true
// true - false  = false
// false - true  = false
// false - false = false

// let username = "alex17"
// let pass = "12345"

// //                       false
// //           true                  false
// if (username === "alex17" && pass === "1234") {
//     console.log("Você está logado!")
// } else {
//     console.log("Usuário ou senha inválidos");
// }

// operadores de incremento (++)

// let contador = 10

// // contador = contador + 15
// // contador += 15

// contador++
// // console.log(contador)
// contador++
// // console.log(contador)
// contador++
// console.log(contador)

// operadores de decremento (--)
// contador--
// contador -= 3
// console.log(contador);

// contador *= 2
// console.log(contador)
// contador /= 2

// ** Extra

let podeDemitir = false;

let isAdmin = true;
let tempoDeCasa = 3;
let cargo = "Trabalhador Honesto";
let equipe = 1;
let secretaria = true;
let cpfLimpo = true;
let carteiraDeTrabalho = 10;
//                                                                                                       false                          true
// if (isAdmin == true && tempoDeCasa > 2 && (cargo == "supervisor" || cargo == "gerente") && ((equipe >= 5 && secretaria == true) || (cpfLimpo == true && carteiraDeTrabalho >= 10))) {
//     podeDemitir = true
// }

if (isAdmin == true) {
    console.log("Primeiro if")
    if (tempoDeCasa > 2) {
        console.log("Segundo if")
        if (cargo == "supervisor" || cargo == "gerente") {
            console.log("Terceiro if")
            if (
                (equipe >= 5 && secretaria == true) ||
                (cpfLimpo == true && carteiraDeTrabalho >= 10)
            ) {
                podeDemitir = true;
            }
        }
    }
}

// se for admin
// se tempo de casa for maior que 2 anos
// se cargo for supervisor ou gerente
// se tiver no mínimo 5 membros na equipe e tiver uma secretaria ou se tiver o cpf limpo e tiver 10 anos no mínimo de carteira de trabalho

console.log(podeDemitir);
