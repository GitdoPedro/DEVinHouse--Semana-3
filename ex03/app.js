
function concatena(v1,v2){

    let novo = [...v1,...v2]

    return (novo)

}


const novoArray = concatena([1, 2, 3], [4, 5, 6]);
console.log(novoArray);