// d = Raiz(X2-X1)^2 + (Y2-Y1)^2

let objeto1maximo = 100;
let objeto1minimo = 1;
let objeto2maximo = 100;
let objeto2minimo = 1;
let objeto3maximo = 100;
let objeto3minimo = 1;
let objeto4maximo = 100;
let objeto4minimo = 1;


let object = {
    x: Math.round(Math.random() * (objeto1maximo - objeto1minimo) + objeto1minimo),
    y: Math.round(Math.random() * (objeto2maximo - objeto2minimo) + objeto2minimo)
};

let object2 = {
    x2:  Math.round(Math.random() * (objeto3maximo - objeto3minimo) + objeto3minimo),
    y2:  Math.round(Math.random() * (objeto4maximo - objeto4minimo) + objeto4minimo)
};

obj1 = object.x
obj2 = object.y
obj3 = object2.x2
obj4 = object2.y2
console.log(`x=${obj1}, y=${obj2}, x2=${obj3}, y2=${obj4}`)

 const D= Math.sqrt((object2.x2 - object.x)^2 + (object2.y2 - object.y)^2);
console.log("La distancia es =" + D);




