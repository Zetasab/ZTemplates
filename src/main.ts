import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

const redirect = sessionStorage.getItem('zt-redirect');
if (redirect) {
  sessionStorage.removeItem('zt-redirect');
  history.replaceState(null, '', redirect);
}

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
