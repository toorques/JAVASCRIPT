
//------------------------------------------------------------------
//Abaixo começa do javascript do site.

//Alteração do título
//console.log(document);
//Cria a variável título e armazena o contéudo da classe
let titulo = document.querySelector(".titulo");
//Mostra no devtools o conteudo de texto
//console.log(titulo);
//Atribuição de um novo valor na variavel título
titulo.textContent = "Banana!!!!"

//Alteração da tabela
let paciente = document.querySelector("#primeiro-paciente");

let tdPeso = paciente.querySelector(".info-peso");

let tdAltura = paciente.querySelector(".info-altura");

let tdGordura = paciente.querySelector(".info-gordura")
let peso = tdPeso.textContent; 
let altura = tdAltura.textContent;

let imc = peso / (altura * altura);

console.log("O IMC do Paulo é:" + imc);


