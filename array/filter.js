const lanche = [
    {
        id: 1,
        nome: 'X-Salada',
        preco: 'R$ 10.0',
        descricao: "o melhor da cidade",
        qtd: 1,
    },
    {
        id: 2,
        nome: 'X-Baccon',
        preco: 'R$ 30.0',
        descricao: "o melhor da cidade",
        qtd: 2,
    },
    {
        id: 3,
        nome: 'X-Tudo',
        preco: 'R$ 30.0',
        descricao: "o melhor da cidade",
        qtd: 5,
    },
    {
        id: 4,
        nome: 'X-Egg',
        preco: 'R$ 10.0',
        descricao: "o melhor da cidade",
        qtd: 3,
    },
    {
        id: 5,
        nome: 'X-Coração',
        preco: 'R$ 15.0',
        descricao: "o melhor da cidade",
        qtd: 7,
    },
    {
        id: 6,
        nome: 'Suco',
        preco: 'R$ 10.0',
        descricao: "o melhor da cidade",
        qtd: 20,
    },
    {
        id: 7,
        nome: 'Sorvete',
        preco: 'R$ 12.0',
        descricao: "o melhor da cidade",
        qtd: 1,
    },
];

const pc = lanche.filter( (element, index) =>  {
    return element.preço === 'R$ 10.0';
});

console.log(1, lanche);

console.log('\n');
 
console.log(2, pc);
// o filter não altera o array