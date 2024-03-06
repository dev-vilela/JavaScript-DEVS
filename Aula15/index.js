/*-----------------------FOR -------------------------

EX01: sequencia de numero
for (let i=0; i<10001; i++){
    document.getElementById("teste").innerHTML += i + ", ";
}

-------------------------------------------
for (let i = 2024; i > 1900; i--){
    document.getElementById("ano").innerHTML += "<option value='"+i+"'>" +i+ "</option>";
}

--------------------------------------------
var ano = new Date().getFullYear();

for (let i = ano; i > 1900; i--){
    document.getElementById("ano").innerHTML += "<option value='"+i+"'>" +i+ "</option>";
}
*/

const carros = ["Gol", "Ecoscport", "Honda", "Corolla", "Creta", "IX35"];

var tamanho = carros.length;

for (let i =0;i <tamanho;i++){
    document.getElementById("teste").innerHTML += carros[i] + " - ";
}

