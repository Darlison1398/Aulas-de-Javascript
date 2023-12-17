// proriedades, métodos e valores

function tenis(tamanho, estoque, preco) {
    return {
        tamanho,
        estoque,
        preco,
    }
}

console.log(tenis(40, true, "R$ 60.0"));


/*********** */

function tenis2(tamanho, estoque, preco) {
    return {
        tamanho: tamanho,
        estoque: estoque,
        preco: preco,
    }
}

console.log(tenis2(44, true, "R$ 80.0"));