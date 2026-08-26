import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { PoliticaPrivacidad } from './pages/politica-privacidad/politica-privacidad';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'politica-de-privacidad', component: PoliticaPrivacidad },
  { path: '**', redirectTo: '' },
];
