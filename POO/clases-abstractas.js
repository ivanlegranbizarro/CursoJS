/* Las clases abstracas  son clases que no se pueden instanciar, es decir, no se pueden crear objetos a partir de ellas. Se utilizan para definir una estructura de clases que heredarán de ella. Por ejemplo, si tenemos una clase abstracta llamada Figura, podemos definir una clase llamada Rectangulo que herede de Figura, y otra clase llamada Circulo que herede de Figura. De esta forma, podemos definir una estructura de clases que hereden de Figura, y que todas ellas tengan los mismos métodos y propiedades. Por ejemplo, podríamos definir un método llamado area() que calcule el área de la figura, y que todas las clases que hereden de Figura tengan este método. En este caso, la clase Figura sería una clase abstracta, ya que no se puede instanciar, y las clases Rectangulo y Circulo serían clases concretas, ya que se pueden instanciar. */


class Persona {
  constructor () {
    if ( this.constructor === Persona ) {
      throw new Error( 'La clase Persona es abstracta y no se puede instanciar' );
    }
  }

  hablar () {
    throw new Error( 'El método hablar() debe ser sobreescrito en las clases que heredan' );
  }
}



class Empleado extends Persona {

  hablar () { return 'Hola, soy un empleado'; }

  trabajar () { }
}

const empleado1 = new Empleado();

console.log( empleado1.hablar() );


class Alumno extends Persona {
  hablar () {
    return 'Hola, soy un alumno';
  }
}

const alumno1 = new Alumno();

console.log( alumno1.hablar() );