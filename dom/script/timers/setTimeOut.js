// ele adiciona um intervalo de 10 segundo para executar a aplicação
const timer = setTimeout( () => {
    console.log('meu time foi iniciado');
}, 10000);

console.log('meu console!');


/**  clear setTimeout() */
// concelando o timeout
clearTimeout(timer);
