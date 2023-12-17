

const arr = [
    {
        nome: 'Darlison',
    },
    {
        nome: 'Jozelia',
    },
    {
        nome: 'Carla',
    },
    {
        nome: 'Cristina',
    },
    {
        nome: 'Marcos',
    },
    {
        nome: 'Dog',
    },
];

// ordeando de forma organizada de acordo com o alfabeto
console.log(arr.sort((a, b) => a.nome.localeCompare(b.nome)));

// ao invés do .nome, eu poderia usar outro tipo de dado como parêmetro