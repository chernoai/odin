// Los comentarios de una línea comienzan con dos barras inclinadas (//).
/* Los comentarios de varias líneas comienzan con barra inclinada-asterisco,
   y terminan con asterisco-barra */

// Las declaraciones pueden terminar con ";"
hacerAlgo();

// ... pero no es necesario, ya que los punto y coma se insertan automáticamente donde hay un salto de línea, excepto en ciertos casos.
hacerAlgo();

// Debido a que esos casos pueden causar resultados inesperados, continuaremos utilizando punto y coma en esta guía.

///////////////////////////////////
// 1. Números, Cadenas y Operadores

// JavaScript tiene un solo tipo de número (que es un doble IEEE 754 de 64 bits).
// Los dobles tienen una mantisa de 52 bits, lo que es suficiente para almacenar enteros de hasta aproximadamente 9✕10¹⁵ con precisión.
3; // = 3
1.5; // = 1.5

// Algunas operaciones aritméticas básicas funcionan como esperas.
1 + 1; // = 2
0.1 + 0.2; // = 0.30000000000000004
8 - 1; // = 7
10 * 2; // = 20
35 / 5; // = 7

// Incluyendo la división desigual.
5 / 2; // = 2.5

// Y la división con módulo.
10 % 2; // = 0
30 % 4; // = 2
18.5 % 7; // = 4.5

// Las operaciones a nivel de bits también funcionan; cuando realizas una operación a nivel de bits, tu número decimal se convierte a un entero con signo *hasta* 32 bits.
1 << 2; // = 4

// La precedencia se aplica con paréntesis.
(1 + 3) * 2; // = 8

// Hay tres valores especiales que no son un número real:
Infinity; // resultado de, por ejemplo, 1/0
-Infinity; // resultado de, por ejemplo, -1/0
NaN; // resultado de, por ejemplo, 0/0, significa 'Not a Number'

// También hay un tipo booleano.
true;
false;

// Las cadenas se crean con ' o ".
'abc';
"Hola, mundo";

// La negación utiliza el símbolo !
!true; // = false
!false; // = true

// La igualdad es ===
1 === 1; // = true
2 === 1; // = false

// La desigualdad es !==
1 !== 1; // = false
2 !== 1; // = true

// Más comparaciones
1 < 10; // = true
1 > 10; // = false
2 <= 2; // = true
2 >= 2; // = true

// Las cadenas se concatenan con +
"Hola " + "mundo!"; // = "Hola mundo!"

// ... que también funciona con más que solo cadenas
"1, 2, " + 3; // = "1, 2, 3"
"Hola " + ["mundo", "!"]; // = "Hola mundo,!"

// ...lo cual puede resultar en un comportamiento extraño...
13 + !0; // 14
"13" + !0; // '13true'

// y se comparan con < y >
"a" < "b"; // = true

// Se realiza coerción de tipo en comparaciones con doble igual...
"5" == 5; // = true
null == undefined; // = true

// ...a menos que uses ===
"5" === 5; // = false
null === undefined; // = false

// Puedes acceder a caracteres en una cadena con `charAt`
"Esta es una cadena".charAt(0);  // = 'T'

// ... o usar `substring` para obtener fragmentos más grandes.
"Hola mundo".substring(0, 5); // = "Hola"

// `length` es una propiedad, así que no uses ().
"Hola".length; // = 5

// También hay `null` e `undefined`.
null;      // se usa para indicar una ausencia deliberada de valor
undefined; // se usa para indicar que un valor no está presente actualmente (aunque
// `undefined` es en realidad un valor en sí mismo)

// false, null, undefined, NaN, 0 y "" son falsos; todo lo demás es verdadero.
// Nota que 0 es falso y "0" es verdadero, incluso aunque 0 == "0".

///////////////////////////////////
// 2. Variables, Arreglos y Objetos

// Las variables se declaran con la palabra clave `var`. JavaScript es de tipado dinámico,
// así que no necesitas especificar el tipo. La asignación utiliza un solo `=`.
var algunaVariable = 5;

// Si dejas fuera la palabra clave var, no obtendrás un error...
otraVariable = 10;

// ... pero tu variable se creará en el ámbito global, no en el ámbito
// en el que la definiste.

// Las variables declaradas sin ser asignadas se establecen en undefined.
var algunaTerceraVariable; // = undefined

// Si quieres declarar un par de variables, podrías usar una coma como separador
var algunaCuartaVariable = 2, algunaQuintaVariable = 4;

// Hay una forma abreviada para realizar operaciones matemáticas en variables:
algunaVariable += 5; // equivalente a algunaVariable = algunaVariable + 5; algunaVariable es 10 ahora
algunaVariable *= 10; // ahora algunaVariable es 100

// y una forma aún más corta para sumar o restar 1
algunaVariable++; // ahora algunaVariable es 101
algunaVariable--; // de vuelta a 100

// Los arreglos son listas ordenadas de valores, de cualquier tipo.
var miArreglo = ["Hola", 45, true];

// Se pueden acceder a sus elementos utilizando la sintaxis de subíndices con corchetes.
// Los índices de los arreglos comienzan en cero.
miArreglo[1]; // = 45

// Los arreglos son mutables y de longitud variable.
miArreglo.push("Mundo");
miArreglo.length; // = 4

// Añadir/Modificar en un índice específico
miArreglo[3] = "Hola";

// Añadir y quitar elementos del principio o final de un arreglo
miArreglo.unshift(3); // Añadir como primer elemento
algunaVariable = miArreglo.shift(); // Quitar el primer elemento y devolverlo
miArreglo.push(3); // Añadir como último elemento
algunaVariable = miArreglo.pop(); // Quitar el último elemento y devolverlo

// Unir todos los elementos de un arreglo con punto y coma
var miArreglo0 = [32, false, "js", 12, 56, 90];
miArreglo0.join(";"); // = "32;false;js;12;56;90"

// Obtener subarreglo de elementos desde el índice 1 (inclusive) hasta el 4 (exclusivo)
miArreglo0.slice(1, 4); // = [false,"js",12]

// Eliminar 4 elementos comenzando desde el índice 2, e insertar allí las cadenas
// "hi","wr" y "ld"; devolver el subarreglo eliminado
miArreglo0.splice(2, 4, "hi", "wr", "ld"); // = ["js",12,56,90]
// miArreglo0 === [32,false,"hi","wr","ld"]

// Los objetos de JavaScript son equivalentes a "diccionarios" o "mapas" en otros
// lenguajes: una colección no ordenada de pares clave-valor.
var miObjeto = { clave1: "Hola", clave2: "Mundo" };

// Las claves son cadenas, pero no se requieren comillas si son un identificador JavaScript válido.
var miObjeto = { miClave: "miValor", "mi otra clave": 4 };

// Los atributos del objeto también se pueden acceder utilizando la sintaxis de subíndices,
miObjeto["mi otra clave"]; // = 4

// ... o usando la sintaxis de punto, siempre que la clave sea un identificador válido.
miObjeto.miClave; // = "miValor"

// Los objetos son mutables; los valores se pueden cambiar y se pueden agregar nuevas claves.
miObjeto.miTerceraClave = true;

// Si intentas acceder a un valor que aún no está establecido, obtendrás undefined.
miObjeto.miCuartaClave; // = undefined

///////////////////////////////////
// 3. Lógica y Estructuras de Control

// La estructura `if` funciona como esperas.
var contador = 1;
if (contador == 3) {
  // evaluado si contador es 3
} else if (contador == 4) {
  // evaluado si contador es 4
} else {
  // evaluado si no es ni 3 ni 4
}

// Lo mismo ocurre con `while`.
while (true) {
  // ¡Un bucle infinito!
}

// Los bucles `do-while` son como los bucles `while`, excepto que siempre se ejecutan al menos una vez.
var entrada;
do {
  entrada = obtenerEntrada();
} while (!esValida(entrada));

// El bucle `for` es igual que en C y Java:
// inicialización; condición de continuación; iteración.
for (var i = 0; i < 5; i++) {
  // se ejecutará 5 veces
}

// Salir de bucles etiquetados es similar a Java
externo:
for (var i = 0; i < 10; i++) {
  for (var j = 0; j < 10; j++) {
    if (i == 5 && j == 5) {
      break externo;
      // sale del bucle externo en lugar de solo el interno
    }
  }
}

// La instrucción for/in permite la iteración sobre propiedades de un objeto.
var descripcion = "";
var persona = { nombre: "Pablo", apellido: "Ken", edad: 18 };
for (var x in persona) {
  descripcion += persona[x] + " ";
} // descripcion = 'Pablo Ken 18 '

// La instrucción for/of permite la iteración sobre objetos iterables (incluyendo la String incorporada,
// Array, por ejemplo, los objetos tipo Array-like o NodeList, TypedArray, Map y Set, 
// y objetos iterables definidos por el usuario).
var misMascotas = "";
var mascotas = ["gato", "perro", "hámster", "erizo"];
for (var mascota of mascotas) {
  misMascotas += mascota + " ";
} // misMascotas = 'gato perro hámster erizo '

// && es y lógico, || es o lógico
if (casa.tamaño == "grande" && casa.color == "azul") {
  casa.contiene = "oso";
}
if (color == "rojo" || color == "azul") {
  // color es rojo o azul
}

// && y || "cortocircuitan", lo cual es útil para establecer valores predeterminados.
var nombre = otroNombre || "predeterminado";

// La instrucción `switch` verifica la igualdad con `===`.
// Usa 'break' después de cada caso
// o los casos después del correcto también se ejecutarán.
nota = 'B';
switch (nota) {
  case 'A':
    console.log("Excelente trabajo");
    break;
  case 'B':
    console.log("Trabajo aceptable");
    break;
  case 'C':
    console.log("Puedes hacerlo mejor");
    break;
  default:
    console.log("Ay, caramba");
    break;
}

///////////////////////////////////
// 4. Funciones, Ámbito y Cierres

// Las funciones de JavaScript se declaran con la palabra clave `function`.
function miFuncion(cosa) {
  return cosa.toUpperCase();
}
miFuncion("bar"); // = "BAR"

// Ten en cuenta que el valor a devolver debe comenzar en la misma línea que
// la palabra clave `return`, de lo contrario, siempre devolverás `undefined`
// debido a la inserción automática de punto y coma. Ten cuidado con esto cuando
// uses el estilo Allman.
function miFuncion() {
  return // <- punto y coma insertado automáticamente aquí
  { estoEsUn: 'literal de objeto' };
}
miFuncion(); // = undefined

// Las funciones de JavaScript son objetos de primera clase, por lo que se pueden reasignar a
// diferentes nombres de variables y pasar a otras funciones como argumentos, por
// ejemplo, al proporcionar un controlador de eventos:
function miFuncion() {
  // este código se llamará en 5 segundos
}
// Establecer una función para ejecutarse después de 5 segundos
setTimeout(miFuncion, 5000);

// Otra función proporcionada por los navegadores es setInterval
function miFuncion() {
  // Este código se ejecutará cada 5 segundos
}
setInterval(miFuncion, 5000);

// Los objetos de función ni siquiera tienen que declararse con un nombre. Puedes escribir
// una definición de función anónima directamente en los argumentos de otra.
setTimeout(function () {
  // Este código se ejecutará en 5 segundos
}, 5000);

// JavaScript tiene ámbito de función; las funciones tienen su propio ámbito pero otros bloques
// no lo tienen.
if (true) {
  var i = 5;
}
i; // = 5 - no es 'undefined' como esperarías en un lenguaje con ámbito de bloque

// Esto ha llevado a un patrón común de "funciones anónimas ejecutadas inmediatamente",
// que evitan que las variables temporales se filtren en el ámbito global.
(function () {
  var temporal = 5;
  // Podemos acceder al ámbito global asignando al "objeto global", que
  // en un navegador web es siempre `window`. El objeto global puede tener un
  // nombre diferente en entornos no basados en navegador, como Node.js.
  window.permanente = 10;
})();
temporal; // provoca un ReferenceError
permanente; // = 10

// Una de las características más potentes de JavaScript son los cierres (closures). Si una función
// se define dentro de otra función, la función interna tiene acceso a todas las variables
// de la función externa, incluso después de que la función externa salga.
function decirHolaEnCincoSegundos(nombre) {
  var mensaje = "¡Hola, " + nombre + "!";
  // Las funciones internas se colocan en el ámbito local por defecto, como si se declararan con `var`.
  function interna() {
    alert(mensaje);
  }
  setTimeout(interna, 5000);
  // setTimeout es asíncrono, por lo que la función decirHolaEnCincoSegundos saldrá inmediatamente,
  // y setTimeout llamará a interna después. Sin embargo, debido a que interna está "cerrada" sobre
  // decirHolaEnCincoSegundos, interna todavía tiene acceso a la variable `mensaje` cuando finalmente se llama.
}
decirHolaEnCincoSegundos("Adam"); // abrirá una ventana emergente con "¡Hola, Adam!" en 5 segundos

// Más acerca de Objetos, Constructores y Prototipos

// Los objetos pueden contener funciones.
var miObj = {
  miFunc: function () {
    return "¡Hola mundo!";
  }
};
miObj.miFunc(); // = "¡Hola mundo!"

// Cuando se llaman las funciones adjuntas a un objeto, pueden acceder al objeto
// al que están adjuntas usando la palabra clave `this`.
miObj = {
  miString: "¡Hola mundo!",
  miFunc: function () {
    return this.miString;
  }
};
miObj.miFunc(); // = "¡Hola mundo!"

// Lo que se establece en `this` tiene que ver con la forma en que se llama la función, no donde
// se define. Así que, nuestra función no funciona si no se llama en el
// contexto del objeto.
var miFunc = miObj.miFunc;
miFunc(); // = undefined

// Inversamente, una función puede asignarse al objeto y tener acceso a él a través de `this`,
// incluso si no estaba adjunta cuando se definió.
var miOtraFunc = function () {
  return this.miString.toUpperCase();
};
miObj.miOtraFunc = miOtraFunc;
miObj.miOtraFunc(); // = "¡HOLA MUNDO!"

// También podemos especificar un contexto para que una función se ejecute cuando la invocamos
// usando `call` o `apply`.

var otraFunc = function (s) {
  return this.miString + s;
};
otraFunc.call(miObj, " ¡Y Hola Luna!"); // = "¡Hola Mundo! ¡Y Hola Luna!"

// La función `apply` es casi idéntica, pero toma un array como lista de argumentos.
otraFunc.apply(miObj, [" ¡Y Hola Sol!"]); // = "¡Hola Mundo! ¡Y Hola Sol!"

// Esto es útil al trabajar con una función que acepta una secuencia de
// argumentos y quieres pasar un array.
Math.min(42, 6, 27); // = 6
Math.min([42, 6, 27]); // = NaN (¡uh-oh!)
Math.min.apply(Math, [42, 6, 27]); // = 6

// Pero, `call` y `apply` son solo temporales. Cuando queremos que se mantenga, podemos
// usar `bind`.

var funcionVinculada = otraFunc.bind(miObj);
funcionVinculada(" ¡Y Hola Saturno!"); // = "¡Hola Mundo! ¡Y Hola Saturno!"

// `bind` también se puede utilizar para aplicar parcialmente (currificar) una función.

var producto = function (a, b) {
  return a * b;
};
var duplicador = producto.bind(this, 2);
duplicador(8); // = 16

// Cuando llamas a una función con la palabra clave `new`, se crea un nuevo objeto y
// se pone a disposición de la función a través de la palabra clave `this`. Las funciones diseñadas para ser
// llamadas de esa manera se llaman constructores.

var MiConstructor = function () {
  this.miNumero = 5;
};
miNuevoObj = new MiConstructor(); // = {miNumero: 5}
miNuevoObj.miNumero; // = 5

// A diferencia de la mayoría de los otros lenguajes de programación orientados a objetos, JavaScript no tiene
// el concepto de 'instancias' creadas a partir de 'clases'; en su lugar, JavaScript
// combina la instanciación y la herencia en un solo concepto: un 'prototipo'.

// Cada objeto JavaScript tiene un 'prototipo'. Cuando intentas acceder a una propiedad
// en un objeto que no existe en el objeto real, el intérprete buscará en su prototipo.

// Algunas implementaciones de JS te permiten acceder al prototipo de un objeto en la propiedad mágica `__proto__`.
// Aunque esto es útil para explicar prototipos, no es parte del estándar; veremos formas estándar de usar prototipos más adelante.
var miObj = {
  miString: "¡Hola mundo!"
};
var miPrototipo = {
  significadoDeLaVida: 42,
  miFunc: function () {
    return this.miString.toLowerCase();
  }
};

miObj.__proto__ = miPrototipo;
miObj.significadoDeLaVida; // = 42

// Esto funciona también para funciones.
miObj.miFunc(); // = "hola mundo!"

// Por supuesto, si tu propiedad no está en tu prototipo, se buscará en el prototipo del prototipo, y así sucesivamente.
miPrototipo.__proto__ = {
  miBooleano: true
};
miObj.miBooleano; // = true

// No hay copias involucradas aquí; cada objeto almacena una referencia a su
// prototipo. Esto significa que podemos cambiar el prototipo y nuestros cambios se reflejarán
// en todas partes.
miPrototipo.significadoDeLaVida = 43;
miObj.significadoDeLaVida; // = 43

// La instrucción for/in permite la iteración sobre propiedades de un objeto,
// recorriendo la cadena de prototipos hasta que vea un prototipo nulo.
for (var x in miObj) {
  console.log(miObj[x]);
}
// imprime:
// ¡Hola mundo!
// 43
// [Function: miFunc]
// true

// Para considerar solo las propiedades adjuntas al objeto mismo
// y no a sus prototipos, usa la comprobación `hasOwnProperty()`.
for (var x in miObj) {
  if (miObj.hasOwnProperty(x)) {
    console.log(miObj[x]);
  }
}
// imprime:
// ¡Hola mundo!

// Mencionamos que `__proto__` no era estándar, y no hay una forma estándar de
// cambiar el prototipo de un objeto existente. Sin embargo, hay dos formas de
// crear un nuevo objeto con un prototipo dado.

// La primera es Object.create, que es una adición reciente a JS y, por lo tanto,
// aún no está disponible en todas las implementaciones.
var miObj = Object.create(miPrototipo);
miObj.significadoDeLaVida; // = 43

// La segunda forma, que funciona en cualquier lugar, tiene que ver con los constructores.
// Los constructores tienen una propiedad llamada prototype. Esto *no* es el prototipo de
// la función constructora en sí; en cambio, es el prototipo que se le da a los nuevos objetos
// cuando se crean con ese constructor y la palabra clave new.
MiConstructor.prototype = {
  miNumero: 5,
  obtenerMiNumero: function () {
    return this.miNumero;
  }
};
var miNuevoObj2 = new MiConstructor();
miNuevoObj2.obtenerMiNumero(); // = 5
miNuevoObj2.miNumero = 6;
miNuevoObj2.obtenerMiNumero(); // = 6

// Los tipos integrados como cadenas y números también tienen constructores que crean
// objetos contenedores equivalentes.
var miNumero = 12;
var miNumeroObj = new Number(12);
miNumero == miNumeroObj; // = true

// Sin embargo, no son exactamente equivalentes.
typeof miNumero; // = 'number'
typeof miNumeroObj; // = 'object'
miNumero === miNumeroObj; // = false
if (0) {
  // Este código no se ejecutará, porque 0 es falsy.
}
if (new Number(0)) {
  // Este código se ejecutará, porque los números envueltos son objetos y los objetos
  // siempre son truthy.
}

// Sin embargo, los objetos contenedores y los tipos integrados regulares comparten un prototipo, así que
// realmente puedes agregar funcionalidad a una cadena, por ejemplo.
String.prototype.primerCaracter = function () {
  return this.charAt(0);
};
"abc".primerCaracter(); // = "a"

// Este hecho se usa a menudo en "polyfilling", que consiste en implementar características más recientes de JavaScript
// en un subconjunto más antiguo de JavaScript, para que se puedan usar en entornos más antiguos como navegadores obsoletos.

// Por ejemplo, mencionamos que Object.create aún no está disponible en todas
// las implementaciones, pero aún podemos usarlo con este polyfill:
if (Object.create === undefined) { // no lo sobrescribas si ya existe
  Object.create = function (proto) {
    // crea un constructor temporal con el prototipo correcto
    var Constructor = function () { };
    Constructor.prototype = proto;
    // luego úsalo para crear un nuevo objeto con el prototipo adecuado
    return new Constructor();
  };
}

// Adiciones de ES6

// La palabra clave "let" te permite definir variables en un ámbito léxico,
// a diferencia de la palabra clave var, que lo hace en un ámbito de función.
let nombre = "Billy";

// Las variables definidas con let pueden reasignarse con nuevos valores.
nombre = "William";

// La palabra clave "const" te permite definir una variable en un ámbito léxico
// como con let, pero no puedes volver a asignar el valor una vez que se ha asignado uno.

const pi = 3.14;

pi = 4.13; // No puedes hacer esto.

// Hay una nueva sintaxis para las funciones en ES6 conocida como "sintaxis lambda".
// Esto permite que las funciones se definan en un ámbito léxico como las variables
// definidas por const y let.

const esPar = (numero) => {
  return numero % 2 === 0;
};

esPar(7); // false

// La "equivalencia" de esta función en la sintaxis tradicional se vería así:

function esPar(numero) {
  return numero % 2 === 0;
};

// Puse la palabra "equivalente" entre comillas dobles porque una función definida
// usando la sintaxis lambda no se puede llamar antes de la definición.
// El siguiente es un ejemplo de uso no válido:

agregar(1, 8);

const agregar = (primerNumero, segundoNumero) => {
  return primerNumero + segundoNumero;
};
