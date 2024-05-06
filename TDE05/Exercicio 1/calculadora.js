// 1. Crie um modulo de calculadora, exportando as 4 operações básicas: somar, subtrair, dividir, multiplicar
// - Dentro de outro arquivo, importar as funções e executar as operações

function soma(num1, num2) {
    return num1+num2;
}

function menos(num1,num2){
    return num1-num2;
}

function dividir(num1,num2){
    return num1/num2;
}

function multiplicar(num1,num2){
    return num1*num2;
}

const operacoes = {
    soma,
    menos,
    dividir,
    multiplicar
};

module.exports = operacoes;