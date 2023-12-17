const carro = {
    marca: "BMW",
    ano: 2024,
    cor: "Branca",
}

console.log(carro);

/*if (carro.marca === "BMW") {
    console.log("Um belo carro!!!");
} else {
    console.log("ótimo!");
}*/


// conferindo se o dado existe. Retorna: true ou false
// ambas as formas abaixo servem para conferir se o dado existe
console.log("documeto" in carro);
console.log(carro.hasOwnProperty("marca"));