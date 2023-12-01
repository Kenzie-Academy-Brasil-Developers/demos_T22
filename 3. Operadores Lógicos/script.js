// Operadores lógicos
// Not (!) - Inverte o valor boleano
// let isAdmin = false

// if (!isAdmin) {
//     console.log("Você é Admin")
// } else {
//     console.log("Você não é Admin")
// }

// let nome1 = "Alex";
// let nome2 = "Fulano";
// Or (||) -> Pelo menos uma expressão ou operação deve ser verdadeira

// exp 1 | exp2  = resultado

// true | false  = true
// false | true  = true
// true | true   = true
// false | false = false

//                               true
//       falso                   falso             true
// if (nome1 == "Alexander" || nome2 == "Ben 10" || 10 > 5) {
//     console.log("Um ou mais nomes são verdadeiros");
// }


// And (&&) -> Todas as operações ou expressões devem ser veridadeiras

// true | true   = true
// true | false  = false
// false | true  = false
// false | false | true = false

// let username = "alexzinho1"
// let password = "12345"
// let isAdmin = true
// let user2 = "Fulano"
// let password2 = "54321"

// //                          false
// //           false                        false          true
// if (username === "alexzinho" && password === "1234" && 10> 5) {
//     console.log("Você está logado")
// } else {
//     console.log("Usuário ou senha inválidos")
// }

//                                     true
//             false                       ou              true
//  (          false                     ) 
// if ((username === "alexzinho" && password === "1234") 
//      || 
//     (user2 === "Fulano" && password2 ==="54321") ) {
//     console.log("Bem vindo admin")
// }

// let idade = prompt("Digite sua idade")

// if (idade > 5 && idade < 12) {
//     alert("Você é uma criança")
// } else if (idade >= 12 && idade < 18) {
//     alert("Você é um adolescente")
// } else if (idade >= 18 && idade <= 65) {
//     alert("Você já é um adulto")
// } else {
//     alert("Você é senior")
// }

// Operadores de incremento (++)
// let contador = 10
// contador++

// let total = contador + 1


// contador = contador + 36
// contador += 80


// contador += 1
// contador += 1
// contador += 1

// Operadores de decremento (--)
// contador--
// console.log(contador)
// contador--
// console.log(contador)
// contador--
// console.log(contador)
// contador--
// console.log(contador)

// let num = 30

// num -= 5  === num = num - 5

// num *= 2  === num = num * 2

// num /= 2  === num = num / 2

// console.log(num)