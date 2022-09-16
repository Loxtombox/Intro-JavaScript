/*var nombre = 'Gerardo';
console.log(nombre);
console.log(typeof(nombre));

var edad = 24;
console.log(edad);
console.log(typeof(edad));


var sueldo = 1990.99;
console.log(sueldo);
console.log(typeof(sueldo));

var tieneTrabajo = false;
console.log(tieneTrabajo);
console.log(typeof(tieneTrabajo));

var puestoDeTrabajo;
console.log(puestoDeTrabajo);
puestoDeTrabajo=null;
console.log(puestoDeTrabajo); */

//Operadores matemáticos

/*var edadAna, edadMaria, diferenciaEdad;
var sumaEdades, yearAna, yearMaria, yearActual;

edadAna = 34;
edadMaria = 28;
yearActual = 2022;

diferenciaEdad = edadAna - edadMaria;
sumaEdades = edadAna + edadMaria;
yearAna = yearActual - edadAna;
yearMaria = yearActual - edadMaria;

console.log(diferenciaEdad);
console.log(sumaEdades);
console.log('Año en que nació Ana: ' + yearAna);
console.log('Año en que nació María: ' + yearMaria);
console.log(yearActual * 5);
console.log(yearActual / 2);*/

//Operadores Lógicos
/*
var edadAna, edadMaria, diferenciaEdad;

edadAna = 34;
edadMaria = 28;

var mayorAna =  !(edadAna == edadMaria);
console.log(mayorAna);

//Unarios ++ --

edadAna++
console.log(edadAna);
console.log(edadAna++);
console.log(edadAna);
console.log(++edadAna);
edadMaria--
console.log(edadMaria);

//Asignación += -= /= %=

var a = 11;
var b = 5;

var c = a % 5; //Resto de una división
console.log(c);
a += b;
console.log(a); */

//sentencia if..else

var nombre = "Pedro";
var esCasado = false;

if(esCasado == true){
    console.log(nombre + ' es casado.');
}else{
    console.log(nombre + ' es soltero.');
}