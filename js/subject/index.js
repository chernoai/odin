const storage = {
  obtener(clave) {
    const valor = window.localStorage.getItem(clave)
    if (!valor) {
      return null
    }
    return valor
  },
  asingnar(clave, valor) {
    window.localStorage.setItem(clave, valor)
  },
  eliminar(clave) {
    window.localStorage.removeItem(clave)
  },
  limpiar() {
    window.localStorage.clear();
  }
}

const contenido = document.getElementById('contenido');

function loadHome() {
  contenido.innerHTML = `
  <div id="home">
    <div class="todo-hoy caja-todo">
      <h2>Por Hacer</h2>
      <div class="contenedor-todo">
        </div>
      </div>
    </div>
  </div>
  <div id="anadir-todo">
    <i class="fa-solid fa-plus" id="andir-btn"></i>
  </div>
</div>
  `;
}
loadHome()

const contenedorTodo = document.querySelector('.contenedor-todo');
const anadirBtn = document.getElementById('andir-btn');

contenedorTodo.innerHTML = storage.obtener("tareas");



const crearElemento = (tipo, clase, texto) => {
  const elem = document.createElement(tipo);
  if (clase) elem.className = clase;
  if (texto) elem.textContent = texto;
  return elem;
};

const validarHora = (hora) => {
  const regex = /^([01]\d|2[0-3]):([0-5]\d)$/;
  return regex.test(hora);
};

anadirBtn.addEventListener('click', () => {
  let todoNombre = prompt("¿Cómo llamar a la tarea?");
  let todoHora = "";

  // Validar que el usuario haya ingresado un nombre
  while (!todoNombre) {
    todoNombre = prompt('Por favor, ingresa un nombre para la tarea.');
    if (!todoHora) {
      todoNombre = prompt('Por favor, ingresa un nombre para la tarea.');
    }
  }

  // Validar que el usuario haya ingresado una hora
  while (!todoHora || !validarHora(todoHora)) {
    todoHora = prompt("¿A qué hora empezar la tarea? (Formato HH:MM)");
    if (!validarHora(todoHora)) {
      alert('Por favor, ingresa una hora válida en el formato HH:MM.');
    }
  }

  const id = todoNombre.toLowerCase().replace(/\s+/g, '-');

  // Crear elementos
  const itemTodo = crearElemento('div', 'todo-item');
  const inputTodo = crearElemento('input');
  const labelTodo = crearElemento('label', null, todoNombre);
  const pHora = crearElemento('p', 'hora-todo', todoHora);
  const delteBtn = crearElemento('i', 'fa-solid fa-trash', "");

  // Configurar input y label
  inputTodo.type = "checkbox";
  inputTodo.id = id;
  labelTodo.htmlFor = id;

  // Añadir elementos al contenedor del todo-item
  itemTodo.id = todoHora.replace(":", "")
  itemTodo.appendChild(inputTodo);
  itemTodo.appendChild(labelTodo);
  itemTodo.appendChild(pHora);
  itemTodo.appendChild(delteBtn);

  // Añadir el nuevo itemTodo al contenedor principal
  contenedorTodo.appendChild(itemTodo);


  const todoItems = Array.from(document.querySelectorAll('.todo-item'));
  const idsArray = [];

  // Primero, eliminar todos los elementos del contenedor y almacenar sus IDs
  todoItems.forEach(item => {
    contenedorTodo.removeChild(item);
    idsArray.push(item.id);
  });

  // Ordenar idsArray
  idsArray.sort();

  idsArray.forEach(id => {
    const foundItem = todoItems.find(item => item.id === id)
    if (foundItem) {
      contenedorTodo.appendChild(foundItem);
    }
  });

  // Anadir los elementos guardados
  let htmlTareas = contenedorTodo.innerHTML
  storage.asingnar('tareas', htmlTareas)

  //Eliminar tareas
  delteBtn.addEventListener("click", () => {
    delteBtn.parentElement.remove()
    htmlTareas = contenedorTodo.innerHTML
    storage.asingnar('tareas', htmlTareas)
  });

});

const delteBtns = document.querySelectorAll('.fa-trash')

delteBtns.forEach(element => {
  let htmlTareas = contenedorTodo.innerHTML
  element.addEventListener("click", () => {
    element.parentElement.remove()
    storage.asingnar('tareas', htmlTareas)
  });
});
const checkboxes = document.querySelectorAll('input')

function chequearTarea() {
  checkboxes.forEach(element => {
    if (element.checked) {
      element.setAttribute("checked", "");
    } else {
      element.removeAttribute("checked");
    }
  });
  const htmlTareas = contenedorTodo.innerHTML;
  storage.asingnar('tareas', htmlTareas);
}

checkboxes.forEach(element => {
  element.addEventListener('change', chequearTarea);
});