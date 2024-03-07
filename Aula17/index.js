/*-----------------------Classes--------------------- 
THIS => Este
*/

class Carro{
    constructor(valor1,valor2,valor3){
        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;
    }

    buziana(){
        return this.modelo +" " + "Buzinou: BIiiiiiiBiiiiii";
    }
}

const uno = new Carro("Fiat","Uno",2001);
const gol = new Carro("VW","Gol",2016);
console.log(uno.buziana());
console.log(gol.buziana());

uno.uno = 2014;
console.log(uno);
