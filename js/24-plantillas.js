'use strict'

//Plantillas de texto
var nombre =prompt("Mete tu nombre");
var apellidos=prompt("mete tus apellidos");

//var texto="Mi nombre es"+nombre+"Mis apellidos"+apellidos;
var texto=`
    <h1>Hola que tal</h1>
    <h3>Mi nombre es :${nombre}</h3>
    <h3>Mi apellido es :${apellidos}</h3>
    ;
`
document.write(texto);
