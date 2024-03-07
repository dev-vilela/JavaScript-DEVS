/*----------------------Eventos de Tempo [SetTimeout e SetInterval]--------------------------

---------------SetTimeout-----------------
function ativarContagem(){
    document.getElementById("tempo").innerHTML = "Começou a contar!";

    //Ativa a função apenas uma vez quando der o tempo especificado
    tempo = setTimeout(function(){
    document.getElementById("tempo").innerHTML = "Executou o SetTimeout";
    document.body.style.backgroundColor = "yellow";
    }, 1000);
}

function pararContagem(){
    clearTimeout(tempo);
    document.getElementById("tempo").innerHTML = "Parou a contagem";


}
*/

function ativarContagem(){
   
   tempo = setInterval(function(){
        var cronometro = document.getElementById('tempo').innerHTML;
        var soma = parseInt(cronometro) - 1;
    if(soma === 0){ 
        document.body.style.backgroundColor = "yellow";
        document.getElementById("tempo").innerHTML = "Tempo esgotado";
        pararContagem();
    }else{
        var cronometro = document.getElementById('tempo').innerHTML = soma;
    }

    },1000);
}

function pararContagem(){
    clearInterval(tempo);
}