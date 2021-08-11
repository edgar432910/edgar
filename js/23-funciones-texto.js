'use strict '
//tranformacion de texto

var numero=333;
var texto1="bienvenido al curso de java script"
var texto2="es muy buen curso";

var dato=numero.toString();

dato=texto1.toUpperCase();
dato=texto2.toLowerCase();

//longitud de texto 
var nombre="123";
nombre.length;// saldra 3 en total

//calcular -Unir texto 
var nombre_total=texto1+texto2;
var total=texto1.concat(""+texto2);

/// busqueda

var texto01="hola curso";
var buqueda=texto01.indexOf("curso");//nos permite sacar la posicion inicial
var busqueda=texto01.lastIndexOf("curso");//la posicion , final de lo buscado 

var busqueda=texto1.match("/curso/g");//busca el elemnto en un array , y las veces que se repite;

var mostrar=texto01.substr(10,4);//saca valor desde la posicion 10 , y de 4 caracteres
var mostrar=texto.charAt(10);//saca solo un caracter en la posicion 10;
var mostrar =texto1.endsWith("curso");//solo busca en la parte final, y sale true o false

var mostrar=texto1.includes("curso");//devuelve true o false si se ha encontrado;

var busqueda=texto1.replace("lo que buscare", "este texto lo reemplazara");
var busqueda = texto1.slice(14);//muestra apartir de la posicion 14
var busqueda=texto1.split("");//lo separa  , por el espacio 
var busqueda=texto1.trim();//elimina los espacio por los lados 

