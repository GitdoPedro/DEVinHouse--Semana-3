function separaObjeto(objeto){
    ({nome,idade,profissao} = objeto)
    imprimeObjeto (nome,idade,profissao)
}

function imprimeObjeto(n,i,p){
    console.log('Este(a) é '+ n + ", tem " + i + " e é "+ p + '.')
}


const pessoa = {
    nome: 'Pedro',
    idade: 32,
    profissao: 'programador'
  };

separaObjeto(pessoa)
