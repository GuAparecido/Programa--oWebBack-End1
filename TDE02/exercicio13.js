// Faça um programa que verifique se um número é negativo, positivo ou zero.
function verificaNumero(numero) {
    if (numero < 0) {
        return "O número é negativo";
    } else if (numero > 0) {
        return "O número é positivo";
    } else {
        return "O número é 0";
    }
}

console.log(verificaNumero(1));