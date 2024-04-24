// Faça um programa que calcule a soma dos números pares de 1 a 100.
let sumEven = 0;

for(i = 1; i<=100; i++){
    if(i%2 == 0) {
        sumEven = i + sumEven;
    }
}

console.log(sumEven);