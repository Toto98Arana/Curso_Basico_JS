/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let age = 26;

if ((age = 26)) {
  console.log("Hola mi nombre es Jorge");
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

const usuarioDefinido = "admin";
const passwordDefinido = 12345;

const usuario = "admin";
const password = 12345;

if (usuarioDefinido == usuario && passwordDefinido == password) {
  console.log("Bienvenido Jorge");
} else {
  console.log("Usted no es Jorge");
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let number = -1;

if (number > 0) {
  console.log("Positivo");
} else if (number === 0) {
  console.log("Cero");
} else {
  console.log("Negativo");
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let votar = 11;
let edadVotar = 18 - votar;

if (votar >= 18) {
  console.log("Puede votar");
} else {
  console.log(`Usted no puede votar, le faltan ${edadVotar} años de edad`);
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad

const años = 17;

let resultado1 = años >= 18 ? "Mayor de Edad" : "Menor de Edad";

console.log(resultado1);

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let mes = "enero";

if (mes === "marzo" || mes === "abril" || mes === "mayo") {
  console.log("Estamos en Primavera");
} else if (mes === "junio" || mes === "julio" || mes === "agosto") {
  console.log("Estamos en Verano");
} else if (mes === "septiembre" || mes === "octubre" || mes === "noviembre") {
  console.log("Estamos en Otoño");
} else if (mes === "diciembre" || mes === "enero" || mes === "febrero") {
  console.log("Estamos en Invierno");
} else {
  console.log("No ingresó un mes válido");
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

const month = "septiembre";
let resultado;

if (
  month == "enero" ||
  month == "marzo" ||
  month == "mayo" ||
  month == "julio" ||
  month == "agosto" ||
  month == "octubre" ||
  month == "diciembre"
) {
  resultado = 31;
} else if (
  month == "abril" ||
  month == "junio" ||
  month == "septiembre" ||
  month == "noviembre"
) {
  resultado = 30;
} else {
  resultado = 28;
}

console.log(`El mes tiene ${resultado} dias`);

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

const language = "italiano";
let pais;

switch (language) {
  case "español":
    pais = "Hola";
    break;
  case "ingles":
    pais = "Hello";
    break;
  case "italiano":
    pais = "Ciao";
    break;
  default:
    pais = "No tenemos ese idioma en el registro";
    break;
}

console.log(pais);

// 9. Usa un switch para hacer de nuevo el ejercicio 6

let meses = "enero";

switch (meses) {
  case "marzo":
  case "abril":
  case "mayo":
    console.log("Estamos en Primavra ");
    break;
  case "junio":
  case "julio":
  case "agosto":
    console.log("Estamos en Verano ");
    break;
  case "septiembre":
  case "octubre":
  case "noviembre":
    console.log("Estamos en Otoño ");
    break;
  case "diciembre":
  case "enero":
  case "febrero":
    console.log("Estamos en Invierno ");
    break;
  default:
    console.log("Mes invalido");
    break;
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7

let meses1 = "febrero";

switch (meses1) {
  case "enero":
  case "marzo":
  case "mayo":
  case "julio":
  case "agosto":
  case "octubre":
  case "diciembre":
    console.log("el mes tiene 31 dias");
    break;
  case "abril":
  case "junio":
  case "septiembre":
  case "noviembre":
    console.log("el mes tiene 30 dias");
    break;
  case "febrero":
    console.log("El mes tiene 28 dias");
    break;
  default:
    console.log("Mes invalido");
    break;
}
