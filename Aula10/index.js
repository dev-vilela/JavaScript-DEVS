/*----------------Eventos------------------------

onclick => disparado quando recebe um click
ondblclick => disparado quando click duplo
onmouseover => disparado quando o mouse está sobre
onmouseout => disparado quando o mouse sai do objeto
onmousemove => disparado quando o mouse é movido no elemento
onmousedown => disparado quando o click do botão for pressionado
onmouseup = > disparado quando o click do mouse é solto
onfocus => disparado quando o elemento recebe o foco. Válido para input
onchange => disparado quando há uma mudança no conteúdo. "Ao mudar"
onblur => disparado quando o elemento perde o foco
onkeydown => disparado quando uma tecla é pressionada 
onkeypress => disparado quando uma tecla é pressionada e solta
onkeyup => disparado quando uma tecla é solta sobre o elemento
onload => disparado quando a página terminou de ser carregada. Body
onresize => disparado quando há um redimencionamento da janela

*/


//onclick
function eventoClick(){
    //alert("Acionou um de evento de Click.");
    document.body.style.background = "black";
   
}


//ondblclick
function eventoDblClick(){
    alert('Evento de click duplo');
}


//onmouseover
function viraAzul(){
    let div = document.getElementById("teste");
    div.style.background = "blue";
}


//onmouseout
function viraVermelho(){
 let div = document.getElementById("teste");
 div.style.background = "red";
}

//onmousemove
/*
function adicionaTexto(){
    let p =document.getElementById("texto");
    p.append('o mouse moveu');
}
 */

//onfocus
function textoFocado(){
    document.getElementById("caixaTexto").value = "";
}