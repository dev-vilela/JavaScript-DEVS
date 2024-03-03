/*---------------- Operadores Aritméticos ----------------

+
-
*
/
=
++
--
+=
-=
&
||

*/

// 1) Operadores Aritméticos:
/* 
var valor1, valor2, total;
valor1 = 5;
valor2 = 4;


total = --valor1;

document.getElementById("texto").innerHTML = total;
*/
/*-------------------------------------------------------------- */

// 2) Operadores de Atribuição
/*
var valor1, valor2, total;

valor1 = 8;
valor2 = 4;

valor1 += valor2;
valor1 -= valor2;
valor1 /= valor2;

document.getElementById("texto").innerHTML = valor1
-------------------------------------------------------------- 

3) Operadores de Sequencia
var valor1, valor2, total;

valor1 = "Paulo ";
valor2 = "Vilela";

total = valor1 + valor2;

document.getElementById("texto").innerHTML = total;

--------------------------------------------------------------
 4) Operadores de Comparação [true ou false]:
var valor1, valor2, total;

valor1 = 8;
valor2 = "8";

total = (valor1 != valor2);

document.getElementById("texto").innerHTML = total;
--------------------------------------------------------------
 5) Operadores de Condicional [Ternário]:

var idade, eleitor;

idade = 18;
eleitor = (idade <18) ? "Não, eleitor" : "Sim, eleitor";

console.log('A idade da pessoa é de: ' +  idade + " " + 'essa pessoa pode votar? ' + eleitor);
--------------------------------------------------------------
*/

// 6) Operadores de Logicos [&& || !]:

var idade, eleitor, resultado;

idade = 65;
eleitor = (idade <18) ? "Não, eleitor" : "Sim, eleitor";
resultado = (idade === 65 || idade === 72);

document.getElementById("texto").innerHTML = resultado;





