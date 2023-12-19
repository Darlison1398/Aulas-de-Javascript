const input = document.querySelector('#name');

// nesse caso usamos o value
console.log(input.value);

setInterval( () => {
    input.value = "Engenheiro de Software";
    console.log(input.value);
}, 1000);