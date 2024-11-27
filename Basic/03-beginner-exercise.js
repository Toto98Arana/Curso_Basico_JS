// 1. Escribe un comentario en una línea

//Hola este es un comentario en una linea

// 2. Escribe un comentario en varias líneas

/* Hola este es un nuevo
comentario de 
varias lineas de codigo */

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let myName = "Jorge";
let sumber = 3;
let booleano = true;
let noDefinido = undefined;
let noValido = null;
let mySymbol = Symbol("mysymbol");
let myBigInt = BigInt(123456789098765432123456789876543212345678);

// 4. Imprime por consola el valor de todas las variables

console.log(myName);
console.log(sumber);
console.log(booleano);
console.log(noDefinido);
console.log(noValido);
console.log(mySymbol);
console.log(myBigInt);

// 5. Imprime por consola el tipo de todas las variables

console.log(typeof myName);
console.log(typeof sumber);
console.log(typeof booleano);
console.log(typeof noDefinido);
console.log(typeof noValido);
console.log(typeof mySymbol);
console.log(typeof myBigInt);

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

let myName3 = "Jorge";
myName3 = "Antonio";
console.log(myName3);

let sumber3 = 3;
sumber3 = 5;
console.log(sumber3);

let booleano3 = true;
booleano3 = false;
console.log(booleano3);

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

let myName1 = "1";
console.log(myName1);

let sumber1 = "Tres";
console.log(sumber1);

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const stringConst = "Hola, soy un string"; // Tipo String
const numberConst = 42; // Tipo Number
const bigintConst = 1234567890123456789n; // Tipo BigInt
const booleanConst = true; // Tipo Boolean
const undefinedConst = undefined; // Tipo Undefined
const nullConst = null; // Tipo Null
const symbolConst = Symbol("identificador"); // Tipo Symbol

// 9. A continuación, modifica los valores de las constantes

try {
  stringConst = "Nuevo string"; // Error: Asignación a una constante
} catch (error) {
  console.log("Error al modificar stringConst:", error.message);
}

try {
  numberConst = 100; // Error: Asignación a una constante
} catch (error) {
  console.log("Error al modificar numberConst:", error.message);
}

try {
  bigintConst = 9876543210987654321n; // Error: Asignación a una constante
} catch (error) {
  console.log("Error al modificar bigintConst:", error.message);
}

try {
  booleanConst = false; // Error: Asignación a una constante
} catch (error) {
  console.log("Error al modificar booleanConst:", error.message);
}

try {
  undefinedConst = "Ahora no estoy indefinido"; // Error: Asignación a una constante
} catch (error) {
  console.log("Error al modificar undefinedConst:", error.message);
}

try {
  nullConst = "Ahora no soy null"; // Error: Asignación a una constante
} catch (error) {
  console.log("Error al modificar nullConst:", error.message);
}

try {
  symbolConst = Symbol("nuevo"); // Error: Asignación a una constante
} catch (error) {
  console.log("Error al modificar symbolConst:", error.message);
}

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse

console.log("¡Prueba completada!");
