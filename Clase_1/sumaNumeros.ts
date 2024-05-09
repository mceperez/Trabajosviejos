import * as readlineSync from 'readline-sync';

let primerNumero=readlineSync.questionInt("Ingrese el primer numero: ");
let segNumero= readlineSync.questionInt("Ingrese el segundo numero: ");
let resultado:number=0
for (let i=primerNumero; i<= segNumero; i++) {

    resultado=primerNumero + (primerNumero + 1)
}   
    console.log("La suma de los numeros es: "+resultado)

