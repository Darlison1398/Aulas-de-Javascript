
// argumentos dentro da função
//cada palavra dentro do parêntese é um argumento
function soma(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number"){
        return num1 + num2;
    } else {
        return "O valor não pode ser diferente de números!!!";
    }
}


console.log("USANDO A FUNÇÃO SOMA(). O RESULTADO PARA A SEGUINTE OPERAÇÃO É: " + soma(5, 5));
// poderiamos usaer uma função dentro de outra função

// criando objeto

// tomar cuidado com o arguments. Eles ñ funcionam em arrow function
function subtracao() {
    return arguments;
}

console.log(subtracao(1, 2, 'Darlison', 1.5));

// posso fazer isso para guardar valores de diferentes tipos
// 