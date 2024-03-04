/*----------------Array [Matriz]-----------------
const list = ["arroz","feijão","macarão","leite"];

list [0]="Café";//para mudar algum nome da lista
console.log(list);

--------------------------------------
const pessoa = ["Paulo", "Vilela", 21];//Array

const Pessoa ={nome:"Paulo",sobrenome:"Vilela",idade:21};//Objeto

console.log(Pessoa)
---------------------------------------------
.length => mostra quantos elemtos tem na lista

console.log(pessoa[pessoa.length -1]);//Para identificar o ultimo item da lista

pessoa.push("Brasileiro");//Para adicionar um item na lsita [final]
pessoa[pessoa.length] = "Solteiro";
------------------------------------------
*/

const pessoa = ["Paulo", "Vilela", 21];//Array

const x = "paulo"

console.log(Array.isArray(x));//Metodo utilizado para identicar um array

console.log(pessoa);