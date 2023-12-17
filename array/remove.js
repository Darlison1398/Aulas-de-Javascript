
let arr = [
    { nome: 'Darlison', tel: "(99) 99999-9999"},
    { nome: 'Jozelia', tel: "(99) 99999-9999"},
    { nome: 'Cris', tel: "(99) 99999-9999"},
    { nome: 'Marcos', tel: "(99) 99999-9999"},
];

console.log(arr);
console.table(arr);

const newArray = arr.slice(0, 2);
console.table(newArray);

// removendo um indice específico do array
arr.splice(2);
console.table(arr);