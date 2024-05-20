// Exportar antes de las declaraciones en JavaScript

// En JavaScript, podemos etiquetar cualquier declaración como exportada colocando "export" antes de ella, ya sea una variable, una función o una clase.

// Por ejemplo, todas las siguientes exportaciones son válidas:

// exportar un arreglo
export let meses = ["ene", "feb", "mar", "abr", "ago", "sep", "oct", "nov", "dic"];

export const AÑO_ESTANDAR_MODULOS = 2015;

// Exportación con nombre para la clase Usuario
export class Usuario {
  constructor(nombre) {
    this.nombre = nombre;
  }
}

export function saludar(usuario) {
  console.log(`Hola, ${usuario}!`);
}


// No usar punto y coma después de export class/function

// Tenga en cuenta que "export" antes de una clase o una función no la convierte en una expresión de función. 
// Sigue siendo una declaración de función, aunque exportada.

// La mayoría de las guías de estilo de JavaScript no recomiendan usar punto y coma después de las declaraciones de funciones y clases.

// Es por eso que no es necesario un punto y coma al final de "export class" y "export function":

export function beunas(usuario) {
  console.log(`Hola, ${usuario}!`);
} // Sin punto y coma al final
//!||||||||||||||||||||||||||||||||||||||||||||||
// Exportar separadamente de las declaraciones en JavaScript

// Además de exportar antes de las declaraciones, en JavaScript también podemos exportar por separado.

// En este caso, primero declaramos y luego exportamos:

//  saludar.js
function saludar(usuario) {
  console.log(`Hola, ${usuario}!`);
}

function despedirse(usuario) {
  console.log(`Adiós, ${usuario}!`);
}

export { saludar, despedirse }; // una lista de variables exportadas

// ...O, técnicamente, también podríamos colocar "export" encima de las funciones.

// No recomendado
function saludar2(usuario) {
  console.log(`Hola, ${usuario}!`);
}

export function despedirse2(usuario) {
  console.log(`Adiós, ${usuario}!`);
}

// La primera opción (export al final) es más común y recomendada por las guías de estilo de JavaScript.
//!||||||||||||||||||||||||||||||||||||||||||||||
// Export default en JavaScript

// En JavaScript, los módulos de exportación predeterminada ("export default") se utilizan para exportar una entidad única por módulo. 

// Hay dos tipos principales de módulos:

// 1. Módulos que contienen una biblioteca o un paquete de funciones (como "decir.js" anterior).

// 2. Módulos que declaran una única entidad, por ejemplo, el módulo "usuario.js" que solo exporta la clase "Usuario".

// El segundo enfoque se prefiere generalmente para que cada "cosa" resida en su propio módulo.

// Esto conduce a más archivos, pero la navegación del código se vuelve más fácil si los archivos están bien nombrados y estructurados en carpetas.

// Los módulos proporcionan una sintaxis especial "export default" (la exportación predeterminada) para mejorar la legibilidad del enfoque de "una cosa por módulo".

// Para exportar la entidad usando "export default", colóquelo antes de la declaración:

//  usuario.js
export default class Usuario2 { // solo agregue "default"
  constructor(nombre) {
    this.nombre = nombre;
  }
}
new Usuario2('John');

// Las importaciones sin llaves se ven mejor. Un error común al comenzar a usar módulos es olvidar las llaves por completo. 
// Entonces, recuerde que "import" necesita llaves para las exportaciones nombradas y no las necesita para la predeterminada.

// Exportación predeterminada vs. Exportación nombrada
//!||||||||||||||||||||||||||||||||||||||||||||||
// Reexportar

// La sintaxis de "Reexportar" permite importar cosas y exportarlas inmediatamente (posiblemente con otro nombre).
// Por ejemplo, podemos reexportar una función y la exportación predeterminada.

export {sayHi} from './say.js'; // re-exporta sayHi

export {default as User} from './user.js'; // re-exporta la exportación predeterminada

// Reexportar la exportación predeterminada
// La exportación predeterminada necesita un manejo separado al reexportar.

// La sintaxis `export User from './user.js'` no funcionará. Eso daría lugar a un error de sintaxis.
// Para reexportar la exportación predeterminada, tenemos que escribir `export {default as User}`, como en el ejemplo anterior.

// export * from './user.js' reexporta solo las exportaciones nombradas, pero ignora la predeterminada.
// Si queremos reexportar tanto las exportaciones con nombre como las predeterminadas, entonces se necesitan dos declaraciones.

// 📁 auth/index.js
// re-exporta login/logout
export {login, logout} from './helpers.js';

// re-exporta la exportación predeterminada como User
export {default as User} from './user.js';
