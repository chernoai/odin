// Importamos el módulo 'path' de Node.js, que nos proporciona utilidades para trabajar con rutas de archivos y directorios.
const path = require('path');

// Exportamos la configuración de webpack como un objeto JavaScript.
module.exports = {
  // Definimos el punto de entrada para webpack. Aquí especificamos el archivo principal de nuestro proyecto.
  entry: './src/index.js',

  // Configuramos la salida de webpack, es decir, dónde se generará y guardará el archivo final después de la compilación.
  output: {
    // Establecemos el nombre del archivo de salida como 'bundle.js'.
    filename: 'bundle.js',
    // Especificamos la ruta absoluta donde se guardará el archivo de salida. Usamos el método 'path.resolve()' para obtener la ruta completa del directorio 'dist'.
    path: path.resolve(__dirname, 'dist'),
  },
}