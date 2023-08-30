const canvas = document.querySelector('.canvas');
const squares = document.querySelectorAll('td');
const color = document.querySelector('.color')
const rainbowBTN = document.querySelector('.rainbow-btn')
const eraserBTN = document.querySelector('.eraser-btn')
const clearBTN = document.querySelector('.clear-btn')

let painting = false;
let eraser = false;
let rainbow = false;

const color1 = tinycolor('#FF0000');
const color2 = tinycolor('#00FF00');
const color3 = tinycolor('#0000FF');




canvas.addEventListener('mousedown', () => {
  painting = true;
});

canvas.addEventListener('mouseup', () => {
  painting = false;
});

squares.forEach((square) => {
  square.addEventListener('mouseenter', (e) => {
    if (painting) {
      if (rainbow) {
        const randomR = Math.floor(Math.random() * 256)
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)
        square.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
      } else if (eraser) {
        square.style.backgroundColor = '#fff';
        console.log('borrar');
      } else {
        square.style.backgroundColor = color.value;
      }
    }
  });
});

rainbowBTN.addEventListener('click', e => {
  rainbow = true
  e.target.style.backgroundColor = '#aaa'
})
rainbowBTN.addEventListener('dblclick', e => {
  rainbow = false
  e.target.style.backgroundColor = '#fff'
})
eraserBTN.addEventListener('click', (e) => {
  eraser = true;
  e.target.style.backgroundColor = '#aaa'
});


eraserBTN.addEventListener('dblclick', e => {
  eraser = false
  e.target.style.backgroundColor = '#fff'
})

clearBTN.addEventListener('click', e => {
  squares.forEach((square) => {
    square.style.backgroundColor = '#fff'
  })
})

