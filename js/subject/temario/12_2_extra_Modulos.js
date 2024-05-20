{/*Patrón de módulo en JavaScript
  -------------------------------
  Un módulo es una construcción similar a una clase singleton que tiene una sola instancia y expone sus miembros sin tener estado interno.
 */

  // Ejemplo de un módulo en JavaScript:

  const modulo = (() => {
    // Variable privada
    let contador = 0;

    // Función privada
    const incrementarContador = () => {
      contador++;
    };

    // Función pública
    const obtenerContador = () => {
      return contador;
    };

    // Devolver solo las funciones públicas
    return {
      incrementarContador,
      obtenerContador
    };
  })();

  // Uso del módulo
  console.log(modulo.obtenerContador());
  modulo.incrementarContador();
  console.log(modulo.obtenerContador());
  {/** Definiendo un módulo en JavaScript
 * -----------------------------------
 * Un módulo se crea como un IIFE (expresión de función invocada inmediatamente) con una función dentro.
 * Todo lo que está dentro del cuerpo de dicha función está vinculado a ese módulo y pueden ser vistos entre sí.
 * Los módulos emulan los métodos "públicos" y "privados" creando el alcance mencionado anteriormente y exponiendo solo aquellas cosas que están declaradas.
 * 
 * Los métodos o funciones privados son miembros de una entidad determinada que solo se pueden ver dentro de dicha entidad.
 * Se puede acceder a los públicos desde el exterior de una entidad determinada.
 */

    //todo 1- Crear un módulo con una función privada
    const Formatter = (function () {
      // Función privada para registrar mensajes
      const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);

      // No se devuelve nada, solo se ejecuta la función
    })();
    console.log(Formatter);

    // Intento de ejecutar la función privada log
    //? Formatter.log("Hello"); 
    //! Produce: Uncaught TypeError: Cannot read property 'log' of undefined
    /* Explicacion del codigo:
    1- Aquí estamos declarando una variable llamada Formatter utilizando la palabra clave const.

    2- La expresión que le sigue (function () {...})(); es una IIFE (Expresión de Función Invocada Inmediatamente). Esto significa que es una función que se declara y se invoca inmediatamente.

    3- Dentro de esta IIFE, definimos una función llamada log que toma un mensaje como argumento y lo imprime en la consola junto con una marca de tiempo y una etiqueta de "Logger".

    4- Como la IIFE está envuelta en paréntesis y seguida por otro par de paréntesis ();, la función se ejecuta cuando se define. Esto significa que se ejecuta una vez que se declara, y su resultado  se asigna a la variable.
    
    *  Ejemplo:
    ?  const resultado = (() => {
    ?  return 5 * 2;
    ?  })()
    ?  console.log(resultado); devuele el resultado

    ?  const resultado2 = () => {
    ?  return 5 * 2;}
    ?  console.log(resultado2); devuelve que es una funcion 
    */




    //todo 2- Crear un módulo con una función privada y mostrar la ejecución interna
    const Formatter2 = (function () {
      console.log("Start"); // Registro del inicio de ejecución

      // Función privada para registrar mensajes
      const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);
    })();

    //todo 3- Crear un módulo con una función privada y una función pública
    const Formatter3 = (function () {
      // Función privada para registrar mensajes
      const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);

      // Función pública que convierte el texto en mayúsculas y registra el proceso
      const makeUppercase = (text) => {
        log("Making uppercase"); // Registro del proceso
        return text.toUpperCase(); // Convertir el texto a mayúsculas
      };
    })();
    // Intento de acceder a la función privada makeUppercase desde fuera del módulo
    //? Formatter.makeUppercase("hello"); 
    //! Produce: Uncaught TypeError: Formatter.makeUppercase is not a function
  }
  {/** Exponiendo un módulo
 * ---------------------
 * Para acceder a las funciones dentro del módulo, se devuelve un objeto que contiene estas funciones.
 * Esto permite que las funciones se accedan y utilicen externamente.
 */

    //todo 1- Crear un módulo con una función privada y exponerla
    const Formatter = (function () {
      // Función privada para registrar mensajes
      const log = (message) => `[${Date(Date.now())}] Logger: ${message}`

      // Función pública que convierte el texto en mayúsculas y registra el proceso
      const makeUppercase = (text) => {
        log("Making uppercase"); // Registro del proceso
        return text.toUpperCase(); // Convertir el texto a mayúsculas
      };

      // Devolver un objeto con la función makeUppercase
      return {
        makeUppercase, log
      }
    })();

    // Usar la función makeUppercase expuesta por el módulo
    console.log(Formatter.makeUppercase("tomek"));
    console.log
      (Formatter.log("Hola"));

    //todo 2- Crear un módulo con una función privada y una variable expuesta
    const Formatter2 = (function () {
      let timesRun = 0; // Variable para contar cuántas veces se ha ejecutado la función makeUppercase

      // Función privada para registrar mensajes
      const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);

      // Función privada que aumenta el contador de veces ejecutadas
      const setTimesRun = () => {
        log("Setting times run"); // Registro del proceso
        ++timesRun; // Aumentar el contador
      };

      // Función pública que convierte el texto en mayúsculas y registra el proceso
      const makeUppercase = (text) => {
        log("Making uppercase"); // Registro del proceso
        setTimesRun(); // Llamar a la función para aumentar el contador
        return text.toUpperCase(); // Convertir el texto a mayúsculas
      };

      // Devolver un objeto con la función makeUppercase y la variable timesRun
      return {
        makeUppercase,
        timesRun,
      }
    })();
    console.log(Formatter2.makeUppercase("tomek")); // Imprime: TOMEK
    console.log(Formatter2.timesRun); // Imprime: 0
    // Sobrescribir la variable timesRun desde fuera del módulo
    Formatter2.timesRun = 10;
    console.log(Formatter2.timesRun); // Imprime: 10
    //todo 3- Ejecutar la función makeUppercase y mostrar el contador timesRun

    // Crear un módulo con una función privada y una matriz expuesta
    const Formatter3 = (function () {
      // Función privada para registrar mensajes
      const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);

      // Matriz para almacenar cuántas veces se ha ejecutado la función makeUppercase
      const timesRun = [];

      // Función pública que convierte el texto en mayúsculas y registra el proceso
      const makeUppercase = (text) => {
        log("Making uppercase"); // Registro del proceso
        timesRun.push(null); // Agregar un elemento a la matriz
        return text.toUpperCase(); // Convertir el texto a mayúsculas
      };

      // Devolver un objeto con la función makeUppercase y la matriz timesRun
      return {
        makeUppercase,
        timesRun,
      }
    })();

    // Ejecutar la función makeUppercase varias veces y mostrar la longitud de la matriz timesRun
    console.log(Formatter3.makeUppercase("tomek"));
    console.log(Formatter3.makeUppercase("tomek"));
    console.log(Formatter3.makeUppercase("tomek"));
    console.log(Formatter3.timesRun.length);
  }
  {/**
 * Declarar dependencias de módulos
 * ---------------------------------
 * Los módulos pueden tener dependencias externas. Se pueden declarar estas dependencias e inyectarlas en el módulo
 * cuando se crea la instancia del módulo. Esto permite una mejor modularidad y facilita las pruebas.
 */

    //todo 1- Módulo Formatter con una función writeToDOM que depende del objeto document
    const Formatter = (function (doc) {
      // Función privada para registrar mensajes
      const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);

      // Función pública que convierte el texto en mayúsculas
      const makeUppercase = (text) => {
        log("Making uppercase");
        return text.toUpperCase();
      };

      // Función pública que escribe un mensaje en un elemento del DOM
      const writeToDOM = (selector, message) => {
        // Verificar si el objeto document y el método querySelector están disponibles
        if (!!doc && "querySelector" in doc) {
          // Escribir el mensaje en el elemento del DOM seleccionado
          doc.querySelector(selector).innerHTML = message;
        }
      }

      // Devolver un objeto con las funciones makeUppercase y writeToDOM
      return {
        makeUppercase,
        writeToDOM,
      }
    })(document); // Inyectar el objeto document como una dependencia

    // Ejemplo de uso del módulo Formatter
    Formatter.writeToDOM("#target", "Hi there");



    //todo 2- Inyectar el simulacro del objeto document para pruebas

    // Simulacro del objeto document para pruebas
    const documentMock = (() => ({
      querySelector: (selector) => ({
        innerHTML: null,
      }),
    }))();
    
    const Formatter2 = (function (doc) {
      // Función privada para registrar mensajes
      const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);

      // Función pública que convierte el texto en mayúsculas
      const makeUppercase = (text) => {
        log("Making uppercase");
        return text.toUpperCase();
      };

      // Función pública que escribe un mensaje en un elemento del DOM
      const writeToDOM = (selector, message) => {
        doc.querySelector(selector).innerHTML = message; // No se verifica doc porque es un simulacro
      }

      // Devolver un objeto con las funciones makeUppercase y writeToDOM
      return {
        makeUppercase,
        writeToDOM,
      }
    })(document || documentMock); // Inyectar el objeto document o el simulacro documentMock como una dependencia
  }
}