// Importa la biblioteca lodash y asigna su contenido a la variable '_'
import _ from 'lodash';

// Define una función llamada 'component'
function component() {
  // Crea un nuevo elemento div
  const element = document.createElement('div');

  // Usa la función 'join' de lodash para combinar los elementos del array ['Hello', 'webpack'] con un espacio en blanco
  // y asigna el resultado como contenido HTML del elemento div creado anteriormente
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  // Devuelve el elemento div creado
  return element;
}

// Agrega el elemento devuelto por la función 'component' al final del cuerpo del documento HTML
document.body.appendChild(component());