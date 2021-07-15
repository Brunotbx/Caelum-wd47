console.log("=== FUNCTIONs ===")


// Função nominada, em tese, usada quando for ser reaproveitada em outros momentos no código
function multiplicar(a, b) {
    let soma = a * b;
    return soma;
}


console.log(multiplicar(5, 2));

// Função anonima, geralmente utilizada quando a function não será utilizada novamente
const calc = function (x=0, y=0){
    return x * y
};

console.log(calc(3, 6))


