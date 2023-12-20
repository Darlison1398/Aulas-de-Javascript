// acrescenta itens dentro do html
// o append serve mais para adicionar textos;
// o appendChild, serve mais para colocar elementos html
const container = document.querySelector('.container');

//container.append('<p>Olá Darlison</p>');

const newDiv = document.createElement('div');
newDiv.innerText = 'Olá, Darlison Silva!';
container.appendChild(newDiv);


/* nesse caso aqui acima, primeiro foi criado uma div e o valor dela foi 
atribuido à variável newDiv. Depois, foi adicionado um texto dentro da div
por meio do newDiv.innerText, e por último, foi chamado o elemento que deve
ser adicionado no html, o container.appendChild. */


