const arr = [
    {
        nome: 'Darlison',
        idade: 25,
    },
    {
        nome: 'Jozelia',
        idade: 44,
    },
    {
        nome: 'Carla',
        idade: 15,
    },
    {
        nome: 'Cristina',
        idade: 14,
    },
    {
        nome: 'Marcos',
        idade: 45,
    },
    {
        nome: 'Dog',
        idade: 5,
    },
];

arr.forEach( (item , index) => {
    
    if (item.nome === "Dog") {
        console.log("O cachorro da família");
    }
    console.log(index, item.nome);

    // o break não fiunciona aqui
});