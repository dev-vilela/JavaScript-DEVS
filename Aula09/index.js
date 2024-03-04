/*----------------Objetos------------------


*/

 const carro = {
    marca:"ford", 
    modelo:"Ka", 
    ano:"2015", 
    placa:"ACB-3253",

    buzina: function(){
        alert('Bibibiiiiiiiiiii')
    },

    completo: function(){
        return "A marca é " +this.marca+ " e o modelo é "+ this.modelo; 
    }
};


console.log(carro.completo());
