const link = document.querySelector('a');

link.addEventListener('click', (event) =>{
    event.preventDefault();
    console.log("Evento prevenido. Ele não vai abrir");
});


/* aqui, travamos o evento do link. Isso é útil para fazer validação de dados
   e enviá-los para o back-end. */