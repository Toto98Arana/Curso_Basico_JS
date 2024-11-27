// Tipo de datos primitivos e JS

// String (cadena de texto)

let name = "Jorge Arana";
let alias = `TotoArana`;
let email = `jorgearana918@gmail.com`;

console.log(name, alias, email);

// number (Números)

let age = 37; // Enteros
let height = 1.77; //Decimal

console.log(age, height);

// boolean (Booleanos)

let isTeacher = true;
let isStudent = false;

// Undefined   => Variable que se declara pero aun no tiene un valor designado

let undefinedValue;
console.log(undefinedValue);

// Null  => la variable tiene un valor nulo si ocupa ya ese dato

let nullValue = null;

//Symbol

let mySymbol = Symbol("mysymbol");

// BigInt

let myBigInt = BigInt(123456789098765432123456789876543212345678);
let myBigInt2 = 12345678765432123456776543212345678765432345676543n;

//Mostar los tipos de datos

console.log(typeof name);
console.log(typeof alias);
console.log(typeof email);
console.log(typeof age);
console.log(typeof height);
console.log(typeof isTeacher);
console.log(typeof isStudent);
console.log(typeof nullValue);
console.log(typeof mySymbol);
console.log(typeof myBigInt);
console.log(typeof myBigInt2);
