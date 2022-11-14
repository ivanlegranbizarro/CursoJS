/* Definición de Array: Un array es una estructura de datos que nos permite almacenar una colección de elementos. Cada elemento tiene un índice que nos permite acceder a él. Los arrays son muy útiles para almacenar colecciones de datos, como por ejemplo una lista de nombres, una lista de números, una lista de objetos, etc. */


// Declaración de un array literal

let listaNumeros = [ 1, 2, 3, 4, 5 ];

let copiaNumeros = [ ...listaNumeros, 6, 7 ];

let datos = [ "Pepe", 23, true, [ 1, 2, 3 ] ];

// for ( let index = 0; index < datos.length; index++ ) {
//   const dato = datos[ index ];
//   console.log( dato );
// }


console.log( listaNumeros );
console.log( copiaNumeros );

let usuario = [ ..."Iván Legrán" ];

let variosNumeros = new Array();


// Añadir un elemento al final del array

listaNumeros.push( 6 );

// Añadir un elemento al principio del array

listaNumeros.unshift( 0 );

// Eliminar el último elemento del array

listaNumeros.pop();

// Eliminar el primer elemento del array

listaNumeros.shift();

// Eliminar un elemento en una posición concreta

console.log( listaNumeros );

listaNumeros.splice( 2, 1 );

console.log( listaNumeros );


// Recorrer un array con forEach

listaNumeros.forEach( ( numero, index ) => {
  console.log( numero, index );
} );

listaNumeros.forEach( ( numero ) => {
  console.log( numero );
} );

let lista = "";

for ( let numero in listaNumeros ) {
  lista += numero + " , ";
}

console.log( lista );


// Array multidimensional


let paises = [ [ "España", "Madrid" ], [ "Colombia", "Bogotá" ], [ "México", "DF" ], [ "Perú", "Lima" ] ];

console.log( paises );

// Acceder a un elemento del array multidimensional

console.log( paises[ 0 ][ 1 ] );