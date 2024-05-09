import * as readlineSync from 'readline-sync';
let numIngresado = readlineSync.questionInt("Ingrese un numero para analizar:  ");
let resto : number = (numIngresado % 2);

if  (numIngresado==0){
    console.log("El número es 0");
}else if (resto==0){
    console.log("Es par");
}else if(resto==1) {
    console.log("Es impar");
}
