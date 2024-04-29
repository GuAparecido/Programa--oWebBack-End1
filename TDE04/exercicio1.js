/* 1. Crie uma função de soma que precisará ter como resultado um número par. Para isso, você precisará criar os seguintes callbacks:

- callbackSucesso(): Mostre uma mensagem de sucesso, dizendo que a operação 
foi concluída com sucesso e que o número somado é par (resultado da soma).

- callBackError(): Mostre uma mensagem de erro, dizendo que a operação falhou, 
trazendo um número impar (resultado da soma). */
function soma(a, b, callbackSucess, callBackError) {
    const result = a + b;

    if (result % 2 === 0) {
        callbackSucess(result);
    } else {
        callBackError(result);
    }
}
const callbackSucess = (result) => {
    console.log("A operação foi concluída com sucesso, o número " + result + " é par!")
}

const callbackError = (result) => {
    console.log("ERRO X99935BC \nO número " + result + " é ímpar!")
}

soma(1, 3, callbackSucess, callbackError);

/* 2. Utilize a função anterior para criar uma promise que tenha:

- then: uma mensagem de sucesso, informando que a operação foi concluída com sucesso, dizendo se é par ou ímpar e trazendo o número;
- catch: uma mensagem de erro, informando que a operação possui erro, dizendo se é par ou ímpar e trazendo o número.

Dica: Utilize uma promise com função (resolve, reject). */






