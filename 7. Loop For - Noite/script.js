// Loop for

// inicializador
// condição de parada
// incremento ou decremento ou controle

// for (let inicializador = 0; inicializador < 100; inicializador++ ) {

//     console.log(inicializador)

// }


// for (let i = 1; i <= 10; i *=2) {
//     console.log(i)
// }

// let nome = "Alexander Silva Sakaki"
// console.log(nome.length)
// console.log(nome[nome.length - 1])


// for (let i = 0; i < nome.length; i++) {
//     console.log(nome[i])
// }

// for (let i = nome.length - 1; i >= 0; i--) {
//     console.log(nome[i])
// }

// for (let i = 10; i > 0; i--) {
//     console.log(i)
// }

// let contador = 0

// for (let i = 1; i < 9; i++) {
//     if (i % 2 == 0) {
//         contador++
//     }
// }

// function contaPar (min, max) {
//     let contador = 0

//     for (let i = min; i < max; i++) {
//         if (i % 2 == 0) {
//             contador++
//         }
//     }
    
//     return contador
// }


// console.log(contaPar(1, 300))

// let textoMaluco =  "A   l e x      an  d e r     Sil     v a"


// function removeEspaco (texto) {
//     let novaString = ""

//     for (let i = 0; i < texto.length; i++) {
//         if (texto[i] != " ") {
//             novaString += texto[i]
//         }
//     }

//     return novaString
// }

// let textoNormal = removeEspaco(textoMaluco)

// console.log(textoNormal)

let texto = "Eu vendo cebola em uma loja de cebola"

// let novoTexto = texto.replace("cebola", "abacates")
// let novoTexto = texto.replaceAll("cebola", "abacates")

// console.log(novoTexto)

function meuReplace(letraVelha, letraNova, text) {
    let novaString = ""

    for (let i = 0; i < text.length; i++) {
        if (text[i] === letraVelha) {
            novaString += letraNova
        } else (
            novaString += text[i]
        )
    }

    return novaString
}


console.log(meuReplace("o", "Y", texto))