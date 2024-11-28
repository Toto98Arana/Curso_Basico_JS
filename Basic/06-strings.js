// Strings

let myName = "Jorge";

let greeting = "Hola ," + myName + "!";

console.log(greeting);
console.log(typeof greeting);

// longitud

console.log(greeting.length);

// acceso a caracteres

console.log(greeting[0]);
console.log(greeting[1]);
console.log(greeting[11]);

// Métodos comunes

console.log(greeting.toLocaleUpperCase());
console.log(greeting.toLocaleLowerCase());
console.log(greeting.indexOf("Jorge")); // indice de cada elemento
console.log(greeting.indexOf("Hola"));
console.log(greeting.indexOf("MoureDev"));
console.log(greeting.includes("MoureDev")); // busca entre los elementos
console.log(greeting.includes("Hola"));
console.log(greeting.slice(0, 10)); // muestra solo los elementos que deseamos imprimir
console.log(greeting.replace("Jorge", "Antonio")); // Remplazar

// Template literals (Plantillas literales)

let message = `Hola, este e mi
curos de JavaScript`;

console.log(message);

// Interpolación de Variables

let email = "jorge@gmail.com";

console.log(`Hola mi nombre es: ${myName}! y mi email es ${email}`);
