/*------------------------Manipulação de Datas-----------------

*/

let data = new Date();

//console.log(data)

//Pega o ano atual com 4 digitos
let ano = data.getFullYear();

console.log(ano);

//Para pegar o Mês atual
let mes = data.getMonth();
//console.log(mes);


//Mostra o Mês no formato escrito
const mesAno = [
    "janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
];

let mesEscrito = mesAno[data.getMonth()];
console.log(mesEscrito);

//Pegar dia do Mês - 01 a 31
let diaMes = data.getDate();
console.log(diaMes)

//Mostrar o dia da Semana - 0 a 6
let diaSemana = data.getDay();
console.log(diaSemana);

// Dia da semana escrito
const DiaSemana = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
];

let diaEscrito = DiaSemana[data.getDay()];
console.log(diaEscrito);

//Pegar hora 00 ate 23
let hora = data.getHours();
console.log(hora);

//Pegar os minutos 
let minuto = data.getMinutes();
console.log(minuto);

// Pegar segundos
let segundos = data.getSeconds();
console.log(segundos);

//Para pegar milisegundos

let milisegundos = data.getMilliseconds();
console.log(milisegundos);

// Data padrao Brasileiro DIA/MES/ANO
let dataBR = data.toLocaleString('pt-BR', {dateStyle:'short'});
console.log(dataBR)

//Valores separados
d = new Date();
diaMes = d.getDate();
mes = d.getMonth() + 1;
ano = d.getFullYear();

function addZero(x){
    return x < 10 ? '0' + x : '' + x
};

let dataPadraBR = addZero(diaMes) + "/" +addZero(mes) + "/" + ano;
console.log(dataPadraBR);

//Comparar datas MAIOR ou MENOR
var hoje =new Date();
var vencimento = new Date(2024,3,9);

if (hoje > vencimento){
    console.log("Sua conta está vencida!");
}else{
    console.log("Ainda não venceu!")
}

//Diferença entre duas datas em dias
var dataInicial = new Date();
var dataFinal = new Date(2024,11,31);

var diferencaTemp = dataFinal.getTime() - dataInicial.getTime();
var diferencaDias = Math.ceil(diferencaTemp/ (24*60*60*100));

console.log(diferencaDias + " Dias")