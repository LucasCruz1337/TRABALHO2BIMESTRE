let titulo = document.querySelector("#titulo");
let campotexto = document.querySelector("#campotexto"); 
let btTrocartexto = document.querySelector("#btTrocartexto"); 

function alterartexto(){
    // retirando o valor digitado no input 
    //e jogando na variavel 
    let textodigitado = campotexto.value;
    //atribuido ao elemento titulo o texto que foi digitado
    //no input
    titulo.textContent = textodigitado;
}

//atribuinfo uma açao de clicar no botao 
btTrocartexto.onclick = function(){
    alterartexto();
}