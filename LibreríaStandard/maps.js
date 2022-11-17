/* Los maps son objetos que contienen pares de clave-valor. En JavaScript, los objetos son similares a los maps, pero los maps tienen métodos adicionales que los objetos no tienen. Por ejemplo, los maps tienen métodos para obtener el tamaño del map, para borrar un elemento del map, para borrar todos los elementos del map, y para obtener un iterador de los elementos del map.  */

// Crear un map

const socios = new Map( [ [ 'Susana', 23 ], [ 'Juan', 24 ], [ 'Pedro', 25 ] ] );

console.log( socios );

const empleado = new Map();

empleado.set( 'Nombre', 'Sofía' );
empleado.set( 'Salario', 1400 );
empleado.set( 'Edad', 25 );
empleado.set( 'Puesto', 'Programadora' );
empleado.set( 'Antigüedad', 2 );

// Métodos
console.log( empleado );
console.log( empleado.size );
console.log( empleado.has( 'Nombre' ) );

console.log( empleado.get( 'Puesto' ) );



const empleado2 = new Map( empleado );
empleado2.set( 'Nombre', 'Alfonso' );

console.log( empleado2 );
