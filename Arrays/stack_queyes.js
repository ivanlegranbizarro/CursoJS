/* Definición: Stack y Queue son estructuras de datos lineales que se caracterizan por ser de tipo LIFO (Last In First Out) y FIFO (First In First Out) respectivamente. En este archivo se implementan las estructuras de datos Stack y Queue utilizando Arrays. */


// push y pop

let edades = [ 10, 22, 30, 40, 51, 67, 70, 80, 90, 103 ];

let nombres = [ 'Juan', 'Pedro', 'Luis', 'Ana', 'Maria', 'Jose', 'Luisa', 'Rosa', 'Luis', 'Jose' ];

edades.pop();

console.log( edades );

// shift y unshift

nombres.push( 'Andrea' );
nombres.shift();

console.log( nombres );
