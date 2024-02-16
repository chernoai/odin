{//PRESENTACION
  // Tipos de datos primitivos:
  // 1. number: Números de cualquier tipo, ya sea entero o de punto flotante; los enteros están limitados por ±(2^53-1).
  let exampleNumber = 42;

  // 2. bigint: Se utiliza para números enteros de longitud arbitraria.
  let bigInteger = 1234567890123456789012345678901234567890n;

  // 3. string: Representa cadenas de texto. Puede contener cero o más caracteres, sin un tipo separado para caracteres individuales.
  let exampleString = "Hola, mundo!";

  // 4. boolean: Representa valores de verdadero/falso.
  let isTrue = true;
  let isFalse = false;

  // 5. null: Representa valores desconocidos; es un tipo independiente con un único valor: null.
  let nullValue = null;

  // 6. undefined: Representa valores no asignados; es un tipo independiente con un único valor: undefined.
  let undefinedValue;

  // 7. symbol: Representa identificadores únicos.
  let uniqueSymbol = Symbol("unique");

  // Tipo de dato no primitivo:
  // 8. object: Utilizado para estructuras de datos más complejas.
  let exampleObject = { key: "value" };

  {// Tipo de dato "Número"

    // Los números en JavaScript representan números enteros y de coma flotante.

    let n = 123;
    n = 12.345;

    // Operaciones con números: multiplicación *, división /, suma +, resta -, etc.

    // Valores numéricos especiales: Infinity, -Infinity y NaN.

    // Infinity representa el infinito matemático ∞. Se obtiene como resultado de la división por cero o simplemente haciendo referencia a él directamente.
    console.log(1 / 0); // Infinity
    console.log(Infinity); // Infinity

    // NaN representa un error de cálculo y resulta de operaciones matemáticas incorrectas o indefinidas.
    console.log("not a number" / 2); // NaN

    // NaN es contagioso. Cualquier operación matemática adicional sobre NaN devuelve NaN.
    console.log(NaN + 1); // NaN
    console.log(3 * NaN); // NaN
    console.log("not a number" / 2 - 1); // NaN

    // Las operaciones matemáticas son seguras en JavaScript. No provocan errores fatales y, en el peor de los casos, resultan en NaN.

    // El tipo "número" no puede representar de forma segura valores enteros mayores que 9007199254740991 o menores que -9007199254740991.

    // BigInt es un tipo reciente que se introdujo para representar números enteros de longitud arbitraria.

    // Ejemplo de BigInt:
    const bigInt = 1234567890123456789012345678901234567890n;

    // BigInt es compatible con Firefox, Chrome, Edge y Safari, pero no con IE.
  }
  {// Tipo de dato "Cadena"

    // Una cadena en JavaScript puede estar entre comillas dobles, comillas simples o comillas invertidas.

    let str = "Hello";
    let str2 = 'Single quotes are ok too';
    let phrase = `can embed another ${str}`;

    // Comillas dobles y simples son prácticamente equivalentes en JavaScript.

    // Comillas invertidas permiten la incrustación de variables y expresiones utilizando ${...}.
    let name = "John";
    console.log(`Hello, ${name}!`); // Hello, John!
    console.log(`the result is ${1 + 2}`); // the result is 3

    // Tenga en cuenta que la incrustación de variables solo funciona con comillas invertidas.

    // No hay un tipo de "carácter" especial en JavaScript, solo existe el tipo "string".
  }
  {// Tipo de dato "Booleano"

    // El tipo booleano tiene solo dos valores: true y false.

    // Este tipo se utiliza comúnmente para almacenar valores de sí/no: true significa "sí, correcto" y false significa "no, incorrecto".

    let nameFieldChecked = true; // sí, el campo de nombre está marcado
    let ageFieldChecked = false; // no, el campo de edad no está marcado

    // Los valores booleanos también son el resultado de comparaciones.

    let isGreater = 4 > 1;
    console.log(isGreater); // true (el resultado de la comparación es "sí")

    // "null" y "undefined"

    // El valor especial null no pertenece a ninguno de los tipos descritos anteriormente. Es un tipo separado que contiene solo el valor null.

    let age = null;

    // En JavaScript, null no es una "referencia a un objeto no existente" o un "puntero nulo" como en algunos otros lenguajes. Es simplemente un valor especial que representa "nada", "vacío" o "valor desconocido".

    // El valor especial undefined también es único. Es un tipo propio, al igual que null. Su significado es "el valor no está asignado".

    let age2;

    console.log(age2); // muestra "undefined"

    // Técnicamente, también es posible asignar explícitamente undefined a una variable, pero normalmente se utiliza null para asignar un valor "vacío" o "desconocido", mientras que undefined se reserva como un valor inicial predeterminado para las cosas no asignadas.
  }
  {// El tipo de objeto es especial.

    // Todos los demás tipos se llaman "primitivos" porque sus valores solo pueden contener una única cosa (ya sea una cadena, un número o cualquier otra cosa). En cambio, los objetos se utilizan para almacenar colecciones de datos y entidades más complejas.

    // Dado que son tan importantes, los objetos merecen un tratamiento especial.

    // El tipo de symbol se utiliza para crear identificadores únicos para objetos. Tenemos que mencionarlo aquí por completitud, pero también posponer los detalles hasta que conozcamos los objetos.
  }
  {// El operador typeof

    // El operador typeof devuelve el tipo del operando. Es útil cuando queremos procesar valores de diferentes tipos de manera diferente o simplemente queremos hacer una verificación rápida.

    // Una llamada a typeof x devuelve una cadena con el nombre del tipo:

    typeof undefined // "undefined"

    typeof 0 // "number"

    typeof 10n // "bigint"

    typeof true // "boolean"

    typeof "foo" // "string"

    typeof Symbol("id") // "symbol"

    typeof Math // "object"  (1)

    typeof (null) // "object"  (2) El comportamiento de typeof es incorrecto aquí.

    typeof console.log // "function"  (3)

    // Las tres últimas líneas pueden necesitar una explicación adicional:

    // Math es un objeto incorporado que proporciona operaciones matemáticas. Lo aprenderemos en el capítulo Números. Aquí, sirve solo como un ejemplo de un objeto.
    // El resultado de typeof null es "object". Ese es un error oficialmente reconocido en typeof, proveniente de los primeros días de JavaScript y mantenido por compatibilidad. Definitivamente, null no es un objeto. Es un valor especial con un tipo propio. 
    // El resultado de typeof console.log es "function", porque console.log es una función. Estudiaremos las funciones en los próximos capítulos, donde también veremos que no hay un tipo "function" especial en JavaScript. Las funciones pertenecen al tipo de objeto. Pero typeof las trata de manera diferente, devolviendo "function". Eso también proviene de los primeros días de JavaScript. Técnicamente, tal comportamiento no es correcto, pero puede ser conveniente en la práctica.

    // La sintaxis typeof(x)
    // También puedes encontrarte con otra sintaxis: typeof(x). Es lo mismo que typeof x.

    // Para dejarlo claro: typeof es un operador, no una función. Los paréntesis aquí no forman parte de typeof. Es el tipo de paréntesis utilizado para agrupar expresiones matemáticas.

    // Por lo general, tales paréntesis contienen una expresión matemática, como (2 + 2), pero aquí solo contienen un argumento (x). Sintácticamente, permiten evitar un espacio entre el operador typeof y su argumento, y a algunas personas les gusta.

    // A algunas personas les gusta typeof(x), aunque la sintaxis typeof x es mucho más común.

  }
  {// Resumen de Tipos de Datos en JavaScript

    // Hay 8 tipos de datos básicos en JavaScript.

    // Siete tipos de datos primitivos:

    // - number para números de cualquier tipo: enteros o de punto flotante, los enteros están limitados por ±(253-1).

    // - bigint para números enteros de longitud arbitraria.

    // - string para cadenas. Una cadena puede tener cero o más caracteres, no hay un tipo de "carácter" separado.

    // - boolean para verdadero/falso.

    // - null para valores desconocidos, es un tipo independiente que tiene un único valor null.

    // - undefined para valores no asignados, es un tipo independiente que tiene un único valor undefined.

    // - symbol para identificadores únicos.

    // Y un tipo de datos no primitivo:
    // - object para estructuras de datos más complejas.

    // El operador typeof nos permite ver qué tipo está almacenado en una variable.

    // Usualmente se utiliza como typeof x, pero typeof(x) también es posible.
    // Devuelve una cadena con el nombre del tipo, como "string".
    // Para null devuelve "object" – esto es un error en el lenguaje, ya que null no es realmente un objeto.

    // En los próximos capítulos, nos centraremos en los valores primitivos y, una vez que estemos familiarizados con ellos, pasaremos a los objetos.
  }
}
{//STRINGS
  {// Creando una cadena en JavaScript

    // Para comenzar, ingresa las siguientes líneas:

    var string = "La revolución no será televisada.";
    string;

    // Al igual que con los números, declaramos una variable, iniciándola con el valor de una cadena, y luego retornamos dicho valor.
    // La única diferencia es que al escribir una cadena, necesitas envolverla con comillas.
    // Si no lo haces, u olvidas una de las comillas, obtendrás un error. Intenta ingresando las siguientes líneas:

    //   var malString = Esto es una prueba;
    //   var malString = 'Esto es una prueba;
    //   var malString = Esto es una prueba';

    // Estas líneas no funcionan porque el texto sin comillas alrededor es tomado como nombre de una variable, propiedad, palabra reservada, o algo similar.
    // Si el navegador no las encuentra, entonces se recibe un error (ej. "missing ; before statement").
    // Si el navegador puede ver dónde comienza una cadena, pero no dónde termine, como se indica en la segunda oración, devuelve error (con "unterminated string literal").
    // Si tu programa devuelve estos errores, revisa desde el inicio que todas tus cadenas posean sus comillas.

    // Lo siguiente funcionará si previamente definiste la variable string — inténtalo:

    var malString = string;
    malString;

    // malString ahora tiene el mismo valor que string.
  }
  {// Comillas simples vs. comillas dobles en JavaScript

    // En JavaScript, puedes escoger entre comillas simples y dobles para envolver tus cadenas. Ambas funcionarán correctamente:

    var simp = 'Comillas simples.';
    var dobl = "Comillas dobles.";
    simp;
    dobl;

    // Hay muy poca diferencia entre las dos, y la que utilices dependerá de tus preferencias personales.
    // Sin embargo, deberías elegir una y mantenerla; usar diferentes tipos de comillas en el código podría llegar a ser confuso, especialmente si utilizas diferentes comillas en la misma cadena.

    // El siguiente ejemplo devolverá un error:

    // var badQuotes = 'What on earth?";

    // El navegador pensará que la cadena no se ha cerrado correctamente, porque el otro tipo de cita que no estás usando puede aparecer en la cadena.

    // Por ejemplo, en estos dos casos su uso es correcto:

    var sglDbl = 'Would you eat a "fish supper"?';
    var dblSgl = "I'm feeling blue.";
    sglDbl;
    dblSgl;

    // Sin embargo, no puedes usar el mismo tipo de comillas en el interior de una cadena que ya las tiene en los extremos.
    // Lo siguiente devuelve un error, porque confunde al navegador respecto de dónde termina la cadena:

    // var bigmouth = 'I've got no right to take my place...';

    // Lo que nos lleva directamente al siguiente tema.
  }
  {// Escapando caracteres en una cadena en JavaScript

    // Para solucionar nuestro problema anterior, necesitamos "escapar" el asunto de las comillas.
    // Escapar caracteres significa que les hacemos algo para asegurarnos que sean reconocidos como texto, y no parte del código.

    // En JavaScript, colocamos una barra invertida justo antes del carácter. Intenta esto:

    var bigmouth = "I've got no right to take my place...";
    bigmouth;

    // Ahora funciona correctamente. Puedes escapar otros caracteres de la misma forma, por ejemplo, \".
    // Hay varios códigos más. Ve a Notación de Escape para más detalles.
  }
  {// Concatenando cadenas en JavaScript

    // Concatenar es una elegante palabra de la programación que significa: "unir". 
    // Para unir cadenas en JavaScript, se utiliza el símbolo de más (+), el mismo operador que se usa para sumar números, pero en este contexto hace algo diferente.

    // Ejemplo de concatenación de cadenas:
    var one = "Hello, ";
    var two = "how are you?";
    var joined = one + two;
    joined;  // Resultado: "Hello, how are you?"

    // También puedes concatenar múltiples cadenas:
    var multiple = one + one + one + one + two;
    multiple;  // Resultado: "Hello, Hello, Hello, Hello, how are you?"

    // Puedes usar una combinación de variables y strings literales en la concatenación:
    var response = one + "I am fine — " + two;
    response;  // Resultado: "Hello, I am fine — how are you?"
  }
  {// La concatenación en contexto

    // Vamos a revisar la concatenación que usamos en la siguiente acción. 
    // Veamos este ejemplo ya citado previamente en el curso:

    function saludo(name) {
      console.log("What is your name?");
      console.log("My name is " + name);
      console.log("Hello " + name + ", nice to see you!");
    };
    saludo("Cherno")
  }
  {// Números versus cadenas

    // ¿Qué sucede cuando intentamos agregar (o concatenar) un string y un número?
    // Probemos en la consola:

    console.log("Front " + 242);

    // Podrías esperar que diera un error, pero funciona a la perfección. 
    // Tratar de representar un string como un número no tiene sentido, pero representar un número como string sí lo tiene, así que el navegador convierte el número en una string y las muestra juntas.

    // Incluso puedes hacer esto con dos números. Puedes forjar un número para que se convierta en una string envolviéndolo entre comillas. 
    // Prueba lo siguiente (estamos utilizando el operador typeof para verificar si la variable es un número o una cadena):

    var myDate = "19" + "67";
    console.log(typeof myDate);

    // Si tienes una variable numérica que deseas convertir en una string, pero no cambiar de otra forma, o una variable string que deseas convertir a número, pero no cambiarla de otra forma, puedes usar las siguientes construcciones:

    // El objeto Number convertirá cualquier cosa que se le pase en un número, si puede. 
    // Intenta lo siguiente:

    var myString = "123";
    var myNum = Number(myString);
    console.log(typeof myNum);

    // Por otra parte, cada número tiene un método llamado toString() que convertirá 
    // el equivalente en una string. Prueba esto:

    var myNum = 123;
    var myString = myNum.toString();
    console.log(typeof myString);

    // Estas construcciones pueden ser muy útiles en ciertas situaciones. 
    // Por ejemplo, si un usuario introduce un número en un campo de texto de un formulario, será un string. Sin embargo, si quieres añadir ese número a algo, necesitas convertirlo a número, así que puedes usar esta construcción para hacerlo. 

  }
  {// Métodos de cadena de JavaScript
    let texto = "¡Hola, mundo!";
    {// Métodos de búsqueda de cadenas
      // (indexOf, lastIndexOf, includes)

      // indexOf: Devuelve el primer índice en el que se encuentra una subcadena
      let indexOfWorld = texto.indexOf("mundo");
      console.log(indexOfWorld); // Salida: 7

      // lastIndexOf: Devuelve el último índice en el que se encuentra una subcadena
      let lastIndexOfWorld = texto.lastIndexOf("mundo");
      console.log(lastIndexOfWorld); // Salida: 7

      // includes: Verifica si una cadena contiene una subcadena
      let includesHola = texto.includes("Hola");
      console.log(includesHola); // Salida: true 

      let includesJavaScript = texto.includes("JavaScript");
      console.log(includesJavaScript); // Salida: false
    }
    {// Plantillas de cadenas
      // Utilizando acentos graves `` para crear literales de plantillas
      let nombre = "Juan";
      let saludo = `¡Hola, ${nombre}!`;
      console.log(saludo); // Salida: ¡Hola, Juan!
    }
    {// String toUpperCase() y toLowerCase()
      let textoMayusculas = texto.toUpperCase();
      console.log(textoMayusculas); // Salida: ¡HOLA, MUNDO!

      let textoMinusculas = texto.toLowerCase();
      console.log(textoMinusculas); // Salida: ¡hola, mundo!
    }
    {// String concat()
      // Concatena dos o más cadenas
      let cadena1 = "Hola";
      let cadena2 = " ";
      let cadena3 = "mundo!";
      let cadenaConcatenada = cadena1.concat(cadena2, cadena3);
      console.log(cadenaConcatenada); // Salida: Hola mundo!
    }
    {// String trim()
      // Elimina los espacios en blanco de ambos extremos de una cadena
      let textoEspaciado = "   ¡Hola, mundo!   ";
      let textoRecortado = textoEspaciado.trim();
      console.log(textoRecortado); // Salida: ¡Hola, mundo!
    }
    {// String padStart() y padEnd()
      // Rellena una cadena con otra cadena hasta alcanzar una longitud especificada
      let rellenoInicio = "5".padStart(4, "0");
      console.log(rellenoInicio); // Salida: 0005

      let rellenoFin = "5".padEnd(4, "0");
      console.log(rellenoFin); // Salida: 5000
    }
    {// String repeat()
      // Repite una cadena un número especificado de veces
      let textoRepetido = "abc".repeat(3);
      console.log(textoRepetido); // Salida: abcabcabc
    }
    {// String replace()
      // Reemplaza un valor especificado por otro en una cadena
      let textoReemplazado = texto.replace("mundo", "JavaScript");
      console.log(textoReemplazado); // Salida: ¡Hola, JavaScript!
    }
    {// String replaceAll() (ES2021)
      // Reemplaza todas las ocurrencias de un valor especificado por otro en una cadena
      let textoReemplazadoTodo = texto.replaceAll("o", "0");
      console.log(textoReemplazadoTodo); // Salida: Hell0, mund0!
    }
    {// String split()
      // Divide una cadena en un array de subcadenas según un separador especificado
      let arrayDividido = texto.split(", ");
      console.log(arrayDividido); // Salida: ["¡Hola", "mundo!"]
    }
  }

}
{// Comparaciones

  // Conocemos muchos operadores de comparación de matemáticas.
  // En JavaScript están escritos así:

  // Mayor/menor que: a > b, a < b.
  // Mayor/menor que o igual: a >= b, a <= b.
  // Igual a: a == b, tenga en cuenta que el signo de igualdad doble == significa la prueba de igualdad, mientras que uno solo a = b significa una asignación.
  // No es igual: en matemáticas la notación es ≠, pero en JavaScript se escribe como a != b.
  {// booleano es el resultado

    // Todos los operadores de comparación devuelven un valor booleano:

    // true – significa “sí”, “correcto” o “la verdad”.
    // false – significa “no”, “incorrecto” o “no es la verdad”.

    // Por ejemplo:

    console.log(2 > 1);  // true (correct)
    console.log(2 == 1); // false (wrong)
    console.log(2 != 1); // true (correct)

    // Se puede asignar un resultado de comparación a una variable, como cualquier valor:

    let result = 5 > 4; // asigna el resultado de la comparación
    console.log(result); // true
  }
  {// Comparación de cadenas

    // Para ver si una cadena es mayor que otra, JavaScript utiliza el llamado orden "diccionario" o "lexicográfico".

    // En otras palabras, las cadenas se comparan letra por letra.

    // Por ejemplo:

    console.log('Z' > 'A'); // true
    console.log('Glow' > 'Glee'); // true
    console.log('Bee' > 'Be'); // true

    // El algoritmo para comparar dos cadenas es simple:

    // 1. Compare el primer carácter de ambas cadenas.

    // 2. Si el primer carácter de la primera cadena es mayor (o menor) que el de la otra cadena, entonces la primera cadena es mayor (o menor) que la segunda.

    // 3. De lo contrario, si los primeros caracteres de ambas cadenas son iguales, compare los segundos caracteres de la misma manera.

    // 4. Repita hasta el final de cualquiera de las cuerdas.

    // 5. Si ambas cuerdas terminan en la misma longitud, entonces son iguales. De lo contrario, la cuerda más larga es mayor.

    // En el primer ejemplo anterior, la comparación 'Z' > 'A' llega a un resultado en el primer paso.

    // La segunda comparación 'Glow' necesita 'Glee' más pasos ya que las cadenas se comparan carácter por carácter:

    // G es lo mismo que G.
    // l es lo mismo que l.
    // o es mayor que e. Deténgase aquí. La primera cuerda es mayor.

    // No es un diccionario real, sino un orden Unicode.

    // El algoritmo de comparación proporcionado anteriormente es aproximadamente equivalente al utilizado en diccionarios o guías telefónicas, pero no es exactamente el mismo.

    // Por ejemplo, el caso importa. Una letra mayúscula "A" no es igual a la minúscula "a". ¿Cuál es mayor? La minúscula "a". ¿Por qué? Debido a que el carácter minúscula tiene un índice mayor en la tabla de codificación interna que utiliza JavaScript (Unicode). Volveremos a detalles específicos y consecuencias de esto en el capítulo Cadenas .
  }
  {// Comparación de diferentes tipos.

    // Al comparar valores de diferentes tipos, JavaScript convierte los valores en números.

    // Por ejemplo:

    console.log('2' > 1); // true, string '2' becomes a number 2
    console.log('01' == 1); // true, string '01' becomes a number 1

    // Para valores booleanos, true se convierte 1 y false se convierte en 0.

    // Por ejemplo:

    console.log(true == 1); // true
    console.log(false == 0); // true

    // Una consecuencia divertida

    // Es posible que al mismo tiempo:

    // 1. Dos valores son iguales.
    // 2. Uno de ellos es true booleano y el otro es false booleano.

    // Por ejemplo:

    let a = 0;
    console.log(Boolean(a)); // false

    let b = "0";
    console.log(Boolean(b)); // true

    console.log(a == b); // true!

    // Desde el punto de vista de JavaScript, este resultado es bastante normal. Una verificación de igualdad convierte valores mediante la conversión numérica (por lo tanto, "0" se convierte en 0), mientras que la conversión explícita Boolean utiliza otro conjunto de reglas.
  }
  {// Estricta igualdad

    // Un control regular de igualdad == tiene un problema. No puede diferenciarse 0 de false:

    console.log(0 == false); // true

    // Lo mismo ocurre con una cadena vacía:

    console.log('' == false); // true

    // Esto sucede porque el operador de igualdad convierte operandos de diferentes tipos en números ==. Una cadena vacía, como false, se convierte en cero.

    // ¿Qué hacer si queremos diferenciar 0 de false?

    // Un operador de igualdad estricta === verifica la igualdad sin conversión de tipos.

    // En otras palabras, si a y b son de diferentes tipos, a === b regresa inmediatamente false sin intentar convertirlos.

    // Vamos a intentarlo:

    console.log(0 === false); // false, because the types are different

    // También existe un operador de “no igualdad estricta” !== análogo a !=.

    // El operador de igualdad estricta es un poco más largo de escribir, pero deja claro lo que está pasando y deja menos espacio para errores.
  }
  {// Comparación con nulo e indefinido

    // Hay un comportamiento no intuitivo cuando se comparan null o undefined con otros valores.

    // Por un estricto control de igualdad ===
    // Estos valores son diferentes, porque cada uno de ellos es de un tipo diferente.
    console.log(null === undefined); // false

    // Para un control no estricto ==
    // Hay una regla especial. Estos dos son una “dulce pareja”: se igualan (en el sentido de ==), pero no en ningún otro valor.
    console.log(null == undefined); // true

    // Para matemáticas y otras comparaciones. < > <= >=
    // null/undefined se convierten a números: null se convierte en 0, mientras que undefined se convierte en NaN.

    // Ahora veamos algunas cosas divertidas que suceden cuando aplicamos estas reglas. Y, lo que es más importante, cómo no caer en una trampa con ellos.
    {// Resultado extraño: nulo vs 0
      // Comparemos null con un cero:
      console.log(null > 0);  // (1) false
      console.log(null == 0); // (2) false
      console.log(null >= 0); // (3) true

      // Matemáticamente, eso es extraño. El último resultado indica que "null es mayor o igual a cero", por lo que en una de las comparaciones anteriores debe ser true, pero ambas son falsas.

      // La razón es que la verificación de igualdad == y las comparaciones > < >= <= funcionan de manera diferente. Las comparaciones > < se convierten null en un número, tratándolo como 0. Por eso (3) null >= 0 es verdadero y (1) null > 0 es falso.

      // Por otro lado, la verificación de igualdad == para undefined y null se define de manera que, sin ninguna conversión, sean iguales entre sí y no sean iguales a nada más. Por eso (2) null == 0 es falso.
    }
    {// Un indefinido incomparable
      // El valor undefined no debe compararse con otros valores:
      console.log(undefined > 0); // false (1)
      console.log(undefined < 0); // false (2)
      console.log(undefined == 0); // false (3)
      // ¿Por qué le disgusta tanto el cero? ¡Siempre falso!

      // Obtenemos estos resultados porque:
      // Comparaciones (1) y (2) retornos false porque undefined se convierte en NaN y NaN es un valor numérico especial que regresa false para todas las comparaciones.
      // La verificación de igualdad (3) regresa false porque undefined solo es igual a null, undefined y ningún otro valor.
    }
    // Evitar problemas

    // ¿Por qué repasamos estos ejemplos? ¿Deberíamos recordar estas peculiaridades todo el tiempo? Bueno en realidad no. En realidad, estas cosas complicadas se irán familiarizando gradualmente con el tiempo, pero existe una forma sólida de evitar problemas con ellas:

    // Trate cualquier comparación undefined/null excepto la estricta igualdad === con excepcional cuidado.
    // No utilices comparaciones >= > < <= con una variable que pueda ser null/undefined, a menos que estés realmente seguro de lo que estás haciendo. Si una variable puede tener estos valores, compruébelos por separado.
  }
}
{// Declaraciones condicionales

  // Muy a menudo, cuando escribes código, deseas realizar diferentes acciones para diferentes decisiones.

  // Puede utilizar declaraciones condicionales en su código para hacer esto.

  // En JavaScript tenemos las siguientes declaraciones condicionales:

  // - Úselo if para especificar un bloque de código que se ejecutará, si una condición especificada es verdadera.
  // - Úselo else para especificar un bloque de código que se ejecutará, si la misma condición es falsa.
  // - Úselo else if para especificar una nueva condición para probar, si la primera condición es falsa.

  // Se utiliza switch para especificar muchos bloques alternativos de código que se ejecutarán.
  // La switch declaración se describe en el próximo capítulo.

  {// La declaración 'if'

    // Utilice la declaración 'if' para especificar un bloque de código JavaScript que se ejecutará si una condición es verdadera.
    let condition
    // Sintaxis
    if (condition) {
      // bloque de código que se ejecutará si la condición es verdadera
    }
    // Realiza un saludo de "Buenos días" si la hora es inferior a las 18:00:

    let hour = 15;
    let greeting;

    if (hour < 18) {
      greeting = "Good day";
    }
    // El resultado del saludo será:
    // greeting = "Good day";

    {// La declaración 'else'

      // Utilice la declaración 'else' para especificar un bloque de código que se ejecutará si la condición es falsa.
      let condition
      if (condition) {
        // bloque de código que se ejecutará si la condición es verdadera
      } else {
        // bloque de código que se ejecutará si la condición es falsa
      }
      // Si la hora es inferior a las 18, crea un saludo de "Buenos días", en caso contrario "Buenas noches":

      let hour = 20;
      let greeting;

      if (hour < 18) {
        greeting = "Good day";
      } else {
        greeting = "Good evening";
      }

      // El resultado del saludo será:
      // greeting = "Good evening";
    }
    {// La declaración 'else if'

      // Utilice la declaración 'else if' para especificar una nueva condición si la primera condición es falsa.
      let condition
      let condition2
      if (condition) {
        // bloque de código que se ejecutará si condition1 es verdadera
      } else if (condition2) {
        // bloque de código que se ejecutará si condition1 es falsa y condition2 es verdadera
      } else {
        // bloque de código que se ejecutará si condition1 es falsa y condition2 es falsa
      }
      // Si son menos de las 10:00, crea un saludo de "Buenos días",
      // si no, pero son menos de las 20:00, crea un saludo de "Buenos días",
      // en caso contrario, un "Buenas noches":

      let time = 15;
      let greeting;

      if (time < 10) {
        greeting = "Good morning";
      } else if (time < 20) {
        greeting = "Good day";
      } else {
        greeting = "Good evening";
      }

      // El resultado del saludo será:
      // greeting = "Good day";

    }
  }
  {// Operador condicional '?'
    let accessAllowed;
    let age = 18
    let condition
    let value1
    let value2

    // A veces, necesitamos asignar una variable dependiendo de una condición.

    // Por ejemplo:



    if (age > 17) {
      accessAllowed = true;
    } else {
      accessAllowed = false;
    }

    console.log(accessAllowed);

    // El llamado operador “condicional” o “signo de interrogación” nos permite hacerlo de una manera más breve y sencilla.

    // El operador está representado por un signo de interrogación ?. A veces se le llama "ternario", porque el operador tiene tres operandos. En realidad, es el único operador en JavaScript que tiene tantos.

    // La sintaxis es:

    let result = condition ? value1 : value2;

    // Se conditionevalúa: si es verdadero, value1 se devuelve; en caso contrario, – value2.

    // Por ejemplo:

    let accessAllowed1 = (age > 17) ? "si" : "no";
    console.log(accessAllowed1);
    // El operador del signo de interrogación tiene una prioridad baja, por lo que se ejecuta después de la comparación >.

    // Este ejemplo hará lo mismo que el anterior:

    // el operador de comparación "age > 17" se ejecuta primero de todos modos
    let accessAllowed2 = (age > 17) ? true : false;
    console.log(accessAllowed2);
    // Pero los paréntesis hacen que el código sea más legible, por lo que recomendamos usarlos.

    // Tenga en cuenta:
    // En el ejemplo anterior, puede evitar el uso del operador de signo de interrogación porque la comparación en sí devuelve true/false:

    // lo mismo
    let accessAllowed3 = age > 17;
    console.log(accessAllowed3);

    {// Múltiples '?'

      // Una secuencia de operadores de signo de interrogación ? puede devolver un valor que depende de más de una condición.

      // Por ejemplo:

      let age = 21;

      let message = (age < 3) ? 'Hi, baby!' :
        (age < 18) ? 'Hello!' :
          (age < 100) ? 'Greetings!' :
            'What an unusual age!';

      console.log(message);

      // Al principio puede resultar difícil comprender lo que está pasando. Pero después de una mirada más cercana, podemos ver que es sólo una secuencia ordinaria de pruebas:

      // El primer signo de interrogación comprueba si age < 3.
      // Si es verdadero, devuelve 'Hi, baby!'. De lo contrario, continúa con la expresión después de los dos puntos “:”, marcando age < 18.
      // Si eso es cierto, regresa 'Hello!'. De lo contrario, continúa con la expresión después de los siguientes dos puntos “:”, marcando age < 100.
      // Si eso es cierto, regresa 'Greetings!'. De lo contrario, continúa con la expresión después de los últimos dos puntos “:”, regresando 'What an unusual age!'.
      // Así es como se ve usando if..else:

      if (age < 3) {
        message = 'Hi, baby!';
      } else if (age < 18) {
        message = 'Hello!';
      } else if (age < 100) {
        message = 'Greetings!';
      } else {
        message = 'What an unusual age!';
      }
      console.log(message);
    }
    {// Uso no tradicional de '?'

      // A veces el signo de interrogación ?se utiliza como sustituto de if:

      let company = "Netscape";

      (company == 'Netscape') ?
        console.log('Right!') :
        console.log('Wrong.');

      // Dependiendo de la condición company == 'Netscape', la primera o la segunda expresión después de se ?ejecuta y muestra una alerta.

      // Aquí no asignamos un resultado a una variable. En cambio, ejecutamos código diferente según la condición.

      // No se recomienda utilizar el operador del signo de interrogación de esta manera.

      // La notación es más corta que la ifdeclaración equivalente, lo que atrae a algunos programadores. Pero es menos legible.

      // Aquí está el mismo código que se usa ifpara comparar:

      let company2 = "Netscape";

      if (company2 == 'Netscape') {
        console.log('Right!');
      } else {
        console.log('Wrong.');
      }

      // Nuestros ojos escanean el código verticalmente. Los bloques de código que abarcan varias líneas son más fáciles de entender que un conjunto de instrucciones largo y horizontal.

      // El objetivo del operador de signo de interrogación ?es devolver un valor u otro en función de su condición. Úselo exactamente para eso. Úselo ifcuando necesite ejecutar diferentes ramas de código.
    }
  }
  {// La declaración de "cambio"

    // Una switchdeclaración puede reemplazar varios if checks.

    // Proporciona una forma más descriptiva de comparar un valor con múltiples variantes.

    {// La sintaxis
      let x
      // Tiene switch uno o más case bloques y un valor predeterminado opcional.

      // Se parece a esto:

      switch (x) {
        case 'value1':  // if (x === 'value1')
          // ...
          break

        case 'value2':  // if (x === 'value2')
          // ...
          break

        default:
          // ...
          break
      }
      // Se comprueba que el valor de x sea estrictamente igual al valor del primero case (es decir, value1), luego al segundo (value2), y así sucesivamente.
      // Si se encuentra la igualdad, switch comienza a ejecutar el código comenzando desde el correspondiente case, hasta el más cercano break (o hasta el final de switch).
      // Si no coincide ningún caso, default se ejecuta el código (si existe).
    }
    {// Un ejemplo

      // Un ejemplo de switch (el código ejecutado está resaltado):

      let a = 2 + 2;

      switch (a) {
        case 3:
          console.log('Too small');
          break;
        case 4:
          console.log('Exactly!');
          break;
        case 5:
          console.log('Too big');
          break;
        default:
          console.log
            ("I don't know such values");
      }
      // Aquí switch comienza a compararse a desde la primera case variante 3. El partido falla.
      // Entonces 4. Esa es una coincidencia, por lo que la ejecución comienza desde case 4 hasta el más cercano break.
      // Si no hay ningún control break, la ejecución continúa con la siguiente case.

      // Un ejemplo sin break:

      let b = 2 + 2;

      switch (b) {
        case 3:
          console.log('Too small');
        case 4:
          console.log('Exactly!');
        case 5:
          console.log('Too big');
        default:
          console.log
            ("I don't know such values");
      }
      // En el ejemplo anterior veremos la ejecución secuencial de tres console.logs:
      // console.log( 'Exactly!' );
      // console.log( 'Too big' );
      // console.log( "I don't know such values" );

      // Cualquier expresión puede ser un argumento switch/case.

      // Ambos switch y case permiten expresiones arbitrarias.

      // Por ejemplo:

      let c = "1";
      let d = 0;

      switch (+c) {
        case d + 1:
          console.log
            ("this runs, because + c is 1, exactly equals d + 1");
          break;

        default:
          console.log("this doesn't run");
      }
      // Aquí +c se muestra 1, se compara con d + 1 en el case y se ejecuta el código correspondiente.
    }
    {// Agrupación de “caso”

      // case Se pueden agrupar varias variantes de las que comparten un mismo código.

      // Por ejemplo, si queremos que se ejecute el mismo código para case 3 y case 5:

      let a = 3;

      switch (a) {
        case 4:
          console.log('Right!');
          break;

        case 3: // (*) grouped two cases
        case 5:
          console.log('Wrong!');
          console.log("Why don't you take a math class?");
          break;

        default:
          console.log('The result is strange. Really.');
      }
      // Ahora ambos 3 muestran 5 el mismo mensaje.

      // La capacidad de "agrupar" casos es un efecto secundario de cómo switch/case funciona sin break. Aquí la ejecución de case 3 comienza desde la línea (*) y continúa case 5, porque no hay break.
    }
    {// El tipo importa

      // Destaquemos que el control de igualdad es siempre estricto. Los valores deben ser del mismo tipo para que coincidan.

      // Por ejemplo, consideremos el código:

      let arg = "1";
      switch (arg) {
        case '1':
          console.log('String 1');
          break;
        case 1:
          console.log("Number 1");
          break;
        case '2':
          console.log('Two');
          break;

        case 3:
          console.log('Never executes!');
          break;
        default:
          console.log('An unknown value');
      }
      // Para 0, 1, 2 el resultado es un tipo Number 3, que no es estrictamente igual === a las cadena "0","1","2". La default variante se ejecutará.
      // Pero para 3,el console.log corre. 
    }
  }
}
{// Operadores lógicos

  // Hay cuatro operadores lógicos en JavaScript: || (OR), && (AND), ! (NOT), ?? (Nullish Coalescing).

  // Aunque se llaman "lógicos", se pueden aplicar a valores de cualquier tipo, no solo booleanos. Su resultado también puede ser de cualquier tipo.

  // Veamos los detalles.
  {// Operador "OR" (||)

    // El operador "OR" se representa con dos símbolos de línea vertical:
    let a
    let b
    result = a || b;

    // En la programación clásica, el OR lógico se utiliza para manipular solo valores booleanos. Si alguno de sus argumentos es true, devuelve true; de lo contrario, devuelve false.

    // En JavaScript, el operador es un poco más complicado y poderoso. Pero primero, veamos qué sucede con los valores booleanos.

    // Hay cuatro combinaciones lógicas posibles:

    console.log(true || true);   // true
    console.log(false || true);  // true
    console.log(true || false);  // true
    console.log(false || false); // false

    // Como podemos ver, el resultado siempre es true excepto en el caso en que ambos operandos son false.

    // Si un operando no es un booleano, se convierte en un booleano para la evaluación.

    // Por ejemplo, el número 1 se trata como true, el número 0 como false:

    if (1 || 0) { // funciona como if (true || false)
      console.log('¡verdadero!');
    }

    // La mayoría de las veces, OR || se utiliza en una declaración if para comprobar si alguna de las condiciones dadas es verdadera.

    // Por ejemplo:

    let hour = 9;

    if (hour < 10 || hour > 18) {
      console.log('La oficina está cerrada.');
    }

    // Podemos pasar más condiciones:

    let hour2 = 12;
    let isWeekend = true;

    if (hour2 < 10 || hour2 > 18 || isWeekend) {
      console.log('La oficina está cerrada.'); // es fin de semana
    }
    {// OR "||" encuentra el primer valor verdadero

      // La lógica descrita anteriormente es algo clásica. Ahora, vamos a incorporar las características "extra" de JavaScript.

      // El algoritmo extendido funciona de la siguiente manera.

      // Dados varios valores OR:
      let value1
      let value2
      let value3
      result = value1 || value2 || value3;

      // El operador OR || hace lo siguiente:

      // Evalúa los operandos de izquierda a derecha.
      // Para cada operando, lo convierte a booleano. Si el resultado es true, se detiene y devuelve el valor original de ese operando.
      // Si se han evaluado todos los operandos (es decir, todos eran false), devuelve el último operando.
      // Un valor se devuelve en su forma original, sin la conversión.

      // En otras palabras, una cadena de OR || devuelve el primer valor verdadero o el último si no se encuentra ningún valor verdadero.

      // Por ejemplo:

      console.log(1 || 0); // 1 (1 es verdadero)

      console.log(null || 1); // 1 (1 es el primer valor verdadero)
      console.log(null || 0 || 1); // 1 (el primer valor verdadero)

      console.log(undefined || null || 0); // 0 (todos son falsos, devuelve el último valor)

      // Esto lleva a algunos usos interesantes en comparación con un "OR puro, clásico, solo booleano".

      // Obtener el primer valor verdadero de una lista de variables o expresiones.

      // Por ejemplo, tenemos variables firstName, lastName y nickName, todas opcionales (es decir, pueden ser undefined o tener valores falsos).

      // Usemos OR || para elegir la que tiene los datos y mostrarla (o "Anónimo" si no hay nada configurado):

      let firstName = "";
      let lastName = "";
      let nickName = "SuperCoder";

      console.log(firstName || lastName || nickName || "Anónimo"); // SuperCoder

      // Si todas las variables fueran falsas, se mostraría "Anónimo".

      // Evaluación de circuito corto.

      // Otra característica del operador OR || es la llamada "evaluación de circuito corto".

      // Significa que || procesa sus argumentos hasta que se alcanza el primer valor verdadero, y luego el valor se devuelve inmediatamente, sin tocar siquiera el otro argumento.

      // La importancia de esta característica se hace evidente si un operando no es solo un valor, sino una expresión con un efecto secundario, como una asignación de variable o una llamada a una función.

      // En el ejemplo a continuación, solo se imprime el segundo mensaje:

      true || console.log("no impreso");
      false || console.log("impreso");

      // En la primera línea, el operador OR || detiene la evaluación inmediatamente al ver true, por lo que la alerta no se ejecuta.

      // A veces, las personas utilizan esta característica para ejecutar comandos solo si la condición en la parte izquierda es falsa.
    }
  }
  {// && (Y)

    // El operador AND se representa con dos símbolos &&:
    let a
    let b
    result = a && b;

    // En programación clásica, AND devuelve true si ambos operandos son verdaderos y false en caso contrario:

    console.log(true && true);   // true
    console.log(false && true);  // false
    console.log(true && false);  // false
    console.log(false && false); // false

    // Un ejemplo con if:

    let hour = 12;
    let minute = 30;

    if (hour == 12 && minute == 30) {
      console.log('La hora es 12:30');
    }

    // Al igual que con OR, se permite cualquier valor como operando de AND:

    if (1 && 0) { // evaluado como true && false
      console.log("no funcionará, porque el resultado es falsy");
    }
    {// Y “&&” encuentra el primer valor falso

      // Dados múltiples valores AND:
      let value1
      let value2
      let value3
      result = value1 && value2 && value3;

      // El operador AND && hace lo siguiente:

      // Evalúa operandos de izquierda a derecha.
      // Para cada operando, lo convierte a booleano. Si el resultado es false, se detiene y devuelve el valor original de ese operando.
      // Si se han evaluado todos los operandos (es decir, todos eran verdaderos), devuelve el último operando.

      // En otras palabras, AND devuelve el primer valor falso o el último valor si no se encontró ninguno.

      // Las reglas anteriores son similares a OR. La diferencia es que AND devuelve el primer valor falso mientras que OR devuelve el primer valor verdadero.

      // Ejemplos:

      // Si el primer operando es verdadero,
      // Y devuelve el segundo operando:
      console.log(1 && 0); // 0
      console.log(1 && 5); // 5

      // Si el primer operando es falso,
      // Y lo devuelve. El segundo operando se ignora.
      console.log(null && 5); // null
      console.log(0 && "no matter what"); // 0

      // También podemos pasar varios valores seguidos. Vea cómo se devuelve el primer falso:
      console.log(1 && 2 && null && 3); // null

      // Cuando todos los valores son verdaderos, se devuelve el último valor:
      console.log(1 && 2 && 3); // 3, the last one

      // La precedencia de AND &&es mayor que OR ||
      // La precedencia del operador AND && es mayor que OR ||.
      // Entonces, el código a && b || c && d es es esencialmente el mismo que si las &&expresiones estuvieran entre paréntesis: (a && b) || (c && d).

      // No reemplace if con ||o &&
      // A veces, la gente usa el &&operador AND como una "forma más corta de escribir if".
      // Por ejemplo:
      let x = 1;
      (x > 0) && console.log('Greater than zero!');

      // La acción en la parte derecha de && se ejecutaría solo si la evaluación la alcanza. Es decir, sólo si (x > 0)es cierto.
      // Básicamente tenemos un análogo para:
      let y = 1;
      if (y > 0) console.log('Greater than zero!');
      // Aunque la variante con && parece más corta, if es más obvia y tiende a ser un poco más legible. Por eso recomendamos usar cada construcción para su propósito: usar if si queremos if y usar && si queremos AND.
    }
  }
  {// ! (NO)

    // El operador booleano NOT se representa con un signo de exclamación !.

    // La sintaxis es bastante simple:
    let value
    result = !value;

    // El operador acepta un único argumento y hace lo siguiente:

    // Convierte el operando a tipo booleano: true/false.
    // Devuelve el valor inverso.

    // Por ejemplo:

    console.log(!true); // false
    console.log(!0); // true

    // A veces se utiliza un NOT doble !!para convertir un valor a tipo booleano:

    console.log(!!"non-empty string"); // true
    console.log(!!null); // false

    // Es decir, el primer NOT convierte el valor a booleano y devuelve el inverso, y el segundo NOT lo vuelve a invertir. Al final, tenemos una simple conversión de valor a booleano.

    // BooleanHay una forma un poco más detallada de hacer lo mismo: una función incorporada :

    console.log(Boolean("non-empty string")); // true
    console.log(Boolean(null)); // false

    // La precedencia de NOT ! es la más alta de todos los operadores lógicos, por lo que siempre se ejecuta primero, antes && o ||.
  }
  {// ?? (NULL)

    // El operador ?? se conoce como el "operador de fusión nula" o "nullish coalescing operator" en JavaScript.
    // Proporciona una forma concisa de seleccionar un valor predeterminado cuando se encuentra con valores que son null o undefined.

    // Sintaxis básica:
    let valor;
    let valorPredeterminado;
    let resultado = valor ?? valorPredeterminado;

    // Donde "valor" es la variable que se está evaluando y "valorPredeterminado" es el valor que se utilizará
    // si "valor" es null o undefined.
  }
}
{//Resumen

  { // 1.  // Tipos de datos primitivos:

    // number: Números de cualquier tipo, ya sea entero o de punto flotante; los enteros están limitados por ±(2^53-1).
    let exampleNumber = 42;

    // bigint: Se utiliza para números enteros de longitud arbitraria.
    let bigInteger = 1234567890123456789012345678901234567890n;

    // string: Representa cadenas de texto. Puede contener cero o más caracteres, sin un tipo separado para caracteres individuales.
    let exampleString = "Hola, mundo!";

    // boolean: Representa valores de verdadero/falso.
    let isTrue = true;
    let isFalse = false;

    // null: Representa valores desconocidos; es un tipo independiente con un único valor: null.
    let nullValue = null;

    // undefined: Representa valores no asignados; es un tipo independiente con un único valor: undefined.
    let undefinedValue;

    // symbol: Representa identificadores únicos.
    let uniqueSymbol = Symbol("unique");

    // Tipo de dato no primitivo:
    // object: Utilizado para estructuras de datos más complejas.
    let exampleObject = { key: "value" };
  }

  {//2. Tipo de dato no primitivo
    let nonPrimitiveExample = [1, 2, 3]; // Object (Array)
  }
  {  //3. Relación entre null e undefined
    // Explicación: null es asignado intencionalmente, mientras que undefined indica una variable no asignada.
    let nullValue2 = null;
    let undefinedValue2;
  }
  {  //4. Diferencia entre comillas simples, dobles y comillas invertidas
    // Explicación: No hay diferencia funcional, pero las comillas invertidas permiten interpolación.
    let singleQuotes = 'Hola, soy una cadena con comillas simples';
    let doubleQuotes = "Hola, soy una cadena con comillas dobles";
    let backticks = `Hola, soy una cadena con comillas invertidas`;
  }
  {//5. Término para unir cuerdas
    // Explicación: La concatenación es el término utilizado para unir cadenas.
    let string1 = "Hola,";
    let string2 = "mundo!";
    let concatenatedString = string1 + " " + string2;
  }
  {  //6. Tipo de cita para incrustar variables/expresiones en una cadena
    // Explicación: Las comillas invertidas permiten la interpolación de variables y expresiones.
    let name = "John";
    let interpolatedString = `Hola, ${name}!`;
  }
  {  //7. Cómo incrustar variables/expresiones en una cadena
    // Explicación: Se utiliza la sintaxis ${} dentro de las comillas invertidas.
    let age = 25;
    let message = `Tienes ${age} años`;
  }
  {  //8. Cómo usar caracteres de escape en una cadena
    // Explicación: Se utiliza la barra invertida (\) antes del carácter a escapar.
    let escapedString = "Este es un \"texto\" con comillas dobles";
    console.log(escapedString);
  }
  {  //9. Diferencia entre slice, substring y substr
    let originalString = "JavaScript";

    // slice(start, end): Devuelve una porción de la cadena desde start hasta end.
    let slicedString = originalString.slice(0, 4); // "Java"

    // substring(start, end): Similar a slice, pero no permite índices negativos.
    let substringString = originalString.substring(0, 4); // "Java"

    // substr(start, length): Devuelve una subcadena comenzando en start y de longitud length. //!OBSOLETA
    let substrString = originalString.substr(0, 4); // "Java"
  }
  {  //10. Tres operadores lógicos y su significado
    // Explicación: && (AND), || (OR), ! (NOT)
    let condition1 = true;
    let condition2 = false;
    let andResult = condition1 && condition2; // false
    let orResult = condition1 || condition2; // true
    let notResult = !condition1; // false
  }
  {  //11. Operadores de comparación
    // Explicación: >, <, >=, <=, ==, !=, ===, !==
    let a = 5;
    let b = 10;
    let isEqual = a === b; // false
  }
  {  //12. Valores true y false
    // Explicación: Valores verdaderos son aquellos que se evalúan como true en un contexto booleano.
    let trueValue = true;
    let falseValue = false;
  }
  {  //13. Valores falsos en JavaScript
    // Explicación: false, 0, "", null, undefined, NaN
    let falsyValues = [false, 0, "", null, undefined, NaN];
  }
  {  //14. Condicionales en JavaScript
    // Explicación: Los condicionales permiten ejecutar bloques de código basados en condiciones.
    let numberToCheck = 42;
    if (numberToCheck > 0) {
      console.log("El número es positivo");
    } else {
      console.log("El número es cero o negativo");
    }
  }
  {  //15. Sintaxis de un condicional if/else
    let condition = true;
    if (condition) {
      console.log("La condición es verdadera");
    } else {
      console.log("La condición es falsa");
    }
  }
  {  //16. Sintaxis de una declaración de switch 
    let expressionValue = "value2";
    switch (expressionValue) {
      case "value1":
        console.log("Expresión es value1");
        break;
      case "value2":
        console.log("Expresión es value2");
        break;
      default:
        console.log("Expresión no coincide con ningún caso");
    }
  }
  {  //17. Sintaxis de un operador ternario
    let ageToCheck = 20;
    let isAdult = ageToCheck >= 18 ? "Es adulto" : "No es adulto";
  }
  {  //18. Anidar
    // Explicación: Anidar implica colocar una estructura dentro de otra, como tener un if/else dentro de otro.
    let outerCondition = true;
    let innerCondition = false;
    if (outerCondition) {
      if (innerCondition) {
        console.log("Ambas condiciones son verdaderas");
      } else {
        console.log("La condición interna es falsa");
      }
    } else {
      console.log("La condición externa es falsa");
    }
  }
}

{//EJERCICIO
  // Declaración de variables:
  // Declara una variable de cada tipo de dato primitivo (number, string, boolean, null, undefined).
  let number = 0;
  let string = "Hello World";
  let boolean = true;
  let nulo = null;
  let undefinedd = undefined
  // Operadores lógicos:
  // Crea una expresión que utilice los operadores lógicos &&, || y !, y comprueba los resultados.
  console.log(!undefinedd && boolean);
  // Operadores de comparación:
  // Utiliza diferentes operadores de comparación (>, <, >=, <=, ==, !=, ===, !==) para comparar valores y registra los resultados.
  console.log(number !== boolean);

  // Condicionales:
  // Escribe una estructura condicional (if/else) que determine si un número es par o impar.
  if ((!undefinedd && boolean) || number > 10) {
    console.log(string);
  }

  // Concatenación de cadenas:
  // Crea una cadena que contenga tu nombre y tu edad concatenando variables y utilizando el operador +.
  let nombre = "Cherno";
  let edad = 21;
  console.log(nombre + edad);
  // Interpolación de variables:
  // Utiliza comillas invertidas y ${} para crear una cadena que incluya tu nombre y tu edad.
  console.log(`${nombre} tiene ${edad}`);
  // Switch statement:
  // Escribe una declaración switch que tome un número del 1 al 7 y devuelva el día de la semana correspondiente.
  switch (edad) {
    case 20:
      console.log("tiene 20");
      break;
    case 18:
      console.log("tiene 18");
      break;
    case 21:
      console.log("tiene 21");
      break;
    default:
      console.log("no tiene 20, 18 ni 21");
      break;
  }
  // Cadenas de escape:
  // Crea una cadena que contenga comillas dobles y comillas simples utilizando caracteres de escape.
  let stringScape = "Cherno AKA: 'Kebab'"
  console.log(stringScape);

}