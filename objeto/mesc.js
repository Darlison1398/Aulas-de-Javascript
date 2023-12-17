// mesclado e cloando um objeto
let tenis = {
    tamaho: 40,
    estoque: true,
    preco: 'R$ 50.0', 
};

let clone1 = tenis;
console.log(clone1)


/*************************** */

let tenis2 = {
    tamaho: 40,
    estoque: true,
    preco: 'R$ 50.0', 
};

let link = { link: { a: "a", b: { c: "c" }}};

let mesclar1 = Object.assign(tenis, link);
console.log(mesclar1);

// podemos usar os 3 pontinho antes para alguns casos
let mesclar2 = { ...tenis, ...link };
console.log(mesclar2);

/* devemos tomar cuidado com o objeto que foi clonado. Se mexermos em uma 
referência ele muda nos demais
 */