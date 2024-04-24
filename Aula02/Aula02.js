// Declarando função como variável.
const soma = function (a, b) {
    return a + b;
}

console.log(soma(2,3));

const sub = (a, b) => {
    return a - b;
}

console.log(sub(5, 3));

const isEven = (n) => (n % 2 == 0);

const quadratic = (n) => n ** 2;

const idade = 18;
if (idade >= 18) console.log("Maior de idade");
// Igual a:
if (idade >= 18) {
    console.log("Maior de idade");
}

const teste = ( ) => {
    const idade = 18;
    let f = false;
    if (idade >= 18) {
        var isBigger = true;
        let t = true;
    }
    console.log(isBigger); // true
    console.log(f); // true
    // console.log(t) // quebra.. t não foi definido.
    // Var utilizo de dentro do laço para fora, o let não permite!
}

console.log("Arrays");

const notas = [10, 6, 4, 8, 6, 8, 10, 10];

console.log(notas);
notas.push(9);

console.log(notas);
notas.pop();
notas.pop();
notas.pop();

console.log(notas);

notas.unshift(0);
console.log(notas);

notas.shift();
notas.shift();
console.log(notas);

for (let i = 0; i < notas.length; i++) {
    console.log(notas[i]);
}

console.log("----------");

for (let nota of notas) {
    console.log(nota);
}

console.log("----------");

notas.forEach((nota, idx, arr) => {
    console.log(nota, idx, arr);
})

const novasNotas = notas.map((nota) => {
    return nota / 2
})

const map = (arr, callback) => {
    const newArr = [];
    for (let element of arr) {
        newArr.push(callback(element))
    }
    return newArr
}


console.log(notas);
console.log(novasNotas);
console.log(map(notas, (e) => e / 2));
console.log(map(notas, (e) => e * 2));
console.log(map(notas, (e) => e - 2));
console.log(map(notas, (e) => e + 2));

// Retorna o array ao inverso
console.log([1, 2, 3, 4, 5].reverse());
// Retorna true ou falso se conter no array
console.log([1, 2, 3, 4, 5].includes(10));

const aluno = {
    name: "João",
    surname: "Doo",
    age: 20,
    ce: 0.8,
    grades: [10, 8, 5, 8],
    getFullName: function () {
        return (this.name + " " + this.surname)
    }
};

console.log(aluno.getFullName());
console.log(aluno.grades
    .map(nota => nota * 2) 
    .filter(nota => nota > 15)
    .map(nota => nota / 2)
    .reverse());

const objComplexo = {
    obj: {
        array: [
            {
                teste: {
                    array: [2]
                }
            }
        ]
    }
}

console.log("---->", objComplexo.obj.array[0].teste.array[0]);

console.log(undefined);
console.log(null);

// falsy é
// 0
// undefined
// null
// NaN
// ''

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(''));
console.log(Boolean('Olá mundo'));

// Negando
console.log(!true);

console.log(aluno["name"]);

const getKeyValue = (obj, key) => obj[key];

console.log(getKeyValue(aluno, "nome"));











