//Array de 3 enteros []
const myArray = [1,2,3];
//Array de 3 strings []
const myArray = ['hola', 'que', 'tal'];
//Crea un array con 2 enteros y un string []
const myArray = [1, 2, 'Maria', 'Gomez'];
//Array de 3 enteros con new
const myArray = new Array(1,2,3,);
//Array de 3 strings con new
const myArray = new Array('hola', 'que', 'tal');
//Crea un array con 2 enteros y un string con new
const myArray = new Array(1,2,'Maria','Gomez');
//¿ Qué diferencia hay entre let e = [3] y let f = new Array(3) ?
// el new con un numero entero dentro del parentesis indica la longitud del array,
//pero no significa que ese array tenga solo un elemento que sea el 3

//1 Transformar el array de números multiplicando por 5 ( map )
const numberArrays = [1, 2, 3, 4, 5];
const multiplicar = numberArrays.map(x => x * 5);
console.log(multiplicar)

//2 Ejercicio Buscar el primer elemento mayor que 4 en el siguiente array
const numberArrays = [1, 2, 3, 4, 5];
const found = numberArrays.find(element => element > 4);
console.log(found);



//3 Ejercicio Buscar el primer elemento que empieze por eva en el array
const miArray = ['pepe', 2, 'evaristo', 4, 'eva'];




//4 Ejercicio Hacer el sumatorio de un array numérico ( reduce ):
const miArray = ['pepe', 2, 'evaristo', 4, 'eva'];

console.log('suma: ',miArray.reduce((elem) => { //esto es igual que poner console.log('suma: ',miArray.reduce(function(elem)
if (typeof elem === 'number') { //1º elemento no es igual a number porque es pepe
    return acc + elem; //reduce devuelve el acc (acumulador)
}
    return acc;
}, 0)); //le hemos puesto elemento base y empieza en 0



//ejemplo con filter
const miArray = ['pepe', 2, 'evaristo', 4, 'eva'];
console.log(miArray.filter(currentValue => typeof currentValue  === 'number'));//devuelve true en el caso en el que la funcion sobre la que estemos iterando sea un numero
//no hay que poner la {}entre el typeof y el number porque sólo tiene un return
//también se podría hacer
console.log(
miArray
.filter(currentValue => typeof currentValue === 'number')
.reduce ((acc, cur) => + cur));



//5 Ejercicio Contar el numero de elementos que son string en el siguiente array (reduce)
const miArray = ['pepe', 2, 'evaristo', 4, 'eva'];
console.log(miArray.reduce((acc, elem) => typeof elem ==='string' ? acc +1 : acc, 0) //reduce con operador ternario. como solo hay un return se quitan las llaves.
);




//6 Ejercicio Modificar array usando push.Cambiar a ['Manzanas', 'Peras', 'Castañas', 'Nueces']
const arrayOriginal = ['Manzanas', 'Peras', 'Castañas'];
arrayOriginal.push('Nueces');
console.log(arrayOriginal);


//7 Ejercicio Modificar array usando concat. a ['Manzanas', 'Peras', 'Castañas', 'Nueces']
const arrayOriginal = ['Manzanas', 'Peras', 'Castañas'];
const nuevoArray = arrayOriginal.concat(['Nueces']);
console.log(nuevoArray);

//8 Ejercicio Modificar array usando splice.a['Manzanas', 'Peras', 'Nueces']
const arrayOriginal = ['Manzanas', 'Peras', 'Castañas'];
const subArray = arrayOriginal.splice(2, 1,'Nueces');
console.log(subArray);

//9 Ejercicio Añadir elemento a un array usando splice. a ['Manzanas', 'Peras', 'Castañas', 'Nueces']
const arrayOriginal = ['Manzanas', 'Peras', 'Castañas'];

arrayOriginal.splice = (3, 0, 'Nueces');
console.log(arrayOriginal);



