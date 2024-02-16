{//Anatomía de un Error
  // Supongamos que hemos escrito el siguiente código:
  const a = "Hello";
  const b = "World";

  console.log(c);  // Generará un ReferenceError

  // Ejemplo de ReferenceError
  // Se lanza un ReferenceError cuando se hace referencia a una variable que no está declarada y/o inicializada dentro del alcance actual.
  // En este caso, el mensaje de error explica que el error se produjo porque c is not defined.

  // Partes de un error:
  // 1. Tipo de Error y Mensaje
  //    - Tipo de Error: Uncaught ReferenceError
  //    - Mensaje: c is not defined

  // 2. Ubicación del Error
  //    - Archivo: script.js
  //    - Número de línea: 4
  //    - Columna: 15

  // Otra parte importante de un error es el seguimiento de la pila. Esto nos ayuda a comprender cuándo se produjo el error y qué funciones lo causaron.

  // Ejemplo de seguimiento de la pila
  const d = 5;
  const e = 10;

  function add() {
    return f; // Generará un ReferenceError aquí
  }

  function print() {
    add();
  }

  print(); // Se produce el error ReferenceError: f is not defined

  // Seguimiento de la pila de errores de referencia
  // Nos dice que:
  // - 'c' no está definido en el alcance de add(), declarado en la línea 5.
  // - add() fue llamado por print(), declarado en la línea 9.
  // - print() mismo fue llamado en la línea 12.

  // Por lo tanto, el seguimiento de la pila nos permite rastrear la evolución del error hasta su origen, que en este caso es la declaración de add().

  // 3. Seguimiento de la Pila
  //    - c is not defined en el alcance de add(), declarado en la línea 5.
  //    - add() fue llamado por print(), declarado en la línea 9.
  //    - print() fue llamado en la línea 12.

}
{// Tipos comunes de errores en JavaScript

  // 1. Error de sintaxis
  // Ocurre cuando el código no sigue las reglas gramaticales de JavaScript.
  function helloWorld() {
    //! console.log "Hello World!";
    // Uncaught SyntaxError: Unexpected string
  }

  // 2. Error de referencia
  // Se produce cuando se intenta hacer referencia a una variable que no existe en el alcance actual.
  const d = 5;
  const e = 10;

  function add() {
    return f; // Generará un ReferenceError aquí
  }

  function print() {
    add();
  }

  print()
  /*
  !Uncaught ReferenceError: f is not defined
  !at add (<anonymous>:5:5)
  !at print (<anonymous>:9:5)
  !at <anonymous>:12:3
  */
  // 3. Error de tipo
  /*o Según MDN, se TypeErrorpuede lanzar un cuando:
    
    un operando o argumento pasado a una función es incompatible con el tipo esperado por ese operador o función;
  
    o al intentar modificar un valor que no se puede cambiar;
  
    o cuando se intenta utilizar un valor de forma inapropiada.
  */

  const str1 = "Hello";
  const str2 = "World!";
  const message = str1.push(str2);  //! Uncaught TypeError: str1.push is not a function at <anonymous>:3:24
  // Aquí, recibimos un TypeError indicando que str1.push no es una función.
  // La solución es utilizar un método adecuado para cadenas, como str1.concat(str2).

  // En resumen, es crucial comprender y corregir estos errores comunes para escribir código JavaScript efectivo.
}
{// Leer atentamente el error y utilizar herramientas de depuración en JavaScript

  // 1. Leer atentamente el error
  // Intenta comprender el error leyendo el mensaje proporcionado en la consola.
  // A continuación, busca en Google el error para encontrar soluciones en StackOverflow o documentación.

  // Ejemplo:
  // Si recibes un "TypeError: Cannot read property 'undefined' of null",
  // significa que estás intentando acceder a una propiedad en un objeto que es null o undefined.

  // 2. Utilizar el depurador
  // El depurador es esencial para solucionar problemas complicados.
  // Puedes establecer puntos de interrupción, ver valores de variables, recorrer el código línea por línea, etc.

  // Recursos:
  // - Tutorial del depurador de Chrome:
  https://developers.google.com/web/tools/chrome-devtools/javascript
  //   (Advertencia: en el punto 4 del paso 3, devtools puede detenerse en la segunda línea en lugar de en la declaración de la función, esto es normal).

  // 3. Hacer uso de la consola
  // console.log() es una opción popular para depuración rápida.
  // Otros métodos útiles: console.table(), console.trace(), etc.
  // Puedes encontrar más métodos aquí: https://developer.mozilla.org/en-US/docs/Web/API/console

  // Ejemplo:
  const data = { name: "John", age: 30 };

  // Utilizando console.log() para obtener información inmediata.
  console.log(data);

  // Utilizando console.table() para mostrar datos en forma de tabla.
  console.table(data);

  // Utilizando console.trace() para obtener una traza de la pila.
  console.trace();
}
{// Errores versus Advertencias en JavaScript

  // Muchas personas tratan las advertencias como errores, pero es crucial comprender la diferencia.

  // 1. Errores
  // - Detienen la ejecución del programa.
  // - Pueden bloquear el flujo normal y causar problemas graves.
  // - Necesitan ser abordados y corregidos antes de que el programa pueda continuar.

  // Ejemplo de error:
  // Si tienes un "TypeError", es probable que no puedas continuar ejecutando tu programa hasta que lo resuelvas.

  // 2. Advertencias
  // - Proporcionan información sobre problemas potenciales.
  // - No detienen la ejecución del programa de inmediato.
  // - Aunque se deben abordar, no son tan críticas como los errores.

  // Ejemplo de advertencia:
  // Si recibes una advertencia sobre una variable que puede estar sin usar, tu programa seguirá ejecutándose, pero puede haber oportunidades para mejorar el código.

  // Diferenciación visual (no una regla estricta):
  // - Errores: normalmente se muestran en rojo.
  // - Advertencias: normalmente se muestran en amarillo.

  // Es esencial abordar tanto errores como advertencias para mejorar la calidad y la robustez de tu código.

  // ¡Recuerda! Los colores pueden variar según la plataforma, pero la diferenciación visual es común.
}