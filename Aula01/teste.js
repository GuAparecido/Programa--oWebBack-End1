console.log("Olá mundo"); 

let teste = 10;
var nome = "Igor"; // Não usamos
// Even é par
const isEven = true;

teste = 12;

teste = "Ola mundo";

nome = 42;

console.log(teste); 
console.log(nome); 
console.log(isEven); 

// Soma
console.log(2 + 2);
// Multiplicação
console.log(3 * 2);
// Divisão
console.log(10 / 2);
// Subtração
console.log(8 - 3);
// Resto
console.log(5 % 2);
// Retornar somente a parte inteira
console.log(parseInt(5 / 2));
// Potência
console.log(3 ** 2);

// Bug da linguagem, não dá certo
console.log(0.1 + 0.2);
// Apresentando o erro, não podemos utilizar
console.log(0.1 + 0.2 === 0.3);
// Corrigindo o bug
console.log((0.1 * 10) + (0.2 * 10) / 10);
// Pi
console.log(Math.PI);

// Tabela verdade "e"
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// Tabela verdade "ou"
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log("\n\nComparações");
console.log(1 == 1);
console.log(1 == '1');
console.log(1 === '1');
console.log(1 === 1);
console.log(1 != 2);
console.log(1 != '1');
console.log(1 !== '1');
console.log(1 !== 2);
console.log(1 !== 1);
console.log(1 < 2);
console.log(1 <= 1);
console.log(1 >= 1);

let idade = 18;
if (idade >= 18) {
    console.log("Maior de idade");
} else if (idade === 18) {
    console.log("Igual a 18")
} else {
    console.log("Menor de idade");
}

const code = 1;
switch(code) {
    case 1:
        console.log("Ligar tv")
        break
    case 2:
        console.log("Desligar tv")
        break
    default:
        console.log("Sei lá")
}

// i++ -> i += 1 -> i = i + 1;
// i-- -> i -= 1 -> i = i - 1;
// i /= 2 -> i = i / 2;
for(let i = 0; i < 10; i++) {
    console.log(i);
}

let i = 10;
while(i < 30) {
    console.log(i);
    i *= 2; // i = i * 2;
}

// Se não passar o valor de a ou b o valor padrão é 3 + 1 = a + b
function soma(a = 3, b = 1) {
    return a + b;
}

const result = soma(2, 3);
console.log(result);



