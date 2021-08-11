'use strict'
/* Hace un programa que muestre todos los numeros entre los numeros introducidos por el usuario */

var numero1=parseInt(prompt("numero 1",0));
var numero2=parseInt(prompt("numero 2",0));

document.write("<h1> De" + numero1 +"a"+numero2 +"</h1>"); // anadir texto en la pagina

for(var i=numero1; i<=numero2;i++){
    document.write(i +"<br/>");
}