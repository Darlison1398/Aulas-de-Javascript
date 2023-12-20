const btn = document.querySelector('button');

btn.onclick = function alertOne() {
    alert('DEU CERTO');
}

/////////////
const btn2 = document.querySelector('#here');

btn2.addEventListener('click', (event) => {
    console.log(1);
    console.log(1);
    console.log(3);
})

/////////////////
const p = document.querySelector('p');

p.addEventListener('mouseover', (event) => {
    p.innerText = 'Evento mouseover adicionado com sucesso!!!';
})

p.addEventListener('mouseleave', (event) => {
    p.innerText = 'Mouse hover';
})

////////// MUDANDO O ESTILO DO SITE
const btn3 = document.querySelector('#mudCor');

btn3.addEventListener('click', (event) => {
    document.querySelector('body').style.background = 'rgb(36, 44, 51)';
    document.querySelector('body').style.color = '#FFF';
})