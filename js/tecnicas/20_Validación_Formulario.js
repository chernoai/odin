const form = document.querySelector('#form')
const pais = document.querySelector('#pais')
const codigoPostal = document.querySelector('#codigoPostal')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const passwordCon = document.querySelector('#passwordCon')
const submitBtn = document.querySelector("#btn")

const paisError = document.querySelector('#paisError')
const cpError = document.querySelector('#cpError')
const emailError = document.querySelector('#emailError')
const passwordError = document.querySelector('#passwordError')
const passwordConError = document.querySelector('#passwordConError')
const successful = document.querySelector('#successful')


const regexCPEspana = /^(?:0[1-9]|[1-4]\d|5[0-2])\d{3}$/;
const regexCPIrlanda = /^[A-Za-z]\d{2} [A-Za-z]{2}\d{2}$/;
const regexCPUK = /^[A-Za-z]\d{2} \d[A-Za-z]{2}$/;
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

submitBtn.addEventListener("click", () => {
  let checkedArray = []
  if (!pais.value) {
    paisError.textContent = "Selecione un Pais"
  } else {
    paisError.textContent = ""
    checkedArray.push(true)
  }

  if (!codigoPostal.checkValidity()) {
    cpError.textContent = "Añada un Codigo Postal valido"
  } else {
    if (pais.value === "es") {
      if (regexCPEspana.test(codigoPostal.value)) {
        cpError.textContent = ""
        checkedArray.push(true)
      } else {
        cpError.textContent = "Añada un Formato de Codigo Postal valido(12345)"
      }
    }
    if (pais.value === "ie") {
      if (regexCPIrlanda.test(codigoPostal.value)) {
        cpError.textContent = ""
        checkedArray.push(true)
      } else {
        cpError.textContent = "Añada un Formato de Codigo Postal valido(A12 BC34)"
      }
    }
    if (pais.value === "uk") {
      if (regexCPUK.test(codigoPostal.value)) {
        cpError.textContent = ""
        checkedArray.push(true)
      } else {
        cpError.textContent = "Añada un Formato de Codigo Postal valido(A12 3BC)"
      }
    }
  }

  if (!email.checkValidity()) {
    emailError.textContent = "Añada un Correo Electrónico valido"
  } else {
    emailError.textContent = ""
    checkedArray.push(true)
  }

  if (!password.checkValidity()) {
    passwordError.textContent = "Añada una Contraseña valido"
  } else {
    if (regexPassword.test(password.value)) {
      passwordError.textContent = ""
      checkedArray.push(true)
    } else {
      passwordError.textContent = "Añada una Contraseña valido"
    }
  }

  if (passwordCon.value !== password.value) {
    passwordConError.textContent = "Las contrasenas deben de coincidir"
  } else {
    passwordConError.textContent = ""
    checkedArray.push(true)
  }

  if (checkedArray.length === 5) {
    successful.textContent = "ENVIADO"
  }


})

