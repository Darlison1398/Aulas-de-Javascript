const pedido = (pedido) => {
    return new Promise((resolve, reject) => {
        // trabalhando com erro:
        if (pedido === 'pizza') {
            return reject(`Não temos o seu pedido [${pedido}]`);
        };

        setTimeout(() => {
            resolve(`Chegou o seu pedido [${pedido}]`);
        }, 5000);
    });
};

Promise.all([pedido('Arroz'), pedido('feijão')]).then((resPedidos) => {
    console.log(resPedidos[0]);
    console.log(resPedidos[1]);
});
