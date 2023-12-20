const container = document.querySelector('.container');
const newP = document.createElement('p');
const pBefor = document.createElement('p');

pBefor.innerText = 'Elemento inserido antes do container';
newP.innerText = 'Elemento inserido depois do container';

// criando antes do container
container.before(pBefor);

// criado depois do container
container.after(newP);


//container.after('Esse texto foi adicionado via javascript pelo after');