// Escreva uma função chamada mapearArray que aceita uma função e um 
// array como parâmetros. A função mapearArray deve aplicar a função 
// recebida a cada elemento do array e retornar um novo array com os 
// elementos resultantes.
function elementSquare(element){
    return element ** 2;
}

const mapearArray = (array, callback) => {
    const newArr = [];
    for (let element of array) {
        newArr.push(callback(element));
    }
    return newArr;
}

element = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(mapearArray(element, elementSquare));
