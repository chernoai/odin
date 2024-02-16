{//ARRAYS
  {// ¿Por qué usar arrays?

    // Si tienes una lista de elementos (por ejemplo, una lista de nombres de autos), almacenar los autos en variables individuales podría verse así:

    let auto1 = "Saab";
    let auto2 = "Volvo";
    let auto3 = "BMW";

    // Sin embargo, ¿qué pasa si quieres recorrer los autos y encontrar uno específico? ¿Y qué pasa si no tienes 3 autos, sino 300?

    // ¡La solución es un array!

    // Un array puede contener muchos valores bajo un solo nombre, y puedes acceder a los valores refiriéndote a un número de índice.

    // Ejemplo de uso de un array para almacenar nombres de autos:
    let autos = ["Saab", "Volvo", "BMW"];

    // Ahora puedes acceder a los elementos del array utilizando índices:
    console.log(autos[0]); // Imprime "Saab"
    console.log(autos[1]); // Imprime "Volvo"
    console.log(autos[2]); // Imprime "BMW"

    // Los arrays facilitan la gestión y manipulación de conjuntos de datos, especialmente cuando tienes una colección de elementos relacionados.
  }
  {// Crear un Array

    // Usar un literal de array es la forma más fácil de crear un Array en JavaScript.

    // Sintaxis:
    let elemento1
    let elemento2
    const nombre_del_array = [elemento1, elemento2,];
    // Es una práctica común declarar arrays con la palabra clave const.

    // Aprende más sobre const con arrays en el capítulo: JS Array Const.

    // Ejemplo
    const autos = ["Saab", "Volvo", "BMW"];
    // Los espacios y saltos de línea no son importantes. Una declaración puede abarcar varias líneas:

    // Ejemplo
    const autos2 = [
      "Saab",
      "Volvo",
      "BMW"
    ];

    // También puedes crear un array y luego proporcionar los elementos:

    // Ejemplo
    const autos3 = [];
    autos3[0] = "Saab";
    autos3[1] = "Volvo";
    autos3[2] = "BMW";
  }
  {// Usar la palabra clave new en JavaScript

    // El siguiente ejemplo también crea un Array y le asigna valores:

    // Ejemplo
    const autos = new Array("Saab", "Volvo", "BMW");

    // Los dos ejemplos anteriores hacen exactamente lo mismo.

    // No es necesario usar new Array().

    // Para simplicidad, legibilidad y velocidad de ejecución, utiliza el método de array literal.

    // Ejemplo
    const autos2 = ["Saab", "Volvo", "BMW"];
  }
  {// Acceder a los elementos de un Array

    // Accedes a un elemento de un array refiriéndote al número de índice:

    const autos = ["Saab", "Volvo", "BMW"];
    let auto = autos[0];

    // Nota: Los índices de los arrays comienzan con 0.

    // [0] es el primer elemento. [1] es el segundo elemento.
  }
  {// Cambiar un elemento de un Array

    // Esta declaración cambia el valor del primer elemento en autos:

    const autos = ["Saab", "Volvo", "BMW"];
    autos[0] = "Opel";
    console.log(autos);
  }
  {// Convertir un Array a una cadena de texto

    // El método toString() de JavaScript convierte un array en una cadena de valores de array (separados por comas).

    // Ejemplo
    let frutas = ["Banana", "Orange", "Apple", "Mango"];
    console.log(frutas);
    frutas = frutas.toString();
    // Resultado:
    console.log(frutas);
  }
  {// Acceder al Array completo

    // Con JavaScript, se puede acceder al array completo refiriéndote al nombre del array:

    // Ejemplo
    const autos = ["Saab", "Volvo", "BMW"];
    autos;
  }
  {// Los Arrays son Objetos

    // Los Arrays son un tipo especial de objetos. El operador typeof en JavaScript devuelve "object" para los arrays.

    // Sin embargo, los arrays de JavaScript se describen mejor como arrays.

    // Los arrays utilizan números para acceder a sus "elementos". En este ejemplo, person[0] devuelve John:

    // Array:
    const persona = ["John", "Doe", 46];
    console.log(persona[0]);

    // Los objetos utilizan nombres para acceder a sus "miembros". En este ejemplo, person.firstName devuelve John:

    // Object:
    const persona2 = { firstName: "John", lastName: "Doe", age: 46 };
    console.log(persona2.firstName);

  }
  {// Los elementos de un Array pueden ser Objetos

    // Las variables de JavaScript pueden ser objetos. Los Arrays son un tipo especial de objetos.

    // Debido a esto, puedes tener variables de diferentes tipos en el mismo Array.

    // Puedes tener objetos en un Array. Puedes tener funciones en un Array. Puedes tener Arrays en un Array:
    let myArray = []
    let miFuncion
    let misAutos
    myArray[0] = Date.now;
    myArray[1] = miFuncion;
    myArray[2] = misAutos;
  }
  {// La propiedad length

    // La propiedad length de un array devuelve la longitud de un array (el número de elementos del array).

    // Ejemplo
    const frutas = ["Banana", "Orange", "Apple", "Mango"];
    let longitud = frutas.length;
    console.log(longitud);

    // La propiedad length siempre es uno más que el índice de array más alto. length - 1 = indice ultimo elemento del array. 

  }
  {// Recorriendo los elementos de un Array

    // Una forma de recorrer un array es mediante un bucle for:

    // Ejemplo
    const frutas = ["Banana", "Orange", "Apple", "Mango"];
    let longitudFrutas = frutas.length;

    let texto = "<ul>";
    for (let i = 0; i < longitudFrutas; i++) {
      texto += "<li>" + frutas[i] + "</li>";
    }
    texto += "</ul>";

    // También puedes usar la función Array.forEach():

    // Ejemplo
    const frutas2 = ["Banana", "Orange", "Apple", "Mango"];

    let texto2 = "<ul>";
    frutas2.forEach(miFuncion);
    texto2 += "</ul>";

    function miFuncion(valor) {
      texto2 += "<li>" + valor + "</li>";
    }
  }
  {// Arrays Asociativos

    // Muchos lenguajes de programación admiten arrays con índices con nombre.

    // Los arrays con índices con nombre se llaman arrays asociativos (o hashes).

    // JavaScript no admite arrays con índices con nombre.

    // En JavaScript, los arrays siempre utilizan índices numerados.

    // Ejemplo
    const persona = [];
    persona[0] = "John";
    persona[1] = "Doe";
    persona[2] = 46;
    persona.length;    // Devolverá 3
    persona[0];        // Devolverá "John"
  }
  {//Metodos
    {// JavaScript toString()

      // El método toString() de JavaScript convierte un array a una cadena de valores de array separados por comas.

      // Ejemplo
      const frutas = ["Banana", "Orange", "Apple", "Mango"];
      // Resultado:
      console.log
        (frutas.toString());
    }
    {// JavaScript Array at()

      // ES2022 introdujo el método at() para arrays:

      // Ejemplos
      // Obtener el tercer elemento de frutas usando at():
      const frutas = ["Banana", "Orange", "Apple", "Mango"];
      let fruta = frutas.at(-2);
      console.log(fruta);
      // Obtener el tercer elemento de frutas usando []:
      const frutas2 = ["Banana", "Orange", "Apple", "Mango"];
      let fruta2 = frutas2[2];
      console.log(fruta2);

      // El método at() devuelve un elemento indexado de un array.
      // El método at() devuelve lo mismo que [].

      // El método at() es compatible con todos los navegadores modernos desde marzo de 2022:
      // Chrome 92    Edge 92    Firefox 90    Safari 15.4    Opera 78

      // Nota
      // Muchos lenguajes permiten la indexación de corchetes negativos como [-1] para acceder a elementos desde el final de un objeto / array / cadena.
      // Esto no es posible en JavaScript porque [] se utiliza para acceder tanto a arrays como a objetos. obj[-1] se refiere al valor de la clave -1, no a la última propiedad del objeto.
      // El método at() se introdujo en ES2022 para resolver este problema.
      console.log(frutas.at(-1));
      console.log(frutas2[-1]); //!undefined
    }
    {// JavaScript Array join()

      // El método join() también une todos los elementos de un array en una cadena.

      // Se comporta de la misma manera que toString(), pero además puedes especificar el separador:

      // Ejemplo
      const frutas = ["Banana", "Orange", "Apple", "Mango"];
      // Resultado:
      console.log
        (frutas.join(" | "));
    }
    {// Popping and Pushing

      // Cuando trabajas con arrays, es fácil quitar elementos y agregar nuevos elementos.

      // Esto es lo que significa hacer popping y pushing:

      // Hacer popping: sacar elementos de un array.
      // Hacer pushing: agregar elementos a un array.

      {// JavaScript Array pop()
        // El método pop() elimina el último elemento de un array:

        // Ejemplo
        const frutas = ["Banana", "Orange", "Apple", "Mango"];
        let fruta = frutas.pop();
        console.log
          (frutas);
        // El método pop() devuelve el valor que se "sacó":
        console.log(fruta);
      }
      {// JavaScript Array push()
        // El método push() agrega un nuevo elemento a un array (al final):

        // Ejemplo
        const frutas = ["Banana", "Orange", "Apple", "Mango"];
        let longitud = frutas.push("Kiwi");
        console.log
          (frutas);
        // El método push() devuelve la nueva longitud del array:
        console.log(longitud);
      }
    }
    {// Shifting Elements

      // Shifting es equivalente a popping, pero se trabaja en el primer elemento en lugar del último.

      {// JavaScript Array shift()
        // El método shift() elimina el primer elemento del array y "desplaza" todos los demás elementos a un índice inferior.

        // Ejemplo
        const frutas = ["Banana", "Orange", "Apple", "Mango"];
        let fruta = frutas.shift();
        console.log
          (frutas);
        // El método shift() devuelve el valor que se "desplazó":
        console.log(fruta);
      }
      {// JavaScript Array unshift()
        // El método unshift() agrega un nuevo elemento a un array (al principio) y "desplaza" los elementos más antiguos:

        // Ejemplo
        const frutas = ["Banana", "Orange", "Apple", "Mango"];
        let longitud = frutas.unshift("Kiwi");
        console.log
          (frutas);
        // El método unshift() devuelve la nueva longitud del array:
        console.log(longitud);
      }
    }
    {// Changing Elements

      // Los elementos de un array se acceden mediante su número de índice:

      // Los índices de array comienzan con 0:

      // [0] es el primer elemento del array
      // [1] es el segundo
      // [2] es el tercero ...

      // Ejemplo
      const frutas = ["Banana", "Orange", "Apple", "Mango"];
      frutas[0] = "Kiwi";

      {// JavaScript Array length
        // La propiedad length proporciona una forma sencilla de agregar un nuevo elemento a un array:

        // Ejemplo
        const frutas = ["Banana", "Orange", "Apple", "Mango"];
        frutas[frutas.length] = "Kiwi";
      }

      {// JavaScript Array delete()
        // ¡Advertencia!
        // Usar delete() deja agujeros indefinidos en el array.

        // Use pop() o shift() en su lugar.

        // Ejemplo
        const frutas = ["Banana", "Orange", "Apple", "Mango"];
        delete frutas[0];
      }
    }
    {// Merging Arrays (Concatenating)
      // En los lenguajes de programación, la concatenación significa unir cadenas de extremo a extremo.

      // Concatenar "snow" y "ball" da "snowball".

      // Concatenar arrays significa unir arrays de extremo a extremo.

      {// JavaScript Array concat()
        // El método concat() crea un nuevo array fusionando (concatenando) arrays existentes:

        // Ejemplo (Unir dos arrays)
        const misChicas = ["Cecilie", "Lone"];
        const misChicos = ["Emil", "Tobias", "Linus"];

        const misHijos = misChicas.concat(misChicos);
        console.log(misHijos);

        // Nota
        // El método concat() no cambia los arrays existentes. Siempre devuelve un nuevo array.

        // El método concat() puede tomar cualquier número de argumentos de array.

        // Ejemplo (Unir tres arrays)
        const arr1 = ["Cecilie", "Lone"];
        const arr2 = ["Emil", "Tobias", "Linus"];
        const arr3 = ["Robin", "Morgan"];
        const misHijos2 = arr1.concat(arr2, arr3);
        console.log(misHijos2);

        // El método concat() también puede tomar cadenas como argumentos:

        // Ejemplo (Unir un array con valores)
        const arr4 = ["Emil", "Tobias", "Linus"];
        const misHijos3 = arr4.concat("Peter");
        console.log(misHijos3);
      }
      {// Array copyWithin()
        // El método copyWithin() copia elementos de un array a otra posición en un array:

        // Ejemplos
        // Copiar en el índice 2, todos los elementos desde el índice 0:

        const frutas = ["Banana", "Orange", "Apple", "Mango"];
        frutas.copyWithin(2, 0);
        console.log(frutas);

        // Copiar en el índice 2, los elementos desde el índice 0 hasta el 2:

        const frutas2 = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
        frutas2.copyWithin(2, 0, 2);
        console.log(frutas2);

        // Nota
        // El método copyWithin() sobrescribe los valores existentes.

        // El método copyWithin() no agrega elementos al array.

        // El método copyWithin() no cambia la longitud del array.
      }
    }
    {// Flattening an Array
      // Aplanar un array es el proceso de reducir la dimensionalidad de un array.

      // Aplanar es útil cuando deseas convertir un array multidimensional en un array unidimensional.

      // JavaScript Array flat()
      // ES2019 introdujo el método flat() de Array.

      // El método flat() crea un nuevo array con elementos de subarrays concatenados a una profundidad especificada.

      // Ejemplo
      const miArray = [[1, 2], [3, 4], [5, 6]];
      const nuevoArray = miArray.flat();
      console.log(miArray);
      console.log(nuevoArray);

      // Soporte del navegador
      // JavaScript Array flat() es compatible con todos los navegadores modernos desde enero de 2020:

      // Chrome 69	Edge 79	Firefox 62	Safari 12	Opera 56
      // Sep 2018	Jan 2020	Sep 2018	Sep 2018	Sep 2018
    }
    {// Splicing and Slicing Arrays
      // El método splice() agrega nuevos elementos a un array.

      // El método slice() corta una porción de un array.

      {// JavaScript Array splice()
        // El método splice() se puede utilizar para agregar nuevos elementos a un array:

        // Ejemplo
        const frutas1 = ["Banana", "Orange", "Apple", "Mango"];
        frutas1.splice(2, 0, "Lemon", "Kiwi");
        console.log(frutas1);
        // El primer parámetro (2) define la posición donde se deben agregar nuevos elementos (insertados).

        // El segundo parámetro (0) define cuántos elementos se deben eliminar a partir de la posicion desde donde se agregan.

        // El resto de los parámetros ("Lemon" , "Kiwi") define los nuevos elementos que se deben agregar.

        // El método splice() devuelve un array con los elementos eliminados:
        console.log();
        // Ejemplo
        const frutas2 = ["Banana", "Orange", "Apple", "Mango"];
        const eliminados = frutas2.splice(2, 2, "Lemon", "Kiwi");
        console.log(eliminados);

        // Usar splice() para quitar elementos
        // Con una configuración inteligente de los parámetros, puedes usar splice() para quitar elementos sin dejar "huecos" en el array:

        // Ejemplo
        const frutas3 = ["Banana", "Orange", "Apple", "Mango"];
        let eliminados2 = frutas3.splice(0, 1);
        console.log(frutas3);
        console.log(eliminados2);

        {// JavaScript Array toSpliced()
          // ES2023 agregó el método Array toSpliced() como una forma segura de cortar un array sin alterar el array original.

          // La diferencia entre el nuevo método toSpliced() y el antiguo método splice() es que el nuevo método crea un nuevo array, manteniendo el array original sin cambios, mientras que el antiguo método alteraba el array original.

          // Ejemplo
          const meses = ["Ene", "Feb", "Mar", "Abr"];
          meses.splice(0, 1);
          console.log(`splice: ${meses}`);

          /* 
          * const meses2 = ["Ene", "Feb", "Mar", "Abr"];
          * meses2.toSpliced(0, 1);
          * console.log(`to Spliced: ${meses2}`);
          ? ['Ene', 'Feb', 'Mar', 'Abr']
          */
        }
      }

      {// JavaScript Array slice()
        // El método slice() corta una porción de un array en un nuevo array:

        // Ejemplo
        // Cortar una parte de un array comenzando desde el elemento del array 1 ("Orange"):

        const frutas4 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
        const citricos1 = frutas4.slice(1);
        console.log(citricos1);

        // Nota
        // El método slice() crea un nuevo array.

        // El método slice() no elimina ningún elemento del array fuente.

        // Ejemplo
        // Cortar una parte de un array comenzando desde el elemento del array 3 ("Apple"):

        const frutas5 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
        const citricos2 = frutas5.slice(0, 1);
        console.log(citricos2);

        // El método slice() puede tomar dos argumentos como slice(1, 3).

        // El método luego selecciona elementos desde el argumento de inicio, y hasta (pero no incluido) el argumento de fin.

        // Ejemplo
        const frutas6 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
        const citricos3 = frutas6.slice(1, 3);
        console.log(citricos3);

        // Si se omite el argumento de fin, como en los primeros ejemplos, el método slice() corta el resto del array.

        // Ejemplo
        const frutas7 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
        const citricos4 = frutas7.slice(2);
        console.log(citricos4);
      }
    }
    {// Automático toString()
      // JavaScript convierte automáticamente una matriz en una cadena separada por comas cuando se espera un valor primitivo.

      // Este es siempre el caso cuando intenta generar una matriz.

      // Estos dos ejemplos producirán el mismo resultado:

      // Ejemplo
      const frutas1 = ["Banana", "Orange", "Apple", "Mango"];
      console.log(frutas1.toString());

      // Ejemplo
      const frutas2 = ["Banana", "Orange", "Apple", "Mango"];
      console.log
        ("Mis frutas favoritas son: " + frutas2);
    }
  }
}
{//LOOPS
  // Bucles: while y for
  // A menudo necesitamos repetir acciones.

  // Por ejemplo, mostrar productos de una lista uno tras otro o simplemente ejecutar el mismo código para cada número del 1 al 10.

  // Los bucles son una forma de repetir el mismo código varias veces.

  // Los bucles for...of y for...in
  // Un pequeño anuncio para los lectores avanzados.

  // Este artículo cubre solo bucles básicos: while, do..while y for(..;..;..).
  {// El bucle "while"
    // El bucle "while" tiene la siguiente sintaxis:

    // while (condición) {
    //  código
    //  el llamado "cuerpo del bucle"
    // }

    // Mientras la condición sea verdadera, se ejecutará el código del cuerpo del bucle.

    // Por ejemplo, el bucle a continuación muestra i mientras i < 3:

    let i = 0;
    while (i < 3) { // muestra 0, luego 1, luego 2
      console.log(i);
      i++;
    }
    // Una sola ejecución del cuerpo del bucle se llama iteración. El bucle en el ejemplo anterior realiza tres iteraciones.

    // Si se omite i++ en el ejemplo anterior, el bucle se repetiría (en teoría) para siempre. En la práctica, el navegador proporciona formas de detener tales bucles, y en JavaScript del lado del servidor, podemos finalizar el proceso.

    // Cualquier expresión o variable puede ser una condición del bucle, no solo comparaciones: la condición se evalúa y se convierte a un booleano mediante "while".

    // Por ejemplo, una forma más corta de escribir while (i != 0) es while (i):

    let j = 3;
    while (j) { // cuando j se convierte en 0, la condición se vuelve falsa y el bucle se detiene
      console.log(j);
      j--;
    }
    // Las llaves no son necesarias para un cuerpo de una sola línea
    // Si el cuerpo del bucle tiene una sola instrucción, podemos omitir las llaves {...}:

    let k = 3;
    while (k) console.log(k--);
  }
  {// El bucle "do...while"
    // La comprobación de la condición se puede mover debajo del cuerpo del bucle utilizando la sintaxis do..while:

    let condición
    do {
      // cuerpo del bucle
    } while (condición);

    // El bucle ejecutará primero el cuerpo, luego verificará la condición y, mientras sea verdadera, lo ejecutará una y otra vez.

    // Por ejemplo:

    let i = 0;
    do {
      console.log(i);
      i++;
    } while (i <= 3);

    // Esta forma de sintaxis solo debe usarse cuando se desea que el cuerpo del bucle se ejecute al menos una vez, independientemente de si la condición es verdadera. Por lo general, se prefiere la otra forma: while (...) { ... }.
  }
  {// El bucle "for"
    // El bucle "for" es más complejo, pero también es el bucle más comúnmente utilizado.
    // Tiene la siguiente apariencia:
    let inicio, condición, paso
    for (inicio; condición; paso) {
      // ... cuerpo del bucle ...
    }

    // Aprendamos el significado de estas partes con un ejemplo. El bucle a continuación ejecuta console.log(i) para i desde 0 hasta (pero no incluyendo) 3:

    for (let i = 0; i < 3; i++) { // muestra 0, luego 1, luego 2
      console.log(i);
    }

    // Examinemos la declaración "for" parte por parte:

    // Parte "begin"
    // let i = 0
    // Se ejecuta una vez al ingresar al bucle.

    // Parte "condition"
    // i < 3
    // Se comprueba antes de cada iteración del bucle. Si es falso, el bucle se detiene.

    // Parte "body"
    // console.log(i)
    // Se ejecuta una y otra vez mientras la condición sea verdadera.

    // Parte "step"
    // i++
    // Se ejecuta después del cuerpo en cada iteración.

    // El algoritmo general del bucle funciona así:

    // Ejecutar "begin"
    // → (si la condición → ejecutar "body" y ejecutar "step")
    // → (si la condición → ejecutar "body" y ejecutar "step")
    // → (si la condición → ejecutar "body" y ejecutar "step")
    // → ...
    // Es decir, "begin" se ejecuta una vez y luego itera: después de cada prueba de condición, se ejecutan "body" y "step".

    // Si eres nuevo en los bucles, podría ayudar retroceder al ejemplo y reproducir cómo se ejecuta paso a paso en un trozo de papel.

    // Así es exactamente lo que sucede en nuestro caso:

    // for (let i = 0; i < 3; i++) console.log(i)

    // ejecutar "begin"
    let i = 0
    // si la condición → ejecutar "body" y ejecutar "step"
    if (i < 3) { console.log(i); i++ }
    // si la condición → ejecutar "body" y ejecutar "step"
    if (i < 3) { console.log(i); i++ }
    // si la condición → ejecutar "body" y ejecutar "step"
    if (i < 3) { console.log(i); i++ }
    // ...terminar, porque ahora i == 3

    // Declaración de variable en línea
    // Aquí, la variable "contador" i se declara directamente en el bucle. Esto se llama una declaración de variable "en línea". Dichas variables son visibles solo dentro del bucle.

    for (let i = 0; i < 3; i++) {
      console.log(i); // 0, 1, 2
    }
    // console.log(i); //! error, no existe tal variable

    // En lugar de definir una variable, podríamos usar una existente:

    let j = 0;

    for (j = 0; j < 3; j++) { // usar una variable existente
      console.log(j); // 0, 1, 2
    }

    console.log(j); // 3, visible, porque se declaró fuera del bucle

    {// Omisión de partes
      // Cualquier parte de "for" se puede omitir.

      // Por ejemplo, podemos omitir "begin" si no necesitamos hacer nada al comienzo del bucle.

      // Como aquí:

      let k = 0; // ya tenemos k declarado y asignado

      for (; k < 3; k++) { // no es necesario "begin"
        console.log(k); // 0, 1, 2
      }

      // También podemos quitar la parte "step":

      let l = 0;

      for (; l < 3;) {
        console.log(l++);
      }

      // Esto hace que el bucle sea idéntico a while (l < 3).

      // En realidad, podemos quitar todo, creando un bucle infinito:

      // for (;;) {
      //    se repite sin límites
      // }

      //! Ten en cuenta que los dos puntos y coma ; de "for" deben estar presentes. De lo contrario, habría un error de sintaxis.
    }
  }
  {// Romper el bucle(break)
    // Normalmente, un bucle se detiene cuando su condición se vuelve falsa.

    // Pero podemos forzar la salida en cualquier momento usando la directiva especial break.

    // Por ejemplo, el bucle a continuación le pide al usuario una serie de números, "rompiendo" cuando no se ingresa ningún número:
    let i = 1
    let suma = 1;

    while (true) {
      if (suma > 9) {
        break
      };
      i++
      console.log
        (`${suma} + ${i} =`, suma += i);
    }
    console.log('Suma: ' + suma);
    // La directiva break se activa en la línea (*) si el usuario ingresa una línea vacía o cancela la entrada. Detiene el bucle inmediatamente, pasando el control a la primera línea después del bucle. Es decir, alerta.

    // La combinación "bucle infinito + break según sea necesario" es excelente para situaciones en las que la condición de un bucle debe verificarse no al principio o al final del bucle, sino en el medio o incluso en varios lugares de su cuerpo.
  }
  {// Continuar con la siguiente iteración(continue)
    // La directiva continue es una "versión más ligera" de break. No detiene todo el bucle. En cambio, detiene la iteración actual y obliga al bucle a comenzar una nueva (si la condición lo permite).

    // Podemos usarlo si hemos terminado con la iteración actual y nos gustaría pasar a la siguiente.

    // El bucle a continuación utiliza continue para mostrar solo valores impares:

    for (let i = 0; i < 10; i++) {

      // si es verdadero, salta la parte restante del cuerpo
      if (i % 2 == 0) continue;
      console.log(i);
    }

    // La directiva continue ayuda a disminuir la anidación
    // Un bucle que muestra valores impares podría verse así:
    for (let i = 0; i < 10; i++) {
      if (i % 2) {
        console.log(i);
      };
    }
    // Desde un punto de vista técnico, esto es idéntico al ejemplo anterior. Seguramente, simplemente podemos envolver el código en un bloque if en lugar de usar continue.

    // Pero como efecto secundario, esto crea un nivel más de anidación (la llamada de alerta dentro de las llaves). Si el código dentro de if es más largo que unas pocas líneas, eso puede disminuir la legibilidad general.
  }
  {// No usar break/continue en el lado derecho de ‘?’
    // Tenga en cuenta que las construcciones de sintaxis que no son expresiones no se pueden usar con el operador ternario ?. En particular, no se permiten directivas como break/continue allí.

    // Por ejemplo, si tomamos este código:

    /*
    ?  if (i > 5) {
    ?   console.log(i);
    ? } else {
    ?  continue;
    ? }
    */
    //? (i > 5) ? console.log(i): continue; 
    //!continue no está permitido aquí ... deja de funcionar: hay un error de sintaxis.

    // Esta es solo otra razón para no usar el operador de interrogación ? en lugar de if.
  }
  {// Etiquetas para break/continue
    // A veces necesitamos salir de varios bucles anidados a la vez.

    // Por ejemplo, en el código a continuación recorremos i y j, solicitando las coordenadas (i, j) desde (0,0) hasta (2,2):

    let tablero = [];
    for (let i = 0; i < 3; i++) {
      let fila = [];
      for (let j = 0; j < 3; j++) {
        let input = i * 3 + j + 1;
        fila.push(input);
      }

      tablero.push(fila);
    }

    // Mostrar el tablero en la consola
    console.log(tablero);

    // Necesitamos una forma de detener el proceso si el usuario cancela la entrada.

    // La instrucción break ordinaria después de la entrada solo rompería el bucle interno. Eso no es suficiente; ¡las etiquetas vienen al rescate!

    // Una etiqueta es un identificador con dos puntos antes de un bucle:

    // labelName: for (...) {
    //   ...
    // }
    // La instrucción break <labelName> en el bucle a continuación sale a la etiqueta:
    console.log(!Number("a") + 0 > 0);
    let array = []
    outer: for (let i = 0; i < 3; i++) {

      for (let j = 0; j < 3; j++) {

        let input = i * 3 + j + 1;
        if (input > 5) break outer; // (*)
        array.push(input)
        // si es una cadena vacía o se cancela, entonces salga de ambos bucles
        // haz algo con el valor...
      }
    }
    console.log(array);

    // En el código anterior, break outer busca hacia arriba la etiqueta llamada outer y sale de ese bucle.

    // Entonces el control va directamente desde (*) hasta     console.log(array).

    // También podemos mover la etiqueta a una línea separada:

    // outer:
    // for (let i = 0; i < 3; i++) { ... }
    
    // La directiva continue también se puede usar con una etiqueta. En este caso, la ejecución del código salta a la siguiente iteración del bucle etiquetado.

    // Las etiquetas no permiten "saltar" a ningún lado
    // Las etiquetas no nos permiten "saltar" a un lugar arbitrario en el código.

    // Por ejemplo, es imposible hacer esto:

    // break label; // saltar a la etiqueta de abajo (no funciona)

    // label: for (...)
    // Una directiva break debe estar dentro de un bloque de código. Técnicamente, cualquier bloque de código etiquetado servirá, por ejemplo:

    // label: {
    //   // ...
    //   break label; // funciona
    //   // ...
    // }
    // ... Aunque el 99.9% del tiempo, break se usa dentro de bucles, como hemos visto en los ejemplos anteriores.

    // A continue solo es posible desde dentro de un bucle.
  }
}
