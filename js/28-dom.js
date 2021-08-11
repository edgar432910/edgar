'use strict'

function cambiacolor(color){
    caja.style.color=color;
}

//DOM DOcumneto object 

//conseguir elementos un id concreto 
var caja=document.getElementById("micaja");//innerHtml saca el texto 

var caja=document.querySelector("#micaja");// selector igual que css 
caja.innerHTML="texto en la caja desde JS";//chancando su contenido

caja.style.background="red";//.padding="20px";
caja.style.padding="10px";

caja.className="clas1 clas2";//forma de poner clases 
// console.log(caja);

//conseguir elementos por su etiqueta 
var todoslosdivs=document.getElementsByTagName('div');//selecciona todos los divs
var seccion=document.querySelector("#miseccion")
var hr = document.createElement("hr")

for(var valor in todoslosdivs){
    // 
    // 
    if(typeof todoslosdivs[valor].textContent =="string"){
     var parrafo=document.createElement("p");
    
     var texto=document.createTextNode(todoslosdivs[valor].textContent);//contener texto    
     
     parrafo.appendChild(texto);//en cada parrafo ,entra un texto
     seccion.appendChild(texto);//todos los parrafos dentro de una etiqueda
 
    }
    
 }
 seccion.append(hr)//append es despues , prepend antes 

 //
//var contenidotexto= todoslosdivs[2].textContent;//innerHtml permite modificar y obtener el contenido
//contenidotexto.innerHTML="escrito por js" 


//console.log(contenidotexto)
//conseguir elementos por su clase

var divrojos=document.getElementsByClassName("rojo");
var divamarillos=document.getElementsByClassName("amarillo")//consigue todos las clases amarillo
divamarillos[0].style.background="blue";//siempre con su indice ;
for(var div in divrojos){
    if(divrojos[div].className=="rojo"){
        divrojos[div].style.background="red"
    }
   
}
//get elements selecciona un grupo de elementos 
console.log(divrojos);
console.log(divamarillos)

//qQuery selector

var id=document.querySelector("#encabezado")
console.log(id) //solo es recomendable para una sola clase

