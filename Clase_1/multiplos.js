"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var numero2 = 2;
var numero3 = 3;
//let numeros: number=(2 | 3)
console.log("Los numeros divisibles por 2 y 3 son: ");
for (var i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
    else if (i % 3 == 0) {
        console.log(i);
    }
}
