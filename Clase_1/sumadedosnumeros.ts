import * as readlineSync from "readline-sync";
let primerNumero:number= readlineSync.questionInt("Ingrese el primer número: ");
let segundoNumero:number=readlineSync.questionInt("Ingrese el segundo número: ");
let resultado:number=(primerNumero + segundoNumero)
console.log("la suma de los número es: " + resultado );