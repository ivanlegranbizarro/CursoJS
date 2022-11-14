let edades = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ];

// Obtener un subarray

edades.slice( 2, 5 ); // [30, 40, 50]

edades.splice( 2, 5 ); // [30, 40, 50, 60, 70]

// Ni slice ni splice modifican el array original


// Insertar un valor después del elemento 30

edades.splice( 3, 0, 35 ); // [10, 20, 30, 35, 40, 50, 60, 70, 80, 90, 100]


// Método Fill

edades.fill( 0, 2, 5 ); // [10, 20, 0, 0, 0, 50, 60, 70, 80, 90, 100]

let nuevoArray = new Array( 5 );

console.log( nuevoArray );

nuevoArray.fill( 1 );

console.log( nuevoArray );


