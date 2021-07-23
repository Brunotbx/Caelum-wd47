console.log("=== OBJECT VS JSON ===");


//JS Object
const people = {
    name: "Bruno",
    age: 31
};

console.log(people, typeof people);



//JSON - Javascript Object Notation
//Transforma Objeto em texto
const jsonPeople = JSON.stringify(people);
console.log(jsonPeople, typeof jsonPeople);



// Transforma texto em objeto
console.log(JSON.parse(jsonPeople));