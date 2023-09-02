const screenText = document.querySelector('.text');
const buttons = document.querySelectorAll('td');
let textOnScreen = false;
let on = true;

const isNumber = char => !isNaN(char);

buttons.forEach(button => {
  button.addEventListener('click', e => {
    if (e.target.textContent.includes('ON')) {
      if (on) {
        on = false;
        screenText.textContent = ' ';
      } else {
        on = true;
      }
    }
    if (on) {
      if (e.target.className.includes('app')) {
        if (textOnScreen) {
          screenText.textContent = '';
          textOnScreen = false;
        }
        screenText.textContent += e.target.textContent;
      } else if (e.target.textContent == '=') {
        try {
          screenText.textContent = eval(screenText.textContent).toFixed(1);
        } catch (error) {
          screenText.textContent = 'ERROR';
        }
        textOnScreen = true;
      } else if (e.target.textContent == 'E') {
        screenText.textContent = screenText.textContent.slice(0, -1)
      }
    }
  });
  button.addEventListener('dblclick', e => {
    if (e.target.textContent == 'E') {
      screenText.textContent = ''
    }
  })
});