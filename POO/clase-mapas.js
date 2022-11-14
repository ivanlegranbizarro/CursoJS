// let datos = new Map();

// datos.set( "DNI", '123456778B' );
// datos.set( "Nombre", 'Iván' );
// datos.set( "edad", 37 );

// console.log( datos.get( "Nombre" ) );


class MapaTipos extends Map {
  constructor ( valores, tipo_clave, tipo_valor ) {
    if ( valores )
      for ( let [ clave, valor ] of valores ) {
        if ( typeof clave !== tipo_clave || typeof valor !== tipo_valor ) {
          throw new TypeError( `Tipo de clave o valor incorrecto` );
        }
      }
    super( valores );
  }
}

let mis_datos = [ [ "nombre", "Iván" ], [ "apellido", "Legrán" ], [ "edad", "37" ] ];

let datos = new MapaTipos( mis_datos, "string", "string" );

console.log( datos.get( "nombre" ) );
console.log( datos.get( "edad" ) );