import * as rls from 'readline-sync';
let numeroDeseado: number = rls.questionInt("Escriba el número que desea verificarsi es mayor o no a 20: ");
if (numeroDeseado >20) {
    console.log("El número es mayor a 20: " + numeroDeseado);
} else{console.log ("El número es menor o igual a 20: "+ numeroDeseado);
}