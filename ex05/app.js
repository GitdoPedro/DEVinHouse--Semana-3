function somaTudo(...numeros){
    let soma = 0
    numeros.forEach(numero => { soma+=numero })
    return soma
}

const resultado = somaTudo(1, 2, 3, 4);
console.log(resultado);
// resultado deve ser 10