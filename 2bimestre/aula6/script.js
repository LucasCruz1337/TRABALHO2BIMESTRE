// A imobiliaria Imobilis vende apenas terrenos retangulares. 
// Pagina para ler as dimensões de um terreno e exibir a area do terreno.

let comprimento = document.getElementById("comprimento");
let largura = document.getElementById("largura");
let calcular = document.getElementById("calcular");
let resultado = document.getElementById("resultado");

calcular.addEventListener("click", function() {
    let area = comprimento.value * largura.value;
    resultado.innerHTML = "A area do retangulo e: " + area;
});

// Faca uma pagina para calcular quantas ferraduras sao necessarias para equipar todos
// os cavalos comprados para um haras.

let numCavalos = document.getElementById("numCavalos");
let calcularFerraduras = document.getElementById("calcularFerraduras");
let resultadoFerraduras = document.getElementById("resultadoFerraduras");

calcularFerraduras.addEventListener("click", function() {
    let ferradurasNecessarias = numCavalos.value * 4;
    resultadoFerraduras.innerHTML = "Serao necessarias " + ferradurasNecessarias + " ferraduras.";
});

// A padaria Hotpao vende uma certa quantidade de paes franceses e uma quantidade de
// broas a cada dia. Cada paozinho custa R$ 0,12 e a broa custa R$ 1,50. Ao final do dia, o
// dono quer saber quanto arrecadou com a venda dos paes e broas (juntos), e quanto

let numPoes = document.querySelector("#numPoes");
let numBroas = document.querySelector("#numBroas");
let btcalcularVendas = document.querySelector("#btcalcularVendas");
let resultadoVendas = document.querySelector("#resultadoVendas");

function calcularVendas() {
    let numpaes = Number(numPoes.value);
    let numbroa = Number(numBroas.value);
    let vtpaes = numpaes * 0.12 
    let vtbroas = numbroa * 1.50
    let vttotal = vtpaes + vtbroas ;
    let poupar = vttotal / 100 *10

    resultadoVendas.innerHTML = "Valor total de vendas: " + vttotal + "<br>" +
    "Valor a poupar: " + poupar 
}

btcalcularVendas.onclick =function() {
    calcularVendas();
}

// Desenvolva uma pagina para ler o nome e a idade de uma pessoa
// , e exibir quantos dias de vida ela possui. 
// Considere sempre anos completos, e que um ano possui 365 dias. 
// Ex.: uma pessoa com 19 anos possui 6935 dias de vida; veja um exemplo de saida:
//  MARIA, VOCE JA VIVEU 6935 DIAS

let idade = document.querySelector("#idade");
let btcalcularIdade = document.querySelector("#btcalcularIdade");
let resultadoIdade = document.querySelector("#resultadoIdade");

function calcularIdade() {
    let idadePessoa = Number(idade.value);
    let diasVividos = idadePessoa * 365;
    resultadoIdade.innerHTML = "VOCE Ja VIVEU " + diasVividos + " DIAS";
}

btcalcularIdade.onclick = function () {
    calcularIdade();
}

// Um motorista deseja colocar no seu tanque X reais de gasolina. 
// Desenvolva uma pagina para ler o preco do litro da gasolina e o valor do pagamento, 
// e exibir quantos litros ele conseguiu colocar no tanque. 

let precoGasolina = document.querySelector("#precoGasolina");
let valorPagamento = document.querySelector("#valorPagamento");
let btcalcularGasolina = document.querySelector("#btcalcularGasolina");
let resultadoGasolina = document.querySelector("#resultadoGasolina");

btcalcularGasolina.onclick = function () {
    let litros = valorPagamento.value / precoGasolina.value;
    resultadoGasolina.innerHTML = "Voce conseguiu colocar " + litros + " litros de gasolina.";
}

// O restaurante a quilo Bem-Bao cobra R$12,00 por cada quilo de refeicao. Desenvolva
// uma pagina que leia o peso do prato montado pelo cliente (em quilos) e imprima o
// valor a pagar. Considere que a balanca ja desconte o peso do prato.

let pesoPrato = document.querySelector("#pesoPrato");
let btcalcularPrato = document.querySelector("#btcalcularPrato");
let resultadoPrato = document.querySelector("#resultadoPrato");

btcalcularPrato.onclick = function () {
    let valorAPagar = pesoPrato.value * 12;
    resultadoPrato.innerHTML = "O valor a pagar e R$ " + valorAPagar.toFixed(2);
}

// Crie uma pagina para entrar com o dia e o mes de uma data e informar quantos dias se
// passaram desde o inicio do ano. Esqueca a questao dos anos bissextos e considere
// sempre que um mes possui 30 dias.

let dia = document.querySelector("#dia");
let mes = document.querySelector("#mes");   
let btcalcularDias = document.querySelector("#btcalcularDias");
let resultadoDias = document.querySelector("#resultadoDias");

btcalcularDias.onclick = function () {
    let diasPassados = (mes.value - 1) * 30 + dia.value;
    resultadoDias.innerHTML = "Dias passados desde o inicio do ano: " + diasPassados;
}

// Uma fabrica de camisetas produz os tamanhos pequeno, medio e grande, cada uma
// sendo vendida respectivamente por 10, 12 e 15 reais. Construa uma pagina em que o
// usuario forneca a quantidade de camisetas pequenas, medias e grandes referentes a
// uma venda, e a maquina informe quanto sera o valor arrecadado.

let qtdPequenas = document.querySelector("#qtdPequenas");
let qtdMedias = document.querySelector("#qtdMedias");
let qtdGrandes = document.querySelector("#qtdGrandes");
let btcalcularCamisetas = document.querySelector("#btcalcularCamisetas");
let resultadoCamisetas = document.querySelector("#resultadoCamisetas");

btcalcularCamisetas.onclick = function () {
    let total = (qtdPequenas.value * 10) + (qtdMedias.value * 12) + (qtdGrandes.value * 15);
    resultadoCamisetas.innerHTML = "Valor total arrecadado: R$ " + total.toFixed(2);
}

//Construa uma página para calcular a distância entre dois pontos do plano cartesiano.
//Cada ponto é um par ordenado (x,y).

let x1 = document.querySelector("#x1");
let y1 = document.querySelector("#y1");
let x2 = document.querySelector("#x2");
let y2 = document.querySelector("#y2");
let btcalcularDistancia = document.querySelector("#btcalcularDistancia");
let resultadoDistancia = document.querySelector("#resultadoDistancia");

btcalcularDistancia.onclick = function () {
    let distancia = Math.sqrt(Math.pow(x2.value - x1.value, 2) + Math.pow(y2.value - y1.value, 2));
    resultadoDistancia.innerHTML = "A distancia entre os pontos e: " + distancia.toFixed(2);
}

//Uma fábrica controla o tempo de trabalho sem acidentes pela quantidade de dias. Faça
//uma página para converter este tempo em anos, meses e dias. Considere que cada mês
//possui sempre 30 dias.

let diasTrabalhados = document.querySelector("#diasTrabalhados");
let btcalcularTempo = document.querySelector("#btcalcularTempo");
let resultadoTempo = document.querySelector("#resultadoTempo");
btcalcularTempo.onclick = function () {
    let anos = Math.floor(diasTrabalhados.value / 365);
    let meses = Math.floor((diasTrabalhados.value % 365) / 30);
    let dias = diasTrabalhados.value % 30;
    resultadoTempo.innerHTML = `Tempo trabalhado: ${anos} anos, ${meses} meses e ${dias} dias.`;
}

//Faça uma página para ler o salário de um funcionário e aumentá-lo em 15%. Após o
//aumento, desconte 8% de impostos. Imprima o salário inicial, o salário com o aumento
//e o salário final.

let salarioInicial = document.querySelector("#salarioInicial");
let btcalcularSalario = document.querySelector("#btcalcularSalario");
let resultadoSalario = document.querySelector("#resultadoSalario");

btcalcularSalario.onclick = function () {
    let aumento = salarioInicial.value * 0.15;
    let salarioComAumento = parseFloat(salarioInicial.value) + aumento;
    let salarioFinal = salarioComAumento - (salarioComAumento * 0.08);
    resultadoSalario.innerHTML = `Salario inicial: R$ ${salarioInicial.value}, Salario com aumento: R$ ${salarioComAumento.toFixed(2)}, Salario final: R$ ${salarioFinal.toFixed(2)}.`;
}

//Faça uma página para ler um número inteiro (assuma até́três dígitos) e imprimir a
//saída da seguinte forma: CENTENA = x DEZENA = x
//UNIDADE = x

let numero = document.querySelector("#numero");
let btcalcularNumero = document.querySelector("#btcalcularNumero");
let resultadoNumero = document.querySelector("#resultadoNumero");

btcalcularNumero.onclick = function () {
    let centena = Math.floor(numero.value / 100);
    let dezena = Math.floor((numero.value % 100) / 10);
    let unidade = numero.value % 10;
    resultadoNumero.innerHTML = `CENTENA = ${centena} DEZENA = ${dezena} UNIDADE = ${unidade}`;
}

/* Calcule a área de uma pizza que possui um raio R (pi=3.14). */
let raio = document.querySelector("#raio");
let btcalcularPizza = document.querySelector("#btcalcularPizza");
let resultadoPizza = document.querySelector("#resultadoPizza");

btcalcularPizza.onclick = function () {
    let area = 3.14 * Math.pow(raio.value, 2);
    resultadoPizza.innerHTML = `A area da pizza e: ${area.toFixed(2)}.`;
}

//Três amigos, Carlos, André e Felipe, decidiram rachar igualmente a conta de um bar.
//Faça uma página para ler o valor total da conta e imprimir quanto cada um deve pagar,
//mas faça com que Carlos e André não paguem centavos. Ex.: uma conta de R$101,53
//resulta em R$33,00 para Carlos, R$33,00 para André e R$35,53 para Felipe.

let valorConta = document.querySelector("#valorConta");
let btcalcularConta = document.querySelector("#btcalcularConta");
let resultadoConta = document.querySelector("#resultadoConta");
btcalcularConta.onclick = function () {
    let total = parseFloat(valorConta.value);
    let cadaUmPaga = Math.floor(total / 3);
    let resto = total - (cadaUmPaga * 2);
    resultadoConta.innerHTML = `Carlos paga: R$ ${cadaUmPaga.toFixed(2)}<br>Andre paga: R$ ${cadaUmPaga.toFixed(2)}<br>Felipe paga: R$ ${resto.toFixed(2)}`;
}