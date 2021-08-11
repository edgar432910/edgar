'use strict'
//Bucle for , es una estructura de control que se ejecuta un numero definido de veces 

var numero=100;

for(var i=0; i<100;i++){
    console.log(i);

}

//bucle while 

var year=2018;
while(year<=2040){
    console.log("es el año : "+year)
    year++;//asi rompe el bucle
}

//DO while  imprime al inicio si o si , volvera a imprimir depende de la condicion 
var years=20;
do{console.log("solo imprime si es diferente  a  20")
    years=20; // 
}
while(years!=20)