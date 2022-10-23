
function verificaPalindromo(candidato){
    const tam = candidato.length;
    for (let i = 0; i < tam / 2; i++) {
        if (candidato[i] !== candidato[tam - 1 - i]) {
            return false;
        }
    }
    return true
}


const teste1 = verificaPalindromo("ana");
console.log(teste1)
// true

const teste2 = verificaPalindromo("julia");
console.log(teste2)
// false

