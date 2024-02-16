{//Entender el Problema:

  // El primer paso para resolver un problema es obtener una comprensión clara y precisa del mismo. Aquí hay algunos pasos clave para lograrlo:

  // 1. ** Análisis del Problema:**
  //- Escríbelo en papel de manera clara y detallada.
  //- Reformúlalo en un lenguaje sencillo para asegurarte de entender cada aspecto.
  //- Utiliza ejemplos específicos para ilustrar el problema.

  // 2. ** Descripción en un lenguaje Sencillo:**
  //- Explica el problema en un lenguaje simple para asegurarte de comprenderlo completamente.
  //- Evita jergas o términos técnicos innecesarios.

  // 3. ** Visualización:**
  //- Utiliza diagramas o gráficos si es útil para visualizar el problema.
  //- Identifica las partes clave y las relaciones entre ellas.

  // 4. ** Enseñar a Otros:**
  //- Intenta explicar el problema a otra persona.
  //- Si puedes transmitir la esencia del problema de manera clara, significa que lo comprendes.

  // Al seguir estos pasos, puedes obtener una comprensión sólida del problema, lo que facilita la identificación de soluciones efectivas y evita malentendidos durante el proceso de resolución.

}
{// Planificación del Proyecto:

  //Antes de comenzar a codificar, es esencial planificar cómo abordarás el problema. Aquí hay algunos pasos clave en esta etapa:

  //1. **Interfaz de Usuario:**
  //- ¿Tu programa tiene una interfaz de usuario?
  //- Define cómo se verá la interfaz y qué funcionalidades incluirá.
  //- Realiza bocetos en papel para visualizar la estructura y el diseño.

  //2. **Entradas y Salidas:**
  //- Identifica los inputs para tu programa. ¿Los usuarios ingresarán datos o recibirás información de otro lugar?
  //- Comprende la naturaleza y formato de los datos de entrada y salida.

  //3. **Resultado Deseado:**
  //- Clarifica cuál es el resultado deseado del programa.
  //- Define los criterios de éxito y cómo sabrás que el programa ha tenido éxito.

  //4. **Pasos Necesarios:**
  //- Desglosa el problema en pasos más pequeños y manejables.
  //- Identifica los pasos necesarios para llegar al resultado deseado.
  //- Establece un orden lógico para la ejecución de estos pasos.

  //5. **Algoritmo y Pseudocódigo:**
  //- Escribe un algoritmo que describa la lógica detrás de la solución.
  //- Utiliza pseudocódigo para representar los pasos de manera informal.
  //- Refina y ajusta el algoritmo según sea necesario.

  //La planificación sólida establece las bases para un desarrollo más efectivo y evita problemas futuros. Asegúrate de tener una comprensión clara de los aspectos clave antes de pasar a la fase de implementación.
}
{//Pseudocódigo
  // El pseudocódigo es una representación de la lógica de un programa utilizando un lenguaje natural en lugar de código específico.Su propósito es ayudar a pensar en los pasos necesarios para resolver un problema.Aquí hay un ejemplo de pseudocódigo para un programa que imprime todos los números hasta un número ingresado por el usuario:

  /*
  ? Cuando el usuario ingrese un número
    
  ?  Inicializar una variable de contador y establecer su valor en cero
    
  ?  Mientras el contador sea menor que el número ingresado por el usuario, incrementar el contador en uno
    
  ?  Imprimir el valor de la variable del contador
  */
  // Este pseudocódigo proporciona una descripción paso a paso de la lógica del programa sin preocuparse por la sintaxis específica de un lenguaje de programación.
}
{//   Divide y Conquistar:

  // 1. **Identificación de Subproblemas:**
  //    - Identifica subproblemas más pequeños y manejables en el contexto del problema general.
  //    - Cada paso del algoritmo planificado puede considerarse un subproblema.

  // 2. **Elección del Subproblema Inicial:**
  //    - Selecciona el subproblema más simple o pequeño para comenzar la codificación.
  //    - Puede ser el paso inicial del algoritmo o cualquier subproblema manejable.

  // 3. **Proceso Iterativo:**
  //    - Inicia la codificación y resuelve el subproblema elegido.
  //    - A menudo, resolver un subproblema revela el siguiente paso o subproblema a abordar.

  // 4. **Adaptación Continua:**
  //    - Si descubres nuevos subproblemas durante la resolución, adáptate y resuélvelos según sea necesario.
  //    - El proceso es iterativo y dinámico.

  // 5. **Evita la Complejidad Innecesaria:**
  //    - No intentes resolver el problema general de una sola vez; esto puede volverse abrumador.
  //    - La descomposición en subproblemas facilita el manejo de la complejidad.

  // 6. **Enfócate en la Claridad y Comprensión:**
  //    - Asegúrate de entender cada subproblema antes de pasar al siguiente.
  //    - La resolución de cada subproblema contribuye al avance hacia la solución general.

  // Este enfoque de "divide y conquistar" facilita la gestión de problemas complejos y contribuye a un proceso de resolución más estructurado y comprensible.

}
{//Resolviendo Fizz Buzz:

  // Entendiendo el Problema:
  // - Crear un programa que imprima números del 1 al número ingresado por el usuario.
  // - Para múltiplos de 3, imprimir "Fizz".
  // - Para múltiplos de 5, imprimir "Buzz".
  // - Para múltiplos de 3 y 5, imprimir "FizzBuzz".

  // Plan:
  // 1. Obtener la entrada del usuario usando `prompt`.
  // 2. Utilizar un bucle `for` para iterar desde 1 hasta el número ingresado.
  // 3. En cada iteración, verificar si el número es divisible por 3, 5 o ambos.
  // 4. Imprimir "Fizz", "Buzz", "FizzBuzz" o el número según la condición.

  // Pseudocódigo:
  let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

  for (let i = 1; i <= answer; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}