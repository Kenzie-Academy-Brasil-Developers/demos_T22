// **************EX-01

// let nome = prompt("Digite seu nome: ")
// let idade = prompt("Digite sua idade: ")
// let estaAcompanhado = prompt("Está acompanhado? (s) ou (n)")

// if (estaAcompanhado.toLowerCase() === "s") {
//     estaAcompanhado = true
// } else if (estaAcompanhado.toLowerCase() === "n") {
//     estaAcompanhado = false
// } else {
//     alert("Digite 's' ou 'n'")
// }

// if (idade < 18) {
//     alert(`Entrada não permitida para ${nome}: Menor de idade.`)
// } else {
//     if (estaAcompanhado) {
//         alert(`Entrada permitida para ${nome}: Conceder desconto.`)
//     } else {
//         alert(`Entrada permitida para ${nome}: Valor integral.`)
//     }
// }


// ***********EX-02

// Se o usuário inserir um número abaixo de 0 ou acima de 10 para a nota ou presença, emita um alerta informando que o valor é inválido. 

// Se o nome tiver menos de 5 caracteres, emita um alerta informando que o nome é inválido. ***"OK"

// Se a média das notas do aluno for igual ou superior a 8 e a presença for igual ou superior a 6, exiba o seguinte alerta: "A nota do aluno [nome] é [mediaNota] e sua presença é [presenca]: Aluno aprovado!".

// Caso contrário, exiba o seguinte alerta: "A nota do aluno [nome] é [mediaNota] e sua presença é [presenca]: Aluno reprovado!".

// let nome = prompt("Digite seu nome: ")
// if (nome.length < 5) {
//     alert("Nome inválido.")
// }
// let presenca = prompt("Digite sua presença: ")
// if (presenca < 0 || presenca > 10) {
//     alert("Valor inválido")
// }

// let quantidadeMateria = 0
// let somaNota = 0

// for (let i = 1; i <= 3; i++) {
//     prompt("Digite a matéria: ")
//     let nota = parseInt(prompt("Digite a nota: "))
//     quantidadeMateria++
//     somaNota += nota

// }

// let mediaNota = somaNota / quantidadeMateria
// console.log(mediaNota)
// console.log(somaNota)

// if (mediaNota >= 8 && presenca >= 6) {
//     alert(`A nota do aluno ${nome} é ${mediaNota} e sua presença é ${presenca}: Aluno aprovado!`)
// } else {
//     alert(`A nota do aluno ${nome} é ${mediaNota} e sua presença é ${presenca}: Aluno Reprovado!`)
// }

// ******EX - 04 

// Você faz parte da equipe de inteligência da polícia e está investigando a troca de mensagens entre dois grupos de crackers. O chefe de polícia suspeita que eles estejam planejando algo, mas até agora, apenas algumas letras foram identificadas. A dificuldade está em separar essas letras em palavras compreensíveis, já que não há espaços entre elas.

// Sua missão é criar um programa que automatize o processo de contar quantas palavras existem no texto digitado, seguindo a regra: qualquer caractere que não seja uma letra minúscula de 'a' a 'z' é considerado um separador de palavra.

// O programa deve receber um texto com até 250 caracteres como entrada e deve fornecer como saída o número de palavras presentes no texto. ok

// Exemplos:

// Entrada: ssssssssss
// Saída: 1

// Entrada: sss.aasd.sss
// Saída: 3

// Entrada: sssaasdsS
// Saída: 2

// Entrada: sssa1asdss
// Saída: 2

// Desenvolva um algoritmo capaz de resolver esse enigma e contar as palavras no texto fornecido, ajudando assim a polícia a decifrar as mensagens dos crackers.

// "a".charCodeAt(0)
// 97
// "z".charCodeAt(0)
// 122

function contaPalavras(texto) {
    if (texto.length > 250) {
        return "O programa não suporta textos maiores do que 250 caracteres."
    } 
    let quantidadeDePalavras = 1

    for (let i = 0; i< texto.length; i++) {
        let letra = texto[i]

        if (letra.charCodeAt(0) < 97 || letra.charCodeAt(0) > 122 ) {
            quantidadeDePalavras++
        }
    }

    return quantidadeDePalavras
}

console.log(contaPalavras("ssS"))


