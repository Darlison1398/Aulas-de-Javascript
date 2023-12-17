function Name() {
    this.name = "Engenheiro de Software";
}

// criando um objeto da função. Eu poderia criar vários outros caso quisesse
const drsilva = new Name();

console.log(drsilva.name);

/////////////////////////////////////////////////////////////////
function Pessoa(name, idade, profissao) {
    this.name = name;
    this.idade = idade;
    this.profissao = profissao;
}

const pp = new Pessoa("Darlison Silva", 25, "Engenheiro de Software");

console.log(pp.name + ", " +  pp.idade + " anos, " + pp.profissao);


/////////////////////////////////////////////////////
function Calculadora(num1, num2) {
    this.soma = () => {
        return `${num1 + num2}`;
    };

    this.subtracao = () =>{
        return `${num1 - num2}`;
    }
}

const sm = new Calculadora(1, 3);
const sub = new Calculadora(4, 2);

console.log(sm.soma());
console.log(sub.subtracao());



