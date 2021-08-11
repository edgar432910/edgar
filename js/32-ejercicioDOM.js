'use strict'

window.addEventListener('load', function(){
    console.log("dom cargado as")

    var formulario=document.querySelector("#formulario")
    var box_dashed=document.querySelector(".dashed")

    box_dashed.style.display="none";//oculta 

    formulario.addEventListener('submit', function(){
        console.log("enviado submit")
        var nombre =document.querySelector("#nombre").value
        var apellido=document.querySelector("#apellidos").value
        var edad=parseInt(document.querySelector("#edad").value)

        //validar los datos 
        if(nombre.trim()==null || nombre.trim().length == 0){
            alert("el nombre no es valido")

        }
        if(apellido.trim()==null || apellido.trim().length == 0){
            alert("el apellidos no es valido")

        }
        if(edad ==null || edad <= 0 || isNaN(edad)==true ){
            alert("el edad no es valido")

        }

        box_dashed.style.display="block";//muestra el bloque
        console.log(nombre,apellido,edad )

        var p_nombre=document.querySelector("#p_nombre span")
        var p_apellidos=document.querySelector("#p_apellidos span")
        var p_edad=document.querySelector("#p_edad span")
        p_nombre.innerHTML=nombre;
        p_apellidos.innerHTML=apellido;
        p_edad.innerHTML=edad;

        /* 
        usarlo sin parrafos 
        var datos_usuario=[nombre,apellido,edad]
        for(var indice in datos_usuario){
            var parrafo=document.createElement("p")
            parrafo.append(datos_usuario[indice])
            
            box_dashed.append(parrafo)

        }
        */
        


    })
})