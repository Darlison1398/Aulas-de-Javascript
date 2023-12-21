// poderisa ser assim:

/*const home = document.querySelector('.home');
const sobre = document.querySelector('.sobre');
const contato = document.querySelector('.contato');

home.addEventListener('click', () =>{
    console.log('Home');
});

sobre.addEventListener('click', () =>{
    console.log('sobre');
});

contato.addEventListener('click', () =>{
    console.log('contato');
});*/


// e assim:
/* Esse jeito é mais profissional    */
const menu = document.querySelector('#menu');

// validando
if (menu) {
    menu.addEventListener('click', (event) => {
        const { target } = event;
        const body = document.querySelector('body');
        
        switch(target.getAttribute('class')) {
            case 'home':
                body.style.background = 'red';
                console.log('home');
                break;
    
            case 'sobre':
                body.style.background = 'green';
                console.log('sobre');
                break;
    
            case 'contato':
                body.style.background = 'blue';
                console.log('contatos');
                break;
        }
    });
}


