// Importación de la biblioteca lodash utilizando el nombre de variable '_'.
import _ from 'lodash';

// Importa el archivo CSS 'style.css'. Este archivo se aplicará al elemento div creado en la función 'component'.
import './style.css';

// Importa un archivo de imagen llamado 'icon.png' desde el directorio actual.
import Icon from './icon.png';

// Importación del archivo XML utilizando el nombre de variable 'Data'.
import Data from './data.xml';
// Importación del archivo CSV utilizando el nombre de variable 'Notes'.
import Notes from './data.csv';

// Importamos el archivo data.toml y lo asignamos a la variable 'toml'
import toml from './data.toml';
// Importamos el archivo data.yaml y lo asignamos a la variable 'yaml'
import yaml from './data.yaml';
// Importamos el archivo data.json5 y lo asignamos a la variable 'json'
import json from './data.json5';

console.log(toml.title);
console.log(yaml.title);
console.log(json.title);
console.log(toml.owner.name);
// console.log(yaml.owner.name);
// console.log(json.owner.name);


function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'Wordl'], '');

  // Agrega la clase 'hello' al elemento div, lo cual aplicará estilos CSS definidos en 'style.css' al elemento
  element.classList.add('hello');

  // Crea un nuevo elemento de imagen.
  const myIcon = new Image();
  // Asigna la ruta de la imagen al origen de la imagen.
  myIcon.src = Icon;

  // Agrega la imagen al elemento div existente.
  element.appendChild(myIcon);

  console.log(Data);
  console.log(Notes);

  return element;
}

document.body.appendChild(component());
