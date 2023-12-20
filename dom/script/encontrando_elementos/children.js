const container = document.querySelector('.container');

// esse primeiro não serve para usar com o foreach
console.log(container.children); // HTMLcoletion
console.log(container.childNodes); // NodeList

console.log('\n');
// aqui está sendo feito o html em array
const children = Array.from(container.children);

children.forEach((res) => {
    console.log(res);
});