const li = document.querySelectorAll('li');

if (li.length >= 3) {
    const thirdLi = li[4];
    thirdLi.remove();
}