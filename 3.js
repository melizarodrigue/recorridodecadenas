/*3.Dada la cadena “Javascript es genial” recorra la cadena usando ciclo for y muestre por cuantas palabras está
compuesta la cadena. Como sugerencia se puede basar en el modelo del ejercicio 2 literal d. */

let cadena = "Javascript es genial";
let contador = 0;

for (let i = 0; i < cadena.length; i++) {
  // Verificar si el carácter actual es una letra o un número
  if ((cadena[i] >= 'a' && cadena[i] <= 'z') || (cadena[i] >= 'A' && cadena[i] <= 'Z') || (cadena[i] >= '0' && cadena[i] <= '9')) {
    // Verificar si el siguiente carácter es un espacio en blanco o el final de la cadena
    if (i === cadena.length - 1 || cadena[i + 1] === ' ') {
      contador++;
    }
  }
}

console.log(`La cadena está compuesta por ${contador} palabras.`);


