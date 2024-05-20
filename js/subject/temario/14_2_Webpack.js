{//CONFIGURACION BASICA

  // Primero, creemos un directorio, inicialicemos npm, instalemos webpack localmente e instalemos webpack-cli(la herramienta utilizada para ejecutar webpack en la línea de comando):

  //* Crea un nuevo directorio con el nombre del proyecto
  //? mkdir nombre-del-proyecto

  //* Navega al directorio recién creado
  //? cd nombre-del-proyecto

  //* Inicializa un nuevo proyecto npm con la configuración predeterminada
  //? npm init -y

  //* Instala webpack y webpack-cli como dependencias de desarrollo
  //? npm install webpack webpack-cli --save-dev

  //Ahora crearemos la siguiente estructura de directorios, archivos y su contenido.

  //Es importante separar el código fuente (ubicado en la carpeta src) del código de distribución (ubicado en la carpeta dist). El código fuente es el que escribimos y editamos, mientras que el código de distribución es la versión optimizada y minimizada de nuestro código que se cargará en el navegador. Por eso la estructura debe de ser esta: 

  /*
  webpack-demo
    |- package.json
    |- package-lock.json
  *+|- /dist
  *+    |- index.html
  *+|- /src
  *+   |- index.js
   */

  // Además, debemos actualizar el archivo package.json para marcar nuestro paquete como privado y eliminar la entrada main. Esto evitará una publicación accidental del código.

  // Para ello debemos de ir al "package.json" y eliminar '"main": "index.js"' y sustituirlo por '"private":true'

}
{//USANDO UNA CONFIGURACION

  //La mayoría de los proyectos necesitarán una configuración compleja, razón por la cual webpack admite un archivo de configuración . Esto es mucho más eficiente que tener que escribir manualmente muchos comandos en la terminal: "webpack.config.js" en la carpeta del proyecto.

  /*
   Importamos el módulo 'path' de Node.js, que nos proporciona utilidades para trabajar con rutas de archivos y directorios.
?  const path = require('path');
  
   Exportamos la configuración de webpack como un objeto JavaScript.
?  module.exports = {
     Definimos el punto de entrada para webpack. Aquí especificamos el archivo principal de nuestro proyecto.
?    entry: './src/index.js',
  
     Configuramos la salida de webpack, es decir, dónde se generará y guardará el archivo final después de la compilación.
?    output: {
       Establecemos el nombre del archivo de salida como 'bundle.js'.
?      filename: 'bundle.js',
       Especificamos la ruta absoluta donde se guardará el archivo de salida. Usamos el método 'path.resolve()' para obtener la ruta completa del directorio 'dist'.
?      path: path.resolve(__dirname, 'dist'),
    },
  }
  */
  //En resumen, este código configura Webpack para tomar el archivo src/index.js como punto de entrada, compilarlo y generar un archivo bundle.js en el directorio dist, que contiene el código de tu aplicación listo para ser ejecutado en el navegador.

  // Si a webpack.config.js está presente, el webpackcomando lo selecciona de forma predeterminada. Usamos la --config opción aquí solo para mostrar que puede pasar una configuración con cualquier nombre. Esto será útil para configuraciones más complejas que deben dividirse en varios archivos.
}
{//NPM SCRIPTS
  //Anadimos '"build":"webpack"' en el package.json en las llaves "scripts{}" para crear un acceso directo para ejecutar el comando de compilación de Webpack.

  // Cuando ejecutamos npm run build en la terminal, npm busca el script build en el archivo package.json y ejecuta el comando asociado a ese script. En este caso, el comando asociado es webpack. Entonces, al agregar "build": "webpack" al archivo package.json, podemos ejecutar npm run build en lugar de npx webpack para compilar nuestro código utilizando Webpack. Esto hace que el proceso sea más conveniente y más fácil de recordar.

  //? Se pueden pasar parámetros personalizados al paquete web agregando dos guiones entre el npm run buildcomando y sus parámetros, por ejemplo npm run build.
}
{// CREANDO UN PAQUETE



  // Para agrupar una dependencia con index.js, necesitaremos instalar la biblioteca localmente:
  //? npm install --save nombre-de-la-biblioteca

  // Ahora, importemos la dependencia en en nuestro script "index.js":
  //? import { miFuncion } from 'mi-biblioteca';

  // Importa solo la función 'miFuncion' de 'mi-biblioteca'

  // Usar la función importada
  //? miFuncion();


  //Si está instalando un paquete con fines de desarrollo (por ejemplo, un linter, bibliotecas de prueba, etc.), entonces debería usar npm install --save-dev. Si no npm install --save.
}