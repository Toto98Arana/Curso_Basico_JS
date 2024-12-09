// 1. Concatena dos cadenas de texto

let nombre = "Jorge";
let apellido = "Arana";

console.log(`Hola mi nombre es ${nombre} y mi apellido es ${apellido}`);

// 2. Muestra la longitud de una cadena de texto

console.log(nombre.length);

// 3. Muestra el primer y último carácter de un string

console.log(nombre[0]);
console.log(nombre[4]);

// 4. Convierte a mayúsculas y minúsculas un string

let texto = "HoLa MuNdO";

console.log(texto.toUpperCase());
console.log(texto.toLowerCase());
// 5. Crea una cadena de texto en varias líneas

const message = `Hola es una cadena,
de texto en varias lineas,
esta es una 3ra linea`;

console.log(message);
// 6. Interpola el valor de una variable en un string

console.log(`Hola mi nombre es ${nombre} y mi apellido es ${apellido}`);

// 7. Reemplaza todos los espacios en blanco de un string por guiones

let frase = "El sol nace para todos";
let frase1 = frase.replace(/ /g, "-");
console.log(frase1);

// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log(message.includes("3ra"));

// 9. Comprueba si dos strings son iguales

console.log(nombre === apellido);

// 10. Comprueba si dos strings tienen la misma longitud

const texto1 = "Mundo ";
const texto2 = "Mundo";

if (texto1.length === texto2.length) {
  console.log("Tienen la misma cantidad");
} else {
  console.log("No tiene la misma cantidad");
}
