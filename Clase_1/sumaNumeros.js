"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var primerNumero = readlineSync.questionInt("Ingrese el primer numero: ");
var segNumero = readlineSync.questionInt("Ingrese el segundo numero: ");
var resultado = 0;
for (var i = primerNumero; i <= segNumero; i++) {
    resultado = primerNumero + (primerNumero + 1);
}
console.log("La suma de los numeros es: " + resultado);
