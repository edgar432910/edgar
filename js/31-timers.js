'use strict'

//timers
function intervalo(){
    var tiempo =setInterval(function(){
        console.log("set interval ejecutado")
        var encabezado=document.querySelector("h1")
        if (encabezado.style.fontSize=="50px"){
            encabezado.style.fontSize="30px"
        }else{
            encabezado.style.fontSize="50px"
        }
        
    },3000)//se ejecuta cada 3 segundos infinitamente 
    return tiempo;
    //settimeout() solo se ejecuta una vez

}

var tiempo=intervalo();

//boton stop
var stop=document.querySelector("#stop");
stop.addEventListener("click",function(){
    alert("haz parado el bucle")
    clearInterval(tiempo);//para limpiar el tiempo 
})


//inicio
var start=document.querySelector("#start");
start.addEventListener("click",function(){
    alert("haz iniciado el bucle")
   intervalo();
})



