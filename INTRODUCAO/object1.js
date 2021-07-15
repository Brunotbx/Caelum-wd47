console.log("=== OBJECTS ===")

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
    marca        ligar()
    modelo       desligar()
    cor          andar()
    KM           freiar()
    ano          buzinar()

*/


// SINTAXE LITERAL

const modelo = {
    nome: "civiv",
    motor: 2.0,
    estilo: "sedã"
}

const carro = {
    marca: {
        nome: "honda",
        pais: "japão"
    },

    modelo: modelo,
    km: 5000,
    ano: 2020,
    cor: "preto",
    velocidade: 0,
    limite: {
        min: 0,
        max: 5
    },

    acessorios: ["alarme", "som", "liga-leve"],

    ligar: function() {
        return "ligou";
    },
    desligar:function() {
        return "desligou";
    },
    acelerar:function() {
        if (this.velocidade < this.limite.max) {
            return ++this.velocidade;
        }else {
            return this.velocidade
        }
    },
    freiar:function() {
        if (carro.velocidade > carro.limite.min) {
            return --carro.velocidade;
        }else {
            return carro.velocidade
        }
    },
}

console.log(carro);


// DOT NOTATION
// Objeto.( propriedade )
// Objeto.( method() )
console.log(carro.modelo.nome);
console.log(carro.acessorios[1]);

//BRACKET NOTATION
//Objeto["propriedade"]
//Objeto["method"]()
console.log(carro["cor"]);
console.log(carro["marca"].nome);
console.log(carro["ligar"]());