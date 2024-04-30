// importação no Node.
const path = require ("path");
// import path from "path"

const imgSrc = path.join("./images", "/group1/teste.png");
console.log(imgSrc);

console.log(path.join(__dirname, "./images", "/group1/teste.png"));


// Importando somente uma função do módulo.
const { join } = require("path");

const imgSrc1 = join("./images", "/group1/teste.png");
console.log(imgSrc1);

console.log(join(__dirname, "./images", "/group1/teste.png"));

const pessoa = {
    nome: "Igor"
}

const nome = "teste";
const { nome: nomePessoa } = pessoa;

console.log(nome);
console.log(nomePessoa);

const arr = [1, 2, 3] 
const [e1, ...resto] = arr
console.log(resto);

const { dobrarNumero } = require("./utils");

console.log(dobrarNumero(10));