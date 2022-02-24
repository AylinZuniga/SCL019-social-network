import { start } from '../templates/welcomePage.js';
import { login } from '../templates/login.js';
import { register } from '../templates/register.js';
// import { registerEvent } from './index.js';

export const router = (hash) => {
  const rootDiv = document.getElementById('root');
  rootDiv.innerHTML = '';
  if (hash === '#/' || hash === '/' || hash === '#' || hash === '') {
    rootDiv.appendChild(start());
  } else if (hash === '#/login') {
    rootDiv.appendChild(login());
  } else if (hash === '#/register') {
    rootDiv.appendChild(register());
  }
};
