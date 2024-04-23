// Crie uma função chamada menorNumero que recebe três números como 
// parâmetros e retorna o menor deles.
function smallerNumber (a = 0, b = 0, c = 0) { 
    if (a == b || a == c) {
        return ("Existem dois valores iguais: " + a);
    } else if (b == a || b == c) {
        return ("Existem dois valores iguais: " + b);
    } else if (a < b  && a < c) {
        return a;
    } else if (b < a && b < c) {
        return b;
    } else {
        return c;
    }
}

console.log(smallerNumber(2,1,3));