const tenis = {
    tamnho: 45,
    estoque: true,
    marca: [ { nome: 'Nike'} , { nome: 'Adidas' }],
};

const { tamanho, estoque, marca = "Não possui marca alguma"} = tenis;

console.log(tamanho, estoque, marca);

/************************* */
const tenis2 = {
    secret: 12345,
    n: 5,
    lnk: { a: 'a', b: 'b', c: 'c' },
};

const { secret: randomNumber, n: avaliacao } = tenis2;

//console.log(secret);
console.log(randomNumber);
console.log(avaliacao);

const {
    link: {
        a = {b},
    },
} = tenis2;

console.log(a);

