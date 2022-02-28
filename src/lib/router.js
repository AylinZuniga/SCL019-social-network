import { start } from '../templates/welcomePage.js';
import { login } from '../templates/login.js';
import { register } from '../templates/register.js';
import { registerEvent } from './index.js';
import { wall } from '../templates/wall.js';

export const router = (hash) => {
  const rootDiv = document.getElementById('root');
  rootDiv.innerHTML = '';
  if (hash === '#/' || hash === '/' || hash === '#' || hash === '') {
    start();
  } else if (hash === '#/login') {
    login();
   // singIn();
    //startWithGoogle();
  } else if (hash === '#/register') {
    register();
    registerEvent();
  } else if (hash === '#/wall') {
wall();
  }
};
