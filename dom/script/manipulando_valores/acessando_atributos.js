// conseguimos setar valores nas tags html. Também, conseguimos remover valores

const div = document.querySelector('div');

div.setAttribute('id', 'teste');
div.setAttribute('class', `${div.getAttribute('class')} active`);
div.setAttribute('class', `${div.getAttribute('class')} background-red`);

// removendo o atributo
div.remove('id');

console.log(div);