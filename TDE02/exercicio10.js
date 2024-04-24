// Crie uma função que receba um número como parâmetro e retorne o 
// fatorial desse número.
function factorial(a) {
    if (a == 0) {
        return 1;
    } else {
        return (a * factorial(a - 1));
    }
}

console.log(factorial(5));