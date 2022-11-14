/* function saludo ( nombre ) {
  return `Hola, ${ nombre }`;
}

console.log( 'Este es el primer mensaje' );

console.log( saludo( 'Iván' ) );


function sumar ( a, b ) {
  return a + b;
}

console.log( sumar( 4, 3 ) );


function sumarValores ( ...numeros ) {
  let total = 0;

  for ( let i = 0; i < numeros.length; i++ ) {
    total += numeros[ i ];
  }

  return total;
}

let resultado = sumarValores( 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 );

console.log( resultado );


function calculo_comision ( ventas, antiguedad, zona ) {
  let comision = 0;
  if ( ventas > 1000 ) comision = ( ventas * 15 ) / 100;
  if ( antiguedad > 5 ) comision += 100;
  if ( zona == 'norte' ) comision += 50;
  if ( zona == 'sur' ) comision += 60;
  return comision;
}

total_ventas = prompt( "Ingrese el total de ventas" );

antiguedad = prompt( "Ingrese la antiguedad" );

zona = prompt( "Ingrese la zona" );

comision = calculo_comision( total_ventas, antiguedad, zona );

console.log( `La comision es: ${ comision } €` ); */



const area_cuadrado = ( lado ) => lado * lado;

const area_triangulo = ( base, altura ) => ( base * altura ) / 2;

console.log( area_cuadrado( 5 ) );

console.log( area_triangulo( 5, 10 ) );

const pi = 3.1416;


const area_circulo = ( radio ) => pi * radio * radio;

// Teorema de pitágoras (a^2 + b^2 = c^2)

function calculo_hipotenusa ( a, b ) {
  return Math.sqrt( a * a + b * b );
}
console.log( calculo_hipotenusa( 3, 4 ) );

const hipotenusa = ( a, b ) => Math.sqrt( a * a + b * b );