const pedido = [
    {
        id: 1,
        lanche: 'X-Salada',
        bebida: 'Refrigerante',
        preco: 'R$ 10.0',
        descricao: "o melhor da cidade",
        qtd: 1,
    },
    {
        id: 2,
        lanche: 'X-Baccon',
        bebida: 'Suco',
        preco: 'R$ 30.0',
        descricao: "o melhor da cidade",
        qtd: 2,
    },
    {
        id: 3,
        lanche: 'X-Tudo',
        bebida: 'Sem bebida',
        preco: 'R$ 30.0',
        descricao: "o melhor da cidade",
        qtd: 5,
    },
    {
        id: 4,
        lanche: 'X-Egg',
        bebida: 'Vitamina',
        preco: 'R$ 10.0',
        descricao: "o melhor da cidade",
        qtd: 3,
    },
    {
        id: 5,
        lanche: 'X-Coração',
        bebida: 'Milkchake',
        preco: 'R$ 15.0',
        descricao: "o melhor da cidade",
        qtd: 7,
    },
    {
        id: 6,
        lanche: 'Suco',
        bebida: 'Não tem',
        preco: 'R$ 10.0',
        descricao: "o melhor da cidade",
        qtd: 20,
    },
    {
        id: 7,
        lanche: 'Sorvete',
        bebida: 'água',
        preco: 'R$ 12.0',
        descricao: "o melhor da cidade",
        qtd: 1,
    },
];

// nos ajuda em vários caso onde precisamos somar todos os valores
const balancete = pedido.reduce( (total, element) =>  {
    return total + element.qtd;
}, 0)

console.log(balancete);