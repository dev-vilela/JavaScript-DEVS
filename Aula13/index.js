/*---------------IF / ELSE -------------------



EX01:
var interruptor = "on";

if(interruptor == "on"){
    alert('A lampada está ligada');
}else{
    alert('Está desligada.');
}

---------------------------------
EX02:
var hora = new Date().getHours();

if (hora <=6) {
    console.log("Bom dia");
}else if(hora < 18){
    console.log("Boa tarde");
}else{
    console.log("Boa noite"); 
}

-----------------------------------------
EX03:
function verificar (){
    let nome = document.getElementById("nome").value;

    if(nome == "" || nome == null){
    
        let p = document.getElementById("texto");

        p.innerHTML = "O campo está vazio!";
        p.style.color = "red";
    }else{
        let p = document.getElementById("texto");

        p.innerHTML = "Login realizado com sucesso";
        p.style.color = "green";
    }
}
*/

function media (){
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);
    var nota4 = parseFloat(document.getElementById("nota4").value);

    var media = (nota1+nota2+nota3+nota4)/2;

    if(media >= 7){
        alert("Meus parabens aluno está aprovado!");
    }else if(media > 5){
        alert(`Aluno está de recuperação com media de ${media}`);
    }else{
        alert(`Aluno reprovado com media de ${media}`);
    }
}




   
