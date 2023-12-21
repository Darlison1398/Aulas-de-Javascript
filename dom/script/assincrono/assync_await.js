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

const reservarPedido = async () => {
    try {
        console.log( (pedido('Arroz')));

    } catch (error) {
        console.log(error);
    }

};

reservarPedido();