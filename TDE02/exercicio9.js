// Escreva uma função que receba um número como parâmetro e retorne 
// verdadeiro se for par e falso caso contrário.
function isEven(a = 0) {
    if (a % 2 == 0) {
       return "O valor digitado é par";
    } else {
        return "O valor digitado é ímpar";
    }
}

console.log(isEven(3));