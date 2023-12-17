const arr = [
    {
        nome: 'Darlison',
        idade: 25,
        profissao: "Programador FullStack",
    },
    {
        nome: 'Jozelia',
        idade: 44,
        profissao: "Administradora",
    },
    {
        nome: 'Carla',
        idade: 15,
        profissao: "Estudante",
    },
    {
        nome: 'Cristina',
        idade: 14,
        profissao: "Estudante",
    },
    {
        nome: 'Marcos',
        idade: 45,
        profissao: "Operador de máquinas pesadas",
    },
    {
        nome: 'Dog',
        idade: 5,
        profissao: "Não trabalha",
    },
];

// o index é o callback function
arr.map((element, index) => {
    if (element.idade == 44 ){
        return (element.nome === "Jozelia");
    }
});

console.log(arr);
