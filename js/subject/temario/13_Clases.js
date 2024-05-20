{//Propeidades getters and setters 
  {// Getters y setters en JavaScript

    // Las propiedades de acceso están representadas por métodos "getter" y "setter". 
    // En un literal de objeto se denotan por "get" y "set":

    let usuario = {
      // Getter para la propiedad "nombreCompleto"
      get nombreCompleto() {
        // código que se ejecuta al leer usuario.nombreCompleto
        return `${this.nombre} ${this.apellido}`; // concatenar nombre y apellido
      },

      // Setter para la propiedad "nombreCompleto"
      set nombreCompleto(valor) {
        // código que se ejecuta al asignar usuario.nombreCompleto = valor
        [this.nombre, this.apellido] = valor.split(" "); // dividir el valor por espacios y asignar a nombre y apellido
      }
    };

    // Ejemplo de uso
    usuario.nombre = "Juan";
    usuario.apellido = "Pérez";
    console.log(usuario.nombreCompleto);

    usuario.nombreCompleto = "Ana Gómez"; // Se usa el Setter 
    console.log(usuario.nombre);   // Se usa el Getter
    console.log(usuario.apellido);

    // Comentarios de código

    // El getter se ejecuta cuando se lee "usuario.nombreCompleto".
    // Devuelve una cadena formada por la concatenación de "nombre" y "apellido" con un espacio entre ellos.

    // El setter se ejecuta cuando se asigna un valor a "usuario.nombreCompleto".
    // Divide el valor por espacios y asigna las partes resultantes a las propiedades "nombre" y "apellido".

    // Desde el exterior, la propiedad de acceso "nombreCompleto" se ve como una propiedad normal.
    // No es necesario llamar a "usuario.nombreCompleto()" como una función. 
    // El getter se ejecuta automáticamente al leer la propiedad.

    // En este ejemplo, "nombreCompleto" solo tiene un getter. 
    // Si intentamos asignar un valor a "usuario.nombreCompleto", se producirá un error.

    // Para permitir la escritura, se añade un setter que se encarga de dividir el valor asignado 
    // por espacios y asignar las partes resultantes a las propiedades "nombre" y "apellido".
  }
  {// Descriptores de propiedades accesoras en JavaScript

    // Los descriptores para las propiedades accesoras son diferentes a los de las propiedades de datos.

    // Para las propiedades accesoras, no hay "value" ni "writable", sino funciones "get" y "set".

    // Es decir, un descriptor de propiedad accesora puede tener:

    // * get - una función sin argumentos, que se ejecuta cuando se lee la propiedad
    // * set - una función con un argumento, que se llama cuando se asigna un valor a la propiedad
    // * enumerable - igual que para las propiedades de datos
    // * configurable - igual que para las propiedades de datos

    // Por ejemplo, para crear una propiedad "fullName" accesora con "defineProperty", podemos pasar un descriptor con "get" y "set":

    let usuario = {
      nombre: "Juan",
      apellido: "Pérez"
    };

    Object.defineProperty(usuario, 'nombreCompleto', {
      get() {
        return `${this.nombre} ${this.apellido}`;
      },

      set(valor) {
        [this.nombre, this.apellido] = valor.split(" ");
      }
    });

    console.log(usuario.nombreCompleto); // "Juan Pérez"

    // En este ejemplo, el descriptor para "nombreCompleto" solo tiene las propiedades "get" y "set".

    // Ten en cuenta que una propiedad puede ser accesora (con métodos "get" y "set") o 
    // una propiedad de datos (con un valor), pero no ambas.

    // Si intentamos suministrar "get" y "value" en el mismo descriptor, se producirá un error:

    // Error: Invalid property descriptor.
    // Object.defineProperty({}, 'prop', {
    //   get() {
    //     return 1;
    //   },

    //   value: 2
    // });
  }
  {// Getters y setters inteligentes en JavaScript

    // Los getters y setters se pueden utilizar como envoltorios de los valores "reales" de las propiedades para obtener un mayor control sobre las operaciones con ellos.

    // Por ejemplo, si queremos imponer una longitud mínima para el nombre de un usuario, podemos utilizar un setter para la propiedad "nombre" y almacenar el valor real en una propiedad privada "_nombre":

    let usuario = {
      get nombre() {
        return this._nombre;
      },

      set nombre(valor) {
        if (valor.length < 4) {
          console.log(valor); //Valor es ''
          console.log("El nombre es demasiado corto, debe tener al menos 4 caracteres");
          return;
        }
        console.log(valor);
        this._nombre = valor;
      }
    };

    usuario.nombre = "Pedro";
    console.log(usuario.nombre);

    usuario.nombre = "";
    console.log(usuario.nombre);

    // En este código, el nombre se almacena en la propiedad privada "_nombre" y se accede a él mediante el getter y el setter de la propiedad "nombre".

    // Técnicamente, el código externo podría acceder al nombre directamente usando "usuario._nombre". 
    // Sin embargo, existe una convención ampliamente conocida de que las propiedades que comienzan con un guión bajo ("_") son privadas y no se deben tocar desde fuera del objeto.
    /*
    ? Ventajas de usar getters y setters inteligentes:
    *   Validación de datos: Podemos implementar lógica de validación en el setter para garantizar que solo se asignen valores válidos a la propiedad.
    *   Efectos secundarios: Los getters y setters pueden realizar acciones adicionales además de obtener o establecer el valor, como actualizar otras propiedades relacionadas.
    *   Encapsulación: Al almacenar el valor real en una propiedad privada, se fomenta la encapsulación y se oculta la implementación interna del objeto.
    */
    // En resumen, los getters y setters inteligentes permiten un control más preciso sobre las propiedades de un objeto y ayudan a mantener el código limpio y robusto.
  }
  {// Uso de getters y setters para compatibilidad en JavaScript

    // Una de las grandes ventajas de las propiedades accesoras es que permiten tomar el control de una propiedad de datos "normal" en cualquier momento reemplazándola por un getter y un setter, y modificar su comportamiento.

    // Imagina que comenzamos a implementar objetos de usuario utilizando propiedades de datos "nombre" y "edad":

    function Usuario(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }

    let juan = new Usuario("Juan", 25);

    // console.log(juan.edad); // 25

    // ...Pero tarde o temprano, las cosas pueden cambiar. 
    // En lugar de "edad", podríamos decidir almacenar la "fecha de nacimiento" 
    // porque es más precisa y conveniente:

    function Usuario(nombre, fechaNacimiento) {
      this.nombre = nombre;
      this.fechaNacimiento = fechaNacimiento;
    }

    let pedro = new Usuario("Pedro", new Date(1992, 6, 1));
    console.log(pedro.fechaNacimiento);
    // Ahora, ¿qué hacer con el código antiguo que todavía usa la propiedad "edad"?

    // Podemos intentar encontrar todos esos lugares y arreglarlos, pero eso lleva tiempo y puede ser difícil de hacer si ese código es utilizado por muchas otras personas. 
    // Además, la "edad" es algo útil para tener en el "usuario", ¿verdad?

    // Mantengamos la propiedad "edad". Agregar un getter para "edad" resuelve el problema:

    function Usuario(nombre, fechaNacimiento) {
      this.nombre = nombre;
      this.fechaNacimiento = fechaNacimiento;

      // La edad se calcula a partir de la fecha actual y la fecha de nacimiento
      Object.defineProperty(this, "edad", { // Define una propiedad accesora 'edad'
        get() {
          const anioActual = new Date().getFullYear();
          return anioActual - this.fechaNacimiento.getFullYear();
        }
      });
    }

    let jose = new Usuario("Jose", new Date(1992, 6, 1));

    console.log(jose.fechaNacimiento); // "fechaNacimiento" está disponible
    console.log(jose.edad); // "...así como la edad"

    // La propiedad "edad" no se puede modificar directamente
    jose.edad = 25; // No tiene efecto

    console.log(jose.edad);

    // Ahora el código antiguo también funciona y tenemos una propiedad adicional muy útil.

    /*
    TODO Resumen:
    * Los getters y setters permiten adaptar el comportamiento de las propiedades existentes sin modificar directamente el código que las utiliza.
    * Esto es especialmente útil cuando se necesita cambiar la implementación interna de un objeto sin romper el código dependiente.
    * Agregar getters para propiedades previamente existentes es una forma de mantener la compatibilidad con código anterior.
    */
  }
  {//RESUMEN
    {//todo Hay dos tipos de propiedades de objetos:
      //* Propiedades de datos: Almacenan un valor directamente.
      //* Propiedades accesorias: Son funciones que se ejecutan al obtener o establecer un valor.
    }
    {//todo Creación de propiedades accesorias:
      //* Se definen con las funciones get y set en un objeto literal o usando Object.defineProperty.
      //* La función get se ejecuta cuando se lee la propiedad.
      //* La función set se ejecuta cuando se asigna un valor a la propiedad.
      let user = {
        name: "John",
        surname: "Smith",

        get fullName() {
          return `${this.name} ${this.surname}`;
        },

        set fullName(value) {
          [this.name, this.surname] = value.split(" ");
        }
      };

      console.log(user.fullName); // "John Smith"

      user.fullName = "Alice Cooper";

      console.log(user.name); // "Alice"
      console.log(user.surname); // "Cooper"
    }
    {//todo Descriptores de propiedades accesorias:
      //* Son diferentes a los de las propiedades de datos.
      //* No tienen value ni writable.
      //* Tienen get, set, enumerable y configurable.
    }
    {//todo Uso de propiedades accesorias para control:
      //* Se pueden usar para validar valores.
      //* Se pueden usar para realizar cálculos.
      //* Se pueden usar para encapsular la lógica interna.
      let user = {
        get name() {
          return this._name;
        },

        set name(value) {
          if (value.length < 4) {
            console.log("Nombre demasiado corto, necesita al menos 4 caracteres");
            return;
          }
          this._name = value;
        }
      };

      user.name = "Pete";
      console.log(user.name); // "Pete"

      user.name = ""; // "Nombre demasiado corto..."
    }
    {//todo Uso de propiedades accesorias para compatibilidad:
      //* Las propiedades accesorias son una herramienta poderosa para controlar el acceso a las propiedades de los objetos.
      //* Se pueden usar para validar valores, realizar cálculos, encapsular la lógica interna y mantener la compatibilidad con el código existente.
      function User(name, birthday) {
        this.name = name;
        this.birthday = birthday;

        // age is calculated from the current date and birthday
        Object.defineProperty(this, "age", {
          get() {
            let todayYear = new Date().getFullYear();
            return todayYear - this.birthday.getFullYear();
          }
        });
      }

      let john = new User("John", new Date(1992, 6, 1));

      console.log(john.birthday); // Fecha de nacimiento disponible
      console.log(john.age); // Edad también disponible

    }
  }
}
{//Sintaxis básica de Class
  //En programación orientada a objetos, una clase es una plantilla de código de programa extensible para crear objetos, proporcionando valores iniciales para el estado (variables miembro) e implementaciones de comportamiento (funciones o métodos miembro).
  {// La sintaxis de la “Class”

    // Sintaxis básica de las clases

    class MiClase {
      // Métodos de la clase

      constructor() { // ...
      }
      metodo1() { // ...
      }
      metodo2() { // ... 
      }
      metodo3() { //...
      }
      //...
    }

    // Se utiliza "new MiClase()" para crear un nuevo objeto con todos los métodos listados.

    // El método constructor() se llama automáticamente con "new", por lo que podemos inicializar el objeto allí.

    // Ejemplo:

    class Usuario {

      constructor(nombre) {
        this.nombre = nombre; // Asignar el nombre al objeto
      }

      saludar() { // Método para saludar
        console.log(this.nombre);
      }

    }

    // Uso:

    let usuario = new Usuario("Juan");
    usuario.saludar(); // Imprime "Juan"

    //Explicación del ejemplo:

    /*
    * 1. Cuando se llama a "new Usuario("John")"
    ?   Se crea un nuevo objeto.
    ?   El constructor se ejecuta con el argumento dado ("John") y lo asigna a "this.nombre".
    * 2. Luego podemos llamar a los métodos del objeto, como "usuario.saludar()".
    
    Sin comas entre métodos de clase
    
    Un error común entre los desarrolladores principiantes es poner una coma entre los métodos de clase, lo que provocaría un error de sintaxis.
    
    La notación aquí no debe confundirse con los literales de objeto. Dentro de la clase, no se requieren comas.
    */
  }
  {// Qué es una clase en JavaScript

    // Desenmascarando las clases de JavaScript

    // En JavaScript, una clase  no es una entidad completamente nueva a nivel de lenguaje , como se podría pensar. 

    // Veamos qué es realmente una clase para comprender mejor muchos aspectos complejos.

    // Una clase en JavaScript es  una especie de función .

    // Observa el siguiente ejemplo:

    class Usuario {
      constructor(nombre) { this.nombre = nombre; }
      saludar() { return (`Hola, soy ${this.nombre}`); }
    }

    // Comprobando que Usuario es una función
    console.log(typeof Usuario);


    // TODO Lo que realmente hace la construcción "class Usuario {...}" es:


    //*     1. Crea una función llamada Usuario, que se convierte en el resultado de la declaración de la clase. El código de la función se toma del método constructor (se asume que está vacío si no se escribe dicho método).

    //   *     2. Almacena los métodos de la clase, como "saludar", en "Usuario.prototype".

    //    *     3. Después de crear un nuevo objeto con "new Usuario", cuando llamamos a su método, éste se toma del prototipo, tal y como se describe en el capítulo "F.prototype". Por lo tanto, el objeto tiene acceso a los métodos de la clase.
    const usuario = new Usuario("Cherno");
    console.log(usuario.saludar());

    // A continuación, el código para inspeccionarlo:

    class Usuario2 {
      constructor(nombre) { this.nombre = nombre; }
      saludar() { return (`Hola, soy ${this.nombre}`); }
    }

    // La clase es una función
    console.log(typeof Usuario2); // function

    // ...o, más precisamente, el método constructor
    console.log(Usuario2 === Usuario2.prototype.constructor); // true

    // Los métodos están en Usuario2.prototype, por ejemplo:
    console.log(Usuario2.prototype.saludar); // el código del método saludar

    // Hay exactamente dos métodos en el prototipo
    console.log(Object.getOwnPropertyNames(Usuario2.prototype)); // constructor, saludar
  }
  {// Las clases en JavaScript no son solo azúcar sintáctico

    // A veces se dice que las clases son "azúcar sintáctico" (sintaxis diseñada para facilitar la lectura, pero que no introduce nada nuevo), porque en realidad podríamos declarar lo mismo sin usar la palabra clave "class":

    // Reescribiendo la clase Usuario con funciones puras

    // 1. Crear una función constructora
    function Usuario(nombre) {
      this.nombre = nombre;
    }

    // El prototipo de una función tiene la propiedad "constructor" por defecto,
    // así que no necesitamos crearla

    // 2. Agregar el método al prototipo
    Usuario.prototype.saludar = function () {
      console.log(this.nombre);
    };

    // Uso:
    let usuario = new Usuario("John");
    usuario.saludar();

    // El resultado de esta definición es prácticamente el mismo. 
    // Por lo tanto, hay razones por las que la clase puede considerarse azúcar sintáctico para definir un constructor junto con sus métodos de prototipo.

    // Sin embargo, existen diferencias importantes.

    // En primer lugar, una función creada por "class" está etiquetada con una propiedad interna especial [[IsClassConstructor]]: true. Por lo tanto, no es exactamente lo mismo que crearla manualmente.

    // El lenguaje verifica esa propiedad en varios lugares. Por ejemplo, a diferencia de una función regular, debe llamarse con "new":

    class Usuario2 {
      constructor() { }
    }

    console.log(typeof Usuario2);
    // Usuario2(); //! Error: Class constructor User cannot be invoked without 'new'

    // Además, la representación en cadena de un constructor de clase en la mayoría de los motores JavaScript comienza con "class..."

    class Usuario3 {
      constructor() { }
    }

    console.log(Usuario3);
    // Hay otras diferencias, las veremos pronto.

    // Los métodos de clase no son enumerables. 
    // Una definición de clase establece el indicador "enumerable" en "false" para todos los métodos del prototipo. Esto es bueno, porque si iteramos con "for..in" sobre un objeto, generalmente no queremos sus métodos de clase.

    // Las clases siempre usan el modo estricto. 
    //,Todo el código dentro de la construcción de la clase está automáticamente en modo estricto.

    // Además, la sintaxis de clase trae muchas otras características que exploraremos más adelante.
  }
  {// Expresiones de clase en JavaScript

    // Al igual que las funciones, las clases se pueden definir dentro de otra expresión, 
    // pasarse entre sí, devolverse, asignarse, etc.

    // Ejemplo de una expresión de clase:

    let Usuario = class {
      saludar() {
        conosle.log("Hola");
      }
    };

    // Similares a las expresiones de función con nombre, las expresiones de clase pueden tener un nombre.
    // Si una expresión de clase tiene un nombre, solo es visible dentro de la clase:

    // "Expresión de clase con nombre"
    // (la especificación no usa este término, pero es similar a la expresión de función con nombre)
    let Usuario2 = class MiClase {
      saludar() {
        console.log(MiClase); // El nombre MiClase solo es visible dentro de la clase
      }
    };

    new Usuario2().saludar(); // funciona, muestra la definición de MiClase

    // console.log(MiClase); //! error, el nombre MiClase no es visible fuera de la clase

    // Incluso podemos crear clases dinámicamente "a pedido", así:

    function crearClase(frase) {
      // declarar una clase y devolverla
      return class {
        saludar() {
          return frase;
        }
      };
    }

    // Crear una nueva clase
    let Usuario3 = crearClase("Hola");

    new Usuario3().saludar();

    console.log(new Usuario3().saludar());
  }
  {// Getters y Setters en Clases de JavaScript (con comentarios explicativos)

    // Al igual que los objetos literales, las clases pueden incluir getters y setters, propiedades computadas, etc.

    // Aquí tienes un ejemplo de `user.name` implementado usando `get/set`:

    class Usuario {

      constructor(nombre) {
        // Invoca el setter para asignar el nombre
        this.name = nombre;
      }

      get name() {
        // Getter para obtener el valor de la propiedad `name`
        return this._name;
      }

      set name(valor) {
        // Setter para establecer la propiedad `name` con validación
        if (valor.length < 4) {
          console.log("El nombre es demasiado corto.");
          return;
        }
        this._name = valor;
      }

    }

    let usuario = new Usuario("John");
    console.log(usuario.name);
    usuario.name = ""
    console.log(usuario.name);
    // Técnicamente, esta declaración de clase funciona mediante la creación de getters y setters en `Usuario.prototype`.
  }
  {// Nombres de propiedad computados con [...] en Clases JavaScript

    // Al igual que en los objetos literales, las clases de JavaScript también permiten nombres de propiedad computados utilizando corchetes `[...]`.

    // Ejemplo con un nombre de método computado usando corchetes:

    const decir = 'decir';
    const hola = 'Hola';
    const adios = 'Adios'

    class Usuario {
      [decir + hola]() {
        console.log(hola);
      }
      [decir + adios]() {
        console.log(adios);
      }

    }

    new Usuario().decirHola(); // (el método se llamaría decirHola)
    new Usuario().decirAdios(); // (el método se llamaría decirAdios)

    // Similitud con objetos literales

    // Esta característica es fácil de recordar porque se asemeja a la forma de crear propiedades con nombres computados en los objetos literales:

    const objeto = {
      ['propiedad' + 1]: "valor"
    };
    console.log(objeto.propiedad1);

    // En resumen, las clases de JavaScript admiten nombres de propiedad computados, lo que brinda flexibilidad para crear nombres de métodos dinámicamente a partir de expresiones o variables.
  }
  {// Campos de clase en JavaScript (con comentarios explicativos)

    // Los campos de clase son una adición reciente al lenguaje JavaScript. 
    // Anteriormente, nuestras clases solo tenían métodos.

    // "Campos de clase" es una sintaxis que permite agregar cualquier propiedad a una clase.

    // Por ejemplo, agreguemos la propiedad "nombre" a la clase "Usuario":

    class Usuario {
      nombre = "John";

      saludar() {
        console.log(`Hola, ${this.nombre}!`);
      }
    }

    new Usuario().saludar(); // Hola, John!

    // Simplemente usamos el signo "=" en la declaración y listo.

    // La diferencia importante de los campos de clase es que se establecen en objetos individuales, 
    // no en User.prototype:

    class Usuario2 {
      nombre = "John";
    }

    let usuario = new Usuario2();
    console.log(usuario.nombre); // John
    console.log(Usuario2.prototype.nombre); // undefined

    // También podemos asignar valores usando expresiones más complejas y llamadas a funciones:

    class Usuario3 {
      //? nombre = prompt("Nombre, por favor?", "John");
      nombre = "John"
    }

    let usuario2 = new Usuario3();
    console.log(usuario2.nombre); //? (lo que ingrese el usuario)

    { // Creando métodos vinculados con campos de clase

      // Como se demostró en el capítulo "Vinculación de funciones", las funciones en JavaScript tienen un "this" dinámico. 
      // Depende del contexto de la llamada. Entonces, si un método de objeto se pasa y se llama en otro contexto, 
      // "this" ya no será una referencia a su objeto.

      // Por ejemplo, este código mostrará "undefined":

      class Boton {
        constructor(valor) {
          this.valor = valor;
        }

        click() {
          console.log(this.valor);
        }
      }

      let boton = new Boton("hola");

      setTimeout(boton.click, 1000); // undefined

      // El problema se llama "perder this". 
      // Hay dos enfoques para solucionarlo, como se discutió en el capítulo "Vinculación de funciones":

      // 1. Pasar una función envoltura, como setTimeout(() => button.click(), 1000).
      // 2. Vincular el método al objeto, por ejemplo, en el constructor.

      // Los campos de clase proporcionan otra sintaxis bastante elegante:

      class Boton2 {
        constructor(valor) {
          this.valor = valor;
        }

        click = () => {
          console.log(this.valor);
        }
      }

      let boton2 = new Boton2("hola");

      setTimeout(boton2.click, 1000);

      // El campo de clase "click = () => {...}" se crea por objeto, hay una función separada para 
      // cada objeto "Boton", con "this" en su interior haciendo referencia a ese objeto. 
      // Podemos pasar "button.click" por cualquier lugar, y el valor de "this" siempre será correcto.

      // Eso es especialmente útil en el entorno del navegador, para los escuchas de eventos.
    }
  }
}
{//EJERCICIOS
  class Persona {
    constructor(nombre, edad, ciudad) {
      this.nombre = nombre;
      this.edad = edad;
      this.ciudad = ciudad;
    }
    saludar() {
      return `Hola, soy ${this.nombre} tengo ${this.edad} y soy de ${this.ciudad} `;
    }
  }

  const cherno = new Persona("Cherno", 21, "Birmingham")

  console.log(cherno.saludar());


  class Persona2 {
    constructor(nombre, edad, ciudad) {
      this._nombre = nombre;
      this._edad = edad;
      this.ciudad = ciudad;
    }
    get nombre() {
      return this._nombre;
    }
    set nombre(value) {
      if (value.length < 2) {
        console.log("El nombre es muy corto");
        return
      }
      this._nombre = value
    }
    get edad() {
      return this._edad
    }
    set edad(value) {
      if (isNaN(value)) {
        console.log("La edad debe de ser un numero");
        return
      }
      this._edad = value
    }
    saludar() {
      return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años. Soy de ${this.ciudad}.`;
    }
    cambiarCiudad(nuevaCiudad) {
      this.ciudad = nuevaCiudad
    }
  }
  const cherno2 = new Persona2("Cherno", 21, "Birmingham")

  console.log(cherno2.edad)
  cherno2.edad = "sdfs";
  console.log(cherno2.saludar());
  cherno2.cambiarCiudad("Barcelona")
  console.log(cherno2.saludar());

  class Estudiante extends Persona {
    constructor(nombre, edad, ciudad, carrera) {
      super(nombre, edad, ciudad);
      this.carrera = carrera;
    }
    estudiar() {
      return `Estoy estudiando ${this.carrera} en la ciudad de ${this.ciudad}`
    }
  }

  const luka = new Estudiante("Luka", 20, "Vitoria", "Informatica");

  console.log(luka.saludar());
  console.log(luka.estudiar());
}