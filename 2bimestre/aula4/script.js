let inputnota1 = document.querySelector("#inputnota1")
let inputnota2 = document.querySelector("#inputnota2")
let btCalcular = document.querySelector("#btCalcular")
let h3Resultado = document.querySelector("#h3Resultado")

function verificaaprovacao() {

    let nota1= Number(inputnota1.value)
    let nota2= Number(inputnota2.value)
    let media = (nota1 + nota2) / 2 

    //aprovado media 6.0 ou maior 
    //reprovado media menor que 6.0
    if (media >= 60) {
        h3Resultado.textContent = "Parabens voce esta Aprovado: " 
    } else {
        h3Resultado.textContent = "Nao desista tente novamente: " 
       
    }



}

    btCalcular.onclick = function () {
        verificaaprovacao();
    }
