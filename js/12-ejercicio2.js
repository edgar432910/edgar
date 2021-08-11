'use strict'
/* Utilizando un bucle sacar la suma y  media , hasta introducir un numero negativo*/
var suma=0;
var contador=0;
do{
    var numero =parseInt( prompt("introducir numeros hasta que que digites uno negativo",0));
    if(isNaN(numero)){numero=0;} // isNaN :si no es un numero , el valor es 0
    else if(numero>=0){ suma+=numero;contador++; }
}
while(numero>=0)

console.log("la suma es"+suma);
console.log("el promedio es "+(suma/contador));