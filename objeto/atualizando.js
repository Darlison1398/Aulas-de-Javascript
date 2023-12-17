/* nesse caso usamos o let, pois ele nos permite mudar o dado.
 Já o const, não permite que haja alterações;
 */

let tenis = {
    tamaho: 40,
    estoque: true,
}
/* eu modifiquei os dados do objeto tenis
tenis.tamaho = 35,
tenis.estoque = false,

console.log(tenis)*/

// adicionando um novo atributo
tenis["preco"] = "R$ 60.0";
console.log(tenis);
