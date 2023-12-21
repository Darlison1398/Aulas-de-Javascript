/* promises, são objetos que representam a conclusão (ou falsa) de uma tarefa assíncrona.
 Elas fornecem uma sintaxe mais limpa e estruturada */

 const pedido = ( pedido) => {
    return new Promise ( (resolve, reject) => {

        // trabalhando com erro:
        if (pedido === 'pizza') {
            return reject(`Não temos o seu pedido [${pedido}]`);
        };

        setTimeout ( () => {
            resolve(`Chegou o seu pedido [${pedido}]`);
        }, 5000);
    });
 };

 
pedido('pizza').then( (resPedido) => {
    console.log(`${resPedido} da mesa 1.`);
}) // eu poderia parar a aplicação aqui, mas resovi seguir por opção própria;
.then( (mesa) => {
    console.log(mesa);

}).catch( (err) => {
    console.log(err);

}).finally ( () => {
    console.log('Deu bom todo o processo do pedido');
})