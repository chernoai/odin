{// Objetos en JavaScript

  // En JavaScript, los objetos se utilizan para almacenar colecciones de datos indexados por claves.

  // Se pueden crear objetos de dos maneras:

  // 1. Sintaxis del constructor de objetos
  let usuario = new Object(); // Sintaxis del "constructor de objetos"
  // Crea un objeto vacío

  // 2. Sintaxis literal de objetos
  let usuario2 = {}; // Sintaxis literal de objetos
  // Crea un objeto vacío, esta es la forma más común de crear objetos en JavaScript

  // Los objetos pueden contener propiedades, que son pares de "clave: valor", donde la clave es una cadena (también llamada "nombre de propiedad") y el valor puede ser cualquier cosa.

  // Por ejemplo:
  let usuario3 = {
    nombre: "Juan",
    edad: 30,
    correo: "juan@example.com"
  };
  // En este ejemplo, "nombre", "edad" y "correo" son las claves y sus respectivos valores son "Juan", 30 y "juan@example.com".

  // Los objetos en JavaScript se pueden imaginar como armarios con archivos etiquetados. Cada dato se almacena en su archivo correspondiente según la clave. Es fácil encontrar un archivo por su nombre o agregar/eliminar un archivo.
}
{// Literales y propiedades de objetos en JavaScript

  // Podemos definir propiedades dentro de {...} como pares "clave: valor":

  let usuario = {     // un objeto
    nombre: "Juan",   // la clave "nombre" almacena el valor "Juan"
    edad: 30          // la clave "edad" almacena el valor 30
  };

  // Una propiedad tiene una clave (también conocida como "nombre" o "identificador") antes de los dos puntos ":" y un valor a la derecha.
  let objeto = {
    identificadorONombre: "valor"
  }
  let propiedad = objeto.identificadorONombre
  console.log(propiedad);

  // En el objeto usuario, hay dos propiedades:
  // La primera propiedad tiene el nombre "nombre" y el valor "Juan".
  // La segunda propiedad tiene el nombre "edad" y el valor 30.

  // El valor puede ser de cualquier tipo. Podemos agregar una propiedad booleana:

  usuario.esAdmin = true;

  // Los valores de las propiedades son accesibles utilizando la notación de punto:

  console.log(usuario.nombre); // Juan
  console.log(usuario.edad); // 30

  // Para eliminar una propiedad, podemos usar el operador delete:
  delete usuario.edad;

  // También podemos usar nombres de propiedades de varias palabras, pero entonces deben estar entre comillas:

  let usuario2 = {
    nombre: "Juan",
    edad: 30,
    "le gusta los pájaros": true  // el nombre de la propiedad de varias palabras debe estar entre comillas
  };

  // La última propiedad de la lista puede terminar con una coma:
  let usuario3 = {
    nombre: "Juan",
    edad: 30,
  }; // Esta es una "coma final" o "coma colgante", hace que sea más fácil agregar/eliminar/mover propiedades, ya que todas las líneas se parecen
}
{// Corchetes en JavaScript

  // Para propiedades de varias palabras, el acceso con punto no funciona:

  //! Esto daría un error de sintaxis
  //! user.likes birds = true

  // JavaScript no lo entiende. Piensa que estamos accediendo a user.likes, y luego da un error de sintaxis cuando encuentra unexpected birds.

  // El punto requiere que la clave sea un identificador de variable válido. Eso implica: no contiene espacios, no comienza con un dígito y no incluye caracteres especiales ($ y _ están permitidos).

  // Hay una notación alternativa "corchetes" que funciona con cualquier cadena:

  let usuario = {};

  // Establecer
  usuario["le gusta los pájaros"] = true;

  // Obtener
  console.log(usuario["le gusta los pájaros"]); // true

  // Eliminar
  delete usuario["le gusta los pájaros"];

  // Ahora todo está bien. Tenga en cuenta que la cadena dentro de los corchetes está correctamente entre comillas (cualquier tipo de comillas servirá).

  // Los corchetes también proporcionan una manera de obtener el nombre de la propiedad como resultado de cualquier expresión, en lugar de una cadena literal, como de una variable de la siguiente manera:

  let clave = "le gusta los pájaros";

  // lo mismo que user["le gusta los pájaros"] = true;
  usuario[clave] = true;

  // Aquí, la variable clave puede calcularse en tiempo de ejecución o depender de la entrada del usuario. Y luego lo usamos para acceder a la propiedad. Esto nos da una gran flexibilidad.

  // Por ejemplo:
  let usuario2 = {
    nombre: "Juan",
    edad: 30
  };

  let clave2 = "nombre"

  // acceso por variable
  console.log(usuario2[clave2]); // Juan (si se ingresa "nombre")

  // La notación de punto no se puede usar de manera similar:

  let usuario3 = {
    nombre: "Juan",
    edad: 30
  };

  let clave3 = "nombre";
  console.log(usuario3.clave3) // undefined
  {// Propiedades calculadas en objetos JavaScript

    // Podemos usar corchetes en un objeto literal al crear un objeto. Eso se llama propiedades calculadas.

    // Por ejemplo:
    let fruta = "manzana";

    let bolsa = {
      [fruta]: 5, // el nombre de la propiedad se toma de la variable fruta
    };

    console.log(bolsa.manzana); // 5 si fruta="manzana"

    // El significado de una propiedad calculada es simple: [fruta] significa que el nombre de la propiedad debe tomarse de fruta.
    // Así, si un usuario ingresa "manzana", bolsa se convertirá en {manzana: 5}.

    // Básicamente, eso funciona igual que:

    let fruta2 = "manzana"
    let bolsa2 = {};

    // tomar el nombre de la propiedad de la variable fruta
    bolsa2[fruta2] = 5;

    // Pero se ve mejor.

    // Podemos usar expresiones más complejas entre corchetes:

    let fruta3 = 'manzana';
    let bolsa3 = {
      [fruta3 + 'Computadoras']: 5 // bolsa.manzanaComputadoras = 5
    };

    // Los corchetes son mucho más poderosos que la notación de punto. Permiten cualquier nombre de propiedad y variable. Pero también son más complicados de escribir.

    // Entonces, la mayoría de las veces, cuando los nombres de las propiedades son conocidos y simples, se usa el punto. Y si necesitamos algo más complejo, cambiamos a corchetes.
  }
}
{// Taquigrafía del valor de la propiedad en objetos JavaScript

  // En el código real, a menudo utilizamos variables existentes como valores para los nombres de propiedades.

  // Por ejemplo:
  function makeUser(nombre, edad) {
    return {
      nombre: nombre,
      edad: edad,
      // ...otras propiedades
    };
  }

  let usuario = makeUser("Juan", 30);
  console.log(usuario.nombre); // Juan

  // En el ejemplo anterior, las propiedades tienen los mismos nombres que las variables. El caso de uso de crear una propiedad a partir de una variable es tan común que existe una abreviatura de valor de propiedad especial para acortarlo.

  // En lugar de nombre: nombre, simplemente podemos escribir nombre, así:

  function makeUser(nombre, edad) {
    return {
      nombre, // lo mismo que nombre: nombre
      edad,  // lo mismo que edad: edad
      // ...
    };
  }
  let nombre = "Juan"
  // Podemos usar tanto propiedades normales como abreviaturas en el mismo objeto:
  let usuario2 = {
    nombre, // lo mismo que nombre: nombre
    edad: 30
  };
}
{// Limitaciones de los nombres de propiedad en objetos JavaScript

  // Como ya sabemos, una variable no puede tener un nombre igual a una de las palabras reservadas del lenguaje como "for", "let", "return", etc.

  // Pero para una propiedad de objeto, no hay tal restricción:

  // estas propiedades están bien
  let obj = {
    for: 1,
    let: 2,
    return: 3
  };

  console.log(obj.for + obj.let + obj.return);  // 6

  // En resumen, no hay limitaciones en los nombres de las propiedades. Pueden ser cualquier cadena o símbolo (un tipo especial para identificadores, que se cubrirá más adelante).

  // Otros tipos se convierten automáticamente a cadenas.

  // Por ejemplo, un número 0 se convierte en una cadena "0" cuando se usa como clave de propiedad:

  let obj2 = {
    0: "test" // igual que "0": "test"
  };

  // ambos console.logs acceden a la misma propiedad (el número 0 se convierte en la cadena "0")
  console.log(obj2["0"]); // test
  console.log(obj2[0]); // test (misma propiedad)

  // Hay un pequeño problema con una propiedad especial llamada __proto__. No podemos establecerla en un valor que no sea un objeto:

  let obj3 = {};
  obj3.__proto__ = 5; // asignar un número
  console.log(obj3.__proto__); // [object Object] - el valor es un objeto, no funcionó como se esperaba

  // Como vemos en el código, la asignación a un primitivo 5 se ignora.

  // Cubriremos la naturaleza especial de __proto__ en capítulos posteriores y sugeriremos formas de corregir dicho comportamiento.
}
{// Prueba de existencia de propiedad, operador "in"

  // Una característica notable de los objetos en JavaScript, en comparación con muchos otros lenguajes, es que es posible acceder a cualquier propiedad. ¡No habrá error si la propiedad no existe!

  // Leer una propiedad no existente simplemente devuelve undefined. Por lo tanto, podemos probar fácilmente si la propiedad existe:

  let usuario = {};

  console.log(usuario.noExiste === undefined); // true significa "no existe tal propiedad"

  // También hay un operador especial "in" para eso.

  // La sintaxis es:

  // "clave" in objeto
  // Por ejemplo:

  let usuario2 = { nombre: "Juan", edad: 30 };

  console.log("edad" in usuario2); // true, usuario2.edad existe
  console.log("ciudad" in usuario2); // false, usuario2.ciudad no existe

  // Tenga en cuenta que en el lado izquierdo de in debe haber un nombre de propiedad. Eso suele ser una cadena entre comillas.

  // Si omitimos las comillas, eso significa que una variable debe contener el nombre real a probar. Por ejemplo:

  let usuario3 = { edad: 30 };

  let clave = "edad";
  console.log(clave in usuario3); // true, la propiedad "edad" existe

  // ¿Por qué existe el operador in? ¿No es suficiente comparar con undefined?

  // Bueno, la mayor parte del tiempo, la comparación con undefined funciona bien. Pero hay un caso especial en el que falla, pero "in" funciona correctamente.

  // Es cuando una propiedad del objeto existe, pero almacena undefined:

  let obj4 = {
    prueba: undefined
  };

  console.log(obj4.prueba); // es undefined, entonces - ¿no existe tal propiedad?

  console.log("prueba" in obj4); // true, ¡la propiedad sí existe!

  // En el código anterior, la propiedad obj4.prueba técnicamente existe. Entonces el operador in funciona correctamente.

  // Situaciones como esta ocurren muy raramente, porque undefined no debería asignarse explícitamente. Usamos principalmente null para valores "desconocidos" o "vacíos". Entonces el operador in es un invitado exótico en el código.
}
{// El bucle "for..in"

  // Para recorrer todas las claves de un objeto, existe una forma especial del bucle: for..in. Esto es completamente diferente de la construcción for(;;) que estudiamos antes.

  // La sintaxis:

  // for (clave in objeto) {
  //   ejecuta el cuerpo para cada clave entre las propiedades del objeto
  // }
  // Por ejemplo, veamos todas las propiedades de usuario:

  let usuario = {
    nombre: "Juan",
    edad: 30,
    esAdmin: true
  };

  for (let clave in usuario) {
    // claves
    console.log(clave);
    // valores de las claves
    console.log(usuario[clave]);
  }

  // Tenga en cuenta que todos los constructos "for" nos permiten declarar la variable de bucle dentro del bucle, como let clave aquí.

  // Además, podríamos usar otro nombre de variable aquí en lugar de clave. Por ejemplo, "for (let prop in obj)" también se usa ampliamente.
  {// ¿Están ordenados los objetos?

    // Los objetos están "ordenados de una manera especial": las propiedades enteras se ordenan, las demás aparecen en el orden de creación. Los detalles siguen.

    // Como ejemplo, consideremos un objeto con los códigos telefónicos:

    let codigos = {
      "49": "Alemania",
      "41": "Suiza",
      "44": "Reino Unido",
      "34": "Espana",
      "1": "EE. UU."
    };

    for (let codigo in codigos) {
      console.log(codigo);
    }

    // El objeto puede usarse para sugerir una lista de opciones al usuario. Si estamos haciendo un sitio principalmente para una audiencia alemana, probablemente queramos que 49 sea el primero.

    // Pero si ejecutamos el código, vemos una imagen totalmente diferente:

    // EE. UU. (1) va primero
    // luego Suiza (41) y así sucesivamente.
    // Los códigos telefónicos van en orden ascendente, porque son enteros. Así que vemos 1, 41, 44, 49.

    // ¿Propiedades enteras? ¿Qué es eso?
    // El término "propiedad entera" aquí significa una cadena que se puede convertir de ida y vuelta a un entero sin cambios.

    // Entonces, "49" es un nombre de propiedad entero, porque cuando se transforma en un número entero y viceversa, sigue siendo el mismo. Pero "+49" y "1.2" no lo son:

    // Number(...) convierte explícitamente a un número
    // Math.trunc es una función incorporada que elimina la parte decimal
    console.log(String(Math.trunc(Number("49"))));
    // "49", igual, propiedad entera
    console.log(String(Math.trunc(Number("+49"))));
    // "49", no es igual "+49" ⇒ no es propiedad entera
    console.log(String(Math.trunc(Number("1.2"))));
    // "1", no es igual "1.2" ⇒ no es propiedad entera
    // Por otro lado, si las claves no son enteras, entonces se enumeran en el orden de creación, por ejemplo:

    let usuario = {
      nombre: "Juan",
      apellido: "Smith"
    };
    usuario.edad = 25;
    usuario.ciudad = "Barcelona"// agregar unos más

    // las propiedades no enteras se enumeran en el orden de creación
    for (let prop in usuario) {
      console.log(prop);
    }

    // Entonces, para solucionar el problema con los códigos telefónicos, podemos "engañar" haciendo que los códigos no sean enteros. Agregar un signo "+" antes de cada código es suficiente.

    // Así:

    let codigos2 = {
      "+49": "Alemania",
      "+41": "Suiza",
      "+44": "Reino Unido",
      "+34": "Espana",
      "+1": "EE. UU."
    };

    for (let codigo in codigos2) {
      console.log(+codigo);
    }

    // Ahora funciona como se esperaba.
  }
}
// Función para verificar si un objeto está vacío

function isEmpty(obj) {
  // Iteramos sobre todas las propiedades del objeto
  for (let key in obj) {
    // Si el bucle ha comenzado, significa que hay al menos una propiedad, por lo que el objeto no está vacío
    return false;
  }
  // Si el bucle no ha encontrado ninguna propiedad, significa que el objeto está vacío
  return true;
}
let emptyObj
let notEmptyObj = {
  id: "val"
}
console.log(isEmpty(emptyObj));
console.log(isEmpty(notEmptyObj));