import home from './home/home.js';
import menu from './menu/menu.js';
import contact from './contact/contact.js';
import './index.css';

function init() {

  const homeButton = document.querySelector('#homeButton');
  const menuButton = document.querySelector('#menuButton');
  const contactButton = document.querySelector('#contactButton');

  homeButton.addEventListener('click', () => {
    menu.hide();
    contact.hide();
    home.show();
  })

  menuButton.addEventListener('click', () => {
    home.hide();
    contact.hide();
    menu.show();
  })

  contactButton.addEventListener('click', () => {
    home.hide();
    menu.hide();
    contact.show();
  })

  home.show();
}

init();