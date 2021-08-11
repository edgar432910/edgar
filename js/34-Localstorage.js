//LOcal storage 

'use strict'
//comprobar disponibilidad del localstorage 
if (typeof(Storage)!== 'undefined'){
    console.log("local storage disponible");
}else{
    console.log("no esta disponible")
}
//guardar datos 
localStorage.setItem("TITULO","Curso de symfony de victo")

// recuperar elemento, conseguir el elemento, titulo es la clave 

console.log( localStorage.getItem("TITULO"))

// localStorage.getItem("TITULO") recupera el valor 

// guardar objetos 

var usuario ={
    nombre:"abc",
    email:"asdfsd",
    web:"esdsa"
}
localStorage.setItem("usuario",JSON.stringify(usuario))// se debe convertir en un string 

// traer el objeto 

 var userjs=JSON.parse(localStorage.getItem("usuario"))//JSON:PARSE es necesario para traerlo en objeto
 console.log(userjs)

 document.querySelector("#datos").append(userjs.web+""+ userjs.email)

 // boorrar un dato 
 localStorage.removeItem("usuario"); 
 localStorage.clear();//borra todo 