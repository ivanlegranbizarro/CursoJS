class Vehiculo {
  constructor ( modelo, marca, precio, km ) {
    this._modelo = modelo;
    this._marca = marca;
    this._precio = precio;
    this._km = km;
  }
  // Getters
  get modelo () { return this._modelo; }
  get marca () { return this._marca; }
  get precio () { return this._precio; }
  get km () { return this._km; }
  // Setters
  set modelo ( modelo ) { this._modelo = modelo; }
  set marca ( marca ) { this._marca = marca; }
  set precio ( precio ) { this._precio = precio; }
  set km ( km ) { this._km = km; }
  // Métodos
  obtenerInfo () { return `Este vehículo es un ${ this._marca } ${ this._modelo }`; }


}


const vehiculo1 = new Vehiculo( 'Clio', 'Renault', 150000, 0 );

console.log( vehiculo1.obtenerInfo() );


class Furgoneta extends Vehiculo {
  constructor ( modelo, marca, precio, km, carga ) {
    super( modelo, marca, precio, km );
    this._carga = carga;
  }

  get carga () {
    this._carga;
  }

  set carga ( value ) {
    this._carga = carga;
  }

  obtenerInfo () { return `Este vehículo es un ${ this._marca } ${ this._modelo } y puede cargar con ${ this._carga } km`; }
}


const furgo1 = new Furgoneta( 'Kangoo', 'Renault', 20000, 0, 2000 );

console.log( furgo1.obtenerInfo() );