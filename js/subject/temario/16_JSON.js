{// Trabajando con JSON

  // JSON (JavaScript Object Notation) es un formato de texto estándar para representar datos estructurados.
  // Es utilizado para transmitir datos en aplicaciones web (cliente <-> servidor).

  {// ¿Qué es JSON?
    // JSON (JavaScript Object Notation)  es un formato de datos basado en la sintaxis de objetos de JavaScript, popularizado por Douglas Crockford.
    // Puede ser usado independientemente de JavaScript y es compatible con muchos lenguajes de programación.
    // Es utilizado para transmitir datos en aplicaciones web (cliente <-> servidor).

    // Los JSON son cadenas de texto que deben convertirse en objetos JavaScript para ser utilizados en el código.
    // JavaScript tiene un objeto global llamado JSON con métodos para convertir entre cadenas y objetos.

    /* Nota:
     * - Convertir una cadena a objeto se llama "parsear".
     * - Convertir un objeto a cadena se llama "stringificar".
     */

    // Ejemplo de estructura JSON:
    const superHeroes = {
      "squadName": "Super hero squad",
      "homeTown": "Metro City",
      "formed": 2016,
      "secretBase": "Super tower",
      "active": true,
      "members": [
        {
          "name": "Molecule Man",
          "age": 29,
          "secretIdentity": "Dan Jukes",
          "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
        },
        {
          "name": "Madame Uppercut",
          "age": 39,
          "secretIdentity": "Jane Wilson",
          "powers": [
            "Million tonne punch",
            "Damage resistance",
            "Superhuman reflexes"
          ]
        },
        {
          "name": "Eternal Flame",
          "age": 1000000,
          "secretIdentity": "Unknown",
          "powers": [
            "Immortality",
            "Heat Immunity",
            "Inferno",
            "Teleportation",
            "Interdimensional travel"
          ]
        }
      ]
    };

    // Acceso a datos en JSON:
    // Notación de punto
    console.log(superHeroes.homeTown); // "Metro City"
    // Notación de corchetes
    console.log(superHeroes["active"]); // true

    // Acceso a datos en estructuras anidadas:
    console.log(superHeroes["members"][1]["powers"][2]); // "Superhuman reflexes"

    // Nota:
    // JSON puede ser un objeto o un arreglo. Aquí hay un ejemplo de JSON que es un arreglo:
    const heroesArray = [
      {
        "name": "Molecule Man",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
      },
      {
        "name": "Madame Uppercut",
        "age": 39,
        "secretIdentity": "Jane Wilson",
        "powers": [
          "Million tonne punch",
          "Damage resistance",
          "Superhuman reflexes"
        ]
      }
    ];

    // Acceso a datos en un JSON que es un arreglo:
    console.log(heroesArray[0]["powers"][0]); // "Radiation resistance"

    // Notas adicionales sobre JSON:
    /* 
     * - JSON es sólo datos, no métodos.
     * - Usa comillas dobles para cadenas y nombres de propiedades.
     * - Errores de sintaxis (comas o dos puntos mal ubicados) pueden invalidar el JSON.
     * - Validar JSON es importante, herramientas como JSONLint pueden ayudar.
     * - JSON puede representar cualquier tipo de dato válido, no solo objetos o arreglos.
     * - Las propiedades en JSON deben estar entre comillas dobles.
     */
  }
  {// Aprendizaje activo: Trabajando a través de un ejemplo de JSON

    // HTML y CSS iniciales
    // heroes.html
    /* 
    <header></header>
    <section></section>
    <script src="script.js"></script>
    */

    // style.css
    /*
     * Añadir estilos necesarios aquí
     */

    // script.js
    const header = document.querySelector("header");
    const section = document.querySelector("section");
    // Paso 1: Almacenar la URL del JSON en una variable
    const requestURL = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

    // Paso 2: Crear una nueva instancia de XMLHttpRequest
    const request = new XMLHttpRequest();

    // Paso 3: Abrir una nueva solicitud con el método HTTP GET y la URL del JSON
    request.open("GET", requestURL);

    // Paso 4: Establecer el tipo de respuesta a JSON y enviar la solicitud
    request.responseType = "json";
    request.send();

    // Paso 5: Esperar la respuesta del servidor y manejarla
    request.onload = function () {
      const superHeroes = request.response; // Almacenar la respuesta JSON en una variable
      populateHeader(superHeroes); // Llenar el header con los datos del JSON
      showHeroes(superHeroes); // Crear y mostrar tarjetas de información de los héroes
    };

    /* 
     * En este punto:
     * - Se almacena la respuesta del servidor en la variable superHeroes.
     * - Se pasan los datos del JSON a dos funciones:
     *   - populateHeader() para llenar el <header> con los datos.
     *   - showHeroes() para crear y agregar tarjetas de información de cada héroe al <section>.
     */

    // Función para poblar el encabezado con los datos del JSON
    function populateHeader(jsonObj) {
      // Crear y agregar un h1 con el nombre del escuadrón
      const myH1 = document.createElement("h1");
      myH1.textContent = jsonObj["squadName"];
      header.appendChild(myH1);

      // Crear y agregar un párrafo con la ciudad y la fecha de formación
      const myPara = document.createElement("p");
      myPara.textContent = "Hometown: " + jsonObj["homeTown"] + " // Formed: " + jsonObj["formed"];
      header.appendChild(myPara);
    }

    // Función para mostrar las tarjetas de los héroes
    function showHeroes(jsonObj) {
      const heroes = jsonObj["members"];

      // Iterar sobre cada héroe en el arreglo
      for (let i = 0; i < heroes.length; i++) {
        // Crear elementos HTML para la tarjeta del héroe
        const myArticle = document.createElement("article");
        const myH2 = document.createElement("h2");
        const myPara1 = document.createElement("p");
        const myPara2 = document.createElement("p");
        const myPara3 = document.createElement("p");
        const myList = document.createElement("ul");

        // Llenar los elementos con datos del héroe
        myH2.textContent = heroes[i].name;
        myPara1.textContent = "Secret identity: " + heroes[i].secretIdentity;
        myPara2.textContent = "Age: " + heroes[i].age;
        myPara3.textContent = "Superpowers:";

        // Crear y llenar la lista de superpoderes
        const superPowers = heroes[i].powers;
        for (let j = 0; j < superPowers.length; j++) {
          const listItem = document.createElement("li");
          listItem.textContent = superPowers[j];
          myList.appendChild(listItem);
        }

        // Agregar los elementos a la tarjeta del héroe
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);

        // Agregar la tarjeta del héroe a la sección
        section.appendChild(myArticle);
      }
    }

    /* 
     * Notas:
     * - XMLHttpRequest (XHR) permite hacer solicitudes de red para recuperar recursos.
     * - responseType = "json" hace que la respuesta sea automáticamente parseada como JSON.
     * - populateHeader() y showHeroes() manipulan el DOM para mostrar los datos del JSON.
     */
  }
  {// Resumen
    // Este artículo proporciona una guía simple para utilizar JSON en programas JavaScript.

    /* Incluye:
     * - Cómo crear JSON
     * - Cómo leer JSON
     * - Cómo acceder a los datos almacenados en JSON
     */

    // Próximo artículo: JavaScript orientado a objetos

    /* Notas importantes:
     * - JSON es un formato de datos basado en texto.
     * - Es ampliamente utilizado para transmitir datos en aplicaciones web.
     * - Puede ser convertido fácilmente entre cadenas de texto y objetos JavaScript.
     */
  }
}

{// JSON.parse()

  // Uso común de JSON: Intercambiar datos con un servidor web
  // - Los datos recibidos de un servidor web siempre son una cadena de texto.
  // - JSON.parse() convierte esta cadena en un objeto JavaScript.

  // Ejemplo: Análisis de JSON

  // Imaginemos que recibimos este texto de un servidor web:
  const jsonString = '{"name":"John", "age":30, "city":"New York"}';

  // Convertir texto JSON a objeto JavaScript usando JSON.parse()
  const obj = JSON.parse(jsonString);

  // Asegurarse de que el texto esté en formato JSON para evitar errores de sintaxis

  // Usar el objeto JavaScript en la página HTML

  // Ejemplo en HTML
  /* 
  <p id="demo"></p>
  
  <script>
  document.getElementById("demo").innerHTML = obj.name;
  </script>
  */

  // En este caso, se mostraría "John" en el elemento <p> con id="demo"
  document.getElementById("demo").innerHTML = obj.name;

  {// Matriz como JSON

    // Cuando se utiliza JSON.parse() en un JSON derivado de una matriz,
    // el método devolverá una matriz de JavaScript en lugar de un objeto.

    // Ejemplo:
    const text = '["Ford", "BMW", "Audi", "Fiat"]';

    // Convertir el texto JSON a una matriz de JavaScript
    const myArr = JSON.parse(text);

    // En este caso, myArr contendrá la siguiente matriz: ["Ford", "BMW", "Audi", "Fiat"]
  }
  {// Excepciones en JSON

    // Análisis de fechas:
    // Los objetos de fecha no están permitidos en JSON.
    // Si necesita incluir una fecha, escríbala como una cadena.
    // Puede convertirla nuevamente en un objeto de fecha más tarde.

    // Ejemplo:
    const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
    const obj = JSON.parse(text);
    obj.birth = new Date(obj.birth);

    // Convertir una cadena en una fecha usando reviver:
    const textReviver = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
    const objReviver = JSON.parse(textReviver, function (key, value) {
      if (key == "birth") {
        return new Date(value);
      } else {
        return value;
      }
    });

    // Funciones de análisis:
    // No se permiten funciones en JSON.
    // Si necesita incluir una función, escríbala como una cadena.
    // Puede convertirla nuevamente en una función más tarde.

    // Ejemplo:
    const textFunction = '{"name":"John", "age":"function () {return 30;}", "city":"New York"}';
    const objFunction = JSON.parse(textFunction);
    objFunction.age = eval("(" + objFunction.age + ")");

    /* 
     * Debes evitar el uso de funciones en JSON.
     * Las funciones perderán su alcance y tendrás que usar eval()
     * para convertirlas nuevamente en funciones.
     */

    // En estos ejemplos, se convierten las cadenas en objetos JavaScript con fechas y funciones.
  }
}
{// JSON.stringify()

  // Uso común de JSON: Intercambiar datos con un servidor web
  // Al enviar datos a un servidor web, estos deben ser una cadena de texto.

  {// Stringificar un objeto JavaScript
    // Ejemplo:
    const obj = { name: "John", age: 30, city: "New York" };
    const myJSON = JSON.stringify(obj);

    // Resultado: myJSON es una cadena que sigue la notación JSON.

    // Stringificar una matriz de JavaScript
    // Ejemplo:
    const arr = ["John", "Peter", "Sally", "Jane"];
    const myJSONArr = JSON.stringify(arr);

    // Resultado: myJSONArr es una cadena que sigue la notación JSON.
  }

  {// Almacenamiento de datos
    // JSON permite almacenar objetos JavaScript como texto.
    // Ejemplo:
    // Almacenamiento de datos en almacenamiento local
    const myObj = { name: "John", age: 31, city: "New York" };
    const myJSONStorage = JSON.stringify(myObj);
    localStorage.setItem("testJSON", myJSONStorage);
  }

  {// Excepciones
    // Stringificar fechas
    // En JSON, los objetos de fecha se convierten en cadenas.
    // Ejemplo:
    const objDate = { name: "John", today: new Date(), city: "New York" };
    const myJSONDate = JSON.stringify(objDate);

    // Funciones de cadena
    // En JSON, las funciones no están permitidas como valores de objeto.
    // La función JSON.stringify() eliminará cualquier función de un objeto JavaScript.
    // Ejemplo:
    const objFunc = { name: "John", age: function () { return 30; }, city: "New York" };
    const myJSONFunc = JSON.stringify(objFunc);

    // Para evitar esto, convierta las funciones en cadenas antes de usar JSON.stringify()
    // Ejemplo:
    const objFuncString = { name: "John", age: function () { return 30; }, city: "New York" };
    objFuncString.age = objFuncString.age.toString();
    const myJSONFuncString = JSON.stringify(objFuncString);
  }
}