/*2.Dada la cadena “Somos SENA”:
c) Recorra la cadena usando ciclo for y muestre si la cadena contiene la letra “E” */

let cadena = "Somos SENA";
let validar = true;

for (let index = 0; index < cadena.length; index++) {
    if (cadena[index]== "E") {
        let validar = true;
    }

}

if (validar) {
    console.log("Si la contiene");
}else{
    console.log("no la contiene");
}

/*d) Recorra la cadena usando ciclo for y muestre cuántas veces está la letra “o” . Como sugerencia use una
variable contadora para contar el número de veces que se encuentra la letra “o”. */

let cadena1 = "Somos SENA";
let contador =0;

for (let index = 0; index < cadena1.length; index++) {
    if (cadena1[index]== "o") {
       contador++;
    }
}
console.log("la letra o esta "+contador+ " veces");