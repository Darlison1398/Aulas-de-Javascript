const container = document.querySelector('.container');

// pegando o pimeiro elemento dentro da div container
// nesse caso, ele vai pega o h1
console.log(container.firstElementChild);

// também poderia ser assim:
const p = document.querySelector('.paragrafo');
console.log(p.firstChild);

console.log('\n');


/******** PEGANDO O ÚLTIMO FILHO DO ELEMENTO     */
const p2 = document.querySelector('#paragrafo');

console.log(p2.lastChild);
