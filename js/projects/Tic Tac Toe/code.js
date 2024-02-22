// Obtener el botón de juego
const playBtn = document.getElementById('play_btn');
const fakeBtn = document.getElementById('fake_btn');

// Obtener la pantalla de juego
const playScreen = document.querySelector('.play_screen');

// Agregar un evento de clic al botón de juego
playBtn.addEventListener('click', function() {
  // Cambiar el z-index de la pantalla de juego
  playScreen.style.zIndex = '10';
});

fakeBtn.addEventListener('click', function() {
  // Cambiar el z-index de la pantalla de juego
  playScreen.style.zIndex = '-10';
});
