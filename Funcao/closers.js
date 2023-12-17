function seuName(nome) {
    const msg = `O seu nome é: `;

    function yourName() {
        return `${msg} ${nome}`;
    }

    return yourName();
}

console.log(seuName("Darlison"));
