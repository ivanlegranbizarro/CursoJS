const triangulo = {
  base: 10,
  altura: 5,

  get area () {
    return this.base * this.altura / 2;
  },

  set area ( nuevaBase ) {
    this.base = nuevaBase;
  }
};


const person = {
  nombre: "Pepe",
  apellido: "Perez",

  get nombreCompleto () {
    return this.nombre + " " + this.apellido;
  },

  set nombreCompleto ( nuevoNombre ) {
    const partes = nuevoNombre.split( " " );
    this.nombre = partes[ 0 ];
    this.apellido = partes[ 1 ];
  }

};

console.log( person.nombreCompleto );

person.nombreCompleto = "Iván Legrán";


console.log( person.nombreCompleto );