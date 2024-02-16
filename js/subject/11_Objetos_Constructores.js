{// Introduccion
  // Hay varias formas de definir objetos, pero en la mayoría de los casos, es mejor utilizar la sintaxis literal del objeto de la siguiente manera:

  const myObject = {
    property: 'Value!',
    otherProperty: 77,
    "obnoxious property": function () {
      // do stuff!
    }
  };

  // También hay dos formas de obtener información de un objeto: notación de puntos y notación de corchetes.

  // notación de puntos
  myObject.property; // 'Value!'

  // notación de corchetes
  myObject["obnoxious property"]; // [Function]

  // El método que utilice dependerá del contexto. La notación de puntos es más limpia y suele ser la preferida, pero hay muchas circunstancias en las que no es posible utilizarla. Por ejemplo, myObject."obnoxious property" no funcionará porque esa propiedad es una cadena con un espacio. Del mismo modo, no puedes utilizar variables en notación de puntos:

  const variable = 'property';

  myObject.variable; // esto nos da 'undefined' porque está buscando una propiedad llamada 'variable' en nuestro objeto

  myObject[variable]; // esto es equivalente a myObject['property'] y devuelve 'Value!'
}
{// Objetos como patrón de diseño.:
  // Los objetos son una forma de organizar el código agrupando información relacionada.
  // Comparando dos enfoques en un juego de 'tic tac toe', el segundo enfoque usando objetos tiene ventajas significativas en términos de legibilidad y mantenibilidad del código.

  // Ejemplo uno: utilizando variables individuales para cada jugador
  const playerOneName = "tim";
  const playerTwoName = "jenn";
  const playerOneMarker = "X";
  const playerTwoMarker = "O";

  // Ejemplo dos: utilizando objetos para representar a cada jugador
  const playerOne = {
    name: "tim",
    marker: "X"
  };

  const playerTwo = {
    name: "jenn",
    marker: "O"
  };

  // La ventaja del segundo enfoque es que permite operaciones más claras y flexibles con los datos de los jugadores.

  // Función para imprimir el nombre de un jugador
  function printName(player) {
    console.log(player.name);
  }
  printName(playerOne)
  // La función printName no sería posible de implementar de manera similar con el primer enfoque.

  // Función para mostrar el nombre del jugador ganador
  function gameOver(winningPlayer) {
    console.log("Congratulations!");
    console.log(winningPlayer.name + " is the winner!");
  }
  gameOver(playerTwo)
  // Utilizando objetos, es más fácil manejar situaciones complejas, como un juego con más de dos jugadores o un sistema de inventario en un sitio web de compras.
}
{// Constructores de objetos:
  // Los constructores de objetos son funciones que se utilizan para crear múltiples instancias de objetos con la misma estructura.
  // Esto es útil cuando se necesita duplicar un tipo específico de objeto, como jugadores en un juego o elementos de inventario.

  // Definición de un constructor de objetos para representar jugadores
  function Player(name, marker) {
    this.name = name;
    this.marker = marker;
  }
  // Creación de instancias de objetos utilizando el constructor
  const player = new Player('steve', 'X');
  console.log(player.name); // 'steve'

  // Además de las propiedades, es posible agregar métodos al objeto utilizando el constructor.
  // Método para imprimir el nombre del jugador
  function Player(name, marker) {
    this.name = name;
    this.marker = marker;
    this.sayName = function () {
      return this.name
    };
  }

  // Creación de instancias de objetos utilizando el constructor
  const player1 = new Player('steve', 'X');
  const player2 = new Player('john', 'O');

  // Llamada a métodos para imprimir los nombres de los jugadores
  console.log(player1.sayName());
  console.log(player2.sayName());
  {//Ejercicio
    function Book(title, author, pages, read) {
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.read = read;
      this.info = function () {
        return `${this.title} by ${this.author}, ${pages}, ${this.read}`
      }
    }
    const elExtrnajero = new Book("The Strange", "Albert Camus", 139, "already read")
    console.
      log(elExtrnajero.info());
  }
}
{// El Prototipo:
  // En JavaScript, todos los objetos tienen un prototipo, que es otro objeto del que heredan propiedades y métodos.
  // El prototipo es un objeto adicional al objeto original y proporciona acceso a propiedades y funciones que pueden ser compartidas entre múltiples instancias de objetos.
  function Player(name, marker) {
    this.name = name;
    this.marker = marker;
  }
  const player1 = new Player("tim", "X")
  const player2 = new Player("jenn", "0")
  console.log(player1.name);
  console.log(player2.name);
  // 1. Todos los objetos en JavaScript tienen un prototipo.
  // Cada objeto en JavaScript tiene un prototipo, que es un objeto del que hereda propiedades y métodos.

  // 2. El prototipo es un objeto más…
  // El prototipo es simplemente otro objeto en JavaScript que puede tener propiedades y funciones.

  // 3. …que el objeto original hereda y tiene acceso a todos los métodos y propiedades de su prototipo.
  // Los objetos heredan propiedades y métodos de su prototipo, lo que significa que tienen acceso a ellos como si fueran propias.

  ///4. Definir propiedades o métodos "sobre" el prototipo:
  // - Al adjuntar propiedades o métodos al prototipo del constructor, se garantiza que estén disponibles para todas las instancias de objetos creadas a partir de ese constructor.

  // Ejemplo de definir una función en el prototipo del constructor de objetos Player:
  Player.prototype.sayHello = function () {
    console.log("Hello, I'm a player!");
  };

  // La función sayHello ahora está disponible para todas las instancias de objetos Player:
  player1.sayHello(); // imprime "Hello, I'm a player!"
  player2.sayHello(); // imprime "Hello, I'm a player!"

  {// Accediendo al prototipo de un objeto
    // Para acceder al prototipo de un objeto, se puede utilizar la función Object.getPrototypeOf().
    console.log
      (Object.getPrototypeOf(player1));
    // Verificar si el prototipo de player1 es igual al prototipo definido en Player.prototype
    console.log(Object.getPrototypeOf(player1) === Player.prototype);
    // Verificar si el prototipo de player2 es igual al prototipo definido en Player.prototype
    console.log(Object.getPrototypeOf(player2) === Player.prototype);;

    // En JavaScript, todos los objetos tienen un prototipo, que se puede verificar utilizando la función Object.getPrototypeOf().
    // El prototipo es otro objeto que contiene propiedades y métodos que pueden ser heredados por los objetos creados a partir de un constructor de objetos.
    // Al definir propiedades o métodos en el prototipo de un constructor de objetos, se asegura que estén disponibles para todas las instancias de objetos creadas a partir de ese constructor.
  }
  {// Object.getPrototypeOf() frente a .__proto__ frente a [[Prototipo]]:
    // Además de Object.getPrototypeOf(), también se puede acceder al prototipo de un objeto utilizando la propiedad .__proto__, aunque esta forma está en desuso y no se recomienda.
    // La notación [[Prototype]] también se puede encontrar en algunos contextos, pero es simplemente otra forma de referirse a la propiedad .__proto__.

    // No se recomienda usar .__proto__ para acceder al prototipo de un objeto:
    // - Aunque es posible acceder al prototipo de un objeto utilizando la propiedad .__proto__, esta forma está en desuso y no es estándar.
    // - No se recomienda su uso debido a su estado de desuso.

    // Ejemplo de acceso al prototipo utilizando .__proto__ (no recomendado):
    console.log(player1.__proto__ === Player.prototype);
    console.log(player2.__proto__ === Player.prototype);
    // La notación [[Prototype]] también puede encontrarse en algunos contextos:
    // - [[Prototype]] es otra forma de hablar sobre la propiedad .__proto__ de un objeto.
    // - Es importante tener en cuenta que es simplemente una forma alternativa de referencia y no se utiliza comúnmente en el código moderno.

    // En resumen, aunque existen múltiples formas de acceder al prototipo de un objeto, se recomienda utilizar Object.getPrototypeOf() por su compatibilidad y claridad en el código.
  }
  {// Herencia prototípica:
    // La herencia prototípica en JavaScript permite a los objetos heredar propiedades y métodos de otros objetos a través de la cadena de prototipos.
    // Los objetos pueden heredar propiedades y métodos de un prototipo compartido para ahorrar memoria y proporcionar una estructura más eficiente.

    // 1. Definir propiedades y funciones comunes en el prototipo:
    // - Permite ahorrar memoria al definir propiedades y métodos compartidos una vez en un objeto prototipo en lugar de en cada instancia de objeto.

    // 2. Herencia de prototipos:
    // - Los objetos pueden heredar propiedades y métodos de su prototipo, así como de los prototipos de los prototipos, formando una cadena de prototipos.
    // - Esto permite que los objetos accedan a propiedades y métodos definidos en prototipos compartidos.

    // Ejemplo de herencia de prototipos:
    // - Player.prototype hereda de Object.prototype, lo que significa que las propiedades y métodos definidos en Object.prototype están disponibles para Player.prototype y, por lo tanto, para todas las instancias de objetos creadas a partir de Player.
    // - Cuando un objeto no encuentra una propiedad o método en sí mismo, busca en su prototipo, y si no lo encuentra, sigue buscando en la cadena de prototipos hasta que lo encuentra o llega al final de la cadena.

    // Ejemplo de uso de Object.getPrototypeOf():
    Object.getPrototypeOf(Player.prototype) === Object.prototype;

    // Ejemplo de cómo funciona la herencia prototípica:
    console.log(player1.valueOf());
    // - player1.valueOf() se ejecuta, aunque no está definido en player1 ni en Player.prototype, pero está definido en Object.prototype.
    // - Esto demuestra cómo JavaScript recorre la cadena de prototipos para encontrar propiedades o métodos.

    // Ejemplo de uso de hasOwnProperty() para verificar si una propiedad es propia del objeto o heredada:
    player1.hasOwnProperty('valueOf'); // devuelve false porque .valueOf es una propiedad heredada
    Object.prototype.hasOwnProperty('valueOf'); // devuelve true porque .valueOf está definido en Object.prototype
  }
  {// Método recomendado para la herencia prototípica:
    // El método recomendado para establecer la herencia prototípica en JavaScript es utilizando Object.setPrototypeOf().

    // Uso de Object.setPrototypeOf() para configurar la herencia prototípica:
    // - Object.setPrototypeOf() toma dos argumentos: el objeto que hereda y el objeto del que se desea que herede.
    // - Esto establece la cadena de prototipos de manera que el objeto heredado tenga acceso a las propiedades y métodos del objeto del que hereda.

    // Ejemplo de configuración de herencia prototípica:
    function Person(name) {
      this.name = name;
    }

    Person.prototype.sayName = function () {
      return `Hello, I'm ${this.name}!`;
    };

    function Player(name, marker) {
      this.name = name;
      this.marker = marker;
    }

    Player.prototype.getMarker = function () {
      return `My marker is '${this.marker}'`;
    };

    // Configurar Player para heredar de Person utilizando Object.setPrototypeOf()
    Object.setPrototypeOf(Player.prototype, Person.prototype);

    // Ahora los objetos Player pueden acceder a las funciones definidas en Person.prototype
    const player1 = new Player('steve', 'X');
    const player2 = new Player('john', 'O');

    console.log(player1.sayName());
    console.log(player2.sayName());

    console.log(player1.getMarker());
    console.log(player2.getMarker());
  }
}


{//EJERCICIOS
  //1. Crear un Constructor de Objetos para Libros:
  function Libro(titulo, autor, paginas, leido) {
    this.titulo = titulo
    this.autor = autor
    this.paginas = paginas
    this.leido = leido
  }

  const elExtrnajero = new Libro("El Extranjero", "Albert Camus", 319, "leido")
  console.log(elExtrnajero);

  //2. Usar Objetos para Representar Personajes:
  function Character(name, health, attack, power) {
    this.name = name;
    this.health = health;
    this.attack = attack;
    this.power = power;
  }

  //3. Herencia Prototípica entre Personajes:
  Character.prototype.getInfo = function () {
    return `${this.name} - Health: ${this.health}, Attack: ${this.attack}, Power: ${this.power}`;
  };

  // Definición del constructor de Witcher que hereda de Character
  function Witcher(name, health, attack, power) {
    Character.call(this, name, health, attack, power * 1.3);
  }

  // Definición del constructor de Warrior que hereda de Character
  function Warrior(name, health, attack, power) {
    Character.call(this, name, health * 1.6, attack, power);
  }

  // Definición del constructor de Murder que hereda de Character
  function Murder(name, health, attack, power) {
    Character.call(this, name, health, attack * 1.4, power);
  }

  // Herencia prototípica
  Witcher.prototype = Object.create(Character.prototype);
  Warrior.prototype = Object.create(Character.prototype);
  Murder.prototype = Object.create(Character.prototype);

  // Creación de instancias de los personajes
  const malzahar = new Witcher("Malzahar", 100, 120, 200);
  const darius = new Warrior("Darius", 250, 150, 130);
  const peaky = new Murder("Peaky", 135, 230, 90);

  // Imprimir información de los personajes
  console.log(darius.getInfo());
  console.log(peaky.getInfo());
  console.log(malzahar.getInfo());
}