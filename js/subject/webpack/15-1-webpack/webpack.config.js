const path = require('path');
const toml = require('toml');
const yaml = require('yamljs');
const json5 = require('json5')
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // Definimos las reglas de carga para diferentes tipos de archivos.
  module: {
    rules: [
      {
        // Establecemos una regla para los archivos CSS. La expresión regular /\.css$/i coincide con cualquier archivo que termine con '.css'.
        test: /\.css$/i,
        // Especificamos los cargadores que webpack debe usar para procesar los archivos CSS. En este caso, usamos 'style-loader' y 'css-loader'.
        use: ['style-loader', 'css-loader'],
      },
      // Define una regla para manejar archivos de imagen con extensiones png, svg, jpg, jpeg y gif.
      {
        // Utiliza una expresión regular para hacer coincidir las extensiones de archivo especificadas.
        test: /\.(png|svg|jpg|jpeg|gif)$/i,

        // Especifica el tipo de recurso que se utilizará para manejar los archivos coincidentes.
        // En este caso, se utilizará 'asset/resource', lo que significa que cada archivo de imagen se tratará como un recurso separado.
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i, // Esta línea define la condición bajo la cual se aplicará esta regla. En este caso, se aplicará a cualquier archivo que termine con las extensiones .woff, .woff2, .eot, .ttf o .otf.
        type: 'asset/resource', // Sirve para especificar el tipo de recurso y cómo debe ser tratado por webpack. En este caso, 'asset/resource' indica que el recurso debe ser emitido como un archivo independiente en la carpeta de salida.
      },
      {
        // Este bloque define reglas para manejar archivos CSV y TSV.
        test: /\.(csv|tsv)$/i,
        // Se utiliza el cargador 'csv-loader' para procesar los archivos CSV y TSV.
        use: ['csv-loader'],
      },
      {
        // Este bloque define reglas para manejar archivos XML.
        test: /\.xml$/i,
        // Se utiliza el cargador 'xml-loader' para procesar los archivos XML.
        use: ['xml-loader'],
      },// Configuración para cargar archivos .toml y analizarlos como JSON.
      {
        test: /\.toml$/i,
        type: 'json',
        parser: {
          // Utiliza el analizador 'toml.parse' para analizar archivos .toml. Esto significa que se utilizará la función de análisis proporcionada por la biblioteca toml para interpretar el contenido de los archivos con extensión .toml.
          parse: toml.parse,
        },
      },
      // Configuración para cargar archivos .yaml y analizarlos como JSON.
      {
        test: /\.yaml$/i,
        type: 'json',
        parser: {
          // Utiliza el analizador 'yaml.parse' para analizar archivos .yaml. Indica que se utilizará la función de análisis proporcionada por la biblioteca yaml para interpretar el contenido de los archivos con extensión .yaml.
          parse: yaml.parse,
        },
      },
      // Configuración para cargar archivos .json5 y analizarlos como JSON.
      {
        test: /\.json5$/i,
        type: 'json',
        parser: {
          // Utiliza el analizador 'json5.parse' para analizar archivos .json5. Esto indica que se utilizará la función de análisis proporcionada por la biblioteca json5 para interpretar el contenido de los archivos con extensión .json5.
          parse: json5.parse,
        },
      },
      // "parser:{parse : .parse }" es regla para que webpack pueda manejar diferentes tipos de archivos de configuración y utilizar el analizador correspondiente para procesar su contenido de manera adecuada.
    ],
  },
};
