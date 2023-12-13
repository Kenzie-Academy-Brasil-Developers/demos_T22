// Arrays

// let nome = "Sakaki"
// console.log(nome.length);
// console.log(nome[0]);

// let meuArray = []

// console.log(meuArray);

// // push() sempre adiciona ao final do array

// let sobrenome = "Sakaki"
// let numero = 10
// let boleano = true

// meuArray.push(sobrenome)
// console.log(meuArray);

// meuArray.push(numero)
// console.log(meuArray);

// meuArray.push(boleano)
// console.log(meuArray);

// // unshift () sempre adiciona ao início do array

// meuArray.unshift("Alex")
// console.log(meuArray);

// meuArray.unshift(false)
// console.log(meuArray);

// // pop() sempre remove o último elemento de um array e pode ser guardado em uma variável

// let itemRemovido = meuArray.pop()
// console.log(meuArray)

// // shift () sempre remove o primeiro elemento de um array e pode ser guardado em uma variável

// let itemRemovido2 = meuArray.shift()
// console.log(itemRemovido2);
// console.log(meuArray)


// let arrayAntigo = ["alEx", "FuLAno", "CiClANo"]
// console.log(novoArray);
// novoArray.push("Ben 10")

// console.log(novoArray.at(3))

// console.log(novoArray[2])

// for (let i = 0; i < novoArray.length; i++) {
//     let nomeAtual = novoArray[i]
    
//     if (nomeAtual == "Ciclano") {
//         console.log(`Achei o Ciclano na posição: ${i}`)
//     }
// }

// function trataStrings(arr) {
//     let copiaDoArray = []

//     for (let i = 0; i < arr.length; i++) {
//         let posicaoAtual = arr[i]
//         copiaDoArray.push(posicaoAtual.toLowerCase())
//     }

//     return copiaDoArray
// }

// let novoArray = trataStrings(arrayAntigo)


// console.log(arrayAntigo);
// console.log(novoArray)

// novoArray.push("ben 10")
// console.log(novoArray);

let nome = "Alexander Silva Sakaki"

function transformaEmArray (texto) {
    let novoArray = []
    let nome = ""

    for (let i = 0; i < texto.length; i++) {
        let posicaoAtual = texto[i]
        
        
        if (posicaoAtual != " ") {
            nome += posicaoAtual
            console.log(nome);
        } else {
            novoArray.push(nome)
            console.log(novoArray);
            nome = ""
        }
    }

    novoArray.push(nome)

    return novoArray
}

console.log(transformaEmArray(nome));