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

for (let item of arr) {
    console.log(item);
}

console.log('\n');

// pegando pela idade
for (let item of arr) {
    console.log(item.idade);
}

// tem o for in também, mas ele é pra casos específicos