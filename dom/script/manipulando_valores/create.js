///// CREATEHTML. é uma forma de criar elementos html
const div2 = document.getElementById('create-element');
const elementUl = document.createElement('ul');

[1, 2, 3].forEach((item) => {
    const elementLi = document.createElement('li');
    elementLi.textContent = item;
    //elementLi.innerText = 
    elementUl.appendChild(elementLi);
});

div2.appendChild(elementUl);

