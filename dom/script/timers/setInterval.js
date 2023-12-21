/* a cada um segundo ele vai ficar rodando e imprimindo a mensagem no console */

const timer = setInterval( () => {
    console.log('Meu timer foi iniciado!!!')
}, 1000);

console.log('Meu console.');

/* travando o Interval(). Após 3 segundos, ele vai para o setInterval. Issso 
   é eficiente e necessário em alguns casos, porque senão a
    aplicação iria 
   ficar rodando sem parar, igualmente um laço de repetição while. */
setTimeout( () => {
    clearInterval(timer);
}, 3000);