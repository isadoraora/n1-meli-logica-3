// use Map, filter, forEach, find e ou Reduce.

//1
const numbers = [
    1,
    3,
    4,
    6,
    8,
    9,
    56,
    34,
    23,
    2,
    89,
    101,
    320,
    12,
    13,
    45,
    40,
    43,
    88
]
const multiplos3 = numbers.filter(item => item % 3 === 0)
console.log(multiplos3)

const multiplos35 = numbers.filter(item => item % 5 === 0)
console.log(multiplos3, multiplos35)

// const novaArr = numbers.map(function (item) {
//     return item % 5 == 0
// })
// console.log(novaArr);
// retorne numeros multiplos de 3
// retorne numeros multiplos de 3 e de 5


//2
const palavrinhas = [
    "bolacha",
    "biscoito",
    "bombom",
    "bala",
    "abestalhado",
    "MASSA",
    "pastilha"
]
const array = palavrinhas.filter(item => item.length < 5)
console.log(array);
// retorne palavras que tenham menos de 5 letras

//3
// // itere pela array modificando todos os items, multiplicando eles por 3.
const numeros = [3, 4, 5, 6, 6, 7]
const arr = numeros.map(function (item) {
    return item * 3
})
console.log(arr);
// // depois printe quantos numeros são maiores que 10
const filtrados = arr.filter(item => item > 10)
console.log(filtrados.length)

// // depois quantos são menores que 10.
const menores = arr.filter(item => item < 10)
console.log(menores.length)
console.log(menores)
// // printe o numero menor que 10.

//4
const numeritos = [
    1,
    3,
    4,
    6,
    8,
    9,
    56,
    34,
    23,
    2,
    89,
    101,
    320,
    12,
    13,
    45,
    40,
    43,
    88
]
const valorTotal = numeritos.reduce(function (total, num) {
    return total + num
})
console.log(valorTotal);

// calcule o valor total da soma dos items da array numbers

//5 -
const mulheres = [
    {
        user: 234,
        name: "Marcia",
        idade: 40,
        hobbies: ["estudar", "comer", "falar"]
    },
    {
        user: 235,
        name: "Lorena",
        idade: 20,
        hobbies: ["dançar", "assistir tv", "estudar"]
    },
    {
        user: 236,
        name: "Patricia",
        idade: 24,
        hobbies: ["correr", "acampar", "surfar"]
    },
    {
        user: 237,
        name: "Mariana",
        idade: 15,
        hobbies: ["skate", "bicicleta", "break dance"]
    },
    {
        user: 238,
        name: "Isis",
        idade: 34,
        hobbies: ["ler", "estudar", "discutir"]
    },
    {
        user: 239,
        name: "Pietra",
        idade: 23,
        hobbies: ["jogar dominó", "sinuca", "cartas"]
    }
]
//const muie = mulheres.find(item => item.user = 238)
//console.log(muie)


const estudantes = mulheres.filter(item => item.hobbies.indexOf("estudar") > -1)

estudantes.map(item => {
    console.log(item.name)
})
// retore a mulher que tiver o user = 238
// retorne o nome das mulheres que gostam de estudar
