const newBtn = document.querySelector('#new_Btn')
const bookDiv = document.querySelector('.book')
const container = document.querySelector('.container')
const removeBook = document.querySelector('#remove')
const toggle = document.querySelector('#toggle')
const h1Title = document.querySelector('#title')
const pAuthor = document.querySelector('#author')
const pPages = document.querySelector('#pages')
const pRead = document.querySelector('#read')
if (pRead.textContent.includes("Si")) {
  read = true
}else{
  read = false

}

let added = false

newBtn.addEventListener('click', function () {
  if (!added) {

    const form = document.createElement("form");
    const h2 = document.createElement("h2");
    const bookDetails = document.createElement("div")
    const titleLabel = document.createElement("label");
    const titleInput = document.createElement("input");
    let authorLabel = document.createElement("label");
    const authorInput = document.createElement("input");
    const pagesLabel = document.createElement("label");
    const pagesInput = document.createElement("input");
    const readLabel = document.createElement("label")
    const readInput = document.createElement("input")
    const addBtn = document.createElement("button")

    titleInput.setAttribute('for', 'title_input')
    titleInput.setAttribute('id', 'title_input')
    authorLabel.setAttribute('for', 'autor_input')
    authorInput.setAttribute('id', 'autor_input')
    pagesLabel.setAttribute('for', 'pages_input')
    pagesInput.setAttribute('id', 'pages_input')
    addBtn.setAttribute('id', 'add_btn')
    addBtn.setAttribute('type', 'button')
    readInput.setAttribute('type', 'checkbox')

    h2.textContent = "Anade un nuevo Libro"
    titleLabel.textContent = "Titulo:"
    authorLabel.textContent = "Autor:"
    pagesLabel.textContent = "Paginas:"
    addBtn.textContent = "Anadir Libro"
    readLabel.textContent = "Leido:"
    container.appendChild(form)

    form.appendChild(h2)
    form.appendChild(bookDetails)
    form.appendChild(addBtn)

    bookDetails.appendChild(titleLabel)
    bookDetails.appendChild(titleInput)

    bookDetails.appendChild(authorLabel)
    bookDetails.appendChild(authorInput)

    bookDetails.appendChild(pagesLabel)
    bookDetails.appendChild(pagesInput)

    bookDetails.appendChild(readLabel)
    bookDetails.appendChild(readInput)


    addBtn.addEventListener('click', function () {
      const isChecked = readInput.checked;
      if (isChecked) {
        read = true
      } else {
        read = false
      }
      const newBook = new Book(titleInput.value, authorInput.value, pagesInput.value, read)

      const bookDiv = document.createElement('div')
      bookDiv.setAttribute('class', 'book')
      container.appendChild(bookDiv)

      const h3 = document.createElement('h3')
      h3.setAttribute('id', 'title')
      h3.textContent = newBook.title
      bookDiv.appendChild(h3)

      const pAuthor = document.createElement('p')
      pAuthor.textContent = `${authorLabel.textContent}  ${newBook.author}`
      bookDiv.appendChild(pAuthor)

      const pPages = document.createElement('p')
      pPages.textContent = `${pagesLabel.textContent}  ${newBook.pages}`
      bookDiv.appendChild(pPages)

      console.log(newBook.read);

      const pRead = document.createElement('p')
      if (newBook.read) {
        pRead.textContent = "Leido: Si"
      } else {
        pRead.textContent = "Leido: No"
      }
      bookDiv.appendChild(pRead)

      const removeBook = document.createElement("button")
      removeBook.textContent = "Eliminar"
      removeBook.setAttribute('id', 'remove')
      bookDiv.appendChild(removeBook)
      removeBook.addEventListener("click", function (e) {
        const parent = removeBook.parentNode
        container.removeChild(parent)
      })

      const toggle = document.createElement("button")
      toggle.textContent = "Cambiar estado de lectura"
      toggle.setAttribute('id', 'toggle')
      bookDiv.appendChild(toggle)
      toggle.addEventListener("click", function (e) {
        if (newBook.read) {
          pRead.textContent = "Leido: No"
          newBook.read = false
        } else {
          pRead.textContent = "Leido: Si"
          newBook.read = true
        }
      })
      container.removeChild(form)
      added = false
    });
  }
  added = true;
});


function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

const newBook = new Book (h1Title.textContent, pAuthor.textContent, pPages.textContent, read)

removeBook.addEventListener("click", function (e) {
  const parent = removeBook.parentNode
  container.removeChild(parent)
})

toggle.addEventListener("click", function (e) {
  if (newBook.read) {
    pRead.textContent = "Leido: No"
    newBook.read = false
  } else {
    pRead.textContent = "Leido: Si"
    newBook.read = true
  }
})
