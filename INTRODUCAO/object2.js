console.log("=== OBJECTS 2 ===")

/*
        ------------
        |  OBJETO  |
        ------------
        /           \
    Caract        Actions

        ------------
        |   CARRO  |
        ------------
        /           \
    PROPS        METHODS
    altura       comer()
    peso         andar()
    nome         falar()
    idade        ...
    sexo
    nacional
*/


//SINTAXE LITERAL
const pessoa = {};


//DOT NOTATION
//Objeto.propriedade = valor
pessoa.altura = 1.80
pessoa.nome = "Joao"


//Adicionar propriedade dinamicamente
//Ojeto.metodo = function() {}
pessoa.comer = function() {
    return "comendo";
}


//BRACKET NOTATION
//Ojeto["propriedade"] = valor
pessoa["sexo"] = "Masc"


//Objeto["metodo"] = function() {};
pessoa["falar"] = function() {
    return "Falando"
}


console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa["sexo"])
console.log(pessoa.falar())