// TL;DR de reglas JavaScript standard

// Regla 1: Usar 2 espacios como sangría
function hello(name) {
  console.log('hi', name)
}

// Regla 2: Usar comillas simples en cadenas de texto
console.log('hello there') // comillas simples
$("<div class='box'>") // escapado de texto

// Regla 3: No dejar variables sin usar
function myFunction() {
  var result = something()   // ✗ evitar
}

// Regla 4: Espacio después de las palabras claves
if (condition) { }   // ✓ ok
if (condition) { }    // ✗ evitar

// Regla 5: Agregar un espacio antes de los paréntesis de la función declarada
function name(arg) { }   // ✓ ok
function name(arg) { }    // ✗ evitar

// Regla 6: Usar siempre === en vez de ==
if (name === 'John');   // ✓ ok
if (name == 'John');    // ✗ evitar

// Regla 7: Operadores infijos deben ser espaciados
var x = 2
var message = 'hello, ' + name + '!' // ✓ ok
var message = 'hello, +name+!'// ✗ evitar

// Regla 8: Comas deben tener un espacio después de ellas
var list = [1, 2, 3, 4]
function greet(name, options) { } // ✓ ok
function greet(name, options) { } // ✗ evitar

// Regla 9: Mantener declaración else en la misma línea que sus llaves
if (condition) {
  // 
} else {
  // 
}  // ✓ ok

if (condition) {
}
else {
} // ✗ evitar

// Regla 10: Para declaraciones if multi-línea debe usar llaves
// ✓ ok
if (options.quiet !== true) console.log('done')
// ✓ ok
if (options.quiet !== true) {
  console.log('done')
}
// ✗ evitar
if (options.quiet !== true)
  console.log('done')

// Regla 11: Siempre gestionar el parámetro err en las funciones
// ✓ ok
run(function (err) {
  if (err) throw err
  window.alert('done')
})
// ✗ evitar
run(function (err) {
  window.alert('done')
})

// Regla 12: En las variables globales usar el sufijo window. Con la excepción de: document, console y navigator.
window.alert('hi')   // ✓ ok

// Regla 13: Múltiples líneas en blanco no está permitido
// ✓ ok
var value = 'hello world'
console.log(value)
// ✗ evitar
var value = 'hello world'


console.log(value)

// Regla 14: Para el operador ternario en multi-línea, colocar el `?` y `:` en su propia nueva línea
// ✓ ok
var location = env.development ? 'localhost' : 'www.api.com'

// ✓ ok
var location = env.development
  ? 'localhost'
  : 'www.api.com'

// ✗ avoid
var location = env.development ?
  'localhost' :
  'www.api.com'

// Regla 15: Para declaraciones var, escribir solo una asignación en cada declaración
// ✓ ok
var silent = true
var verbose = true

// ✗ avoid
var silent = true, verbose = true

// ✗ avoid
var silent = true,
  verbose = true

// Regla 16: Envuelva las asignaciones condicionales con paréntesis adicionales. Esto deja claro que la expresión es intencionalmente una asignación ( =) en lugar de un error tipográfico de igualdad ( ===).
// ✓ ok
while ((m = text.match(expr))) {
  // 
}

// ✗ avoid
while (m = text.match(expr)) {
  // 
}

// Regla 17: Agregar espacios dentro de bloques de una sola línea
function foo() { return true }    // ✗ avoid
function foo() { return true }  // ✓ ok

// Regla 18: Usar camelcase al nombre variables y funciones 
function my_function() { }    // ✗ avoid
function myFunction() { }     // ✓ ok

var my_var = 'hello'           // ✗ avoid
var myVar = 'hello'            // ✓ ok

// Regla 19: Comas adicionales no está permitido
var obj = {
  message: 'hello',   // ✗ avoid
}
// Regla 20: Comas deben colocarse al final de la línea actual
var obj = {
  foo: 'foo'
  , bar: 'bar'   // ✗ avoid
}

var obj = {
  foo: 'foo',
  bar: 'bar'   // ✓ ok
}

// Regla 21: El Punto debe ir en la misma línea que la propiedad
console.
  log('hello')  // ✗ avoid

console
  .log('hello') // ✓ ok

// Regla 22: Archivos deben terminar con una nueva línea
// No hay un ejemplo de código específico para esta regla, pero asegúrate de que tus archivos terminen con una nueva línea.

// Regla 23: Sin espacios entre el identificador de la función y su invocación
console.log('hello')  // ✓ ok

// Regla 24: Agregar espacio entre dos puntos (colon) y pares clave valor
var obj = { 'key': 'value' }     // ✓ ok

// Regla 25: Nombres de Constructor deben empezar con letra Mayúscula
function animal() { }
var dog = new animal()    // ✗ avoid

function Animal() { }
var dog = new Animal()    // ✓ ok

// Regla 26: Constructor sin argumentos debe ser invocado con paréntesis
function Animal() { }
var dog = new Animal    // ✗ avoid
var dog = new Animal()  // ✓ ok

// Regla 27: Objetos deben contener un getter cuando se ha definido un setter
var person = {
  set name(value) {    // ✗ avoid
    this._name = value
  }
}

var person = {
  set name(value) {
    this._name = value
  },
  get name() {         // ✓ ok
    return this._name
  }
}
// Regla 28: Constructores de clases derivadas deben llamar super
class Dog {
  constructor() {
    super()             // ✗ avoid
    this.legs = 4
  }
}

class Dog extends Animal {
  constructor() {      // ✗ avoid
    this.legs = 4
  }
}

class Dog extends Animal {
  constructor() {
    super()             // ✓ ok
    this.legs = 4
  }
}

// Regla 29: Usar array literales en vez de array constructor
var nums = new Array(1, 2, 3)   // ✗ avoid
var nums = [1, 2, 3]            // ✓ ok

// Regla 30: Evitar usar arguments.callee y arguments.caller
function foo(n) {
  if (n <= 0) return

  arguments.callee(n - 1)   // ✗ avoid
}

function foo(n) {
  if (n <= 0) return

  foo(n - 1)                // ✓ ok
}
//Regla 31: Evite modificar variables de declaraciones de clases
class Dog { }
Dog = 'Fido'    // ✗ avoid

// Regla 31: Evitar modifidicar variables declaracas usando const
const score = 100
score = 125       // ✗ avoid

const score2 = 100              // ✓ ok

// Regla 32: Evitar usar expresiones constantes en condicionales
if (false) {    // ✗ avoid
  // 
}

if (x === 0) {  // ✓ ok
  // 
}

while (true) {  // ✓ ok
  // 
}

// Regla 33: Evitar caracteres de control de expresiones regulares
var pattern = /\x1f/    // ✗ avoid
var pattern = /\x20/    // ✓ ok

// Regla 34: Evitar sentencias debugger
function sum(a, b) {
  debugger      // ✗ avoid
  return a + b
}
// Regla 35: Evitar operador delete en variables
// ✗ avoidf
var name
//! delete name     
// Regla 36: Evitar argumentos duplicados en definición de funciones
function sum(a, b, a) {  // ✗ avoid
  // 
}

function sum(a, b, c) {  // ✓ ok
  // 
}
// Regla 37: Evitar duplicados en miembros de clase
class Dog {
  bark() { }
  bark() { }    // ✗ avoid
}

// Regla 38: Evitar duplicado de claves en objetos literales
var user = {
  name: 'Jane Doe',
  name: 'John Doe'    // ✗ avoid
}
// Regla 39: Evitar dublicados de etiqueta case en sentencias switch
switch (id) {
  case 1:
  // 
  case 1:     // ✗ avoid
}

// Regla 40: Usar una unica sentencia import por módulo
import { myFunc1 } from 'module'
import { myFunc2 } from 'module'          // ✗ avoid

import { myFunc1, myFunc2 } from 'module' // ✓ ok

// Regla 41: Evitar classes de carácteres vacia en expresiones regulares
const myRegex = /^abc[]/      // ✗ avoid
const myRegex2 = /^abc[a-z]/   // ✓ ok

// Regla 42: Evitar patrones de destructuración vacíos.
// Se debe evitar destructurar objetos con patrones vacíos.
const { a: { } } = foo         // ✗ evitar
const { a: { b } } = foo      // ✓ ok

// Regla 43: Evitar uso de eval().
// Se debe evitar el uso de la función eval() ya que puede introducir vulnerabilidades de seguridad.
eval("var result = user." + propName) // ✗ evitar
var result = user[propName]             // ✓ ok

// Regla 44: Evitar reasignar excepciones en cláusulas catch.
// No se debe reasignar el objeto de la excepción en la cláusula catch.
try {
  // 
} catch (e) {
  e = 'new value'             // ✗ evitar
}

try {
  // 
} catch (e) {
  const newVal = 'new value'  // ✓ ok
}

// Regla 45: Evitar extender objetos nativos.
// No se deben extender los prototipos de los objetos nativos de JavaScript.
Object.prototype.age = 21     // ✗ evitar

// Regla 46: Evitar uso innecesario de bind en funciones.
// No se debe utilizar la función bind de forma innecesaria.
const name = function () {
  getName()
}.bind(user)    // ✗ evitar

const name = function () {
  this.getName()
}.bind(user)    // ✓ ok

// Regla 47: Evitar hacer cast a booleanos.
// No se debe hacer un doble negado para forzar un valor a booleano.
const result = true
if (!!result) {   // ✗ evitar
  // 
}

const result = true
if (result) {     // ✓ ok
  // 
}

// Regla 48: Evitar paréntesis innecesarios alrededor de expresión de funciones.
// No es necesario envolver una expresión de función con paréntesis cuando se asigna a una variable.
const myFunc = (function () { })   // ✗ evitar
const myFunc2 = function () { }     // ✓ ok

// Regla 49: Usar break para evitar caídas en switch los casos
switch (filter) {
  case 1:
    doSomething()    // ✗ avoid
  case 2:
    doSomethingElse()
}

switch (filter) {
  case 1:
    doSomething()
    break           // ✓ ok
  case 2:
    doSomethingElse()
}

switch (filter) {
  case 1:
    doSomething()
  // fallthrough  // ✓ ok
  case 2:
    doSomethingElse()
}

// Regla 50: Sin decimales flotantes
const discount = .5      // ✗ avoid
const discount2 = 0.5     // ✓ ok

// Regla 51: Evitar reasignar declaraciones de funciones
function myFunc() { }
myFunc = myOtherFunc    // ✗ avoid

// Regla 52: No reasignar variables globales de solo lectura
window = {}     // ✗ avoid

// Regla 53: No implicar eval()
setTimeout("alert('Hello world')")                   // ✗ avoid
setTimeout(function () { alert('Hello world') })     // ✓ ok

// Regla 54: No hay declaraciones de funciones en bloques anidados
if (authenticated) {
  function setAuthUser() { }    // ✗ avoid
}

// Regla 55: No hay cadenas de expresiones regulares no válidas en RegExp los constructores
RegExp('[a-z')    // ✗ avoid
RegExp('[a-z]')   // ✓ ok

// Regla 56: Sin espacios en blanco irregulares
function myFunc() /*<NBSP>*/ { }   // ✗ avoid

// Regla 57: Sin uso __iterator__
Foo.prototype.__iterator__ = function () { }   // ✗ avoid

// Regla 58: No hay etiquetas que compartan un nombre con una variable dentro del alcance
var score5 = 100
function game() {
  score5: while (true) {      // ✗ avoid
    score -= 10
    if (score > 0) continue score5
    break
  }
}

// Regla 59: Sin declaraciones de etiqueta
label:
while (true) {
  break label     // ✗ avoid
}

// Regla 60: Sin bloques anidados innecesarios
function myFunc() {
  {                   // ✗ avoid
    myOtherFunc()
  }
}

function myFunc() {
  myOtherFunc()       // ✓ ok
}

// Regla 60: Evitar mezclar espacios y pestañas para realizar sangrías
//Regla 61:  No utilice múltiples espacios excepto para sangría
const id = 1234    // ✗ avoid
const id2 = 1234       // ✓ ok

// Sin cadenas multilínea
const message = 'Hello \
                 world'     // ✗ avoid

// Regla 62: No asignar new sin objeto a una variable
new Character()                     // ✗ avoid
const character = new Character()   // ✓ ok

//Regla 63:  No usar el Function constructor
var sum = new Function('a', 'b', 'return a + b')    // ✗ avoid

// Regla 64: No usar el Object constructor
let config = new Object()   // ✗ avoid

// Regla 65: Sin uso new require
const myModule = new require('my-module')    // ✗ avoid

// Regla 66: No usar el Symbol constructor
const foo = new Symbol('foo')   // ✗ avoid

// Regla 67: No se utilizan instancias contenedoras primitivas
const message = new String('hello')   // ✗ avoid

// Regla 68: No llamar a propiedades de objetos globales como funciones
const math = Math()   // ✗ avoid

// Regla 69: Sin literales octales
//! const octal = 042         // ✗ avoid
const decimal = 34        // ✓ ok
const octalString = '042' // ✓ ok

// Regla 70: No hay secuencias de escape octales en cadenas literales
//! const copyright = 'Copyright \251'  // ✗ avoid

// Regla 71: Evite la concatenación de cadenas cuando utilice __dirname y __filename
const pathToFile = __dirname + '/app.js'            // ✗ avoid
const pathToFile2 = path.join(__dirname, 'app.js')   // ✓ ok

// Regla 72: Evitar el uso de __proto__. Úselo getPrototypeOf en su lugar
const foo = obj.__proto__               // ✗ avoid
const foo = Object.getPrototypeOf(obj)  // ✓ ok

// Regla 73: Sin redeclarar variables
let name = 'John'
let name = 'Jane'     // ✗ avoid

// Regla 74: Evite múltiples espacios en literales de expresiones regulares
const regexp = /test   value/   // ✗ avoid
const regexp2 = /test {3}value/  // ✓ ok
const regexp3 = /test value/     // ✓ ok

// Regla 75: Las asignaciones en las declaraciones de devolución deben estar entre paréntesis
function sum(a, b) {
  return result = a + b     // ✗ avoid
}

function sum(a, b) {
  return (result = a + b)   // ✓ ok
}

// Regla 76: Evite asignarse una variable a sí mismo
name = name   // ✗ avoid

// Regla 77: Evite comparar una variable consigo misma
if (score === score) { }   // ✗ avoid

// Regla 78: Evite utilizar el operador de coma
if (doSomething(), !!test) { }   // ✗ avoid

// Regla 79: Los nombres restringidos no deben ocultarse
let undefined = 'value'     // ✗ avoid

// No se permiten matrices dispersas
let fruits = ['apple', , 'orange']       // ✗ avoid

// No se deben utilizar pestañas

// Las cadenas regulares no deben contener marcadores de posición literales de plantilla
const message = 'Hello ${name}'   // ✗ avoid
const message = `Hello ${name}`   // ✓ ok

// super() debe llamarse antes de usarlo this
class Dog extends Animal {
  constructor() {
    this.legs = 4     // ✗ avoid
    super()
  }
}

// Sólo throw un Error objeto
throw 'error'               // ✗ avoid
throw new Error('error')    // ✓ ok

// No se permite espacios en blanco al final de la línea

// No se permite inicializar undefined
let name = undefined    // ✗ avoid

// Sin condiciones no modificadas de bucles
for (let i = 0; i < items.length; j++) { }    // ✗ avoid
for (let i = 0; i < items.length; i++) { }    // ✓ ok

// No hay operadores ternarios cuando existen alternativas más simples
let score3 = val ? val : 0     // ✗ avoid
let score4 = val || 0          // ✓ ok

// No hay código inalcanzable después de las declaraciones return, throw, continue y break
function doSomething() {
  return true
  console.log('never called')     // ✗ avoid
}

// No hay declaraciones de control de flujo en finally bloques
try {
  // 
} catch (e) {
  // 
} finally {
  return 42     // ✗ avoid
}

// El operando izquierdo de los operadores relacionales no se debe negar
if (!key in obj) { }       // ✗ avoid
if (!(key in obj)) { }     // ✓ ok

// Evite el uso innecesario de .call() y .apply().
sum.call(null, 1, 2, 3)   // ✗ avoid

// Evite el uso de claves de propiedad calculadas innecesarias en los objetos.
const user = { ['name']: 'John Doe' }   // ✗ avoid
const user = { name: 'John Doe' }       // ✓ ok

// Sin constructor innecesario.
class Car {
  constructor() {      // ✗ avoid
  }
}

// Sin uso innecesario de escape.
let message = 'Hell\o'  // ✗ avoid

// No se permite cambiar el nombre de las asignaciones de importación, exportación y desestructuradas al mismo nombre.
import { config as config2 } from './config'     // ✗ avoid
import { config } from './config'               // ✓ ok

// No hay espacios en blanco antes de las propiedades.
user.name      // ✗ avoid
user.name       // ✓ ok

// No usar with declaraciones.
//! with (val) {}    // ✗ avoid

// Mantenga la coherencia de las nuevas líneas entre las propiedades del objeto.
const user = {
  name: 'Jane Doe', age: 30,
  username: 'jdoe86'            // ✗ avoid
}

const user = { name: 'Jane Doe', age: 30, username: 'jdoe86' }    // ✓ ok

const user = {
  name: 'Jane Doe',
  age: 30,
  username: 'jdoe86'
}                                                                 // ✓ ok

// Sin relleno dentro de los bloques.
if (user) {
  // ✗ avoid
  const name = getName()

}

if (user) {
  const name = getName()    // ✓ ok
}

// No hay espacios en blanco entre los operadores de extensión y sus expresiones.
fn(args)    // ✗ avoid
fn(args)     // ✓ ok

// El punto y coma debe tener un espacio después y ningún espacio antes.
for (let i = 0; i < items.length; i++) { }    // ✗ avoid
for (let i = 0; i < items.length; i++) { }    // ✓ ok

// Debe tener un espacio antes de los bloques.
if (admin) { }     // ✗ avoid
if (admin) { }    // ✓ ok

// Sin espacios dentro de paréntesis.
getName(name)     // ✗ avoid
getName(name)       // ✓ ok

// Los operadores unarios deben tener un espacio después.
typeof !admin        // ✗ avoid
typeof !admin        // ✓ ok

// Utilice espacios dentro de los comentarios.
//comment           // ✗ avoid
// comment          // ✓ ok

/*comment*/         // ✗ avoid
/* comment */       // ✓ ok

// Sin espacios en las cadenas de plantilla.
const message = `Hello, ${name}`    // ✗ avoid
const message = `Hello, ${name}`      // ✓ ok

// Úselo isNaN() al verificar NaN.
if (price === NaN) { }      // ✗ avoid
if (isNaN(price)) { }       // ✓ ok

// typeof debe compararse con una cadena válida.
typeof name === 'undefimed'     // ✗ avoid
typeof name === 'undefined'     // ✓ ok

// Las expresiones de función invocadas inmediatamente (IIFE) deben estar empaquetadas.
const getName = function () { }()     // ✗ avoid

const getName2 = (function () { }())   // ✓ ok
const getName3 = (function () { })()   // ✓ ok

// Las expresiones *in yield* deben tener un espacio antes y después.
//! yield* increment()    // ✗ avoid
//* yield * increment()   // ✓ ok

// Evite las condiciones de Yoda.
if (42 === age) { }    // ✗ avoid
if (age === 42) { }    // ✓ ok
