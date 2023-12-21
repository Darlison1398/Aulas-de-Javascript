// manipulando inputs

const formInputs = document.forms.namedItem('registration');

formInputs.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = formInputs.name.value;
    //const senha = formInputs.senha.value;

    const newDivElement = document.createElement('div');
    newDivElement.style.marginTop = '1em';
    newDivElement.innerText = name;
    formInputs.nextElementSibling.remove(); // REMOVE UM NOME ASSIM QUE OUTRO É
    formInputs.after(newDivElement);

});