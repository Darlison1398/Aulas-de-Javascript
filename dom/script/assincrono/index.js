// estudar sobre callback

/*setInterval( () => {
    returnConsole();
}, 3000); // determina 3 segundos para executar

const returnConsole = () => {
    return console.log('meu console funcionou');
};*/


// criando meu próprio callback

const meuCallback = (func) => {
    console.log(func());
};

meuCallback( () => {
    return 1 + 1;
});