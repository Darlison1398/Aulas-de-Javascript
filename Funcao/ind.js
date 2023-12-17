// tomar cuidado quando for criar alguma coisa com javascript=

// Função normal se,m Argumentos
function nome() {
    return "Darlison Silva";
}

console.log(nome());

// Função com argumentos
function soma(a, b) {
    return a + b;
}

console.log(soma(4, 8));

// Arrow Function
// esse tipo de função não tem construtor
const funArow = () =>{
    return "Essa é uma arrow function";
}

console.log(funArow());


// objeto
const lanche = {
    cardapio: [
        {nome: "x-salada", preco: "R$ 25"},
        {nome: "x-TUDO", preco: "R$ 30"},
    ], 

    meuPedido: function (select) {
        return console.log(this.cardapio[select]);
    },
};

lanche.meuPedido(1);