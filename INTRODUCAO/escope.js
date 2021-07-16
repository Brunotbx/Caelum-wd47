console.log("=== ESCOPE ===")


console.dir(this) //WINDOW - Objeto Global

/*
        WINDOW -> ESCOPO GLOBAL(this)

    /            \
    PROPS         Métodos
    curso         meuCurso()
*/


var curso = "html";

function meuCurso() {
    curso = "Javascript" //Global implicit
    return curso;
}

console.log(curso, window.curso)