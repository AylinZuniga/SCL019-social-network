import { start } from '../templates/welcomePage.js';
import { login } from '../templates/login.js';
import { register } from '../templates/register.js';
import { registerEvent, loginForm } from './index.js';

export const router = (hash) => {
  const rootDiv = document.getElementById('root');
  rootDiv.innerHTML = '';
  if (hash === '#/' || hash === '/' || hash === '#' || hash === '') {
    start();
  } else if (hash === '#/login') {
    login();
    loginForm();
  } else if (hash === '#/register') {
    register();
    registerEvent();
  } else if (hash === '#/wall') {

  }
};
