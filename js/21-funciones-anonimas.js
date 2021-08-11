'use strict'
//Funciones anonimas , es un conjunto de instrucciones sin nombre

var pelicula =function(nombre){return "la pelicula es :"+nombre}

function sumame(numero1,numero2,sumaymuestra,sumapordos){
    var suma=numero1+numero2;
    sumaymuestra(suma);
    sumapordos(suma);
    return suma;
}

sumame(2,3 , (dato)=>{console.log(dato)},function(dato){console.log(dato*2)});
// cualquiera con flecha => o function 
