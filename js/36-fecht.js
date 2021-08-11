'use strict';
//jsonPlaceholder; 

//Fetch (ajax) y peticiones a servicios /apis rest 
var usuarios=[]
fetch("https://reqres.in/api/users").then(data=> data.json()) // parametro data y retorna data.jason
.then(users=>{
usuario=users.data;
console.log(usuario);
})