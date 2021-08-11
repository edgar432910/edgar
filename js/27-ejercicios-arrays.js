'use strict'
/*
1.Pida 6 numeros por pantalla y metalo en un arrays.
2.Mostrar el aaray entero (Todos sus elementos) en el pagina y en la consola
3.Ordenarlo y mostrarlo 
4.Invertir su orden y mostrarlo
5.Mostrar cuantos elementos tiene el array
6. Busqueda de un valor introducido por el usuario , que nos diga si lo encuentra y su indice 

*/

//var numeros=new Array(6);
function mostrarArrays (elementos){
    elementos.forEach((elemento)=> {
        document.write("<h1>elemento</h1>")
       
    })

}
var numeros =[];
for(var i=0;i<6;i++){
    //numeros[i]=parseInt(prompt("Intorduce un numero ", 0));
    numeros.push(parseInt(prompt("Intorduce un numero ", 0)));
}


//MOstrar en pantalla
mostrarArrays(numeros);


console.log(numeros)

//ordenarlo sorma numerica
numeros.sort(function(a,b){return a -b});//Ordena de forma ascendente a -b;  descendente b -a
console.log(numeros);

//mostrar 
mostrarArrays(numeros);

numeros.reverse;
mostrarArrays(numeros);

numeros.length;

//Busqueda 
var busqueda=parseInt(prompt("busca un numero",0))
var posicion=numeros.findIndex(numero=>numero=busqueda);
if(posicion && posicion!=0){
    console.log("encontrado ")
}


