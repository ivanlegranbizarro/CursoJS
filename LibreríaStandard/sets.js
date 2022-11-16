/* Los sets son colecciones de valores únicos. Los sets son similares a los arrays, pero no pueden contener valores duplicados. Los sets son una estructura de datos muy útil cuando queremos almacenar valores únicos, como nombres de usuarios, o direcciones de correo electrónico. */

// Crear un set
const setDeNumeros = new Set( [ 1, 2, 3, 3, 3, 4, 5, 5, 5 ] );

console.log( setDeNumeros ); // Set { 1, 2, 3, 4, 5 }

setDeNumeros.add( 6 );

setDeNumeros.add( 6 );

setDeNumeros.add( 7 );

console.log( setDeNumeros ); // Set { 1, 2, 3, 4, 5, 6, 7 }

console.log( setDeNumeros.size );

console.log( setDeNumeros.has( 7 ) );

setDeNumeros.add( 8 );

setDeNumeros.delete( 8 );

console.log( setDeNumeros );


// Iterar un set
for ( let numero of setDeNumeros ) {
  console.log( numero );
}


setDeNumeros.forEach( ( numero ) => {
  console.log( numero );
} );


// Limpiar elementos duplicados de un array utilizando un set

const nombres = [ 'Juan', 'Pedro', 'Juan', 'María', 'María', 'Pedro', 'Juan', 'María', 'Lucía', 'Sara', 'Lucía' ];


const setDeNombres = new Set( nombres );


console.log( setDeNombres ); // Set { 'Juan', 'Pedro', 'Maria', 'Lucía', 'Sara' }
