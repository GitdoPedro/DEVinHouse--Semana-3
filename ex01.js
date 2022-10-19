const procuraMinMax = vetor => {
    let max = -100;
    let min = 100;

    if (vetor == null ||vetor.length < 2){
        console.log("Não é possível encontrar")
        return
    } 
    for (let i = 0 ; i < vetor.length; i++ ){
        if (vetor[i] > max){
            max = vetor[i]
        }
        if (vetor[i] < min){
            min = vetor [i]
        }
    }

    if (max != min){
        console.log('Maior = ' + max)
        console.log('Menor = ' + min)
    }else{
        console.log("Não é possível encontrar")
    }

}

procuraMinMax([56, 65, 64, -3, 23, 42, -15, 65, 14, 32, 78, 70, 47])
procuraMinMax([])
procuraMinMax([1])
procuraMinMax([1, -1])
procuraMinMax(null)
procuraMinMax([-2,-2,-2,-2])
procuraMinMax([20,10, 30])