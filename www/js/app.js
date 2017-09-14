var altura = 7;
var base = 5;
var area = base * altura;
console.log("el area de mi rectangulo es igual: " + area);

var h = 3;
var b = 5;
var areatriangulo = (b*h)/2;
console.log("El area del triangulo es =" + areatriangulo);

var radio = 4;
var pi = Math.PI;
var areacirculo = pi*(radio^2);
console.log("El area del circulo es =" + areacirculo);

var radio2 = 4;
var pi2 = Math.PI;
var volumenesfera = (4/3*(pi2 * Math.pow(radio2,3)));
console.log("El volumen de la esfera es =" + volumenesfera);


nombre = " Angel "
function myfunction(){
    console.log(" Hola " + nombre);
}
myfunction()


var nombre = "Angel";
function saludar(){
    if(true){
        var nombre = "Daniel";
    }
    console.log(`Hola ${nombre}`);
}

function saludar10(){
    let i=0 //solo se utiliza cuando el valor se va a cambiar y si no va a cambiar se utiliza const
    for(i; i<10; i++){
        console.log(`Hola ${nombre}`);
    }
    console.log(`El valor de i es ${i}`) 
}