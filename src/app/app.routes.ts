import {Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {MainComponent} from './components/main/main.component';
import {AuthGuard} from './guards/auth.guard';

export const routes: Routes = [
  {path: 'login', component: LoginComponent}, // Página de login
  {
    path: '',
    component: MainComponent, // Página principal após o login
    canActivate: [AuthGuard], // Proteção com AuthGuard
  },
  {
    path: 'logout',
    resolve: {
      logout: () => {
        // Lógica de logout
        localStorage.removeItem('authToken'); // Remove o token de autenticação
        sessionStorage.clear(); // Opcional: remove todos os dados da sessão
      },
    },
    redirectTo: 'login', // Redireciona para a página de login
    pathMatch: 'full',
  },
  {path: '**', redirectTo: ''}, // Redireciona para a página inicial se a rota não existir
];
