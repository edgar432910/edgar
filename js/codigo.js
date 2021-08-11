/*
alert("hola mundo");
document.write("hola mundosssss");
//comentario de linea
console.log("esto sale en la consola ");*/

//variables , un contenedor de informacion ; var puede cambiar el valor 

var pais = "españa";
var numero= 123;

var pais_numero=pais + ''+ numero;//concatena 

console.log(pais, numero); // imprime la variable pais y numero en la consola

// Let y var 
//let se limita en el bloque y var es una variable global
//var
var numero =10;
console.log(numero);

if(true){
    var numero =15;
console.log(numero);//el valor se actualiza 15
}
console.log(numero);//imprime 15

//let

if(true){
    let numero =15;
console.log(numero);//imprime 15 , pero solo en ese bloque
}
console.log(numero);//imprime 10 