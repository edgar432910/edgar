'use strict'

function holamundo(texto){
    var hola_mundo="texto dentro de la funcion";
    console.log(texto);
    console.log(numero.toString);//variable global
    console.log(hola_mundo);//variable local , existe dentro de la funcion 
}
console.log(hola_mundo);//variable local 
var numero=10;
var texto = "hola mundo soy una variable global";
holamundo(texto);
