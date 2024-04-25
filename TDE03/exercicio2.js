// Escreva uma função chamada somaElementosPares que aceita um array de 
// números como parâmetro e retorna a soma de todos os elementos pares 
// do array.
function sumElementEven(array) {
    sumEven = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            sumEven +=  array[i];
        }
    }
    return sumEven;
}

console.log(sumElementEven([1, 2, 3, 4, 5, 6]));