let numeros = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

numeros.forEach( ( numero, indice ) => {
  console.log( indice, numero );
} );



function sumar () {
  let resultado = 0;
  numeros.forEach( numero => {
    resultado += numero;
  } );
  return resultado;
}

console.log( sumar() );


// Iterar Arrays con map

function cuadradoValores ( valor ) {
  return valor * valor;
}

function raizValores ( valor ) {
  return Math.sqrt( valor );
}

let alturas = [ 190, 170, 200, 160 ];



console.log( numeros.map( cuadradoValores ) );

console.log( numeros.map( raizValores ) );

console.log( numeros.map( valor => valor * valor ) );

console.log( alturas.map( alturaPersona => `Los pesos ideales son: ${ alturaPersona - 110 } kg` ) );


// Iterar Arrays con filter

let edades = [ 56, 16, 47, 34, 76, 38, 73, 83, 93, , 11, 24 ];


function esMayorDeEdad ( edad ) {
  return edad >= 18;
}

function esMenorDeEdad ( edad ) {
  return edad < 18;
}

console.log( edades.filter( esMayorDeEdad ) );

// Iterar array con findIndex, find, every y some

let nombres = [ 'Ana', 'María', 'Pedro', 'Iván', 'Andrea' ];

console.log( nombres.findIndex( encontrar => encontrar == 'Iván' ) );

console.log( edades.findIndex( encontrar => encontrar == 38 ) );


console.log( edades.find( encontrar => encontrar % 2 == 0 ) );
console.log( nombres.find( encontrar => encontrar.charAt( encontrar.length - 1 ) == 'a' ) );


if ( nombres.some( encontrar => encontrar.charAt( 0 ) == 'A' ) ) {
  console.log( 'Hay nombres que empiezan con A' );
} else {
  console.log( 'No hay nombres que empiecen con A' );
}