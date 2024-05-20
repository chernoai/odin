{// Cucharadas de alcance:
  // El "alcance(scopes)" de una variable indica dónde está disponible en el código, ya sea globalmente o localmente dentro de una función o bloque de código delimitado por llaves {}.

  // En JavaScript antes de ECMAScript 6, las variables declaradas con la palabra clave var tenían un alcance de función, lo que significa que solo estaban disponibles dentro de la función en la que se declararon.

  // En ECMAScript 6, se introdujeron las palabras clave let y const, que permiten definir variables con alcance de bloque, lo que significa que solo están disponibles dentro del bloque de código más cercano delimitado por llaves {}.

  // Ejemplo:
  let globalAge = 23; // Variable global

  function printAge(age) {
    var varAge = 34; // Variable con alcance de función

    if (age > 0) {
      const constAge = age * 2; // Variable con alcance de bloque dentro del bloque del if
      console.log(constAge);
    }

    // ERROR! Intentamos acceder a una variable con alcance de bloque fuera de su ámbito
    //! console.log(constAge);
  }

  printAge(globalAge);

  // ERROR! Intentamos acceder a una variable con alcance de función fuera de la función donde está definida
  //! console.log(varAge);
}
{// Cierres (Closures):
  // Los cierres son una combinación de una función y el estado circundante en el que se declaró la función.
  // El estado circundante, también conocido como entorno léxico, consiste en cualquier variable local que estaba dentro del alcance en el momento en que se realizó el cierre.
  // Los cierres permiten que las funciones accedan y manipulen variables externas incluso después de que la función haya sido ejecutada y haya salido de su alcance original.

  // Ejemplo de cierre:
  function makeAdding(firstNumber) {
    const first = firstNumber; // Variable local dentro de makeAdding
    return function resulting(secondNumber) {
      const second = secondNumber; // Variable local dentro de resulting
      return first + second; // Acceso a la variable first fuera del alcance actual
    }
  }

  // Creación de una función add5 usando makeAdding
  const add5 = makeAdding(5);
  console.log(add5(2));

  // Explicación:
  // - La función makeAdding devuelve una función que suma un número dado a firstNumber.
  // - Cuando se ejecuta makeAdding y se asigna el resultado a add5, se crea un cierre que captura el entorno léxico de makeAdding, incluida la variable first.
  // - Por lo tanto, cuando llamamos a add5 con un argumento, la función resulting tiene acceso al valor de first almacenado en el cierre y lo suma al segundo argumento.
  // - Esto demuestra cómo los cierres permiten que las funciones accedan a variables fuera de su alcance original.
}
{//Mi Explicacion de los clousers
  function mesa() {
    let bebidas = 0
    return function incrementar() {//Aqui se invoca la funcion incrementar y se suma 1 a bebidas
      bebidas++
      return `Ha bebido ${bebidas} veces`
    }
  }
  // Cuando se almacena una funcion en una varibale la funcion se ejecuta en el contexto de la variable y todo lo que pase sera guardado en ese contexto
  const persona1 = mesa(); // persona1 es igual a lo que retorne mesa persona == incrementar fn  
  console.log(persona1());
  // Al invocar perosna1 que es igual a incrementar ejecutamos la funcion incrementar y el resultado es lo que retorne 
  console.log(persona1());
  console.log(persona1());

  const persona2 = mesa();
  console.log(persona2());
}
{// Entonces, ¿qué les pasa a los constructores?:
  // Los constructores en JavaScript tienen ciertos problemas, lo que ha llevado a la adopción de un patrón alternativo: las funciones de fábrica.

  // Los problemas con los constructores incluyen:
  // 1. La necesidad de usar la palabra clave new al crear instancias, de lo contrario, puede causar errores difíciles de rastrear y entender.
  // 2. El funcionamiento de instanceof puede no ser confiable, ya que comprueba la presencia del prototipo de constructor en la cadena de prototipos del objeto, lo que no garantiza que el objeto se haya creado con ese constructor.

  // El patrón de funciones de fábrica es similar a los constructores, pero evita estos problemas:

  // Ejemplo de función de fábrica:
  function createPerson(name, age) {
    return {
      name: name,
      age: age,
      sayHello: function () {
        return 'Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old.';
      }
    };
  }

  // Uso de la función de fábrica para crear objetos
  const person1 = createPerson('Alice', 30);
  const person2 = createPerson('Bob', 25);
  console.log
    (person1.sayHello());
  console.log
    (person2.sayHello());
  // En este enfoque, no se necesita la palabra clave new y se evitan los problemas asociados con los constructores.
  // Además, instanceof se vuelve más confiable ya que no depende de la cadena de prototipos.
}
{// Funciones de fábrica:
  // Las funciones de fábrica son similares a los constructores, pero utilizan cierres en lugar de prototipos.
  // En lugar de utilizar la palabra clave new para crear un objeto, las funciones de fábrica devuelven un nuevo objeto cuando se invoca la función.
  // Estas funciones evitan el uso del prototipo, lo que puede resultar en una penalización de rendimiento, pero en general, esta penalización no es significativa a menos que se estén creando miles de objetos.

  // Ejemplo de función de fábrica:
  function createUser(name, edad) {
    const discordName = "@" + name;
    return { name, discordName, edad }
  }
  console.log(createUser("cheerno", 21));
  // Comparación con una función constructora:
  // La función constructora
  const User = function (name) {
    this.name = name;
    this.discordName = "@" + name;
  }

  const user = new User("cherno")
  console.log(user);
  {// La notación taquigráfica de objetos:
    // La notación taquigráfica de objetos es una característica introducida en ECMAScript 2015 que permite crear objetos de forma más concisa, especialmente cuando las variables que se utilizan para asignar valores tienen el mismo nombre que las propiedades del objeto.

    // Ejemplo de notación taquigráfica de objetos:
    const name = "Bob";
    const age = 28;
    const color = "red";

    // Creación de un objeto utilizando la notación taquigráfica
    const nowFancyObject = { name, age, color };

    // Esta forma de crear el objeto es equivalente a:
    // const nowFancyObject = { name: name, age: age, color: color };

    // Ahora podemos imprimir el objeto de manera ordenada
    console.log
      (name, age, color);
    console.log
      ({ name, age, color });
    // Esto imprime: { name: "Bob", age: 28, color: "red" }
  }
  {// Desestructurando:
    // La desestructuración es una característica de JavaScript que permite extraer valores de objetos o matrices de una manera más concisa y legible, asignándolos a variables con el mismo nombre o a variables con nombres específicos.

    // Ejemplo de desestructuración con un objeto:
    const obj = { a: 1, b: 2 };

    // Desestructuración del objeto
    const { a, b } = obj;

    // Ahora tenemos las variables 'a' y 'b' con los valores 1 y 2 respectivamente
    // Esto es equivalente a:
    // const a = obj.a;
    // const b = obj.b;
    console.log(a);
    console.log(b);

    // Ejemplo de desestructuración con una matriz:
    const array = [1, 2, 3, 4, 5];

    // Desestructuración de la matriz
    const [index0, index1] = array;

    // Ahora tenemos las variables 'index0' y 'index1' con los valores 1 y 2 respectivamente
    // Esto es equivalente a:
    // const index0 = array[0];
    // const index1 = array[1];

    console.log(index0);
    console.log(index1);
  }
  {//EJERCICIOS
    // Ejercicio de funciones de fábrica:
    function createProduct(name, price) {
      // La función createProduct toma dos parámetros: 'name' y 'price'.
      // Retorna un objeto que representa un producto con propiedades 'name' y 'price'.
      // Además, agrega un método llamado getPriceWithTax para calcular el precio del producto con un impuesto del 10%.
      return {
        name,
        price,
        getPriceWithTax: function () {
          return this.price * 1.1; // Calcula el precio con impuesto del 10%
        }
      };
    }

    const producto1 = createProduct("manzana", 0.5);
    console.log(producto1.getPriceWithTax()); // Imprime el precio con impuesto del producto


    // Ejercicio de notación taquigráfica de objetos:
    let nombre = "Cherno";
    let edad = 21;
    let ciudad = "Brimingham";

    // Crea un objeto utilizando la notación taquigráfica de objetos con las variables 'nombre', 'edad' y 'ciudad' como propiedades.
    let persona = { nombre, edad, ciudad };
    console.log(persona); // Imprime el objeto creado


    // Ejercicio de desestructuración:
    // Define un objeto 'person' con propiedades 'name' y 'age'.
    let person = {
      name: "Cherno",
      age: 21
    };

    // Utiliza la desestructuración para extraer las propiedades 'name' y 'age' del objeto 'person' en variables separadas.
    const { name, age } = person;
    console.log(age); // Imprime la edad extraída del objeto 'person'

    // Define una matriz 'numbers' con algunos números.
    let array = [1, 2, 3, 4, 5];

    // Utiliza la desestructuración para extraer los primeros dos números de la matriz 'numbers' en variables separadas.
    let [index0, index1] = array;
    console.log(index0); // Imprime el primer número extraído de la matriz 'numbers'
  }
}
{// Variables privadas y funciones.:
  // Las funciones de fábrica pueden utilizar cierres para crear variables y funciones privadas dentro de la función de fábrica misma.
  // Esto permite mantener ciertas variables y funciones dentro de la función de fábrica como privadas, sin exponerlas en el objeto devuelto.

  // Ejemplo de función de fábrica con variables y funciones privadas:
  function createUser(name) {
    const discordName = "@" + name;

    // Variables privadas
    let reputation = 0;

    // Funciones privadas para acceder y modificar las variables privadas
    const getReputation = () => reputation;
    const giveReputation = () => reputation++;

    // Devolvemos un objeto que solo contiene las propiedades y funciones necesarias para interactuar con el usuario
    return { name, discordName, getReputation, giveReputation };
  }

  // Crear un nuevo usuario
  const josh = createUser("josh");

  // Interactuar con el usuario utilizando las funciones devueltas
  function increaseReputetion(user, veces) {
    for (let i = 0; i < veces; i++) {
      user.giveReputation();
    }
  }
  increaseReputetion(josh, 12)

  // Mostrar información sobre el usuario
  console.log({
    discordName: josh.discordName,
    reputation: josh.getReputation()
  });
}
{// Herencia prototípica con fábricas.:
  // Al utilizar funciones de fábrica, también podemos lograr herencia prototípica, permitiendo que un objeto tenga acceso a las propiedades y métodos de otro.

  // Ejemplo de herencia prototípica con funciones de fábrica:
  // Creamos una PlayerFactory que extiende la funcionalidad de la UserFactory
  function createPlayer(name, level) {
    // Creamos un usuario usando la función de fábrica createUser
    const { getReputation, giveReputation } = createUser(name);

    // Agregamos funcionalidades específicas de Player
    const increaseLevel = () => level++;

    // Devolvemos un objeto que contiene las propiedades y funciones tanto de User como de Player
    return { name, getReputation, giveReputation, increaseLevel };
  }
  function leveling(user, veces) {
    for (let i = 0; i < veces; i++) {
      user.increaseLevel();
    }
  }

  const cherX = createPlayer("cherX", 15)
  increaseReputetion(cherX, 8)

  console.log(cherX.getReputation());

  {// Alternativamente, podemos usar Object.assign para mezclar propiedades de diferentes objetos
    function createPlayer2(name, level) {
      // Creamos un usuario usando la función de fábrica createUser
      const user = createUser(name);

      // Agregamos funcionalidades específicas de Player usando Object.assign
      const increaseLevel = () => level++;

      // Mezclamos las propiedades de user y las propiedades específicas de Player
      return Object.assign({}, user, { increaseLevel });
    }

    const lukaBejo = createPlayer2("lukabj", 4)
    increaseReputetion(lukaBejo, 3)
    console.log(lukaBejo.getReputation());
    console.log(lukaBejo instanceof createUser);

  }
  {//EJERCICIOS
    // Definición de la función para crear un empleado
    function crearEmpleado(nombre, fechaContratacion, salario = 10.44) {
      // Formatea el salario con el símbolo de libra y "/hora"
      salario = `£${salario}/hora`;
      // Devuelve un objeto con las propiedades nombre, salario y fechaContratacion
      return { nombre, salario, fechaContratacion };
    }

    // Definición de la función para crear un empleado a tiempo completo
    function crearEmpleadoTiempoCompleto(nombre, fechaContratacion, tipo, salario = 10.44) {
      // Crea un empleado utilizando la función crearEmpleado
      const empleado = crearEmpleado(nombre, fechaContratacion, salario);
      // Calcula el salario mensual para un empleado a tiempo completo
      salarioMensual = () => Math.floor(salario * 40 * 4); // Se asume un mes de 4 semanas
      // Devuelve un nuevo objeto que combina las propiedades del empleado con el salario mensual y el tipo de empleado
      return Object.assign({}, empleado, { salarioMensual, tipo });
    }

    // Definición de la función para crear un empleado a tiempo parcial
    function crearEmpleadoTiempoParcial(nombre, fechaContratacion, tipo, salario = 10.44) {
      // Crea un empleado utilizando la función crearEmpleado
      const empleado = crearEmpleado(nombre, fechaContratacion);
      // Calcula el salario mensual para un empleado a tiempo parcial
      salarioMensual = () => Math.floor(salario * 20 * 4); // Se asume un mes de 4 semanas
      // Devuelve un nuevo objeto que combina las propiedades del empleado con el salario mensual y el tipo de empleado
      return Object.assign({}, empleado, { tipo, salarioMensual });
    }

    // Definición de la función para crear un empleado por contrato
    function crearEmpleadoPorContrato(nombre, fechaContratacion, tipo, proyectos, salarioPorProyecto = 700) {
      // Crea un empleado utilizando la función crearEmpleado
      const empleado = crearEmpleado(nombre, fechaContratacion);
      // Calcula el salario mensual para un empleado por contrato
      salarioMensual = () => proyectos * salarioPorProyecto;
      // Devuelve un nuevo objeto que combina las propiedades del empleado con el salario mensual, el tipo de empleado y el número de proyectos
      return Object.assign({}, empleado, { tipo, salarioMensual });
    }

    // Creación de tres empleados utilizando las funciones de fábrica
    const cherno = crearEmpleadoTiempoCompleto("Cherno", "12/05/2023", "Completo");
    const luka = crearEmpleadoTiempoParcial("Luka", "05/02/2024", "Parcial");
    const enzo = crearEmpleadoPorContrato("Enzo", "08/01/2024", "Por Contrato", 3);

    // Impresión del salario mensual de cada empleado
    console.log(cherno.salarioMensual());
    console.log(luka.salarioMensual());
    console.log(enzo.salarioMensual());
  }
}
{// El patrón del módulo - IIFE:
  // El patrón del módulo (IIFE) permite encapsular variables y funciones en un módulo, evitando la contaminación del espacio global y proporcionando un espacio de nombres para evitar colisiones de nombres.

  // Ejemplo del patrón del módulo utilizando una calculadora:
  const calculator = (function () {
    // Funciones privadas del módulo
    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const mul = (a, b) => a * b;
    const div = (a, b) => a / b;

    // Devolvemos un objeto que expone las funciones públicas
    return { add, sub, mul, div };
  })();

  // Uso de las funciones públicas del módulo
  console.log(calculator.add(3, 5));
  console.log(calculator.sub(6, 2));
  console.log(calculator.mul(3, 3));
  console.log(calculator.div(8, 4));
}