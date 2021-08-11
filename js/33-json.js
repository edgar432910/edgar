//objet notacion java

var pelicula ={
    titulo:"batman vs superman",
    year:2010,
    pais:"eeuu"
};
var peliculas=[
    {titulo:"la verdad",year:2016},//un array
    pelicula //un objeto 
]

var caja_peliculas=document.querySelector("#peliculas");
var index; 
for(index in peliculas){
    var p = document.createElement("p")
    p.append(peliculas[index].titulo);
    cajas_peliculas.append(p);
}



pelicula.titulo="cambio"//asi se cambia el contenido ;
console.log(pelicula)