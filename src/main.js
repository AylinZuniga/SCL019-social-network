// Este es el punto de entrada de tu aplicacion

import { router } from './lib/router.js';
// import { register } from './templates/register.js';
// import { login } from './templates/login.js';

// start();
// login();
// register();

window.addEventListener('load', () => {
  router(window.location.hash);
});

window.addEventListener('hashchange', () => {
  router(window.location.hash);
});
