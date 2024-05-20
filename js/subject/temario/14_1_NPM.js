{// Acerca de npm:

  // npm es el registro de software más grande del mundo, utilizado por desarrolladores de código abierto y organizaciones para compartir y gestionar paquetes de software.

  // npm consta de tres componentes distintos:

  // 1. El sitio web:
  //    - Utilice el sitio web para descubrir paquetes, configurar perfiles y administrar otros aspectos de su experiencia npm.
  //    - Por ejemplo, puede configurar organizaciones para gestionar el acceso a paquetes públicos o privados.

  // 2. La interfaz de línea de comando (CLI):
  //    - La CLI se ejecuta desde una terminal y es la forma en que la mayoría de los desarrolladores interactúan con npm.

  // 3. El registro:
  //    - El registro es una gran base de datos pública de software JavaScript y la metainformación que lo rodea.
  {// Use npm para:
    // 1. Adaptar paquetes de código para sus aplicaciones o incorporar paquetes tal como están.
    // 2. Descargar herramientas independientes que puede utilizar de inmediato.
    // 3. Ejecutar paquetes sin descargarlos usando npx.
    // 4. Compartir código con cualquier usuario de npm, en cualquier lugar.
    // 5. Restringir el acceso al código a desarrolladores específicos.
    // 6. Crear organizaciones para coordinar el mantenimiento de paquetes, la codificación y los desarrolladores.
    // 7. Formar equipos virtuales mediante el uso de organizaciones.
    // 8. Administrar múltiples versiones de código y dependencias.
    // 9. Actualizar fácilmente las aplicaciones cuando se actualice el código subyacente.
    // 10. Descubrir múltiples soluciones para resolver el mismo problema.
    // 11. Encontrar otros desarrolladores que estén trabajando en problemas y proyectos similares.
  }
}
{// Descargar e instalar paquetes localmente
  // Utilice npm install <nombre-paquete> para instalar un paquete localmente.
  // Esto descargará el paquete e instalará las dependencias en el directorio actual, bajo node_modules.
  //? Ejemplo: npm install lodash
  {// Instalación de un paquete sin alcance
    // Para instalar un paquete público sin alcance: //? npm install <nombre-paquete>
    // Esto creará el directorio node_modules en el directorio actual (si aún no existe uno) y descargará el paquete a ese directorio.
    //? Ejemplo: npm install lodash
  }
  {// Instalación de un paquete público con ámbito
    // Para instalar un paquete público con ámbito, utilice: //? npm install @scope/nombre-paquete.
    // Esto descargará e instalará el paquete del ámbito especificado en el directorio node_modules.
    //? Ejemplo: npm install @babel/core
  }
  {// Instalación de un paquete privado
    // Los paquetes privados solo pueden ser descargados e instalados por aquellos que tienen acceso de lectura al paquete.
    // Para instalar un paquete privado, utilice //? npm install @scope/nombre-paquete-privado.
    // Esto descargará e instalará el paquete privado del ámbito especificado en el directorio node_modules.
    //? Ejemplo: npm install @mycompany/private-package
  }
  {// Verificación de la instalación del paquete de prueba
    // Para confirmar que npm install funcionó correctamente, puedes verificar la existencia del directorio node_modules y los paquetes instalados en él.
    // En la línea de comandos, puedes ejecutar el comando ls node_modules para listar los paquetes instalados en el directorio node_modules.
    //? Ejemplo: ls node_modules
  }
  {// Versión del paquete instalado
    // Si hay un archivo package.json en el directorio donde se ejecuta npm install, npm instalará la última versión del paquete que cumpla con la regla semántica de versiones declarada en package.json.
    // Si no hay ningún archivo package.json, se instalará la última versión del paquete.
  }
  {// Instalación de un paquete con dist-tags:

    // Cuando instalas un paquete usando npm, normalmente obtienes la versión más reciente del paquete, conocida como la etiqueta "latest". Sin embargo, a veces quieres instalar una versión específica o una variante del paquete, como una versión de prueba o una versión beta.

    // Para hacer esto, puedes usar las "dist-tags", que son etiquetas asociadas con versiones específicas de un paquete.

    // Por ejemplo, si quieres instalar una versión beta del paquete "example-package", en lugar de obtener la última versión, puedes especificar la etiqueta "beta" al instalar el paquete de esta manera://? npm install example-package@beta
  }
}
{// Creando un archivo package.json
  // ----------------------------------------
  // Puede agregar un package.json a su paquete para facilitar su administración e instalación por parte de otros desarrolladores.
  // Los paquetes publicados en el registro deben contener un archivo package.json.

  //todo Funciones de un package.json
  // ----------------------------------------
  // - Enumera las dependencias del proyecto
  // - Especifica versiones de paquetes usando reglas de control de versiones semánticas
  // - Haz que la compilación sea reproducible y compartible con otros desarrolladores
  // - Recomendación: Incluya una descripción del paquete para facilitar su búsqueda en el sitio web de npm.
  {// package.json Campos
    // ----------------------------------------
    // Los campos obligatorios son "name" y "version".

    // "name": El nombre del paquete, en minúsculas, puede contener guiones y guiones bajos.
    // "version": La versión del paquete siguiendo las pautas de versiones semánticas.

    // Campo de autor (opcional):
    // Si desea incluir información del autor, use el siguiente formato:
    // "author": "Nombre <email@example.com> (http://example.com)"
    //
    // Ejemplo:
    /*{
      "name": "mi-paquete-increíble",
      "version": "1.0.0",
      "author": "Su nombre <correo electrónico@ejemplo.com>"
    }
    */
  }
  {// Creando un nuevo archivo package.json
    // ----------------------------------------

    // Puede crear un package.json ejecutando un cuestionario CLI o creando un archivo predeterminado.

    //todo Ejecutar un cuestionario CLI:
    // ----------------------------------------
    // Para crear un package.json con valores proporcionados por usted:
    // En la línea de comando, navegue hasta el directorio raíz de su paquete.
    // Ejecute el siguiente comando:
    //? npm init
    // Responda las preguntas del cuestionario en la línea de comandos.

    //todo Personalizando el cuestionario de package.json
    // ---------------------------------------------

    // Si anticipa la creación de muchos package.json, puede personalizar las preguntas y campos durante el proceso de inicialización.

    // Para personalizar el cuestionario, siga estos pasos:

    // 1. Cree un archivo llamado .npm-init.js en su directorio de inicio.

    // 2. Agregue preguntas personalizadas utilizando la función prompt.

    // Ejemplo:
    /*
    Exporta la expresión resultante de la función prompt
    ?module.exports = 

    La función prompt muestra un cuadro de diálogo con un mensaje y un valor predeterminado
    ?prompt(
    El mensaje mostrado al usuario en el cuadro de diálogo
    ?"what's your favorite flavor of ice cream, buddy?", 
  
    El valor predeterminado que se muestra en el cuadro de diálogo
    ?"I LIKE THEM ALL"
  ?);
    */
    
  // 3. Agregue campos personalizados al archivo .npm-init.js.

    // Ejemplo:
    /*
    ?module.exports = {
      ?customField: 'Custom field example',
      ?otherCustomField: 'This is a really cool example field'
    ?};
    */
    // 4. Guarde los cambios en el archivo //.npm-init.js.

    // Para obtener más información sobre cómo crear personalizaciones avanzadas para npm init, consulte el repositorio de GitHub init-package-json.
  }
  {// Creando un archivo package.json predeterminado:
    // ----------------------------------------
    // Para crear un package.json predeterminado utilizando información del directorio actual, use el comando npm init con la bandera --yes o -y.
    // En la línea de comando, navegue hasta el directorio raíz de su paquete.
    // Ejecute el siguiente comando:
    // npm init --yes
    // Esto creará un archivo package.json con valores predeterminados extraídos del directorio actual.

    // Ejemplo de valores predeterminados extraídos del directorio actual:
    // ---------------------------------------------------------------
    /*
    ?{
      ?"name": "mi_paquete",
      ?"description": "",
      ?"version": "1.0.0",
      ?"scripts": {
        ?"test": "echo \"Error: no test specified\" && exit 1"
      ?},
      ?"repository": {
        ?"type": "git",
        ?"url": "https://github.com/monatheoctocat/my_package.git"
      ?},
      ?"keywords": [],
      ?"author": "",
      ?"license": "ISC",
      ?"bugs": {
        ?"url": "https://github.com/monatheoctocat/my_package/issues"
      ?},
      ?"homepage": "https://github.com/monatheoctocat/my_package"
    ?}
    */

    //todo Configuración de opciones de configuración para el comando init:
    // --------------------------------------------------------------
    // Puede establecer opciones de configuración predeterminadas para el comando init.
    // Por ejemplo, para configurar el correo electrónico del autor, el nombre del autor y la licencia predeterminados, ejecute los siguientes comandos en la línea de comandos:
    // npm set init-author-email "example-user@example.com"
    // npm set init-author-name "example_user"
    // npm set init-license "MIT"
  }
}