// For

// Inicializador
// Condição
// Incremento / decremento

// for (let incializador = 0; incializador <= 10; incializador++) {
//     // executar nossa repetição ou lógica
//     console.log(incializador)

// }

// for (let i = 0; i < 10; i++) {
//     console.log(i *3)
// }

// console.log(nome[nome.length - 1])

// for (let i = 0; i < nome.length; i++) {
    //     console.log(nome[i])
    // }
    
    // for (let i = nome.length - 1; i >= 0; i--) {
        //     console.log(i)
        //     console.log(nome[i])
        // }
        
// let nome = "Alex";
// nome = nome.toLowerCase();

// let countVowels = 0;
        
// for (let i = 0; i < nome.length; i++) {
//     if (
//         nome[i] === "a" ||
//         nome[i] === "e" ||
//         nome[i] === "i" ||
//         nome[i] === "o" ||
//         nome[i] === "u"
//     ) {
//         countVowels++;
//     }
// }

// console.log(countVowels);


// function verificaPar (num) {
//     if (num % 2 == 0) {
//         return true
//     }
//     return false
// }

// let contaPar = 0
// // let contaImpar = 0

// for (let i = 1; i <= 10; i++) {
//     if (verificaPar(i)) {
//         contaPar ++
//     } 
// }

// console.log(contaPar)
// console.log(contaImpar)


// function contaPar (num) {
//     let contador = 0

//     for (let i = 1; i <= num; i++) {
//         if (i % 2 == 0) {
//             contador ++
//         }
//     }
    

//     return contador
// }

// console.log(contaPar(224))


// let stringMaluca = "A   l   e x S     a   k a   k   i"
// console.log(stringMaluca.length)

// function tiraEspacos (texto) {
//     let novaString = ""

//     for (let i = 0; i < texto.length; i ++) {

//         if (texto[i] != " ") {
//             novaString += texto[i]
//         }
//     }

//     return novaString
// }

// console.log(tiraEspacos(stringMaluca))


// let nome = ""
// nome += "a"
// console.log(nome)

// nome += "b"
// console.log(nome)
// nome += "c"
// console.log(nome)


// ******************* CUIDADO COM LOOPING INFINITO ****************************

// for (let i = 0; i < 10; i--) {
//     // Vai executar algo
// }