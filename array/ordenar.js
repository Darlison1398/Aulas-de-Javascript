const arr = ['a', 'b', 'c', 'w', 'r', 'o', 'p'];

// ordenando em ordem alfabética
console.log(arr.sort());

// ordenando em ordem reversa
console.log(arr.reverse());


/************** number   ******* */

// ordenando os númros por ordem, do menor para o maior
const num = [1, 3, 5, 2, 7, 0, 6];
console.log(num.sort((a, b) => a - b));

// ordenando do maior para o menor
console.log(num.sort((a, b) => b - a ));
