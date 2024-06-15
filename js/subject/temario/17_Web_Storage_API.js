{// Conceptos básicos de almacenamiento web

  // Los objetos de almacenamiento son almacenes de clave/valor.
  // Las claves y los valores siempre son cadenas de texto.
  // Los valores permanecen intactos al recargar la página.

  // Acceso a valores con objetos y métodos Storage
  // Estas líneas modifican el valor de colorSetting de la misma manera:
  localStorage.colorSetting = "#a4509b";
  localStorage["colorSetting"] = "#a4509b";
  localStorage.setItem("colorSetting", "#a4509b");

  // Recomendación: Usar la API de almacenamiento web (setItem, getItem, removeItem, key, length)
  // para evitar problemas con objetos simples.

  // Dos tipos de almacenamiento web:
  // 1. sessionStorage:
  //    - Área de almacenamiento separada para cada origen
  //    - Disponible mientras dure la sesión de la página (navegador abierto, recargas incluidas)
  // 2. localStorage:
  //    - Similar a sessionStorage
  //    - Persiste incluso al cerrar y reabrir el navegador

  // Disponibles mediante Window.sessionStorage y Window.localStorage
  // (El objeto Window implementa WindowLocalStorage y WindowSessionStorage)

  // Al invocar sessionStorage o localStorage se obtiene un objeto Storage
  // A través de este objeto, los datos pueden ser creados, recuperados y eliminados

  // Ejemplo: localStorage y sessionStorage devuelven diferentes objetos Storage
  // Manipulables de la misma forma pero separados.
}
{// Detectar la característica localStorage

  // Para usar localStorage, debemos verificar su soporte y disponibilidad en la sesión actual del navegador.

  {//Probar la disponibilidad

    // Nota: Esta API está disponible en las versiones actuales de todos los navegadores principales.
    // La prueba de disponibilidad es necesaria solo si debes soportar navegadores muy antiguos (IE 6 o 7).

    // Los navegadores que soportan localStorage tienen una propiedad en el objeto window llamada localStorage.
    // Sin embargo, asegurarse de que la propiedad exista puede arrojar excepciones.

    // Un ejemplo es Safari en modo de búsqueda privada, que ofrece un objeto localStorage vacío con un cupo de 0.
    // También podemos obtener un QuotaExceededError legítimo si ya usamos todo el espacio de almacenamiento disponible.

    // Esta función detecta si localStorage tiene soporte y está disponible:
    function storageAvailable(type) {
      try {
        var storage = window[type],
          x = "__storage_test__";
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
      } catch (e) {
        return (
          e instanceof DOMException &&
          // todo excepto Firefox
          (e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // prueba también el campo name, porque code podría no estar presente
            // todo excepto Firefox
            e.name === "QuotaExceededError" ||
            // Firefox
            e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
          // reconocer QuotaExceededError solo si ya hay algo almacenado
          storage.length !== 0
        );
      }
    }

    // Uso de la función para verificar localStorage:
    if (storageAvailable("localStorage")) {
      // ¡Podemos usar localStorage!
    } else {
      // No podemos usar localStorage
    }

    // También puedes probar sessionStorage invocando storageAvailable('sessionStorage').
  }
  {// Probar si localStorage tiene valores

    // En el inicio de main.js, verificamos si ya hay valores almacenados (si la página ya fue visitada):
    if (!localStorage.getItem("bgcolor")) {
      // Si no hay valor para 'bgcolor', llamamos a populateStorage() para añadir valores personalizados.
      populateStorage();
    } else {
      // Si ya hay valores guardados, llamamos a setStyles() para actualizar el estilo de la página.
      setStyles();
    }

    // Nota: También puedes usar Storage.length para verificar si el objeto de almacenamiento está vacío o no.
  }
  {// Obtener valores de localStorage y aplicarlos a la página

    // Como dijimos arriba, los valores se pueden recuperar de la memoria usando Storage.getItem().
    // Este método usa la llave del dato como argumento y devuelve el valor.

    function setStyles() {
      // Obtener valores almacenados
      var currentColor = localStorage.getItem("bgcolor");
      var currentFont = localStorage.getItem("font");
      var currentImage = localStorage.getItem("image");

      // Fijar los valores mostrados en los elementos del formulario
      document.getElementById("bgcolor").value = currentColor;
      document.getElementById("font").value = currentFont;
      document.getElementById("image").value = currentImage;

      // Actualizar los estilos y la imagen decorativa en la página
      htmlElem.style.backgroundColor = "#" + currentColor;
      pElem.style.fontFamily = currentFont;
      imgElem.setAttribute("src", currentImage);
    }

    // En las primeras tres líneas tomamos los valores del almacenamiento local.
    // Después, fijamos los valores mostrados en los elementos del formulario a esos valores,
    // de forma que se mantengan sincronizados cuando recargues la página.
    // Finalmente, actualizamos los estilos y la imagen decorativa en la página
    // para que tus opciones personalizadas vuelvan a aparecer al recargar.
  }
  {// Guardar valores en localStorage

    // Storage.setItem() se usa para crear nuevos datos o actualizar valores existentes.
    // Este método recibe dos argumentos: la llave del dato y el valor que se va a guardar.

    function populateStorage() {
      // Guardar los valores del formulario en localStorage
      localStorage.setItem("bgcolor", document.getElementById("bgcolor").value);
      localStorage.setItem("font", document.getElementById("font").value);
      localStorage.setItem("image", document.getElementById("image").value);

      // Actualizar los estilos de la página
      setStyles();
    }

    // La función populateStorage() define tres elementos en el almacenamiento local:
    // - Color de fondo
    // - Tipografía
    // - Ruta de almacenamiento de la imagen

    // Luego, corre la función setStyles() para actualizar el estilo de la página.

    // Incluir un manejador onchange para cada elemento del formulario
    // Los datos y los estilos se actualizan cada vez que un valor del formulario cambia.
    document.getElementById("bgcolor").onchange = populateStorage;
    document.getElementById("font").onchange = populateStorage;
    document.getElementById("image").onchange = populateStorage;
  }
  {// Responder a cambios en la memoria con el evento StorageEvent

    // El evento StorageEvent se dispara cuando se hace un cambio al objeto Storage.
    // Nota: Este evento no se dispara para cambios en sessionStorage.
    // Este evento permite a las otras páginas del mismo dominio sincronizar los cambios en la memoria.

    // En la página de eventos (events.js), añadimos el siguiente JavaScript:
    window.addEventListener("storage", function (e) {
      // Actualizar los elementos de la página con la información del evento
      document.querySelector(".my-key").textContent = e.key;
      document.querySelector(".my-old").textContent = e.oldValue;
      document.querySelector(".my-new").textContent = e.newValue;
      document.querySelector(".my-url").textContent = e.url;
      document.querySelector(".my-storage").textContent = JSON.stringify(e.storageArea);
    });

    // Explicación de las propiedades del evento:
    // e.key: La llave del dato que cambió.
    // e.oldValue: El valor anterior al cambio.
    // e.newValue: El nuevo valor tras el cambio.
    // e.url: La URL del documento que cambió la memoria.
    // e.storageArea: El objeto de almacenamiento mismo (convertido a cadena para ver su contenido).
  }
  {// Borrar registros en localStorage

    // El almacenamiento web provee métodos para remover datos:
    // 1. Storage.removeItem(): recibe una llave y elimina ese dato del almacenamiento.
    // 2. Storage.clear(): no recibe argumentos; vacía todo el almacenamiento del dominio.

    // Ejemplo de uso de Storage.removeItem():
    function removeItem(key) {
      localStorage.removeItem(key);
      console.log(`Item con llave '${key}' eliminado de localStorage`);
    }

    // Ejemplo de uso de Storage.clear():
    function clearStorage() {
      localStorage.clear();
      console.log("Todo el almacenamiento local ha sido vaciado");
    }

    // Para probar las funciones, puedes llamar a:
    // removeItem('bgcolor');  // Eliminar un ítem específico
    // clearStorage();         // Vaciar todo el almacenamiento
  }
}