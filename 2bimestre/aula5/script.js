let cotacaoInput = document.querySelector("#cotacaoInput");
let btnCalcularDolar = document.querySelector("#btnCalcularDolar");
let h3resultadoDolar = document.querySelector("#h3resultadoDolar");

function calcularDolar() {
    let dolar = Number(cotacaoInput.value);
    
    let sobe1 = (dolar /100) * 1 + dolar ;  
    let sobe2 = (dolar /100) * 2 + dolar ;
    let sobe5 = (dolar /100) * 5 + dolar ;
    let sobe10 = (dolar /100) * 10 + dolar ;
 
    h3resultadoDolar.innerHTML =
     "juros de 1%: " + sobe1 + "<br>" +
        "juros de 2%: " + sobe2 + "<br>" +
        "juros de 5%: " + sobe5 + "<br>" +
        "juros de 10%: " + sobe10 ;

        
        }
        btnCalcularDolar.onclick = function() {
            calcularDolar();
    }

    let inputsabor1 = document.querySelector("#inputsabor1");
let inputsabor2 = document.querySelector("#inputsabor2");
let inputsabor3 = document.querySelector("#inputsabor3");
let inputsabor4 = document.querySelector("#inputsabor4");
let quantderefri = document.querySelector("#quantderefri");
let btvalorapagar = document.querySelector("#btvalorapagar");
let resultadovalortotal = document.querySelector("#resultadovalortotal");

function calculaovalor(){
    let sabor1 = (inputsabor1.value);
    let sabor2 = (inputsabor2.value);
    let sabor3 = (inputsabor3.value);
    let sabor4 = (inputsabor4.value);
    let quantrefrigerante = Number (quantderefri.value);

    let valorpizzas = (4 * 12);
    let valorrefri = (quantrefrigerante * 7);
    let valortotal = (valorpizzas + valorrefri);
    
    resultadovalortotal.innerHTML = "Sabores escolhidos: " + "<br>" + sabor1 + "<br>" + sabor2 + "<br>" + sabor3 + "<br>" + sabor4 + "<br>" + "<br>" + 
                                    "Valor a pagar : " +  valortotal;

}

btvalorapagar.onclick = function(){
    calculaovalor();}