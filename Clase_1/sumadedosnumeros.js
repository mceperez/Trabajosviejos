"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var primerNumero = readlineSync.questionInt("Ingrese el primer número: ");
var segundoNumero = readlineSync.questionInt("Ingrese el segundo número: ");
var resultado = (primerNumero + segundoNumero);
console.log("la suma de los número es: " + resultado);
