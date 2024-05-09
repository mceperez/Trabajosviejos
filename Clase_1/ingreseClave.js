"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var claveReal = "eureka";
var contador = 0;
var intentos = 3;
var claveUsuario = '';
while (contador < intentos && claveUsuario != claveReal) {
    claveUsuario = rls.question("Ingrese su clave: ");
    contador++;
}
if (claveUsuario != claveReal) {
    console.log("te has quedado sin intentos");
}
else {
    console.log("la clave es correcta");
}
