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
    if (item.nome === 'Cristina') {
        console.log("a criança da famíla");
        continue;
    }
    console.log(item);
}


console.log('\n')

for (let item of arr) {
    if (item.nome === 'Cristina') {
        console.log("a contagem parou no " + item.nome);
        break;
    }
    console.log(item);
}