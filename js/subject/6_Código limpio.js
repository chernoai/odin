{// ¿Qué es el código limpio?

  // Ejemplo A: Código no limpio
  const x = function (z) {
    let w = 0; z.forEach(
      function (q) {
        w += q;
      }); return w;
  };

  x([2, 2, 2]);

  // Ejemplo B: Código limpio
  const sumArray = function (array) {
    let sum = 0;
    array.forEach(function (number) {
      sum += number;
    });
    return sum;
  };

  sumArray([2, 2, 2]);

  /*
  En el Ejemplo B:
  - Se utilizan nombres de variables y funciones descriptivos.
  - La sangría sigue un patrón lógico y coherente.
  - No hay punto y coma que interrumpa el código dentro de una línea.
  - Se sigue la convención de camelCase para nombrar variables y funciones, facilitando la lectura.
  
  Recuerda:
  - Evita el uso de variables de una sola letra fuera del contexto de bucles o funciones de devolución de llamada.
  - Utiliza camelCase para nombrar variables y funciones con varias palabras.
  - El código limpio facilita la colaboración y mantenimiento del código a lo largo del tiempo.
  */
}
{// Nombrar funciones y variables en JavaScript

  // 1. Un buen nombre es descriptivo.
  //    - Utiliza nombres que reflejen claramente el propósito y la función de la variable o función.
  // Buen ejemplo
  const sumArray = function (array) {
    let total = 0;
    array.forEach(function (number) {
      total += number;
    });
    return total;
  };

  sumArray([2, 2, 2]);

  // Mal ejemplo
  const x = function (z) {
    let w = 0;
    z.forEach(
      function (q) {
        w += q;
      }
    );
    return w;
  };

  x([2, 2, 2]);

  // 2. Utiliza un vocabulario consistente.
  //    - Mantén la coherencia en la denominación de variables del mismo tipo.
  //    - Utiliza nombres que sigan un patrón lógico y coherente.

  // Ejemplos adicionales:

  // Buen ejemplo
  const getPlayerScore = function () { };
  const getPlayerName = function () { };
  const getPlayerTag = function () { };

  // Mal ejemplo
  const getUserScore = function () { };
  const fetchPlayerName = function () { };
  const retrievePlayer1Tag = function () { };

  // 3. Las variables siempre deben comenzar con un sustantivo o un adjetivo y las funciones con un verbo.
  //    - Sigue la convención de frase nominal para variables y verbos para funciones.

  // Otros ejemplos:
  const numberOfThings = 10;
  const myName = "Thor";
  const isSelected = true;

  function getCount() {
    return numberOfThings;
  }

  // Evita:
  // const getCount = 10; // Podría confundirse como una variable
  // function myName() { return "Thor"; } // Debería ser un sustantivo
}
{// Utilizar nombres que se puedan buscar y sean inmediatamente comprensibles en JavaScript

  // Ejemplo sin variables descriptivas
  setTimeout(stopTimer, 3600000);

  // Mejora con variables descriptivas
  const MILLISECONDS_PER_HOUR = 60 * 60 * 1000;

  setTimeout(stopTimer, MILLISECONDS_PER_HOUR);

  // Principios para nombrar variables de manera significativa:

  // 1. Utilizar nombres descriptivos y fácilmente comprensibles.
  //    - Evitar el uso de variables no declaradas o con nombres poco claros.

  // 2. Introducir variables descriptivas para mejorar la legibilidad.
  //    - En lugar de utilizar números mágicos, declara variables descriptivas para representar valores específicos.

  // 3. Utilizar mayúsculas para variables que actúan como constantes.
  //    - Cuando estás seguro de que la variable es una constante y su valor no cambiará, puedes usar mayúsculas.

  // Otros ejemplos:
  const SECONDS_PER_MINUTE = 60;
  const MINUTES_PER_HOUR = 60;
  const HOURS_PER_DAY = 24;

  const SECONDS_PER_DAY = SECONDS_PER_MINUTE * MINUTES_PER_HOUR * HOURS_PER_DAY;

  // Este tipo de declaraciones mejora la comprensión del código y facilita su mantenimiento.
}
{// Indentación y Longitud de Línea en JavaScript

  // Consistencia en la Indentación
  // Ya sea que uses tabs o espacios, la consistencia es clave. Elige un estilo y mantente con él.
  // Guías de estilo populares: Airbnb, Google, Standard, etc.

  // Longitud de Línea
  // La mayoría de las guías de estilo recomiendan limitar la longitud de cada línea para una mejor legibilidad.

  // Ejemplo de una línea que es demasiado larga
  let lineaMuyLarga = algo + algoMas + otraCosa + cuantosTacos + unaCosaMasMuyLarga;

  // Opciones de formato para dividir líneas:
  // 1. Dividir inmediatamente después de un operador o coma para una mejor legibilidad.

  // Opción 1: Alinea las líneas de continuación con el primer carácter de la declaración.
  let lineaFormateada =
    algo +
    algoMas +
    otraCosa +
    cuantosTacos +
    unaCosaMasMuyLarga;

  // Opción 2: Indenta las líneas de continuación con espacios adicionales.
  let otraLineaFormateada = algo + algoMas + otraCosa +
    cuantosTacos + unaCosaMasMuyLarga;

  // Elige un estilo de formato.
}
{// Punto y coma en JavaScript

  // En JavaScript, los puntos y coma son en su mayoría opcionales porque el compilador de JS los insertará automáticamente si se omiten. 
  // Esta funcionalidad PUEDE fallar en ciertas situaciones, lo que podría provocar errores en tu código, por lo que es mejor acostumbrarse a agregar puntos y coma.

  // Nuevamente: la consistencia es lo principal.

  // Ejemplo sin punto y coma
  let variableSinPuntoComa = 10
  console.log(variableSinPuntoComa)  // Esto podría funcionar, pero es mejor agregar un punto y coma al final

  // Ejemplo con punto y coma
  let variableConPuntoComa = 20;
  console.log(variableConPuntoComa);  // Esto es más seguro y consistente
}
{// Nuevamente: la consistencia es lo principal.

  // Acerca de los comentarios
  // Los comentarios son una herramienta excelente. Pero, como cualquier buena herramienta, pueden ser mal utilizados. 
  // Es tentador para alguien en sus primeros pasos en la programación tener comentarios que expliquen todo lo que hace el código. Esto no es una buena práctica.

  // A continuación, veremos algunos problemas comunes en los comentarios y por qué son problemas.

  // No comentes cuando deberías usar git
  // Puede ser tentador tener comentarios en tu código que expliquen los cambios o adiciones que has realizado. Por ejemplo:

  /**
   * 2023-01-10: Se eliminó código innecesario que causaba confusión (RM)
   * 2023-03-05: Se simplificó el código (JP)
   * 2023-05-15: Se eliminaron funciones que causaban errores en producción (LI)
   * 2023-06-22: Se agregó una nueva función para combinar valores (JR)
   */
  // El problema es que ya tienes una herramienta para rastrear cambios: ¡git! 
  // Mantener un seguimiento de estos comentarios se convertirá en una tarea, y tendrás una imagen incompleta de lo que ha sucedido. 
  // Tus archivos también contendrán información que no pertenece allí.

  // Al usar git, toda esta información estará organizada de manera ordenada en el repositorio y será fácilmente accesible con git log.

  // Lo mismo se aplica al código que ya no se usa. Si lo necesitas nuevamente en el futuro, simplemente consulta tus commits de git. 
  // Comentar algo mientras pruebas otra cosa está bien, pero una vez que un fragmento de código no es necesario, simplemente elimínalo. 
  // No dejes algo como esto en tus archivos:

  // laFuncionEnUso();
  //  antiguaFuncion();
  //  inclusoFuncionMasAntiguaInutil();
  //  ¿Por qué estoy aquí? Soy antiguo():

  // Di por qué, no cómo
  // El propósito de los comentarios no es proporcionar pseudocódigo que duplica tu código. 
  // Buenos comentarios explican las razones detrás de un fragmento de código.

  // Veamos un ejemplo para ver esto en práctica:

  // Ejemplo Malo - el comentario no dice por qué, solo qué y cómo

  // Esta función incrementa el valor de i en 1
  function incrementarI(i) {
    i = i + 1; // Agrega uno a i
    return i;
  }

  // Ejemplo Mejor - el comentario dice por qué

  // Esta función incrementa el valor de index para pasar al siguiente elemento
  function incrementarI(i) {
    i = i + 1;
    return i;
  }

  // Ejemplo Bueno - el código dice todo lo necesario

  function moverAlSiguienteElemento(index) {
    index = index + 1;
    return index;
  }

  // En el ejemplo malo, los comentarios explican dos veces lo que hace el código. Pero para esto, podrías haber leído simplemente el código, por lo que los comentarios son redundantes.

  // En el ejemplo mejor, el comentario aclara el propósito de la función: moverse al siguiente elemento. Eso es bueno, pero podemos hacerlo aún mejor.

  // En el ejemplo bueno, no se necesitan comentarios en absoluto. El uso de nombres de funciones y variables descriptivos elimina la necesidad de explicaciones adicionales. Bastante ordenado, ¿verdad?

  // Esto no significa que un buen código deba carecer de comentarios. En muchas situaciones, los comentarios bien ubicados son invaluables. 

  // Veamos un ejemplo final, donde un comentario sirve a un buen propósito:

  function calcularIMC(altura, peso) {
    // La fórmula para el IMC es el peso en kilogramos dividido por la altura en metros al cuadrado
    const alturaEnMetros = altura / 100;
    const imc = peso / (alturaEnMetros * alturaEnMetros);
    return imc;
  }
  // Este comentario ayuda a refrescar al lector sobre cómo se calcula el IMC en un vocabulario sencillo, ayudando al lector a ver por qué la altura necesita ser convertida y qué hace el cálculo siguiente. Casi lo logramos solo con los nombres, pero el comentario aún añade claridad adicional.
}