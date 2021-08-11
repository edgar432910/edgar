'use strict'
//Parametros rest y sprid

function listadoFrutas(fruta1,fruta2,...resto){//utiliza con ...abs ; un array de valores 
    console.log("fruta 1",fruta1);
    console.log("fruta2. ",fruta2);
}
listadoFrutas("naranja", "manzana","c","d");//los datos adicionales se guardan en un array


var array=["a","b","c"];

listadoFrutas(...array,"c","e");//el array lo separa para imprimir 
