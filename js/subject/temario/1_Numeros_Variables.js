{// VARIABLES
  {//AMBITO LET Y CONST
    // En JavaScript, let y const limitan el alcance de las variables al bloque donde se crean, como en llaves {}.

    // Ejemplo de ámbito con let y const
    {
      let variableLet = 'Hola';
      const variableConst = 'Mundo';
      console.log(variableLet); // Hola
      console.log(variableConst); // Mundo
    }

    // La siguiente línea daría un error porque variableLet y variableConst no están definidas fuera del bloque.
    // console.log(variableLet); // Error: variableLet is not defined
    // console.log(variableConst); // Error: variableConst is not defined
  }
  {//REASIGNACION LET E INMUTIBILIDAD CONST
    // let permite cambiar valores, ofreciendo flexibilidad. const crea constantes con valores inmutables para evitar modificaciones accidentales.

    // Ejemplo de reasignación con let
    let numero = 5;
    console.log(numero); // 5
    numero = 10;
    console.log(numero); // 10

    // Ejemplo de inmutabilidad con const
    const pi = 3.14;
    // La siguiente línea daría un error porque no se puede reasignar un valor a una constante.
    // pi = 3.1416; // Error: Assignment to constant variable.
  }
  {// IZADO (HOSTING)
    // let y const no están disponibles antes de su declaración, a diferencia de var, evitando comportamientos confusos y previniendo errores.

    // Ejemplo de izado (hoisting)
    console.log(variableHoisted); // undefined
    var variableHoisted = 'Izado';
    // Con let y const, este código daría un error porque no se izan.
    // console.log(variableHoisted); // Error: variableHoisted is not defined
  }
  {//REDECLARACION
    // Con let y const en JavaScript, no puedes redeclarar una variable con el mismo nombre en el mismo ámbito, adiferencia de var., lo que previene confusiones y errores en el código. 

    // Ejemplo de error por redeclaración con let
    let apellido = 'Pérez';
    // let apellido = 'Gómez'; // Esto generaría un error porque no se permite la redeclaración.
    console.log(apellido);

    // Ejemplo de redeclaración con var (no recomendado)
    var nombre = 'Juan';
    var nombre = 'Carlos'; // Esto no generará un error, pero puede causar confusiones.
    console.log(nombre); // Carlos


  }
  {//Denominación de Variables en JavaScript
    {// Reglas para nombres de variables en JavaScript:
      // - Deben contener solo letras, dígitos, $ y _.
      // - El primer carácter no puede ser un dígito.
      // - Se utiliza camelCase para múltiples palabras, con la primera letra en minúscula y las siguientes en mayúscula.
      // Reglas para nombres de variables
      let userName;
      let test123;

      // CamelCase para múltiples palabras
      let myVeryLongName;

      // Símbolos permitidos en nombres
      let $ = 1;
      let _ = 2;
    }
    {// Importancia del caso en JavaScript:
      // - "apple" y "APPLE" se consideran diferentes.
      // - Se recomienda seguir la convención internacional de utilizar el inglés en los nombres de variables, incluso si se permiten letras no latinas.
      let apple = 'manzana';
      let APPLE = 'MANZANA';

      // Letras no latinas
      let имя = 'Nombre'; // Cirílico
      let 我 = 'Yo'; // Chino
    }
    {// Palabras reservadas en JavaScript:
      // - Algunas palabras como "let", "class", "return" y "function" están reservadas.
      // - No se pueden usar como nombres de variables.
      // - Intentar asignarles un valor generará un error.

      // Ejemplos de errores al intentar usar palabras reservadas como nombres de variables:
      // let let = 5; // Error: SyntaxError: Unexpected token 'let'
      // let class = 'Clase'; // Error: SyntaxError: Unexpected token 'class'
      // let return = 10; // Error: SyntaxError: Unexpected token 'return'
      // let function = 'Funcion'; // Error: SyntaxError: Unexpected token 'function'
    }
    {// Mala práctica sin "use strict":
      // - En el pasado, era posible crear variables sin usar la palabra clave "let".
      // - Esto es considerado una mala práctica.
      // - En modo estricto ("use strict"), este enfoque generaría un error.
      // - Es preferible definir las variables antes de usarlas para evitar problemas y seguir prácticas recomendadas.

      // Ejemplo de mala práctica sin "use strict":
      num = 5;
      console.log(num); // 5 (funciona, pero es una mala práctica)
    }
  }
}
{//NUMEROS 
  {// Términos: "unario", "binario", "operando"

    // Un operando es a lo que se aplican los operadores. Por ejemplo, en la multiplicación de 5 * 2, hay dos operandos: 5 (operando izquierdo) y 2 (operando derecho).

    // Un operador es unario si tiene un solo operando. Por ejemplo, la negación unaria - invierte el signo de un número.

    let x = 1;
    x = -x;
    console.log(x); // -1, la negación unaria fue aplicada

    // Un operador es binario si tiene dos operandos. El signo negativo también existe en forma binaria.

    let n = 1, y = 3;
    console.log(y - n); // 2, la resta binaria resta el valor de n de y
  }
  {// Matemáticas

    // Operaciones matemáticas admitidas:
    // Suma +, resta -, multiplicación *, división /, Resto %, Exponentiation **.

    // Resto %
    // El operador % devuelve el resto de la división entera de a por b.
    console.log(5 % 2); // 1, el resto de 5 dividido por 2
    console.log(8 % 3); // 2, el resto de 8 dividido por 3
    console.log(8 % 4); // 0, el resto de 8 dividido por 4

    // Exponentiation **
    // El operador ** eleva a la potencia de b.
    console.log(2 ** 2); // 2² = 4
    console.log(2 ** 3); // 2³ = 8
    console.log(2 ** 4); // 2⁴ = 16

    // El operador de exponenciación también funciona para números no enteros.
    // Por ejemplo, una raíz cuadrada es una exponenciación por ½:
    console.log(4 ** (1 / 2)); // 2 (la potencia de 1/2 es igual a la raíz cuadrada)
    console.log(8 ** (1 / 3)); // 2 (la potencia de 1/3 es igual a la raíz cúbica)
  }
  {// Concatenación de cadenas con binario +

    // El operador + suma números, pero si se aplica a cadenas, las concatena.
    let s = "my" + "string";
    console.log(s); // mystring

    // Si uno de los operandos es una cadena, el otro se convierte en cadena.
    console.log('1' + 2); // "12"
    console.log(2 + '1'); // "21"

    // Ejemplos más complejos:
    console.log(2 + 2 + '1'); // "41" y no "221"
    // La suma se realiza primero y luego se concatena la cadena.

    console.log('1' + 2 + 2); // "122" y no "14"
    // El primer operando es cadena, por lo que los otros operandos se tratan como cadenas.
  }
  {// Conversión numérica, unaria +

    // La forma unaria del operador más + convierte el operando en un número si no es un número.
    let x = 1;
    console.log(+x); // 1

    let y = -2;
    console.log(+y); // -2

    // Convierte no números
    console.log(+true); // 1
    console.log(+"");   // 0

    // Conversión de cadenas a números
    let apples = "2";
    let oranges = "3";
    console.log(apples + oranges); // "23", el plus binario concatena cadenas
    console.log(+apples + +oranges); // 5
    // Otra variante
    // console.log( Number(apples) + Number(oranges) ); // 5
  }
  {// Prioridad del operador

    // En una expresión con múltiples operadores, el orden de ejecución se determina por la precedencia.

    // La multiplicación tiene mayor prioridad que la suma, por lo que en 1 + 2 * 2, la multiplicación se realiza antes que la suma.

    // Los paréntesis anulan cualquier precedencia y permiten cambiar el orden predeterminado.

    // Por ejemplo, (1 + 2) * 2 garantiza que la suma se realice antes de la multiplicación.

    // JavaScript tiene muchos operadores con diferentes niveles de precedencia.

    // Un extracto de la tabla de precedencia (los operadores unarios tienen prioridad más alta que los binarios):

    /*
    Precedencia  Nombre               Signo
    ...          ...                  ...
    14           unario más           +
    14           negación unaria      -
    13           exponentiation       **
    12           multiplicación        *
    12           división             /
    11           suma                 +
    11           sustracción          -
    ...          ...                  ...
    2            asignación           =
    ...          ...                  ...
    */

    // En el ejemplo "+apples + +oranges", el operador más unario tiene una prioridad mayor que el más binario, por lo que se ejecuta antes.

  }
  {// Asignación

    // Una asignación (=) también es un operador con baja prioridad (2).

    // Ejemplo de asignación
    let x = 2 * 2 + 1;
    console.log(x); // 5

    // Asignación devuelve un valor
    // Todos los operadores en JavaScript devuelven un valor, incluida la asignación.
    // El resultado de la expresión (a = b + 1) es el valor asignado a "a" (en este caso, 3).

    let a = 1;
    let b = 2;
    let c = 3 - (a = b + 1);

    console.log(a); // 3
    console.log(c); // 0

    // Encadenamiento de tareas
    // Se pueden encadenar tareas, evaluándose de derecha a izquierda.

    let d, e, f;
    d = e = f = 2 + 2;

    console.log(d); // 4
    console.log(e); // 4
    console.log(f); // 4

    // Es más legible dividir el código en varias líneas para mejorar la claridad.
    f = 2 + 2;
    e = f;
    d = f;
  }
  {// Modificar en el lugar

    // A menudo, queremos aplicar un operador a una variable y almacenar el nuevo resultado en la misma variable.

    let n = 2;
    n = n + 5;
    n = n * 2;

    // Esta notación se puede acortar utilizando los operadores += y *=:

    let n2 = 2;
    n2 += 5; // ahora n2 = 7 (equivalente a n2 = n2 + 5)
    n2 *= 2; // ahora n2 = 14 (equivalente a n2 = n2 * 2)

    console.log(n2); // 14

    // Existen operadores cortos de "modificación y asignación" para todos los operadores aritméticos y bit a bit: /=, -=, etc.

    // Estos operadores tienen la misma prioridad que una asignación normal, por lo que se ejecutan después de la mayoría de los demás cálculos:

    let y = 2;
    y *= 3 + 5; // la parte derecha se evalúa primero, equivalente a y *= 8

    console.log(y); // 16
  }
  {// Incremento/disminución

    // Aumentar o disminuir un número en uno es una operación común.

    // El incremento ++ aumenta una variable en 1:
    let counter1 = 2;
    counter1++;        // lo mismo que counter1 = counter1 + 1, pero más corto
    console.log(counter1); // 3

    // Decremento -- disminuye una variable en 1:
    let counter2 = 2;
    counter2--;        // lo mismo que counter2 = counter2 - 1, pero más corto
    console.log(counter2); // 1

    // Importante:
    // El incremento/disminución solo se puede aplicar a variables. Intentar usarlo en un valor como 5++ dará un error.

    // Los operadores ++ y -- se pueden colocar antes o después de una variable.

    // Ambas declaraciones hacen lo mismo: aumentar counter2 en 1.
    // ¿Hay alguna diferencia? Sí, pero solo es visible al usar el valor devuelto de ++/--.

    // La forma de prefijo (++counter3) devuelve el nuevo valor, mientras que la forma de sufijo (counter3++) devuelve el valor anterior.

    // Ejemplo de forma de prefijo:
    let counter3 = 1;
    let a = ++counter3; // aumenta counter3 y devuelve el nuevo valor
    console.log(a); // 2

    // Ejemplo de forma de sufijo:
    let counter4 = 1;
    let b = counter4++; //En este ejemplo, counter4++ devuelve el valor original de counter4 (1) antes de aumentarlo en 1. Posteriormente, el valor aumentado se asigna a la variable b
    console.log(b); // 1

    // Si no se asigna a otra variable el resultado del incremento/decremento, no hay diferencia en qué forma usar:
    let counter5 = 0;
    counter5++;
    ++counter5;
    console.log(counter5); // 2, las líneas anteriores hicieron lo mismo

    // Si queremos aumentar un valor y usar inmediatamente el resultado, necesitamos la forma de prefijo:
    let counter6 = 0;
    console.log(++counter6); // 1

    // Si queremos incrementar un valor pero usar su valor anterior, necesitamos la forma de sufijo:
    let counter7 = 0;
    console.log(counter7++); // 0

    // Incremento/decremento entre otros operadores
    // Se pueden utilizar dentro de expresiones, su precedencia es mayor que la mayoría de las otras operaciones aritméticas.

    let counter8 = 1;
    console.log(2 * ++counter8); // 4

    // Comparar con:
    let counter9 = 1;
    console.log(2 * counter9++); // 2, porque counter9++ devuelve el valor "antiguo"
    // Aunque técnicamente está bien, esta notación a menudo hace que el código sea menos legible.
    // Aconsejamos un estilo de "una línea, una acción".
    let counter10 = 1;
    console.log(2 * counter10);
    counter10++;

  }
  {// Operadores bit a bit

    // Los operadores bit a bit tratan los argumentos como números enteros de 32 bits y trabajan en el nivel de su representación binaria.

    // Estos operadores no son específicos de JavaScript y son compatibles con la mayoría de los lenguajes de programación.

    // La lista de operadores:

    // Operador AND (&): Realiza una operación bit a bit y devuelve 1 en el bit resultante si ambos bits son 1.
    let a = 5;    // 0101 en binario
    let b = 3;    // 0011 en binario
    let resultadoAnd = a & b;
    console.log(resultadoAnd);  // Salida: 1 (0001 en binario)

    // Operador OR (|): Realiza una operación bit a bit y devuelve 1 en el bit resultante si al menos uno de los bits es 1.
    let resultadoOr = a | b;
    console.log(resultadoOr);  // Salida: 7 (0111 en binario)

    // Operador XOR (^): Realiza una operación bit a bit y devuelve 1 en el bit resultante si los bits son diferentes.
    let resultadoXor = a ^ b;
    console.log(resultadoXor);  // Salida: 6 (0110 en binario)

    // Operador NOT (~): Realiza la negación bit a bit, invirtiendo todos los bits.
    let resultadoNot = ~a;
    console.log(resultadoNot);  // Salida: -6 (complemento a dos de 0101 en binario)

    // Desplazamiento a la izquierda (<<): Desplaza los bits a la izquierda, rellenando con ceros en el extremo derecho.
    let resultadoShiftLeft = a << 1;
    console.log(resultadoShiftLeft);  // Salida: 10 (1010 en binario)

    // Desplazamiento a la derecha (>>): Desplaza los bits a la derecha, extendiendo el bit más a la izquierda (copiando el bit de signo en JavaScript).
    let resultadoShiftRight = a >> 1;
    console.log(resultadoShiftRight);  // Salida: 2 (0010 en binario)

    // Desplazamiento a la derecha de llenado cero (>>>): Desplaza los bits a la derecha, rellenando con ceros en el extremo izquierdo.
    let resultadoShiftRightZeroFill = a >>> 1;
    console.log(resultadoShiftRightZeroFill);  // Salida: 2 (0010 en binario)



    // Estos operadores se utilizan raramente, principalmente en áreas especializadas como criptografía. No son comunes en el desarrollo web.

    // Puedes leer más en el capítulo "Operadores bit a bit" en MDN cuando sea necesario.
  }
  {// Operador de coma
    let a;
    let b;
    let c;
    let d = 1;   // El operador de coma , es inusual y se utiliza para evaluar varias expresiones, dividiéndolas con una coma. Se evalúan todas, pero solo se devuelve el resultado de la última.

    // Ejemplo:
    let e = (1 + 2, 3 + 4);

    console.log(e); // 7 (el resultado de 3 + 4)

    // La coma tiene una precedencia muy baja.
    // Tenga en cuenta que la coma tiene una precedencia muy baja, inferior a =, por lo que los paréntesis son importantes en el ejemplo anterior.

    // Sin paréntesis:
    // a = 1 + 2, 3 + 4 evalúa + primero, sumando los números a = 3, 7, luego el operador de asignación = asigna a = 3 y el resto se ignora. Es como (a = 1 + 2), 3 + 4.

    // ¿Por qué necesitamos un operador que descarte todo excepto la última expresión?
    // A veces, se usa en construcciones más complejas para poner varias acciones en una línea.

    // Ejemplo:
    // Tres operaciones en una línea
    for (a = 1, b = 3, c = a * b; a < 10; a++) {
      console.log("repes");
    }
    // Estos trucos se utilizan en muchos marcos de JavaScript, pero normalmente no mejoran la legibilidad del código.
  }
}
{//EJERCICIOS
  {//VARIABLES
    const nombre = "Cherno";
    let edad = 21;
    const PI = Math.PI
    console.log(PI);
  }
  {//NUMEROS
    //Calcula el área de un círculo dado su radio (utiliza la constante PI).
    const PI = Math.PI
    const radio = 5;

    const area = PI * 16 ** 2
    console.log(area);

    //Convierte la temperatura de Celsius a Fahrenheit. Puedes usar la fórmula: F = C * 9/5 + 32.
    const tempC = 20;
    const tempF = tempC * 9 / 5 + 32;
    console.log(tempF);

    //Crea una función que calcule el promedio de tres números dados como argumentos.
    const calcAverage = (num1, num2, num3) => {
      return (num1 + num2 + num3) / 3
    }
    console.log(calcAverage(1, 2, 3));
    //Escribe un programa que determine si un número es par o impar.
    let num = 10;
    if (num % 2 == 0) {
      console.log("Even");
    } else {
      console.log("Odd");
    }


    // Calcula el factorial de un número dado.
    function factorial(numero) {
      if (numero === 0 || numero === 1) {
        return 1;
      } else {
        let resultado = 1;
        for (let i = 2; i <= numero; i++) {
          resultado *= i;
        }
        return resultado;
      }
    }

    // Ejemplo de uso:
    let num2 = 5;
    console.log("El factorial de " + num2 + " es: " + factorial(num));

  }
}