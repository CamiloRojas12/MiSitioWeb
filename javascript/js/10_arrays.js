"use strict"

/* Forma de declarar e inicializar un arreglo*/
/* Forma 1 */
var aprendiz1 = new Array();
aprendiz1[0] = 1;
aprendiz1[1] = "Camilo Rojas";
aprendiz1[2] = "Alexander Catano";
aprendiz1[3] = 19;
aprendiz1[4] = "Pepito perez";
aprendiz1[5] = 170;

/* Forma 2 */
var aprendiz2 = new Array (2, "Camilo ", "Rojas", 19, "Pitalito", 154)
 
/*Forma 3 */
var aprendiz3 = [3, "Pepito", "perez", 19, "Pinos",166]

/*Mostrar el nombre competo del aprendiz N.2 */
console.log ("Nombre Completo del Aprendiz: "+ aprendiz2 [1]+" "+aprendiz2[2])

/* Agregar otro objeto */
aprendiz2 [6] = "3138642129";

/* contando elementos */
var cantidadElementos = aprendiz2.length;
console.log("Aprendiz 2 tiene " + cantidadElementos + " elementos")

/* Contando caracteres */
var cantidadCaracteres = aprendiz2[1].length;
console.log("Cantidad de caractares: " + cantidadCaracteres);