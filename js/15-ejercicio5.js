'use strict'

/*todos los numero divisores de un numero introducido en pantalla */

var numero=parseInt(prompt("numero",0));

for(var i=1;i<numero;i++){
    if(numero%i==0){
        console.log("los divisores :"+i);
    }
}