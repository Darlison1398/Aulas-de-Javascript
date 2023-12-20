const container = document.querySelector('.container');
const paragrafo = container.querySelector('.paragrafo');

const newH2 = document.createElement('h2'); // criando uma tag h2
newH2.innerText = 'Nova tag h2';  // inserindo o texto dentro da tag h2

container.insertBefore(newH2, paragrafo); // adicionando a nova tag h2 antes do primeiro paragrafo que é uma class
