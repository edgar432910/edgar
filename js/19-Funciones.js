'use strict'

function nombre(){
    return "retorno de esta funcion nombre";
}

console.log(nombre(),nombre());
nombre();//asi se llama a la funcion 

function suma(a,b){
    console.log(a+b);
}
suma(3,4);// si no se pone los parametros sale error


function abc(a,b, mostrar=false){// es un parametro adicional , no es necesario pasarlo
    console.log(a+b);
}
abc(2,3); //no es necesario poder mostrar pero si se puede digitar para cambiarlo el por defecto 

var numero={
    'nombre':'billy',
    'apellido':'gaes'
};
numero.nombre;


