/* Los weaksets son similares a los sets, pero tienen algunas diferencias. Los weaksets solo pueden contener objetos, y no pueden contener valores primitivos.
No tienen propiedad size, ocupan muy poco espacio en memoria y solo tienen los métodos add, delete y has. Los objetos que se almacenan en un weakset son eliminados automáticamente cuando no hay más referencias a ellos. */

// Crear un weakset
const weakset = new WeakSet( [ { nombre: 'Juan' }, { nombre: 'Pedro' } ] );

const coche = { marca: 'Ford' };

weakset.add( coche );

console.log( weakset.has( coche ) );
