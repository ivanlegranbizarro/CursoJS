let edad = 19;


// Operador ternario
edad > 17 ? console.log( 'Eres mayor de edad' ) : console.log( 'Eres menor de edad' );


if ( edad > 17 ) {
  console.log( 'Puedes entrar a esta discoteca' );
} else {
  console.log( `No puedes entrar. Vuelve dentro de ${ 18 - edad } años` );
}


// Switch case

switch ( true ) {
  case edad > 11:
    console.log( 'Eres un teenager' );
    break;
  case edad > 13:
    console.log( 'Estás lleno de granos' );
  case edad >= 18:
    console.log( 'Eres mayor de edad. Ya puedes ir a la cárcel. Hurra!' );
  default:
    console.log( 'Estás perdido. Tío' );
    break;
}
