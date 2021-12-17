"use strict"

/* Diseñar un sistema que muestre la hora en formato AM o PM */

var time = new Date();
console.log(
  time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
);

console.log("===Sistema que permite saber cuántos días faltan para su próximo cumpleaños.===");

/*  */
var cumpleaños= new Date( "november 26 2022");
var fechaHoy=new Date();
/*  */
var msfechahoy=fechaHoy.getTime();
var msCumpleaños=cumpleaños.getTime();
/*  */
var msDIFF= msCumpleaños-msfechahoy;
/*  */
var diasDIFF= msDIFF/(1000*60*60*24);

diasDIFF= Math.floor(diasDIFF); 
console.log("faltan "+ diasDIFF +" dias para mi cumple");

console.log("===Definir un sistema que cargue la fecha y si ese día el usuario cumple años arrojar un mensaje ===");

var fechaCumpleañosFelipe= new Date("november 26 2022");
var mescumpleañosFelipe=fechaCumpleañosFelipe.getMonth();
var diacumpleañosFelipe=fechaCumpleañosFelipe.getDate();
var fechaHoycumpleañosdia = fechaHoy.getDate();
var fechaHoycumpleañosmes= fechaHoy.getMonth();
console.log("hoy es el dia "+fechaHoycumpleañosdia+" del mes "+(fechaHoycumpleañosmes+1));

if(mescumpleañosFelipe===fechaHoycumpleañosmes && diacumpleañosFelipe===fechaHoycumpleañosdia ){
console.log("feliz cumpleaños crack")
}else{console.log("No hay cumple hoy wey")};
 console.log("===Cuantos años voy a cumplir===");

 var fechaNacimiento= new Date("novembre 26 2002");
 var anioActual= fechaHoy.getFullYear();
 var anioNac=fechaNacimiento.getFullYear();
 var anioDIFF=anioActual-anioNac;
 console.log("yo naci en el "+ anioNac);
 console.log("y estamos en el "+anioActual);

 console.log("asi que tengo "+ anioDIFF);

 console.log("asi que voy a cumplir "+ (anioDIFF+1));

 