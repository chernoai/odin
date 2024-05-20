{//Bundling
  {//Proceso de agrupamiento con Webpack

    //todo - Descripción:
    // - Webpack toma un archivo de entrada, como index.js, como punto de inicio del proceso de agrupamiento.
    // - Analiza el archivo de entrada y sigue todas las importaciones y exportaciones que contiene.
    // Por ejemplo:
    //?  import funcionA from './archivo1.js';
    //?  import funcionB from './archivo2.js';
    // - Identifica las dependencias del archivo de entrada, en este caso, archivo1.js y archivo2.js.
    // - Agrupa todos estos archivos y sus dependencias en uno solo.
    // - El resultado final es un solo archivo JavaScript, que contiene todo el código de tu proyecto, optimizado y listo para su uso en el navegador.
  }
  {// Procesamiento de otros tipos de archivos con Webpack

    //todo - Descripción:
    // - Además de archivos JavaScript, un proyecto puede incluir archivos de CSS, imágenes o fuentes.
    // - Si importas un archivo CSS dentro de tu JavaScript, por ejemplo, para estilos específicos de un componente, Webpack debe manejar este archivo CSS.
    // Por ejemplo:
    //?  import './styles.css';
    // - Webpack necesita saber cómo procesar estos archivos para incluirlos correctamente en el resultado final.
    // - Del mismo modo, si importas imágenes dentro de tu JavaScript o CSS, Webpack debe copiarlas y manejarlas adecuadamente en la carpeta de salida, como "dist".
  }
  {// Configuración de loaders en Webpack

    //todo - Descripción:
    // - Webpack necesita reglas especiales, llamadas loaders, para manejar archivos que no son JavaScript.
    // - Estos loaders le indican a Webpack cómo procesar archivos CSS, imágenes u otros tipos de archivos y cómo incluirlos en el resultado final.
    // - Por ejemplo, para manejar archivos CSS, se puede usar un loader llamado "css-loader", y para imágenes, se puede usar "file-loader".
    // - Estas reglas se configuran en el archivo de configuración de Webpack para que Webpack sepa qué hacer con cada tipo de archivo en el proyecto.
  }
  {//Resultado final de Webpack

    //todo - Descripción:
    // - Después de procesar todos los archivos y sus dependencias, Webpack genera un único archivo JavaScript optimizado que contiene todo el código de la aplicación.
    // - Este archivo es lo que se carga en el navegador cuando visitas el sitio web.
    // - El objetivo es optimizar el rendimiento y la carga de la página al tener un solo archivo que contiene todo el código necesario para la aplicación.
  }
}
{//Plugin HTML-WEBPACK
  {//PROPÓSITO DEL Plugin HTML-WEBPACK:
    //todo - Descripción:
    // - El plugin HTML-webpack ayuda a generar automáticamente un archivo HTML base en la carpeta de salida (generalmente "dist") cuando se compila un proyecto.

    //todo - Funcionalidad:
    // - Genera un archivo HTML base que actúa como la estructura principal de la página web.
    // - Este archivo se puede personalizar con opciones configurables según las necesidades del proyecto.
    // - Facilita la inserción dinámica de enlaces a los archivos JavaScript y CSS generados por Webpack en el archivo HTML base.

    //todo - Ventajas:
    // - Simplifica el proceso de creación del archivo HTML base, eliminando la necesidad de crearlo manualmente.
    // - Permite la automatización del proceso de generación del archivo HTML base durante la compilación del proyecto.

    //todo - Uso típico:
    // - Se utiliza comúnmente en proyectos de desarrollo web para generar el archivo HTML base que sirve como punto de entrada para la aplicación.
  }
  {//¿POR QUÉ NECESITAMOS EL PLUGIN HTML-WEBPACK?:

    //todo - Motivo:
    // - Mantenemos nuestro código de desarrollo en la carpeta "src" y queremos tener una carpeta separada ("dist") para la versión final de nuestra aplicación, lista para ser desplegada.
    // - Necesitamos manejar el archivo HTML que se requiere para cargar nuestra aplicación en el navegador.

    //todo - Función del plugin:
    // - El plugin HTML-webpack genera automáticamente el archivo HTML base en la carpeta de salida ("dist") durante la compilación del proyecto.
    // - Permite mantener el archivo HTML separado del código fuente y lo crea de manera dinámica, incluyendo automáticamente los enlaces a los archivos JavaScript y CSS generados por Webpack.

    //todo - Ventajas:
    // - Simplifica el proceso de gestión del archivo HTML, evitando la necesidad de crearlo manualmente en la carpeta de salida.
    // - Facilita la integración del archivo HTML en el flujo de trabajo de Webpack, permitiendo una generación automática y personalizable del mismo.
    // - Ayuda a mantener una estructura de proyecto organizada y coherente al separar el código fuente del archivo HTML de destino.

    //todo - Escenario de uso:
    // - Es esencial en proyectos de desarrollo web donde se necesita una carpeta de salida ("dist") para la versión final de la aplicación.
    // - Se utiliza para automatizar la creación del archivo HTML base que carga la aplicación en el navegador, lo que facilita el despliegue y la distribución del proyecto.
  }
  {//USO DEL COMPLEMENTO HTML-WEBPACK:

    //todo 1. Instalación:
    // - Primero, se necesita instalar el plugin a través de npm o yarn:
    //? npm install html-webpack-plugin --save-dev


    //todo 2. Configuración:
    // - Luego, se configura el plugin en el archivo de configuración de Webpack (por lo general, webpack.config.js).
    // - Se importa el plugin en el archivo de configuración de Webpack.
    // - Se agrega una instancia del plugin como un elemento en la matriz "plugins" dentro de la configuración de Webpack.

    //Ejemplo de configuración:

    // Importar el plugin HTML-webpack
    //? const HtmlWebpackPlugin = require('html-webpack-plugin');

    //? module.exports = {
    //  Otras configuraciones de Webpack...

    //?   plugins: [
    //   Agregar una instancia del plugin
    //?     new HtmlWebpackPlugin({
    //      Especificar la plantilla HTML personalizada
    //?       template: './src/template.html',
    //?     }),
    //?   ],
    //? };
  }
}
{//Gestión de Activos
  {//CONFIGURACIÓN:

    // Hagamos un cambio menor en nuestro proyecto antes de comenzar:
    /*
    1. Archivo webpack.config.js:
      - Importación del módulo 'path'.
      - Definición de la configuración de Webpack:
      - Especificación del punto de entrada como './src/index.js'.
      - Especificación del nombre del archivo de salida como 'bundle.js'.
      - Especificación de la ruta de salida usando 'path.resolve()' para asegurar una ruta absoluta.
    */

    const path = require('path');

    module.exports = {
      // Configuración de Webpack
      entry: './src/index.js', // Punto de entrada
      output: {
        filename: 'bundle.js', // Nombre del archivo de salida
        path: path.resolve(__dirname, 'dist'),     // Especificamos la carpeta de salida donde se guardarán los archivos generados.
        // Utilizamos path.resolve para obtener la ruta absoluta del directorio 'dist'.
      },
    };
  }
  {//CARGANDO CSS:

    // Para poder importar un archivo CSS desde un módulo JavaScript, necesitamos instalar y configurar los cargadores de estilos y CSS en nuestro archivo de configuración de Webpack.

    //todo 1. Primero, instalamos los cargadores necesarios a través de npm:
    //? npm install css-loader style-loader --save-dev


    //todo 2. Luego, configuramos los cargadores en nuestro archivo webpack.config.js:

    const path = require('path');

    module.exports = {
      entry: './src/index.js',
      output: {
        filename: 'bundle.js',        
        path: path.resolve(__dirname, 'dist'),
      },

      // Configura los módulos y las reglas que Webpack usará para procesar los diferentes tipos de archivos.
      module: {
        rules: [
          {
            // Aplica esta regla a todos los archivos que coincidan con la expresión regular (en este caso, archivos CSS).
            test: /\.css$/i,
            // Especifica los cargadores a usar para estos archivos.
            use: [
              // 'style-loader' inyecta el CSS en el DOM.
              'style-loader',
              // 'css-loader' interpreta @import y url() como import/require() y resuelve las dependencias.
              'css-loader'
            ],
          },
        ],
      },
    };


    // El orden de los cargadores en webpack es crucial. Cada cargador espera un tipo específico de entrada y produce una salida para el siguiente cargador. Por ejemplo, en el caso de los archivos CSS, primero se debe aplicar el 'css-loader' para interpretar el CSS y luego el 'style-loader' para inyectar los estilos en el DOM. Si se cambia el orden de los cargadores, es probable que webpack arroje errores porque el cargador esperará un tipo de entrada que no recibió.


    //todo 3. Ahora, puedes importar y usar archivos CSS en tu código JavaScript. Por ejemplo:
    // src/index.js
    //* import _ from 'lodash';
    //* import './style.css';

    //* function component() {
    //*  const element = document.createElement('div');
    //*  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    //*  element.classList.add('hello');
    //*  return element;}

    //* document.body.appendChild(component());


    //todo 4. Ejecuta el comando de compilación para generar el archivo bundle.js:
    //? $ npm run build

    //todo 5. Abre dist/index.html en tu navegador y deberías ver el estilo aplicado al texto 'Hello webpack'.

    // Recuerda que en producción se suele minimizar el CSS para mejorar los tiempos de carga y existen cargadores para diferentes tipos de CSS, como postcss, sass y less.
  }
  {//CARGANDO IMAGENES:

    // Para cargar imágenes en nuestro proyecto y que Webpack las maneje, necesitamos configurar un cargador en nuestro archivo de configuración de Webpack.

    //todo 1. Agregamos una nueva regla al objeto 'module' en webpack.config.js para procesar archivos de imagen:

    const path = require('path');

    module.exports = {
      entry: './src/index.js',
      output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
      },
      module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            // Utiliza una expresión regular para hacer coincidir las extensiones de archivo especificadas.
            test: /\.(png|svg|jpg|jpeg|gif)$/i,

            // Especifica el tipo de recurso que se utilizará para manejar los archivos coincidentes.
            // En este caso, se utilizará 'asset/resource', lo que significa que cada archivo de imagen se tratará como un recurso separado.
            type: 'asset/resource',
          },
        ],
      },
    };

    //todo 2. En el código JavaScript, podemos importar la imagen y asignarla a un elemento HTML como el src de una imagen <img> o como el fondo de un elemento HTML mediante CSS.

    // Por ejemplo, en nuestro index.js, importamos la imagen y la asignamos a un nuevo elemento Image que luego agregamos al DOM:

    //  - Importamos la imagen utilizando un import.
    //  - Creamos un nuevo elemento Image y asignamos la URL de la imagen como su src.
    //  - Añadimos este elemento al DOM.

    //? import _ from 'lodash';
    //? import './style.css';
    //? import Icon from './icon.png';

    //? function component() {
    //?   const element = document.createElement('div');
    //?   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    //?   element.classList.add('hello');

    //?   const myIcon = new Image();
    //?   myIcon.src = Icon;

    //?   element.appendChild(myIcon);

    //?   return element;
    //? }

    //? document.body.appendChild(component());

    //todo 3. Al ejecutar la compilación, Webpack procesará la imagen y la agregará al directorio de salida (por lo general, 'dist'). El nombre de la imagen puede cambiar para mejorar la caché del navegador.


    //? $ npm run build


    //todo 4. Abre el index.html en tu navegador y deberías ver el ícono y el texto 'Hello webpack'.



    // Recuerda que Webpack procesará las imágenes importadas y las añadirá al directorio de salida, y los nombres de archivo pueden cambiar en el proceso.
  }
  {//CARGANDO FUENTES :

    // Para cargar fuentes en nuestro proyecto y que Webpack las maneje, necesitamos configurar un cargador en nuestro archivo de configuración de Webpack, similar a como lo hicimos con las imágenes.

    //todo 1. Agregamos una nueva regla al objeto 'module' en webpack.config.js para procesar archivos de fuentes:

    const path = require('path');

    module.exports = {
      entry: './src/index.js',
      output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
      },
      module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/i, // Esta línea define la condición bajo la cual se aplicará esta regla. En este caso, se aplicará a cualquier archivo que termine con las extensiones .woff, .woff2, .eot, .ttf o .otf.
            type: 'asset/resource', // Sirve para especificar el tipo de recurso y cómo debe ser tratado por webpack. En este caso, 'asset/resource' indica que el recurso debe ser emitido como un archivo independiente en la carpeta de salida.
          },
        ],
      },
    };

    //todo 2. En el código CSS, podemos usar la directiva @font-face para especificar la fuente, y webpack se encargará de procesarla:

    //? @font-face {
    //?   font-family: 'MyFont';
    //?   src: url('./my-font.woff2') format('woff2'),
    //?     url('./my-font.woff') format('woff');
    //?   font-weight: 600;
    //?   font-style: normal;
    //? }

    //todo 3. Luego, podemos aplicar esta fuente a elementos HTML a través de CSS como de costumbre:

    //? .hello {
    //?   color: red;
    //?   font-family: 'MyFont';
    //?   background: url('./icon.png');
    //? }

    //todo 4. Al ejecutar la compilación, Webpack procesará las fuentes y las agregará al directorio de salida (por lo general, 'dist'). Los nombres de los archivos pueden cambiar para mejorar la caché del navegador.

    //? $ npm run build

    //todo 5. Abre el index.html en tu navegador y deberías ver el texto 'Hello webpack' con la nueva fuente aplicada.
  }
  {//CARGANDO DATOS:

    // Para cargar diferentes tipos de datos, como archivos JSON, CSV, TSV y XML, podemos configurar webpack para que utilice los cargadores correspondientes.

    //todo 1. Instalamos los cargadores necesarios para los diferentes tipos de datos:


    //? npm install --save-dev csv-loader xml-loader


    //todo 2. Luego, agregamos reglas adicionales al objeto 'module' en webpack.config.js para manejar estos tipos de archivos:


    const path = require('path');

    module.exports = {
      entry: './src/index.js',
      output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
      },
      module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
          },
          {
            test: /\.(csv|tsv)$/i,
            use: ['csv-loader'],
          },
          {
            test: /\.xml$/i,
            use: ['xml-loader'],
          },
        ],
      },
    };


    //todo 3. Ahora podemos importar archivos de datos en nuestro código JavaScript y webpack los procesará correctamente. Por ejemplo:


    //? import Data from './data.xml';
    //? import Notes from './data.csv';


    //todo 4. Al compilar el proyecto nuevamente, webpack procesará los archivos de datos y los incluirá en la salida. Puedes verificar si los datos se cargaron correctamente revisando la consola en el navegador.


    console.log(Data);
    console.log(Notes);
  }
  {//PERSONALIZAR EL ANALIZADOR DE MODULOS JSON:

    // A veces, es posible que necesitemos importar archivos en formatos como TOML, YAML o JSON5 como módulos JSON en nuestro proyecto de webpack. Podemos lograr esto configurando un analizador personalizado en webpack.

    //todo 1. Primero, instalamos los paquetes necesarios para cada formato que queremos admitir:


    //? npm install toml yamljs json5 --save-dev


    //todo 2. Luego, configuramos estos analizadores en la configuración de webpack, especificando el tipo de archivo y el analizador correspondiente para cada uno:


    const path = require('path');
    const toml = require('toml');
    const yaml = require('yamljs');
    const json5 = require('json5');

    module.exports = {
      entry: './src/index.js',
      output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
      },
      module: {
        rules: [
          // Otras reglas de carga...

          {
            test: /\.toml$/i,
            type: 'json',
            parser: {
              parse: toml.parse,
            },
          },
          {
            test: /\.yaml$/i,
            type: 'json',
            parser: {
              parse: yaml.parse,
            },
          },
          {
            test: /\.json5$/i,
            type: 'json',
            parser: {
              parse: json5.parse,
            },
          },
        ],
      },
    };

    //todo 3. Ahora, podemos importar archivos en los formatos especificados en nuestro código JavaScript como si fueran archivos JSON normales:


    //? import toml from './data.toml';
    //? import yaml from './data.yaml';
    //? import json from './data.json5';

    console.log(toml.title); // Salida: `TOML Example`
    console.log(toml.owner.name); // Salida: `Tom Preston-Werner`

    console.log(yaml.title); // Salida: `YAML Example`
    console.log(yaml.owner.name); // Salida: `Tom Preston-Werner`

    console.log(json.title); // Salida: `JSON5 Example`
    console.log(json.owner.name); // Salida: `Tom Preston-Werner`

    //todo 4. Al compilar el proyecto nuevamente y abrir la consola en el navegador, deberíamos ver los datos importados correctamente.
  }
  {// ASSETS GLOBALES:

    //  La ventaja de cargar recursos de esta manera es que permite agrupar módulos y recursos de una manera más intuitiva, eliminando la necesidad de un directorio global de /assets. En su lugar, los recursos se agrupan con el código que los utiliza, lo que hace que el código sea más portable y fácil de mantener.

    //  Por ejemplo, puede organizar su estructura de la siguiente manera:

    /* 
    |-- /components
      |   |-- /my-component
      |   |   |-- index.jsx
      |   |   |-- index.css
      |   |   |-- icon.svg
      |   |   | --img.png
    */
    //   Esta configuración facilita la portabilidad del código, ya que todo lo estrechamente acoplado se encuentra en un solo lugar. Si necesita utilizar el componente /my-component en otro proyecto, simplemente puede copiarlo o moverlo al directorio /components de ese proyecto. Siempre y cuando las dependencias externas estén instaladas y la configuración tenga los mismos cargadores definidos, el componente debería funcionar correctamente.

    //   Sin embargo, si tiene activos compartidos entre múltiples componentes o necesita mantener una estructura de directorios más tradicional, aún puede almacenar esos recursos en un directorio base y utilizar alias para facilitar su importación.
    //   }
  }
}
//? WEBPACK DOC OFICIAL
{//Cómo configurar el complemento HTML Webpack
  {// Instalar el complemento HTML Webpack

    // Primero, navegaré al directorio de mi proyecto. Luego instalaré el complemento html-webpack en nuestras dependencias de desarrollo. Entonces escribiré:
    //? npm install --save-dev html-webpack-plugin.
  }
  {//Configuración de html-webpack-plugin en Webpack 5:

    //todo 1. Instalación del complemento:
    //  - Primero, asegúrese de haber instalado html-webpack-plugin con el siguiente comando:
    //? npm install html-webpack-plugin --save-dev

    //todo 2. Configuración en webpack.config.js:
    //  - Importe el módulo 'html-webpack-plugin' en su archivo de configuración de Webpack anadiendo:
    //? const HtmlWebpackPlugin = require('html-webpack-plugin');

    //  - Agregue una instancia de HtmlWebpackPlugin en el array de plugins, pasando las opciones deseadas.
    //  - Las opciones incluyen:
    //  - 'title': Para establecer el título del documento HTML.
    //  - 'filename': Para especificar el nombre del archivo HTML generado.
    //  - 'inject': Para determinar dónde colocar las etiquetas de secuencia de comandos en el HTML (cuerpo o cabeza).
    //  - 'scriptLoading': Para controlar cómo se cargan los scripts (normalmente, 'defer' para mejorar el rendimiento de inicio de la página).
    /*
  ? Dentro de las llaves "module.exports"
  ?  plugins: [
  ?  new HtmlWebpackPlugin({
  ?    template:'./src/index.html',
  ?    filename: "index.html",
  ?    inject: "body",
  ?  })
  ?] 
    */

    //todo 3. Movimiento de archivos:
    //  - Mueva el archivo index.html de la carpeta 'dist' a la carpeta 'src'.
    //  - Elimine todos los archivos de la carpeta 'dist' para que puedan generarse automáticamente con html-webpack-plugin.

    //todo 4. Ejecución del comando de compilación:
    // - Para generar los archivos index.html y bundle.js ejecute el comando:
    //?'npm run build'

    //todo 5. Verificación:
    //  - Verifique la carpeta 'dist' para asegurarse de que se haya generado correctamente el archivo index.html.
  }
  {// Uso de una plantilla personalizada con html-webpack-plugin:

    //todo 1. Asignación de la plantilla:
    //  - En webpack.config.js, establezca la propiedad "template" dentro de "plugins:[new HtmlWebpackPlugin({}" con la ruta del archivo de plantilla que desea utilizar.
    //  - Por ejemplo, si desea usar una plantilla personalizada ubicada en './src/index.html', configure "template" como './src/index.html'.

    //todo 2. Eliminación de la propiedad de título:
    //  - Si ya ha configurado el título directamente en la plantilla HTML, puede eliminar la propiedad "title" de la configuración de html-webpack-plugin.

    //todo 3. Eliminación de la etiqueta script:
    //  - Como se está utilizando un archivo HTML como plantilla, no es necesario incluir la etiqueta <script> en la configuración de html-webpack-plugin, ya que esta será creada automáticamente por el complemento.

    //todo 4. Ejecución del comando de compilación:
    //  - Ejecute el comando 'npm run build' nuevamente para generar el archivo index.html utilizando la plantilla personalizada.

    //todo 5. Verificación:
    //  - Verifique que el archivo index.html se haya generado correctamente en la carpeta de salida y que se haya utilizado la plantilla personalizada especificada.
  }
}
{//Gestión de salida
  {// Preparación del proyecto:

    //todo 1. Estructura del proyecto:
    //    - Ajuste la estructura del proyecto de la siguiente manera:
    /*
    proyecto
    ├── webpack-demo
    │   ├── package.json
    │   ├── package-lock.json
    │   ├── webpack.config.js
    │   ├── /dist
    │   └── /src
    │       ├── index.js
 *  │       └── print.js
    └── /node_modules
    */

    //todo 2. Agregar lógica a print.js:
    //    - Agregue la siguiente lógica al archivo src/print.js:
    /*
      ?  export default function printMe() {
        ?    console.log('I get called from print.js!');
        ?  }
    */

    //todo 3. Uso de la función en index.js:
    //    - Utilice la función exportada en print.js en el archivo src/index.js.
    /*
    ?  import _ from 'lodash';
    *  import printMe from './print.js';
    
    ?  function component() {
      ?    const element = document.createElement('div');
      *    const btn = document.createElement('button');
  
      ?    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    
      *    btn.innerHTML = 'Click me and check the console!';
      *    btn.onclick = printMe;
    
      *    element.appendChild(btn);
    
      ?    return element;
      ?  }
    
    document.body.appendChild(component());
    */

    //todo 4. Actualización del archivo index.html:
    //    - Actualice el archivo dist/index.html para que incluya los scripts generados dinámicamente:
    /*
      ?  <!DOCTYPE html>
      ?  <html>
      ?    <head>
      ?      <meta charset="utf-8" />
      *      <title>Output Management</title>
      *      <script src="./print.bundle.js"></script>
      ?    </head>
      ?    <body>
      *      <script src="./index.bundle.js"></script>
      ?    </body>
      ?  </html>
    */
    // Webpack procesa y empaqueta los archivos de salida en uno o más archivos optimizados. Los nombres como print.bundle.js e index.bundle.js indican que son los paquetes generados por Webpack. Los archivos originales, como print.js e index.js, son los puntos de entrada y se utilizan para construir los paquetes de salida. En el archivo HTML, referenciamos los paquetes de salida en lugar de los archivos originales.

    //todo 5. Configuración de Webpack:
    //    - En el archivo webpack.config.js, ajuste la entrada y la salida para permitir nombres de paquetes dinámicos:
    /*
      ?  const path = require('path');
    
      ?  module.exports = {
        Definimos múltiples puntos de entrada para nuestra aplicación.
        *    entry: {
              Punto de entrada para el archivo index.js en la carpeta src.
          *      index: './src/index.js',
                  Punto de entrada para el archivo print.js en la carpeta src.
          *      print: './src/print.js',
          ?    },
            ?    output: {
                 Definimos el nombre de los archivos de salida usando el nombre del punto de entrada.
                 [name] será reemplazado por 'index' o 'print' según corresponda.
                *      filename: '[name].bundle.js',
                  ?      path: path.resolve(__dirname, 'dist'),
                  ?    },
                  ?  };
    */

    //todo 6. Ejecución de la compilación:
    //    - Ejecute el comando 'npm run build' para generar los archivos bundle.
    //? $ npm run build
  }
  {// Configuración de HtmlWebpackPlugin:

    //todo 1. Instalación del complemento:
    //    - Primero, instale el complemento utilizando npm:
    //? npm install --save-dev html-webpack-plugin


    //todo 2. Ajuste en webpack.config.js:
    //    - Importe HtmlWebpackPlugin y agregue el complemento a la matriz de plugins en webpack.config.js:
    /*
    ?const path = require('path');
    ?const HtmlWebpackPlugin = require('html-webpack-plugin');
    
    ?module.exports = {
      ?entry: {
        ? index: './src/index.js',
        ? print: './src/print.js',
      ? },
      ? plugins: [
      ?   new HtmlWebpackPlugin({
      ?   title: 'Output Management',
      ?  }),
      ?],
      ?output: {
      ?  filename: '[name].bundle.js',
      ?  path: path.resolve(__dirname, 'dist'),
      ?},
    ?};
    */

    //todo 3. Observación sobre la generación del archivo HTML:
    //    - Antes de realizar una compilación, es importante tener en cuenta que HtmlWebpackPlugin generará su propio index.html archivo en la carpeta dist/, reemplazando cualquier archivo existente. Esto significa que el index.html archivo manualmente creado será sobrescrito por el generado por HtmlWebpackPlugin.

    //todo 4. Ejecución de la compilación:
    //    - Ejecute el comando 'npm run build' para realizar la compilación y observar el resultado generado por HtmlWebpackPlugin.
    //? $ npm run build

  }
  {// Limpiando la carpeta /dist antes de la compilación:

    // 1. Configuración en webpack.config.js:
    //    - Utilice la opción 'clean' en la configuración de salida para limpiar automáticamente la carpeta /dist antes de cada compilación:

    /*
    ?const path = require('path');
    ?const HtmlWebpackPlugin = require('html-webpack-plugin');

    ?module.exports = {
      ?entry: {
        ?index: './src/index.js',
        ?print: './src/print.js',
      ?},
      ?plugins: [
        ?new HtmlWebpackPlugin({
          ?title: 'Output Management',
        ?}),
      ?],
      ?output: {
        ?filename: '[name].bundle.js',
        ?path: path.resolve(__dirname, 'dist'),
        *clean: true,
      ?},
    ?};
    */

    // 2. Ejecución de la compilación:
    //    - Ejecute el comando 'npm run build' para realizar la compilación y observe cómo la carpeta /dist se limpia antes de generar los archivos de salida.
    //? $ npm run build
  }
  {// El Manifiesto

    // Quizás se pregunte cómo parece que webpack y sus complementos "saben" qué archivos se están generando. La respuesta está en el manifiesto que webpack mantiene para rastrear cómo se asignan todos los módulos a los paquetes de salida. Si está interesado en administrar paquetes web output de otras maneras, el manifiesto sería un buen lugar para comenzar.

    // Los datos del manifiesto se pueden extraer en un archivo json para su consumo mediante la extensión WebpackManifestPlugin.

    // No veremos un ejemplo completo de cómo usar este complemento en sus proyectos, pero puede leer la página de conceptos y la guía de almacenamiento en caché para descubrir cómo se relaciona esto con el almacenamiento en caché a largo plazo.

    // Conclusión
  }
}
{//Desarrollo
  {// Desarrollo - Configuración del entorno:

    //todo 1. Ajuste del modo de desarrollo y título:
    //    - Configure el modo de webpack en 'development' y establezca el título en 'Development'.
    /*
    ?module.exports = {
      Define el modo de construcción como desarrollo
      *mode: 'development', 
      ?entry: {
        ?index: './src/index.js',
        ?print: './src/print.js',
      ?},
      ?plugins: [
        ?new HtmlWebpackPlugin({
          *title: 'Development',
        ?}),
      ?],
      ?output: {
        ?filename: '[name].bundle.js',
        ?path: path.resolve(__dirname, ?'dist'),
        ?clean: true,
      ?},
    ?};
    */

    //todo 2. Observaciones:
    //    - La configuración del modo de desarrollo ('development') habilita ciertas características de webpack que son útiles durante el desarrollo, como la generación de mapas de origen para facilitar la depuración.
    //    - La opción 'clean: true' en la configuración de salida de webpack asegura que la carpeta de salida ('dist') se limpie antes de cada compilación, eliminando cualquier archivo antiguo generado.
    //    - Al establecer el título en 'Development' en el HtmlWebpackPlugin, se asegura de que el título del documento HTML generado refleje el entorno de desarrollo.
  }
  {// Usando mapas fuente:

    //todo 1. Configuración en webpack.config.js:
    //    - Se utiliza la opción 'devtool' para especificar el tipo de mapa fuente a generar. En este caso, se utiliza 'inline-source-map', que agrega los mapas fuente directamente al archivo JavaScript generado.

    /*
    ?module.exports = {
      ?mode: 'development',
      ?entry: {
        ?index: './src/index.js',
        ?print: './src/print.js',
      ?},
      *devtool: 'inline-source-map',
      ?plugins: [
        ?new HtmlWebpackPlugin({
          ?title: 'Development',
        ?}),
      ?],
      ?output: {
        ?filename: '[name].bundle.js',
        ?path: path.resolve(__dirname, 'dist'),
        ?clean: true,
      ?},
    ?};
    */

    //todo 2. Descripción:
    //    - Los mapas fuente son útiles para rastrear errores y advertencias en el código original después de la agrupación.
    //    - La opción 'inline-source-map' agrega los mapas fuente directamente al archivo JavaScript generado, lo que facilita la depuración en el navegador.
    //    - Asegúrese de revisar las diferentes opciones disponibles para los mapas fuente según sus necesidades específicas.

    //todo 3. Ejemplo de error:
    //    - Hemos introducido un error en el archivo 'print.js' (error de escritura en 'console.log') para demostrar cómo los mapas fuente facilitan la identificación de errores en el código original.
    //    - Después de compilar y ejecutar el código en el navegador, se puede ver que el error hace referencia al archivo y al número de línea exactos donde ocurrió el error, lo que simplifica enormemente el proceso de depuración.
  }
  {// Elegir una herramienta de desarrollo:

    //! Advertencia: Algunos editores de texto tienen una función de "escritura segura" que podría interferir con algunas de las siguientes herramientas. Lea Cómo ajustar su editor de texto para encontrar una solución a estos problemas.
    {// Ajustar su editor de texto:

      // Cuando utilice la compilación automática de su código, podría encontrarse con problemas al guardar sus archivos.
      // Algunos editores tienen una función de "escritura segura" que puede interferir potencialmente con la recompilación.

      // Para deshabilitar esta función en algunos editores comunes, consulte la lista a continuación:

      //todo 1. Sublime Text 3:
      //    - Agregue atomic_save: 'false' a sus preferencias de usuario para desactivar la escritura segura.

      //todo 2. IDE de JetBrains (por ejemplo, WebStorm):
      //    - Desmarque "Usar escritura segura" en Preferencias > Apariencia y comportamiento > Configuración del sistema.

      //todo 3. Vim:
      //    - Agregue :set backupcopy=yes a su configuración para habilitar la escritura segura.
    }

    //todo 1. Compilación automática:
    //    - Ejecutar manualmente 'npm run build' cada vez que se realiza un cambio puede ser tedioso.
    //    - Hay opciones disponibles en webpack para compilar automáticamente el código cada vez que cambia:


    //todo 2. Opciones disponibles:
    //    a. Modo de visualización del paquete web: Permite la compilación automática y la recarga en el navegador cuando se realizan cambios.
    //    b. servidor-dev-webpack: Un servidor de desarrollo integrado que ofrece funcionalidades adicionales, como la recarga en caliente (hot module replacement).
    //    c. webpack-dev-middleware: Middleware de desarrollo que se puede integrar con un servidor Node.js existente para proporcionar capacidades de desarrollo en tiempo real.

    //todo 3. Elección de la opción adecuada:
    //    - En la mayoría de los casos, webpack-dev-server es la opción más común y fácil de usar para compilar automáticamente el código y recargar el navegador cuando se realizan cambios en el código fuente.

    //? Nota: Asegúrese de revisar la documentación oficial de webpack para obtener información detallada sobre cómo configurar y utilizar estas opciones de desarrollo.
  }
  {// Usando el modo de vigilancia:

    //todo 1. Configuración en package.json:
    //    - Agregamos un nuevo script llamado "watch" que inicia el modo de vigilancia de webpack utilizando el comando "webpack --watch".

    /*
    ?{
      ?"name": "webpack-demo",
      ?"version": "1.0.0",
      ?"description": "",
      ?"private": true,
      ?"scripts": {
        ?"test": "echo \"Error: no test specified\" && exit 1",
        *"watch": "webpack --watch",
        ?"build": "webpack"
      ?},
      ?"keywords": [],
      ?"author": "",
      ?"license": "ISC",
      ?"devDependencies": {
        ?"html-webpack-plugin": "^4.5.0",
        ?"webpack": "^5.4.0",
        ?"webpack-cli": "^4.2.0"
      ?},
      ?"dependencies": {
        ?"lodash": "^4.17.20"
      ?}
    ?}
    */

    //todo 2. Descripción:
    //    - El modo de vigilancia de webpack permite que webpack observe los cambios en los archivos del proyecto y recompile automáticamente cuando se detecta un cambio.
    //    - Al ejecutar 'npm run watch', webpack se mantiene en ejecución y recompila los archivos automáticamente cuando ocurren cambios.
    //    - Esto mejora significativamente el flujo de trabajo de desarrollo al eliminar la necesidad de recompilar manualmente cada vez que se realizan cambios en los archivos.

    //todo 3. Ejemplo de uso:
    //    - Después de iniciar el modo de vigilancia con 
    //?'npm run watch' 

    //    - Puede ver en la ventana de la terminal que webpack vuelve a compilar automáticamente el módulo modificado.
    //    - Sin embargo, aún debe actualizar manualmente el navegador para ver los cambios aplicados.

    //todo 4. Siguiente paso:
    //    - Para una experiencia de desarrollo más fluida, consideraremos el uso de webpack-dev-server, que actualizará automáticamente el navegador cuando se detecten cambios en los archivos.
  }
  {// Usando webpack-dev-server:

    // 1. Instalación:
    //    - Instalamos webpack-dev-server como una dependencia de desarrollo mediante el comando: 
    //?'npm install --save-dev webpack-dev-server'.

    //todo 2. Configuración en webpack.config.js:
    //    - Configuramos webpack-dev-server en nuestro archivo de configuración de webpack.
    //    - Especificamos el directorio desde el cual se servirán los archivos estáticos con la propiedad 'devServer.static'.
    //    - Esto indicará a webpack-dev-server que sirva los archivos del directorio 'dist' en la URL 'http://localhost:8080'.

    /*
    ?const path = require('path');
    ?const HtmlWebpackPlugin = require('html-webpack-plugin');

    ?module.exports = {
      ?mode: 'development',
      ?entry: {
        ?index: './src/index.js',
        ?print: './src/print.js',
      ?},
    ?devtool: 'inline-source-map',
    Configuración del servidor de desarrollo proporcionado por webpack-dev-server
    Establece el directorio base para servir archivos estáticos
    *devServer: { 
    *static: './dist', 
    *},
    ?plugins: [
      ?new HtmlWebpackPlugin({
        ?title: 'Development',
      ?}),
    ?],
    ?output: {
      ?filename: '[name].bundle.js',
      ?path: path.resolve(__dirname, 'dist'),
      ?clean: true,
    ?},
    Configuración de optimización para mejorar el rendimiento y la carga de la aplicación
    *optimization: {
      Define cómo se manejarán los fragmentos de código del tiempo de ejecución
          'single' indica que se debe crear un solo fragmento de código para el tiempo de ejecución de la aplicación
      *runtimeChunk: 'single',
      *},
    };
    */

    /* Consejo: Configuración de optimization.runtimeChunk
    ? Se agregó optimization.runtimeChunk: 'single' para este ejemplo específico, donde hay múltiples puntos de entrada en una sola página HTML.
    ? Esto evita problemas potenciales relacionados con la duplicación de código compartido.
    ? Para obtener más detalles sobre cómo dividir el código, consulte el capítulo "División de código".*/
    /* Consejo: Ruta de archivos servidos por webpack-dev-server
    ? webpack-dev-server sirve archivos empaquetados desde el directorio definido en output.path.
    ? Esto significa que los archivos estarán disponibles en la URL: http://[devServer.host]:[devServer.port]/[output.publicPath]/[output.filename].
    ? Asegúrese de tener en cuenta esta ruta al configurar las rutas de sus archivos en su aplicación.*/
    /*
    ! Advertencia: Funcionamiento de webpack-dev-server
    ! webpack-dev-server no escribe ningún archivo de salida en disco después de la compilación.
    ! En su lugar, mantiene los archivos del paquete en la memoria y los sirve como si fueran archivos reales, montados en la ruta raíz del servidor.
    ! Si su página espera encontrar los archivos del paquete en una ruta diferente, puede cambiar esto utilizando la opción devMiddleware.publicPath en la configuración del servidor de desarrollo.
 */

    //todo 3. Script de inicio en package.json:
    //    - Agregamos un nuevo script llamado 'start' que ejecuta 'webpack serve --open'.
    //    - Esto iniciará el servidor de desarrollo y abrirá automáticamente el navegador en la URL del servidor.

    /*
    {
      ?"name": "webpack-demo",
      ?"version": "1.0.0",
      ?"description": "",
      ?"private": true,
      ?"scripts": {
        ?"test": "echo \"Error: no test specified\" && exit 1",
        ?"watch": "webpack --watch",
        *"start": "webpack serve --open",
        ?"build": "webpack"
      ?},
      ?"keywords": [],
      ?"author": "",
      ?"license": "ISC",
      ?"devDependencies": {
        ?"html-webpack-plugin": "^4.5.0",
        ?"webpack": "^5.4.0",
        ?"webpack-cli": "^4.2.0",
        ?"webpack-dev-server": "^3.11.0"
      ?},
      ?"dependencies": {
        ?"lodash": "^4.17.20"
      ?}
    ?}
    */

    //todo 4. Funcionamiento:
    //    - Ahora, al ejecutar 'npm start', webpack-dev-server iniciará el servidor de desarrollo y abrirá automáticamente la página en el navegador.
    //    - Si realizamos cambios en los archivos fuente y los guardamos, el servidor web se recargará automáticamente después de la compilación del código.

    //todo 5. Opciones adicionales:
    //    - webpack-dev-server viene con muchas opciones configurables. Consulte la documentación para obtener más información sobre cómo personalizar el comportamiento del servidor.

    //todo 6. Hot Module Replacement (Reemplazo de módulo en caliente):
    //    - Una característica interesante que puede probar es el reemplazo de módulo en caliente (HMR), que permite la actualización de componentes individuales sin recargar toda la página. 
    //    - Esto puede mejorar significativamente la experiencia de desarrollo al permitir cambios rápidos y visuales en la aplicación.
  }
  {// Usando webpack-dev-middleware:

    // webpack-dev-middlewarees un contenedor que emitirá archivos procesados ​​por webpack a un servidor. Se internamente, sin embargo, está disponible como un paquete separado para permitir configuraciones más personalizadas si se desea. 

    //todo 1. Instalación de paquetes:
    //    - Instalamos los paquetes 'express' y 'webpack-dev-middleware' para configurar un servidor de desarrollo con webpack.

    //? npm install --save-dev express webpack-dev-middleware


    //todo 2. Ajuste de la configuración del webpack.config.js:
    //    - Configuramos el archivo webpack.config.js para que funcione correctamente con el middleware.
    //    - Especificamos 'publicPath' dentro de 'output' para asegurarnos de que los archivos se sirvan correctamente.
    //    - La propiedad 'publicPath' también se utiliza en el middleware para servir los archivos compilados.

    /*
   ?{
    ?...
      ?output: {
        ?filename: '[name].bundle.js',
        ?path: path.resolve(__dirname, 'dist'),
        ?clean: true,
        Especifica la ruta base para todos los activos cargados por la aplicación, como scripts, estilos, imágenes, etc. Por ejemplo, si publicPath se establece en '/', significa que todos los activos se servirán desde la raíz del dominio o el servidor. Si se establece en '/assets/', los activos se servirán desde la ruta /assets/ en el servidor. 
        *publicPath: '/',
      ?},
    ?};
    */

    //todo 3. Configuración del servidor Express:
    //    - Creamos un archivo server.js para configurar un servidor Express.
    //    - Importamos los paquetes necesarios y configuramos el middleware de desarrollo de webpack.
    //    - Especificamos el puerto en el que se ejecutará el servidor.

    /*
     Importamos el paquete 'express' para crear y configurar el servidor web
     ?const express = require('express');

     Importamos el paquete 'webpack' para usar en la configuración del middleware de desarrollo
     ?const webpack = require('webpack');

     Importamos el middleware 'webpack-dev-middleware' para integrar Webpack con Express
     ?const webpackDevMiddleware = require('webpack-dev-middleware');

     Creamos una instancia de la aplicación Express
     ?const app = express();
     
     Importamos la configuración de Webpack desde el archivo 'webpack.config.js'
     ?const config = require('./webpack.config.js');

     Creamos un compilador de Webpack usando la configuración proporcionada
     ?const compiler = webpack(config);

     Usamos el middleware 'webpack-dev-middleware' para integrar Webpack con Express
     ?app.use(
      webpackDevMiddleware(compiler, {
  
        Especificamos la ruta pública para el middleware, que coincide con la configuración de salida de Webpack
        ?publicPath: config.output.publicPath,
      ?})
    ?);

    Iniciamos el servidor Express y lo configuramos para escuchar en el puerto 3000
    ?app.listen(3000, function () {
    Imprimimos un mensaje en la consola cuando el servidor se inicia correctamente
    ?console.log('Example app listening on port 3000!\n');
  ?});
    */

    //todo 4. Scripts npm:
    //    - Agregamos un nuevo script 'server' en el archivo package.json para iniciar el servidor Express.

    /*
    ?{
      ?"name": "webpack-demo",
      ?"version": "1.0.0",
      ?"description": "",
      ?"private": true,
      ?"scripts": {
        ?"test": "echo \"Error: no test specified\" && exit ?1",
        ?"watch": "webpack --watch",
        ?"start": "webpack serve --open",
        *"server": "node server.js",
        ?"build": "webpack"
      ?},
      ?...
    ?}
    */

    //todo 5. Ejecución del servidor:
    //    - Ejecutamos 'npm run server' para iniciar el servidor Express y el middleware de desarrollo de webpack.
    //    - El servidor se ejecutará en el puerto 3000 y servirá la aplicación webpack.

    /*
    npm run server
    */

    //todo 6. Resultado:
    //    - El servidor está listo y servirá la aplicación webpack en http://localhost:3000.
    //    - Ahora puede acceder a la aplicación y ver los cambios en tiempo real mientras desarrolla.

    //todo 7. Consejo adicional:
    //    - Si desea obtener más información sobre el Reemplazo de módulo en caliente (HMR), consulte la guía correspondiente para aprovechar esta función en su desarrollo.
  }
}
{//Produccion
  {// Configuración separada para entornos de desarrollo y producción:

    //En desarrollo, buscamos facilidad de depuración con mapeo de fuentes y recarga en vivo. En producción, priorizamos la optimización del tamaño de los paquetes y la carga rápida del sitio. Por lo tanto, es común tener configuraciones de Webpack separadas para cada entorno.

    //todo 1. Instalación de webpack-merge:
    //    - Instalamos webpack-merge para fusionar las configuraciones comunes con las específicas de cada entorno.

    //? npm install --save-dev webpack-merge


    // 2. Estructura del proyecto:
    //    - Creamos una estructura de carpetas y archivos que separe las configuraciones para desarrollo y producción.

    /*
    proyecto
      |- package.json
      |- package-lock.json
     !|- webpack.config.js
     *|- webpack.common.js
     *|- webpack.dev.js
     *|- webpack.prod.js
      |- /dist
      |- /src
        |- index.js
        |- math.js
      |- /node_modules
    */

    // 3. Configuración común (webpack.common.js):
    //    - Definimos la configuración común que se utilizará tanto en desarrollo como en producción.
    //    - Especificamos la entrada, la salida y los complementos necesarios, como HtmlWebpackPlugin.

    /*
    Importamos el módulo 'path' para manejar rutas de archivos y directorios.
    *const path = require('path');
    Importamos el módulo 'html-webpack-plugin' para generar archivos HTML.
    *const HtmlWebpackPlugin = require('html-webpack-plugin');
    
    
    Definimos el punto de entrada de nuestra aplicación.
    *module.exports = {
      *entry: {
        El punto de entrada principal se encuentra en src/index.js.
        *app: './src/index.js',
      *},
      Configuramos los plugins que queremos utilizar en nuestro proceso de compilación.
      *plugins: [
        Utilizamos HtmlWebpackPlugin para generar un archivo HTML en el directorio de salida.
        Este complemento también nos permite personalizar el HTML generado, como el título.
        *new HtmlWebpackPlugin({
          El título del HTML generado será 'Production'.
          *title: 'Production',
        *}),
      *],
      Configuramos la salida de nuestros archivos compilados.
      *output: {
        Utilizamos [name] en el nombre del archivo de salida para incluir el nombre especificado en 'entry'.
        El nombre de los archivos de salida será 'app.bundle.js'.
        *filename: '[name].bundle.js',
        Especificamos la ubicación del directorio de salida de nuestros archivos compilados.
        Los archivos se colocarán en la carpeta 'dist'.
        *path: path.resolve(__dirname, 'dist'),
        La opción 'clean' se establece en true para limpiar el directorio de salida antes de cada compilación.
        *clean: true,
      *},
    *};
    */

    // 4. Configuración para desarrollo (webpack.dev.js):
    //    - Fusionamos la configuración común con las especificaciones del entorno de desarrollo.
    //    - Establecemos el modo en 'development', agregamos un mapeo de fuente en línea y configuramos el servidor de desarrollo.

    /*
    *const { merge } = require('webpack-merge');
    Importamos la función 'merge' del paquete 'webpack-merge' para combinar configuraciones de Webpack.
    *const common = require('./webpack.common.js');
    Importamos la configuración común de Webpack desde el archivo 'webpack.common.js'.

    module.exports = merge(common, {
      Combinamos la configuración común con la configuración específica de desarrollo.
      *mode: 'development', // Establecemos el modo de Webpack a 'development'.
      *devtool: 'inline-source-map', // Configuramos el mapa de fuentes para la depuración en línea.  
      *devServer: {
        Especificamos el directorio base para servir archivos estáticos durante el desarrollo.
        *static: './dist',  
        *},
      *});
    */

    // 5. Configuración para producción (webpack.prod.js):
    //    - Fusionamos la configuración común con las especificaciones del entorno de producción.
    //    - Establecemos el modo en 'production' para habilitar la minificación y otras optimizaciones.

    /*
    *const { merge } = require('webpack-merge');
    Importamos la función 'merge' del paquete 'webpack-merge' para combinar configuraciones de Webpack.
    *const common = require('./webpack.common.js');
    Importamos la configuración común de Webpack desde el archivo 'webpack.common.js'.
    *module.exports = merge(common, {
      Combinamos la configuración común con la configuración específica de producción.
      Establecemos el modo de Webpack a 'production'.
      *mode: 'production',
    *});
    */

    // 6. Fusionando las configuraciones:
    //    - En cada archivo de configuración específico del entorno, usamos webpack-merge para fusionar la configuración común con las especificaciones del entorno.

    // 7. Utilidad de webpack-merge:
    //    - webpack-merge proporciona funciones avanzadas para fusionar configuraciones de webpack.
    //    - En nuestro caso, simplemente necesitamos fusionar la configuración común con las especificaciones de desarrollo o producción.

    // 8. Resultado:
    //    - Ahora tenemos configuraciones separadas para desarrollo y producción que nos permiten optimizar el rendimiento y la experiencia del desarrollador en cada entorno.
  }
  {// Guiones de NPM:

    //todo 1. Modificación de scripts npm:
    //    - Actualizamos nuestros scripts npm para utilizar los nuevos archivos de configuración.
    //    - Para el script 'start', que ejecuta webpack-dev-server, especificamos el archivo de configuración webpack.dev.js.
    //    - Para el script 'build', que ejecuta webpack para crear una compilación de producción, especificamos el archivo de configuración webpack.prod.js.

    /*
    {
      "name": "development",
      "version": "1.0.0",
      "description": "",
      "main": "src/index.js",
      "scripts": {
        !"start": "Webpack serve --open",
        !"build": "webpack",

        Define un script llamado "start" que ejecuta el servidor de desarrollo de Webpack con la opción --open para abrir automáticamente el navegador y --config para especificar el archivo de configuración webpack.dev.js.
        *"start": "webpack serve --open --config webpack.dev.js",
        Define un script llamado "build" que ejecuta Webpack en modo de producción utilizando el archivo de configuración webpack.prod.js.
        *"build": "webpack --config webpack.prod.js"

      },
      "keywords": [],
      "author": "",
      "license": "ISC",
      "devDependencies": {
        "css-loader": "^0.28.4",
        "csv-loader": "^2.1.1",
        "express": "^4.15.3",
        "file-loader": "^0.11.2",
        "html-webpack-plugin": "^2.29.0",
        "style-loader": "^0.18.2",
        "webpack": "^4.30.0",
        "webpack-dev-middleware": "^1.12.0",
        "webpack-dev-server": "^2.9.1",
        "webpack-merge": "^4.1.0",
        "xml-loader": "^1.2.1"
      }
    }
    */

    //todo 2. Ejecución de scripts:
    //    - Ahora puede ejecutar 'npm start' para iniciar el servidor de desarrollo con webpack-dev-server utilizando la configuración en webpack.dev.js.
    //    - Para crear una compilación de producción, ejecute 'npm run build' que utilizará la configuración en webpack.prod.js.

    //? npm start
    //? npm run build


    //todo 3. Observación de los resultados:
    //    - Ejecutar estos scripts mostrará cómo cambia el resultado a medida que continuamos agregando a nuestra configuración de producción.
  }
  {// Especificación del modo:

    //todo 1. Configuración del modo en webpack.prod.js:
    //    - Para especificar el modo de producción, utilizamos el objeto de configuración 'mode' y lo establecemos en 'production'.
    //    - Esto optimizará automáticamente la salida de webpack para un entorno de producción.

    /*
    ?const { merge } = require('webpack-merge');
    ?const common = require('./webpack.common.js');
    
    ?module.exports = merge(common, {
      ?mode: 'production',
    ?});
    */

    //todo 2. Nota sobre process.env.NODE_ENV:
    //    - En webpack v4 y posterior, el modo de producción se configura automáticamente a través de DefinePlugin, estableciendo process.env.NODE_ENV en 'production'.
    //    - Esto permite que las bibliotecas eliminen o agreguen porciones de código según el entorno de producción o desarrollo.

    //todo 3. Consideraciones adicionales:
    //    - Si está utilizando bibliotecas como React, es probable que vea una reducción significativa en el tamaño del paquete después de agregar DefinePlugin.
    //    - Tenga en cuenta que es posible desactivar la optimización automática en código local utilizando una verificación como 'if (process.env.NODE_ENV !== 'production')'.
  }
  {// Minificación:

    //todo 1. Minificación por defecto en Webpack v4+:
    //    - Webpack v4+ minificará automáticamente su código en modo de producción.
    //    - Esto ayuda a reducir el tamaño del archivo final, lo que resulta en una carga más rápida de la aplicación para los usuarios.

    //todo 2. Opciones de minificación adicionales:
    //    - Si desea probar otro complemento de minificación, puede considerar utilizar ClosureWebpackPlugin.
    //    - Asegúrese de que su nueva elección también elimine el código muerto según se describe en la guía de tree shaking, y proporciónela como optimization.minimizer.

    // Ejemplo de configuración para utilizar ClosureWebpackPlugin como un complemento de minificación adicional:

    // webpack.prod.js

    /*
    ?const { merge } = require('webpack-merge');
    ?const common = require('./webpack.common.js');
    ?const ClosurePlugin = require('closure-webpack-plugin');
    
    ?module.exports = merge(common, {
      ?mode: 'production',
      *optimization: {
        *minimizer: [
          *new ClosurePlugin({options}),
          *],
        *},
      ?});
    */

    //? Nota:
    //    - TerserPlugin es un excelente punto de partida para la minificación y se utiliza de forma predeterminada en Webpack.
    //    - Si decide probar otro complemento de minificación como ClosureWebpackPlugin, asegúrese de configurarlo adecuadamente y considerar su impacto en el tamaño y el rendimiento de su aplicación.

  }
  {// Mapeo de origen:

    // Le recomendamos habilitar los mapas de origen en producción, ya que son útiles para depurar y ejecutar pruebas comparativas. Sin embargo, es importante elegir uno que tenga una velocidad de construcción bastante rápida para su uso en producción.

    // Para esta guía, usaremos la opción source-map en producción en lugar de la inline-source-map que usamos en el desarrollo:

    // Ejemplo de configuración para habilitar los mapas de origen en producción:

    // webpack.prod.js

    /*
    ?const { merge } = require('webpack-merge');
    ?const common = require('./webpack.common.js');
    
    ?module.exports = merge(common, {
      ?mode: 'production',
      *devtool: 'source-map',
    ?});
    */

    // Consejo:
    //    - Evite los modos de mapeo de origen inline-*** y eval-*** en producción, ya que pueden aumentar el tamaño del paquete y reducir el rendimiento general de su aplicación.
  }
  {// Minimizar CSS:

    // Es crucial minimizar su CSS para la producción. Puede lograr esto configurando adecuadamente su proceso de construcción con webpack. 

    // Se recomienda utilizar un plugin como OptimizeCSSAssetsPlugin para minimizar su CSS en producción. Este plugin está diseñado específicamente para optimizar los activos CSS generados por webpack.

    // Para configurar OptimizeCSSAssetsPlugin, puede agregarlo como un optimizador en la configuración de webpack.prod.js, como se muestra a continuación:

    // webpack.prod.js

    /*
    ?const { merge } = require('webpack-merge');
    ?const common = require('./webpack.common.js');
    *const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
    
    ?module.exports = merge(common, {
      ?mode: 'production',
      *optimization: {
        *minimizer: [
          *new OptimizeCSSAssetsPlugin({})
        *],
      *},
    ?});
    */

    // Este ejemplo configura OptimizeCSSAssetsPlugin como un minimizador en la configuración de producción de webpack. Asegúrese de instalar el plugin OptimizeCSSAssetsPlugin utilizando npm o yarn antes de usarlo.

    // ¡Recuerde que la minimización de CSS puede mejorar el rendimiento de su aplicación y reducir los tiempos de carga en producción!
  }
}