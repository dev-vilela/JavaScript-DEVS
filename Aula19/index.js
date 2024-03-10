/*----------------------JSON-----------------------
JavaScript Object Notation que traduzido pro português fica algo como notação de objeto JavaScript.
É basicamente uma forma de converter um objeto em texto e o contratio também, um texto em um objeto.

São usados dois metodos:
JSON.parse() => Converte texto no padrão JSON em objetos
JSON.stringify() => Converte objetos em texto padrão JSON

EX01:
const carro = {
    marca:"Honda",
    modelo:"Civic",
    ano:2017
}

let texto = JSON.stringify(carro);

document.getElementById('area').innerHTML = texto;

let obj = JSON.parse(texto);

console.log(obj.modelo);
--------------------------------------------
EX02:
const ajax = new XMLHttpRequest();
ajax.open('GET','https://viacep.com.br/ws/72855-813/json/');
ajax.send();

ajax.onload = function(){
    document.getElementById('teste').innerHTML = this.responseText;

    let obj = JSON.parse(this.responseText);
    //alert(obj.ddd);
}; 
*/

function buscarCep(){
    let input = document.getElementById('cep').value;

    const ajax = new XMLHttpRequest();
    ajax.open('GET','https://viacep.com.br/ws/'+ input + '/json/');
    ajax.send();
    
    ajax.onload = function(){
       // document.getElementById("texto").innerHTML = this.responseText;

        //Transformou o texto em objeto
        let obj = JSON.parse(this.responseText);
        let logradouro = obj.logradouro;
        let cidade = obj.localidade;
        let estado = obj.uf;

        document.getElementById("texto").innerHTML = "Logradouro: " + logradouro + "<br> Cidade: "+ cidade + "<br> Estado: " + estado;
    }; 
};





