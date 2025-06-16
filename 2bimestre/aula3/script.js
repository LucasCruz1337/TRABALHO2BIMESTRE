let kilosnum = document.querySelector("#kilosnum")
let btkilos = document.querySelector("#btkilos")
let kilosnum2 = document.querySelector("kilosnum2")
let h3RESULTADOkilos = document.querySelector("#h3RESULTADOkilos")

function MultiplicarQuilos(){

    let kilos = Number (kilosnum.value);
    let valor = Number(kilosnum2.value)
     h3RESULTADOkilos.textContent = (kilos * valor)
    }
     btkilos.onclick = function(){
        MultiplicarQuilos();
     }

     let valorenum = document.querySelector("#valorenum")
let btvalores = document.querySelector("#btvalores")
let h3RESULTADOvalores = document.querySelector("#h3RESULTADOvalores")
|
function Dividir(){

    let valor = Number (valorenum.value);
     h3RESULTADOvalores.textContent = (valor * (1 /100))+valor;
    }
     btvalores.onclick = function(){
      Dividir();
     }
//4
let inputnum1 = document.querySelector("#inputnum1")
let inputnum2 = document.querySelector("#inputnum2")
let inputnum3 = document.querySelector("#inputnum3")
let btCalcular = document.querySelector("#btCalcular")
let h3Resultado = document.querySelector("#h3Resultado")

function calcularmedias(){
    let num1 = Number(inputnum1.value);
    let num2 = Number(inputnum2.value);
    let num3 = Number(inputnum3.value);
    
    //calcular media aritmetica
    let mediaAritmetica = (num1 + num2 + num3) / 3;

    //formula da media ponderada
    //(x1 * p1) +  (x2 * p2) +  (x3 * p3)
    // ------------------------------------------
    //        (p1 + p2 + p3)

    let somaValoresPeso = (num1 + num2 + num3) * 2;
    let somaPesos = 3 + 2 + 5;
    let mediaPonderadas = somaValoresPeso / somaPesos;

    //calcular a soma das medias
    let somaMedias = mediaAritmetica + mediaPonderadas

    //calcular a medias das medias
    let MediasDasMedias = somaMedias / 2;

    h3Resultado.textContent = "A media aritmetica é: " + mediaAritmetica+
     " e a media ponderada é: " + mediaPonderadas +
     " soma das medias; " + somaMedias +
     " e a media das medias é: " + MediasDasMedias;


}

btCalcular.onclick = function() {  
    calcularmedias();
}