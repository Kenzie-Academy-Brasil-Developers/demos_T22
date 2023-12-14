// Arrays

// let nome = "Alex"
// console.log(nome[nome.length - 1])

// let meuArray = []

// let nome = "Alex"
// let nomeDoMeio = "Silva"
// let sobrenome = "Sakaki"

// push() sempre vai adicionar elementos ao final do nosso array

// meuArray.push(nome)


// let primeiroIndice = meuArray[0]

// console.log(primeiroIndice);

// meuArray.push(nomeDoMeio)
// meuArray.push(sobrenome)
// console.log(meuArray);


// unshift() adiciona elementos sempre no começo do nosso array

// meuArray.unshift(nomeDoMeio)
// console.log(meuArray);

// meuArray.unshift(sobrenome)
// console.log(meuArray);

// pop() sempre vai remover o último elemento do array e é possível guardá-lo em uma variável

// console.log(meuArray)

// let elementoRemovido = meuArray.pop()


// console.log(elementoRemovido);
// console.log(meuArray);

// meuArray.push(elementoRemovido.toUpperCase())
// console.log(meuArray)

// shift() sempre vai remover o primeiro elemento do array e é possível guardá-lo em uma variável

// let elementoRemovido = meuArray.shift()
// console.log(elementoRemovido);
// console.log(meuArray);


// let array = ["alEx", "fUlaNO", "CICLano"]

// console.log(array[3]);

// console.log(array.at(-4));

// for (let i = 0; i < array.length; i++) {
//     if (array[i] == "Ciclano") {
//         console.log(`Achei o Ciclano no índice: ${i}`);
//     }
// }

// function trataStrings (arr) {
//     let copiaDoArray = []

//     for (let i =0; i < arr.length; i++) {
//         let posicaoAtual = arr[i]

//         copiaDoArray.push(posicaoAtual.toLowerCase())
//     }

//     return copiaDoArray
// }

// console.log(array)

// let arrayTratado = trataStrings(array)
// console.log(arrayTratado);

// arrayTratado.push("ben 10")
// console.log(arrayTratado);


let nome = "Alexander Silva Sakaki"
let nome2 = "Ciclano da Silva Sauro"

function transformaEmArray (texto) {
    let novoArray = []
    let nomeAtual = ""

    for (let i = 0; i < texto.length; i++) {
        let letraAtual = texto[i]
        // console.log("Letra atual:", letraAtual, i);

        if (letraAtual != " ") {
            nomeAtual += letraAtual
            // console.log("Nome Atual:", nomeAtual);
        } 
        else {
            novoArray.push(nomeAtual)
            nomeAtual = ""
        }
    }

    novoArray.push(nomeAtual)

    return novoArray
}

let arrayComONome = transformaEmArray(nome)
console.log(arrayComONome);

let mensagem = `Olá Sr. ${arrayComONome.at(0)}. Bem vindo`
console.log(mensagem);


let nome = "Marcos"

for (let i = nome.length - 1; i >= 0; i--) {
    console.log(nome[i])
}

