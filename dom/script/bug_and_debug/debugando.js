const bugNum = () => {
    const number = '123';

    if (number === 123){
        return 'Seu número é 123 - type Number';
    }

    console.log(number);
    throw new Error ('Deu ruim a aplicação');
};

console.log(bugNum());
