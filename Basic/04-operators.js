// Operadores

// Operadores Aritmeticos

let a = 5;
let b = 10;

console.log(a + b); //suma
console.log(a - b); //resta
console.log(a * b); //multiplicación
console.log(a / b); //división

console.log(a % b); //Módulo
console.log(a ** b); //Exponente

//Incremento
a++;
console.log(a);

//Decremento
b--;
console.log(b);

// Operadores de asignacion

let myVariable = 2;
console.log(myVariable);
myVariable += 2; // toma el valor de la variable y le suma el nuevo valor de la variable
console.log(myVariable);

myVariable -= 2;
myVariable *= 2;
myVariable /= 2;
myVariable %= 2;
myVariable **= 2;

// Operadores de Comparación

console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a == b);
console.log(a == "6"); // Igualdad por valor
console.log(a == a);
console.log(a === a); // Igualdad por identidad (por tipo y valor)
console.log(a === 6);
console.log(a === "6"); // compara el valor y el tipo con los "==="
console.log(a);
console.log(a != 6); // distinto
console.log(a !== "6");

console.log(0 == false);
console.log(1 == false);
console.log(2 == false);

console.log(a); // cadenas vacias

console.log(0 == "");
console.log(0 == " ");
console.log(0 == ``);
console.log(0 == ` `);
console.log(0 == "Hola");
console.log(0 === "");
console.log(undefined == null);
console.log(undefined === null);

// trurhy values (valores verdaderos)
// todos los numeros positivos y negativos menos el cero
// todos los boolean

// falsy values (valores falsos)

//0
//0n
//null
//undefined
//NaN
// El boolean false
// Cadenas de textos vacias

// Operadores Logicos

// and (&&)

console.log("Operadores Logicos AND &&");
console.log(5 > 10 && 15 > 20);
console.log(5 < 10 && 15 < 20);
console.log(5 < 10 && 15 > 20);
console.log(5 < 10 && 15 > 20 && 30 > 40);

// or (||)

console.log("Operadores Logicos or ||");
console.log(5 > 10 || 15 > 20);
console.log(5 < 10 || 15 < 20);
console.log(5 < 10 || 15 > 20);
console.log(5 < 10 || 15 > 20 || 30 > 40);

console.log((5 > 10 && 15 > 20) || 30 < 40);

// not (!)

console.log("Operadores Logicos not !");
console.log(!true);
console.log(!false);
console.log(!(5 > 10 && 15 > 20));
console.log(!(5 > 10 || 15 > 20));

// Operadores ternarios

console.log("Operadores Ternarios   ? console (): console()");

const isRaining = true;

isRaining ? console.log("Esta lloviendo") : console.log("No esta lloviendo");
