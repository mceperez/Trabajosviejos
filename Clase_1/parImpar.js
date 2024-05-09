"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var numIngresado = readlineSync.questionInt("Ingrese un numero para analizar:  ");
var resto = (numIngresado % 2);
if (numIngresado == 0) {
    console.log("El número es 0");
}
else if (resto == 0) {
    console.log("Es par");
}
else if (resto == 1) {
    console.log("Es impar");
}
