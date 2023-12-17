// array dentro de outro array
// dá pra criar multidimensões em um array
const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

console.table(arr);

console.table(arr[2][0]);


/************************ */
// poderia ser assim tabmbém
const arr2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ]
]

//console.table(arr2);
console.table(arr2[3][2]);

