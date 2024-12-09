//  if y else

// if (si) condicion si es verdadera

let age = 37;
if (age == 37) {
  console.log("La edad es de 37");
}

// else (No) condicion si no es verdadera

let age1 = 4;
if (age1 == 37) {
  console.log("La edad es de 37");
} else {
  console.log("La edad NO es 37");
}

// else if (si ,no, si)

let edad = 17;

if (edad <= 10) {
  console.log("Es un Niño");
}
if (edad > 10 && edad <= 17) {
  console.log("Es adolecente");
} else {
  console.log("Es mayor de edad");
}

// Operador Ternario  ( ? :)

const message = edad == 18 ? "Es mayor de Edad" : "Es menor de edad";
console.log(message);

// Switch ( anidar if y else)

let day = 7;
let dayName;

switch (day) {
  case 0:
    dayName = "Lunes";
    break;
  case 1:
    dayName = "Martes";
    break;
  case 2:
    dayName = "Miercoles";
    break;
  case 3:
    dayName = "Jueves";
    break;
  case 4:
    dayName = "Viernes";
    break;
  case 5:
    dayName = "Sabado";
    break;
  case 6:
    dayName = "Domingo";
    break;
  default:
    dayName = "Numero de dia Incorrecto";
}

console.log(dayName);

/* switch (key) {
  case value:
    
    break;

  default:
    break;
} */
