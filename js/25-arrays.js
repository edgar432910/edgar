'use strict'
// arrays 

var nombres=["ed","gr",2,true];

var lenguajes=new Array("php","otro lenguaje");

console.log(nombres);
//indices 
nombres[2];//elemento numero 3 
nombres.length//cantidad de elementos


lenguajes.forEach((elemento)=>{
    document.write(elemento)
});

//array dos dimensiones

var categoria=["Accion","terror"];
var numeros=[1,2,3];
var cine=[categoria,numeros];
var peliculas=["lucifer","karate kid"]
//una array de arreglos 
cine[0][1]//va a categoria, posicion terror; 

numeros.push("4");
numero.pop()//sacas el ultimo elemento ; 
//localizar el elemento y luego lo eliminas
var indice=numeros.indexOf("4");//localizamos su posicion 


if(indice>-1){
    peliculas.splice(indice,1)//apartir de ese elemento , borrara la cantidad 
}
//econvierte un array en un string
 var peliculas_string= peliculas.join;//concatena un array y se vuelve string

//convierte un string en un array
 var cadena="texto1,texto2,texto3";

 var cadena_array=cadena.split(",");//elementos separados por comas , 


 numeros.sort;//ordenar 
 numeros.reverse;//orden inverso 

 //recorrer un array

 for(let lenguaje in lenguajes){
     lenguajes[lenguaje];//indice , reccore 

 }

 //Busqueda en un arreglo
 var busqueda=lenguajes.find(function(lenguaje){return lenguaje=="php"});//saca el elemento

 var busqueda2=lenguajes.find(lenguaje=> lenguaje="Java");//saca el elemento a buscar en el array

 var busqueda2=lenguajes.findIndex(lenguaje=> lenguaje="Java");//saca el indice del array


 var precios=[10,20,30,40]

 var busqueda=precios.some(precio=> precio>=20);//busqueda si cumple una condicion , true o false
 



