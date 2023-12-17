// objeto

// o Function pega o contexto global.E o arrow functtion não pega contextos fora dele.
// ver sobre o setTimeout
// o Arrow Function não tem construtor
// 

const lanche = {
    cardapio: [
        {nome: "x-salada", preco: "R$ 25"},
        {nome: "x-TUDO", preco: "R$ 30"},
        {nome: "x-BACCON", preco: "R$ 20"},
        {nome: "x-CORAÇÃO", preco: "R$ 35"},
    ], 

    meuPedido: function (select) {
        return console.log(this.cardapio[select]);
    },
};

lanche.meuPedido(2);