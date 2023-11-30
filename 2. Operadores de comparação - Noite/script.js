// Manipulação de string

let letra1 = "a";
let letra2 = "b";

// console.log(letra1 + letra2); // concatenando uma string

//          0 1 2 3
let nome = "Alex";
let modulo = "M2";

// Concatenação de string

// console.log("Olá, " + nome + ". Bem vindo ao " + modulo + "!");

// Template string / interpolação de string

// console.log(`Olá, ${nome}. Bem vindo ao ${modulo}!`)

// Indices de uma string

// console.log(nome[1])
// console.log(nome.length)

// Comparadores

// 1- De igualdade:
// == ou === (Verifica se o tipo e o valor são iguais)
// != ou !== (Verifica se o tipo e o valor são diferentes)

// 2- Maior ou igual
// > ou >= (verifica se o elemento da esquerda é maior ou igual ao elemento da direita)

// 3- Menor ou igual
// < ou <= (verifica se o elemento da esquerda é menor ou igual ao elemento da direita)

// Estruturas condicionais
let idade = 13;

if (idade >= 18) {
    // Execute isso:
    console.log("Você pode tirar a carta");
} else if (idade >= 14) {
    console.log("Falta pouco para vc tirar a carta");
} else {
    console.log("Você é muito jovem, meu jovem");
}

console.log("Fora do if");
