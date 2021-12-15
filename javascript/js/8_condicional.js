"use strict"

//Variables de login

var user = "Camilo1851"
var clave = "12345678"

//Variables de base de datos

var userBd = "Camilo1851"
var claveBd = "1234568"

if(user === userBd && clave === claveBd){
    console.log("Bienvenido a nuestra plataforma")
} else{
    console.log("Usuario incorrecto, asegurese que los datos introducidos sean correctos")
}