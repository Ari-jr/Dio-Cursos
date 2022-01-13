// tipos primitivos

// boolean
var vOuF = false;
console.log(vOuF);
console.log(typeof(vOuF)); // Com typeof podemos saber o tipo da variável

//number
var numeroQualquer = 1;
console.log(numeroQualquer);
console.log(typeof(numeroQualquer));

// string
var nome = "Ariomar";
console.log(nome);
console.log(typeof(nome));

// function
var funcao = function(){}
console.log(typeof(funcao));

// Declarar Variáveis

var variavel = "Ariomar";
variavel = "Júnior";
console.log(variavel);

var variavel2 = "Ariomar";
variavel2 = "Júnior";
console.log(variavel2);

const constante  = "Ariomar"
console.log(constante);

// Escopo Global e Local

var escopoGlobal = 'global';

function escopoLocal() {
    let escopoLocalInterno = 'Local';
    console.log(escopoLocalInterno);
}

escopoLocal();





















