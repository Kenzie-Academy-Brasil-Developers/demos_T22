// Operadores de incremento (++) e decremento (--)
// Condicionais (if else)
// Operadores lógicos (&&) (||) (!)

// Funções

// Sintaxe de uma função:

// declaração de função

// Função sem parametros e sem retorno
function nomeQualquer() {
    console.log("Olá. Segundou!");
}

// Chamada ou execução da função:

// nomeQualquer()

// Função com parametros e sem retorno

// function mensagemDeBoasVindas (umaVariavelQualquer) {
//     console.log(umaVariavelQualquer)
// }

// mensagemDeBoasVindas("Olá turma! Boa noite!")

// Quando declaramos uma função, o nome dado ao valor dentro dos parentesis se chama PARAMETRO
// function meuConsoleLog (valor, valor2) {
//     console.log(valor)
//     console.log(valor2)
// }

// let nome = "Sakaki"

// // Quando executamos uma função, o nome dado ao valor dentro dos parentesis se chama ARGUMENTO
// meuConsoleLog(nome, "Silva")

// Função sem parametros e com retorno
// function retornaValor () {
//     return "Alex"
// }

// // console.log(retornaValor())
// let nome = retornaValor()
// console.log(nome)

// Função com parametros e com retorno

// function soma(numero1, numero2) {
//     return numero1 + numero2;
// }

// let total = soma(10, 5);
// console.log(total);

// if (soma(2,3000) > 14) {
//     console.log("É maior");
// }

// function verificaPar (num) {
//     if (num % 2 == 0) {
//         return true
//     } else {
//         return false
//     }
// }

// if (!verificaPar(8)) {
//     //  Quero executar se o número for impar.
//     console.log("Entrou no if")
// } 

// function soma(num1, num2) {
//     return num1 + num2
// }

// function subtracao(num1, num2) {
//     return num1 - num2
// }

// function calculadora (num1, sinal, num2) {
//     if (sinal === "+") {
//         return soma(num1, num2)
//         // return num1 + num2 
//     } else if (sinal === "-") {
//         return subtracao(num1, num2)
//     } else {
//         alert("Operação inválida")
//     }
// }

// console.log(calculadora(20, "+", 5))
// console.log(calculadora(20, "-", 5))
// console.log(calculadora(20, "*", 5))

function mensagem (nome, modulo) {
    
    return `Olá ${nome}. Bem vindo ao ${modulo}`
    if (nome === "Alex") {
        console.log("Entrou no if")
    }
}

console.log(mensagem("fulano", "M2"))
// mensagem("Alex", "M2")



function double () {
    let num = 2*20

    if (num / 3 < 7) {
        num = num * 2
    } 

    return num
}

console.log(double())
