// Métodos de número

// parseInt()
// Transforma uma string com valor numérico em tipo number (int)

let num = "20"

console.log(num);
console.log(typeof num)

let numeroAlterado = parseInt(num)

console.log(numeroAlterado);
console.log(typeof numeroAlterado);

// parseFloat()
// Transforma uma string com valor numérico e ponto flutuante em tipo number (float)

// let num = "85.5786"

// console.log(num);
// console.log(typeof num);

// let numeroAlterado = parseFloat(num)

// console.log(numeroAlterado);
// console.log(typeof numeroAlterado);

// toFixed()
// Arredonda um valor com ponto fulutante, de acordo com as casas decimais que forem especificadas

// let num = 10.16748

// console.log(num);
// console.log(typeof num);

// console.log(num.toFixed(4));
// console.log(typeof num.toFixed(4));

// toString()
// Transforma um número em uma string

// let num = 10.16748

// console.log(num.toString())
// console.log(typeof num.toString())

// let num1 = parseInt(prompt("Digite um número: "))
// let num2 = parseInt(prompt("Digite um número: "))


// console.log(typeof num1);
// console.log(typeof num2);



// Métodos de string

// replace()
// Substitui o primeiro caractere ou conjunto de caracteres encontrados na string, pelo conjunto especificado no segundo parãmetro

// let frase = "Vendo pães em uma padaria que tem muitos pães"

// let fraseAtualizada = frase.replace("pães", "carne")

// console.log(fraseAtualizada);

// replaceAll()

// let fraseAtualizada = frase.replaceAll("pães", "carnes")

// console.log(fraseAtualizada);

// startsWith()

// let nome = " Alex "

// console.log(nome.startsWith("a"))

// endsWith()

// console.log(nome.endsWith(" "));

// toLowerCase() toUpperCase()

// let nome = "ALEX SiLVa SakAKi"
// let sobrenome = "Sakaki"

// let nome2 = "fulano"

// console.log(nome.toLowerCase());
// console.log(nome.toUpperCase());

// console.log(sobrenome.toLowerCase());
// console.log(sobrenome.toUpperCase());

// console.log(nome2.toUpperCase());

// let nome2 = prompt("Digite seu nome: ").toLowerCase()
// console.log(nome2);

// if (nome.toLowerCase() === "alex silva sakaki") {
//     console.log("Igual");
// }

// includes()

// let nome = "Alexander Silva Sakaki"
// let endereco = "Doutor Nerio Nunes"

// console.log(nome.includes("alexander"));

// if (!endereco.toLowerCase().includes("rua")) {
//     endereco = "Rua " + endereco
// }

// console.log(endereco);


