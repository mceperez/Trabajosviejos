import * as rls from 'readline-sync'
const claveReal= "eureka";
let contador: number= 0;
const intentos : number =3;
let claveUsuario : string='';


while (contador<intentos  && claveUsuario!= claveReal){
claveUsuario= rls.question ("Ingrese su clave: ");
contador++;

}

if (claveUsuario!= claveReal){
    console.log("te has quedado sin intentos")
}else{console.log("la clave es correcta")}