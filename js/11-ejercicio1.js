'use strict'
/* Programa que pida dos numero y que nos diga cuel es el mayor o menor */

var numero1=parseInt( prompt("Introduce el numero1", 0));
var numero2=parseInt( prompt("Introduce numero2",0));

console.log(numero1,numero2);

if(numero1>numero2){alert("numero1 es mayor");}
else if(numero1==numero2){ alert("los numeros son iguales");}
else{ alert("numero2 es mayor");}