/* ------------------------SWITCH ------------------------
EX01:

function verificarCor(){
    let cor = document.getElementById("cor").value;
   cor =  cor.toLowerCase();//Deixa toda a letra minuscula

    switch (cor) {

        case "azul":
            document.body.style.backgroundColor = "blue";
            break;

        case "vermelho":
            document.body.style.backgroundColor = "red";
            break;

        case "amarelo":
            document.body.style.backgroundColor = "yellow";
            break;
    
        default:
            document.getElementById("teste").innerHTML = "Nenhuma cor disponivel para: " + cor;
            break;
    }

}



 */


function diaDaSemana(){
    var dia = new Date().getDay();

   switch (dia) {
    case 0:
        document.getElementById("teste") = "Hoje é Domingo";
        break;

    case 1:
        document.getElementById("teste") = "Hoje é Segunda";
        break;

    case 1:
        document.getElementById("teste") = "Hoje é Segunda";
        break;

    case 2:
        document.getElementById("teste") = "Hoje é Terça";
        break;

    case 3:
        document.getElementById("teste").innerHTML = "Hoje é Quarta";
        break;

    case 4:
        document.getElementById("teste").innerHTML = "Hoje é Quinta";
        break;

    case 5:
        document.getElementById("teste").innerHTML = "Hoje é Sexta";
        break;

    case 6:
        document.getElementById("teste").innerHTML = "Hoje é Sabadado";
        break;
 
    
    default:
        document.getElementById("teste").innerHTML = "Não sei o dia...";
        break;
   }
}