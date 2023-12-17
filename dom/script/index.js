// usando o querySelector, pegamos por tag
/* Em alguns casos é mais prático usar o querySelector e o querySelectorAll
*/

const h1 = document.querySelector('h1'); // tag html
const p = document.querySelector('p');
const idP = document.querySelector('#paragrafo'); // pegando pelo id
const classP = document.querySelector('.paragrafo');



console.log(h1);
console.log(p);
console.log(idP);
console.log(classP);

let timer = 0;
const title = document.querySelector('title');

setInterval( () => {
    title.innerText = timer;
    timer++;
}, 1000);