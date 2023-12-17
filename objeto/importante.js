
let tenis = {
    tamaho: 40,
    estoque: true,
    preco: 'R$ 50.0', 
};

// converte o objeto para String. antênção a isso
let msc = JSON.stringify(tenis);
// convertendo para objeto. dessa forma, ele vai imprimir os dados
msc = JSON.parse(msc)

console.log(typeof msc);
console.log(msc);

/* no primeiro caso, ele perdeu toda a referência dele como objeto porque foi convertido 
para String. Mas no segundo caso, ele foi convertido em objeto novamente. */
