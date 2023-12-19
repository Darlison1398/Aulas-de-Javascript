const h4 = document.querySelector('h4');


// posso adiocionar várias classes aqui, basta separar elas por vírgula
h4.classList.add('active');

// fazendo verificação
/*

if (h4.classList.contains('active')) {
    alert ('Existe a classe active!!!');
}

*/


// toogle. Ele verifica se tem o valor, se ñ tiver o valor será criado
h4.classList.toggle('Teste');