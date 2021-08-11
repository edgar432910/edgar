'use strict'

/*mostrar todos los numero impares de un intervalo introducidos por el usuario  */

var numero1=parseInt(prompt("numero1",0));
var numero2=parseInt(prompt("numero2",0));

while(numero1<numero2){
    if(numero1%2!=0){
        console.log("numero impar"+numero1);
    }
    
    numero1++;
}