'use strict'

function getBom(){
    console.log(window.innerHeight)//window=screen
    console.log(window.innerWidth) 
    console.log(window.location) //saca el url actual

}

function redirect(url){
    window.location.href=url;// url , redirige 
}
function abrirVentana(url){
    window.open(url,"","width=400,height=300");//al escribir la url , abre otra pestaña , de tamaño pequeño 
}

getBom();//pantalla del navegador
