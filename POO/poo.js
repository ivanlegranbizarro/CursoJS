const coche = {
  color: "rojo",
  marca: "Ferrari",
  modelo: "F40",
  velocidad: 0,
  acelerar: function () {
    this.velocidad += 10;
  },
  frenar: function () {
    this.velocidad -= 10;
  },
  toString () {
    return `Este coche es un ${ this.marca } ${ this.modelo } de color ${ this.color } y su velocidad es ${ this.velocidad }`;
  }
};



const furgoneta = Object.assign( { carga: 4000 }, coche );


// Serializar el objeto coche

const cocheJSON = JSON.stringify( coche );

console.log( cocheJSON );

const cocheDesSerializado = JSON.parse( cocheJSON );

console.log( cocheDesSerializado );

console.log( coche.toString() );

