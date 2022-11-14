class Usuario {
  constructor ( nombre, contraseña, perfil ) {
    this.nombre = nombre;
    this.contraseña = contraseña;
    this.perfil = perfil;
  }
  saludar () {
    console.log( `Hola, soy ${ this.nombre }` );
  }

  login () {
    console.log( `Login correcto` );
  }

  logout () {
    console.log( `Logout correcto` );
  }
}

class Estudiante extends Usuario {
  constructor ( nombre, contraseña, perfil, curso ) {
    super( nombre, contraseña, perfil );
    this.curso = curso;
  }

  estudiar ( tema ) {
    console.log( `Estoy estudiando ${ tema }` );
  }
}

const usuario1 = new Usuario( 'Iván', 'sarraceno', 'administrador' );

const estudiante1 = new Estudiante( 'Iván', 'sarraceno', 'administrador', 'Angular' );

usuario1.saludar();

estudiante1.saludar();
estudiante1.estudiar( 'POO' );