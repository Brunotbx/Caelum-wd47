console.log("=== ARRAY ===")


//Sintaxe LITERAL
const carros = ["Uno", "Maveco", "UP"];

console.log(carros)
console.log(carros.length)



//Sintaxe OOP
let cars = new Array("Gol", "Fordão", "Fusca");
let cars2 = [];

console.log(cars)
console.log(cars.length)
console.log(cars.constructor)


//API
cars.push("Belina") //PUSH ADICIONA UM ELEMENTO AO FINAL DA LISTA
cars.unshift("Celta") // UNSHIFT ADCIONA UM ELEMENTO AO INICIO DA LISTA
cars.splice(3, 0, "S10") //SPLICE ADICIONA OU REMOVE O ELEMENTO DA LISTA (START, REMOVE A PARTIR, ITEM)
cars.sort() //ORDENA OS ITENS POR ORDEM ALFABÉTICA
cars.reverse() //INVERTE OS VALORES DO ARRAY
cars.pop() // REMOVE O ULTIMO ITEM DO ARRAY
cars.shift() // REMOVE O PRIMEIRO ITEM DO ARRAY
cars = cars.concat(carros); //CONCAT FAZ A CONCATENAÇÂO DE ARRAYS DIFERENTES SEM MODIFICA-LÁS (ATRIBUIÇÃO PARA RODAR)
cars2 = cars.join(" - ") // JOIN JUNTA OS ELEMENTOS EM UMA STRING
console.log(cars2.split("-")) // SPLIP TORNA A STRING EM UM ARRAY (ATRIBUIÇÃO PARA RODAR)


console.log(cars)
console.log(cars2)
console.log(cars[0]) // OPÇAO 1 - MOSTRAR POSIÇÕES DO ARRAY PELO INDEX


for (let i = 0; i < cars.length; i++) {
    console.log(cars[i])
} // OPÇAO 2 - FOR PARA CRIAR CONTADOR PARA MOSTRAR POSIÇÕES DO ARRAY


cars.forEach(function (item, index){
    console.log("Work -", arguments[0], arguments[1]);
    console.log(item, index)
}); // OPÇAO # - USANDO O FOREACH PARA MOSTRAR AS POSIÇOES