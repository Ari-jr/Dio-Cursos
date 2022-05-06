function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoa1 = {
    nome: "Nivia",
    idade: 35
}

const pessoa2 = {
    nome: "Fernando",
    idade: 50
}

const animal = {
    nome: "Dole",
    idade: 12,
    raca: "Poodle",
};

console.log(calculaIdade.call(pessoa2, 10));
console.log(calculaIdade.apply(animal, [5]));