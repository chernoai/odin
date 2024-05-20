// Export e Import
// Las directivas export e import tienen varias variantes de sintaxis.
// En el artículo anterior vimos un uso simple, ahora exploremos más ejemplos.

//!||||||||||||||||||||||||||||||||||||||||||||||
// Import * en JavaScript (con comentarios explicativos)

// En JavaScript, generalmente especificamos qué importamos entre llaves `import { ... }`, así:

import { saludar, despedirse } from './14_3_ModulosES6_Export.js'

saludar('John'); // Hola, John!
despedirse('John'); // Adiós, John!

// Pero si hay mucho que importar, podemos importar todo como un objeto usando `import * as <nombre>`:

import * as comoSaludos from './14_3_ModulosES6_Export.js'

comoSaludos.saludar('John');
comoSaludos.despedirse('John');

// A primera vista, "importar todo" parece ser una opción genial, corta de escribir, ¿por qué enumerar explícitamente lo que necesitamos importar?

/* Bueno, hay algunas razones por las que no se recomienda usar `import *`:

* Nombres más cortos:** Al enumerar explícitamente las importaciones, se obtienen nombres más cortos para usar en el código. Por ejemplo, `saludar()` en lugar de `comoSaludos.saludar()`.

* Mejor visión general del código:** Una lista explícita de importaciones brinda una mejor visión general de la estructura del código, ya que muestra qué se usa y dónde. Esto facilita el mantenimiento y la refactorización del código. 

* No tengas miedo de importar demasiado:** Las herramientas de construcción modernas, como webpack y otras, agrupan módulos y los optimizan para acelerar la carga. También eliminan las importaciones no utilizadas. 

Por ejemplo, si hace `import * comoLibreria from 'bibliotecaGrande'` desde una biblioteca de código enorme, y luego solo usa unos pocos métodos, las funciones no utilizadas no se incluirán en el paquete optimizado.
*/
//!||||||||||||||||||||||||||||||||||||||||||||||
// Import "as" en JavaScript

// En JavaScript, también podemos usar "as" para importar elementos con nombres diferentes.

// Por ejemplo, podemos importar "sayHi" a la variable local "hi" para mayor brevedad, 
// e importar "sayBye" como "bye":

//  principal.js
import { saludar as hola, despedirse as adios } from './14_3_ModulosES6_Export.js';

hola('John'); // Hola, John!
adios('John'); // Adiós, John!

// Al utilizar "as", le asignamos un alias al elemento importado, 
// lo que nos permite usar un nombre más corto o más descriptivo dentro de nuestro código.
//!||||||||||||||||||||||||||||||||||||||||||||||
// Export default en JavaScript

// Solo puede haber un "export default" por archivo.

// Luego, se importa sin llaves:

import Usuario from './14_3_ModulosES6_Export.js'; // no {Usuario}, solo Usuario