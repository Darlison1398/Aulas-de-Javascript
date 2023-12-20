// removendo um manipulador de eventos
const btn4 = document.querySelector('.remover-evento');

const acionarAlert = () => {

    let validador = false;
    alert(123);
    validador = true;

    if (validador) {
        btn4.removeEventListener('click', acionarAlert);
    }

};

btn4.addEventListener('click', acionarAlert);


/* nesse caso, ele só vai me permitir executar o evento uma vez */
