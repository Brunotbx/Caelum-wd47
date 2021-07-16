console.log("=== REGEXP ===")


/*

Expressões regulares

Matacaracteres
--------------

^     = Inicio da linha
$     = Final da linha
[]    = Lista permitida
[i-f] = Lista permitida (intervalada)
{q}   = Quantificador
{min, max} = Quantificador limitado
\     = ESCAPE
?     = Opcional
()    = Grupo
+     = Repetidor

\s    = Espaço em branco
\d    = Apenas numeros
\w    = Alfanuméricos


CEP (exemplo Versão 1) = ^[0-9]{5}[\-\s]?[0-9]{3}$
CEP (exemplo Versão 2) = ^\d{5}[\-\s]?\d{3}$

E-mail = ^[a-zA-Z0-9\-\.\_]{1,}\@\w{1,}\.\w{2,}(\.\w{2})?$
E-mail Versão 2= ^[\w\.\_\-]{1,}\@\w{1,}\.\w{2,}(\.\w{2})?$


https://regex101.com/

*/


// SINTAXE LITERAL
const cep = "03020-010"
const regexPostal = /^\d{5}[\-\s]?\d{3}$/;

console.log(regexPostal)
console.log(regexPostal)
console.log(regexPostal.exec(cep))


// SINTAXE OOP
const emailUser = "nome@mail.com";

// const regexMail = /^[\w\.\_\-]{1,}\@\w{1,}\.\w{2,}(\.\w{2})?$/;
const regexMail = new RegExp("^[\\w\\.\\_\\-]{1,}\\@\\w{1,}\\.\\w{2,}(\\.\\w{2})?$"); //NO OOP DUPLICAR AS BARRAS

console.log(emailUser)
console.log(regexMail.test(emailUser))
console.log(regexMail.exec(emailUser))
console.log(emailUser.match(regexMail))
