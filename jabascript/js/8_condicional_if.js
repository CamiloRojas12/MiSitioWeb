/* Condiconal anidado */
/* Sistema que me permite calcular un descuento compuesto */
/* Agencia de viajes. 
1. si la persona que va a viajar no ha caumplido los 10 años al momento 
del viaje o ya cumplio los 70 años temdra
un 10% de descuento en el tiquete aereo.
2. Si el destino turistico del anterior pasajero es cartagena 
tiene un 10% de descuento adicional sobre el precio final.
3. Si ademas del destino Cartagena, la aerolinea de dicho pasajero es Latam tiene otro 10% de descuento.
adicional acomulable sobre el precio final.
4. Hallar el valor final del tiquete. las variables y el contenido de las mismas sera ingresado por cada uno  */
var edadUsuario = 9;
var destinoUsuario = "Cartagena";
var aerolineaUsuario = "Latam"; 
var destinoDescuento = "Cartagena"; 
var aerolineaDescuento = "Latam"; 
var costotiquete = 25000; 
var descuento = .10; 
var costoFinal = 0;
var descuentosUsuarios = ""; 


if ( edadUsuario < 10 || edadUsuario >= 70) {
    costotiquete = costotiquete - ( costotiquete * descuento); 
    descuentosUsuarios = "por Edad"; 
    if ( destinoUsuario === destinoDescuento) {
        costotiquete = costotiquete - ( costotiquete * descuento); 
        descuentosUsuarios = descuentosUsuarios + ", por Destino"; 
    }
    if ( aerolineaUsuario === aerolineaDescuento) {
        costotiquete = costotiquete - ( costotiquete * descuento); 
        descuentosUsuarios += " y por aerolinea"; 
    }
}
if ( descuentosUsuarios != "") {
    console.log ("Usted recibio descuentos por" + descuentosUsuarios); 
    console.log ("El valor final del tiquete con descuento es: $"+ costotiquete); 
}
else {
    console.log ("El valor final del tiquete es: $" +costotiquete); 
    console.log ("Lo sentimos, no aplica para ningun descuento"); 
}

/*Sistema de votación. 
Teniendo en cuenta la edad del ciudadano, el sistema le informa si puede o no votar.*/
  
var edadCiudadano = 18;
var edadMinima = 18; 
var edadMaxima = 140; 

if  (edadCiudadano >= edadMinima && edadCiudadano <= edadMaxima) {
    console.log ("Bienvenido. usted cumple las condiciones para votar."); 
}
else {
    console.log ("Lo sentimos, ha ocurrido un problema.");
}