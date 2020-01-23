# Exercises of week 5 and day 2 

# Arrays
Un array es una colección ordenada de datos. Es utilizado para guardar multiples valores en una variable.

La documentacion se puede ver en [Array](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array). Hay varias formas de contruir un [array](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array). Para empezar a comprender la construcción de un array os proponemos hacer los siguientes ejercicios.

* Construir mediante []:
  * **Ejercicio** Crea un array de 3 enteros
  * **Ejercicio** Crea un array de 3 strings
  * **Ejercicio** Crea un array con 2 enteros y un string 
* Construir mediante new:
  * **Ejercicio** Crea un array de 3 enteros
  * **Ejercicio** Crea un array de 3 strings
  * **Ejercicio** Crea un array con 2 enteros y un string
  * **Ejercicio** ¿ Qué diferencia hay entre `let e = [3]` y `let f = new Array(3)` ?

1. **Ejercicio** Transformar el array de números 
    
    `const numberArrays = [1, 2, 3, 4, 5];` 
    
    multiplicando por 5 **( map )**

1. **Ejercicio** Buscar el primer elemento mayor que 4 en el siguiente array

    `const numberArrays = [1, 2, 3, 4, 5];` 

1. **Ejercicio** Buscar el primer elemento que empieze por eva en el array 

    `const miArray = ['pepe', 2, 'evaristo', 4, 'eva'];`

1. **Ejercicio** Hacer el sumatorio de un array numérico **( reduce )**:

    `const miArray = ['pepe', 2, 'evaristo', 4, 'eva'];`

1. **Ejercicio** Contar el numero de elementos que son string en el siguiente array **(reduce)**:

    `const miArray = ['pepe', 2, 'evaristo', 4, 'eva'];`

1. **Ejercicio** Modificar array usando **push**.

    `const arrayOriginal = ['Manzanas', 'Peras', 'Castañas'];` a

    `['Manzanas', 'Peras', 'Castañas', 'Nueces']` 

1. **Ejercicio** Modificar array usando **concat**.

    `const arrayOriginal = ['Manzanas', 'Peras', 'Castañas'];` a

    `['Manzanas', 'Peras', 'Castañas', 'Nueces']` 

1. **Ejercicio** Modificar array usando **splice**.

    `const arrayOriginal = ['Manzanas', 'Peras', 'Castañas'];` a

    `['Manzanas', 'Peras', 'Nueces']` 

2. **Ejercicio** Añadir elemento a un array usando **splice**

    `const arrayOriginal = ['Manzanas', 'Peras', 'Castañas'];` a

    `['Manzanas', 'Peras', 'Castañas', 'Nueces']` .
    
# Set

1. **Ejercicio** Contruye un conjunto con tres frutas: Pera, Manzana y Naranja

1. **Ejercicio** Comprueba si Naranja esta dentro del conjunto que has creado antes.

1. **Ejercicio** Comprueba la longitud del conjunto.

1. **Ejercicio** Añade una Granada al conjunto.

1. **Ejercicio** Crea un array con los elementos que hay en el conjunto y devuelvelo ordenados.

1. **Ejercicio** Borra la manzana.

# Map

1. **Ejercicio** Contruye una guia telefonica con los compañeros de clase. Toma como clave el
numero de teléfono y como valor el nombre del compañero.

1. **Ejercicio** Crea una función que compruebe que un número está dentro de la guía.

1. **Ejercicio** Crea una función que dado un nombre compruebe que la guia contiene algún 
nombre que contenga el nombre pasado por parámetro.

1. **Ejercicio** Añade un nuevo compañero ficticio con tu número de telefono. ¿Qué pasa?

1. **Ejercio** Crea un array ordenado por nombre con valores { nombre, telefono } a partir de
la guía.

# Lodash

1. **Ejercicio** Dado los siguientes arrays:
```
const array1 = [1,3,5,7,9,10]
const array2 = [2,3,4,7,8,10]
```
consigue un array intersección con valores únicos utilizando lodash.

1. **Ejercicio**  Dado los siguientes arrays:
```
const array1 = [1,3,5,7,9,10]
const array2 = [2,3,4,7,8,10]
```
Devuelve el sumatorio de de los elementos pares.

1. **Ejercicio** Dado los objetos 
```
const obj1 = {
    prop1: 'value1',
    prop2: 10,
    prop3: 'value'
}
const obj2 = {
    prop1: {
        innerprop1: 'hola'
    },
}
```
Devuelve un objeto que sean ambos mezclados de la forma que obj2 prevalezca sobre obj1.

1. **Ejercicio** ¿qué diferencia hay en _.merge y _.assign, dado _ como el objeto que representa lodash.

1. **Ejercicio** Dado el array `[2,5,8,10,24]` calcula su media con lodash.

1. **Ejercicio** Dado el objeto
```
const obj1 = {
    prop1: 'value1',
    prop2: 10,
    prop3: 'value'
}
```
Devuelve los valores de sus propiedades en un array.

1. **Ejercicio** Dado el objeto
 ```
 const obj1 = {
     prop1: 'value1',
     prop2: 10,
     prop3: 'value'
 }
```
Crea un nuevo objeto con solo las propiedades que tengan valores string.

1. **Ejercicio** Dado el siguiente array `[[1,2,[4,5],[5,7]], [1,3,4,5]]` consigue un array aplanado.
Es decir de la forma `[1,2,4,5,5,7,1,3,4,5]`

# Dates

1. **Ejercicio** Realiza un script que escriba en el documento la fecha y hora actual

1. **Ejercicio** Realiza un script que pida un nombre y dos apellidos e indique el tiempo que se tardó en introducir los datos.
Para pedir los datos se puede utilizar la forma `var nombre = prompt("Introduce el Nombre:");` que
guardará en `nombre` el nombre sacando por pantalla una ventana donde introducirlos.

1. **Ejercicio** Realiza un script pida un mes y año e imprima los dias de ese mes de la forma 1(miércoles), 2(jueves), ...

1. **Ejercicio** Dada la siguiente fecha 05/02/1985 calcula el día sumandole 30, 90 y 180 días.

Ejercicios de Fechas en Javascript

* Crear una función para decir el parámetro pasado es Date o No.
```
Test Data :
console.log(is_date("October 13, 2014 11:13:00"));
console.log(is_date(new Date(86400000)));
console.log(is_date(new Date(99,5,24,11,33,30,0)));
console.log(is_date([1, 2, 4, 0]));
Output :
false
true
true
false
```

* Crear una función para devolver la fecha actual que reciba por parámetro el separador de las fechas.
```
Note : Pass a separator as an argument.
Test Data :
console.log(curday('/'));
console.log(curday('-'));
Output :
"11/13/2014"
"11-13-2014"
```

* Crear una función que devuelva el número de dias de un mes.
```
Test Data :
console.log(getDaysInMonth(1, 2012));
console.log(getDaysInMonth(2, 2012));
console.log(getDaysInMonth(9, 2012));
console.log(getDaysInMonth(12, 2012));
Output :
31
29
30
31
```

* Crear una función que devuelva el mes de una fecha.
```
Test Data :
console.log(month_name(new Date("10/11/2009")));
console.log(month_name(new Date("11/13/2014")));
Output :
"October"
"November"
```

* Crear una función que compare dos fechas y devuelva un string indicando cúal es mayor.
```
Test Data :
console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00')));
console.log(compare_dates(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00')));
console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01')));
Output :
"Date1 = Date2"
"Date1 > Date2"
"Date2 > Date1"
```

* Crear una función que añada minutos a una fecha.
```
Test Data :
console.log(add_minutes(new Date(2014,10,2), 30).toString());
Output :
"Sun Nov 02 2014 00:30:00 GMT+0530 (India Standard Time)"
```

* Crear una función que compruebe si la fecha es fin de semana.
```
Note : Use standard Saturday/Sunday definition of a weekend.
Test Data :
console.log(is_weekend('Nov 15, 2014'));
console.log(is_weekend('Nov 16, 2014'));
console.log(is_weekend('Nov 17, 2014'));
Output :
"weekend"
"weekend"
undefined
```

* Crear una función que diga la diferencia de días entre dos fechas.
```
Test Data :
console.log(date_diff_indays('04/02/2014', '11/04/2014'));
console.log(date_diff_indays('12/02/2014', '11/04/2014'));
Output :
216
-28
```

* Crear una función que devuelva el último día de un mes
```
Test Data :
console.log(lastday(2014,0));
console.log(lastday(2014,1));
console.log(lastday(2014,11));
Output :
31
28
31
```

* Crear una función que calcule el dia de ayer.
```
Test Data :
console.log(yesterday('Nov 15, 2014'));
console.log(yesterday('Nov 16, 2015'));
console.log(yesterday('Nov 17, 2016'));
Output :
"Fri Nov 14 2014 00:00:00 GMT+0530 (India Standard Time)"
"Sun Nov 15 2015 00:00:00 GMT+0530 (India Standard Time)"
"Wed Nov 16 2016 00:00:00 GMT+0530 (India Standard Time)"
```

* Crear una función que nos diga la fecha más nueva dentro de un array:
```
Test Data :
console.log(max_date(['2015/02/01', '2015/02/02', '2015/01/03']));
Output :
"2015/02/02"
```

* Crear una función que devuelva la fecha más vieja dentro de un array:
```
Test Data :
console.log(min_date(['2015/02/01', '2015/02/02', '2015/01/03']));
Output :
"2015/01/03"
```

* Crear una función que convierta de minutos a horas y minutos:
```
Test Data :
console.log(timeConvert(200));
Output :
"200 minutes = 3 hour(s) and 20 minute(s)."
```

* Crear una función que devuelva el número de dias de un año:
```
Test Data :
console.log(days_of_a_year(2015));
365
console.log(days_of_a_year(2016));
366
```

* Crear una función que devuelva el trimestre de un año
```
Test Data :
console.log(quarter_of_the_year(new Date(2015, 1, 21)));
2
console.log(quarter_of_the_year(new Date(2015, 10, 18)));
4
```

* Crear una función que devuelva el número de dias desde principio del año que hayan pasado.
```
Test Data :
console.log(days_passed(new Date(2015, 0, 15)));
15
console.log(days_passed(new Date(2015, 11, 14)));
348
```

* Crear una función que calcule la edad
```
Test Data :
console.log(calculate_age(new Date(1982, 11, 4)));
32
console.log(calculate_age(new Date(1962, 1, 1)));
53
```

# Moment

Con moment y la librería de los locales se tiene una potencia grandísima para trabajar con 
fechas.

1. **Ejercicio** Dada la siguiente fecha 05/02/1985, cual es nombre del dia si le sumas 30, 90 y 180 días.

