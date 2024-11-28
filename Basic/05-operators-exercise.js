// 1. Crea una variable para cada operación aritmética

let a = 5;
let b = 10;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);
// 2. Crea una variable para cada tipo de operación de asignación,  que haga uso de las variables utilizadas para las operaciones aritméticas

let s = 20 + 25;
let r = 20 - 25;
let m = 20 * 25;
let d = 20 / 25;
let mo = 20 % 25;
let e = 20 ** 25;

console.log(
  `suma = ${s}, resta = ${r}, Multiplicación = ${m}, División = ${d}, Módulo = ${mo}, Exponente = ${e}`
);

let variable = 2;
variable = variable + 2;
console.log(variable);
// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log(10 > 4);
console.log(10 == 10);
console.log("" >= "");
console.log(true === true);
console.log(1 < 4);

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log(10 < 4);
console.log(10 === "10");
console.log(-2 >= "");
console.log(true === "");
console.log(1 > 4);

// 5. Utiliza el operador lógico and

console.log(1 < 20 && 20 > 1);

// 6. Utiliza el operador lógico or

console.log(1 < 20 || 20 > 1);

// 7. Combina ambos operadores lógicos

console.log((1 < 20 && 20 > 1) || 30 > 20);

// 8. Añade alguna negación

console.log(!(20 > 10));

// 9. Utiliza el operador ternario

const llover = true;

llover ? console.log("Si llueve") : console.log("No llueve");

// 10. Combina operadores aritméticos, de comparáción y lógicas

const x = 10;
const z = 20;
const resultado = x + z; // Suma de x y z
const w = 30;

// Combinación de operadores
const esMayorIgualYEsIgual = resultado >= w && resultado == 3;

// Mostrar los resultados
console.log(`El resultado de la suma es: ${resultado}`);
console.log(`¿resultado >= w y resultado == 3? ${esMayorIgualYEsIgual}`);
