/* isso é bastante usado no back-end, principalmente quando a gente
precisa enviar dados para o back-end. Também, podemos criar um objeto dentro
de outro objeto. 
*/

let Tenis = {
    tipo: "Tênis de corrida",
    cadarco: "G",
    estoque: false,

    tamanho: {
        palmilha: 40,
        tenis: 39,

        caixa: {
            altura: 35,
            largura: 40,
            profundidade: 10
        },
    } ,

    // podemos criar array aqui também
    // array de valores ****:
    marcaArray :['Nike', 'Adidas', 'Pulma'],

    /* ou */

     // Array de objetos === Json  ****
    marca: [
        {
            nome: 'Nike',
        },
        {
            nome: 'Adidas',
        },
        {
            nome: 'Pulma',
        },    
    ],
    getMarcaArray: function (param){
        return this.marca[param];
    },

    getMarca: function (param) {
        return this.marcaArray[param].nome;
    },
};

//console.log(Tenis);
console.log(Tenis.tipo);
console.log(Tenis.tamanho);