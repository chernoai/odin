// Métodos de Array
{// Agregar y eliminar elementos

  {// Método splice: elimina elementos de un array y/o los reemplaza con nuevos elementos
    // Sintaxis: arr.splice(start, deleteCount, item1, item2, ...)
    // - start: Índice donde comenzar la modificación del array
    // - deleteCount: Número de elementos a eliminar desde start
    // - item1, item2, ...: Elementos a insertar en el array en la posición start
    // Devuelve un array con los elementos eliminados
    let arr = ["I", "go", "home"];

    // Eliminar "go" desde el índice 1
    arr.splice(1, 1);
    console.log(arr);
    // Eliminar 3 elementos desde el índice 0 y agregar "Let's" y "dance"
    let arr2 = ["I", "study", "JavaScript", "right", "now"];
    arr2.splice(0, 3, "Let's", "dance");
    console.log(arr2);

    // Eliminar los 2 primeros elementos y almacenalos en un array
    let arr3 = ["I", "study", "JavaScript", "right", "now"];
    let removed = arr3.splice(0, 2);
    console.log(removed);

    // Insertar elementos sin eliminar ninguno
    let arr4 = ["I", "study", "JavaScript"];
    arr4.splice(2, 0, "complex", "language");
    console.log(arr4);

    // Índices negativos
    let arr5 = [1, 2, 5];
    // desde el índice -1 (un paso atras desde el final)
    // Eliminar 0 elementos,
    // luego inserte 3 y 4
    arr5.splice(-1, 0, 3, 4);
    console.log(arr5);
  }
  {// Método slice: devuelve una porción de un array
    // Sintaxis: arr.slice(start, end)
    // - start: Índice donde comenzar la extracción (inclusive)
    // - end: Índice donde terminar la extracción (no inclusivo)
    // Si se omite end, se extraen todos los elementos hasta el final del array
    let arr6 = ["t", "e", "s", "t"];

    // Extraer desde el índice 1 al 3 (no inclusivo)
    console.log(arr6.slice(1, 3));
    // Extraer desde los últimos 2 elementos hasta el final
    console.log(arr6.slice(-2));
  }
  {// Método concat: combina arrays y/o valores adicionales para crear un nuevo array
    // Sintaxis: arr.concat(value1, value2, ...)
    // - value1, value2, ...: Arrays o valores a concatenar al array original
    // Devuelve un nuevo array que contiene los elementos del array original y los elementos adicionales
    let arr7 = [1, 2];

    // Concatenar con otro array
    console.log(arr7.concat([3, 4]));
    // Concatenar con múltiples arrays y valores
    console.log(arr7.concat([3, 4], [5, 6]));
    console.log(arr7.concat([3, 4], 5, 6));
  }
}
{// Método forEach: ejecuta una función para cada elemento del array
  // Sintaxis: arr.forEach(callback(currentValue, index, array))
  // - callback: Función a ejecutar para cada elemento del array
  //   - currentValue: Valor del elemento actual del array
  //   - index: Índice del elemento actual en el array
  //   - array: Array que está siendo iterado
  // No devuelve ningún valor (el resultado de la función se descarta)

  let array = ["Bilbo", "Gandalf", "Nazgul"]

  array.forEach(console.log);

  // Ejemplo más elaborado mostrando los elementos y sus posiciones en el array
  array.forEach((item, index, array) => {
    console.log
      (`${item} is at index ${index} in [${array}]`);
  });
}
{// Métodos de búsqueda en un array: indexOf, lastIndexOf e includes

  // indexOf(item, from): busca el elemento item desde el índice from y devuelve su índice, o -1 si no se encuentra
  // Por lo general, se usan con un solo argumento para buscar el elemento deseado
  let arr = [1, 0, false];

  // Ejemplo utilizando indexOf
  console.log(arr.indexOf(0));
  console.log(arr.indexOf(false));
  console.log(arr.indexOf(null));

  // includes(item, from): busca el elemento item desde el índice from y devuelve true si se encuentra, false de lo contrario
  // Ejemplo utilizando includes
  console.log(arr.includes(1)); // true

  // lastIndexOf: similar a indexOf pero busca de derecha a izquierda
  let fruits = ['Apple', 'Orange', 'Apple'];
  console.log(fruits.indexOf('Apple'));
  console.log(fruits.lastIndexOf('Apple'));

  // includes maneja correctamente NaN
  const arrWithNaN = [NaN];
  console.log(arrWithNaN.indexOf(NaN));
  // -1 (incorrecto, debería ser 0)
  console.log(arrWithNaN.includes(NaN));
  // true (correcto)
  {// Métodos de búsqueda en un array: find, findIndex, findLastIndex y filter
    // find(fn): busca un elemento en el array que cumpla con una condición específica y devuelve el elemento, o undefined si no se encuentra ninguno
    let users = [
      { id: 1, name: "John" },
      { id: 2, name: "Pete" },
      { id: 3, name: "Mary" },
      { id: 4, name: "John" }
    ];

    // Usando find para encontrar un usuario con id == 1
    let user = users.find(item => item.id == 1);
    console.log(user.name);

    // findIndex(fn): busca el índice de un elemento en el array que cumpla con una condición específica y devuelve su índice, o -1 si no se encuentra ninguno
    // Usando findIndex para encontrar el índice del primer usuario con nombre "John"
    console.log
      (users.findIndex(user => user.name == 'John'));

    // findLastIndex(fn): similar a findIndex pero busca de derecha a izquierda, devolviendo el índice del último elemento que cumple la condición

    // Usando findLastIndex para encontrar el índice del último usuario con nombre "John"
    console.log
      (users.findLastIndex(user => user.name == 'John'));

    // filter(fn): crea un nuevo array con todos los elementos que cumplan con una condición específica
    // Usando filter para encontrar todos los usuarios con id < 3
    let someUsers = users.filter(item => item.id < 3);
    console.log(someUsers.length);
  }
}
{// Método map para transformar un array
  // map(fn): llama a la función para cada elemento del array y devuelve un nuevo array con los resultados
  let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
  console.log(lengths);

  {//Método sort(): ordena el array in situ, cambiando su orden de elementos
    // Retorna el array ordenado, aunque generalmente se ignora ya que el propio arr se modifica

    console.log(lengths.sort());

    let arr = [1, 2, 15];

    // el método reordena el contenido de arr
    arr.sort();

    console.log(arr);

    // A menos que se especifique, el método sort ordena los elementos como strings
    // Para ordenar como números, se puede proporcionar una función de comparación
    function compareNumeric(a, b) {
      if (a > b) return 1;
      if (a == b) return 0;
      if (a < b) return -1;
    }

    let arr2 = [1, 2, 15];
    arr2.sort(compareNumeric);
    console.log(arr2);

    // También se pueden usar funciones de flecha para una sintaxis más compacta
    let arr3 = [1, 2, 15];
    arr3.sort((a, b) => a - b);
    console.log(arr3);

    // Para comparar strings correctamente, especialmente para idiomas con letras acentuadas, se puede usar localeCompare
    let countries = ['Österreich', 'Andorra', 'Vietnam'];
    console.log
      (countries.sort((a, b) => a.localeCompare(b)));
  }
  // Método reverse para revertir el orden de un array
  // reverse(): invierte el orden de los elementos en arr
  let arr = [1, 2, 3, 4, 5];
  arr.reverse();

  console.log(arr);

  {// Métodos split y join para convertir entre cadenas y arrays
    // split(delim): divide una cadena en un array utilizando el delimitador especificado delim

    // Ejemplo de split: dividir una cadena de nombres separados por comas y espacios en un array
    let names = 'Bilbo, Gandalf, Nazgul';
    let arr = names.split(', ');
    console.log(arr);
    for (let name of arr) {
      console.log
        (`Un mensaje para ${name}.`);
    }

    // Ejemplo de split con límite: dividir una cadena de nombres con un límite de 2 elementos en un array
    let arrLimited = 'Bilbo, Gandalf, Nazgul, Saruman'.split(', ', 2);
    console.log(arrLimited);

    // Ejemplo de split en letras: dividir una cadena en un array de letras
    let str = "test";
    console.log(str.split(''));

    // join(glue): une los elementos de un array en una cadena utilizando el pegamento especificado glue

    // Ejemplo de join: unir los elementos de un array en una cadena utilizando ;
    let arrNames = ['Bilbo', 'Gandalf', 'Nazgul'];
    let strJoined = arrNames.join(';');
    console.log(strJoined);
  }
  {// Métodos reduce y reduceRight
    // Estos métodos se utilizan para calcular un único valor basado en el array.
    // reduce(fn, initial) y reduceRight(fn, initial) son métodos que permiten reducir un array a un solo valor mediante una función.
    // fn es la función que se ejecuta en cada elemento del array, accumulator es el valor acumulado hasta el momento, item es el elemento actual, index es el índice actual y array es el array original.
    // reduceRight es similar a reduce, pero comienza desde el último elemento del array y avanza hacia el primero.
    let arr = [1, 2, 3, 4, 5];

    // Calcula la suma de todos los elementos del array usando reduce
    let result = arr.reduce((sum, current) => sum + current, 0);
    console.log(result);

    // La función reduce pasa el resultado acumulado de una llamada a la siguiente como primer argumento
    // En cada llamada, sum es el resultado acumulado de las llamadas anteriores y current es el elemento actual del array
    // En este caso, se suman todos los elementos del array, comenzando con 0 como valor inicial

    // También se puede usar reduce sin un valor inicial
    // En ese caso, reduce tomará el primer elemento del array como valor inicial
    let resultWithoutInitial = arr.reduce((sum, current) => sum + current);
    console.log(resultWithoutInitial);
  }
}
{// Array.isArray
  // El método Array.isArray verifica si un valor dado es un array y devuelve true si es así, y false en caso contrario
  console.log(Array.isArray({})); // false, porque {} es un objeto, no un array
  console.log(Array.isArray([])); // true, porque [] es un array

  // Es útil para distinguir entre un objeto y un array cuando typeof devuelve "object" para ambos
}
{// La mayoría de los métodos admiten "thisArg"
  // Casi todos los métodos de array que llaman funciones, como find, filter, map, excepto sort, aceptan un parámetro adicional opcional llamado thisArg.
  // Este parámetro no se explicó en las secciones anteriores porque rara vez se usa, pero para completitud, lo cubriremos aquí.

  let army = {
    minAge: 18,
    maxAge: 27,
    canJoin(user) {
      return user.age >= this.minAge && user.age < this.maxAge;
    }
  };

  let users = [
    { age: 16 },
    { age: 20 },
    { age: 23 },
    { age: 30 }
  ];

  // Encontrar usuarios que puedan unirse al ejército según el método canJoin del objeto army
  let soldiers = users.filter(army.canJoin, army);

  console.log(soldiers.length); // 2
  console.log(soldiers[0].age); // 20
  console.log(soldiers[1].age); // 23

  // Si usamos users.filter(army.canJoin) sin thisArg, army.canJoin se llamaría como una función independiente, con this=undefined, lo que provocaría un error.
  // users.filter(user => army.canJoin(user)) hace lo mismo y es más comúnmente utilizado.
}
{//RESUMEN
  // Métodos para añadir/eliminar elementos:

  // push(...items) - agrega elementos al final
  // pop() - extrae un elemento del final
  // shift() - extrae un elemento del principio
  // unshift(...items) - agrega elementos al principio
  // splice(pos, deleteCount, ...items) - en la posición pos, elimina deleteCount elementos e inserta los elementos
  // slice(start, end) - crea un nuevo array, copiando elementos desde la posición start hasta end (sin incluir)
  // concat(...items) - devuelve un nuevo array: copia todos los miembros del array actual y agrega los elementos proporcionados. Si alguno de los elementos es un array, se toman sus elementos
  // Búsqueda entre elementos:

  // indexOf/lastIndexOf(item, pos) - busca el item comenzando desde la posición pos, devuelve el índice o -1 si no se encuentra
  // includes(value) - devuelve true si el array tiene value, de lo contrario false
  // find/filter(func) - filtra los elementos a través de la función, devuelve el primer/todos los valores que hacen que devuelva true
  // findIndex es como find, pero devuelve el índice en lugar de un valor
  // Iteración sobre elementos:

  // forEach(func) - llama a func para cada elemento, no devuelve nada
  // Transformar el array:

  // map(func) - crea un nuevo array con los resultados de llamar func para cada elemento
  // sort(func) - ordena el array in situ, luego lo devuelve
  // reverse() - invierte el array in situ, luego lo devuelve
  // split/join - convierte una cadena en array y viceversa
  // reduce/reduceRight(func, initial) - calcula un valor único sobre el array llamando a func para cada elemento y pasando un resultado intermedio entre las llamadas
  // Adicionalmente:

  // Array.isArray(value) verifica si value es un array, si es así devuelve true, de lo contrario false

  // Tenga en cuenta que los métodos sort, reverse y splice modifican el array mismo.

  // Estos métodos son los más utilizados, cubren el 99% de los casos de uso.

  // arr.some(fn)/arr.every(fn) - comprueban el array

  // La función fn se llama en cada elemento del array similar a map. Si algún/todos los resultados son true, devuelve true, de lo contrario false.

  // Estos métodos se comportan de alguna manera como los operadores || y &&: si fn devuelve un valor verdadero, arr.some() devuelve inmediatamente true y deja de iterar sobre el resto de elementos; si fn devuelve un valor falso, arr.every() devuelve inmediatamente false y deja de iterar sobre el resto de elementos también.

  // Podemos usar every para comparar arrays:

  // function arraysEqual(arr1, arr2) {
  //   return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
  // }

  // console.log( arraysEqual([1, 2], [1, 2])); // true

  // arr.fill(value, start, end) - llena el array con el valor repetido desde el índice start hasta el índice end
  // arr.copyWithin(target, start, end) - copia sus elementos desde la posición start hasta la posición end dentro de sí mismo, en la posición target (sobrescribe los existentes)
  // arr.flat(depth)/arr.flatMap(fn) - crea un nuevo array plano a partir de un array multidimensional

  // Para la lista completa, consulta el manual.
}
