const btn = document.querySelector('#btn');
const ulBar = document.querySelector('#nav-bar_ul');


function moveUlBar(topValue) {
  ulBar.style.top = `${topValue}px`;
}

btn.addEventListener("click", () => {
  moveUlBar(-40);
});

btn.addEventListener("dblclick", () => {
  moveUlBar(-75);
});



const sliderInner = document.querySelector('.slider--inner');
const leftArrow = document.querySelector('.fa-arrow-left')
const rightArrow = document.querySelector('.fa-arrow-right')

let position = 1
let translateX = 0
sliderInner.style.transform = `translateX(${translateX}px)`

const visualizarPosicion = () => {
  const positions = document.querySelectorAll('.position')
  positions.forEach(posi => {
    posi.removeAttribute("checked")
    switch (position) {
      case 1:
        positions[position - 1].setAttribute("checked", "")
        break;
      case 2:
        positions[position - 1].setAttribute("checked", "")
        break;
      case 3:
        positions[position - 1].setAttribute("checked", "")
        break;

      default:
        break;
    }
  });
}
visualizarPosicion();

rightArrow.addEventListener('click', e => {
  rightArrow.style.animation = "";
  if (position < 3) {
    translateX = translateX - 100
    sliderInner.style.transform = `translateX(${translateX}%)`;
    ++position
  } else {
    rightArrow.style.animation = "terremoto 0.2s infinite";
    setTimeout(() => {
      rightArrow.style.animation = "";
    }, 200);
  }
  visualizarPosicion();
})
leftArrow.addEventListener('click', e => {
  leftArrow.style.animation = "";
  if (position > 1) {
    translateX = translateX + 100
    sliderInner.style.transform = `translateX(${translateX}%)`;

    --position
  } else {
    leftArrow.style.animation = "terremoto 0.2s infinite";
    setTimeout(() => {
      leftArrow.style.animation = "";
    }, 200);
  }
  visualizarPosicion();
})

