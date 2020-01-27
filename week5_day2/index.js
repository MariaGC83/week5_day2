// Set //

/* 1. Ejercicio Contruye un conjunto con tres frutas: Pera, Manzana y Naranja */
let frutas = new Set (['Pera', 'Manzana', 'Naranja']);
console.log(frutas);

/* 2. Ejercicio Comprueba si Naranja esta dentro del conjunto que has creado antes */
let frutas = new Set (['Pera', 'Manzana', 'Naranja']);
console.log(frutas.has('Naranja'));

/* 3. Ejercicio Comprueba la longitud del conjunto */

let frutas = new Set(['Pera', 'Manzana', 'Naranja']);
console.log(frutas.lenght);


/* 4. Ejercicio Añade una Granada al conjunto */

let frutas = new Set(['Pera', 'Manzana', 'Naranja']);
frutas.add('Granada');
console.log(frutas);

/* 5 Ejercicio Crea un array con los elementos que hay en el conjunto y devuelvelo ordenados */




/* 6 Ejercicio Borra la manzana */

let frutas = new Set(['Pera', 'Manzana', 'Naranja']);
frutas.delete('Manzana');
console.log(frutas);

// MAP //

/* Ejercicio Contruye una guia telefonica con los compañeros de clase. Toma como clave el numero de teléfono y como valor el nombre del compañero */
/*Ejercicio Crea una función que compruebe que un número está dentro de la guía.
Ejercicio Crea una función que dado un nombre compruebe que la guia contiene algún nombre que contenga el nombre pasado por parámetro.
Ejercicio Añade un nuevo compañero ficticio con tu número de telefono. ¿Qué pasa?
Ejercio Crea un array ordenado por nombre con valores { nombre, telefono } a partir de la guía.*/

let miMap = new Map ([])
console.log(miMap);
 miMap.set ('primero', 7) //primero es la clave y get devuelve la clave con valor 7
 console.log(miMap);
 console.log(miMap.get('primero'));


let compañeros = new Map ([])
console.log(compañeros);
compañeros.set('Maria', 635323788)


compañeros.set()
let compañeros = new Map([[635323788, 'Maria'],[615052658, 'Luis'],[657225206,'Arancha']]);


//DATES

/* 1Ejercicio Realiza un script que escriba en el documento la fecha y hora actual */

const date = new Date(2020, 01, 27);
console.log(date);

const date2 = new Date(2020, 01, 27, 18, 27, 10, 100);
console.log(date2);

/* Ejercicio Realiza un script que pida un nombre y dos apellidos e indique el tiempo que se tardó en introducir los datos. Para pedir los datos se puede utilizar la forma var nombre = prompt("Introduce el Nombre:"); que guardará en nombre el nombre sacando por pantalla una ventana donde introducirlos */

let dato = new Date();

let tiempo = dato.getTime();
let nombre = prompt("Introduce un nombre:");
let apellido = prompt("Introduce apellido:");

let dato2 = new Date();
let tiempo2 = dato2.getTime();

let total = (tiempo2 - tiempo);
document.write("Tiempo en introducir" + nombre+""+ apellido+ ""+ total);

/* 3 Ejercicio  Realiza un script pida un mes y año e imprima los dias de ese mes de la forma 1(miércoles), 2(jueves), ...


/* 4 Ejercicio Dada la siguiente fecha 05/02/1985 calcula el día sumandole 30, 90 y 180 días */

let dateNew = new Date(1985, 02, 05);
let resul = dateNew.setDate(dateNew.getDate() + 30);
let resul2 = dateNew.setDate(dateNew.getDate() + 90);
let resul3 = dateNew.setDate(dateNew.getDate() + 180);
console.log(new Date(resul));
console.log(new Date(resul2));
console.log(new Date(resul3));
























