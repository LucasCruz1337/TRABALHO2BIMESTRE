let primeironum = document.querySelector("#primeironum")
let btSOMAR = document.querySelector("#btSOMAR")
let segundonum = document.querySelector("#segundonum")
let h3RESULTADO = document.querySelector("#h3RESULTADO")

let troconum = document.querySelector("#troconum")
let btdiminuir = document.querySelector("#btdiminuir")
let troconum2 = document.querySelector("#troconum2")
let h3RESULTADOtroco = document.querySelector("#h3RESULTADOtroco")

function somarnumeros(){

let num1 = Number (primeironum.value);
let num2 = Number(segundonum.value)
 h3RESULTADO.textContent = (num1 + num2)
}
 btSOMAR.onclick = function(){
    somarnumeros();
 }

 function diminuirnumeros(){

   let produto1 = Number (troconum.value);
   let produto2 = Number(troconum2.value)
    h3RESULTADOtroco.textContent = (produto1 - produto2)
   }
    btdiminuir.onclick = function(){
       diminuirnumeros();
    }
