'use strict'



//eventos de raton 

var boton =document.querySelector("#boton")

//event load para que se cargue las demas 
/*
window.addEventListener( 'load' ,()=>{

} 

); cuando la pagina este cargada , recien se cargara */

function cambiarcolor(){
   

    console.log("me ha dado clic");
    var bg=boton.style.background;
    if(bg == "green"){
        boton.style.background="red"
    }
    else{
       
        boton.style.background= "green";
    }
    return true
   
}
function cambiarcolor2(){
   

    console.log("me ha dado clic");
    var bg=boton2.style.background;
    if(bg == "green"){
        boton2.style.background="red"
    }
    else{
       
        boton2.style.background= "green";
    }
    return true
   
}

var boton2 =document.querySelector("#boton2")
//Segunda forma , solo JS , EVENTO CLICK
boton2.addEventListener('click', function() { cambiarcolor2(); }   )


//MOuse over cuando estas en el evento

boton2.addEventListener('mouseover',function(){boton2.style.background="#ccc"}  )


//MOUSEOUT  captura el evento cuando sales del evento 

boton2.addEventListener('mouseout',function(){boton2.style.background="blue"})

//focus dentro del input
var input=document.querySelector("#camponombre")

input.addEventListener('focus',function(){ console.log("estas dentro del input")})

//blur  estas fuera del input


input.addEventListener('blur',function(){ console.log("estas fuera del  del input")})


//keydown es cuando estas pulsando esta tecla 

input.addEventListener('Keydown',function(event){ console.log("estas pulsando esta tecla",String.fromCharCode(event.KeyCode))})


//Keypress cuando presesionas una tecla
input.addEventListener('Keypress',function(event){ console.log("estas pulsando esta tecla",String.fromCharCode(event.KeyCode))})

//keyup cuando levantes el dedo de la tecla

input.addEventListener('Keyup',function(event){ console.log("estas pulsando esta tecla",String.fromCharCode(event.KeyCode))})


//