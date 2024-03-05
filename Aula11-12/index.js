/*----------------Array [Matriz]-----------------
const list = ["arroz","feijão","macarão","leite"];

list [0]="Café";//para mudar algum nome da lista
console.log(list);

--------------------------------------
const pessoa = ["Paulo", "Vilela", 21];//Array

const Pessoa ={nome:"Paulo",sobrenome:"Vilela",idade:21};//Objeto

console.log(Pessoa)

-----------------METODOS----------------------------
.length => mostra quantos elemtos tem na lista
JOIN => troca o separador desejado
POP()=> Remove o ultimo item da lista
PUSH() => adicionar um item na lsita [final]
SHIFT() => Remove o primeiro da lista
UNSHIFT() => Adiciona um item no primeiro campo da lista
splice() pessoa.splice(1,0,"Item add 1","Item add 2");
CONCAT() => Para ajudar duas ou mais lista [const superLista = lista1.concat(lista2);]
SLICE() => Fatia apartir de um ponto escolhido
SORT() => Deixa em ordem alfabetica [Texto]
num.sort(function(a,b){return a-b}); Para deixar na sequencia[< para o >]
--------------------------------------------------------------------
console.log(pessoa[pessoa.length -1]);//Para identificar o ultimo item da lista

pessoa.push("Brasileiro");//Para adicionar um item na lsita [final]
pessoa[pessoa.length] = "Solteiro";
------------------------------------------

const x = "paulo"

console.log(Array.isArray(x));//Metodo utilizado para identicar um array

console.log(pessoa);
*/

const num = [40,55,100,25,1];

//document.getElementById("texto").innerHTML = num.join(" - ");

document.getElementById("texto").innerHTML = MaiorNum(num);

function MaiorNum (array){
    return Math.max.apply(null, array);
}
