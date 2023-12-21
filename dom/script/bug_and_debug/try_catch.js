const bugNum = () => {

    // try catch
    try {

        const number = '123';
        if (number === 123){
            return 'Seu número é 123 - type Number';
        }
        throw new Error('Deu ruim!!!');

    } catch (error) {
        //throw new Error();
        return error;
    }


};

console.log(bugNum());
console.log('continua executando...');

/* Usamos o throw new Error() no try e no catch quando quisermos travar a palicação se houver um erro.
   Caso contrário, usamos o return error no catch para permitir que ela continue sendo executada mesmo 
   se houver erro. */