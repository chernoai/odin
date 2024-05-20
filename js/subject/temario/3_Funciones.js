{/*2.*/{// Valores de Retorno y Uso de return

  // Valores de Retorno:
  // Los valores de retorno son los valores que una función devuelve cuando se completa su ejecución.
  // Se utilizan para obtener resultados de funciones y pueden ser asignados a variables para su posterior uso.

  // Ejemplo de valores de retorno:
  var myText = "I am a string";
  var newString = myText.replace("string", "sausage");
  // La función replace() devuelve una nueva cadena con la sustitución realizada.

  // Creación de funciones con retorno:
  // Para que una función personalizada devuelva un valor, se utiliza la palabra clave return.

  // Ejemplo de función con retorno:
  function squared(num) {
    return num * num;
  }

  // Ejemplo de función con retorno que calcula el factorial:
  function factorial(num) {
    var result = num;
    while (num > 1) {
      result *= num - 1;
      num--;
    }
    return result;
  }

  // Uso de valores de retorno en funciones personalizadas:
  // Los valores devueltos por funciones pueden ser utilizados en cálculos posteriores o asignados a variables.

  // Ejemplo de uso de valores de retorno:
  var num = 5;
  var squareResult = squared(num);
  var factorialResult = factorial(num);

  // Evento de cambio en una entrada de texto:
  // Se crea un evento que imprime resultados de funciones según el valor ingresado en una entrada de texto.

  // Ejemplo de evento de cambio:
  input.addEventListener("change", () => {
    const num = parseFloat(input.value);
    if (isNaN(num)) {
      para.textContent = "¡Debes ingresar un número!";
    } else {
      para.textContent = `${num} al cuadrado es ${squared(num)}. `;
      para.textContent += `${num} al cubo es ${cubed(num)}. `;
      para.textContent += `${num} factorial es ${factorial(num)}. `;
    }
  });
}
}
{/*3.*/ {// Parámetros y Argumentos en Funciones

  // En JavaScript, los parámetros son los elementos enumerados entre paréntesis en la declaración de función.
  // Los argumentos son los valores reales que se pasan a la función al llamarla.

  // Ejemplo de función con parámetro:
  function favoriteAnimal(animal) {
    return animal + " is my favorite animal!";
  }

  // Llamada a la función con argumento:
  console.log(favoriteAnimal('Goat'));

  // Explicación:
  // - El parámetro de la función es 'animal'.
  // - Al llamar la función con 'Goat' como argumento, estamos asignando el valor 'Goat' al parámetro 'animal'.
  // - La función devuelve la cadena 'Goat is my favorite animal!', que se imprime en la consola.

  // Nota: Los parámetros son marcadores de posición, y los argumentos son los valores reales que ocupan esos lugares.

  // Experimentación:
  // Puedes cambiar el argumento ('Goat') por cualquier otro animal al llamar la función.
  // Modificar el nombre del parámetro en la declaración y el cuerpo de la función para ver cómo afecta al resultado.
  const favoriteFood = (food) => food + "is my fvorite animal";


  console.log(favoriteFood("Kebab"))
  // Fin del resumen.
}
}
{/*4.*/{// Funciones en JavaScript

  // Las funciones son bloques de construcción esenciales en un programa.
  // Permiten encapsular y reutilizar código, evitando la repetición.

  // Ejemplos de funciones integradas:
  // - console.log(message): Muestra un cuadro de alerta con el mensaje proporcionado.
  // - prompt(message, default): Muestra un cuadro de diálogo de entrada con un mensaje y un valor predeterminado.
  // - confirm(question): Muestra un cuadro de confirmación con una pregunta y botones de aceptar y cancelar.

  // Ejemplo de creación de una función propia:
  function mostrarMensaje(mensaje) {
    console.log("Mensaje: " + mensaje);
  }

  // Llamada a la función creada:
  mostrarMensaje("¡Hola, mundo!");

  // Explicación:
  // - Definimos una función llamada mostrarMensaje que toma un parámetro 'mensaje'.
  // - La función imprime en la consola un mensaje concatenado con la cadena "Mensaje: ".
  // - Luego, llamamos a la función mostrarMensaje con el argumento "¡Hola, mundo!".

  // Las funciones permiten modularizar el código y facilitan la mantenibilidad del programa.
}
  {// Declaración de Función en JavaScript

    // La declaración de función se utiliza para crear funciones en JavaScript.

    // Sintaxis de la declaración de función:
    function nombre(parametro1, parametro2, ...parametroN) {
      // cuerpo de la función
    }
    nombre()
    // Ejemplo de declaración de función:
    function showMessage() {
      console.log('Hello everyone!');
    }

    // Llamada a la función:
    showMessage(); // Llama y ejecuta el código de la función, mostrando el mensaje.

    // Propósito principal de las funciones:
    // Evitar la duplicación de código al encapsular tareas específicas en funciones.
    // Modificar el código en un solo lugar (en la función) para afectar todos los llamados.
  }
  {// Variables en JavaScript - Local, Externa y Global

    // Variables Locales:
    // - Declaradas dentro de una función, solo son visibles dentro de esa función.
    // - Evitan colisiones de nombres con variables externas o globales.

    function showMessage() {
      let message = "Hello, I'm JavaScript!"; // Variable local
      console.log(message);
    }

    showMessage(); // Hello, I'm JavaScript!

    // Intentar acceder a la variable local fuera de la función resultará en un error.
    console.log(message); //! Error! La variable es local a la función.

    // Variables Externas:
    // - Una función puede acceder y modificar variables externas.

    let userName = 'John';

    function showMessage() {
      let message = 'Hello, ' + userName; // Accede a la variable externa
      console.log(message);
    }

    showMessage(); // Hello, John

    // Modificar la variable externa desde la función.
    function showMessage() {
      userName = "Bob"; // Modifica la variable externa
      let message = 'Hello, ' + userName;
      console.log(message);
    }

    console.log(userName); // John antes de llamar a la función
    showMessage();
    console.log(userName); // Bob, el valor fue modificado por la función

    // Variables Globales:
    // - Declaradas fuera de cualquier función, son globales y visibles desde cualquier función.

    // Es una buena práctica minimizar el uso de variables globales.
  }
  {// Parámetros y Argumentos en JavaScript

    // Parámetros y Argumentos:
    // - Podemos pasar datos arbitrarios a funciones usando parámetros.
    // - Un parámetro es una variable en la declaración de función.
    // - Un argumento es el valor pasado a la función durante su llamada.

    // Ejemplo con dos parámetros: from y text
    function showMessage(from, text) {
      console.log(from + ': ' + text);
    }

    // Llamada a la función con argumentos
    showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
    showMessage('Ann', "What's up?"); // Ann: What's up? (**)

    // Cambio local en la función no afecta la variable externa
    function showMessage(from, text) {
      from = '*' + from + '*'; // Modifica "from" localmente
      console.log(from + ': ' + text);
    }

    let from = "Ann";

    showMessage(from, "Hello"); // *Ann*: Hello
    console.log(from); // Ann

    // Términos:
    // - Parámetro: Variable en la declaración de función.
    // - Argumento: Valor pasado a la función durante la llamada.
  }
  {// Valores Predeterminados en Parámetros de Funciones en JavaScript

    // Si no se proporciona un argumento a una función, el valor correspondiente se convierte en undefined.
    // Podemos especificar un valor predeterminado para un parámetro usando la sintaxis de igualdad (=).
    // El valor predeterminado se utiliza si el parámetro se omite o es estrictamente igual a undefined.

    // Ejemplo con valor predeterminado para el parámetro 'text'
    function showMessage(from, text = "no text given") {
      console.log(from + ": " + text);
    }

    showMessage("Ann"); // Ann: no text given

    // Ejemplo con llamada a función para el valor predeterminado
    function showMessage(from, text = anotherFunction()) {
      // anotherFunction() solo se ejecuta si 'text' está ausente.
      // Su resultado se convierte en el valor de 'text'.
    }

    // Evaluación de parámetros predeterminados:
    // - En JavaScript, un parámetro predeterminado se evalúa cada vez que se llama a la función sin el parámetro respectivo.

    // Formas antiguas de especificar parámetros predeterminados:
    // - Verificación explícita de undefined o uso del operador ||.

    // Parámetros predeterminados alternativos:
    // - Podemos asignar valores predeterminados después de la declaración de la función usando verificaciones o el operador ||.
    // - Los motores modernos admiten el operador coalescente nulo ??, útil cuando se desean considerar "normales" algunos valores falsos.
  }
  {// Devolver un Valor en Funciones en JavaScript

    // Una función puede devolver un valor al código de llamada como resultado mediante la directiva return.
    // La directiva return puede estar en cualquier lugar de la función. Cuando se alcanza, la función se detiene y devuelve el valor al código de llamada.
    // Puede haber múltiples apariciones de return en una sola función.
    // Es posible utilizar return sin un valor, lo que hace que la función salga inmediatamente.

    // Ejemplo de función que suma dos valores y devuelve el resultado
    function sum(a, b) {
      return a + b;
    }

    let result = sum(1, 2);
    console.log(result); // 3

    // Ejemplo de función que comprueba la edad y devuelve un valor booleano o realiza una confirmación
    function checkAge(age) {
      if (age >= 18) {
        return true;
      } else {
        return confirm('Do you have permission from your parents?');
      }
    }

    let age = prompt('How old are you?', 18);

    if (checkAge(age)) {
      console.log('Access granted');
    } else {
      console.log('Access denied');
    }

    // Ejemplo de función con return vacío para salir inmediatamente
    function showMovie(age) {
      if (!checkAge(age)) {
        return;
      }

      console.log("Showing you the movie"); // (*)
      // ...
    }

    // Una función sin return o con return vacío es equivalente a devolver undefined.

    // Nunca agregar una nueva línea entre return y el valor, ya que JavaScript asumirá un punto y coma después de return.

    // Ejemplo correcto de retorno de expresión en varias líneas
    return (
      some + long + expression
      + or +
      whatever * f(a) + f(b)
    );
  }
  {// Nombrar una Función en JavaScript

    // Las funciones en JavaScript son acciones y, por lo tanto, su nombre suele ser un verbo que describe la acción de la función.
    // Es una práctica común utilizar un prefijo verbal que indica vagamente la acción de la función, como "get...", "calc...", "create...", "check...", etc.
    // Por ejemplo: showMessage(), getAge(), calcSum(), createForm(), checkPermission().
    // Estos prefijos ayudan a comprender la función y el tipo de trabajo que realiza.

    // Cada función debe hacer exactamente lo que sugiere su nombre, nada más.
    // Es recomendable dividir dos acciones independientes en dos funciones separadas, incluso si generalmente se llaman juntas.

    // Ejemplos de malas prácticas:
    // - getAge: No debería mostrar una alerta, solo debería devolver la edad.
    // - createForm: No debería modificar el documento añadiendo un formulario, solo debería crearlo y devolverlo.
    // - checkPermission: No debería mostrar el mensaje de "access granted/denied", solo debería realizar la verificación y devolver el resultado.

    // Es crucial tener un acuerdo dentro del equipo sobre el significado de los prefijos utilizados y asegurarse de que todas las funciones con el mismo prefijo obedezcan las reglas establecidas.
    // Los nombres de funciones generalmente deben ser concisos y descriptivos, evitando excepciones como nombres ultracortos, que son utilizados en situaciones particulares.
  }
  {// Funciones y Comentarios en JavaScript

    // Las funciones deben ser breves y realizar exactamente una tarea. Si una función es grande, puede ser beneficioso dividirla en funciones más pequeñas.
    // Una función separada no solo facilita las pruebas y la depuración, sino que su existencia misma actúa como un comentario.
    // Es preferible tener funciones autodescriptivas, donde el nombre de la función refleje claramente la acción que realiza.

    // Ejemplo comparativo de dos funciones showPrimes(n):
    // - La primera variante utiliza una etiqueta y tiene el código directamente en la función.
    // - La segunda variante utiliza una función adicional isPrime(n) para probar la primalidad.

    // Primera variante:
    function showPrimes(n) {
      nextPrime: for (let i = 2; i < n; i++) {
        for (let j = 2; j < i; j++) {
          if (i % j == 0) continue nextPrime;
        }
        console.log(i); // a prime
      }
    }

    // Segunda variante:
    function showPrimes(n) {
      for (let i = 2; i < n; i++) {
        if (!isPrime(i)) continue;
        console.log(i);  // a prime
      }
    }

    function isPrime(n) {
      for (let i = 2; i < n; i++) {
        if (n % i == 0) return false;
      }
      return true;
    }

    // La segunda variante es más fácil de entender ya que utiliza una función adicional que prueba la primalidad (isPrime),
    // haciéndola más autodescriptiva y estructurando el código de manera legible.
  }
  {// Funciones Anónimas y Funciones de Flecha

    {// Funciones Anónimas:
      // Puedes crear funciones sin nombre, llamadas funciones anónimas o expresiones de función, útiles al pasar funciones como parámetros.

      // Ejemplo de función anónima:
      (function () {
        console.log("hello");
      });

      // Ejemplo de función anónima utilizada como parámetro en addEventListener:
      textBox.addEventListener("keydown", function (event) {
        console.log(`You pressed "${event.key}".`);
      });
    }

    {// Funciones de Flecha:
      // Una forma más concisa de escribir funciones anónimas, especialmente útiles para funciones cortas.

      // Ejemplo de función de flecha:
      const saludar = (name) => {
        return `Hola ${name}`;
      }

      console.log(saludar("Cherno"));
      // Omitir paréntesis si la función tiene un solo parámetro:
      const despedida = name => {
        return `Adios ${name}`;
      }
      console.log(despedida("Cherno"));
      // Return implícito si la función tiene una sola línea de código:
      const comoEstas = name => `Como estas? ${name}`;

      console.log(comoEstas("Cherno"));
      // Ejemplo completo de aplicación con funciones de flecha:
      const textBox = document.querySelector("#textBox");
      const output = document.querySelector("#output");

      textBox.addEventListener("keydown", (event) => {
        output.textContent = `You pressed "${event.key}".`;
      });
    }
  }
}
{/*5.*/{// Expresiones de Funciones en JavaScript

  // En JavaScript, una función no es una "estructura mágica del lenguaje", sino un tipo especial de valor.
  // La sintaxis para crear una función se llama "Declaración de Función".
  function sayHi() {
    console.log("Hello");
  }

  // Existe otra sintaxis llamada "Expresión de Función" que nos permite crear una función en medio de cualquier expresión.
  let sayHi = function () {
    console.log("Hello");
  };

  // Aquí, la variable "sayHi" obtiene el valor de una nueva función creada como una expresión de función.
}
  {// Funciones como Valores en JavaScript

    // Una función es un valor en JavaScript. Puede almacenarse en variables y tratarse como cualquier otro valor.
    // Ejemplo con Declaración de Función:
    function sayHi() {
      console.log("Hello");
    }

    // Podemos imprimir el valor de la función usando console.log, pero no ejecuta la función.
    console.log(sayHi); // Muestra el código de la función

    // Ejemplo de copiar una función a otra variable:
    let func = sayHi; // Copiamos la función a otra variable
    func();          // Podemos llamar la copia (func) y la original (sayHi)

    // También podríamos haber utilizado una expresión de función para declarar sayHi:
    let sayHi = function () {
      console.log("Hello");
    };

    // Nota: El punto y coma (;) al final de la expresión de función es parte de la sintaxis de asignación, no de la función en sí.
  }
  {// Funciones Callback

    // Ejemplo de función ask con tres parámetros (question, yes, no) que realiza una acción dependiendo de la respuesta del usuario.
    function ask(question, yes, no) {
      if (confirm(question)) yes();
      else no();
    }

    // Ejemplo de funciones showOk y showCancel que se utilizan como devoluciones de llamada (callbacks) en la función ask.
    function showOk() {
      console.log("You agreed.");
    }

    function showCancel() {
      console.log("You canceled the execution.");
    }

    // Uso de la función ask con las devoluciones de llamada showOk y showCancel como argumentos.
    ask("Do you agree?", showOk, showCancel);

    // Alternativa utilizando expresiones de funciones para declarar las devoluciones de llamada directamente en la llamada a ask.
    ask(
      "Do you agree?",
      function () {
        console.log("You agreed.");
      },
      function () {
        console.log("You canceled the execution.");
      }
    );
  }
  {// Expresión de función frente a declaración de función

    // Declaración de función: Función declarada como una declaración separada en el flujo de código principal.
    function sum(a, b) {
      return a + b;
    }

    // Expresión de función: Función creada dentro de una expresión o dentro de otra construcción de sintaxis.
    let sum = function (a, b) {
      return a + b;
    };

    // Declaración de función con acceso en todo el script.
    sayHi("John");

    function sayHi(name) {
      alert(`Hello, ${name}`);
    }

    // Expresión de función con acceso solo después de la asignación.
    sayHi("John"); // error!

    let sayHi = function (name) {
      alert(`Hello, ${name}`);
    };

    // Declaración de función con alcance de bloque en modo estricto.
    let age = prompt("What is your age?", 18);

    if (age < 18) {
      welcome(); // \   (runs)
      function welcome() {
        alert("Hello!"); //  |  Function Declaration is available everywhere in the block where it's declared
      } // /   (runs)
      welcome();
    } else {
      function welcome() {
        alert("Greetings!");
      }
    }

    // Expresión de función para tener acceso fuera del bloque if en modo estricto.
    let age2 = prompt("What is your age?", 18);

    let welcome2;

    if (age2 < 18) {
      welcome2 = function () {
        alert("Hello!");
      };
    } else {
      welcome2 = function () {
        alert("Greetings!");
      };
    }

    welcome2();

    // Simplificación con operador de signo de interrogación ?.
    let age3 = prompt("What is your age?", 18);

    let welcome3 = (age3 < 18) ?
      function () { alert("Hello!"); } :
      function () { alert("Greetings!"); };

    welcome3();
  }
}
{/*6.*/{// Funciones de flecha, lo básico

  // Función de flecha simple con dos argumentos.
  let sum = (a, b) => a + b;
  alert(sum(1, 2)); // 3

  // Función de flecha para doblar un número con un solo argumento.
  let double = n => n * 2;
  alert(double(3)); // 6

  // Función de flecha sin argumentos.
  let sayHi = () => alert("Hello!");
  sayHi();

  // Creación dinámica de una función de flecha con base en la edad.
  let age = prompt("What is your age?", 18);
  let welcome = (age < 18) ?
    () => alert('Hello!') :
    () => alert("Greetings!");
  welcome();

  // Función de flecha multilínea con declaración y retorno explícitos.
  let sum2 = (a, b) => {
    let result = a + b;
    return result;
  };
  alert(sum2(1, 2)); // 3
}
}
{/*7.*/{// JavaScript Call Stack

  // Unas call stack rastrea el lugar actual en el código que llama a múltiples funciones.

  // El motor JavaScript utiliza las call stack para gestionar contextos de ejecución:
  // - Contexto de ejecución global.
  // - Contextos de ejecución de funciones.

  // Las call stack sigue el principio de último en entrar, primero en salir (LIFO).

  // Al ejecutar un script, se crea un contexto de ejecución global y se coloca en la parte superior de las call stack.

  // Cada vez que se llama a una función, se crea un contexto de ejecución de función, se coloca en la parte superior de las call stack y se ejecuta.

  // Si una función llama a otra función, se crea un nuevo contexto de ejecución de función para la función llamada y se coloca en la parte superior de las call stack.

  // Cuando se completa la función actual, se saca de las call stack y se reanuda la ejecución donde se dejó.

  // El script se detendrá cuando las call stack esté vacía.
}
  {// Ejemplos de call stack en JavaScript

    // Definición de funciones
    function add(a, b) {
      return a + b;
    }

    function average(a, b) {
      return add(a, b) / 2;
    }

    // Llamada a la función average
    let x = average(10, 20);

    // Call Stack:
    // 1. Contexto de ejecución global (main() o global())

    // 2. Creación del contexto de ejecución para average(10, 20)
    // Call Stack: average(10, 20)

    // 3. Creación del contexto de ejecución para add()
    // Call Stack: average(10, 20) -> add()

    // 4. Ejecución de add() y eliminación de su contexto
    // Call Stack: average(10, 20)

    // 5. Ejecución de average() y eliminación de su contexto
    // Call Stack: (vacía)

    // Desbordamiento de pila (ejemplo recursivo sin condición de salida)
    // function fn() {
    //    fn();
    // }
  }
}

