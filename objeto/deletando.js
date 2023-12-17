// removendo uma propriedade do objeto

let tenis = {
    tamaho: 40,
    estoque: true,
    preco: 'R$ 50.0', 
}

// aqui eu deleto uma propriedade
delete tenis.estoque;
console.log(tenis);

// adicionando dados novamente
tenis.estoque = true;
tenis.cor = "Branco";
console.log(tenis);
