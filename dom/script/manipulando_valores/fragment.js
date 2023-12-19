// o fragmente é melhor que o DOM em questão de desempenho.
const ul = document.querySelector('ul');

// verificando no console se a ul existe
console.log(ul);

const fragment = document.createDocumentFragment();
const lanches =[ 'banana', 'hambúguer', 'pão', 'maçã' ];

lanches.forEach( (element) => {
    const li = document.createElement('li');
    li.textContent = element;
    fragment.append(li);

    // nesse caso, para cada interação ele vai criar uma tag li
});

console.log(fragment);

ul.append(fragment);


