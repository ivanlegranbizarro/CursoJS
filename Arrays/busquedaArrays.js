let alumnos = [ 'Pepe', 'Juan', 'Rosa', 'Elena', 'María', 'Luis', 'Elena', 'Paco', 'Elena' ];


console.log( alumnos.indexOf( 'Paco' ) );
console.log( alumnos.indexOf( 'Olga' ) );
console.log( alumnos.lastIndexOf( 'Elena' ) );



function encuentraTodasLasPosiciones ( array, elemento ) {
  let posiciones = [];
  array.forEach( ( item, index ) => {
    if ( item === elemento ) {
      posiciones.push( index );
    }
  } );
  return posiciones;
}


console.log( encuentraTodasLasPosiciones( alumnos, 'Elena' ) );
