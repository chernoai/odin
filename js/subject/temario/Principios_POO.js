{// Principios de programación orientada a objetos

  // Introducción
  /*
  En este punto, habrá aprendido y practicado los patrones de organización 
  y creación de objetos más comunes en JavaScript. 
  Pero eso es solo la punta del iceberg. 
  Más importante que aprender la sintaxis de las funciones o módulos de fábrica 
  es descubrir cómo utilizarlos de forma eficaz.
  
  Toda esta serie de lecciones ha sido sobre el paradigma de la 
  “Programación Orientada a Objetos” (OOP). 
  Los conceptos básicos de la creación de objetos y clases son relativamente sencillos. 
  Pero no es sencillo decidir qué poner en cada objeto, cuándo hacer un objeto nuevo, 
  o cuándo dejar que un objeto "herede" de otro.
  */

  // Resumen de la lección
  /*
  Esta sección contiene una descripción general de los temas que aprenderá en esta lección.
  
  1. Explique el “Principio de Responsabilidad Única”.
  2. Explique brevemente los principios SÓLIDOS adicionales.
  3. Explique qué son los objetos "estrechamente acoplados" y por qué queremos evitarlos.
  
  Por suerte existen varios conceptos y principios que pueden guiarnos 
  a tomar buenas decisiones en lo que respecta a nuestros objetos. 
  Esta lección es una introducción al más importante de esos conceptos. 
  Tenga en cuenta que normalmente no hay una respuesta muy clara a las preguntas 
  sobre el diseño de su aplicación. 
  Algunos patrones e ideas son obviamente mejores que otros, 
  pero a menudo hay que hacer concesiones a la hora de decidir 
  dónde colocar una función específica. 
  En otras palabras... estos principios no son reglas, son pautas útiles.
  
  A medida que lea estos recursos, puede resultarle útil volver a algunos proyectos 
  que ya ha realizado y pensar en cómo lo que ha escrito se compara con los ejemplos que ve. 
  Y, por supuesto, a medida que avanzas, ten en cuenta estas cosas cuando elabores nuevos proyectos.
  */
  {// Responsabilidad Única

    // El Principio de Responsabilidad Única establece que una clase (u objeto o módulo) solo debe tener una responsabilidad. Esto significa que todo lo que hace un objeto debe ser parte de una sola responsabilidad.


    // Un ejemplo común: funciones que actualizan el DOM y contienen lógica de la aplicación.
    // Es una buena idea separar la manipulación del DOM de la lógica de la aplicación.


    // Ejemplo de una función que verifica si se ha cumplido una condición de fin del juego.
    function isGameOver() {
      // Lógica de fin de juego aquí

      if (gameOver) {
        const gameOverDiv = document.createElement('div');
        gameOverDiv.classList.add('game-over');
        gameOverDiv.textContent = `${this.winner} won the game!`;
        document.body.appendChild(gameOverDiv);
      }
    }

    // Problemas:
    // 1. La función no debe manipular directamente el DOM.
    // 2. La función debe centrarse solo en verificar la condición de fin del juego.

    // Solución: separar la lógica del juego de la manipulación del DOM.
    function isGameOver() {
      // Lógica de fin de juego aquí

      if (gameOver) {
        DOMStuff.gameOver(this.winner);
      }
    }

    // La función isGameOver debe solo comprobar si se cumple la condición de fin del juego.
    // Según el valor de retorno de isGameOver, el bucle del juego debe decidir si llamar a DOMStuff.gameOver(this.winner) o no.

    // Módulo para manipulación del DOM
    const DOMStuff = {
      gameOver: function (winner) {
        const gameOverDiv = document.createElement('div');
        gameOverDiv.classList.add('game-over');
        gameOverDiv.textContent = `${winner} won the game!`;
        document.body.appendChild(gameOverDiv);
      },
    };

    // El Principio de Responsabilidad Única asegura que un método, clase o componente tenga una única razón para cambiar. Intentar abarcar múltiples responsabilidades en un solo objeto puede causar que cambios en un aspecto afecten a otro.


    //Este principio es parte de un conjunto de cinco principios de diseño conocidos como principios SÓLIDOS. Leerás más sobre estos principios en artículos posteriores.
  }
  {// Objetos débilmente acoplados

    /*
    Los objetos débilmente acoplados son aquellos que pueden funcionar independientemente de otros objetos en la medida de lo posible. Esto es importante para la mantenibilidad y flexibilidad del código.
    */

    // Ejemplo de objetos débilmente acoplados en un juego

    // Lógica del juego
    class Game {
      constructor(name) {
        this.name = name;
      }

      start() {
        console.log(`${this.name} ha comenzado!`);
        // Más lógica del juego aquí...
      }

      // Otros métodos relacionados con la lógica del juego...
    }

    // Interfaz de usuario
    class GameUI {
      constructor(game) {
        this.game = game;
      }

      render() {
        // Renderizar elementos del juego en el DOM
        const gameElement = document.createElement('div');
        gameElement.textContent = `${this.game.name} - Interfaz del juego`;
        document.body.appendChild(gameElement);
      }

      // Otros métodos relacionados con la interfaz de usuario...
    }

    // Uso de los objetos
    const myGame = new Game('Aventura Espacial');
    const gameUI = new GameUI(myGame);

    // Empezar el juego y renderizar la interfaz
    myGame.start();
    gameUI.render();

    /*
    En este ejemplo, la lógica del juego y la interfaz de usuario están desacopladas. 
    Podemos cambiar la implementación de GameUI sin afectar a Game, y viceversa.
    */
  }
}