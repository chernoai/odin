import './style.css';
import './MyResetCSS.css';

import kcalImage from './restaurant-img/kcal.png';
import pitaImage from './restaurant-img/pita.png';
import durumImage from './restaurant-img/durum.png';

import donerChipsImage from './restaurant-img/doner-chips.png';
import donerCheeseImage from './restaurant-img/doner-cheese.png';
import donerGymImage from './restaurant-img/doner-gym.png';

import chipsImage from './restaurant-img/chips.png';
import chipsCheesyImage from './restaurant-img/chips-cheesy.png';
import chipsCurryImage from './restaurant-img/chips-curry.png';

import tangoImage from './restaurant-img/tango.png';
import redbullImage from './restaurant-img/redbull.png';
import waterImage from './restaurant-img/water.png';

import streetImage from './restaurant-img/nuestra-calle.jpg';
import restImage from './restaurant-img/nuestro-rest.jpg';
import foodImage from './restaurant-img/food-img.jpg';

// Aquí puedes agregar el código JavaScript para manejar el contenido de las pestañas

document.addEventListener('DOMContentLoaded', () => {

  const content = document.getElementById('content');

  function loadHome() {
    content.innerHTML = `
      <div id="home">
        <p id="title">EN LA ESQUINA DE</p>
        <h1 id="restaurant-name">DÖN EL KEBAB</h1>
        <p id="slogan">LOS MEJORES DONER KEBABS DE DÖN EL KEBAB</p>
      </div>
    `;
  }

  function loadMenu() {
    content.innerHTML = `
      <div id="menu">
        <h1 class="section-title">MENU</h1>
        <div id="menu-box">
        <div class="menu-food mains">
          <h2 class="menu-title">MAINS</h2>
          <div class="menu-container">
            <div class="item">
              <h3 class="itmes-title">KCAL KEBAB</h3>
              <img src="${kcalImage}" alt="">
              <p class="items-info">
                Todo sigue aquí, pero esta vez es más ligero. Tu elección de carnes para doner. Lechuga fresca y tomates
                jugosos. Cebolla y lombarda, envueltas en nuestro pan tostado multigrano y sésamo. ¿El toque final?
                Nuestra salsa picante de autor. Baja en calorías, pero no en sabor.
              </p>
            </div>
            <div class="item">
              <h3 class="itmes-title">OG KEBAB</h3>
              <img src="${pitaImage}" alt="">
              <p class="items-info">
                El kebab definitivo. Carne doner de tu elección. Lechuga fresca y tomates jugosos. Cebolla y col
                lombarda. Servido en nuestro pan tipo waffle tostado con sésamo hecho a mano y con nuestras tres salsas
                exclusivas. Simplemente no puedes equivocarte.
              </p>
            </div>
            <div class="item">
              <h3 class="itmes-title">DONER WRAP</h3>
              <img src="${durumImage}" alt="">
              <p class="items-info">Envuélvete. Lechuga fresca, tomate jugoso, cebolla y col lombarda, servidos con
                carnes doner de su elección. Sellado en una envoltura de pan plano con nuestras tres salsas exclusivas.
              </p>
            </div>
          </div>
        </div>
        <div class="menu-food doner-boxes">
          <h2 class="menu-title">BOXES</h2>
          <div class="menu-container">
            <div class="item">
              <h3 class="itmes-title">DONER BOX CON FRIES & SALAD</h3>
              <img src="${donerChipsImage}" alt="">
              <p class="items-info">
                Carne suculenta y patatas fritas bien hechas. Su elección de carnes doner, lechuga fresca, tomate,
                cebolla y col lombarda, con un juego de tres salsas exclusivas.
              </p>
            </div>
            <div class="item">
              <h3 class="itmes-title"> DONER BOX WITH FRIES</h3>
              <img src="${donerCheeseImage}" alt="">
              <p class="items-info">
                Cubre tu clásico kebab con patatas fritas en una salsa cremosa de queso cubierta con deliciosos
                jalapeños.
              </p>
            </div>
            <div class="item">
              <h3 class="itmes-title">DONER BOX CON FRIES & CHEESE</h3>
              <img src="${donerGymImage}" alt="">
              <p class="items-info">
                No puedes equivocarte. Servido con su elección de carnes, papas fritas y un juego de tres salsas
                exclusivas.
              </p>
            </div>
          </div>
        </div>
        <div class="menu-food chips">
          <h2 class="menu-title">CHIPS</h2>
          <div class="menu-container">
            <div class="item">
              <h3 class="itmes-title">PAPAS FRITAS</h3>
              <img src="${chipsImage}" alt="">
              <p class="items-info">
                El clásico.
              </p>
            </div>
            <div class="item">
              <h3 class="itmes-title">FLAMING FRIES</h3>
              <img src="${chipsCheesyImage}" alt="">
              <p class="items-info">
                Caliente. No, más caliente.Cubierto con nuestro llama
              </p>
            </div>
            <div class="item">
              <h3 class="itmes-title">CURRY FRIES</h3>
              <img src="${chipsCurryImage}" alt="">
              <p class="items-info">
                Espolvorizado con nuestro condimento al curry.
              </p>
            </div>
          </div>
        </div>
        <div class="menu-food drinks">
          <h2 class="menu-title">DRINKS</h2>
          <div class="menu-container">
            <div class="item">
              <h3 class="itmes-title">TANGO ICE BLAST </h3>
              <img src="${tangoImage}" alt="">
              <p class="items-info">
                Azul o rojo, elige tu luchador ... o ambos.
              </p>
            </div>
            <div class="item">
              <h3 class="itmes-title">RED BULL</h3>
              <img src="${redbullImage}" alt="">
              <p class="items-info">
                Te da alas.
              </p>
            </div>
            <div class="item">
              <h3 class="itmes-title">STILL SMARTWATER®</h3>
              <img src="${waterImage}" alt="">
              <p class="items-info">
                Agua sin gas. </p>
            </div>
          </div>
        </div>
      </div>
      <i id="right-arrow" class="fa-solid fa-arrow-right arrow-buttons"></i>
    </div>
    `;

    const menuBox = document.getElementById('menu-box');
    const arrowRight = document.getElementById('right-arrow');
    arrowRight.addEventListener('click', () => {
      menuBox.appendChild(menuBox.firstElementChild);
    });
  }

  function loadAbout() {
    content.innerHTML = `
      <div id="about">
        <h1 id="about-title">ABOUT</h1>
        <div class="about-us-box about-box">
        <h2>SOBRE NOSOTROS</h2>
        <div id="about-us-container">
          <p class="about-text first-about-text">
            Bienvenidos a DON EL KEBAB, el lugar donde los sabores auténticos y la pasión por la cocina se fusionan para
            ofrecerte una experiencia culinaria inigualable en el corazón de Barcelona. Con nuestro eslogan "LOS MEJORES
            DONER KEBABS de DON EL KEBAB", nos comprometemos a brindarte los kebabs más deliciosos y auténticos que
            jamás
            hayas probado.
          </p>
          <div id="first-about-img-row">
            <img id="rest-img" src="${restImage}" alt="">
            <img src="${streetImage}" alt="">
          </div>
          <img id="dish-img" src="${foodImage}" alt="">
          <p class="about-text second-about-text">
            En DON EL KEBAB, nuestra misión es ofrecer a nuestros clientes una experiencia culinaria excepcional en cada
            visita. Nos enorgullece utilizar solo los mejores ingredientes, cuidadosamente seleccionados para garantizar
            que cada bocado de nuestros kebabs sea una explosión de sabor. Creemos en la importancia de mantener la
            autenticidad de nuestras recetas, al mismo tiempo que innovamos para satisfacer los gustos de todos nuestros
            clientes.
          </p>
        </div>
      </div>
      <div class="about-loc-box about-box">
        <h2>ENCENTRANOS</h2>
        <div id="about-loc-container">
          <p id="about-loc-text">
            Te invitamos a visitarnos en Passeig de Lluís Companys, No 2, Ciutat Vella, 08018 Barcelona, España, donde
            te recibiremos con los brazos abiertos y los kebabs más deliciosos de Barcelona. Ya sea para una comida
            rápida, una cena con amigos o una celebración especial, en DON EL KEBAB estamos listos para hacer de tu
            visita una experiencia única. Gracias por elegir DON EL KEBAB. ¡Esperamos verte pronto y que disfrutes de
            LOS MEJORES DONER KEBABS de DON EL KEBAB!
          </p>
          <div id="contact">
            <h2>CONTACTANOS</h2>
            <ul id="contact-list">
              <li><i class="fa-brands fa-square-twitter"></i>Twitter</li>
              <li><i class="fa-solid fa-phone"></i>Telefono</li>
              <li><i class="fa-brands fa-square-instagram"></i>Instagram</li>
              <li><i class="fa-brands fa-square-whatsapp"></i>Whatsapp</li>
            </ul>
          </div>
          <iframe id="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.2901923873424!2d2.1809831754111384!3d41.38950387129959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2fd4393e55f%3A0x698ead7e7c8c4123!2sTURK%20KEBAB%20HALAL%20PIZZERIA!5e0!3m2!1ses!2suk!4v1716143369592!5m2!1ses!2suk"
            width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
      </div>
    </div>
    `;
  }

  document.getElementById('nav-bar').addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      e.preventDefault();
      if (e.target.hash === '#home') {
        loadHome();
      } else if (e.target.hash === '#menu') {
        loadMenu();
      } else if (e.target.hash === '#about') {
        loadAbout();
      }
    }
  });

  loadHome();  // Cargar la sección Home por defecto
});

